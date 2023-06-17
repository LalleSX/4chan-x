import $ from "../platform/$";
import Callbacks from "../classes/Callbacks";
import { g, Conf } from "../globals/globals";

var Time = {
  init() {
    if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Time Formatting']) { return; }

    Callbacks.Post.push({
      name: 'Time Formatting',
      cb:   this.node
    });
  },

  node() {
    if (!this.info.date || this.isClone) { return; }
    const {textContent} = this.nodes.date;
    this.nodes.date.textContent = textContent.match(/^\s*/)[0] + Time.format(Conf['time'], this.info.date) + textContent.match(/\s*$/)[0];
  },

  format(formatString: string, date: Date) {
    return formatString.replace(/%(.)/g, function(s, c) {
      if ($.hasOwn(Time.formatters, c)) {
        return Time.formatters[c].call(date);
      } else {
        return s;
      }
    });
  },

  zeroPad(n) { if (n < 10) { return `0${n}`; } else { return n; } },

  // Setting up the formatter takes more time than actually formatting the date,
  // So while setting up this cache is a bit more code, it's faster at runtime
  formatterCache: new Map<String, Intl.DateTimeFormat>(),

  formatters: {
    a() {
      let formatter = Time.formatterCache.get('a');
      if (!formatter) {
        formatter = Intl.DateTimeFormat(Conf['timeLocale'], {weekday: 'short'});
        Time.formatterCache.set('a', formatter)
      }
      return formatter.format(this);
    },
    A() {
      let formatter = Time.formatterCache.get('A');
      if (!formatter) {
        formatter = Intl.DateTimeFormat(Conf['timeLocale'], {weekday: 'long'});
        Time.formatterCache.set('A', formatter)
      }
      return formatter.format(this);
    },
    b() {
      let formatter = Time.formatterCache.get('b');
      if (!formatter) {
        formatter = Intl.DateTimeFormat(Conf['timeLocale'], {month: 'short'});
        Time.formatterCache.set('b', formatter)
      }
      return formatter.format(this);
    },
    B() {
      let formatter = Time.formatterCache.get('B');
      if (!formatter) {
        formatter = Intl.DateTimeFormat(Conf['timeLocale'], {month: 'long'});
        Time.formatterCache.set('B', formatter)
      }
      return formatter.format(this);
    },
    d() { return Time.zeroPad(this.getDate()); },
    e() { return this.getDate(); },
    H() { return Time.zeroPad(this.getHours()); },
    I() { return Time.zeroPad((this.getHours() % 12) || 12); },
    k() { return this.getHours(); },
    l() { return (this.getHours() % 12) || 12; },
    m() { return Time.zeroPad(this.getMonth() + 1); },
    M() { return Time.zeroPad(this.getMinutes()); },
    p() {
      let formatter = Time.formatterCache.get('p');
      if (!formatter) {
        formatter = Intl.DateTimeFormat(Conf['timeLocale'], {hour: 'numeric', hour12: true});
        Time.formatterCache.set('p', formatter)
      }
      const parts = formatter.formatToParts(this);
      return parts.find((entry) => entry.type === 'dayPeriod').value;
    },
    P() { return Time.formatters.p.call(this).toLowerCase(); },
    S() { return Time.zeroPad(this.getSeconds()); },
    y() { return this.getFullYear().toString().slice(2); },
    Y() { return this.getFullYear(); },
    '%'() { return '%'; }
  },
};
export default Time;

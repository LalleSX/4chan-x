// ==UserScript==
// @name         4chan XT
// @version      XT 2.1.3
// @minGMVer     1.14
// @minFFVer     74
// @namespace    4chan-XT
// @description  4chan XT is a script that adds various features to anonymous imageboards.
// @license      MIT; https://github.com/TuxedoTako/4chan-xt/blob/project-XT/LICENSE
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @include      http://sys.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      http://www.4chan.org/*
// @include      https://www.4chan.org/*
// @include      http://boards.4channel.org/*
// @include      https://boards.4channel.org/*
// @include      http://sys.4channel.org/*
// @include      https://sys.4channel.org/*
// @include      http://www.4channel.org/*
// @include      https://www.4channel.org/*
// @include      http://i.4cdn.org/*
// @include      https://i.4cdn.org/*
// @include      http://is.4chan.org/*
// @include      https://is.4chan.org/*
// @include      http://is2.4chan.org/*
// @include      https://is2.4chan.org/*
// @include      http://is.4channel.org/*
// @include      https://is.4channel.org/*
// @include      http://is2.4channel.org/*
// @include      https://is2.4channel.org/*
// @include      https://erischan.org/*
// @include      https://www.erischan.org/*
// @include      https://fufufu.moe/*
// @include      https://gnfos.com/*
// @include      https://himasugi.blog/*
// @include      https://www.himasugi.blog/*
// @include      https://kakashinenpo.com/*
// @include      https://www.kakashinenpo.com/*
// @include      https://kissu.moe/*
// @include      https://www.kissu.moe/*
// @include      https://lainchan.org/*
// @include      https://www.lainchan.org/*
// @include      https://merorin.com/*
// @include      https://ota-ch.com/*
// @include      https://www.ota-ch.com/*
// @include      https://ponyville.us/*
// @include      https://www.ponyville.us/*
// @include      https://smuglo.li/*
// @include      https://notso.smuglo.li/*
// @include      https://smugloli.net/*
// @include      https://smug.nepu.moe/*
// @include      https://sportschan.org/*
// @include      https://www.sportschan.org/*
// @include      https://sushigirl.us/*
// @include      https://www.sushigirl.us/*
// @include      https://tvch.moe/*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
// @exclude      http://www.4channel.org/advertise
// @exclude      https://www.4channel.org/advertise
// @exclude      http://www.4channel.org/advertise?*
// @exclude      https://www.4channel.org/advertise?*
// @exclude      http://www.4channel.org/donate
// @exclude      https://www.4channel.org/donate
// @exclude      http://www.4channel.org/donate?*
// @exclude      https://www.4channel.org/donate?*
// @connect      4chan.org
// @connect      4channel.org
// @connect      4cdn.org
// @connect      4chenz.github.io
// @connect      archive.4plebs.org
// @connect      warosu.org
// @connect      desuarchive.org
// @connect      boards.fireden.net
// @connect      arch.b4k.co
// @connect      archived.moe
// @connect      thebarchive.com
// @connect      archiveofsins.com
// @connect      www.tokyochronos.net
// @connect      archive.palanq.win
// @connect      eientei.xyz
// @connect      api.clyp.it
// @connect      api.dailymotion.com
// @connect      api.github.com
// @connect      soundcloud.com
// @connect      api.streamable.com
// @connect      vimeo.com
// @connect      www.youtube.com
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @run-at       document-start
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACVBMVEUAAGcAAABmzDNZt9VtAAAAAXRSTlMAQObYZgAAAF5JREFUeNrtkTESABAQxPD/R6tsE2dUGYUtFJvLDKf93KevHJAjpBorAQWSBIKqFASC4G0pCAkm4GfaEvgYXl0T6HBaE97f0vmnfYHbZOMLZCx9ISdKWwjOWZSC8GYm4SUGwfYgqI4AAAAASUVORK5CYII=
// ==/UserScript==
/*
* 4chan X
*
* Licensed under the MIT license.
* https://github.com/ccd0/4chan-x/blob/master/LICENSE
*
* Appchan X Copyright © 2013-2016 Zixaphir <zixaphirmoxphar@gmail.com>
* http://zixaphir.github.io/appchan-x/ 
* 4chan x Copyright © 2009-2011 James Campos <james.r.campos@gmail.com>
* https://github.com/aeosynth/4chan-x
* 4chan x Copyright © 2012-2014 Nicolas Stepien <stepien.nicolas@gmail.com>
* https://4chan-x.just-believe.in/
* 4chan x Copyright © 2013-2014 Jordan Bates <saudrapsmann@gmail.com>
* http://seaweedchan.github.io/4chan-x/
* 4chan x Copyright © 2012-2013 ihavenoface
* http://ihavenoface.github.io/4chan-x/
* 4chan SS Copyright © 2011-2013 Ahodesuka
* https://github.com/ahodesuka/4chan-Style-Script/ 
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
* Contributors:
* aeosynth
* mayhemydg
* noface
* !K.WeEabo0o
* blaise
* that4chanwolf
* desuwa
* seaweed
* e000
* ahodesuka
* Shou
* ferongr
* xat
* Ongpot
* thisisanon
* Anonymous
* Seiba
* herpaderpderp
* WakiMiko
* btmcsweeney
* AppleBloom
* detharonil
*
* All the people who've taken the time to write bug reports.
*
* Thank you.
*/

/*
* Contains data from external sources:
*
* src/Monitoring/ThreadUpdater/beep.wav from http://freesound.org/people/pierrecartoons1979/sounds/90112/
*   cc-by-nc-3.0
*
* Icons used to identify various websites are property of the respective websites.
*/

(function () {
  'use strict';

  var version = {
    "version": "XT 2.1.3",
    "date": "2023-08-21T18:04:11.719Z"
  };

  var meta = {
   "name": "4chan XT",
   "path": "4chan-XT",
   "fork": "TuxedoTako",
   "page": "https://github.com/TuxedoTako/4chan-xt",
   "downloads": "https://github.com/TuxedoTako/4chan-xt/releases",
   "oldVersions": "https://raw.githubusercontent.com/ccd0/4chan-x/",
   "faq": "https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions",
   "captchaFAQ": "https://github.com/ccd0/4chan-x/wiki/Captcha-FAQ",
   "cssGuide": "https://github.com/ccd0/4chan-x/wiki/Styling-Guide",
   "license": "https://github.com/TuxedoTako/4chan-xt/blob/project-XT/LICENSE",
   "changelog": "https://github.com/TuxedoTako/4chan-xt/blob/project-XT/CHANGELOG.md",
   "issues": "https://github.com/TuxedoTako/4chan-xt/issues",
   "newIssue": "https://github.com/TuxedoTako/4chan-xt/issues",
   "newIssueMaxLength": 8181,
   "alternatives": "https://www.4chan-x.net/4chan_alternatives.html",
   "appid": "lacclbnghgdicfifcamcmcnilckjamag",
   "appidGecko": "4chan-x@4chan-x.net",
   "chromeStoreID": "ohnjgmpcibpbafdlkimncjhflgedgpam",
   "recaptchaKey": "6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc",
   "distBranch": "gh-pages",
   "includes_only": [
    "*://boards.4chan.org/*",
    "*://sys.4chan.org/*",
    "*://www.4chan.org/*",
    "*://boards.4channel.org/*",
    "*://sys.4channel.org/*",
    "*://www.4channel.org/*",
    "*://i.4cdn.org/*",
    "*://is.4chan.org/*",
    "*://is2.4chan.org/*",
    "*://is.4channel.org/*",
    "*://is2.4channel.org/*"
   ],
   "matches_only": [
    "*://*.4chan.org/*",
    "*://*.4channel.org/*",
    "*://*.4cdn.org/*"
   ],
   "matches": [
    "https://erischan.org/*",
    "https://www.erischan.org/*",
    "https://fufufu.moe/*",
    "https://gnfos.com/*",
    "https://himasugi.blog/*",
    "https://www.himasugi.blog/*",
    "https://kakashinenpo.com/*",
    "https://www.kakashinenpo.com/*",
    "https://kissu.moe/*",
    "https://www.kissu.moe/*",
    "https://lainchan.org/*",
    "https://www.lainchan.org/*",
    "https://merorin.com/*",
    "https://ota-ch.com/*",
    "https://www.ota-ch.com/*",
    "https://ponyville.us/*",
    "https://www.ponyville.us/*",
    "https://smuglo.li/*",
    "https://notso.smuglo.li/*",
    "https://smugloli.net/*",
    "https://smug.nepu.moe/*",
    "https://sportschan.org/*",
    "https://www.sportschan.org/*",
    "https://sushigirl.us/*",
    "https://www.sushigirl.us/*",
    "https://tvch.moe/*"
   ],
   "matches_extra": [],
   "exclude_matches": [
    "*://www.4chan.org/advertise",
    "*://www.4chan.org/advertise?*",
    "*://www.4chan.org/donate",
    "*://www.4chan.org/donate?*",
    "*://www.4channel.org/advertise",
    "*://www.4channel.org/advertise?*",
    "*://www.4channel.org/donate",
    "*://www.4channel.org/donate?*"
   ],
   "grants": [
    "GM_getValue",
    "GM_setValue",
    "GM_deleteValue",
    "GM_listValues",
    "GM_addValueChangeListener",
    "GM_openInTab",
    "GM_xmlhttpRequest",
    "GM.getValue",
    "GM.setValue",
    "GM.deleteValue",
    "GM.listValues",
    "GM.openInTab",
    "GM.xmlHttpRequest"
   ],
   "min": {
    "chrome": "80",
    "firefox": "74",
    "greasemonkey": "1.14"
   }
  };

  const Conf = Object.create(null);
  const g = {
      VERSION: version.version,
      NAMESPACE: meta.name,
      sites: Object.create(null),
      boards: Object.create(null)
  };
  const E = (function () {
      const str = {
          '&': '&amp;',
          "'": '&#039;',
          '"': '&quot;',
          '<': '&lt;',
          '>': '&gt;'
      };
      const regex = /[&"'<>]/g;
      const fn = function (x) {
          return str[x];
      };
      const output = function (text) {
          return text.toString().replace(regex, fn);
      };
      output.cat = function (templates) {
          let html = '';
          for (let i = 0; i < templates.length; i++) {
              html += templates[i].innerHTML;
          }
          return html;
      };
      return output;
  })();
  const d$1 = document;
  const doc$1 = d$1.documentElement;
  const c = console;
  const docSet = function () {
      // return (doc = d.documentElement);
      return doc$1;
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS206: Consider reworking classes to avoid initClass
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class Callbacks {
    static initClass() {
      this.Post          = new Callbacks('Post');
      this.Thread        = new Callbacks('Thread');
      this.CatalogThread = new Callbacks('Catalog Thread');
      this.CatalogThreadNative = new Callbacks('Catalog Thread');
    }

    constructor(type) {
      this.type = type;
      this.keys = [];
    }

    push({name, cb}) {
      if (!this[name]) { this.keys.push(name); }
      return this[name] = cb;
    }

    execute(node, keys=this.keys, force=false) {
      let errors;
      if (node.callbacksExecuted && !force) { return; }
      node.callbacksExecuted = true;
      for (var name of keys) {
        try {
          this[name]?.call(node);
        } catch (err) {
          if (!errors) { errors = []; }
          errors.push({
            message: ['"', name, '" crashed on node ', this.type, ' No.', node.ID, ' (', node.board, ').'].join(''),
            error: err,
            html: node.nodes?.root?.outerHTML
          });
        }
      }

      if (errors) { return Main$1.handleErrors(errors); }
    }
  }
  Callbacks.initClass();

  var userCss = `/* Board title rice */
div.boardTitle {
  font-weight: 400 !important;
}
:root.yotsuba div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(100,0,0,0.6);
}
:root.yotsuba-b div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(105,10,15,0.6);
}
:root.photon div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(0,74,153,0.6);
}
:root.tomorrow div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(167,170,168,0.6);
}
`;

  var banners = ["0.jpg", "1.jpg", "2.jpg", "4.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "24.jpg", "25.jpg", "26.jpg", "28.jpg", "29.jpg", "33.jpg", "38.jpg", "39.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "52.jpg", "54.jpg", "57.jpg", "59.jpg", "60.jpg", "61.jpg", "64.jpg", "66.jpg", "67.jpg", "69.jpg", "71.jpg", "72.jpg", "76.jpg", "77.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "88.jpg", "90.jpg", "91.jpg", "96.jpg", "98.jpg", "99.jpg", "100.jpg", "104.jpg", "106.jpg", "116.jpg", "119.jpg", "137.jpg", "140.jpg", "148.jpg", "149.jpg", "150.jpg", "154.jpg", "156.jpg", "157.jpg", "158.jpg", "159.jpg", "161.jpg", "162.jpg", "164.jpg", "165.jpg", "166.jpg", "167.jpg", "168.jpg", "169.jpg", "170.jpg", "171.jpg", "172.jpg", "173.jpg", "174.jpg", "175.jpg", "176.jpg", "178.jpg", "179.jpg", "180.jpg", "181.jpg", "182.jpg", "183.jpg", "186.jpg", "189.jpg", "190.jpg", "192.jpg", "193.jpg", "194.jpg", "197.jpg", "198.jpg", "200.jpg", "201.jpg", "202.jpg", "203.jpg", "205.jpg", "206.jpg", "207.jpg", "208.jpg", "210.jpg", "213.jpg", "214.jpg", "215.jpg", "216.jpg", "218.jpg", "219.jpg", "220.jpg", "221.jpg", "222.jpg", "223.jpg", "224.jpg", "227.jpg", "0.png", "1.png", "2.png", "3.png", "5.png", "6.png", "9.png", "10.png", "11.png", "12.png", "14.png", "16.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", "34.png", "37.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "48.png", "49.png", "50.png", "51.png", "52.png", "53.png", "57.png", "58.png", "59.png", "64.png", "66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png", "76.png", "78.png", "79.png", "81.png", "82.png", "85.png", "86.png", "87.png", "89.png", "95.png", "98.png", "100.png", "101.png", "102.png", "105.png", "106.png", "107.png", "109.png", "110.png", "111.png", "112.png", "113.png", "114.png", "115.png", "116.png", "118.png", "119.png", "120.png", "121.png", "122.png", "123.png", "126.png", "128.png", "130.png", "134.png", "136.png", "138.png", "139.png", "140.png", "142.png", "145.png", "146.png", "149.png", "150.png", "151.png", "152.png", "153.png", "154.png", "155.png", "156.png", "157.png", "158.png", "159.png", "160.png", "163.png", "164.png", "165.png", "166.png", "167.png", "168.png", "169.png", "170.png", "171.png", "172.png", "173.png", "174.png", "178.png", "179.png", "180.png", "181.png", "182.png", "184.png", "186.png", "188.png", "190.png", "192.png", "193.png", "194.png", "195.png", "196.png", "197.png", "198.png", "200.png", "202.png", "203.png", "205.png", "206.png", "207.png", "209.png", "212.png", "213.png", "214.png", "216.png", "217.png", "218.png", "219.png", "220.png", "221.png", "222.png", "223.png", "224.png", "225.png", "226.png", "229.png", "231.png", "232.png", "233.png", "234.png", "235.png", "237.png", "238.png", "239.png", "240.png", "241.png", "242.png", "244.png", "245.png", "246.png", "247.png", "248.png", "249.png", "250.png", "253.png", "254.png", "255.png", "256.png", "257.png", "258.png", "259.png", "260.png", "262.png", "268.png", "0.gif", "1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif", "9.gif", "10.gif", "12.gif", "13.gif", "14.gif", "15.gif", "16.gif", "18.gif", "19.gif", "20.gif", "21.gif", "22.gif", "23.gif", "24.gif", "28.gif", "29.gif", "30.gif", "33.gif", "34.gif", "35.gif", "36.gif", "37.gif", "39.gif", "40.gif", "42.gif", "44.gif", "45.gif", "46.gif", "48.gif", "50.gif", "52.gif", "54.gif", "55.gif", "57.gif", "58.gif", "59.gif", "60.gif", "61.gif", "63.gif", "64.gif", "66.gif", "67.gif", "68.gif", "69.gif", "70.gif", "72.gif", "73.gif", "75.gif", "76.gif", "77.gif", "78.gif", "80.gif", "81.gif", "82.gif", "83.gif", "86.gif", "87.gif", "88.gif", "92.gif", "93.gif", "94.gif", "95.gif", "96.gif", "97.gif", "98.gif", "99.gif", "100.gif", "101.gif", "102.gif", "103.gif", "104.gif", "105.gif", "106.gif", "108.gif", "109.gif", "110.gif", "111.gif", "112.gif", "113.gif", "115.gif", "116.gif", "117.gif", "118.gif", "119.gif", "120.gif", "122.gif", "123.gif", "124.gif", "127.gif", "129.gif", "130.gif", "131.gif", "134.gif", "135.gif", "136.gif", "138.gif", "139.gif", "141.gif", "144.gif", "146.gif", "148.gif", "149.gif", "153.gif", "154.gif", "155.gif", "157.gif", "158.gif", "159.gif", "160.gif", "161.gif", "162.gif", "164.gif", "166.gif", "167.gif", "168.gif", "169.gif", "170.gif", "171.gif", "172.gif", "173.gif", "174.gif", "175.gif", "176.gif", "177.gif", "178.gif", "181.gif", "182.gif", "183.gif", "185.gif", "186.gif", "187.gif", "188.gif", "189.gif", "190.gif", "191.gif", "192.gif", "193.gif", "195.gif", "196.gif", "197.gif", "200.gif", "201.gif", "202.gif", "203.gif", "204.gif", "205.gif", "206.gif", "207.gif", "208.gif", "209.gif", "210.gif", "211.gif", "212.gif", "213.gif", "214.gif", "215.gif", "216.gif", "217.gif", "219.gif", "220.gif", "221.gif", "222.gif", "224.gif", "225.gif", "226.gif", "227.gif", "228.gif", "230.gif", "232.gif", "233.gif", "234.gif", "235.gif", "238.gif", "240.gif", "241.gif", "243.gif", "244.gif", "245.gif", "246.gif", "247.gif", "249.gif", "250.gif", "251.gif", "253.gif"];

  const Config = {
    main: {
      'Miscellaneous': {
        'Redirect to HTTPS': [
          true,
          'Redirect to the HTTPS version of 4chan.'
        ],
        'JSON Index': [
          true,
          'Replace the original board index with one supporting searching, sorting, infinite scrolling, and a catalog mode.'
        ],
        [`Use ${meta.name} Catalog`]: [
          true,
          `Link to ${meta.name}'s catalog instead of the native 4chan one.`,
          1
        ],
        'Index Refresh Notifications': [
          false,
          'Show a notice at the top of the page when the index is refreshed.',
          1
        ],
        'Follow Cursor': [
          true,
          'Image Hover and Quote Preview move with the mouse cursor.'
        ],
        'Open Threads in New Tab': [
          false,
          `Make links to threads in the index / ${meta.name} catalog open in a new tab.`
        ],
        'External Catalog': [
          false,
          'Link to external catalog instead of the internal one.'
        ],
        'Catalog Links': [
          false,
          'Add toggle link in header menu to turn Navigation links into links to each board\'s catalog.'
        ],
        'Announcement Hiding': [
          true,
          'Add button to hide 4chan announcements.'
        ],
        'Desktop Notifications': [
          true,
          `Enables desktop notifications across various ${meta.name} features.`
        ],
        '404 Redirect': [
          true,
          'Redirect dead threads and images to the archives.'
        ],
        'Archive Report': [
          true,
          'Enable reporting posts to supported archives.'
        ],
        'Exempt Archives from Encryption': [
          true,
          'Permit loading content from, and warningless redirects to, HTTP-only archives from HTTPS pages.'
        ],
        'Keybinds': [
          true,
          'Bind actions to keyboard shortcuts.'
        ],
        'Time Formatting': [
          true,
          'Localize and format timestamps.'
        ],
        'Relative Post Dates': [
          true,
          'Display dates like "3 minutes ago". Tooltip shows the timestamp.'
        ],
        'Relative Date Title': [
          true,
          'Show Relative Post Date only when hovering over dates.',
          1
        ],
        'Comment Expansion': [
          true,
          'Expand comments that are too long to display on the index. Not applicable with JSON Index.'
        ],
        'File Info Formatting': [
          true,
          'Reformat the file information.'
        ],
        'Thread Expansion': [
          true,
          'Add buttons to expand threads.'
        ],
        'Index Navigation': [
          false,
          'Add buttons to navigate between threads.'
        ],
        'Reply Navigation': [
          false,
          'Add buttons to navigate to top / bottom of thread.'
        ],
        'Unique ID and Capcode Navigation': [
          false,
          'Add buttons to navigate to posts having the same unique ID or capcode.'
        ],
        'Custom Board Titles': [
          true,
          'Allow editing of the board title and subtitle by ctrl/\u2318+clicking them.'
        ],
        'Persistent Custom Board Titles': [
          false,
          'Force custom board titles to be persistent, even if the board titles are updated.',
          1
        ],
        'Show Updated Notifications': [
          true,
          `Show notifications when ${meta.name} is successfully updated.`
        ],
        'Color User IDs': [
          true,
          'Assign unique colors to user IDs on boards that use them'
        ],
        'Count Posts by ID': [
          true,
          'Display number of posts in the thread when hovering over an ID.'
        ],
        'Remove Spoilers': [
          false,
          'Remove all spoilers in text.'
        ],
        'Reveal Spoilers': [
          false,
          'Indicate spoilers if Remove Spoilers is enabled, or make the text appear hovered if Remove Spoiler is disabled.'
        ],
        'Normalize URL': [
          true,
          'Rewrite the URL of the current page, removing slugs and excess slashes, and changing /res/ to /thread/.'
        ],
        'Work around CORB Bug': [
          true,
          'Leave this checked until your garbage browser is fixed.'
        ],
        'Disable Autoplaying Sounds': [
          false,
          'Prevent sounds on the page from autoplaying.'
        ],
        'Disable Native Extension': [
          true,
          `${meta.name} is NOT designed to work with the native extension.`
        ],
        'Enable Native Flash Embedding': [
          true,
          'Activate the native extension\'s Flash embedding if the native extension is disabled.'
        ]
      },

      'Linkification': {
        'Linkify': [
          true,
          'Convert text into links where applicable.'
        ],
        'Link Title': [
          true,
          'Replace the link of a supported site with its actual title.',
          1
        ],
        'Cover Preview': [
          true,
          'Show preview of supported links on hover.',
          1
        ],
        'Embedding': [
          true,
          'Embed supported services. Note: Some services don\'t work on HTTPS.',
          1
        ],
        'Auto-embed': [
          false,
          'Auto-embed Linkify Embeds.',
          2
        ],
        'Floating Embeds': [
          false,
          'Embed content in a frame that remains in place when the page is scrolled.',
          2
        ]
      },

      'Filtering': {
        'Anonymize': [
          false,
          'Make everyone Anonymous.'
        ],
        'Filter': [
          true,
          'Self-moderation placebo.'
        ],
        'Filtered Backlinks': [
          false,
          'When enabled, shows backlinks to filtered posts with a line-through decoration. Otherwise, hides the backlinks.',
          1
        ],
        'Filter in Native Catalog': [
          true,
          'Apply 4chan X filters in native catalog.',
          1
        ],
        'MD5 Quick Filter Notifications': [
          true,
          'Show notification when quick filtering MD5s using the button or keybind.',
          1
        ],
        'Recursive Hiding': [
          true,
          'Hide replies of hidden posts, recursively.'
        ],
        'Thread Hiding Buttons': [
          true,
          'Add buttons to hide entire threads.'
        ],
        'Reply Hiding Buttons': [
          true,
          'Add buttons to hide single replies.'
        ],
        'Stubs': [
          true,
          'Show stubs of hidden threads / replies.'
        ]
      },

      'Images and Videos': {
        'Image Expansion': [
          true,
          'Expand images / videos.'
        ],
        'Image Hover': [
          true,
          'Show full image / video on mouseover.'
        ],
        'Image Hover in Catalog': [
          true,
          `Show full image / video on mouseover in ${meta.name} catalog.`
        ],
        'Gallery': [
          true,
          'Adds a simple and cute image gallery. Has more options in the gallery menu.'
        ],
        'Fullscreen Gallery': [
          false,
          'Open gallery in fullscreen mode.',
          1
        ],
        'PDF in Gallery': [
          false,
          'Show PDF files in gallery.',
          1
        ],
        'Sauce': [
          true,
          'Add sauce links to images.'
        ],
        'WEBM Metadata': [
          true,
          'Add link to fetch title metadata from webm videos.'
        ],
        'Reveal Spoiler Thumbnails': [
          false,
          'Replace spoiler thumbnails with the original image.'
        ],
        'Replace GIF': [
          false,
          'Replace gif thumbnails with the actual image.'
        ],
        'Replace JPG': [
          false,
          'Replace jpg thumbnails with the actual image.'
        ],
        'Replace PNG': [
          false,
          'Replace png thumbnails with the actual image.'
        ],
        'Replace WEBM': [
          false,
          'Replace webm, mp4, and ogv thumbnails with the actual video. Probably will degrade browser performance ;)'
        ],
        'Image Prefetching': [
          true,
          'Add a shortcut icon to the header to turn on image preloading.'
        ],
        'Fappe Tyme': [
          true,
          'Hide posts without images when header menu item is checked. *hint* *hint*'
        ],
        'Werk Tyme': [
          true,
          'Hide all post images when header menu item is checked.'
        ],
        'Autoplay': [
          true,
          'Videos begin playing immediately when opened.'
        ],
        'Restart when Opened': [
          false,
          'Restart GIFs and WebMs when you hover over or expand them.'
        ],
        'Show Controls': [
          true,
          'Show controls on videos expanded inline.'
        ],
        'Click Passthrough': [
          false,
          'Clicks on videos trigger your browser\'s default behavior. Videos can be contracted with button / dragging to the left.',
          1
        ],
        'Allow Sound': [
          true,
          'Open videos with the sound unmuted.'
        ],
        'Mouse Wheel Volume': [
          true,
          'Adjust volume of videos with the mouse wheel over the thumbnail/filename/gallery.'
        ],
        'Loop in New Tab': [
          true,
          'Loop videos opened in their own tabs.'
        ],
        'Volume in New Tab': [
          true,
          `Apply ${meta.name} mute and volume settings to videos opened in their own tabs.`
        ],
        'Enable sound posts': [
          true,
          'Enable loading audio from [sound=] file names. This audio is fetched from third parties.'
        ],
      },

      'Menu': {
        'Menu': [
          true,
          'Add a drop-down menu to posts.'
        ],
        'Report Link': [
          true,
          'Add a report link to the menu.',
          1
        ],
        'Copy Text Link': [
          true,
          'Add a link to copy the post\'s text.',
          1
        ],
        'Thread Hiding Link': [
          true,
          'Add a link to hide entire threads.',
          1
        ],
        'Reply Hiding Link': [
          true,
          'Add a link to hide single replies.',
          1
        ],
        'Delete Link': [
          true,
          'Add post and image deletion links to the menu.',
          1
        ],
        'Archive Link': [
          true,
          'Add an archive link to the menu.',
          1
        ],
        'Edit Link': [
          true,
          'Add a link to edit the image in Tegaki, /i/\'s painting program. Requires Quick Reply.',
          1
        ],
        'Download Link': [
          false,
          'Add a download with original filename link to the menu.',
          1
        ]
      },

      'Monitoring': {
        'Thread Updater': [
          true,
          'Fetch and insert new replies. Has more options in the header menu and the "Advanced" tab.'
        ],
        'Unread Count': [
          true,
          'Show the unread posts count in the tab title.'
        ],
        'Quoted Title': [
          false,
          'Change the page title to reflect you\'ve been quoted.',
          1
        ],
        'Hide Unread Count at (0)': [
          false,
          'Hide the unread posts count in the tab title when it reaches 0.',
          1
        ],
        'Unread Favicon': [
          true,
          'Show a different favicon when there are unread posts.'
        ],
        'Unread Line': [
          true,
          'Show a line to distinguish read posts from unread ones.'
        ],
        'Remember Last Read Post': [
          true,
          'Remember how far you\'ve read after you close the thread.'
        ],
        'Scroll to Last Read Post': [
          true,
          'Scroll back to the last read post when reopening a thread.',
          1
        ],
        'Unread Line in Index': [
          false,
          'Show a line between read and unread posts in threads in the index.',
          1
        ],
        'Remove Thread Excerpt': [
          false,
          'Replace the excerpt of the thread in the tab title with the board title.'
        ],
        'Thread Stats': [
          true,
          'Display reply and image count.'
        ],
        'IP Count in Stats': [
          true,
          'Display the unique IP count in the thread stats.',
          1
        ],
        'Page Count in Stats': [
          true,
          'Display the page count in the thread stats.',
          1
        ],
        'Updater and Stats in Header': [
          true,
          'Places the thread updater and thread stats in the header instead of floating them.'
        ],
        'Thread Watcher': [
          true,
          'Bookmark threads. Has more options in the thread watcher menu.'
        ],
        'Fixed Thread Watcher': [
          true,
          'Makes the thread watcher scroll with the page.',
          1
        ],
        'Persistent Thread Watcher': [
          false,
          'The thread watcher will be visible when the page is loaded.',
          1
        ],
        'Mark New IPs': [
          false,
          'Label each post from a new IP with the thread\'s current IP count.'
        ],
        'Reply Pruning': [
          true,
          'Add option in header menu to hide old replies in long threads. Activated by default in stickies.'
        ],
        'Prune All Threads': [
          false,
          'Activate Reply Pruning by default in all threads.',
          1
        ]
      },

      'Posting and Captchas': {
        'Quick Reply': [
          true,
          'All-in-one form to reply, create threads, automate dumping and more.'
        ],
        'Persistent QR': [
          false,
          'The Quick reply won\'t disappear after posting.',
          1
        ],
        'Auto Hide QR': [
          true,
          'Automatically hide the quick reply when posting.',
          2
        ],
        'Open Post in New Tab': [
          true,
          'Open new threads in a new tab, and open replies in a new tab if you\'re not already in the thread.',
          1
        ],
        'Remember QR Size': [
          false,
          'Remember the size of the Quick reply.',
          1
        ],
        'Remember Spoiler': [
          false,
          'Remember the spoiler state, instead of resetting after posting.',
          1
        ],
        'Randomize Filename': [
          false,
          'Set the filename to a random timestamp within the past year. Disabled on /f/.',
          1
        ],
        'Show New Thread Option in Threads': [
          true,
          'Show the option to post a new / different thread from inside a thread.',
          1
        ],
        'Show Upload Progress': [
          true,
          'Track progress of file uploads as percentage in submit button.',
          1
        ],
        'Cooldown': [
          true,
          'Indicate the remaining time before posting again.',
          1
        ],
        'Posting Success Notifications': [
          true,
          'Show notifications on successful post creation or file uploading.',
          1
        ],
        'Auto-load captcha': [
          false,
          'Automatically load the captcha in the QR even if your post is empty.',
          1
        ],
        'Post on Captcha Completion': [
          false,
          'Submit the post immediately when the captcha is completed.',
          1
        ],
        'Force Noscript Captcha': [
          false,
          'Use the non-Javascript fallback captcha even if Javascript is enabled.'
        ],
        'Pass Link': [
          false,
          'Add a 4chan Pass login link to the bottom of the page.'
        ]
      },

      'Quote Links': {
        'Quote Backlinks': [
          true,
          'Add quote backlinks.'
        ],
        'OP Backlinks': [
          true,
          'Add backlinks to the OP.',
          1
        ],
        'Bottom Backlinks': [
          false,
          'Place backlinks at the bottom of posts.',
          1
        ],
        'Quote Inlining': [
          true,
          'Inline quoted post on click.'
        ],
        'Inline Cross-thread Quotes Only': [
          false,
          'Don\'t inline quote links when the posts are visible in the thread.',
          1
        ],
        'Quote Hash Navigation': [
          false,
          'Include an extra link after quotes for autoscrolling to quoted posts.',
          1
        ],
        'Forward Hiding': [
          true,
          'Hide original posts of inlined backlinks.',
          1
        ],
        'Quote Previewing': [
          true,
          'Show quoted post on hover.'
        ],
        'Quote Highlighting': [
          true,
          'Highlight the previewed post.',
          1
        ],
        'Resurrect Quotes': [
          true,
          'Link dead quotes to the archives, and support inlining/previewing of archive links like quote links.'
        ],
        'Remember Your Posts': [
          true,
          'Remember your posting history.'
        ],
        'Mark Quotes of You': [
          true,
          'Add \'(You)\' to quotes linking to your posts.',
          1
        ],
        'Highlight Posts Quoting You': [
          true,
          'Highlights any posts that contain a quote to your post.',
          1
        ],
        'Highlight Own Posts': [
          true,
          'Highlights own posts.',
          1
        ],
        'Mark OP Quotes': [
          true,
          'Add \'(OP)\' to OP quotes.'
        ],
        'Mark Cross-thread Quotes': [
          true,
          'Add \'(Cross-thread)\' to cross-threads quotes.'
        ],
        'Quote Threading': [
          true,
          'Add option in header menu to thread conversations.'
        ]
      }
    },

    imageExpansion: {
      'Fit width': [
        true,
        ''
      ],
      'Fit height': [
        false,
        ''
      ],
      'Scroll into view': [
        true,
        'Scroll down when expanding images to bring the full image into view.'
      ],
      'Expand spoilers': [
        true,
        'Expand all images along with spoilers.'
      ],
      'Expand videos': [
        true,
        'Expand all images also expands videos.'
      ],
      'Expand from here': [
        false,
        'Expand all images only from current position to thread end.'
      ],
      'Expand thread only': [
        false,
        'In index, expand all images only within the current thread.'
      ],
      'Advance on contract': [
        false,
        'Advance to next post when contracting an expanded image.'
      ]
    },

    gallery: {
      'Hide Thumbnails': [
        false
      ],
      'Fit Width': [ // 'Fit width' (lowercase W) belongs to Image Expansion. Engine limitations, heh.
        true
      ],
      'Fit Height': [
        true
      ],
      'Stretch to Fit': [
        false
      ],
      'Scroll to Post': [
        true
      ],
      'Slide Delay': [
        6.0
      ]
    },

    'Default Volume': 1.0,

    threadWatcher: {
      'Current Board': [
        false,
        'Only show watched threads from the current board.'
      ],
      'Auto Update Thread Watcher': [
        true,
        'Periodically check status of watched threads.'
      ],
      'Auto Watch': [
        true,
        'Automatically watch threads you start.'
      ],
      'Auto Watch Reply': [
        true,
        'Automatically watch threads you reply to.'
      ],
      'Auto Prune': [
        false,
        'Automatically remove dead threads.'
      ],
      'Show Page': [
        true,
        'Show what page watched threads are on.'
      ],
      'Show Unread Count': [
        true,
        'Show number of unread posts in watched threads.'
      ],
      'Show Site Prefix': [
        true,
        'When multiple sites are shown in the thread watcher, add a prefix to board names to distinguish them.'
      ],
      'Require OP Quote Link': [
        false,
        'For purposes of thread watcher highlighting, only consider posts with a quote link to the OP as replies to the OP.'
      ]
    },

    filter: {
      general: '',

      postID: `\
# Highlight dubs on [s4s]:
#/(\\d)\\1$/;highlight;top:no;boards:s4s\
`,

      name: `\
# Filter any namefags:
#/^(?!Anonymous$)/\
`,

      uniqueID: `\
# Filter a specific ID:
#/Txhvk1Tl/\
`,

      tripcode: `\
# Filter any tripfag
#/^!/\
`,

      capcode: `\
# Set a custom class for mods:
#/Mod$/;highlight:mod;op:yes
# Set a custom class for admins:
#/Admin$/;highlight:admin;op:yes\
`,

      pass: `\
# Filter anyone using since4pass:
#/./\
`,

      email: '',

      subject: `\
# Filter Generals on /v/:
#/general/i;boards:v;op:only\
`,

      comment: `\
# Filter Stallman copypasta on /g/:
#/what you\'re refer+ing to as linux/i;boards:g
# Filter posts with 20 or more quote links:
#/(?:>>\\d(?:(?!>>\\d)[^])*){20}/
# Filter posts like T H I S / H / I / S:
#/^>?\\s?\\w\\s?(\\w)\\s?(\\w)\\s?(\\w).*$[\\s>]+\\1[\\s>]+\\2[\\s>]+\\3/im\
`,

      flag: '',
      filename: '',
      dimensions: `\
# Highlight potential wallpapers:
#/1920x1080/;op:yes;highlight;top:no;boards:w,wg\
`,

      filesize: '',

      MD5: ''
    },

    sauces: `\
# Known filename formats:
https://www.pixiv.net/member_illust.php?mode=medium&illust_id=%$1;regexp:/^(\\d+)_p\\d+/
javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/
https://imgur.com/%$1;regexp:/^(?![a-zA-Z][a-z]{6})(?![A-Z]{7})(?!\\d{7})([\\da-zA-Z]{7})(?: \\(\\d+\\))?\\.\\w+$/
https://flickr.com/photo.gne?id=%$1;regexp:/^(\\d+)_[\\da-f]{10}(?:_\\w)*\\b/
https://www.facebook.com/photo.php?fbid=%$1;regexp:/^\\d+_(\\d+)_\\d+_[no]\\b/

# Reverse image search:
https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%IMG&safe=off
https://yandex.com/images/search?rpt=imageview&url=%IMG
#//tineye.com/search?url=%IMG
#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights
#https://lens.google.com/uploadbyurl?url=%IMG;text:lens

# Specialized reverse image search:
//iqdb.org/?url=%IMG
https://trace.moe/?auto&url=%IMG;text:wait
#//3d.iqdb.org/?url=%IMG
#//saucenao.com/search.php?url=%IMG

# "View Same" in archives:
http://eye.swfchan.com/search/?q=%name;types:swf
#https://desuarchive.org/_/search/image/%sMD5/
#https://archive.4plebs.org/_/search/image/%sMD5/
#https://boards.fireden.net/_/search/image/%sMD5/
#https://foolz.fireden.net/_/search/image/%sMD5/

# Other tools:
#http://exif.regex.info/exif.cgi?imgurl=%URL
#//imgops.com/start?url=%URL;types:gif,jpg,png
#//www.gif-explode.com/%URL;types:gif\
`,

    FappeT: {
      werk:  false
    },

    'Custom CSS': true,

    Index: {
      'Index Mode': 'paged',
      'Previous Index Mode': 'paged',
      'Index Size': 'small',
      'Show Replies':          [true,  'Show replies in the index, and also in the catalog if "Catalog hover expand" is checked.'],
      'Catalog Hover Expand':  [false, 'Expand the comment and show more details when you hover over a thread in the catalog.'],
      'Catalog Hover Toggle':  [true,  'Turn "Catalog hover expand" on and off by clicking in the catalog.'],
      'Pin Watched Threads':   [false, 'Move watched threads to the start of the index.'],
      'Anchor Hidden Threads': [true,  'Move hidden threads to the end of the index.'],
      'Refreshed Navigation':  [false, 'Refresh index when navigating through pages.']
    },

    Header: {
      'Fixed Header':               true,
      'Header auto-hide':           false,
      'Header auto-hide on scroll': false,
      'Bottom Header':              false,
      'Centered links':             false,
      'Header catalog links':       false,
      'Bottom Board List':          true,
      'Shortcut Icons':             true,
      'Custom Board Navigation':    true
    },

    archives: {
      archiveLists:      'https://4chenz.github.io/archives.json/archives.json',
      lastarchivecheck:  0,
      archiveAutoUpdate: true
    },

    externalCatalogURLs: `\
//catalog.neet.tv/%board/;boards:4chan.org:3,a,adv,an,asp,biz,c,cgl,ck,cm,co,diy,f,fa,fit,g,gd,his,i,int,jp,k,lgbt,lit,m,mlp,mu,n,news,o,out,p,po,pol,s4s,sci,sp,tg,toy,trv,tv,v,vg,vip,vp,vr,w,wg,wsg,wsr,x\
`,

    boardnav: `\
[ toggle-all ]
[current-index-text:"Index"
current-catalog-text:"Catalog"
current-expired-text:"Expired"
current-archive-text:"Archive"]
[external-text:"FAQ","${meta.name}"]\
`,

    QR: {
      'QR.personas': `\
#options:"sage";boards:jp;always\
`,
      sjisPreview: false
    },

    jsWhitelist: `\
http://s.4cdn.org
https://s.4cdn.org
http://www.google.com
https://www.google.com
https://www.gstatic.com
http://cdn.mathjax.org
https://cdn.mathjax.org
https://cdnjs.cloudflare.com
https://hcaptcha.com
https://*.hcaptcha.com
'self'
'unsafe-inline'
'unsafe-eval'\
`,

    captchaLanguage: '',

    time: '%m/%d/%y(%a)%H:%M:%S',
    timeLocale: '',

    backlink: '>>%id',

    pastedname: 'file',

    fileInfo: '%l %d (%p%s, %r%g)',

    favicon: 'ferongr',

    usercss: userCss,

    hotkeys: {
      // QR & Options
      'Toggle board list': [
        'Ctrl+b',
        'Toggle the full board list.'
      ],
      'Toggle header': [
        'Shift+h',
        'Toggle the auto-hide option of the header.'
      ],
      'Open empty QR': [
        'q',
        'Open QR without post number inserted.'
      ],
      'Open QR': [
        'Shift+q',
        'Open QR with post number inserted.'
      ],
      'Open settings': [
        'Alt+o',
        'Open Settings.'
      ],
      'Close': [
        'Esc',
        'Close dialogs or notifications.'
      ],
      'Spoiler tags': [
        'Ctrl+s',
        'Insert spoiler tags.'
      ],
      'Code tags': [
        'Alt+c',
        'Insert code tags.'
      ],
      'Eqn tags':  [
        'Alt+e',
        'Insert eqn tags.'
      ],
      'Math tags': [
        'Alt+m',
        'Insert math tags.'
      ],
      'SJIS tags': [
        'Alt+a',
        'Insert SJIS tags.'
      ],
      'Toggle sage': [
        'Alt+s',
        'Toggle sage in options field.'
      ],
      'Toggle Cooldown': [
        'Alt+Comma',
        'Toggle custom cooldown timer.'
      ],
      'Post from URL': [
        'Alt+l',
        'Post from URL.'
      ],
      'Add new post': [
        'Alt+n',
        'Add new post to the QR dump list.'
      ],
      'Submit QR': [
        'Ctrl+Enter',
        'Submit post.'
      ],
      // Thread related
      'Watch': [
        'w',
        'Watch thread.'
      ],
      'Update': [
        'r',
        'Update the thread / refresh the index.'
      ],
      'Update thread watcher': [
        'Shift+r',
        'Manually refresh thread watcher.'
      ],
      'Toggle thread watcher': [
        't',
        'Toggle visibility of thread watcher.'
      ],
      'Toggle threading': [
        'Shift+t',
        'Toggle threading.'
      ],
      'Mark thread read': [
        'Ctrl+0',
        'Mark thread read from index (requires "Unread Line in Index").'
      ],
      // Images
      'Expand image': [
        'Shift+e',
        'Expand selected image.'
      ],
      'Expand images': [
        'e',
        'Expand all images.'
      ],
      'Open Gallery': [
        'g',
        'Opens the gallery.'
      ],
      'Next Gallery Image': [
        'Right',
        'Go to the next image in gallery mode.'
      ],
      'Previous Gallery Image': [
        'Left',
        'Go to the previous image in gallery mode.'
      ],
      'Advance Gallery': [
        'Enter',
        'Go to next image or, if Autoplay is off, play video.'
      ],
      'Pause': [
        'p',
        'Pause/play videos in the gallery.'
      ],
      'Slideshow': [
        'Ctrl+Right',
        'Toggle the gallery slideshow mode.'
      ],
      'Rotate image clockwise': [
        'Shift+Right',
        'Rotate image clockwise in gallery.'
      ],
      'Rotate image anticlockwise': [
        'Shift+Left',
        'Rotate image anticlockwise in gallery.'
      ],
      'Download Gallery Image': [
        'Shift+j',
        'Download current image in gallery.'
      ],
      'fappeTyme': [
        'f',
        'Toggle Fappe Tyme.'
      ],
      'werkTyme': [
        'Shift+w',
        'Toggle Werk Tyme.'
      ],
      // Board Navigation
      'Front page': [
        '1',
        'Jump to front page.'
      ],
      'Open front page': [
        'Shift+1',
        'Open front page in a new tab.'
      ],
      'Next page': [
        'Ctrl+Right',
        'Jump to the next page.'
      ],
      'Previous page': [
        'Ctrl+Left',
        'Jump to the previous page.'
      ],
      'Paged mode': [
        'Alt+1',
        'Open the index in paged mode.'
      ],
      'Infinite scrolling mode': [
        'Alt+2',
        'Open the index in infinite scrolling mode.'
      ],
      'All pages mode': [
        'Alt+3',
        'Open the index in all threads mode.'
      ],
      'Open catalog': [
        'Shift+c',
        'Open the catalog of the current board.'
      ],
      'Search form': [
        'Ctrl+Alt+s',
        'Focus the search field on the board index.'
      ],
      'Cycle sort type': [
        'Alt+x',
        'Cycle through index sort types.'
      ],
      // Thread Navigation
      'Next thread': [
        'Ctrl+Down',
        'See next thread.'
      ],
      'Previous thread': [
        'Ctrl+Up',
        'See previous thread.'
      ],
      'Expand thread': [
        'Ctrl+e',
        'Expand thread.'
      ],
      'Open thread': [
        'o',
        'Open thread in current tab.'
      ],
      'Open thread tab': [
        'Shift+o',
        'Open thread in new tab.'
      ],
      // Reply Navigation
      'Next reply': [
        'j',
        'Select next reply.'
      ],
      'Previous reply': [
        'k',
        'Select previous reply.'
      ],
      'Deselect reply': [
        'Shift+d',
        'Deselect reply.'
      ],
      'Hide': [
        'x',
        'Hide thread.'
      ],
      'Quick Filter MD5': [
        '5',
        'Add the MD5 of the selected image to the filter list.'
      ],
      'Previous Post Quoting You': [
        'Alt+Up',
        'Scroll to the previous post that quotes you.'
      ],
      'Next Post Quoting You': [
        'Alt+Down',
        'Scroll to the next post that quotes you.'
      ]
    },

    updater: {
      checkbox: {
        'Beep': [
          false,
          'Beep on new post to completely read thread.'
        ],
        'Beep Quoting You': [
          false,
          'Beep on new post quoting you.'
        ],
        'Auto Scroll': [
          false,
          'Scroll updated posts into view. Only enabled at bottom of page.'
        ],
        'Bottom Scroll': [
          false,
          'Always scroll to the bottom, not the first new post. Useful for event threads.'
        ],
        'Scroll BG': [
          false,
          'Auto-scroll background tabs.'
        ],
        'Auto Update': [
          true,
          'Automatically fetch new posts.'
        ],
        'Optional Increase': [
          false,
          'Increase the intervals between updates on threads without new posts.'
        ]
      },
      'Interval': 5
    },

    customCooldown: 0,
    customCooldownEnabled: true,

    'Thread Quotes': false,

    'Max Replies': 1000,

    'Autohiding Scrollbar': false,

    position: {
      'embedding.position':      'top: 50px; right: 0px;',
      'thread-stats.position':   'bottom: 0px; right: 0px;',
      'updater.position':        'bottom: 0px; left: 0px;',
      'thread-watcher.position': 'top: 50px; left: 0px;',
      'qr.position':             'top: 50px; right: 0px;'
    },

    fourchanImageHost: 'i.4cdn.org',

    hiddenPSAList: [{}],

    knownBanners: banners.join(','),

    passMessageClosed: false,

    'Prerequest Captcha': false,

    'PSAseen': [[]]
  };

  var QuickReplyPage = `<div class="move">
  <label>
    <input type="checkbox" id="autohide" title="Auto-hide">
    Quick Reply
  </label>
  <a href="javascript:;" class="close" title="Close">×</a>
  <select data-name="thread" title="Create a new thread / Reply">
    <option value="new">New thread</option>
  </select>
</div>
<form>
  <div class="persona">
    <button type="button" id="sjis-toggle" title="Toggle Mona font">∀</button>
    <button type="button" id="tex-preview-button" title="Preview TeX">T<sub>E</sub>X</button>
    <input name="name" data-name="name" list="list-name" placeholder="Name" class="field" size="1">
    <input name="email" data-name="email" list="list-email" placeholder="Options" class="field" size="1">
    <input name="sub" data-name="sub" list="list-sub" placeholder="Subject" class="field" size="1">
  </div>
  <div class="textarea">
    <textarea data-name="com" placeholder="Comment" class="field"></textarea>
    <span id="char-count"></span>
    <div id="tex-preview"></div>
  </div>
  <div id="dump-list-container">
    <div id="dump-list"></div>
    <a id="add-post" href="javascript:;" title="Add a post">+</a>
  </div>
  <div class="oekaki" hidden>
    <input type="button" id="qr-draw-button" value="Draw">
    <label><span>Width:</span><input name="oekaki-width" value="400" type="number" class="field" size="1"></label>
    <label><span>Height:</span><input name="oekaki-height" value="400" type="number" class="field" size="1"></label>
    <span class="oekaki-bg" title="Background Color"><input name="oekaki-bg" type="checkbox" checked><input name="oekaki-bgcolor" type="color" value="#ffffff"></span>
  </div>
  <div id="file-n-submit">
    <input type="button" id="qr-file-button" value="Files">
    <span id="qr-filename-container" class="field">
      <span id="qr-no-file">No selected file</span>
      <input id="qr-filename" data-name="filename" spellcheck="false">
      <label id="qr-spoiler-label">
        <input type="checkbox" id="qr-file-spoiler" title="Spoiler image">
        <a class="checkbox-letter">S</a>
      </label>
      <a id="qr-oekaki-button" title="Edit in Tegaki">✎︎</a>
      <a href="javascript:;" id="qr-filerm" title="Remove file">✕</a>
      <a id="url-button" title="Post from URL">🔗︎</a>
      <a hidden id="paste-area" title="Select to paste images" tabindex="-1" contentEditable="true">📋︎</a>
      <a id="custom-cooldown-button" title="Toggle custom cooldown" class="disabled">🕒︎</a>
      <a id="dump-button" title="Dump list">+</a>
    </span>
    <input type="submit">
  </div>
  <select data-default="4" name="filetag">
    <option value="0">Hentai</option>
    <option value="6">Porn</option>
    <option value="1">Japanese</option>
    <option value="2">Anime</option>
    <option value="3">Game</option>
    <option value="5">Loop</option>
    <option value="4" selected>Other</option>
  </select>
  <input type="file" multiple>
</form>
<datalist id="list-name"></datalist>
<datalist id="list-email"></datalist>
<datalist id="list-sub"></datalist>
`;

  var ferongr_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///9zBQC/AADpDAP/gID/q6voCwJJTwpOAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC';

  var ferongr_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR42q1TOwrCQBB9s0FRtJI0WoqFtSLYegoP4gVSeJsUHsHSI3iFeIqRXXgwrhlXwYHHhLwPTB7B36abBCV+0pA4DUBQUNZYQptGtW3jtoKyxgoe0yrBCoyZfL/5ioQ3URZOXW9I341l3oo+NXEZiW4CEuIzvPECopED4OaZ3RNmeAm4u+a8Jr5f17VyVoL8fr8qcltzwlyyj2iqcgPOQ9ExkHAITgD75bYBe0A5S4H/P9htuWMF3QXoQpwaKeT+lnsC6JE5I6aq6fEAAAAASUVORK5CYII=';

  var ferongr_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8AcH4AtswA2PJ55fKi6fIA1/FtpPADAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC';

  var ferongr_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4y2NgoBq4/vE/HJOsBiRQUIfA2AzBqQYqUfn00/9FLz+BaQxDCKqBmX7jExijKEDSDJPHrnnbGQhGV4RmOFwdVkNwhQMheYwQxhaIi7b9Z9A3gWAQm2BUoQOgRhgA8o7j1ozLC4LCyAZcx6kZI5qg4kLKqggDFFWxJySsUQVzlb4pwgAJaTRvokcVNgOqOv8zcHBCsL07DgNg8YsczzA5MxtUL+DMD8g0slxI/H8GQ/P/DJKyeKIRpglXZsIiBwBhP5O+VbI/JgAAAABJRU5ErkJggg==';

  var ferongr_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8oeQBJ3ABV/wHM/7Lu/+ZU/gAqUP3dAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC';

  var ferongr_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4y2NgoBYI+cfwH4ZJVgMS0KhEYGyG4FQDkzjzf9P/d/+fgWl0QwiqgSkI/c8IxsgKkDXD5LFq9rwDweiK0A2HqcNqCK5wICSPEcLYAtH+AMN/IXMIBrEJRie6OEgjDAC5x3FqxuUFNiEUA67j1IweTTBxBQ1puAG86jgSEraogskJWSBcwCGF5k30qMJmgMFEhv/MXBAs5oLDAFj8IsczTE7UEeECbhU8+QGZRpaTi2b4L2zF8J9TGk80wjThykzY5AAW/2O1C2mIbgAAAABJRU5ErkJggg==';

  var xat_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAG1BMVEX+AACLkZFub2yfaF3zZGIAAAD/AAD/iYr/zs8IPcF6AAAABXRSTlMAeprJ7xzg6IEAAABZSURBVAjXY2DABKGBSkqioQwMrGmpxsZhaQEMDGFpIa5pqSCRtPDSNJBIaGh5eShQDYOye0V7iREKAyQFYoiCFAcyILQDGcGmEEZYkGoqiMHKysAQEICwGwAAjBmBqhYlagAAAABJRU5ErkJggg==';

  var xat_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEUAAACEgoBva2ilamDxcG7IaWYgFBNOSEf//f0PDQwBAAA7LCwAAAD/AAD+hIX+m5z+zc5HAADPAAAGAADl032uAAAADHRSTlMAzNv0/vz+6v3+7ALrmfyXAAAAaUlEQVQY042PyxKAIAhFAc1eV7T6/3/N8VXOtAgWwBm4ANEPA8AswpySXHvvYZLlpBNrh9pDtcSqAQ1BUTVIjNUQY5icmwfglmXNgE0d6QBF9GigrU0A9LoM53U1kFzk6SBQuWfD/vHqDUCpBmVKTTM4AAAAAElFTkSuQmCC';

  var xat_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACRjop4dXVpZ2tdcI9dfKdisfMAAAAumMN9xv+s2/+PADT2AAAAB3RSTlMAepGdv83v3HIc4QAAAFxJREFUCNdjYMAE5YXKRuLlDAzsHe2uIRUdBQwMFR1l6R3tIJGOyukdIJHy8lkry4FqGEwzV62aFozMUAFJOQEZ4iDFhQwI7UBGaTiEUVFs3g5isLMzMBQUIOwGAJRlIu9hk08QAAAAAElFTkSuQmCC';

  var xat_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAACAgYVlc4ljsu4AAAAAAAAAAAAumMODyP6b1P6e1f/g8v89msgSIiwNFxwbPU3tQYj5AAAABnRSTlMAxej+9VTmD9ciAAAAZElEQVQI12NgwARpiUKKYmkMDGzlZUpK6eUJDAzp5clm5WUgkfKMtnKQSFpa54o0oBoGJYvZO88+gjJu7wMyhIBS2SCGGFDxaxADpP32NjAjSe0bSFd6epIaWISNjYEhJRVhNwAGlyJpYtcvcAAAAABJRU5ErkJggg==';

  var xat_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUfJSCRi5Frbm9dn19082KR/30AAABmzDOq/5vZ/9Gt/vt2AAAABnRSTlMAe5rJ7/4vxEp4AAAAWUlEQVQI12NgwARpiUpKYmkMDGzlZcbG6eUJDAzp5Slu5WUgkfLUsHKQSFpaRGsaUA2DsmvnjBAjFAZICsQQAylOZEBoBzKSzSCM9CS1MhCDjY2BISEBYTcAtgAcKSK2vuIAAAAASUVORK5CYII=';

  var xat_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAACBj39tfm1qj2RepFlu2VQAAQAAAAAAAABmyzOX/oSr/pus/pzk/98PGgtatC4CBAI1ENblAAAACHRSTlMA09/p9v77ig0SBcQAAABnSURBVBjTjY9LDsAgCEQRsR2xWu9/2hK/adJFYQG8wABEPwyAYzNnSatjjPAiviWLhPCqI1R7HBrQdCmGBrEETTmnUAq/QMm5dODHyAQOXXR1zLUGsIEI7lonMGfeHQTq9xw4P159AIxSBSC53km7AAAAAElFTkSuQmCC';

  var Mayhem_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4AZ2R4WqEMBCEFy1yiJQQ14gcIhIuFBFR+qPQ93+v66QMksrlTwMfkZ2ZZbMKTgVqYIDl3YAbeCM31lJP/Zul4MAEPJjBQGNDLGsz8PQ6aqLAP5PTdd1WlmU09mSKtdTDRgrkzspJPKq6RxMahfj9yhOzQEZwZAwfzrk1ox3MXibIN8hO4MAjeV72CemJGWblnRsOYOdoGw0jebB20BPAwKzUQPlrFhrXFw1Wagu9yuzZwINzVAZCURRL+gRr7Wd8Vtqg4Th/lsUmewyk9WQ/A7NiwJz5VV/GmO+MNjMrFvh/NPDMigHTaeJN09a27ZHRJmalBg54CgfvAGYSLpoHjlmpuAwFdzDy7oGS/qIpM9UPFGg1b1kUlssAAAAASUVORK5CYII=';

  var Mayhem_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4AYWSQWq0QBCFCw0SRIK0PQ4hiIhEZBhEySLyewUPEMgqR/JIXiDhzz7kKKYePIZajEzDRxfV9dWU3SO6IiVWUsVxT5R75Y4gTmwNnUh4kCulUiuV8sjChDjmKtaUcHgmHsnNrMPh0IVhiMIjKZGzNXDoyhMzF7C89z2KtFGD+FoNXEUKZdgpaPM8P++cDXTtBDca7EyQK8+bXTufYBccuvLAG26UnqN1LCgI4g/lm7zTgSux4vk0J8rnKw3+m1//pBPbBrVyGZVNmiAITviEtm3t+D+2QcJx7GUxlN4594K4ZY75Xzh0JVWqnad6TdP0H+LRNBjHcYNDV5xS32qwaC4my7Lwn6guu5QoomgbdFmWDYhnM8E8zxscuhLzPWtKA/dGqUizrityX9M0YX+DQ1ciXobnP6vgfmTOM7Znnk70B58pPaEvx+epAAAAAElFTkSuQmCC';

  var Mayhem_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4AZ3RUWqEMBSF4ftQZAhSREQJIiIXpQwi+tSldkFdWPsLhyEE0ocKH2Fyzg1mNJ4KAQ1arTUeeJMH6qwTUJmCHjMcC6KKtbSIylzdXpl18J/k4fdTpUFmPLOOa9bGe+P4+n5RYYfLXuiMsAlXofBxK2QXpvwN/jqg+AY91vR+pStk+apZe0fEhhMXDhUmWXEoO9WNmrWAzvRPq7jnB2jvUGfWTEgPcJzZFTbZk/0Tnh5QI+af6lVGvq/Do2atwVL4VJ+3QrZo1lr4Pw5wzVqDWaV7SUvHrZDNmrWAHq7g0rphkS3LXDMBVqFGhxGT1gGdDFnWaab6BRmXRvbxDmYiAAAAAElFTkSuQmCC';

  var Mayhem_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQElEQVR4AY2SQUrEQBBFS9CMNFEkhAQdYmiCIUgcZlYGc4VsBcGVF/AuWXme4F7RtXiVWF9+Y9MYtOHRTdX/NZWaEj2RYpQTJeEdK4fKPuA7DjSGXiQkU0qlUqxySmFMEsYsNSU8zEmK4OwdEbmkKCclYoGmolfWCGyenh1O0EJE2gXNWpFC2S0IGrCQ29EbdPCPAmEHmXIxByf8hDAPD71yzAnXypatbSgoAN8Pyju5h4deMUrqJk1z+0uBN+/XX+gxfoFK2QafUJO2aRq//Q+/QIx2wr+Kwq0rusrP/QKf9MTCtbQLf9U1wNvYnz3qug45S68kSvVXgbPbx3nvYPXNOI7cRPWySukK+DcGCvA+urqZ3RmGAbmSXjFK5rpwW8nhWVJP04TYa9/3uO/goVciDiPlZhW8c8ZAHuRSeqIv32FK/GYGL8YAAAAASUVORK5CYII=';

  var Mayhem_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4AZ3RUWqEMBSF4ftQZAihDCKKiAQJShERQx+6o662e2p/4TCEQF468BEm95yLovFr4PBEq9PjgTd5wBcZp6559AiIWDAq6KXV3aJMUMfDOsTf7Mf/XaFBAvYiE9W16b74/vl8UeBAlKOSmWAzUiXwcavMkrrFE9QXVJ+gx5q9XvUVivmqrr1jxIYLCacCs6y6S8psGNU1hw4Bu4JHuUB3pzJBHZcviLiKV9jkyO4vxHyBx1h+qlcY5b2Wj+raE0vlU33dKrNFXWsR/7EgqmtPBIXuIw+dt8osqGsOPaIGSeeGRbZiFtVxsAYeHSbMOgd0MhSzTp3mD4RaQX4aW3NMAAAAAElFTkSuQmCC';

  var Mayhem_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4AYWS0UqFQBCGhziImNRBRImDmUgiIaF0kWSP4AMEXXXTE/QiPpL3UdR19Crb/PAvLEtyFj5mmfn/cdxd0RUokbJXEsZYCZUd4D72NBG8wkKmlEqtVMoFhTFJmKuoKelBTVIkjbNE5IainJTIeZqaXjkg8fp+Z7GCjiLQbWgOihTKsCFowUZtoNef4HgDf4JMuTbe8n/Br8NDr5zxhBul52i3FBQE+xflmzzTA69ESmpPmubunwZfztc/6IncBrXSe7/QkK5tW3f8H7dBjHH8q6Kwt033V6Hb4JeeWPgsq42rugfYZ92psWscRwMPvZIo9bEGD2+F2YUnBizLwpeoXnYpbQM34kAB9peP58aueZ4NPPRKxPusaRoYG6UizbquyH1O04T4RA+8EvAwUr6sgjFnDuReLaUn+ANygUa7+9SCWgAAAABJRU5ErkJggg==';

  var fourChanJS_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAD/AABnZ2f///8nFk05AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC';

  var fourChanJS_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAD/AABmZmYA/wBD99DBAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=';

  var fourChanJS_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAAul8NnZ2f////82iC9AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC';

  var fourChanJS_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAAul8NnZ2f/AAD7B+mqAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=';

  var fourChanJS_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUBAAAAAABmzDNlyjJnZ2f///+6o7dfAAAAAXRSTlMAQObYZgAAAERJREFUeF6NjkEKADEIA51o///lJZfQxUsHITogWi8AvwZJuxmYa25xDooBLEwOWFTYAsYVhdorLZt9Ng9xCUTCUCQ2H3F4ANrZ2WNiAAAAAElFTkSuQmCC';

  var fourChanJS_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAABmzDNmZmb/AAC8/wCMAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=';

  var Original_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX/////AAD///8AAABBZmS3AAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=';

  var Original_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR42q1RwQnAMAjMu5M4guAKXa4j5dUROo5tipSDcrFChUONd0di2m/hEGVOHDyIPufgwAFASDkpoSzmBrkJ2UMyR9LsJ3rvrqo3Rt1YMIMhhNnOxLMnoMFBxHyJAr2IOBFzA8U+6pLBdmEJTA0aMVjpDd6Loks0s5HZNwYx8tfZCZ0kll7ORffZAAAAAElFTkSuQmCC';

  var Original_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///8ul8P///8AAACaqgkzAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=';

  var Original_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAABBQcHFx4KISoNLToaVW4oKCgul8M4ODg7OzvBwcH///8uS/CdAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eILZO5/XI0UAgm7H9tOsu0yGWAQSOoFijHOxOANGqm/LczpOaXs4gISrPZ+gc2+hO5w2xdwgOjBFUIF+sEJrhUl9JFr+badFwR+BfqlmGUJAAAAAElFTkSuQmCC';

  var Original_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///9mzDP///8AAACT0n1lAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=';

  var Original_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAAECAIQIAgWLAsePA8oKCg4ODg6dB07OztmzDPBwcH///+rsf3XAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eIDhbn/cTVSCCTsfmw7ybbLZIBBIKkXKKU0E4M3aKT+tjCn5xiziwuIsNr7BTb7ErrDZV/AAaIHdwgV6AcnuFaU0Eeu5dt2XiUyBjCQ2bIrAAAAAElFTkSuQmCC';

  var Metro_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAC/AABrZQDiAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==';

  var Metro_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAC/AAD///8dAAApAABsAAAHAAA4AACQAAAsAABMCpCvAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=';

  var Metro_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAA1/GhpCidAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==';

  var Metro_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAAA1/H///8AISUALzQAeokACAkAQEcAorYAMTcE9WFNAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=';

  var Metro_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAABV/wErM5hwAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==';

  var Metro_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAABV/wH///8NKAASOAAwkQADCgAZTABAwQATOwC5e3VGAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=';

  var dead = 'R0lGODlhEAAQAKECAAAAAP8AAP///////yH5BAEKAAIALAAAAAAQABAAAAIvlI+pq+D9DAgUoFkPDlbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==';

  var empty = 'R0lGODlhEAAQAJEAAAAAAP///9vb2////yH5BAEAAAMALAAAAAAQABAAAAIvnI+pq+D9DBAUoFkPFnbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==';

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var Favicon = {
    init() {
      return $$1.asap((() => d$1.head && (Favicon.el = $$1('link[rel="shortcut icon"]', d$1.head))), Favicon.initAsap);
    },

    set(status) {
      Favicon.status = status;
      if (Favicon.el) {
        Favicon.el.href = Favicon[status];
        // `favicon.href = href` doesn't work on Firefox.
        return $$1.add(d$1.head, Favicon.el);
      }
    },

    initAsap() {
      Favicon.el.type = 'image/x-icon';
      const {href}          = Favicon.el;
      Favicon.isSFW   = /ws\.ico$/.test(href);
      Favicon.default = href;
      Favicon.switch();
      if (Favicon.status) {
        return Favicon.set(Favicon.status);
      }
    },

    switch() {
      let items = {
        ferongr: [
          ferongr_unreadDead,
          ferongr_unreadDeadY,
          ferongr_unreadSFW,
          ferongr_unreadSFWY,
          ferongr_unreadNSFW,
          ferongr_unreadNSFWY,
        ],
        'xat-': [
          xat_unreadDead,
          xat_unreadDeadY,
          xat_unreadSFW,
          xat_unreadSFWY,
          xat_unreadNSFW,
          xat_unreadNSFWY,
        ],
        Mayhem: [
          Mayhem_unreadDead,
          Mayhem_unreadDeadY,
          Mayhem_unreadSFW,
          Mayhem_unreadSFWY,
          Mayhem_unreadNSFW,
          Mayhem_unreadNSFWY,
        ],
        '4chanJS': [
          fourChanJS_unreadDead,
          fourChanJS_unreadDeadY,
          fourChanJS_unreadSFW,
          fourChanJS_unreadSFWY,
          fourChanJS_unreadNSFW,
          fourChanJS_unreadNSFWY,
        ],
        Original: [
          Original_unreadDead,
          Original_unreadDeadY,
          Original_unreadSFW,
          Original_unreadSFWY,
          Original_unreadNSFW,
          Original_unreadNSFWY,
        ],
        'Metro': [
          Metro_unreadDead,
          Metro_unreadDeadY,
          Metro_unreadSFW,
          Metro_unreadSFWY,
          Metro_unreadNSFW,
          Metro_unreadNSFWY,
        ]
      };
      items = $$1.getOwn(items, Conf['favicon']);

      const f = Favicon;
      const t = 'data:image/png;base64,';
      let i = 0;
      while (items[i]) {
        items[i] = t + items[i++];
      }

      [f.unreadDead, f.unreadDeadY, f.unreadSFW, f.unreadSFWY, f.unreadNSFW, f.unreadNSFWY] = items;
      return f.update();
    },

    update() {
      if (this.isSFW) {
        this.unread  = this.unreadSFW;
        return this.unreadY = this.unreadSFWY;
      } else {
        this.unread  = this.unreadNSFW;
        return this.unreadY = this.unreadNSFWY;
      }
    },

    SFW:   '//s.4cdn.org/image/favicon-ws.ico',
    NSFW:  '//s.4cdn.org/image/favicon.ico',
    dead: `data:image/gif;base64,${dead}`,
    logo: `data:image/png;base64,${empty}`,
  };

  const $$ = (selector, root = d$1.body) => Array.from(root.querySelectorAll(selector));

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const CaptchaReplace = {
    init() {
      if ((g.SITE.software !== 'yotsuba') || (d$1.cookie.indexOf('pass_enabled=1') >= 0)) { return; }

      if (Conf['Force Noscript Captcha'] && Main$1.jsEnabled) {
        $$1.ready(Captcha.replace.noscript);
        return;
      }

      if (Conf['captchaLanguage'].trim()) {
        if (['boards.4chan.org', 'boards.4channel.org'].includes(location.hostname)) {
          return $$1.onExists(doc$1, '#captchaFormPart', node => $$1.onExists(node, 'iframe[src^="https://www.google.com/recaptcha/"]', Captcha.replace.iframe));
        } else {
          return $$1.onExists(doc$1, 'iframe[src^="https://www.google.com/recaptcha/"]', Captcha.replace.iframe);
        }
      }
    },

    noscript() {
      let noscript, original, toggle;
      if (!((original = $$1('#g-recaptcha')) && (noscript = $$1('noscript', original.parentNode)))) { return; }
      const span = $$1.el('span',
        {id: 'captcha-forced-noscript'});
      $$1.replace(noscript, span);
      $$1.rm(original);
      const insert = function() {
        span.innerHTML = noscript.textContent;
        return Captcha.replace.iframe($$1('iframe[src^="https://www.google.com/recaptcha/"]', span));
      };
      if (toggle = $$1('#togglePostFormLink a, #form-link')) {
        return $$1.on(toggle, 'click', insert);
      } else {
        return insert();
      }
    },

    iframe(iframe) {
      let lang;
      if (lang = Conf['captchaLanguage'].trim()) {
        const src = /[?&]hl=/.test(iframe.src) ?
          iframe.src.replace(/([?&]hl=)[^&]*/, '$1' + encodeURIComponent(lang))
        :
          iframe.src + `&hl=${encodeURIComponent(lang)}`;
        if (iframe.src !== src) { iframe.src = src; }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const CaptchaT = {
    init() {
      if (d$1.cookie.indexOf('pass_enabled=1') >= 0) { return; }
      if (!(this.isEnabled = !!$$1('#t-root') || !$$1.id('postForm'))) { return; }

      const root = $$1.el('div', {className: 'captcha-root'});
      this.nodes = {root};

      $$1.addClass(QR.nodes.el, 'has-captcha', 'captcha-t');
      return $$1.after(QR.nodes.com.parentNode, root);
    },

    moreNeeded() {
    },

    getThread() {
      let threadID;
      const boardID = g.BOARD.ID;
      if (QR.posts[0].thread === 'new') {
        threadID = '0';
      } else {
        threadID = '' + QR.posts[0].thread;
      }
      return {boardID, threadID};
    },

    setup(focus) {
      if (!this.isEnabled) { return; }

      if (!this.nodes.container) {
        this.nodes.container = $$1.el('div', {className: 'captcha-container'});
        $$1.prepend(this.nodes.root, this.nodes.container);
        CaptchaT.currentThread = CaptchaT.getThread();
        $$1.global(function() {
          const el = document.querySelector('#qr .captcha-container');
          window.TCaptcha.init(el, this.boardID, +this.threadID);
          return window.TCaptcha.setErrorCb(err => window.dispatchEvent(new CustomEvent('CreateNotification', {detail: {
            type: 'warning',
            content: '' + err
          }})
          ));
        }
        , CaptchaT.currentThread);
      }

      if (focus) {
        return $$1('#t-resp').focus();
      }
    },

    destroy() {
      if (!this.isEnabled || !this.nodes.container) { return; }
      $$1.global(() => window.TCaptcha.destroy());
      $$1.rm(this.nodes.container);
      return delete this.nodes.container;
    },

    updateThread() {
      if (!this.isEnabled) { return; }
      const {boardID, threadID} = (CaptchaT.currentThread || {});
      const newThread = CaptchaT.getThread();
      if ((newThread.boardID !== boardID) || (newThread.threadID !== threadID)) {
        CaptchaT.destroy();
        return CaptchaT.setup();
      }
    },

    getOne() {
      let el;
      let response = {};
      if (this.nodes.container) {
        for (var key of ['t-response', 't-challenge']) {
          response[key] = $$1(`[name='${key}']`, this.nodes.container).value;
        }
      }
      if (!response['t-response'] && !((el = $$1('#t-msg')) && /Verification not required/i.test(el.textContent))) {
        response = null;
      }
      return response;
    },

    setUsed() {
      if (!this.isEnabled) { return; }
      if (this.nodes.container) {
        return $$1.global(() => window.TCaptcha.clearChallenge());
      }
    },

    occupied() {
      return !!this.nodes.container;
    }
  };

  // This file was created because these functions on $ were sometimes not initialized yet because of circular
  // dependencies, so try to keep this file without dependencies, so these functions don't have to wait for something else
  const debounce = (wait, fn) => {
      let lastCall = 0;
      let timeout = null;
      let that = null;
      let args = null;
      const exec = function () {
          lastCall = Date.now();
          return fn.apply(that, args);
      };
      return function () {
          args = arguments;
          that = this;
          if (lastCall < (Date.now() - wait)) {
              return exec();
          }
          // stop current reset
          clearTimeout(timeout);
          // after wait, let next invocation execute immediately
          return timeout = setTimeout(exec, wait);
      };
  };
  const dict = () => Object.create(null);
  dict.clone = function (obj) {
      if ((typeof obj !== 'object') || (obj === null)) {
          return obj;
      }
      else if (obj instanceof Array) {
          const arr = [];
          for (let i = 0, end = obj.length; i < end; i++) {
              arr.push(dict.clone(obj[i]));
          }
          return arr;
      }
      else {
          const map = Object.create(null);
          for (var key in obj) {
              var val = obj[key];
              map[key] = dict.clone(val);
          }
          return map;
      }
  };
  dict.json = (str) => dict.clone(JSON.parse(str));
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const platform = window.GM_xmlhttpRequest ? 'userscript' : 'crx';

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS206: Consider reworking classes to avoid initClass
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class DataBoard {
    static initClass() {
      this.keys = ['hiddenThreads', 'hiddenPosts', 'lastReadPosts', 'yourPosts', 'watchedThreads', 'watcherLastModified', 'customTitles'];

      this.changes = [];
    }

    constructor(key, sync, dontClean) {
      this.onSync = this.onSync.bind(this);
      this.key = key;
      this.initData(Conf[this.key]);
      $$1.sync(this.key, this.onSync);
      if (!dontClean) { this.clean(); }
      if (!sync) { return; }
      // Chrome also fires the onChanged callback on the current tab,
      // so we only start syncing when we're ready.
      var init = () => {
        $$1.off(d$1, '4chanXInitFinished', init);
        return this.sync = sync;
      };
      $$1.on(d$1, '4chanXInitFinished', init);
    }

    initData(data) {
      let boards;
      this.data = data;
      if (this.data.boards) {
        let lastChecked;
        ({boards, lastChecked} = this.data);
        this.data['4chan.org'] = {boards, lastChecked};
        delete this.data.boards;
        delete this.data.lastChecked;
      }
      return this.data[g.SITE.ID] || (this.data[g.SITE.ID] = { boards: dict() });
    }

    save(change, cb) {
      change();
      DataBoard.changes.push(change);
      return $$1.get(this.key, { boards: dict() }, items => {
        if (!DataBoard.changes.length) { return; }
        const needSync = ((items[this.key].version || 0) > (this.data.version || 0));
        if (needSync) {
          this.initData(items[this.key]);
          for (change of DataBoard.changes) { change(); }
        }
        DataBoard.changes = [];
        this.data.version = (this.data.version || 0) + 1;
        return $$1.set(this.key, this.data, () => {
          if (needSync) { this.sync?.(); }
          return cb?.();
        });
      });
    }

    forceSync(cb) {
      return $$1.get(this.key, { boards: dict() }, items => {
        if ((items[this.key].version || 0) > (this.data.version || 0)) {
          this.initData(items[this.key]);
          for (var change of DataBoard.changes) { change(); }
          this.sync?.();
        }
        return cb?.();
      });
    }

    delete({siteID, boardID, threadID, postID}, cb) {
      if (!siteID) { siteID = g.SITE.ID; }
      if (!this.data[siteID]) { return; }
      return this.save(() => {
        if (postID) {
          if (!this.data[siteID].boards[boardID]?.[threadID]) { return; }
          delete this.data[siteID].boards[boardID][threadID][postID];
          return this.deleteIfEmpty({siteID, boardID, threadID});
        } else if (threadID) {
          if (!this.data[siteID].boards[boardID]) { return; }
          delete this.data[siteID].boards[boardID][threadID];
          return this.deleteIfEmpty({siteID, boardID});
        } else {
          return delete this.data[siteID].boards[boardID];
        }
      }
      , cb);
    }

    deleteIfEmpty({siteID, boardID, threadID}) {
      if (!this.data[siteID]) { return; }
      if (threadID) {
        if (!Object.keys(this.data[siteID].boards[boardID][threadID]).length) {
          delete this.data[siteID].boards[boardID][threadID];
          return this.deleteIfEmpty({siteID, boardID});
        }
      } else if (!Object.keys(this.data[siteID].boards[boardID]).length) {
        return delete this.data[siteID].boards[boardID];
      }
    }

    set(data, cb) {
      return this.save(() => {
        return this.setUnsafe(data);
      }
      , cb);
    }

    setUnsafe({siteID, boardID, threadID, postID, val}) {
      if (!siteID) { siteID = g.SITE.ID; }
      if (!this.data[siteID]) { this.data[siteID] = { boards: dict() }; }
      if (postID !== undefined) {
        let base;
        return (((base = this.data[siteID].boards[boardID] || (this.data[siteID].boards[boardID] = dict())))[threadID] || (base[threadID] = dict()))[postID] = val;
      } else if (threadID !== undefined) {
        return (this.data[siteID].boards[boardID] || (this.data[siteID].boards[boardID] = dict()))[threadID] = val;
      } else {
        return this.data[siteID].boards[boardID] = val;
      }
    }

    extend({siteID, boardID, threadID, postID, val}, cb) {
      return this.save(() => {
        const oldVal = this.get({ siteID, boardID, threadID, postID, defaultValue: dict() });
        for (var key in val) {
          var subVal = val[key];
          if (typeof subVal === 'undefined') {
            delete oldVal[key];
          } else {
            oldVal[key] = subVal;
          }
        }
        return this.setUnsafe({siteID, boardID, threadID, postID, val: oldVal});
      }
      , cb);
    }

    setLastChecked(key='lastChecked') {
      return this.save(() => {
        return this.data[key] = Date.now();
      });
    }

    get({siteID, boardID, threadID, postID, defaultValue}) {
      let board, val;
      if (!siteID) { siteID = g.SITE.ID; }
      if (board = this.data[siteID]?.boards[boardID]) {
        let thread;
        if (threadID == null) {
          if (postID != null) {
            for (thread = 0; thread < board.length; thread++) {
              board[thread];
              if (postID in thread) {
                val = thread[postID];
                break;
              }
            }
          } else {
            val = board;
          }
        } else if (thread = board[threadID]) {
          val = (postID != null) ?
            thread[postID]
          :
            thread;
        }
      }
      return val || defaultValue;
    }

    clean() {
      let boardID, middle;
      const siteID = g.SITE.ID;
      for (boardID in this.data[siteID].boards) {
        this.data[siteID].boards[boardID];
        this.deleteIfEmpty({siteID, boardID});
      }
      const now = Date.now();
      if (now - (2 * HOUR) >= ((middle = this.data[siteID].lastChecked || 0)) || middle > now) {
        this.data[siteID].lastChecked = now;
        for (boardID in this.data[siteID].boards) {
          this.ajaxClean(boardID);
        }
      }
    }

    ajaxClean(boardID) {
      const that = this;
      const siteID = g.SITE.ID;
      const threadsList = g.SITE.urls.threadsListJSON?.({siteID, boardID});
      if (!threadsList) { return; }
      return $$1.cache(threadsList, function() {
        if (this.status !== 200) { return; }
        const archiveList = g.SITE.urls.archiveListJSON?.({siteID, boardID});
        if (!archiveList) { return that.ajaxCleanParse(boardID, this.response); }
        const response1 = this.response;
        return $$1.cache(archiveList, function() {
          if ((this.status !== 200) && (!!g.SITE.archivedBoardsKnown || (this.status !== 404))) { return; }
          return that.ajaxCleanParse(boardID, response1, this.response);
        });
      });
    }

    ajaxCleanParse(boardID, response1, response2) {
      let board, ID;
      const siteID = g.SITE.ID;
      if (!(board = this.data[siteID].boards[boardID])) { return; }
      const threads = dict();
      if (response1) {
        for (var page of response1) {
          for (var thread of page.threads) {
            ID = thread.no;
            if (ID in board) { threads[ID] = board[ID]; }
          }
        }
      }
      if (response2) {
        for (ID of response2) {
          if (ID in board) { threads[ID] = board[ID]; }
        }
      }
      this.data[siteID].boards[boardID] = threads;
      this.deleteIfEmpty({siteID, boardID});
      return $$1.set(this.key, this.data);
    }

    onSync(data) {
      if ((data.version || 0) <= (this.data.version || 0)) { return; }
      this.initData(data);
      return this.sync?.();
    }
  }
  DataBoard.initClass();

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class SimpleDict {
      constructor() {
          this.keys = [];
      }
      push(key, data) {
          key = `${key}`;
          if (!this[key]) {
              this.keys.push(key);
          }
          return this[key] = data;
      }
      rm(key) {
          let i;
          key = `${key}`;
          if ((i = this.keys.indexOf(key)) !== -1) {
              this.keys.splice(i, 1);
              return delete this[key];
          }
      }
      forEach(fn) {
          for (var key of this.keys) {
              fn(this[key]);
          }
      }
      get(key) {
          if (key === 'keys') {
              return undefined;
          }
          else {
              return $$1.getOwn(this, key);
          }
      }
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class Thread {
    toString() { return this.ID; }

    constructor(ID, board) {
      this.board = board;
      this.ID         = +ID;
      this.threadID   = this.ID;
      this.boardID    = this.board.ID;
      this.siteID     = g.SITE.ID;
      this.fullID     = `${this.board}.${this.ID}`;
      this.posts      = new SimpleDict();
      this.isDead     = false;
      this.isHidden   = false;
      this.isSticky   = false;
      this.isClosed   = false;
      this.isArchived = false;
      this.postLimit  = false;
      this.fileLimit  = false;
      this.lastPost   = 0;
      this.ipCount    = undefined;
      this.json       = null;

      this.OP = null;
      this.catalogView = null;

      this.nodes =
        {root: null};

      this.board.threads.push(this.ID, this);
      g.threads.push(this.fullID, this);
    }

    setPage(pageNum) {
      let icon;
      const {info, reply} = this.OP.nodes;
      if (!(icon = $$1('.page-num', info))) {
        icon = $$1.el('span', {className: 'page-num'});
        $$1.replace(reply.parentNode.previousSibling, [$$1.tn(' '), icon, $$1.tn(' ')]);
      }
      icon.title       = `This thread is on page ${pageNum} in the original index.`;
      icon.textContent = `[${pageNum}]`;
      if (this.catalogView) { return this.catalogView.nodes.pageCount.textContent = pageNum; }
    }

    setCount(type, count, reachedLimit) {
      if (!this.catalogView) { return; }
      const el = this.catalogView.nodes[`${type}Count`];
      el.textContent = count;
      return (reachedLimit ? $$1.addClass : $$1.rmClass)(el, 'warning');
    }

    setStatus(type, status) {
      const name = `is${type}`;
      if (this[name] === status) { return; }
      this[name] = status;
      if (!this.OP) { return; }
      this.setIcon('Sticky',   this.isSticky);
      this.setIcon('Closed',   this.isClosed && !this.isArchived);
      return this.setIcon('Archived', this.isArchived);
    }

    setIcon(type, status) {
      const typeLC = type.toLowerCase();
      let icon = $$1(`.${typeLC}Icon`, this.OP.nodes.info);
      if (!!icon === status) { return; }

      if (!status) {
        $$1.rm(icon.previousSibling);
        $$1.rm(icon);
        if (this.catalogView) { $$1.rm($$1(`.${typeLC}Icon`, this.catalogView.nodes.icons)); }
        return;
      }
      icon = $$1.el('img', {
        src: `${g.SITE.Build.staticPath}${typeLC}${g.SITE.Build.gifIcon}`,
        alt:   type,
        title: type,
        className: `${typeLC}Icon retina`
      }
      );
      if (g.BOARD.ID === 'f') {
        icon.style.cssText = 'height: 18px; width: 18px;';
      }

      const root = (type !== 'Sticky') && this.isSticky ?
        $$1('.stickyIcon', this.OP.nodes.info)
      :
        $$1('.page-num', this.OP.nodes.info) || this.OP.nodes.quote;
      $$1.after(root, [$$1.tn(' '), icon]);

      if (!this.catalogView) { return; }
      return ((type === 'Sticky') && this.isClosed ? $$1.prepend : $$1.add)(this.catalogView.nodes.icons, icon.cloneNode());
    }

    kill() {
      return this.isDead = true;
    }

    collect() {
      let n = 0;
      this.posts.forEach(function(post) {
        if (post.clones.length) {
          return n++;
        } else {
          return post.collect();
        }
      });
      if (!n) {
        g.threads.rm(this.fullID);
        return this.board.threads.rm(this);
      }
    }
  }

  class CatalogThread {
    toString() { return this.ID; }

    constructor(root, thread) {
      this.thread = thread;
      this.ID    = this.thread.ID;
      this.board = this.thread.board;
      const {post} = this.thread.OP.nodes;
      this.nodes = {
        root,
        thumb:     $$1('.catalog-thumb', post),
        icons:     $$1('.catalog-icons', post),
        postCount: $$1('.post-count',    post),
        fileCount: $$1('.file-count',    post),
        pageCount: $$1('.page-count',    post),
        replies:   null
      };
      this.thread.catalogView = this;
    }
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS206: Consider reworking classes to avoid initClass
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const dialog = function(id, properties) {
    const el = $$1.el('div', {
      className: 'dialog',
      id
    }
    );
    $$1.extend(el, properties);
    el.style.cssText = Conf[`${id}.position`];

    const move = $$1('.move', el);
    $$1.on(move, 'touchstart mousedown', dragstart);
    for (var child of move.children) {
      if (!child.tagName) { continue; }
      $$1.on(child, 'touchstart mousedown', e => e.stopPropagation());
    }

    return el;
  };

  var Menu$1 = (function() {
    let currentMenu = undefined;
    let lastToggledButton = undefined;
    Menu$1 = class Menu {
      static initClass() {
        currentMenu       = null;
        lastToggledButton = null;
      }

      constructor(type) {
        // XXX AddMenuEntry event is deprecated
        this.setPosition = this.setPosition.bind(this);
        this.close = this.close.bind(this);
        this.keybinds = this.keybinds.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.addEntry = this.addEntry.bind(this);
        this.type = type;
        $$1.on(d$1, 'AddMenuEntry', ({detail}) => {
          if (detail.type !== this.type) { return; }
          delete detail.open;
          return this.addEntry(detail);
        });
        this.entries = [];
      }

      makeMenu() {
        const menu = $$1.el('div', {
          className: 'dialog',
          id:        'menu',
          tabIndex:  0
        }
        );
        menu.dataset.type = this.type;
        $$1.on(menu, 'click', e => e.stopPropagation());
        $$1.on(menu, 'keydown', this.keybinds);
        return menu;
      }

      toggle(e, button, data) {
        e.preventDefault();
        e.stopPropagation();

        if (currentMenu) {
          // Close if it's already opened.
          // Reopen if we clicked on another button.
          const previousButton = lastToggledButton;
          currentMenu.close();
          if (previousButton === button) { return; }
        }

        if (!this.entries.length) { return; }
        return this.open(button, data);
      }

      open(button, data) {
        let entry;
        const menu = (this.menu = this.makeMenu());
        currentMenu       = this;
        lastToggledButton = button;

        this.entries.sort((first, second) => first.order - second.order);

        for (entry of this.entries) {
          this.insertEntry(entry, menu, data);
        }

        $$1.addClass(lastToggledButton, 'active');

        $$1.on(d$1, 'click CloseMenu', this.close);
        $$1.on(d$1, 'scroll', this.setPosition);
        $$1.on(window, 'resize', this.setPosition);
        $$1.after(button, menu);

        this.setPosition();

        entry = $$1('.entry', menu);
        // We've removed flexbox, so we don't use order anymore.
        // while prevEntry = @findNextEntry entry, -1
        //   entry = prevEntry
        this.focus(entry);

        return menu.focus();
      }

      setPosition() {
        const mRect   = this.menu.getBoundingClientRect();
        const bRect   = lastToggledButton.getBoundingClientRect();
        window.scrollY + bRect.top;
        window.scrollX + bRect.left;
        const cHeight = doc$1.clientHeight;
        const cWidth  = doc$1.clientWidth;
        const [top, bottom] = (bRect.top + bRect.height + mRect.height) < cHeight ?
          [`${bRect.bottom}px`, '']
        :
          ['', `${cHeight - bRect.top}px`];
        const [left, right] = (bRect.left + mRect.width) < cWidth ?
          [`${bRect.left}px`, '']
        :
          ['', `${cWidth - bRect.right}px`];
        $$1.extend(this.menu.style, {top, right, bottom, left});
        return this.menu.classList.toggle('left', right);
      }

      insertEntry(entry, parent, data) {
        let submenu;
        if (typeof entry.open === 'function') {
          try {
            if (!entry.open(data)) { return; }
          } catch (err) {
            Main$1.handleErrors({
              message: `Error in building the ${this.type} menu.`,
              error: err
            });
            return;
          }
        }
        $$1.add(parent, entry.el);

        if (!entry.subEntries) { return; }
        if (submenu = $$1('.submenu', entry.el)) {
          // Reset sub menu, remove irrelevant entries.
          $$1.rm(submenu);
        }
        submenu = $$1.el('div',
          {className: 'dialog submenu'});
        for (var subEntry of entry.subEntries) {
          this.insertEntry(subEntry, submenu, data);
        }
        $$1.add(entry.el, submenu);
      }

      close() {
        $$1.rm(this.menu);
        delete this.menu;
        $$1.rmClass(lastToggledButton, 'active');
        currentMenu       = null;
        lastToggledButton = null;
        $$1.off(d$1, 'click scroll CloseMenu', this.close);
        $$1.off(d$1, 'scroll', this.setPosition);
        return $$1.off(window, 'resize', this.setPosition);
      }

      findNextEntry(entry, direction) {
        const entries = [...entry.parentNode.children];
        entries.sort((first, second) => first.style.order - second.style.order);
        return entries[entries.indexOf(entry) + direction];
      }

      keybinds(e) {
        let subEntry;
        let next, submenu;
        let entry = $$1('.focused', this.menu);
        while ((subEntry = $$1('.focused', entry))) {
          entry = subEntry;
        }

        switch (e.keyCode) {
          case 27: // Esc
            lastToggledButton.focus();
            this.close();
            break;
          case 13: case 32: // Enter, Space
            entry.click();
            break;
          case 38: // Up
            if (next = this.findNextEntry(entry, -1)) {
              this.focus(next);
            }
            break;
          case 40: // Down
            if (next = this.findNextEntry(entry, +1)) {
              this.focus(next);
            }
            break;
          case 39: // Right
            if ((submenu = $$1('.submenu', entry)) && (next = submenu.firstElementChild)) {
              let nextPrev;
              while ((nextPrev = this.findNextEntry(next, -1))) {
                next = nextPrev;
              }
              this.focus(next);
            }
            break;
          case 37: // Left
            if (next = $$1.x('parent::*[contains(@class,"submenu")]/parent::*', entry)) {
              this.focus(next);
            }
            break;
          default:
            return;
        }

        e.preventDefault();
        return e.stopPropagation();
      }

      onFocus(e) {
        e.stopPropagation();
        return this.focus(e.target);
      }

      focus(entry) {
        let focused, submenu;
        while ((focused = $$1.x('parent::*/child::*[contains(@class,"focused")]', entry))) {
          $$1.rmClass(focused, 'focused');
        }
        for (focused of $$('.focused', entry)) {
          $$1.rmClass(focused, 'focused');
        }
        $$1.addClass(entry, 'focused');

        // Submenu positioning.
        if (!(submenu = $$1('.submenu', entry))) { return; }
        const sRect   = submenu.getBoundingClientRect();
        const eRect   = entry.getBoundingClientRect();
        const cHeight = doc$1.clientHeight;
        const cWidth  = doc$1.clientWidth;
        const [top, bottom] = (eRect.top + sRect.height) < cHeight ?
          ['0px', 'auto']
        :
          ['auto', '0px'];
        const [left, right] = (eRect.right + sRect.width) < (cWidth - 150) ?
          ['100%', 'auto']
        :
          ['auto', '100%'];
        const {style} = submenu;
        style.top    = top;
        style.bottom = bottom;
        style.left   = left;
        return style.right  = right;
      }

      addEntry(entry) {
        this.parseEntry(entry);
        return this.entries.push(entry);
      }

      parseEntry(entry) {
        const {el, subEntries} = entry;
        $$1.addClass(el, 'entry');
        $$1.on(el, 'focus mouseover', this.onFocus);
        el.style.order = entry.order || 100;
        if (!subEntries) { return; }
        $$1.addClass(el, 'has-submenu');
        for (var subEntry of subEntries) {
          this.parseEntry(subEntry);
        }
      }
    };
    Menu$1.initClass();
    return Menu$1;
  })();

  var dragstart = function (e) {
    let isTouching;
    if ((e.type === 'mousedown') && (e.button !== 0)) { return; } // not LMB
    // prevent text selection
    e.preventDefault();
    if (isTouching = e.type === 'touchstart') {
      e = e.changedTouches[e.changedTouches.length - 1];
    }
    // distance from pointer to el edge is constant; calculate it here.
    const el = $$1.x('ancestor::div[contains(@class,"dialog")][1]', this);
    const rect = el.getBoundingClientRect();
    const screenHeight = doc$1.clientHeight;
    const screenWidth  = doc$1.clientWidth;
    const o = {
      id:     el.id,
      style:  el.style,
      dx:     e.clientX - rect.left,
      dy:     e.clientY - rect.top,
      height: screenHeight - rect.height,
      width:  screenWidth  - rect.width,
      screenHeight,
      screenWidth,
      isTouching
    };

    [o.topBorder, o.bottomBorder] = Conf['Header auto-hide'] || !Conf['Fixed Header'] ?
      [0, 0]
    : Conf['Bottom Header'] ?
      [0, Header$1.bar.getBoundingClientRect().height]
    :
      [Header$1.bar.getBoundingClientRect().height, 0];

    if (isTouching) {
      o.identifier = e.identifier;
      o.move = touchmove.bind(o);
      o.up   = touchend.bind(o);
      $$1.on(d$1, 'touchmove', o.move);
      return $$1.on(d$1, 'touchend touchcancel', o.up);
    } else { // mousedown
      o.move = drag.bind(o);
      o.up   = dragend.bind(o);
      $$1.on(d$1, 'mousemove', o.move);
      return $$1.on(d$1, 'mouseup',   o.up);
    }
  };

  var touchmove = function (e) {
    for (var touch of e.changedTouches) {
      if (touch.identifier === this.identifier) {
        drag.call(this, touch);
        return;
      }
    }
  };

  var drag = function (e) {
    const {clientX, clientY} = e;

    let left = clientX - this.dx;
    left = left < 10 ?
      0
    : (this.width - left) < 10 ?
      ''
    :
      ((left / this.screenWidth) * 100) + '%';

    let top = clientY - this.dy;
    top = top < (10 + this.topBorder) ?
      this.topBorder + 'px'
    : (this.height - top) < (10 + this.bottomBorder) ?
      ''
    :
      ((top / this.screenHeight) * 100) + '%';

    const right = left === '' ?
      0
    :
      '';

    const bottom = top === '' ?
      this.bottomBorder + 'px'
    :
      '';

    const {style} = this;
    style.left   = left;
    style.right  = right;
    style.top    = top;
    return style.bottom = bottom;
  };

  var touchend = function (e) {
    for (var touch of e.changedTouches) {
      if (touch.identifier === this.identifier) {
        dragend.call(this);
        return;
      }
    }
  };

  var dragend = function () {
    if (this.isTouching) {
      $$1.off(d$1, 'touchmove', this.move);
      $$1.off(d$1, 'touchend touchcancel', this.up);
    } else { // mouseup
      $$1.off(d$1, 'mousemove', this.move);
      $$1.off(d$1, 'mouseup',   this.up);
    }
    return $$1.set(`${this.id}.position`, this.style.cssText);
  };

  const hoverstart = function ({ root, el, latestEvent, endEvents, height, width, cb, noRemove }) {
    const rect = root.getBoundingClientRect();
    const o = {
      root,
      el,
      style: el.style,
      isImage: ['IMG', 'VIDEO'].includes(el.nodeName),
      cb,
      endEvents,
      latestEvent,
      clientHeight: doc$1.clientHeight,
      clientWidth:  doc$1.clientWidth,
      height,
      width,
      noRemove,
      clientX: (rect.left + rect.right) / 2,
      clientY: (rect.top + rect.bottom) / 2
    };
    o.hover    = hover.bind(o);
    o.hoverend = hoverend.bind(o);

    o.hover(o.latestEvent);
    new MutationObserver(function() {
      if (el.parentNode) { return o.hover(o.latestEvent); }
    }).observe(el, {childList: true});

    $$1.on(root, endEvents,   o.hoverend);
    if ($$1.x('ancestor::div[contains(@class,"inline")][1]', root)) {
      $$1.on(d$1,    'keydown',   o.hoverend);
    }
    $$1.on(root, 'mousemove', o.hover);

    // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=674955
    o.workaround = function(e) { if (!root.contains(e.target)) { return o.hoverend(e); } };
    return $$1.on(doc$1,  'mousemove', o.workaround);
  };

  hoverstart.padding = 25;

  var hover = function (e) {
    this.latestEvent = e;
    const height = (this.height || this.el.offsetHeight) + hoverstart.padding;
    const width  = (this.width  || this.el.offsetWidth);
    const {clientX, clientY} = Conf['Follow Cursor'] ? e : this;

    const top = this.isImage ?
      Math.max(0, (clientY * (this.clientHeight - height)) / this.clientHeight)
    :
      Math.max(0, Math.min(this.clientHeight - height, clientY - 120));

    let threshold = this.clientWidth / 2;
    if (!this.isImage) { threshold = Math.max(threshold, this.clientWidth - 400); }
    let marginX = (clientX <= threshold ? clientX : this.clientWidth - clientX) + 45;
    if (this.isImage) { marginX = Math.min(marginX, this.clientWidth - width); }
    marginX += 'px';
    const [left, right] = clientX <= threshold ? [marginX, ''] : ['', marginX];

    const {style} = this;
    style.top   = top + 'px';
    style.left  = left;
    return style.right = right;
  };

  var hoverend = function (e) {
    if (((e.type === 'keydown') && (e.keyCode !== 13)) || (e.target.nodeName === "TEXTAREA")) { return; }
    if (!this.noRemove) { $$1.rm(this.el); }
    $$1.off(this.root, this.endEvents,  this.hoverend);
    $$1.off(d$1,     'keydown',   this.hoverend);
    $$1.off(this.root, 'mousemove', this.hover);
    // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=674955
    $$1.off(doc$1,   'mousemove', this.workaround);
    if (this.cb) { return this.cb.call(this); }
  };

  const checkbox = function (name, text, checked) {
    if (checked == null) { checked = Conf[name]; }
    const label = $$1.el('label');
    const input = $$1.el('input', {type: 'checkbox', name, checked});
    $$1.add(label, [input, $$1.tn(` ${text}`)]);
    return label;
  };

  const UI = {
    dialog,
    Menu: Menu$1,
    hover:    hoverstart,
    checkbox
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Nav = {
    init() {
      switch (g.VIEW) {
        case 'index':
          if (!Conf['Index Navigation']) { return; }
          break;
        case 'thread':
          if (!Conf['Reply Navigation']) { return; }
          break;
        default:
          return;
      }

      const span = $$1.el('span',
        {id: 'navlinks'});
      const prev = $$1.el('a', {
        textContent: '▲',
        href: 'javascript:;'
      }
      );
      const next = $$1.el('a', {
        textContent: '▼',
        href: 'javascript:;'
      }
      );

      $$1.on(prev, 'click', this.prev);
      $$1.on(next, 'click', this.next);

      $$1.add(span, [prev, $$1.tn(' '), next]);
      var append = function() {
        $$1.off(d$1, '4chanXInitFinished', append);
        return $$1.add(d$1.body, span);
      };
      return $$1.on(d$1, '4chanXInitFinished', append);
    },

    prev() {
      if (g.VIEW === 'thread') {
        return window.scrollTo(0, 0);
      } else {
        return Nav.scroll(-1);
      }
    },

    next() {
      if (g.VIEW === 'thread') {
        return window.scrollTo(0, d$1.body.scrollHeight);
      } else {
        return Nav.scroll(+1);
      }
    },

    getThread() {
      if (g.VIEW === 'thread') { return g.threads.get(`${g.BOARD}.${g.THREADID}`).nodes.root; }
      if ($$1.hasClass(doc$1, 'catalog-mode')) { return; }
      for (var threadRoot of $$(g.SITE.selectors.thread)) {
        var thread = Get$1.threadFromRoot(threadRoot);
        if (thread.isHidden && !thread.stub) { continue; }
        if (Header$1.getTopOf(threadRoot) >= -threadRoot.getBoundingClientRect().height) { // not scrolled past
          return threadRoot;
        }
      }
    },

    scroll(delta) {
      let next;
      d$1.activeElement?.blur();
      let thread = Nav.getThread();
      if (!thread) { return; }
      const axis = delta === +1 ?
        'following'
      :
        'preceding';
      if (next = $$1.x(`${axis}-sibling::${g.SITE.xpath.thread}[not(@hidden)][1]`, thread)) {
        // Unless we're not at the beginning of the current thread,
        // and thus wanting to move to beginning,
        // or we're above the first thread and don't want to skip it.
        const top = Header$1.getTopOf(thread);
        if (((delta === +1) && (top < 5)) || ((delta === -1) && (top > -5))) { thread = next; }
      }
      // Add extra space to the end of the page if necessary so that all threads can be selected by keybinds.
      const extra = (Header$1.getTopOf(thread) + doc$1.clientHeight) - d$1.body.getBoundingClientRect().bottom;
      if (extra > 0) { d$1.body.style.marginBottom = `${extra}px`; }

      Header$1.scrollTo(thread);

      if ((extra > 0) && !Nav.haveExtra) {
        Nav.haveExtra = true;
        return $$1.on(d$1, 'scroll', Nav.removeExtra);
      }
    },

    removeExtra() {
      const extra = doc$1.clientHeight - d$1.body.getBoundingClientRect().bottom;
      if (extra > 0) {
        return d$1.body.style.marginBottom = `${extra}px`;
      } else {
        d$1.body.style.marginBottom = '';
        delete Nav.haveExtra;
        return $$1.off(d$1, 'scroll', Nav.removeExtra);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ImageHost = {
    init() {
      if ((!(this.useFaster = /\S/.test(Conf['fourchanImageHost']))) || (g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW)) { return; }
      return Callbacks.Post.push({
        name: 'Image Host Rewriting',
        cb:   this.node
      });
    },

    suggestions: ['i.4cdn.org', 'is2.4chan.org'],

    host() {
      return Conf['fourchanImageHost'].trim() || 'i.4cdn.org';
    },
    flashHost() {
      return 'i.4cdn.org';
    },
    thumbHost() {
      return 'i.4cdn.org';
    },
    test(hostname) {
      return (hostname === 'i.4cdn.org') || ImageHost.regex.test(hostname);
    },

    regex: /^is\d*\.4chan(?:nel)?\.org$/,

    node() {
      if (this.isClone) { return; }
      const host = ImageHost.host();
      if (this.file && ImageHost.test(this.file.url.split('/')[2]) && !/\.swf$/.test(this.file.url)) {
        this.file.link.hostname = host;
        if (this.file.thumbLink) { this.file.thumbLink.hostname = host; }
        this.file.url = this.file.link.href;
      }
      return ImageHost.fixLinks($$('a', this.nodes.comment));
    },

    fixLinks(links) {
      for (var link of links) {
        if (ImageHost.test(link.hostname) && !/\.swf$/.test(link.pathname)) {
          var host = ImageHost.host();
          if (link.hostname !== host) { link.hostname = host; }
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Volume = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) ||
        (!Conf['Image Expansion'] && !Conf['Image Hover'] && !Conf['Image Hover in Catalog'] && !Conf['Gallery'])) { return; }

      $$1.sync('Allow Sound', function(x) {
        Conf['Allow Sound'] = x;
        if (Volume.inputs) Volume.inputs.unmute.checked = x;
      });

      $$1.sync('Default Volume', function(x) {
        Conf['Default Volume'] = x;
        if (Volume.inputs) Volume.inputs.volume.value = x;
      });

      if (Conf['Mouse Wheel Volume']) {
        Callbacks.Post.push({
          name: 'Mouse Wheel Volume',
          cb:   this.node
        });
      }

      if (g.SITE.noAudio?.(g.BOARD)) { return; }

      if (Conf['Mouse Wheel Volume']) {
        Callbacks.CatalogThread.push({
          name: 'Mouse Wheel Volume',
          cb:   this.catalogNode
        });
      }

      const unmuteEntry = UI.checkbox('Allow Sound', 'Allow Sound');
      unmuteEntry.title = Config.main['Images and Videos']['Allow Sound'][1];

      const volumeEntry = $$1.el('label',
        {title: 'Default volume for videos.'});
      $$1.extend(volumeEntry,
        {innerHTML: "<input name=\"Default Volume\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" value=\"" + E(Conf["Default Volume"]) + "\"> Volume"});

      this.inputs = {
        unmute: unmuteEntry.firstElementChild,
        volume: volumeEntry.firstElementChild
      };

      $$1.on(this.inputs.unmute, 'change', $$1.cb.checked);
      $$1.on(this.inputs.volume, 'change', $$1.cb.value);

      Header$1.menu.addEntry({el: unmuteEntry, order: 200});
      return Header$1.menu.addEntry({el: volumeEntry, order: 201});
    },

    setup(video) {
      video.muted  = !Conf['Allow Sound'];
      video.volume = Conf['Default Volume'];
      return $$1.on(video, 'volumechange', Volume.change);
    },

    change() {
      const {muted, volume} = this;
      const items = {
        'Allow Sound': !muted,
        'Default Volume': volume
      };
      for (var key in items) {
        var val = items[key];
        if (Conf[key] === val) {
          delete items[key];
        }
      }
      $$1.set(items);
      $$1.extend(Conf, items);
      if (Volume.inputs) {
        Volume.inputs.unmute.checked = !muted;
        return Volume.inputs.volume.value = volume;
      }
    },

    node() {
      if (g.SITE.noAudio?.(this.board)) { return; }
      for (var file of this.files) {
        if (file.isVideo) {
          if (file.thumb) { $$1.on(file.thumb,                                'wheel', Volume.wheel.bind(Header$1.hover)); }
          $$1.on(($$1('.file-info', file.text) || file.link), 'wheel', Volume.wheel.bind(file.thumbLink));
        }
      }
    },

    catalogNode() {
      const file = this.thread.OP.files[0];
      if (!file?.isVideo) { return; }
      return $$1.on(this.nodes.thumb, 'wheel', Volume.wheel.bind(Header$1.hover));
    },

    wheel(e) {
      let el;
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) { return; }
      if (!(el = $$1('video:not([data-md5])', this))) { return; }
      if (el.muted || !$$1.hasAudio(el)) { return; }
      let volume = el.volume + 0.1;
      if (e.deltaY < 0) { volume *= 1.1; }
      if (e.deltaY > 0) { volume /= 1.1; }
      el.volume = $$1.minmax(volume - 0.1, 0, 1);
      return e.preventDefault();
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS204: Change includes calls to have a more natural evaluation order
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ImageCommon = {
    // Pause and mute video in preparation for removing the element from the document.
    pause(video) {
      if (video.nodeName !== 'VIDEO') { return; }
      video.pause();
      $$1.off(video, 'volumechange', Volume.change);
      return video.muted = true;
    },

    rewind(el) {
      if (el.nodeName === 'VIDEO') {
        if (el.readyState >= el.HAVE_METADATA) { return el.currentTime = 0; }
      } else if (/\.gif$/.test(el.src)) {
        return $$1.queueTask(() => el.src = el.src);
      }
    },

    pushCache(el) {
      ImageCommon.cache = el;
      return $$1.on(el, 'error', ImageCommon.cacheError);
    },

    popCache() {
      const el = ImageCommon.cache;
      $$1.off(el, 'error', ImageCommon.cacheError);
      delete ImageCommon.cache;
      return el;
    },

    cacheError() {
      if (ImageCommon.cache === this) { return delete ImageCommon.cache; }
    },

    decodeError(file, fileObj) {
      let message;
      if (file.error?.code !== MediaError.MEDIA_ERR_DECODE) { return false; }
      if (!(message = $$1('.warning', fileObj.thumb.parentNode))) {
        message = $$1.el('div', {className:   'warning'});
        $$1.after(fileObj.thumb, message);
      }
      message.textContent = 'Error: Corrupt or unplayable video';
      return true;
    },

    isFromArchive(file) {
      return (g.SITE.software === 'yotsuba') && !ImageHost.test(file.src.split('/')[2]);
    },

    error(file, post, fileObj, delay, cb) {
      let timeoutID;
      const src = fileObj.url.split('/');
      let url = null;
      if ((g.SITE.software === 'yotsuba') && Conf['404 Redirect']) {
        url = Redirect$1.to('file', {
          boardID:  post.board.ID,
          filename: src[src.length - 1]
        });
      }
      if (!url || !Redirect$1.securityCheck(url)) { url = null; }

      if ((post.isDead || fileObj.isDead) && !ImageCommon.isFromArchive(file)) { return cb(url); }

      if (delay != null) { timeoutID = setTimeout((() => cb(url)), delay); }
      if (post.isDead || fileObj.isDead) { return; }
      const redirect = function() {
        if (!ImageCommon.isFromArchive(file)) {
          if (delay != null) { clearTimeout(timeoutID); }
          return cb(url);
        }
      };

      const threadJSON = g.SITE.urls.threadJSON?.(post);
      if (!threadJSON) { return; }
      var parseJSON = function(isArchiveURL) {
        let needle, postObj;
        if (this.status === 404) {
          let archivedThreadJSON;
          if (!isArchiveURL && (archivedThreadJSON = g.SITE.urls.archivedThreadJSON?.(post))) {
            $$1.ajax(archivedThreadJSON, {onloadend() { return parseJSON.call(this, true); }});
          } else {
            post.kill(!post.isClone, fileObj.index);
          }
        }
        if (this.status !== 200) { return redirect(); }
        for (postObj of this.response.posts) {
          if (postObj.no === post.ID) { break; }
        }
        if (postObj.no !== post.ID) {
          post.kill();
          return redirect();
        } else if ((needle = fileObj.docIndex, g.SITE.Build.parseJSON(postObj, post.board).filesDeleted.includes(needle))) {
          post.kill(true);
          return redirect();
        } else {
          return url = fileObj.url;
        }
      };
      return $$1.ajax(threadJSON, {onloadend() { return parseJSON.call(this); }});
    },

    // Add controls, but not until the mouse is moved over the video.
    addControls(video) {
      var handler = function() {
        $$1.off(video, 'mouseover', handler);
        // Hacky workaround for Firefox forever-loading bug for very short videos
        const t = new Date().getTime();
        return $$1.asap((() => ($$1.engine !== 'gecko') || ((video.readyState >= 3) && (video.currentTime <= Math.max(0.1, (video.duration - 0.5)))) || (new Date().getTime() >= (t + 1000))), () => video.controls = true);
      };
      return $$1.on(video, 'mouseover', handler);
    },

    // XXX Estimate whether clicks are on the video controls and should be ignored.
    onControls(e) {
      return (Conf['Show Controls'] && Conf['Click Passthrough'] && (e.target.nodeName === 'VIDEO')) ||
        (e.target.controls && ((e.target.getBoundingClientRect().bottom - e.clientY) < 35));
    },

    download(e) {
      if (this.protocol === 'blob:') { return true; }
      e.preventDefault();
      const {href, download} = this;
      return CrossOrigin$1.file(href, function(blob) {
        if (blob) {
          const a = $$1.el('a', {
            href: URL.createObjectURL(blob),
            download,
            hidden: true
          }
          );
          $$1.add(d$1.body, a);
          a.click();
          return $$1.rm(a);
        } else {
          return new Notice('warning', `Could not download ${href}`, 20);
        }
      });
    }
  };

  const Audio = {
      /** Add event listeners for videos with audio from a third party */
      setupSync(video, audio) {
          video.addEventListener('playing', () => {
              audio.currentTime = video.currentTime;
              audio.play();
          });
          video.addEventListener('pause', () => {
              audio.pause();
          });
          video.addEventListener('seeked', () => {
              audio.currentTime = video.currentTime;
          });
          video.addEventListener('ratechange', () => {
              audio.currentTime = video.currentTime;
              audio.playbackRate = video.playbackRate;
          });
          video.addEventListener('waiting', () => {
              audio.currentTime = video.currentTime;
              audio.pause();
          });
          audio.addEventListener('canplay', () => {
              if (audio.currentTime < .1)
                  video.currentTime = 0;
          }, { once: true });
      },
      setupAudioSlider(video, audio) {
          const container = document.createElement('span');
          // \u00A0 is non breaking space
          container.appendChild(document.createTextNode('🔊︎\u00A0'));
          const control = document.createElement('input');
          control.type = 'range';
          control.max = '1';
          control.step = '0.01';
          control.valueAsNumber = audio.volume;
          control.addEventListener('input', () => {
              audio.volume = control.valueAsNumber;
          });
          container.appendChild(control);
          const downloadLink = document.createElement('a');
          downloadLink.href = audio.src;
          downloadLink.download = '';
          downloadLink.target = '_blank';
          downloadLink.textContent = '\u00A0📥︎';
          container.appendChild(downloadLink);
          return container;
      },
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ImageExpand = {
      init() {
          if (!(this.enabled = Conf['Image Expansion'] && ['index', 'thread'].includes(g.VIEW))) {
              return;
          }
          this.EAI = $$1.el('a', {
              className: 'expand-all-shortcut',
              textContent: '➕︎',
              title: 'Expand All Images',
              href: 'javascript:;'
          });
          $$1.on(this.EAI, 'click', this.cb.toggleAll);
          Header$1.addShortcut('expand-all', this.EAI, 520);
          $$1.on(d$1, 'scroll visibilitychange', this.cb.playVideos);
          this.videoControls = $$1.el('span', { className: 'video-controls' });
          $$1.extend(this.videoControls, { innerHTML: " <a href=\"javascript:;\" title=\"You can also contract the video by dragging it to the left.\">contract</a>" });
          return Callbacks.Post.push({
              name: 'Image Expansion',
              cb: this.node
          });
      },
      node() {
          if (!this.file || (!this.file.isImage && !this.file.isVideo)) {
              return;
          }
          $$1.on(this.file.thumbLink, 'click', ImageExpand.cb.toggle);
          if (this.isClone) {
              if (this.file.isExpanding) {
                  // If we clone a post where the image is still loading,
                  // make it loading in the clone too.
                  ImageExpand.contract(this);
                  return ImageExpand.expand(this);
              }
              else if (this.file.isExpanded && this.file.isVideo) {
                  Volume.setup(this.file.fullImage);
                  ImageExpand.setupVideoCB(this);
                  return ImageExpand.setupVideo(this, !this.origin.file.fullImage?.paused || this.origin.file.wasPlaying, this.file.fullImage.controls);
              }
          }
          else if (ImageExpand.on && !this.isHidden && !this.isFetchedQuote &&
              (Conf['Expand spoilers'] || !this.file.isSpoiler) &&
              (Conf['Expand videos'] || !this.file.isVideo)) {
              return ImageExpand.expand(this);
          }
      },
      cb: {
          toggle(e) {
              if ($$1.modifiedClick(e)) {
                  return;
              }
              const post = Get$1.postFromNode(this);
              const { file } = post;
              if (file.isExpanded && ImageCommon.onControls(e)) {
                  return;
              }
              e.preventDefault();
              if (!Conf['Autoplay'] && file.fullImage?.paused) {
                  return file.fullImage.play();
              }
              else {
                  return ImageExpand.toggle(post);
              }
          },
          toggleAll() {
              let func;
              $$1.event('CloseMenu');
              const threadRoot = Nav.getThread();
              const toggle = function (post) {
                  const { file } = post;
                  if (!file || (!file.isImage && !file.isVideo) || !doc$1.contains(post.nodes.root)) {
                      return;
                  }
                  if (ImageExpand.on &&
                      ((!Conf['Expand spoilers'] && file.isSpoiler) ||
                          (!Conf['Expand videos'] && file.isVideo) ||
                          (Conf['Expand from here'] && (Header$1.getTopOf(file.thumb) < 0)) ||
                          (Conf['Expand thread only'] && (g.VIEW === 'index') && !threadRoot?.contains(file.thumb)))) {
                      return;
                  }
                  return $$1.queueTask(func, post);
              };
              if (ImageExpand.on = $$1.hasClass(ImageExpand.EAI, 'expand-all-shortcut')) {
                  ImageExpand.EAI.className = 'contract-all-shortcut';
                  ImageExpand.EAI.title = 'Contract All Images';
                  ImageExpand.EAI.textContent = '➖︎';
                  func = ImageExpand.expand;
              }
              else {
                  ImageExpand.EAI.className = 'expand-all-shortcut';
                  ImageExpand.EAI.title = 'Expand All Images';
                  ImageExpand.EAI.textContent = '➕︎';
                  func = ImageExpand.contract;
              }
              return g.posts.forEach(function (post) {
                  for (post of [post, ...post.clones]) {
                      toggle(post);
                  }
              });
          },
          playVideos() {
              return g.posts.forEach(function (post) {
                  for (post of [post, ...post.clones]) {
                      var { file } = post;
                      if (!file || !file.isVideo || !file.isExpanded) {
                          continue;
                      }
                      var video = file.fullImage;
                      var visible = ($$1.hasAudio(video) && !video.muted) || Header$1.isNodeVisible(video);
                      if (visible && file.wasPlaying) {
                          delete file.wasPlaying;
                          video.play();
                      }
                      else if (!visible && !video.paused) {
                          file.wasPlaying = true;
                          video.pause();
                      }
                  }
              });
          },
          setFitness() {
              return $$1[this.checked ? 'addClass' : 'rmClass'](doc$1, this.name.toLowerCase().replace(/\s+/g, '-'));
          }
      },
      toggle(post) {
          if (!post.file.isExpanding && !post.file.isExpanded) {
              post.file.scrollIntoView = Conf['Scroll into view'];
              ImageExpand.expand(post);
              return;
          }
          ImageExpand.contract(post);
          if (Conf['Advance on contract']) {
              let next = post.nodes.root;
              while ((next = $$1.x("following::div[contains(@class,'postContainer')][1]", next))) {
                  if (!$$1('.stub', next) && (next.offsetHeight !== 0)) {
                      break;
                  }
              }
              if (next) {
                  return Header$1.scrollTo(next);
              }
          }
      },
      contract(post) {
          let bottom, el, oldHeight, scrollY;
          const { file } = post;
          if (el = file.fullImage) {
              const top = Header$1.getTopOf(el);
              bottom = top + el.getBoundingClientRect().height;
              oldHeight = d$1.body.clientHeight;
              ({ scrollY } = window);
          }
          $$1.rmClass(post.nodes.root, 'expanded-image');
          $$1.rmClass(file.thumb, 'expanding');
          $$1.rm(file.videoControls);
          file.thumbLink.href = file.url;
          file.thumbLink.target = '_blank';
          for (var x of ['isExpanding', 'isExpanded', 'videoControls', 'wasPlaying', 'scrollIntoView']) {
              delete file[x];
          }
          if (!el) {
              return;
          }
          if (doc$1.contains(el)) {
              if (bottom <= 0) {
                  // For images entirely above us, scroll to remain in place.
                  window.scrollBy(0, ((scrollY - window.scrollY) + d$1.body.clientHeight) - oldHeight);
              }
              else {
                  // For images not above us that would be moved above us, scroll to the thumbnail.
                  Header$1.scrollToIfNeeded(post.nodes.root);
              }
              if (window.scrollX > 0) {
                  // If we have scrolled right viewing an expanded image, return to the left.
                  window.scrollBy(-window.scrollX, 0);
              }
          }
          $$1.off(el, 'error', ImageExpand.error);
          ImageCommon.pushCache(el);
          if (file.isVideo) {
              ImageCommon.pause(el);
              for (var eventName in ImageExpand.videoCB) {
                  var cb = ImageExpand.videoCB[eventName];
                  $$1.off(el, eventName, cb);
              }
          }
          if (Conf['Restart when Opened']) {
              ImageCommon.rewind(file.thumb);
          }
          delete file.fullImage;
          $$1.queueTask(function () {
              // XXX Work around Chrome/Chromium not firing mouseover on the thumbnail.
              if (file.isExpanding || file.isExpanded) {
                  return;
              }
              $$1.rmClass(el, 'full-image');
              if (el.id) {
                  return;
              }
              return $$1.rm(el);
          });
          if (file.audio) {
              file.audio.remove();
              delete file.audio;
              if (file.audioSlider) {
                  file.audioSlider.remove();
                  delete file.audioSlider;
              }
          }
      },
      expand(post, src) {
          const { file } = post;
          const { thumb, thumbLink, isVideo } = file;
          // Do not expand images of hidden/filtered replies, or already expanded pictures.
          if (post.isHidden || file.isExpanding || file.isExpanded) {
              return;
          }
          let el;
          $$1.addClass(thumb, 'expanding');
          file.isExpanding = true;
          if (file.fullImage) {
              el = file.fullImage;
          }
          else if (ImageCommon.cache?.dataset.fileID === `${post.fullID}.${file.index}`) {
              el = (file.fullImage = ImageCommon.popCache());
              $$1.on(el, 'error', ImageExpand.error);
              if (Conf['Restart when Opened'] && (el.id !== 'ihover')) {
                  ImageCommon.rewind(el);
              }
              el.removeAttribute('id');
          }
          else {
              el = (file.fullImage = $$1.el((isVideo ? 'video' : 'img')));
              el.dataset.fileID = `${post.fullID}.${file.index}`;
              $$1.on(el, 'error', ImageExpand.error);
              el.src = src || file.url;
          }
          el.className = 'full-image';
          $$1.after(thumb, el);
          if (isVideo) {
              // add contract link to file info
              if (!file.videoControls) {
                  file.videoControls = ImageExpand.videoControls.cloneNode(true);
                  $$1.add(file.text, file.videoControls);
              }
              // disable link to file so native controls can work
              thumbLink.removeAttribute('href');
              thumbLink.removeAttribute('target');
              el.loop = true;
              Volume.setup(el);
              ImageExpand.setupVideoCB(post);
          }
          if (!isVideo) {
              $$1.asap((() => el.naturalHeight), () => ImageExpand.completeExpand(post));
          }
          else if (el.readyState >= el.HAVE_METADATA) {
              ImageExpand.completeExpand(post);
          }
          else {
              $$1.on(el, 'loadedmetadata', () => ImageExpand.completeExpand(post));
          }
          if (Conf['Enable sound posts'] && Conf['Allow Sound']) {
              const soundUrlMatch = file.name.match(/\[sound=([^\]]+)]/);
              if (soundUrlMatch) {
                  let src = decodeURIComponent(soundUrlMatch[1]);
                  if (!src.startsWith('http'))
                      src = `https://${src}`;
                  const audioEl = $$1.el('audio', { src });
                  Volume.setup(audioEl);
                  if (isVideo) {
                      Audio.setupSync(el, audioEl);
                      if (Conf['Show Controls']) {
                          file.audioSlider = Audio.setupAudioSlider(el, audioEl);
                          $$1.after(el.parentElement, file.audioSlider);
                      }
                  }
                  else {
                      audioEl.controls = Conf['Show Controls'];
                      audioEl.autoplay = Conf['Autoplay'];
                  }
                  $$1.after(el, audioEl);
                  file.audio = audioEl;
              }
          }
      },
      completeExpand(post) {
          const { file } = post;
          if (!file.isExpanding) {
              return;
          } // contracted before the image loaded
          const bottom = Header$1.getTopOf(file.thumb) + file.thumb.getBoundingClientRect().height;
          const oldHeight = d$1.body.clientHeight;
          const { scrollY } = window;
          $$1.addClass(post.nodes.root, 'expanded-image');
          $$1.rmClass(file.thumb, 'expanding');
          file.isExpanded = true;
          delete file.isExpanding;
          // Scroll to keep our place in the thread when images are expanded above us.
          if (doc$1.contains(post.nodes.root) && (bottom <= 0)) {
              window.scrollBy(0, ((scrollY - window.scrollY) + d$1.body.clientHeight) - oldHeight);
          }
          // Scroll to display full image.
          if (file.scrollIntoView) {
              delete file.scrollIntoView;
              const imageBottom = Math.min(doc$1.clientHeight - file.fullImage.getBoundingClientRect().bottom - 25, Header$1.getBottomOf(file.fullImage));
              if (imageBottom < 0) {
                  window.scrollBy(0, Math.min(-imageBottom, Header$1.getTopOf(file.fullImage)));
              }
          }
          if (file.isVideo) {
              return ImageExpand.setupVideo(post, Conf['Autoplay'], Conf['Show Controls']);
          }
      },
      setupVideo(post, playing, controls) {
          const { fullImage } = post.file;
          if (!playing) {
              fullImage.controls = controls;
              return;
          }
          fullImage.controls = false;
          $$1.asap((() => doc$1.contains(fullImage)), function () {
              if (!d$1.hidden && Header$1.isNodeVisible(fullImage)) {
                  return fullImage.play();
              }
              else {
                  return post.file.wasPlaying = true;
              }
          });
          if (controls) {
              return ImageCommon.addControls(fullImage);
          }
      },
      videoCB: (function () {
          // dragging to the left contracts the video
          let mousedown = false;
          return {
              mouseover() { return mousedown = false; },
              mousedown(e) { if (e.button === 0) {
                  return mousedown = true;
              } },
              mouseup(e) { if (e.button === 0) {
                  return mousedown = false;
              } },
              mouseout(e) { if (((e.buttons & 1) || mousedown) && (e.clientX <= this.getBoundingClientRect().left)) {
                  return ImageExpand.toggle(Get$1.postFromNode(this));
              } }
          };
      })(),
      setupVideoCB(post) {
          for (var eventName in ImageExpand.videoCB) {
              var cb = ImageExpand.videoCB[eventName];
              $$1.on(post.file.fullImage, eventName, cb);
          }
          if (post.file.videoControls) {
              return $$1.on(post.file.videoControls.firstElementChild, 'click', () => ImageExpand.toggle(post));
          }
      },
      error() {
          const post = Get$1.postFromNode(this);
          $$1.rm(this);
          delete post.file.fullImage;
          // Images can error:
          //  - before the image started loading.
          //  - after the image started loading.
          // Don't try to re-expand if it was already contracted.
          if (!post.file.isExpanding && !post.file.isExpanded) {
              return;
          }
          if (ImageCommon.decodeError(this, post.file)) {
              return ImageExpand.contract(post);
          }
          // Don't autoretry images from the archive.
          if (ImageCommon.isFromArchive(this)) {
              return ImageExpand.contract(post);
          }
          return ImageCommon.error(this, post, post.file, 10 * SECOND, function (URL) {
              if (post.file.isExpanding || post.file.isExpanded) {
                  ImageExpand.contract(post);
                  if (URL) {
                      return ImageExpand.expand(post, URL);
                  }
              }
          });
      },
      menu: {
          init() {
              if (!ImageExpand.enabled) {
                  return;
              }
              const el = $$1.el('span', {
                  textContent: 'Image Expansion',
                  className: 'image-expansion-link'
              });
              const { createSubEntry } = ImageExpand.menu;
              const subEntries = [];
              for (var name in Config.imageExpansion) {
                  var conf = Config.imageExpansion[name];
                  subEntries.push(createSubEntry(name, conf[1]));
              }
              return Header$1.menu.addEntry({
                  el,
                  order: 105,
                  subEntries
              });
          },
          createSubEntry(name, desc) {
              const label = UI.checkbox(name, name);
              label.title = desc;
              const input = label.firstElementChild;
              if (['Fit width', 'Fit height'].includes(name)) {
                  $$1.on(input, 'change', ImageExpand.cb.setFitness);
              }
              $$1.event('change', null, input);
              $$1.on(input, 'change', $$1.cb.checked);
              return { el: label };
          }
      }
  };

  class Post {
      toString() { return this.ID; }
      constructor(root, thread, board, flags = {}) {
          // <% if (readJSON('/.tests_enabled')) { %>
          // @normalizedOriginal = Test.normalize root
          // <% } %>
          // Skip initialization for PostClone
          if (root === undefined && thread === undefined && board === undefined)
              return;
          this.root = root;
          this.thread = thread;
          this.board = board;
          $$1.extend(this, flags);
          this.ID = +root.id.match(/\d*$/)[0];
          this.postID = this.ID;
          this.threadID = this.thread.ID;
          this.boardID = this.board.ID;
          this.siteID = g.SITE.ID;
          this.fullID = `${this.board}.${this.ID}`;
          this.context = this;
          this.isReply = (this.ID !== this.threadID);
          root.dataset.fullID = this.fullID;
          this.nodes = this.parseNodes(root);
          if (!this.isReply) {
              this.thread.OP = this;
              for (var key of ['isSticky', 'isClosed', 'isArchived']) {
                  var selector;
                  if (selector = g.SITE.selectors.icons[key]) {
                      this.thread[key] = !!$$1(selector, this.nodes.info);
                  }
              }
              if (this.thread.isArchived) {
                  this.thread.isClosed = true;
                  this.thread.kill();
              }
          }
          const name = this.nodes.name?.textContent;
          const tripcode = this.nodes.tripcode?.textContent;
          this.info = {
              subject: this.nodes.subject?.textContent || undefined,
              name,
              email: this.nodes.email ? decodeURIComponent(this.nodes.email.href.replace(/^mailto:/, '')) : undefined,
              tripcode,
              uniqueID: this.nodes.uniqueID?.textContent,
              capcode: this.nodes.capcode?.textContent.replace('## ', ''),
              pass: this.nodes.pass?.title.match(/\d*$/)[0],
              flagCode: this.nodes.flag?.className.match(/flag-(\w+)/)?.[1].toUpperCase(),
              flagCodeTroll: this.nodes.flag?.className.match(/bfl-(\w+)/)?.[1].toUpperCase(),
              flag: this.nodes.flag?.title,
              date: this.nodes.date ? g.SITE.parseDate(this.nodes.date) : undefined,
              nameBlock: Conf['Anonymize'] ? 'Anonymous' : `${name || ''} ${tripcode || ''}`.trim(),
          };
          if (this.info.capcode) {
              this.info.nameBlock += ` ## ${this.info.capcode}`;
          }
          if (this.info.uniqueID) {
              this.info.nameBlock += ` (ID: ${this.info.uniqueID})`;
          }
          this.parseComment();
          this.parseQuotes();
          this.parseFiles();
          this.isDead = false;
          this.isHidden = false;
          this.clones = [];
          // <% if (readJSON('/.tests_enabled')) { %>
          // return if @forBuildTest
          // <% } %>
          if (g.posts.get(this.fullID)) {
              this.isRebuilt = true;
              this.clones = g.posts.get(this.fullID).clones;
              for (var clone of this.clones) {
                  clone.origin = this;
              }
          }
          if (!this.isFetchedQuote && (this.ID > this.thread.lastPost)) {
              this.thread.lastPost = this.ID;
          }
          this.board.posts.push(this.ID, this);
          this.thread.posts.push(this.ID, this);
          g.posts.push(this.fullID, this);
          this.isFetchedQuote = false;
          this.isClone = false;
      }
      parseNodes(root) {
          const s = g.SITE.selectors;
          const post = $$1(s.post, root) || root;
          const info = $$1(s.infoRoot, post);
          const nodes = {
              root,
              bottom: this.isReply || !g.SITE.isOPContainerThread ? root : $$1(s.opBottom, root),
              post,
              info,
              comment: $$1(s.comment, post),
              quotelinks: [],
              archivelinks: [],
              embedlinks: [],
              backlinks: post.getElementsByClassName('backlink'),
              uniqueIDRoot: undefined,
              uniqueID: undefined,
          };
          for (var key in s.info) {
              var selector = s.info[key];
              nodes[key] = $$1(selector, info);
          }
          g.SITE.parseNodes?.(this, nodes);
          if (!nodes.uniqueIDRoot) {
              nodes.uniqueIDRoot = nodes.uniqueID;
          }
          return nodes;
      }
      parseComment() {
          // Merge text nodes and remove empty ones.
          let bq;
          this.nodes.comment.normalize();
          // Get the comment's text.
          // <br> -> \n
          // Remove:
          //   'Comment too long'...
          //   EXIF data. (/p/)
          this.nodes.commentClean = (bq = this.nodes.comment.cloneNode(true));
          g.SITE.cleanComment?.(bq);
          return this.info.comment = this.nodesToText(bq);
      }
      commentDisplay() {
          // Get the comment's text for display purposes (e.g. notifications, excerpts).
          // In addition to what's done in generating `@info.comment`, remove:
          //   Spoilers. (filter to '[spoiler]')
          //   Rolls. (/tg/, /qst/)
          //   Fortunes. (/s4s/)
          //   Preceding and following new lines.
          //   Trailing spaces.
          const bq = this.nodes.commentClean.cloneNode(true);
          if (!Conf['Remove Spoilers'] && !Conf['Reveal Spoilers']) {
              this.cleanSpoilers(bq);
          }
          g.SITE.cleanCommentDisplay?.(bq);
          return this.nodesToText(bq).trim().replace(/\s+$/gm, '');
      }
      commentOrig() {
          // Get the comment's text for reposting purposes.
          const bq = this.nodes.commentClean.cloneNode(true);
          g.SITE.insertTags?.(bq);
          return this.nodesToText(bq);
      }
      nodesToText(bq) {
          let node;
          let text = "";
          const nodes = $$1.X('.//br|.//text()', bq);
          let i = 0;
          while ((node = nodes.snapshotItem(i++))) {
              text += node.data || '\n';
          }
          return text;
      }
      cleanSpoilers(bq) {
          const spoilers = $$(g.SITE.selectors.spoiler, bq);
          for (var node of spoilers) {
              $$1.replace(node, $$1.tn('[spoiler]'));
          }
      }
      parseQuotes() {
          this.quotes = [];
          for (var quotelink of $$(g.SITE.selectors.quotelink, this.nodes.comment)) {
              this.parseQuote(quotelink);
          }
      }
      parseQuote(quotelink) {
          // Only add quotes that link to posts on an imageboard.
          // Don't add:
          //  - board links. (>>>/b/)
          //  - catalog links. (>>>/b/catalog or >>>/b/search)
          //  - rules links. (>>>/a/rules)
          //  - text-board quotelinks. (>>>/img/1234)
          const match = quotelink.href.match(g.SITE.regexp.quotelink);
          if (!match && (!this.isClone || !quotelink.dataset.postID)) {
              return;
          } // normal or resurrected quote
          this.nodes.quotelinks.push(quotelink);
          if (this.isClone) {
              return;
          }
          // ES6 Set when?
          const fullID = `${match[1]}.${match[3]}`;
          if (!this.quotes.includes(fullID))
              this.quotes.push(fullID);
      }
      parseFiles() {
          let file;
          this.files = [];
          const fileRoots = this.fileRoots();
          let index = 0;
          for (let docIndex = 0; docIndex < fileRoots.length; docIndex++) {
              var fileRoot = fileRoots[docIndex];
              if (file = this.parseFile(fileRoot)) {
                  file.index = (index++);
                  file.docIndex = docIndex;
                  this.files.push(file);
              }
          }
          if (this.files.length) {
              return this.file = this.files[0];
          }
      }
      fileRoots() {
          if (g.SITE.selectors.multifile) {
              const roots = $$(g.SITE.selectors.multifile, this.nodes.root);
              if (roots.length) {
                  return roots;
              }
          }
          return [this.nodes.root];
      }
      parseFile(fileRoot) {
          const file = { isDead: false };
          for (var key in g.SITE.selectors.file) {
              var selector = g.SITE.selectors.file[key];
              file[key] = $$1(selector, fileRoot);
          }
          file.thumbLink = file.thumb?.parentNode;
          if (!(file.text && file.link)) {
              return;
          }
          if (!g.SITE.parseFile(this, file)) {
              return;
          }
          $$1.extend(file, {
              url: file.link.href,
              isImage: $$1.isImage(file.link.href),
              isVideo: $$1.isVideo(file.link.href)
          });
          let size = +file.size.match(/[\d.]+/)[0];
          let unit = ['B', 'KB', 'MB', 'GB'].indexOf(file.size.match(/\w+$/)[0]);
          while (unit-- > 0) {
              size *= 1024;
          }
          file.sizeInBytes = size;
          return file;
      }
      kill(file, index = 0) {
          let strong;
          if (file) {
              if (this.isDead || this.files[index].isDead) {
                  return;
              }
              this.files[index].isDead = true;
              $$1.addClass(this.nodes.root, 'deleted-file');
          }
          else {
              if (this.isDead) {
                  return;
              }
              this.isDead = true;
              $$1.rmClass(this.nodes.root, 'deleted-file');
              $$1.addClass(this.nodes.root, 'deleted-post');
          }
          if (!(strong = $$1('strong.warning', this.nodes.info))) {
              strong = $$1.el('strong', { className: 'warning' });
              $$1.after($$1('input', this.nodes.info), strong);
          }
          strong.textContent = file ? '[File deleted]' : '[Deleted]';
          if (this.isClone) {
              return;
          }
          for (var clone of this.clones) {
              clone.kill(file, index);
          }
          if (file) {
              return;
          }
          // Get quotelinks/backlinks to this post
          // and paint them (Dead).
          for (var quotelink of Get$1.allQuotelinksLinkingTo(this)) {
              if (!$$1.hasClass(quotelink, 'deadlink')) {
                  $$1.add(quotelink, Post.deadMark.cloneNode(true));
                  $$1.addClass(quotelink, 'deadlink');
              }
          }
      }
      // XXX Workaround for 4chan's racing condition
      // giving us false-positive dead posts.
      resurrect() {
          this.isDead = false;
          $$1.rmClass(this.nodes.root, 'deleted-post');
          const strong = $$1('strong.warning', this.nodes.info);
          // no false-positive files
          if (this.files.some(file => file.isDead)) {
              $$1.addClass(this.nodes.root, 'deleted-file');
              strong.textContent = '[File deleted]';
          }
          else {
              $$1.rm(strong);
          }
          if (this.isClone) {
              return;
          }
          for (var clone of this.clones) {
              clone.resurrect();
          }
          for (var quotelink of Get$1.allQuotelinksLinkingTo(this)) {
              if ($$1.hasClass(quotelink, 'deadlink')) {
                  $$1.rm($$1('.qmark-dead', quotelink));
                  $$1.rmClass(quotelink, 'deadlink');
              }
          }
      }
      collect() {
          g.posts.rm(this.fullID);
          this.thread.posts.rm(this);
          this.board.posts.rm(this);
      }
      addClone(context, contractThumb) {
          // Callbacks may not have been run yet due to anti-browser-lock delay in Main.callbackNodesDB.
          Callbacks.Post.execute(this);
          return new PostClone(this, context, contractThumb);
      }
      rmClone(index) {
          this.clones.splice(index, 1);
          for (var clone of this.clones.slice(index)) {
              clone.nodes.root.dataset.clone = index++;
          }
      }
      setCatalogOP(isCatalogOP) {
          this.nodes.root.classList.toggle('catalog-container', isCatalogOP);
          this.nodes.root.classList.toggle('opContainer', !isCatalogOP);
          this.nodes.post.classList.toggle('catalog-post', isCatalogOP);
          this.nodes.post.classList.toggle('op', !isCatalogOP);
          this.nodes.post.style.left = (this.nodes.post.style.right = null);
      }
  }
  // because of a circular dependency $ might not be initialized, so we can't use $.el
  Post.deadMark = (() => {
      const el = document.createElement('span');
      // \u00A0 is nbsp
      el.textContent = '\u00A0(Dead)';
      el.className = 'qmark-dead';
      return el;
  })();
  class PostClone extends Post {
      constructor(origin, context, contractThumb) {
          super();
          this.isClone = true;
          let file, fileRoots, key;
          this.origin = origin;
          this.context = context;
          for (key of ['ID', 'postID', 'threadID', 'boardID', 'siteID', 'fullID', 'board', 'thread', 'info', 'quotes', 'isReply']) {
              // Copy or point to the origin's key value.
              this[key] = this.origin[key];
          }
          const { nodes } = this.origin;
          const root = contractThumb ? this.cloneWithoutVideo(nodes.root) : nodes.root.cloneNode(true);
          for (var node of [root, ...$$('[id]', root)]) {
              node.id += `_${PostClone.suffix}`;
          }
          PostClone.suffix++;
          // Remove inlined posts inside of this post.
          for (var inline of $$('.inline', root)) {
              $$1.rm(inline);
          }
          for (var inlined of $$('.inlined', root)) {
              $$1.rmClass(inlined, 'inlined');
          }
          this.nodes = this.parseNodes(root);
          root.hidden = false; // post hiding
          $$1.rmClass(root, 'forwarded'); // quote inlining
          $$1.rmClass(this.nodes.post, 'highlight'); // keybind navigation, ID highlighting
          // Remove catalog stuff.
          if (!this.isReply) {
              this.setCatalogOP(false);
              $$1.rm($$1('.catalog-link', this.nodes.post));
              $$1.rm($$1('.catalog-stats', this.nodes.post));
              $$1.rm($$1('.catalog-replies', this.nodes.post));
          }
          this.parseQuotes();
          this.quotes = [...this.origin.quotes];
          this.files = [];
          if (this.origin.files.length) {
              fileRoots = this.fileRoots();
          }
          for (var originFile of this.origin.files) {
              // Copy values, point to relevant elements.
              file = { ...originFile };
              var fileRoot = fileRoots[file.docIndex];
              for (key in g.SITE.selectors.file) {
                  var selector = g.SITE.selectors.file[key];
                  file[key] = $$1(selector, fileRoot);
              }
              file.thumbLink = file.thumb?.parentNode;
              if (file.thumbLink) {
                  file.fullImage = $$1('.full-image', file.thumbLink);
              }
              file.videoControls = $$1('.video-controls', file.text);
              if (file.videoThumb) {
                  file.thumb.muted = true;
              }
              this.files.push(file);
          }
          if (this.files.length) {
              this.file = this.files[0];
              // Contract thumbnails in quote preview
              if (this.file.thumb && contractThumb) {
                  ImageExpand.contract(this);
              }
          }
          if (this.origin.isDead) {
              this.isDead = true;
          }
          root.dataset.clone = this.origin.clones.push(this) - 1;
          return this;
      }
      cloneWithoutVideo(node) {
          if ((node.tagName === 'VIDEO') && !node.dataset.md5) { // (exception for WebM thumbnails)
              return [];
          }
          else if ((node.nodeType === Node.ELEMENT_NODE) && $$1('video', node)) {
              const clone = node.cloneNode(false);
              for (var child of node.childNodes) {
                  $$1.add(clone, this.cloneWithoutVideo(child));
              }
              return clone;
          }
          else {
              return node.cloneNode(true);
          }
      }
  }
  PostClone.suffix = 0;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Menu = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu']) { return; }

      this.button = $$1.el('a', {
        className: 'menu-button',
        href:      'javascript:;'
      }
      );

      $$1.extend(this.button, {textContent: "🞃"});

      this.menu = new UI.Menu('post');
      Callbacks.Post.push({
        name: 'Menu',
        cb:   this.node
      });

      return Callbacks.CatalogThread.push({
        name: 'Menu',
        cb:   this.catalogNode
      });
    },

    node() {
      if (this.isClone) {
        const button = $$1('.menu-button', this.nodes.info);
        $$1.rmClass(button, 'active');
        $$1.rm($$1('.dialog', this.nodes.info));
        Menu.makeButton(this, button);
        return;
      }
      return $$1.add(this.nodes.info, Menu.makeButton(this));
    },

    catalogNode() {
      return $$1.after(this.nodes.icons, Menu.makeButton(this.thread.OP));
    },

    makeButton(post, button) {
      if (!button) { button = Menu.button.cloneNode(true); }
      $$1.on(button, 'click', function(e) {
        return Menu.menu.toggle(e, this, post);
      });
      return button;
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Recursive = {
    recursives: dict(),
    init() {
      if (!['index', 'thread'].includes(g.VIEW)) { return; }
      return Callbacks.Post.push({
        name: 'Recursive',
        cb:   this.node
      });
    },

    node() {
      if (this.isClone || this.isFetchedQuote) { return; }
      for (var quote of this.quotes) {
        var obj;
        if ((obj = Recursive.recursives[quote])) {
          for (var i = 0; i < obj.recursives.length; i++) {
            var recursive = obj.recursives[i];
            recursive(this, ...obj.args[i]);
          }
        }
      }
    },

    add(recursive, post, ...args) {
      const obj = Recursive.recursives[post.fullID] || (Recursive.recursives[post.fullID] = {
        recursives: [],
        args: []
      });
      obj.recursives.push(recursive);
      return obj.args.push(args);
    },

    rm(recursive, post) {
      let obj;
      if (!(obj = Recursive.recursives[post.fullID])) { return; }
      for (let i = 0; i < obj.recursives.length; i++) {
        var rec = obj.recursives[i];
        if (rec === recursive) {
          obj.recursives.splice(i, 1);
          obj.args.splice(i, 1);
        }
      }
    },

    apply(recursive, post, ...args) {
      const {fullID} = post;
      return g.posts.forEach(function(post) {
        if (post.quotes.includes(fullID)) {
          return recursive(post, ...args);
        }
      });
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var PostHiding = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || (!Conf['Reply Hiding Buttons'] && !(Conf['Menu'] && Conf['Reply Hiding Link']))) { return; }

      if (Conf['Reply Hiding Buttons']) {
        $$1.addClass(doc$1, "reply-hide");
      }

      this.db = new DataBoard('hiddenPosts');
      return Callbacks.Post.push({
        name: 'Reply Hiding',
        cb:   this.node
      });
    },

    isHidden(boardID, threadID, postID) {
      return !!(PostHiding.db && PostHiding.db.get({boardID, threadID, postID}));
    },

    node() {
      let data, sa;
      if (!this.isReply || this.isClone || this.isFetchedQuote) { return; }

      if (data = PostHiding.db.get({boardID: this.board.ID, threadID: this.thread.ID, postID: this.ID})) {
        if (data.thisPost) {
          PostHiding.hide(this, data.makeStub, data.hideRecursively);
        } else {
          Recursive.apply(PostHiding.hide, this, data.makeStub, true);
          Recursive.add(PostHiding.hide, this, data.makeStub, true);
        }
      }

      if (!Conf['Reply Hiding Buttons']) { return; }

      const button = PostHiding.makeButton(this, 'hide');
      if (sa = g.SITE.selectors.sideArrows) {
        const sideArrows = $$1(sa, this.nodes.root);
        $$1.replace(sideArrows.firstChild, button);
        return sideArrows.className = 'replacedSideArrows';
      } else {
        return $$1.prepend(this.nodes.info, button);
      }
    },

    menu: {
      init() {
        if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Reply Hiding Link']) { return; }

        // Hide
        let div = $$1.el('div', {
          className: 'hide-reply-link',
          textContent: 'Hide'
        }
        );

        let apply = $$1.el('a', {
          textContent: 'Apply',
          href: 'javascript:;'
        }
        );
        $$1.on(apply, 'click', PostHiding.menu.hide);

        let thisPost = UI.checkbox('thisPost', 'This post',    true);
        let replies  = UI.checkbox('replies',  'Hide replies', Conf['Recursive Hiding']);
        const makeStub = UI.checkbox('makeStub', 'Make stub',    Conf['Stubs']);

        Menu.menu.addEntry({
          el: div,
          order: 20,
          open(post) {
            if (!post.isReply || post.isClone || post.isHidden) {
              return false;
            }
            PostHiding.menu.post = post;
            return true;
          },
          subEntries: [
              {el: apply}
            ,
              {el: thisPost}
            ,
              {el: replies}
            ,
              {el: makeStub}
          ]});

        // Show
        div = $$1.el('div', {
          className: 'show-reply-link',
          textContent: 'Show'
        }
        );

        apply = $$1.el('a', {
          textContent: 'Apply',
          href: 'javascript:;'
        }
        );
        $$1.on(apply, 'click', PostHiding.menu.show);

        thisPost = UI.checkbox('thisPost', 'This post',    false);
        replies  = UI.checkbox('replies',  'Show replies', false);
        const hideStubLink = $$1.el('a', {
          textContent: 'Hide stub',
          href: 'javascript:;'
        }
        );
        $$1.on(hideStubLink, 'click', PostHiding.menu.hideStub);

        Menu.menu.addEntry({
          el: div,
          order: 20,
          open(post) {
            let data;
            if (!post.isReply || post.isClone || !post.isHidden) {
              return false;
            }
            if (!(data = PostHiding.db.get({boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID}))) {
              return false;
            }
            PostHiding.menu.post = post;
            thisPost.firstChild.checked = post.isHidden;
            replies.firstChild.checked  = (data?.hideRecursively != null) ? data.hideRecursively : Conf['Recursive Hiding'];
            return true;
          },
          subEntries: [
              {el: apply}
            ,
              {el: thisPost}
            ,
              {el: replies}
          ]});

        return Menu.menu.addEntry({
          el: hideStubLink,
          order: 15,
          open(post) {
            if (!post.isReply || post.isClone || !post.isHidden) {
              return false;
            }
            if (!(PostHiding.db.get({boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID}))) {
              return false;
            }
            return PostHiding.menu.post = post;
          }
        });
      },

      hide() {
        const parent   = this.parentNode;
        const thisPost = $$1('input[name=thisPost]', parent).checked;
        const replies  = $$1('input[name=replies]',  parent).checked;
        const makeStub = $$1('input[name=makeStub]', parent).checked;
        const {post}   = PostHiding.menu;
        if (thisPost) {
          PostHiding.hide(post, makeStub, replies);
        } else if (replies) {
          Recursive.apply(PostHiding.hide, post, makeStub, true);
          Recursive.add(PostHiding.hide, post, makeStub, true);
        } else {
          return;
        }
        PostHiding.saveHiddenState(post, true, thisPost, makeStub, replies);
        return $$1.event('CloseMenu');
      },

      show() {
        let data;
        const parent   = this.parentNode;
        const thisPost = $$1('input[name=thisPost]', parent).checked;
        const replies  = $$1('input[name=replies]',  parent).checked;
        const {post}   = PostHiding.menu;
        if (thisPost) {
          PostHiding.show(post, replies);
        } else if (replies) {
          Recursive.apply(PostHiding.show, post, true);
          Recursive.rm(PostHiding.hide, post, true);
        } else {
          return;
        }
        if (data = PostHiding.db.get({boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID})) {
          PostHiding.saveHiddenState(post, !(thisPost && replies), !thisPost, data.makeStub, !replies);
        }
        return $$1.event('CloseMenu');
      },
      hideStub() {
        let data;
        const {post} = PostHiding.menu;
        if (data = PostHiding.db.get({boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID})) {
          PostHiding.show(post, data.hideRecursively);
          PostHiding.hide(post, false, data.hideRecursively);
          PostHiding.saveHiddenState(post, true, true, false, data.hideRecursively);
        }
        $$1.event('CloseMenu');
      }
    },

    makeButton(post, type) {
      const span = $$1.el('span', {
        textContent: type === 'hide' ? '➖︎' : '➕︎',
      });
      const a = $$1.el('a', {
        className: `${type}-reply-button`,
        href:      'javascript:;'
      }
      );
      $$1.add(a, span);
      $$1.on(a, 'click', PostHiding.toggle);
      return a;
    },

    saveHiddenState(post, isHiding, thisPost, makeStub, hideRecursively) {
      const data = {
        boardID:  post.board.ID,
        threadID: post.thread.ID,
        postID:   post.ID
      };
      if (isHiding) {
        data.val = {
          thisPost: thisPost !== false, // undefined -> true
          makeStub,
          hideRecursively
        };
        return PostHiding.db.set(data);
      } else {
        return PostHiding.db.delete(data);
      }
    },

    toggle() {
      const post = Get$1.postFromNode(this);
      PostHiding[(post.isHidden ? 'show' : 'hide')](post);
      return PostHiding.saveHiddenState(post, post.isHidden);
    },

    hide(post, makeStub=Conf['Stubs'], hideRecursively=Conf['Recursive Hiding']) {
      if (post.isHidden) { return; }
      post.isHidden = true;

      if (hideRecursively) {
        Recursive.apply(PostHiding.hide, post, makeStub, true);
        Recursive.add(PostHiding.hide, post, makeStub, true);
      }

      for (var quotelink of Get$1.allQuotelinksLinkingTo(post)) {
        $$1.addClass(quotelink, 'filtered');
      }

      if (!makeStub) {
        post.nodes.root.hidden = true;
        return;
      }

      const a = PostHiding.makeButton(post, 'show');
      $$1.add(a, $$1.tn(` ${post.info.nameBlock}`));
      post.nodes.stub = $$1.el('div',
        {className: 'stub'});
      $$1.add(post.nodes.stub, a);
      if (Conf['Menu']) {
        $$1.add(post.nodes.stub, Menu.makeButton(post));
      }
      return $$1.prepend(post.nodes.root, post.nodes.stub);
    },

    show(post, showRecursively=Conf['Recursive Hiding']) {
      if (post.nodes.stub) {
        $$1.rm(post.nodes.stub);
        delete post.nodes.stub;
      } else {
        post.nodes.root.hidden = false;
      }
      post.isHidden = false;
      if (showRecursively) {
        Recursive.apply(PostHiding.show, post, true);
        Recursive.rm(PostHiding.hide, post);
      }
      for (var quotelink of Get$1.allQuotelinksLinkingTo(post)) {
        $$1.rmClass(quotelink, 'filtered');
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var RelativeDates = {
    INTERVAL: 30000,

    init() {
      if (
        (['index', 'thread', 'archive'].includes(g.VIEW) && Conf['Relative Post Dates'] && !Conf['Relative Date Title']) ||
        Index$1.enabled
      ) {
        this.flush();
        $$1.on(d$1, 'visibilitychange PostsInserted', this.flush);
      }

      if (Conf['Relative Post Dates']) {
        return Callbacks.Post.push({
          name: 'Relative Post Dates',
          cb:   this.node
        });
      }
    },

    node() {
      if (!this.info.date) { return; }
      const dateEl = this.nodes.date;
      if (Conf['Relative Date Title']) {
        $$1.on(dateEl, 'mouseover', () => RelativeDates.hover(this));
        return;
      }
      if (this.isClone) { return; }

      // Show original absolute time as tooltip so users can still know exact times
      // Since "Time Formatting" runs its `node` before us, the title tooltip will
      // pick up the user-formatted time instead of 4chan time when enabled.
      dateEl.title = dateEl.textContent;

      return RelativeDates.update(this);
    },

    // diff is milliseconds from now.
    relative(diff, now, date, abbrev) {
      let number;
      let unit = (() => {
        if ((number = (diff / DAY)) >= 1) {
        const years  = now.getFullYear()  - date.getFullYear();
          let months = now.getMonth() - date.getMonth();
        const days   = now.getDate()  - date.getDate();
          if (years > 1) {
            number = years - ((months < 0) || ((months === 0) && (days < 0)));
            return 'year';
          } else if ((years === 1) && ((months > 0) || ((months === 0) && (days >= 0)))) {
            number = years;
            return 'year';
        } else if ((months = months + (12*years)) > 1) {
            number = months - (days < 0);
            return 'month';
          } else if ((months === 1) && (days >= 0)) {
            number = months;
            return 'month';
          } else {
            return 'day';
          }
      } else if ((number = (diff / HOUR)) >= 1) {
        return 'hour';
      } else if ((number = (diff / MINUTE)) >= 1) {
        return 'minute';
      } else {
        // prevent "-1 seconds ago"
        number = Math.max(0, diff) / SECOND;
        return 'second';
      }
      })();

      const rounded = Math.round(number);

      if (abbrev) {
        unit = unit === 'month' ? 'mo' : unit[0];
      } else {
        if (rounded !== 1) { unit += 's'; } // pluralize
      }

      if (abbrev) { return `${rounded}${unit}`; } else { return `${rounded} ${unit} ago`; }
    },

    // Changing all relative dates as soon as possible incurs many annoying
    // redraws and scroll stuttering. Thus, sacrifice accuracy for UX/CPU economy,
    // and perform redraws when the DOM is otherwise being manipulated (and scroll
    // stuttering won't be noticed), falling back to INTERVAL while the page
    // is visible.
    //
    // Each individual dateTime element will add its update() function to the stale list
    // when it is to be called.
    stale: [],
    flush() {
      // No point in changing the dates until the user sees them.
      if (d$1.hidden) { return; }

      const now = new Date();
      for (var data of RelativeDates.stale) { RelativeDates.update(data, now); }
      RelativeDates.stale = [];

      // Reset automatic flush.
      clearTimeout(RelativeDates.timeout);
      return RelativeDates.timeout = setTimeout(RelativeDates.flush, RelativeDates.INTERVAL);
    },

    hover(post) {
      const {
        date
      } = post.info;
      const now  = new Date();
      const diff = now - date;
      return post.nodes.date.title = RelativeDates.relative(diff, now, date);
    },

    // `update()`, when called from `flush()`, updates the elements,
    // and re-calls `setOwnTimeout()` to re-add `data` to the stale list later.
    update(data, now) {
      let abbrev, date;
      const isPost = data instanceof Post;
      if (isPost) {
        ({
          date
        } = data.info);
        abbrev = false;
      } else {
        date = new Date(+data.dataset.utc);
        abbrev = !!data.dataset.abbrev;
      }
      if (!now) { now = new Date(); }
      const diff = now - date;
      const relative = RelativeDates.relative(diff, now, date, abbrev);
      if (isPost) {
        for (var singlePost of [data].concat(data.clones)) {
          singlePost.nodes.date.firstChild.textContent = relative;
        }
      } else {
        data.firstChild.textContent = relative;
      }
      return RelativeDates.setOwnTimeout(diff, data);
    },

    setOwnTimeout(diff, data) {
      const delay = diff < MINUTE ?
        SECOND - ((diff + (SECOND / 2)) % SECOND)
      : diff < HOUR ?
        MINUTE - ((diff + (MINUTE / 2)) % MINUTE)
      : diff < DAY ?
        HOUR - ((diff + (HOUR / 2)) % HOUR)
      :
        DAY - ((diff + (DAY / 2)) % DAY);
      return setTimeout(RelativeDates.markStale, delay, data);
    },

    markStale(data) {
      if (RelativeDates.stale.includes(data)) { return; } // We can call RelativeDates.update() multiple times.
      if (data instanceof Post && !g.posts.get(data.fullID)) { return; } // collected post.
      if (data instanceof Element && !doc$1.contains(data)) { return; } // removed catalog reply.
      return RelativeDates.stale.push(data);
    }
  };

  var ThreadWatcherPage = `<div class="move">
  Thread Watcher <a class="refresh" title="Check threads" href="javascript:;">🗘</a>
  <span id="watcher-status"></span>
  <a class="menu-button" href="javascript:;">🞃</a>
  <a class="close" href="javascript:;">×</a>
</div>
<div id="watched-threads"></div>
`;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS205: Consider reworking code to avoid use of IIFEs
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var BoardConfig = {
    cbs: [],

    init() {
      let middle;
      if (g.SITE.software !== 'yotsuba') { return; }
      const now = Date.now();
      if (now - (2 * HOUR) >= ((middle = Conf['boardConfig'].lastChecked || 0)) || middle > now) {
        return $$1.ajax(`${location.protocol}//a.4cdn.org/boards.json`,
          {onloadend: this.load});
      } else {
        const {boards} = Conf['boardConfig'];
        return this.set(boards);
      }
    },

    load() {
      let boards;
      if ((this.status === 200) && this.response && this.response.boards) {
        boards = dict();
        for (var board of this.response.boards) {
          boards[board.board] = board;
        }
        $$1.set('boardConfig', {boards, lastChecked: Date.now()});
      } else {
        ({boards} = Conf['boardConfig']);
        const err = (() => { switch (this.status) {
          case 0:   return 'Connection Error';
          case 200: return 'Invalid Data';
          default:          return `Error ${this.statusText} (${this.status})`;
        } })();
        new Notice('warning', `Failed to load board configuration. ${err}`, 20);
      }
      return BoardConfig.set(boards);
    },

    set(boards) {
      this.boards = boards;
      for (var ID in g.boards) {
        var board = g.boards[ID];
        board.config = this.boards[ID] || {};
      }
      for (var cb of this.cbs) {
        $$1.queueTask(cb);
      }
    },

    ready(cb) {
      if (this.boards) {
        return cb();
      } else {
        return this.cbs.push(cb);
      }
    },

    sfwBoards(sfw) {
      return (() => {
        const result = [];
        const object = this.boards || Conf['boardConfig'].boards;
        for (var board in object) {
          var data = object[board];
          if (!!data.ws_board === sfw) {
            result.push(board);
          }
        }
        return result;
      })();
    },

    isSFW(board) {
      return !!(this.boards || Conf['boardConfig'].boards)[board]?.ws_board;
    },

    domain(board) {
      return `boards.${BoardConfig.isSFW(board) ? '4channel' : '4chan'}.org`;
    },

    isArchived(board) {
      // assume archive exists if no data available to prevent cleaning of archived threads
      const data = (this.boards || Conf['boardConfig'].boards)[board];
      return !data || data.is_archived;
    },

    noAudio(boardID) {
      if (g.SITE.software !== 'yotsuba') { return false; }
      const boards = this.boards || Conf['boardConfig'].boards;
      return boards && boards[boardID] && !boards[boardID].webm_audio;
    },

    title(boardID) {
      return (this.boards || Conf['boardConfig'].boards)?.[boardID]?.title || '';
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class Board {
    toString() { return this.ID; }

    constructor(ID) {
      this.ID = ID;
      this.boardID = this.ID;
      this.siteID  = g.SITE.ID;
      this.threads = new SimpleDict();
      this.posts   = new SimpleDict();
      this.config  = BoardConfig.boards?.[this.ID] || {};

      g.boards[this] = this;
    }

    cooldowns() {
      const c2 = (this.config || {}).cooldowns || {};
      const c = {
        thread: c2.threads || 0,
        reply:  c2.replies || 0,
        image:  c2.images  || 0,
        thread_global: 300 // inter-board thread cooldown
      };
      // Pass users have reduced cooldowns.
      if (d$1.cookie.indexOf('pass_enabled=1') >= 0) {
        for (var key of ['reply', 'image']) {
          c[key] = Math.ceil(c[key] / 2);
        }
      }
      return c;
    }
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const PostRedirect = {
    init() {
      return $$1.on(d$1, 'QRPostSuccessful', e => {
        if (!e.detail.redirect) { return; }
        this.event = e;
        this.delays = 0;
        return $$1.queueTask(() => {
          if ((e === this.event) && (this.delays === 0)) {
            return location.href = e.detail.redirect;
          }
        });
      });
    },

    delays: 0,

    delay() {
      if (!this.event) { return null; }
      const e = this.event;
      this.delays++;
      return () => {
        if (e !== this.event) { return; }
        this.delays--;
        if (this.delays === 0) {
          return location.href = e.detail.redirect;
        }
      };
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ExpandComment = {
    init() {
      if ((g.VIEW !== 'index') || !Conf['Comment Expansion'] || Conf['JSON Index']) { return; }

      return Callbacks.Post.push({
        name: 'Comment Expansion',
        cb:   this.node
      });
    },

    node() {
      let a;
      if (a = $$1('.abbr > a:not([onclick])', this.nodes.comment)) {
        return $$1.on(a, 'click', ExpandComment.cb);
      }
    },

    callbacks: [],

    cb(e) {
      e.preventDefault();
      return ExpandComment.expand(Get$1.postFromNode(this));
    },

    expand(post) {
      let a;
      if (post.nodes.longComment && !post.nodes.longComment.parentNode) {
        $$1.replace(post.nodes.shortComment, post.nodes.longComment);
        post.nodes.comment = post.nodes.longComment;
        return;
      }
      if (!(a = $$1('.abbr > a', post.nodes.comment))) { return; }
      a.textContent = `Post No.${post} Loading...`;
      return $$1.cache(g.SITE.urls.threadJSON({boardID: post.boardID, threadID: post.threadID}), function() { return ExpandComment.parse(this, a, post); });
    },

    contract(post) {
      if (!post.nodes.shortComment) { return; }
      const a = $$1('.abbr > a', post.nodes.shortComment);
      a.textContent = 'here';
      $$1.replace(post.nodes.longComment, post.nodes.shortComment);
      return post.nodes.comment = post.nodes.shortComment;
    },

    parse(req, a, post) {
      let postObj, spoilerRange;
      const {status} = req;
      if (![200, 304].includes(status)) {
        a.textContent = status ? `Error ${req.statusText} (${status})` : 'Connection Error';
        return;
      }

      const {
        posts
      } = req.response;
      if (spoilerRange = posts[0].custom_spoiler) {
        g.SITE.Build.spoilerRange[g.BOARD] = spoilerRange;
      }

      for (postObj of posts) {
        if (postObj.no === post.ID) { break; }
      }
      if (postObj.no !== post.ID) {
        a.textContent = `Post No.${post} not found.`;
        return;
      }

      const {comment} = post.nodes;
      const clone = comment.cloneNode(false);
      clone.innerHTML = postObj.com;
      // Fix pathnames
      for (var quote of $$('.quotelink', clone)) {
        var href = quote.getAttribute('href');
        if (href[0] === '/') { continue; } // Cross-board quote, or board link
        if (href[0] === '#') {
          quote.href = `${a.pathname.split(/\/+/).splice(0,4).join('/')}${href}`;
        } else {
          quote.href = `${a.pathname.split(/\/+/).splice(0,3).join('/')}/${href}`;
        }
      }
      post.nodes.shortComment = comment;
      $$1.replace(comment, clone);
      post.nodes.comment = (post.nodes.longComment = clone);
      post.parseComment();
      post.parseQuotes();

      for (var callback of ExpandComment.callbacks) {
        callback.call(post);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var QuoteYou = {
    init() {
      if (!Conf['Remember Your Posts']) { return; }

      this.db = new DataBoard('yourPosts');
      $$1.sync('Remember Your Posts', enabled => Conf['Remember Your Posts'] = enabled);
      $$1.on(d$1, 'QRPostSuccessful', function(e) {
        const cb = PostRedirect.delay();
        return $$1.get('Remember Your Posts', Conf['Remember Your Posts'], function(items) {
          if (!items['Remember Your Posts']) { return; }
          const {boardID, threadID, postID} = e.detail;
          return QuoteYou.db.set({boardID, threadID, postID, val: true}, cb);
        });
      });

      if (!['index', 'thread', 'archive'].includes(g.VIEW)) { return; }

      if (Conf['Highlight Own Posts']) {
        $$1.addClass(doc$1, 'highlight-own');
      }

      if (Conf['Highlight Posts Quoting You']) {
        $$1.addClass(doc$1, 'highlight-you');
      }

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      // \u00A0 is nbsp
      this.mark = $$1.el('span', {
        textContent: '\u00A0(You)',
        className:   'qmark-you'
      }
      );
      Callbacks.Post.push({
        name: 'Mark Quotes of You',
        cb:   this.node
      });

      return QuoteYou.menu.init();
    },

    isYou(post) {
      return !!QuoteYou.db?.get({
        boardID:  post.boardID,
        threadID: post.threadID,
        postID:   post.ID
      });
    },

    node() {
      if (this.isClone) { return; }

      if (QuoteYou.isYou(this)) {
        $$1.addClass(this.nodes.root, 'yourPost');
      }

      // Stop there if there's no quotes in that post.
      if (!this.quotes.length) { return; }

      for (var quotelink of this.nodes.quotelinks) {
        if (QuoteYou.db.get(Get$1.postDataFromLink(quotelink))) {
          if (Conf['Mark Quotes of You']) { $$1.add(quotelink, QuoteYou.mark.cloneNode(true)); }
          $$1.addClass(quotelink, 'you');
          $$1.addClass(this.nodes.root, 'quotesYou');
        }
      }
    },

    menu: {
      init() {
        const label = $$1.el('label',
          {className: 'toggle-you'}
        ,
          {innerHTML: '<input type="checkbox"> You'});
        const input = $$1('input', label);
        $$1.on(input, 'change', QuoteYou.menu.toggle);
        return Menu.menu?.addEntry({
          el: label,
          order: 80,
          open(post) {
            QuoteYou.menu.post = (post.origin || post);
            input.checked = QuoteYou.isYou(post);
            return true;
          }
        });
      },

      toggle() {
        const {post} = QuoteYou.menu;
        const data = {boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID, val: true};
        if (this.checked) {
          QuoteYou.db.set(data);
        } else {
          QuoteYou.db.delete(data);
        }
        for (var clone of [post].concat(post.clones)) {
          clone.nodes.root.classList.toggle('yourPost', this.checked);
        }
        for (var quotelink of Get$1.allQuotelinksLinkingTo(post)) {
          if (this.checked) {
            if (Conf['Mark Quotes of You']) { $$1.add(quotelink, QuoteYou.mark.cloneNode(true)); }
          } else {
            $$1.rm($$1('.qmark-you', quotelink));
          }
          quotelink.classList.toggle('you', this.checked);
          if ($$1.hasClass(quotelink, 'quotelink')) {
            var quoter = Get$1.postFromNode(quotelink).nodes.root;
            quoter.classList.toggle('quotesYou', !!$$1('.quotelink.you', quoter));
          }
        }
      }
    },

    cb: {
      seek(type) {
        let highlighted, post;
        let result;
        const {highlight} = g.SITE.classes;
        if (highlighted = $$1(`.${highlight}`)) { $$1.rmClass(highlighted, highlight); }

        if (!QuoteYou.lastRead || !doc$1.contains(QuoteYou.lastRead) || !$$1.hasClass(QuoteYou.lastRead, 'quotesYou')) {
          if (!(post = (QuoteYou.lastRead = $$1('.quotesYou')))) {
            new Notice('warning', 'No posts are currently quoting you, loser.', 20);
            return;
          }
          if (QuoteYou.cb.scroll(post)) { return; }
        } else {
          post = QuoteYou.lastRead;
        }

        const str = `${type}::div[contains(@class,'quotesYou')]`;

        while (post = (result = $$1.X(str, post)).snapshotItem(type === 'preceding' ? result.snapshotLength - 1 : 0)) {
          if (QuoteYou.cb.scroll(post)) { return; }
        }

        const posts = $$('.quotesYou');
        return QuoteYou.cb.scroll(posts[type === 'following' ? 0 : posts.length - 1]);
      },

      scroll(root) {
        const post = Get$1.postFromRoot(root);
        if (!post.nodes.post.getBoundingClientRect().height) {
          return false;
        } else {
          QuoteYou.lastRead = root;
          location.href = Get$1.url('post', post);
          Header$1.scrollTo(post.nodes.post);
          if (post.isReply) {
            const sel = `${g.SITE.selectors.postContainer}${g.SITE.selectors.highlightable.reply}`;
            let node = post.nodes.root;
            if (!node.matches(sel)) { node = $$1(sel, node); }
            $$1.addClass(node, g.SITE.classes.highlight);
          }
          return true;
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class RandomAccessList {
    constructor(items) {
      this.length = 0;
      if (items) { for (var item of items) { this.push(item); } }
    }

    push(data) {
      let item;
      let {ID} = data;
      if (!ID) { ID = data.id; }
      if (this[ID]) { return; }
      const {last} = this;
      this[ID] = (item = {
        prev: last,
        next: null,
        data,
        ID
      });
      item.prev = last;
      this.last = last ?
        (last.next = item)
      :
        (this.first = item);
      return this.length++;
    }

    before(root, item) {
      if ((item.next === root) || (item === root)) { return; }

      this.rmi(item);

      const {prev} = root;
      root.prev = item;
      item.next = root;
      item.prev = prev;
      if (prev) {
        return prev.next = item;
      } else {
        return this.first = item;
      }
    }

    after(root, item) {
      if ((item.prev === root) || (item === root)) { return; }

      this.rmi(item);

      const {next} = root;
      root.next = item;
      item.prev = root;
      item.next = next;
      if (next) {
        return next.prev = item;
      } else {
        return this.last = item;
      }
    }

    prepend(item) {
      const {first} = this;
      if ((item === first) || !this[item.ID]) { return; }
      this.rmi(item);
      item.next  = first;
      if (first) {
        first.prev = item;
      } else {
        this.last = item;
      }
      this.first = item;
      return delete item.prev;
    }

    shift() {
      return this.rm(this.first.ID);
    }

    order() {
      let item;
      const order = [(item = this.first)];
      while ((item = item.next)) { order.push(item); }
      return order;
    }

    rm(ID) {
      const item = this[ID];
      if (!item) { return; }
      delete this[ID];
      this.length--;
      this.rmi(item);
      delete item.next;
      return delete item.prev;
    }

    rmi(item) {
      const {prev, next} = item;
      if (prev) {
        prev.next = next;
      } else {
        this.first = next;
      }
      if (next) {
        return next.prev = prev;
      } else {
        return this.last = prev;
      }
    }
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Unread = {
    init() {
      if ((g.VIEW !== 'thread') || (
        !Conf['Unread Count'] &&
        !Conf['Unread Favicon'] &&
        !Conf['Unread Line'] &&
        !Conf['Remember Last Read Post'] &&
        !Conf['Desktop Notifications'] &&
        !Conf['Quote Threading']
      )) { return; }

      if (Conf['Remember Last Read Post']) {
        $$1.sync('Remember Last Read Post', enabled => Conf['Remember Last Read Post'] = enabled);
        this.db = new DataBoard('lastReadPosts', this.sync);
      }

      this.hr = $$1.el('hr', {
        id: 'unread-line',
        className: 'unread-line'
      }
      );
      this.posts = new Set();
      this.postsQuotingYou = new Set();
      this.order = new RandomAccessList();
      this.position = null;

      Callbacks.Thread.push({
        name: 'Unread',
        cb:   this.node
      });

      return Callbacks.Post.push({
        name: 'Unread',
        cb:   this.addPost
      });
    },

    node() {
      Unread.thread = this;
      Unread.title  = d$1.title;
      Unread.lastReadPost = Unread.db?.get({
        boardID: this.board.ID,
        threadID: this.ID
      }) || 0;
      Unread.readCount = 0;
      for (var ID of this.posts.keys) { if (+ID <= Unread.lastReadPost) { Unread.readCount++; } }
      $$1.one(d$1, '4chanXInitFinished', Unread.ready);
      $$1.on(d$1, 'PostsInserted',      Unread.onUpdate);
      $$1.on(d$1, 'ThreadUpdate',       function(e) { if (e.detail[404]) { return Unread.update(); } });
      const resetLink = $$1.el('a', {
        href: 'javascript:;',
        className: 'unread-reset',
        textContent: 'Mark all unread'
      }
      );
      $$1.on(resetLink, 'click', Unread.reset);
      return Header$1.menu.addEntry({
        el: resetLink,
        order: 70
      });
    },

    ready() {
      if (Conf['Remember Last Read Post'] && Conf['Scroll to Last Read Post']) { Unread.scroll(); }
      Unread.setLine(true);
      Unread.read();
      Unread.update();
      $$1.on(d$1, 'scroll visibilitychange', Unread.read);
      if (Conf['Unread Line']) { return $$1.on(d$1, 'visibilitychange',        Unread.setLine); }
    },

    positionPrev() {
      if (Unread.position) { return Unread.position.prev; } else { return Unread.order.last; }
    },

    scroll() {
      // Let the header's onload callback handle it.
      let hash;
      if ((hash = location.hash.match(/\d+/)) && hash[0] in Unread.thread.posts) { return; }

      let position = Unread.positionPrev();
      while (position) {
        var {bottom} = position.data.nodes;
        if (!bottom.getBoundingClientRect().height) {
          // Don't try to scroll to posts with display: none
          position = position.prev;
        } else {
          Header$1.scrollToIfNeeded(bottom, true);
          break;
        }
      }
    },

    reset() {
      if (Unread.lastReadPost == null) { return; }

      Unread.posts = new Set();
      Unread.postsQuotingYou = new Set();
      Unread.order = new RandomAccessList();
      Unread.position = null;
      Unread.lastReadPost = 0;
      Unread.readCount = 0;
      Unread.thread.posts.forEach(post => Unread.addPost.call(post));

      $$1.forceSync('Remember Last Read Post');
      if (Conf['Remember Last Read Post'] && (!Unread.thread.isDead || Unread.thread.isArchived)) {
        Unread.db.set({
          boardID:  Unread.thread.board.ID,
          threadID: Unread.thread.ID,
          val:      0
        });
      }

      Unread.updatePosition();
      Unread.setLine();
      return Unread.update();
    },

    sync() {
      if (Unread.lastReadPost == null) { return; }
      const lastReadPost = Unread.db.get({
        boardID: Unread.thread.board.ID,
        threadID: Unread.thread.ID,
        defaultValue: 0
      });
      if (Unread.lastReadPost >= lastReadPost) { return; }
      Unread.lastReadPost = lastReadPost;

      const postIDs = Unread.thread.posts.keys;
      for (let i = Unread.readCount, end = postIDs.length; i < end; i++) {
        var ID = +postIDs[i];
        if (!Unread.thread.posts.get(ID).isFetchedQuote) {
          if (ID > Unread.lastReadPost) { break; }
          Unread.posts.delete(ID);
          Unread.postsQuotingYou.delete(ID);
        }
        Unread.readCount++;
      }

      Unread.updatePosition();
      Unread.setLine();
      return Unread.update();
    },

    addPost() {
      if (this.isFetchedQuote || this.isClone) { return; }
      Unread.order.push(this);
      if ((this.ID <= Unread.lastReadPost) || this.isHidden || QuoteYou.isYou(this)) { return; }
      Unread.posts.add((Unread.posts.last = this.ID));
      Unread.addPostQuotingYou(this);
      return Unread.position != null ? Unread.position : (Unread.position = Unread.order[this.ID]);
    },

    addPostQuotingYou(post) {
      for (var quotelink of post.nodes.quotelinks) {
        if (QuoteYou.db?.get(Get$1.postDataFromLink(quotelink))) {
          Unread.postsQuotingYou.add((Unread.postsQuotingYou.last = post.ID));
          Unread.openNotification(post);
          return;
        }
      }
    },

    openNotification(post, predicate=' replied to you') {
      if (!Header$1.areNotificationsEnabled) { return; }
      const notif = new Notification(`${post.info.nameBlock}${predicate}`, {
        body: post.commentDisplay(),
        icon: Favicon.logo
      }
      );
      notif.onclick = function() {
        Header$1.scrollToIfNeeded(post.nodes.bottom, true);
        return window.focus();
      };
      return notif.onshow = () => setTimeout(() => notif.close()
      , 7 * SECOND);
    },

    onUpdate() {
      return $$1.queueTask(function() { // ThreadUpdater may scroll immediately after inserting posts
        Unread.setLine();
        Unread.read();
        return Unread.update();
      });
    },

    readSinglePost(post) {
      const {ID} = post;
      if (!Unread.posts.has(ID)) { return; }
      Unread.posts.delete(ID);
      Unread.postsQuotingYou.delete(ID);
      Unread.updatePosition();
      Unread.saveLastReadPost();
      return Unread.update();
    },

    read: debounce(100, function(e) {
      // Update the lastReadPost when hidden posts are added to the thread.
      if (!Unread.posts.size && (Unread.readCount !== Unread.thread.posts.keys.length)) {
        Unread.saveLastReadPost();
      }

      if (d$1.hidden || !Unread.posts.size) { return; }

      let count = 0;
      while (Unread.position) {
        var {ID, data} = Unread.position;
        var {bottom} = data.nodes;
        if (!!bottom.getBoundingClientRect().height && // post has been hidden
          (Header$1.getBottomOf(bottom) <= -1)) { break; }                      // post is completely read
        count++;
        Unread.posts.delete(ID);
        Unread.postsQuotingYou.delete(ID);
        Unread.position = Unread.position.next;
      }

      if (!count) { return; }
      Unread.updatePosition();
      Unread.saveLastReadPost();
      if (e) { return Unread.update(); }
    }),

    updatePosition() {
      while (Unread.position && !Unread.posts.has(Unread.position.ID)) {
        Unread.position = Unread.position.next;
      }
    },

    saveLastReadPost: debounce(2 * SECOND, function() {
      let ID;
      $$1.forceSync('Remember Last Read Post');
      if (!Conf['Remember Last Read Post'] || !Unread.db) { return; }
      const postIDs = Unread.thread.posts.keys;
      for (let i = Unread.readCount, end = postIDs.length; i < end; i++) {
        ID = +postIDs[i];
        if (!Unread.thread.posts.get(ID).isFetchedQuote) {
          if (Unread.posts.has(ID)) { break; }
          Unread.lastReadPost = ID;
        }
        Unread.readCount++;
      }
      if (Unread.thread.isDead && !Unread.thread.isArchived) { return; }
      return Unread.db.set({
        boardID:  Unread.thread.board.ID,
        threadID: Unread.thread.ID,
        val:      Unread.lastReadPost
      });
    }),

    setLine(force) {
      if (!Conf['Unread Line']) { return; }
      if (Unread.hr.hidden || d$1.hidden || (force === true)) {
        const oldPosition = Unread.linePosition;
        if (Unread.linePosition = Unread.positionPrev()) {
          if (Unread.linePosition !== oldPosition) {
            let node = Unread.linePosition.data.nodes.bottom;
            if (node.nextSibling?.tagName === 'BR') { node = node.nextSibling; }
            $$1.after(node, Unread.hr);
          }
        } else {
          $$1.rm(Unread.hr);
        }
      }
      return Unread.hr.hidden = Unread.linePosition === Unread.order.last;
    },

    update() {
      const count = Unread.posts.size;
      const countQuotingYou = Unread.postsQuotingYou.size;

      if (Conf['Unread Count']) {
        const titleQuotingYou = Conf['Quoted Title'] && countQuotingYou ? '(!) ' : '';
        const titleCount = count || !Conf['Hide Unread Count at (0)'] ? `(${count}) ` : '';
        const titleDead = Unread.thread.isDead ?
          Unread.title.replace('-', (Unread.thread.isArchived ? '- Archived -' : '- 404 -'))
        :
          Unread.title;
        d$1.title = `${titleQuotingYou}${titleCount}${titleDead}`;
      }

      Unread.saveThreadWatcherCount();

      if (Conf['Unread Favicon'] && (g.SITE.software === 'yotsuba')) {
        const {isDead} = Unread.thread;
        return Favicon.set((
          countQuotingYou ?
            (isDead ? 'unreadDeadY' : 'unreadY')
          : count ?
            (isDead ? 'unreadDead' : 'unread')
          :
            (isDead ? 'dead' : 'default')
        )
        );
      }
    },

    saveThreadWatcherCount: debounce(2 * SECOND, function() {
      $$1.forceSync('Remember Last Read Post');
      if (Conf['Remember Last Read Post'] && (!Unread.thread.isDead || Unread.thread.isArchived)) {
        let posts;
        const quotingYou = !Conf['Require OP Quote Link'] && QuoteYou.isYou(Unread.thread.OP) ? Unread.posts : Unread.postsQuotingYou;
        if (!quotingYou.size) {
          quotingYou.last = 0;
        } else if (!quotingYou.has(quotingYou.last)) {
          quotingYou.last = 0;
          posts = Unread.thread.posts.keys;
          for (let i = posts.length - 1; i >= 0; i--) {
            if (quotingYou.has(+posts[i])) {
              quotingYou.last = posts[i];
              break;
            }
          }
        }
        return ThreadWatcher$1.update(g.SITE.ID, Unread.thread.board.ID, Unread.thread.ID, {
          last: Unread.thread.lastPost,
          isDead: Unread.thread.isDead,
          isArchived: Unread.thread.isArchived,
          unread: Unread.posts.size,
          quotingYou: (quotingYou.last || 0)
        }
        );
      }
    })
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ExpandThread = {
    statuses: dict(),
    init() {
      if (!((g.VIEW === 'index') && Conf['Thread Expansion'])) { return; }
      if (Conf['JSON Index']) {
        return $$1.on(d$1, 'IndexRefreshInternal', this.onIndexRefresh);
      } else {
        return Callbacks.Thread.push({
          name: 'Expand Thread',
          cb() { return ExpandThread.setButton(this); }
        });
      }
    },

    setButton(thread) {
      let a;
      if (!(thread.nodes.root && (a = $$1('.summary', thread.nodes.root)))) { return; }
      a.textContent = g.SITE.Build.summaryText('+', ...a.textContent.match(/\d+/g));
      a.style.cursor = 'pointer';
      return $$1.on(a, 'click', ExpandThread.cbToggle);
    },
    
    disconnect(refresh) {
      if ((g.VIEW === 'thread') || !Conf['Thread Expansion']) { return; }
      for (var threadID in ExpandThread.statuses) {
        var oldReq;
        var status = ExpandThread.statuses[threadID];
        if (oldReq = status.req) {
          delete status.req;
          oldReq.abort();
        }
        delete ExpandThread.statuses[threadID];
      }

      if (!refresh) { return $$1.off(d$1, 'IndexRefreshInternal', this.onIndexRefresh); }
    },

    onIndexRefresh() {
      ExpandThread.disconnect(true);
      return g.BOARD.threads.forEach(thread => ExpandThread.setButton(thread));
    },

    cbToggle(e) {
      if ($$1.modifiedClick(e)) { return; }
      e.preventDefault();
      return ExpandThread.toggle(Get$1.threadFromNode(this));
    },

    cbToggleBottom(e) {
      if ($$1.modifiedClick(e)) { return; }
      e.preventDefault();
      const thread = Get$1.threadFromNode(this);
      $$1.rm(this); // remove before fixing bottom of thread position
      const {bottom} = thread.nodes.root.getBoundingClientRect();
      ExpandThread.toggle(thread);
      return window.scrollBy(0, (thread.nodes.root.getBoundingClientRect().bottom - bottom));
    },

    toggle(thread) {
      let a;
      if (!(thread.nodes.root && (a = $$1('.summary', thread.nodes.root)))) { return; }
      if (thread.ID in ExpandThread.statuses) {
        return ExpandThread.contract(thread, a, thread.nodes.root);
      } else {
        return ExpandThread.expand(thread, a);
      }
    },

    expand(thread, a) {
      let status;
      ExpandThread.statuses[thread] = (status = {});
      a.textContent = g.SITE.Build.summaryText('...', ...a.textContent.match(/\d+/g));
      status.req = $$1.cache(g.SITE.urls.threadJSON({boardID: thread.board.ID, threadID: thread.ID}), function() {
        if (this !== status.req) { return; } // aborted
        delete status.req;
        return ExpandThread.parse(this, thread, a);
      });
      return status.numReplies = $$(g.SITE.selectors.replyOriginal, thread.nodes.root).length;
    },

    contract(thread, a, threadRoot) {
      let oldReq;
      const status = ExpandThread.statuses[thread];
      delete ExpandThread.statuses[thread];
      if (oldReq = status.req) {
        delete status.req;
        oldReq.abort();
        if (a) { a.textContent = g.SITE.Build.summaryText('+', ...a.textContent.match(/\d+/g)); }
        return;
      }

      let replies = $$('.thread > .replyContainer', threadRoot);
      if (status.numReplies) { replies = replies.slice(0, (-status.numReplies)); }
      let postsCount = 0;
      let filesCount = 0;
      for (var reply of replies) {
        // rm clones
        if (Conf['Quote Inlining']) { var inlined;
        while ((inlined = $$1('.inlined', reply))) { inlined.click(); } }
        postsCount++;
        if ('file' in Get$1.postFromRoot(reply)) { filesCount++; }
        $$1.rm(reply);
      }
      if (Index$1.enabled) { // otherwise handled by Main.addPosts
        $$1.event('PostsRemoved', null, a.parentNode);
      }
      a.textContent = g.SITE.Build.summaryText('+', postsCount, filesCount);
      return $$1.rm($$1('.summary-bottom', threadRoot));
    },

    parse(req, thread, a) {
      let root;
      if (![200, 304].includes(req.status)) {
        a.textContent = req.status ? `Error ${req.statusText} (${req.status})` : 'Connection Error';
        return;
      }

      g.SITE.Build.spoilerRange[thread.board] = req.response.posts[0].custom_spoiler;

      const posts      = [];
      const postsRoot  = [];
      let filesCount = 0;
      for (var postData of req.response.posts) {
        var post;
        if (postData.no === thread.ID) { continue; }
        if ((post = thread.posts.get(postData.no)) && !post.isFetchedQuote) {
          if ('file' in post) { filesCount++; }
          ({root} = post.nodes);
          postsRoot.push(root);
          continue;
        }
        root = g.SITE.Build.postFromObject(postData, thread.board.ID);
        post = new Post(root, thread, thread.board);
        if ('file' in post) { filesCount++; }
        posts.push(post);
        postsRoot.push(root);
      }
      Main$1.callbackNodes('Post', posts);
      $$1.after(a, postsRoot);
      $$1.event('PostsInserted', null, a.parentNode);

      const postsCount    = postsRoot.length;
      a.textContent = g.SITE.Build.summaryText('-', postsCount, filesCount);

      if (root) {
        const a2 = a.cloneNode(true);
        a2.classList.add('summary-bottom');
        $$1.on(a2, 'click', ExpandThread.cbToggleBottom);
        return $$1.after(root, a2);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var UnreadIndex = {
    lastReadPost: dict(),
    hr:           dict(),
    markReadLink: dict(),

    init() {
      if ((g.VIEW !== 'index') || !Conf['Remember Last Read Post'] || !Conf['Unread Line in Index']) { return; }

      this.enabled = true;
      this.db = new DataBoard('lastReadPosts', this.sync);

      Callbacks.Thread.push({
        name: 'Unread Line in Index',
        cb:   this.node
      });

      $$1.on(d$1, 'IndexRefreshInternal', this.onIndexRefresh);
      return $$1.on(d$1, 'PostsInserted PostsRemoved', this.onPostsInserted);
    },

    node() {
      UnreadIndex.lastReadPost[this.fullID] = UnreadIndex.db.get({
        boardID: this.board.ID,
        threadID: this.ID
      }) || 0;
      if (!Index$1.enabled) { // let onIndexRefresh handle JSON Index
        return UnreadIndex.update(this);
      }
    },

    onIndexRefresh(e) {
      if (e.detail.isCatalog) { return; }
      return (() => {
        const result = [];
        for (var threadID of e.detail.threadIDs) {
          var thread = g.threads.get(threadID);
          result.push(UnreadIndex.update(thread));
        }
        return result;
      })();
    },

    onPostsInserted(e) {
      if (e.target === Index$1.root) { return; } // onIndexRefresh handles this case
      const thread = Get$1.threadFromNode(e.target);
      if (!thread || (thread.nodes.root !== e.target)) { return; }
      const wasVisible = !!UnreadIndex.hr[thread.fullID]?.parentNode;
      UnreadIndex.update(thread);
      if (Conf['Scroll to Last Read Post'] && (e.type === 'PostsInserted') && !wasVisible && !!UnreadIndex.hr[thread.fullID]?.parentNode) {
        return Header$1.scrollToIfNeeded(UnreadIndex.hr[thread.fullID], true);
      }
    },

    sync() {
      return g.threads.forEach(function(thread) {
        const lastReadPost = UnreadIndex.db.get({
          boardID: thread.board.ID,
          threadID: thread.ID
        }) || 0;
        if (lastReadPost !== UnreadIndex.lastReadPost[thread.fullID]) {
          UnreadIndex.lastReadPost[thread.fullID] = lastReadPost;
          if (thread.nodes.root?.parentNode) {
            return UnreadIndex.update(thread);
          }
        }
      });
    },

    update(thread) {
      let divider;
      const lastReadPost = UnreadIndex.lastReadPost[thread.fullID];
      let repliesShown = 0;
      let repliesRead = 0;
      let firstUnread = null;
      thread.posts.forEach(function(post) {
        if (post.isReply && thread.nodes.root.contains(post.nodes.root)) {
          repliesShown++;
          if (post.ID <= lastReadPost) {
            return repliesRead++;
          } else if ((!firstUnread || (post.ID < firstUnread.ID)) && !post.isHidden && !QuoteYou.isYou(post)) {
            return firstUnread = post;
          }
        }
      });

      let hr = UnreadIndex.hr[thread.fullID];
      if (firstUnread && (repliesRead || ((lastReadPost === thread.OP.ID) && (!$$1(g.SITE.selectors.summary, thread.nodes.root) || thread.ID in ExpandThread.statuses)))) {
        if (!hr) {
          hr = (UnreadIndex.hr[thread.fullID] = $$1.el('hr',
            {className: 'unread-line'}));
        }
        $$1.before(firstUnread.nodes.root, hr);
      } else {
        $$1.rm(hr);
      }

      const hasUnread = repliesShown ?
        firstUnread || !repliesRead
      : Index$1.enabled ?
        thread.lastPost > lastReadPost
      :
        thread.OP.ID > lastReadPost;
      thread.nodes.root.classList.toggle('unread-thread', hasUnread);

      let link = UnreadIndex.markReadLink[thread.fullID];
      if (!link) {
        link = (UnreadIndex.markReadLink[thread.fullID] = $$1.el('a', {
          className: 'unread-mark-read brackets-wrap',
          href: 'javascript:;',
          textContent: 'Mark Read'
        }
        ));
        $$1.on(link, 'click', UnreadIndex.markRead);
      }
      if (divider = $$1(g.SITE.selectors.threadDivider, thread.nodes.root)) { // divider inside thread as in Tinyboard
        return $$1.before(divider, link);
      } else {
        return $$1.add(thread.nodes.root, link);
      }
    },

    markRead() {
      const thread = Get$1.threadFromNode(this);
      UnreadIndex.lastReadPost[thread.fullID] = thread.lastPost;
      UnreadIndex.db.set({
        boardID:  thread.board.ID,
        threadID: thread.ID,
        val:      thread.lastPost
      });
      $$1.rm(UnreadIndex.hr[thread.fullID]);
      thread.nodes.root.classList.remove('unread-thread');
      return ThreadWatcher$1.update(g.SITE.ID, thread.board.ID, thread.ID, {
        last: thread.lastPost,
        unread: 0,
        quotingYou: 0
      }
      );
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var ThreadWatcher = {
    init() {
      let sc;
      if (!(this.enabled = Conf['Thread Watcher'])) { return; }

      this.shortcut = (sc = $$1.el('a', {
        id:          'watcher-link',
        textContent: '👁︎',
        title:       'Thread Watcher',
        href:        'javascript:;',
      }
      ));

      this.db     = new DataBoard('watchedThreads', this.refresh, true);
      this.dbLM   = new DataBoard('watcherLastModified', null, true);
      this.dialog = UI.dialog('thread-watcher', { innerHTML: ThreadWatcherPage });
      this.status = $$1('#watcher-status', this.dialog);
      this.list   = this.dialog.lastElementChild;
      this.refreshButton = $$1('.refresh', this.dialog);
      this.closeButton = $$1('.move > .close', this.dialog);
      this.unreaddb = Unread.db || UnreadIndex.db || new DataBoard('lastReadPosts');
      this.unreadEnabled = Conf['Remember Last Read Post'];

      $$1.on(d$1, 'QRPostSuccessful',   this.cb.post);
      $$1.on(sc, 'click', this.toggleWatcher);
      $$1.on(this.refreshButton, 'click', this.buttonFetchAll);
      $$1.on(this.closeButton, 'click', this.toggleWatcher);

      this.menu.addHeaderMenuEntry();
      $$1.onExists(doc$1, 'body', this.addDialog);

      switch (g.VIEW) {
        case 'index':
          $$1.on(d$1, 'IndexUpdate', this.cb.onIndexUpdate);
          break;
        case 'thread':
          $$1.on(d$1, 'ThreadUpdate', this.cb.onThreadRefresh);
          break;
      }

      if (Conf['Fixed Thread Watcher']) {
        $$1.addClass(doc$1, 'fixed-watcher');
      }
      if (!Conf['Persistent Thread Watcher']) {
        $$1.addClass(ThreadWatcher.shortcut, 'disabled');
        this.dialog.hidden = true;
      }

      Header$1.addShortcut('watcher', sc, 510);

      ThreadWatcher.initLastModified();
      ThreadWatcher.fetchAuto();
      $$1.on(window, 'visibilitychange focus', () => $$1.queueTask(ThreadWatcher.fetchAuto));

      if (Conf['Menu'] && Index$1.enabled) {
        Menu.menu.addEntry({
          el: $$1.el('a', {
            href:      'javascript:;',
            className: 'has-shortcut-text'
          }
          , {innerHTML: '<span></span><span class="shortcut-text">Alt+click</span>'}),
          order: 6,
          open({thread}) {
            if (Conf['Index Mode'] !== 'catalog') { return false; }
            this.el.firstElementChild.textContent = ThreadWatcher.isWatched(thread) ?
              'Unwatch'
            :
              'Watch';
            if (this.cb) { $$1.off(this.el, 'click', this.cb); }
            this.cb = function() {
              $$1.event('CloseMenu');
              return ThreadWatcher.toggle(thread);
            };
            $$1.on(this.el, 'click', this.cb);
            return true;
          }
        });
      }

      if (!['index', 'thread'].includes(g.VIEW)) { return; }

      Callbacks.Post.push({
        name: 'Thread Watcher',
        cb:   this.node
      });
      return Callbacks.CatalogThread.push({
        name: 'Thread Watcher',
        cb:   this.catalogNode
      });
    },

    isWatched(thread) {
      return !!ThreadWatcher.db?.get({boardID: thread.board.ID, threadID: thread.ID});
    },

    isWatchedRaw(boardID, threadID) {
      return !!ThreadWatcher.db?.get({boardID, threadID});
    },

    setToggler(toggler, isWatched) {
      toggler.classList.toggle('watched', isWatched);
      return toggler.title = `${isWatched ? 'Unwatch' : 'Watch'} Thread`;
    },

    node() {
      let toggler;
      if (this.isReply) { return; }
      if (this.isClone) {
        toggler = $$1('.watch-thread-link', this.nodes.info);
      } else {
        toggler = $$1.el('a', {
          href: 'javascript:;',
          className: 'watch-thread-link'
        }
        );
        $$1.before($$1('input', this.nodes.info), toggler);
      }
      const siteID = g.SITE.ID;
      const boardID = this.board.ID;
      const threadID = this.thread.ID;
      const data = ThreadWatcher.db.get({siteID, boardID, threadID});
      ThreadWatcher.setToggler(toggler, !!data);
      $$1.on(toggler, 'click', ThreadWatcher.cb.toggle);
      // Add missing excerpt for threads added by Auto Watch
      if (data && (data.excerpt == null)) {
        return $$1.queueTask(() => {
          return ThreadWatcher.update(siteID, boardID, threadID, {excerpt: Get$1.threadExcerpt(this.thread)});
      });
      }
    },

    catalogNode() {
      if (ThreadWatcher.isWatched(this.thread)) { $$1.addClass(this.nodes.root, 'watched'); }
      return $$1.on(this.nodes.root, 'mousedown click', e => {
        if ((e.button !== 0) || !e.altKey) { return; }
        if (e.type === 'click') { ThreadWatcher.toggle(this.thread); }
        return e.preventDefault();
      });
    }, // Also on mousedown to prevent highlighting thumbnail in Firefox.

    addDialog() {
      if (!Main$1.isThisPageLegit()) { return; }
      ThreadWatcher.build();
      return $$1.prepend(d$1.body, ThreadWatcher.dialog);
    },

    toggleWatcher() {
      $$1.toggleClass(ThreadWatcher.shortcut, 'disabled');
      return ThreadWatcher.dialog.hidden = !ThreadWatcher.dialog.hidden;
    },

    cb: {
      openAll() {
        if ($$1.hasClass(this, 'disabled')) { return; }
        for (var a of $$('a.watcher-link', ThreadWatcher.list)) {
          $$1.open(a.href);
        }
        return $$1.event('CloseMenu');
      },
      openUnread() {
        if ($$1.hasClass(this, 'disabled')) { return; }
        for (var a of $$('.replies-unread > a.watcher-link', ThreadWatcher.list)) {
          $$1.open(a.href);
        }
        return $$1.event('CloseMenu');
      },
      openDeads() {
        if ($$1.hasClass(this, 'disabled')) { return; }
        for (var a of $$('.dead-thread > a.watcher-link', ThreadWatcher.list)) {
          $$1.open(a.href);
        }
        return $$1.event('CloseMenu');
      },
      pruneDeads() {
        if ($$1.hasClass(this, 'disabled')) { return; }
        for (var {siteID, boardID, threadID, data} of ThreadWatcher.getAll()) {
          if (data.isDead) {
            ThreadWatcher.db.delete({siteID, boardID, threadID});
          }
        }
        ThreadWatcher.refresh();
        return $$1.event('CloseMenu');
      },
      dismiss() {
        for (var {siteID, boardID, threadID, data} of ThreadWatcher.getAll()) {
          if (data.quotingYou) {
            ThreadWatcher.update(siteID, boardID, threadID, {dismiss: data.quotingYou || 0});
          }
        }
        return $$1.event('CloseMenu');
      },
      toggle() {
        const {thread} = Get$1.postFromNode(this);
        return ThreadWatcher.toggle(thread);
      },
      rm() {
        const {siteID} = this.parentNode.dataset;
        const [boardID, threadID] = this.parentNode.dataset.fullID.split('.');
        return ThreadWatcher.rm(siteID, boardID, +threadID);
      },
      post(e) {
        const {boardID, threadID, postID} = e.detail;
        const cb = PostRedirect.delay();
        if (postID === threadID) {
          if (Conf['Auto Watch']) {
            return ThreadWatcher.addRaw(boardID, threadID, {}, cb);
          }
        } else if (Conf['Auto Watch Reply']) {
          return ThreadWatcher.add((g.threads.get(boardID + '.' + threadID) || new Thread(threadID, g.boards[boardID] || new Board(boardID))), cb);
        }
      },
      onIndexUpdate(e) {
        const {db}    = ThreadWatcher;
        const siteID  = g.SITE.ID;
        const boardID = g.BOARD.ID;
        let nKilled = 0;
        for (var threadID in db.data[siteID].boards[boardID]) {
          // Don't prune threads that have yet to appear in index.
          var data = db.data[siteID].boards[boardID][threadID];
          if (!data?.isDead && !e.detail.threads.includes(`${boardID}.${threadID}`)) {
            if (!e.detail.threads.some(fullID => +fullID.split('.')[1] > threadID)) { continue; }
            if (Conf['Auto Prune'] || !(data && (typeof data === 'object'))) { // corrupt data
              db.delete({boardID, threadID});
              nKilled++;
            } else {
              ThreadWatcher.fetchStatus({siteID, boardID, threadID, data});
            }
          }
        }
        if (nKilled) { return ThreadWatcher.refresh(); }
      },
      onThreadRefresh(e) {
        const thread = g.threads.get(e.detail.threadID);
        if (!e.detail[404] || !ThreadWatcher.isWatched(thread)) { return; }
        // Update dead status.
        return ThreadWatcher.add(thread);
      }
    },

    requests: [],
    fetched:  0,

    fetch(url, {siteID, force}, args, cb) {
      if (ThreadWatcher.requests.length === 0) {
        ThreadWatcher.status.textContent = '...';
        $$1.addClass(ThreadWatcher.refreshButton, 'spin');
      }
      const onloadend = function() {
        if (this.finished) { return; }
        this.finished = true;
        ThreadWatcher.fetched++;
        if (ThreadWatcher.fetched === ThreadWatcher.requests.length) {
          ThreadWatcher.clearRequests();
        } else {
          ThreadWatcher.status.textContent = `${Math.round((ThreadWatcher.fetched / ThreadWatcher.requests.length) * 100)}%`;
        }
        return cb.apply(this, args);
      };
      const ajax = siteID === g.SITE.ID ? $$1.ajax : CrossOrigin$1.ajax;
      if (force) {
        delete $$1.lastModified.ThreadWatcher?.[url];
      }
      const req = $$1.whenModified(
        url,
        'ThreadWatcher',
        onloadend,
        { timeout: MINUTE, ajax }
      );
      return ThreadWatcher.requests.push(req);
    },

    clearRequests() {
      ThreadWatcher.requests = [];
      ThreadWatcher.fetched = 0;
      ThreadWatcher.status.textContent = '';
      return $$1.rmClass(ThreadWatcher.refreshButton, 'spin');
    },

    abort() {
      delete ThreadWatcher.syncing;
      for (var req of ThreadWatcher.requests) {
        if (!req.finished) {
          req.finished = true;
          req.abort();
        }
      }
      return ThreadWatcher.clearRequests();
    },

    initLastModified() {
      const lm = ($$1.lastModified['ThreadWatcher'] || ($$1.lastModified['ThreadWatcher'] = dict()));
      for (var siteID in ThreadWatcher.dbLM.data) {
        var boards = ThreadWatcher.dbLM.data[siteID];
        for (var boardID in boards.boards) {
          var data = boards.boards[boardID];
          if (ThreadWatcher.db.get({siteID, boardID})) {
            for (var url in data) {
              var date = data[url];
              lm[url] = date;
            }
          } else {
            ThreadWatcher.dbLM.delete({siteID, boardID});
          }
        }
      }
    },

    fetchAuto() {
      let middle;
      clearTimeout(ThreadWatcher.timeout);
      if (!Conf['Auto Update Thread Watcher']) { return; }
      const {db} = ThreadWatcher;
      const interval = Conf['Show Page'] || (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) ? 5 * MINUTE : 2 * HOUR;
      const now = Date.now();
      if ((now - interval >= ((middle = db.data.lastChecked || 0)) || middle > now) && !d$1.hidden && !!d$1.hasFocus()) {
        ThreadWatcher.fetchAllStatus(interval);
      }
      return ThreadWatcher.timeout = setTimeout(ThreadWatcher.fetchAuto, interval);
    },

    buttonFetchAll() {
      if (ThreadWatcher.syncing || ThreadWatcher.requests.length) {
        return ThreadWatcher.abort();
      } else {
        return ThreadWatcher.fetchAllStatus();
      }
    },

    fetchAllStatus(interval=0) {
      ThreadWatcher.status.textContent = '...';
      $$1.addClass(ThreadWatcher.refreshButton, 'spin');
      ThreadWatcher.syncing = true;
      const dbs = [ThreadWatcher.db, ThreadWatcher.unreaddb, QuoteYou.db].filter(x => x);
      let n = 0;
      return dbs.map((dbi) =>
        dbi.forceSync(function() {
          if ((++n) === dbs.length) {
            let middle;
            if (!ThreadWatcher.syncing) { return; } // aborted
            delete ThreadWatcher.syncing;
            if (0 > (middle = Date.now() - (ThreadWatcher.db.data.lastChecked || 0)) || middle >= interval) { // not checked in another tab
              // XXX On vichan boards, last_modified field of threads.json does not account for sage posts.
              // Occasionally check replies field of catalog.json to find these posts.
              let middle1;
              const {db} = ThreadWatcher;
              const now = Date.now();
              const deep = !(now - (2 * HOUR) < ((middle1 = db.data.lastChecked2 || 0)) && middle1 <= now);
              const boards = ThreadWatcher.getAll(true);
              for (var board of boards) {
                ThreadWatcher.fetchBoard(board, deep);
              }
              db.setLastChecked();
              if (deep) { db.setLastChecked('lastChecked2'); }
            }
            if (ThreadWatcher.fetched === ThreadWatcher.requests.length) {
              return ThreadWatcher.clearRequests();
            }
          }
        }));
    },

    fetchBoard(board, deep) {
      if (!board.some(thread => !thread.data.isDead)) { return; }
      let force = false;
      for (var thread of board) {
        var {data} = thread;
        if (!data.isDead && (data.last !== -1)) {
          if (Conf['Show Page'] && (data.page == null)) { force = true; }
          if ((data.modified == null)) { force = (thread.force = true); }
        }
      }
      const {siteID, boardID} = board[0];
      const site = g.sites[siteID];
      if (!site) { return; }
      const urlF = deep && site.threadModTimeIgnoresSage ? 'catalogJSON' : 'threadsListJSON';
      const url = site.urls[urlF]?.({siteID, boardID});
      if (!url) { return; }
      return ThreadWatcher.fetch(url, {siteID, force}, [board, url], ThreadWatcher.parseBoard);
    },

    parseBoard(board, url) {
      let page, thread;
      if (this.status !== 200) { return; }
      const {siteID, boardID} = board[0];
      const lmDate = this.getResponseHeader('Last-Modified');
      ThreadWatcher.dbLM.extend({siteID, boardID, val: $$1.item(url, lmDate)});
      const threads = dict();
      let pageLength = 0;
      let nThreads = 0;
      let oldest = null;
      try {
        pageLength = this.response[0]?.threads.length || 0;
        for (let i = 0; i < this.response.length; i++) {
          page = this.response[i];
          for (var item of page.threads) {
            threads[item.no] = {
              page: i + 1,
              index: nThreads,
              modified: item.last_modified,
              replies: item.replies
            };
            nThreads++;
            if ((oldest == null) || (item.no < oldest)) {
              oldest = item.no;
            }
          }
        }
      } catch (error) {
        for (thread of board) {
          ThreadWatcher.fetchStatus(thread);
        }
      }
      for (thread of board) {
        var {threadID, data} = thread;
        if (threads[threadID]) {
          var index, modified, replies;
          ({page, index, modified, replies} = threads[threadID]);
          if (Conf['Show Page']) {
            var lastPage = g.sites[siteID].isPrunedByAge?.({siteID, boardID}) ?
              threadID === oldest
            :
              index >= (nThreads - pageLength);
            ThreadWatcher.update(siteID, boardID, threadID, {page, lastPage});
          }
          if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) {
            if ((modified !== data.modified) || ((replies != null) && (replies !== data.replies))) {
              (thread.newData || (thread.newData = {})).modified = modified;
              ThreadWatcher.fetchStatus(thread);
            }
          }
        } else {
          ThreadWatcher.fetchStatus(thread);
        }
      }
    },

    fetchStatus(thread) {
      const {siteID, boardID, threadID, data, force} = thread;
      const url = g.sites[siteID]?.urls.threadJSON?.({siteID, boardID, threadID});
      if (!url) { return; }
      if (data.isDead && !force) { return; }
      if (data.last === -1) { return; } // 404 or no JSON API
      return ThreadWatcher.fetch(url, {siteID, force}, [thread], ThreadWatcher.parseStatus);
    },

    parseStatus(thread, isArchiveURL) {
      let isDead, last;
      let {siteID, boardID, threadID, data, newData, force} = thread;
      const site = g.sites[siteID];
      if ((this.status === 200) && this.response) {
        let isArchived;
        last = this.response.posts[this.response.posts.length-1].no;
        const replies = this.response.posts.length-1;
        isDead = (isArchived = !!(this.response.posts[0].archived || isArchiveURL));
        if (isDead && Conf['Auto Prune']) {
          ThreadWatcher.rm(siteID, boardID, threadID);
          return;
        }

        if ((last === data.last) && (isDead === data.isDead) && (isArchived === data.isArchived)) { return; }

        const lastReadPost = ThreadWatcher.unreaddb.get({siteID, boardID, threadID, defaultValue: 0});
        let unread = data.unread || 0;
        let quotingYou = data.quotingYou || 0;
        const youOP = !!QuoteYou.db?.get({siteID, boardID, threadID, postID: threadID});

        for (var postObj of this.response.posts) {
          if ((postObj.no <= (data.last || 0)) || (postObj.no <= lastReadPost)) { continue; }
          if (QuoteYou.db?.get({siteID, boardID, threadID, postID: postObj.no})) { continue; }

          var quotesYou = false;
          if (!Conf['Require OP Quote Link'] && youOP) {
            quotesYou = true;
          } else if (QuoteYou.db && postObj.com) {
            var match;
            var regexp = site.regexp.quotelinkHTML;
            regexp.lastIndex = 0;
            while (match = regexp.exec(postObj.com)) {
              if (QuoteYou.db.get({
                siteID,
                boardID:  match[1] ? encodeURIComponent(match[1]) : boardID,
                threadID: match[2] || threadID,
                postID:   match[3] || match[2] || threadID
              })) {
                quotesYou = true;
                break;
              }
            }
          }

          if (!unread || (!quotingYou && quotesYou)) {
            if (Filter.isHidden(site.Build.parseJSON(postObj, {siteID, boardID}))) { continue; }
          }

          unread++;
          if (quotesYou) { quotingYou = postObj.no; }
        }

        if (!newData) { newData = {}; }
        $$1.extend(newData, {last, replies, isDead, isArchived, unread, quotingYou});
        return ThreadWatcher.update(siteID, boardID, threadID, newData);

      } else if (this.status === 404) {
        const archiveURL = g.sites[siteID]?.urls.archivedThreadJSON?.({siteID, boardID, threadID});
        if (!isArchiveURL && archiveURL) {
          return ThreadWatcher.fetch(archiveURL, {siteID, force}, [thread, true], ThreadWatcher.parseStatus);
        } else if (site.mayLackJSON && (data.last == null)) {
          return ThreadWatcher.update(siteID, boardID, threadID, {last: -1});
        } else {
          return ThreadWatcher.update(siteID, boardID, threadID, {isDead: true});
        }
      }
    },

    getAll(groupByBoard) {
      const all = [];
      for (var siteID in ThreadWatcher.db.data) {
        var boards = ThreadWatcher.db.data[siteID];
        for (var boardID in boards.boards) {
          var cont;
          var threads = boards.boards[boardID];
          if (Conf['Current Board'] && ((siteID !== g.SITE.ID) || (boardID !== g.BOARD.ID))) {
            continue;
          }
          if (groupByBoard) {
            all.push((cont = []));
          }
          for (var threadID in threads) {
            var data = threads[threadID];
            if (data && (typeof data === 'object')) {
              (groupByBoard ? cont : all).push({siteID, boardID, threadID, data});
            }
          }
        }
      }
      return all;
    },

    makeLine(siteID, boardID, threadID, data) {
      let page;
      const x = $$1.el('a', {
        textContent: '✕',
        href: 'javascript:;'
      }
      );
      $$1.on(x, 'click', ThreadWatcher.cb.rm);

      let {excerpt, isArchived} = data;
      if (!excerpt) { excerpt = `/${boardID}/ - No.${threadID}`; }
      if (Conf['Show Site Prefix']) { excerpt = ThreadWatcher.prefixes[siteID] + excerpt; }

      const link = $$1.el('a', {
        href: g.sites[siteID]?.urls.thread({siteID, boardID, threadID}, isArchived) || '',
        title: excerpt,
        className: 'watcher-link'
      }
      );

      if (Conf['Show Page'] && (data.page != null)) {
        page = $$1.el('span', {
          textContent: `[${data.page}]`,
          className: 'watcher-page'
        }
        );
        $$1.add(link, page);
      }

      if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count'] && (data.unread != null)) {
        const count = $$1.el('span', {
          textContent: `(${data.unread})`,
          className: 'watcher-unread'
        }
        );
        $$1.add(link, count);
      }

      const title = $$1.el('span', {
        textContent: excerpt,
        className: 'watcher-title'
      }
      );
      $$1.add(link, title);

      const div = $$1.el('div');
      const fullID = `${boardID}.${threadID}`;
      div.dataset.fullID = fullID;
      div.dataset.siteID = siteID;
      if ((g.VIEW === 'thread') && (fullID === `${g.BOARD}.${g.THREADID}`)) { $$1.addClass(div, 'current'); }
      if (data.isDead) { $$1.addClass(div, 'dead-thread'); }
      if (Conf['Show Page']) {
        if (data.lastPage) { $$1.addClass(div, 'last-page'); }
        if (data.page != null) { div.dataset.page = data.page; }
      }
      if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) {
        if (data.unread === 0) { $$1.addClass(div, 'replies-read'); }
        if (data.unread) { $$1.addClass(div, 'replies-unread'); }
        if ((data.quotingYou || 0) > (data.dismiss || 0)) { $$1.addClass(div, 'replies-quoting-you'); }
      }
      $$1.add(div, [x, $$1.tn(' '), link]);
      return div;
    },

    setPrefixes(threads) {
      const prefixes = dict();
      for (var {siteID} of threads) {
        if (siteID in prefixes) { continue; }
        var len = 0;
        var prefix = '';
        var conflicts = Object.keys(prefixes);
        while (conflicts.length > 0) {
          len++;
          prefix = siteID.slice(0, len);
          var conflicts2 = [];
          for (var siteID2 of conflicts) {
            if (siteID2.slice(0, len) === prefix) {
              conflicts2.push(siteID2);
            } else if (prefixes[siteID2].length < len) {
              prefixes[siteID2] = siteID2.slice(0, len);
            }
          }
          conflicts = conflicts2;
        }
        prefixes[siteID] = prefix;
      }
      return ThreadWatcher.prefixes = prefixes;
    },

    build() {
      const nodes = [];
      const threads = ThreadWatcher.getAll();
      ThreadWatcher.setPrefixes(threads);
      for (var {siteID, boardID, threadID, data} of threads) {
        // Add missing excerpt for threads added by Auto Watch
        var thread;
        if ((data.excerpt == null) && (siteID === g.SITE.ID) && (thread = g.threads.get(`${boardID}.${threadID}`)) && thread.OP) {
          ThreadWatcher.db.extend({boardID, threadID, val: {excerpt: Get$1.threadExcerpt(thread)}});
        }
        nodes.push(ThreadWatcher.makeLine(siteID, boardID, threadID, data));
      }
      const {list} = ThreadWatcher;
      $$1.rmAll(list);
      $$1.add(list, nodes);

      return ThreadWatcher.refreshIcon();
    },

    refresh() {
      ThreadWatcher.build();

      g.threads.forEach(function(thread) {
        const isWatched = ThreadWatcher.isWatched(thread);
        if (thread.OP) {
          for (var post of [thread.OP, ...thread.OP.clones]) {
            var toggler;
            if (toggler = $$1('.watch-thread-link', post.nodes.info)) {
              ThreadWatcher.setToggler(toggler, isWatched);
            }
          }
        }
        if (thread.catalogView) { return thread.catalogView.nodes.root.classList.toggle('watched', isWatched); }
      });

      if (Conf['Pin Watched Threads']) {
        return $$1.event('SortIndex', {deferred: Conf['Index Mode'] !== 'catalog'});
      }
    },

    refreshIcon() {
      for (var className of ['replies-unread', 'replies-quoting-you']) {
        ThreadWatcher.shortcut.classList.toggle(className, !!$$1(`.${className}`, ThreadWatcher.dialog));
      }
    },

    update(siteID, boardID, threadID, newData) {
      let data, key, line, val;
      if (!(data = ThreadWatcher.db?.get({siteID, boardID, threadID}))) { return; }
      if (newData.isDead && Conf['Auto Prune']) {
        ThreadWatcher.rm(siteID, boardID, threadID);
        return;
      }
      if (newData.isDead || (newData.last === -1)) {
        for (key of ['isArchived', 'page', 'lastPage', 'unread', 'quotingyou']) {
          if (!(key in newData)) {
            newData[key] = undefined;
          }
        }
      }
      if ((newData.last != null) && (newData.last < data.last)) {
        newData.modified = undefined;
      }
      let n = 0;
      for (key in newData) { val = newData[key]; if (data[key] !== val) { n++; } }
      if (!n) { return; }
      ThreadWatcher.db.extend({siteID, boardID, threadID, val: newData});
      if (line = $$1(`#watched-threads > [data-site-i-d='${siteID}'][data-full-i-d='${boardID}.${threadID}']`, ThreadWatcher.dialog)) {
        const newLine = ThreadWatcher.makeLine(siteID, boardID, threadID, data);
        $$1.replace(line, newLine);
        return ThreadWatcher.refreshIcon();
      } else {
        return ThreadWatcher.refresh();
      }
    },

    set404(boardID, threadID, cb) {
      let data;
      if (!(data = ThreadWatcher.db?.get({boardID, threadID}))) { return cb(); }
      if (Conf['Auto Prune']) {
        ThreadWatcher.db.delete({boardID, threadID});
        return cb();
      }
      if (data.isDead && !((data.isArchived != null) || (data.page != null) || (data.lastPage != null) || (data.unread != null) || (data.quotingYou != null))) { return cb(); }
      return ThreadWatcher.db.extend({boardID, threadID, val: {isDead: true, isArchived: undefined, page: undefined, lastPage: undefined, unread: undefined, quotingYou: undefined}}, cb);
    },

    toggle(thread) {
      const siteID   = g.SITE.ID;
      const boardID  = thread.board.ID;
      const threadID = thread.ID;
      if (ThreadWatcher.db.get({boardID, threadID})) {
        return ThreadWatcher.rm(siteID, boardID, threadID);
      } else {
        return ThreadWatcher.add(thread);
      }
    },

    add(thread, cb) {
      const data     = {};
      const siteID   = g.SITE.ID;
      const boardID  = thread.board.ID;
      const threadID = thread.ID;
      if (thread.isDead) {
        if (Conf['Auto Prune'] && ThreadWatcher.db.get({boardID, threadID})) {
          ThreadWatcher.rm(siteID, boardID, threadID, cb);
          return;
        }
        data.isDead = true;
      }
      if (thread.OP) { data.excerpt = Get$1.threadExcerpt(thread); }
      return ThreadWatcher.addRaw(boardID, threadID, data, cb);
    },

    addRaw(boardID, threadID, data, cb) {
      const oldData = ThreadWatcher.db.get({ boardID, threadID, defaultValue: dict() });
      delete oldData.last;
      delete oldData.modified;
      $$1.extend(oldData, data);
      ThreadWatcher.db.set({boardID, threadID, val: oldData}, cb);
      ThreadWatcher.refresh();
      const thread = {siteID: g.SITE.ID, boardID, threadID, data, force: true};
      if (Conf['Show Page'] && !data.isDead) {
        return ThreadWatcher.fetchBoard([thread]);
      } else if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) {
        return ThreadWatcher.fetchStatus(thread);
      }
    },

    rm(siteID, boardID, threadID, cb) {
      ThreadWatcher.db.delete({siteID, boardID, threadID}, cb);
      return ThreadWatcher.refresh();
    },

    menu: {
      init() {
        if (!Conf['Thread Watcher']) { return; }
        const menu = (this.menu = new UI.Menu('thread watcher'));
        $$1.on($$1('.menu-button', ThreadWatcher.dialog), 'click', function(e) {
          return menu.toggle(e, this, ThreadWatcher);
        });
        return this.addMenuEntries();
      },

      addHeaderMenuEntry() {
        if (g.VIEW !== 'thread') { return; }
        const entryEl = $$1.el('a',
          {href: 'javascript:;'});
        Header$1.menu.addEntry({
          el: entryEl,
          order: 60,
          open() {
            const [addClass, rmClass, text] = !!ThreadWatcher.db.get({boardID: g.BOARD.ID, threadID: g.THREADID}) ?
              ['unwatch-thread', 'watch-thread', 'Unwatch thread']
            :
              ['watch-thread', 'unwatch-thread', 'Watch thread'];
            $$1.addClass(entryEl, addClass);
            $$1.rmClass(entryEl, rmClass);
            entryEl.textContent = text;
            return true;
          }
        });
        return $$1.on(entryEl, 'click', () => ThreadWatcher.toggle(g.threads.get(`${g.BOARD}.${g.THREADID}`)));
      },

      addMenuEntries() {
        const entries = [];

        // `Open all` entry
        entries.push({
          text: 'Open all threads',
          cb: ThreadWatcher.cb.openAll,
          open() {
            this.el.classList.toggle('disabled', !ThreadWatcher.list.firstElementChild);
            return true;
          }
        });

        // `Open Unread` entry
        entries.push({
          text: 'Open unread threads',
          cb: ThreadWatcher.cb.openUnread,
          open() {
            this.el.classList.toggle('disabled', !$$1('.replies-unread', ThreadWatcher.list));
            return true;
          }
        });

        // `Open dead threads` entry
        entries.push({
          text: 'Open dead threads',
          cb: ThreadWatcher.cb.openDeads,
          open() {
            this.el.classList.toggle('disabled', !$$1('.dead-thread', ThreadWatcher.list));
            return true;
          }
        });

        // `Prune dead threads` entry
        entries.push({
          text: 'Prune dead threads',
          cb: ThreadWatcher.cb.pruneDeads,
          open() {
            this.el.classList.toggle('disabled', !$$1('.dead-thread', ThreadWatcher.list));
            return true;
          }
        });

        // `Dismiss posts quoting you` entry
        entries.push({
          text: 'Dismiss posts quoting you',
          title: 'Unhighlight the thread watcher icon and threads until there are new replies quoting you.',
          cb: ThreadWatcher.cb.dismiss,
          open() {
            this.el.classList.toggle('disabled', !$$1.hasClass(ThreadWatcher.shortcut, 'replies-quoting-you'));
            return true;
          }
        });

        for (var {text, title, cb, open} of entries) {
          var entry = {
            el: $$1.el('a', {
              textContent: text,
              href: 'javascript:;'
            }
            )
          };
          if (title) { entry.el.title = title; }
          $$1.on(entry.el, 'click', cb);
          entry.open = open.bind(entry);
          this.menu.addEntry(entry);
        }

        // Settings checkbox entries:
        for (var name in Config.threadWatcher) {
          var conf = Config.threadWatcher[name];
          this.addCheckbox(name, conf[1]);
        }

      },

      addCheckbox(name, desc) {
        const entry = {
          type: 'thread watcher',
          el: UI.checkbox(name, name.replace(' Thread Watcher', ''))
        };
        entry.el.title = desc;
        const input = entry.el.firstElementChild;
        if ((name === 'Show Unread Count') && !ThreadWatcher.unreadEnabled) {
          input.disabled = true;
          $$1.addClass(entry.el, 'disabled');
          entry.el.title += '\n[Remember Last Read Post is disabled.]';
        }
        $$1.on(input, 'change', $$1.cb.checked);
        if (['Current Board', 'Show Page', 'Show Unread Count', 'Show Site Prefix'].includes(name)) { $$1.on(input, 'change', ThreadWatcher.refresh); }
        if (['Show Page', 'Show Unread Count', 'Auto Update Thread Watcher'].includes(name)) { $$1.on(input, 'change', ThreadWatcher.fetchAuto); }
        return this.menu.addEntry(entry);
      }
    }
  };
  var ThreadWatcher$1 = ThreadWatcher;

  /*
   * This file has the code for the jsx to { innerHTML: "safe string" }
   *
   * Usage: import h from this file.
   * Attributes are stringified raw, so the names must be like html text: eg class and not className.
   * Boolean values are stringified as followed: true will mean the attribute is there, false means it will be omitted.
   * Strings bound to attributes and children will be escaped automatically.
   * It returns interface EscapedHtml { innerHTML: "safe string", [isEscaped]: true }
   *
   * For strings that don't have a parent element you can use fragments: <></>.
   * Note that you need to import hFragment, which for some reason isn't auto imported on "add all missing imports"
   */
  /**
   * The symbol indicating that a string is safely escaped.
   * This is a symbol so it can't be faked by a json blob from the internet.
   */
  const isEscaped = Symbol('isEscaped');
  const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr',]);
  const hFragment = Symbol('hFragment');
  /** Function that jsx/tsx will be compiled to. */
  function h(tag, attributes, ...children) {
      let innerHTML = tag === hFragment ? '' : `<${tag}`;
      if (attributes) {
          for (const [attribute, value] of Object.entries(attributes)) {
              if (!value && value !== 0)
                  continue;
              innerHTML += ` ${attribute}`;
              if (value === true)
                  continue;
              innerHTML += `="${E(value.toString())}"`;
          }
      }
      if (tag !== hFragment)
          innerHTML += '>';
      const isVoid = tag !== hFragment && voidElements.has(tag);
      if (isVoid) {
          if (children.length)
              throw new TypeError(`${tag} is a void html element and can't have child elements`);
      }
      else {
          for (const child of children) {
              if (child === null || child === undefined || child === '')
                  continue;
              if (child instanceof Object && "innerHTML" in child && child[isEscaped]) {
                  innerHTML += child.innerHTML;
                  continue;
              }
              innerHTML += E(child.toString());
          }
      }
      if (!isVoid && tag !== hFragment)
          innerHTML += `</${tag}>`;
      return { innerHTML, [isEscaped]: true };
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS206: Consider reworking classes to avoid initClass
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class Fetcher {
    static archiveTags = {
      '\n':         {innerHTML: "<br>"},
      '[b]':        {innerHTML: "<b>"},
      '[/b]':       {innerHTML: "</b>"},
      '[spoiler]':  {innerHTML: "<s>"},
      '[/spoiler]': {innerHTML: "</s>"},
      '[code]':     {innerHTML: "<pre class=\"prettyprint\">"},
      '[/code]':    {innerHTML: "</pre>"},
      '[moot]':     {innerHTML: "<div style=\"padding:5px;margin-left:.5em;border-color:#faa;border:2px dashed rgba(255,0,0,.1);border-radius:2px\">"},
      '[/moot]':    {innerHTML: "</div>"},
      '[banned]':   {innerHTML: "<strong style=\"color: red;\">"},
      '[/banned]':  {innerHTML: "</strong>"},
      '[fortune]'(text) { return {innerHTML: "<span class=\"fortune\" style=\"color:" + E(text.match(/#\w+|$/)[0]) + "\"><b>"}; },
      '[/fortune]': {innerHTML: "</b></span>"},
      '[i]':        {innerHTML: "<span class=\"mu-i\">"},
      '[/i]':       {innerHTML: "</span>"},
      '[red]':      {innerHTML: "<span class=\"mu-r\">"},
      '[/red]':     {innerHTML: "</span>"},
      '[green]':    {innerHTML: "<span class=\"mu-g\">"},
      '[/green]':   {innerHTML: "</span>"},
      '[blue]':     {innerHTML: "<span class=\"mu-b\">"},
      '[/blue]':    {innerHTML: "</span>"}
    };

    constructor(boardID, threadID, postID, root, quoter) {
      let post, thread;
      this.boardID = boardID;
      this.threadID = threadID;
      this.postID = postID;
      this.root = root;
      this.quoter = quoter;
      if (post = g.posts.get(`${this.boardID}.${this.postID}`)) {
        this.insert(post);
        return;
      }

      // 4chan X catalog data
      if ((post = Index$1.replyData?.[`${this.boardID}.${this.postID}`]) && (thread = g.threads.get(`${this.boardID}.${this.threadID}`))) {
        const board  = g.boards[this.boardID];
        post = new Post(g.SITE.Build.postFromObject(post, this.boardID), thread, board, {isFetchedQuote: true});
        Main$1.callbackNodes('Post', [post]);
        this.insert(post);
        return;
      }

      this.root.textContent = `Loading post No.${this.postID}...`;
      if (this.threadID) {
        const that = this;
        $$1.cache(g.SITE.urls.threadJSON({boardID: this.boardID, threadID: this.threadID}), function({isCached}) {
          return that.fetchedPost(this, isCached);
        });
      } else {
        this.archivedPost();
      }
    }

    insert(post) {
      // Stop here if the container has been removed while loading.
      if (!this.root.parentNode) { return; }
      if (!this.quoter) { this.quoter = post; }
      const clone = post.addClone(this.quoter.context, ($$1.hasClass(this.root, 'dialog')));
      Main$1.callbackNodes('Post', [clone]);

      // Get rid of the side arrows/stubs.
      const {nodes} = clone;
      $$1.rmAll(nodes.root);
      $$1.add(nodes.root, nodes.post);

      // Indicate links to the containing post.
      const quotes = [...clone.nodes.quotelinks, ...clone.nodes.backlinks];
      for (var quote of quotes) {
        var {boardID, postID} = Get$1.postDataFromLink(quote);
        if ((postID === this.quoter.ID) && (boardID === this.quoter.board.ID)) {
          $$1.addClass(quote, 'forwardlink');
        }
      }

      // Set up flag CSS for cross-board links to boards with flags
      if (clone.nodes.flag && !(Fetcher.flagCSS || (Fetcher.flagCSS = $$1('link[href^="//s.4cdn.org/css/flags."]')))) {
        const cssVersion = $$1('link[href^="//s.4cdn.org/css/"]')?.href.match(/\d+(?=\.css$)|$/)[0] || Date.now();
        Fetcher.flagCSS = $$1.el('link', {
          rel: 'stylesheet',
          href: `//s.4cdn.org/css/flags.${cssVersion}.css`
        }
        );
        $$1.add(d$1.head, Fetcher.flagCSS);
      }

      $$1.rmAll(this.root);
      $$1.add(this.root, nodes.root);
      return $$1.event('PostsInserted', null, this.root);
    }

    fetchedPost(req, isCached) {
      // In case of multiple callbacks for the same request,
      // don't parse the same original post more than once.
      let post;
      if (post = g.posts.get(`${this.boardID}.${this.postID}`)) {
        this.insert(post);
        return;
      }

      const {status} = req;
      if (status !== 200) {
        // The thread can die by the time we check a quote.
        if (status && this.archivedPost()) { return; }

        $$1.addClass(this.root, 'warning');
        this.root.textContent =
          status === 404 ?
            `Thread No.${this.threadID} 404'd.`
          : !status ?
            'Connection Error'
          :
            `Error ${req.statusText} (${req.status}).`;
        return;
      }

      const {posts} = req.response;
      g.SITE.Build.spoilerRange[this.boardID] = posts[0].custom_spoiler;
      for (post of posts) {
        if (post.no === this.postID) { break; }
      } // we found it!

      if (post.no !== this.postID) {
        // Cached requests can be stale and must be rechecked.
        if (isCached) {
          const api = g.SITE.urls.threadJSON({boardID: this.boardID, threadID: this.threadID});
          $$1.cleanCache(url => url === api);
          const that = this;
          $$1.cache(api, function() {
            return that.fetchedPost(this, false);
          });
          return;
        }

        // The post can be deleted by the time we check a quote.
        if (this.archivedPost()) { return; }

        $$1.addClass(this.root, 'warning');
        this.root.textContent = `Post No.${this.postID} was not found.`;
        return;
      }

      const board = g.boards[this.boardID] ||
        new Board(this.boardID);
      const thread = g.threads.get(`${this.boardID}.${this.threadID}`) ||
        new Thread(this.threadID, board);
      post = new Post(g.SITE.Build.postFromObject(post, this.boardID), thread, board, {isFetchedQuote: true});
      Main$1.callbackNodes('Post', [post]);
      return this.insert(post);
    }

    archivedPost() {
      let url;
      if (!Conf['Resurrect Quotes']) { return false; }
      if (!(url = Redirect$1.to('post', {boardID: this.boardID, postID: this.postID}))) { return false; }
      const archive = Redirect$1.data.post[this.boardID];
      const encryptionOK = /^https:\/\//.test(url) || (location.protocol === 'http:');
      if (encryptionOK || Conf['Exempt Archives from Encryption']) {
        const that = this;
        CrossOrigin$1.cache(url, function() {
          if (!encryptionOK && this.response?.media) {
            const {media} = this.response;
            for (var key in media) {
              // Image/thumbnail URLs loaded over HTTP can be modified in transit.
              // Require them to be from an HTTP host so that no referrer is sent to them from an HTTPS page.
              if (/_link$/.test(key)) {
                if (!$$1.getOwn(media, key)?.match(/^http:\/\//)) { delete media[key]; }
              }
            }
          }
          return that.parseArchivedPost(this.response, url, archive);
        });
        return true;
      }
      return false;
    }

    parseArchivedPost(data, url, archive) {
      // In case of multiple callbacks for the same request,
      // don't parse the same original post more than once.
      let post;
      if (post = g.posts.get(`${this.boardID}.${this.postID}`)) {
        this.insert(post);
        return;
      }

      if (data == null) {
        $$1.addClass(this.root, 'warning');
        this.root.textContent = `Error fetching Post No.${this.postID} from ${archive.name}.`;
        return;
      }

      if (data.error) {
        $$1.addClass(this.root, 'warning');
        this.root.textContent = data.error;
        return;
      }

      // https://github.com/eksopl/asagi/blob/v0.4.0b74/src/main/java/net/easymodo/asagi/YotsubaAbstract.java#L82-L129
      // https://github.com/FoolCode/FoolFuuka/blob/800bd090835489e7e24371186db6e336f04b85c0/src/Model/Comment.php#L368-L428
      // https://github.com/bstats/b-stats/blob/6abe7bffaf6e5f523498d760e54b110df5331fbb/inc/classes/Yotsuba.php#L157-L168
      let comment = (data.comment || '').split(/(\n|\[\/?(?:b|spoiler|code|moot|banned|fortune(?: color="#\w+")?|i|red|green|blue)\])/);
      comment = comment.map((text, i) => {
        if ((i % 2) === 1) {
          var tag = Fetcher.archiveTags[text.replace(/\ .*\]/, ']')];
          return (typeof tag === 'function') ? tag(text) : tag;
        } else {
          var greentext = text[0] === '>';
          text = text
            .replace(/(\[\/?[a-z]+):lit(\])/g, '$1$2')
            .split(/(>>(?:>\/[a-z\d]+\/)?\d+)/g)
            .map((text2, j) => ((j % 2) ? `<span class="deadlink">${E(text2)}</span>`: E(text2)))
            .join('');
          return {innerHTML: (greentext ? `<span class="quote">${text}</span>` : text)};
        }
      });
      comment = { innerHTML: E.cat(comment), [isEscaped]: true };

      this.threadID = +data.thread_num;
      const o = {
        ID:       this.postID,
        threadID: this.threadID,
        boardID:  this.boardID,
        isReply:  this.postID !== this.threadID
      };
      o.info = {
        subject:  data.title,
        email:    data.email,
        name:     data.name || '',
        tripcode: data.trip,
        capcode:  (() => { switch (data.capcode) {
          // https://github.com/pleebe/FoolFuuka/blob/bf4224eed04637a4d0bd4411c2bf5f9945dfec0b/assets/themes/foolz/foolfuuka-theme-fuuka/src/Partial/Board.php#L77
          case 'M': return 'Mod';
          case 'A': return 'Admin';
          case 'D': return 'Developer';
          case 'V': return 'Verified';
          case 'F': return 'Founder';
          case 'G': return 'Manager';
        } })(),
        uniqueID: data.poster_hash,
        flagCode: data.poster_country,
        flagCodeTroll: data.troll_country_code,
        flag:     data.poster_country_name || data.troll_country_name,
        dateUTC:  data.timestamp,
        dateText: data.fourchan_date,
        commentHTML: comment
      };
      if (o.info.capcode) { delete o.info.uniqueID; }
      if (data.media && !!+data.media.banned) {
        o.fileDeleted = true;
      } else if (data.media?.media_filename) {
        let {thumb_link} = data.media;
        // Fix URLs missing origin
        if (thumb_link?.[0] === '/') { thumb_link = url.split('/', 3).join('/') + thumb_link; }
        if (!Redirect$1.securityCheck(thumb_link)) { thumb_link = ''; }
        let media_link = Redirect$1.to('file', {boardID: this.boardID, filename: data.media.media_orig});
        if (!Redirect$1.securityCheck(media_link)) { media_link = ''; }
        o.file = {
          name:      data.media.media_filename,
          url:       media_link ||
                       (this.boardID === 'f' ?
                         `${location.protocol}//${ImageHost.flashHost()}/${this.boardID}/${encodeURIComponent(E(data.media.media_filename))}`
                       :
                         `${location.protocol}//${ImageHost.host()}/${this.boardID}/${data.media.media_orig}`),
          height:    data.media.media_h,
          width:     data.media.media_w,
          MD5:       data.media.media_hash,
          size:      $$1.bytesToString(data.media.media_size),
          thumbURL:  thumb_link || `${location.protocol}//${ImageHost.thumbHost()}/${this.boardID}/${data.media.preview_orig}`,
          theight:   data.media.preview_h,
          twidth:    data.media.preview_w,
          isSpoiler: data.media.spoiler === '1'
        };
        if (!/\.pdf$/.test(o.file.url)) { o.file.dimensions = `${o.file.width}x${o.file.height}`; }
        if ((this.boardID === 'f') && data.media.exif) { o.file.tag = JSON.parse(data.media.exif).Tag; }
      }
      o.extra = dict();

      const board = g.boards[this.boardID] ||
        new Board(this.boardID);
      const thread = g.threads.get(`${this.boardID}.${this.threadID}`) ||
        new Thread(this.threadID, board);
      post = new Post(g.SITE.Build.post(o), thread, board, {isFetchedQuote: true});
      post.kill();
      if (post.file) { post.file.thumbURL = o.file.thumbURL; }
      Main$1.callbackNodes('Post', [post]);
      return this.insert(post);
    }
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var QuotePreview = {
    init() {
      if (!Conf['Quote Previewing']) { return; }

      if (g.VIEW === 'archive') {
        $$1.on(d$1, 'mouseover', function(e) {
          if ((e.target.nodeName === 'A') && $$1.hasClass(e.target, 'quotelink')) {
            return QuotePreview.mouseover.call(e.target, e);
          }
        });
      }

      if (!['index', 'thread'].includes(g.VIEW)) { return; }

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      return Callbacks.Post.push({
        name: 'Quote Previewing',
        cb:   this.node
      });
    },

    node() {
      for (var link of this.nodes.quotelinks.concat([...this.nodes.backlinks], this.nodes.archivelinks)) {
        $$1.on(link, 'mouseover', QuotePreview.mouseover);
      }
    },

    mouseover(e) {
      let origin;
      if (($$1.hasClass(this, 'inlined') && !$$1.hasClass(doc$1, 'catalog-mode')) || !d$1.contains(this)) { return; }

      const {boardID, threadID, postID} = Get$1.postDataFromLink(this);

      const qp = $$1.el('div', {
        id: 'qp',
        className: 'dialog'
      }
      );

      $$1.add(Header$1.hover, qp);
      new Fetcher(boardID, threadID, postID, qp, Get$1.postFromNode(this));

      UI.hover({
        root: this,
        el: qp,
        latestEvent: e,
        endEvents: 'mouseout click',
        cb: QuotePreview.mouseout
      });

      if (Conf['Quote Highlighting'] && (origin = g.posts.get(`${boardID}.${postID}`))) {
        const posts = [origin].concat(origin.clones);
        // Remove the clone that's in the qp from the array.
        posts.pop();
        for (var post of posts) {
          $$1.addClass(post.nodes.post, 'qphl');
        }
      }
    },

    mouseout() {
      // Stop if it only contains text.
      let root;
      if (!(root = this.el.firstElementChild)) { return; }

      $$1.event('PostsRemoved', null, Header$1.hover);

      const clone = Get$1.postFromRoot(root);
      let post  = clone.origin;
      post.rmClone(root.dataset.clone);

      if (!Conf['Quote Highlighting']) { return; }
      for (post of [post].concat(post.clones)) {
        $$1.rmClass(post.nodes.post, 'qphl');
      }
    }
  };

  var NavLinksPage = `<span class="brackets-wrap indexlink"><a href="#index">Index</a></span> 
<span class="brackets-wrap cataloglink"><a href="#catalog">Catalog</a></span> 
<span class="brackets-wrap archlistlink"><a href="./archive">Archive</a></span> 
<span class="brackets-wrap bottomlink"><a href="#bottom">Bottom</a></span> 
<span class="brackets-wrap" id="index-last-refresh"><a href="javascript:;"><time title="Last index refresh">...</time></a></span> 
<input type="search" id="index-search" class="field" placeholder="Search">
<a id="index-search-clear" href="javascript:;" title="Clear search">×</a>
<span id="hidden-label" hidden> &mdash; <span id="hidden-count"></span> <span id="hidden-toggle">[<a href="javascript:;">Show</a>]</span></span>
<span id="index-options">
  <input type="checkbox" id="index-rev" name="Reverse Sort" title="Reverse sort order">
  <span id="lastlong-options" hidden>
    <input type="text" title="Minimum letter count (without image)">
    <input type="text" title="Minimum letter count (with image)">
  </span>
  <select id="index-sort" name="Index Sort">
    <option disabled>Index Sort</option>
    <option value="bump">Bump order</option>
    <option value="lastreply">Last reply</option>
    <option value="lastlong">Last long reply</option>
    <option value="birth">Creation date</option>
    <option value="replycount">Reply count</option>
    <option value="filecount">File count</option>
    <option value="activity">Posts per minute</option>
  </select>
  <select id="index-size" name="Index Size">
    <option disabled>Image Size</option>
    <option value="small">Small</option>
    <option value="large">Large</option>
  </select>
  <select id="index-mode" name="Index Mode">
    <option disabled>Index Mode</option>
    <option value="paged">Paged</option>
    <option value="infinite">Infinite scrolling</option>
    <option value="all pages">All threads</option>
    <option value="catalog">Catalog</option>
  </select>
</span>
`;

  var PageList = `<div class="prev">
  <a>
    <button disabled>Previous</button>
  </a>
</div>
<div class="pages"></div>
<div class="next">
  <a>
    <button disabled>Next</button>
  </a>
</div>
<div class="pages cataloglink">
  <a href="./catalog">Catalog</a>
</div>
`;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var Index = {
    showHiddenThreads: false,
    changed: {},

    enabledOn({siteID, boardID}) {
      return Conf['JSON Index'] && (g.sites[siteID].software === 'yotsuba') && (boardID !== 'f');
    },

    init() {
      let input, inputs, name;
      if (g.VIEW !== 'index') { return; }

      // For IndexRefresh events
      $$1.one(d$1, '4chanXInitFinished', this.cb.initFinished);
      $$1.on(d$1, 'PostsInserted', this.cb.postsInserted);

      if (!this.enabledOn(g.BOARD)) { return; }

      this.enabled = true;

      Callbacks.Post.push({
        name: 'Index Page Numbers',
        cb:   this.node
      });
      Callbacks.CatalogThread.push({
        name: 'Catalog Features',
        cb:   this.catalogNode
      });

      this.search = history.state?.searched || '';
      if (history.state?.mode) {
        Conf['Index Mode'] = history.state?.mode;
      }
      this.currentSort = history.state?.sort;
      if (!this.currentSort) { this.currentSort = typeof Conf['Index Sort'] === 'object' ? (
          Conf['Index Sort'][g.BOARD.ID] || 'bump'
        ) : (
          Conf['Index Sort']
        ); }
      this.currentPage = this.getCurrentPage();
      this.processHash();

      $$1.addClass(doc$1, 'index-loading', `${Conf['Index Mode'].replace(/\ /g, '-')}-mode`);
      $$1.on(window, 'popstate', this.cb.popstate);
      $$1.on(d$1, 'scroll', this.scroll);
      $$1.on(d$1, 'SortIndex', this.cb.resort);

      // Header refresh button
      this.button = $$1.el('a', {
        title: 'Refresh',
        href: 'javascript:;',
        textContent: '🗘'
      }
      );
      $$1.on(this.button, 'click', () => Index.update());
      Header$1.addShortcut('index-refresh', this.button, 590);

      // Header "Index Navigation" submenu
      const entries = [];
      this.inputs = (inputs = dict());
      for (name in Config.Index) {
        var arr = Config.Index[name];
        if (arr instanceof Array) {
          var label = UI.checkbox(name, `${name[0]}${name.slice(1).toLowerCase()}`);
          label.title = arr[1];
          entries.push({el: label});
          input = label.firstChild;
          $$1.on(input, 'change', $$1.cb.checked);
          inputs[name] = input;
        }
      }
      $$1.on(inputs['Show Replies'], 'change', this.cb.replies);
      $$1.on(inputs['Catalog Hover Expand'], 'change', this.cb.hover);
      $$1.on(inputs['Pin Watched Threads'], 'change', this.cb.resort);
      $$1.on(inputs['Anchor Hidden Threads'], 'change', this.cb.resort);

      const watchSettings = function(e) {
        if (input = $$1.getOwn(inputs, e.target.name)) {
          input.checked = e.target.checked;
          return $$1.event('change', null, input);
        }
      };
      $$1.on(d$1, 'OpenSettings', () => $$1.on($$1.id('fourchanx-settings'), 'change', watchSettings));

      const sortEntry = UI.checkbox('Per-Board Sort Type', 'Per-board sort type', (typeof Conf['Index Sort'] === 'object'));
      sortEntry.title = 'Set the sorting order of each board independently.';
      $$1.on(sortEntry.firstChild, 'change', this.cb.perBoardSort);
      entries.splice(3, 0, {el: sortEntry});

      Header$1.menu.addEntry({
        el: $$1.el('span',
          {textContent: 'Index Navigation'}),
        order: 100,
        subEntries: entries
      });

      // Navigation links at top of index
      this.navLinks = $$1.el('div', {className: 'navLinks json-index'});
      $$1.extend(this.navLinks, {innerHTML: NavLinksPage});
      $$1('.cataloglink a', this.navLinks).href = CatalogLinks.catalog();
      if (!BoardConfig.isArchived(g.BOARD.ID)) { $$1('.archlistlink', this.navLinks).hidden = true; }
      $$1.on($$1('#index-last-refresh a', this.navLinks), 'click', this.cb.refreshFront);

      // Search field
      this.searchInput = $$1('#index-search', this.navLinks);
      this.setupSearch();
      $$1.on(this.searchInput, 'input', this.onSearchInput);
      $$1.on($$1('#index-search-clear', this.navLinks), 'click', this.clearSearch);

      // Hidden threads toggle
      this.hideLabel = $$1('#hidden-label', this.navLinks);
      $$1.on($$1('#hidden-toggle a', this.navLinks), 'click', this.cb.toggleHiddenThreads);

      // Drop-down menus and reverse sort toggle
      this.selectRev   = $$1('#index-rev',  this.navLinks);
      this.selectMode  = $$1('#index-mode', this.navLinks);
      this.selectSort  = $$1('#index-sort', this.navLinks);
      this.selectSize  = $$1('#index-size', this.navLinks);
      $$1.on(this.selectRev,  'change', this.cb.sort);
      $$1.on(this.selectMode, 'change', this.cb.mode);
      $$1.on(this.selectSort, 'change', this.cb.sort);
      $$1.on(this.selectSize, 'change', $$1.cb.value);
      $$1.on(this.selectSize, 'change', this.cb.size);
      for (var select of [this.selectMode, this.selectSize]) {
        select.value = Conf[select.name];
      }
      this.selectRev.checked = /-rev$/.test(Index.currentSort);
      this.selectSort.value  = Index.currentSort.replace(/-rev$/, '');

      // Last Long Reply options
      this.lastLongOptions = $$1('#lastlong-options', this.navLinks);
      this.lastLongInputs = $$('input', this.lastLongOptions);
      this.lastLongThresholds = [0, 0];
      this.lastLongOptions.hidden = (this.selectSort.value !== 'lastlong');
      for (let i = 0; i < this.lastLongInputs.length; i++) {
        input = this.lastLongInputs[i];
        $$1.on(input, 'change', this.cb.lastLongThresholds);
        var tRaw = Conf[`Last Long Reply Thresholds ${i}`];
        input.value = (this.lastLongThresholds[i] =
          typeof tRaw === 'object' ? (tRaw[g.BOARD.ID] ?? 100) : tRaw);
      }

      // Thread container
      this.root = $$1.el('div', {className: 'board json-index'});
      $$1.on(this.root, 'click', this.cb.hoverToggle);
      this.cb.size();
      this.cb.hover();

      // Page list
      this.pagelist = $$1.el('div', {className: 'pagelist json-index'});
      $$1.extend(this.pagelist, {innerHTML: PageList});
      $$1('.cataloglink a', this.pagelist).href = CatalogLinks.catalog();
      $$1.on(this.pagelist, 'click', this.cb.pageNav);

      this.update(true);

      $$1.onExists(doc$1, 'title + *', () => d$1.title = d$1.title.replace(/\ -\ Page\ \d+/, ''));

      $$1.onExists(doc$1, '.board > .thread > .postContainer, .board + *', function() {
        let el;
        g.SITE.Build.hat = $$1('.board > .thread > img:first-child');
        if (g.SITE.Build.hat) {
          g.BOARD.threads.forEach(function(thread) {
            if (thread.nodes.root) {
              return $$1.prepend(thread.nodes.root, g.SITE.Build.hat.cloneNode(false));
            }
          });
          $$1.addClass(doc$1, 'hats-enabled');
          $$1.addStyle(`.catalog-thread::after {background-image: url(${g.SITE.Build.hat.src});}`);
        }

        const board = $$1('.board');
        $$1.replace(board, Index.root);
        if (Index.loaded) {
          $$1.event('PostsInserted', null, Index.root);
        }
        // Hacks:
        // - When removing an element from the document during page load,
        //   its ancestors will still be correctly created inside of it.
        // - Creating loadable elements inside of an origin-less document
        //   will not download them.
        // - Combine the two and you get a download canceller!
        //   Does not work on Firefox unfortunately. bugzil.la/939713
        try {
          d$1.implementation.createDocument(null, null, null).appendChild(board);
        } catch (error) {}

        for (el of $$('.navLinks')) { $$1.rm(el); }
        $$1.rm($$1.id('ctrl-top'));
        const topNavPos = $$1.id('delform').previousElementSibling;
        $$1.before(topNavPos, $$1.el('hr'));
        $$1.before(topNavPos, Index.navLinks);
        const timeEl = $$1('#index-last-refresh time', Index.navLinks);
        if (timeEl.dataset.utc) { return RelativeDates.update(timeEl); }
      });

      return Main$1.ready(function() {
        let pagelist;
        if (pagelist = $$1('.pagelist')) {
          $$1.replace(pagelist, Index.pagelist);
        }
        return $$1.rmClass(doc$1, 'index-loading');
      });
    },

    scroll() {
      if (Index.req || !Index.liveThreadData || (Conf['Index Mode'] !== 'infinite') || (window.scrollY <= (doc$1.scrollHeight - (300 + window.innerHeight)))) { return; }
      if (Index.pageNum == null) { Index.pageNum = Index.currentPage; } // Avoid having to pushState to keep track of the current page

      const pageNum = ++Index.pageNum;
      if (pageNum > Index.pagesNum) { return Index.endNotice(); }

      const threadIDs = Index.threadsOnPage(pageNum);
      return Index.buildStructure(threadIDs);
    },

    endNotice: (function() {
      let notify = false;
      const reset = () => notify = false;
      return function() {
        if (notify) { return; }
        notify = true;
        new Notice('info', "Last page reached.", 2);
        return setTimeout(reset, 3 * SECOND);
      };
    })(),

    menu: {
      init() {
        if ((g.VIEW !== 'index') || !Conf['Menu'] || !Conf['Thread Hiding Link'] || !Index.enabledOn(g.BOARD)) { return; }

        return Menu.menu.addEntry({
          el: $$1.el('a', {
            href:      'javascript:;',
            className: 'has-shortcut-text'
          }
          , {innerHTML: "<span></span><span class=\"shortcut-text\">Shift+click</span>"}),
          order: 20,
          open({thread}) {
            if (Conf['Index Mode'] !== 'catalog') { return false; }
            this.el.firstElementChild.textContent = thread.isHidden ?
              'Unhide'
            :
              'Hide';
            if (this.cb) { $$1.off(this.el, 'click', this.cb); }
            this.cb = function() {
              $$1.event('CloseMenu');
              return Index.toggleHide(thread);
            };
            $$1.on(this.el, 'click', this.cb);
            return true;
          }
        });
      }
    },

    node() {
      if (this.isReply || this.isClone || (Index.threadPosition[this.ID] == null)) { return; }
      return this.thread.setPage(Math.floor(Index.threadPosition[this.ID] / Index.threadsNumPerPage) + 1);
    },

    catalogNode() {
      return $$1.on(this.nodes.root, 'mousedown click', e => {
        if ((e.button !== 0) || !e.shiftKey) { return; }
        if (e.type === 'click') { Index.toggleHide(this.thread); }
        return e.preventDefault();
      });
    }, // Also on mousedown to prevent highlighting text.

    toggleHide(thread) {
      if (Index.showHiddenThreads) {
        ThreadHiding.show(thread);
        if (!ThreadHiding.db.get({boardID: thread.board.ID, threadID: thread.ID})) { return; }
        // Don't save when un-hiding filtered threads.
      } else {
        ThreadHiding.hide(thread);
      }
      return ThreadHiding.saveHiddenState(thread);
    },

    cycleSortType() {
      let i;
      const types = Index.selectSort.options.filter(option => !option.disabled);
      for (i = 0; i < types.length; i++) {
        var type = types[i];
        if (type.selected) { break; }
      }
      types[(i + 1) % types.length].selected = true;
      return $$1.event('change', null, Index.selectSort);
    },

    cb: {
      initFinished() {
        Index.initFinishedFired = true;
        return $$1.queueTask(() => Index.cb.postsInserted());
      },

      postsInserted() {
        if (!Index.initFinishedFired) { return; }
        let n = 0;
        g.posts.forEach(function(post) {
          if (!post.isFetchedQuote && !post.indexRefreshSeen && doc$1.contains(post.nodes.root)) {
            post.indexRefreshSeen = true;
            return n++;
          }
        });
        if (n) { return $$1.event('IndexRefresh'); }
      },

      toggleHiddenThreads() {
        $$1('#hidden-toggle a', Index.navLinks).textContent = (Index.showHiddenThreads = !Index.showHiddenThreads) ?
          'Hide'
        :
          'Show';
        Index.sort();
        return Index.buildIndex();
      },

      mode() {
        Index.pushState({mode: this.value});
        return Index.pageLoad(false);
      },

      sort() {
        const value = Index.selectRev.checked ? Index.selectSort.value + "-rev" : Index.selectSort.value;
        Index.pushState({sort: value});
        return Index.pageLoad(false);
      },

      resort(e) {
        Index.changed.order = true;
        if (!e?.detail?.deferred) { return Index.pageLoad(false); }
      },

      perBoardSort() {
        Conf['Index Sort'] = this.checked ? dict() : '';
        Index.saveSort();
        for (let i = 0; i < 2; i++) {
          Conf[`Last Long Reply Thresholds ${i}`] = this.checked ? dict() : '';
          Index.saveLastLongThresholds(i);
        }
      },

      lastLongThresholds() {
        const i = [...this.parentNode.children].indexOf(this);
        const value = +this.value;
        if (!Number.isFinite(value)) {
          this.value = Index.lastLongThresholds[i];
          return;
        }
        Index.lastLongThresholds[i] = value;
        Index.saveLastLongThresholds(i);
        Index.changed.order = true;
        return Index.pageLoad(false);
      },

      size(e) {
        if (Conf['Index Mode'] !== 'catalog') {
          $$1.rmClass(Index.root, 'catalog-small');
          $$1.rmClass(Index.root, 'catalog-large');
        } else if (Conf['Index Size'] === 'small') {
          $$1.addClass(Index.root, 'catalog-small');
          $$1.rmClass(Index.root,  'catalog-large');
        } else {
          $$1.addClass(Index.root, 'catalog-large');
          $$1.rmClass(Index.root,  'catalog-small');
        }
        if (e) { return Index.buildIndex(); }
      },

      replies() {
        return Index.buildIndex();
      },

      hover() {
        return doc$1.classList.toggle('catalog-hover-expand', Conf['Catalog Hover Expand']);
      },

      hoverToggle(e) {
        if (Conf['Catalog Hover Toggle'] && $$1.hasClass(doc$1, 'catalog-mode') && !$$1.modifiedClick(e) && !$$1.x('ancestor-or-self::a', e.target)) {
          let thread;
          const input = Index.inputs['Catalog Hover Expand'];
          input.checked = !input.checked;
          $$1.event('change', null, input);
          if (thread = Get$1.threadFromNode(e.target)) {
            Index.cb.catalogReplies.call(thread);
            return Index.cb.hoverAdjust.call(thread.OP.nodes);
          }
        }
      },

      popstate(e) {
        if (e?.state) {
          const {searched, mode, sort} = e.state;
          const page = Index.getCurrentPage();
          Index.setState({search: searched, mode, sort, page});
          return Index.pageLoad(false);
        } else {
          // page load or hash change
          const nCommands = Index.processHash();
          if (Conf['Refreshed Navigation'] && nCommands) {
            return Index.update();
          } else {
            return Index.pageLoad();
          }
        }
      },

      pageNav(e) {
        let a;
        if ($$1.modifiedClick(e)) { return; }
        switch (e.target.nodeName) {
          case 'BUTTON':
            e.target.blur();
            a = e.target.parentNode;
            break;
          case 'A':
            a = e.target;
            break;
          default:
            return;
        }
        if (a.textContent === 'Catalog') { return; }
        e.preventDefault();
        return Index.userPageNav(+a.pathname.split(/\/+/)[2] || 1);
      },

      refreshFront() {
        Index.pushState({page: 1});
        return Index.update();
      },

      catalogReplies() {
        if (Conf['Show Replies'] && $$1.hasClass(doc$1, 'catalog-hover-expand') && !this.catalogView.nodes.replies) {
          return Index.buildCatalogReplies(this);
        }
      },

      hoverAdjust() {
        // Prevent hovered catalog threads from going offscreen.
        let x;
        if (!$$1.hasClass(doc$1, 'catalog-hover-expand')) { return; }
        const rect = this.post.getBoundingClientRect();
        if (x = $$1.minmax(0, -rect.left, doc$1.clientWidth - rect.right)) {
          const {style} = this.post;
          style.left = `${x}px`;
          style.right = `${-x}px`;
          return $$1.one(this.root, 'mouseleave', () => style.left = (style.right = null));
        }
      }
    },

    scrollToIndex() {
      // Scroll to navlinks, or top of board if navlinks are hidden.
      return Header$1.scrollToIfNeeded((Index.navLinks.getBoundingClientRect().height ? Index.navLinks : Index.root));
    },

    getCurrentPage() {
      return +window.location.pathname.split(/\/+/)[2] || 1;
    },

    userPageNav(page) {
      Index.pushState({page});
      if (Conf['Refreshed Navigation']) {
        return Index.update();
      } else {
        return Index.pageLoad();
      }
    },

    hashCommands: {
      mode: {
        'paged':         'paged',
        'infinite-scrolling': 'infinite',
        'infinite':      'infinite',
        'all-threads':   'all pages',
        'all-pages':     'all pages',
        'catalog':       'catalog'
      },
      sort: {
        'bump-order':        'bump',
        'last-reply':        'lastreply',
        'last-long-reply':   'lastlong',
        'creation-date':     'birth',
        'reply-count':       'replycount',
        'file-count':        'filecount',
        'posts-per-minute':  'activity'
      }
    },

    processHash() {
      // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=483304
      let hash = location.href.match(/#.*/)?.[0] || '';
      const state =
        {replace: true};
      const commands = hash.slice(1).split('/');
      const leftover = [];
      for (var command of commands) {
        var mode, sort;
        if (mode = $$1.getOwn(Index.hashCommands.mode, command)) {
          state.mode = mode;
        } else if (command === 'index') {
          state.mode = Conf['Previous Index Mode'];
          state.page = 1;
        } else if (sort = $$1.getOwn(Index.hashCommands.sort, command.replace(/-rev$/, ''))) {
          state.sort = sort;
          if (/-rev$/.test(command)) { state.sort += '-rev'; }
        } else if (/^s=/.test(command)) {
          state.search = decodeURIComponent(command.slice(2)).replace(/\+/g, ' ').trim();
        } else {
          leftover.push(command);
        }
      }
      hash = leftover.join('/');
      if (hash) { state.hash = `#${hash}`; }
      Index.pushState(state);
      return commands.length - leftover.length;
    },

    pushState(state) {
      let {search, hash, replace} = state;
      let pageBeforeSearch = history.state?.oldpage;
      if ((search != null) && (search !== Index.search)) {
        state.page = search ? 1 : (pageBeforeSearch || 1);
        if (!search) {
          pageBeforeSearch = undefined;
        } else if (!Index.search) {
          pageBeforeSearch = Index.currentPage;
        }
      }
      Index.setState(state);
      const pathname = Index.currentPage === 1 ? `/${g.BOARD}/` : `/${g.BOARD}/${Index.currentPage}`;
      if (!hash) { hash = ''; }
      return history[replace ? 'replaceState' : 'pushState']({
        mode:     Conf['Index Mode'],
        sort:     Index.currentSort,
        searched: Index.search,
        oldpage:  pageBeforeSearch
      }
      , '', `${location.protocol}//${location.host}${pathname}${hash}`);
    },

    setState({search, mode, sort, page, hash}) {
      if ((search != null) && (search !== Index.search)) {
        Index.changed.search = true;
        Index.search = search;
      }
      if ((mode != null) && (mode !== Conf['Index Mode'])) {
        Index.changed.mode = true;
        Conf['Index Mode'] = mode;
        $$1.set('Index Mode', mode);
        if ((mode !== 'catalog') && (Conf['Previous Index Mode'] !== mode)) {
          Conf['Previous Index Mode'] = mode;
          $$1.set('Previous Index Mode', mode);
        }
      }
      if ((sort != null) && (sort !== Index.currentSort)) {
        Index.changed.sort = true;
        Index.currentSort = sort;
        Index.saveSort();
      }
      if (['all pages', 'catalog'].includes(Conf['Index Mode'])) { page = 1; }
      if ((page != null) && (page !== Index.currentPage)) {
        Index.changed.page = true;
        Index.currentPage = page;
      }
      if (hash != null) {
        return Index.changed.hash = true;
      }
    },

    savePerBoard(key, value) {
      if (typeof Conf[key] === 'object') {
        Conf[key][g.BOARD.ID] = value;
      } else {
        Conf[key] = value;
      }
      return $$1.set(key, Conf[key]);
    },

    saveSort() {
      return Index.savePerBoard('Index Sort', Index.currentSort);
    },

    saveLastLongThresholds(i) {
      return Index.savePerBoard(`Last Long Reply Thresholds ${i}`, Index.lastLongThresholds[i]);
    },

    pageLoad(scroll=true) {
      if (!Index.liveThreadData) { return; }
      let {threads, order, search, mode, sort, page, hash} = Index.changed;
      if (!threads) { threads = search; }
      if (!order) { order = sort; }
      if (threads || order) { Index.sort(); }
      if (threads) { Index.buildPagelist(); }
      if (search) { Index.setupSearch(); }
      if (mode) { Index.setupMode(); }
      if (sort) { Index.setupSort(); }
      if (threads || mode || page || order) { Index.buildIndex(); }
      if (threads || page) { Index.setPage(); }
      if (scroll && !hash) { Index.scrollToIndex(); }
      if (hash) { Header$1.hashScroll(); }
      return Index.changed = {};
    },

    setupMode() {
      for (var mode of ['paged', 'infinite', 'all pages', 'catalog']) {
        $$1[mode === Conf['Index Mode'] ? 'addClass' : 'rmClass'](doc$1, `${mode.replace(/\ /g, '-')}-mode`);
      }
      Index.selectMode.value = Conf['Index Mode'];
      Index.cb.size();
      Index.showHiddenThreads = false;
      return $$1('#hidden-toggle a', Index.navLinks).textContent = 'Show';
    },

    setupSort() {
      Index.selectRev.checked = /-rev$/.test(Index.currentSort);
      Index.selectSort.value  = Index.currentSort.replace(/-rev$/, '');
      return Index.lastLongOptions.hidden = (Index.selectSort.value !== 'lastlong');
    },

    getPagesNum() {
      if (Index.search) {
        return Math.ceil(Index.sortedThreadIDs.length / Index.threadsNumPerPage);
      } else {
        return Index.pagesNum;
      }
    },

    getMaxPageNum() {
      return Math.max(1, Index.getPagesNum());
    },

    buildPagelist() {
      const pagesRoot = $$1('.pages', Index.pagelist);
      const maxPageNum = Index.getMaxPageNum();
      if (pagesRoot.childElementCount !== maxPageNum) {
        const nodes = [];
        for (let i = 1, end = maxPageNum; i <= end; i++) {
          var a = $$1.el('a', {
            textContent: i,
            href: i === 1 ? './' : i
          }
          );
          nodes.push($$1.tn('['), a, $$1.tn('] '));
        }
        $$1.rmAll(pagesRoot);
        return $$1.add(pagesRoot, nodes);
      }
    },

    setPage() {
      let a, strong;
      const pageNum    = Index.currentPage;
      const maxPageNum = Index.getMaxPageNum();
      const pagesRoot  = $$1('.pages', Index.pagelist);

      // Previous/Next buttons
      const prev = pagesRoot.previousElementSibling.firstElementChild;
      const next = pagesRoot.nextElementSibling.firstElementChild;
      let href = Math.max(pageNum - 1, 1);
      prev.href = href === 1 ? './' : href;
      prev.firstElementChild.disabled = href === pageNum;
      href = Math.min(pageNum + 1, maxPageNum);
      next.href = href === 1 ? './' : href;
      next.firstElementChild.disabled = href === pageNum;

      // <strong> current page
      if (strong = $$1('strong', pagesRoot)) {
        if (+strong.textContent === pageNum) { return; }
        $$1.replace(strong, strong.firstChild);
      } else {
        strong = $$1.el('strong');
      }

      if (a = pagesRoot.children[pageNum - 1]) {
        $$1.before(a, strong);
        return $$1.add(strong, a);
      }
    },

    updateHideLabel() {
      if (!Index.hideLabel) { return; }
      let hiddenCount = 0;
      for (var threadID of Index.liveThreadIDs) {
        if (Index.isHidden(threadID)) {
          hiddenCount++;
        }
      }
      if (!hiddenCount) {
        Index.hideLabel.hidden = true;
        if (Index.showHiddenThreads) { Index.cb.toggleHiddenThreads(); }
        return;
      }
      Index.hideLabel.hidden = false;
      return $$1('#hidden-count', Index.navLinks).textContent = hiddenCount === 1 ?
        '1 hidden thread'
      :
        `${hiddenCount} hidden threads`;
    },

    update(firstTime) {
      let oldReq;
      if (oldReq = Index.req) {
        delete Index.req;
        oldReq.abort();
      }

      if (Conf['Index Refresh Notifications']) {
        // Optional notification for manual refreshes
        if (!Index.notice) { Index.notice = new Notice('info', 'Refreshing index...'); }
        if (!Index.nTimeout) { Index.nTimeout = setTimeout(() => {
            if (Index.notice) {
              Index.notice.el.lastElementChild.textContent += ' (disable JSON Index if this takes too long)';
            }
          }
          , 3 * SECOND); }
      } else {
        // Also display notice if Index Refresh is taking too long
        if (!Index.nTimeout) { Index.nTimeout = setTimeout(() => Index.notice || (Index.notice = new Notice('info', 'Refreshing index... (disable JSON Index if this takes too long)'))
        , 3 * SECOND); }
      }

      // Hard refresh in case of incomplete page load.
      if (!firstTime && (d$1.readyState !== 'loading') && !$$1('.board + *')) {
        location.reload();
        return;
      }

      Index.req = $$1.whenModified(
        g.SITE.urls.catalogJSON({boardID: g.BOARD.ID}),
        'Index',
        Index.load
      );
      return $$1.addClass(Index.button, 'spin');
    },

    load() {
      let err;
      if (this !== Index.req) { return; } // aborted

      $$1.rmClass(Index.button, 'spin');
      const {notice, nTimeout} = Index;
      if (nTimeout) { clearTimeout(nTimeout); }
      delete Index.nTimeout;
      delete Index.req;
      delete Index.notice;

      if (![200, 304].includes(this.status)) {
        err = `Index refresh failed. ${this.status ? `Error ${this.statusText} (${this.status})` : 'Connection Error'}`;
        if (notice) {
          notice.setType('warning');
          notice.el.lastElementChild.textContent = err;
          setTimeout(notice.close, SECOND);
        } else {
          new Notice('warning', err, 1);
        }
        return;
      }

      try {
        if (this.status === 200) {
          Index.parse(this.response);
        } else if (this.status === 304) {
          Index.pageLoad();
        }
      } catch (error) {
        err = error;
        c.error(`Index failure: ${err.message}`, err.stack);
        if (notice) {
          notice.setType('error');
          notice.el.lastElementChild.textContent = 'Index refresh failed.';
          setTimeout(notice.close, SECOND);
        } else {
          new Notice('error', 'Index refresh failed.', 1);
        }
        return;
      }

      if (notice) {
        if (Conf['Index Refresh Notifications']) {
          notice.setType('success');
          notice.el.lastElementChild.textContent = 'Index refreshed!';
          setTimeout(notice.close, SECOND);
        } else {
          notice.close();
        }
      }

      const timeEl = $$1('#index-last-refresh time', Index.navLinks);
      timeEl.dataset.utc = Date.parse(this.getResponseHeader('Last-Modified'));
      return RelativeDates.update(timeEl);
    },

    parse(pages) {
      $$1.cleanCache(url => /^https?:\/\/a\.4cdn\.org\//.test(url));
      Index.parseThreadList(pages);
      Index.changed.threads = true;
      return Index.pageLoad();
    },

    parseThreadList(pages) {
      Index.pagesNum          = pages.length;
      Index.threadsNumPerPage = pages[0]?.threads.length || 1;
      Index.liveThreadData    = pages.reduce(((arr, next) => arr.concat(next.threads)), []);
      Index.liveThreadIDs     = Index.liveThreadData.map(data => data.no);
      Index.liveThreadDict    = dict();
      Index.threadPosition    = dict();
      Index.parsedThreads     = dict();
      Index.replyData         = dict();
      for (let i = 0; i < Index.liveThreadData.length; i++) {
        var obj, results;
        var data = Index.liveThreadData[i];
        Index.liveThreadDict[data.no] = data;
        Index.threadPosition[data.no] = i;
        Index.parsedThreads[data.no] = (obj = g.SITE.Build.parseJSON(data, g.BOARD));
        obj.filterResults = (results = Filter.test(obj));
        obj.isOnTop  = results.top;
        obj.isHidden = results.hide || ThreadHiding.isHidden(obj.boardID, obj.threadID);
        if (data.last_replies) {
          for (var reply of data.last_replies) {
            Index.replyData[`${g.BOARD}.${reply.no}`] = reply;
          }
        }
      }
      if (Index.liveThreadData[0]) {
        g.SITE.Build.spoilerRange[g.BOARD.ID] = Index.liveThreadData[0].custom_spoiler;
      }
      g.BOARD.threads.forEach(function(thread) {
        if (!Index.liveThreadIDs.includes(thread.ID)) { return thread.collect(); }
      });
      $$1.event('IndexUpdate',
        {threads: ((Index.liveThreadIDs.map((ID) => `${g.BOARD}.${ID}`)))});
    },

    isHidden(threadID) {
      let thread;
      if ((thread = g.BOARD.threads.get(threadID)) && thread.OP && !thread.OP.isFetchedQuote) {
        return thread.isHidden;
      } else {
        return Index.parsedThreads[threadID].isHidden;
      }
    },

    isHiddenReply(threadID, replyData) {
      return PostHiding.isHidden(g.BOARD.ID, threadID, replyData.no) || Filter.isHidden(g.SITE.Build.parseJSON(replyData, g.BOARD));
    },

    buildThreads(threadIDs, isCatalog, withReplies) {
      let errors;
      const threads    = [];
      const newThreads = [];
      let newPosts   = [];
      for (var ID of threadIDs) {
        var opRoot, thread;
        try {
          var OP;
          var threadData = Index.liveThreadDict[ID];

          if (thread = g.BOARD.threads.get(ID)) {
            var isStale = (thread.json !== threadData) && (JSON.stringify(thread.json) !== JSON.stringify(threadData));
            if (isStale) {
              thread.setCount('post', threadData.replies + 1,                threadData.bumplimit);
              thread.setCount('file', threadData.images  + !!threadData.ext, threadData.imagelimit);
              thread.setStatus('Sticky', !!threadData.sticky);
              thread.setStatus('Closed', !!threadData.closed);
            }
            if (thread.catalogView) {
              $$1.rm(thread.catalogView.nodes.replies);
              thread.catalogView.nodes.replies = null;
            }
          } else {
            thread = new Thread(ID, g.BOARD);
            newThreads.push(thread);
          }
          var lastPost = threadData.last_replies && threadData.last_replies.length ? threadData.last_replies[threadData.last_replies.length - 1].no : ID;
          if (lastPost > thread.lastPost) { thread.lastPost = lastPost; }
          thread.json = threadData;
          threads.push(thread);

          if ((OP = thread.OP) && !OP.isFetchedQuote) {
            OP.setCatalogOP(isCatalog);
            thread.setPage(Math.floor(Index.threadPosition[ID] / Index.threadsNumPerPage) + 1);
          } else {
            var obj = Index.parsedThreads[ID];
            opRoot = g.SITE.Build.post(obj);
            OP = new Post(opRoot, thread, g.BOARD);
            OP.filterResults = obj.filterResults;
            newPosts.push(OP);
          }

          if (!isCatalog || !thread.nodes.root) {
            g.SITE.Build.thread(thread, threadData, withReplies);
          }
        } catch (err) {
          // Skip posts that we failed to parse.
          if (!errors) { errors = []; }
          errors.push({
            message: `Parsing of Thread No.${thread} failed. Thread will be skipped.`,
            error: err,
            html: opRoot?.outerHTML
          });
        }
      }
      if (errors) { Main$1.handleErrors(errors); }

      if (withReplies) {
        newPosts = newPosts.concat(Index.buildReplies(threads));
      }

      Main$1.callbackNodes('Thread', newThreads);
      Main$1.callbackNodes('Post',   newPosts);
      Index.updateHideLabel();
      $$1.event('IndexRefreshInternal', {threadIDs: (threads.map((t) => t.fullID)), isCatalog});

      return threads;
    },

    buildReplies(threads) {
      let errors;
      const posts = [];
      for (var thread of threads) {
        var lastReplies;
        if (!(lastReplies = Index.liveThreadDict[thread.ID].last_replies)) { continue; }
        var nodes = [];
        for (var data of lastReplies) {
          var node, post;
          if ((post = thread.posts.get(data.no)) && !post.isFetchedQuote) {
            nodes.push(post.nodes.root);
            continue;
          }
          nodes.push(node = g.SITE.Build.postFromObject(data, thread.board.ID));
          try {
            posts.push(new Post(node, thread, thread.board));
          } catch (err) {
            // Skip posts that we failed to parse.
            if (!errors) { errors = []; }
            errors.push({
              message: `Parsing of Post No.${data.no} failed. Post will be skipped.`,
              error: err,
              html: node?.outerHTML
            });
          }
        }
        $$1.add(thread.nodes.root, nodes);
      }

      if (errors) { Main$1.handleErrors(errors); }
      return posts;
    },

    buildCatalogViews(threads) {
      const catalogThreads = [];
      for (var thread of threads) {
        if (!thread.catalogView) {
          var {ID} = thread;
          var page = Math.floor(Index.threadPosition[ID] / Index.threadsNumPerPage) + 1;
          var root = g.SITE.Build.catalogThread(thread, Index.liveThreadDict[ID], page);
          catalogThreads.push(new CatalogThread(root, thread));
        }
      }
      Main$1.callbackNodes('CatalogThread', catalogThreads);
    },

    sizeCatalogViews(threads) {
      // XXX When browsers support CSS3 attr(), use it instead.
      const size = Conf['Index Size'] === 'small' ? 150 : 250;
      for (var thread of threads) {
        var {thumb} = thread.catalogView.nodes;
        var {width, height} = thumb.dataset;
        if (!width) { continue; }
        var ratio = size / Math.max(width, height);
        thumb.style.width  = (width  * ratio) + 'px';
        thumb.style.height = (height * ratio) + 'px';
      }
    },

    buildCatalogReplies(thread) {
      let lastReplies;
      const {nodes} = thread.catalogView;
      if (!(lastReplies = Index.liveThreadDict[thread.ID].last_replies)) { return; }

      const replies = [];
      for (var data of lastReplies) {
        if (Index.isHiddenReply(thread.ID, data)) { continue; }
        var reply = g.SITE.Build.catalogReply(thread, data);
        RelativeDates.update($$1('time', reply));
        $$1.on($$1('.catalog-reply-preview', reply), 'mouseover', QuotePreview.mouseover);
        replies.push(reply);
      }

      nodes.replies = $$1.el('div', {className: 'catalog-replies'});
      $$1.add(nodes.replies, replies);
      $$1.add(thread.OP.nodes.post, nodes.replies);
    },

    sort() {
      let threadIDs;
      const {liveThreadIDs, liveThreadData} = Index;
      if (!liveThreadData) { return; }
      const tmp_time = new Date().getTime()/1000;
      const sortType = Index.currentSort.replace(/-rev$/, '');
      Index.sortedThreadIDs = (() => { switch (sortType) {
        case 'lastreply': case 'lastlong':
          var repliesAvailable = liveThreadData.some(thread => thread.last_replies?.length);
          var lastlong = function(thread) {
            if (!repliesAvailable) {
              return thread.last_modified;
            }
            const iterable = thread.last_replies || [];
            for (let i = iterable.length - 1; i >= 0; i--) {
              var r = iterable[i];
              if (Index.isHiddenReply(thread.no, r)) { continue; }
              if (sortType === 'lastreply') {
                return r;
              }
              var len = r.com ? g.SITE.Build.parseComment(r.com).replace(/[^a-z]/ig, '').length : 0;
              if (len >= Index.lastLongThresholds[+!!r.ext]) {
                return r;
              }
            }
            if (thread.omitted_posts && thread.last_replies?.length) { return thread.last_replies[0]; } else { return thread; }
          };
          var lastlongD = dict();
          for (var thread of liveThreadData) {
            lastlongD[thread.no] = lastlong(thread).no;
          }
          return [...liveThreadData].sort((a, b) => lastlongD[b.no] - lastlongD[a.no]).map(post => post.no);
        case 'bump':       return liveThreadIDs;
        case 'birth':      return [...liveThreadIDs ].sort((a, b) => b - a);
        case 'replycount': return [...liveThreadData].sort((a, b) => b.replies - a.replies).map(post => post.no);
        case 'filecount':  return [...liveThreadData].sort((a, b) => b.images  - a.images).map(post => post.no);
        case 'activity':   return [...liveThreadData].sort((a, b) => ((tmp_time-a.time)/(a.replies+1)) - ((tmp_time-b.time)/(b.replies+1))).map(post => post.no);
        default: return liveThreadIDs;
      } })();
      if (/-rev$/.test(Index.currentSort)) {
        Index.sortedThreadIDs.reverse();
      }
      if (Index.search && (threadIDs = Index.querySearch(Index.search))) {
        Index.sortedThreadIDs = threadIDs;
      }
      // Sticky threads
      Index.sortOnTop(obj => obj.isSticky);
      // Highlighted threads
      Index.sortOnTop(obj => obj.isOnTop || (Conf['Pin Watched Threads'] && ThreadWatcher$1.isWatchedRaw(obj.boardID, obj.threadID)));
      // Non-hidden threads
      if (Conf['Anchor Hidden Threads']) { return Index.sortOnTop(obj => !Index.isHidden(obj.threadID)); }
    },

    sortOnTop(match) {
      const topThreads    = [];
      const bottomThreads = [];
      for (var ID of Index.sortedThreadIDs) {
        (match(Index.parsedThreads[ID]) ? topThreads : bottomThreads).push(ID);
      }
      return Index.sortedThreadIDs = topThreads.concat(bottomThreads);
    },

    buildIndex() {
      let threadIDs;
      if (!Index.liveThreadData) { return; }
      switch (Conf['Index Mode']) {
        case 'all pages':
          threadIDs = Index.sortedThreadIDs;
          break;
        case 'catalog':
          threadIDs = Index.sortedThreadIDs.filter(ID => !Index.isHidden(ID) !== Index.showHiddenThreads);
          break;
        default:
          threadIDs = Index.threadsOnPage(Index.currentPage);
      }
      delete Index.pageNum;
      $$1.rmAll(Index.root);
      $$1.rmAll(Header$1.hover);
      if (Index.loaded && Index.root.parentNode) {
        $$1.event('PostsRemoved', null, Index.root);
      }
      if (Conf['Index Mode'] === 'catalog') {
        Index.buildCatalog(threadIDs);
      } else {
        Index.buildStructure(threadIDs);
      }
    },

    threadsOnPage(pageNum) {
      const nodesPerPage = Index.threadsNumPerPage;
      const offset = nodesPerPage * (pageNum - 1);
      return Index.sortedThreadIDs.slice(offset ,  offset + nodesPerPage);
    },

    buildStructure(threadIDs) {
      const threads = Index.buildThreads(threadIDs, false, Conf['Show Replies']);
      const nodes = [];
      for (var thread of threads) {
        nodes.push(thread.nodes.root, $$1.el('hr'));
      }
      $$1.add(Index.root, nodes);
      if (Index.root.parentNode) {
        $$1.event('PostsInserted', null, Index.root);
      }
      Index.loaded = true;
    },

    buildCatalog(threadIDs) {
      let i = 0;
      const n = threadIDs.length;
      let node0 = null;
      var fn = function() {
        if (node0 && !node0.parentNode) { return; } // Index.root cleared
        const j = (i > 0) && Index.root.parentNode ? n : i + 30;
        node0 = Index.buildCatalogPart(threadIDs.slice(i, j))[0];
        i = j;
        if (i < n) {
          return $$1.queueTask(fn);
        } else {
          if (Index.root.parentNode) {
            $$1.event('PostsInserted', null, Index.root);
          }
          return Index.loaded = true;
        }
      };
      fn();
    },

    buildCatalogPart(threadIDs) {
      const threads = Index.buildThreads(threadIDs, true);
      Index.buildCatalogViews(threads);
      Index.sizeCatalogViews(threads);
      const nodes = [];
      for (var thread of threads) {
        thread.OP.setCatalogOP(true);
        $$1.add(thread.catalogView.nodes.root, thread.OP.nodes.root);
        nodes.push(thread.catalogView.nodes.root);
        $$1.on(thread.catalogView.nodes.root, 'mouseenter', Index.cb.catalogReplies.bind(thread));
        $$1.on(thread.OP.nodes.root, 'mouseenter', Index.cb.hoverAdjust.bind(thread.OP.nodes));
      }
      $$1.add(Index.root, nodes);
      return nodes;
    },

    clearSearch() {
      Index.searchInput.value = '';
      Index.onSearchInput();
      return Index.searchInput.focus();
    },

    setupSearch() {
      Index.searchInput.value = Index.search;
      if (Index.search) {
        return Index.searchInput.dataset.searching = 1;
      } else {
        // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1021289
        return Index.searchInput.removeAttribute('data-searching');
      }
    },

    onSearchInput() {
      const search = Index.searchInput.value.trim();
      if (search === Index.search) { return; }
      Index.pushState({
        search,
        replace: !!search === !!Index.search
      });
      return Index.pageLoad(false);
    },

    querySearch(query) {
      let keywords, match;
      if (match = query.match(/^([\w+]+):\/(.*)\/(\w*)$/)) {
        let regexp;
        try {
          regexp = RegExp(match[2], match[3]);
        } catch (error) {
          return [];
        }
        return Index.sortedThreadIDs.filter(ID => regexp.test(Filter.values(match[1], Index.parsedThreads[ID]).join('\n')));
      }
      if (!(keywords = query.toLowerCase().match(/\S+/g))) { return; }
      return Index.sortedThreadIDs.filter(ID => Index.searchMatch(Index.parsedThreads[ID], keywords));
    },

    searchMatch(obj, keywords) {
      const {info, file} = obj;
      if (info.comment == null) { info.comment = g.SITE.Build.parseComment(info.commentHTML.innerHTML); }
      let text = [];
      for (var key of ['comment', 'subject', 'name', 'tripcode']) {
        if (key in info) { text.push(info[key]); }
      }
      if (file) { text.push(file.name); }
      text = text.join(' ').toLowerCase();
      for (var keyword of keywords) {
        if (-1 === text.indexOf(keyword)) { return false; }
      }
      return true;
    }
  };
  var Index$1 = Index;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ThreadHiding = {
    init() {
      if (!['index', 'catalog'].includes(g.VIEW) || (!Conf['Thread Hiding Buttons'] && !(Conf['Menu'] && Conf['Thread Hiding Link']) && !Conf['JSON Index'])) { return; }
      this.db = new DataBoard('hiddenThreads');
      if (g.VIEW === 'catalog') { return this.catalogWatch(); }
      this.catalogSet(g.BOARD);
      $$1.on(d$1, 'IndexRefreshInternal', this.onIndexRefresh);
      if (Conf['Thread Hiding Buttons']) {
        $$1.addClass(doc$1, 'thread-hide');
      }
      return Callbacks.Post.push({
        name: 'Thread Hiding',
        cb:   this.node
      });
    },

    catalogSet(board) {
      if (!$$1.hasStorage || (g.SITE.software !== 'yotsuba')) { return; }
      const hiddenThreads = ThreadHiding.db.get({
        boardID: board.ID,
        defaultValue: dict()
      });
      for (var threadID in hiddenThreads) { hiddenThreads[threadID] = true; }
      return localStorage.setItem(`4chan-hide-t-${board}`, JSON.stringify(hiddenThreads));
    },

    catalogWatch() {
      if (!$$1.hasStorage || (g.SITE.software !== 'yotsuba')) { return; }
      this.hiddenThreads = JSON.parse(localStorage.getItem(`4chan-hide-t-${g.BOARD}`)) || {};
      return Main$1.ready(() => // 4chan's catalog sets the style to "display: none;" when hiding or unhiding a thread.
      new MutationObserver(ThreadHiding.catalogSave).observe($$1.id('threads'), {
        attributes: true,
        subtree: true,
        attributeFilter: ['style']
      }));
    },

    catalogSave() {
      let threadID;
      const hiddenThreads2 = JSON.parse(localStorage.getItem(`4chan-hide-t-${g.BOARD}`)) || {};
      for (threadID in hiddenThreads2) {
        if (!$$1.hasOwn(ThreadHiding.hiddenThreads, threadID)) {
          ThreadHiding.db.set({
            boardID:  g.BOARD.ID,
            threadID,
            val:      {makeStub: Conf['Stubs']}});
        }
      }
      for (threadID in ThreadHiding.hiddenThreads) {
        if (!$$1.hasOwn(hiddenThreads2, threadID)) {
          ThreadHiding.db.delete({
            boardID:  g.BOARD.ID,
            threadID
          });
        }
      }
      return ThreadHiding.hiddenThreads = hiddenThreads2;
    },

    isHidden(boardID, threadID) {
      return !!(ThreadHiding.db && ThreadHiding.db.get({boardID, threadID}));
    },

    node() {
      let data;
      if (this.isReply || this.isClone || this.isFetchedQuote) { return; }

      if (Conf['Thread Hiding Buttons']) {
        $$1.prepend(this.nodes.root, ThreadHiding.makeButton(this.thread, 'hide'));
      }

      if (data = ThreadHiding.db.get({boardID: this.board.ID, threadID: this.ID})) {
        return ThreadHiding.hide(this.thread, data.makeStub);
      }
    },

    onIndexRefresh() {
      return g.BOARD.threads.forEach(function(thread) {
        const {root} = thread.nodes;
        if (thread.isHidden && thread.stub && !root.contains(thread.stub)) {
          return ThreadHiding.makeStub(thread, root);
        }
      });
    },

    menu: {
      init() {
        if ((g.VIEW !== 'index') || !Conf['Menu'] || !Conf['Thread Hiding Link']) { return; }

        let div = $$1.el('div', {
          className: 'hide-thread-link',
          textContent: 'Hide'
        }
        );

        const apply = $$1.el('a', {
          textContent: 'Apply',
          href: 'javascript:;'
        }
        );
        $$1.on(apply, 'click', ThreadHiding.menu.hide);

        const makeStub = UI.checkbox('Stubs', 'Make stub');

        Menu.menu.addEntry({
          el: div,
          order: 20,
          open({thread, isReply}) {
            if (isReply || thread.isHidden || (Conf['JSON Index'] && (Conf['Index Mode'] === 'catalog'))) {
              return false;
            }
            ThreadHiding.menu.thread = thread;
            return true;
          },
          subEntries: [{el: apply}, {el: makeStub}]});

        div = $$1.el('a', {
          className: 'show-thread-link',
          textContent: 'Show',
          href: 'javascript:;'
        }
        );
        $$1.on(div, 'click', ThreadHiding.menu.show);

        Menu.menu.addEntry({
          el: div,
          order: 20,
          open({thread, isReply}) {
            if (isReply || !thread.isHidden || (Conf['JSON Index'] && (Conf['Index Mode'] === 'catalog'))) {
              return false;
            }
            ThreadHiding.menu.thread = thread;
            return true;
          }
        });

        const hideStubLink = $$1.el('a', {
          textContent: 'Hide stub',
          href: 'javascript:;'
        }
        );
        $$1.on(hideStubLink, 'click', ThreadHiding.menu.hideStub);

        return Menu.menu.addEntry({
          el: hideStubLink,
          order: 15,
          open({thread, isReply}) {
            if (isReply || !thread.isHidden || (Conf['JSON Index'] && (Conf['Index Mode'] === 'catalog'))) {
              return false;
            }
            return ThreadHiding.menu.thread = thread;
          }
        });
      },

      hide() {
        const makeStub = $$1('input', this.parentNode).checked;
        const {thread} = ThreadHiding.menu;
        ThreadHiding.hide(thread, makeStub);
        ThreadHiding.saveHiddenState(thread, makeStub);
        return $$1.event('CloseMenu');
      },

      show() {
        const {thread} = ThreadHiding.menu;
        ThreadHiding.show(thread);
        ThreadHiding.saveHiddenState(thread);
        return $$1.event('CloseMenu');
      },

      hideStub() {
        const {thread} = ThreadHiding.menu;
        ThreadHiding.show(thread);
        ThreadHiding.hide(thread, false);
        ThreadHiding.saveHiddenState(thread, false);
        $$1.event('CloseMenu');
      }
    },

    makeButton(thread, type) {
      const a = $$1.el('a', {
        className: `${type}-thread-button`,
        href:      'javascript:;'
      }
      );
      $$1.extend(a, {textContent: type === "hide" ? '➖︎' : '➕︎' });
      a.dataset.fullID = thread.fullID;
      $$1.on(a, 'click', ThreadHiding.toggle);
      return a;
    },

    makeStub(thread, root) {
      let summary, threadDivider;
      let numReplies  = $$(g.SITE.selectors.replyOriginal, root).length;
      if (summary = $$1(g.SITE.selectors.summary, root)) { numReplies += +summary.textContent.match(/\d+/); }

      const a = ThreadHiding.makeButton(thread, 'show');
      $$1.add(a, $$1.tn(` ${thread.OP.info.nameBlock} (${numReplies === 1 ? '1 reply' : `${numReplies} replies`})`));
      thread.stub = $$1.el('div',
        {className: 'stub'});
      if (Conf['Menu']) {
        $$1.add(thread.stub, [a, Menu.makeButton(thread.OP)]);
      } else {
        $$1.add(thread.stub, a);
      }
      $$1.prepend(root, thread.stub);

      // Prevent hiding of thread divider on sites that put it inside the thread
      if (threadDivider = $$1(g.SITE.selectors.threadDivider, root)) {
        return $$1.addClass(threadDivider, 'threadDivider');
      }
    },

    saveHiddenState(thread, makeStub) {
      if (thread.isHidden) {
        ThreadHiding.db.set({
          boardID:  thread.board.ID,
          threadID: thread.ID,
          val: {makeStub}});
      } else {
        ThreadHiding.db.delete({
          boardID:  thread.board.ID,
          threadID: thread.ID
        });
      }
      return ThreadHiding.catalogSet(thread.board);
    },

    toggle(thread) {
      if (!(thread instanceof Thread)) {
        thread = g.threads.get(this.dataset.fullID);
      }
      if (thread.isHidden) {
        ThreadHiding.show(thread);
      } else {
        ThreadHiding.hide(thread);
      }
      return ThreadHiding.saveHiddenState(thread);
    },

    hide(thread, makeStub=Conf['Stubs']) {
      if (thread.isHidden) { return; }
      const threadRoot = thread.nodes.root;
      thread.isHidden = true;
      Index$1.updateHideLabel();
      if (thread.catalogView && !Index$1.showHiddenThreads) {
        $$1.rm(thread.catalogView.nodes.root);
        $$1.event('PostsRemoved', null, Index$1.root);
      }

      if (!makeStub) { return threadRoot.hidden = true; }

      return ThreadHiding.makeStub(thread, threadRoot);
    },

    show(thread) {
      if (thread.stub) {
        $$1.rm(thread.stub);
        delete thread.stub;
      }
      const threadRoot = thread.nodes.root;
      threadRoot.hidden = (thread.isHidden = false);
      Index$1.updateHideLabel();
      if (thread.catalogView && Index$1.showHiddenThreads) {
        $$1.rm(thread.catalogView.nodes.root);
        return $$1.event('PostsRemoved', null, Index$1.root);
      }
    }
  };

  // \u00A0 is non breaking space
  const separator = '\u00A0|\u00A0';
  const settingsHtml = h("div", { id: "fourchanx-settings", class: "dialog" },
      h("nav", null,
          h("div", { class: "sections-list" }),
          h("p", { class: "imp-exp-result warning" }),
          h("div", { class: "credits" },
              h("a", { class: "export" }, "Export"),
              separator,
              h("a", { class: "import" }, "Import"),
              separator,
              h("a", { class: "reset" }, "Reset Settings"),
              separator,
              h("input", { type: "file", hidden: true }),
              h("a", { href: meta.page, target: "_blank" }, meta.name),
              separator,
              h("a", { href: meta.changelog, target: "_blank" }, g.VERSION),
              separator,
              h("a", { href: meta.issues, target: "_blank" }, "Issues"),
              separator,
              h("a", { href: "javascript:;", class: "close", title: "Close" }, "\u2715"))),
      h("div", { class: "section-container" },
          h("section", null)));

  var FilterGuidePage = `<div class="warning"><code>Filter</code> is disabled.</div>
<p>
  Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expressions</a>, one per line.<br>
  Lines starting with a <code>#</code> will be ignored.<br>
  For example, <code>/weeaboo/i</code> will filter posts containing the string \`<code>weeaboo</code>\`, case-insensitive.<br>
  MD5 and Unique ID filtering use exact string matching, not regular expressions.
</p>
<ul>You can use these settings with each regular expression, separate them with semicolons:
  <li>
    Per boards, separate them with commas. It is global if not specified. Use <code>sfw</code> and <code>nsfw</code> to reference all worksafe or not-worksafe boards.<br>
    For example: <code>boards:a,jp;</code>.<br>
    To specify boards on a particular site, put the beginning of the domain and a slash character before the list.<br>
    Any initial <code>www.</code> should not be included, and all 4chan domains are considered <code>4chan.org</code>.<br>
    For example: <code>boards:4:a,jp,sama:a,z;</code>.<br>
    An asterisk can be used to specify all boards on a site.<br>
    For example: <code>boards:4:*;</code>.<br>
  </li>
  <li>
    Select boards to be excluded from the filter. The syntax is the same as for the <code>boards:</code> option above.<br>
    For example: <code>exclude:vg,v;</code>.
  </li>
  <li>
    Filter OPs only along with their threads (\`only\`) or replies only (\`no\`).<br>
    For example: <code>op:only;</code> or <code>op:no;</code>.
  </li>
  <li>
    Filter only posts with files (\`only\`) or only posts without files (\`no\`).<br>
    For example: <code>file:only;</code> or <code>file:no;</code>.
  </li>
  <li>
    Overrule the \`Show Stubs\` setting if specified: create a stub (\`yes\`) or not (\`no\`).<br>
    For example: <code>stub:yes;</code> or <code>stub:no;</code>.
  </li>
  <li>
    Highlight instead of hiding. You can specify a class name to use with a userstyle.<br>
    For example: <code>highlight;</code> or <code>highlight:wallpaper;</code>.
  </li>
  <li>
    Highlighted OPs will have their threads put on top of the board index by default.<br>
    For example: <code>top:yes;</code> or <code>top:no;</code>.
  </li>
  <li>
    Show a desktop notification instead of hiding.<br>
    For example: <code>notify;</code>.
  </li>
  <li>
    Filters in the "General" section apply to multiple fields, by default <code>subject,name,filename,comment</code>.<br>
    The fields can be specified with the <code>type</code> option, separated by commas.<br>
    For example: <code>type:@{filterTypes};</code>.<br>
    Types can also be combined with a <code>+</code> sign; this indicates the filter applies to the given fields joined by newlines.<br>
    For example: <code>type:filename+filesize+dimensions;</code>.<br>
  </li>
</ul>
`;

  var SaucePage = `<div class="warning"><code>Sauce</code> is disabled.</div>
<input id="sauce-doc-expand" type="checkbox" hidden>
<div id="sauce-doc">
  <label for="sauce-doc-expand">[expand]</label>
  <div>These parameters will be replaced by their corresponding values in the URL and displayed text:</div>
  <ul>
    <li><code>%IMG</code>: Full image URL for GIF, JPG, and PNG; thumbnail URL for other types.</li>
    <li><code>%URL</code>: Full image URL.</li>
    <li><code>%TURL</code>: Thumbnail URL.</li>
    <li><code>%name</code>: Original file name.</li>
    <li><code>%board</code>: Current board.</li>
    <li><code>%MD5</code>: MD5 hash in base64.</li>
    <li><code>%sMD5</code>: MD5 hash in base64 using <code>-</code> and <code>_</code>.</li>
    <li><code>%hMD5</code>: MD5 hash in hexadecimal.</li>
    <li><code>%$0</code>: Matched regular expression within the filename.</li>
    <li><code>%$1</code>, <code>%$2</code>, <code>%$3</code>, ... : Subexpressions within the matched regular expression.</li>
    <li><code>%%</code>, <code>%semi</code>: Literal <code>%</code> and <code>;</code>.</li>
  </ul>
  <div>Lines starting with a <code>#</code> will be ignored.</div>
  <div>You can specify a display text by appending <code>;text:[text]</code> to the URL.</div>
  <div>You can specify the applicable boards/sites by appending <code>;boards:[board1],[board2]</code>. See the Filter guide for details.</div>
  <div>You can specify the applicable file types by appending <code>;types:[extension1],[extension2]</code>.</div>
  <div>You can specify a regular expression the filename must match by appending <code>;regexp:[regular expression]</code>.</div>
</div>
<textarea hidden name="sauces" class="field" spellcheck="false"></textarea>
`;

  var AdvancedPage = `<fieldset>
  <legend>Archives</legend>
  <div class="warning" data-feature="404 Redirect"><code>404 Redirect</code> is disabled.</div>
  <select id="archive-board-select"></select>
  <table id="archive-table">
    <thead>
      <th>Thread redirection</th>
      <th>Post fetching</th>
      <th>File redirection</th>
    </thead>
    <tbody></tbody>
  </table>
  <br>
  <div>
    <b>Archive Lists</b>: Each line below should be an archive list in <a href="https://github.com/MayhemYDG/archives.json/blob/gh-pages/CONTRIBUTING.md" target="_blank">this format</a> or a URL to load an archive list from.<br>
    Archive properties can be overriden by another item with the same <code>uid</code> (or if absent, its <code>name</code>).
  </div>
  <textarea hidden name="archiveLists" class="field" spellcheck="false"></textarea>
  <button id="update-archives">Update now</button> Last updated: <time id="lastarchivecheck"></time> <label><input type="checkbox" name="archiveAutoUpdate"> Auto-update</label>
</fieldset>

<fieldset>
  <legend>External Catalog</legend>
  <div class="warning" data-feature="External Catalog"><code>External Catalog</code> is disabled. This will be used only as a fallback.</div>
  <div>
    URLs of external catalog sites, where <code>%board</code> is to be replaced by the board name.<br>
    Each URL should be followed by <code>;boards:</code> and optionally <code>;exclude:</code> and a list of supported/excluded boards in the format explained in the Filter guide.
  </div>
  <textarea hidden name="externalCatalogURLs" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Override 4chan Image Host</legend>
  <div>Change 4chan image links to this domain. Leave blank for no change.</div>
  <div><input name="fourchanImageHost" class="field" spellcheck="false" list="list-fourchanImageHost"></div>
  <datalist id="list-fourchanImageHost"></datalist>
</fieldset>

<fieldset>
  <legend>Captcha Language</legend>
  <div>Choose from <a href="https://developers.google.com/recaptcha/docs/language" target="_blank">list of language codes</a>. Leave blank to autoselect.</div>
  <div><input name="captchaLanguage" class="field" spellcheck="false"></div>
</fieldset>

<fieldset>
  <legend>Custom Board Navigation</legend>
  <div><textarea hidden name="boardnav" class="field" spellcheck="false"></textarea></div>
  <span class="note">New lines will be converted into spaces.</span><br><br>
  <div class="note">In the following examples for /g/, <code>g</code> can be changed to a different board ID (<code>a</code>, <code>b</code>, etc...), the current board (<code>current</code>), or the Twitter link (<code>@</code>).</div>
  <div>Board link: <code>g</code></div>
  <div>Archive link: <code>g-archive</code></div>
  <div>Internal archive link: <code>g-expired</code></div>
  <div>Title link: <code>g-title</code></div>
  <div>Board link (Replace with title when on that board): <code>g-replace</code></div>
  <div>Full text link: <code>g-full</code></div>
  <div>Custom text link: <code>g-text:&quot;Install Gentoo&quot;</code></div>
  <div>Index-only link: <code>g-index</code></div>
  <div>Catalog-only link: <code>g-catalog</code></div>
  <div>Index mode: <code>g-mode:&quot;infinite scrolling&quot;</code></div>
  <div>Index sort: <code>g-sort:&quot;creation date rev&quot;</code></div>
  <div>External link: <code>external-text:&quot;Google&quot;,&quot;http://www.google.com&quot;</code></div>
  <div>Open in new tab: <code>g-nt</code></div>
  <div>Combinations are possible: <code>g-index-text:&quot;Technology Index&quot;</code></div>
  <div>Full board list toggle: <code>toggle-all</code></div>
  <br>
  <div class="note">
    <code>[ toggle-all ] [current-title] [g-title / a-title / jp-title] [x / wsg / h] [t-text:&quot;Piracy&quot;]</code><br>
    will give you<br>
    <code>[ + ] [Technology] [Technology / Anime & Manga / Otaku Culture] [x / wsg / h] [Piracy]</code><br>
    if you are on /g/.
  </div>
</fieldset>

<fieldset>
  <legend>Time Formatting <span class="warning" data-feature="Time Formatting">is disabled.</span></legend>
  <div><input name="time" class="field" spellcheck="false">: <span class="time-preview"></span></div>
  <div>Supported <a href="http://man7.org/linux/man-pages/man1/date.1.html" target="_blank">format specifiers</a>:</div>
  <div>Day: <code>%a</code>, <code>%A</code>, <code>%d</code>, <code>%e</code></div>
  <div>Month: <code>%m</code>, <code>%b</code>, <code>%B</code></div>
  <div>Year: <code>%y</code>, <code>%Y</code></div>
  <div>Hour: <code>%k</code>, <code>%H</code>, <code>%l</code>, <code>%I</code>, <code>%p</code>, <code>%P</code></div>
  <div>Minute: <code>%M</code></div>
  <div>Second: <code>%S</code></div>
  <div>Literal <code>%</code>: <code>%%</code></div>
  <div><a href="https://www.w3.org/International/articles/language-tags/" target="_blank">Language tag</a>: <input name="timeLocale" class="field" spellcheck="false"> (needs page reload)</div>
</fieldset>

<fieldset>
  <legend>Quote Backlinks formatting <span class="warning" data-feature="Quote Backlinks">is disabled.</span></legend>
  <div><input name="backlink" class="field" spellcheck="false">: <span class="backlink-preview"></span></div>
</fieldset>

<fieldset>
  <legend>Default pasted content filename</legend>
  <div><input name="pastedname" class="field" spellcheck="false">.png</div>
</fieldset>

<fieldset>
  <legend>File Info Formatting <span class="warning" data-feature="File Info Formatting">is disabled.</span></legend>
  <div><input name="fileInfo" class="field" spellcheck="false">: <span class="file-info file-info-preview"></span></div>
  <div>Link: <code>%l</code> (truncated), <code>%L</code> (untruncated), <code>%T</code> (4chan filename)</div>
  <div>Filename: <code>%n</code> (truncated), <code>%N</code> (untruncated), <code>%t</code> (4chan filename)</div>
  <div>Download button: <code>%d</code></div>
  <div>Quick filter MD5: <code>%f</code></div>
  <div>Spoiler indicator: <code>%p</code></div>
  <div>Size: <code>%B</code> (Bytes), <code>%K</code> (KB), <code>%M</code> (MB), <code>%s</code> (4chan default)</div>
  <div>Resolution: <code>%r</code> (Displays &#039;PDF&#039; for PDF files)</div>
  <div>Tag: <code>%g</code>
  <div>Literal <code>%</code>: <code>%%</code></div>
</fieldset>

<fieldset>
  <legend>Quick Reply Personas</legend>
  <textarea hidden class="personafield field" name="QR.personas" spellcheck="false"></textarea>
  <p>
    One item per line.<br>
    Items will be added in the relevant input&#039;s auto-completion list.<br>
    Password items will always be used, since there is no password input.<br>
    Lines starting with a <code>#</code> will be ignored.
  </p>
  <ul>You can use these settings with each item, separate them with semicolons:
    <li>Possible items are: <code>name</code>, <code>options</code> (or equivalently <code>email</code>), <code>subject</code> and <code>password</code>.</li>
    <li>Wrap values of items with quotes, like this: <code>options:&quot;sage&quot;</code>.</li>
    <li>Force values as defaults with the <code>always</code> keyword, for example: <code>options:&quot;sage&quot;;always</code>.</li>
    <li>Select specific boards for an item, separated with commas, for example: <code>options:&quot;sage&quot;;boards:jp;always</code>.</li>
  </ul>
</fieldset>

<fieldset>
  <legend>Unread Favicon <span class="warning" data-feature="Unread Favicon">is disabled.</span></legend>
  <select name="favicon">
    <option value="ferongr">ferongr</option>
    <option value="xat-">xat-</option>
    <option value="4chanJS">4chanJS</option>
    <option value="Mayhem">Mayhem</option>
    <option value="Original">Original</option>
    <option value="Metro">Metro</option>
  </select>
  <span class="favicon-preview"></span>
</fieldset>

<fieldset>
  <legend>Thread Updater <span class="warning" data-feature="Thread Updater">is disabled.</span></legend>
  <div>
    Interval: <input type="number" name="Interval" class="field" min="1"> seconds
  </div>
</fieldset>

<fieldset>
    <legend>Custom Cooldown Time</legend>
    <div>
        Seconds: <input type="number" name="customCooldown" class="field" min="0">
    </div>
</fieldset>

<fieldset>
  <legend>
    <label><input type="checkbox" name="Custom CSS"> Custom CSS</label>
  </legend>
  <div>For more information about customizing 4chan X&#039;s CSS, see the <a href="https://github.com/ccd0/4chan-x/wiki/Styling-Guide" target="_blank">styling guide</a>.</div>
  <button id="apply-css">Apply CSS</button>
  <textarea hidden name="usercss" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Javascript Whitelist</legend>
  <div>
    Sources from which Javascript is allowed to be loaded by <a href="http://content-security-policy.com/#source_list" target="_blank">Content Security Policy</a>.<br>
    Lines starting with a <code>#</code> will be ignored.
  </div>
  <textarea hidden name="jsWhitelist" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Known Banners</legend>
  <div>List of known banners, used for click-to-change feature.</div>
  <textarea hidden name="knownBanners" class="field" spellcheck="false"></textarea>
</fieldset>
`;

  var KeybindsPage = `<div class="warning"><code>Keybinds</code> are disabled.</div>
<div>Allowed keys: <kbd>a-z</kbd>, <kbd>0-9</kbd>, <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>, <kbd>Up</kbd>, <kbd>Down</kbd>, <kbd>Right</kbd>, <kbd>Left</kbd>.</div>
<div>Press <kbd>Backspace</kbd> to disable a keybind.</div>
<table><tbody>
  <tr><th>Actions</th><th>Keybinds</th></tr>
</tbody></table>
`;

  var FilterSelectPage = `<select name="filter">
  <option value="guide">Guide</option>
  <option value="general">General</option>
  <option value="postID">Post number</option>
  <option value="name">Name</option>
  <option value="uniqueID">Unique ID</option>
  <option value="tripcode">Tripcode</option>
  <option value="capcode">Capcode</option>
  <option value="pass">Pass Date</option>
  <option value="email">Email</option>
  <option value="subject">Subject</option>
  <option value="comment">Comment</option>
  <option value="flag">Flag</option>
  <option value="filename">Filename</option>
  <option value="dimensions">Image dimensions</option>
  <option value="filesize">Filesize</option>
  <option value="MD5">Image MD5</option>
  </select>
<div></div>
`;

  var burichan = `/* General */
:root.burichan .dialog {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.burichan .field:focus,
:root.burichan .field.focus {
  border-color: #98E;
}

/* Header */
:root.burichan #header-bar.dialog {
  background-color: rgba(214,218,240,0.98);
}
:root.burichan:not(.fixed) #header-bar, :root.burichan #header-bar #notifications {
  font-size: 11pt;
}
:root.burichan #header-bar, :root.burichan #header-bar #notifications {
  color: #89A;
}
:root.burichan #header-bar a, :root.burichan #header-bar #notifications a {
  color: #34345C;
}

/* Settings */
:root.burichan #fourchanx-settings fieldset, :root.burichan .section-main div::before {
  border-color: #B7C5D9;
}
:root.burichan .suboption-list > div:last-of-type {
  background-color: #D6DAF0;
}

/* Catalog */
:root.burichan.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #D6DAF0;
}
:root.burichan.werkTyme .catalog-thread:not(:hover),
:root.burichan.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.burichan.catalog-hover-expand .catalog-container:hover > .post,
:root.burichan.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #B7C5D9;
}

/* Quote */
:root.burichan .backlink.deadlink {
  color: #34345C !important;
}
:root.burichan .inline {
  border-color: #B7C5D9;
  background-color: rgba(255, 255, 255, .14);
}

/* Fappe and Werk Tyme */
:root.burichan .indicator {
  color: #D6DAF0;
}

/* Anonymize */
:root.burichan.anonymize $site$info$name::before {
  font-size: 12pt;
}

/* QR */
.burichan #dump-list::-webkit-scrollbar-thumb {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.burichan .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.burichan .qr-link {
  border-color: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  background: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
}
:root.burichan .qr-link:hover {
  background: #D9DDF3;
}

/* Menu */
:root.burichan #menu {
  color: #000000;
}
:root.burichan .entry {
  font-size: 12pt;
}
:root.burichan .focused.entry {
  background: rgba(255, 255, 255, .33);
}

/* Unread */
:root.burichan .unread-mark-read {
  background-color: rgba(214,218,240,0.5);
}

/* Thread Watcher */
:root.burichan .replies-quoting-you > a, :root.burichan #watcher-link.replies-quoting-you, :root.burichan .last-page > a > .watcher-page {
  color: #F00;
}

/* Watcher Favicon */
:root.burichan .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(0,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  var futaba = `/* General */
:root.futaba .dialog {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.futaba .field:focus,
:root.futaba .field.focus {
  border-color: #EA8;
}

/* Header */
:root.futaba #header-bar.dialog {
  background-color: rgba(240,224,214,0.98);
}
:root.futaba:not(.fixed) #header-bar, :root.futaba #notifications {
  font-size: 11pt;
}
:root.futaba #header-bar, :root.futaba #notifications {
  color: #B86;
}
:root.futaba #header-bar a, :root.futaba #notifications a {
  color: #800000;
}

/* Settings */
:root.futaba #fourchanx-settings fieldset, :root.futaba .section-main div::before {
  border-color: #D9BFB7;
}
:root.futaba .suboption-list > div:last-of-type {
  background-color: #F0E0D6;
}

/* Catalog */
:root.futaba.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #F0E0D6;
}
:root.futaba.werkTyme .catalog-thread:not(:hover),
:root.futaba.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.futaba.catalog-hover-expand .catalog-container:hover > .post,
:root.futaba.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #D9BFB7;
}

/* Quote */
:root.futaba .backlink.deadlink {
  color: #00E !important;
}
:root.futaba .inline {
  border-color: #D9BFB7;
  background-color: rgba(255, 255, 255, .14);
}

/* Fappe and Werk Tyme */
:root.futaba .indicator {
  color: #F0E0D6;
}

/* Anonymize */
:root.futaba.anonymize $site$info$name::before {
  font-size: 12pt;
}

/* QR */
.futaba #dump-list::-webkit-scrollbar-thumb {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.futaba .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.futaba .qr-link {
  border-color: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  background: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
}
:root.futaba .qr-link:hover {
  background: #F0E0D6;
}

/* Menu */
:root.futaba #menu {
  color: #800000;
}
:root.futaba .entry {
  font-size: 12pt;
}
:root.futaba .focused.entry {
  background: rgba(255, 255, 255, .33);
}

/* Unread */
:root.futaba .unread-mark-read {
  background-color: rgba(240,224,214,0.5);
}

/* Thread Watcher */
:root.futaba .replies-quoting-you > a, :root.futaba #watcher-link.replies-quoting-you, :root.futaba .last-page > a > .watcher-page {
  color: #F00;
}

/* Watcher Favicon */
:root.futaba .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(128,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  var linkifyAudio = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAitJREFUOE9jYCAWKJWwavr0KyXWb/FIbDtUFFyzJx6nVofE2Xo5nXsj0rqPNSR0nVkR2Hjmgmfd+U9Otdf+m5Vf/6+SfeU/R9ChVVgNYDRtlfJuuPA/rPfe/4QpD/6nznj0P27Kw/9unff/69Xf+69c/+C/SO7N/0z+OAxgMmmRCe++/r9i3ev/KWvf/vdY8PK/bt/9/wrNV3/IN5y/IVt1YqNg4pGTTP4HsbuA2bhZ2qvpyn+xjIObxAp3VwqlrgngLFyryVy5nhPmZJHANS2cwYexG8BmVC/pWn3hP4NZlzWuQDJI3dIiFnUUuwEsQAOcq87jNcC7fHeLUtJxHF4AGmBWeAavAWH1+1rUUk7giAWjOknllON4DXAs2NEiG4/DBQxAF/CFHfrPYI4jDFSLuJVjNrUJhB/B7gIGo1pJRt99GAZYJK7wLJ1z7Xzl4vu/7aqv/GRBj0bjqAX2qb0nJ7mXH17C4HcUxQA+hymWtSue/C5a9up/9Ozn/7Vr7v1nRY7GqMb91T3b3v6vWvPmf/S0p/9ZQk+DDLCBRSOz06Jqk+o7/21nvfqvsebDf7kZL/5zBaxphkezd+OFn7HzXvz3Wvjmv9a8N//5Ek//ZTBpVYUrMG2X5wjcdl68+uI/wa5Lr3hSNjczGFeywOVZ/bbcVGp//F9izfv/Ql03f3P4LC/HSEQquYwMFnUCDJ7dzBhyjGZNQpye89M5gpfnMvtNUyE2h4PUAQBovvT7lyNljwAAAABJRU5ErkJggg==';

  var linkifyBitchute = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAadQTFRFAAAAwzw8xDs7cY6O0iws0ysrtF9f0Sws1CwsyzU1zTIy1igoyzQ01icnY7i4t0hI0S4u0ysr1Soq1ikp1ikp1Soq0ysr0S4uu0VFzjEx1Csr1ygo2Ccn2Ccn1ygo1CoqzjExzjAw1Skp2Ccn2Ccn1ikp0TAwxzY21Soq1SoqyzQ00iws1ygo1ygo0yws1Soq1Skp1igo1igo1igo1igo1igo1igo1Coq1Soq0C0t1ygo1ygo0S4unV5e1Csr1ygo1ygo1CsruUdHxzg41Skp1ygo1CsryTU10C4u1igo1ycn1ygo0i0txjo60S0t1ikp1ygo1ikp1Cws1Coq1Coq0yws0S0tyzQ00iws1Soq0ysr0i0txDs72Ccn2CUl2CYm2CQk3EFB2S8v2zw82jY24FZW3D0931FR3EBA3UND8LS04FVV7qys4V9f4WBg+erq766u9t7e7qqq2Ckp54KC9+Pj6pSU+Ojo5XNz9NHR6YqK8bu765ub5G5u9M3N6ImJ88vL5XV165eX3UVF6pWV3UhI2Soq2jU12Coq2jQ02Cgo2Sws////FaxLuAAAAF10Uk5TAAAAAAAAAAAAAAAAAAAAASJnoLy9oWolAhBz1vr72XgTGKf8/a4cCpuiDVvz9mS6xOvy9vzg6aGsPOToRAFv9fh2Awm07XgIMd765UEDOsfemVhhY00nBommbCkEI8horgAAAL5JREFUKBUFwbFKA0EUQNF7387sMq4EmzRpLSSdIBYKFv6Af2prnSYkRT4gWFgkCBJQ0EIFdcZzBCeqqh4qdk7VW2ChPusw02sAYKU7z7wEAAA2piQKFbrWSHazc1J0XWs5pdxPDykcVX+7Y9UxUsSo+s7PibqPFBRV/C5qi4i/UkrJrc7L47Bt4ZWnUaMCAE9GSrtKBQD2fR+bnAEAeOn7dUTOwApe35bDsPz0zsniQlV98IN0tJ3f6P0XAMA/kxou7OXCdnoAAAAASUVORK5CYII=';

  var linkifyClyp = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAwUExURTSY22ey5E2l4KbS75rM7Y3F64C/6f///8zl9nS45r/f9PL5/UGe3bPY8Vqr4v///wNjrzUAAAABYktHRA8YugDZAAAAB3RJTUUH4AINEi85AIH95AAAAE9JREFUCNdjYMAGGBWgDGYHCM2a3hkAZmi0dzSBaKaO9o5moCqmLiCjYzNQyw4QowIodQzI6E0AKcpo72gE6+Jyb1kAMehUA9RktgdYbQYAjGIVNGGXBJkAAAAASUVORK5CYII=';

  var linkifyDailymotion = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQBk3ff6/trp+kKO5wZt3xx54q7P9Ozz/IS17zOG5WKh653E8sbc9/GbbcoAAABZSURBVAjXY2BAASyhDhAGc9oECMOjyAAiESEEYrBYpLWBGcwHxcvBjDDxHelghpF0yDQwY3kVgweEUeEQDWbMEepqAjO8FMsLIeYsU8o+BrbCdWboTAe4AwALXxWGjW41FwAAAABJRU5ErkJggg==';

  var linkifyGfycat = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAjVBMVEWn3gCo3gSr3w2t4BSu4Bav4Ri35C+45DK45DO55DXA50rA50vB50zC6E/D6FTF6VjG6VvL62vN7G/P7XbQ7XfW74vY8JDa8ZTe8qDe8qLf86Pi9Kzj9K7k9LHp9sDp98Lq98Ps+Mr0++L5/O75/fD6/fH6/fL6/fP7/fT7/fb8/ff8/vj8/vn+/v7///91X4cfAAAAcklEQVR42o3M2xKBUACF4aVQckrIuRJK6H//x2sme4/MuPDfre9i6c/Cc3U5Dj87BuAxsXvGu6JvIIXEHRWwNHCHQNrCzkAFkbSBg4EM8i+Yw7PXBa3zRfuxVyf/Bis7nKwGKAcWxgC8prI5Sc315OlnDfzpDar2S9/oAAAAAElFTkSuQmCC';

  var linkifyGist = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABblBMVEXc3NykpKTW1tbb29ugoKCdnZ0AAAACAgIEDRcKCgoMDAwODg4QIzYRDAoTExMUDwwVAg0WICsaEw8aGhoiCBklGxUmERwwKCQ7LSU7Ozs8LSZFLyNINi1JNyxJNy1KSklMOi5VR1FXV1daQTRkZGRseYZwU0F4eHh7dnR8bWV/YE6IdGiKcGCKkJaNgYeNjY2RdGOScWCUcWCZmZmhoaGkpKSoqKirfmaurq6xsbG1tbW6urq+vr7AbmzBb23CwsLGxsbHx8fHyMjJycnJysrMzMzOiYbPi4fQ0NDRoYbT09PU1NTW1tbY2NjZqIzZ2dnb29vd3d3f39/i4uLktZrk5OTl5eXm5ubn5+fo6Ojq6urs7OzttKLu7u7wuqbw8PDx8fHz8/P4+Pj5+fn7uZj8vpz9ya79ybD/tZf/upr/wZ//w6H/xKH/xaL/xrH/yqj/y7T/zqv/z7D/07D/17n/2Lv/2Lz/3L//38n/4Mk3Q/ZuAAAABnRSTlMSFcbGzc5MNKFvAAAA1klEQVQoz2NgYPZHAswMDEwRSclwkBTBxOARn4gE4j0YXBOiJNUDg7y8Ar1UlOITXBkcY73Z2Li42dg42dn4wmIdGeyjQ7nZoEA4PNqewSZKlw0O9KJsGKwjBdl4ZeWkJGQUhNjEIq0ZrMI5+D0ri7Jz8itCRAXCrRgsQ3mUy+xicrPSbfO0REItGSyCVaVL3ONSU9LcCtQUgy0YzIJ85M1LizMzCsv9xF2CzBhMAwN99TV1DI0MtDWcAgNNGUycA5CAswkDi5kDwrMOZiwMjKzGSICVEQDhZj0UQV7PewAAAABJRU5ErkJggg==';

  var linkifyImage = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAs5JREFUOE+lk/tvi1EYx98/xT8gW4REIpGFMEQWl2FiM9ZMZhm2xRAyOsmujFFmdFRHu0tWm87UypxStr69zPauN5e5rHVp3IYhbOvHy+wHEQlxkm+ek+d8nm9OznkeSfrfldmgJC7QyUlTymsJTfuTZ25z4HdWYwyLreYhtpgekGPw0+kKvo1Eo+IXRSIiEhkWZuc9tqnsJD9EqTUopCxjSGTpB0iueczSo1HyW8cpsExQ1DbxI2pt45j9cXpexul4FEd79RnZphAa/SD7WvuFtO6UItbU9LC+YQxNI2w0wwYT5LRAdhOU3oBTIXC9gXP3oUSGgz2vST3gYHejR0jptT1C332f8yrUEYHrz8CgxDnpm6DKCUfc0KnmXa/AEVPPwnDcD0cvetA2uYRk67Ive/lpjO7YBO1PPuF8Df3vwf4cbNE4tqdw7YVq8HYyHx6FvhE1hkMEg8HDUqvFkjT4aIjMqkqyqkswDSrcfBfH+Q561YLAZ/B+BLda6FXlU/cPv0AoEPhuoP1h4Av7Wbh9E/Py15NWWUjeSR3nZDfeN+N0DY9hG/7K1eGP3P0S5/EYRFUF/IOTBrUXHPm9fT6mr1xEwupkZqxbzLyiDJYUZ5NSnkdqdSHpxyrYdFpPgdmAsdfJwPMI/Yr65bf7tZLGGBQ7DNdJWFtIYvoOZmbuZE7OXpIKKli86zAr9p9gTVktWTVnKTI2U95uRWe3U2IJUDbVB5p6hVm5x5m9Vc/cnedZUNzC8lILaQesZBy6hEZ3maKzgvJWFzVWD9XtXvVGQbSWASFtMATVRlJIKbOTWtlJXaeXepuPM1f6MNp9GLt8mLvvYLmp0OhQ2Fwvk6m7xaqDTvY0eYWUVtcnllXfYlGpnfklVuraHHg8HjxuN+6fktUHlWWZPaZeUo/ILK0UKttBcbNbSB9GP0yLxWJJUxoZGUn80zD9C/vXQ/4NHY10h3M1zmQAAAAASUVORK5CYII=';

  var linkifyInstallgentoo = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABcVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3dIYAAAAAAAAAAAAbGh4BBAcCBgoBBgoCBwsCCQ/QzucCCA7MyuXZ1eUBBQmTh8fo5/i9svIAAADh3vQAAAACCA0CCQ8CCQ4DDBQbGCUDChDr6vgAAAAAAAAREBIDCxK6tdfe2fTv7/cDCxIDDBQEDRUHDhgMJjXk4PZdXWdLUFoUNEYOKDgSMUMRLUBneI4eTGj08/QmW3onW3rTzvfOx/giU3IiVHMkWHdEaYJobHv3+PokWHpua6TNy9xZgZ+1quz8/foQKj0XPFInWn0nW38tZ4o6fqg8gq48grA9hrU/i7pAhrNAiLdBjLtEjr1FksNIjr5Il8pImMtKWnNqhL97odKFqti5q/q5rPq60+nCt/vLw/vPx/jV0vHY0/rc1/rg2/vh3fzn4fzu6/vx8vf19Pv19Pz49/v5+Pv8/Pv8/fr9/vv+/frziVtUAAAAT3RSTlMABQYHCAoNDhARGRobL0ZOV1xdXV5fYGBmZnB0eX2MjZSaoaGio6mqqqustLq7zubo6Ojo6evt7u/x8fLy9/f4+Pj5+vr6+vr6+/39/v7+XKgUSwAAAMhJREFUKM9jYGDg4OZmZgABKINT1dBAhBHIYFMxMBIDisjbhoZbCTExsCu5hoeY8DEwcOkEx8fY6MqpucTGB0izglVEplcU5/gmRYWBVQDNMK+s0hN3SvMyBpsBNJxXw0NfwTEjVQZqHQMHj5RfWW5mliSEC7TPzK6yJD/bXZQRzGdXcisqLy309okA2Q4Eis4peQWmstqBCdGW/CABraC45ERBBs3A6Fh/AbAKTwsHa34QZW8NVsGuLqwswQSjQICTmYMFQaEDAAF8JHLfKGswAAAAAElFTkSuQmCC';

  var linkifyLiveleak = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAlNJREFUGBkFwU2LVmUYAODrPu8Z5x1xSpRBXQyFoLsBE+wfiO5atJOgnf9DUPwFgtGinUgEaQsRhHYuMtpEiEWuG5iNjuOcj+c8z911xXcXL/68c3Dw1fzhg0QgEQAAEYGUKXFie9vxlSs/xk/rdavjGEkmkWSih65z4osv9GfOiK6LzEyZ2uGh4dUrmzs72ddlUUhkoiMr4PT167589Mh6c1N0nSRlqrX67dat+PDyZXRT19m5edPnt28rGFHxMcJ6d9fprS1/37tneP3aemPD1uamUydPOru3p5DdGOH0tWsu3LhhxIQJM2qEpRT/Pn3q/du3AhARSmvGTH0lplKMrVkiYpVpQaJlighzhDkzhmEA0fcWoqAfyaFW4zTlgCABxlrNmY4ylUzLsiREprFWc0T2M+ZSjKWY0AEaltZUjJixZJIpuk5pTWlNP2BYFvOyKJkCAKU1tTXHrZlqVWolUxdhxsfVSj9FmJfFMM9GdICGGa01HyMstYpMIFPJVNDPmYZSTOPoOEKHzNRlKpmWWh1j6TpLa2SKTKVWU6Z+Qolwdm/P9QcPZKa2LH69e9eIMs+WCL/cv2/98CGZPrt61am+V9APq1X89eyZ/968obVYaiXT4dGREgG+vnPHeHgYMsH2+fP+efEihtVKv7SWw/6+9/v7KYLMhIywTJPamvOXLomukyRsrNf+ePzYkpl9dJ3SWgSCSCQCfz5/7pMLF2yfO6eLiAQcHRz4/cmT+HR7O+Ob3d0fNt69+7a2BiICQCJbA0EgE5lpvbXl1OXL3/8Pfax4+6SjSukAAAAASUVORK5CYII=';

  var linkifyPastebin = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAB1FBMVEUAAAAAAAAAAABWYWwAAABbY3BbYm5dZnFdZXJeZnMEBAQHCAhYYGpdZnFdZnBgaHIlJyomKCooKi09QkdESU5eZGtdYmhdYmleY2lrcXdqb3Rqb3Rqb3SSmJ+SlJeWmJutr7GtrrCWm6ChpKhbW1tmZmZvb290dHR3d3d4eHh5eXl6enp8fHx+gIJ/f3+CgoKDg4OEhISFhYWHh4eKioqKjI2Li4uMjIyOjo6Pj4+QkJCRkZGSkpKUlJSVl5mWlpaYmZqZm52ampqbm5ucnJydnZ2enp6fn5+hoaGioqKkpKSkpaalpaWmp6mmp6qnqauoqKioqquoqq2qqqqrrK2srKysra6srrCsrrGurq6vr6+wsLCxsbGysrKztLa0tLS1t7m2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr7AwMDAwsTBwcHExcfFxcXFxsnGxsbHx8fIyMjJycnMzMzNzc3Ozs7O0NLPz8/Q0NDR0dHR09XT09PV1dXV1dbV1tfV19rW1tbX19fX19jY2tzZ2dnZ2tva2tra3N3a3N7c3Nze3t7f39/f4OHg4ODi4uLl5+jm5ubs7Ozs7e3u7u7v7+/v8PDw8PDx8fHy8vLz8/P29vYSoLMZAAAAJHRSTlMABAUGCwsNHCAiLzMzMzZEYGJwgIuOnJycnqmqq9bc3+/w8fkZ0N/uAAAA/klEQVQoU2NgYGDl5YMDdgYGBmZZ3964CYFtIR3e9Q7K/AwMHI55KfaFmcHWMy3K3MwlGRg4wz0zdYpcorRbNbL0LaWAAp3ts2umV8wo6MupTauQBgqUG03VL7W3sfZSb1erAgm02M+yzYrVCXUy6zapAQlUx/dEdyX3J3ZHVUYVywAF8o2rDNN1Go2jzGLMokAC2QbuSc42mXmaOXop9iAtCXrJ5qXWjT59Abl2ESJAAX/tSIMMiyrrqQ3T6uS5gQK6kSqpqkUermGTexQFmYACflqR+hlWZSamzQpCLEDPsSmVVDT1TJw0JUhOAMRnYOARFRMTE5cQF+ZiBPIAII5B3EVG0b4AAAAASUVORK5CYII=';

  var linkifyPeertube = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABIFBMVEUhHyAAAABzPBnxaA3CWBEnJSYbGRptbW16enpzc3PTayWhb04hHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyApIh+0UhMfHiBWMhvsZg7zaQ0hHyAhHyAXHCHzaQ3xaA3xaA3xaA3xaA0hHyAhHyDxaA3xaA3xaA3xaA3xaA3xaA0oJickIiMdGxwUEhPxaA3xaA3xaA1sbGxwcHB3d3eFhYXxaA3xaA3xaA1zc3Nzc3Nzc3Nzc3Nzc3PxaA3xaA3xaA1zc3Nzc3NtdHjxaA3xaA1yc3STcFnvaA/yaAxzc3N4c2/FbDFzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3MhHyDxaA1zc3MAAAAfljyVAAAAXHRSTlMAAAAAAAAAAAAAAAAZkjMBHOLXYArj8p0u2VsJ1XaGL/OhKyXc1WEN2gwk2/SjKgEYiS4B/tYFGosqAdleAxzj12ML9Z8s850rJWbYeYMs1F8Koiri1V0MGZY0AYbIBFIAAAABYktHRAH/Ai3eAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wYXFBUVX81QWQAAAKxJREFUGNNVz9UWgkAQANDBtdbu7lZsxe7ubpH//wxBPKDzNvdMAmi0Oj0QQgAYjCazBX7BStvsDqHoAzTtdLklf+Dx+vwICRAIhsKRaCyOvpAwJ6Up8pXOZHOIAFm+UCzJEQuvMhWrIFBUa/WGkodmq40Ad7q9/kDFwnA05lpYYCbT2ZykFvxQDhhmuVpvcvxaHra7vfp72KflcMSYEOB0vlyx+By+3R9PMSfe+P0enM1454kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDYtMjRUMDM6MjE6MjEtMDc6MDDse6MAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA2LTI0VDAzOjIxOjIxLTA3OjAwnSYbvAAAAABJRU5ErkJggg==';

  var linkifySoundcloud = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQ4y5WTy2pUQRCGv2rbzDjJeAlIBmOyipGIIJqFEBDElwh4yULGeRFXPoEIBl/AvQ/gC2RnxCAoxijiwks852S6+3dxzslcHJCpTXVX11/Xv0097gLPgVNMJxnQNfX4zsqleWbnpoMf/oa9d988MM9MC/rp+E0a+A0dsVobMNMCOO8B6McRoABJI+A6gJmN3D2A8jgEBCEkSEMBrcrsDAzDWWn3AjgKFaDMmgRqniGFgsaDp1jrLOngDf1XT1D+A1dFc4MKAkkiCVKjjVu7g9+4Rzx4i1u6hjXbuMWr0O5QPNvCu7IaCZwEKQukLGDrm5x8uI0tr6MkiGlkiv7yLfzN+6S5i6QsIMABkEfcxhbWWYMkVAOjxvYAjc3HNHrbKI9VBQBFwF25XQKSBjqIf1YBuAurEMrczgDygD6/x2LCpFLXLUyQ+PoldphhBhYfIX09XU1+Flaukz7uYqs3SHs7cG4BmTsmkBUF9mmXEwa28BNLPaQPLepuNcbGSWQquQC2/Kdcox1FUGkcB0ykck1nA2+wTzMs8stGnP4rbWGw74EuS/GFQWfK7/wF6P4F7fzIAYkdmdEAAAAASUVORK5CYII=';

  var linkifyStreamable = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABXFBMVEUPkPoNj/qExv0PkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoNj/oPkPoNj/oNj/qExv0PkPpruvwPkPornfoVk/opnPpnufwPkPqExv0Nj/oPkPoNj/oPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoOj/opnPsVk/oMjvoOkPoTkfo6pPsblfo3ovva7v7////v9/5Sr/whmPry+f5htvze8P7W7P5itvyl1v0imPu84P3o9P50v/zN6P73+/8lmvs8pfs+pfsKjvr9/v9EqfsNj/oom/v8/v9nufxAp/tJq/sQkPrb7v6t2f0IjPoclvr6/f9luPwUkvrp9f7h8f5ruvy/4f4kmftpuvwxoPum1v32+/8jmfpMrPvu9/7z+f9UsPs7pPv8/f/4/P9oufwalfpDqPsMj/ounvtVsPsnm/qzfQQ9AAAALXRSTlMAAAAggMzw0IYkBPb4iAamsgZ+jPwogpDO1vTYlPoulL4KivyUCiqO1PL01i67tUAWAAAAAWJLR0Q4oAel1gAAAAd0SU1FB+MGFxMuDXVcMbIAAADdSURBVBjTY2AAAmYWVjY2dg5OBgZGJiCXi4VbFwx4ePlAAlz8unAgIAgUENJFAsJMDMw8unp6+gaGRsYmpoa6IqIMYrp6ZuYWllbW5hY2toZ64gwSurp29g6OTs4urm7uHrqSDGy6nhZeet5WPr5+/gGBelJAgSCLYL+Q0LBw3YjIKKAAu250TGxcvE1CYlJySqquNAOHrl9aukVGZla2RU6uoZ4MA6esrl9evnWBYWFRMdBaOQYGXmSHyQNdyieA4CsogjzHpyQL4SqrqIJ9y8Cgpq6hqaWtogPyPgDmvSxRxBWM9AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNi0yNFQwMjo0NjoxMy0wNzowMCKUvXUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDYtMjRUMDI6NDY6MTMtMDc6MDBTyQXJAAAAAElFTkSuQmCC';

  var linkifyTwitchtv = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAYUExURf///2RBpWRBpWRBpWRBpWRBpWRBpf///+zQyUYAAAAGdFJOUwFdZX0lTzs4r5oAAAABYktHRAcWYYjrAAAAB3RJTUUH4AINEi42iSXRNAAAAD1JREFUCNdjYEiDAAZGGIMtjQEEUBlMCWoEGci6mGEMsxQgIy0BiB3AjLS0FAYQIw0kwABipoI1AhkBQBIAFCIXxiHgq80AAAAASUVORK5CYII=';

  var linkifyTwitter = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEsUExURf///1Cf21Gg3FGi31Gh3VKj4FGh3lKj4VKk4lKl41Ol5FOn51Sp6VSo6FOn5lCf21Gg3FGh3VGi31Gi31Gh3lGg3FGg3FGg3FGg3FGh3lGg3FGi31Kk4lKj4FGh3lGi31Kk4lGh3lGg3FGh3lOm5FOm5VGi31Kj4VSo6FGi31Gh3VGg3FKj4FOn51Gi31So6FWr7VOl5FGi31On51Sq6lKk4lOo51Sp6VOm5FSq61Ws7VOn51Oo51Sq61Ol5FOm5FSq61Wr7VOo51On51Sr7FWs7VSp6lGg3FGh3VOm5FWr7VSp6lKj4VOm5FSo6FSr7FWs7VWs7VWr7VSq6lOo51Om5FOo51So6FOm5VOl5FSq61Ws7VSr7FSp6lSp6VWs7lWr7VKk4lSq6v///6E3MNsAAABVdFJOUwAAAAAAAAAAAAAAAAAAAB0Ii+3xnBVTJhfsMKb+qTEp9GwBF/7lLAbo0m4pLkUTdvk2Ev3+EZnOBo/3Z8ffCRzH/D0OqPxiLnvx3UI8m9n1++GwXQZNS29BAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+ACDRIwBwy67tEAAADKSURBVBjTY2BAB4xogIGRH8IQEBQSFhEVE2eQkJQC8ZmkQ8PCI2Rk5RjkIxUUlRgZlVWioqNjYlXVGNQ14iI1tbR14qLj4+MTdJkZ9PQNosJCE0OjgPz4KEMWBiPjhPiEmKQokIJ4E1MmBmazhHg4MGdlYmCzsLSC8ROsmRkZmFht4Eps7ViADmOzd4DyHZ2YmYACTOzOLmATXd04mIBOd/eQ9owFCXh5c7KB/MLi4+vnHxAYFBzCwcYEEmBi5uLm4eHl42RmAnsSAMZBLgZiFUQ5AAAAAElFTkSuQmCC';

  var linkifyVideo = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAxgDGAP8nNqN7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMZBjQQLEEqGwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAA5SURBVDjLY2AYaMDIwMDwn1JD/lPCZhpwL+B1wf///ykzgBhDiAoDfIYQZQAjIyP5BuDTPJqQqAQAvW0ZAMk8+EEAAAAASUVORK5CYII=';

  var linkifyVidlii = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACvlBMVEUCWv8HXf8AWv8AAAD///8AVP+bqP8AWv8AVO4AOqUAGkgAyf8APa0AL4QABAsASdEAVv8AUv8AUv8AVP8AWP8BWv8JXv8RYv8QYv8DW/8DXP8xdv9RiP9Af/8IXf8AKP8KXv8JXf8NYf8aaf8ATP0UZP0AVf8AT/8AT/8AVv8ATedvnPVAf/8AT/sYZvl0o/8PYf8udf8aa/8FXf8AVf8AOrRBe/Nvn/8AUv0aaPkXZ/8ATv8AKYQZYuwIXf8ca/wTZP8ASP8AED0HUNwZaf8xdPwDWv8AAAAAQMRcjvQAU/8AMZssb/Jmmf8AU/8AJXsRW+dSif8AUv8AAAAASdQtdP8ATv8AQ/8AQv8APbtKgfQud/8XZ/8TZP8FXP8AKIIcZO4wdP8AF08KU95tnv4gafhZi/Rnl/ZzofcocP8AAAAAQ8Q4efRwnvVmlvVcjvgrcfsAQsQAOK0APrwAQcUEStMLXPgDWv8AHE8APLEARdIAQ80ASeEAVf8AOJkAAAAAAAAAAAAABBMAJJIAY/9rmP+vxv90n/+buPv29/7C1P+zx/n///2Crv/7+fjs8f++z/f///3l6fX9/f/L2fj9/P5ilv9Nh/3h6f6vyf/D0vT///2lwP/Z5Pf3+P9OiP9klvr9/Puzyf+QsPX//fnW4v/k6vfv8/86ev94pfj///uRtf/y8vby9f9Fgv9EgPzt7/jj7f8mcf+eufj///x1pP/Z4fT///52pf9Uivv09fnV4v8ncf64yvj7+/6vxPX///yyyf9ynvr6+vvG1/8ocv3O2/fz9v53ofX8+/nb5v+YuPz//vy0yv8vdP3e5/fn7v/p7PX09//b5P7///6eu/9Df/zq7vjc5//I1vT//v3+/v////9+q/9Tivnn6fPy8/rW4fzI1/2qwv6YtPT8+fX39/jz9PqJrveTsvqfpuxrAAAAhXRSTlMAAAAAAAAAAAAAAAAAAAAABSlERA45nrSzP3TZ7e12Ao2LusMcrJYhFwaR/uhCwP/x5tZzBWHy+n3OvA8u17jmpwgPrOz5jAF2+3FA7PdYG8fuPQaX5jAGAV/39MCmdy/e/RGz/vj5/f/rAXj4//z13n52i5qmmFQ1lqOQaTgIBAYKEAYAKGjtAgAAAKNJREFUGBkFwT0uRGEYBtD3ZJ77uT8iGrXCAixCr7OCyRA2oCKqiUYkOgoJwhqUbMAKLEChVYhk4pxswvcWfFGVEbYtuJutqir9Ibc0uh0+V+mf5gY69yN2PzKJiTjCg8qa3uLRAJpKM9AMoL1VOi9zJ4CQ9z0jwHX+RAwAURUxAMSB/L7u35wCGlKaHrDkPGVmwhlc6FN6l1iHKxupn+djAPgHrEwa+qrzy0oAAAAASUVORK5CYII=';

  var linkifyCimeo = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAAIdZUKh6sLlLkLmr4LmsAMp88NrdYVW3MZj7Acstkrt9s1e5E7vN5EfI9JvdtKwuBijp5kpbl30eiDt8aG1uqRr7qTyNehxM+k4PCy3enB3OTg6Ovv9PXw+fz////L9U5WAAAAAXRSTlMAQObYZgAAAIFJREFUeNplz90OwiAMBWAQpAoyxclkP3je/y0H2AQXz0WT8100rRD6kNI9/cRroemQL3hXhoujZYj4OHoAmBvYGcBISwbWBvfXCrytnIDUQMkbsBpagMA7zhtQdyTFQAmIG7IkYniiZuh3XGsPqoOZkMOJOpAcLqUzNFGGu/57fwc1hgtp0mVSyQAAAABJRU5ErkJggg==';

  var linkifyVine = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAHCUExURQAAAAC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+j////54tRLAAAACUdFJOUwAAAEK+9/e+QQIDAwEqzskfUZmUNHz2mrT++V1w+f5tCanNFUDwfEjtjAyyvg027Hki27QMBJzaHE/1+FkNsN0iZvv6bxyAlB589lQeyud0KB8PQO+ZBUrc+eXgcRG/3CoATe316Wxw/P6BAgBt+fp4IAwh0d4zM9q7Fm76qi605EMSrvfX/PRtAivF9IAJNMLxhA2KYlJ9AAAAAWJLR0SVCGB6gwAAAAd0SU1FB+ACDRI2MOJd7FgAAADrSURBVBjTLY9VWwJgGEPfiYWBha2YYHcHditgd3d3odjdivvBfgK727nYsyPiCrw03j6+fv6AaAMCgyAI1lElJBQSFh6hBxDJqOiY2Lh4SEKiIQlITmFqWrqRJkhGJrOA7Bzm5uUXsBBSVMySUpSVs6KyqrqmFmKuY30D0NjU3NLa1t6h9jvZ1Q30WGi19fb1KzAwyKFhYGSUY+MTkwpMTXNmFpibX+Di0rICWFldW9/A5tb2zu7ePtTrg0MeHePklPYzuDRw7uDF5RWvbwC32O0d7x8en55f4DHF6xv5/vHp6f/k6/vH+evuf1LAObptvSvrAAAAAElFTkSuQmCC';

  var linkifyVocaroo = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAw9JREFUOE9jYMABuMwYmCyTJKUCGlSnFSy02TTzeOyCiQcDViX26qVz2TAyYtWmEMwuoZ3M7V40LcB79pHkc0svpvzY8jD//87nxf+3Pyn8v/ZO8v+VNyP/2mZJumI1QCWSI8232Hjumitlfw5+qPp/9l8TCt76JP//xkdx/wsXWCzjtWFkwTCkbWFe9plPk/+ga4Txz/xt/D/hkN//gMXif21a+NbyWjIwoRiy6GDT5rP/mlFsPfyp5n/NpOj/22+0gMUXXIz/H7hC/L/bFKFbPDZMrHAD5H35OPt2J9zacDv/f3V7xv9FhwrBGubsT/1//Pjx/1GJ/mD+/nfl/1v3Ovy3KRJNQbHdOlXCvOO03/+pm1P/v3v37n90hhtYw9HPtf8Xb2v937cmHswHeWPRxYj/LvkK3igGKARwicTO07118H3V/5kbi/4vPZMJtK3s/6YH2f+Pfq1B8VbjWrdnMu5s4nAD9CNFhKwz5DTUvLl419zKvAcLtG1P84BRl/b/5M/6/6f/NPzf/qzo84yj0Uus0xUU4Zor54bm9+4OfZG02OCuoAMTb9ZkC9ull1Nvrr2Z+XvRpaRfc65H/68F+jl9svEhzyLFWoccWVc+eyTHq/twydjlKRln7jX9bNMkMJnbhoFRL1xCqmKx6/yi2fYXa/c5/e846PV/5fW0/7OPx/yfcjzop34ulxdGGvDuU8mMXaX507lBuiN6ueadmQeT/p/93vf/1O+G//sP5fw/eL3o/5JLif8zVxs+Tlir9S26UyeFQQvJGBE7FvaFZ9LfN+1y+WjbItSb3GmXvXd15v8zroH/HxgE/D+aGPx/18vi/z07PeZNPRKxe/Kh0Ae8toxscCO4zBkYXArk9C1SxJUYjBkYPPIVtbbuTftz3cz//2O9wP/75iSAXdO72/dt2HL5F6YlfBW4MiJYXMiBiW3t7azHBx+V/t89N+H/8a+1//e9K/9attDp5LQjYX8SuvVL8RoAkmxa65299Erq1FnHo0qrl7t4BddriIs4MrM3rfWcFd+pGwVSAwBZ0bKP8yrZPAAAAABJRU5ErkJggg==';

  var linkifyYoutube = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABIklEQVQoz53LvUrDUBjG8bOoOammSf1IoBSvoCB4JeIqOHgBLt6AIMRBBQelWurQ2kERnMRBsBUcIp5FJSBI5oQsJVkkUHh8W0o5nhaFHvjBgef/Mq+Q46RJBMkI/vE+aOus956tnEswIZe1LV0QyJ5sE2GzgZfVMtRNIdiDpccEssdlB1mW4bvTwdvWJtRdErM7U+8S/FJykCRJX5qm+KpVce8UMNLRLbulz4iSjTAMh6Iowsd5BeNadp3nUF0VlxAEwZBotXC0Usa4ll3meZdA1iguwvf9vpvDA2wvmKgYGtSud8suDB4TyGr2PF49D/vra9jRZ1BVdknMzgwuCGSnZEObwu6sBnVTCHZiaC7BhFx2PKdxUidiAH/4lLo9Mv0DELVs9qsOHXwAAAAASUVORK5CYII=';

  var photon = `/* General */
:root.photon .dialog {
  background-color: #DDD;
  border-color: #CCC;
}
:root.photon .field:focus,
:root.photon .field.focus {
  border-color: #EA8;
}

/* 4chan style fixes */
:root.photon #arc-list tr:nth-of-type(odd) span.quote {
  color: #C0E17A;
}
:root.photon.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8) !important;
}
:root.photon.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8) !important;
}

/* Header */
:root.photon #header-bar.dialog {
  background-color: rgba(221,221,221,0.98);
}
:root.photon:not(.fixed) #header-bar, :root.photon #notifications {
  font-size: 9pt;
}
:root.photon #header-bar, :root.photon #notifications {
  color: #333;
}
:root.photon #header-bar a, :root.photon #notifications a {
  color: #FF6600;
}

/* Settings */
:root.photon #fourchanx-settings fieldset, :root.photon .section-main div::before {
  border-color: #CCC;
}
:root.photon .suboption-list > div:last-of-type {
  background-color: #DDD;
}

/* Catalog */
:root.photon.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #DDD;
}
:root.photon.werkTyme .catalog-thread:not(:hover),
:root.photon.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.photon.catalog-hover-expand .catalog-container:hover > .post,
:root.photon.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #CCC;
}

/* Quote */
:root.photon .backlink.deadlink {
  color: #F60 !important;
}
:root.photon .inline {
  border-color: #CCC;
  background-color: rgba(255, 255, 255, .14);
}

/* Fappe and Werk Tyme */
:root.photon .indicator {
  color: #DDD;
}

/* QR */
.photon #dump-list::-webkit-scrollbar-thumb {
  background-color: #DDD;
  border-color: #CCC;
}
:root.photon .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.photon .qr-link {
  border-color: rgb(206, 206, 206) rgb(206, 206, 206) rgb(191, 191, 191);
  background: linear-gradient(#ECECEC, #DDD) repeat scroll 0% 0% transparent;
}
:root.photon .qr-link:hover {
  background: #DDDDDD;
}

/* Menu */
:root.photon #menu {
  color: #333;
}
:root.photon .entry {
  font-size: 10pt;
}
:root.photon .focused.entry {
  background: rgba(255, 255, 255, .33);
}

/* Unread */
:root.photon .unread-mark-read {
  background-color: rgba(221,221,221,0.5);
}

/* Thread Watcher */
:root.photon .replies-quoting-you > a, :root.photon #watcher-link.replies-quoting-you, :root.photon .last-page > a > .watcher-page {
  color: #00F !important;
}

/* Watcher Favicon */
:root.photon .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(51,51,51)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  var report = `#g-recaptcha,
:root:not(.js-enabled) #captchaContainerAlt {
  height: auto;
}
#captchaContainerAlt td:nth-child(2) {
  display: table-cell !important;
}

/* Archive reports */
#archive-report {
  padding: 3px;
}
#archive-report-enabled {
  vertical-align: middle;
}
#archive-report > label {
  display: block;
}
#archive-report-reason {
  display: block;
  width: 98%;
}
.archive-report-success {
  color: green;
}
.archive-report-error {
  color: red;
}`;

  var spooky = `/* General */
:root.spooky .dialog {
  background-color: #171526;
  border-color: #707070;
}
:root.spooky .field:focus,
:root.spooky .field.focus {
  border-color: #98E;
}

/* 4chan style fixes */
:root.spooky #arc-list span.quote {
  color: #634C2C;
}
:root.spooky.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8) !important;
}
:root.spooky.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8) !important;
}

/* Header */
:root.spooky #header-bar.dialog {
  background-color: rgba(23,21,38,0.98);
}
:root.spooky:not(.fixed) #header-bar, :root.spooky #notifications {
  font-size: 9pt;
}
:root.spooky #header-bar, :root.spooky #notifications {
  color: #C49756;
}
:root.spooky #board-list a, :root.spooky #shortcuts a {
  color: #FE9600;
}
:root.spooky.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}

/* Settings */
:root.spooky #fourchanx-settings fieldset, :root.spooky .section-main div::before {
  border-color: #707070;
}
:root.spooky .suboption-list > div:last-of-type {
  background-color: #171526;
}

/* Catalog */
:root.spooky.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #171526;
}
:root.spooky.werkTyme .catalog-thread:not(:hover),
:root.spooky.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.spooky.catalog-hover-expand .catalog-container:hover > .post,
:root.spooky.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #707070;
}

/* Quote */
:root.spooky .backlink.deadlink {
  color: #FE9600 !important;
}
:root.spooky .inline {
  border-color: #707070;
  background-color: rgba(255, 255, 255, .14);
}

/* Fappe and Werk Tyme */
:root.spooky .indicator {
  color: #171526;
}

/* Highlighting */
:root.spooky .qphl {
  outline: 2px solid rgba(145, 182, 214, .8);
}
:root.spooky.highlight-you .quotesYou$site$highlightable$op,
:root.spooky.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8);
}
:root.spooky.highlight-own .yourPost$site$highlightable$op,
:root.spooky.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8);
}
:root.spooky .filter-highlight$site$highlightable$op,
:root.spooky .filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 rgba(145, 182, 214, .5);
}
:root.spooky.highlight-own .yourPost > $site$sideArrows,
:root.spooky.highlight-you .quotesYou > $site$sideArrows,
:root.spooky .filter-highlight > $site$sideArrows {
  color: rgb(155, 185, 210);
}

/* QR */
.spooky #dump-list::-webkit-scrollbar-thumb {
  background-color: #171526;
  border-color: #707070;
}
:root.spooky .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.spooky #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.spooky #qr .field:focus,
:root.spooky #qr .field.focus {
  border-color: rgb(254, 150, 0) !important;
  background-color: rgb(30,32,36);
}
:root.spooky .persona button {
  background: linear-gradient(to bottom, #2E3035, #222427) no-repeat;
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
  outline: none;
}
:root.spooky .persona button::-moz-focus-inner {
  border: none;
}
:root.spooky .persona button:focus {
  border-color: rgb(254, 150, 0);
}
:root.spooky #qr.sjis-preview #sjis-toggle,
:root.spooky #qr.tex-preview #tex-preview-button {
  background: rgb(26, 27, 29);
}
:root.spooky #qr select,
:root.spooky #file-n-submit > input,
:root.spooky #qr-draw-button {
  border-color: rgb(40, 41, 42);
}
:root.spooky #qr-filename {
  color: rgb(197,200,198);
}

:root.spooky .qr-link {
  border-color: rgb(8, 6, 23) rgb(8, 6, 23) rgb(0, 0, 8);
  background: linear-gradient(#262435, #171526) repeat scroll 0% 0% transparent;
}
:root.spooky .qr-link:hover {
  background: #1A1829;
}


/* Menu */
:root.spooky #menu {
  color: #FE9600;
}
:root.spooky .entry {
  font-size: 10pt;
}
:root.spooky .focused.entry {
  background: rgba(255, 255, 255, .33);
}

/* Unread */
:root.spooky .unread-line {
  border-color: rgb(197, 200, 198);
  visibility: visible;
  opacity: 1;
}
:root.spooky .unread-mark-read {
  background-color: rgba(23,21,38,0.5);
}

/* Thread Watcher */
:root.spooky .replies-quoting-you > a, :root.spooky #watcher-link.replies-quoting-you, :root.spooky .last-page > a > .watcher-page {
  color: #F00 !important;
}

/* Watcher Favicon */
:root.spooky .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(254,150,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  var style = `/* General */
.dialog {
  border: 1px solid;
  display: block;
  background-color: inherit;
}
.dialog:not(#qr):not(#thread-watcher):not(#header-bar) {
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}
#qr,
#thread-watcher {
  box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.25);
}
.captcha-img,
.field {
  background-color: #FFF;
  border: 1px solid #CCC;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: #333;
  font: 13px sans-serif;
  outline: none;
  transition: color .25s, border-color .25s;
}
.field::-moz-placeholder {
  color: #AAA;
  font-size: 13px;
  opacity: 1;
}
.captch-img:hover,
.field:hover {
  border-color: #999;
}
.field:hover, .field:focus, .field.focus {
  color: #000;
}
.field[disabled] {
  background-color: #F2F2F2;
  color: #888;
}
.field::-webkit-search-decoration {
  display: none;
}
.move {
  cursor: move;
  overflow: hidden;
}
label {
  cursor: pointer;
}
a[href="javascript:;"] {
  text-decoration: none;
}
.warning {
  color: red;
}
:root.sw-yotsuba #boardNavDesktop, :root.sw-yotsuba #boardNavMobile {
  display: none !important;
}
:root.hide-bottom-board-list $site$boardListBottom {
  display: none;
}
body.hasDropDownNav{
  margin-top: 5px;
}
:root:not(.keyboard-focus) a {
  outline: none;
}
.painted {
  border-radius: 3px;
  padding: 0px 2px;
}
[hidden] {
  display: none !important;
}

/* 4chan style fixes */
/* overrides 4chan CSS on div.opContainer, div.op */
:root.sw-yotsuba .opContainer, :root.sw-yotsuba .op {
  display: block;
  overflow: visible;
}
:root.sw-yotsuba .reply > .file > .fileText {
  margin: 0 20px;
}
:root.sw-yotsuba #arc-list span.quote {
  color: #789922;
}
:root.sw-yotsuba .fileText a {
  unicode-bidi: -moz-isolate;
  unicode-bidi: -webkit-isolate;
}
:root.sw-yotsuba #g-recaptcha {
  min-height: 78px;
  height: auto;
}
:root.sw-yotsuba:not(.js-enabled) #postForm {
  display: table;
}
:root.sw-yotsuba #captchaContainerAlt td:nth-child(2) {
  display: table-cell !important;
}
:root.sw-yotsuba canvas#tegaki-canvas {
  background: none;
}
/* Disable obnoxious captcha fade-in. */
:root.sw-yotsuba > body > div:last-of-type {
  transition: none !important;
}
/* Fix captcha scrolling to top of page. */
:root.sw-yotsuba > body > div[style*=" top: -10000px;"] {
  visibility: hidden !important;
}
/* Make long filenames wrap properly: https://github.com/ccd0/4chan-x/issues/1082 */
:root.sw-yotsuba .post > .file {
  /* currently nonstandard but may be added: https://lists.w3.org/Archives/Public/www-style/2016Mar/0352.html, https://bugzilla.mozilla.org/show_bug.cgi?id=1296042 */
  word-break: break-word;
}
:root.sw-yotsuba:not(.ua-webkit):not(.ua-blink) .fileText {
  word-wrap: break-word;
  max-width: calc(100vw - 90px);
}
:root.sw-yotsuba > body.is_catalog .thread > a > img {
  display: inline-block;
}
/* Links to NSFW boards */
:root.sw-yotsuba .nwsb {
  display: inline;
}
:root.sw-yotsuba .fileText {
  max-width: auto;
  white-space: normal;
}

/* Ads */
:root.sw-yotsuba .ad-cnt > *, :root.sw-yotsuba .adg-rects > *, :root.sw-yotsuba .bsa-cnt {
  height: auto !important;
}
:root.sw-yotsuba:not(.ads-loaded) hr.abovePostForm,
:root.sw-yotsuba:not(.ads-loaded) .adg-rects > hr,
:root.sw-yotsuba #adg-ol + hr,
:root.sw-yotsuba .danbo-slot:empty {
  display: none;
}
:root.sw-yotsuba .adg-rects {
  margin: 0;
  font-size: 0;
}
:root.sw-yotsuba div.center[style] {
  display: none !important;
}

/* Tinyboard / vichan conflicts */
#menu > .hide-thread-link {
  width: auto;
  height: auto;
  overflow: visible;
  background-image: none;
}
#menu label.entry {
  display: block;
}
#fourchanx-settings label {
  display: inline;
}
.intro a[href="javascript:;"],
#menu a {
  margin: 0;
}
.gal-buttons.gal-buttons a {
  font-size: inherit;
}
:root.sw-tinyboard.fixed.top-header:not(.autohide) .boardlist,
:root.sw-tinyboard.fixed.top-header:not(.autohide) .bar.top {
  position: static;
}
:root.sw-tinyboard.fixed.top-header:not(.autohide) div.pages.top {
  top: auto;
  bottom: 0;
}
:root.sw-tinyboard.fixed.top-header.autohide .boardlist,
:root.sw-tinyboard.fixed.top-header.autohide .bar.top {
  z-index: 3;
}

/* Tinyboard site style conflicts */
:root[data-host="fufufu.moe"].fixed.top-header:not(.autohide) div.pages.top {
  top: 26px;
  bottom: auto;
}
:root[data-host="merorin.com"].fixed.top-header:not(.autohide) span.settings {
  top: 26px;
}
:root[data-host="fufufu.moe"]:not(.fixed) #header-bar {
  margin-top: 38px;
}
:root[data-host="lainchan.org"]:not(.fixed) #header-bar {
  margin-top: 17px;
}
:root[data-host="smuglo.li"]:not(.fixed) #header-bar {
  margin-top: 8px;
}

/* Anti-autoplay */
audio.controls-added {
  display: block;
  margin: auto;
  white-space: normal;
}
:root.anti-autoplay div.embed {
  position: static;
  width: auto;
  height: auto;
  text-align: center;
}
:root.anti-autoplay .autoplay-removed {
  visibility: visible !important;
  min-width: 640px;
  min-height: 360px;
}

/* fixed, z-index */
#overlay,
#qp, #ihover,
#navlinks, .fixed #header-bar,
:root.float #updater,
:root.float #thread-stats,
#qr {
  position: fixed;
}
#overlay {
  z-index: 999;
}
#qp, #ihover {
  z-index: 60;
}
#menu, .gal-buttons {
  z-index: 50;
}
#updater, #thread-stats {
  z-index: 40;
}
:root.fixed #header-bar, #notifications {
  z-index: 35;
}
#a-gallery {
  z-index: 30;
}
#navlinks {
  z-index: 25;
}
#qr {
  z-index: 20;
}
#embedding {
  z-index: 11;
}
:root.fixed-watcher #thread-watcher {
  z-index: 10;
}
:root.fixed:not(.gallery-open) #header-bar:not(:hover) {
  z-index: 8;
}
#thread-watcher {
  z-index: 5;
}

/* Header */
.fixed.top-header body {
  padding-top: 2em;
}
.fixed.bottom-header body {
  padding-bottom: 2em;
}
.fixed #header-bar {
  right: 0;
  left: 0;
  padding: 3px 4px 4px;
  font-size: 12px;
}
.fixed.top-header #header-bar {
  top: 0;
}
.fixed.bottom-header #header-bar {
  bottom: 0;
}
#header-bar {
  border-width: 0;
  transition: all .1s .05s ease-in-out;
}
:root.fixed #header-bar {
  box-shadow: -5px 1px 10px rgba(0, 0, 0, 0.20);
}
:root.centered-links #shortcuts {
  width: 300px;
  text-align: right;
}
:root.centered-links #header-bar {
  text-align: center;
}
#custom-board-list {
  font-size: 13px;
  vertical-align: middle;
}
#full-board-list {
  vertical-align: middle;
}
:root.centered-links #custom-board-list {
  position: relative;
  left: 150px;
}
.fixed.top-header #header-bar {
  border-bottom-width: 1px;
}
.fixed.bottom-header #header-bar {
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .15);
  border-top-width: 1px;
}
.fixed.bottom-header #header-bar .menu-button i {
  border-top: none;
  border-bottom: 6px solid;
}
.fixed #header-bar.autohide:not(:hover) {
  box-shadow: none;
  transition: all .8s .6s cubic-bezier(.55, .055, .675, .19);
}
.fixed.top-header #header-bar.autohide:not(:hover) {
  margin-bottom: -1em;
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
.fixed.bottom-header #header-bar.autohide:not(:hover) {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
#scroll-marker {
  left: 0;
  right: 0;
  height: 10px;
  position: absolute;
}
#header-bar:not(.autohide) #scroll-marker {
  pointer-events: none;
}
#header-bar #scroll-marker {
  display: none;
}
.fixed #header-bar #scroll-marker {
  display: block;
}
.fixed.top-header #header-bar #scroll-marker {
  top: 100%;
}
.fixed.bottom-header #header-bar #scroll-marker {
  bottom: 100%;
}
#board-list a, #shortcuts a:not(.entry) {
  text-decoration: none;
  padding: 1px;
}
#shortcuts:empty {
  display: none;
}
.brackets-wrap::before {
  content: "\\00a0[";
}
.brackets-wrap::after {
  content: "]\\00a0";
}
.dead-thread,
.disabled:not(.replies-quoting-you) {
  opacity: .45;
}
#shortcuts {
  float: right;
}
:root.autohiding-scrollbar #shortcuts {
  margin-right: 12px;
}
.shortcut {
  margin-left: 3px;
  vertical-align: middle;
}
:root.shortcut-icons .native-settings {
  font-size: 0;
  color: transparent;
  display: inline-block;
  vertical-align: top;
  height: 12px;
  width: 14px;
  background: url('//s.4cdn.org/image/favicon.ico') 0px -1px no-repeat;
}
#navbotright,
#navtopright {
  display: none;
}
#toggleMsgBtn {
  display: none !important;
}
.current,
:root.sw-yotsuba div#boardNavDesktopFoot a.current {
  font-weight: bold;
}
@media (min-width: 1300px) {
  :root.sw-yotsuba.fixed:not(.centered-links) #header-bar {
    white-space: nowrap;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #board-list {
    -webkit-flex: auto;
    flex: auto;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list {
    display: -webkit-flex;
    display: flex;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) .hide-board-list-container {
    -webkit-flex: none;
    flex: none;
    margin-right: 5px;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList {
    -webkit-flex: auto;
    flex: auto;
    display: -webkit-flex;
    display: flex;
    width: 0px; /* XXX Fixes Edge not shrinking the board list below default size when needed */
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > a,
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span:not(.space):not(.spacer) {
    -webkit-flex: none;
    flex: none;
    padding: .17em;
    margin: -.17em -.32em;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span {
    pointer-events: none;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span.space {
    -webkit-flex: 0 .63 .63em;
    flex: 0 .63 .63em;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #full-board-list > .boardList > span.spacer {
    -webkit-flex: 0 .38 .38em;
    flex: 0 .38 .38em;
  }
  :root.sw-yotsuba.fixed:not(.centered-links) #shortcuts {
    float: initial;
    -webkit-flex: none;
    flex: none;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }
}
/* 4chan X link brackets */
.brackets-wrap::before {
  content: "[";
}
.brackets-wrap::after {
  content: "]";
}
/* Notifications */
#notifications {
  position: fixed;
  top: 0;
  height: 0;
  text-align: center;
  right: 0;
  left: 0;
  visibility: visible;
}
#notifications:empty {
  display: none;
}
:root.fixed.top-header:not(.gallery-open) #header-bar #notifications,
:root.fixed.top-header #header-bar.autohide #notifications {
  position: absolute;
  top: 100%;
}
.notification {
  color: #FFF;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
  border-radius: 2px;
  margin: 1px auto;
  width: 550px;
  max-width: 100%;
  position: relative;
  transition: all .25s ease-in-out;
}
.notification.error {
  background-color: hsla(0, 100%, 38%, .9);
}
.notification.warning {
  background-color: hsla(36, 100%, 38%, .9);
}
.notification.info {
  background-color: hsla(200, 100%, 38%, .9);
}
.notification.success {
  background-color: hsla(104, 100%, 38%, .9);
}
.notification a {
  color: white;
}
.notification > .close {
  padding: 7px;
  top: 0px;
  right: 5px;
  position: absolute;
}
.notification > .fa-times::before {
  font-size: 11px !important;
}
.message {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 6px 20px;
  max-height: 200px;
  width: 100%;
  overflow: auto;
  white-space: pre-line;
}
.message a {
  text-decoration: underline;
}
:root.tainted .report-error {
  display: none;
}

/* Settings */
:root.fourchan-x body {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#overlay {
  background-color: rgba(0, 0, 0, .5);
  display: -webkit-flex;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
#fourchanx-settings {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  box-shadow: 0 0 15px rgba(0, 0, 0, .15);
  height: 600px;
  max-height: 100%;
  width: 900px;
  max-width: 100%;
  margin: auto;
  padding: 5px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}
#fourchanx-settings > nav {
  padding: 2px 2px 8px;
  display: -webkit-flex;
  display: flex;
}
#fourchanx-settings > nav a {
  text-decoration: underline;
}
#fourchanx-settings > nav a.close {
  text-decoration: none;
  padding: 0 2px;
  margin: 0;
}
.section-container {
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  overflow: auto;
  padding-right: 5px;
  overscroll-behavior: contain;
}
.sections-list {
  -webkit-flex: 1;
  flex: 1;
}
.export, .import, .reset {
  cursor: pointer;
  text-decoration: none !important;
}
.tab-selected {
  font-weight: 700;
}
.section-sauce ul,
.section-advanced ul {
  list-style: none;
  margin: 0;
}
.section-sauce ul {
  padding: 8px;
}
.section-advanced ul {
  padding: 0px;
}
.section-sauce li,
.section-advanced li {
  padding-left: 4px;
}
.section-main ul {
  margin: 0;
  padding: 0 0 0 16px;
}
.section-main li {
  white-space: pre-line;
  list-style: disc;
}
.section-main li:not(:first-of-type) {
  margin-top: 4px;
}
.section-main label {
  text-decoration: underline;
}
div[data-checked="false"] > .suboption-list {
  display: none;
}
.suboption-list {
  position: relative;
}
.suboption-list::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: .7em;
  width: 0;
  height: 100%;
  border-left: 1px solid;
}
.suboption-list > div {
  position: relative;
  padding-left: 1.4em;
}
.suboption-list > div::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: .7em;
  width: .7em;
  height: .6em;
  border-left: 1px solid;
  border-bottom: 1px solid;
}
#fourchanx-settings .section-main p {
  margin: .5em 0 0;
}
.section-filter ul {
  padding: 0;
}
.section-filter li {
  margin: 10px 40px;
  list-style: disc;
}
.section-filter textarea {
  height: 500px;
}
.section-main a, .section-filter a, .section-advanced a {
  text-decoration: underline;
}
#sauce-doc-expand:not(:checked) ~ #sauce-doc {
  max-height: 130px;
  overflow: auto;
}
#sauce-doc > label {
  float: right;
  margin: 0 5px;
}
/* XXX for OneeChan */
#sauce-doc-expand + .riceCheck {
  display: none;
}
.section-sauce textarea {
  height: 430px;
}
.section-advanced .field[name="boardnav"] {
  width: 100%;
}
.section-advanced textarea {
  height: 150px;
}
.section-advanced textarea[name="archiveLists"],
.section-advanced textarea[name="externalCatalogURLs"],
.section-advanced textarea[name="knownBanners"] {
  height: 75px;
}
.section-advanced .archive-cell {
  min-width: 160px;
  text-align: center;
}
.section-advanced #archive-board-select {
  position: absolute;
}
.section-advanced .note {
  font-size: 0.8em;
  font-style: italic;
  margin-left: 10px;
}
.section-advanced .note code {
  font-style: normal;
  font-size: 11px;
}
.favicon-preview > img {
    vertical-align: middle;
}
.favicon-preview > img:nth-of-type(3n+1) {
    margin-left: 4px;
}
.section-keybinds .field {
  font-family: monospace;
}
#fourchanx-settings fieldset {
  border: 1px solid;
  border-radius: 3px;
  padding: 0.35em 0.625em 0.75em;
  margin: 0px 2px;
}
#fourchanx-settings legend {
  font-weight: 700;
  color: inherit;
}
#fourchanx-settings textarea {
  font-family: monospace;
  width: 100%;
  resize: vertical;
}
#fourchanx-settings code {
  color: #000;
  background-color: #FFF;
  padding: 0 2px;
}
#fourchanx-settings th {
  text-align: center;
  font-weight: bold;
}
#fourchanx-settings p {
  margin: 1em 0px;
}
#fourchanx-settings table {
  margin: auto;
}

/* Index */
:root.index-loading .navLinks:not(.json-index),
:root.index-loading .board:not(.json-index),
:root.index-loading .pagelist:not(.json-index),
:root.infinite-mode .pagelist,
:root.all-pages-mode .pagelist,
:root.catalog-mode .pagelist,
:root:not(.catalog-mode) .indexlink,
:root.catalog-mode .cataloglink,
:root:not(.catalog-mode) #hidden-label,
:root:not(.catalog-mode) #index-size {
  display: none;
}
#index-search {
  padding-right: 1.5em;
  width: 100px;
  transition: color .25s, border-color .25s, width .25s;
}
#index-search:focus,
#index-search[data-searching] {
  width: 200px;
}
#index-search-clear {
  color: gray;
  display: inline-block;
  position: relative;
  left: -1em;
  width: 0;
}
/* \`\`::-webkit-*'' selectors break selector lists on Firefox. */
#index-search::-webkit-search-cancel-button {
  display: none;
}
#index-search:not([data-searching]) + #index-search-clear {
  display: none;
}
#index-options {
  float: right;
}
#lastlong-options {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  margin: -14px 0;
}
#lastlong-options > input {
  padding: 0;
  border: 0 !important;
  text-align: center;
  background: transparent;
  display: block;
  font-size: 12px;
  height: 12px;
  width: 30px;
  margin: 1px 0;
}
.summary {
  text-decoration: none;
}

/* Catalog */
:root.catalog-mode .board {
  text-align: center;
}
.catalog-thread {
  display: inline-block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid transparent;
  word-wrap: break-word;
  vertical-align: top;
  position: relative;
}
/* overrides 4chan CSS on div.thread */
.catalog-thread.catalog-thread {
  margin: 2px;
}
.catalog-small > .catalog-thread {
  width: 165px;
  height: 320px;
}
.catalog-large > .catalog-thread {
  width: 270px;
  height: 410px;
}
:root.catalog-hover-expand .catalog-thread:hover {
  z-index: 1;
}
.catalog-container {
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  bottom: 0;
}
.catalog-container:not(:hover),
:root:not(.catalog-hover-expand) .catalog-container {
  overflow: hidden;
}
.catalog-post {
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  border: 1px solid transparent;
  padding-top: 20px;
}
/* overrides inline CSS from Index.cb.hoverAdjust */
:root:not(.catalog-hover-expand) .catalog-post {
  left: 0 !important;
  right: 0 !important;
}
/* overrides 4chan CSS on div.post */
.catalog-post.catalog-post {
  margin: -21px -1px -1px;
  overflow: visible;
}
.catalog-thread.noFile > * > .catalog-post {
  margin-top: -7px;
  padding-top: 6px;
}
:root.catalog-hover-expand .catalog-container:hover > .catalog-post {
  margin-left: -61px;
  margin-right: -61px;
}
:root.catalog-hover-expand .catalog-container:hover > * > :not(.catalog-replies) {
  padding-left: 2px;
  padding-right: 2px;
}
.catalog-link {
  display: block;
  position: relative;
}
.catalog-thumb {
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  vertical-align: top;
}
.catalog-thumb.spoiler-file {
  width: 100px;
  height: 100px;
}
.catalog-thumb.deleted-file {
  width: 127px;
  height: 13px;
  padding: 20px 11px;
}
.catalog-thumb.no-file {
  width: 77px;
  height: 13px;
  padding: 20px 36px;
}
.catalog-icons > img,
.catalog-stats > .menu-button {
  width: 1em;
  height: 1em;
  margin: 0;
  vertical-align: text-top;
  padding-left: 2px;
}
.catalog-stats > .menu-button {
  font-weight: normal;
}
.catalog-stats > .menu-button > i::before {
  line-height: 11px;
}
.catalog-stats {
  font-size: 10px;
  font-weight: 700;
  padding-top: 2px;
}
.catalog-stats > [title] {
  cursor: help;
}
.catalog-post > .postMessage {
  margin: 0;
  padding-bottom: .3em;
}
.catalog-container:not(:hover) > * > .file,
.catalog-container:not(:hover) > * > .postInfo > :not(.subject),
.catalog-container:not(:hover) > * > .catalog-replies,
.catalog-container:not(:hover) .extra-linebreak,
.catalog-container:not(:hover) .abbr,
:root:not(.catalog-hover-expand) .catalog-container > * > .file,
:root:not(.catalog-hover-expand) .catalog-container > * > .postInfo > :not(.subject),
:root:not(.catalog-hover-expand) .catalog-container > * > .catalog-replies,
:root:not(.catalog-hover-expand) .catalog-container .extra-linebreak,
:root:not(.catalog-hover-expand) .catalog-container .abbr,
.catalog-thread > .catalog-container > :not(.catalog-post),
.catalog-post > .file > :not(.fileText),
.catalog-post > * > .fileText > :not(:first-child),
.catalog-post > .postInfo > :not(.subject):not(.nameBlock):not(.dateTime),
.catalog-post > .postInfo > .nameBlock > .contact-links,
.catalog-post > * > * > .posteruid,
.catalog-post > * > * > .postJumper,
:root.bottom-backlinks .catalog-post > .container,
.post:not(.catalog-post) > .catalog-link,
.post:not(.catalog-post) > .catalog-stats,
.post:not(.catalog-post) > .catalog-replies {
  display: none;
}
.catalog-post > .file {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 20px;
  background-color: inherit;
}
.catalog-post > * > .fileText {
  position: relative;
  padding: 2px;
  background-color: inherit;
}
.catalog-small .catalog-post > * .fileText {
  font-size: 10px;
}
.catalog-post > * > .fileText:not(:hover) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog-post > * > .fileText:hover {
  z-index: 1;
}
/* overrides 4chan CSS on div.post div.postInfo */
.catalog-post > .postInfo.postInfo {
  width: auto;
}
.catalog-post > * > .subject {
  display: block;
}
.catalog-post > * > .dateTime {
  display: inline-block;
  font-style: italic;
}
:root.catalog-hover-expand .catalog-container:hover > * > * > .nameBlock,
:root.catalog-hover-expand .catalog-container:hover > * > * > .dateTime,
:root.catalog-hover-expand .catalog-container:hover > * > .postMessage:not(:empty) {
  padding-top: .3em;
}
.catalog-post .extra-linebreak {
  content: ''; /* makes this work in Blink/WebKit */
  display: block;
  margin-top: .3em;
}
.catalog-reply {
  text-align: left;
  white-space: nowrap;
  border-top: 1px solid transparent;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: stretch;
  align-items: stretch;
}
.catalog-reply > * {
  padding: 3px;
  overflow: hidden;
  -webkit-flex: none;
  flex: none;
}
.catalog-reply > span {
  font-style: italic;
  font-weight: bold;
}
.catalog-reply-excerpt {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}
.catalog-post .prettyprinted {
  max-width: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.catalog-post .MathJax_Display {
  text-align: center !important;
}
.catalog-container:not(:hover) .exif,
:root:not(.catalog-hover-expand) .catalog-container .exif {
  display: none !important;
}
.catalog-post > * > .exif {
  border-collapse: collapse;
}
:root.catalog-hover-expand .catalog-container:hover .exif[style*="display: block;"] {
  display: inline-block !important;
}
.catalog-post > * > .exif,
.catalog-post > * > .exif > tbody {
  background-color: inherit;
}
.catalog-post > * > .exif,
.catalog-post > * > .exif td {
  min-width: 0;
}
.catalog-post > * > .exif td {
  padding-top: 1px;
}
:root.hats-enabled .catalog-thread::after {
  content: '';
  pointer-events: none;
  position: absolute;
  background-size: contain;
}
:root.hats-enabled .catalog-small > .catalog-thread::after {
  left: -8px;
  top: -59px;
  width: 96px;
  height: 96px;
}
:root.hats-enabled:not(.werkTyme) .catalog-small > .catalog-thread:not(.noFile)::after {
  left: calc(67px - .3px * var(--tn-w));
}
:root.hats-enabled .catalog-large > .catalog-thread::after {
  left: -15px;
  top: -98px;
  width: 160px;
  height: 160px;
}
:root.hats-enabled:not(.werkTyme) .catalog-large > .catalog-thread:not(.noFile)::after {
  left: calc(110px - .5px * var(--tn-w));
}

/* Copy Text Link's textarea element */
textarea.copy-text-element {
  height: 0;
  width: 0;
  position: absolute;
  top: -10000px;
}

/* Announcement Hiding */
:root.hide-announcement $site$psa {
  display: none;
}
.hide-announcement-button {
  opacity: 0.4;
  float: left;
}

/* Unread */
.unread-line {
  margin: 0;
  border-color: rgb(255,0,0);
}
.unread-line + br {
  display: none;
}
.unread-mark-read {
  float: right;
  clear: both;
  width: 100%;
  text-align: right;
}
:not(.unread-thread) > .unread-mark-read {
  display: none;
}

/* Thread Updater */
#updater {
  background: none;
  border: none;
  box-shadow: none;
}
#updater > .move {
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  z-index: -1;
}
#updater > div:last-child {
  text-align: center;
}
#updater input[type="number"] {
  width: 4em;
}
:root.float #updater {
  padding: 0px 3px;
}
:root:not(.float).shortcut-icons #updater {
  display: inline-block;
  min-width: 12pt;
  text-align: right;
}
.new {
  color: limegreen;
}
#update-status:not(.empty) + #update-timer:not(.empty):not(.loading) {
  margin-left: 5px;
}
#update-timer {
  cursor: pointer;
}

/* Thread Watcher */
#thread-watcher {
  position: absolute;
}
#thread-watcher {
  padding-bottom: 3px;
  padding-left: 3px;
  white-space: nowrap;
  min-width: 146px;
}
#watched-threads {
  overflow-x: hidden;
  overflow-y: auto;
}
#thread-watcher .refresh {
  padding: 0px 3px;
}
:root.fixed-watcher #thread-watcher {
  position: fixed;
}
:root.fixed-watcher #watched-threads {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 85vh;
  max-height: calc(100vh - 75px);
}
:root:not(.fixed-watcher) #watched-threads:not(:hover) {
  max-height: 210px;
  overflow-y: hidden;
}
#thread-watcher > .move {
  padding-top: 3px;
}
#watched-threads > div {
  padding-left: 3px;
  padding-right: 3px;
}
#watched-threads .watcher-link {
  max-width: 250px;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
#watched-threads .watcher-page,
#watched-threads .watcher-unread {
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-right: 2px;
}
#watched-threads .watcher-title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-flex: 0 1 auto;
  flex: 0 1 auto;
}
#watched-threads .watcher-title:not(:first-child) {
  margin-left: 2px;
}
.replies-quoting-you > a, #watcher-link.replies-quoting-you, .last-page > a > .watcher-page {
  color: #F00;
}
#thread-watcher a {
  text-decoration: none;
}
#thread-watcher .move > .close {
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 0px 4px;
}
.watch-thread-link {
  padding-top: 18px;
  width: 18px;
  height: 0px;
  display: inline-block;
  background-repeat: no-repeat;
  opacity: 0.2;
  position: relative;
  top: 1px;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(0,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
.watch-thread-link.watched {
  opacity: 1;
}


/* Thread Stats */
#thread-stats {
  background: none;
  border: none;
  box-shadow: none;
}
:root.float #thread-stats > .move > :not(#page-count) {
  pointer-events: none;
}
:root.float #thread-stats {
  padding: 0px 3px;
}
#page-count {
  cursor: pointer;
}

/* Quote */
.hashlink::before {
  content: ' ';
  visibility: hidden;
}
.inline + .hashlink {
  display: none !important;
}
:root.resurrect-quotes .deadlink {
  text-decoration: none !important;
}
.catalog-post .qmark-ct {
  display: none;
}
.backlink.deadlink:not(.forwardlink),
.quotelink.deadlink:not(.forwardlink) {
  text-decoration: underline !important;
}
:root:not(.catalog-mode) .inlined {
  opacity: .5;
}
#qp input, .forwarded {
  display: none;
}
.quotelink.forwardlink,
.backlink.forwardlink {
  text-decoration: none;
  border-bottom: 1px dashed;
}
.filtered {
  text-decoration: underline line-through;
}
:root.hide-backlinks .backlink.filtered,
:root.hide-backlinks .backlink.filtered + .hashlink.filtered {
  display: none;
}
.postNum + .container::before {
  content: " ";
}
:root.bottom-backlinks .container {
  display: block;
  clear: both;
  margin: 0 4px;
}
:root.bottom-backlinks .backlink {
  font-size: 90%;
}
.inline {
  border: 1px solid;
  display: table;
  margin: 2px 0;
}
.container ~ .inline {
  margin-left: 20px;
}
:root.catalog-mode .inline {
  display: none;
}
.inline .post {
  border: 0 !important;
  background-color: transparent !important;
  display: table !important;
  margin: 0 !important;
  padding: 1px 2px !important;
}
#qp > .opContainer::after {
  content: '';
  clear: both;
  display: table;
}
#qp .post {
  border: none;
  margin: 0;
  padding: 2px 2px 5px;
}
#qp img {
  max-height: 80vh;
  max-width: 50vw;
}

/* Quote Threading */
.threadContainer {
  margin-left: 20px;
  border-left: 1px solid rgba(128,128,128,.3);
}
.threadOP {
  clear: both;
}

/* File */
.expanded-image > .post > .file > .fileThumb {
  display: flex;
  flex-direction: column;
}
.fileText-original,
.fnswitch:hover > .fntrunc,
.fnswitch:not(:hover) > .fnfull,
.expanded-image > .post > .file > .fileThumb > video[data-md5],
.expanded-image > .post > .file > .fileThumb > img[data-md5] {
  display: none;
}
.full-image[data-file-i-d] {
  display: none;
  cursor: pointer;
}
.expanded-image > .post > .file > .fileThumb > .full-image {
  display: inline;
}
.expanded-image > .post > .file > .fileThumb > audio {
  height: 30px;
  width: 100%;
  min-width: 300px;
}
.expanded-image {
  clear: left;
}
.expanding {
  opacity: .5;
}
:root.fit-height .full-image {
  max-height: 100vh;
}
:root.fit-height.fixed .full-image {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 93vh;
  max-height: calc(100vh - 35px);
}
:root.fit-width .full-image {
  max-width: 100%;
}
:root.ua-gecko.fit-width .full-image {
  width: 100%;
}
.fileThumb > .warning {
  clear: both;
}
#ihover {
  pointer-events: none;
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 95vh;
  max-height: calc(100vh - 25px);
  max-width: 100vw;
}
/* WEBM Metadata */
.webm-title > a::before {
  content: "title";
  text-decoration: underline;
}
.webm-title.loading > a::after {
  content: "...";
}
.webm-title.error > a:hover::before,
.webm-title.error > a:focus::before {
  content: "error";
  text-decoration: none;
}
.webm-title > span {
  cursor: text;
}
.webm-title.not-found > span::before {
  content: "not found";
}
.webm-title:not(:hover):not(:focus) > span,
.webm-title:hover > span + a,
.webm-title:focus > span + a {
  display: none;
}
/* Volume control */
input[name="Default Volume"] {
  width: 4em;
  height: 1ex;
  vertical-align: middle;
  margin: 0px;
}
/* Fappe and Werk Tyme */
:root.fappeTyme $site$replyOriginal.noFile,
:root.fappeTyme $site$replyOriginal.noFile + br {
  display: none;
}
:root.werkTyme $site$thumbLink,
:root.werkTyme $site$file$thumb,
:root.werkTyme .catalog-thumb:not(.deleted-file):not(.no-file),
:root:not(.werkTyme) .werkTyme-filename {
  display: none;
}
.werkTyme-filename {
  font-weight: bold;
  font-size: 110%;
}
:root.werkTyme .catalog-link {
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  padding: 8px;
  text-align: center;
}
:root.werkTyme .catalog-thumb {
  box-shadow: none;
  padding: 0;
  vertical-align: middle;
}
.indicator {
  background: rgba(255,0,0,0.8);
  font-weight: bold;
  display: inline-block;
  min-width: 9px;
  padding: 0px 2px;
  margin: 0 1px;
  text-align: center;
  color: white;
  border-radius: 2px;
  cursor: pointer;
}
:root:not(.fappeTyme) #shortcut-fappe,
:root:not(.werkTyme) #shortcut-werk {
  display: none;
}

/* Index/Reply Navigation */
#navlinks {
  font-size: 16px;
  top: 25px;
  right: 10px;
}
:root.catalog-mode #navlinks {
  display: none;
}

/* Highlighting */
.qphl {
  outline: 2px solid rgba(216, 94, 49, .8);
}
:root.highlight-you .quotesYou$site$highlightable$op,
:root.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8);
}
:root.highlight-own .yourPost$site$highlightable$op,
:root.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8);
}
.filter-highlight$site$highlightable$op,
.filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 rgba(221, 0, 0, .5);
}
:root.highlight-own .yourPost > $site$sideArrows,
:root.highlight-you .quotesYou > $site$sideArrows,
.filter-highlight > $site$sideArrows {
  color: rgba(221, 0, 0, .8);
}
:root.highlight-own .yourPost$site$highlightable$op::after,
:root.highlight-you .quotesYou$site$highlightable$op::after,
.filter-highlight$site$highlightable$op::after {
  content: "";
  display: block;
  clear: both;
}
:root:not(.werkTyme) .catalog-thread.filter-highlight .catalog-thumb,
:root.werkTyme .catalog-thread.filter-highlight:not(:hover),
:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,
:root.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight > .catalog-container:hover > .catalog-post,
:root.catalog $site$catalog$thread.filter-highlight$site$highlightable$catalog {
  box-shadow: 0 0 3px 3px rgba(255, 0, 0, .5);
}
:root:not(.werkTyme) .catalog-thread.watched .catalog-thumb,
:root:root.werkTyme .catalog-thread.watched:not(:hover),
:root:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,
:root.werkTyme.catalog-hover-expand .catalog-thread.watched > .catalog-container:hover > .catalog-post {
  border: 2px solid rgba(255, 0, 0, .75);
}

/* Spoiler text */
:root.reveal-spoilers $site$spoiler,
:root.reveal-spoilers $site$spoiler > a {
  color: white !important;
}
:root.reveal-spoilers .removed-spoiler::before {
  content: "[spoiler]";
}
:root.reveal-spoilers .removed-spoiler::after {
  content: "[/spoiler]";
}

/* Thread & Reply Hiding */
.hide-thread-button,
.hide-reply-button {
  float: left;
  margin-right: 4px;
  padding: 2px;
}
$site$infoRoot a.hide-reply-button {
  margin-right: 6px;
  padding: 0;
}
.replacedSideArrows {
  float: left;
}
.hide-thread-button:not(:hover),
.hide-reply-button:not(:hover) {
  opacity: 0.4;
}
.threadContainer .hide-reply-button {
  margin-left: 2px !important;
  position: relative;
  left: 1px;
}
.hide-thread-button {
  margin-top: -1px;
  width: 11px;
}
.stub ~ :not(.threadDivider) {
  display: none !important;
}
.stub input {
  display: inline-block;
}
$site$thread[hidden] + hr {
  display: none;
}
:root.reply-hide $site$sideArrows {
  display: none;
}
:root.sw-yotsuba.thread-hide .party-hat {
  left: 19px;
}

/* Anonymize */
:root.anonymize $site$info$name,
:root.sw-yotsuba.anonymize .post-author:not([class*=capcode]) {
  font-size: 0;
}
:root.anonymize $site$info$tripcode,
:root.sw-yotsuba.anonymize .n-pu {
  display: none;
}
:root.anonymize $site$info$name::before,
:root.sw-yotsuba.anonymize .post-author:not([class*=capcode])::before {
  content: "Anonymous";
  font-size: 10pt;
}
:root.sw-yotsuba.anonymize .flashListing .name::before,
:root.sw-yotsuba.anonymize .post-last > .post-author:not([class*=capcode])::before {
  font-size: 9pt;
}

/* QR */
:root.hide-original-post-form #togglePostFormLink,
#qr.autohide:not(.focus):not(:hover):not(:active) > form,
:root.thread-view #qr:not(.show-new-thread-option) select[data-name="thread"],
#file-n-submit:not(.has-file) #qr-filerm {
  display: none;
}
:root.hide-original-post-form #postForm {
  display: none !important;
}
#qr select,
#qr-filename-container > a,
.remove,
.captcha-img {
  cursor: pointer;
}
#qr {
  position: fixed;
  padding: 1px;
  border: 1px solid transparent;
  min-width: 300px;
  border-radius: 3px 3px 0 0;
}
#qr > form {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 85vh;
  max-height: calc(100vh - 75px);
  overflow-y: auto;
  overflow-x: hidden;
}
#qrtab {
  border-radius: 3px 3px 0 0;
}
#qrtab {
  margin-bottom: 1px;
}
#qr .close {
  float: right;
  padding: 0 3px;
}
.qr-link-container {
  text-align: center;
  margin: 16px 0;
}
.qr-link-container-bottom {
  width: 200px;
  position: absolute;
  left: -100px;
  margin-left: 50%;
  text-align: center;
}
.qr-link {
  border-radius: 3px;
  padding: 6px 10px 5px;
  font-weight: bold;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  font-size: 10pt;
}
.qr-link-container + #togglePostFormLink {
  font-size: 10pt;
  font-weight: normal;
  margin: -8px 0 3.5px;
}
.persona {
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.persona .field {
  -webkit-flex: 1;
  flex: 1;
  width: 0;
}
#qr.forced-anon input[data-name="name"]:not(.force-show),
#qr.forced-anon input[data-name="sub"]:not(.force-show),
#qr.reply-to-thread input[data-name="sub"]:not(.force-show),
body:not(.board_f) #qr select[name="filetag"],
#qr.reply-to-thread select[name="filetag"],
#qr:not(.has-sjis) #sjis-toggle,
#qr:not(.has-math) #tex-preview-button,
#qr.tex-preview .textarea > :not(#tex-preview),
#qr:not(.tex-preview) #tex-preview {
  display: none;
}
.persona button {
  -webkit-flex: 0 0 23px;
  flex: 0 0 23px;
  -webkit-align-self: stretch;
  align-self: stretch;
  border: 1px solid #BBB;
  padding: 0;
  background: linear-gradient(to bottom, #F8F8F8, #DCDCDC) no-repeat;
  color: #000;
}
#qr.sjis-preview #sjis-toggle, #qr.tex-preview #tex-preview-button {
  background: #DCDCDC;
}
#sjis-toggle, #qr.sjis-preview textarea.field {
  font-family: "IPAMonaPGothic","Mona","MS PGothic",monospace;
  font-size: 16px;
  line-height: 17px;
}
#tex-preview-button {
  font-size: 10px;
}
#tex-preview {
  white-space: pre-line;
}
#qr textarea.field {
  height: 14.8em;
  min-height: 9em;
}
#qr.has-captcha textarea.field {
  height: 9em;
}
input.field.tripped:not(:hover):not(:focus) {
  color: transparent !important;
  text-shadow: none !important;
}
#qr textarea {
  min-width: 300px;
  resize: both;
}
.field {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0px;
  padding: 2px 4px 3px;
}
#qr label input[type="checkbox"] {
  position: relative;
  top: 2px;
}

/* Recaptcha v2 */
#qr .captcha-root {
  position: relative;
}
#qr .captcha-container > div {
  margin: auto;
  width: 304px;
}
/* XXX scrollable with scroll bar hidden; prevents scroll on space press */
:root.ua-blink #qr .captcha-container > div,
:root.ua-edge #qr .captcha-container > div {
  overflow: hidden;
}
:root.ua-blink #qr .captcha-container > div > div:first-of-type,
:root.ua-edge #qr .captcha-container > div > div:first-of-type {
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 30px;
  height: 99%;
  width: 100%;
}
#qr .captcha-counter {
  display: block;
  width: 100%;
  text-align: center;
  pointer-events: none;
}
#qr.captcha-open .captcha-counter {
  position: absolute;
  bottom: 3px;
}
#qr .captcha-counter > a {
  pointer-events: auto;
  display: inline-block; /* XXX https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8851747/ */
}
#qr:not(.captcha-open) .captcha-counter > a {
  display: block;
  width: 100%;
}
#qr.captcha-v2 #qr-captcha-iframe {
  width: 302px;
  height: 423px;
  border: 0;
  display: block;
  margin: auto;
}
.goog-bubble-content {
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
}
.goog-bubble-content iframe {
  position: static !important;
}

/* File Input, Submit Button, Oekaki */
#file-n-submit, #qr .oekaki {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
  align-items: stretch;
  height: 25px;
  margin-top: 1px;
}
#file-n-submit > input, #qr-draw-button {
  background: linear-gradient(to bottom, #F8F8F8, #DCDCDC) no-repeat;
  border: 1px solid #BBB;
  border-radius: 2px;
  height: 100%;
}
#qr-file-button, #qr-draw-button {
  width: 15%;
}
#file-n-submit input[type="submit"] {
  width: 25%;
}
#qr-filename-container {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  padding: 1px;
}
input#qr-filename {
  border: none !important;
  background: none !important;
  outline: none;
}
#qr-filename,
.has-file #qr-no-file {
  display: none;
}
#qr-no-file,
.has-file #qr-filename {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0px; /* XXX Fixes filename not shrinking to allow space for buttons in Edge */
  display: inline-block;
  padding: 0;
  padding-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#qr-no-file {
  color: #AAA;
}
#qr .oekaki.has-file {
  display: none;
}
#qr .oekaki > label {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  height: 100%;
}
#qr .oekaki > label > span {
  margin: 0 3px;
}
#qr .oekaki > label > input {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 0;
  height: 100%;
}
#qr .oekaki-bg {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 10%;
  margin-left: 3px;
}
#qr .oekaki-bg > * {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}
#qr .oekaki-bg > :not([name="oekaki-bgcolor"]) {
  z-index: 1;
}
#qr [name="oekaki-bgcolor"] {
  height: 100%;
  width: 100%;
  border: none;
  padding: 0;
}
#qr [name="oekaki-bg"]:not(:checked) ~ [name="oekaki-bgcolor"] {
  visibility: hidden;
}
#qr input[type="file"] {
  visibility: hidden;
  position: absolute;
}

/* Spoiler Checkbox, QR Icons */
#qr-filename-container > label, #qr-filename-container > a {
  -webkit-flex: none;
  flex: none;
  margin: 0;
  margin-right: 3px;
}
#qr:not(.has-spoiler) #qr-spoiler-label,
#file-n-submit:not(.has-file) #qr-spoiler-label,
.has-file #paste-area,
.has-file #url-button,
#file-n-submit:not(.custom-cooldown) #custom-cooldown-button {
  display: none;
}
#qr-filename-container > label {
  position: relative;
}
#qr-filename-container input[type="checkbox"] {
  margin: 0;
}
.checkbox-letter {
  font-size: 13px;
  font-weight: bold;
}
#qr-filename-container label:not(:hover) > input[type="checkbox"]:not(:focus):not(:checked),
#qr-filename-container label:not(:hover) > input[type="checkbox"]:not(:focus):not(:checked) ~ :not(.checkbox-letter),
#qr-filename-container label:hover > .checkbox-letter,
input[type="checkbox"]:focus ~ .checkbox-letter,
input[type="checkbox"]:checked ~ .checkbox-letter {
  /* not displayed but still focusable */
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.checkbox-letter, #paste-area, #url-button, #custom-cooldown-button, #dump-button {
  opacity: 0.6;
}
#paste-area {
  font-size: 0;
}
#paste-area:focus {
  opacity: 1;
}
#custom-cooldown-button.disabled {
  opacity: 0.27;
}

/* Thread and Flash Tag Select */
#qr select {
  background: white;
  border: 1px solid #CCC;
}
#qr select[data-name="thread"] {
  float: right;
}
#qr > form > select {
  margin-top: 1px;
}

/* Dumping UI */
.dump #dump-list-container {
  display: block;
}
#dump-list-container {
  display: none;
  position: relative;
  overflow-y: hidden;
  margin-top: 1px;
}
#dump-list {
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  width: 248px;
  max-height: 248px;
  min-height: 90px;
  max-width: 100%;
  min-width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
#dump-list:hover {
  overflow-x: auto;
}
.qr-preview {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  counter-increment: thumbnails;
  cursor: move;
  display: inline-block;
  height: 90px;
  width: 90px;
  padding: 2px;
  opacity: .5;
  overflow: hidden;
  position: relative;
  text-shadow: 0 0 2px #000;
  -webkit-transition: opacity .25s ease-in-out, -webkit-transform .25s ease-in-out;
  transition: opacity .25s ease-in-out, transform .25s ease-in-out, -webkit-transform .25s ease-in-out;
  vertical-align: top;
  background-size: cover;
  -webkit-flex: none;
  flex: none;
}
.qr-preview:hover,
.qr-preview:focus {
  opacity: .9;
}
.qr-preview::before {
  content: counter(thumbnails);
  color: #fff;
  position: absolute;
  top: 3px;
  right: 3px;
  text-shadow: 0 0 3px #000, 0 0 8px #000;
}
.qr-preview#selected {
  opacity: 1;
}
.qr-preview.drag {
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  -webkit-transform: scale(.8);
  transform: scale(.8);
}
.qr-preview.over {
  border-color: #fff;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0.9;
  z-index: 10;
}
.qr-preview > span {
  color: #fff;
}
.remove {
  background: none;
  color: #e00;
  padding: 1px;
}
a:only-of-type > .remove {
  display: none;
}
.remove:hover::after {
  content: " Remove";
}
.qr-preview:not(.has-file) label,
#qr:not(.has-spoiler) .qr-preview-spoiler {
  display: none;
}
.qr-preview > label {
  background: rgba(0,0,0,.5);
  color: #fff;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  text-align: center;
}
.qr-preview > label > input {
  margin: 0;
}
#add-post {
  cursor: pointer;
  font-size: 2em;
  position: absolute;
  bottom: 20px;
  right: 10px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.textarea {
  position: relative;
  display: -webkit-flex;
  display: flex;
}
#char-count {
  color: #000;
  background: hsla(0, 0%, 100%, .5);
  font-size: 8pt;
  position: absolute;
  bottom: 1px;
  right: 1px;
  pointer-events: none;
}
#char-count.warning {
  color: red;
}

/* Menu */
.menu-button:not(.fa-bars) {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
#header-bar .menu-button i {
  border-top:   6px solid;
  border-right: 4px solid transparent;
  border-left:  4px solid transparent;
  display: inline-block;
  margin: 2px;
  vertical-align: middle;
}
.postInfo > .menu-button,
#thread-watcher .menu-button {
  width: 18px;
  height: 15px;
  text-align: center;
}
#menu {
  position: fixed;
  outline: none;
  font-weight: normal;
}
#menu, .submenu {
  border-radius: 3px;
  padding-top: 1px;
  padding-bottom: 3px;
}
.entry {
  cursor: pointer;
  display: block;
  outline: none;
  padding: 2px 10px;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  min-width: 70px;
  text-align: left;
  text-shadow: none;
  font-size: 10pt;
}
.left>.entry.has-submenu {
  padding-right: 17px !important;
}
.entry input[type="checkbox"],
.entry input[type="radio"] {
  margin: 0px;
  position: relative;
  top: 2px;
}
.entry input[type="number"] {
  width: 4.5em;
}
.entry.has-shortcut-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.entry .shortcut-text {
  opacity: 0.5;
  font-size: 70%;
  margin-left: 5px;
}
.has-submenu::after {
  content: "";
  border-left: .5em solid;
  border-top: .3em solid transparent;
  border-bottom: .3em solid transparent;
  display: inline-block;
  margin: .3em;
  position: absolute;
  right: 3px;
}
.left .has-submenu::after {
  border-left: 0;
  border-right: .5em solid;
}
.submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -1px;
  margin-left: 0px;
  margin-top: -2px;
}
.focused > .submenu {
  display: block;
}
.imp-exp-result {
  position: absolute;
  text-align: center;
  margin: auto;
  right: 0px;
  left: 0px;
  width: 200px;
}

/* Custom Board Titles */
.boardTitle, .boardSubtitle {
  white-space: pre-line;
}
.boardTitle[contenteditable="true"],
.boardSubtitle[contenteditable="true"] {
  cursor: text !important;
}

/* Embedding */
.embedder:not(.embedded) > span {
  display: none;
}
#embedding {
  padding: 1px 4px 1px 4px;
  position: fixed;
}
#embedding.empty {
  display: none;
}
#embedding > div:first-child {
  display: -webkit-flex;
  display: flex;
}
#embedding .move {
  -webkit-flex: 1;
  flex: 1;
}
#embedding .jump {
  margin: -1px 4px;
  text-decoration: none;
}

/* Gallery */
#a-gallery {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  background: rgba(0,0,0,0.7);
}
.gal-viewport {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: stretch;
  align-items: stretch;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
}
.gal-thumbnails {
  -webkit-flex: 0 0 150px;
  flex: 0 0 150px;
  overflow-y: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  align-items: stretch;
  text-align: center;
  background: rgba(0,0,0,.5);
  border-left: 1px solid #222;
}
.gal-hide-thumbnails .gal-thumbnails {
  display: none;
}
.gal-thumb img,
.gal-thumb video {
  max-width: 125px;
  max-height: 125px;
  height: auto;
  width: auto;
}
.gal-thumb {
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 3px;
  line-height: 0;
  transition: background .2s linear;
}
.gal-highlight {
  background: rgba(0, 190, 255,.8);
}
.gal-prev {
  border-right: 1px solid #222;
}
.gal-next {
  border-left: 1px solid #222;
}
.gal-prev,
.gal-next {
  -webkit-flex: 0 0 20px;
  flex: 0 0 20px;
  position: relative;
  cursor: pointer;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.3);
}
.gal-prev:hover,
.gal-next:hover {
  opacity: 1;
}
.gal-prev::after,
.gal-next::after {
  position: absolute;
  top: 48.6%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  display: inline-block;
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;
  content: "";
}
.gal-prev::after {
  border-right: 12px solid #fff;
  right: 5px;
}
.gal-next::after {
  border-left: 12px solid #fff;
  right: 3px;
}
.gal-image {
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  overflow: hidden;
  /* Flex > Non-Flex child max-width and overflow fix (Firefox only?) */
  width: 1%;
}
:root:not(.gal-fit-height):not(.gal-pdf) .gal-image {
  overflow-y: scroll !important;
}
:root:not(.gal-fit-width):not(.gal-pdf) .gal-image {
  overflow-x: scroll !important;
}
.gal-image a {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  margin: auto;
  line-height: 0;
  max-width: 100%;
}
:root.gal-pdf .gal-image a {
  width: 100%;
  height: 100%;
}
.gal-image img,
.gal-image video {
  -webkit-flex: none;
  flex: none;
}
.gal-fit-width .gal-image img,
.gal-fit-width .gal-image video {
  max-width: 100%;
}
.gal-fit-height .gal-image img,
.gal-fit-height .gal-image video {
  /* XXX https://code.google.com/p/chromium/issues/detail?id=168840, https://bugs.webkit.org/show_bug.cgi?id=94158 */
  max-height: 95vh;
  max-height: calc(100vh - 25px);
}
.gal-image iframe {
  width: 100%;
  height: 100%;
}
.gal-buttons {
  font-size: 2em;
  margin-right: 3px;
  padding-left: 7px;
  padding-right: 7px;
  top: 5px;
}
:root.gal-pdf .gal-buttons {
  top: 40px;
  background: rgba(0,0,0,0.6) !important;
  border-radius: 3px;
}
.gal-buttons a {
  color: #ffffff;
  text-shadow: 0px 0px 1px #000000;
}
.gal-buttons i {
  display: inline-block;
  margin: 2px;
  position: relative;
}
.gal-start i {
  border-left:   10px solid;
  border-top:    6px solid transparent;
  border-bottom: 6px solid transparent;
  bottom: 1px;
}
.gal-stop i {
  border: 5px solid;
  bottom: 2px;
}
.gal-buttons.gal-playing > .gal-start,
.gal-buttons:not(.gal-playing) > .gal-stop {
  display: none;
}
.gal-buttons .menu-button i {
  border-top:   10px solid;
  border-right:  6px solid transparent;
  border-left:   6px solid transparent;
  bottom: 2px;
  vertical-align: baseline;
}
.gal-labels {
  position: fixed;
  bottom: 6px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: flex-end;
  align-items: flex-end;

}
:root:not(.show-sauce) .gal-sauce {
  display: none;
}
.gal-name,
.gal-count,
.gal-sauce {
  background: rgba(0,0,0,0.6) !important;
  border-radius: 3px;
  padding: 1px 5px 2px 5px;
  margin-top: 3px;
  color: #ffffff !important;
  text-decoration: none !important;
}
.gal-sauce a {
  color: #ffffff !important;
}
.gal-name:hover,
.gal-buttons a:hover,
.gal-sauce a:hover {
  color: rgb(95, 95, 101) !important;
}
:root.gal-pdf .gal-buttons a:hover {
  color: rgb(204, 204, 204) !important;
}
.gal-buttons,
.gal-labels {
  position: fixed;
  right: 195px;
}
.gal-hide-thumbnails .gal-buttons,
.gal-hide-thumbnails .gal-labels {
  right: 44px;
}
:root:not(.gal-fit-width):not(.gal-pdf) .gal-labels {
  bottom: 23px !important;
}
:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-buttons,
:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-labels {
  right: 178px !important;
}
:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-buttons,
:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-labels {
  right: 28px !important;
}
:root.gallery-open.fixed #header-bar:not(.autohide),
:root.gallery-open.fixed #header-bar:not(.autohide) #shortcuts .fa::before {
  visibility: hidden;
}

/* Mod Contact Links */
.contact-links {
  margin-left: 2px;
}
.move-note > a {
  text-decoration: underline;
}
.invisible {
  font-size: 0;
}

/* PostJumper */
.postJumper > .prev,
.postJumper > .next {
  font-size: 120%;
}

/* PSA */
.fcx-announcement {
  text-align: center;
}
.fcx-announcement a {
  text-decoration: underline;
}

@keyframes spin {
  0% {transform:rotate(0deg);}
  100% {transform:rotate(359deg);}
}

.spin {
  animation:spin 2s infinite linear;
}
`;

  var supports = `/* XXX Moved to end of stylesheet to avoid breaking whole stylesheet in Maxthon. */
@supports (text-decoration-style: dashed) or (-moz-text-decoration-style: dashed) {
  .quotelink.forwardlink,
  .backlink.forwardlink {
    text-decoration: underline;
    -moz-text-decoration-style: dashed;
    text-decoration-style: dashed;
    border-bottom: none;
  }
}
`;

  var tomorrow = `/* General */
:root.tomorrow .dialog {
  background-color: #282A2E;
  border-color: #111;
}

/* 4chan style fixes */
:root.tomorrow #arc-list span.quote {
  color: #B5BD68;
}
:root.tomorrow.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8) !important;
}
:root.tomorrow.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8) !important;
}

/* Header */
:root.tomorrow #header-bar.dialog {
  background-color: rgba(40,42,46,0.9);
}
:root.tomorrow:not(.fixed) #header-bar, :root.tomorrow #notifications {
  font-size: 9pt;
}
:root.tomorrow #header-bar, :root.tomorrow #notifications {
  color: #C5C8C6;
}
:root.tomorrow #header-bar a, :root.tomorrow #notifications a {
  color: #81A2BE;
}
:root.tomorrow.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}

/* Settings */
:root.tomorrow #fourchanx-settings fieldset, :root.tomorrow .section-main div::before {
  border-color: #111;
}
:root.tomorrow .suboption-list > div:last-of-type {
  background-color: #282A2E;
}

/* Catalog */
:root.tomorrow.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #282A2E;
}
:root.tomorrow.werkTyme .catalog-thread:not(:hover),
:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.tomorrow.catalog-hover-expand .catalog-container:hover > .post,
:root.tomorrow.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #111;
}

/* Quote */
:root.tomorrow .backlink.deadlink {
  color: #81A2BE !important;
}
:root.tomorrow .inline {
  border-color: #111;
  background-color: rgba(0, 0, 0, .14);
}

/* Fappe and Werk Tyme */
:root.tomorrow .indicator {
  color: #282A2E;
}

/* Highlighting */
:root.tomorrow .qphl {
  outline: 2px solid rgba(145, 182, 214, .8);
}
:root.tomorrow.highlight-you .quotesYou$site$highlightable$op,
:root.tomorrow.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(145, 182, 214, .8);
}
:root.tomorrow.highlight-own .yourPost$site$highlightable$op,
:root.tomorrow.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(145, 182, 214, .8);
}
:root.tomorrow .filter-highlight$site$highlightable$op,
:root.tomorrow .filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 rgba(145, 182, 214, .5);
}
:root.tomorrow.highlight-own .yourPost > $site$sideArrows,
:root.tomorrow.highlight-you .quotesYou > $site$sideArrows,
:root.tomorrow .filter-highlight > $site$sideArrows {
  color: rgb(155, 185, 210);
}
:root.tomorrow .catalog-thread.filter-highlight .catalog-thumb,
:root.tomorrow.werkTyme .catalog-thread.filter-highlight:not(:hover),
:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,
:root.tomorrow.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight > .catalog-container:hover > .catalog-post {
  box-shadow: 0 0 3px 3px rgba(64, 192, 255, .7);
}
:root.tomorrow .catalog-thread.watched .catalog-thumb,
:root.tomorrow.werkTyme .catalog-thread.watched:not(:hover),
:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,
:root.tomorrow.werkTyme.catalog-hover-expand .catalog-thread.watched > .catalog-container:hover > .catalog-post {
  border: 2px solid rgb(64, 192, 255);
}


/* QR */
.tomorrow #dump-list::-webkit-scrollbar-thumb {
  background-color: #282A2E;
  border-color: #111;
}
:root.tomorrow .qr-preview {
  background-color: rgba(255, 255, 255, .15);
}
:root.tomorrow #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.tomorrow #qr .field:focus,
:root.tomorrow #qr .field.focus {
  border-color: rgb(129, 162, 190) !important;
  background-color: rgb(30,32,36);
}
:root.tomorrow .persona button {
  background: linear-gradient(to bottom, #2E3035, #222427) no-repeat;
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
  outline: none;
}
:root.tomorrow .persona button::-moz-focus-inner {
  border: none;
}
:root.tomorrow .persona button:focus {
  border-color: rgb(129, 162, 190);
}
:root.tomorrow #qr.sjis-preview #sjis-toggle,
:root.tomorrow #qr.tex-preview #tex-preview-button {
  background: rgb(26, 27, 29);
}
:root.tomorrow #qr select,
:root.tomorrow #file-n-submit > input,
:root.tomorrow #qr-draw-button {
  border-color: rgb(40, 41, 42);
}
:root.tomorrow #qr-filename {
  color: rgb(197,200,198);
}
:root.tomorrow .qr-link {
  border-color: rgb(25, 27, 31) rgb(25, 27, 31) rgb(10, 12, 16);
  background: linear-gradient(#37393D, #282A2E) repeat scroll 0% 0% transparent;
}
:root.tomorrow .qr-link:hover {
  background: #282A2E;
}

/* Menu */
:root.tomorrow #menu {
  color: #C5C8C6;
}
:root.tomorrow .entry {
  font-size: 10pt;
}
:root.tomorrow .focused.entry {
  background: rgba(0, 0, 0, .33);
}

/* Unread */
:root.tomorrow .unread-line {
  border-color: rgb(197, 200, 198);
}
:root.tomorrow .unread-mark-read {
  background-color: rgba(40,42,46,0.5);
}

/* Thread Watcher */
:root.tomorrow .replies-quoting-you > a, :root.tomorrow #watcher-link.replies-quoting-you, :root.tomorrow .last-page > a > .watcher-page {
  color: #F00 !important;
}

/* Watcher Favicon */
:root.tomorrow .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(197,200,198)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  var www = `#captcha-cnt {
  height: auto;
}
:root:not(.js-enabled) #form {
  display: block;
}
#bd > div[style], #bd > div[style] > * {
  height: auto !important;
  margin: 0 !important;
  font-size: 0;
}
`;

  var yotsubaB = `/* General */
:root.yotsuba-b .dialog {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.yotsuba-b .field:focus,
:root.yotsuba-b .field.focus {
  border-color: #98E;
}

/* 4chan style fixes */
:root.yotsuba-b.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8) !important;
}
:root.yotsuba-b.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8) !important;
}

/* Header */
:root.yotsuba-b #header-bar.dialog {
  background-color: rgba(214,218,240,0.98);
}
:root.yotsuba-b:not(.fixed) #header-bar, :root.yotsuba-b #notifications {
  font-size: 9pt;
}
:root.yotsuba-b #header-bar, :root.yotsuba-b #notifications {
  color: #89A;
}
:root.yotsuba-b #board-list a, :root.yotsuba-b #shortcuts a {
  color: #34345C;
}

/* Settings */
:root.yotsuba-b #fourchanx-settings fieldset, :root.yotsuba-b .section-main div::before {
  border-color: #B7C5D9;
}
:root.yotsuba-b .suboption-list > div:last-of-type {
  background-color: #D6DAF0;
}

/* Catalog */
:root.yotsuba-b.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #D6DAF0;
}
:root.yotsuba-b.werkTyme .catalog-thread:not(:hover),
:root.yotsuba-b.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.yotsuba-b.catalog-hover-expand .catalog-container:hover > .post,
:root.yotsuba-b.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #B7C5D9;
}

/* Quote */
:root.yotsuba-b .backlink.deadlink {
  color: #34345C !important;
}
:root.yotsuba-b .inline {
  border-color: #B7C5D9;
  background-color: rgba(255, 255, 255, .14);
}

/* Fappe and Werk Tyme */
:root.yotsuba-b .indicator {
  color: #D6DAF0;
}

/* QR */
.yotsuba-b #dump-list::-webkit-scrollbar-thumb {
  background-color: #D6DAF0;
  border-color: #B7C5D9;
}
:root.yotsuba-b .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.yotsuba-b .qr-link {
  border-color: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  background: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
}
:root.yotsuba-b .qr-link:hover {
  background: #D9DDF3;
}


/* Menu */
:root.yotsuba-b #menu {
  color: #000;
}
:root.yotsuba-b .entry {
  font-size: 10pt;
}
:root.yotsuba-b .focused.entry {
  background: rgba(255, 255, 255, .33);
}

/* Unread */
:root.yotsuba-b .unread-mark-read {
  background-color: rgba(214,218,240,0.5);
}

/* Thread Watcher */
:root.yotsuba-b .replies-quoting-you > a, :root.yotsuba-b #watcher-link.replies-quoting-you {
  color: #F00;
}

/* Watcher Favicon */
:root.yotsuba-b .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(0,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  var yotsuba = `/* General */
:root.yotsuba .dialog {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.yotsuba .field:focus,
:root.yotsuba .field.focus {
  border-color: #EA8;
}

/* 4chan style fixes */
:root.yotsuba.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid rgba(221, 0, 0, .8) !important;
}
:root.yotsuba.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed rgba(221, 0, 0, .8) !important;
}

/* Header */
:root.yotsuba #header-bar.dialog {
  background-color: rgba(240,224,214,0.98);
}
:root.yotsuba:not(.fixed) #header-bar, :root.yotsuba #notifications {
  font-size: 9pt;
}
:root.yotsuba #header-bar, :root.yotsuba #notifications {
  color: #B86;
}
:root.yotsuba #board-list a, :root.yotsuba #shortcuts a  {
  color: #800000;
}

/* Settings */
:root.yotsuba #fourchanx-settings fieldset, :root.yotsuba .section-main div::before {
  border-color: #D9BFB7;
}
:root.yotsuba .suboption-list > div:last-of-type {
  background-color: #F0E0D6;
}

/* Catalog */
:root.yotsuba.catalog-hover-expand .catalog-container:hover > .post {
  background-color: #F0E0D6;
}
:root.yotsuba.werkTyme .catalog-thread:not(:hover),
:root.yotsuba.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.yotsuba.catalog-hover-expand .catalog-container:hover > .post,
:root.yotsuba.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: #D9BFB7;
}

/* Quote */
:root.yotsuba .backlink.deadlink {
  color: #00E !important;
}
:root.yotsuba .inline {
  border-color: #D9BFB7;
  background-color: rgba(255, 255, 255, .14);
}

/* Fappe and Werk Tyme */
:root.yotsuba .indicator {
  color: #F0E0D6;
}

/* QR */
.yotsuba #dump-list::-webkit-scrollbar-thumb {
  background-color: #F0E0D6;
  border-color: #D9BFB7;
}
:root.yotsuba .qr-preview {
  background-color: rgba(0, 0, 0, .15);
}
:root.yotsuba .qr-link {
  border-color: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  background: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
}
:root.yotsuba .qr-link:hover {
  background: #F0E0D6;
}

/* Menu */
:root.yotsuba #menu {
  color: #800000;
}
:root.yotsuba .entry {
  font-size: 10pt;
}
:root.yotsuba .focused.entry {
  background: rgba(255, 255, 255, .33);
}

/* Unread */
:root.yotsuba .unread-mark-read {
  background-color: rgba(240,224,214,0.5);
}

/* Thread Watcher */
:root.yotsuba .replies-quoting-you > a, :root.yotsuba #watcher-link.replies-quoting-you, :root.yotsuba .last-page > a > .watcher-page {
  color: #F00;
}

/* Watcher Favicon */
:root.yotsuba .watch-thread-link
{
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(128,0,0)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}
`;

  // == Create CSS for Link Title Favicons == //
  const icons = (data) => ('/* Link Title Favicons */\n' +
      data.map(({ name, data }) => `.linkify.${name}::before {
  content: "";
  background: transparent url('data:image/png;base64,${data}') center left no-repeat!important;
  padding-left: 18px;
}
`).join(''));

  // cSpell:ignore installGentoo, webfont
  // <%
  // var inc       = require['style'];
  // var faCSS     = read('/node_modules/font-awesome/css/font-awesome.css');
  // var mainCSS   = ['font-awesome', 'style', 'yotsuba', 'yotsuba-b', 'futaba', 'burichan', 'tomorrow', 'photon', 'spooky'].map(x => read(`${x}.css`)).join('');
  //   var iconNames = files.filter(f => /^linkify\.[^.]+\.png$/.test(f));
  //   var icons     = iconNames.map(readBase64);
  // %>
  const mainCSS = style + yotsuba + yotsubaB + futaba + burichan + tomorrow + photon + spooky;
  const faIcons = [
      { name: "Audio", data: linkifyAudio },
      { name: "Bitchute", data: linkifyBitchute },
      { name: "Clyp", data: linkifyClyp },
      { name: "Dailymotion", data: linkifyDailymotion },
      { name: "Gfycat", data: linkifyGfycat },
      { name: "Gist", data: linkifyGist },
      { name: "Image", data: linkifyImage },
      { name: "Installgentoo", data: linkifyInstallgentoo },
      { name: "Liveleak", data: linkifyLiveleak },
      { name: "Pastebin", data: linkifyPastebin },
      { name: "Peertube", data: linkifyPeertube },
      { name: "Soundcloud", data: linkifySoundcloud },
      { name: "Streamable", data: linkifyStreamable },
      { name: "Twitchtv", data: linkifyTwitchtv },
      { name: "Twitter", data: linkifyTwitter },
      { name: "Video", data: linkifyVideo },
      { name: "Vidlii", data: linkifyVidlii },
      { name: "Cimeo", data: linkifyCimeo },
      { name: "Vine", data: linkifyVine },
      { name: "Vocaroo", data: linkifyVocaroo },
      { name: "Youtube", data: linkifyYoutube },
  ];
  const CSS = {
      boards: mainCSS + icons(faIcons) + supports,
      report,
      www,
      sub: function (css) {
          var variables = {
              site: g.SITE.selectors
          };
          return css.replace(/\$[\w\$]+/g, function (name) {
              var words = name.slice(1).split('$');
              var sel = variables;
              for (var i = 0; i < words.length; i++) {
                  if (typeof sel !== 'object')
                      return ':not(*)';
                  sel = $$1.getOwn(sel, words[i]);
              }
              if (typeof sel !== 'string')
                  return ':not(*)';
              return sel;
          });
      }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const CustomCSS = {
    init() {
      if (!Conf['Custom CSS']) { return; }
      return this.addStyle();
    },

    addStyle() {
      return this.style = $$1.addStyle(CSS.sub(Conf['usercss']), 'custom-css', '#fourchanx-css');
    },

    rmStyle() {
      if (this.style) {
        $$1.rm(this.style);
        return delete this.style;
      }
    },

    update() {
      if (!this.style) {
        return this.addStyle();
      }
      return this.style.textContent = CSS.sub(Conf['usercss']);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const SWTinyboard = {
    isOPContainerThread: true,
    mayLackJSON: true,
    threadModTimeIgnoresSage: true,

    disabledFeatures: [
      'Resurrect Quotes',
      'Quick Reply Personas',
      'Quick Reply',
      'Cooldown',
      'Report Link',
      'Delete Link',
      'Edit Link',
      'Quote Inlining',
      'Quote Previewing',
      'Quote Backlinks',
      'File Info Formatting',
      'Image Expansion',
      'Image Expansion (Menu)',
      'Comment Expansion',
      'Thread Expansion',
      'Favicon',
      'Quote Threading',
      'Thread Updater',
      'Banner',
      'Flash Features',
      'Reply Pruning'
    ],

    detect() {
      for (var script of $$('script:not([src])', d$1.head)) {
        var m;
        if (m = script.textContent.match(/\bvar configRoot=(".*?")/)) {
          var properties = dict();
          try {
            var root = JSON.parse(m[1]);
            if (root[0] === '/') {
              properties.root = location.origin + root;
            } else if (/^https?:/.test(root)) {
              properties.root = root;
            }
          } catch (error) {}
          return properties;
        }
      }
      return false;
    },

    awaitBoard(cb) {
      if ($$1.id('react-ui')) {
        const s = (this.selectors = Object.create(this.selectors));
        s.boardFor = {index: '.page-container'};
        s.thread = 'div[id^="thread_"]';
        return Main$1.mounted(cb);
      } else {
        return cb();
      }
    },

    urls: {
      thread({siteID, boardID, threadID}, isArchived) {
        return `${Conf['siteProperties'][siteID]?.root || `http://${siteID}/`}${boardID}/${isArchived ? 'archive/' : ''}res/${threadID}.html`;
      },
      post({postID})                   { return `#${postID}`; },
      index({siteID, boardID})          { return `${Conf['siteProperties'][siteID]?.root || `http://${siteID}/`}${boardID}/`; },
      catalog({siteID, boardID})          { return `${Conf['siteProperties'][siteID]?.root || `http://${siteID}/`}${boardID}/catalog.html`; },
      threadJSON({siteID, boardID, threadID}, isArchived) {
        const root = Conf['siteProperties'][siteID]?.root;
        if (root) { return `${root}${boardID}/${isArchived ? 'archive/' : ''}res/${threadID}.json`; } else { return ''; }
      },
      archivedThreadJSON(thread) {
        return SWTinyboard.urls.threadJSON(thread, true);
      },
      threadsListJSON({siteID, boardID}) {
        const root = Conf['siteProperties'][siteID]?.root;
        if (root) { return `${root}${boardID}/threads.json`; } else { return ''; }
      },
      archiveListJSON({siteID, boardID}) {
        const root = Conf['siteProperties'][siteID]?.root;
        if (root) { return `${root}${boardID}/archive/archive.json`; } else { return ''; }
      },
      catalogJSON({siteID, boardID}) {
        const root = Conf['siteProperties'][siteID]?.root;
        if (root) { return `${root}${boardID}/catalog.json`; } else { return ''; }
      },
      file({siteID, boardID}, filename) {
        return `${Conf['siteProperties'][siteID]?.root || `http://${siteID}/`}${boardID}/${filename}`;
      },
      thumb(board, filename) {
        return SWTinyboard.urls.file(board, filename);
      }
    },

    selectors: {
      board:         'form[name="postcontrols"]',
      thread:        'input[name="board"] ~ div[id^="thread_"]',
      threadDivider: 'div[id^="thread_"] > hr:last-child',
      summary:       '.omitted',
      postContainer: 'div[id^="reply_"]:not(.hidden)', // postContainer is thread for OP
      opBottom:      '.op',
      replyOriginal: 'div[id^="reply_"]:not(.hidden)',
      infoRoot:      '.intro',
      info: {
        subject:   '.subject',
        name:      '.name',
        email:     '.email',
        tripcode:  '.trip',
        uniqueID:  '.poster_id',
        capcode:   '.capcode',
        flag:      '.flag',
        date:      'time',
        nameBlock: 'label',
        quote:     'a[href*="#q"]',
        reply:     'a[href*="/res/"]:not([href*="#"])'
      },
      icons: {
        isSticky:   '.fa-thumb-tack',
        isClosed:   '.fa-lock'
      },
      file: {
        text:  '.fileinfo',
        link:  '.fileinfo > a',
        thumb: 'a > .post-image'
      },
      thumbLink: '.file > a',
      multifile: '.files > .file',
      highlightable: {
        op:      ' > .op',
        reply:   '.reply',
        catalog: ' > .thread'
      },
      comment:   '.body',
      spoiler:   '.spoiler',
      quotelink: 'a[onclick*="highlightReply("]',
      catalog: {
        board:  '#Grid',
        thread: '.mix',
        thumb:  '.thread-image'
      },
      boardList: '.boardlist',
      boardListBottom: '.boardlist.bottom',
      styleSheet: '#stylesheet',
      psa:       '.blotter',
      nav: {
        prev: '.pages > form > [value=Previous]',
        next: '.pages > form > [value=Next]'
      }
    },

    classes: {
      highlight: 'highlighted'
    },

    xpath: {
      thread:         'div[starts-with(@id,"thread_")]',
      postContainer:  'div[starts-with(@id,"reply_") or starts-with(@id,"thread_")]',
      replyContainer: 'div[starts-with(@id,"reply_")]'
    },

    regexp: {
      quotelink:
        new RegExp(`\
/\
([^/]+)\
/res/\
(\\d+)\
(?:\\.\\w+)?#\
(\\d+)\
$\
`),
      quotelinkHTML:
        /<a [^>]*\bhref="[^"]*\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)"/g
    },

    Build: {
      parseJSON(data, board) {
        const o = this.parseJSON(data, board);
        if (data.ext === 'deleted') {
          delete o.file;
          $$1.extend(o, {
            files: [],
            fileDeleted: true,
            filesDeleted: [0]
          });
        }
        if (data.extra_files) {
          let file;
          for (let i = 0; i < data.extra_files.length; i++) {
            var extra_file = data.extra_files[i];
            if (extra_file.ext === 'deleted') {
              o.filesDeleted.push(i);
            } else {
              file = this.parseJSONFile(data, board);
              o.files.push(file);
            }
          }
          if (o.files.length) {
            o.file = o.files[0];
          }
        }
        return o;
      },

      parseComment(html) {
        html = html
          .replace(/<br\b[^<]*>/gi, '\n')
          .replace(/<[^>]*>/g, '');
        return $$1.unescape(html);
      }
    },

    bgColoredEl() {
      return $$1.el('div', {className: 'post reply'});
    },

    isFileURL(url) {
      return /\/src\/[^\/]+/.test(url.pathname);
    },

    preParsingFixes(board) {
      // fixes effects of unclosed link in announcement
      let broken;
      if (broken = $$1('a > input[name="board"]', board)) {
        return $$1.before(broken.parentNode, broken);
      }
    },

    parseNodes(post, nodes) {
      // Add vichan's span.poster_id around the ID if not already present.
      let m;
      if (nodes.uniqueID) { return; }
      let text = '';
      let node = nodes.nameBlock.nextSibling;
      while (node && (node.nodeType === 3)) {
        text += node.textContent;
        node = node.nextSibling;
      }
      if (m = text.match(/(\s*ID:\s*)(\S+)/)) {
        let uniqueID;
        nodes.info.normalize();
        let {nextSibling} = nodes.nameBlock;
        nextSibling = nextSibling.splitText(m[1].length);
        nextSibling.splitText(m[2].length);
        nodes.uniqueID = (uniqueID = $$1.el('span', {className: 'poster_id'}));
        $$1.replace(nextSibling, uniqueID);
        return $$1.add(uniqueID, nextSibling);
      }
    },

    parseDate(node) {
      let date = Date.parse(node.getAttribute('datetime')?.trim());
      if (!isNaN(date)) { return new Date(date); }
      date = Date.parse(node.textContent.trim() + ' UTC'); // e.g. onesixtwo.club
      if (!isNaN(date)) { return new Date(date); }
      return undefined;
    },

    parseFile(post, file) {
      let info, infoNode;
      const {text, link, thumb} = file;
      if ($$1.x(`ancestor::${this.xpath.postContainer}[1]`, text) !== post.nodes.root) { return false; } // file belongs to a reply
      if (!(infoNode = link.nextSibling?.textContent.includes('(') ? link.nextSibling : link.nextElementSibling)) { return false; }
      if (!(info = infoNode.textContent.match(/\((.*,\s*)?([\d.]+ ?[KMG]?B).*\)/))) { return false; }
      const nameNode = $$1('.postfilename', text);
      $$1.extend(file, {
        name:       nameNode ? (nameNode.title || nameNode.textContent) : link.pathname.match(/[^/]*$/)[0],
        size:       info[2],
        dimensions: info[0].match(/\d+x\d+/)?.[0]
      });
      if (thumb) {
        $$1.extend(file, {
          thumbURL:  /\/static\//.test(thumb.src) && $$1.isImage(link.href) ? link.href : thumb.src,
          isSpoiler: /^Spoiler/i.test(info[1] || '') || (link.textContent === 'Spoiler Image')
        }
        );
      }
      return true;
    },

    isThumbExpanded(file) {
      // Detect old Tinyboard image expansion that changes src attribute on thumbnail.
      return $$1.hasClass(file.thumb.parentNode, 'expanded') || (file.thumb.parentNode.dataset.expanded === 'true');
    },

    isLinkified(link) {
      return /\bnofollow\b/.test(link.rel);
    },

    catalogPin(threadRoot) {
      return threadRoot.dataset.sticky = 'true';
    }
  };

  const passMessagePage = h("div", { class: "box-inner" },
      h("div", { class: "boxbar" },
          h("h2", null,
              "Trouble buying a 4chan Pass? (a message from 4chan X)",
              h("a", { href: "javascript:;", style: "text-decoration: none; float: right; margin-right: 4px;", title: "Close" }, "\u00D7"))),
      h("div", { class: "boxcontent" },
          "Check the 4chan X wiki for ",
          h("a", { href: `${meta.captchaFAQ}#alternatives`, target: "_blank", rel: "noopener" }, "alternative solutions"),
          "."));

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  const PassMessage = {
    init() {
      if (Conf['passMessageClosed']) { return; }
      const msg = $$1.el('div',
        {className: 'box-outer top-box'}
      ,
        passMessagePage);
      msg.style.cssText = 'padding-bottom: 0;';
      const close = $$1('a', msg);
      $$1.on(close, 'click', function() {
        $$1.rm(msg);
        return $$1.set('passMessageClosed', true);
      });
      return $$1.ready(function() {
        let hd;
        if (hd = $$1.id('hd')) {
          return $$1.after(hd, msg);
        } else {
          return $$1.prepend(d$1.body, msg);
        }
      });
    }
  };

  var ReportPage = `<legend><label><input id="archive-report-enabled" type="checkbox">Report illegal content to archives</label></legend>
<label for="archive-report-reason">Details</label>
<textarea id="archive-report-reason" disabled>Illegal content</textarea>
<button id="archive-report-submit" hidden>Submit</button>
`;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var Report = {
    init() {
      let match;
      if (!(match = location.search.match(/\bno=(\d+)/))) { return; }
      Captcha.replace.init();
      this.postID = +match[1];
      return $$1.ready(this.ready);
    },

    ready() {
      $$1.addStyle(CSS.report);

      if (Conf['Archive Report']) { Report.archive(); }

      new MutationObserver(function() {
        Report.fit('iframe[src^="https://www.google.com/recaptcha/api2/frame"]');
        return Report.fit('body');
      }).observe(d$1.body, {
        childList:  true,
        attributes: true,
        subtree:    true
      }
      );
      return Report.fit('body');
    },

    fit(selector) {
      let el;
      if (!((el = $$1(selector, doc)) && (getComputedStyle(el).visibility !== 'hidden'))) { return; }
      const dy = (el.getBoundingClientRect().bottom - doc.clientHeight) + 8;
      if (dy > 0) { return window.resizeBy(0, dy); }
    },

    archive() {
      let match, urls;
      if (!(urls = Redirect$1.report(g.BOARD.ID)).length) { return; }

      const form    = $$1('form');
      const types   = $$1.id('reportTypes');
      const message = $$1('h3');

      const fieldset = $$1.el('fieldset', {
        id: 'archive-report',
        hidden: true
      }
      ,
        { innerHTML: ReportPage });
      const enabled = $$1('#archive-report-enabled', fieldset);
      const reason  = $$1('#archive-report-reason',  fieldset);
      const submit  = $$1('#archive-report-submit',  fieldset);

      $$1.on(enabled, 'change', function() {
        return reason.disabled = !this.checked;
      });

      if (form && types) {
        fieldset.hidden = !$$1('[value="31"]', types).checked;
        $$1.on(types, 'change', function(e) {
          fieldset.hidden = (e.target.value !== '31');
          return Report.fit('body');
        });
        $$1.after(types, fieldset);
        Report.fit('body');
        $$1.one(form, 'submit', function(e) {
          if (!fieldset.hidden && enabled.checked) {
            e.preventDefault();
            return Report.archiveSubmit(urls, reason.value, results => {
              this.action = '#archiveresults=' + encodeURIComponent(JSON.stringify(results));
              return this.submit();
            });
          }
        });
      } else if (message) {
        fieldset.hidden = /Report submitted!/.test(message.textContent);
        $$1.on(enabled, 'change', function() {
          return submit.hidden = !this.checked;
        });
        $$1.after(message, fieldset);
        $$1.on(submit, 'click', () => Report.archiveSubmit(urls, reason.value, Report.archiveResults));
      }

      if (match = location.hash.match(/^#archiveresults=(.*)$/)) {
        try {
          return Report.archiveResults(JSON.parse(decodeURIComponent(match[1])));
        } catch (error) {}
      }
    },

    archiveSubmit(urls, reason, cb) {
      const form = $$1.formData({
        board:  g.BOARD.ID,
        num:    Report.postID,
        reason
      });
      const results = [];
      for (var [name, url] of urls) {
        (function(name, url) {
          return $$1.ajax(url, {
            onloadend() {
              results.push([name, this.response || {error: ''}]);
              if (results.length === urls.length) {
                return cb(results);
              }
            },
            form
          });
        })(name, url);
      }
    },

    archiveResults(results) {
      const fieldset = $$1.id('archive-report');
      for (var [name, response] of results) {
        var line = $$1.el('h3',
          {className: 'archive-report-response'});
        if ('success' in response) {
          $$1.addClass(line, 'archive-report-success');
          line.textContent = `${name}: ${response.success}`;
        } else {
          $$1.addClass(line, 'archive-report-error');
          line.textContent = `${name}: ${response.error || 'Error reporting post.'}`;
        }
        if (fieldset) {
          $$1.before(fieldset, line);
        } else {
          $$1.add(d$1.body, line);
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const PostSuccessful = {
    init() {
      if (!Conf['Remember Your Posts']) { return; }
      return $$1.ready(this.ready);
    },

    ready() {
      if (d$1.title !== 'Post successful!') { return; }

      let [_, threadID, postID] = $$1('h1').nextSibling.textContent.match(/thread:(\d+),no:(\d+)/);
      postID   = +postID;
      threadID = +threadID || postID;

      const db = new DataBoard('yourPosts');
      return db.set({
        boardID: g.BOARD.ID,
        threadID,
        postID,
        val: true
      });
    }
  };

  function generatePostInfoHtml(ID, o, subject, capcode, email, name, tripcode, pass, capcodeLC, capcodePlural, staticPath, gifIcon, capcodeDescription, uniqueID, flag, flagCode, flagCodeTroll, dateUTC, dateText, postLink, quoteLink, boardID, threadID) {
      const nameHtml = [h("span", { class: `name${capcode ? ' ' + capcode : ''}` }, name)];
      if (tripcode)
          nameHtml.push(' ', h("span", { class: "postertrip" }, tripcode));
      if (pass)
          nameHtml.push(' ', h("span", { title: `Pass user since ${pass}`, class: "n-pu" }));
      if (capcode) {
          nameHtml.push(' ', h("strong", { class: `capcode hand id_${capcodeLC}`, title: `Highlight posts by ${capcodePlural}` },
              "## ",
              capcode));
      }
      const nameBlockContent = email ? [' ', h("a", { href: `mailto:${email}`, class: "useremail" }, ...nameHtml)] : nameHtml;
      if (!(boardID === "f" && !o.isReply || capcodeDescription))
          nameBlockContent.push(' ');
      if (capcodeDescription) {
          nameBlockContent.push(h("img", { src: `${staticPath}${capcodeLC}icon${gifIcon}`, alt: `${capcode} Icon}`, title: `This user is ${capcodeDescription}.`, class: "identityIcon retina" }));
          if (uniqueID && !capcode) {
              nameBlockContent.push(h("span", { class: `posteruid id_${uniqueID}` },
                  "(ID: ",
                  h("span", { class: "hand", title: "Highlight posts by this ID" },
                      "$",
                      uniqueID),
                  ")"));
          }
      }
      if (flagCode)
          nameBlockContent.push(' ', h("span", { title: flag, class: `flag flag-${flagCode.toLowerCase()}` }));
      if (flagCodeTroll)
          nameBlockContent.push(' ', h("span", { title: flag, class: `bfl bfl-${flagCodeTroll.toLowerCase()}` }));
      const postNumContent = [
          h("a", { href: postLink, title: "Link to this post" }, "No."),
          h("a", { href: quoteLink, title: "Reply to this post" }, ID),
      ];
      if (o.isSticky) {
          const src = `${staticPath}sticky${gifIcon}`;
          postNumContent.push(' ');
          if (boardID === "f") {
              postNumContent.push(h("img", { src: src, alt: "Sticky", title: "Sticky", style: "height: 18px; width: 18px;" }));
          }
          else {
              postNumContent.push(h("img", { src: src, alt: "Sticky", title: "Sticky", class: "stickyIcon retina" }));
          }
      }
      if (o.isClosed && !o.isArchived) {
          postNumContent.push(' ');
          const src = `${staticPath}closed${gifIcon}`;
          if (boardID === "f") {
              postNumContent.push(h("img", { src: src, alt: "Closed", title: "Closed", style: "height: 18px; width: 18px;" }));
          }
          else {
              postNumContent.push(h("img", { src: src, alt: "Closed", title: "Closed", class: "closedIcon retina" }));
          }
      }
      if (o.isArchived) {
          postNumContent.push(' ', h("img", { src: `${staticPath}archived${gifIcon}`, alt: "Archived", title: "Archived", class: "archivedIcon retina" }));
      }
      if (!o.isReply && g.VIEW === "index") {
          // \u00A0 is nbsp
          postNumContent.push(' \u00A0 ');
          postNumContent.push(h("span", null,
              "[",
              h("a", { href: `/${boardID}/thread/${threadID}`, class: "replylink" }, "Reply"),
              "]"));
      }
      return h("div", { class: "postInfo desktop", id: `pi${ID}` },
          h("input", { type: "checkbox", name: ID, value: "delete" }),
          ' ',
          ...((!o.isReply || boardID === "f" || subject) ? [h("span", { class: "subject" }, subject), ' '] : []),
          h("span", { class: `nameBlock${capcode || ''}` }, ...nameBlockContent),
          ' ',
          h("span", { class: "dateTime", "data-utc": dateUTC }, dateText),
          ' ',
          h("span", { class: `postNum${!(boardID === " f" && !o.isReply) ? ' desktop' : ''}` }, ...postNumContent));
  }

  function generateFileHtml(file, ID, boardID, fileURL, shortFilename, fileThumb, o, staticPath, gifIcon) {
      if (file) {
          const fileContent = [];
          if (boardID === "f") {
              fileContent.push(h("div", { class: "fileInfo", "data-md5": file.MD5 },
                  h("span", { class: "fileText", id: `fT${ID}` },
                      'File: ',
                      h("a", { "data-width": file.width, "data-height": file.height, href: fileURL, target: "_blank" }, file.name),
                      "-(",
                      file.size,
                      ", ",
                      file.dimensions,
                      file.tag ? ', ' + file.tag : '',
                      ")")));
          }
          else {
              fileContent.push(h("div", { class: "fileText", id: `fT${ID}`, title: file.isSpoiler ? file.name : null },
                  'File: ',
                  h("a", { title: file.name === shortFilename || file.isSpoiler ? null : file.name, href: fileURL, target: "_blank" }, file.isSpoiler ? 'Spoiler Image' : shortFilename),
                  ` (${file.size}, ${file.dimensions || "PDF"})`), h("a", { class: `fileThumb${file.isSpoiler ? ' imgspoiler' : ''}`, href: fileURL, target: "_blank", "data-m": file.hasDownscale ? '' : null },
                  h("img", { src: fileThumb, alt: file.size, "data-md5": file.MD5, style: `height: ${file.isSpoiler ? '100' : file.theight}px; width: ${file.isSpoiler ? '100' : file.twidth}px;`, loading: "lazy" })));
          }
          return h("div", { class: "file", id: `f${ID}` }, ...fileContent);
      }
      else if (o.fileDeleted) {
          return h("div", { class: "file", id: `f${ID}` },
              h("span", { class: "fileThumb" },
                  h("img", { src: `${staticPath}filedeleted-res${gifIcon}`, alt: "File deleted.", class: "fileDeletedRes retina" })));
      }
      return { innerHTML: '', [isEscaped]: true };
  }

  function generateCatalogThreadHtml(thread, src, imgClass, data, postCount, fileCount, pageCount, staticPath, gifIcon) {
      return h(hFragment, null,
          h("a", { class: "catalog-link", href: `/${thread.board}/thread/${thread.ID}` }, imgClass ?
              h("img", { src: src, class: `catalog-thumb ${imgClass}` }) :
              h("img", { src: src, class: "catalog-thumb", "data-width": data.tn_w, "data-height": data.tn_h })),
          h("div", { class: "catalog-stats" },
              h("span", { title: "Posts / Files / Page" },
                  h("span", { class: `post-count${data.bumplimit ? ' warning' : ''}` }, postCount),
                  ' / ',
                  h("span", { class: `file-count${data.imagelimit ? ' warning' : ''}` }, fileCount),
                  ' / ',
                  h("span", { class: "page-count" }, pageCount)),
              h("span", { class: "catalog-icons" },
                  thread.isSticky ? h("img", { src: `${staticPath}sticky${gifIcon}`, class: "stickyIcon", title: "Sticky" }) : '',
                  thread.isClosed ? h("img", { src: `${staticPath}closed${gifIcon}`, class: "closedIcon", title: "Closed" }) : '')));
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const SWYotsuba = {
      isOPContainerThread: false,
      hasIPCount: true,
      archivedBoardsKnown: true,
      urls: {
          thread({ boardID, threadID }) { return `${location.protocol}//${BoardConfig.domain(boardID)}/${boardID}/thread/${threadID}`; },
          post({ postID }) { return `#p${postID}`; },
          index({ boardID }) { return `${location.protocol}//${BoardConfig.domain(boardID)}/${boardID}/`; },
          catalog({ boardID }) { if (boardID === 'f') {
              return undefined;
          }
          else {
              return `${location.protocol}//${BoardConfig.domain(boardID)}/${boardID}/catalog`;
          } },
          archive({ boardID }) { if (BoardConfig.isArchived(boardID)) {
              return `${location.protocol}//${BoardConfig.domain(boardID)}/${boardID}/archive`;
          }
          else {
              return undefined;
          } },
          threadJSON({ boardID, threadID }) { return `${location.protocol}//a.4cdn.org/${boardID}/thread/${threadID}.json`; },
          threadsListJSON({ boardID }) { return `${location.protocol}//a.4cdn.org/${boardID}/threads.json`; },
          archiveListJSON({ boardID }) { if (BoardConfig.isArchived(boardID)) {
              return `${location.protocol}//a.4cdn.org/${boardID}/archive.json`;
          }
          else {
              return '';
          } },
          catalogJSON({ boardID }) { return `${location.protocol}//a.4cdn.org/${boardID}/catalog.json`; },
          file({ boardID }, filename) {
              const hostname = boardID === 'f' ? ImageHost.flashHost() : ImageHost.host();
              return `${location.protocol}//${hostname}/${boardID}/${filename}`;
          },
          thumb({ boardID }, filename) {
              return `${location.protocol}//${ImageHost.thumbHost()}/${boardID}/${filename}`;
          }
      },
      isPrunedByAge({ boardID }) { return boardID === 'f'; },
      areMD5sDeferred({ boardID }) { return boardID === 'f'; },
      isOnePage({ boardID }) { return boardID === 'f'; },
      noAudio({ boardID }) { return BoardConfig.noAudio(boardID); },
      selectors: {
          board: '.board',
          thread: '.thread',
          threadDivider: '.board > hr',
          summary: '.summary',
          postContainer: '.postContainer',
          replyOriginal: '.replyContainer:not([data-clone])',
          sideArrows: 'div.sideArrows',
          post: '.post',
          infoRoot: '.postInfo',
          info: {
              subject: '.subject',
              name: '.name',
              email: '.useremail',
              tripcode: '.postertrip',
              uniqueIDRoot: '.posteruid',
              uniqueID: '.posteruid > .hand',
              capcode: '.capcode.hand',
              pass: '.n-pu',
              flag: '.flag, .bfl',
              date: '.dateTime',
              nameBlock: '.nameBlock',
              quote: '.postNum > a:nth-of-type(2)',
              reply: '.replylink'
          },
          icons: {
              isSticky: '.stickyIcon',
              isClosed: '.closedIcon',
              isArchived: '.archivedIcon'
          },
          file: {
              text: '.file > :first-child',
              link: '.fileText > a',
              thumb: 'a.fileThumb > [data-md5]'
          },
          thumbLink: 'a.fileThumb',
          highlightable: {
              op: '.opContainer',
              reply: ' > .reply',
              catalog: ''
          },
          comment: '.postMessage',
          spoiler: 's',
          quotelink: ':not(pre) > .quotelink',
          catalog: {
              board: '#threads',
              thread: '.thread',
              thumb: '.thumb'
          },
          boardList: '#boardNavDesktop > .boardList',
          boardListBottom: '#boardNavDesktopFoot > .boardList',
          styleSheet: 'link[title=switch]',
          psa: '#globalMessage',
          psaTop: '#globalToggle',
          searchBox: '#search-box',
          nav: {
              prev: '.prev > form > [type=submit]',
              next: '.next > form > [type=submit]'
          }
      },
      classes: {
          highlight: 'highlight'
      },
      xpath: {
          thread: 'div[contains(concat(" ",@class," ")," thread ")]',
          postContainer: 'div[contains(@class,"postContainer")]',
          replyContainer: 'div[contains(@class,"replyContainer")]'
      },
      regexp: {
          quotelink: new RegExp(`\
^https?://boards\\.4chan(?:nel)?\\.org/+\
([^/]+)\
/+thread/+\
(\\d+)\
(?:[/?][^#]*)?\
(?:#p\
(\\d+)\
)?\
$\
`),
          quotelinkHTML: /<a [^>]*\bhref="(?:(?:\/\/boards\.4chan(?:nel)?\.org)?\/([^\/]+)\/thread\/)?(\d+)?(?:#p(\d+))?"/g,
          pass: /^https?:\/\/www\.4chan(?:nel)?\.org\/+pass(?:$|[?#])/,
          captcha: /^https?:\/\/sys\.4chan(?:nel)?\.org\/+captcha(?:$|[?#])/,
      },
      bgColoredEl() {
          return $$1.el('div', { className: 'reply' });
      },
      isThisPageLegit() {
          // not 404 error page or similar.
          return ['boards.4chan.org', 'boards.4channel.org'].includes(location.hostname) &&
              d$1.doctype &&
              !$$1('link[href*="favicon-status.ico"]', d$1.head) &&
              !['4chan - Temporarily Offline', '4chan - Error', '504 Gateway Time-out', 'MathJax Equation Source'].includes(d$1.title);
      },
      is404() {
          // XXX Sometimes threads don't 404 but are left over as stubs containing one garbage reply post.
          return ['4chan - Temporarily Offline', '4chan - 404 Not Found'].includes(d$1.title) || ((g.VIEW === 'thread') && $$1('.board') && !$$1('.opContainer'));
      },
      isIncomplete() {
          return ['index', 'thread'].includes(g.VIEW) && !$$1('.board + *');
      },
      isBoardlessPage(url) {
          return ['www.4chan.org', 'www.4channel.org'].includes(url.hostname);
      },
      isAuxiliaryPage(url) {
          return !['boards.4chan.org', 'boards.4channel.org'].includes(url.hostname);
      },
      isFileURL(url) {
          return ImageHost.test(url.hostname);
      },
      initAuxiliary() {
          switch (location.hostname) {
              case 'www.4chan.org':
              case 'www.4channel.org':
                  if (SWYotsuba.regexp.pass.test(location.href)) {
                      PassMessage.init();
                  }
                  else {
                      $$1.onExists(doc$1, 'body', () => $$1.addStyle(CSS.www));
                      Captcha.replace.init();
                  }
                  return;
              case 'sys.4chan.org':
              case 'sys.4channel.org':
                  var pathname = location.pathname.split(/\/+/);
                  if (pathname[2] === 'imgboard.php') {
                      let match;
                      if (/\bmode=report\b/.test(location.search)) {
                          Report.init();
                      }
                      else if (match = location.search.match(/\bres=(\d+)/)) {
                          $$1.ready(function () {
                              if (Conf['404 Redirect'] && ($$1.id('errmsg')?.textContent === 'Error: Specified thread does not exist.')) {
                                  return Redirect$1.navigate('thread', {
                                      boardID: g.BOARD.ID,
                                      postID: +match[1]
                                  });
                              }
                          });
                      }
                  }
                  else if (pathname[2] === 'post') {
                      PostSuccessful.init();
                  }
                  return;
          }
      },
      scriptData() {
          for (var script of $$('script:not([src])', d$1.head)) {
              if (/\bcooldowns *=/.test(script.textContent)) {
                  return script.textContent;
              }
          }
          return '';
      },
      parseThreadMetadata(thread) {
          let m;
          const scriptData = this.scriptData();
          thread.postLimit = /\bbumplimit *= *1\b/.test(scriptData);
          thread.fileLimit = /\bimagelimit *= *1\b/.test(scriptData);
          thread.ipCount = (m = scriptData.match(/\bunique_ips *= *(\d+)\b/)) ? +m[1] : undefined;
          if ((g.BOARD.ID === 'f') && thread.OP.file) {
              const { file } = thread.OP;
              return $$1.ajax(this.urls.threadJSON({ boardID: 'f', threadID: thread.ID }), {
                  timeout: MINUTE,
                  onloadend() {
                      if (this.response) {
                          return file.text.dataset.md5 = (file.MD5 = this.response.posts[0].md5);
                      }
                  }
              });
          }
      },
      parseNodes(post, nodes) {
          // Add CSS classes to sticky/closed icons on /f/ to match other boards.
          if (post.boardID === 'f') {
              return (() => {
                  const result = [];
                  for (var type of ['Sticky', 'Closed']) {
                      var icon;
                      if (icon = $$1(`img[alt=${type}]`, nodes.info)) {
                          result.push($$1.addClass(icon, `${type.toLowerCase()}Icon`, 'retina'));
                      }
                  }
                  return result;
              })();
          }
      },
      parseDate(node) {
          return new Date(node.dataset.utc * 1000);
      },
      parseFile(post, file) {
          let info;
          const { text, link, thumb } = file;
          if (!(info = link.nextSibling?.textContent.match(/\(([\d.]+ [KMG]?B).*\)/))) {
              return false;
          }
          $$1.extend(file, {
              name: text.title || link.title || link.textContent,
              size: info[1],
              dimensions: info[0].match(/\d+x\d+/)?.[0],
              tag: info[0].match(/,[^,]*, ([a-z]+)\)/i)?.[1],
              MD5: text.dataset.md5
          });
          if (thumb) {
              $$1.extend(file, {
                  thumbURL: thumb.src,
                  MD5: thumb.dataset.md5,
                  isSpoiler: $$1.hasClass(thumb.parentNode, 'imgspoiler')
              });
              if (file.isSpoiler) {
                  let m;
                  file.thumbURL = (m = link.href.match(/\d+(?=\.\w+$)/)) ? `${location.protocol}//${ImageHost.thumbHost()}/${post.board}/${m[0]}s.jpg` : undefined;
              }
          }
          return true;
      },
      cleanComment(bq) {
          let abbr;
          if (abbr = $$1('.abbr', bq)) { // 'Comment too long' or 'EXIF data available'
              for (var node of $$('.abbr + br, .exif', bq)) {
                  $$1.rm(node);
              }
              for (let i = 0; i < 2; i++) {
                  var br;
                  if ((br = abbr.previousSibling) && (br.nodeName === 'BR')) {
                      $$1.rm(br);
                  }
              }
              return $$1.rm(abbr);
          }
      },
      cleanCommentDisplay(bq) {
          let b;
          if ((b = $$1('b', bq)) && /^Rolled /.test(b.textContent)) {
              $$1.rm(b);
          }
          return $$1.rm($$1('.fortune', bq));
      },
      insertTags(bq) {
          let node;
          for (node of $$('s, .removed-spoiler', bq)) {
              $$1.replace(node, [$$1.tn('[spoiler]'), ...node.childNodes, $$1.tn('[/spoiler]')]);
          }
          for (node of $$('.prettyprint', bq)) {
              $$1.replace(node, [$$1.tn('[code]'), ...node.childNodes, $$1.tn('[/code]')]);
          }
      },
      hasCORS(url) {
          return url.split('/').slice(0, 3).join('/') === (location.protocol + '//a.4cdn.org');
      },
      sfwBoards(sfw) {
          return BoardConfig.sfwBoards(sfw);
      },
      uidColor(uid) {
          let msg = 0;
          let i = 0;
          while (i < 8) {
              msg = ((msg << 5) - msg) + uid.charCodeAt(i++);
          }
          return (msg >> 8) & 0xFFFFFF;
      },
      isLinkified(link) {
          return ImageHost.test(link.hostname);
      },
      testNativeExtension() {
          return $$1.global(function () {
              if (window.Parser?.postMenuIcon) {
                  return this.enabled = 'true';
              }
          });
      },
      transformBoardList() {
          let node;
          const nodes = [];
          const spacer = () => $$1.el('span', { className: 'spacer' });
          const items = $$1.X('.//a|.//text()[not(ancestor::a)]', $$1(SWYotsuba.selectors.boardList));
          let i = 0;
          while ((node = items.snapshotItem(i++))) {
              switch (node.nodeName) {
                  case '#text':
                      for (var chr of node.nodeValue) {
                          var span = $$1.el('span', { textContent: chr });
                          if (chr === ' ') {
                              span.className = 'space';
                          }
                          if (chr === ']') {
                              nodes.push(spacer());
                          }
                          nodes.push(span);
                          if (chr === '[') {
                              nodes.push(spacer());
                          }
                      }
                      break;
                  case 'A':
                      var a = node.cloneNode(true);
                      nodes.push(a);
                      break;
              }
          }
          return nodes;
      },
      Build: {
          staticPath: '//s.4cdn.org/image/',
          gifIcon: window.devicePixelRatio >= 2 ? '@2x.gif' : '.gif',
          spoilerRange: Object.create(null),
          shortFilename(filename) {
              const ext = filename.match(/\.?[^\.]*$/)[0];
              if ((filename.length - ext.length) > 30) {
                  return `${filename.match(/(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^]){0,25}/)[0]}(...)${ext}`;
              }
              else {
                  return filename;
              }
          },
          spoilerThumb(boardID) {
              let spoilerRange;
              if ((spoilerRange = this.spoilerRange[boardID])) {
                  // Randomize the spoiler image.
                  return `${this.staticPath}spoiler-${boardID}${Math.floor(1 + (spoilerRange * Math.random()))}.png`;
              }
              else {
                  return `${this.staticPath}spoiler.png`;
              }
          },
          sameThread(boardID, threadID) {
              return (g.VIEW === 'thread') && (g.BOARD.ID === boardID) && (g.THREADID === +threadID);
          },
          threadURL(boardID, threadID) {
              if (boardID !== g.BOARD.ID) {
                  return `//${BoardConfig.domain(boardID)}/${boardID}/thread/${threadID}`;
              }
              else if ((g.VIEW !== 'thread') || (+threadID !== g.THREADID)) {
                  return `/${boardID}/thread/${threadID}`;
              }
              else {
                  return '';
              }
          },
          postURL(boardID, threadID, postID) {
              return `${this.threadURL(boardID, threadID)}#p${postID}`;
          },
          parseJSON(data, { siteID, boardID }) {
              const o = {
                  // id
                  ID: data.no,
                  postID: data.no,
                  threadID: data.resto || data.no,
                  boardID,
                  siteID,
                  isReply: !!data.resto,
                  // thread status
                  isSticky: !!data.sticky,
                  isClosed: !!data.closed,
                  isArchived: !!data.archived,
                  // file status
                  fileDeleted: !!data.filedeleted,
                  filesDeleted: data.filedeleted ? [0] : []
              };
              o.info = {
                  subject: $$1.unescape(data.sub),
                  email: $$1.unescape(data.email),
                  name: $$1.unescape(data.name) || '',
                  tripcode: data.trip,
                  pass: (data.since4pass != null) ? `${data.since4pass}` : undefined,
                  uniqueID: data.id,
                  flagCode: data.country,
                  flagCodeTroll: data.board_flag,
                  flag: $$1.unescape((data.country_name || data.flag_name)),
                  dateUTC: data.time,
                  dateText: data.now,
                  // Yes, we use the raw string here
                  commentHTML: { innerHTML: data.com || '', [isEscaped]: true }
              };
              if (data.capcode) {
                  o.info.capcode = data.capcode.replace(/_highlight$/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                  o.capcodeHighlight = /_highlight$/.test(data.capcode);
                  delete o.info.uniqueID;
              }
              o.files = [];
              if (data.ext) {
                  o.file = this.parseJSONFile(data, { siteID, boardID });
                  o.files.push(o.file);
              }
              // Temporary JSON properties for events such as April 1 / Halloween
              o.extra = dict();
              for (var key in data) {
                  if (key[0] === 'x') {
                      o.extra[key] = data[key];
                  }
              }
              return o;
          },
          parseJSONFile(data, { siteID, boardID }) {
              const site = g.sites[siteID];
              const filename = (site.software === 'yotsuba') && (boardID === 'f') ?
                  `${encodeURIComponent(data.filename)}${data.ext}`
                  :
                      `${data.tim}${data.ext}`;
              const o = {
                  name: ($$1.unescape(data.filename)) + data.ext,
                  url: site.urls.file({ siteID, boardID }, filename),
                  height: data.h,
                  width: data.w,
                  MD5: data.md5,
                  size: $$1.bytesToString(data.fsize),
                  thumbURL: site.urls.thumb({ siteID, boardID }, `${data.tim}s.jpg`),
                  theight: data.tn_h,
                  twidth: data.tn_w,
                  isSpoiler: !!data.spoiler,
                  tag: data.tag,
                  hasDownscale: !!data.m_img
              };
              if ((data.h != null) && !/\.pdf$/.test(o.url)) {
                  o.dimensions = `${o.width}x${o.height}`;
              }
              return o;
          },
          parseComment(html) {
              html = html
                  .replace(/<br\b[^<]*>/gi, '\n')
                  .replace(/\n\n<span\b[^<]* class="abbr"[^]*$/i, '') // EXIF data (/p/)
                  .replace(/<[^>]*>/g, '');
              return $$1.unescape(html);
          },
          parseCommentDisplay(html) {
              // Hide spoilers.
              if (!Conf['Remove Spoilers'] && !Conf['Reveal Spoilers']) {
                  let html2;
                  while ((html2 = html.replace(/<s>(?:(?!<\/?s>).)*<\/s>/g, '[spoiler]')) !== html) {
                      html = html2;
                  }
              }
              html = html
                  .replace(/^<b\b[^<]*>Rolled [^<]*<\/b>/i, '') // Rolls (/tg/, /qst/)
                  .replace(/<span\b[^<]* class="fortune"[^]*$/i, ''); // Fortunes (/s4s/)
              // Remove preceding and following new lines, trailing spaces.
              return this.parseComment(html).trim().replace(/\s+$/gm, '');
          },
          postFromObject(data, boardID) {
              const o = this.parseJSON(data, { boardID, siteID: g.SITE.ID });
              return this.post(o);
          },
          post(o) {
              const { ID, threadID, boardID, file } = o;
              const { subject, email, name, tripcode, capcode, pass, uniqueID, flagCode, flagCodeTroll, flag, dateUTC, dateText, commentHTML } = o.info;
              const { staticPath, gifIcon } = this;
              /* Post Info */
              let capcodeDescription, capcodePlural, capcodeLC;
              if (capcode) {
                  capcodeLC = capcode.toLowerCase();
                  if (capcode === 'Founder') {
                      capcodePlural = 'the Founder';
                      capcodeDescription = "4chan's Founder";
                  }
                  else if (capcode === 'Verified') {
                      capcodePlural = 'Verified Users';
                      capcodeDescription = '';
                  }
                  else {
                      const capcodeLong = $$1.getOwn({ 'Admin': 'Administrator', 'Mod': 'Moderator' }, capcode) || capcode;
                      capcodePlural = `${capcodeLong}s`;
                      capcodeDescription = `a 4chan ${capcodeLong}`;
                  }
              }
              const url = this.threadURL(boardID, threadID);
              const postLink = `${url}#p${ID}`;
              const quoteLink = this.sameThread(boardID, threadID) ?
                  `javascript:quote('${+ID}');`
                  :
                      `${url}#q${ID}`;
              const postInfo = generatePostInfoHtml(ID, o, subject, capcode, email, name, tripcode, pass, capcodeLC, capcodePlural, staticPath, gifIcon, capcodeDescription, uniqueID, flag, flagCode, flagCodeTroll, dateUTC, dateText, postLink, quoteLink, boardID, threadID);
              /* File Info */
              let protocol, fileURL, shortFilename, fileThumb;
              if (file) {
                  protocol = /^https?:(?=\/\/i\.4cdn\.org\/)/;
                  fileURL = file.url.replace(protocol, '');
                  shortFilename = this.shortFilename(file.name);
                  fileThumb = file.isSpoiler ? this.spoilerThumb(boardID) : file.thumbURL.replace(protocol, '');
              }
              const fileBlock = generateFileHtml(file, ID, boardID, fileURL, shortFilename, fileThumb, o, staticPath, gifIcon);
              /* Whole Post */
              const postClass = o.isReply ? 'reply' : 'op';
              const wholePost = h(hFragment, null,
                  (o.isReply ? h("div", { class: "sideArrows", id: `sa${ID}` }, ">>") : ''),
                  h("div", { id: `p${ID}`, class: `post ${postClass}${o.capcodeHighlight ? ' highlightPost' : ''}` },
                      (o.isReply ? h(hFragment, null,
                          postInfo,
                          fileBlock) : h(hFragment, null,
                          fileBlock,
                          postInfo)),
                      h("blockquote", { class: "postMessage", id: `m${ID}` }, commentHTML)));
              const container = $$1.el('div', {
                  className: `postContainer ${postClass}Container`,
                  id: `pc${ID}`
              });
              $$1.extend(container, wholePost);
              // Fix quotelinks
              for (var quote of $$('.quotelink', container)) {
                  var href = quote.getAttribute('href');
                  if (href[0] === '#') {
                      if (!this.sameThread(boardID, threadID)) {
                          quote.href = this.threadURL(boardID, threadID) + href;
                      }
                  }
                  else {
                      var match;
                      if ((match = quote.href.match(SWYotsuba.regexp.quotelink)) && (this.sameThread(match[1], match[2]))) {
                          quote.href = href.match(/(#[^#]*)?$/)[0] || '#';
                      }
                  }
              }
              return container;
          },
          summaryText(status, posts, files) {
              let text = '';
              if (status) {
                  text += `${status} `;
              }
              text += `${posts} post${posts > 1 ? 's' : ''}`;
              if (+files) {
                  text += ` and ${files} image repl${files > 1 ? 'ies' : 'y'}`;
              }
              return text += ` ${status === '-' ? 'shown' : 'omitted'}.`;
          },
          summary(boardID, threadID, posts, files) {
              return $$1.el('a', {
                  className: 'summary',
                  textContent: this.summaryText('', posts, files),
                  href: `/${boardID}/thread/${threadID}`
              });
          },
          thread(thread, data, withReplies) {
              let root;
              if (root = thread.nodes.root) {
                  $$1.rmAll(root);
              }
              else {
                  thread.nodes.root = (root = $$1.el('div', {
                      className: 'thread',
                      id: `t${data.no}`
                  }));
              }
              if (this.hat) {
                  $$1.add(root, this.hat.cloneNode(false));
              }
              $$1.add(root, thread.OP.nodes.root);
              if (data.omitted_posts || (!withReplies && data.replies)) {
                  const [posts, files] = withReplies ?
                      // XXX data.omitted_images is not accurate.
                      [data.omitted_posts, data.images - data.last_replies.filter(data => !!data.ext).length]
                      :
                          [data.replies, data.images];
                  const summary = this.summary(thread.board.ID, data.no, posts, files);
                  $$1.add(root, summary);
              }
              return root;
          },
          catalogThread(thread, data, pageCount) {
              let cssText, imgClass, src;
              const { staticPath, gifIcon } = this;
              const { tn_w, tn_h } = data;
              if (data.spoiler && !Conf['Reveal Spoiler Thumbnails']) {
                  let spoilerRange;
                  src = `${staticPath}spoiler`;
                  if (spoilerRange = this.spoilerRange[thread.board]) {
                      // Randomize the spoiler image.
                      src += (`-${thread.board}`) + Math.floor(1 + (spoilerRange * Math.random()));
                  }
                  src += '.png';
                  imgClass = 'spoiler-file';
                  cssText = "--tn-w: 100; --tn-h: 100;";
              }
              else if (data.filedeleted) {
                  src = `${staticPath}filedeleted-res${gifIcon}`;
                  imgClass = 'deleted-file';
              }
              else if (thread.OP.file) {
                  src = thread.OP.file.thumbURL;
                  const ratio = 250 / Math.max(tn_w, tn_h);
                  cssText = `--tn-w: ${tn_w * ratio}; --tn-h: ${tn_h * ratio};`;
              }
              else {
                  src = `${staticPath}nofile.png`;
                  imgClass = 'no-file';
              }
              const postCount = data.replies + 1;
              const fileCount = data.images + !!data.ext;
              const container = $$1.el('div', generateCatalogThreadHtml(thread, src, imgClass, data, postCount, fileCount, pageCount, staticPath, gifIcon));
              $$1.before(thread.OP.nodes.info, [...container.childNodes]);
              for (var br of $$('br', thread.OP.nodes.comment)) {
                  if (br.previousSibling && (br.previousSibling.nodeName === 'BR')) {
                      $$1.addClass(br, 'extra-linebreak');
                  }
              }
              const root = $$1.el('div', {
                  className: 'thread catalog-thread',
                  id: `t${thread}`
              });
              if (thread.OP.highlights) {
                  $$1.addClass(root, ...thread.OP.highlights);
              }
              if (!thread.OP.file) {
                  $$1.addClass(root, 'noFile');
              }
              root.style.cssText = cssText || '';
              return root;
          },
          catalogReply(thread, data) {
              let excerpt = '';
              if (data.com) {
                  excerpt = this.parseCommentDisplay(data.com).replace(/>>\d+/g, '').trim().replace(/\n+/g, ' // ');
              }
              if (data.ext) {
                  if (!excerpt) {
                      excerpt = `${$$1.unescape(data.filename)}${data.ext}`;
                  }
              }
              if (data.com) {
                  if (!excerpt) {
                      excerpt = $$1.unescape(data.com.replace(/<br\b[^<]*>/gi, ' // '));
                  }
              }
              if (!excerpt) {
                  excerpt = '\xA0';
              }
              if (excerpt.length > 73) {
                  excerpt = `${excerpt.slice(0, 70)}...`;
              }
              const link = this.postURL(thread.board.ID, thread.ID, data.no);
              return $$1.el('div', { className: 'catalog-reply' }, h(hFragment, null,
                  h("span", null,
                      h("time", { "data-utc": data.time * 1000, "data-abbrev": "1" }, "..."),
                      ": "),
                  h("a", { class: "catalog-reply-excerpt", href: link }, excerpt),
                  h("a", { class: "catalog-reply-preview", href: link }, "...")));
          }
      }
  };

  const SW = { tinyboard: SWTinyboard, yotsuba: SWYotsuba };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var FileInfo = {
      init() {
          if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['File Info Formatting']) {
              return;
          }
          return Callbacks.Post.push({
              name: 'File Info Formatting',
              cb: this.node
          });
      },
      node() {
          if (!this.file) {
              return;
          }
          if (this.isClone) {
              let a;
              for (a of $$('.file-info .download-button', this.file.text)) {
                  $$1.on(a, 'click', ImageCommon.download);
              }
              for (a of $$('.file-info .quick-filter-md5', this.file.text)) {
                  $$1.on(a, 'click', Filter.quickFilterMD5);
              }
              return;
          }
          const oldInfo = $$1.el('span', { className: 'fileText-original' });
          $$1.prepend(this.file.link.parentNode, oldInfo);
          $$1.add(oldInfo, [this.file.link.previousSibling, this.file.link, this.file.link.nextSibling]);
          const info = $$1.el('span', { className: 'file-info' });
          FileInfo.format(Conf['fileInfo'], this, info);
          return $$1.prepend(this.file.text, info);
      },
      format(formatString, post, outputNode) {
          let a;
          const output = [];
          formatString.replace(/%(.)|[^%]+/g, function (s, c) {
              output.push($$1.hasOwn(FileInfo.formatters, c) ?
                  FileInfo.formatters[c].call(post)
                  :
                      { innerHTML: E(s) });
              return '';
          });
          $$1.extend(outputNode, { innerHTML: E.cat(output) });
          for (a of $$('.download-button', outputNode)) {
              $$1.on(a, 'click', ImageCommon.download);
          }
          for (a of $$('.quick-filter-md5', outputNode)) {
              $$1.on(a, 'click', Filter.quickFilterMD5);
          }
      },
      formatters: {
          t() { return { innerHTML: E(this.file.url.match(/[^/]*$/)[0]), [isEscaped]: true }; },
          T() { return h("a", { href: this.file.url, target: "_blank" }, FileInfo.formatters.t.call(this)); },
          l() { return h("a", { href: this.file.url, target: "_blank" }, FileInfo.formatters.n.call(this)); },
          L() { return h("a", { href: this.file.url, target: "_blank" }, FileInfo.formatters.N.call(this)); },
          n() {
              const fullname = this.file.name;
              const shortname = SW.yotsuba.Build.shortFilename(this.file.name, this.isReply);
              if (fullname === shortname) {
                  return { innerHTML: E(fullname), [isEscaped]: true };
              }
              else {
                  return h("span", { class: "fnswitch" },
                      h("span", { class: "fntrunc" }, shortname),
                      h("span", { class: "fnfull" }, fullname));
              }
          },
          N() { return { innerHTML: E(this.file.name), [isEscaped]: true }; },
          d() { return h("a", { href: this.file.url, download: this.file.name, class: "download-button" }, "\uD83D\uDCE5\uFE0E"); },
          f() {
              return { innerHTML: "<a href=\"javascript:;\" class=\"quick-filter-md5\">✕</a>", [isEscaped]: true };
          },
          p() { return { innerHTML: ((this.file.isSpoiler) ? "Spoiler, " : ""), [isEscaped]: true }; },
          s() { return { innerHTML: E(this.file.size), [isEscaped]: true }; },
          B() { return { innerHTML: Math.round(this.file.sizeInBytes) + " Bytes", [isEscaped]: true }; },
          K() { return { innerHTML: (Math.round(this.file.sizeInBytes / 1024)) + " KB", [isEscaped]: true }; },
          M() { return { innerHTML: (Math.round(this.file.sizeInBytes / 1048576 * 100) / 100) + " MB", [isEscaped]: true }; },
          r() { return { innerHTML: E(this.file.dimensions || "PDF"), [isEscaped]: true }; },
          g() { return { innerHTML: ((this.file.tag) ? ", " + E(this.file.tag) : ""), [isEscaped]: true }; },
          '%'() { return { innerHTML: "%", [isEscaped]: true }; }
      }
  };

  var Time = {
      init() {
          if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Time Formatting']) {
              return;
          }
          Callbacks.Post.push({
              name: 'Time Formatting',
              cb: this.node
          });
      },
      node() {
          if (!this.info.date || this.isClone) {
              return;
          }
          const { textContent } = this.nodes.date;
          this.nodes.date.textContent = textContent.match(/^\s*/)[0] + Time.format(Conf['time'], this.info.date) + textContent.match(/\s*$/)[0];
      },
      format(formatString, date) {
          return formatString.replace(/%(.)/g, function (s, c) {
              if ($$1.hasOwn(Time.formatters, c)) {
                  return Time.formatters[c].call(date);
              }
              else {
                  return s;
              }
          });
      },
      zeroPad(n) { if (n < 10) {
          return `0${n}`;
      }
      else {
          return n;
      } },
      // Setting up the formatter takes more time than actually formatting the date,
      // So while setting up this cache is a bit more code, it's faster at runtime
      formatterCache: new Map(),
      formatters: {
          a() {
              let formatter = Time.formatterCache.get('a');
              if (!formatter) {
                  // || undefined to fall back to browser locale, an empty string gives an error
                  formatter = Intl.DateTimeFormat(Conf['timeLocale'] || undefined, { weekday: 'short' });
                  Time.formatterCache.set('a', formatter);
              }
              return formatter.format(this);
          },
          A() {
              let formatter = Time.formatterCache.get('A');
              if (!formatter) {
                  formatter = Intl.DateTimeFormat(Conf['timeLocale'] || undefined, { weekday: 'long' });
                  Time.formatterCache.set('A', formatter);
              }
              return formatter.format(this);
          },
          b() {
              let formatter = Time.formatterCache.get('b');
              if (!formatter) {
                  formatter = Intl.DateTimeFormat(Conf['timeLocale'] || undefined, { month: 'short' });
                  Time.formatterCache.set('b', formatter);
              }
              return formatter.format(this);
          },
          B() {
              let formatter = Time.formatterCache.get('B');
              if (!formatter) {
                  formatter = Intl.DateTimeFormat(Conf['timeLocale'] || undefined, { month: 'long' });
                  Time.formatterCache.set('B', formatter);
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
                  formatter = Intl.DateTimeFormat(Conf['timeLocale'] || undefined, { hour: 'numeric', hour12: true });
                  Time.formatterCache.set('p', formatter);
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

  var Beep = 'UklGRjQDAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAc21wbDwAAABBAAADAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkYXRhzAIAAGMms8em0tleMV4zIpLVo8nhfSlcPR102Ki+5JspVEkdVtKzs+K1NEhUIT7DwKrcy0g6WygsrM2k1NpiLl0zIY/WpMrjgCdbPhxw2Kq+5Z4qUkkdU9K1s+K5NkVTITzBwqnczko3WikrqM+l1NxlLF0zIIvXpsnjgydZPhxs2ay95aIrUEkdUdC3suK8N0NUIjq+xKrcz002WioppdGm091pK1w0IIjYp8jkhydXPxxq2K295aUrTkoeTs65suK+OUFUIzi7xqrb0VA0WSoootKm0t5tKlo1H4TYqMfkiydWQBxm16+85actTEseS8y7seHAPD9TIza5yKra01QyWSson9On0d5wKVk2H4DYqcfkjidUQB1j1rG75KsvSkseScu8seDCPz1TJDW2yara1FYxWSwnm9Sn0N9zKVg2H33ZqsXkkihSQR1g1bK65K0wSEsfR8i+seDEQTxUJTOzy6rY1VowWC0mmNWoz993KVc3H3rYq8TklSlRQh1d1LS647AyR0wgRMbAsN/GRDpTJTKwzKrX1l4vVy4lldWpzt97KVY4IXbUr8LZljVPRCxhw7W3z6ZISkw1VK+4sMWvXEhSPk6buay9sm5JVkZNiLWqtrJ+TldNTnquqbCwilZXU1BwpKirrpNgWFhTaZmnpquZbFlbVmWOpaOonHZcXlljhaGhpZ1+YWBdYn2cn6GdhmdhYGN3lp2enIttY2Jjco+bnJuOdGZlZXCImJqakHpoZ2Zug5WYmZJ/bGlobX6RlpeSg3BqaW16jZSVkoZ0bGtteImSk5KIeG5tbnaFkJKRinxxbm91gY2QkIt/c3BwdH6Kj4+LgnZxcXR8iI2OjIR5c3J0e4WLjYuFe3VzdHmCioyLhn52dHR5gIiKioeAeHV1eH+GiYqHgXp2dnh9hIiJh4J8eHd4fIKHiIeDfXl4eHyBhoeHhH96eHmA';

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ReplyPruning = {
    init() {
      if ((g.VIEW !== 'thread') || !Conf['Reply Pruning']) { return; }

      this.container = $$1.frag();

      this.summary = $$1.el('span', {
        hidden:    true,
        className: 'summary'
      }
      );
      this.summary.style.cursor = 'pointer';
      $$1.on(this.summary, 'click', () => {
        this.inputs.enabled.checked = !this.inputs.enabled.checked;
        return $$1.event('change', null, this.inputs.enabled);
      });

      const label = UI.checkbox('Prune Replies', 'Show Last', Conf['Prune All Threads']);
      const el = $$1.el('span',
        {title: 'Maximum number of replies to show.'}
      ,
        {innerHTML: " <input type=\"number\" name=\"Max Replies\" min=\"0\" step=\"1\" value=\"" + E(Conf["Max Replies"]) + "\" class=\"field\">"});
      $$1.prepend(el, label);

      this.inputs = {
        enabled: label.firstElementChild,
        replies: el.lastElementChild
      };

      this.setEnabled.call(this.inputs.enabled);
      $$1.on(this.inputs.enabled, 'change', this.setEnabled);
      $$1.on(this.inputs.replies, 'change', $$1.cb.value);

      Header$1.menu.addEntry({
        el,
        order: 190
      });

      return Callbacks.Thread.push({
        name: 'Reply Pruning',
        cb:   this.node
      });
    },

    position: 0,
    hidden: 0,
    hiddenFiles: 0,
    total: 0,
    totalFiles: 0,

    setEnabled() {
      const other = QuoteThreading.input;
      if (this.checked && other?.checked) {
        other.checked = false;
        $$1.event('change', null, other);
      }
      return ReplyPruning.active = this.checked;
    },

    showIfHidden(id) {
      if (ReplyPruning.container && $$1(`#${id}`, ReplyPruning.container)) {
        ReplyPruning.inputs.enabled.checked = false;
        return $$1.event('change', null, ReplyPruning.inputs.enabled);
      }
    },

    node() {
      let middle;
      ReplyPruning.thread = this;

      if (this.isSticky) {
        ReplyPruning.active = (ReplyPruning.inputs.enabled.checked = true);
        if (QuoteThreading.input) {
          // Disable Quote Threading for this thread but don't save the setting.
          Conf['Thread Quotes'] = (QuoteThreading.input.checked = false);
        }
      }

      this.posts.forEach(function(post) {
        if (post.isReply) {
          ReplyPruning.total++;
          if (post.file) { return ReplyPruning.totalFiles++; }
        }
      });

      // If we're linked to a post that we would hide, don't hide the posts in the first place.
      if (
        ReplyPruning.active &&
        /^#p\d+$/.test(location.hash) &&
        (1 <= (middle = this.posts.keys.indexOf(location.hash.slice(2))) && middle < 1 + Math.max(ReplyPruning.total - +Conf["Max Replies"], 0))
      ) {
        ReplyPruning.active = (ReplyPruning.inputs.enabled.checked = false);
      }

      $$1.after(this.OP.nodes.root, ReplyPruning.summary);

      $$1.on(ReplyPruning.inputs.enabled, 'change', ReplyPruning.update);
      $$1.on(ReplyPruning.inputs.replies, 'change', ReplyPruning.update);
      $$1.on(d$1, 'ThreadUpdate', ReplyPruning.updateCount);
      $$1.on(d$1, 'ThreadUpdate', ReplyPruning.update);

      return ReplyPruning.update();
    },

    updateCount(e) {
      if (e.detail[404]) { return; }
      for (var fullID of e.detail.newPosts) {
        ReplyPruning.total++;
        if (g.posts.get(fullID).file) { ReplyPruning.totalFiles++; }
      }
    },

    update() {
      let boardTop, node, post;
      const hidden1 = ReplyPruning.hidden;
      const hidden2 = ReplyPruning.active ?
        Math.max(ReplyPruning.total - +Conf["Max Replies"], 0)
      :
        0;

      // Record position from bottom of document
      const oldPos = d$1.body.clientHeight - window.scrollY;

      const {posts} = ReplyPruning.thread;

      if (ReplyPruning.hidden < hidden2) {
        while ((ReplyPruning.hidden < hidden2) && (ReplyPruning.position < posts.keys.length)) {
          post = posts.get(posts.keys[ReplyPruning.position++]);
          if (post.isReply && !post.isFetchedQuote) {
            while ((node = ReplyPruning.summary.nextSibling) && (node !== post.nodes.root)) { $$1.add(ReplyPruning.container, node); }
            $$1.add(ReplyPruning.container, post.nodes.root);
            ReplyPruning.hidden++;
            if (post.file) { ReplyPruning.hiddenFiles++; }
          }
        }

      } else if (ReplyPruning.hidden > hidden2) {
        const frag = $$1.frag();
        while ((ReplyPruning.hidden > hidden2) && (ReplyPruning.position > 0)) {
          post = posts.get(posts.keys[--ReplyPruning.position]);
          if (post.isReply && !post.isFetchedQuote) {
            while ((node = ReplyPruning.container.lastChild) && (node !== post.nodes.root)) { $$1.prepend(frag, node); }
            $$1.prepend(frag, post.nodes.root);
            ReplyPruning.hidden--;
            if (post.file) { ReplyPruning.hiddenFiles--; }
          }
        }
        $$1.after(ReplyPruning.summary, frag);
        $$1.event('PostsInserted', null, ReplyPruning.summary.parentNode);
      }

      ReplyPruning.summary.textContent = ReplyPruning.active ?
        g.SITE.Build.summaryText('+', ReplyPruning.hidden, ReplyPruning.hiddenFiles)
      :
        g.SITE.Build.summaryText('-', ReplyPruning.total, ReplyPruning.totalFiles);
      ReplyPruning.summary.hidden = (ReplyPruning.total <= +Conf["Max Replies"]);

      // Maintain position in thread when posts are added/removed above
      if ((hidden1 !== hidden2) && ((boardTop = Header$1.getTopOf($$1('.board'))) < 0)) {
        return window.scrollBy(0, Math.max(d$1.body.clientHeight - oldPos, window.scrollY + boardTop) - window.scrollY);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  /*
    <3 aeosynth
  */

  var QuoteThreading = {
    init() {
      if (!Conf['Quote Threading'] || (g.VIEW !== 'thread')) { return; }

      this.controls = $$1.el('label',
        {innerHTML: "<input id=\"threadingControl\" name=\"Thread Quotes\" type=\"checkbox\"> Threading"});

      this.threadNewLink = $$1.el('span', {
        className: 'brackets-wrap threadnewlink',
        hidden: true
      }
      );
      $$1.extend(this.threadNewLink, {innerHTML: "<a href=\"javascript:;\">Thread New Posts</a>"});

      this.input = $$1('input', this.controls);
      this.input.checked = Conf['Thread Quotes'];

      $$1.on(this.input, 'change', this.setEnabled);
      $$1.on(this.input, 'change', this.rethread);
      $$1.on(this.threadNewLink.firstElementChild, 'click', this.rethread);
      $$1.on(d$1, '4chanXInitFinished', () => { return this.ready = true; });

      Header$1.menu.addEntry(this.entry = {
        el:    this.controls,
        order: 99
      }
      );

      Callbacks.Thread.push({
        name: 'Quote Threading',
        cb:   this.setThread
      });

      return Callbacks.Post.push({
        name: 'Quote Threading',
        cb:   this.node
      });
    },

    parent:   dict(),
    children: dict(),
    inserted: dict(),

    toggleThreading() {
      return this.setThreadingState(!Conf['Thread Quotes']);
    },

    setThreadingState(enabled) {
      this.input.checked = enabled;
      this.setEnabled.call(this.input);
      return this.rethread.call(this.input);
    },

    setEnabled() {
      if (this.checked) {
        $$1.set('Prune All Threads', false);
        const other = ReplyPruning.inputs?.enabled;
        if (other?.checked) {
          other.checked = false;
          $$1.event('change', null, other);
        }
      }
      return $$1.cb.checked.call(this);
    },

    setThread() {
      QuoteThreading.thread = this;
      return $$1.asap((() => !Conf['Thread Updater'] || $$1('.navLinksBot > .updatelink')), function() {
        let navLinksBot;
        if (navLinksBot = $$1('.navLinksBot')) { return $$1.add(navLinksBot, [$$1.tn(' '), QuoteThreading.threadNewLink]); }
      });
    },

    node() {
      let parent;
      if (this.isFetchedQuote || this.isClone || !this.isReply) { return; }

      const parents = new Set();
      let lastParent = null;
      for (var quote of this.quotes) {
        if ((parent = g.posts.get(quote))) {
          if (!parent.isFetchedQuote && parent.isReply && (parent.ID < this.ID)) {
            parents.add(parent.ID);
            if (!lastParent || (parent.ID > lastParent.ID)) { lastParent = parent; }
          }
        }
      }

      if (!lastParent) { return; }

      let ancestor = lastParent;
      while ((ancestor = QuoteThreading.parent[ancestor.fullID])) {
        parents.delete(ancestor.ID);
      }

      if (parents.size === 1) {
        return QuoteThreading.parent[this.fullID] = lastParent;
      }
    },

    descendants(post) {
      let children;
      let posts = [post];
      if (children = QuoteThreading.children[post.fullID]) {
        for (var child of children) {
          posts = posts.concat(QuoteThreading.descendants(child));
        }
      }
      return posts;
    },

    insert(post) {
      let parent, x;
      if (!(
        Conf['Thread Quotes'] &&
        (parent = QuoteThreading.parent[post.fullID]) &&
        !QuoteThreading.inserted[post.fullID]
      )) { return false; }

      const descendants = QuoteThreading.descendants(post);
      if (!Unread.posts.has(parent.ID)) {
        if ((function() { for (var x of descendants) { if (Unread.posts.has(x.ID)) { return true; } } })()) {
          QuoteThreading.threadNewLink.hidden = false;
          return false;
        }
      }

      const {order} = Unread;
      const children = (QuoteThreading.children[parent.fullID] || (QuoteThreading.children[parent.fullID] = []));
      const threadContainer = parent.nodes.threadContainer || $$1.el('div', {className: 'threadContainer'});
      const nodes = [post.nodes.root];
      if (post.nodes.threadContainer) { nodes.push(post.nodes.threadContainer); }

      let i = children.length;
      for (let j = children.length - 1; j >= 0; j--) { var child = children[j]; if (child.ID >= post.ID) { i--; } }
      if (i !== children.length) {
        const next = children[i];
        for (x of descendants) { order.before(order[next.ID], order[x.ID]); }
        children.splice(i, 0, post);
        $$1.before(next.nodes.root, nodes);
      } else {
        let prev2;
        let prev = parent;
        while ((prev2 = QuoteThreading.children[prev.fullID]) && prev2.length) {
          prev = prev2[prev2.length-1];
        }
        for (let k = descendants.length - 1; k >= 0; k--) { x = descendants[k]; order.after(order[prev.ID], order[x.ID]); }
        children.push(post);
        $$1.add(threadContainer, nodes);
      }

      QuoteThreading.inserted[post.fullID] = true;

      if (!parent.nodes.threadContainer) {
        parent.nodes.threadContainer = threadContainer;
        $$1.addClass(parent.nodes.root, 'threadOP');
        $$1.after(parent.nodes.root, threadContainer);
      }

      return true;
    },

    rethread() {
      if (!QuoteThreading.ready) { return; }
      const {thread} = QuoteThreading;
      const {posts} = thread;

      QuoteThreading.threadNewLink.hidden = true;

      if (Conf['Thread Quotes']) {
        posts.forEach(QuoteThreading.insert);
      } else {
        const nodes = [];
        Unread.order = new RandomAccessList();
        QuoteThreading.inserted = dict();
        posts.forEach(function(post) {
          if (post.isFetchedQuote) { return; }
          Unread.order.push(post);
          if (post.isReply) { nodes.push(post.nodes.root); }
          if (QuoteThreading.children[post.fullID]) {
            delete QuoteThreading.children[post.fullID];
            $$1.rmClass(post.nodes.root, 'threadOP');
            $$1.rm(post.nodes.threadContainer);
            return delete post.nodes.threadContainer;
          }
        });
        $$1.add(thread.nodes.root, nodes);
      }

      Unread.position = Unread.order.first;
      Unread.updatePosition();
      Unread.setLine(true);
      Unread.read();
      return Unread.update();
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS201: Simplify complex destructure assignments
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var ThreadUpdater = {
    init() {
      let el, name, sc;
      if ((g.VIEW !== 'thread') || !Conf['Thread Updater']) { return; }
      this.enabled = true;

      // Chromium won't play audio created in an inactive tab until the tab has been focused, so set it up now.
      // XXX Sometimes the loading stalls in Firefox, esp. when opening in private browsing window followed by normal window.
      // Don't let it keep the loading icon on indefinitely.
      this.audio = $$1.el('audio');
      if ($$1.engine !== 'gecko') { this.audio.src = this.beep; }

      if (Conf['Updater and Stats in Header']) {
        this.dialog = (sc = $$1.el('span',
          {id:        'updater'}));
        $$1.extend(sc, {innerHTML: '<span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>'});
        Header$1.addShortcut('updater', sc, 100);
      } else {
        this.dialog = (sc = UI.dialog('updater',
          {innerHTML: '<div class="move"></div><span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>'}));
        $$1.addClass(doc$1, 'float');
        $$1.ready(() => $$1.add(d$1.body, sc));
      }

      this.checkPostCount = 0;

      this.timer  = $$1('#update-timer', sc);
      this.status = $$1('#update-status', sc);

      $$1.on(this.timer,  'click', this.update);
      $$1.on(this.status, 'click', this.update);

      const updateLink = $$1.el('span',
        {className: 'brackets-wrap updatelink'});
      $$1.extend(updateLink, {innerHTML: '<a href="javascript:;">Update</a>'});
      Main$1.ready(function() {
        let navLinksBot;
        if (navLinksBot = $$1('.navLinksBot')) { return $$1.add(navLinksBot, [$$1.tn(' '), updateLink]); }
      });
      $$1.on(updateLink.firstElementChild, 'click', this.update);

      const subEntries = [];
      for (name in Config.updater.checkbox) {
        var conf = Config.updater.checkbox[name];
        el = UI.checkbox(name, name);
        el.title = conf[1];
        var input = el.firstElementChild;
        $$1.on(input, 'change', $$1.cb.checked);
        if (input.name === 'Scroll BG') {
          $$1.on(input, 'change', this.cb.scrollBG);
          this.cb.scrollBG();
        } else if (input.name === 'Auto Update') {
          $$1.on(input, 'change', this.setInterval);
        }
        subEntries.push({el});
      }

      this.settings = $$1.el('span',
        {innerHTML: '<a href="javascript:;">Interval</a>'});

      $$1.on(this.settings, 'click', this.intervalShortcut);

      subEntries.push({el: this.settings});

      Header$1.menu.addEntry(this.entry = {
        el: $$1.el('span',
          {textContent: 'Updater'}),
        order: 110,
        subEntries
      }
      );

      return Callbacks.Thread.push({
        name: 'Thread Updater',
        cb:   this.node
      });
    },

    node() {
      ThreadUpdater.thread       = this;
      ThreadUpdater.root         = this.nodes.root;
      ThreadUpdater.outdateCount = 0;

      // We must keep track of our own list of live posts/files
      // to provide an accurate deletedPosts/deletedFiles on update
      // as posts may be `kill`ed elsewhere.
      ThreadUpdater.postIDs = [];
      ThreadUpdater.fileIDs = [];
      this.posts.forEach(function(post) {
        ThreadUpdater.postIDs.push(post.ID);
        if (post.file) { return ThreadUpdater.fileIDs.push(post.ID); }
      });

      ThreadUpdater.cb.interval.call($$1.el('input', {value: Conf['Interval']}));

      $$1.on(d$1,      'QRPostSuccessful', ThreadUpdater.cb.checkpost);
      $$1.on(d$1,      'visibilitychange', ThreadUpdater.cb.visibility);

      return ThreadUpdater.setInterval();
    },

    /*
    http://freesound.org/people/pierrecartoons1979/sounds/90112/
    cc-by-nc-3.0
    */
    beep: `data:audio/wav;base64,${Beep}`,

    playBeep() {
      const {audio} = ThreadUpdater;
      if (!audio.src) { audio.src = ThreadUpdater.beep; }
      if (audio.paused) {
        return audio.play();
      } else {
        return $$1.one(audio, 'ended', ThreadUpdater.playBeep);
      }
    },

    cb: {
      checkpost(e) {
        if (e.detail.threadID !== ThreadUpdater.thread.ID) { return; }
        ThreadUpdater.postID = e.detail.postID;
        ThreadUpdater.checkPostCount = 0;
        ThreadUpdater.outdateCount = 0;
        return ThreadUpdater.setInterval();
      },

      visibility() {
        if (d$1.hidden) { return; }
        // Reset the counter when we focus this tab.
        ThreadUpdater.outdateCount = 0;
        if (ThreadUpdater.seconds > ThreadUpdater.interval) {
          return ThreadUpdater.setInterval();
        }
      },

      scrollBG() {
        return ThreadUpdater.scrollBG = Conf['Scroll BG'] ?
          () => true
        :
          () => !d$1.hidden;
      },

      interval(e) {
        let val = parseInt(this.value, 10);
        if (val < 1) { val = 1; }
        ThreadUpdater.interval = (this.value = val);
        if (e) { return $$1.cb.value.call(this); }
      },

      load() {
        if (this !== ThreadUpdater.req) { return; } // aborted
        switch (this.status) {
          case 200:
            ThreadUpdater.parse(this);
            if (ThreadUpdater.thread.isArchived) {
              return ThreadUpdater.kill();
            } else {
              return ThreadUpdater.setInterval();
            }
          case 404:
            // XXX workaround for 4chan sending false 404s
            return $$1.ajax(g.SITE.urls.catalogJSON({boardID: ThreadUpdater.thread.board.ID}), { onloadend() {
              let confirmed;
              if (this.status === 200) {
                confirmed = true;
                for (var page of this.response) {
                  for (var thread of page.threads) {
                    if (thread.no === ThreadUpdater.thread.ID) {
                      confirmed = false;
                      break;
                    }
                  }
                }
              } else {
                confirmed = false;
              }
              if (confirmed) {
                return ThreadUpdater.kill();
              } else {
                return ThreadUpdater.error(this);
              }
            }
          }
            );
          default:
            return ThreadUpdater.error(this);
        }
      }
    },

    kill() {
      ThreadUpdater.thread.kill();
      ThreadUpdater.setInterval();
      return $$1.event('ThreadUpdate', {
        404: true,
        threadID: ThreadUpdater.thread.fullID
      }
      );
    },

    error(req) {
      if (req.status === 304) {
        ThreadUpdater.set('status', '');
      }
      ThreadUpdater.setInterval();
      if (!req.status) {
        return ThreadUpdater.set('status', 'Connection Error', 'warning');
      } else if (req.status !== 304) {
        return ThreadUpdater.set('status', `${req.statusText} (${req.status})`, 'warning');
      }
    },

    setInterval() {
      clearTimeout(ThreadUpdater.timeoutID);

      if (ThreadUpdater.thread.isDead) {
        ThreadUpdater.set('status', (ThreadUpdater.thread.isArchived ? 'Archived' : '404'), 'warning');
        ThreadUpdater.set('timer', '');
        return;
      }

      // Fetching your own posts after posting
      if (ThreadUpdater.postID && (ThreadUpdater.checkPostCount < 5)) {
        ThreadUpdater.set('timer', '...', 'loading');
        ThreadUpdater.timeoutID = setTimeout(ThreadUpdater.update, ++ThreadUpdater.checkPostCount * SECOND);
        return;
      }

      if (!Conf['Auto Update']) {
        ThreadUpdater.set('timer', 'Update');
        return;
      }

      const {interval} = ThreadUpdater;
      if (Conf['Optional Increase']) {
        // Lower the max refresh rate limit on visible tabs.
        const limit = d$1.hidden ? 10 : 5;
        const j     = Math.min(ThreadUpdater.outdateCount, limit);

        // 1 second to 100, 30 to 300.
        const cur = (Math.floor(interval * 0.1) || 1) * j * j;
        ThreadUpdater.seconds = $$1.minmax(cur, interval, 300);
      } else {
        ThreadUpdater.seconds = interval;
      }

      return ThreadUpdater.timeout();
    },

    intervalShortcut() {
      Settings.open('Advanced');
      const settings = $$1.id('fourchanx-settings');
      return $$1('input[name=Interval]', settings).focus();
    },

    set(name, text, klass) {
      let node;
      const el = ThreadUpdater[name];
      if ((node = el.firstChild)) {
        // Prevent the creation of a new DOM Node
        // by setting the text node's data.
        node.data = text;
      } else {
        el.textContent = text;
      }
      return el.className = klass ?? (text === '' ? 'empty' : '');
    },

    timeout() {
      if (ThreadUpdater.seconds) {
        ThreadUpdater.set('timer', ThreadUpdater.seconds);
        ThreadUpdater.timeoutID = setTimeout(ThreadUpdater.timeout, 1000);
      } else {
        ThreadUpdater.outdateCount++;
        ThreadUpdater.update();
      }
      return ThreadUpdater.seconds--;
    },

    update() {
      let oldReq;
      clearTimeout(ThreadUpdater.timeoutID);
      ThreadUpdater.set('timer', '...', 'loading');
      if (oldReq = ThreadUpdater.req) {
        delete ThreadUpdater.req;
        oldReq.abort();
      }
      return ThreadUpdater.req = $$1.whenModified(
        g.SITE.urls.threadJSON({boardID: ThreadUpdater.thread.board.ID, threadID: ThreadUpdater.thread.ID}),
        'ThreadUpdater',
        ThreadUpdater.cb.load,
        { timeout: MINUTE }
      );
    },

    updateThreadStatus(type, status) {
      if (!(ThreadUpdater.thread[`is${type}`] !== status)) { return; }
      ThreadUpdater.thread.setStatus(type, status);
      if ((type === 'Closed') && ThreadUpdater.thread.isArchived) { return; }
      const change = type === 'Sticky' ?
        status ?
          'now a sticky'
        :
          'not a sticky anymore'
      :
        status ?
          'now closed'
        :
          'not closed anymore';
      return new Notice('info', `The thread is ${change}.`, 30);
    },

    parse(req) {
      let ID, ipCountEl, post;
      const postObjects = req.response.posts;
      const OP = postObjects[0];
      const {thread} = ThreadUpdater;
      const {board} = thread;
      const lastPost = ThreadUpdater.postIDs[ThreadUpdater.postIDs.length - 1];

      // XXX Reject updates that falsely delete the last post.
      if ((postObjects[postObjects.length-1].no < lastPost) &&
        ((new Date(req.getResponseHeader('Last-Modified')) - thread.posts.get(lastPost).info.date) < (30 * SECOND))) { return; }

      g.SITE.Build.spoilerRange[board] = OP.custom_spoiler;
      thread.setStatus('Archived', !!OP.archived);
      ThreadUpdater.updateThreadStatus('Sticky', !!OP.sticky);
      ThreadUpdater.updateThreadStatus('Closed', !!OP.closed);
      thread.postLimit = !!OP.bumplimit;
      thread.fileLimit = !!OP.imagelimit;
      if (OP.unique_ips != null) { thread.ipCount   = OP.unique_ips; }

      const posts    = []; // new post objects
      const index    = []; // existing posts
      const files    = []; // existing files
      const newPosts = []; // new post fullID list for API

      // Build the index, create posts.
      for (var postObject of postObjects) {
        ID = postObject.no;
        index.push(ID);
        if (postObject.fsize) { files.push(ID); }

        // Insert new posts, not older ones.
        if (ID <= lastPost) { continue; }

        // XXX Resurrect wrongly deleted posts.
        if ((post = thread.posts.get(ID)) && !post.isFetchedQuote) {
          post.resurrect();
          continue;
        }

        newPosts.push(`${board}.${ID}`);
        var node = g.SITE.Build.postFromObject(postObject, board.ID);
        posts.push(new Post(node, thread, board));
        // Fetching your own posts after posting
        if (ThreadUpdater.postID === ID) { delete ThreadUpdater.postID; }
      }

      // Check for deleted posts.
      const deletedPosts = [];
      for (ID of ThreadUpdater.postIDs) {
        if (!index.includes(ID)) {
          thread.posts.get(ID).kill();
          deletedPosts.push(`${board}.${ID}`);
        }
      }
      ThreadUpdater.postIDs = index;

      // Check for deleted files.
      const deletedFiles = [];
      for (ID of ThreadUpdater.fileIDs) {
        if (!(files.includes(ID) || deletedPosts.includes(`${board}.${ID}`))) {
          thread.posts.get(ID).kill(true);
          deletedFiles.push(`${board}.${ID}`);
        }
      }
      ThreadUpdater.fileIDs = files;

      if (!posts.length) {
        ThreadUpdater.set('status', '');
      } else {
        ThreadUpdater.set('status', `+${posts.length}`, 'new');
        ThreadUpdater.outdateCount = 0;

        const unreadCount   = Unread.posts?.size;
        const unreadQYCount = Unread.postsQuotingYou?.size;

        Main$1.callbackNodes('Post', posts);

        if (d$1.hidden || !d$1.hasFocus()) {
          if (Conf['Beep Quoting You'] && (Unread.postsQuotingYou?.size > unreadQYCount)) {
            ThreadUpdater.playBeep();
            if (Conf['Beep']) { ThreadUpdater.playBeep(); }
          } else if (Conf['Beep'] && (Unread.posts?.size > 0) && (unreadCount === 0)) {
            ThreadUpdater.playBeep();
          }
        }

        const scroll = Conf['Auto Scroll'] && ThreadUpdater.scrollBG() &&
          ((ThreadUpdater.root.getBoundingClientRect().bottom - doc$1.clientHeight) < 25);

        let firstPost = null;
        for (post of posts) {
          if (!QuoteThreading.insert(post)) {
            if (!firstPost) { firstPost = post.nodes.root; }
            $$1.add(ThreadUpdater.root, post.nodes.root);
          }
        }
        $$1.event('PostsInserted', null, ThreadUpdater.root);

        if (scroll) {
          if (Conf['Bottom Scroll']) {
            window.scrollTo(0, d$1.body.clientHeight);
          } else {
            if (firstPost) { Header$1.scrollTo(firstPost); }
          }
        }
      }

      // Update IP count in original post form.
      if ((OP.unique_ips != null) && (ipCountEl = $$1.id('unique-ips'))) {
        ipCountEl.textContent = OP.unique_ips;
        ipCountEl.previousSibling.textContent = ipCountEl.previousSibling.textContent.replace(/\b(?:is|are)\b/, OP.unique_ips === 1 ? 'is' : 'are');
        ipCountEl.nextSibling.textContent = ipCountEl.nextSibling.textContent.replace(/\bposters?\b/, OP.unique_ips === 1 ? 'poster' : 'posters');
      }

      return $$1.event('ThreadUpdate', {
        404: false,
        threadID: thread.fullID,
        newPosts,
        deletedPosts,
        deletedFiles,
        postCount: OP.replies + 1,
        fileCount: OP.images + !!OP.fsize,
        ipCount: OP.unique_ips
      }
      );
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Settings = {
      dialog: undefined,
      init() {
          // 4chan X settings link
          const link = $$1.el('a', {
              className: 'settings-link',
              textContent: '🔧︎',
              title: `${meta.name} Settings`,
              href: 'javascript:;'
          });
          $$1.on(link, 'click', Settings.open);
          Header$1.addShortcut('settings', link, 820);
          const add = this.addSection;
          add('Main', this.main);
          add('Filter', this.filter);
          add('Sauce', this.sauce);
          add('Advanced', this.advanced);
          add('Keybinds', this.keybinds);
          $$1.on(d$1, 'AddSettingsSection', Settings.addSection);
          $$1.on(d$1, 'OpenSettings', e => Settings.open(e.detail));
          if ((g.SITE.software === 'yotsuba') && Conf['Disable Native Extension']) {
              if ($$1.hasStorage) {
                  // Run in page context to handle case where 4chan X has localStorage access but not the page.
                  // (e.g. Pale Moon 26.2.2, GM 3.8, cookies disabled for 4chan only)
                  return $$1.global(function () {
                      try {
                          const settings = JSON.parse(localStorage.getItem('4chan-settings')) || {};
                          if (settings.disableAll) {
                              return;
                          }
                          settings.disableAll = true;
                          return localStorage.setItem('4chan-settings', JSON.stringify(settings));
                      }
                      catch (error) {
                          return Object.defineProperty(window, 'Config', { value: { disableAll: true } });
                      }
                  });
              }
              else {
                  return $$1.global(() => Object.defineProperty(window, 'Config', { value: { disableAll: true } }));
              }
          }
      },
      open(openSection) {
          let dialog, sectionToOpen;
          if (Settings.dialog) {
              return;
          }
          $$1.event('CloseMenu');
          Settings.dialog = (dialog = $$1.el('div', { id: 'overlay' }, settingsHtml));
          $$1.on($$1('.export', dialog), 'click', Settings.export);
          $$1.on($$1('.import', dialog), 'click', Settings.import);
          $$1.on($$1('.reset', dialog), 'click', Settings.reset);
          $$1.on($$1('input', dialog), 'change', Settings.onImport);
          const links = [];
          for (var section of Settings.sections) {
              var link = $$1.el('a', {
                  className: `tab-${section.hyphenatedTitle}`,
                  textContent: section.title,
                  href: 'javascript:;'
              });
              $$1.on(link, 'click', Settings.openSection.bind(section));
              links.push(link, $$1.tn(' | '));
              if (section.title === openSection) {
                  sectionToOpen = link;
              }
          }
          links.pop();
          $$1.add($$1('.sections-list', dialog), links);
          if (openSection !== 'none') {
              (sectionToOpen ? sectionToOpen : links[0]).click();
          }
          $$1.on($$1('.close', dialog), 'click', Settings.close);
          $$1.on(window, 'beforeunload', Settings.close);
          $$1.on(dialog, 'click', () => {
              // Do not close when the mouse ends up outside the modal when selecting text in an input.
              if (d$1.activeElement?.tagName === 'INPUT' || d$1.activeElement?.tagName === 'TEXTAREA')
                  return;
              Settings.close();
          });
          $$1.on(dialog.firstElementChild, 'click', e => e.stopPropagation());
          $$1.add(d$1.body, dialog);
          return $$1.event('OpenSettings', null, dialog);
      },
      close() {
          if (!Settings.dialog) {
              return;
          }
          // Unfocus current field to trigger change event.
          d$1.activeElement?.blur();
          $$1.rm(Settings.dialog);
          return delete Settings.dialog;
      },
      sections: [],
      addSection(title, open) {
          if (typeof title !== 'string') {
              ({ title, open } = title.detail);
          }
          const hyphenatedTitle = title.toLowerCase().replace(/\s+/g, '-');
          return Settings.sections.push({ title, hyphenatedTitle, open });
      },
      openSection() {
          let selected;
          if (selected = $$1('.tab-selected', Settings.dialog)) {
              $$1.rmClass(selected, 'tab-selected');
          }
          $$1.addClass($$1(`.tab-${this.hyphenatedTitle}`, Settings.dialog), 'tab-selected');
          const section = $$1('section', Settings.dialog);
          $$1.rmAll(section);
          section.className = `section-${this.hyphenatedTitle}`;
          this.open(section, g);
          section.scrollTop = 0;
          return $$1.event('OpenSettings', null, section);
      },
      warnings: {
          localStorage(cb) {
              if ($$1.cantSync) {
                  const why = $$1.cantSet ? 'save your settings' : 'synchronize settings between tabs';
                  return cb($$1.el('li', {
                      textContent: `\
${meta.name} needs local storage to ${why}.
Enable it on boards.${location.hostname.split('.')[1]}.org in your browser's privacy settings (may be listed as part of "local data" or "cookies").\
`
                  }));
              }
          },
          ads(cb) {
              return $$1.onExists(doc$1, '.adg-rects > .desktop', ad => $$1.onExists(ad, 'iframe', function () {
                  const url = Redirect$1.to('thread', { boardID: 'qa', threadID: 362590 });
                  return cb($$1.el('li', h(hFragment, null,
                      "To protect yourself from ",
                      h("a", { href: url, target: "_blank" }, "malicious ads"),
                      ", you should ",
                      h("a", { href: "https://github.com/gorhill/uBlock#ublock-origin", target: "_blank" }, "block ads"),
                      " on 4chan.")));
              }));
          }
      },
      main(section) {
          let key;
          const warnings = $$1.el('fieldset', { hidden: true }, { innerHTML: '<legend>Warnings</legend><ul></ul>' });
          const addWarning = function (item) {
              $$1.add($$1('ul', warnings), item);
              return warnings.hidden = false;
          };
          for (key in Settings.warnings) {
              var warning = Settings.warnings[key];
              warning(addWarning);
          }
          $$1.add(section, warnings);
          const items = dict();
          const inputs = dict();
          const addCheckboxes = function (root, obj) {
              const containers = [root];
              return (() => {
                  const result = [];
                  for (key in obj) {
                      var arr = obj[key];
                      if (arr instanceof Array) {
                          var description = arr[1];
                          var div = $$1.el('div', { innerHTML: `<label><input type="checkbox" name="${key}">${key}</label><span class="description">: ${description}</span>` });
                          div.dataset.name = key;
                          var input = $$1('input', div);
                          $$1.on(input, 'change', $$1.cb.checked);
                          $$1.on(input, 'change', function () { return this.parentNode.parentNode.dataset.checked = this.checked; });
                          items[key] = Conf[key];
                          inputs[key] = input;
                          var level = arr[2] || 0;
                          if (containers.length <= level) {
                              var container = $$1.el('div', { className: 'suboption-list' });
                              $$1.add(containers[containers.length - 1].lastElementChild, container);
                              containers[level] = container;
                          }
                          else if (containers.length > (level + 1)) {
                              containers.splice(level + 1, containers.length - (level + 1));
                          }
                          result.push($$1.add(containers[level], div));
                      }
                  }
                  return result;
              })();
          };
          for (var keyFS in Config.main) {
              var obj = Config.main[keyFS];
              var fs = $$1.el('fieldset', { innerHTML: `<legend>${keyFS}</legend>` });
              addCheckboxes(fs, obj);
              if (keyFS === 'Posting and Captchas') {
                  $$1.add(fs, $$1.el('p', { innerHTML: 'For more info on captcha options and issues, see the <a href="' + meta.captchaFAQ + '" target="_blank">captcha FAQ</a>.' }));
              }
              $$1.add(section, fs);
          }
          addCheckboxes($$1('div[data-name="JSON Index"] > .suboption-list', section), Config.Index);
          // Unsupported options
          if ($$1.engine !== 'gecko') {
              $$1('div[data-name="Remember QR Size"]', section).hidden = true;
          }
          if ($$1.perProtocolSettings || (location.protocol !== 'https:')) {
              $$1('div[data-name="Redirect to HTTPS"]', section).hidden = true;
          }
          if (platform !== 'crx') {
              $$1('div[data-name="Work around CORB Bug"]', section).hidden = true;
          }
          $$1.get(items, function (items) {
              for (key in items) {
                  var val = items[key];
                  inputs[key].checked = val;
                  inputs[key].parentNode.parentNode.dataset.checked = val;
              }
          });
          const div = $$1.el('div', { innerHTML: '<button></button><span class="description">: Clear manually-hidden threads and posts on all boards. Reload the page to apply.' });
          const button = $$1('button', div);
          $$1.get({ hiddenThreads: dict(), hiddenPosts: dict() }, function ({ hiddenThreads, hiddenPosts }) {
              let board, ID, site, thread;
              let hiddenNum = 0;
              for (ID in hiddenThreads) {
                  site = hiddenThreads[ID];
                  if (ID !== 'boards') {
                      for (ID in site.boards) {
                          board = site.boards[ID];
                          hiddenNum += Object.keys(board).length;
                      }
                  }
              }
              for (ID in hiddenThreads.boards) {
                  board = hiddenThreads.boards[ID];
                  hiddenNum += Object.keys(board).length;
              }
              for (ID in hiddenPosts) {
                  site = hiddenPosts[ID];
                  if (ID !== 'boards') {
                      for (ID in site.boards) {
                          board = site.boards[ID];
                          for (ID in board) {
                              thread = board[ID];
                              hiddenNum += Object.keys(thread).length;
                          }
                      }
                  }
              }
              for (ID in hiddenPosts.boards) {
                  board = hiddenPosts.boards[ID];
                  for (ID in board) {
                      thread = board[ID];
                      hiddenNum += Object.keys(thread).length;
                  }
              }
              return button.textContent = `Hidden: ${hiddenNum}`;
          });
          $$1.on(button, 'click', function () {
              this.textContent = 'Hidden: 0';
              return $$1.get('hiddenThreads', dict(), function ({ hiddenThreads }) {
                  if ($$1.hasStorage && (g.SITE.software === 'yotsuba')) {
                      let boardID;
                      for (boardID in hiddenThreads['4chan.org']?.boards) {
                          localStorage.removeItem(`4chan-hide-t-${boardID}`);
                      }
                      for (boardID in hiddenThreads.boards) {
                          localStorage.removeItem(`4chan-hide-t-${boardID}`);
                      }
                  }
                  return ($$1.delete(['hiddenThreads', 'hiddenPosts']));
              });
          });
          return $$1.after($$1('input[name="Stubs"]', section).parentNode.parentNode, div);
      },
      export() {
          // Make sure to export the most recent data, but don't overwrite existing `Conf` object.
          const Conf2 = dict();
          $$1.extend(Conf2, Conf);
          return $$1.get(Conf2, function (Conf2) {
              // Don't export cached JSON data.
              delete Conf2['boardConfig'];
              return (Settings.downloadExport({ version: g.VERSION, date: Date.now(), Conf: Conf2 }));
          });
      },
      downloadExport(data) {
          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = $$1.el('a', {
              download: `${meta.name} v${g.VERSION}-${data.date}.json`,
              href: url
          });
          const p = $$1('.imp-exp-result', Settings.dialog);
          $$1.rmAll(p);
          $$1.add(p, a);
          return a.click();
      },
      import() {
          return $$1('input[type=file]', this.parentNode).click();
      },
      onImport() {
          let file;
          if (!(file = this.files[0])) {
              return;
          }
          this.value = null;
          const output = $$1('.imp-exp-result');
          if (!confirm('Your current settings will be entirely overwritten, are you sure?')) {
              output.textContent = 'Import aborted.';
              return;
          }
          const reader = new FileReader();
          reader.onload = function (e) {
              try {
                  return Settings.loadSettings(dict.json(e.target.result), function (err) {
                      if (err) {
                          return output.textContent = 'Import failed due to an error.';
                      }
                      else if (confirm('Import successful. Reload now?')) {
                          return window.location.reload();
                      }
                  });
              }
              catch (error) {
                  const err = error;
                  output.textContent = 'Import failed due to an error.';
                  return c.error(err.stack);
              }
          };
          return reader.readAsText(file);
      },
      convertFrom: {
          loadletter(data) {
              const convertSettings = function (data, map) {
                  for (var prevKey in map) {
                      var newKey = map[prevKey];
                      if (newKey) {
                          data.Conf[newKey] = data.Conf[prevKey];
                      }
                      delete data.Conf[prevKey];
                  }
                  return data;
              };
              data = convertSettings(data, {
                  // General confs
                  'Disable 4chan\'s extension': 'Disable Native Extension',
                  'Comment Auto-Expansion': '',
                  'Remove Slug': '',
                  'Always HTTPS': 'Redirect to HTTPS',
                  'Check for Updates': '',
                  'Recursive Filtering': 'Recursive Hiding',
                  'Reply Hiding': 'Reply Hiding Buttons',
                  'Thread Hiding': 'Thread Hiding Buttons',
                  'Show Stubs': 'Stubs',
                  'Image Auto-Gif': 'Replace GIF',
                  'Expand All WebM': 'Expand videos',
                  'Reveal Spoilers': 'Reveal Spoiler Thumbnails',
                  'Expand From Current': 'Expand from here',
                  'Current Page': 'Page Count in Stats',
                  'Current Page Position': '',
                  'Alternative captcha': 'Use Recaptcha v1',
                  'Alt index captcha': 'Use Recaptcha v1 on Index',
                  'Auto Submit': 'Post on Captcha Completion',
                  'Open Reply in New Tab': 'Open Post in New Tab',
                  'Remember QR size': 'Remember QR Size',
                  'Remember Subject': '',
                  'Quote Inline': 'Quote Inlining',
                  'Quote Preview': 'Quote Previewing',
                  'Indicate OP quote': 'Mark OP Quotes',
                  'Indicate You quote': 'Mark Quotes of You',
                  'Indicate Cross-thread Quotes': 'Mark Cross-thread Quotes',
                  // filter
                  'uniqueid': 'uniqueID',
                  'mod': 'capcode',
                  'email': '',
                  'country': 'flag',
                  'md5': 'MD5',
                  // keybinds
                  'openEmptyQR': 'Open empty QR',
                  'openQR': 'Open QR',
                  'openOptions': 'Open settings',
                  'close': 'Close',
                  'spoiler': 'Spoiler tags',
                  'sageru': 'Toggle sage',
                  'code': 'Code tags',
                  'sjis': 'SJIS tags',
                  'submit': 'Submit QR',
                  'watch': 'Watch',
                  'update': 'Update',
                  'unreadCountTo0': '',
                  'expandAllImages': 'Expand images',
                  'expandImage': 'Expand image',
                  'zero': 'Front page',
                  'nextPage': 'Next page',
                  'previousPage': 'Previous page',
                  'nextThread': 'Next thread',
                  'previousThread': 'Previous thread',
                  'expandThread': 'Expand thread',
                  'openThreadTab': 'Open thread',
                  'openThread': 'Open thread tab',
                  'nextReply': 'Next reply',
                  'previousReply': 'Previous reply',
                  'hide': 'Hide',
                  // updater
                  'Scrolling': 'Auto Scroll',
                  'Verbose': ''
              });
              if ('Always CDN' in data.Conf) {
                  data.Conf['fourchanImageHost'] = data.Conf['Always CDN'] ? 'i.4cdn.org' : '';
                  delete data.Conf['Always CDN'];
              }
              data.Conf.sauces = data.Conf.sauces.replace(/\$\d/g, function (c) {
                  switch (c) {
                      case '$1':
                          return '%TURL';
                      case '$2':
                          return '%URL';
                      case '$3':
                          return '%MD5';
                      case '$4':
                          return '%board';
                      default:
                          return c;
                  }
              });
              for (var key in Config.hotkeys) {
                  Config.hotkeys[key];
                  if (key in data.Conf) {
                      data.Conf[key] = data.Conf[key].replace(/ctrl|alt|meta/g, s => `${s[0].toUpperCase()}${s.slice(1)}`).replace(/(^|.+\+)[A-Z]$/g, s => `Shift+${s.slice(0, -1)}${s.slice(-1).toLowerCase()}`);
                  }
              }
              if (data.WatchedThreads) {
                  data.Conf['watchedThreads'] = dict.clone({ '4chan.org': { boards: {} } });
                  for (var boardID in data.WatchedThreads) {
                      var threads = data.WatchedThreads[boardID];
                      for (var threadID in threads) {
                          var threadData = threads[threadID];
                          (data.Conf['watchedThreads']['4chan.org'].boards[boardID] || (data.Conf['watchedThreads']['4chan.org'].boards[boardID] = dict()))[threadID] = { excerpt: threadData.textContent };
                      }
                  }
              }
              return data;
          }
      },
      upgrade(data, version) {
          let corrupted, key, val;
          const changes = dict();
          const set = (key, value) => data[key] = (changes[key] = value);
          const setD = function (key, value) {
              if (data[key] == null) {
                  return set(key, value);
              }
          };
          const addSauces = function (sauces) {
              if (data['sauces'] != null) {
                  sauces = sauces.filter(s => data['sauces'].indexOf(s.match(/[^#;\s]+|$/)[0]) < 0);
                  if (sauces.length) {
                      return set('sauces', data['sauces'] + '\n\n' + sauces.join('\n'));
                  }
              }
          };
          const addCSS = function (css) {
              if (data['usercss'] == null) {
                  set('usercss', Config['usercss']);
              }
              if (data['usercss'].indexOf(css) < 0) {
                  return set('usercss', css + '\n\n' + data['usercss']);
              }
          };
          // XXX https://github.com/greasemonkey/greasemonkey/issues/2600
          if (corrupted = (version[0] === '"')) {
              try {
                  version = JSON.parse(version);
              }
              catch (error) { }
          }
          const compareString = version.replace(/\d+/g, x => ('0000' + x).slice(-5));
          if (compareString < '00001.00013.00014.00008') {
              for (key in data) {
                  val = data[key];
                  if ((typeof val === 'string') && (typeof Conf[key] !== 'string') && !['Index Sort', 'Last Long Reply Thresholds 0', 'Last Long Reply Thresholds 1'].includes(key)) {
                      corrupted = true;
                      break;
                  }
              }
          }
          if (corrupted) {
              for (key in data) {
                  val = data[key];
                  if (typeof val === 'string') {
                      try {
                          var val2 = JSON.parse(val);
                          set(key, val2);
                      }
                      catch (error1) { }
                  }
              }
          }
          if (compareString < '00001.00011.00008.00000') {
              if (data['Fixed Thread Watcher'] == null) {
                  set('Fixed Thread Watcher', data['Toggleable Thread Watcher'] ?? true);
              }
              if (data['Exempt Archives from Encryption'] == null) {
                  set('Exempt Archives from Encryption', data['Except Archives from Encryption'] ?? false);
              }
          }
          if (compareString < '00001.00011.00010.00001') {
              if (data['selectedArchives'] != null) {
                  const uids = { "Moe": 0, "4plebs Archive": 3, "Nyafuu Archive": 4, "Love is Over": 5, "Rebecca Black Tech": 8, "warosu": 10, "fgts": 15, "not4plebs": 22, "DesuStorage": 23, "fireden.net": 24, "disabled": null };
                  for (var boardID in data['selectedArchives']) {
                      var record = data['selectedArchives'][boardID];
                      for (var type in record) {
                          var name = record[type];
                          if ($$1.hasOwn(uids, name)) {
                              record[type] = uids[name];
                          }
                      }
                  }
                  set('selectedArchives', data['selectedArchives']);
              }
          }
          if (compareString < '00001.00011.00016.00000') {
              let rice;
              if (rice = Config['usercss'].match(/\/\* Board title rice \*\/(?:\n.+)*/)[0]) {
                  if ((data['usercss'] != null) && (data['usercss'].indexOf(rice) < 0)) {
                      set('usercss', rice + '\n\n' + data['usercss']);
                  }
              }
          }
          if (compareString < '00001.00011.00017.00000') {
              for (key of ['Persistent QR', 'Color User IDs', 'Fappe Tyme', 'Werk Tyme', 'Highlight Posts Quoting You', 'Highlight Own Posts']) {
                  if (data[key] == null) {
                      set(key, (key === 'Persistent QR'));
                  }
              }
          }
          if (compareString < '00001.00011.00017.00006') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*)http:\/\/iqdb\.org\//mg, '$1//iqdb.org/'));
              }
          }
          if ((compareString < '00001.00011.00019.00003') && !Settings.dialog) {
              $$1.queueTask(() => Settings.warnings.ads(item => new Notice('warning', [...item.childNodes])));
          }
          if (compareString < '00001.00011.00020.00003') {
              const object = { 'Inline Cross-thread Quotes Only': false, 'Pass Link': true };
              for (key in object) {
                  var value = object[key];
                  if (data[key] == null) {
                      set(key, value);
                  }
              }
          }
          if (compareString < '00001.00011.00021.00003') {
              if (data['Remember Your Posts'] == null) {
                  set('Remember Your Posts', data['Mark Quotes of You'] ?? true);
              }
          }
          if (compareString < '00001.00011.00022.00000') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|URL))%3Fs\.jpg/mg, '$1'));
                  set('sauces', data['sauces'].replace(/^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|T?URL)(?=$|;)/mg, '$&&safe=off'));
              }
          }
          if (compareString < '00001.00011.00022.00002') {
              if ((data['Use Recaptcha v1 in Reports'] == null) && data['Use Recaptcha v1'] && !data['Use Recaptcha v2 in Reports']) {
                  set('Use Recaptcha v1 in Reports', true);
              }
          }
          if (compareString < '00001.00011.00024.00000') {
              if ((data['JSON Navigation'] != null) && (data['JSON Index'] == null)) {
                  set('JSON Index', data['JSON Navigation']);
              }
          }
          if (compareString < '00001.00011.00026.00000') {
              if ((data['Oekaki Links'] != null) && (data['Edit Link'] == null)) {
                  set('Edit Link', data['Oekaki Links']);
              }
              if (data['Inline Cross-thread Quotes Only'] == null) {
                  set('Inline Cross-thread Quotes Only', true);
              }
          }
          if (compareString < '00001.00011.00030.00000') {
              if (data['Quote Threading'] && (data['Thread Quotes'] == null)) {
                  set('Thread Quotes', true);
              }
          }
          if (compareString < '00001.00011.00032.00000') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*)http:\/\/3d\.iqdb\.org\//mg, '$1//3d.iqdb.org/'));
              }
              addSauces([
                  '#https://desustorage.org/_/search/image/%sMD5/',
                  '#https://boards.fireden.net/_/search/image/%sMD5/',
                  '#https://foolz.fireden.net/_/search/image/%sMD5/',
                  '#//www.gif-explode.com/%URL;types:gif'
              ]);
          }
          if (compareString < '00001.00011.00035.00000') {
              addSauces(['https://whatanime.ga/?auto&url=%IMG;text:wait']);
          }
          if (compareString < '00001.00012.00000.00000') {
              if (data['Exempt Archives from Encryption'] == null) {
                  set('Exempt Archives from Encryption', false);
              }
              if (data['Show New Thread Option in Threads'] == null) {
                  set('Show New Thread Option in Threads', false);
              }
              if (data['Show Name and Subject']) {
                  addCSS('#qr .persona .field {display: block !important;}');
              }
              if (data['QR Shortcut'] === false) {
                  addCSS('#shortcut-qr {display: none;}');
              }
              if (data['Bottom QR Link'] === false) {
                  addCSS('.qr-link-container-bottom {display: none;}');
              }
          }
          if (compareString < '00001.00012.00000.00006') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*)https:\/\/(?:desustorage|cuckchan)\.org\//mg, '$1https://desuarchive.org/'));
              }
          }
          if (compareString < '00001.00012.00001.00000') {
              if ((data['Persistent Thread Watcher'] == null) && (data['Toggleable Thread Watcher'] != null)) {
                  set('Persistent Thread Watcher', !data['Toggleable Thread Watcher']);
              }
          }
          if (compareString < '00001.00012.00003.00000') {
              for (key of ['Image Hover in Catalog', 'Auto Watch', 'Auto Watch Reply']) {
                  setD(key, false);
              }
          }
          if (compareString < '00001.00013.00001.00002') {
              addSauces(['#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights']);
          }
          if (compareString < '00001.00013.00005.00000') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*)http:\/\/regex\.info\/exif\.cgi/mg, '$1http://exif.regex.info/exif.cgi'));
              }
              addSauces(Config['sauces'].match(/# Known filename formats:(?:\n.+)*|$/)[0].split('\n'));
          }
          if (compareString < '00001.00013.00007.00002') {
              setD('Require OP Quote Link', true);
          }
          if (compareString < '00001.00013.00008.00000') {
              setD('Download Link', true);
          }
          if (compareString < '00001.00013.00009.00003') {
              if (data['jsWhitelist'] != null) {
                  const list = data['jsWhitelist'].split('\n');
                  if (!list.includes('https://cdnjs.cloudflare.com') && list.includes('https://cdn.mathjax.org')) {
                      set('jsWhitelist', data['jsWhitelist'] + '\n\nhttps://cdnjs.cloudflare.com');
                  }
              }
          }
          if (compareString < '00001.00014.00000.00006') {
              if (data['siteSoftware'] != null) {
                  set('siteSoftware', data['siteSoftware'] + '\n4cdn.org yotsuba');
              }
          }
          if (compareString < '00001.00014.00003.00002') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*)https:\/\/whatanime\.ga\//mg, '$1https://trace.moe/'));
              }
          }
          if (compareString < '00001.00014.00004.00004') {
              if ((data['siteSoftware'] != null) && !/^4channel\.org yotsuba$/m.test(data['siteSoftware'])) {
                  set('siteSoftware', data['siteSoftware'] + '\n4channel.org yotsuba');
              }
          }
          if (compareString < '00001.00014.00005.00000') {
              for (var db of DataBoard.keys) {
                  if (data[db]?.boards) {
                      var { boards, lastChecked } = data[db];
                      data[db]['4chan.org'] = { boards, lastChecked };
                      delete data[db].boards;
                      delete data[db].lastChecked;
                      set(db, data[db]);
                  }
              }
              if ((data['siteSoftware'] != null) && (data['siteProperties'] == null)) {
                  const siteProperties = dict();
                  for (var line of data['siteSoftware'].split('\n')) {
                      var [hostname, software] = line.split(' ');
                      siteProperties[hostname] = { software };
                  }
                  set('siteProperties', siteProperties);
              }
          }
          if (compareString < '00001.00014.00006.00006') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/\/\/%\$1\.deviantart\.com\/gallery\/#\/d%\$2;regexp:\/\^\\w\+_by_\(\\w\+\)-d\(\[\\da-z\]\+\)\//g, '//www.deviantart.com/gallery/#/d%$1%$2;regexp:/^\\w+_by_\\w+[_-]d([\\da-z]{6})\\b|^d([\\da-z]{6})-[\\da-z]{8}-/'));
              }
          }
          if (compareString < '00001.00014.00008.00000') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/https:\/\/www\.yandex\.com\/images\/search/g, 'https://yandex.com/images/search'));
              }
          }
          if (compareString < '00001.00014.00009.00000') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/^(#?\s*)(?:http:)?\/\/(www\.pixiv\.net|www\.deviantart\.com|imgur\.com|flickr\.com)\//mg, '$1https://$2/'));
                  set('sauces', data['sauces'].replace(/https:\/\/yandex\.com\/images\/search\?rpt=imageview&img_url=%IMG/g, 'https://yandex.com/images/search?rpt=imageview&url=%IMG'));
              }
          }
          if (compareString < '00001.00014.00009.00001') {
              if ((data['Use Faster Image Host'] != null) && (data['fourchanImageHost'] == null)) {
                  set('fourchanImageHost', (data['Use Faster Image Host'] ? 'i.4cdn.org' : ''));
              }
          }
          if (compareString < '00001.00014.00010.00001') {
              if (data['Filter in Native Catalog'] == null) {
                  set('Filter in Native Catalog', false);
              }
          }
          if (compareString < '00001.00014.00012.00008') {
              if (data['boardnav'] == null) {
                  set('boardnav', `\
[ toggle-all ]
a-replace
c-replace
g-replace
k-replace
v-replace
vg-replace
vr-replace
ck-replace
co-replace
fit-replace
jp-replace
mu-replace
sp-replace
tv-replace
vp-replace
[external-text:"FAQ","${meta.faq}"]\
`);
              }
          }
          if (compareString < '00001.00014.00016.00001') {
              if (data['archiveLists'] != null) {
                  set('archiveLists', data['archiveLists'].replace('https://mayhemydg.github.io/archives.json/archives.json', 'https://nstepien.github.io/archives.json/archives.json'));
              }
          }
          if (compareString < '00001.00014.00016.00007') {
              if (data['sauces'] != null) {
                  set('sauces', data['sauces'].replace(/https:\/\/www\.deviantart\.com\/gallery\/#\/d%\$1%\$2;regexp:\/\^\\w\+_by_\\w\+\[_-\]d\(\[\\da-z\]\{6\}\)\\b\|\^d\(\[\\da-z\]\{6\}\)-\[\\da-z\]\{8\}-\//g, 'javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/').replace(/\/\/imgops\.com\/%URL/g, '//imgops.com/start?url=%URL'));
              }
          }
          if (compareString < '00001.00014.00017.00002') {
              if (data['jsWhitelist'] != null) {
                  set('jsWhitelist', data['jsWhitelist'] + '\n\nhttps://hcaptcha.com\nhttps://*.hcaptcha.com');
              }
          }
          if (compareString < '00001.00014.00020.00004') {
              if (data['archiveLists'] != null) {
                  set('archiveLists', data['archiveLists'].replace('https://nstepien.github.io/archives.json/archives.json', 'https://4chenz.github.io/archives.json/archives.json'));
              }
          }
          if (compareString < '00001.00014.00022.00003') {
              if (data['sauces']) {
                  set('sauces', data['sauces'].replace(/^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(IMG|T?URL)&safe=off(?=$|;)/mg, 'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'));
                  if (compareString === '00001.00014.00022.00002' && !/\bsbisrc=/.test(data['sauces'])) {
                      set('sauces', data['sauces'].replace(/^#?\s*https:\/\/lens\.google\.com\/uploadbyurl\?url=%(IMG|T?URL)(?=$|;)/m, 'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'));
                  }
              }
          }
          return changes;
      },
      loadSettings(data, cb) {
          if (data.version.split('.')[0] === '2') { // https://github.com/loadletter/4chan-x
              data = Settings.convertFrom.loadletter(data);
          }
          else if (data.version !== g.VERSION) {
              Settings.upgrade(data.Conf, data.version);
          }
          return $$1.clear(function (err) {
              if (err) {
                  return cb(err);
              }
              return $$1.set(data.Conf, cb);
          });
      },
      reset() {
          if (confirm('Your current settings will be entirely wiped, are you sure?')) {
              return $$1.clear(function (err) {
                  if (err) {
                      return $$1('.imp-exp-result').textContent = 'Import failed due to an error.';
                  }
                  else if (confirm('Reset successful. Reload now?')) {
                      return window.location.reload();
                  }
              });
          }
      },
      filter(section) {
          $$1.extend(section, { innerHTML: FilterSelectPage });
          const select = $$1('select', section);
          $$1.on(select, 'change', Settings.selectFilter);
          return Settings.selectFilter.call(select);
      },
      selectFilter() {
          let name;
          const div = this.nextElementSibling;
          if ((name = this.value) !== 'guide') {
              if (!$$1.hasOwn(Config.filter, name)) {
                  return;
              }
              $$1.rmAll(div);
              const ta = $$1.el('textarea', {
                  name,
                  className: 'field',
                  spellcheck: false
              });
              $$1.on(ta, 'change', $$1.cb.value);
              $$1.get(name, Conf[name], function (item) {
                  ta.value = item[name];
                  return $$1.add(div, ta);
              });
              return;
          }
          Object.keys(Config.filter).filter(x => x !== 'general').map((x, i) => ({
              innerHTML: (i ? "," : "") + `<wbr>${E(x)}`
          }));
          $$1.extend(div, { innerHTML: FilterGuidePage });
          return $$1('.warning', div).hidden = Conf['Filter'];
      },
      sauce(section) {
          $$1.extend(section, { innerHTML: SaucePage });
          $$1('.warning', section).hidden = Conf['Sauce'];
          const ta = $$1('textarea', section);
          $$1.get('sauces', Conf['sauces'], function (item) {
              ta.value = item['sauces'];
              return (ta.hidden = false);
          }); // XXX prevent Firefox from adding initialization to undo queue
          return $$1.on(ta, 'change', $$1.cb.value);
      },
      advanced(section) {
          let input, name;
          $$1.extend(section, { innerHTML: AdvancedPage });
          for (var warning of $$('.warning', section)) {
              warning.hidden = Conf[warning.dataset.feature];
          }
          const inputs = dict();
          for (input of $$('[name]', section)) {
              inputs[input.name] = input;
          }
          $$1.on(inputs['archiveLists'], 'change', function () {
              $$1.set('lastarchivecheck', 0);
              Conf['lastarchivecheck'] = 0;
              return $$1.id('lastarchivecheck').textContent = 'never';
          });
          const items = dict();
          for (name in inputs) {
              input = inputs[name];
              if (!['Interval', 'Custom CSS'].includes(name)) {
                  items[name] = Conf[name];
                  var event = ((input.nodeName === 'SELECT') ||
                      ['checkbox', 'radio'].includes(input.type) ||
                      ((input.nodeName === 'TEXTAREA') && !(name in Settings))) ? 'change' : 'input';
                  $$1.on(input, event, $$1.cb[input.type === 'checkbox' ? 'checked' : 'value']);
                  if (name in Settings) {
                      $$1.on(input, event, Settings[name]);
                  }
              }
          }
          $$1.get(items, function (items) {
              for (var key in items) {
                  var val = items[key];
                  input = inputs[key];
                  input[input.type === 'checkbox' ? 'checked' : 'value'] = val;
                  input.hidden = false; // XXX prevent Firefox from adding initialization to undo queue
                  if (key in Settings) {
                      Settings[key].call(input);
                  }
              }
          });
          const listImageHost = $$1.id('list-fourchanImageHost');
          for (var textContent of ImageHost.suggestions) {
              $$1.add(listImageHost, $$1.el('option', { textContent }));
          }
          const interval = inputs['Interval'];
          const customCSS = inputs['Custom CSS'];
          const applyCSS = $$1('#apply-css', section);
          interval.value = Conf['Interval'];
          customCSS.checked = Conf['Custom CSS'];
          inputs['usercss'].disabled = !Conf['Custom CSS'];
          applyCSS.disabled = !Conf['Custom CSS'];
          $$1.on(interval, 'change', ThreadUpdater.cb.interval);
          $$1.on(customCSS, 'change', Settings.togglecss);
          $$1.on(applyCSS, 'click', () => CustomCSS.update());
          const itemsArchive = dict();
          for (name of ['archives', 'selectedArchives', 'lastarchivecheck']) {
              itemsArchive[name] = Conf[name];
          }
          $$1.get(itemsArchive, function (itemsArchive) {
              $$1.extend(Conf, itemsArchive);
              Redirect$1.selectArchives();
              return Settings.addArchiveTable(section);
          });
          const boardSelect = $$1('#archive-board-select', section);
          const table = $$1('#archive-table', section);
          const updateArchives = $$1('#update-archives', section);
          $$1.on(boardSelect, 'change', function () {
              $$1('tbody > :not([hidden])', table).hidden = true;
              return $$1(`tbody > .${this.value}`, table).hidden = false;
          });
          return $$1.on(updateArchives, 'click', () => Redirect$1.update(() => Settings.addArchiveTable(section)));
      },
      addArchiveTable(section) {
          let boardID, o;
          $$1('#lastarchivecheck', section).textContent = Conf['lastarchivecheck'] === 0 ?
              'never'
              :
                  new Date(Conf['lastarchivecheck']).toLocaleString();
          const boardSelect = $$1('#archive-board-select', section);
          const table = $$1('#archive-table', section);
          const tbody = $$1('tbody', section);
          $$1.rmAll(boardSelect);
          $$1.rmAll(tbody);
          const archBoards = dict();
          for (var { uid, name, boards, files, software } of Conf['archives']) {
              if (!['fuuka', 'foolfuuka'].includes(software)) {
                  continue;
              }
              for (boardID of boards) {
                  o = archBoards[boardID] || (archBoards[boardID] = {
                      thread: [],
                      post: [],
                      file: []
                  });
                  var archive = [uid ?? name, name];
                  o.thread.push(archive);
                  if (software === 'foolfuuka') {
                      o.post.push(archive);
                  }
                  if (files.includes(boardID)) {
                      o.file.push(archive);
                  }
              }
          }
          const rows = [];
          const boardOptions = [];
          for (boardID of Object.keys(archBoards).sort()) { // Alphabetical order
              var row = $$1.el('tr', { className: `board-${boardID}` });
              row.hidden = boardID !== g.BOARD.ID;
              boardOptions.push($$1.el('option', {
                  textContent: `/${boardID}/`,
                  value: `board-${boardID}`,
                  selected: boardID === g.BOARD.ID
              }));
              o = archBoards[boardID];
              for (var item of ['thread', 'post', 'file']) {
                  $$1.add(row, Settings.addArchiveCell(boardID, o, item));
              }
              rows.push(row);
          }
          if (rows.length === 0) {
              boardSelect.hidden = (table.hidden = true);
              return;
          }
          boardSelect.hidden = (table.hidden = false);
          if (!(g.BOARD.ID in archBoards)) {
              rows[0].hidden = false;
          }
          $$1.add(boardSelect, boardOptions);
          $$1.add(tbody, rows);
          for (boardID in Conf['selectedArchives']) {
              var data = Conf['selectedArchives'][boardID];
              for (var type in data) {
                  var select;
                  var id = data[type];
                  if (select = $$1(`select[data-boardid='${boardID}'][data-type='${type}']`, tbody)) {
                      select.value = JSON.stringify(id);
                      if (!select.value) {
                          select.value = select.firstChild.value;
                      }
                  }
              }
          }
      },
      addArchiveCell(boardID, data, type) {
          const { length } = data[type];
          const td = $$1.el('td', { className: 'archive-cell' });
          if (!length) {
              td.textContent = '--';
              return td;
          }
          const options = [];
          let i = 0;
          while (i < length) {
              var archive = data[type][i++];
              options.push($$1.el('option', {
                  value: JSON.stringify(archive[0]),
                  textContent: archive[1]
              }));
          }
          $$1.extend(td, { innerHTML: '<select></select>' });
          const select = td.firstElementChild;
          if (!(select.disabled = length === 1)) {
              // XXX GM can't into datasets
              select.setAttribute('data-boardid', boardID);
              select.setAttribute('data-type', type);
              $$1.on(select, 'change', Settings.saveSelectedArchive);
          }
          $$1.add(select, options);
          return td;
      },
      saveSelectedArchive() {
          return $$1.get('selectedArchives', Conf['selectedArchives'], ({ selectedArchives }) => {
              (selectedArchives[this.dataset.boardid] || (selectedArchives[this.dataset.boardid] = dict()))[this.dataset.type] = JSON.parse(this.value);
              $$1.set('selectedArchives', selectedArchives);
              Conf['selectedArchives'] = selectedArchives;
              return Redirect$1.selectArchives();
          });
      },
      boardnav() {
          return Header$1.generateBoardList(this.value);
      },
      time() {
          return this.nextElementSibling.textContent = Time.format(this.value, new Date());
      },
      timeLocale() {
          return Settings.time.call($$1('[name=time]', Settings.dialog));
      },
      backlink() {
          return this.nextElementSibling.textContent = this.value.replace(/%(?:id|%)/g, x => ({ '%id': '123456789', '%%': '%' })[x]);
      },
      fileInfo() {
          const data = {
              isReply: true,
              file: {
                  url: `//${ImageHost.host()}/g/1334437723720.jpg`,
                  name: 'd9bb2efc98dd0df141a94399ff5880b7.jpg',
                  size: '276 KB',
                  sizeInBytes: 276 * 1024,
                  dimensions: '1280x720',
                  isImage: true,
                  isVideo: false,
                  isSpoiler: true,
                  tag: 'Loop'
              }
          };
          return FileInfo.format(this.value, data, this.nextElementSibling);
      },
      favicon() {
          Favicon.switch();
          if ((g.VIEW === 'thread') && Conf['Unread Favicon']) {
              Unread.update();
          }
          const img = this.nextElementSibling.children;
          const f = Favicon;
          const iterable = [f.SFW, f.unreadSFW, f.unreadSFWY, f.NSFW, f.unreadNSFW, f.unreadNSFWY, f.dead, f.unreadDead, f.unreadDeadY];
          for (let i = 0; i < iterable.length; i++) {
              var icon = iterable[i];
              if (!img[i]) {
                  $$1.add(this.nextElementSibling, $$1.el('img'));
              }
              img[i].src = icon;
          }
      },
      togglecss() {
          if (($$1('textarea[name=usercss]', $$1.x('ancestor::fieldset[1]', this)).disabled = ($$1.id('apply-css').disabled = !this.checked))) {
              CustomCSS.rmStyle();
          }
          else {
              CustomCSS.addStyle();
          }
          return $$1.cb.checked.call(this);
      },
      keybinds(section) {
          let key;
          $$1.extend(section, { innerHTML: KeybindsPage });
          $$1('.warning', section).hidden = Conf['Keybinds'];
          const tbody = $$1('tbody', section);
          const items = dict();
          const inputs = dict();
          for (key in Config.hotkeys) {
              var arr = Config.hotkeys[key];
              var tr = $$1.el('tr', { innerHTML: `<td>${arr[1]}</td><td><input class="field"></td>` });
              var input = $$1('input', tr);
              input.name = key;
              input.spellcheck = false;
              items[key] = Conf[key];
              inputs[key] = input;
              $$1.on(input, 'keydown', Settings.keybind);
              $$1.add(tbody, tr);
          }
          return $$1.get(items, function (items) {
              for (key in items) {
                  var val = items[key];
                  inputs[key].value = val;
              }
          });
      },
      keybind(e) {
          let key;
          if (e.keyCode === 9) {
              return;
          } // tab
          e.preventDefault();
          e.stopPropagation();
          if ((key = Keybinds.keyCode(e)) == null) {
              return;
          }
          this.value = key;
          return $$1.cb.value.call(this);
      }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var FappeTyme = {
    init() {
      if ((!Conf['Fappe Tyme'] && !Conf['Werk Tyme']) || !['index', 'thread', 'archive'].includes(g.VIEW)) { return; }

      this.nodes = {};
      this.enabled = {
        fappe: false,
        werk:  Conf['werk']
      };

      for (var type of ["Fappe", "Werk"]) {
        if (Conf[`${type} Tyme`]) {
          var lc = type.toLowerCase();
          var el = UI.checkbox(lc, `${type} Tyme`, false);
          el.title = `${type} Tyme`;

          this.nodes[lc] = el.firstElementChild;
          if (Conf[lc]) { this.set(lc, true); }
          $$1.on(this.nodes[lc], 'change', this.toggle.bind(this, lc));

          Header$1.menu.addEntry({
            el,
            order: 97
          });

          var indicator = $$1.el('span', {
            className: 'indicator',
            textContent: type[0],
            title: `${type} Tyme active`
          }
          );
          $$1.on(indicator, 'click', function() {
            const check = $$1.getOwn(FappeTyme.nodes, this.parentNode.id.replace('shortcut-', ''));
            check.checked = !check.checked;
            return $$1.event('change', null, check);
          });
          Header$1.addShortcut(lc, indicator, 410);
        }
      }

      if (Conf['Werk Tyme']) {
        $$1.sync('werk', this.set.bind(this, 'werk'));
      }

      Callbacks.Post.push({
        name: 'Fappe Tyme',
        cb:   this.node
      });

      return Callbacks.CatalogThread.push({
        name: 'Werk Tyme',
        cb:   this.catalogNode
      });
    },

    node() {
      return this.nodes.root.classList.toggle('noFile', !this.files.length);
    },

    catalogNode() {
      const file = this.thread.OP.files[0];
      if (!file) { return; }
      const filename = $$1.el('div', {
        textContent: file.name,
        className:   'werkTyme-filename'
      }
      );
      return $$1.add(this.nodes.thumb.parentNode, filename);
    },

    set(type, enabled) {
      this.enabled[type] = (this.nodes[type].checked = enabled);
      return $$1[`${enabled ? 'add' : 'rm'}Class`](doc$1, `${type}Tyme`);
    },

    toggle(type) {
      this.set(type, !this.enabled[type]);
      if (type === 'werk') { return $$1.cb.checked.call(this.nodes[type]); }
    }
  };

  var galleryPage = `<div class="gal-viewport">
  <span class="gal-buttons">
    <a href="javascript:;" class="gal-start" title="Start slideshow"><i></i></a>
    <a href="javascript:;" class="gal-stop" title="Stop slideshow"><i></i></a>
    <a href="javascript:;" class="menu-button"><i></i></a>
    <a href="javascript:;" class="gal-close">×</a>
  </span>
  <div class="gal-labels">
    <span class="gal-count">
      <span class="count"></span> / <span class="total"></span>
    </span>
    <a class="gal-name" target="_blank"></a>
    <span class="gal-sauce"></span>
  </div>
  <div class="gal-prev"></div>
  <div class="gal-image">
    <a href="javascript:;"><img></a>
  </div>
  <div class="gal-next"></div>
</div>
<div class="gal-thumbnails"></div>
`;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS204: Change includes calls to have a more natural evaluation order
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Sauce = {
    init() {
      let link;
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Sauce']) { return; }
      $$1.addClass(doc$1, 'show-sauce');

      const links = [];
      for (link of Conf['sauces'].split('\n')) {
        var linkData;
        if ((link[0] !== '#') && (linkData = this.parseLink(link))) {
          links.push(linkData);
        }
      }
      if (!links.length) { return; }

      this.links = links;
      this.link  = $$1.el('a', {
        target:    '_blank',
        className: 'sauce'
      }
      );
      return Callbacks.Post.push({
        name: 'Sauce',
        cb:   this.node
      });
    },

    parseLink(link) {
      if (!(link = link.trim())) { return null; }
      const parts = dict();
      const iterable = link.split(/;(?=(?:text|boards|types|regexp|sandbox):?)/);
      for (let i = 0; i < iterable.length; i++) {
        var part = iterable[i];
        if (i === 0) {
          parts['url'] = part;
        } else {
          var m = part.match(/^(\w*):?(.*)$/);
          parts[m[1]] = m[2];
        }
      }
      if (!parts['text']) { parts['text'] = parts['url'].match(/(\w+)\.\w+\//)?.[1] || '?'; }
      if ('boards' in parts) {
        parts['boards'] = Filter.parseBoards(parts['boards']);
      }
      if ('regexp' in parts) {
        try {
          let regexp;
          if (regexp = parts['regexp'].match(/^\/(.*)\/(\w*)$/)) {
            parts['regexp'] = RegExp(regexp[1], regexp[2]);
          } else {
            parts['regexp'] = RegExp(parts['regexp']);
          }
        } catch (err) {
          new Notice('warning', [
            $$1.tn("Invalid regexp for Sauce link:"),
            $$1.el('br'),
            $$1.tn(link),
            $$1.el('br'),
            $$1.tn(err.message)
          ], 60);
          return null;
        }
      }
      return parts;
    },

    createSauceLink(link, post, file) {
      let a, matches, needle;
      const ext = file.url.match(/[^.]*$/)[0];
      const parts = dict();
      $$1.extend(parts, link);

      if (!!parts['boards'] && !parts['boards'][`${post.siteID}/${post.boardID}`] && !parts['boards'][`${post.siteID}/*`]) { return null; }
      if (!!parts['types']  && (needle = ext, !parts['types'].split(',').includes(needle))) { return null; }
      if (!!parts['regexp'] && (!(matches = file.name.match(parts['regexp'])))) { return null; }

      const missing = [];
      for (var key of ['url', 'text']) {
        parts[key] = parts[key].replace(/%(T?URL|IMG|[sh]?MD5|board|name|%|semi|\$\d+)/g, function(orig, parameter) {
          let type;
          if (parameter[0] === '$') {
            if (!matches) { return orig; }
            type = matches[parameter.slice(1)] || '';
          } else {
            type = Sauce.formatters[parameter](post, file, ext);
            if ((type == null)) {
              missing.push(parameter);
              return '';
            }
          }

          if ((key === 'url') && !['%', 'semi'].includes(parameter)) {
            if (/^javascript:/i.test(parts['url'])) { type = JSON.stringify(type); }
            type = encodeURIComponent(type);
          }
          return type;
        });
      }

      if (g.SITE.areMD5sDeferred?.(post.board) && missing.length && !missing.filter(x => !/^.?MD5$/.test(x)).length) {
        a = Sauce.link.cloneNode(false);
        a.dataset.skip = '1';
        return a;
      }

      if (missing.length) { return null; }

      a = Sauce.link.cloneNode(false);
      a.href = parts['url'];
      a.textContent = parts['text'];
      if (/^javascript:/i.test(parts['url'])) { a.removeAttribute('target'); }
      return a;
    },

    node() {
      if (this.isClone) { return; }
      for (var file of this.files) {
        Sauce.file(this, file);
      }
    },

    file(post, file) {
      let link, node;
      const nodes = [];
      const skipped = [];
      for (link of Sauce.links) {
        if (node = Sauce.createSauceLink(link, post, file)) {
          nodes.push($$1.tn(' '), node);
          if (node.dataset.skip) { skipped.push([link, node]); }
        }
      }
      $$1.add(file.text, nodes);

      if (skipped.length) {
        var observer = new MutationObserver(function() {
          if (file.text.dataset.md5) {
            for ([link, node] of skipped) {
              var node2;
              if (node2 = Sauce.createSauceLink(link, post, file)) {
                $$1.replace(node, node2);
              }
            }
            return observer.disconnect();
          }
        });
        return observer.observe(file.text, {attributes: true});
      }
    },

    formatters: {
      TURL(post, file) { return file.thumbURL; },
      URL(post, file) { return file.url; },
      IMG(post, file, ext) { if (['gif', 'jpg', 'jpeg', 'png'].includes(ext)) { return file.url; } else { return file.thumbURL; } },
      MD5(post, file) { return file.MD5; },
      sMD5(post, file) { return file.MD5?.replace(/[+/=]/g, c => ({'+': '-', '/': '_', '=': ''})[c]); },
      hMD5(post, file) { if (file.MD5) { return (atob(file.MD5).map((c) => `0${c.charCodeAt(0).toString(16)}`.slice(-2))).join(''); } },
      board(post) { return post.board.ID; },
      name(post, file) { return file.name; },
      '%'() { return '%'; },
      semi() { return ';'; }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var Gallery = {
    init() {
      if (!(this.enabled = Conf['Gallery'] && ['index', 'thread'].includes(g.VIEW))) { return; }

      this.delay = Conf['Slide Delay'];

      const el = $$1.el('a', {
        href: 'javascript:;',
        title: 'Gallery',
        textContent: '🖼︎',
      });

      $$1.on(el, 'click', this.cb.toggle);

      Header$1.addShortcut('gallery', el, 530);

      return Callbacks.Post.push({
        name: 'Gallery',
        cb:   this.node
      });
    },

    node() {
      return (() => {
        const result = [];
        for (var file of this.files) {
          if (file.thumb) {
            if (Gallery.nodes) {
              Gallery.generateThumb(this, file);
              Gallery.nodes.total.textContent = Gallery.images.length;
            }

            if (!Conf['Image Expansion'] && ((g.SITE.software !== 'tinyboard') || !Main$1.jsEnabled)) {
              result.push($$1.on(file.thumbLink, 'click', Gallery.cb.image));
            } else {
              result.push(undefined);
            }
          }
        }
        return result;
      })();
    },

    build(image) {
      let dialog, thumb;
      const {cb} = Gallery;

      if (Conf['Fullscreen Gallery']) {
        $$1.one(d$1, 'fullscreenchange mozfullscreenchange webkitfullscreenchange', () => $$1.on(d$1, 'fullscreenchange mozfullscreenchange webkitfullscreenchange', cb.close));
        doc$1.mozRequestFullScreen?.();
        doc$1.webkitRequestFullScreen?.(Element.ALLOW_KEYBOARD_INPUT);
      }

      Gallery.images  = [];
      const nodes = (Gallery.nodes = {});
      Gallery.fileIDs = dict();
      Gallery.slideshow = false;

      nodes.el = (dialog = $$1.el('div',
        {id: 'a-gallery'}));
      $$1.extend(dialog, {innerHTML: galleryPage });

      const object = {
        buttons: '.gal-buttons',
        frame:   '.gal-image',
        name:    '.gal-name',
        count:   '.count',
        total:   '.total',
        sauce:   '.gal-sauce',
        thumbs:  '.gal-thumbnails',
        next:    '.gal-image a',
        current: '.gal-image img'
      };
      for (var key in object) { var value = object[key]; nodes[key] = $$1(value, dialog); }

      const menuButton = $$1('.menu-button', dialog);
      nodes.menu = new UI.Menu('gallery');

      $$1.on(nodes.frame, 'click', cb.blank);
      if (Conf['Mouse Wheel Volume']) { $$1.on(nodes.frame, 'wheel', Volume.wheel); }
      $$1.on(nodes.next,  'click', cb.click);
      $$1.on(nodes.name,  'click', ImageCommon.download);

      $$1.on($$1('.gal-prev',  dialog), 'click', cb.prev);
      $$1.on($$1('.gal-next',  dialog), 'click', cb.next);
      $$1.on($$1('.gal-start', dialog), 'click', cb.start);
      $$1.on($$1('.gal-stop',  dialog), 'click', cb.stop);
      $$1.on($$1('.gal-close', dialog), 'click', cb.close);

      $$1.on(menuButton, 'click', function(e) {
        return nodes.menu.toggle(e, this, g);
      });

      for (var entry of Gallery.menu.createSubEntries()) {
        entry.order = 0;
        nodes.menu.addEntry(entry);
      }

      $$1.on(d$1, 'keydown', cb.keybinds);
      if (Conf['Keybinds']) { $$1.off(d$1, 'keydown', Keybinds.keydown); }

      $$1.on(window, 'resize', Gallery.cb.setHeight);

      for (var postThumb of $$(g.SITE.selectors.file.thumb)) {
        var post;
        if (!(post = Get$1.postFromNode(postThumb))) { continue; }
        for (var file of post.files) {
          if (file.thumb) {
            Gallery.generateThumb(post, file);
            // If no image to open is given, pick image we have scrolled to.
            if (!image && Gallery.fileIDs[`${post.fullID}.${file.index}`]) {
              var candidate = file.thumbLink;
              if ((Header$1.getTopOf(candidate) + candidate.getBoundingClientRect().height) >= 0) {
                image = candidate;
              }
            }
          }
        }
      }
      $$1.addClass(doc$1, 'gallery-open');

      $$1.add(d$1.body, dialog);

      nodes.thumbs.scrollTop = 0;
      nodes.current.parentElement.scrollTop = 0;

      if (image) { thumb = $$1(`[href='${image.href}']`, nodes.thumbs); }
      if (!thumb) { thumb = Gallery.images[Gallery.images.length-1]; }
      if (thumb) { Gallery.open(thumb); }

      doc$1.style.overflow = 'hidden';
      return nodes.total.textContent = Gallery.images.length;
    },

    generateThumb(post, file) {
      if (post.isClone || post.isHidden) { return; }
      if (!file || !file.thumb || (!file.isImage && !file.isVideo && !Conf['PDF in Gallery'])) { return; }
      if (Gallery.fileIDs[`${post.fullID}.${file.index}`]) { return; }

      Gallery.fileIDs[`${post.fullID}.${file.index}`] = true;

      const thumb = $$1.el('a', {
        className: 'gal-thumb',
        href:      file.url,
        target:    '_blank',
        title:     file.name
      }
      );

      thumb.dataset.id   = Gallery.images.length;
      thumb.dataset.post = post.fullID;
      thumb.dataset.file = file.index;

      const thumbImg = file.thumb.cloneNode(false);
      thumbImg.style.cssText = '';
      $$1.add(thumb, thumbImg);

      $$1.on(thumb, 'click', Gallery.cb.open);

      Gallery.images.push(thumb);
      return $$1.add(Gallery.nodes.thumbs, thumb);
    },

    load(thumb, errorCB) {
      const ext = thumb.href.match(/\w*$/);
      const elType = $$1.getOwn({'webm': 'video', 'mp4': 'video', 'ogv': 'video', 'pdf': 'iframe'}, ext) || 'img';
      const file = $$1.el(elType);
      $$1.extend(file.dataset, thumb.dataset);
      $$1.on(file, 'error', errorCB);
      file.src = thumb.href;
      return file;
    },

    open(thumb) {
      let el, file, post;
      const {nodes} = Gallery;
      const oldID = +nodes.current.dataset.id;
      const newID = +thumb.dataset.id;

      // Highlight, center selected thumbnail
      if (el = Gallery.images[oldID]) { $$1.rmClass(el,    'gal-highlight'); }
      $$1.addClass(thumb, 'gal-highlight');
      nodes.thumbs.scrollTop = (thumb.offsetTop + (thumb.offsetHeight/2)) - (nodes.thumbs.clientHeight/2);

      // Load image or use preloaded image
      if (Gallery.cache?.dataset.id === (''+newID)) {
        file = Gallery.cache;
        $$1.off(file, 'error', Gallery.cacheError);
        $$1.on(file, 'error', Gallery.error);
      } else {
        file = Gallery.load(thumb, Gallery.error);
      }

      // Replace old image with new one
      $$1.off(nodes.current, 'error', Gallery.error);
      ImageCommon.pause(nodes.current);
      $$1.replace(nodes.current, file);
      nodes.current = file;

      if (file.nodeName === 'VIDEO') {
        file.loop = true;
        Volume.setup(file);
        if (Conf['Autoplay']) { file.play(); }
        if (Conf['Show Controls']) { ImageCommon.addControls(file); }
      }

      doc$1.classList.toggle('gal-pdf', file.nodeName === 'IFRAME');
      Gallery.cb.setHeight();
      nodes.count.textContent = +thumb.dataset.id + 1;
      nodes.name.download     = (nodes.name.textContent = thumb.title);
      nodes.name.href         = thumb.href;
      nodes.frame.scrollTop   = 0;
      nodes.next.focus();

      // Set sauce links
      $$1.rmAll(nodes.sauce);
      if (Conf['Sauce'] && Sauce.links && (post = g.posts.get(file.dataset.post))) {
        const sauces = [];
        for (var link of Sauce.links) {
          var node;
          if (node = Sauce.createSauceLink(link, post, post.files[+file.dataset.file])) {
            sauces.push($$1.tn(' '), node);
          }
        }
        $$1.add(nodes.sauce, sauces);
      }

      // Continue slideshow if moving forward, stop otherwise
      if (Gallery.slideshow && ((newID > oldID) || ((oldID === (Gallery.images.length-1)) && (newID === 0)))) {
        Gallery.setupTimer();
      } else {
        Gallery.cb.stop();
      }

      // Scroll to post
      if (Conf['Scroll to Post'] && (post = g.posts.get(file.dataset.post))) {
        Header$1.scrollTo(post.nodes.root);
      }

      // Preload next image
      if (isNaN(oldID) || (newID === ((oldID + 1) % Gallery.images.length))) {
        return Gallery.cache = Gallery.load(Gallery.images[(newID + 1) % Gallery.images.length], Gallery.cacheError);
      }
    },

    error() {
      if (this.error?.code === MediaError.MEDIA_ERR_DECODE) {
        return new Notice('error', 'Corrupt or unplayable video', 30);
      }
      if (ImageCommon.isFromArchive(this)) { return; }
      const post = g.posts.get(this.dataset.post);
      const file = post.files[+this.dataset.file];
      return ImageCommon.error(this, post, file, null, url => {
        if (!url) { return; }
        Gallery.images[+this.dataset.id].href = url;
        if (Gallery.nodes.current === this) { return this.src = url; }
      });
    },

    cacheError() {
      return delete Gallery.cache;
    },

    cleanupTimer() {
      clearTimeout(Gallery.timeoutID);
      const {current} = Gallery.nodes;
      $$1.off(current, 'canplaythrough load', Gallery.startTimer);
      return $$1.off(current, 'ended', Gallery.cb.next);
    },

    startTimer() {
      return Gallery.timeoutID = setTimeout(Gallery.checkTimer, Gallery.delay * SECOND);
    },

    setupTimer() {
      Gallery.cleanupTimer();
      const {current} = Gallery.nodes;
      const isVideo = current.nodeName === 'VIDEO';
      if (isVideo) { current.play(); }
      if ((isVideo ? current.readyState >= 4 : current.complete) || (current.nodeName === 'IFRAME')) {
        return Gallery.startTimer();
      } else {
        return $$1.on(current, (isVideo ? 'canplaythrough' : 'load'), Gallery.startTimer);
      }
    },

    checkTimer() {
      const {current} = Gallery.nodes;
      if ((current.nodeName === 'VIDEO') && !current.paused) {
        $$1.on(current, 'ended', Gallery.cb.next);
        return current.loop = false;
      } else {
        return Gallery.cb.next();
      }
    },

    cb: {
      keybinds(e) {
        let key;
        if (!(key = Keybinds.keyCode(e))) { return; }

        const cb = (() => { switch (key) {
          case Conf['Close']: case Conf['Open Gallery']:
            return Gallery.cb.close;
          case Conf['Next Gallery Image']:
            return Gallery.cb.next;
          case Conf['Advance Gallery']:
            return Gallery.cb.advance;
          case Conf['Previous Gallery Image']:
            return Gallery.cb.prev;
          case Conf['Pause']:
            return Gallery.cb.pause;
          case Conf['Slideshow']:
            return Gallery.cb.toggleSlideshow;
          case Conf['Rotate image anticlockwise']:
            return Gallery.cb.rotateLeft;
          case Conf['Rotate image clockwise']:
            return Gallery.cb.rotateRight;
          case Conf['Download Gallery Image']:
            return Gallery.cb.download;
        } })();

        if (!cb) { return; }
        e.stopPropagation();
        e.preventDefault();
        return cb();
      },

      open(e) {
        if (e) { e.preventDefault(); }
        if (this) { return Gallery.open(this); }
      },

      image(e) {
        e.preventDefault();
        e.stopPropagation();
        return Gallery.build(this);
      },

      prev() {
        return Gallery.cb.open.call(
          Gallery.images[+Gallery.nodes.current.dataset.id - 1] || Gallery.images[Gallery.images.length - 1]
        );
      },
      next() {
        return Gallery.cb.open.call(
          Gallery.images[+Gallery.nodes.current.dataset.id + 1] || Gallery.images[0]
        );
      },

      click(e) {
        if (ImageCommon.onControls(e)) { return; }
        e.preventDefault();
        return Gallery.cb.advance();
      },

      advance() { if (!Conf['Autoplay'] && Gallery.nodes.current.paused) { return Gallery.nodes.current.play(); } else { return Gallery.cb.next(); } },
      toggle() { return (Gallery.nodes ? Gallery.cb.close : Gallery.build)(); },
      blank(e) { if (e.target === this) { return Gallery.cb.close(); } },
      toggleSlideshow() {  return Gallery.cb[Gallery.slideshow ? 'stop' : 'start'](); },

      download() {
        const name = $$1('.gal-name');
        return name.click();
      },

      pause() {
        Gallery.cb.stop();
        const {current} = Gallery.nodes;
        if (current.nodeName === 'VIDEO') { return current[current.paused ? 'play' : 'pause'](); }
      },

      start() {
        $$1.addClass(Gallery.nodes.buttons, 'gal-playing');
        Gallery.slideshow = true;
        return Gallery.setupTimer();
      },

      stop() {
        if (!Gallery.slideshow) { return; }
        Gallery.cleanupTimer();
        const {current} = Gallery.nodes;
        if (current.nodeName === 'VIDEO') { current.loop = true; }
        $$1.rmClass(Gallery.nodes.buttons, 'gal-playing');
        return Gallery.slideshow = false;
      },

      rotateLeft() { return Gallery.cb.rotate(270); },
      rotateRight() { return Gallery.cb.rotate(90); },

      rotate: debounce(100, function(delta) {
        const {current} = Gallery.nodes;
        if (current.nodeName === 'IFRAME') { return; }
        current.dataRotate = ((current.dataRotate || 0) + delta) % 360;
        current.style.transform = `rotate(${current.dataRotate}deg)`;
        return Gallery.cb.setHeight();
      }),

      close() {
        $$1.off(Gallery.nodes.current, 'error', Gallery.error);
        ImageCommon.pause(Gallery.nodes.current);
        $$1.rm(Gallery.nodes.el);
        $$1.rmClass(doc$1, 'gallery-open');
        if (Conf['Fullscreen Gallery']) {
          $$1.off(d$1, 'fullscreenchange mozfullscreenchange webkitfullscreenchange', Gallery.cb.close);
          d$1.mozCancelFullScreen?.();
          d$1.webkitExitFullscreen?.();
        }
        delete Gallery.nodes;
        delete Gallery.fileIDs;
        doc$1.style.overflow = '';

        $$1.off(d$1, 'keydown', Gallery.cb.keybinds);
        if (Conf['Keybinds']) { $$1.on(d$1, 'keydown', Keybinds.keydown); }
        $$1.off(window, 'resize', Gallery.cb.setHeight);
        return clearTimeout(Gallery.timeoutID);
      },

      setFitness() {
        return (this.checked ? $$1.addClass : $$1.rmClass)(doc$1, `gal-${this.name.toLowerCase().replace(/\s+/g, '-')}`);
      },

      setHeight: debounce(100, function () {
        let dim, margin, minHeight;
        const {current, frame} = Gallery.nodes;
        const {style} = current;

        if (Conf['Stretch to Fit'] && (dim = g.posts.get(current.dataset.post)?.files[+current.dataset.file].dimensions)) {
          const [width, height] = dim.split('x');
          let containerWidth = frame.clientWidth;
          let containerHeight = doc$1.clientHeight - 25;
          if (((current.dataRotate || 0) % 180) === 90) {
            [containerWidth, containerHeight] = [containerHeight, containerWidth];
          }
          minHeight = Math.min(containerHeight, (height / width) * containerWidth);
          style.minHeight = minHeight + 'px';
          style.minWidth = ((width / height) * minHeight) + 'px';
        } else {
          style.minHeight = (style.minWidth = '');
        }

        if (((current.dataRotate || 0) % 180) === 90) {
          style.maxWidth  = Conf['Fit Height'] ? `${doc$1.clientHeight - 25}px` : 'none';
          style.maxHeight = Conf['Fit Width']  ? `${frame.clientWidth}px`     : 'none';
          margin = (current.clientWidth - current.clientHeight)/2;
          return style.margin = `${margin}px ${-margin}px`;
        } else {
          return style.maxWidth = (style.maxHeight = (style.margin = ''));
        }
      }),

      setDelay() { return Gallery.delay = +this.value; }
    },

    menu: {
      init() {
        if (!Gallery.enabled) { return; }

        const el = $$1.el('span', {
          textContent: 'Gallery',
          className: 'gallery-link'
        }
        );

        return Header$1.menu.addEntry({
          el,
          order: 105,
          subEntries: Gallery.menu.createSubEntries()
        });
      },

      createSubEntry(name) {
        const label = UI.checkbox(name, name);
        const input = label.firstElementChild;
        if (['Hide Thumbnails', 'Fit Width', 'Fit Height'].includes(name)) { $$1.on(input, 'change', Gallery.cb.setFitness); }
        $$1.event('change', null, input);
        $$1.on(input, 'change', $$1.cb.checked);
        if (['Hide Thumbnails', 'Fit Width', 'Fit Height', 'Stretch to Fit'].includes(name)) { $$1.on(input, 'change', Gallery.cb.setHeight); }
        return {el: label};
      },

      createSubEntries() {
        const subEntries = (['Hide Thumbnails', 'Fit Width', 'Fit Height', 'Stretch to Fit', 'Scroll to Post'].map((item) => Gallery.menu.createSubEntry(item)));

        const delayLabel = $$1.el('label', {innerHTML: 'Slide Delay: <input type="number" name="Slide Delay" min="0" step="any" class="field">'});
        const delayInput = delayLabel.firstElementChild;
        delayInput.value = Gallery.delay;
        $$1.on(delayInput, 'change', Gallery.cb.setDelay);
        $$1.on(delayInput, 'change', $$1.cb.value);
        subEntries.push({el: delayLabel});

        return subEntries;
      }
    }
  };

  var EmbeddingPage = `<div>
  <div class="move"></div>
  <a href="javascript:;" class="jump" title="Jump to post">→</a>
  <a href="javascript:;" class="close" title="Close">×</a>
</div>
<div id="media-embed"><div></div></div>
`;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var Embedding = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Linkify'] || (!Conf['Embedding'] && !Conf['Link Title'] && !Conf['Cover Preview'])) { return; }
      this.types = dict();
      for (var type of this.ordered_types) { this.types[type.key] = type; }

      if (Conf['Embedding'] && (g.VIEW !== 'archive')) {
        this.dialog = UI.dialog('embedding',
          { innerHTML: EmbeddingPage });
        this.media = $$1('#media-embed', this.dialog);
        $$1.one(d$1, '4chanXInitFinished', this.ready);
        $$1.on(d$1, 'IndexRefreshInternal', () => g.posts.forEach(function(post) {
          for (post of [post, ...post.clones]) {
            for (var embed of post.nodes.embedlinks) {
              Embedding.cb.catalogRemove.call(embed);
            }
          }
        }));
      }
      if (Conf['Link Title']) {
        return $$1.on(d$1, '4chanXInitFinished PostsInserted', function() {
          for (var key in Embedding.types) {
            var service = Embedding.types[key];
            if (service.title?.batchSize) {
              Embedding.flushTitles(service.title);
            }
          }
        });
      }
    },

    events(post) {
      let el, i, items;
      if (g.VIEW === 'archive') { return; }
      if (Conf['Embedding']) {
        i = 0;
        items = (post.nodes.embedlinks = $$('.embedder', post.nodes.comment));
        while ((el = items[i++])) {
          $$1.on(el, 'click', Embedding.cb.click);
          if ($$1.hasClass(el, 'embedded')) { Embedding.cb.toggle.call(el); }
        }
      }
      if (Conf['Cover Preview']) {
        i = 0;
        items = $$('.linkify', post.nodes.comment);
        while ((el = items[i++])) {
          var data;
          if (data = Embedding.services(el)) {
            Embedding.preview(data);
          }
        }
        return;
      }
    },

    process(link, post) {
      let data;
      if (!Conf['Embedding'] && !Conf['Link Title'] && !Conf['Cover Preview']) { return; }
      if ($$1.x('ancestor::pre', link)) { return; }
      if (data = Embedding.services(link)) {
        data.post = post;
        if (Conf['Embedding'] && (g.VIEW !== 'archive')) { Embedding.embed(data); }
        if (Conf['Link Title']) { Embedding.title(data); }
        if (Conf['Cover Preview'] && (g.VIEW !== 'archive')) { return Embedding.preview(data); }
      }
    },

    services(link) {
      const {href} = link;
      for (var type of Embedding.ordered_types) {
        var match;
        if (match = type.regExp.exec(href)) {
          return {key: type.key, uid: match[1], options: match[2], link};
        }
      }
    },

    embed(data) {
      const {key, uid, options, link, post} = data;
      const {href} = link;

      $$1.addClass(link, key.toLowerCase());

      const embed = $$1.el('a', {
        className:   'embedder',
        href:        'javascript:;'
      }
      ,
        {innerHTML: '(<span>un</span>embed)'});

      const object = {key, uid, options, href};
      for (var name in object) { var value = object[name]; embed.dataset[name] = value; }

      $$1.on(embed, 'click', Embedding.cb.click);
      $$1.after(link, [$$1.tn(' '), embed]);
      post.nodes.embedlinks.push(embed);

      if (Conf['Auto-embed'] && !Conf['Floating Embeds'] && !post.isFetchedQuote) {
        if ($$1.hasClass(doc$1, 'catalog-mode')) {
          return $$1.addClass(embed, 'embed-removed');
        } else {
          return Embedding.cb.toggle.call(embed);
        }
      }
    },

    ready() {
      if (!Main$1.isThisPageLegit()) { return; }
      $$1.addClass(Embedding.dialog, 'empty');
      $$1.on($$1('.close', Embedding.dialog), 'click',     Embedding.closeFloat);
      $$1.on($$1('.move',  Embedding.dialog), 'mousedown', Embedding.dragEmbed);
      $$1.on($$1('.jump',  Embedding.dialog), 'click', function() {
        if (doc$1.contains(Embedding.lastEmbed)) { return Header$1.scrollTo(Embedding.lastEmbed); }
      });
      return $$1.add(d$1.body, Embedding.dialog);
    },

    closeFloat() {
      delete Embedding.lastEmbed;
      $$1.addClass(Embedding.dialog, 'empty');
      return $$1.replace(Embedding.media.firstChild, $$1.el('div'));
    },

    dragEmbed() {
      // only webkit can handle a blocking div
      const {style} = Embedding.media;
      if (Embedding.dragEmbed.mouseup) {
        $$1.off(d$1, 'mouseup', Embedding.dragEmbed);
        Embedding.dragEmbed.mouseup = false;
        style.pointerEvents = '';
        return;
      }
      $$1.on(d$1, 'mouseup', Embedding.dragEmbed);
      Embedding.dragEmbed.mouseup = true;
      return style.pointerEvents = 'none';
    },

    title(data) {
      let service;
      const {key, uid, options, link, post} = data;
      if (!(service = Embedding.types[key].title)) { return; }
      $$1.addClass(link, key.toLowerCase());
      if (service.batchSize) {
        (service.queue || (service.queue = [])).push(data);
        if (service.queue.length >= service.batchSize) {
          return Embedding.flushTitles(service);
        }
      } else {
        return CrossOrigin$1.cache(service.api(uid), (function() { return Embedding.cb.title(this, data); }));
      }
    },

    flushTitles(service) {
      let data;
      const {queue} = service;
      if (!queue?.length) { return; }
      service.queue = [];
      const cb = function() {
        for (data of queue) { Embedding.cb.title(this, data); }
      };
      return CrossOrigin$1.cache(service.api((() => {
        const result = [];
        for (data of queue) {         result.push(data.uid);
        }
        return result;
      })()), cb);
    },

    preview(data) {
      let service;
      const {key, uid, link} = data;
      if (!(service = Embedding.types[key].preview)) { return; }
      return $$1.on(link, 'mouseover', function(e) {
        const src = service.url(uid);
        const {height} = service;
        const el = $$1.el('img', {
          src,
          id: 'ihover'
        }
        );
        $$1.add(Header$1.hover, el);
        return UI.hover({
          root: link,
          el,
          latestEvent: e,
          endEvents: 'mouseout click',
          height
        });
      });
    },

    cb: {
      click(e) {
        e.preventDefault();
        if (!$$1.hasClass(this, 'embedded') && (Conf['Floating Embeds'] || $$1.hasClass(doc$1, 'catalog-mode'))) {
          let div;
          if (!(div = Embedding.media.firstChild)) { return; }
          $$1.replace(div, Embedding.cb.embed(this));
          Embedding.lastEmbed = Get$1.postFromNode(this).nodes.root;
          return $$1.rmClass(Embedding.dialog, 'empty');
        } else {
          return Embedding.cb.toggle.call(this);
        }
      },

      toggle() {
        if ($$1.hasClass(this, "embedded")) {
          $$1.rm(this.nextElementSibling);
        } else {
          $$1.after(this, Embedding.cb.embed(this));
        }
        return $$1.toggleClass(this, 'embedded');
      },

      embed(a) {
        // We create an element to embed
        let el, type;
        const container = $$1.el('div', {className: 'media-embed'});
        $$1.add(container, (el = (type = Embedding.types[a.dataset.key]).el(a)));

        // Set style values.
        el.style.cssText = (type.style != null) ?
          type.style
        :
          'border: none; width: 640px; height: 360px;';

        return container;
      },

      catalogRemove() {
        const isCatalog = $$1.hasClass(doc$1, 'catalog-mode');
        if ((isCatalog && $$1.hasClass(this, 'embedded')) || (!isCatalog && $$1.hasClass(this, 'embed-removed'))) {
          Embedding.cb.toggle.call(this);
          return $$1.toggleClass(this, 'embed-removed');
        }
      },

      title(req, data) {
        let text;
        const {key, uid, options, link, post} = data;
        const service = Embedding.types[key].title;

        let {status} = req;
        if ([200, 304].includes(status) && service.status) {
          status = service.status(req.response)[0];
        }

        if (!status) { return; }

        text = `[${key}] ${(() => { switch (status) {
        case 200: case 304:
          text = service.text(req.response, uid);
          if (typeof text === 'string') {
            return text;
          } else {
            return text = link.textContent;
          }
        case 404:
          return "Not Found";
        case 403: case 401:
          return "Forbidden or Private";
        default:
          return `${status}'d`;
      } })()
      }`;

        link.dataset.original = link.textContent;
        link.textContent = text;
        for (var post2 of post.clones) {
          for (var link2 of $$('a.linkify', post2.nodes.comment)) {
            if (link2.href === link.href) {
              if (link2.dataset.original == null) { link2.dataset.original = link2.textContent; }
              link2.textContent = text;
            }
          }
        }
      }
    },

    ordered_types: [{
        key: 'audio',
        regExp: /^[^?#]+\.(?:mp3|m4a|oga|wav|flac)(?:[?#]|$)/i,
        style: '',
        el(a) {
          return $$1.el('audio', {
            controls:    true,
            preload:     'auto',
            src:         a.dataset.href
          }
          );
        }
      }
      , {
        key: 'image',
        regExp: /^[^?#]+\.(?:gif|png|jpg|jpeg|bmp|webp)(?::\w+)?(?:[?#]|$)/i,
        style: '',
        el(a) {
          const hrefEsc = E(a.dataset.href);
          return $$1.el('div', { innerHTML: `<a target="_blank" href="${hrefEsc}"><img src="${hrefEsc}" style="max-width: 80vw; max-height: 80vh;"></a>`});
        }
      }
      , {
        key: 'video',
        regExp: /^[^?#]+\.(?:og[gv]|webm|mp4)(?:[?#]|$)/i,
        style: 'max-width: 80vw; max-height: 80vh;',
        el(a) {
          const el = $$1.el('video', {
            hidden:   true,
            controls: true,
            preload:  'auto',
            src:      a.dataset.href,
            loop:     ImageHost.test(a.dataset.href.split('/')[2])
          });
          $$1.on(el, 'loadedmetadata', function() {
            if ((el.videoHeight === 0) && el.parentNode) {
              return $$1.replace(el, Embedding.types.audio.el(a));
            } else {
              return el.hidden = false;
            }
          });
          return el;
        }
      }
      , {
        key: 'PeerTube',
        regExp: /^(\w+:\/\/[^\/]+\/videos\/watch\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12})(.*)/,
        el(a) {
          let start;
          const options = (start = a.dataset.options.match(/[?&](start=\w+)/)) ? `?${start[1]}` : '';
          const el = $$1.el('iframe',
            {src: a.dataset.uid.replace('/videos/watch/', '/videos/embed/') + options});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'BitChute',
        regExp:  /^\w+:\/\/(?:www\.)?bitchute\.com\/video\/([\w\-]+)/,
        el(a) {
          const el = $$1.el('iframe',
            {src: `https://www.bitchute.com/embed/${a.dataset.uid}/`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'Clyp',
        regExp: /^\w+:\/\/(?:www\.)?clyp\.it\/(\w{8})/,
        style: 'border: 0; width: 640px; height: 160px;',
        el(a) {
          return $$1.el('iframe',
            {src: `https://clyp.it/${a.dataset.uid}/widget`});
        },
        title: {
          api(uid) { return `https://api.clyp.it/oembed?url=https://clyp.it/${uid}`; },
          text(_) { return _.title; }
        }
      }
      , {
        key: 'Dailymotion',
        regExp:  /^\w+:\/\/(?:(?:www\.)?dailymotion\.com\/(?:embed\/)?video|dai\.ly)\/([A-Za-z0-9]+)[^?]*(.*)/,
        el(a) {
          let start;
          const options = (start = a.dataset.options.match(/[?&](start=\d+)/)) ? `?${start[1]}` : '';
          const el = $$1.el('iframe',
            {src: `//www.dailymotion.com/embed/video/${a.dataset.uid}${options}`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://api.dailymotion.com/video/${uid}`; },
          text(_) { return _.title; }
        },
        preview: {
          url(uid) { return `https://www.dailymotion.com/thumbnail/video/${uid}`; },
          height: 240
        }
      }
      , {
        key: 'Gfycat',
        regExp: /^\w+:\/\/(?:www\.)?gfycat\.com\/(?:iframe\/)?(\w+)/,
        el(a) {
          const el = $$1.el('iframe',
            {src: `//gfycat.com/ifr/${a.dataset.uid}`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'Gist',
        regExp: /^\w+:\/\/gist\.github\.com\/[\w\-]+\/(\w+)/,
        style: '',
        el: (function() {
          let counter = 0;
          return function(a) {
            const el = $$1.el('pre', {
              hidden: true,
              id: `gist-embed-${counter++}`
            }
            );
            CrossOrigin$1.cache(`https://api.github.com/gists/${a.dataset.uid}`, function() {
              el.textContent = Object.values(this.response.files)[0].content;
              el.className = 'prettyprint';
              $$1.global(() => window.prettyPrint?.((function() {}), document.getElementById(document.currentScript.dataset.id).parentNode)
              , {id: el.id});
              return el.hidden = false;
            });
            return el;
          };
        })(),
        title: {
          api(uid) { return `https://api.github.com/gists/${uid}`; },
          text({files}) {
            for (var file in files) { if (files.hasOwnProperty(file)) { return file; } }
          }
        }
      }
      , {
        key: 'InstallGentoo',
        regExp: /^\w+:\/\/paste\.installgentoo\.com\/view\/(?:raw\/|download\/|embed\/)?(\w+)/,
        el(a) {
          return $$1.el('iframe',
            {src: `https://paste.installgentoo.com/view/embed/${a.dataset.uid}`});
        }
      }
      , {
        key: 'LiveLeak',
        regExp: /^\w+:\/\/(?:\w+\.)?liveleak\.com\/.*\?.*[tif]=(\w+)/,
        el(a) {
          const el = $$1.el('iframe',
            {src: `https://www.liveleak.com/e/${a.dataset.uid}`,});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'Loopvid',
        regExp: /^\w+:\/\/(?:www\.)?loopvid.appspot.com\/#?((?:pf|kd|lv|gd|gh|db|dx|nn|cp|wu|ig|ky|mf|m2|pc|1c|pi|ni|wl|ko|mm|ic|gc)\/[\w\-\/]+(?:,[\w\-\/]+)*|fc\/\w+\/\d+|https?:\/\/.+)/,
        style: 'max-width: 80vw; max-height: 80vh;',
        el(a) {
          const el = $$1.el('video', {
            controls: true,
            preload:  'auto',
            loop:     true
          }
          );
          if (/^http/.test(a.dataset.uid)) {
            $$1.add(el, $$1.el('source', {src: a.dataset.uid}));
            return el;
          }
          const [_, host, names] = a.dataset.uid.match(/(\w+)\/(.*)/);
          const types = (() => { switch (host) {
            case 'gd': case 'wu': case 'fc': return [''];
            case 'gc': return ['giant', 'fat', 'zippy'];
            default: return ['.webm', '.mp4'];
          } })();
          for (var name of names.split(',')) {
            for (var type of types) {
              var base = `${name}${type}`;
              var urls = (() => { switch (host) {
                // list from src/common.py at http://loopvid.appspot.com/source.html
                case 'pf': return [`https://kastden.org/_loopvid_media/pf/${base}`, `https://web.archive.org/web/2/http://a.pomf.se/${base}`];
                case 'kd': return [`https://kastden.org/loopvid/${base}`];
                case 'lv': return [`https://lv.kastden.org/${base}`];
                case 'gd': return [`https://docs.google.com/uc?export=download&id=${base}`];
                case 'gh': return [`https://googledrive.com/host/${base}`];
                case 'db': return [`https://dl.dropboxusercontent.com/u/${base}`];
                case 'dx': return [`https://dl.dropboxusercontent.com/${base}`];
                case 'nn': return [`https://kastden.org/_loopvid_media/nn/${base}`];
                case 'cp': return [`https://copy.com/${base}`];
                case 'wu': return [`http://webmup.com/${base}/vid.webm`];
                case 'ig': return [`https://i.imgur.com/${base}`];
                case 'ky': return [`https://kastden.org/_loopvid_media/ky/${base}`];
                case 'mf': return [`https://kastden.org/_loopvid_media/mf/${base}`, `https://web.archive.org/web/2/https://d.maxfile.ro/${base}`];
                case 'm2': return [`https://kastden.org/_loopvid_media/m2/${base}`];
                case 'pc': return [`https://kastden.org/_loopvid_media/pc/${base}`, `https://web.archive.org/web/2/http://a.pomf.cat/${base}`];
                case '1c': return [`http://b.1339.cf/${base}`];
                case 'pi': return [`https://kastden.org/_loopvid_media/pi/${base}`, `https://web.archive.org/web/2/https://u.pomf.is/${base}`];
                case 'ni': return [`https://kastden.org/_loopvid_media/ni/${base}`, `https://web.archive.org/web/2/https://u.nya.is/${base}`];
                case 'wl': return [`http://webm.land/media/${base}`];
                case 'ko': return [`https://kordy.kastden.org/loopvid/${base}`];
                case 'mm': return [`https://kastden.org/_loopvid_media/mm/${base}`, `https://web.archive.org/web/2/https://my.mixtape.moe/${base}`];
                case 'ic': return [`https://media.8ch.net/file_store/${base}`];
                case 'fc': return [`//${ImageHost.host()}/${base}.webm`];
                case 'gc': return [`https://${type}.gfycat.com/${name}.webm`];
              } })();

              for (var url of urls) {
                $$1.add(el, $$1.el('source', {src: url}));
              }
            }
          }
          return el;
        }
      }
      , {
        key: 'Openings.moe',
        regExp: /^\w+:\/\/openings.moe\/\?video=([^.&=]+)/,
        style: 'width: 1280px; height: 720px; max-width: 80vw; max-height: 80vh;',
        el(a) {
          const el = $$1.el('iframe',
            {src: `https://openings.moe/?video=${a.dataset.uid}`,});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'Pastebin',
        regExp: /^\w+:\/\/(?:\w+\.)?pastebin\.com\/(?!u\/)(?:[\w.]+(?:\/|\?i\=))?(\w+)/,
        el(a) {
          return $$1.el('iframe',
            {src: `//pastebin.com/embed_iframe.php?i=${a.dataset.uid}`});
        }
      }
      , {
        key: 'SoundCloud',
        regExp: /^\w+:\/\/(?:www\.)?(?:soundcloud\.com\/|snd\.sc\/)([\w\-\/]+)/,
        style: 'border: 0; width: 500px; height: 400px;',
        el(a) {
          return $$1.el('iframe',
            {src: `https://w.soundcloud.com/player/?visual=true&show_comments=false&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(a.dataset.uid)}`});
        },
        title: {
          api(uid) { return `${location.protocol}//soundcloud.com/oembed?format=json&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(uid)}`; },
          text(_) { return _.title; }
        }
      }
      , {
        key: 'StrawPoll',
        regExp: /^\w+:\/\/(?:www\.)?strawpoll\.me\/(?:embed_\d+\/)?(\d+(?:\/r)?)/,
        style: 'border: 0; width: 600px; height: 406px;',
        el(a) {
          return $$1.el('iframe',
            {src: `https://www.strawpoll.me/embed_1/${a.dataset.uid}`});
        }
      }
      , {
        key: 'Streamable',
        regExp: /^\w+:\/\/(?:www\.)?streamable\.com\/(\w+)/,
        el(a) {
          const el = $$1.el('iframe',
            {src: `https://streamable.com/o/${a.dataset.uid}`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://api.streamable.com/oembed?url=https://streamable.com/${uid}`; },
          text(_) { return _.title; }
        }
      }
      , {
        key: 'TwitchTV',
        regExp: /^\w+:\/\/(?:www\.|secure\.|clips\.|m\.)?twitch\.tv\/(\w[^#\&\?]*)/,
        el(a) {
          let url;
          let m = a.dataset.href.match(/^\w+:\/\/(?:(clips\.)|\w+\.)?twitch\.tv\/(?:\w+\/)?(clip\/)?(\w[^#\&\?]*)/);
          if (m[1] || m[2]) {
            url = `//clips.twitch.tv/embed?clip=${m[3]}&parent=${location.hostname}`;
          } else {
            let time;
            m = a.dataset.uid.match(/(\w+)(?:\/(?:v\/)?(\d+))?/);
            url = `//player.twitch.tv/?${m[2] ? `video=v${m[2]}` : `channel=${m[1]}`}&autoplay=false&parent=${location.hostname}`;
            if (time = a.dataset.href.match(/\bt=(\w+)/)) {
              url += `&time=${time[1]}`;
            }
          }
          const el = $$1.el('iframe',
            {src: url});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'Twitter',
        regExp: /^\w+:\/\/(?:www\.|mobile\.)?(?:twitter|x)\.com\/(\w+\/status\/\d+)/,
        style: 'border: none; width: 550px; height: 250px; overflow: hidden; resize: both;',
        el(a) {
          const el = $$1.el('iframe');
          $$1.on(el, 'load', function() {
            return this.contentWindow.postMessage({element: 't', query: 'height'}, 'https://twitframe.com');
          });
          var onMessage = function(e) {
            if ((e.source === el.contentWindow) && (e.origin === 'https://twitframe.com')) {
              $$1.off(window, 'message', onMessage);
              return (cont || el).style.height = `${+$$1.minmax(e.data.height, 250, 0.8 * doc$1.clientHeight)}px`;
            }
          };
          $$1.on(window, 'message', onMessage);
          el.src = `https://twitframe.com/show?url=https://twitter.com/${a.dataset.uid}`;
          if ($$1.engine === 'gecko') {
            // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=680823
            el.style.cssText = 'border: none; width: 100%; height: 100%;';
            var cont = $$1.el('div');
            $$1.add(cont, el);
            return cont;
          } else {
            return el;
          }
        }
      }
      , {
        key: 'VidLii',
        regExp:  /^\w+:\/\/(?:www\.)?vidlii\.com\/watch\?v=(\w{11})/,
        style: 'border: none; width: 640px; height: 392px;',
        el(a) {
          const el = $$1.el('iframe',
            {src: `https://www.vidlii.com/embed?v=${a.dataset.uid}&a=0`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      }
      , {
        key: 'Vimeo',
        regExp:  /^\w+:\/\/(?:www\.)?vimeo\.com\/(\d+)/,
        el(a) {
          const el = $$1.el('iframe',
            {src: `//player.vimeo.com/video/${a.dataset.uid}?wmode=opaque`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${uid}`; },
          text(_) { return _.title; }
        }
      }
      , {
        key: 'Vine',
        regExp: /^\w+:\/\/(?:www\.)?vine\.co\/v\/(\w+)/,
        style: 'border: none; width: 500px; height: 500px;',
        el(a) {
          return $$1.el('iframe',
            {src: `https://vine.co/v/${a.dataset.uid}/card`});
        }
      }
      , {
        key: 'Vocaroo',
        regExp: /^\w+:\/\/(?:(?:www\.|old\.)?vocaroo\.com|voca\.ro)\/((?:i\/)?\w+)/,
        style: '',
        el(a) {
          const el = $$1.el('iframe');
          el.width = 300;
          el.height = 60;
          el.setAttribute('frameborder', 0);
          el.src = `https://vocaroo.com/embed/${a.dataset.uid.replace(/^i\//, '')}?autoplay=0`;
          return el;
        }
      }
      , {
        key: 'YouTube',
        regExp: /^\w+:\/\/(?:youtu.be\/|[\w.]*youtube[\w.]*\/.*(?:v=|\bembed\/|\bv\/|live\/))([\w\-]{11})(.*)/,
        el(a) {
          let start = a.dataset.options.match(/\b(?:star)?t\=(\w+)/);
          if (start) { start = start[1]; }
          if (start && !/^\d+$/.test(start)) {
            start += ' 0h0m0s';
            start = (3600 * start.match(/(\d+)h/)[1]) + (60 * start.match(/(\d+)m/)[1]) + (1 * start.match(/(\d+)s/)[1]);
          }
          const el = $$1.el('iframe',
            {src: `//www.youtube.com/embed/${a.dataset.uid}?rel=0&wmode=opaque${start ? '&start=' + start : ''}`});
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D${uid}&format=json`; },
          text(_) { return _.title; },
          status(_) {
            if (_.error) {
              const m = _.error.match(/^(\d*)\s*(.*)/);
              return [+m[1], m[2]];
            } else {
              return [200, 'OK'];
            }
          }
        },
        preview: {
          url(uid) { return `https://img.youtube.com/vi/${uid}/0.jpg`; },
          height: 360
        }
      }
    ]
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Keybinds = {
    init() {
      if (!Conf['Keybinds']) { return; }

      for (var hotkey in Config.hotkeys) {
        $$1.sync(hotkey, Keybinds.sync);
      }

      var init = function() {
        $$1.off(d$1, '4chanXInitFinished', init);
        $$1.on(d$1, 'keydown', Keybinds.keydown);
        for (var node of $$('[accesskey]')) {
          node.removeAttribute('accesskey');
        }
      };
      return $$1.on(d$1, '4chanXInitFinished', init);
    },

    sync(key, hotkey) {
      return Conf[hotkey] = key;
    },

    keydown(e) {
      let key, thread, threadRoot;
      let catalog, notifications;
      if (!(key = Keybinds.keyCode(e))) { return; }
      const {target} = e;
      if (['INPUT', 'TEXTAREA'].includes(target.nodeName)) {
        if (!/(Esc|Alt|Ctrl|Meta|Shift\+\w{2,})/.test(key) || !!/^Alt\+(\d|Up|Down|Left|Right)$/.test(key)) { return; }
      }
      if (['index', 'thread'].includes(g.VIEW)) {
        threadRoot = Nav.getThread();
        thread = Get$1.threadFromRoot(threadRoot);
      }
      switch (key) {
        // QR & Options
        case Conf['Toggle board list']:
          if (!Conf['Custom Board Navigation']) { return; }
          Header$1.toggleBoardList();
          break;
        case Conf['Toggle header']:
          Header$1.toggleBarVisibility();
          break;
        case Conf['Open empty QR']:
          if (!QR.postingIsEnabled) { return; }
          Keybinds.qr();
          break;
        case Conf['Open QR']:
          if (!QR.postingIsEnabled || !threadRoot) { return; }
          Keybinds.qr(threadRoot);
          break;
        case Conf['Open settings']:
          Settings.open();
          break;
        case Conf['Close']:
          if (Settings.dialog) {
            Settings.close();
          } else if ((notifications = $$('.notification')).length) {
            for (var notification of notifications) {
              $$1('.close', notification).click();
            }
          } else if (QR.nodes && !(QR.nodes.el.hidden || (window.getComputedStyle(QR.nodes.form).display === 'none'))) {
            if (Conf['Persistent QR']) {
              QR.hide();
            } else {
              QR.close();
            }
          } else if (Embedding.lastEmbed) {
            Embedding.closeFloat();
          } else {
            return;
          }
          break;
        case Conf['Spoiler tags']:
          if (target.nodeName !== 'TEXTAREA') { return; }
          Keybinds.tags('spoiler', target);
          break;
        case Conf['Code tags']:
          if (target.nodeName !== 'TEXTAREA') { return; }
          Keybinds.tags('code', target);
          break;
        case Conf['Eqn tags']:
          if (target.nodeName !== 'TEXTAREA') { return; }
          Keybinds.tags('eqn', target);
          break;
        case Conf['Math tags']:
          if (target.nodeName !== 'TEXTAREA') { return; }
          Keybinds.tags('math', target);
          break;
        case Conf['SJIS tags']:
          if (target.nodeName !== 'TEXTAREA') { return; }
          Keybinds.tags('sjis', target);
          break;
        case Conf['Toggle sage']:
          if (!QR.nodes || !!QR.nodes.el.hidden) { return; }
          Keybinds.sage();
          break;
        case Conf['Toggle Cooldown']:
          if (!QR.nodes || !!QR.nodes.el.hidden || !$$1.hasClass(QR.nodes.fileSubmit, 'custom-cooldown')) { return; }
          QR.toggleCustomCooldown();
          break;
        case Conf['Post from URL']:
          if (!QR.postingIsEnabled) { return; }
          QR.handleUrl('');
          break;
        case Conf['Add new post']:
          if (!QR.postingIsEnabled) { return; }
          QR.addPost();
          break;
        case Conf['Submit QR']:
          if (!QR.nodes || !!QR.nodes.el.hidden) { return; }
          if (!QR.status()) { QR.submit(); }
          break;
        // Index/Thread related
        case Conf['Update']:
          switch (g.VIEW) {
            case 'thread':
              if (!ThreadUpdater.enabled) { return; }
              ThreadUpdater.update();
              break;
            case 'index':
              if (!Index$1.enabled) { return; }
              Index$1.update();
              break;
            default:
              return;
          }
          break;
        case Conf['Watch']:
          if (!ThreadWatcher$1.enabled || !thread) { return; }
          ThreadWatcher$1.toggle(thread);
          break;
        case Conf['Update thread watcher']:
          if (!ThreadWatcher$1.enabled) { return; }
          ThreadWatcher$1.buttonFetchAll();
          break;
        case Conf['Toggle thread watcher']:
          if (!ThreadWatcher$1.enabled) { return; }
          ThreadWatcher$1.toggleWatcher();
          break;
        case Conf['Toggle threading']:
          if (!QuoteThreading.ready) { return; }
          QuoteThreading.toggleThreading();
          break;
        case Conf['Mark thread read']:
          if ((g.VIEW !== 'index') || !thread || !UnreadIndex.enabled) { return; }
          UnreadIndex.markRead.call(threadRoot);
          break;
        // Images
        case Conf['Expand image']:
          if (!ImageExpand.enabled || !threadRoot) { return; }
          var post = Get$1.postFromNode(Keybinds.post(threadRoot));
          if (post.file) { ImageExpand.toggle(post); }
          break;
        case Conf['Expand images']:
          if (!ImageExpand.enabled) { return; }
          ImageExpand.cb.toggleAll();
          break;
        case Conf['Open Gallery']:
          if (!Gallery.enabled) { return; }
          Gallery.cb.toggle();
          break;
        case Conf['fappeTyme']:
          if (!FappeTyme.nodes?.fappe) { return; }
          FappeTyme.toggle('fappe');
          break;
        case Conf['werkTyme']:
          if (!FappeTyme.nodes?.werk) { return; }
          FappeTyme.toggle('werk');
          break;
        // Board Navigation
        case Conf['Front page']:
          if (Index$1.enabled) {
            Index$1.userPageNav(1);
          } else {
            location.href = `/${g.BOARD}/`;
          }
          break;
        case Conf['Open front page']:
          $$1.open(`${location.origin}/${g.BOARD}/`);
          break;
        case Conf['Next page']:
          if ((g.VIEW !== 'index') || !!g.SITE.isOnePage?.(g.BOARD)) { return; }
          if (Index$1.enabled) {
            if (!['paged', 'infinite'].includes(Conf['Index Mode'])) { return; }
            $$1('.next button', Index$1.pagelist).click();
          } else {
            $$1(g.SITE.selectors.nav.next)?.click();
          }
          break;
        case Conf['Previous page']:
          if ((g.VIEW !== 'index') || !!g.SITE.isOnePage?.(g.BOARD)) { return; }
          if (Index$1.enabled) {
            if (!['paged', 'infinite'].includes(Conf['Index Mode'])) { return; }
            $$1('.prev button', Index$1.pagelist).click();
          } else {
            $$1(g.SITE.selectors.nav.prev)?.click();
          }
          break;
        case Conf['Search form']:
          if (g.VIEW !== 'index') { return; }
          var searchInput = Index$1.enabled ?
            Index$1.searchInput
          : g.SITE.selectors.searchBox ?
            $$1(g.SITE.selectors.searchBox)
          :
            undefined;
          if (!searchInput) { return; }
          Header$1.scrollToIfNeeded(searchInput);
          searchInput.focus();
          break;
        case Conf['Paged mode']:
          if (!Index$1.enabledOn(g.BOARD)) { return; }
          location.href = g.VIEW === 'index' ? '#paged' : `/${g.BOARD}/#paged`;
          break;
        case Conf['Infinite scrolling mode']:
          if (!Index$1.enabledOn(g.BOARD)) { return; }
          location.href = g.VIEW === 'index' ? '#infinite' : `/${g.BOARD}/#infinite`;
          break;
        case Conf['All pages mode']:
          if (!Index$1.enabledOn(g.BOARD)) { return; }
          location.href = g.VIEW === 'index' ? '#all-pages' : `/${g.BOARD}/#all-pages`;
          break;
        case Conf['Open catalog']:
          if (!(catalog = CatalogLinks.catalog())) { return; }
          location.href = catalog;
          break;
        case Conf['Cycle sort type']:
          if (!Index$1.enabled) { return; }
          Index$1.cycleSortType();
          break;
        // Thread Navigation
        case Conf['Next thread']:
          if ((g.VIEW !== 'index') || !threadRoot) { return; }
          Nav.scroll(+1);
          break;
        case Conf['Previous thread']:
          if ((g.VIEW !== 'index') || !threadRoot) { return; }
          Nav.scroll(-1);
          break;
        case Conf['Expand thread']:
          if ((g.VIEW !== 'index') || !threadRoot) { return; }
          ExpandThread.toggle(thread);
          // Keep thread from moving off screen when contracted.
          Header$1.scrollTo(threadRoot);
          break;
        case Conf['Open thread']:
          if ((g.VIEW !== 'index') || !threadRoot) { return; }
          Keybinds.open(thread);
          break;
        case Conf['Open thread tab']:
          if ((g.VIEW !== 'index') || !threadRoot) { return; }
          Keybinds.open(thread, true);
          break;
        // Reply Navigation
        case Conf['Next reply']:
          if (!threadRoot) { return; }
          Keybinds.hl(+1, threadRoot);
          break;
        case Conf['Previous reply']:
          if (!threadRoot) { return; }
          Keybinds.hl(-1, threadRoot);
          break;
        case Conf['Deselect reply']:
          if (!threadRoot) { return; }
          Keybinds.hl(0, threadRoot);
          break;
        case Conf['Hide']:
          if (!thread || !ThreadHiding.db) { return; }
          Header$1.scrollTo(threadRoot);
          ThreadHiding.toggle(thread);
          break;
        case Conf['Quick Filter MD5']:
          if (!threadRoot) { return; }
          post = Keybinds.post(threadRoot);
          Keybinds.hl(+1, threadRoot);
          Filter.quickFilterMD5.call(post, e);
          break;
        case Conf['Previous Post Quoting You']:
          if (!threadRoot || !QuoteYou.db) { return; }
          QuoteYou.cb.seek('preceding');
          break;
        case Conf['Next Post Quoting You']:
          if (!threadRoot || !QuoteYou.db) { return; }
          QuoteYou.cb.seek('following');
          break;
        default:
          return;
      }
      e.preventDefault();
      return e.stopPropagation();
    },

    keyCode(e) {
      let key = (() => { let kc;
      switch ((kc = e.keyCode)) {
        case 8: // return
          return '';
        case 13:
          return 'Enter';
        case 27:
          return 'Esc';
        case 32:
          return 'Space';
        case 37:
          return 'Left';
        case 38:
          return 'Up';
        case 39:
          return 'Right';
        case 40:
          return 'Down';
        case 188:
          return 'Comma';
        case 190:
          return 'Period';
        case 191:
          return 'Slash';
        case 59: case 186:
          return 'Semicolon';
        default:
          if ((48 <= kc && kc <= 57) || (65 <= kc && kc <= 90)) { // 0-9, A-Z
            return String.fromCharCode(kc).toLowerCase();
          } else if (96 <= kc && kc <= 105) { // numpad 0-9
            return String.fromCharCode(kc - 48).toLowerCase();
          } else {
            return null;
          }
      } })();
      if (key) {
        if (e.altKey) {   key = 'Alt+'   + key; }
        if (e.ctrlKey) {  key = 'Ctrl+'  + key; }
        if (e.metaKey) {  key = 'Meta+'  + key; }
        if (e.shiftKey) { key = 'Shift+' + key; }
      }
      return key;
    },

    post(thread) {
      const s = g.SITE.selectors;
      return (
        $$1(`${s.postContainer}${s.highlightable.reply}.${g.SITE.classes.highlight}`, thread) ||
        $$1(`${g.SITE.isOPContainerThread ? s.thread : s.postContainer}${s.highlightable.op}`, thread)
      );
    },

    qr(thread) {
      QR.open();
      if (thread != null) {
        QR.quote.call(Keybinds.post(thread));
      }
      return QR.nodes.com.focus();
    },

    tags(tag, ta) {
      BoardConfig.ready(function() {
        const {config} = g.BOARD;
        const supported = (() => { switch (tag) {
          case 'spoiler':     return !!config.spoilers;
          case 'code':        return !!config.code_tags;
          case 'math': case 'eqn': return !!config.math_tags;
          case 'sjis':        return !!config.sjis_tags;
        } })();
        if (!supported) { return new Notice('warning', `[${tag}] tags are not supported on /${g.BOARD}/.`, 20); }
      });

      const {
        value
      } = ta;
      const selStart = ta.selectionStart;
      const selEnd   = ta.selectionEnd;

      ta.value =
        value.slice(0, selStart) +
        `[${tag}]` + value.slice(selStart, selEnd) + `[/${tag}]` +
        value.slice(selEnd);

      // Move the caret to the end of the selection.
      const range = (`[${tag}]`).length + selEnd;
      ta.setSelectionRange(range, range);

      // Fire the 'input' event
      return $$1.event('input', null, ta);
    },

    sage() {
      const isSage  = /sage/i.test(QR.nodes.email.value);
      return QR.nodes.email.value = isSage ?
        ""
      : "sage";
    },

    open(thread, tab) {
      if (g.VIEW !== 'index') { return; }
      const url = Get$1.url('thread', thread);
      if (tab) {
        return $$1.open(url);
      } else {
        return location.href = url;
      }
    },

    hl(delta, thread) {
      const replySelector = `${g.SITE.selectors.postContainer}${g.SITE.selectors.highlightable.reply}`;
      const {highlight} = g.SITE.classes;

      const postEl = $$1(`${replySelector}.${highlight}`, thread);

      if (!delta) {
        if (postEl) { $$1.rmClass(postEl, highlight); }
        return;
      }

      if (postEl) {
        const {height} = postEl.getBoundingClientRect();
        if ((Header$1.getTopOf(postEl) >= -height) && (Header$1.getBottomOf(postEl) >= -height)) { // We're at least partially visible
          let next;
          const {root} = Get$1.postFromNode(postEl).nodes;
          const axis = delta === +1 ?
            'following'
          :
            'preceding';
          if (!(next = $$1.x(`${axis}-sibling::${g.SITE.xpath.replyContainer}[not(@hidden) and not(child::div[@class='stub'])][1]`, root))) { return; }
          if (!next.matches(replySelector)) { next = $$1(replySelector, next); }
          Header$1.scrollToIfNeeded(next, delta === +1);
          $$1.addClass(next, highlight);
          $$1.rmClass(postEl, highlight);
          return;
        }
        $$1.rmClass(postEl, highlight);
      }

      const replies = $$(replySelector, thread);
      if (delta === -1) { replies.reverse(); }
      for (var reply of replies) {
        if (((delta === +1) && (Header$1.getTopOf(reply) > 0)) || ((delta === -1) && (Header$1.getBottomOf(reply) > 0))) {
          $$1.addClass(reply, highlight);
          return;
        }
      }
    }
  };

  const Captcha = {
    Cache: {
      init() {
        $$1.on(d$1, 'SaveCaptcha', e => {
          return this.saveAPI(e.detail);
        });
        return $$1.on(d$1, 'NoCaptcha', e => {
          return this.noCaptcha(e.detail);
        });
      },

      captchas: [],

      getCount() {
        return this.captchas.length;
      },

      neededRaw() {
        return !(
          this.haveCookie() || this.captchas.length || QR.req || this.submitCB
        ) && (
            (QR.posts.length > 1) || Conf['Auto-load captcha'] || !QR.posts[0].isOnlyQuotes() || QR.posts[0].file
          );
      },

      needed() {
        return this.neededRaw() && $$1.event('LoadCaptcha');
      },

      prerequest() {
        if (!Conf['Prerequest Captcha']) { return; }
        // Post count temporarily off by 1 when called from QR.post.rm, QR.close, or QR.submit
        return $$1.queueTask(() => {
          if (
            !this.prerequested &&
            this.neededRaw() &&
            !$$1.event('LoadCaptcha') &&
            !QR.captcha.occupied() &&
            (QR.cooldown.seconds <= 60) &&
            (QR.selected === QR.posts[QR.posts.length - 1]) &&
            !QR.selected.isOnlyQuotes()
          ) {
            const isReply = (QR.selected.thread !== 'new');
            if (!$$1.event('RequestCaptcha', { isReply })) {
              this.prerequested = true;
              this.submitCB = captcha => {
                if (captcha) { return this.save(captcha); }
              };
              return this.updateCount();
            }
          }
        });
      },

      haveCookie() {
        return /\b_ct=/.test(d$1.cookie) && (QR.posts[0].thread !== 'new');
      },

      getOne() {
        let captcha;
        delete this.prerequested;
        this.clear();
        if (captcha = this.captchas.shift()) {
          this.count();
          return captcha;
        } else {
          return null;
        }
      },

      request(isReply) {
        if (!this.submitCB) {
          if ($$1.event('RequestCaptcha', { isReply })) { return; }
        }
        return cb => {
          this.submitCB = cb;
          return this.updateCount();
        };
      },

      abort() {
        if (this.submitCB) {
          delete this.submitCB;
          $$1.event('AbortCaptcha');
          return this.updateCount();
        }
      },

      saveAPI(captcha) {
        let cb;
        if (cb = this.submitCB) {
          delete this.submitCB;
          cb(captcha);
          return this.updateCount();
        } else {
          return this.save(captcha);
        }
      },

      noCaptcha(detail) {
        let cb;
        if (cb = this.submitCB) {
          if (!this.haveCookie() || detail?.error) {
            QR.error(detail?.error || 'Failed to retrieve captcha.');
            QR.captcha.setup(d$1.activeElement === QR.nodes.status);
          }
          delete this.submitCB;
          cb();
          return this.updateCount();
        }
      },

      save(captcha) {
        let cb;
        if (cb = this.submitCB) {
          this.abort();
          cb(captcha);
          return;
        }
        this.captchas.push(captcha);
        this.captchas.sort((a, b) => a.timeout - b.timeout);
        return this.count();
      },

      clear() {
        if (this.captchas.length) {
          let i;
          const now = Date.now();
          for (i = 0; i < this.captchas.length; i++) {
            var captcha = this.captchas[i];
            if (captcha.timeout > now) { break; }
          }
          if (i) {
            this.captchas = this.captchas.slice(i);
            return this.count();
          }
        }
      },

      count() {
        clearTimeout(this.timer);
        if (this.captchas.length) {
          this.timer = setTimeout(this.clear.bind(this), this.captchas[0].timeout - Date.now());
        }
        return this.updateCount();
      },

      updateCount() {
        return $$1.event('CaptchaCount', this.captchas.length);
      }
    }, Replace: CaptchaReplace, t: CaptchaT, v2: {
      lifetime: 2 * MINUTE,

      init() {
        if (d$1.cookie.indexOf('pass_enabled=1') >= 0) { return; }
        if (!(this.isEnabled = !!$$1('#g-recaptcha, #captcha-forced-noscript') || !$$1.id('postForm'))) { return; }

        if (this.noscript = Conf['Force Noscript Captcha'] || !Main$1.jsEnabled) {
          $$1.addClass(QR.nodes.el, 'noscript-captcha');
        }

        Captcha.cache.init();
        $$1.on(d$1, 'CaptchaCount', this.count.bind(this));

        const root = $$1.el('div', { className: 'captcha-root' });
        $$1.extend(root, {
          innerHTML:
            '<div class="captcha-counter"><a href="javascript:;"></a></div>'
        }
        );
        const counter = $$1('.captcha-counter > a', root);
        this.nodes = { root, counter };
        this.count();
        $$1.addClass(QR.nodes.el, 'has-captcha', 'captcha-v2');
        $$1.after(QR.nodes.com.parentNode, root);

        $$1.on(counter, 'click', this.toggle.bind(this));
        $$1.on(counter, 'keydown', e => {
          if (Keybinds.keyCode(e) !== 'Space') { return; }
          this.toggle();
          e.preventDefault();
          return e.stopPropagation();
        });
        return $$1.on(window, 'captcha:success', () => {
          // XXX Greasemonkey 1.x workaround to gain access to GM_* functions.
          return $$1.queueTask(() => this.save(false));
        });
      },

      timeouts: {},
      prevNeeded: 0,

      noscriptURL() {
        let lang;
        let url = `https://www.google.com/recaptcha/api/fallback?k=${meta.recaptchaKey}`;
        if (lang = Conf['captchaLanguage'].trim()) {
          url += `&hl=${encodeURIComponent(lang)}`;
        }
        return url;
      },

      moreNeeded() {
        // Post count temporarily off by 1 when called from QR.post.rm, QR.close, or QR.submit
        return $$1.queueTask(() => {
          const needed = Captcha.cache.needed();
          if (needed && !this.prevNeeded) {
            this.setup(QR.cooldown.auto && (d$1.activeElement === QR.nodes.status));
          }
          return this.prevNeeded = needed;
        });
      },

      toggle() {
        if (this.nodes.container && !this.timeouts.destroy) {
          return this.destroy();
        } else {
          return this.setup(true, true);
        }
      },

      setup(focus, force) {
        if (!this.isEnabled || (!Captcha.cache.needed() && !force)) { return; }

        if (focus) {
          $$1.addClass(QR.nodes.el, 'focus');
          this.nodes.counter.focus();
        }

        if (this.timeouts.destroy) {
          clearTimeout(this.timeouts.destroy);
          delete this.timeouts.destroy;
          return this.reload();
        }

        if (this.nodes.container) {
          // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1226835
          $$1.queueTask(() => {
            let iframe;
            if (this.nodes.container && (d$1.activeElement === this.nodes.counter) && (iframe = $$1('iframe[src^="https://www.google.com/recaptcha/"]', this.nodes.container))) {
              iframe.focus();
              return QR.focus();
            }
          }); // Event handler not fired in Firefox
          return;
        }

        this.nodes.container = $$1.el('div', { className: 'captcha-container' });
        $$1.prepend(this.nodes.root, this.nodes.container);
        new MutationObserver(this.afterSetup.bind(this)).observe(this.nodes.container, {
          childList: true,
          subtree: true
        }
        );

        if (this.noscript) {
          return this.setupNoscript();
        } else {
          return this.setupJS();
        }
      },

      setupNoscript() {
        const iframe = $$1.el('iframe', {
          id: 'qr-captcha-iframe',
          scrolling: 'no',
          src: this.noscriptURL()
        }
        );
        const div = $$1.el('div');
        const textarea = $$1.el('textarea');
        $$1.add(div, textarea);
        return $$1.add(this.nodes.container, [iframe, div]);
      },

      setupJS() {
        return $$1.global(function () {
          const render = function () {
            const { classList } = document.documentElement;
            const container = document.querySelector('#qr .captcha-container');
            return container.dataset.widgetID = window.grecaptcha.render(container, {
              sitekey: meta.recaptchaKey,
              theme: classList.contains('tomorrow') || classList.contains('spooky') || classList.contains('dark-captcha') ? 'dark' : 'light',
              callback(response) {
                return window.dispatchEvent(new CustomEvent('captcha:success', { detail: response }));
              }
            }
            );
          };
          if (window.grecaptcha) {
            return render();
          } else {
            const cbNative = window.onRecaptchaLoaded;
            window.onRecaptchaLoaded = function () {
              render();
              return cbNative();
            };
            if (!document.head.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')) {
              const script = document.createElement('script');
              script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit';
              return document.head.appendChild(script);
            }
          }
        });
      },

      afterSetup(mutations) {
        for (var mutation of mutations) {
          for (var node of mutation.addedNodes) {
            var iframe, textarea;
            if (iframe = $$1.x('./descendant-or-self::iframe[starts-with(@src, "https://www.google.com/recaptcha/")]', node)) { this.setupIFrame(iframe); }
            if (textarea = $$1.x('./descendant-or-self::textarea', node)) { this.setupTextArea(textarea); }
          }
        }
      },

      setupIFrame(iframe) {
        let needle;
        if (!doc.contains(iframe)) { return; }
        Captcha.replace.iframe(iframe);
        $$1.addClass(QR.nodes.el, 'captcha-open');
        this.fixQRPosition();
        $$1.on(iframe, 'load', this.fixQRPosition);
        if (d$1.activeElement === this.nodes.counter) { iframe.focus(); }
        // XXX Make sure scroll on space prevention (see src/css/style.css) doesn't cause scrolling of div
        if (['blink', 'edge'].includes($$1.engine) && (needle = iframe.parentNode, $$('#qr .captcha-container > div > div:first-of-type').includes(needle))) {
          return $$1.on(iframe.parentNode, 'scroll', function () { return this.scrollTop = 0; });
        }
      },

      fixQRPosition() {
        if (QR.nodes.el.getBoundingClientRect().bottom > doc.clientHeight) {
          QR.nodes.el.style.top = '';
          return QR.nodes.el.style.bottom = '0px';
        }
      },

      setupTextArea(textarea) {
        return $$1.one(textarea, 'input', () => this.save(true));
      },

      destroy() {
        if (!this.isEnabled) { return; }
        delete this.timeouts.destroy;
        $$1.rmClass(QR.nodes.el, 'captcha-open');
        if (this.nodes.container) {
          $$1.global(function () {
            const container = document.querySelector('#qr .captcha-container');
            return window.grecaptcha.reset(container.dataset.widgetID);
          });
          $$1.rm(this.nodes.container);
          return delete this.nodes.container;
        }
      },

      getOne(isReply) {
        return Captcha.cache.getOne(isReply);
      },

      save(pasted, token) {
        Captcha.cache.save({
          response: token || $$1('textarea', this.nodes.container).value,
          timeout: Date.now() + this.lifetime
        });

        const focus = (d$1.activeElement?.nodeName === 'IFRAME') && /https?:\/\/www\.google\.com\/recaptcha\//.test(d$1.activeElement.src);
        if (Captcha.cache.needed()) {
          if (focus) {
            if (QR.cooldown.auto || Conf['Post on Captcha Completion']) {
              this.nodes.counter.focus();
            } else {
              QR.nodes.status.focus();
            }
          }
          this.reload();
        } else {
          if (pasted) {
            this.destroy();
          } else {
            if (this.timeouts.destroy == null) { this.timeouts.destroy = setTimeout(this.destroy.bind(this), 3 * SECOND); }
          }
          if (focus) { QR.nodes.status.focus(); }
        }

        if (Conf['Post on Captcha Completion'] && !QR.cooldown.auto) { return QR.submit(); }
      },

      count() {
        const count = Captcha.cache.getCount();
        const loading = Captcha.cache.submitCB ? '...' : '';
        this.nodes.counter.textContent = `Captchas: ${count}${loading}`;
        return this.moreNeeded();
      },

      reload() {
        if ($$1('iframe[src^="https://www.google.com/recaptcha/api/fallback?"]', this.nodes.container)) {
          this.destroy();
          return this.setup(false, true);
        } else {
          return $$1.global(function () {
            const container = document.querySelector('#qr .captcha-container');
            return window.grecaptcha.reset(container.dataset.widgetID);
          });
        }
      },

      occupied() {
        return !!this.nodes.container && !this.timeouts.destroy;
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS202: Simplify dynamic range loops
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var QR = {
    mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/vnd.adobe.flash.movie', 'application/x-shockwave-flash', 'video/webm'],

    validExtension: /\.(jpe?g|png|gif|pdf|swf|webm)$/i,

    typeFromExtension: {
      'jpg':  'image/jpeg',
      'jpeg': 'image/jpeg',
      'png':  'image/png',
      'gif':  'image/gif',
      'pdf':  'application/pdf',
      'swf':  'application/vnd.adobe.flash.movie',
      'webm': 'video/webm'
    },

    extensionFromType: {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'application/pdf': 'pdf',
      'application/vnd.adobe.flash.movie': 'swf',
      'application/x-shockwave-flash': 'swf',
      'video/webm': 'webm'
    },

    init() {
      let sc;
      if (!Conf['Quick Reply']) { return; }

      this.posts = [];

      $$1.on(d$1, '4chanXInitFinished', () => BoardConfig.ready(QR.initReady));

      Callbacks.Post.push({
        name: 'Quick Reply',
        cb:   this.node
      });

      this.shortcut = (sc = $$1.el('a', {
        className: 'disabled',
        textContent: '↩',
        title: 'Quick Reply',
        href: 'javascript:;'
      }
      ));
      $$1.on(sc, 'click', function() {
        if (!QR.postingIsEnabled) { return; }
        if (Conf['Persistent QR'] || !QR.nodes || QR.nodes.el.hidden) {
          QR.open();
          return QR.nodes.com.focus();
        } else {
          return QR.close();
        }
      });

      return Header$1.addShortcut('qr', sc, 540);
    },

    initReady() {
      let origToggle;
      const captchaVersion = $$1('#g-recaptcha, #captcha-forced-noscript') ? 'v2' : 't';
      QR.captcha = Captcha[captchaVersion];
      QR.postingIsEnabled = true;

      const {config} = g.BOARD;
      const prop = (key, def) => +(config[key] ?? def);

      QR.min_width  = prop('min_image_width',  1);
      QR.min_height = prop('min_image_height', 1);
      QR.max_width  = (QR.max_height = 10000);

      QR.max_size       = prop('max_filesize',      4194304);
      QR.max_size_video = prop('max_webm_filesize', QR.max_size);
      QR.max_comment    = prop('max_comment_chars', 2000);

      QR.max_width_video = (QR.max_height_video = 2048);
      QR.max_duration_video = prop('max_webm_duration', 120);

      QR.forcedAnon = !!config.forced_anon;
      QR.spoiler    = !!config.spoilers;

      if (origToggle = $$1.id('togglePostFormLink')) {
        const link = $$1.el('h1',
          {className: "qr-link-container"});
        $$1.extend(link, {
          innerHTML:
            `<a href="javascript:;" class="qr-link">${g.VIEW === "thread" ? "Reply to Thread" : "Start a Thread"}</a>`
        });

        QR.link = link.firstElementChild;
        $$1.on(link.firstChild, 'click', function() {
          QR.open();
          return QR.nodes.com.focus();
        });

        $$1.before(origToggle, link);
        origToggle.firstElementChild.textContent = 'Original Form';
      }

      if (g.VIEW === 'thread') {
        let navLinksBot;
        const linkBot = $$1.el('div',
          {className: "brackets-wrap qr-link-container-bottom"});
        $$1.extend(linkBot, {innerHTML: '<a href="javascript:;" class="qr-link-bottom">Reply to Thread</a>'});

        $$1.on(linkBot.firstElementChild, 'click', function() {
          QR.open();
          return QR.nodes.com.focus();
        });

        if (navLinksBot = $$1('.navLinksBot')) { $$1.prepend(navLinksBot, linkBot); }
      }

      $$1.on(d$1, 'QRGetFile',          QR.getFile);
      $$1.on(d$1, 'QRDrawFile',         QR.drawFile);
      $$1.on(d$1, 'QRSetFile',          QR.setFile);

      $$1.on(d$1, 'paste',              QR.paste);
      $$1.on(d$1, 'dragover',           QR.dragOver);
      $$1.on(d$1, 'drop',               QR.dropFile);
      $$1.on(d$1, 'dragstart dragend',  QR.drag);

      $$1.on(d$1, 'IndexRefreshInternal', QR.generatePostableThreadsList);
      $$1.on(d$1, 'ThreadUpdate', QR.statusCheck);

      if (!Conf['Persistent QR']) { return; }
      QR.open();
      if (Conf['Auto Hide QR']) { return QR.hide(); }
    },

    statusCheck() {
      if (!QR.nodes) { return; }
      const {thread} = QR.posts[0];
      if ((thread !== 'new') && g.threads.get(`${g.BOARD}.${thread}`).isDead) {
        return QR.abort();
      } else {
        return QR.status();
      }
    },

    node() {
      $$1.on(this.nodes.quote, 'click', QR.quote);
      if (this.isFetchedQuote) { return QR.generatePostableThreadsList(); }
    },

    open() {
      if (QR.nodes) {
        if (QR.nodes.el.hidden) { QR.captcha.setup(); }
        QR.nodes.el.hidden = false;
        QR.unhide();
      } else {
        try {
          QR.dialog();
        } catch (err) {
          delete QR.nodes;
          Main$1.handleErrors({
            message: 'Quick Reply dialog creation crashed.',
            error: err
          });
          return;
        }
      }
      return $$1.rmClass(QR.shortcut, 'disabled');
    },

    close() {
      if (QR.req) {
        QR.abort();
        return;
      }
      QR.nodes.el.hidden = true;
      QR.cleanNotifications();
      QR.blur();
      $$1.rmClass(QR.nodes.el, 'dump');
      $$1.addClass(QR.shortcut, 'disabled');
      new QR.post(true);
      for (var post of QR.posts.splice(0, QR.posts.length - 1)) {
        post.delete();
      }
      QR.cooldown.auto = false;
      QR.status();
      return QR.captcha.destroy();
    },

    focus() {
      return $$1.queueTask(function() {
        if (!QR.inBubble()) {
          QR.hasFocus = d$1.activeElement && QR.nodes.el.contains(d$1.activeElement);
          return QR.nodes.el.classList.toggle('focus', QR.hasFocus);
        }
      });
    },

    inBubble() {
      const bubbles = $$('iframe[src^="https://www.google.com/recaptcha/api2/frame"]');
      return bubbles.includes(d$1.activeElement) || bubbles.some(el => (getComputedStyle(el).visibility !== 'hidden') && (el.getBoundingClientRect().bottom > 0));
    },

    hide() {
      QR.blur();
      $$1.addClass(QR.nodes.el, 'autohide');
      return QR.nodes.autohide.checked = true;
    },

    unhide() {
      $$1.rmClass(QR.nodes.el, 'autohide');
      return QR.nodes.autohide.checked = false;
    },

    toggleHide() {
      if (this.checked) {
        return QR.hide();
      } else {
        return QR.unhide();
      }
    },

    blur() {
      if (QR.nodes.el.contains(d$1.activeElement)) { return d$1.activeElement.blur(); }
    },

    toggleSJIS(e) {
      e.preventDefault();
      Conf['sjisPreview'] = !Conf['sjisPreview'];
      $$1.set('sjisPreview', Conf['sjisPreview']);
      return QR.nodes.el.classList.toggle('sjis-preview', Conf['sjisPreview']);
    },

    texPreviewShow() {
      if ($$1.hasClass(QR.nodes.el, 'tex-preview')) { return QR.texPreviewHide(); }
      $$1.addClass(QR.nodes.el, 'tex-preview');
      QR.nodes.texPreview.textContent = QR.nodes.com.value;
      return $$1.event('mathjax', null, QR.nodes.texPreview);
    },

    texPreviewHide() {
      return $$1.rmClass(QR.nodes.el, 'tex-preview');
    },

    addPost() {
      const wasOpen = (QR.nodes && !QR.nodes.el.hidden);
      QR.open();
      if (wasOpen) {
        $$1.addClass(QR.nodes.el, 'dump');
        new QR.post(true);
      }
      return QR.nodes.com.focus();
    },

    setCustomCooldown(enabled) {
      Conf['customCooldownEnabled'] = enabled;
      QR.cooldown.customCooldown = enabled;
      return QR.nodes.customCooldown.classList.toggle('disabled', !enabled);
    },

    toggleCustomCooldown() {
      const enabled = $$1.hasClass(QR.nodes.customCooldown, 'disabled');
      QR.setCustomCooldown(enabled);
      return $$1.set('customCooldownEnabled', enabled);
    },

    error(err, focusOverride) {
      let el;
      QR.open();
      if (typeof err === 'string') {
        el = $$1.tn(err);
      } else {
        el = err;
        el.removeAttribute('style');
      }
      const notice = new Notice('warning', el);
      QR.notifications.push(notice);
      if (!Header$1.areNotificationsEnabled) {
        if (d$1.hidden && !QR.cooldown.auto) { return alert(el.textContent); }
      } else if (d$1.hidden || !(focusOverride || d$1.hasFocus())) {
        const notif = new Notification(el.textContent, {
          body: el.textContent,
          icon: Favicon.logo
        }
        );
        notif.onclick = () => window.focus();
        if ($$1.engine !== 'gecko') {
          // Firefox automatically closes notifications
          // so we can't control the onclose properly.
          notif.onclose = () => notice.close();
          return notif.onshow  = () => setTimeout(function() {
            notif.onclose = null;
            return notif.close();
          }
          , 7 * SECOND);
        }
      }
    },

    connectionError() {
      return $$1.el('span',
        { innerHTML:
          'Connection error while posting. ' +
          '[<a href="' + meta.faq + '#connection-errors" target="_blank">More info</a>]'
        }
      );
    },

    notifications: [],

    cleanNotifications() {
      for (var notification of QR.notifications) {
        notification.close();
      }
      return QR.notifications = [];
    },

    status() {
      let disabled, value;
      if (!QR.nodes) { return; }
      const {thread} = QR.posts[0];
      if ((thread !== 'new') && g.threads.get(`${g.BOARD}.${thread}`).isDead) {
        value    = 'Dead';
        disabled = true;
        QR.cooldown.auto = false;
      }

      value = QR.req ?
        QR.req.progress
      :
        QR.cooldown.seconds || value;

      const {status} = QR.nodes;
      status.value = !value ?
        'Submit'
      : QR.cooldown.auto ?
        `Auto ${value}`
      :
        value;
      return status.disabled = disabled || false;
    },

    openPost() {
      QR.open();
      if (QR.selected.isLocked) {
        const index = QR.posts.indexOf(QR.selected);
        (QR.posts[index+1] || new QR.post()).select();
        $$1.addClass(QR.nodes.el, 'dump');
        return QR.cooldown.auto = true;
      }
    },

    quote(e) {
      let range;
      e?.preventDefault();
      if (!QR.postingIsEnabled) { return; }
      const sel  = d$1.getSelection();
      const post = Get$1.postFromNode(this);
      const {root} = post.nodes;
      const postRange = new Range();
      postRange.selectNode(root);
      let text = post.board.ID === g.BOARD.ID ? `>>${post}\n` : `>>>/${post.board}/${post}\n`;
      for (let i = 0, end = sel.rangeCount, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
        try {
          var insideCode, node;
          range = sel.getRangeAt(i);
          // Trim range to be fully inside post
          if (range.compareBoundaryPoints(Range.START_TO_START, postRange) < 0) {
            range.setStartBefore(root);
          }
          if (range.compareBoundaryPoints(Range.END_TO_END, postRange) > 0) {
            range.setEndAfter(root);
          }

          if (!range.toString().trim()) { continue; }

          var frag  = range.cloneContents();
          var ancestor = range.commonAncestorContainer;
          // Quoting the insides of a spoiler/code tag.
          if ($$1.x('ancestor-or-self::*[self::s or contains(@class,"removed-spoiler")]', ancestor)) {
            $$1.prepend(frag, $$1.tn('[spoiler]'));
            $$1.add(frag, $$1.tn('[/spoiler]'));
          }
          if (insideCode = $$1.x('ancestor-or-self::pre[contains(@class,"prettyprint")]', ancestor)) {
            $$1.prepend(frag, $$1.tn('[code]'));
            $$1.add(frag, $$1.tn('[/code]'));
          }
          for (node of $$((insideCode ? 'br' : '.prettyprint br'), frag)) {
            $$1.replace(node, $$1.tn('\n'));
          }
          for (node of $$('br', frag)) {
            if (node !== frag.lastChild) { $$1.replace(node, $$1.tn('\n>')); }
          }
          g.SITE.insertTags?.(frag);
          for (node of $$('.linkify[data-original]', frag)) {
            $$1.replace(node, $$1.tn(node.dataset.original));
          }
          for (node of $$('.embedder', frag)) {
            if (node.previousSibling?.nodeValue === ' ') { $$1.rm(node.previousSibling); }
            $$1.rm(node);
          }
          text += `>${frag.textContent.trim()}\n`;
        } catch (error) { }
      }

      QR.openPost();
      const {com, thread} = QR.nodes;
      if (!com.value) { thread.value = Get$1.threadFromNode(this); }

      const wasOnlyQuotes = QR.selected.isOnlyQuotes();

      const caretPos = com.selectionStart;
      // Replace selection for text.
      com.value = com.value.slice(0, caretPos) + text + com.value.slice(com.selectionEnd);
      // Move the caret to the end of the new quote.
      range = caretPos + text.length;
      com.setSelectionRange(range, range);
      com.focus();

      // This allows us to determine if any text other than quotes has been typed.
      if (wasOnlyQuotes) { QR.selected.quotedText = com.value; }

      QR.selected.save(com);
      return QR.selected.save(thread);
    },

    characterCount() {
      const counter = QR.nodes.charCount;
      const count   = QR.nodes.com.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length;
      counter.textContent = count;
      counter.hidden      = count < (QR.max_comment/2);
      return (count > QR.max_comment ? $$1.addClass : $$1.rmClass)(counter, 'warning');
    },

    getFile() {
      return $$1.event('QRFile', QR.selected?.file);
    },

    drawFile(e) {
      const file = QR.selected?.file;
      if (!file || !/^(image|video)\//.test(file.type)) { return; }
      const isVideo = /^video\//.test(file);
      const el = $$1.el((isVideo ? 'video' : 'img'));
      $$1.on(el, 'error', () => QR.openError());
      $$1.on(el, (isVideo ? 'loadeddata' : 'load'), function() {
        e.target.getContext('2d').drawImage(el, 0, 0);
        URL.revokeObjectURL(el.src);
        return $$1.event('QRImageDrawn', null, e.target);
      });
      return el.src = URL.createObjectURL(file);
    },

    openError() {
      const div = $$1.el('div');
      $$1.extend(div, {
        innerHTML:
          'Could not open file. [<a href="' + E(meta.faq) + '#error-reading-metadata" target="_blank">More info</a>]'
      });
      return QR.error(div);
    },

    setFile(e) {
      const {file, name, source} = e.detail;
      if (name != null) { file.name   = name; }
      if (source != null) { file.source = source; }
      QR.open();
      return QR.handleFiles([file]);
    },

    drag(e) {
      // Let it drag anything from the page.
      const toggle = e.type === 'dragstart' ? $$1.off : $$1.on;
      toggle(d$1, 'dragover', QR.dragOver);
      return toggle(d$1, 'drop',     QR.dropFile);
    },

    dragOver(e) {
      e.preventDefault();
      return e.dataTransfer.dropEffect = 'copy';
    }, // cursor feedback

    dropFile(e) {
      // Let it only handle files from the desktop.
      if (!e.dataTransfer.files.length) { return; }
      e.preventDefault();
      QR.open();
      return QR.handleFiles(e.dataTransfer.files);
    },

    paste(e) {
      if (!e.clipboardData.items) { return; }
      let file = null;
      let score = -1;
      for (var item of e.clipboardData.items) {
        var file2;
        if ((item.kind === 'file') && (file2 = item.getAsFile())) {
          var score2 = (2*(file2.size <= QR.max_size)) + (file2.type === 'image/png');
          if (score2 > score) {
            file = file2;
            score = score2;
          }
        }
      }
      if (file) {
        const {type} = file;
        const blob = new Blob([file], {type});
        blob.name = `${Conf['pastedname']}.${$$1.getOwn(QR.extensionFromType, type) || 'jpg'}`;
        QR.open();
        QR.handleFiles([blob]);
        $$1.addClass(QR.nodes.el, 'dump');
      }
    },

    pasteFF() {
      const {pasteArea} = QR.nodes;
      if (!pasteArea.childNodes.length) { return; }
      const images = $$('img', pasteArea);
      $$1.rmAll(pasteArea);
      for (var img of images) {
        var m;
        var {src} = img;
        if (m = src.match(/data:(image\/(\w+));base64,(.+)/)) {
          var bstr = atob(m[3]);
          var arr = new Uint8Array(bstr.length);
          for (var i = 0, end = bstr.length, asc = 0 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
            arr[i] = bstr.charCodeAt(i);
          }
          var blob = new Blob([arr], {type: m[1]});
          blob.name = `${Conf['pastedname']}.${m[2]}`;
          QR.handleFiles([blob]);
        } else if (/^https?:\/\//.test(src)) {
          QR.handleUrl(src);
        }
      }
    },

    handleUrl(urlDefault) {
      QR.open();
      QR.selected.preventAutoPost();
      return CrossOrigin$1.permission(function() {
        const url = prompt('Enter a URL:', urlDefault);
        if (url === null) { return; }
        QR.nodes.fileButton.focus();
        return CrossOrigin$1.file(url, function(blob) {
          if (blob && !/^text\//.test(blob.type)) {
            return QR.handleFiles([blob]);
          } else {
            return QR.error("Can't load file.");
          }
        });
      });
    },

    handleFiles(files) {
      if (this !== QR) { // file input
        files  = [...this.files];
        this.value = null;
      }
      if (!files.length) { return; }
      QR.cleanNotifications();
      for (var file of files) {
        QR.handleFile(file, files.length);
      }
      if (files.length !== 1) { $$1.addClass(QR.nodes.el, 'dump'); }
      if ((d$1.activeElement === QR.nodes.fileButton) && $$1.hasClass(QR.nodes.fileSubmit, 'has-file')) {
        return QR.nodes.filename.focus();
      }
    },

    handleFile(file, nfiles) {
      let post;
      const isText = /^text\//.test(file.type);
      if (nfiles === 1) {
        post = QR.selected;
      } else {
        post = QR.posts[QR.posts.length - 1];
        if (isText ? post.com || post.pasting : post.file) {
          post = new QR.post();
        }
      }
      return post[isText ? 'pasteText' : 'setFile'](file);
    },

    openFileInput() {
      if (QR.nodes.fileButton.disabled) { return; }
      QR.nodes.fileInput.click();
      return QR.nodes.fileButton.focus();
    },

    generatePostableThreadsList() {
      if (!QR.nodes) { return; }
      const list    = QR.nodes.thread;
      const options = [list.firstElementChild];
      for (var thread of g.BOARD.threads.keys) {
        options.push($$1.el('option', {
          value: thread,
          textContent: `Thread ${thread}`
        }
        )
        );
      }
      const val = list.value;
      $$1.rmAll(list);
      $$1.add(list, options);
      list.value = val;
      if (list.value === val) { return; }
      // Fix the value if the option disappeared.
      list.value = g.VIEW === 'thread' ?
        g.THREADID
      :
        'new';
      return (g.VIEW === 'thread' ? $$1.addClass : $$1.rmClass)(QR.nodes.el, 'reply-to-thread');
    },

    dialog() {
      let dialog, event, nodes;
      let name;
      QR.nodes = (nodes = {
        el: (dialog = UI.dialog('qr',
          { innerHTML: QuickReplyPage }))
      });

      const setNode = (name, query) => nodes[name] = $$1(query, dialog);

      setNode('move',           '.move');
      setNode('autohide',       '#autohide');
      setNode('close',          '.close');
      setNode('thread',         'select');
      setNode('form',           'form');
      setNode('sjisToggle',     '#sjis-toggle');
      setNode('texButton',      '#tex-preview-button');
      setNode('name',           '[data-name=name]');
      setNode('email',          '[data-name=email]');
      setNode('sub',            '[data-name=sub]');
      setNode('com',            '[data-name=com]');
      setNode('charCount',      '#char-count');
      setNode('texPreview',     '#tex-preview');
      setNode('dumpList',       '#dump-list');
      setNode('addPost',        '#add-post');
      setNode('oekaki',         '.oekaki');
      setNode('drawButton',     '#qr-draw-button');
      setNode('fileSubmit',     '#file-n-submit');
      setNode('fileButton',     '#qr-file-button');
      setNode('noFile',         '#qr-no-file');
      setNode('filename',       '#qr-filename');
      setNode('spoiler',        '#qr-file-spoiler');
      setNode('oekakiButton',   '#qr-oekaki-button');
      setNode('fileRM',         '#qr-filerm');
      setNode('urlButton',      '#url-button');
      setNode('pasteArea',      '#paste-area');
      setNode('customCooldown', '#custom-cooldown-button');
      setNode('dumpButton',     '#dump-button');
      setNode('status',         '[type=submit]');
      setNode('flashTag',       '[name=filetag]');
      setNode('fileInput',      '[type=file]');

      const {config} = g.BOARD;
      const {classList} = QR.nodes.el;
      classList.toggle('forced-anon',  QR.forcedAnon);
      classList.toggle('has-spoiler',  QR.spoiler);
      classList.toggle('has-sjis',     !!config.sjis_tags);
      classList.toggle('has-math',     !!config.math_tags);
      classList.toggle('sjis-preview', !!config.sjis_tags && Conf['sjisPreview']);
      classList.toggle('show-new-thread-option', Conf['Show New Thread Option in Threads']);

      if (parseInt(Conf['customCooldown'], 10) > 0) {
        $$1.addClass(QR.nodes.fileSubmit, 'custom-cooldown');
        $$1.get('customCooldownEnabled', Conf['customCooldownEnabled'], function({customCooldownEnabled}) {
          QR.setCustomCooldown(customCooldownEnabled);
          return $$1.sync('customCooldownEnabled', QR.setCustomCooldown);
        });
      }

      QR.flagsInput();

      $$1.on(nodes.autohide,       'change',    QR.toggleHide);
      $$1.on(nodes.close,          'click',     QR.close);
      $$1.on(nodes.status,         'click',     QR.submit);
      $$1.on(nodes.form,           'submit',    QR.submit);
      $$1.on(nodes.sjisToggle,     'click',     QR.toggleSJIS);
      $$1.on(nodes.texButton,      'mousedown', QR.texPreviewShow);
      $$1.on(nodes.texButton,      'mouseup',   QR.texPreviewHide);
      $$1.on(nodes.addPost,        'click',     () => new QR.post(true));
      $$1.on(nodes.drawButton,     'click',     QR.oekaki.draw);
      $$1.on(nodes.fileButton,     'click',     QR.openFileInput);
      $$1.on(nodes.noFile,         'click',     QR.openFileInput);
      $$1.on(nodes.filename,       'focus',     function() { return $$1.addClass(this.parentNode, 'focus'); });
      $$1.on(nodes.filename,       'blur',      function() { return $$1.rmClass(this.parentNode, 'focus'); });
      $$1.on(nodes.spoiler,        'change',    () => QR.selected.nodes.spoiler.click());
      $$1.on(nodes.oekakiButton,   'click',     QR.oekaki.button);
      $$1.on(nodes.fileRM,         'click',     () => QR.selected.rmFile());
      $$1.on(nodes.urlButton,      'click',     () => QR.handleUrl(''));
      $$1.on(nodes.customCooldown, 'click',     QR.toggleCustomCooldown);
      $$1.on(nodes.dumpButton,     'click',     () => nodes.el.classList.toggle('dump'));
      $$1.on(nodes.fileInput,      'change',    QR.handleFiles);

      window.addEventListener('focus', QR.focus, true);
      window.addEventListener('blur',  QR.focus, true);
      // We don't receive blur events from captcha iframe.
      $$1.on(d$1, 'click', QR.focus);

      // XXX Workaround for image pasting in Firefox, obsolete as of v50.
      // https://bugzilla.mozilla.org/show_bug.cgi?id=906420
      if (($$1.engine === 'gecko') && !window.DataTransferItemList) {
        nodes.pasteArea.hidden = false;
      }
      new MutationObserver(QR.pasteFF).observe(nodes.pasteArea, {childList: true});

      // save selected post's data
      const items = ['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag'];
      let i = 0;
      const save = function() { return QR.selected.save(this); };
      while ((name = items[i++])) {
        var node;
        if (!(node = nodes[name])) { continue; }
        event = node.nodeName === 'SELECT' ? 'change' : 'input';
        $$1.on(nodes[name], event, save);
      }

      // XXX Blink and WebKit treat width and height of <textarea>s as min-width and min-height
      if (($$1.engine === 'gecko') && Conf['Remember QR Size']) {
        $$1.get('QR Size', '', item => nodes.com.style.cssText = item['QR Size']);
        $$1.on(nodes.com, 'mouseup', function(e) {
          if (e.button !== 0) { return; }
          return $$1.set('QR Size', this.style.cssText);
        });
      }

      QR.generatePostableThreadsList();
      QR.persona.load();
      new QR.post(true);
      QR.status();
      QR.cooldown.setup();
      QR.captcha.init();

      $$1.add(d$1.body, dialog);
      QR.captcha.setup();
      QR.oekaki.setup();

      // Create a custom event when the QR dialog is first initialized.
      // Use it to extend the QR's functionalities, or for XTRM RICE.
      return $$1.event('QRDialogCreation', null, dialog);
    },

    flags() {
      const select = $$1.el('select', {
        name:      'flag',
        className: 'flagSelector'
      }
      );

      const addFlag = (value, textContent) => $$1.add(select, $$1.el('option', {value, textContent}));

      addFlag('0', (g.BOARD.config.country_flags ? 'Geographic Location' : 'None'));
      for (var value in g.BOARD.config.board_flags) {
        var textContent = g.BOARD.config.board_flags[value];
        addFlag(value, textContent);
      }

      return select;
    },

    flagsInput() {
      const {nodes} = QR;
      if (!nodes) { return; }
      if (nodes.flag) {
        $$1.rm(nodes.flag);
        delete nodes.flag;
      }

      if (g.BOARD.config.board_flags) {
        const flag = QR.flags();
        flag.dataset.name    = 'flag';
        flag.dataset.default = '0';
        nodes.flag = flag;
        return $$1.add(nodes.form, flag);
      }
    },

    submit(e) {
      let captcha, err, filetag;
      e?.preventDefault();
      const force = e?.shiftKey;

      if (QR.req) {
        QR.abort();
        return;
      }

      $$1.forceSync('cooldowns');
      if (QR.cooldown.seconds) {
        if (force) {
          QR.cooldown.clear();
        } else {
          QR.cooldown.auto = !QR.cooldown.auto;
          QR.status();
          return;
        }
      }

      const post = QR.posts[0];
      delete post.quotedText;
      post.forceSave();
      let threadID = post.thread;
      const thread = g.BOARD.threads.get(threadID);
      if ((g.BOARD.ID === 'f') && (threadID === 'new')) {
        filetag = QR.nodes.flashTag.value;
      }

      // prevent errors
      if (threadID === 'new') {
        threadID = null;
        if (!!g.BOARD.config.require_subject && !post.sub) {
          err = 'New threads require a subject.';
        } else if (!!!g.BOARD.config.text_only && !post.file) {
          err = 'No file selected.';
        }
      } else if (g.BOARD.threads.get(threadID).isClosed) {
        err = 'You can\'t reply to this thread anymore.';
      } else if (!post.com && !post.file) {
        err = 'No comment or file.';
      } else if (post.file && thread.fileLimit) {
        err = 'Max limit of image replies has been reached.';
      }

      if ((g.BOARD.ID === 'r9k') && !post.com?.match(/[a-z-]/i)) {
        if (!err) { err = 'Original comment required.'; }
      }

      if (QR.captcha.isEnabled && !((QR.captcha === Captcha.v2) && /\b_ct=/.test(d$1.cookie) && threadID) && !(err && !force)) {
        captcha = QR.captcha.getOne(!!threadID);
        if (QR.captcha === Captcha.v2) {
          if (!captcha) { captcha = Captcha.cache.request(!!threadID); }
        }
        if (!captcha) {
          err = 'No valid captcha.';
          QR.captcha.setup(!QR.cooldown.auto || (d$1.activeElement === QR.nodes.status));
        }
      }

      QR.cleanNotifications();
      if (err && !force) {
        // stop auto-posting
        QR.cooldown.auto = false;
        QR.status();
        QR.error(err);
        return;
      }

      // Enable auto-posting if we have stuff to post, disable it otherwise.
      QR.cooldown.auto = QR.posts.length > 1;

      post.lock();

      const formData = {
        MAX_FILE_SIZE: QR.max_size,
        mode:     'regist',
        pwd:      QR.persona.getPassword(),
        resto:    threadID,
        name:     (!QR.forcedAnon ? post.name : undefined),
        email:    post.email,
        sub:      (!QR.forcedAnon && !threadID ? post.sub : undefined),
        com:      post.com,
        upfile:   post.file,
        filetag,
        spoiler:  post.spoiler,
        flag:     post.flag,
      };

      const options = {
        responseType: 'document',
        withCredentials: true,
        onloadend: QR.response,
        form: $$1.formData(formData)
      };
      if (Conf['Show Upload Progress']) {
        options.onprogress = function(e) {
          if (this !== QR.req?.upload) { return; } // aborted
          if (e.loaded < e.total) {
            // Uploading...
            QR.req.progress = `${Math.round((e.loaded / e.total) * 100)}%`;
          } else {
            // Upload done, waiting for server response.
            QR.req.isUploadFinished = true;
            QR.req.progress = '...';
          }
          return QR.status();
        };
      }

      let cb = function(response) {
        if (response != null) {
          QR.currentCaptcha = response;
          if (QR.captcha === Captcha.v2) {
            if (response.challenge != null) {
              options.form.append('recaptcha_challenge_field', response.challenge);
              options.form.append('recaptcha_response_field', response.response);
            } else {
              options.form.append('g-recaptcha-response', response.response);
            }
          } else {
            for (var key in response) {
              var val = response[key];
              options.form.append(key, val);
            }
          }
        }
        QR.req = $$1.ajax(`https://sys.${location.hostname.split('.')[1]}.org/${g.BOARD}/post`, options);
        return QR.req.progress = '...';
      };

      if (typeof captcha === 'function') {
        // Wait for captcha to be verified before submitting post.
        QR.req = {
          progress: '...',
          abort() {
            if (QR.captcha === Captcha.v2) {
              Captcha.cache.abort();
            }
            return cb = null;
          }
        };
        captcha(function(response) {
          if ((QR.captcha === Captcha.v2) && Captcha.cache.haveCookie()) {
            cb?.();
            if (response) { return Captcha.cache.save(response); }
          } else if (response) {
            return cb?.(response);
          } else {
            delete QR.req;
            post.unlock();
            QR.cooldown.auto = !!Captcha.cache.getCount();
            return QR.status();
          }
        });
      } else {
        cb(captcha);
      }

      // Starting to upload might take some time.
      // Provide some feedback that we're starting to submit.
      return QR.status();
    },

    response() {
      let connErr, err;
      if (this !== QR.req) { return; } // aborted
      delete QR.req;

      const post = QR.posts[0];
      post.unlock();

      if (err = this.response?.getElementById('errmsg')) { // error!
        const el = $$1('a', err);
        if (el) el.target = '_blank'; // duplicate image link
      } else if (connErr = (!this.response || (this.response.title !== 'Post successful!'))) {
        err = QR.connectionError();
        if ((QR.captcha === Captcha.v2) && QR.currentCaptcha) { Captcha.cache.save(QR.currentCaptcha); }
      } else if (this.status !== 200) {
        err = `Error ${this.statusText} (${this.status})`;
      }

      if (!connErr) { QR.captcha.setUsed?.(); }
      delete QR.currentCaptcha;

      if (err) {
        let m;
        QR.errorCount = (QR.errorCount || 0) + 1;
        if (/captcha|verification/i.test(err.textContent) || connErr) {
          // Remove the obnoxious 4chan Pass ad.
          if (/mistyped/i.test(err.textContent)) {
            err = 'You mistyped the CAPTCHA, or the CAPTCHA malfunctioned.';
          } else if (/expired/i.test(err.textContent)) {
            err = 'This CAPTCHA is no longer valid because it has expired.';
          }
          if (QR.errorCount >= 5) {
            // Too many posting errors can ban you. Stop autoposting after 5 errors.
            QR.cooldown.auto = false;
          } else {
            // Something must've gone terribly wrong if you get captcha errors without captchas.
            // Don't auto-post indefinitely in that case.
            QR.cooldown.auto = QR.captcha.isEnabled || connErr;
            // Too many frequent mistyped captchas will auto-ban you!
            // On connection error, the post most likely didn't go through.
            // If the post did go through, it should be stopped by the duplicate reply cooldown.
            QR.cooldown.addDelay(post, 2);
          }
        } else if (err.textContent && (m = err.textContent.match(/\d+\s+(?:minute|second)/gi)) && !/duplicate|hour/i.test(err.textContent)) {
          QR.cooldown.auto = !/have\s+been\s+muted/i.test(err.textContent);
          let seconds = 0;
          for (var mi of m) {
            seconds += (/minute/i.test(mi) ? 60 : 1) * (+mi.match(/\d+/)[0]);
          }
          if (/muted/i.test(err.textContent)) {
            QR.cooldown.addMute(seconds);
          } else {
            QR.cooldown.addDelay(post, seconds);
          }
        } else { // stop auto-posting
          QR.cooldown.auto = false;
        }
        QR.captcha.setup(QR.cooldown.auto && [QR.nodes.status, d$1.body].includes(d$1.activeElement));
        QR.status();
        QR.error(err);
        return;
      }

      delete QR.errorCount;

      const h1 = $$1('h1', this.response);

      let [_, threadID, postID] = h1.nextSibling.textContent.match(/thread:(\d+),no:(\d+)/);
      postID   = +postID;
      threadID = +threadID || postID;
      const isReply  = threadID !== postID;

      // Post/upload confirmed as successful.
      $$1.event('QRPostSuccessful', {
        boardID: g.BOARD.ID,
        threadID,
        postID
      });
      // XXX deprecated
      $$1.event('QRPostSuccessful_', {boardID: g.BOARD.ID, threadID, postID});

      // Enable auto-posting if we have stuff left to post, disable it otherwise.
      const postsCount = QR.posts.length - 1;
      QR.cooldown.auto = postsCount && isReply;

      const lastPostToThread = !((function() { for (var p of QR.posts.slice(1)) { if (p.thread === post.thread) { return true; } } })());

      if (postsCount) {
        post.rm();
        QR.captcha.setup(d$1.activeElement === QR.nodes.status);
      } else if (Conf['Persistent QR']) {
        post.rm();
        if (Conf['Auto Hide QR']) {
          QR.hide();
        } else {
          QR.blur();
        }
      } else {
        QR.close();
      }

      QR.cleanNotifications();
      if (Conf['Posting Success Notifications']) {
        QR.notifications.push(new Notice('success', h1.textContent, 5));
      }

      QR.cooldown.add(threadID, postID);

      const URL = threadID === postID ? ( // new thread
        `${window.location.origin}/${g.BOARD}/thread/${threadID}`
      ) : (threadID !== g.THREADID) && lastPostToThread && Conf['Open Post in New Tab'] ? ( // replying from the index or a different thread
        `${window.location.origin}/${g.BOARD}/thread/${threadID}#p${postID}`
      ) : undefined;

      if (URL) {
        const open = Conf['Open Post in New Tab'] || postsCount ?
          () => $$1.open(URL)
        :
          () => location.href = URL;

        if (threadID === postID) {
          // XXX 4chan sometimes responds before the thread exists.
          QR.waitForThread(URL, open);
        } else {
          open();
        }
      }

      return QR.status();
    },

    waitForThread(url, cb) {
      let attempts = 0;
      var check = function() {
        return $$1.ajax(url, {
          onloadend() {
            attempts++;
            if ((attempts >= 6) || (this.status === 200)) {
              return cb();
            } else {
              return setTimeout(check, attempts * SECOND);
            }
          },
          responseType: 'text',
          type: 'HEAD'
        }
        );
      };
      return check();
    },

    abort() {
      let oldReq;
      if ((oldReq = QR.req) && !QR.req.isUploadFinished) {
        delete QR.req;
        oldReq.abort();
        if ((QR.captcha === Captcha.v2) && QR.currentCaptcha) { Captcha.cache.save(QR.currentCaptcha); }
        delete QR.currentCaptcha;
        QR.posts[0].unlock();
        QR.cooldown.auto = false;
        QR.notifications.push(new Notice('info', 'QR upload aborted.', 5));
      }
      return QR.status();
    },

    cooldown: {
      seconds: 0,
      delays: {
        deletion: 60
      }, // cooldown for deleting posts/files

      // Called from Main
      init() {
        if (!Conf['Quick Reply']) { return; }
        this.data = Conf['cooldowns'];
        this.changes = dict();
        return $$1.sync('cooldowns', this.sync);
      },

      // Called from QR
      setup() {
        // Read cooldown times
        $$1.extend(QR.cooldown.delays, g.BOARD.cooldowns());

        // The longest reply cooldown, for use in pruning old reply data
        QR.cooldown.maxDelay = 0;
        for (var type in QR.cooldown.delays) {
          var delay = QR.cooldown.delays[type];
          if (!['thread', 'thread_global'].includes(type)) {
            QR.cooldown.maxDelay = Math.max(QR.cooldown.maxDelay, delay);
          }
        }

        QR.cooldown.isSetup = true;
        return QR.cooldown.start();
      },

      start() {
        const { data } = QR.cooldown;
        if (
          !Conf['Cooldown'] ||
          !QR.cooldown.isSetup ||
          !!QR.cooldown.isCounting ||
          ((Object.keys(data[g.BOARD.ID] || {}).length + Object.keys(data.global || {}).length) <= 0)
        ) { return; }
        QR.cooldown.isCounting = true;
        return QR.cooldown.count();
      },

      sync(data) {
        QR.cooldown.data = data || dict();
        return QR.cooldown.start();
      },

      add(threadID, postID) {
        if (!Conf['Cooldown']) { return; }
        const start = Date.now();
        const boardID = g.BOARD.ID;
        QR.cooldown.set(boardID, start, { threadID, postID });
        if (threadID === postID) { QR.cooldown.set('global', start, { boardID, threadID, postID }); }
        QR.cooldown.save();
        return QR.cooldown.start();
      },

      addDelay(post, delay) {
        if (!Conf['Cooldown']) { return; }
        const cooldown = QR.cooldown.categorize(post);
        cooldown.delay = delay;
        QR.cooldown.set(g.BOARD.ID, Date.now(), cooldown);
        QR.cooldown.save();
        return QR.cooldown.start();
      },

      addMute(delay) {
        if (!Conf['Cooldown']) { return; }
        QR.cooldown.set(g.BOARD.ID, Date.now(), { type: 'mute', delay });
        QR.cooldown.save();
        return QR.cooldown.start();
      },

      delete(post) {
        let cooldown;
        if (!QR.cooldown.data) { return; }
        const cooldowns = (QR.cooldown.data[post.board.ID] || (QR.cooldown.data[post.board.ID] = dict()));
        for (var id in cooldowns) {
          cooldown = cooldowns[id];
          if ((cooldown.delay == null) && (cooldown.threadID === post.thread.ID) && (cooldown.postID === post.ID)) {
            QR.cooldown.set(post.board.ID, id, null);
          }
        }
        return QR.cooldown.save();
      },

      secondsDeletion(post) {
        if (!QR.cooldown.data || !Conf['Cooldown']) { return 0; }
        const cooldowns = QR.cooldown.data[post.board.ID] || dict();
        for (var start in cooldowns) {
          var cooldown = cooldowns[start];
          if ((cooldown.delay == null) && (cooldown.threadID === post.thread.ID) && (cooldown.postID === post.ID)) {
            var seconds = QR.cooldown.delays.deletion - Math.floor((Date.now() - start) / SECOND);
            return Math.max(seconds, 0);
          }
        }
        return 0;
      },

      categorize(post) {
        if (post.thread === 'new') {
          return { type: 'thread' };
        } else {
          return {
            type: !!post.file ? 'image' : 'reply',
            threadID: +post.thread
          };
        }
      },

      mergeChange(data, scope, id, value) {
        if (value) {
          return (data[scope] || (data[scope] = dict()))[id] = value;
        } else if (scope in data) {
          delete data[scope][id];
          if (Object.keys(data[scope]).length === 0) { return delete data[scope]; }
        }
      },

      set(scope, id, value) {
        QR.cooldown.mergeChange(QR.cooldown.data, scope, id, value);
        return (QR.cooldown.changes[scope] || (QR.cooldown.changes[scope] = dict()))[id] = value;
      },

      save() {
        const { changes } = QR.cooldown;
        if (!Object.keys(changes).length) { return; }
        return $$1.get('cooldowns', dict(), function ({ cooldowns }) {
          for (var scope in QR.cooldown.changes) {
            for (var id in QR.cooldown.changes[scope]) {
              var value = QR.cooldown.changes[scope][id];
              QR.cooldown.mergeChange(cooldowns, scope, id, value);
            }
            QR.cooldown.data = cooldowns;
          }
          return $$1.set('cooldowns', cooldowns, () => QR.cooldown.changes = dict());
        });
      },

      clear() {
        QR.cooldown.data = dict();
        QR.cooldown.changes = dict();
        QR.cooldown.auto = false;
        QR.cooldown.update();
        return $$1.queueTask($$1.delete, 'cooldowns');
      },

      update() {
        let cooldown;
        if (!QR.cooldown.isCounting) { return; }

        let save = false;
        let nCooldowns = 0;
        const now = Date.now();
        const { type, threadID } = QR.cooldown.categorize(QR.posts[0]);
        let seconds = 0;

        if (Conf['Cooldown']) {
          for (var scope of [g.BOARD.ID, 'global']) {
            var cooldowns = (QR.cooldown.data[scope] || (QR.cooldown.data[scope] = dict()));

            for (var start in cooldowns) {
              cooldown = cooldowns[start];
              start = +start;
              var elapsed = Math.floor((now - start) / SECOND);
              if (elapsed < 0) { // clock changed since then?
                QR.cooldown.set(scope, start, null);
                save = true;
                continue;
              }

              // Explicit delays from error messages
              if (cooldown.delay != null) {
                if (cooldown.delay <= elapsed) {
                  QR.cooldown.set(scope, start, null);
                  save = true;
                } else if (((cooldown.type === type) && (cooldown.threadID === threadID)) || (cooldown.type === 'mute')) {
                  // Delays only apply to the given post type and thread.
                  seconds = Math.max(seconds, cooldown.delay - elapsed);
                }
                continue;
              }

              // Clean up expired cooldowns
              var maxDelay = cooldown.threadID !== cooldown.postID ?
                QR.cooldown.maxDelay
                :
                QR.cooldown.delays[scope === 'global' ? 'thread_global' : 'thread'];
              if (QR.cooldown.customCooldown) {
                maxDelay = Math.max(maxDelay, parseInt(Conf['customCooldown'], 10));
              }
              if (maxDelay <= elapsed) {
                QR.cooldown.set(scope, start, null);
                save = true;
                continue;
              }

              if (((type === 'thread') === (cooldown.threadID === cooldown.postID)) && (cooldown.boardID !== g.BOARD.ID)) {
                // Only cooldowns relevant to this post can set the seconds variable:
                //   reply cooldown with a reply, thread cooldown with a thread.
                // Inter-board thread cooldowns only apply on boards other than the one they were posted on.
                var suffix = scope === 'global' ?
                  '_global'
                  :
                  '';
                seconds = Math.max(seconds, QR.cooldown.delays[type + suffix] - elapsed);

                // If additional cooldown is enabled, add the configured seconds to the count.
                if (QR.cooldown.customCooldown) {
                  seconds = Math.max(seconds, parseInt(Conf['customCooldown'], 10) - elapsed);
                }
              }
            }

            nCooldowns += Object.keys(cooldowns).length;
          }
        }

        if (save) { QR.cooldown.save; }

        if (nCooldowns) {
          clearTimeout(QR.cooldown.timeout);
          QR.cooldown.timeout = setTimeout(QR.cooldown.count, SECOND);
        } else {
          delete QR.cooldown.isCounting;
        }

        // Update the status when we change posting type.
        // Don't get stuck at some random number.
        // Don't interfere with progress status updates.
        const update = seconds !== QR.cooldown.seconds;
        QR.cooldown.seconds = seconds;
        if (update) { return QR.status(); }
      },

      count() {
        QR.cooldown.update();
        if ((QR.cooldown.seconds === 0) && QR.cooldown.auto && !QR.req) { return QR.submit(); }
      }
    },

    oekaki: {
      menu: {
        init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Edit Link'] || !Conf['Quick Reply']) { return; }

          const a = $$1.el('a', {
            className: 'edit-link',
            href: 'javascript:;',
            textContent: 'Edit image'
          }
          );
          $$1.on(a, 'click', this.editFile);

          return Menu.menu.addEntry({
            el: a,
            order: 90,
            open(post) {
              QR.oekaki.menu.post = post;
              const { file } = post;
              return QR.postingIsEnabled && !!file && (file.isImage || file.isVideo);
            }
          });
        },

        editFile() {
          const { post } = QR.oekaki.menu;
          QR.quote.call(post.nodes.post);
          const { isVideo } = post.file;
          const currentTime = post.file.fullImage?.currentTime || 0;
          return CrossOrigin$1.file(post.file.url, function (blob) {
            if (!blob) {
              return QR.error("Can't load file.");
            } else if (isVideo) {
              const video = $$1.el('video');
              $$1.on(video, 'loadedmetadata', function () {
                $$1.on(video, 'seeked', function () {
                  const canvas = $$1.el('canvas', {
                    width: video.videoWidth,
                    height: video.videoHeight
                  }
                  );
                  canvas.getContext('2d').drawImage(video, 0, 0);
                  return canvas.toBlob(function (snapshot) {
                    snapshot.name = post.file.name.replace(/\.\w+$/, '') + '.png';
                    QR.handleFiles([snapshot]);
                    return QR.oekaki.edit();
                  });
                });
                return video.currentTime = currentTime;
              });
              $$1.on(video, 'error', () => QR.openError());
              return video.src = URL.createObjectURL(blob);
            } else {
              blob.name = post.file.name;
              QR.handleFiles([blob]);
              return QR.oekaki.edit();
            }
          });
        }
      },

      setup() {
        return $$1.global(function () {
          const { FCX } = window;
          FCX.oekakiCB = () => window.Tegaki.flatten().toBlob(function (file) {
            const source = `oekaki-${Date.now()}`;
            FCX.oekakiLatest = source;
            return document.dispatchEvent(new CustomEvent('QRSetFile', {
              bubbles: true,
              detail: { file, name: FCX.oekakiName, source }
            }));
          });
          if (window.Tegaki) {
            return document.querySelector('#qr .oekaki').hidden = false;
          }
        });
      },

      load(cb) {
        if ($$1('script[src^="//s.4cdn.org/js/tegaki"]', d$1.head)) {
          return cb();
        } else {
          const style = $$1.el('link', {
            rel: 'stylesheet',
            href: `//s.4cdn.org/css/tegaki.${Date.now()}.css`
          }
          );
          const script = $$1.el('script',
            { src: `//s.4cdn.org/js/tegaki.min.${Date.now()}.js` });
          let n = 0;
          const onload = function () {
            if (++n === 2) { return cb(); }
          };
          $$1.on(style, 'load', onload);
          $$1.on(script, 'load', onload);
          return $$1.add(d$1.head, [style, script]);
        }
      },

      draw() {
        return $$1.global(function () {
          const { Tegaki, FCX } = window;
          if (Tegaki.bg) { Tegaki.destroy(); }
          FCX.oekakiName = 'tegaki.png';
          return Tegaki.open({
            onDone: FCX.oekakiCB,
            onCancel() { return Tegaki.bgColor = '#ffffff'; },
            width: +document.querySelector('#qr [name=oekaki-width]').value,
            height: +document.querySelector('#qr [name=oekaki-height]').value,
            bgColor:
              document.querySelector('#qr [name=oekaki-bg]').checked ?
                document.querySelector('#qr [name=oekaki-bgcolor]').value
                :
                'transparent'
          });
        });
      },

      button() {
        if (QR.selected.file) {
          return QR.oekaki.edit();
        } else {
          return QR.oekaki.toggle();
        }
      },

      edit() {
        return QR.oekaki.load(() => $$1.global(function () {
          const { Tegaki, FCX } = window;
          const name = document.getElementById('qr-filename').value.replace(/\.\w+$/, '') + '.png';
          const { source } = document.getElementById('file-n-submit').dataset;
          const error = content => document.dispatchEvent(new CustomEvent('CreateNotification', {
            bubbles: true,
            detail: { type: 'warning', content, lifetime: 20 }
          }));
          var cb = function (e) {
            if (e) { this.removeEventListener('QRMetadata', cb, false); }
            const selected = document.getElementById('selected');
            if (!selected?.dataset.type) { return error('No file to edit.'); }
            if (!/^(image|video)\//.test(selected.dataset.type)) { return error('Not an image.'); }
            if (!selected.dataset.height) { return error('Metadata not available.'); }
            if (selected.dataset.height === 'loading') {
              selected.addEventListener('QRMetadata', cb, false);
              return;
            }
            if (Tegaki.bg) { Tegaki.destroy(); }
            FCX.oekakiName = name;
            Tegaki.open({
              onDone: FCX.oekakiCB,
              onCancel() { return Tegaki.bgColor = '#ffffff'; },
              width: +selected.dataset.width,
              height: +selected.dataset.height,
              bgColor: 'transparent'
            });
            const canvas = document.createElement('canvas');
            canvas.width = (canvas.naturalWidth = +selected.dataset.width);
            canvas.height = (canvas.naturalHeight = +selected.dataset.height);
            canvas.hidden = true;
            document.body.appendChild(canvas);
            canvas.addEventListener('QRImageDrawn', function () {
              this.remove();
              return Tegaki.onOpenImageLoaded.call(this);
            }
              , false);
            return canvas.dispatchEvent(new CustomEvent('QRDrawFile', { bubbles: true }));
          };
          if (Tegaki.bg && (Tegaki.onDoneCb === FCX.oekakiCB) && (source === FCX.oekakiLatest)) {
            FCX.oekakiName = name;
            return Tegaki.resume();
          } else {
            return cb();
          }
        }));
      },

      toggle() {
        return QR.oekaki.load(() => QR.nodes.oekaki.hidden = !QR.nodes.oekaki.hidden);
      }
    },

    persona: {
      always: {},
      types: {
        name: [],
        email: [],
        sub: []
      },

      init() {
        if (!Conf['Quick Reply'] && (!Conf['Menu'] || !Conf['Delete Link'])) { return; }
        for (var item of Conf['QR.personas'].split('\n')) {
          QR.persona.parseItem(item.trim());
        }
      },

      parseItem(item) {
        let match, needle, type, val;
        if (item[0] === '#') { return; }
        if (!(match = item.match(/(name|options|email|subject|password):"(.*)"/i))) { return; }
        [match, type, val] = match;

        // Don't mix up item settings with val.
        item = item.replace(match, '');

        const boards = item.match(/boards:([^;]+)/i)?.[1].toLowerCase() || 'global';
        if ((boards !== 'global') && (needle = g.BOARD.ID, !boards.split(',').includes(needle))) { return; }


        if (type === 'password') {
          QR.persona.pwd = val;
          return;
        }

        if (type === 'options') { type = 'email'; }
        if (type === 'subject') { type = 'sub'; }

        if (/always/i.test(item)) {
          QR.persona.always[type] = val;
        }

        if (!QR.persona.types[type].includes(val)) {
          return QR.persona.types[type].push(val);
        }
      },

      load() {
        for (var type in QR.persona.types) {
          var arr = QR.persona.types[type];
          var list = $$1(`#list-${type}`, QR.nodes.el);
          for (var val of arr) {
            if (val) {
              $$1.add(list, $$1.el('option',
                { textContent: val })
              );
            }
          }
        }
      },

      getPassword() {
        let m;
        if (QR.persona.pwd != null) {
          return QR.persona.pwd;
        } else if (m = d$1.cookie.match(/4chan_pass=([^;]+)/)) {
          return decodeURIComponent(m[1]);
        } else {
          return '';
        }
      },

      get(cb) {
        return $$1.get('QR.persona', {}, ({ 'QR.persona': persona }) => cb(persona));
      },

      set(post) {
        return $$1.get('QR.persona', {}, function ({ 'QR.persona': persona }) {
          persona = {
            name: post.name,
            flag: post.flag
          };
          return $$1.set('QR.persona', persona);
        });
      }
    },

    post: class {
      constructor(select) {
        this.select = this.select.bind(this);
        const el = $$1.el('a', {
          className: 'qr-preview',
          draggable: true,
          href: 'javascript:;'
        }
        );
        $$1.extend(el, { innerHTML: '<a class="remove" title="Remove">✕</a><label class="qr-preview-spoiler"><input type="checkbox"> Spoiler</label><span></span>' });

        this.nodes = {
          el,
          rm: el.firstChild,
          spoiler: $$1('.qr-preview-spoiler input', el),
          span: el.lastChild
        };

        $$1.on(el, 'click', this.select);
        $$1.on(this.nodes.rm, 'click', e => { e.stopPropagation(); return this.rm(); });
        $$1.on(this.nodes.spoiler, 'change', e => {
          this.spoiler = e.target.checked;
          if (this === QR.selected) { QR.nodes.spoiler.checked = this.spoiler; }
          return this.preventAutoPost();
        });
        for (var label of $$('label', el)) {
          $$1.on(label, 'click', e => e.stopPropagation());
        }
        $$1.add(QR.nodes.dumpList, el);

        for (var event of ['dragStart', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop']) {
          $$1.on(el, event.toLowerCase(), this[event]);
        }

        this.thread = g.VIEW === 'thread' ?
          g.THREADID
          :
          'new';

        const prev = QR.posts[QR.posts.length - 1];
        QR.posts.push(this);
        this.nodes.spoiler.checked = (this.spoiler = prev && Conf['Remember Spoiler'] ?
          prev.spoiler
          :
          false);
        QR.persona.get(persona => {
          this.name = 'name' in QR.persona.always ?
            QR.persona.always.name
            : prev ?
              prev.name
              :
              persona.name;

          this.email = 'email' in QR.persona.always ?
            QR.persona.always.email
            :
            '';

          this.sub = 'sub' in QR.persona.always ?
            QR.persona.always.sub
            :
            '';

          if (QR.nodes.flag) {
            this.flag = (() => {
              if (prev) {
                return prev.flag;
              } else if (persona.flag && persona.flag in g.BOARD.config.board_flags) {
                return persona.flag;
              }
            })();
          }
          if (QR.selected === this) { return this.load(); }
        }); // load persona
        if (select) { this.select(); }
        this.unlock();
        QR.captcha.moreNeeded();
      }

      rm() {
        this.delete();
        const index = QR.posts.indexOf(this);
        if (QR.posts.length === 1) {
          new QR.post(true);
          $$1.rmClass(QR.nodes.el, 'dump');
        } else if (this === QR.selected) {
          (QR.posts[index - 1] || QR.posts[index + 1]).select();
        }
        QR.posts.splice(index, 1);
        QR.status();
        return QR.captcha.updateThread?.();
      }

      delete() {
        $$1.rm(this.nodes.el);
        URL.revokeObjectURL(this.URL);
        return this.dismissErrors();
      }

      lock(lock = true) {
        this.isLocked = lock;
        if (this !== QR.selected) { return; }
        for (var name of ['thread', 'name', 'email', 'sub', 'com', 'fileButton', 'filename', 'spoiler', 'flag']) {
          var node;
          if ((node = QR.nodes[name])) {
            node.disabled = lock;
          }
        }
        this.nodes.rm.style.visibility = lock ? 'hidden' : '';
        this.nodes.spoiler.disabled = lock;
        return this.nodes.el.draggable = !lock;
      }

      unlock() {
        return this.lock(false);
      }

      select() {
        if (QR.selected) {
          QR.selected.nodes.el.removeAttribute('id');
          QR.selected.forceSave();
        }
        QR.selected = this;
        this.lock(this.isLocked);
        this.nodes.el.id = 'selected';
        // Scroll the list to center the focused post.
        const rectEl = this.nodes.el.getBoundingClientRect();
        const rectList = this.nodes.el.parentNode.getBoundingClientRect();
        this.nodes.el.parentNode.scrollLeft += (rectEl.left + (rectEl.width / 2)) - rectList.left - (rectList.width / 2);
        return this.load();
      }

      load() {
        // Load this post's values.

        for (var name of ['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag']) {
          var node;
          if (!(node = QR.nodes[name])) { continue; }
          node.value = this[name] || node.dataset.default || '';
        }

        (this.thread !== 'new' ? $$1.addClass : $$1.rmClass)(QR.nodes.el, 'reply-to-thread');

        this.showFileData();
        return QR.characterCount();
      }

      save(input, forced) {
        if (input.type === 'checkbox') {
          this.spoiler = input.checked;
          return;
        }
        const { name } = input.dataset;
        if (!['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag'].includes(name)) { return; }
        const prev = this[name] || input.dataset.default || null;
        this[name] = input.value || input.dataset.default || null;
        switch (name) {
          case 'thread':
            (this.thread !== 'new' ? $$1.addClass : $$1.rmClass)(QR.nodes.el, 'reply-to-thread');
            QR.status();
            QR.captcha.updateThread?.();
            break;
          case 'com':
            this.updateComment();
            break;
          case 'filename':
            if (!this.file) { return; }
            this.saveFilename();
            this.updateFilename();
            break;
          case 'name': case 'flag':
            if (this[name] !== prev) { // only save manual changes, not values filled in by persona settings
              QR.persona.set(this);
            }
            break;
        }
        if (!forced) { return this.preventAutoPost(); }
      }

      forceSave() {
        if (this !== QR.selected) { return; }
        // Do this in case people use extensions
        // that do not trigger the `input` event.
        for (var name of ['thread', 'name', 'email', 'sub', 'com', 'filename', 'spoiler', 'flag']) {
          var node;
          if (!(node = QR.nodes[name])) { continue; }
          this.save(node, true);
        }
      }

      preventAutoPost() {
        // Disable auto-posting if you're editing the first post
        // during the last 5 seconds of the cooldown.
        if (QR.cooldown.auto && (this === QR.posts[0])) {
          QR.cooldown.update(); // adding/removing file can change cooldown
          if (QR.cooldown.seconds <= 5) { return QR.cooldown.auto = false; }
        }
      }

      setComment(com) {
        this.com = com || null;
        if (this === QR.selected) {
          QR.nodes.com.value = this.com;
        }
        return this.updateComment();
      }

      updateComment() {
        if (this === QR.selected) {
          QR.characterCount();
        }
        this.nodes.span.textContent = this.com;
        QR.captcha.moreNeeded();
        if (QR.captcha === Captcha.v2) {
          return Captcha.cache.prerequest();
        }
      }

      isOnlyQuotes() {
        return (this.com || '').trim() === (this.quotedText || '').trim();
      }

      static rmErrored(e) {
        e.stopPropagation();
        for (let i = QR.posts.length - 1; i >= 0; i--) {
          var errors;
          var post = QR.posts[i];
          if ((errors = post.errors)) {
            for (var error of errors) {
              if (doc$1.contains(error)) {
                post.rm();
                break;
              }
            }
          }
        }
      }

      error(className, message, link) {
        const div = $$1.el('div', { className });
        $$1.extend(div, {
          innerHTML: message + (link ? ` [<a href="${E(link)}" target="_blank">More info</a>]` : '') +
            `<br>[<a href="javascript:;">delete post</a>] [<a href="javascript:;">delete all</a>]`
        });
        (this.errors || (this.errors = [])).push(div);
        const [rm, rmAll] = $$('a', div);
        $$1.on(div, 'click', () => {
          if (QR.posts.includes(this)) { return this.select(); }
        });
        $$1.on(rm, 'click', e => {
          e.stopPropagation();
          if (QR.posts.includes(this)) { return this.rm(); }
        });
        $$1.on(rmAll, 'click', QR.post.rmErrored);
        return QR.error(div, true);
      }

      fileError(message, link) {
        return this.error('file-error', `${this.filename}: ${message}`, link);
      }

      dismissErrors(test = () => true) {
        if (this.errors) {
          for (var error of this.errors) {
            if (doc$1.contains(error) && test(error)) {
              error.parentNode.previousElementSibling.click();
            }
          }
        }
      }

      setFile(file) {
        this.file = file;
        if (Conf['Randomize Filename'] && (g.BOARD.ID !== 'f')) {
          let ext;
          this.filename = `${Date.now() * 1000 - Math.floor(Math.random() * 365 * DAY * 1000)}`;
          if (ext = this.file.name.match(QR.validExtension)) { this.filename += ext[0]; }
        } else {
          this.filename = this.file.name;
        }
        this.filesize = $$1.bytesToString(this.file.size);
        this.checkSize();
        $$1.addClass(this.nodes.el, 'has-file');
        QR.captcha.moreNeeded();
        URL.revokeObjectURL(this.URL);
        this.saveFilename();
        if (this === QR.selected) {
          this.showFileData();
        } else {
          this.updateFilename();
        }
        this.rmMetadata();
        this.nodes.el.dataset.type = this.file.type;
        this.nodes.el.style.backgroundImage = '';
        if (!QR.mimeTypes.includes(this.file.type)) {
          this.fileError('Unsupported file type.');
        } else if (/^(image|video)\//.test(this.file.type)) {
          this.readFile();
        }
        return this.preventAutoPost();
      }

      checkSize() {
        let max = QR.max_size;
        if (/^video\//.test(this.file.type)) { max = Math.min(max, QR.max_size_video); }
        if (this.file.size > max) {
          return this.fileError(`File too large (file: ${this.filesize}, max: ${$$1.bytesToString(max)}).`);
        }
      }

      readFile() {
        const isVideo = /^video\//.test(this.file.type);
        const el = $$1.el(isVideo ? 'video' : 'img');
        if (isVideo && !el.canPlayType(this.file.type)) { return; }

        const event = isVideo ? 'loadeddata' : 'load';
        var onload = () => {
          $$1.off(el, event, onload);
          $$1.off(el, 'error', onerror);
          this.checkDimensions(el);
          this.setThumbnail(el);
          return $$1.event('QRMetadata', null, this.nodes.el);
        };
        var onerror = () => {
          $$1.off(el, event, onload);
          $$1.off(el, 'error', onerror);
          this.fileError(`Corrupt ${isVideo ? 'video' : 'image'} or error reading metadata.`, meta.faq + '#error-reading-metadata');
          URL.revokeObjectURL(el.src);
          // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1021289
          this.nodes.el.removeAttribute('data-height');
          return $$1.event('QRMetadata', null, this.nodes.el);
        };
        this.nodes.el.dataset.height = 'loading';
        $$1.on(el, event, onload);
        $$1.on(el, 'error', onerror);
        return el.src = URL.createObjectURL(this.file);
      }

      checkDimensions(el) {
        let height, width;
        if (el.tagName === 'IMG') {
          ({ height, width } = el);
          this.nodes.el.dataset.height = height;
          this.nodes.el.dataset.width = width;
          if ((height > QR.max_height) || (width > QR.max_width)) {
            this.fileError(`Image too large (image: ${height}x${width}px, max: ${QR.max_height}x${QR.max_width}px)`);
          }
          if ((height < QR.min_height) || (width < QR.min_width)) {
            return this.fileError(`Image too small (image: ${height}x${width}px, min: ${QR.min_height}x${QR.min_width}px)`);
          }
        } else {
          const { videoHeight, videoWidth, duration } = el;
          this.nodes.el.dataset.height = videoHeight;
          this.nodes.el.dataset.width = videoWidth;
          this.nodes.el.dataset.duration = duration;
          const max_height = Math.min(QR.max_height, QR.max_height_video);
          const max_width = Math.min(QR.max_width, QR.max_width_video);
          if ((videoHeight > max_height) || (videoWidth > max_width)) {
            this.fileError(`Video too large (video: ${videoHeight}x${videoWidth}px, max: ${max_height}x${max_width}px)`);
          }
          if ((videoHeight < QR.min_height) || (videoWidth < QR.min_width)) {
            this.fileError(`Video too small (video: ${videoHeight}x${videoWidth}px, min: ${QR.min_height}x${QR.min_width}px)`);
          }
          if (!isFinite(duration)) {
            this.fileError('Video lacks duration metadata (try remuxing)');
          } else if (duration > QR.max_duration_video) {
            this.fileError(`Video too long (video: ${duration}s, max: ${QR.max_duration_video}s)`);
          }
          if (BoardConfig.noAudio(g.BOARD.ID) && $$1.hasAudio(el)) {
            return this.fileError('Audio not allowed');
          }
        }
      }

      setThumbnail(el) {
        // Create a redimensioned thumbnail.
        let height, width;
        const isVideo = el.tagName === 'VIDEO';

        // Generate thumbnails only if they're really big.
        // Resized pictures through canvases look like ass,
        // so we generate thumbnails `s` times bigger then expected
        // to avoid crappy resized quality.
        let s = 90 * 2 * window.devicePixelRatio;
        if (this.file.type === 'image/gif') { s *= 3; } // let them animate
        if (isVideo) {
          height = el.videoHeight;
          width = el.videoWidth;
        } else {
          ({ height, width } = el);
          if ((height < s) || (width < s)) {
            this.URL = el.src;
            this.nodes.el.style.backgroundImage = `url(${this.URL})`;
            return;
          }
        }

        if (height <= width) {
          width = (s / height) * width;
          height = s;
        } else {
          height = (s / width) * height;
          width = s;
        }
        const cv = $$1.el('canvas');
        cv.height = height;
        cv.width = width;
        cv.getContext('2d').drawImage(el, 0, 0, width, height);
        URL.revokeObjectURL(el.src);
        return cv.toBlob(blob => {
          this.URL = URL.createObjectURL(blob);
          return this.nodes.el.style.backgroundImage = `url(${this.URL})`;
        });
      }

      rmFile() {
        if (this.isLocked) { return; }
        delete this.file;
        delete this.filename;
        delete this.filesize;
        this.nodes.el.removeAttribute('title');
        QR.nodes.filename.removeAttribute('title');
        this.rmMetadata();
        this.nodes.el.style.backgroundImage = '';
        $$1.rmClass(this.nodes.el, 'has-file');
        this.showFileData();
        URL.revokeObjectURL(this.URL);
        this.dismissErrors(error => $$1.hasClass(error, 'file-error'));
        return this.preventAutoPost();
      }

      rmMetadata() {
        for (var attr of ['type', 'height', 'width', 'duration']) {
          // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1021289
          this.nodes.el.removeAttribute(`data-${attr}`);
        }
      }

      saveFilename() {
        this.file.newName = (this.filename || '').replace(/[/\\]/g, '-');
        if (!QR.validExtension.test(this.filename)) {
          // 4chan will truncate the filename if it has no extension.
          return this.file.newName += `.${$$1.getOwn(QR.extensionFromType, this.file.type) || 'jpg'}`;
        }
      }

      updateFilename() {
        const long = `${this.filename} (${this.filesize})`;
        this.nodes.el.title = long;
        if (this !== QR.selected) { return; }
        return QR.nodes.filename.title = long;
      }

      showFileData() {
        if (this.file) {
          this.updateFilename();
          QR.nodes.filename.value = this.filename;
          $$1.addClass(QR.nodes.oekaki, 'has-file');
          $$1.addClass(QR.nodes.fileSubmit, 'has-file');
        } else {
          $$1.rmClass(QR.nodes.oekaki, 'has-file');
          $$1.rmClass(QR.nodes.fileSubmit, 'has-file');
        }
        if (this.file?.source != null) {
          QR.nodes.fileSubmit.dataset.source = this.file.source;
        } else {
          QR.nodes.fileSubmit.removeAttribute('data-source');
        }
        return QR.nodes.spoiler.checked = this.spoiler;
      }

      pasteText(file) {
        this.pasting = true;
        this.preventAutoPost();
        const reader = new FileReader();
        reader.onload = e => {
          const { result } = e.target;
          this.setComment((this.com ? `${this.com}\n${result}` : result));
          return delete this.pasting;
        };
        return reader.readAsText(file);
      }

      dragStart(e) {
        const { left, top } = this.getBoundingClientRect();
        e.dataTransfer.setDragImage(this, e.clientX - left, e.clientY - top);
        return $$1.addClass(this, 'drag');
      }
      dragEnd() { return $$1.rmClass(this, 'drag'); }
      dragEnter() { return $$1.addClass(this, 'over'); }
      dragLeave() { return $$1.rmClass(this, 'over'); }

      dragOver(e) {
        e.preventDefault();
        return e.dataTransfer.dropEffect = 'move';
      }

      drop() {
        $$1.rmClass(this, 'over');
        if (!this.draggable) { return; }
        const el = $$1('.drag', this.parentNode);
        const index = el => {
          for (let i = 0; i < el.parentNode.children.length; i++) {
            if (el.parentNode.children[i] === el) return i;
          }
          return -1;
        };
        const oldIndex = index(el);
        const newIndex = index(this);
        if (QR.posts[oldIndex].isLocked || QR.posts[newIndex].isLocked) { return; }
        (oldIndex < newIndex ? $$1.after : $$1.before)(this, el);
        const post = QR.posts.splice(oldIndex, 1)[0];
        QR.posts.splice(newIndex, 0, post);
        QR.status();
        return QR.captcha.updateThread?.();
      }
    }

  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS206: Consider reworking classes to avoid initClass
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  let eventPageRequest;
  if (platform === 'crx') {
    eventPageRequest = (function () {
      const callbacks = [];
      chrome.runtime.onMessage.addListener(function(response) {
        callbacks[response.id](response.data);
        return delete callbacks[response.id];});
      return (params, cb) => chrome.runtime.sendMessage(params, id => callbacks[id] = cb);
    })();
  }
  var CrossOrigin = {
    binary(url, cb, headers = dict()) {
      // XXX https://forums.lanik.us/viewtopic.php?f=64&t=24173&p=78310
      url = url.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//, '$1//adv/');
      if (platform === 'crx') {
      eventPageRequest({type: 'ajax', url, headers, responseType: 'arraybuffer'}, function({response, responseHeaderString}) {
        if (response) { response = new Uint8Array(response); }
        return cb(response, responseHeaderString);
      });
      } else {
        const fallback = function() {
          return $$1.ajax(url, {
            headers,
            responseType: 'arraybuffer',
            onloadend() {
              if (this.status && this.response) {
                return cb(new Uint8Array(this.response), this.getAllResponseHeaders());
              } else {
                return cb(null);
              }
            }
          });
        };
        if ((typeof window.GM_xmlhttpRequest === 'undefined' || window.GM_xmlhttpRequest === null)) {
          fallback();
          return;
        }
        const gmOptions = {
          method: "GET",
          url,
          headers,
          responseType: 'arraybuffer',
          overrideMimeType: 'text/plain; charset=x-user-defined',
          onload(xhr) {
            let data;
            if (xhr.response instanceof ArrayBuffer) {
              data = new Uint8Array(xhr.response);
            } else {
              const r = xhr.responseText;
              data = new Uint8Array(r.length);
              let i = 0;
              while (i < r.length) {
                data[i] = r.charCodeAt(i);
                i++;
              }
            }
            return cb(data, xhr.responseHeaders);
          },
          onerror() {
            return cb(null);
          },
          onabort() {
            return cb(null);
          }
        };
        try {
          return (GM?.xmlHttpRequest || GM_xmlhttpRequest)(gmOptions);
        } catch (error) {
          return fallback();
        }
      }
    },

    file(url, cb) {
      return CrossOrigin.binary(url, function(data, headers) {
        if (data == null) { return cb(null); }
        let name = url.match(/([^\/?#]+)\/*(?:$|[?#])/)?.[1];
        const contentType        = headers.match(/Content-Type:\s*(.*)/i)?.[1];
        const contentDisposition = headers.match(/Content-Disposition:\s*(.*)/i)?.[1];
        let mime = contentType?.match(/[^;]*/)[0] || 'application/octet-stream';
        const match =
          contentDisposition?.match(/\bfilename\s*=\s*"((\\"|[^"])+)"/i)?.[1] ||
          contentType?.match(/\bname\s*=\s*"((\\"|[^"])+)"/i)?.[1];
        if (match) {
          name = match.replace(/\\"/g, '"');
        }
        if (/^text\/plain;\s*charset=x-user-defined$/i.test(mime)) {
          // In JS Blocker (Safari) content type comes back as 'text/plain; charset=x-user-defined'; guess from filename instead.
          mime = $$1.getOwn(QR.typeFromExtension, name.match(/[^.]*$/)[0].toLowerCase()) || 'application/octet-stream';
        }
        const blob = new Blob([data], {type: mime});
        blob.name = name;
        return cb(blob);
      });
    },

    Request: (function() {
      const Request = class Request {
        static initClass() {
          this.prototype.status = 0;
          this.prototype.statusText = '';
          this.prototype.response = null;
          this.prototype.responseHeaderString = null;
        }
        getResponseHeader(headerName) {
          if ((this.responseHeaders == null) && (this.responseHeaderString != null)) {
            this.responseHeaders = dict();
            for (var header of this.responseHeaderString.split('\r\n')) {
              var i;
              if ((i = header.indexOf(':')) >= 0) {
                var key = header.slice(0, i).trim().toLowerCase();
                var val = header.slice(i+1).trim();
                this.responseHeaders[key] = val;
              }
            }
          }
          return this.responseHeaders?.[headerName.toLowerCase()] ?? null;
        }
        abort() {}
        onloadend() {}
      };
      Request.initClass();
      return Request;
    })(),

    // Attempts to fetch `url` using cross-origin privileges, if available.
    // Interface is a subset of that of $.ajax.
    // Options:
    //   `onloadend` - called with the returned object as `this` on success or error/abort/timeout.
    //   `timeout` - time limit for request
    //   `responseType` - expected response type, 'json' by default; 'json' and 'text' supported
    //   `headers` - request headers
    // Returned object properties:
    //   `status` - HTTP status (0 if connection not successful)
    //   `statusText` - HTTP status text
    //   `response` - decoded response body
    //   `abort` - function for aborting the request (silently fails on some platforms)
    //   `getResponseHeader` - function for reading response headers
    ajax(url, options={}) {
      let gmReq;
      let {onloadend, timeout, responseType, headers} = options;
      if (responseType == null) { responseType = 'json'; }

      if ((window.GM?.xmlHttpRequest == null) && (typeof window.GM_xmlhttpRequest === 'undefined' || window.GM_xmlhttpRequest === null)) {
        return $$1.ajax(url, options);
      }

      const req = new CrossOrigin.Request();
      req.onloadend = onloadend;

      if (platform === 'userscript') {
        const gmOptions = {
          method: 'GET',
          url,
          headers,
          timeout,
          onload(xhr) {
            try {
              const response = (() => { switch (responseType) {
                case 'json':
                  if (xhr.responseText) { return JSON.parse(xhr.responseText); } else { return null; }
                default:
                  return xhr.responseText;
              } })();
              $$1.extend(req, {
                response,
                status: xhr.status,
                statusText: xhr.statusText,
                responseHeaderString: xhr.responseHeaders
              });
            } catch (error) {}
            return req.onloadend();
          },
          onerror() { return req.onloadend(); },
          onabort() { return req.onloadend(); },
          ontimeout() { return req.onloadend(); }
        };
        try {
          gmReq = (GM?.xmlHttpRequest || GM_xmlhttpRequest)(gmOptions);
        } catch (error) {
          return $$1.ajax(url, options);
        }

        if (gmReq && (typeof gmReq.abort === 'function')) {
          req.abort = function() {
            try {
              return gmReq.abort();
            } catch (error1) {}
          };
        }
      } else {
        eventPageRequest({type: 'ajax', url, responseType, headers, timeout}, function(result) {
          if (result.status) {
            $$1.extend(req, result);
          }
          return req.onloadend();
        });
      }

      return req;
    },

    cache(url, cb) {
      return $$1.cache(url, cb,
        {ajax: CrossOrigin.ajax});
    },

    permission(cb, cbFail, origins) {
      if (platform === 'crx') {
        return eventPageRequest({type: 'permission', origins}, function(result) {
          if (result) {
            return cb();
          } else {
            return cbFail();
          }
        });
      }
      return cb();
    },
  };
  var CrossOrigin$1 = CrossOrigin;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  // not chainable
  const $ = (selector, root = document.body) => root.querySelector(selector);

  $.id = id => d$1.getElementById(id);

  $.ready = function(fc) {
    if (d$1.readyState !== 'loading') {
      $.queueTask(fc);
      return;
    }
    var cb = function() {
      $.off(d$1, 'DOMContentLoaded', cb);
      return fc();
    };
    return $.on(d$1, 'DOMContentLoaded', cb);
  };

  $.formData = function(form) {
    if (form instanceof HTMLFormElement) {
      return new FormData(form);
    }
    const fd = new FormData();
    for (var key in form) {
      var val = form[key];
      if (val) {
        if ((typeof val === 'object') && 'newName' in val) {
          fd.append(key, val, val.newName);
        } else {
          fd.append(key, val);
        }
      }
    }
    return fd;
  };

  $.extend = function(object, properties) {
    for (var key in properties) {
      var val = properties[key];
      object[key] = val;
    }
  };

  $.hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

  $.getOwn = function(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) { return obj[key]; } else { return undefined; }
  };

  $.ajax = (function() {
    let pageXHR;
    if (window.wrappedJSObject && !XMLHttpRequest.wrappedJSObject) {
      pageXHR = XPCNativeWrapper(window.wrappedJSObject.XMLHttpRequest);
    } else {
      pageXHR = XMLHttpRequest;
    }

    const r = (function (url, options={}) {
      if (options.responseType == null) { options.responseType = 'json'; }
      if (!options.type) { options.type = (options.form && 'post') || 'get'; }
      // XXX https://forums.lanik.us/viewtopic.php?f=64&t=24173&p=78310
      url = url.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//, '$1//adv/');
      if (platform === 'crx') {
        // XXX https://bugs.chromium.org/p/chromium/issues/detail?id=920638
        if (Conf['Work around CORB Bug'] && g.SITE.software === 'yotsuba' && !options.testCORB && FormData.prototype.entries) {
          return $.ajaxPage(url, options);
        }
      }
      const {onloadend, timeout, responseType, withCredentials, type, onprogress, form, headers} = options;
      const r = new pageXHR();
      try {
        r.open(type, url, true);
        const object = headers || {};
        for (var key in object) {
          var value = object[key];
          r.setRequestHeader(key, value);
        }
        $.extend(r, {onloadend, timeout, responseType, withCredentials});
        $.extend(r.upload, {onprogress});
        // connection error or content blocker
        $.on(r, 'error', function() { if (!r.status) { return c.warn(`4chan X failed to load: ${url}`); } });
        if (platform === 'crx') {
          // https://bugs.chromium.org/p/chromium/issues/detail?id=920638
          $.on(r, 'load', () => {
            if (!Conf['Work around CORB Bug'] && r.readyState === 4 && r.status === 200 && r.statusText === '' && r.response === null) {
              $.set('Work around CORB Bug', (Conf['Work around CORB Bug'] = Date.now()));
            }
          });
        }
        r.send(form);
      } catch (err) {
        // XXX Some content blockers in Firefox (e.g. Adblock Plus and NoScript) throw an exception instead of simulating a connection error.
        if (err.result !== 0x805e0006) { throw err; }
        r.onloadend = onloadend;
        $.queueTask($.event, 'error',   null, r);
        $.queueTask($.event, 'loadend', null, r);
      }
      return r;
    });

    if (platform === 'userscript') {
      return r;
    } else {
      // # XXX https://bugs.chromium.org/p/chromium/issues/detail?id=920638
      let requestID = 0;
      const requests = dict();

      $.ajaxPageInit = function() {
        $.global(function() {
          window.FCX.requests = Object.create(null);

          document.addEventListener('4chanXAjax', function(e) {
            let fd, r;
            const {url, timeout, responseType, withCredentials, type, onprogress, form, headers, id} = e.detail;
            window.FCX.requests[id] = (r = new XMLHttpRequest());
            r.open(type, url, true);
            const object = headers || {};
            for (var key in object) {
              var value = object[key];
              r.setRequestHeader(key, value);
            }
            r.responseType = responseType === 'document' ? 'text' : responseType;
            r.timeout = timeout;
            r.withCredentials = withCredentials;
            if (onprogress) {
              r.upload.onprogress = function(e) {
                const {loaded, total} = e;
                const detail = {loaded, total, id};
                return document.dispatchEvent(new CustomEvent('4chanXAjaxProgress', {bubbles: true, detail}));
              };
            }
            r.onloadend = function() {
              delete window.FCX.requests[id];
              const {status, statusText, response} = this;
              const responseHeaderString = this.getAllResponseHeaders();
              const detail = {status, statusText, response, responseHeaderString, id};
              return document.dispatchEvent(new CustomEvent('4chanXAjaxLoadend', {bubbles: true, detail}));
            };
            // connection error or content blocker
            r.onerror = function() {
              if (!r.status) { return console.warn(`4chan X failed to load: ${url}`); }
            };
            if (form) {
              fd = new FormData();
              for (var entry of form) {
                fd.append(entry[0], entry[1]);
              }
            } else {
              fd = null;
            }
            return r.send(fd);
        }
          , false);

        return document.addEventListener('4chanXAjaxAbort', function(e) {
          let r;
          if (!(r = window.FCX.requests[e.detail.id])) { return; }
          return r.abort();
        }
        , false);
      });

      $.on(d$1, '4chanXAjaxProgress', function(e) {
        let req;
        if (!(req = requests[e.detail.id])) { return; }
        return req.upload.onprogress.call(req.upload, e.detail);
      });

      return $.on(d$1, '4chanXAjaxLoadend', function(e) {
        let req;
        if (!(req = requests[e.detail.id])) { return; }
        delete requests[e.detail.id];
        if (e.detail.status) {
          for (var key of ['status', 'statusText', 'response', 'responseHeaderString']) {
            req[key] = e.detail[key];
          }
          if (req.responseType === 'document') {
            req.response = new DOMParser().parseFromString(e.detail.response, 'text/html');
          }
        }
        return req.onloadend();
      });
    };

    return $.ajaxPage = function(url, options={}) {
        let req;
        let {onloadend, timeout, responseType, withCredentials, type, onprogress, form, headers} = options;
          const id = requestID++;
          requests[id] = (req = new CrossOrigin$1.Request());
        $.extend(req, {responseType, onloadend});
        req.upload = {onprogress};
        req.abort = () => $.event('4chanXAjaxAbort', {id});
          if (form) { form = Array.from(form.entries()); }
        $.event('4chanXAjax', {url, timeout, responseType, withCredentials, type, onprogress: !!onprogress, form, headers, id});
          return req;
      };
    }
  })();

  // Status Code 304: Not modified
  // With the `If-Modified-Since` header we only receive the HTTP headers and no body for 304 responses.
  // This saves a lot of bandwidth and CPU time for both the users and the servers.
  $.lastModified = dict();
  $.whenModified = function(url, bucket, cb, options={}) {
    let t;
    const {timeout, ajax} = options;
    const params = [];
    // XXX https://bugs.chromium.org/p/chromium/issues/detail?id=643659
    if ($.engine === 'blink') { params.push(`s=${bucket}`); }
    if (url.split('/')[2] === 'a.4cdn.org') { params.push(`t=${Date.now()}`); }
    const url0 = url;
    if (params.length) { url += '?' + params.join('&'); }
    const headers = dict();
    if ((t = $.lastModified[bucket]?.[url0]) != null) {
      headers['If-Modified-Since'] = t;
    }
    const r = (ajax || $.ajax)(url, {
      onloadend() {
        ($.lastModified[bucket] || ($.lastModified[bucket] = dict()))[url0] = this.getResponseHeader('Last-Modified');
        return cb.call(this);
      },
      timeout,
      headers
    });
    return r;
  };

  (function() {
    const reqs = dict();
    $.cache = function(url, cb, options={}) {
      let req;
      const {ajax} = options;
      if (req = reqs[url]) {
        if (req.callbacks) {
          req.callbacks.push(cb);
        } else {
          $.queueTask(() => cb.call(req, {isCached: true}));
        }
        return req;
      }
      const onloadend = function() {
        if (!this.status) {
          delete reqs[url];
        }
        for (cb of this.callbacks) {
          (cb => $.queueTask(() => cb.call(this, {isCached: false})))(cb);
        }
        return delete this.callbacks;
      };
      req = (ajax || $.ajax)(url, {onloadend});
      req.callbacks = [cb];
      return reqs[url] = req;
    };
    return $.cleanCache = function(testf) {
      for (var url in reqs) {
        if (testf(url)) {
          delete reqs[url];
        }
      }
    };
  })();

  $.cb = {
    checked() {
      if ($.hasOwn(Conf, this.name)) {
        $.set(this.name, this.checked);
        return Conf[this.name] = this.checked;
      }
    },
    value() {
      if ($.hasOwn(Conf, this.name)) {
        $.set(this.name, this.value.trim());
        return Conf[this.name] = this.value;
      }
    }
  };

  $.asap = function(test, cb) {
    if (test()) {
      return cb();
    } else {
      return setTimeout($.asap, 25, test, cb);
    }
  };

  $.onExists = function(root, selector, cb) {
    let el;
    if (el = $(selector, root)) {
      return cb(el);
    }
    var observer = new MutationObserver(function() {
      if (el = $(selector, root)) {
        observer.disconnect();
        return cb(el);
      }
    });
    return observer.observe(root, {childList: true, subtree: true});
  };

  $.addStyle = function(css, id, test='head') {
    const style = $.el('style',
      {textContent: css});
    if (id != null) { style.id = id; }
    $.onExists(doc$1, test, () => $.add(d$1.head, style));
    return style;
  };

  $.addCSP = function(policy) {
    const meta = $.el('meta', {
      httpEquiv: 'Content-Security-Policy',
      content:   policy
    }
    );
    if (d$1.head) {
      $.add(d$1.head, meta);
      return $.rm(meta);
    } else {
      const head = $.add((doc$1 || d$1), $.el('head'));
      $.add(head, meta);
      return $.rm(head);
    }
  };

  $.x = function(path, root) {
    if (!root) { root = d$1.body; }
    // XPathResult.ANY_UNORDERED_NODE_TYPE === 8
    return d$1.evaluate(path, root, null, 8, null).singleNodeValue;
  };

  $.X = function(path, root) {
    if (!root) { root = d$1.body; }
    // XPathResult.ORDERED_NODE_SNAPSHOT_TYPE === 7
    return d$1.evaluate(path, root, null, 7, null);
  };

  $.addClass = function(el, ...classNames) {
    for (var className of classNames) { el.classList.add(className); }
  };

  $.rmClass = function(el, ...classNames) {
    for (var className of classNames) { el.classList.remove(className); }
  };

  $.toggleClass = (el, className) => el.classList.toggle(className);

  $.hasClass = (el, className) => el.classList.contains(className);

  $.rm = el => el?.remove();

  $.rmAll = root => // https://gist.github.com/MayhemYDG/8646194
  root.textContent = null;

  $.tn = s => d$1.createTextNode(s);

  $.frag = () => d$1.createDocumentFragment();

  $.nodes = function(nodes) {
    if (!(nodes instanceof Array)) {
      return nodes;
    }
    const frag = $.frag();
    for (var node of nodes) {
      frag.appendChild(node);
    }
    return frag;
  };

  $.add = (parent, el) => parent.appendChild($.nodes(el));

  $.prepend = (parent, el) => parent.insertBefore($.nodes(el), parent.firstChild);

  $.after = (root, el) => root.parentNode.insertBefore($.nodes(el), root.nextSibling);

  $.before = (root, el) => root.parentNode.insertBefore($.nodes(el), root);

  $.replace = (root, el) => root.parentNode.replaceChild($.nodes(el), root);

  $.el = function(tag, properties, properties2) {
    const el = d$1.createElement(tag);
    if (properties) { $.extend(el, properties); }
    if (properties2) { $.extend(el, properties2); }
    return el;
  };

  $.on = function(el, events, handler) {
    for (var event of events.split(' ')) {
      el.addEventListener(event, handler, false);
    }
  };

  $.off = function(el, events, handler) {
    for (var event of events.split(' ')) {
      el.removeEventListener(event, handler, false);
    }
  };

  $.one = function(el, events, handler) {
    var cb = function(e) {
      $.off(el, events, cb);
      return handler.call(this, e);
    };
    return $.on(el, events, cb);
  };

  $.event = function(event, detail, root=d$1) {
    if (!globalThis.chrome?.extension) {
      if ((detail != null) && (typeof cloneInto === 'function')) {
        detail = cloneInto(detail, d$1.defaultView);
      }
    }
    return root.dispatchEvent(new CustomEvent(event, {bubbles: true, cancelable: true, detail}));
  };

  if (platform === 'userscript') {
    // XXX Make $.event work in Pale Moon with GM 3.x (no cloneInto function).
    (function() {
      if (!/PaleMoon\//.test(navigator.userAgent) || (+GM_info?.version?.split('.')[0] < 2) || (typeof cloneInto !== 'undefined')) { return; }

      try {
        return new CustomEvent('x', {detail: {}});
      } catch (err) {
        const unsafeConstructors = {
          Object: unsafeWindow.Object,
          Array:  unsafeWindow.Array
        };
        var clone = function(obj) {
          let constructor;
          if ((obj != null) && (typeof obj === 'object') && (constructor = unsafeConstructors[obj.constructor.name])) {
            const obj2 = new constructor();
            for (var key in obj) { var val = obj[key]; obj2[key] = clone(val); }
            return obj2;
          } else {
            return obj;
          }
        };
        return $.event = (event, detail, root=d$1) => root.dispatchEvent(new CustomEvent(event, {bubbles: true, cancelable: true, detail: clone(detail)}));
      }
    })();
  }

  $.modifiedClick = e => e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || (e.button !== 0);

  if (!globalThis.chrome?.extension) {
    $.open =
      (GM?.openInTab != null) ?
        GM.openInTab
      : (typeof GM_openInTab !== 'undefined' && GM_openInTab !== null) ?
        GM_openInTab
      :
        url => window.open(url, '_blank');
  } else {
    $.open =
      url => window.open(url, '_blank');
  }

  $.debounce = function(wait, fn) {
    let lastCall = 0;
    let timeout  = null;
    let that     = null;
    let args     = null;
    const exec = function() {
      lastCall = Date.now();
      return fn.apply(that, args);
    };
    return function() {
      args = arguments;
      that = this;
      if (lastCall < (Date.now() - wait)) {
        return exec();
      }
      // stop current reset
      clearTimeout(timeout);
      // after wait, let next invocation execute immediately
      return timeout = setTimeout(exec, wait);
    };
  };

  $.queueTask = (function() {
    // inspired by https://www.w3.org/Bugs/Public/show_bug.cgi?id=15007
    const taskQueue = [];
    const execTask = function() {
      const task = taskQueue.shift();
      const func = task[0];
      const args = Array.prototype.slice.call(task, 1);
      return func.apply(func, args);
    };
    if (window.MessageChannel) {
      const taskChannel = new MessageChannel();
      taskChannel.port1.onmessage = execTask;
      return function() {
        taskQueue.push(arguments);
        return taskChannel.port2.postMessage(null);
      };
    } else { // XXX Firefox
      return function() {
        taskQueue.push(arguments);
        return setTimeout(execTask, 0);
      };
    }
  })();

  $.global = function(fn, data) {
    if (doc$1) {
      const script = $.el('script',
        {textContent: `(${fn}).call(document.currentScript.dataset);`});
      if (data) { $.extend(script.dataset, data); }
      $.add((d$1.head || doc$1), script);
      $.rm(script);
      return script.dataset;
    } else {
      // XXX dwb
      try {
        fn.call(data);
      } catch (error) {}
      return data;
    }
  };

  $.bytesToString = function(size) {
    let unit = 0; // Bytes
    while (size >= 1024) {
      size /= 1024;
      unit++;
    }
    // Remove trailing 0s.
    size =
      unit > 1 ?
        // Keep the size as a float if the size is greater than 2^20 B.
        // Round to hundredth.
        Math.round(size * 100) / 100
      :
        // Round to an integer otherwise.
        Math.round(size);
    return `${size} ${['B', 'KB', 'MB', 'GB'][unit]}`;
  };

  $.minmax = (value, min, max) => value < min ?
    min
  :
    value > max ?
      max
    :
      value;

  $.hasAudio = video =>
    video.mozHasAudio || !!video.webkitAudioDecodedByteCount ||
    video.nextElementSibling?.tagName === 'AUDIO'; // sound posts

  $.luma = rgb => (rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114);

  $.unescape = function(text) {
    if (text == null) { return text; }
    return text.replace(/<[^>]*>/g, '').replace(/&(amp|#039|quot|lt|gt|#44);/g, c => ({'&amp;': '&', '&#039;': "'", '&quot;': '"', '&lt;': '<', '&gt;': '>', '&#44;': ','})[c]);
  };

  $.isImage = url => /\.(jpe?g|jfif|png|gif|bmp|webp|avif|jxl)$/i.test(url);
  $.isVideo = url => /\.(webm|mp4|ogv)$/i.test(url);

  $.engine = (function() {
    if (/Edge\//.test(navigator.userAgent)) { return 'edge'; }
    if (/Chrome\//.test(navigator.userAgent)) { return 'blink'; }
    if (/WebKit\//.test(navigator.userAgent)) { return 'webkit'; }
    if (/Gecko\/|Goanna/.test(navigator.userAgent)) { return 'gecko'; } // Goanna = Pale Moon 26+
  })();

  $.hasStorage = (function() {
    try {
      if (localStorage.getItem(g.NAMESPACE + 'hasStorage') === 'true') { return true; }
      localStorage.setItem(g.NAMESPACE + 'hasStorage', 'true');
      return localStorage.getItem(g.NAMESPACE + 'hasStorage') === 'true';
    } catch (error) {
      return false;
    }
  })();

  $.item = function(key, val) {
    const item = dict();
    item[key] = val;
    return item;
  };

  $.oneItemSugar = fn => (function(key, val, cb) {
    if (typeof key === 'string') {
      return fn($.item(key, val), cb);
    } else {
      return fn(key, val);
    }
  });

  $.syncing = dict();

  $.securityCheck = function(data) {
    if (location.protocol !== 'https:') {
      return delete data['Redirect to HTTPS'];
    }
  };

  if (platform === 'crx') {
    // https://developer.chrome.com/extensions/storage.html
    $.oldValue = {
      local: dict(),
      sync:  dict()
    };

    chrome.storage.onChanged.addListener(function(changes, area) {
      for (var key in changes) {
        var oldValue = $.oldValue.local[key] ?? $.oldValue.sync[key];
        $.oldValue[area][key] = dict.clone(changes[key].newValue);
        var newValue = $.oldValue.local[key] ?? $.oldValue.sync[key];
        var cb = $.syncing[key];
        if (cb && (JSON.stringify(newValue) !== JSON.stringify(oldValue))) {
          cb(newValue, key);
        }
      }
    });
    $.sync = (key, cb) => $.syncing[key] = cb;
    $.forceSync = function() {  };

    $.crxWorking = function() {
      try {
        if (chrome.runtime.getManifest()) {
          return true;
        }
      } catch (error) {}
      if (!$.crxWarningShown) {
        const msg = $.el('div',
          {innerHTML: '4chan X seems to have been updated. You will need to <a href="javascript:;">reload</a> the page.'});
        $.on($('a', msg), 'click', () => location.reload());
        new Notice('warning', msg);
        $.crxWarningShown = true;
      }
      return false;
    };

    $.get = $.oneItemSugar(function(data, cb) {
      if (!$.crxWorking()) { return; }
      const results = {};
      const get = function(area) {
        let keys = Object.keys(data);
        // XXX slow performance in Firefox
        if (($.engine === 'gecko') && (area === 'sync') && (keys.length > 3)) {
          keys = null;
        }
        return chrome.storage[area].get(keys, function(result) {
          let key;
          result = dict.clone(result);
          if (chrome.runtime.lastError) {
            c.error(chrome.runtime.lastError.message);
          }
          if (keys === null) {
            const result2 = dict();
            for (key in result) { var val = result[key]; if ($.hasOwn(data, key)) { result2[key] = val; } }
            result = result2;
          }
          for (key in data) {
            $.oldValue[area][key] = result[key];
          }
          results[area] = result;
          if (results.local && results.sync) {
            $.extend(data, results.sync);
            $.extend(data, results.local);
            return cb(data);
          }
        });
      };
      get('local');
      return get('sync');
    });

    (function() {
      const items = {
        local: dict(),
        sync:  dict()
      };

      const exceedsQuota = (key, value) => // bytes in UTF-8
      unescape(encodeURIComponent(JSON.stringify(key))).length + unescape(encodeURIComponent(JSON.stringify(value))).length > chrome.storage.sync.QUOTA_BYTES_PER_ITEM;

      $.delete = function(keys) {
        if (!$.crxWorking()) { return; }
        if (typeof keys === 'string') {
          keys = [keys];
        }
        for (var key of keys) {
          delete items.local[key];
          delete items.sync[key];
        }
        chrome.storage.local.remove(keys);
        return chrome.storage.sync.remove(keys);
      };

      const timeout = {};
      var setArea = function(area, cb) {
        const data = dict();
        $.extend(data, items[area]);
        if (!Object.keys(data).length || (timeout[area] > Date.now())) { return; }
        return chrome.storage[area].set(data, function() {
          let err;
          let key;
          if (err = chrome.runtime.lastError) {
            c.error(err.message);
            setTimeout(setArea, MINUTE, area);
            timeout[area] = Date.now() + MINUTE;
            return cb?.(err);
          }

          delete timeout[area];
          for (key in data) { if (items[area][key] === data[key]) { delete items[area][key]; } }
          if (area === 'local') {
            for (key in data) { var val = data[key]; if (!exceedsQuota(key, val)) { items.sync[key] = val; } }
            setSync();
          } else {
            chrome.storage.local.remove(((() => {
              const result = [];
              for (key in data) {
                if (!(key in items.local)) {
                  result.push(key);
                }
              }
              return result;
            })()));
          }
          return cb?.();
        });
      };

      var setSync = debounce(SECOND, () => setArea('sync'));

      $.set = $.oneItemSugar(function(data, cb) {
        if (!$.crxWorking()) { return; }
        $.securityCheck(data);
        $.extend(items.local, data);
        return setArea('local', cb);
      });

      return $.clear = function(cb) {
        if (!$.crxWorking()) { return; }
        items.local = dict();
        items.sync =  dict();
        let count = 2;
        let err   = null;
        const done  = function() {
          if (chrome.runtime.lastError) {
            c.error(chrome.runtime.lastError.message);
          }
          if (err == null) { err = chrome.runtime.lastError; }
          if (!--count) { return cb?.(err); }
        };
        chrome.storage.local.clear(done);
        return chrome.storage.sync.clear(done);
      };
    })();
  } else {

    // http://wiki.greasespot.net/Main_Page
    // https://tampermonkey.net/documentation.php

    if ((GM?.deleteValue != null) && window.BroadcastChannel && (typeof GM_addValueChangeListener === 'undefined' || GM_addValueChangeListener === null)) {

      $.syncChannel = new BroadcastChannel(g.NAMESPACE + 'sync');

      $.on($.syncChannel, 'message', e => (() => {
        const result = [];
        for (var key in e.data) {
          var cb;
          var val = e.data[key];
          if (cb = $.syncing[key]) {
            result.push(cb(dict.json(JSON.stringify(val)), key));
          }
        }
        return result;
      })());

      $.sync = (key, cb) => $.syncing[key] = cb;

      $.forceSync = function() {};

      $.delete = function(keys, cb) {
        let key;
        if (!(keys instanceof Array)) {
          keys = [keys];
        }
        return Promise.all((() => {
          const result = [];
          for (key of keys) {         result.push(GM.deleteValue(g.NAMESPACE + key));
          }
          return result;
        })()).then(function() {
          const items = dict();
          for (key of keys) { items[key] = undefined; }
          $.syncChannel.postMessage(items);
          return cb?.();
        });
      };

      $.get = $.oneItemSugar(function(items, cb) {
        const keys = Object.keys(items);
        return Promise.all(keys.map((key) => GM.getValue(g.NAMESPACE + key))).then(function(values) {
          for (let i = 0; i < values.length; i++) {
            var val = values[i];
            if (val) {
              items[keys[i]] = dict.json(val);
            }
          }
          return cb(items);
        });
      });

      $.set = $.oneItemSugar(function(items, cb) {
        $.securityCheck(items);
        return Promise.all((() => {
          const result = [];
          for (var key in items) {
            var val = items[key];
            result.push(GM.setValue(g.NAMESPACE + key, JSON.stringify(val)));
          }
          return result;
        })()).then(function() {
          $.syncChannel.postMessage(items);
          return cb?.();
        });
      });

      $.clear = cb => GM.listValues().then(keys => $.delete(keys.map(key => key.replace(g.NAMESPACE, '')), cb)).catch( () => $.delete(Object.keys(Conf).concat(['previousversion', 'QR Size', 'QR.persona']), cb));
    } else {

      if (typeof GM_deleteValue === 'undefined' || GM_deleteValue === null) {
        $.perProtocolSettings = true;
      }

      if (typeof GM_deleteValue !== 'undefined' && GM_deleteValue !== null) {
        $.getValue   = GM_getValue;
        $.listValues = () => GM_listValues(); // error when called if missing
      } else if ($.hasStorage) {
        $.getValue = key => localStorage.getItem(key);
        $.listValues = () => (() => {
          const result = [];
          for (var key in localStorage) {
            if (key.slice(0, g.NAMESPACE.length) === g.NAMESPACE) {
              result.push(key);
            }
          }
          return result;
        })();
      } else {
        $.getValue   = function() {};
        $.listValues = () => [];
      }

      if (typeof GM_addValueChangeListener !== 'undefined' && GM_addValueChangeListener !== null) {
        $.setValue    = GM_setValue;
        $.deleteValue = GM_deleteValue;
      } else if (typeof GM_deleteValue !== 'undefined' && GM_deleteValue !== null) {
        $.oldValue = dict();
        $.setValue = function(key, val) {
          GM_setValue(key, val);
          if (key in $.syncing) {
            $.oldValue[key]   = val;
            if ($.hasStorage) { return localStorage.setItem(key, val); } // for `storage` events
          }
        };
        $.deleteValue = function(key) {
          GM_deleteValue(key);
          if (key in $.syncing) {
            delete $.oldValue[key];
            if ($.hasStorage) { return localStorage.removeItem(key); } // for `storage` events
          }
        };
        if (!$.hasStorage) { $.cantSync = true; }
      } else if ($.hasStorage) {
        $.oldValue = dict();
        $.setValue = function(key, val) {
          if (key in $.syncing) { $.oldValue[key]   = val; }
          return localStorage.setItem(key, val);
        };
        $.deleteValue = function(key) {
          if (key in $.syncing) { delete $.oldValue[key]; }
          return localStorage.removeItem(key);
        };
      } else {
        $.setValue = function() {};
        $.deleteValue = function() {};
        $.cantSync = ($.cantSet = true);
      }

      if (typeof GM_addValueChangeListener !== 'undefined' && GM_addValueChangeListener !== null) {
        $.sync = (key, cb) => $.syncing[key] = GM_addValueChangeListener(g.NAMESPACE + key, function(key2, oldValue, newValue, remote) {
          if (remote) {
            if (newValue !== undefined) { newValue = dict.json(newValue); }
            return cb(newValue, key);
          }
        });
        $.forceSync = function() {};
      } else if ((typeof GM_deleteValue !== 'undefined' && GM_deleteValue !== null) || $.hasStorage) {
        $.sync = function(key, cb) {
          key = g.NAMESPACE + key;
          $.syncing[key] = cb;
          return $.oldValue[key] = $.getValue(key);
        };

        (function() {
          const onChange = function({key, newValue}) {
            let cb;
            if (!(cb = $.syncing[key])) { return; }
            if (newValue != null) {
              if (newValue === $.oldValue[key]) { return; }
              $.oldValue[key] = newValue;
              return cb(dict.json(newValue), key.slice(g.NAMESPACE.length));
            } else {
              if ($.oldValue[key] == null) { return; }
              delete $.oldValue[key];
              return cb(undefined, key.slice(g.NAMESPACE.length));
            }
          };
          $.on(window, 'storage', onChange);

          return $.forceSync = function(key) {
            // Storage events don't work across origins
            // e.g. http://boards.4chan.org and https://boards.4chan.org
            // so force a check for changes to avoid lost data.
            key = g.NAMESPACE + key;
            return onChange({key, newValue: $.getValue(key)});
          };
        })();
      } else {
        $.sync = function() {};
        $.forceSync = function() {};
      }

      $.delete = function(keys) {
        if (!(keys instanceof Array)) {
          keys = [keys];
        }
        for (var key of keys) {
          $.deleteValue(g.NAMESPACE + key);
        }
      };

      $.get = $.oneItemSugar((items, cb) => $.queueTask($.getSync, items, cb));

      $.getSync = function(items, cb) {
        for (var key in items) {
          var val2;
          if (val2 = $.getValue(g.NAMESPACE + key)) {
            try {
              items[key] = dict.json(val2);
            } catch (err) {
              // XXX https://github.com/ccd0/4chan-x/issues/2218
              if (!/^(?:undefined)*$/.test(val2)) {
                throw err;
              }
            }
          }
        }
        return cb(items);
      };

      $.set = $.oneItemSugar(function(items, cb) {
        $.securityCheck(items);
        return $.queueTask(function() {
          for (var key in items) {
            var value = items[key];
            $.setValue(g.NAMESPACE + key, JSON.stringify(value));
          }
          return cb?.();
        });
      });

      $.clear = function(cb) {
        // XXX https://github.com/greasemonkey/greasemonkey/issues/2033
        // Also support case where GM_listValues is not defined.
        $.delete(Object.keys(Conf));
        $.delete(['previousversion', 'QR Size', 'QR.persona']);
        try {
          $.delete($.listValues().map(key => key.replace(g.NAMESPACE, '')));
        } catch (error) {}
        return cb?.();
      };
    }
  }

  var $$1 = $;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Get = {
    url(type, IDs, ...args) {
      let f, site;
      if ((site = g.sites[IDs.siteID]) && (f = $$1.getOwn(site.urls, type))) {
        return f(IDs, ...args);
      } else {
        return undefined;
      }
    },
    threadExcerpt(thread) {
      const {OP} = thread;
      const excerpt = (`/${decodeURIComponent(thread.board.ID)}/ - `) + (
        OP.info.subject?.trim() ||
        OP.commentDisplay().replace(/\n+/g, ' // ') ||
        OP.file?.name ||
        `No.${OP}`);
      if (excerpt.length > 73) { return `${excerpt.slice(0, 70)}...`; }
      return excerpt;
    },
    threadFromRoot(root) {
      if (root == null) { return null; }
      const {board} = root.dataset;
      return g.threads.get(`${board ? encodeURIComponent(board) : g.BOARD.ID}.${root.id.match(/\d*$/)[0]}`);
    },
    threadFromNode(node) {
      return Get.threadFromRoot($$1.x(`ancestor-or-self::${g.SITE.xpath.thread}`, node));
    },
    postFromRoot(root) {
      if (root == null) { return null; }
      const post  = g.posts.get(root.dataset.fullID);
      const index = root.dataset.clone;
      if (index) { return post.clones[+index]; } else { return post; }
    },
    postFromNode(root) {
      return Get.postFromRoot($$1.x(`ancestor-or-self::${g.SITE.xpath.postContainer}[1]`, root));
    },
    postDataFromLink(link) {
      let boardID, postID, threadID;
      if (link.dataset.postID) { // resurrected quote
        ({boardID, threadID, postID} = link.dataset);
        if (!threadID) { threadID = 0; }
      } else {
        const match = link.href.match(g.SITE.regexp.quotelink);
        [boardID, threadID, postID] = match.slice(1);
        if (!postID) { postID = threadID; }
      }
      return {
        boardID,
        threadID: +threadID,
        postID:   +postID
      };
    },
    allQuotelinksLinkingTo(post) {
      // Get quotelinks & backlinks linking to the given post.
      const quotelinks = [];
      const {posts} = g;
      const {fullID} = post;
      const handleQuotes = function(qPost, type) {
        quotelinks.push(...(qPost.nodes[type] || []));
        for (var clone of qPost.clones) { quotelinks.push(...(clone.nodes[type] || [])); }
      };
      // First:
      //   In every posts,
      //   if it did quote this post,
      //   get all their backlinks.
      posts.forEach(function(qPost) {
        if (qPost.quotes.includes(fullID)) {
          return handleQuotes(qPost, 'quotelinks');
        }
      });

      // Second:
      //   If we have quote backlinks:
      //   in all posts this post quoted
      //   and their clones,
      //   get all of their backlinks.
      if (Conf['Quote Backlinks']) {
        for (var quote of post.quotes) { var qPost;
        if ((qPost = posts.get(quote))) { handleQuotes(qPost, 'backlinks'); } }
      }

      // Third:
      //   Filter out irrelevant quotelinks.
      return quotelinks.filter(function(quotelink) {
        const {boardID, postID} = Get.postDataFromLink(quotelink);
        return (boardID === post.board.ID) && (postID === post.ID);
      });
    }
  };
  var Get$1 = Get;

  var Filter = {
      /**
       * Uses a Map for string types, with the value to filter for as the key.
       * This allows faster lookup than iterating over every filter.
       */
      filters: new Map(),
      init() {
          if (!['index', 'thread', 'catalog'].includes(g.VIEW) || !Conf['Filter']) {
              return;
          }
          if ((g.VIEW === 'catalog') && !Conf['Filter in Native Catalog']) {
              return;
          }
          if (!Conf['Filtered Backlinks']) {
              $$1.addClass(doc$1, 'hide-backlinks');
          }
          for (var key in Config.filter) {
              for (var line of Conf[key].split('\n')) {
                  let hl;
                  let isstring;
                  let regexp;
                  let top;
                  let types;
                  if (line[0] === '#') {
                      continue;
                  }
                  if (!(regexp = line.match(/\/(.*)\/(\w*)/))) {
                      continue;
                  }
                  // Don't mix up filter flags with the regular expression.
                  var filter = line.replace(regexp[0], '');
                  // List of the boards this filter applies to.
                  var boards = this.parseBoards(filter.match(/(?:^|;)\s*boards:([^;]+)/)?.[1]);
                  // Boards to exclude from an otherwise global rule.
                  var excludes = this.parseBoards(filter.match(/(?:^|;)\s*exclude:([^;]+)/)?.[1]);
                  if (isstring = (['uniqueID', 'MD5'].includes(key))) {
                      // MD5 filter will use strings instead of regular expressions.
                      regexp = regexp[1];
                  }
                  else {
                      try {
                          // Please, don't write silly regular expressions.
                          regexp = RegExp(regexp[1], regexp[2]);
                      }
                      catch (err) {
                          // I warned you, bro.
                          new Notice('warning', [
                              $$1.tn(`Invalid ${key} filter:`),
                              $$1.el('br'),
                              $$1.tn(line),
                              $$1.el('br'),
                              $$1.tn(err.message)
                          ], 60);
                          continue;
                      }
                  }
                  // Filter OPs along with their threads or replies only.
                  var op = filter.match(/(?:^|;)\s*op:(no|only)/)?.[1] || '';
                  var mask = $$1.getOwn({ 'no': 1, 'only': 2 }, op) || 0;
                  // Filter only posts with/without files.
                  var file = filter.match(/(?:^|;)\s*file:(no|only)/)?.[1] || '';
                  mask = mask | ($$1.getOwn({ 'no': 4, 'only': 8 }, file) || 0);
                  // Overrule the `Show Stubs` setting.
                  // Defaults to stub showing.
                  var stub = (() => {
                      switch (filter.match(/(?:^|;)\s*stub:(yes|no)/)?.[1]) {
                          case 'yes':
                              return true;
                          case 'no':
                              return false;
                          default:
                              return Conf['Stubs'];
                      }
                  })();
                  // Desktop notification
                  var noti = /(?:^|;)\s*notify/.test(filter);
                  // Highlight the post.
                  // If not specified, the highlight class will be filter-highlight.
                  if (hl = /(?:^|;)\s*highlight/.test(filter)) {
                      hl = filter.match(/(?:^|;)\s*highlight:([\w-]+)/)?.[1] || 'filter-highlight';
                      // Put highlighted OP's thread on top of the board page or not.
                      // Defaults to on top.
                      top = filter.match(/(?:^|;)\s*top:(yes|no)/)?.[1] || 'yes';
                      top = top === 'yes'; // Turn it into a boolean
                  }
                  // Fields that this filter applies to (for 'general' filters)
                  if (key === 'general') {
                      if (types = filter.match(/(?:^|;)\s*type:([^;]*)/)) {
                          types = types[1].split(',');
                      }
                      else {
                          types = ['subject', 'name', 'filename', 'comment'];
                      }
                  }
                  // Hide the post (default case).
                  var hide = !(hl || noti);
                  const filterObj = { isstring, regexp, boards, excludes, mask, hide, stub, hl, top, noti };
                  if (key === 'general') {
                      for (var type of types) {
                          this.filters.get(type)?.push(filterObj) ?? this.filters.set(type, [filterObj]);
                      }
                  }
                  else {
                      this.filters.get(key)?.push(filterObj) ?? this.filters.set(key, [filterObj]);
                  }
              }
          }
          if (!this.filters.size)
              return;
          // conversion from array to map for string types
          for (const type of ['MD5', 'uniqueID']) {
              const filtersForType = this.filters.get(type);
              if (!filtersForType)
                  continue;
              const map = new Map();
              for (const filter of filtersForType) {
                  map.get(filter.regexp)?.push(filter) ?? map.set(filter.regexp, [filter]);
              }
              this.filters.set(type, map);
          }
          if (g.VIEW === 'catalog') {
              return Filter.catalog();
          }
          else {
              return Callbacks.Post.push({
                  name: 'Filter',
                  cb: this.node
              });
          }
      },
      // Parse comma-separated list of boards.
      // Sites can be specified by a beginning part of the site domain followed by a colon.
      parseBoards(boardsRaw) {
          let boards;
          if (!boardsRaw) {
              return false;
          }
          if (boards = Filter.parseBoardsMemo[boardsRaw]) {
              return boards;
          }
          boards = dict();
          let siteFilter = '';
          for (var boardID of boardsRaw.split(',')) {
              if (boardID.includes(':')) {
                  [siteFilter, boardID] = boardID.split(':').slice(-2);
              }
              for (var siteID in g.sites) {
                  var site = g.sites[siteID];
                  if (siteID.slice(0, siteFilter.length) === siteFilter) {
                      if (['nsfw', 'sfw'].includes(boardID)) {
                          for (var boardID2 of site.sfwBoards?.(boardID === 'sfw') || []) {
                              boards[`${siteID}/${boardID2}`] = true;
                          }
                      }
                      else {
                          boards[`${siteID}/${encodeURIComponent(boardID)}`] = true;
                      }
                  }
              }
          }
          Filter.parseBoardsMemo[boardsRaw] = boards;
          return boards;
      },
      parseBoardsMemo: dict(),
      test(post, hideable = true) {
          if (post.filterResults) {
              return post.filterResults;
          }
          let hide = false;
          let stub = true;
          let hl = undefined;
          let top = false;
          let noti = false;
          if (QuoteYou.isYou(post)) {
              hideable = false;
          }
          let mask = (post.isReply ? 2 : 1);
          mask = (mask | (post.file ? 4 : 8));
          const board = `${post.siteID}/${post.boardID}`;
          const site = `${post.siteID}/*`;
          for (const key of Filter.filters.keys()) {
              for (const value of Filter.values(key, post)) {
                  const filtersOrMap = Filter.filters.get(key);
                  const filtersForType = Array.isArray(filtersOrMap) ? filtersOrMap : filtersOrMap.get(value);
                  if (!filtersForType)
                      continue;
                  for (const filter of filtersForType) {
                      if ((filter.boards && !(filter.boards[board] || filter.boards[site])) ||
                          (filter.excludes && (filter.excludes[board] || filter.excludes[site])) ||
                          (filter.mask & mask) ||
                          (filter.isstring ? (filter.regexp !== value) : !filter.regexp.test(value))) {
                          continue;
                      }
                      if (filter.hide) {
                          if (hideable) {
                              hide = true;
                              if (stub) {
                                  ({
                                      stub
                                  } = filter);
                              }
                          }
                      }
                      else {
                          if (!hl || !hl.includes(filter.hl)) {
                              (hl || (hl = [])).push(filter.hl);
                          }
                          if (!top) {
                              ({
                                  top
                              } = filter);
                          }
                          if (filter.noti) {
                              noti = true;
                          }
                      }
                  }
              }
          }
          if (hide) {
              return { hide, stub };
          }
          else {
              return { hl, top, noti };
          }
      },
      node() {
          if (this.isClone) {
              return;
          }
          const { hide, stub, hl, top, noti } = Filter.test(this, (!this.isFetchedQuote && (this.isReply || (g.VIEW === 'index'))));
          if (hide) {
              if (this.isReply) {
                  PostHiding.hide(this, stub);
              }
              else {
                  ThreadHiding.hide(this.thread, stub);
              }
          }
          else {
              if (hl) {
                  this.highlights = hl;
                  $$1.addClass(this.nodes.root, ...hl);
              }
          }
          if (noti && Unread.posts && (this.ID > Unread.lastReadPost) && !QuoteYou.isYou(this)) {
              return Unread.openNotification(this, ' triggered a notification filter');
          }
      },
      catalog() {
          let url;
          if (!(url = g.SITE.urls.catalogJSON?.(g.BOARD))) {
              return;
          }
          Filter.catalogData = dict();
          $$1.ajax(url, { onloadend: Filter.catalogParse });
          return Callbacks.CatalogThreadNative.push({
              name: 'Filter',
              cb: this.catalogNode
          });
      },
      catalogParse() {
          if (![200, 404].includes(this.status)) {
              new Notice('warning', `Failed to fetch catalog JSON data. ${this.status ? `Error ${this.statusText} (${this.status})` : 'Connection Error'}`, 1);
              return;
          }
          for (var page of this.response) {
              for (var item of page.threads) {
                  Filter.catalogData[item.no] = item;
              }
          }
          g.BOARD.threads.forEach(function (thread) {
              if (thread.catalogViewNative) {
                  return Filter.catalogNode.call(thread.catalogViewNative);
              }
          });
      },
      catalogNode() {
          if ((this.boardID !== g.BOARD.ID) || !Filter.catalogData[this.ID]) {
              return;
          }
          if (QuoteYou.db?.get({ siteID: g.SITE.ID, boardID: this.boardID, threadID: this.ID, postID: this.ID })) {
              return;
          }
          const { hide, hl, top } = Filter.test(g.SITE.Build.parseJSON(Filter.catalogData[this.ID], this));
          if (hide) {
              return this.nodes.root.hidden = true;
          }
          else {
              if (hl) {
                  this.highlights = hl;
                  $$1.addClass(this.nodes.root, ...hl);
              }
              if (top) {
                  $$1.prepend(this.nodes.root.parentNode, this.nodes.root);
                  return g.SITE.catalogPin?.(this.nodes.root);
              }
          }
      },
      isHidden(post) {
          return !!Filter.test(post).hide;
      },
      valueF: {
          postID(post) { return [`${post.ID}`]; },
          name(post) { return post.info.name === undefined ? [] : [post.info.name]; },
          uniqueID(post) { return [post.info.uniqueID || '']; },
          tripcode(post) { return post.info.tripcode === undefined ? [] : [post.info.tripcode]; },
          capcode(post) { return post.info.capcode === undefined ? [] : [post.info.capcode]; },
          pass(post) { return [post.info.pass]; },
          email(post) { return [post.info.email]; },
          subject(post) { return [post.info.subject || (post.isReply ? undefined : '')]; },
          comment(post) {
              if (post.info.comment == null) {
                  post.info.comment = g.sites[post.siteID]?.Build?.parseComment?.(post.info.commentHTML.innerHTML);
              }
              return [post.info.comment];
          },
          flag(post) { return post.info.flag === undefined ? [] : [post.info.flag]; },
          filename(post) { return post.files.map(f => f.name); },
          dimensions(post) { return post.files.map(f => f.dimensions); },
          filesize(post) { return post.files.map(f => f.size); },
          MD5(post) { return post.files.map(f => f.MD5); }
      },
      values(key, post) {
          if ($$1.hasOwn(Filter.valueF, key)) {
              return Filter.valueF[key](post).filter(v => v != null);
          }
          else {
              return [key.split('+').map(function (k) {
                      let f;
                      if (f = $$1.getOwn(Filter.valueF, k)) {
                          return f(post).map(v => v || '').join('\n');
                      }
                      else {
                          return '';
                      }
                  }).join('\n')];
          }
      },
      addFilter(type, re, cb) {
          if (!$$1.hasOwn(Config.filter, type)) {
              return;
          }
          return $$1.get(type, Conf[type], function (item) {
              let save = item[type];
              // Add a new line before the regexp unless the text is empty.
              save =
                  save ?
                      `${save}\n${re}`
                      :
                          re;
              return $$1.set(type, save, cb);
          });
      },
      removeFilters(type, res, cb) {
          return $$1.get(type, Conf[type], function (item) {
              let save = item[type];
              const filterArray = Array.isArray(res) ? res : [...res.values()].flat();
              const r = filterArray.map(Filter.escape).join('|');
              save = save.replace(RegExp(`(?:$\n|^)(?:${r})$`, 'mg'), '');
              return $$1.set(type, save, cb);
          });
      },
      showFilters(type) {
          // Open the settings and display & focus the relevant filter textarea.
          Settings.open('Filter');
          const section = $$1('.section-container');
          const select = $$1('select[name=filter]', section);
          select.value = type;
          Settings.selectFilter.call(select);
          return $$1.onExists(section, 'textarea', function (ta) {
              const tl = ta.textLength;
              ta.setSelectionRange(tl, tl);
              return ta.focus();
          });
      },
      quickFilterMD5() {
          const post = Get$1.postFromNode(this);
          const files = post.files.filter(f => f.MD5);
          if (!files.length) {
              return;
          }
          const filter = files.map(f => `/${f.MD5}/`).join('\n');
          Filter.addFilter('MD5', filter);
          const origin = post.origin || post;
          if (origin.isReply) {
              PostHiding.hide(origin);
          }
          else if (g.VIEW === 'index') {
              ThreadHiding.hide(origin.thread);
          }
          if (!Conf['MD5 Quick Filter Notifications']) {
              // feedback for when nothing gets hidden
              if (post.nodes.post.getBoundingClientRect().height) {
                  new Notice('info', 'MD5 filtered.', 2);
              }
              return;
          }
          let { notice } = Filter.quickFilterMD5;
          if (notice) {
              notice.filters.push(filter);
              notice.posts.push(origin);
              return $$1('span', notice.el).textContent = `${notice.filters.length} MD5s filtered.`;
          }
          else {
              const msg = $$1.el('div', { innerHTML: "<span>MD5 filtered.</span> [<a href=\"javascript:;\">show</a>] [<a href=\"javascript:;\">undo</a>]" });
              notice = (Filter.quickFilterMD5.notice = new Notice('info', msg, undefined, () => delete Filter.quickFilterMD5.notice));
              notice.filters = [filter];
              notice.posts = [origin];
              const links = $$('a', msg);
              $$1.on(links[0], 'click', Filter.quickFilterCB.show.bind(notice));
              return $$1.on(links[1], 'click', Filter.quickFilterCB.undo.bind(notice));
          }
      },
      quickFilterCB: {
          show() {
              Filter.showFilters('MD5');
              return this.close();
          },
          undo() {
              Filter.removeFilters('MD5', this.filters);
              for (var post of this.posts) {
                  if (post.isReply) {
                      PostHiding.show(post);
                  }
                  else if (g.VIEW === 'index') {
                      ThreadHiding.show(post.thread);
                  }
              }
              return this.close();
          }
      },
      escape(value) {
          return value.replace(new RegExp(`\
/\
|\\\\\
|\\^\
|\\$\
|\\n\
|\\.\
|\\(\
|\\)\
|\\{\
|\\}\
|\\[\
|\\]\
|\\?\
|\\*\
|\\+\
|\\|\
`, 'g'), function (c) {
              if (c === '\n') {
                  return '\\n';
              }
              else if (c === '\\') {
                  return '\\\\';
              }
              else {
                  return `\\${c}`;
              }
          });
      },
      menu: {
          init() {
              if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Filter']) {
                  return;
              }
              const div = $$1.el('div', { textContent: 'Filter' });
              const entry = {
                  el: div,
                  order: 50,
                  open(post) {
                      Filter.menu.post = post;
                      return true;
                  },
                  subEntries: []
              };
              for (var type of [
                  ['Name', 'name'],
                  ['Unique ID', 'uniqueID'],
                  ['Tripcode', 'tripcode'],
                  ['Capcode', 'capcode'],
                  ['Pass Date', 'pass'],
                  ['Email', 'email'],
                  ['Subject', 'subject'],
                  ['Comment', 'comment'],
                  ['Flag', 'flag'],
                  ['Filename', 'filename'],
                  ['Image dimensions', 'dimensions'],
                  ['Filesize', 'filesize'],
                  ['Image MD5', 'MD5']
              ]) {
                  // Add a sub entry for each filter type.
                  entry.subEntries.push(Filter.menu.createSubEntry(type[0], type[1]));
              }
              return Menu.menu.addEntry(entry);
          },
          createSubEntry(text, type) {
              const el = $$1.el('a', {
                  href: 'javascript:;',
                  textContent: text
              });
              el.dataset.type = type;
              $$1.on(el, 'click', Filter.menu.makeFilter);
              return {
                  el,
                  open(post) {
                      return Filter.values(type, post).length;
                  }
              };
          },
          makeFilter() {
              const { type } = this.dataset;
              // Convert value -> regexp, unless type is MD5
              const values = Filter.values(type, Filter.menu.post);
              const res = values.map(function (value) {
                  const re = ['uniqueID', 'MD5'].includes(type) ? value : Filter.escape(value);
                  if (['uniqueID', 'MD5'].includes(type)) {
                      return `/${re}/`;
                  }
                  else {
                      return `/^${re}$/`;
                  }
              }).join('\n');
              return Filter.addFilter(type, res, () => Filter.showFilters(type));
          }
      }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Site = {
    defaultProperties: {
      '4chan.org':    {software: 'yotsuba'},
      '4channel.org': {canonical: '4chan.org'},
      '4cdn.org':     {canonical: '4chan.org'},
      'notso.smuglo.li': {canonical: 'smuglo.li'},
      'smugloli.net':    {canonical: 'smuglo.li'},
      'smug.nepu.moe':   {canonical: 'smuglo.li'}
    },

    init(cb) {
      $$1.extend(Conf['siteProperties'], Site.defaultProperties);
      let hostname = Site.resolve();
      if (hostname && $$1.hasOwn(SW, Conf['siteProperties'][hostname].software)) {
        this.set(hostname);
        cb();
      }
      return $$1.onExists(doc$1, 'body', () => {
        for (var software in SW) {
          var changes;
          if (changes = SW[software].detect?.()) {
            changes.software = software;
            hostname = location.hostname.replace(/^www\./, '');
            var properties = (Conf['siteProperties'][hostname] || (Conf['siteProperties'][hostname] = dict()));
            var changed = 0;
            for (var key in changes) {
              if (properties[key] !== changes[key]) {
                properties[key] = changes[key];
                changed++;
              }
            }
            if (changed) {
              $$1.set('siteProperties', Conf['siteProperties']);
            }
            if (!g.SITE) {
              this.set(hostname);
              cb();
            }
            return;
          }
        }
      });
    },

    resolve(url=location) {
      let {hostname} = url;
      while (hostname && !$$1.hasOwn(Conf['siteProperties'], hostname)) {
        hostname = hostname.replace(/^[^.]*\.?/, '');
      }
      if (hostname) {
        let canonical;
        if (canonical = Conf['siteProperties'][hostname].canonical) { hostname = canonical; }
      }
      return hostname;
    },

    parseURL(url) {
      const siteID = Site.resolve(url);
      return Main$1.parseURL(g.sites[siteID], url);
    },

    set(hostname) {
      for (var ID in Conf['siteProperties']) {
        var site;
        var properties = Conf['siteProperties'][ID];
        if (properties.canonical) { continue; }
        var {
          software
        } = properties;
        if (!software || !$$1.hasOwn(SW, software)) { continue; }
        g.sites[ID] = (site = Object.create(SW[software]));
        $$1.extend(site, {ID, siteID: ID, properties, software});
      }
      return g.SITE = g.sites[hostname];
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS205: Consider reworking code to avoid use of IIFEs
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var CatalogLinks = {
    init() {
      if ((g.SITE.software === 'yotsuba') && (Conf['External Catalog'] || Conf['JSON Index']) && !(Conf['JSON Index'] && (g.VIEW === 'index'))) {
        const selector = (() => { switch (g.VIEW) {
          case 'thread': case 'archive': return '.navLinks.desktop > a';
          case 'catalog':           return '.navLinks > :first-child > a';
          case 'index':             return '#ctrl-top > a, .cataloglink > a';
        } })();
        $$1.ready(function() {
          for (var link of $$(selector)) {
            var catalogURL;
            switch (link.pathname.replace(/\/+/g, '/')) {
              case `/${g.BOARD}/`:
                if (Conf['JSON Index']) { link.textContent = 'Index'; }
                link.href = CatalogLinks.index();
                break;
              case `/${g.BOARD}/catalog`:
                link.href = CatalogLinks.catalog();
                break;
            }
            if ((g.VIEW === 'catalog') && ((catalogURL = CatalogLinks.catalog()) !== g.SITE.urls.catalog?.(g.BOARD))) {
              var catalogLink = link.parentNode.cloneNode(true);
              var link2 = catalogLink.firstElementChild;
              link2.href = catalogURL;
              link2.textContent = link2.hostname === location.hostname ? `${meta.name} Catalog` : 'External Catalog';
              $$1.after(link.parentNode, [$$1.tn(' '), catalogLink]);
            }
          }
        });
      }

      if ((g.SITE.software === 'yotsuba') && Conf['JSON Index'] && Conf[`Use ${meta.name} Catalog`]) {
        Callbacks.Post.push({
          name: 'Catalog Link Rewrite',
          cb:   this.node
        });
      }

      if (this.enabled = Conf['Catalog Links']) {
        let el;
        CatalogLinks.el = (el = UI.checkbox('Header catalog links', 'Catalog Links'));
        el.id = 'toggleCatalog';
        const input = $$1('input', el);
        $$1.on(input, 'change', this.toggle);
        $$1.sync('Header catalog links', CatalogLinks.set);
        return Header$1.menu.addEntry({
          el,
          order: 95
        });
      }
    },

    node() {
      for (var a of $$('a', this.nodes.comment)) {
        var m;
        if (m = a.href.match(/^https?:\/\/(boards\.4chan(?:nel)?\.org\/[^\/]+)\/catalog(#s=.*)?/)) {
          a.href = `//${m[1]}/${m[2] || '#catalog'}`;
        }
      }
    },

    toggle() {
      $$1.event('CloseMenu');
      $$1.set('Header catalog links', this.checked);
      return CatalogLinks.set(this.checked);
    },

    set(useCatalog) {
      Conf['Header catalog links'] = useCatalog;
      CatalogLinks.setLinks(Header$1.boardList);
      CatalogLinks.setLinks(Header$1.bottomBoardList);
      CatalogLinks.el.title = `Turn catalog links ${useCatalog ? 'off' : 'on'}.`;
      return $$1('input', CatalogLinks.el).checked = useCatalog;
    },

    // Also called by Header when board lists are loaded / generated.
    setLinks(list) {
      if ((!(CatalogLinks.enabled ?? Conf['Catalog Links'])) || !list) { return; }

      // do not transform links unless they differ from the expected value at most by this tail
      const tail = /(?:index)?(?:\.\w+)?$/;

      for (var a of $$('a:not([data-only])', list)) {
        var {siteID, boardID} = a.dataset;
        if (!siteID || !boardID) {
          var VIEW;
          ({siteID, boardID, VIEW} = Site.parseURL(a));
          if (
            !siteID || !boardID ||
            !['index', 'catalog'].includes(VIEW) ||
            (!a.dataset.indexOptions && (a.href.replace(tail, '') !== (Get$1.url(VIEW, {siteID, boardID}) || '').replace(tail, '')))
          ) { continue; }
          $$1.extend(a.dataset, {siteID, boardID});
        }

        var board = {siteID, boardID};
        var url = Conf['Header catalog links'] ? CatalogLinks.catalog(board) : Get$1.url('index', board);
        if (url) {
          a.href = url;
          if (a.dataset.indexOptions && (url.split('#')[0] === Get$1.url('index', board))) {
            a.href += (a.hash ? '/' : '#') + a.dataset.indexOptions;
          }
        }
      }
    },

    externalParse() {
      CatalogLinks.externalList = dict();
      for (var line of Conf['externalCatalogURLs'].split('\n')) {
        if (line[0] === '#') { continue; }
        var url = line.split(';')[0];
        var boards   = Filter.parseBoards(line.match(/;boards:([^;]+)/)?.[1] || '*');
        var excludes = Filter.parseBoards(line.match(/;exclude:([^;]+)/)?.[1]) || dict();
        for (var board in boards) {
          if (!excludes[board] && !excludes[board.split('/')[0] + '/*']) {
            CatalogLinks.externalList[board] = url;
          }
        }
      }
    },

    external({siteID, boardID}) {
      if (!CatalogLinks.externalList) { CatalogLinks.externalParse(); }
      const external = (CatalogLinks.externalList[`${siteID}/${boardID}`] || CatalogLinks.externalList[`${siteID}/*`]);
      if (external) { return external.replace(/%board/g, boardID); } else { return undefined; }
    },

    jsonIndex(board, hash) {
      if ((g.SITE.ID === board.siteID) && (g.BOARD.ID === board.boardID) && (g.VIEW === 'index')) {
        return hash;
      } else {
        return Get$1.url('index', board) + hash;
      }
    },

    catalog(board=g.BOARD) {
      let external, nativeCatalog;
      if (Conf['External Catalog'] && (external = CatalogLinks.external(board))) {
        return external;
      } else if (Index$1.enabledOn(board) && Conf[`Use ${meta.name} Catalog`]) {
        return CatalogLinks.jsonIndex(board, '#catalog');
      } else if (nativeCatalog = Get$1.url('catalog', board)) {
        return nativeCatalog;
      } else {
        return CatalogLinks.external(board);
      }
    },

    index(board=g.BOARD) {
      if (Index$1.enabledOn(board)) {
        return CatalogLinks.jsonIndex(board, '#index');
      } else {
        return Get$1.url('index', board);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Header = {
    init() {
      $$1.onExists(doc$1, 'body', () => {
        if (!Main$1.isThisPageLegit()) { return; }
        $$1.add(this.bar, [this.noticesRoot, this.toggle]);
        $$1.prepend(d$1.body, this.bar);
        $$1.add(d$1.body, Header.hover);
        return this.setBarPosition(Conf['Bottom Header']);
    });

      this.menu = new UI.Menu('header');

      const menuButton = $$1.el('span',
        {className: 'menu-button'});
      $$1.extend(menuButton, {innerHTML: "<i></i>"});

      const box = UI.checkbox;

      const barFixedToggler     = box('Fixed Header',               'Fixed Header');
      const headerToggler       = box('Header auto-hide',           'Auto-hide header');
      const scrollHeaderToggler = box('Header auto-hide on scroll', 'Auto-hide header on scroll');
      const barPositionToggler  = box('Bottom Header',              'Bottom header');
      const linkJustifyToggler  = box('Centered links',             'Centered links');
      const customNavToggler    = box('Custom Board Navigation',    'Custom board navigation');
      const footerToggler       = box('Bottom Board List',          'Hide bottom board list');
      const shortcutToggler     = box('Shortcut Icons',             'Shortcut Icons');
      const editCustomNav = $$1.el('a', {
        textContent: 'Edit custom board navigation',
        href: 'javascript:;'
      }
      );

      this.barFixedToggler     = barFixedToggler.firstElementChild;
      this.scrollHeaderToggler = scrollHeaderToggler.firstElementChild;
      this.barPositionToggler  = barPositionToggler.firstElementChild;
      this.linkJustifyToggler  = linkJustifyToggler.firstElementChild;
      this.headerToggler       = headerToggler.firstElementChild;
      this.footerToggler       = footerToggler.firstElementChild;
      this.shortcutToggler     = shortcutToggler.firstElementChild;
      this.customNavToggler    = customNavToggler.firstElementChild;

      $$1.on(menuButton,           'click',  this.menuToggle);
      $$1.on(this.headerToggler,       'change', this.toggleBarVisibility);
      $$1.on(this.barFixedToggler,     'change', this.toggleBarFixed);
      $$1.on(this.barPositionToggler,  'change', this.toggleBarPosition);
      $$1.on(this.scrollHeaderToggler, 'change', this.toggleHideBarOnScroll);
      $$1.on(this.linkJustifyToggler,  'change', this.toggleLinkJustify);
      $$1.on(this.footerToggler,       'change', this.toggleFooterVisibility);
      $$1.on(this.shortcutToggler,     'change', this.toggleShortcutIcons);
      $$1.on(this.customNavToggler,    'change', this.toggleCustomNav);
      $$1.on(editCustomNav,        'click',  this.editCustomNav);

      this.setBarFixed(Conf['Fixed Header']);
      this.setHideBarOnScroll(Conf['Header auto-hide on scroll']);
      this.setBarVisibility(Conf['Header auto-hide']);
      this.setLinkJustify(Conf['Centered links']);
      this.setShortcutIcons(Conf['Shortcut Icons']);
      this.setFooterVisibility(Conf['Bottom Board List']);

      $$1.sync('Fixed Header',               this.setBarFixed);
      $$1.sync('Header auto-hide on scroll', this.setHideBarOnScroll);
      $$1.sync('Bottom Header',              this.setBarPosition);
      $$1.sync('Shortcut Icons',             this.setShortcutIcons);
      $$1.sync('Header auto-hide',           this.setBarVisibility);
      $$1.sync('Centered links',             this.setLinkJustify);
      $$1.sync('Bottom Board List',          this.setFooterVisibility);

      this.addShortcut('menu', menuButton, 900);

      this.menu.addEntry({
        el: $$1.el('span',
          {textContent: 'Header'}),
        order: 107,
        subEntries: [
            {el: barFixedToggler}
          ,
            {el: headerToggler}
          ,
            {el: scrollHeaderToggler}
          ,
            {el: barPositionToggler}
          ,
            {el: linkJustifyToggler}
          ,
            {el: footerToggler}
          ,
            {el: shortcutToggler}
          ,
            {el: customNavToggler}
          ,
            {el: editCustomNav}
        ]});

      $$1.on(window, 'load popstate', Header.hashScroll);
      $$1.on(d$1, 'CreateNotification', this.createNotification);

      this.setBoardList();

      $$1.onExists(doc$1, `${g.SITE.selectors.boardList} + *`, Header.generateFullBoardList);

      Main$1.ready(function() {
        let footer;
        if ((g.SITE.software === 'yotsuba') && !(footer = $$1.id('boardNavDesktopFoot'))) {
          let absbot;
          if (!(absbot = $$1.id('absbot'))) { return; }
          footer = $$1.id('boardNavDesktop').cloneNode(true);
          footer.id = 'boardNavDesktopFoot';
          $$1('#navtopright',        footer).id = 'navbotright';
          $$1('#settingsWindowLink', footer).id = 'settingsWindowLinkBot';
          $$1.before(absbot, footer);
          $$1.global(() => window.cloneTopNav = function() {});
        }
        if (Header.bottomBoardList = $$1(g.SITE.selectors.boardListBottom)) {
          for (var a of $$('a', Header.bottomBoardList)) {
            if ((a.hostname === location.hostname) && (a.pathname.split('/')[1] === g.BOARD.ID)) { a.className = 'current'; }
          }
          return CatalogLinks.setLinks(Header.bottomBoardList);
        }
      });

      if ((g.SITE.software === 'yotsuba') && ((g.VIEW === 'catalog') || !Conf['Disable Native Extension'])) {
        const cs = $$1.el('a', {href: 'javascript:;'});
        if (g.VIEW === 'catalog') {
          cs.title = (cs.textContent = 'Catalog Settings');
          cs.textContent = '🕮︎';
        } else {
          cs.title = (cs.textContent = '4chan Settings');
          cs.className = 'native-settings';
        }
        $$1.on(cs, 'click', () => $$1.id('settingsWindowLink').click());
        this.addShortcut('native', cs, 810);
      }

      return this.enableDesktopNotifications();
    },

    bar: $$1.el('div',
      {id: 'header-bar'}),

    noticesRoot: $$1.el('div',
      {id: 'notifications'}),

    shortcuts: $$1.el('span',
      {id: 'shortcuts'}),

    hover: $$1.el('div',
      {id: 'hoverUI'}),

    toggle: $$1.el('div',
      {id: 'scroll-marker'}),

    setBoardList() {
      let boardList;
      Header.boardList = (boardList = $$1.el('span',
        {id: 'board-list'}));
      $$1.extend(boardList, {innerHTML: "<span id=\"custom-board-list\"></span><span id=\"full-board-list\" hidden><span class=\"hide-board-list-container brackets-wrap\"><a href=\"javascript:;\" class=\"hide-board-list-button\">&nbsp;-&nbsp;</a></span> <span class=\"boardList\"></span></span>"});

      const btn = $$1('.hide-board-list-button', boardList);
      $$1.on(btn, 'click', Header.toggleBoardList);

      $$1.prepend(Header.bar, [Header.boardList, Header.shortcuts]);

      Header.setCustomNav(Conf['Custom Board Navigation']);
      Header.generateBoardList(Conf['boardnav']);

      $$1.sync('Custom Board Navigation', Header.setCustomNav);
      return $$1.sync('boardnav', Header.generateBoardList);
    },

    generateFullBoardList() {
      let nodes;
      if (g.SITE.transformBoardList) {
        nodes = g.SITE.transformBoardList();
      } else {
        nodes = [...$$1(g.SITE.selectors.boardList).cloneNode(true).childNodes];
      }
      const fullBoardList = $$1('.boardList', Header.boardList);
      $$1.add(fullBoardList, nodes);
      for (var a of $$('a', fullBoardList)) {
        if ((a.hostname === location.hostname) && (a.pathname.split('/')[1] === g.BOARD.ID)) { a.className = 'current'; }
      }
      return CatalogLinks.setLinks(fullBoardList);
    },

    generateBoardList(boardnav) {
      const list = $$1('#custom-board-list', Header.boardList);
      $$1.rmAll(list);
      if (!boardnav) { return; }
      boardnav = boardnav.replace(/(\r\n|\n|\r)/g, ' ');
      const re = /[\w@]+(-(all|title|replace|full|index|catalog|archive|expired|nt|(mode|sort|text):"[^"]+"(,"[^"]+")?))*|[^\w@]+/g;
      const nodes = (boardnav.match(re).map((t) => Header.mapCustomNavigation(t)));
      $$1.add(list, nodes);
      return CatalogLinks.setLinks(list);
    },

    mapCustomNavigation(t) {
      let a, href, m, url;
      if (/^[^\w@]/.test(t)) {
        return $$1.tn(t);
      }

      let text = (url = null);
      t = t.replace(/-text:"([^"]+)"(?:,"([^"]+)")?/g, function(m0, m1, m2) {
        text = m1;
        url  = m2;
        return '';
      });

      let indexOptions = [];
      t = t.replace(/-(?:mode|sort):"([^"]+)"/g, function(m0, m1) {
        indexOptions.push(m1.toLowerCase().replace(/\ /g, '-'));
        return '';
      });
      indexOptions = indexOptions.join('/');

      if (/^toggle-all/.test(t)) {
        a = $$1.el('a', {
          className: 'show-board-list-button',
          textContent: text || '+',
          href: 'javascript:;'
        }
        );
        $$1.on(a, 'click', Header.toggleBoardList);
        return a;
      }

      if (/^external/.test(t)) {
        a = $$1.el('a', {
          href: url || 'javascript:;',
          textContent: text || '+',
          className: 'external'
        }
        );
        if (/-nt/.test(t)) {
          a.target = '_blank';
          a.rel = 'noopener';
        }
        return a;
      }

      let boardID = t.split('-')[0];
      if (boardID === 'current') {
        if (['boards.4chan.org', 'boards.4channel.org'].includes(location.hostname)) {
          boardID = g.BOARD.ID;
        } else {
          a = $$1.el('a', {
            href: `/${g.BOARD.ID}/`,
            textContent: text || decodeURIComponent(g.BOARD.ID),
            className: 'current'
          }
          );
          if (/-nt/.test(t)) {
            a.target = '_blank';
            a.rel = 'noopener';
          }
          if (/-index/.test(t)) {
            a.dataset.only = 'index';
          } else if (/-catalog/.test(t)) {
            a.dataset.only = 'catalog';
            a.href += 'catalog.html';
          } else if (/-(archive|expired)/.test(t)) {
            a = a.firstChild; // Its text node.
          }
          return a;
        }
      }

      a = (function() {
        let urlV;
        if (boardID === '@') {
          return $$1.el('a', {
            href: 'https://twitter.com/4chan',
            title: '4chan Twitter',
            textContent: '@'
          }
          );
        }

        a = $$1.el('a', {
          href: `//${BoardConfig.domain(boardID)}/${boardID}/`,
          textContent: boardID,
          title: BoardConfig.title(boardID)
        }
        );
        if (['catalog', 'archive'].includes(g.VIEW) && (urlV = Get$1.url(g.VIEW, {siteID: '4chan.org', boardID}))) {
          a.href = urlV;
        }
        if ((a.hostname === location.hostname) && (boardID === g.BOARD.ID)) { a.className = 'current'; }
        return a;
      })();

      a.textContent = /-title/.test(t) || (/-replace/.test(t) && (a.hostname === location.hostname) && (boardID === g.BOARD.ID)) ?
        a.title || a.textContent
      : /-full/.test(t) ?
        (`/${boardID}/`) + (a.title ? ` - ${a.title}` : '')
      :
        text || boardID;

      if (m = t.match(/-(index|catalog)/)) {
        const urlIC = CatalogLinks[m[1]]({siteID: '4chan.org', boardID});
        if (urlIC) {
          a.dataset.only = m[1];
          a.href = urlIC;
          if (m[1] === 'catalog') { $$1.addClass(a, 'catalog'); }
        } else {
          return a.firstChild; // Its text node.
        }
      }

      if (Conf['JSON Index'] && indexOptions) {
        a.dataset.indexOptions = indexOptions;
        if (['boards.4chan.org', 'boards.4channel.org'].includes(a.hostname) && (a.pathname.split('/')[2] === '')) {
          a.href += (a.hash ? '/' : '#') + indexOptions;
        }
      }

      if (/-archive/.test(t)) {
        if (href = Redirect$1.to('board', {boardID})) {
          a.href = href;
        } else {
          return a.firstChild; // Its text node.
        }
      }

      if (/-expired/.test(t)) {
        if (BoardConfig.isArchived(boardID)) {
          a.href = `//${BoardConfig.domain(boardID)}/${boardID}/archive`;
        } else {
          return a.firstChild; // Its text node.
        }
      }

      if (/-nt/.test(t)) {
        a.target = '_blank';
        a.rel = 'noopener';
      }

      if (boardID === '@') { $$1.addClass(a, 'navSmall'); }
      return a;
    },

    toggleBoardList() {
      const {bar}  = Header;
      const custom = $$1('#custom-board-list', bar);
      const full   = $$1('#full-board-list',   bar);
      const showBoardList = !full.hidden;
      custom.hidden = !showBoardList;
      return full.hidden   =  showBoardList;
    },

    setLinkJustify(centered) {
      Header.linkJustifyToggler.checked = centered;
      if (centered) {
        return $$1.addClass(doc$1, 'centered-links');
      } else {
        return $$1.rmClass(doc$1, 'centered-links');
      }
    },

    toggleLinkJustify() {
      $$1.event('CloseMenu');
      const centered = this.nodeName === 'INPUT' ?
        this.checked : undefined;
      Header.setLinkJustify(centered);
      return $$1.set('Centered links', centered);
    },

    setBarFixed(fixed) {
      Header.barFixedToggler.checked = fixed;
      if (fixed) {
        $$1.addClass(doc$1, 'fixed');
        return $$1.addClass(Header.bar, 'dialog');
      } else {
        $$1.rmClass(doc$1, 'fixed');
        return $$1.rmClass(Header.bar, 'dialog');
      }
    },

    toggleBarFixed() {
      $$1.event('CloseMenu');

      Header.setBarFixed(this.checked);

      Conf['Fixed Header'] = this.checked;
      return $$1.set('Fixed Header',  this.checked);
    },

    setShortcutIcons(show) {
      Header.shortcutToggler.checked = show;
      if (show) {
        return $$1.addClass(doc$1, 'shortcut-icons');
      } else {
        return $$1.rmClass(doc$1, 'shortcut-icons');
      }
    },

    toggleShortcutIcons() {
      $$1.event('CloseMenu');

      Header.setShortcutIcons(this.checked);

      Conf['Shortcut Icons'] = this.checked;
      return $$1.set('Shortcut Icons',  this.checked);
    },

    setBarVisibility(hide) {
      Header.headerToggler.checked = hide;
      $$1.event('CloseMenu');
      (hide ? $$1.addClass : $$1.rmClass)(Header.bar, 'autohide');
      return (hide ? $$1.addClass : $$1.rmClass)(doc$1, 'autohide');
    },

    toggleBarVisibility() {
      const hide = this.nodeName === 'INPUT' ?
        this.checked
      :
        !$$1.hasClass(Header.bar, 'autohide');

      Conf['Header auto-hide'] = hide;
      $$1.set('Header auto-hide', hide);
      Header.setBarVisibility(hide);
      const message = `The header bar will ${hide ?
      'automatically hide itself.'
    :
      'remain visible.'}`;
      return new Notice('info', message, 2);
    },

    setHideBarOnScroll(hide) {
      Header.scrollHeaderToggler.checked = hide;
      if (hide) {
        $$1.on(window, 'scroll', Header.hideBarOnScroll);
        return;
      }
      $$1.off(window, 'scroll', Header.hideBarOnScroll);
      $$1.rmClass(Header.bar, 'scroll');
      return Header.bar.classList.toggle('autohide', Conf['Header auto-hide']);
    },

    toggleHideBarOnScroll() {
      const hide = this.checked;
      $$1.cb.checked.call(this);
      return Header.setHideBarOnScroll(hide);
    },

    hideBarOnScroll() {
      const offsetY = window.pageYOffset;
      if (offsetY > (Header.previousOffset || 0)) {
        $$1.addClass(Header.bar, 'autohide', 'scroll');
      } else {
        $$1.rmClass(Header.bar,  'autohide', 'scroll');
      }
      return Header.previousOffset = offsetY;
    },

    setBarPosition(bottom) {
      if (Header.barPositionToggler) Header.barPositionToggler.checked = bottom;
      $$1.event('CloseMenu');
      const args = bottom ? [
        'bottom-header',
        'top-header',
        'after'
      ] : [
        'top-header',
        'bottom-header',
        'add'
      ];

      $$1.addClass(doc$1, args[0]);
      $$1.rmClass(doc$1, args[1]);
      return $$1[args[2]](Header.bar, Header.noticesRoot);
    },

    toggleBarPosition() {
      $$1.cb.checked.call(this);
      return Header.setBarPosition(this.checked);
    },

    setFooterVisibility(hide) {
      Header.footerToggler.checked = hide;
      return doc$1.classList.toggle('hide-bottom-board-list', hide);
    },

    toggleFooterVisibility() {
      $$1.event('CloseMenu');
      const hide = this.nodeName === 'INPUT' ?
        this.checked
      :
        $$1.hasClass(doc$1, 'hide-bottom-board-list');
      Header.setFooterVisibility(hide);
      $$1.set('Bottom Board List', hide);
      const message = hide ?
        'The bottom navigation will now be hidden.'
      :
        'The bottom navigation will remain visible.';
      return new Notice('info', message, 2);
    },

    setCustomNav(show) {
      Header.customNavToggler.checked = show;
      const cust = $$1('#custom-board-list', Header.bar);
      const full = $$1('#full-board-list',   Header.bar);
      const btn = $$1('.hide-board-list-container', full);
      return [cust.hidden, full.hidden, btn.hidden] = show ? [false, true, false] : [true, false, true];
    },

    toggleCustomNav() {
      $$1.cb.checked.call(this);
      return Header.setCustomNav(this.checked);
    },

    editCustomNav() {
      Settings.open('Advanced');
      const settings = $$1.id('fourchanx-settings');
      return $$1('[name=boardnav]', settings).focus();
    },

    hashScroll(e) {
      let hash;
      if (e) {
        // Don't scroll when navigating to an already visited state.
        if (e.state) { return; }
        if (!history.state) { history.replaceState({}, ''); }
      }

      if (hash = location.hash.slice(1)) {
        let el;
        ReplyPruning.showIfHidden(hash);
        if (el = $$1.id(hash)) {
          return $$1.queueTask(() => Header.scrollTo(el));
        }
      }
    },

    scrollTo(root, down, needed) {
      let height, x;
      if (!root.offsetParent) { return; } // hidden or fixed
      if (down) {
        x = Header.getBottomOf(root);
        if (Conf['Fixed Header'] && Conf['Header auto-hide on scroll'] && Conf['Bottom header']) {
          ({height} = Header.bar.getBoundingClientRect());
          if (x <= 0) {
            if (!Header.isHidden()) { x += height; }
          } else {
            if  (Header.isHidden()) { x -= height; }
          }
        }
        if (!needed || (x < 0)) { return window.scrollBy(0, -x); }
      } else {
        x = Header.getTopOf(root);
        if (Conf['Fixed Header'] && Conf['Header auto-hide on scroll'] && !Conf['Bottom header']) {
          ({height} = Header.bar.getBoundingClientRect());
          if (x >= 0) {
            if (!Header.isHidden()) { x += height; }
          } else {
            if  (Header.isHidden()) { x -= height; }
          }
        }
        if (!needed || (x < 0)) { return window.scrollBy(0,  x); }
      }
    },

    scrollToIfNeeded(root, down) {
      return Header.scrollTo(root, down, true);
    },

    getTopOf(root) {
      let {top} = root.getBoundingClientRect();
      if (Conf['Fixed Header'] && !Conf['Bottom Header']) {
        const headRect = Header.toggle.getBoundingClientRect();
        top     -= headRect.top + headRect.height;
      }
      return top;
    },

    getBottomOf(root) {
      const {clientHeight} = doc$1;
      let bottom = clientHeight - root.getBoundingClientRect().bottom;
      if (Conf['Fixed Header'] && Conf['Bottom Header']) {
        const headRect = Header.toggle.getBoundingClientRect();
        bottom  -= (clientHeight - headRect.bottom) + headRect.height;
      }
      return bottom;
    },

    isNodeVisible(node) {
      if (d$1.hidden || !doc$1.contains(node)) { return false; }
      const {height} = node.getBoundingClientRect();
      return ((Header.getTopOf(node) + height) >= 0) && ((Header.getBottomOf(node) + height) >= 0);
    },

    isHidden() {
      const {top} = Header.bar.getBoundingClientRect();
      if (Conf['Bottom header']) {
        return top === doc$1.clientHeight;
      } else {
        return top < 0;
      }
    },

    addShortcut(id, el, index) {
      const shortcut = $$1.el('span', {
        id: `shortcut-${id}`,
        className: 'shortcut brackets-wrap'
      }
      );
      $$1.add(shortcut, el);
      shortcut.dataset.index = index;
      for (var item of $$('[data-index]', Header.shortcuts)) {
        if (+item.dataset.index > +index) {
          $$1.before(item, shortcut);
          return;
        }
      }
      return $$1.add(Header.shortcuts, shortcut);
    },

    rmShortcut(el) {
      return $$1.rm(el.parentElement);
    },

    menuToggle(e) {
      return Header.menu.toggle(e, this, g);
    },

    createNotification(e) {
      const {type, content, lifetime} = e.detail;
      return new Notice(type, content, lifetime);
    },

    areNotificationsEnabled: false,
    enableDesktopNotifications() {
      let notice;
      if (!window.Notification || !Conf['Desktop Notifications']) { return; }
      switch (Notification.permission) {
        case 'granted':
          Header.areNotificationsEnabled = true;
          return;
        case 'denied':
          // requestPermission doesn't work if status is 'denied',
          // but it'll still work if status is 'default'.
          return;
      }

      const el = $$1.el('span',
        {innerHTML:
          `${meta.name} needs your permission to show desktop notifications. ` +
          `[<a href=\"${meta.faq}#why-is-4chan-x-asking-for-permission-to-show-desktop-notifications\" target=\"_blank\">FAQ</a>]` +
          `<br><button>Authorize</button> or <button>Disable</button>`
      });
      const [authorize, disable] = $$('button', el);
      $$1.on(authorize, 'click', () => Notification.requestPermission(function(status) {
        Header.areNotificationsEnabled = status === 'granted';
        if (status === 'default') { return; }
        return notice.close();
      }));
      $$1.on(disable, 'click', function() {
        $$1.set('Desktop Notifications', false);
        return notice.close();
      });
      return notice = new Notice('info', el);
    }
  };
  var Header$1 = Header;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  class Notice {
    constructor(type, content, timeout, onclose) {
      this.add = this.add.bind(this);
      this.close = this.close.bind(this);
      this.timeout = timeout;
      this.onclose = onclose;
      this.el = $$1.el('div',
        {innerHTML: "<a href=\"javascript:;\" class=\"close\" title=\"Close\">✕</a><div class=\"message\"></div>"});
      this.el.style.opacity = 0;
      this.setType(type);
      $$1.on(this.el.firstElementChild, 'click', this.close);
      if (typeof content === 'string') {
        content = $$1.tn(content);
      }
      $$1.add(this.el.lastElementChild, content);

      $$1.ready(this.add);
    }

    setType(type) {
      return this.el.className = `notification ${type}`;
    }

    add() {
      if (this.closed) { return; }
      if (d$1.hidden) {
        $$1.on(d$1, 'visibilitychange', this.add);
        return;
      }
      $$1.off(d$1, 'visibilitychange', this.add);
      $$1.add(Header$1.noticesRoot, this.el);
      this.el.clientHeight; // force reflow
      this.el.style.opacity = 1;
      if (this.timeout) { return setTimeout(this.close, this.timeout * SECOND); }
    }

    close() {
      this.closed = true;
      $$1.off(d$1, 'visibilitychange', this.add);
      $$1.rm(this.el);
      return this.onclose?.();
    }
  }

  var archives = [{
    "uid": 3,
    "name": "4plebs",
    "domain": "archive.4plebs.org",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["adv", "f", "hr", "mlpol", "mo", "o", "pol", "s4s", "sp", "tg", "trv", "tv", "x"],
    "files": ["adv", "f", "hr", "mlpol", "mo", "o", "pol", "s4s", "sp", "tg", "trv", "tv", "x"],
    "reports": true
  }, {
    "uid": 10,
    "name": "warosu",
    "domain": "warosu.org",
    "http": false,
    "https": true,
    "software": "fuuka",
    "boards": ["3", "biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"],
    "files": ["3", "biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"],
    "search": ["biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"]
  }, {
    "uid": 23,
    "name": "Desuarchive",
    "domain": "desuarchive.org",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["a", "aco", "an", "c", "cgl", "co", "d", "fit", "g", "his", "int", "k", "m", "mlp", "mu", "q", "qa", "r9k", "tg", "trash", "vr", "wsg"],
    "files": ["a", "aco", "an", "c", "cgl", "co", "d", "fit", "g", "his", "int", "k", "m", "mlp", "mu", "q", "qa", "r9k", "tg", "trash", "vr"],
    "reports": true
  }, {
    "uid": 24,
    "name": "fireden.net",
    "domain": "boards.fireden.net",
    "http": false,
    "https": true,
    "software": "foolfuuka",
    "boards": ["cm", "co", "ic", "sci", "vip", "y"],
    "files": ["cm", "co", "ic", "sci", "vip", "y"],
    "search": ["cm", "co", "ic", "sci", "y"]
  }, {
    "uid": 25,
    "name": "arch.b4k.co",
    "domain": "arch.b4k.co",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["g", "mlp", "qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"],
    "files": ["qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"],
    "search": ["qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"]
  }, {
    "uid": 29,
    "name": "Archived.Moe",
    "domain": "archived.moe",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["3", "a", "aco", "adv", "an", "asp", "b", "bant", "biz", "c", "can", "cgl", "ck", "cm", "co", "cock", "con", "d", "diy", "e", "f", "fa", "fap", "fit", "fitlit", "g", "gd", "gif", "h", "hc", "his", "hm", "hr", "i", "ic", "int", "jp", "k", "lgbt", "lit", "m", "mlp", "mlpol", "mo", "mtv", "mu", "n", "news", "o", "out", "outsoc", "p", "po", "pol", "pw", "q", "qa", "qb", "qst", "r", "r9k", "s", "s4s", "sci", "soc", "sp", "spa", "t", "tg", "toy", "trash", "trv", "tv", "u", "v", "vg", "vint", "vip", "vm", "vmg", "vp", "vr", "vrpg", "vst", "vt", "w", "wg", "wsg", "wsr", "x", "xs", "y"],
    "files": ["can", "cock", "con", "fap", "fitlit", "gd", "mlpol", "mo", "mtv", "outsoc", "po", "q", "qb", "qst", "spa", "vint", "vip"],
    "search": ["aco", "adv", "an", "asp", "b", "bant", "biz", "c", "can", "cgl", "ck", "cm", "cock", "con", "d", "diy", "e", "f", "fap", "fitlit", "gd", "gif", "h", "hc", "his", "hm", "hr", "i", "ic", "lgbt", "lit", "mlpol", "mo", "mtv", "n", "news", "o", "out", "outsoc", "p", "po", "pw", "q", "qa", "qst", "r", "s", "soc", "spa", "trv", "u", "vint", "vip", "vrpg", "w", "wg", "wsg", "wsr", "x", "y"],
    "reports": true
  }, {
    "uid": 30,
    "name": "TheBArchive.com",
    "domain": "thebarchive.com",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["b", "bant"],
    "files": ["b", "bant"],
    "reports": true
  }, {
    "uid": 31,
    "name": "Archive Of Sins",
    "domain": "archiveofsins.com",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["h", "hc", "hm", "i", "lgbt", "r", "s", "soc", "t", "u"],
    "files": ["h", "hc", "hm", "i", "lgbt", "r", "s", "soc", "t", "u"],
    "reports": true
  }, {
    "uid": 34,
    "name": "TokyoChronos",
    "domain": "www.tokyochronos.net",
    "http": false,
    "https": true,
    "software": "foolfuuka",
    "boards": ["c", "g", "jp", "mu", "vp", "vrpg", "vt"],
    "files": [],
    "reports": true
  }, {
    "uid": 36,
    "name": "palanq.win",
    "domain": "archive.palanq.win",
    "http": false,
    "https": true,
    "software": "foolfuuka",
    "boards": ["bant", "c", "con", "e", "i", "n", "news", "out", "p", "pw", "qst", "toy", "vip", "vp", "vt", "w", "wg", "wsr"],
    "files": ["bant", "c", "e", "i", "n", "news", "out", "p", "pw", "qst", "toy", "vip", "vp", "vt", "w", "wg", "wsr"],
    "reports": true
  }, {
    "uid": 37,
    "name": "Eientei",
    "domain": "eientei.xyz",
    "http": false,
    "https": true,
    "software": "Eientei",
    "boards": ["3", "i", "sci", "xs"],
    "files": ["3", "i", "sci", "xs"],
    "reports": true
  }]
  ;

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */

  var Redirect = {
    archives,

    init() {
      this.selectArchives();
      if (Conf['archiveAutoUpdate']) {
        const now = Date.now();
        if (now - (2 * DAY) >= Conf['lastarchivecheck'] || Conf['lastarchivecheck'] > now) { return this.update(); }
      }
    },

    selectArchives() {
      let boardID, boards, data, files;
      const o = {
        thread: dict(),
        post:   dict(),
        file:   dict()
      };

      const archives = dict();
      for (data of Conf['archives']) {
        var name, software, uid;
        for (var key of ['boards', 'files']) {
          if (!(data[key] instanceof Array)) { data[key] = []; }
        }
        ({uid, name, boards, files, software} = data);
        if (!['fuuka', 'foolfuuka'].includes(software)) { continue; }
        archives[JSON.stringify(uid ?? name)] = data;
        for (boardID of boards) {
          if (!(boardID in o.thread)) { o.thread[boardID] = data; }
          if (!(boardID in o.post)   && (software === 'foolfuuka')) { o.post[boardID]   = data; }
          if (!(boardID in o.file)   && files.includes(boardID)) { o.file[boardID]   = data; }
        }
      }

      for (boardID in Conf['selectedArchives']) {
        var record = Conf['selectedArchives'][boardID];
        for (var type in record) {
          var archive;
          var id = record[type];
          if ((archive = archives[JSON.stringify(id)]) && $$1.hasOwn(o, type)) {
            boards = type === 'file' ? archive.files : archive.boards;
            if (boards.includes(boardID)) { o[type][boardID] = archive; }
          }
        }
      }

      return Redirect.data = o;
    },

    update(cb) {
      let url;
      const urls = [];
      const responses = [];
      let nloaded = 0;
      for (url of Conf['archiveLists'].split('\n')) {
        if (url[0] !== '#') {
          url = url.trim();
          if (url) { urls.push(url); }
        }
      }

      const fail = (url, action, msg) => new Notice('warning', `Error ${action} archive data from\n${url}\n${msg}`, 20);

      const load = i => (function() {
        if (this.status !== 200) { return fail(urls[i], 'fetching', (this.status ? `Error ${this.statusText} (${this.status})` : 'Connection Error')); }
        let {response} = this;
        if (!(response instanceof Array)) { response = [response]; }
        responses[i] = response;
        nloaded++;
        if (nloaded === urls.length) {
          return Redirect.parse(responses, cb);
        }
      });

      if (urls.length) {
        for (let i = 0; i < urls.length; i++) {
          url = urls[i];
          if (['[', '{'].includes(url[0])) {
            var response;
            try {
              response = JSON.parse(url);
            } catch (err) {
              fail(url, 'parsing', err.message);
              continue;
            }
            load(i).call({status: 200, response});
          } else {
            CrossOrigin$1.ajax(url,
              {onloadend: load(i)});
          }
        }
      } else {
        Redirect.parse([], cb);
      }
    },

    parse(responses, cb) {
      const archives = [];
      const archiveUIDs = dict();
      for (var response of responses) {
        for (var data of response) {
          var uid = JSON.stringify(data.uid ?? data.name);
          if (uid in archiveUIDs) {
            $$1.extend(archiveUIDs[uid], data);
          } else {
            archiveUIDs[uid] = dict.clone(data);
            archives.push(data);
          }
        }
      }
      const items = {archives, lastarchivecheck: Date.now()};
      $$1.set(items);
      $$1.extend(Conf, items);
      Redirect.selectArchives();
      return cb?.();
    },

    to(dest, data) {
      const archive = (['search', 'board'].includes(dest) ? Redirect.data.thread : Redirect.data[dest])[data.boardID];
      if (!archive) { return ''; }
      return Redirect[dest](archive, data);
    },

    protocol(archive) {
      let {
        protocol
      } = location;
      if (!$$1.getOwn(archive, protocol.slice(0, -1))) {
        protocol = protocol === 'https:' ? 'http:' : 'https:';
      }
      return `${protocol}//`;
    },

    thread(archive, {boardID, threadID, postID}) {
      // Keep the post number only if the location.hash was sent f.e.
      let path = threadID ?
        `${boardID}/thread/${threadID}`
      :
        `${boardID}/post/${postID}`;
      if (archive.software === 'foolfuuka') {
        path += '/';
      }
      if (threadID && postID) {
        path += archive.software === 'foolfuuka' ?
          `#${postID}`
        :
          `#p${postID}`;
      }
      return `${Redirect.protocol(archive)}${archive.domain}/${path}`;
    },

    post(archive, {boardID, postID}) {
      // For fuuka-based archives:
      // https://github.com/eksopl/fuuka/issues/27
      const protocol = Redirect.protocol(archive);
      const url = `${protocol}${archive.domain}/_/api/chan/post/?board=${boardID}&num=${postID}`;
      if (!Redirect.securityCheck(url)) { return ''; }

      return url;
    },

    file(archive, {boardID, filename}) {
      if (!filename) { return ''; }
      if (boardID === 'f') {
        filename = encodeURIComponent($$1.unescape(decodeURIComponent(filename)));
      } else {
        if (/[sm]\.jpg$/.test(filename)) { return ''; }
      }
      return `${Redirect.protocol(archive)}${archive.domain}/${boardID}/full_image/${filename}`;
    },

    board(archive, {boardID}) {
      return `${Redirect.protocol(archive)}${archive.domain}/${boardID}/`;
    },

    search(archive, {boardID, type, value}) {
      type = type === 'name' ?
        'username'
      : type === 'MD5' ?
        'image'
      :
        type;
      if (type === 'capcode') {
        // https://github.com/pleebe/FoolFuuka/blob/bf4224eed04637a4d0bd4411c2bf5f9945dfec0b/src/Model/Search.php#L363
        value = $$1.getOwn({
          'Developer': 'dev',
          'Verified':  'ver'
        }, value) || value.toLowerCase();
      } else if (type === 'image') {
        value = value.replace(/[+/=]/g, c => ({'+': '-', '/': '_', '=': ''})[c]);
      }
      value = encodeURIComponent(value);
      const path  = archive.software === 'foolfuuka' ?
        `${boardID}/search/${type}/${value}/`
      : type === 'image' ?
        `${boardID}/image/${value}`
      :
        `${boardID}/?task=search2&search_${type}=${value}`;
      return `${Redirect.protocol(archive)}${archive.domain}/${path}`;
    },

    report(boardID) {
      const urls = [];
      for (var archive of Conf['archives']) {
        var {software, https, reports, boards, name, domain} = archive;
        if ((software === 'foolfuuka') && https && reports && boards instanceof Array && boards.includes(boardID)) {
          urls.push([name, `https://${domain}/_/api/chan/offsite_report/`]);
        }
      }
      return urls;
    },

    securityCheck(url) {
      return /^https:\/\//.test(url) ||
      (location.protocol === 'http:') ||
      Conf['Exempt Archives from Encryption'];
    },

    navigate(dest, data, alternative) {
      if (!Redirect.data) { Redirect.init(); }
      const url = Redirect.to(dest, data);
      if (url && (
        Redirect.securityCheck(url) ||
        confirm(`Redirect to ${url}?\n\nYour connection will not be encrypted.`)
      )) {
        return location.replace(url);
      } else if (alternative) {
        return location.replace(alternative);
      }
    }
  };

  var Redirect$1 = Redirect;

  class CatalogThreadNative {
    toString() { return this.ID; }

    constructor(root) {
      this.nodes = {
        root,
        thumb: $$1(g.SITE.selectors.catalog.thumb, root)
      };
      this.siteID  = g.SITE.ID;
      this.boardID = this.nodes.thumb.parentNode.pathname.split(/\/+/)[1];
      this.board = g.boards[this.boardID] || new Board(this.boardID);
      this.ID = (this.threadID = +(root.dataset.id || root.id).match(/\d*$/)[0]);
      this.thread = this.board.threads.get(this.ID) || new Thread(this.ID, this.board);
    }
  }

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const Anonymize = {
    init() {
      if (!Conf['Anonymize']) { return; }
      return $$1.addClass(doc$1, 'anonymize');
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ImageHover = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW)) { return; }
      if (Conf['Image Hover']) {
        Callbacks.Post.push({
          name: 'Image Hover',
          cb:   this.node
        });
      }
      if (Conf['Image Hover in Catalog']) {
        return Callbacks.CatalogThread.push({
          name: 'Image Hover',
          cb:   this.catalogNode
        });
      }
    },

    node() {
      return this.files.filter((file) => (file.isImage || file.isVideo) && file.thumb).map((file) =>
        $$1.on(file.thumb, 'mouseover', ImageHover.mouseover(this, file)));
    },

    catalogNode() {
      const file = this.thread.OP.files[0];
      if (!file || (!file.isImage && !file.isVideo)) { return; }
      return $$1.on(this.nodes.thumb, 'mouseover', ImageHover.mouseover(this.thread.OP, file));
    },

    mouseover(post, file) { return function(e) {
      let el, height, width;
      if (!doc$1.contains(this)) { return; }
      const {isVideo} = file;
      if (file.isExpanding || file.isExpanded || g.SITE.isThumbExpanded?.(file)) { return; }
      const error = ImageHover.error(post, file);
      if (ImageCommon.cache?.dataset.fileID === `${post.fullID}.${file.index}`) {
        el = ImageCommon.popCache();
        $$1.on(el, 'error', error);
      } else {
        el = $$1.el((isVideo ? 'video' : 'img'));
        el.dataset.fileID = `${post.fullID}.${file.index}`;
        $$1.on(el, 'error', error);
        el.src = file.url;
      }

      if (Conf['Restart when Opened']) {
        ImageCommon.rewind(el);
        ImageCommon.rewind(this);
      }
      el.id = 'ihover';
      $$1.add(Header$1.hover, el);
      if (isVideo) {
        el.loop     = true;
        el.controls = false;
        Volume.setup(el);
        if (Conf['Autoplay']) {
          el.play();
          if (this.nodeName === 'VIDEO') { this.currentTime = el.currentTime; }
        }
      }
      if (file.dimensions) {
        [width, height] = file.dimensions.split('x').map((x) => +x);
        const maxWidth = doc$1.clientWidth;
        const maxHeight = doc$1.clientHeight - UI.hover.padding;
        const scale = Math.min(1, maxWidth / width, maxHeight / height);
        width *= scale;
        height *= scale;
        el.style.maxWidth  = `${width}px`;
        el.style.maxHeight = `${height}px`;
      }
      return UI.hover({
        root: this,
        el,
        latestEvent: e,
        endEvents: 'mouseout click',
        height,
        width,
        noRemove: true,
        cb() {
          $$1.off(el, 'error', error);
          ImageCommon.pushCache(el);
          ImageCommon.pause(el);
          $$1.rm(el);
          return el.removeAttribute('style');
        }
      });
    }; },

    error(post, file) { return function() {
      if (ImageCommon.decodeError(this, file)) { return; }
      return ImageCommon.error(this, post, file, 3 * SECOND, URL => {
        if (URL) {
          return this.src = URL + (this.src === URL ? '?' + Date.now() : '');
        } else {
          return $$1.rm(this);
        }
      });
    }; }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ImageLoader = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW)) { return; }
      const replace = Conf['Replace JPG'] || Conf['Replace PNG'] || Conf['Replace GIF'] || Conf['Replace WEBM'];
      if (!Conf['Image Prefetching'] && !replace) { return; }

      Callbacks.Post.push({
        name: 'Image Replace',
        cb:   this.node
      });

      $$1.on(d$1, 'PostsInserted', function() {
        if (ImageLoader.prefetchEnabled || replace) {
          return g.posts.forEach(ImageLoader.prefetchAll);
        }
      });

      if (Conf['Replace WEBM']) {
        $$1.on(d$1, 'scroll visibilitychange 4chanXInitFinished PostsInserted', this.playVideos);
      }

      if (!Conf['Image Prefetching'] || !['index', 'thread'].includes(g.VIEW)) { return; }

      const el = $$1.el('a', {
        href: 'javascript:;',
        title: 'Prefetch Images',
        innerHTML: '🗲︎'
      }
      );

      $$1.on(el, 'click', this.toggle);

      return Header$1.addShortcut('prefetch', el, 525);
    },

    node() {
      if (this.isClone) { return; }
      for (var file of this.files) {
        if (Conf['Replace WEBM'] && file.isVideo) { ImageLoader.replaceVideo(this, file); }
        ImageLoader.prefetch(this, file);
      }
    },

    replaceVideo(post, file) {
      const {thumb} = file;
      const video = $$1.el('video', {
        preload:     'none',
        loop:        true,
        muted:       true,
        poster:      thumb.src || thumb.dataset.src,
        textContent: thumb.alt,
        className:   thumb.className
      }
      );
      video.setAttribute('muted', 'muted');
      video.dataset.md5 = thumb.dataset.md5;
      for (var attr of ['height', 'width', 'maxHeight', 'maxWidth']) { video.style[attr] = thumb.style[attr]; }
      video.src         = file.url;
      $$1.replace(thumb, video);
      file.thumb      = video;
      return file.videoThumb = true;
    },

    prefetch(post, file) {
      let clone, type;
      const {isImage, isVideo, thumb, url} = file;
      if (file.isPrefetched || !(isImage || isVideo) || post.isHidden || post.thread.isHidden) { return; }
      if (isVideo) {
        type = 'WEBM';
      } else {
        type = url.match(/\.([^.]+)$/)?.[1].toUpperCase();
        if (type === 'JPEG') { type = 'JPG'; }
      }
      const replace = Conf[`Replace ${type}`] && !/spoiler/.test(thumb.src || thumb.dataset.src);
      if (!replace && !ImageLoader.prefetchEnabled) { return; }
      if ($$1.hasClass(doc$1, 'catalog-mode')) { return; }
      if (![post, ...post.clones].some(clone => doc$1.contains(clone.nodes.root))) { return; }
      file.isPrefetched = true;
      if (file.videoThumb) {
        for (clone of post.clones) { clone.file.thumb.preload = 'auto'; }
        thumb.preload = 'auto';
        // XXX Cloned video elements with poster in Firefox cause momentary display of image loading icon.
        if ($$1.engine === 'gecko') {
          $$1.on(thumb, 'loadeddata', function() { return this.removeAttribute('poster'); });
        }
        return;
      }

      const el = $$1.el(isImage ? 'img' : 'video');
      if (isVideo) { el.preload = 'auto'; }
      if (replace && isImage) {
        $$1.on(el, 'load', function() {
          for (clone of post.clones) { clone.file.thumb.src = url; }
          return thumb.src = url;
        });
      }
      return el.src = url;
    },

    prefetchAll(post) {
      for (var file of post.files) {
        ImageLoader.prefetch(post, file);
      }
    },

    toggle() {
      ImageLoader.prefetchEnabled = !ImageLoader.prefetchEnabled;
      this.classList.toggle('disabled', !ImageLoader.prefetchEnabled);
      if (ImageLoader.prefetchEnabled) {
        g.posts.forEach(ImageLoader.prefetchAll);
      }
    },

    playVideos() {
      // Special case: Quote previews are off screen when inserted into document, but quickly moved on screen.
      const qpClone = $$1.id('qp')?.firstElementChild;
      return g.posts.forEach(function(post) {
        for (post of [post, ...post.clones]) {
          for (var file of post.files) {
            if (file.videoThumb) {
              var {thumb} = file;
              if (Header$1.isNodeVisible(thumb) || (post.nodes.root === qpClone)) { thumb.play(); } else { thumb.pause(); }
            }
          }
        }
      });
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Metadata = {
    init() {
      if (!Conf['WEBM Metadata'] || !['index', 'thread'].includes(g.VIEW)) { return; }

      return Callbacks.Post.push({
        name: 'WEBM Metadata',
        cb:   this.node
      });
    },

    node() {
      for (let i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        if (/webm$/i.test(file.url)) {var el;
        
          if (this.isClone) {
            el = $$1('.webm-title', file.text);
          } else {
            el = $$1.el('span',
              {className: 'webm-title'});
            el.dataset.index = i;
            $$1.extend(el,
              {innerHTML: "<a href=\"javascript:;\"></a>"});
            $$1.add(file.text, [$$1.tn(' '), el]);
          }
          if (el.children.length === 1) { $$1.one(el.lastElementChild, 'mouseover focus', Metadata.load); }
        }
      }
    },

    load() {
      $$1.rmClass(this.parentNode, 'error');
      $$1.addClass(this.parentNode, 'loading');
      const {index} = this.parentNode.dataset;
      return CrossOrigin$1.binary(Get$1.postFromNode(this).files[+index].url, data => {
        $$1.rmClass(this.parentNode, 'loading');
        if (data != null) {
          const title = Metadata.parse(data);
          const output = $$1.el('span',
            {textContent: title || ''});
          if (title == null) { $$1.addClass(this.parentNode, 'not-found'); }
          $$1.before(this, output);
          this.parentNode.tabIndex = 0;
          if (d$1.activeElement === this) { this.parentNode.focus(); }
          return this.tabIndex = -1;
        } else {
          $$1.addClass(this.parentNode, 'error');
          return $$1.one(this, 'click', Metadata.load);
        }
      }
      ,
        {Range: 'bytes=0-9999'});
    },

    parse(data) {
      const readInt = function() {
        let n = data[i++];
        let len = 0;
        while (n < (0x80 >> len)) { len++; }
        n ^= (0x80 >> len);
        while (len-- && (i < data.length)) {
          n = (n << 8) ^ data[i++];
        }
        return n;
      };

      var i = 0;
      while (i < data.length) {
        var element = readInt();
        var size    = readInt();
        if (element === 0x3BA9) { // Title
          var title = '';
          while (size-- && (i < data.length)) {
            title += String.fromCharCode(data[i++]);
          }
          return decodeURIComponent(escape(title)); // UTF-8 decoding
        } else if (![0x8538067, 0x549A966].includes(element)) { // Segment, Info
          i += size;
        }
      }
      return null;
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const RevealSpoilers = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Reveal Spoiler Thumbnails']) { return; }

      return Callbacks.Post.push({
        name: 'Reveal Spoiler Thumbnails',
        cb:   this.node
      });
    },

    node() {
      if (this.isClone) { return; }
      for (var file of this.files) {
        if (file.thumb && file.isSpoiler) {
          var {thumb} = file;
          // Remove old width and height.
          thumb.removeAttribute('style');
          // Enforce thumbnail size if thumbnail is replaced.
          thumb.style.maxHeight = (thumb.style.maxWidth = this.isReply ? '125px' : '250px');
          if (thumb.src) {
            thumb.src = file.thumbURL;
          } else {
            thumb.dataset.src = file.thumbURL;
          }
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Linkify = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Linkify']) { return; }

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      Callbacks.Post.push({
        name: 'Linkify',
        cb:   this.node
      });

      return Embedding.init();
    },

    node() {
      let link;
      if (this.isClone) { return Embedding.events(this); }
      if (!Linkify.regString.test(this.info.comment)) { return; }
      for (link of $$('a', this.nodes.comment)) {
        if (g.SITE.isLinkified?.(link)) {
          $$1.addClass(link, 'linkify');
          if (ImageHost.useFaster) { ImageHost.fixLinks([link]); }
          Embedding.process(link, this);
        }
      }
      const links = Linkify.process(this.nodes.comment);
      if (ImageHost.useFaster) { ImageHost.fixLinks(links); }
      for (link of links) { Embedding.process(link, this); }
    },

    process(node) {
      let length;
      const test     = /[^\s"]+/g;
      const space    = /[\s"]/;
      const snapshot = $$1.X('.//br|.//text()', node);
      let i = 0;
      const links = [];
      while ((node = snapshot.snapshotItem(i++))) {
        var result;
        var {data} = node;
        if (!data || (node.parentElement.nodeName === "A")) { continue; }

        while ((result = test.exec(data))) {
          var {index} = result;
          var endNode = node;
          var word    = result[0];
          // End of node, not necessarily end of space-delimited string
          if ((length = index + word.length) === data.length) {
            var saved;
            test.lastIndex = 0;

            while (saved = snapshot.snapshotItem(i++)) {
              var end;
              if ((saved.nodeName === 'BR') || ((saved.parentElement.nodeName === 'P') && !saved.previousSibling)) {
                var part1, part2;
                if (
                  // link deliberately split
                  (part1 = word.match(/(https?:\/\/)?([a-z\d-]+\.)*[a-z\d-]+$/i)) &&
                  (part2 = snapshot.snapshotItem(i)?.data?.match(/^(\.[a-z\d-]+)*\//i)) &&
                  ((part1[0] + part2[0]).search(Linkify.regString) === 0)
                ) {
                  continue;
                } else {
                  break;
                }
              }

              if ((saved.parentElement.nodeName === "A") && !Linkify.regString.test(word)) {
                break;
              }

              endNode  = saved;
              ({data}   = saved);

              if (end = space.exec(data)) {
                // Set our snapshot and regex to start on this node at this position when the loop resumes
                word += data.slice(0, end.index);
                test.lastIndex = (length = end.index);
                i--;
                break;
              } else {
                ({length} = data);
                word    += data;
              }
            }
          }

          if (Linkify.regString.test(word)) {
            links.push(Linkify.makeRange(node, endNode, index, length));

            // <% if (readJSON('/.tests_enabled')) { %>
            // if (links.length) {
            // Test.assert(() => word === links[links.length - 1]?.toString());
            // }
            // <% } %>
          }

          if (!test.lastIndex || (node !== endNode)) { break; }
        }
      }

      i = links.length;
      while (i--) {
        links[i] = Linkify.makeLink(links[i]);
      }
      return links;
    },

    regString: new RegExp(`(\
\
(https?|mailto|git|magnet|ftp|irc):(\
[a-z\\d%/?]\
)\
|\
([-a-z\\d]+[.])+(\
aero|asia|biz|cat|com|coop|dance|info|int|jobs|mobi|moe|museum|name|net|org|post|pro|tel|travel|xxx|xyz|edu|gov|mil|[a-z]{2}\
)([:/]|(?![^\\s"]))\
|\
[\\d]{1,3}\\.[\\d]{1,3}\\.[\\d]{1,3}\\.[\\d]{1,3}\
|\
[-\\w\\d.@]+@[a-z\\d.-]+\\.[a-z\\d]\
)`, 'i'),

    makeRange(startNode, endNode, startOffset, endOffset) {
      const range = document.createRange();
      range.setStart(startNode, startOffset);
      range.setEnd(endNode,   endOffset);
      return range;
    },

    makeLink(range) {
      let t;
      let encodedDomain;
      let text = range.toString();

      // Clean start of range
      let i = text.search(Linkify.regString);

      if (i > 0) {
        text = text.slice(i);
        while ((range.startOffset + i) >= range.startContainer.data.length) { i--; }

        if (i) { range.setStart(range.startContainer, range.startOffset + i); }
      }

      // Clean end of range
      i = 0;
      while (/[)\]}>.,]/.test(t = text.charAt(text.length - (1 + i)))) {
        if (!/[.,]/.test(t) && !((text.match(/[()\[\]{}<>]/g)).length % 2)) { break; }
        i++;
      }

      if (i) {
        text = text.slice(0, -i);
        while ((range.endOffset - i) < 0) { i--; }

        if (i) {
          range.setEnd(range.endContainer, range.endOffset - i);
        }
      }

      // Make our link 'valid' if it is formatted incorrectly.
      if (!/((mailto|magnet):|.+:\/\/)/.test(text)) {
        text = (
          /@/.test(text) ?
            'mailto:'
          :
            'http://'
        ) + text;
      }

      // Decode percent-encoded characters in domain so that they behave consistently across browsers.
      if (encodedDomain = text.match(/^(https?:\/\/[^/]*%[0-9a-f]{2})(.*)$/i)) {
        text = encodedDomain[1].replace(/%([0-9a-f]{2})/ig, function(x, y) {
          if (y === '25') { return x; } else { return String.fromCharCode(parseInt(y, 16)); }
        }) + encodedDomain[2];
      }

      const a = $$1.el('a', {
        className: 'linkify',
        rel:       'noreferrer noopener',
        target:    '_blank',
        href:      text
      }
      );

      // Insert the range into the anchor, the anchor into the range's DOM location, and destroy the range.
      $$1.add(a, range.extractContents());
      range.insertNode(a);

      return a;
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const ArchiveLink = {
    init() {
      if ((g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Archive Link']) { return; }

      const div = $$1.el('div',
        {textContent: 'Archive'});

      const entry = {
        el: div,
        order: 60,
        open({ID, thread, board}) {
          return !!Redirect$1.to('thread', {postID: ID, threadID: thread.ID, boardID: board.ID});
        },
        subEntries: []
      };

      for (var type of [
        ['Post',      'post'],
        ['Name',      'name'],
        ['Tripcode',  'tripcode'],
        ['Capcode',   'capcode'],
        ['Subject',   'subject'],
        ['Flag',      'country'],
        ['Filename',  'filename'],
        ['Image MD5', 'MD5']
      ]) {
        // Add a sub entry for each type.
        entry.subEntries.push(this.createSubEntry(type[0], type[1]));
      }

      return Menu.menu.addEntry(entry);
    },

    createSubEntry(text, type) {
      const el = $$1.el('a', {
        textContent: text,
        target: '_blank'
      }
      );

      const open = type === 'post' ?
        function({ID, thread, board}) {
          el.href = Redirect$1.to('thread', {postID: ID, threadID: thread.ID, boardID: board.ID});
          return true;
        }
      :
        function(post) {
          const typeParam = (type === 'country') && post.info.flagCodeTroll ?
            'troll_country'
          :
            type;
          const value = type === 'country' ?
            post.info.flagCode || post.info.flagCodeTroll?.toLowerCase()
          :
            Filter.values(type, post)[0];
          // We want to parse the exact same stuff as the filter does already.
          if (!value) { return false; }
          el.href = Redirect$1.to('search', {
            boardID:  post.board.ID,
            type:     typeParam,
            value,
            isSearch: true
          }
          );
          return true;
        };

      return {
        el,
        open
      };
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var CopyTextLink = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Copy Text Link']) { return; }

      const a = $$1.el('a', {
        className: 'copy-text-link',
        href: 'javascript:;',
        textContent: 'Copy Text'
      }
      );
      $$1.on(a, 'click', CopyTextLink.copy);

      return Menu.menu.addEntry({
        el: a,
        order: 12,
        open(post) {
          CopyTextLink.text = (post.origin || post).commentOrig();
          return true;
        }
      });
    },

    copy() {
      const el = $$1.el('textarea', {
        className: 'copy-text-element',
        value: CopyTextLink.text
      }
      );
      $$1.add(d$1.body, el);
      el.select();
      try {
        d$1.execCommand('copy');
      } catch (error) {}
      return $$1.rm(el);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var DeleteLink = {
    auto: [dict(), dict()],

    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Delete Link']) { return; }

      const div = $$1.el('div', {
        className: 'delete-link',
        textContent: 'Delete'
      }
      );
      const postEl = $$1.el('a', {
        className: 'delete-post',
        href: 'javascript:;'
      }
      );
      const fileEl = $$1.el('a', {
        className: 'delete-file',
        href: 'javascript:;'
      }
      );
      this.nodes = {
        menu:  div.firstChild,
        links: [postEl, fileEl]
      };

      const postEntry = {
        el: postEl,
        open() {
          postEl.textContent = DeleteLink.linkText(false);
          $$1.on(postEl, 'click', DeleteLink.toggle);
          return true;
        }
      };
      const fileEntry = {
        el: fileEl,
        open({file}) {
          if (!file || file.isDead) { return false; }
          fileEl.textContent = DeleteLink.linkText(true);
          $$1.on(fileEl, 'click', DeleteLink.toggle);
          return true;
        }
      };

      return Menu.menu.addEntry({
        el: div,
        order: 40,
        open(post) {
          if (post.isDead) { return false; }
          DeleteLink.post = post;
          DeleteLink.nodes.menu.textContent = DeleteLink.menuText();
          DeleteLink.cooldown.start(post);
          return true;
        },
        subEntries: [postEntry, fileEntry]});
    },

    menuText() {
      let seconds;
      if ((seconds = DeleteLink.cooldown.seconds[DeleteLink.post.fullID])) {
        return `Delete (${seconds})`;
      } else {
        return 'Delete';
      }
    },

    linkText(fileOnly) {
      let text = fileOnly ? 'File' : 'Post';
      if (DeleteLink.auto[+fileOnly][DeleteLink.post.fullID]) {
        text = `Deleting ${text.toLowerCase()}...`;
      }
      return text;
    },

    toggle() {
      const {post} = DeleteLink;
      const fileOnly = $$1.hasClass(this, 'delete-file');
      const auto = DeleteLink.auto[+fileOnly];

      if (auto[post.fullID]) {
        delete auto[post.fullID];
      } else {
        auto[post.fullID] = true;
      }
      this.textContent = DeleteLink.linkText(fileOnly);

      if (!DeleteLink.cooldown.seconds[post.fullID]) {
        return DeleteLink.delete(post, fileOnly);
      }
    },

    delete(post, fileOnly) {
      const link = DeleteLink.nodes.links[+fileOnly];
      delete DeleteLink.auto[+fileOnly][post.fullID];
      if (post.fullID === DeleteLink.post.fullID) { $$1.off(link, 'click', DeleteLink.toggle); }

      const form = {
        mode: 'usrdel',
        onlyimgdel: fileOnly,
        pwd: QR.persona.getPassword()
      };
      form[+post.ID] = 'delete';

      return $$1.ajax($$1.id('delform').action.replace(`/${g.BOARD}/`, `/${post.board}/`), {
        responseType: 'document',
        withCredentials: true,
        onloadend() { return DeleteLink.load(link, post, fileOnly, this.response); },
        form: $$1.formData(form)
      }
      );
    },

    load(link, post, fileOnly, resDoc) {
      let msg;
      if (!resDoc) {
        new Notice('warning', 'Connection error, please retry.', 20);
        if (post.fullID === DeleteLink.post.fullID) { $$1.on(link, 'click', DeleteLink.toggle); }
        return;
      }

      link.textContent = DeleteLink.linkText(fileOnly);
      if (resDoc.title === '4chan - Banned') { // Ban/warn check
        const el = $$1.el('span', {innerHTML: "You can&#039;t delete posts because you are <a href=\"//www.4chan.org/banned\" target=\"_blank\">banned</a>."});
        return new Notice('warning', el, 20);
      } else if (msg = resDoc.getElementById('errmsg')) { // error!
        new Notice('warning', msg.textContent, 20);
        if (post.fullID === DeleteLink.post.fullID) { $$1.on(link, 'click', DeleteLink.toggle); }
        if (QR.cooldown.data && Conf['Cooldown'] && /\bwait\b/i.test(msg.textContent)) {
          DeleteLink.cooldown.start(post, 5);
          DeleteLink.auto[+fileOnly][post.fullID] = true;
          return DeleteLink.nodes.links[+fileOnly].textContent = DeleteLink.linkText(fileOnly);
        }
      } else {
        if (!fileOnly) { QR.cooldown.delete(post); }
        if (resDoc.title === 'Updating index...') {
          // We're 100% sure.
          (post.origin || post).kill(fileOnly);
        }
        if (post.fullID === DeleteLink.post.fullID) { return link.textContent = 'Deleted'; }
      }
    },

    cooldown: {
      seconds: dict(),

      start(post, seconds) {
        // Already counting.
        if (DeleteLink.cooldown.seconds[post.fullID] != null) { return; }

        if (seconds == null) { seconds = QR.cooldown.secondsDeletion(post); }
        if (seconds > 0) {
          DeleteLink.cooldown.seconds[post.fullID] = seconds;
          return DeleteLink.cooldown.count(post);
        }
      },

      count(post) {
        if (post.fullID === DeleteLink.post.fullID) { DeleteLink.nodes.menu.textContent = DeleteLink.menuText(); }
        if ((DeleteLink.cooldown.seconds[post.fullID] > 0) && Conf['Cooldown']) {
          DeleteLink.cooldown.seconds[post.fullID]--;
          setTimeout(DeleteLink.cooldown.count, 1000, post);
        } else {
          delete DeleteLink.cooldown.seconds[post.fullID];
          for (var fileOnly of [false, true]) {
            if (DeleteLink.auto[+fileOnly][post.fullID]) {
              DeleteLink.delete(post, fileOnly);
            }
          }
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const DownloadLink = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Download Link']) { return; }

      const a = $$1.el('a', {
        className: 'download-link',
        textContent: 'Download file'
      }
      );

      // Specifying the filename with the download attribute only works for same-origin links.
      $$1.on(a, 'click', ImageCommon.download);

      return Menu.menu.addEntry({
        el: a,
        order: 100,
        open({file}) {
          if (!file) { return false; }
          a.href     = file.url;
          a.download = file.name;
          return true;
        }
      });
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ReportLink = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Menu'] || !Conf['Report Link']) { return; }

      const a = $$1.el('a', {
        className: 'report-link',
        href: 'javascript:;',
        textContent: 'Report'
      }
      );
      $$1.on(a, 'click', ReportLink.report);

      return Menu.menu.addEntry({
        el: a,
        order: 10,
        open(post) {
          ReportLink.url = `//sys.${location.hostname.split('.')[1]}.org/${post.board}/imgboard.php?mode=report&no=${post}`;
          if (d$1.cookie.indexOf('pass_enabled=1') >= 0) {
            ReportLink.dims = 'width=350,height=275';
          } else {
            ReportLink.dims = 'width=400,height=550';
          }
          return true;
        }
      });
    },

    report() {
      const {url, dims} = ReportLink;
      const id  = Date.now();
      const set = `toolbar=0,scrollbars=1,location=0,status=1,menubar=0,resizable=1,${dims}`;
      return window.open(url, id, set);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var AntiAutoplay = {
    init() {
      if (!Conf['Disable Autoplaying Sounds']) { return; }
      $$1.addClass(doc$1, 'anti-autoplay');
      for (var audio of $$('audio[autoplay]', doc$1)) { this.stop(audio); }
      window.addEventListener('loadstart', (e => this.stop(e.target)), true);
      Callbacks.Post.push({
        name: 'Disable Autoplaying Sounds',
        cb:   this.node
      });
      return $$1.ready(() => this.process(d.body));
    },

    stop(audio) {
      if (!audio.autoplay) { return; }
      audio.pause();
      audio.autoplay = false;
      if (audio.controls) { return; }
      audio.controls = true;
      return $$1.addClass(audio, 'controls-added');
    },

    node() {
      return AntiAutoplay.process(this.nodes.comment);
    },

    process(root) {
      for (var iframe of $$('iframe[src*="youtube"][src*="autoplay=1"]', root)) {
        AntiAutoplay.processVideo(iframe, 'src');
      }
      for (var object of $$('object[data*="youtube"][data*="autoplay=1"]', root)) {
        AntiAutoplay.processVideo(object, 'data');
      }
    },

    processVideo(el, attr) {
      el[attr] = el[attr].replace(/\?autoplay=1&?/, '?').replace('&autoplay=1', '');
      if (window.getComputedStyle(el).display === 'none') { el.style.display = 'block'; }
      return $$1.addClass(el, 'autoplay-removed');
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Banner = {
    init() {
      if (Conf['Custom Board Titles']) {
        this.db = new DataBoard('customTitles', null, true);
      }

      $$1.asap((() => d$1.body), () => $$1.asap((() => $$1('hr')), Banner.ready));

      // Let 4chan's JS load the banner if enabled; otherwise, load it ourselves.
      if (g.BOARD.ID !== 'f') {
        return Main$1.ready(() => $$1.queueTask(Banner.load));
      }
    },

    ready() {
      const banner = $$1(".boardBanner");
      const {children} = banner;

      if ((g.VIEW === 'thread') && Conf['Remove Thread Excerpt']) {
        Banner.setTitle(children[1].textContent);
      }

      children[0].title = "Click to change";
      $$1.on(children[0], 'click', Banner.cb.toggle);

      if (Conf['Custom Board Titles']) {
        Banner.custom(children[1]);
        if (children[2]) { return Banner.custom(children[2]); }
      }
    },

    load() {
      const bannerCnt = $$1.id('bannerCnt');
      if (!bannerCnt.firstChild) {
        const img = $$1.el('img', {
          alt: '4chan',
          src: '//s.4cdn.org/image/title/' + bannerCnt.dataset.src
        }
        );
        return $$1.add(bannerCnt, img);
      }
    },

    setTitle(title) {
      if (Unread.title != null) {
        Unread.title = title;
        return Unread.update();
      } else {
        return d$1.title = title;
      }
    },

    cb: {
      toggle() {
        if (!Banner.choices?.length) {
          Banner.choices = Conf['knownBanners'].split(',').slice();
        }
        const i = Math.floor(Banner.choices.length * Math.random());
        const banner = Banner.choices.splice(i, 1);
        return $$1('img', this.parentNode).src = `//s.4cdn.org/image/title/${banner}`;
      },

      click(e) {
        if (!e.ctrlKey && !e.metaKey) { return; }
        if (Banner.original[this.className] == null) { Banner.original[this.className] = this.cloneNode(true); }
        this.contentEditable = true;
        for (var br of $$('br', this)) { $$1.replace(br, $$1.tn('\n')); }
        return this.focus();
      },

      keydown(e) {
        e.stopPropagation();
        if (!e.shiftKey && (e.keyCode === 13)) { return this.blur(); }
      },

      blur() {
        for (var br of $$('br', this)) { $$1.replace(br, $$1.tn('\n')); }
        if (this.textContent = this.textContent.replace(/\n*$/, '')) {
          this.contentEditable = false;
          return Banner.db.set({
            boardID:  g.BOARD.ID,
            threadID: this.className,
            val: {
              title: this.textContent,
              orig:  Banner.original[this.className].textContent
            }
          });
        } else {
          $$1.rmAll(this);
          $$1.add(this, [...Banner.original[this.className].cloneNode(true).childNodes]);
          return Banner.db.delete({
            boardID:  g.BOARD.ID,
            threadID: this.className
          });
        }
      }
    },

    original: dict(),

    custom(child) {
      let data;
      const {className} = child;
      child.title = `Ctrl/\u2318+click to edit board ${className.slice(5).toLowerCase()}`;
      child.spellcheck = false;

      for (var event of ['click', 'keydown', 'blur']) {
        $$1.on(child, event, Banner.cb[event]);
      }

      if (data = Banner.db.get({boardID: g.BOARD.ID, threadID: className})) {
        if (Conf['Persistent Custom Board Titles'] || (data.orig === child.textContent)) {
          Banner.original[className] = child.cloneNode(true);
          return child.textContent = data.title;
        } else {
          return Banner.db.delete({boardID: g.BOARD.ID, threadID: className});
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Flash = {
    init() {
      if ((g.BOARD.ID === 'f') && Conf['Enable Native Flash Embedding']) {
        return $$1.ready(Flash.initReady);
      }
    },

    initReady() {
      if ($$1.hasStorage) {
        return $$1.global(function() { if (JSON.parse(localStorage['4chan-settings'] || '{}').disableAll) { return window.SWFEmbed.init(); } });
      } else {
        if (g.VIEW === 'thread') {
          $$1.global(() => window.Main.tid = location.pathname.split(/\/+/)[3]);
        }
        return $$1.global(() => window.SWFEmbed.init());
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Fourchan = {
    init() {
      if ((g.SITE.software !== 'yotsuba') || !['index', 'thread', 'archive'].includes(g.VIEW)) { return; }
      BoardConfig.ready(this.initBoard);
      return Main$1.ready(this.initReady);
    },

    initBoard() {
      if (g.BOARD.config.code_tags) {
        $$1.on(window, 'prettyprint:cb', function(e) {
          let post, pre;
          if (!(post = g.posts.get(e.detail.ID))) { return; }
          if (!(pre  = $$('.prettyprint', post.nodes.comment)[+e.detail.i])) { return; }
          if (!$$1.hasClass(pre, 'prettyprinted')) {
            pre.innerHTML = e.detail.html;
            return $$1.addClass(pre, 'prettyprinted');
          }
        });
        $$1.global(() => window.addEventListener('prettyprint', e => window.dispatchEvent(new CustomEvent('prettyprint:cb', {
          detail: {
            ID:   e.detail.ID,
            i:    e.detail.i,
            html: window.prettyPrintOne(e.detail.html)
          }
        }))
        , false));
        Callbacks.Post.push({
          name: 'Parse [code] tags',
          cb:   Fourchan.code
        });
        g.posts.forEach(function(post) {
          if (post.callbacksExecuted) {
            return Callbacks.Post.execute(post, ['Parse [code] tags'], true);
          }
        });
        ExpandComment.callbacks.push(Fourchan.code);
      }

      if (g.BOARD.config.math_tags) {
        $$1.global(() => window.addEventListener('mathjax', function(e) {
          if (window.MathJax) {
            return window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, e.target]);
          } else {
            if (!document.querySelector('script[src^="//cdn.mathjax.org/"]')) { // don't load MathJax if already loading
              window.loadMathJax();
              window.loadMathJax = function() {};
            }
            // 4chan only handles post comments on MathJax load; anything else (e.g. the QR preview) must be queued explicitly.
            if (!e.target.classList.contains('postMessage')) {
              return document.querySelector('script[src^="//cdn.mathjax.org/"]').addEventListener('load', () => window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, e.target])
              , false);
            }
          }
        }
        , false));
        Callbacks.Post.push({
          name: 'Parse [math] tags',
          cb:   Fourchan.math
        });
        g.posts.forEach(function(post) {
          if (post.callbacksExecuted) {
            return Callbacks.Post.execute(post, ['Parse [math] tags'], true);
          }
        });
        return ExpandComment.callbacks.push(Fourchan.math);
      }
    },

    // Disable 4chan's ID highlighting (replaced by IDHighlight) and reported post hiding.
    initReady() {
      return $$1.global(function() {
        window.clickable_ids = false;
        for (var node of document.querySelectorAll('.posteruid, .capcode')) {
          node.removeEventListener('click', window.idClick, false);
        }
      });
    },

    code() {
      if (this.isClone) { return; }
      return $$1.ready(() => {
        const iterable = $$('.prettyprint', this.nodes.comment);
        for (let i = 0; i < iterable.length; i++) {
          var pre = iterable[i];
          if (!$$1.hasClass(pre, 'prettyprinted')) {
            $$1.event('prettyprint', {ID: this.fullID, i, html: pre.innerHTML}, window);
          }
        }
      });
    },

    math() {
      let wbrs;
      if (!/\[(math|eqn)\]/.test(this.nodes.comment.textContent)) { return; }
      // XXX <wbr> tags frequently break MathJax; remove them.
      if ((wbrs = $$('wbr', this.nodes.comment)).length) {
        for (var wbr of wbrs) { $$1.rm(wbr); }
        this.nodes.comment.normalize();
      }
      var cb = () => {
        if (!doc$1.contains(this.nodes.comment)) { return; }
        $$1.off(d$1, 'PostsInserted', cb);
        return $$1.event('mathjax', null, this.nodes.comment);
      };
      $$1.on(d$1, 'PostsInserted', cb);
      return cb();
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var IDColor = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Color User IDs']) { return; }
      this.ids = dict();
      this.ids['Heaven'] = [0, 0, 0, '#fff'];

      return Callbacks.Post.push({
        name: 'Color User IDs',
        cb:   this.node
      });
    },

    node() {
      let span, uid;
      if (this.isClone || !((uid = this.info.uniqueID) && (span = this.nodes.uniqueID))) { return; }

      const rgb = IDColor.ids[uid] || IDColor.compute(uid);

      // Style the damn node.
      const {style} = span;
      style.color = rgb[3];
      style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      return $$1.addClass(span, 'painted');
    },

    compute(uid) {
      // Convert chars to integers, bitshift and math to create a larger integer
      // Create a nice string of binary
      const hash = g.SITE.uidColor ? g.SITE.uidColor(uid) : parseInt(uid, 16);

      // Convert binary string to numerical values with bitshift and '&' truncation.
      const rgb = [
        (hash >> 16) & 0xFF,
        (hash >> 8)  & 0xFF,
        hash & 0xFF
      ];

      // Weight color luminance values, assign a font color that should be readable. 
      rgb.push($$1.luma(rgb) > 125 ?
        '#000'
      :
        '#fff'
      );

      // Cache.
      return this.ids[uid] = rgb;
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var IDHighlight = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW)) { return; }

      return Callbacks.Post.push({
        name: 'Highlight by User ID',
        cb:   this.node
      });
    },

    uniqueID: null,

    node() {
      if (this.nodes.uniqueIDRoot) { $$1.on(this.nodes.uniqueIDRoot, 'click', IDHighlight.click(this)); }
      if (this.nodes.capcode) { $$1.on(this.nodes.capcode,      'click', IDHighlight.click(this)); }
      if (!this.isClone) { return IDHighlight.set(this); }
    },

    set(post) {
      const match = (post.info.uniqueID || post.info.capcode) === IDHighlight.uniqueID;
      return $$1[match ? 'addClass' : 'rmClass'](post.nodes.post, 'highlight');
    },

    click(post) { return function() {
      const uniqueID = post.info.uniqueID || post.info.capcode;
      IDHighlight.uniqueID = IDHighlight.uniqueID === uniqueID ? null : uniqueID;
      return g.posts.forEach(IDHighlight.set);
    }; }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var IDPostCount = {
    init() {
      if ((g.VIEW !== 'thread') || !Conf['Count Posts by ID']) { return; }
      Callbacks.Thread.push({
        name: 'Count Posts by ID',
        cb() { return IDPostCount.thread = this; }
      });
      return Callbacks.Post.push({
        name: 'Count Posts by ID',
        cb:   this.node
      });
    },

    node() {
      if (this.nodes.uniqueID && (this.thread === IDPostCount.thread)) {
        return $$1.on(this.nodes.uniqueID, 'mouseover', IDPostCount.count);
      }
    },

    count() {
      const {uniqueID} = Get$1.postFromNode(this).info;
      let n = 0;
      IDPostCount.thread.posts.forEach(function(post) {
        if (post.info.uniqueID === uniqueID) { return n++; }
      });
      return this.title = `${n} post${n === 1 ? '' : 's'} by this ID`;
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ModContact = {
    init() {
      if ((g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW)) { return; }
      return Callbacks.Post.push({
        name: 'Mod Contact Links',
        cb:   this.node
      });
    },

    node() {
      let moved;
      if (this.isClone || !$$1.hasOwn(ModContact.specific, this.info.capcode)) { return; }
      const links = $$1.el('span', {className: 'contact-links brackets-wrap'});
      $$1.extend(links, ModContact.template(this.info.capcode));
      $$1.after(this.nodes.capcode, links);
      if ((moved = this.info.comment.match(/This thread was moved to >>>\/(\w+)\//)) && $$1.hasOwn(ModContact.moveNote, moved[1])) {
        const moveNote = $$1.el('div', {className: 'move-note'});
        $$1.extend(moveNote, ModContact.moveNote[moved[1]]);
        return $$1.add(this.nodes.post, moveNote);
      }
    },

    template(capcode) {
      return {innerHTML: "<a href=\"https://www.4chan.org/feedback\" target=\"_blank\">feedback</a>" + (ModContact.specific[capcode]()).innerHTML};
    },

    specific: {
      Mod() { return {innerHTML: " <a href=\"https://www.4chan-x.net/4chan-irc.html\" target=\"_blank\">IRC</a>"}; },
      Manager() { return ModContact.specific.Mod(); },
      Developer() { return {innerHTML: " <a href=\"https://github.com/4chan\" target=\"_blank\">github</a>"}; },
      Admin() { return {innerHTML: " <a href=\"https://twitter.com/hiroyuki_ni\" target=\"_blank\">twitter</a>"}; }
    },

    moveNote: {
      qa: {innerHTML: "Moving a thread to /qa/ does not imply mods will read it. If you wish to contact mods, use <a href=\"https://www.4chan.org/feedback\" target=\"_blank\">feedback</a><span class=\"invisible\"> (https://www.4chan.org/feedback)</span> or <a href=\"https://www.4chan-x.net/4chan-irc.html\" target=\"_blank\">IRC</a><span class=\"invisible\"> (https://www.4chan-x.net/4chan-irc.html)</span>."}
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const NormalizeURL = {
    init() {
      if (!Conf['Normalize URL']) { return; }

      let pathname = location.pathname.split(/\/+/);
      if (g.SITE.software === 'yotsuba') {
        switch (g.VIEW) {
          case 'thread':
            pathname[2] = 'thread';
            pathname = pathname.slice(0, 4);
            break;
          case 'index':
            pathname = pathname.slice(0, 3);
            break;
        }
      }
      pathname = pathname.join('/');
      if (location.pathname !== pathname) {
        return history.replaceState(history.state, '', `${location.protocol}//${location.host}${pathname}${location.hash}`);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var PostJumper = { 
    init() {
      if (!Conf['Unique ID and Capcode Navigation'] || !['index', 'thread'].includes(g.VIEW)) { return; }

      this.buttons = this.makeButtons();

      return Callbacks.Post.push({
        name: 'Post Jumper',
        cb:   this.node
      });
    },

    node() {
      if (this.isClone) {
        for (var buttons of $$('.postJumper', this.nodes.info)) {
          PostJumper.addListeners(buttons);
        }
        return;
      }

      if (this.nodes.uniqueIDRoot) {
        PostJumper.addButtons(this,'uniqueID');
      }

      if (this.nodes.capcode) {
        return PostJumper.addButtons(this,'capcode');
      }
    },

    addButtons(post,type) {
      const value = post.info[type];
      const buttons = PostJumper.buttons.cloneNode(true);
      $$1.extend(buttons.dataset, {type, value});
      $$1.after(post.nodes[type+(type === 'capcode' ? '' : 'Root')], buttons);
      return PostJumper.addListeners(buttons);
    },

    addListeners(buttons) {
      $$1.on(buttons.firstChild, 'click', PostJumper.buttonClick);
      return $$1.on(buttons.lastChild, 'click', PostJumper.buttonClick);
    },

    buttonClick() {
      let toJumper;
      const dir = $$1.hasClass(this, 'prev') ? -1 : 1;
      if (toJumper = PostJumper.find(this.parentNode, dir)) {
        return PostJumper.scroll(this.parentNode, toJumper);
      }
    },

    find(jumper, dir) {
      const {type, value} = jumper.dataset;
      const xpath = `span[contains(@class,\"postJumper\") and @data-value=\"${value}\" and @data-type=\"${type}\"]`;
      const axis = dir < 0 ? 'preceding' : 'following';
      let jumper2 = jumper;
      while (jumper2 = $$1.x(`${axis}::${xpath}`, jumper2)) {
        if (jumper2.getBoundingClientRect().height) { return jumper2; }
      }
      if (jumper2 = $$1.x(`(//${xpath})[${dir < 0 ? 'last()' : '1'}]`)) {
        if (jumper2.getBoundingClientRect().height) { return jumper2; }
      }
      while ((jumper2 = $$1.x(`${axis}::${xpath}`, jumper2)) && (jumper2 !== jumper)) {
        if (jumper2.getBoundingClientRect().height) { return jumper2; }
      }
      return null;
    },

    makeButtons() {
      const charPrev = '\u23EB';
      const charNext = '\u23EC';
      const classPrev = 'prev';
      const classNext = 'next';
      const span = $$1.el('span',
        {className: 'postJumper'});
      $$1.extend(span, {innerHTML: "<a href=\"javascript:;\" class=\"" + E(classPrev) + "\">" + E(charPrev) + "</a><a href=\"javascript:;\" class=\"" + E(classNext) + "\">" + E(charNext) + "</a>"});
      return span;
    },

    scroll(fromJumper, toJumper) {
      const prevPos = fromJumper.getBoundingClientRect().top;
      const destPos = toJumper.getBoundingClientRect().top;
      return window.scrollBy(0, destPos-prevPos);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const PSA = {
    init() {
      let el;
      if ((g.SITE.software === 'yotsuba') && (g.BOARD.ID === 'qa')) {
        const announcement = {innerHTML: "Stay in touch with your <a href=\"https://www.4chan-x.net/qa_friends.html\" target=\"_blank\" rel=\"noopener\">/qa/ friends</a>!"};
        el = $$1.el('div', {className: 'fcx-announcement'}, announcement);
        $$1.onExists(doc$1, '.boardBanner', banner => $$1.after(banner, el));
      }
      if ('samachan.org' in Conf['siteProperties'] && !Conf['PSAseen'].includes('samachan')) {
        el = $$1.el('span',
          {innerHTML: "<a href=\"https://sushigirl.us/yakuza/res/776.html\" target=\"_blank\" rel=\"noopener\">Looking for a new home?<br>Some former Samachan users are regrouping on SushiChan.</a><br>(a message from 4chan X)"});
        return Main$1.ready(function() {
          new Notice('info', el);
          Conf['PSAseen'].push('samachan');
          return $$1.set('PSAseen', Conf['PSAseen']);});
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var PSAHiding = {
    init() {
      if (!Conf['Announcement Hiding'] || !g.SITE.selectors.psa) { return; }
      $$1.addClass(doc$1, 'hide-announcement');
      $$1.onExists(doc$1, g.SITE.selectors.psa, this.setup);
      return $$1.ready(function() {
        if (!$$1(g.SITE.selectors.psa)) { return $$1.rmClass(doc$1, 'hide-announcement'); }
      });
    },

    setup(psa) {
      let btn, hr;
      PSAHiding.psa = psa;
      PSAHiding.text = psa.dataset.utc ?? psa.innerHTML;
      if (g.SITE.selectors.psaTop && (hr = $$1(g.SITE.selectors.psaTop)?.previousElementSibling) && (hr.nodeName === 'HR')) {
        PSAHiding.hr = hr;
      }
      PSAHiding.content = $$1.el('div');

      const entry = {
        el: $$1.el('a', {
          textContent: 'Show announcement',
          className: 'show-announcement',
          href: 'javascript:;'
        }
        ),
        order: 50,
        open() { return psa.hidden; }
      };
      Header$1.menu.addEntry(entry);
      $$1.on(entry.el, 'click', PSAHiding.toggle);

      PSAHiding.btn = (btn = $$1.el('a', {
        title:       'Mark announcement as read and hide.',
        className:   'hide-announcement-button',
        href:        'javascript:;',
        textContent: '➖︎',
      }
      ));
      $$1.on(btn, 'click', PSAHiding.toggle);
      if (psa.firstChild?.tagName === 'HR') {
        $$1.after(psa.firstChild, btn);
      } else {
        $$1.prepend(psa, btn);
      }

      PSAHiding.sync(Conf['hiddenPSAList']);
      $$1.rmClass(doc$1, 'hide-announcement');

      return $$1.sync('hiddenPSAList', PSAHiding.sync);
    },

    toggle() {
      const hide = $$1.hasClass(this, 'hide-announcement-button');
      const set = function(hiddenPSAList) {
        if (hide) {
          return hiddenPSAList[g.SITE.ID] = PSAHiding.text;
        } else {
          return delete hiddenPSAList[g.SITE.ID];
        }
      };
      set(Conf['hiddenPSAList']);
      PSAHiding.sync(Conf['hiddenPSAList']);
      return $$1.get('hiddenPSAList', Conf['hiddenPSAList'], function({hiddenPSAList}) {
        set(hiddenPSAList);
        return $$1.set('hiddenPSAList', hiddenPSAList);
      });
    },

    sync(hiddenPSAList) {
      const {psa, content} = PSAHiding;
      psa.hidden = (hiddenPSAList[g.SITE.ID] === PSAHiding.text);
      // Remove content to prevent autoplaying sounds from hidden announcements
      if (psa.hidden) {
        $$1.add(content, [...psa.childNodes]);
      } else {
        $$1.add(psa, [...content.childNodes]);
      }
      if (PSAHiding.hr) PSAHiding.hr.hidden = psa.hidden;
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var RemoveSpoilers = {
    init() {
      if (Conf['Reveal Spoilers']) {
        $$1.addClass(doc$1, 'reveal-spoilers');
      }

      if (!Conf['Remove Spoilers']) { return; }

      Callbacks.Post.push({
        name: 'Reveal Spoilers',
        cb:   this.node
      });

      if (g.VIEW === 'archive') {
        return $$1.ready(() => RemoveSpoilers.unspoiler($$1.id('arc-list')));
      }
    },

    node() {
      return RemoveSpoilers.unspoiler(this.nodes.comment);
    },

    unspoiler(el) {
      const spoilers = $$(g.SITE.selectors.spoiler, el);
      for (var spoiler of spoilers) {
        var span = $$1.el('span', {className: 'removed-spoiler'});
        $$1.replace(spoiler, span);
        $$1.add(span, [...spoiler.childNodes]);
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ThreadLinks = {
    init() {
      if ((g.VIEW !== 'index') || !Conf['Open Threads in New Tab']) { return; }

      Callbacks.Post.push({
        name: 'Thread Links',
        cb:   this.node
      });
      return Callbacks.CatalogThread.push({
        name: 'Thread Links',
        cb:   this.catalogNode
      });
    },

    node() {
      if (this.isReply || this.isClone) { return; }
      return ThreadLinks.process(this.nodes.reply);
    },

    catalogNode() {
      return ThreadLinks.process(this.nodes.thumb.parentNode);
    },

    process(link) {
      return link.target = '_blank';
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const Tinyboard = {
    init() {
      if (g.SITE.software !== 'tinyboard') { return; }
      if (g.VIEW === 'thread') {
        return Main$1.ready(() => $$1.global(function() {
          let base;
          let {boardID, threadID} = document.currentScript.dataset;
          threadID = +threadID;
          const form = document.querySelector('form[name="post"]');
          window.$(document).ajaxComplete(function(event, request, settings) {
            let postID;
            if (settings.url !== form.action) { return; }
            if (!(postID = +request.responseJSON?.id)) { return; }
            const detail = {boardID, threadID, postID};
            try {
              const {redirect, noko} = request.responseJSON;
              if (redirect && (originalNoko != null) && !originalNoko && !noko) {
                detail.redirect = redirect;
              }
            } catch (error) {}
            event = new CustomEvent('QRPostSuccessful', {bubbles: true, detail});
            return document.dispatchEvent(event);
          });
          var originalNoko = window.tb_settings?.ajax?.always_noko_replies;
          return (((base = window.tb_settings || (window.tb_settings = {}))).ajax || (base.ajax = {})).always_noko_replies = true;
        }
        , {boardID: g.BOARD.ID, threadID: g.THREADID}));
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var MarkNewIPs = {
    init() {
      if ((g.SITE.software !== 'yotsuba') || (g.VIEW !== 'thread') || !Conf['Mark New IPs']) { return; }
      return Callbacks.Thread.push({
        name: 'Mark New IPs',
        cb:   this.node
      });
    },

    node() {
      MarkNewIPs.ipCount = this.ipCount;
      MarkNewIPs.postCount = this.posts.keys.length;
      return $$1.on(d$1, 'ThreadUpdate', MarkNewIPs.onUpdate);
    },

    onUpdate(e) {
      let fullID;
      const {ipCount, postCount, newPosts, deletedPosts} = e.detail;
      if (ipCount == null) { return; }

      switch (ipCount - MarkNewIPs.ipCount) {
        case (postCount - MarkNewIPs.postCount) + deletedPosts.length:
          var i = MarkNewIPs.ipCount;
          for (fullID of newPosts) {
            MarkNewIPs.markNew(g.posts.get(fullID), ++i);
          }
          break;
        case -deletedPosts.length:
          for (fullID of newPosts) {
            MarkNewIPs.markOld(g.posts.get(fullID));
          }
          break;
      }
      MarkNewIPs.ipCount = ipCount;
      return MarkNewIPs.postCount = postCount;
    },

    markNew(post, ipCount) {
      const suffix = ((Math.floor(ipCount / 10)) % 10) === 1 ?
        'th'
      :
        ['st', 'nd', 'rd'][(ipCount % 10) - 1] || 'th'; // fuck switches
      const counter = $$1.el('span', {
        className: 'ip-counter',
        textContent: `(${ipCount})`
      }
      );
      post.nodes.nameBlock.title = `This is the ${ipCount}${suffix} IP in the thread.`;
      $$1.add(post.nodes.nameBlock, [$$1.tn(' '), counter]);
      return $$1.addClass(post.nodes.root, 'new-ip');
    },

    markOld(post) {
      post.nodes.nameBlock.title = 'Not the first post from this IP.';
      return $$1.addClass(post.nodes.root, 'old-ip');
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var ThreadStats = {
    postCount: 0,
    fileCount: 0,
    postIndex: 0,

    init() {
      let sc;
      if ((g.VIEW !== 'thread') || !Conf['Thread Stats']) { return; }

      if (Conf['Page Count in Stats']) {
        this[g.SITE.isPrunedByAge?.(g.BOARD) ? 'showPurgePos' : 'showPage'] = true;
      }

      const statsHTML = {innerHTML: "<span id=\"post-count\">?</span> / <span id=\"file-count\">?</span>" + ((Conf["IP Count in Stats"] && g.SITE.hasIPCount) ? " / <span id=\"ip-count\">?</span>" : "") + ((Conf["Page Count in Stats"]) ? " / <span id=\"page-count\">?</span>" : "")};
      let statsTitle = 'Posts / Files';
      if (Conf['IP Count in Stats'] && g.SITE.hasIPCount) { statsTitle += ' / IPs'; }
      if (Conf['Page Count in Stats']) { statsTitle += (this.showPurgePos ? ' / Purge Position' : ' / Page'); }

      if (Conf['Updater and Stats in Header']) {
        this.dialog = (sc = $$1.el('span', {
          id:    'thread-stats',
          title: statsTitle
        }
        ));
        $$1.extend(sc, statsHTML);
        Header$1.addShortcut('stats', sc, 200);

      } else {
        this.dialog = (sc = UI.dialog('thread-stats',
          {innerHTML: "<div class=\"move\" title=\"" + E(statsTitle) + "\">" + (statsHTML).innerHTML + "</div>"}));
        $$1.addClass(doc$1, 'float');
        $$1.ready(() => $$1.add(d$1.body, sc));
      }

      this.postCountEl = $$1('#post-count', sc);
      this.fileCountEl = $$1('#file-count', sc);
      this.ipCountEl   = $$1('#ip-count',   sc);
      this.pageCountEl = $$1('#page-count', sc);

      if (this.pageCountEl) { $$1.on(this.pageCountEl, 'click', ThreadStats.fetchPage); }

      return Callbacks.Thread.push({
        name: 'Thread Stats',
        cb:   this.node
      });
    },

    node() {
      ThreadStats.thread = this;
      ThreadStats.count();
      ThreadStats.update();
      ThreadStats.fetchPage();
      $$1.on(d$1, 'PostsInserted', () => $$1.queueTask(ThreadStats.onPostsInserted));
      return $$1.on(d$1, 'ThreadUpdate', ThreadStats.onUpdate);
    },

    count() {
      const {posts} = ThreadStats.thread;
      const n = posts.keys.length;
      for (let i = ThreadStats.postIndex, end = n; i < end; i++) {
        var post = posts.get(posts.keys[i]);
        if (!post.isFetchedQuote) {
          ThreadStats.postCount++;
          ThreadStats.fileCount += post.files.length;
        }
      }
      return ThreadStats.postIndex = n;
    },

    onUpdate(e) {
      if (e.detail[404]) { return; }
      const {postCount, fileCount} = e.detail;
      $$1.extend(ThreadStats, {postCount, fileCount});
      ThreadStats.postIndex = ThreadStats.thread.posts.keys.length;
      ThreadStats.update();
      if (ThreadStats.showPage && (ThreadStats.pageCountEl.textContent !== '1')) {
        return ThreadStats.fetchPage();
      }
    },

    onPostsInserted() {
      if (ThreadStats.thread.posts.keys.length <= ThreadStats.postIndex) { return; }
      ThreadStats.count();
      ThreadStats.update();
      if (ThreadStats.showPage && (ThreadStats.pageCountEl.textContent !== '1')) {
        return ThreadStats.fetchPage();
      }
    },

    update() {
      const {thread, postCountEl, fileCountEl, ipCountEl} = ThreadStats;
      postCountEl.textContent = ThreadStats.postCount;
      fileCountEl.textContent = ThreadStats.fileCount;
      // TOTO check if ipCountEl exists
      ipCountEl.textContent  = thread.ipCount ?? '?';
      postCountEl.classList.toggle('warning', (thread.postLimit && !thread.isSticky));
      return fileCountEl.classList.toggle('warning', (thread.fileLimit && !thread.isSticky));
    },

    fetchPage() {
      if (!ThreadStats.pageCountEl) { return; }
      clearTimeout(ThreadStats.timeout);
      if (ThreadStats.thread.isDead) {
        ThreadStats.pageCountEl.textContent = 'Dead';
        $$1.addClass(ThreadStats.pageCountEl, 'warning');
        return;
      }
      ThreadStats.timeout = setTimeout(ThreadStats.fetchPage, 2 * MINUTE);
      return $$1.whenModified(
        g.SITE.urls.threadsListJSON(ThreadStats.thread),
        'ThreadStats',
        ThreadStats.onThreadsLoad
      );
    },

    onThreadsLoad() {
      if (this.status === 200) {
        let page, thread;
        if (ThreadStats.showPurgePos) {
          let purgePos = 1;
          for (page of this.response) {
            for (thread of page.threads) {
              if (thread.no < ThreadStats.thread.ID) {
                purgePos++;
              }
            }
          }
          ThreadStats.pageCountEl.textContent = purgePos;
          return ThreadStats.pageCountEl.classList.toggle('warning', (purgePos === 1));
        } else {
          let nThreads;
          let i = (nThreads = 0);
          for (page of this.response) {
            nThreads += page.threads.length;
          }
          for (let pageNum = 0; pageNum < this.response.length; pageNum++) {
            page = this.response[pageNum];
            for (thread of page.threads) {
              if (thread.no === ThreadStats.thread.ID) {
                ThreadStats.pageCountEl.textContent = pageNum + 1;
                ThreadStats.pageCountEl.classList.toggle('warning', (i >= (nThreads - this.response[0].threads.length)));
                ThreadStats.lastPageUpdate = new Date(thread.last_modified * SECOND);
                ThreadStats.retry();
                return;
              }
              i++;
            }
          }
        }
      } else if (this.status === 304) {
        return ThreadStats.retry();
      }
    },

    retry() {
      // If thread data is stale (modification date given < time of last post), try again.
      // Skip this on vichan sites due to sage posts not updating modification time in threads.json.
      if (
        !ThreadStats.showPage ||
        (ThreadStats.pageCountEl.textContent === '1') ||
        !!g.SITE.threadModTimeIgnoresSage ||
        (ThreadStats.thread.posts.get(ThreadStats.thread.lastPost).info.date <= ThreadStats.lastPageUpdate)
      ) { return; }
      clearTimeout(ThreadStats.timeout);
      return ThreadStats.timeout = setTimeout(ThreadStats.fetchPage, 5 * SECOND);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const PassLink = {
    init() {
      if ((g.SITE.software !== 'yotsuba') || !Conf['Pass Link']) { return; }
      return Main$1.ready(this.ready);
    },

    ready() {
      let styleSelector;
      if (!(styleSelector = $$1.id('styleSelector'))) { return; }

      const passLink = $$1.el('span',
        {className: 'brackets-wrap pass-link-container'});
      $$1.extend(passLink, {innerHTML: "<a href=\"javascript:;\">4chan Pass</a>"});
      $$1.on(passLink.firstElementChild, 'click', () => window.open(`//sys.${location.hostname.split('.')[1]}.org/auth`,
        Date.now(),
        'width=500,height=280,toolbar=0'));
      return $$1.before(styleSelector.previousSibling, [passLink, $$1.tn('\u00A0\u00A0')]);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var QuoteInline = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Quote Inlining']) { return; }

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      return Callbacks.Post.push({
        name: 'Quote Inlining',
        cb:   this.node
      });
    },

    node() {
      const {process} = QuoteInline;
      const {isClone} = this;
      for (var link of this.nodes.quotelinks.concat([...this.nodes.backlinks], this.nodes.archivelinks)) {
        process(link, isClone);
      }
    },

    process(link, clone) {
      if (Conf['Quote Hash Navigation']) {
        if (!clone) { $$1.after(link, QuoteInline.qiQuote(link, $$1.hasClass(link, 'filtered'))); }
      }
      return $$1.on(link, 'click', QuoteInline.toggle);
    },

    qiQuote(link, hidden) {
      let name = "hashlink";
      if (hidden) { name += " filtered"; }
      return $$1.el('a', {
        className: name,
        textContent: '#',
        href: link.href
      }
      );
    },

    toggle(e) {
      if ($$1.modifiedClick(e)) { return; }

      const {boardID, threadID, postID} = Get$1.postDataFromLink(this);
      if (Conf['Inline Cross-thread Quotes Only'] && (g.VIEW === 'thread') && g.posts.get(`${boardID}.${postID}`)?.nodes.root.offsetParent) { return; } // exists and not hidden
      if ($$1.hasClass(doc$1, 'catalog-mode')) { return; }

      e.preventDefault();
      const quoter = Get$1.postFromNode(this);
      const {context} = quoter;
      if ($$1.hasClass(this, 'inlined')) {
        QuoteInline.rm(this, boardID, threadID, postID, context);
      } else {
        if ($$1.x(`ancestor::div[@data-full-i-d='${boardID}.${postID}']`, this)) { return; }
        QuoteInline.add(this, boardID, threadID, postID, context, quoter);
      }
      return this.classList.toggle('inlined');
    },

    findRoot(quotelink, isBacklink) {
      if (isBacklink) {
        return $$1.x('ancestor::*[parent::*[contains(@class,"post")]][1]', quotelink);
      } else {
        return $$1.x('ancestor-or-self::*[parent::blockquote][1]', quotelink);
      }
    },

    add(quotelink, boardID, threadID, postID, context, quoter) {
      let post;
      const isBacklink = $$1.hasClass(quotelink, 'backlink');
      const inline = $$1.el('div',
        {className: 'inline'});
      inline.dataset.fullID = `${boardID}.${postID}`;
      const root = QuoteInline.findRoot(quotelink, isBacklink);
      $$1.after(root, inline);

      const qroot = $$1.x('ancestor::*[contains(@class,"postContainer")][1]', root);

      $$1.addClass(qroot, 'hasInline');
      new Fetcher(boardID, threadID, postID, inline, quoter);

      if (!(
        (post = g.posts.get(`${boardID}.${postID}`)) &&
        (context.thread === post.thread)
      )) { return; }

      // Hide forward post if it's a backlink of a post in this thread.
      // Will only unhide if there's no inlined backlinks of it anymore.
      if (isBacklink && Conf['Forward Hiding']) {
        $$1.addClass(post.nodes.root, 'forwarded');
        post.forwarded++ || (post.forwarded = 1);
      }

      // Decrease the unread count if this post
      // is in the array of unread posts.
      if (!Unread.posts) { return; }
      return Unread.readSinglePost(post);
    },

    rm(quotelink, boardID, threadID, postID, context) {
      let el;
      let inlined;
      const isBacklink = $$1.hasClass(quotelink, 'backlink');
      // Select the corresponding inlined quote, and remove it.
      let root = QuoteInline.findRoot(quotelink, isBacklink);
      root = $$1.x(`following-sibling::div[@data-full-i-d='${boardID}.${postID}'][1]`, root);
      const qroot = $$1.x('ancestor::*[contains(@class,"postContainer")][1]', root);
      const {parentNode} = root;
      $$1.rm(root);
      $$1.event('PostsRemoved', null, parentNode);

      if (!$$1('.inline', qroot)) {
        $$1.rmClass(qroot, 'hasInline');
      }

      // Stop if it only contains text.
      if (!(el = root.firstElementChild)) { return; }

      // Dereference clone.
      const post = g.posts.get(`${boardID}.${postID}`);
      post.rmClone(el.dataset.clone);

      // Decrease forward count and unhide.
      if (Conf['Forward Hiding'] &&
        isBacklink &&
        (context.thread === g.threads.get(`${boardID}.${threadID}`)) &&
        !--post.forwarded) {
          delete post.forwarded;
          $$1.rmClass(post.nodes.root, 'forwarded');
        }

      // Repeat.
      while ((inlined = $$1('.inlined', el))) {
        ({boardID, threadID, postID} = Get$1.postDataFromLink(inlined));
        QuoteInline.rm(inlined, boardID, threadID, postID, context);
        $$1.rmClass(inlined, 'inlined');
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var QuoteBacklink = {
    // Backlinks appending need to work for:
    //  - previous, same, and following posts.
    //  - existing and yet-to-exist posts.
    //  - newly fetched posts.
    //  - in copies.
    // XXX what about order for fetched posts?
    //
    // First callback creates backlinks and add them to relevant containers.
    // Second callback adds relevant containers into posts.
    // This is is so that fetched posts can get their backlinks,
    // and that as much backlinks are appended in the background as possible.
    containers: dict(),
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Quote Backlinks']) { return; }

      // Add a class to differentiate when backlinks are at
      // the top (default) or bottom of a post
      if (this.bottomBacklinks = Conf['Bottom Backlinks']) {
        $$1.addClass(doc$1, 'bottom-backlinks');
      }

      Callbacks.Post.push({
        name: 'Quote Backlinking Part 1',
        cb:   this.firstNode
      });
      return Callbacks.Post.push({
        name: 'Quote Backlinking Part 2',
        cb:   this.secondNode
      });
    },
    firstNode() {
      if (this.isClone || !this.quotes.length || this.isRebuilt) { return; }
      const markYours = Conf['Mark Quotes of You'] && QuoteYou.isYou(this);
      const a = $$1.el('a', {
        href: g.SITE.Build.postURL(this.board.ID, this.thread.ID, this.ID),
        className: this.isHidden ? 'filtered backlink' : 'backlink',
        textContent: Conf['backlink'].replace(/%(?:id|%)/g, x => ({'%id': this.ID, '%%': '%'})[x])
      }
      );
      if (markYours) { $$1.add(a, QuoteYou.mark.cloneNode(true)); }
      for (var quote of this.quotes) {
        var post;
        var containers = [QuoteBacklink.getContainer(quote)];
        if ((post = g.posts.get(quote)) && post.nodes.backlinkContainer) {
          // Don't add OP clones when OP Backlinks is disabled,
          // as the clones won't have the backlink containers.
          for (var clone of post.clones) {
            containers.push(clone.nodes.backlinkContainer);
          }
        }
        for (var container of containers) {
          var link = a.cloneNode(true);
          var nodes = container.firstChild ? [$$1.tn(' '), link] : [link];
          if (Conf['Quote Previewing']) {
            $$1.on(link, 'mouseover', QuotePreview.mouseover);
          }
          if (Conf['Quote Inlining']) {
            $$1.on(link, 'click', QuoteInline.toggle);
            if (Conf['Quote Hash Navigation']) {
              var hash = QuoteInline.qiQuote(link, $$1.hasClass(link, 'filtered'));
              nodes.push(hash);
            }
          }
          $$1.add(container, nodes);
        }
      }
    },
    secondNode() {
      if (this.isClone && (this.origin.isReply || Conf['OP Backlinks'])) {
        this.nodes.backlinkContainer = $$1('.container', this.nodes.post);
        return;
      }
      // Don't backlink the OP.
      if (!this.isReply && !Conf['OP Backlinks']) { return; }
      const container = QuoteBacklink.getContainer(this.fullID);
      this.nodes.backlinkContainer = container;
      if (QuoteBacklink.bottomBacklinks) {
        return $$1.add(this.nodes.post, container);
      } else {
        return $$1.add(this.nodes.info, container);
      }
    },
    getContainer(id) {
      return this.containers[id] ||
        (this.containers[id] = $$1.el('span', {className: 'container'}));
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var QuoteCT = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Mark Cross-thread Quotes']) { return; }

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      // \u00A0 is nbsp
      this.mark = $$1.el('span', {
        textContent: '\u00A0(Cross-thread)',
        className:   'qmark-ct'
      }
      );
      return Callbacks.Post.push({
        name: 'Mark Cross-thread Quotes',
        cb:   this.node
      });
    },
    node() {
      // Stop there if it's a clone of a post in the same thread.
      if (this.isClone && (this.thread === this.context.thread)) { return; }

      const {board, thread} = this.context;
      for (var quotelink of this.nodes.quotelinks) {
        var {boardID, threadID} = Get$1.postDataFromLink(quotelink);
        if (!threadID) { continue; } // deadlink
        if (this.isClone) {
          $$1.rm($$1('.qmark-ct', quotelink));
        }
        if ((boardID === board.ID) && (threadID !== thread.ID)) {
          $$1.add(quotelink, QuoteCT.mark.cloneNode(true));
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var QuoteOP = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Mark OP Quotes']) { return; }

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      // \u00A0 is nbsp
      this.mark = $$1.el('span', {
        textContent: '\u00A0(OP)',
        className:   'qmark-op'
      }
      );
      return Callbacks.Post.push({
        name: 'Mark OP Quotes',
        cb:   this.node
      });
    },

    node() {
      // Stop there if it's a clone of a post in the same thread.
      let i, quotelink, quotes;
      if (this.isClone && (this.thread === this.context.thread)) { return; }
      // Stop there if there's no quotes in that post.
      if (!(quotes = this.quotes).length) { return; }
      const {quotelinks} = this.nodes;

      // rm (OP) from cross-thread quotes.
      if (this.isClone && quotes.includes(this.thread.fullID)) {
        i = 0;
        while ((quotelink = quotelinks[i++])) {
          $$1.rm($$1('.qmark-op', quotelink));
        }
      }

      const {fullID} = this.context.thread;
      // add (OP) to quotes quoting this context's OP.

      if (!quotes.includes(fullID)) { return; }
      i = 0;
      while ((quotelink = quotelinks[i++])) {
        var {boardID, postID} = Get$1.postDataFromLink(quotelink);
        if (`${boardID}.${postID}` === fullID) {
          $$1.add(quotelink, QuoteOP.mark.cloneNode(true));
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const QuoteStrikeThrough = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) ||
        (!Conf['Reply Hiding Buttons'] && (!Conf['Menu'] || !Conf['Reply Hiding Link']) && !Conf['Filter'])) { return; }

      return Callbacks.Post.push({
        name: 'Strike-through Quotes',
        cb:   this.node
      });
    },

    node() {
      if (this.isClone) { return; }
      for (var quotelink of this.nodes.quotelinks) {
        var {boardID, postID} = Get$1.postDataFromLink(quotelink);
        if (g.posts.get(`${boardID}.${postID}`)?.isHidden) {
          $$1.addClass(quotelink, 'filtered');
        }
      }
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Quotify = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || !Conf['Resurrect Quotes']) { return; }

      $$1.addClass(doc$1, 'resurrect-quotes');

      if (Conf['Comment Expansion']) {
        ExpandComment.callbacks.push(this.node);
      }

      return Callbacks.Post.push({
        name: 'Resurrect Quotes',
        cb:   this.node
      });
    },

    node() {
      if (this.isClone) {
        this.nodes.archivelinks = $$('a.linkify.quotelink', this.nodes.comment);
        return;
      }
      for (var link of $$('a.linkify', this.nodes.comment)) {
        Quotify.parseArchivelink.call(this, link);
      }
      for (var deadlink of $$('.deadlink', this.nodes.comment)) {
        Quotify.parseDeadlink.call(this, deadlink);
      }
    },

    parseArchivelink(link) {
      let m;
      if (!(m = link.pathname.match(/^\/([^/]+)\/thread\/S?(\d+)\/?$/))) { return; }
      if (['boards.4chan.org', 'boards.4channel.org'].includes(link.hostname)) { return; }
      const boardID  = m[1];
      const threadID = m[2];
      const postID   = link.hash.match(/^#[pq]?(\d+)$|$/)[1] || threadID;
      if (Redirect$1.to('post', {boardID, postID})) {
        $$1.addClass(link, 'quotelink');
        $$1.extend(link.dataset, {boardID, threadID, postID});
        return this.nodes.archivelinks.push(link);
      }
    },

    parseDeadlink(deadlink) {
      let a, m, post, postID;
      if ($$1.hasClass(deadlink.parentNode, 'prettyprint')) {
        // Don't quotify deadlinks inside code tags,
        // un-`span` them.
        // This won't be necessary once 4chan
        // stops quotifying inside code tags:
        // https://github.com/4chan/4chan-JS/issues/77
        Quotify.fixDeadlink(deadlink);
        return;
      }

      const quote = deadlink.textContent;
      if (!(postID = quote.match(/\d+$/)?.[0])) { return; }
      if (postID[0] === '0') {
        // Fix quotelinks that start with a `0`.
        Quotify.fixDeadlink(deadlink);
        return;
      }
      const boardID = (m = quote.match(/^>>>\/([a-z\d]+)/)) ?
        m[1]
      :
        this.board.ID;
      const quoteID = `${boardID}.${postID}`;

      if (post = g.posts.get(quoteID)) {
        if (!post.isDead) {
          // Don't (Dead) when quotifying in an archived post,
          // and we know the post still exists.
          a = $$1.el('a', {
            href:        g.SITE.Build.postURL(boardID, post.thread.ID, postID),
            className:   'quotelink',
            textContent: quote
          }
          );
        } else {
          // Replace the .deadlink span if we can redirect.
          a = $$1.el('a', {
            href:        g.SITE.Build.postURL(boardID, post.thread.ID, postID),
            className:   'quotelink deadlink',
            textContent: quote
          }
          );
          $$1.add(a, Post.deadMark.cloneNode(true));
          $$1.extend(a.dataset, {boardID, threadID: post.thread.ID, postID});
        }

      } else {
        const redirect = Redirect$1.to('thread', {boardID, threadID: 0, postID});
        const fetchable = Redirect$1.to('post', {boardID, postID});
        if (redirect || fetchable) {
          // Replace the .deadlink span if we can redirect or fetch the post.
          a = $$1.el('a', {
            href:        redirect || 'javascript:;',
            className:   'deadlink',
            textContent: quote
          }
          );
          $$1.add(a, Post.deadMark.cloneNode(true));
          if (fetchable) {
            // Make it function as a normal quote if we can fetch the post.
            $$1.addClass(a, 'quotelink');
            $$1.extend(a.dataset, {boardID, postID});
          }
        }
      }

      if (!this.quotes.includes(quoteID)) { this.quotes.push(quoteID); }

      if (!a) {
        $$1.add(deadlink, Post.deadMark.cloneNode(true));
        return;
      }

      $$1.replace(deadlink, a);
      if ($$1.hasClass(a, 'quotelink')) {
        return this.nodes.quotelinks.push(a);
      }
    },

    fixDeadlink(deadlink) {
      let el;
      if (!(el = deadlink.previousSibling) || (el.nodeName === 'BR')) {
        const green = $$1.el('span',
          {className: 'quote'});
        $$1.before(deadlink, green);
        $$1.add(green, deadlink);
      }
      return $$1.replace(deadlink, [...deadlink.childNodes]);
    }
  };

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  const Polyfill = {
    init() {
      this.toBlob();
      $$1.global(this.toBlob);
      if (!Element.prototype.matches) { Element.prototype.matches = Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector; }
    },
    // This function is converted to a string and then put in a script tag.
    // Do NOT shorten to `toBlob() {`.
    toBlob: function() {
      if (HTMLCanvasElement.prototype.toBlob) { return; }
      HTMLCanvasElement.prototype.toBlob = function(cb, type, encoderOptions) {
        const url = this.toDataURL(type, encoderOptions);
        const data = atob(url.slice(url.indexOf(',')+1));
        // DataUrl to Binary code from Aeosynth's 4chan X repo
        const l = data.length;
        const ui8a = new Uint8Array(l);
        for (let i = 0, end = l; i < end; i++) {
          ui8a[i] = data.charCodeAt(i);
        }
        return cb(new Blob([ui8a], {type: type || 'image/png'}));
      };
    }
  };

  // import Test from "../General/Test";

  /*
   * decaffeinate suggestions:
   * DS102: Remove unnecessary code created because of implicit returns
   * DS104: Avoid inline assignments
   * DS205: Consider reworking code to avoid use of IIFEs
   * DS207: Consider shorter variations of null checks
   * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
   */
  var Main = {
    init() {
      // XXX dwb userscripts extension reloads scripts run at document-start when replaceState/pushState is called.
      // XXX Firefox reinjects WebExtension content scripts when extension is updated / reloaded.
      let key;
      try {
        let w = window;
        if (platform === 'crx') { w = (w.wrappedJSObject || w); }
        if (`${meta.name} antidup` in w) { return; }
        w[`${meta.name} antidup`] = true;
      } catch (error) {}

      // Don't run inside ad iframes.
      try {
        if (window.frameElement && ['', 'about:blank'].includes(window.frameElement.src)) { return; }
      } catch (error1) {}

      // Detect multiple copies of 4chan X
      if (doc$1 && $$1.hasClass(doc$1, 'fourchan-x')) { return; }
      $$1.asap(docSet, function() {
        $$1.addClass(doc$1, 'fourchan-x', 'seaweedchan');
        if ($$1.engine) { return $$1.addClass(doc$1, `ua-${$$1.engine}`); }
      });
      $$1.on(d$1, '4chanXInitFinished', function() {
        if (Main.expectInitFinished) {
          return delete Main.expectInitFinished;
        } else {
          new Notice('error', 'Error: Multiple copies of 4chan X are enabled.');
          return $$1.addClass(doc$1, 'tainted');
        }
      });

      // Detect "mounted" event from Kissu
      var mountedCB = function() {
        d$1.removeEventListener('mounted', mountedCB, true);
        Main.isMounted = true;
        return Main.mountedCBs.map((cb) =>
          (() => { try {
            return cb();
          } catch (error2) {} })());
      };
      d$1.addEventListener('mounted', mountedCB, true);

      // Flatten default values from Config into Conf
      var flatten = function(parent, obj) {
        if (obj instanceof Array) {
          Conf[parent] = dict.clone(obj[0]);
        } else if (typeof obj === 'object') {
          for (var key in obj) {
            var val = obj[key];
            flatten(key, val);
          }
        } else { // string or number
          Conf[parent] = obj;
        }
      };

      // XXX Remove document-breaking ad
      if (['boards.4chan.org', 'boards.4channel.org'].includes(location.hostname)) {
        $$1.global(function() {
          const fromCharCode0 = String.fromCharCode;
          return String.fromCharCode = function() {
            if (document.body) {
              String.fromCharCode = fromCharCode0;
            } else if (document.currentScript && !document.currentScript.src) {
              throw Error();
            }
            return fromCharCode0.apply(this, arguments);
          };
        });
        $$1.asap(docSet, () => $$1.onExists(doc$1, 'iframe[srcdoc]', $$1.rm));
      }

      flatten(null, Config);

      for (var db of DataBoard.keys) {
        Conf[db] = dict();
      }
      Conf['customTitles'] = dict.clone({'4chan.org': {boards: {'qa': {'boardTitle': {orig: '/qa/ - Question & Answer', title: '/qa/ - 2D/Random'}}}}});
      Conf['boardConfig'] = {boards: dict()};
      Conf['archives'] = Redirect$1.archives;
      Conf['selectedArchives'] = dict();
      Conf['cooldowns'] = dict();
      Conf['Index Sort'] = dict();
      for (let i = 0; i < 2; i++) { Conf[`Last Long Reply Thresholds ${i}`] = dict(); }
      Conf['siteProperties'] = dict();

      // XXX old key names
      Conf['Except Archives from Encryption'] = false;
      Conf['JSON Navigation'] = true;
      Conf['Oekaki Links'] = true;
      Conf['Show Name and Subject'] = false;
      Conf['QR Shortcut'] = true;
      Conf['Bottom QR Link'] = true;
      Conf['Toggleable Thread Watcher'] = true;
      Conf['siteSoftware'] = '';
      Conf['Use Faster Image Host'] = 'true';
      Conf['Captcha Fixes'] = true;
      Conf['captchaServiceDomain'] = '';
      Conf['captchaServiceKey'] = dict();

      // Enforce JS whitelist
      if (
        /\.4chan(?:nel)?\.org$/.test(location.hostname) &&
        !SW.yotsuba.regexp.pass.test(location.href) &&
        !SW.yotsuba.regexp.captcha.test(location.href) &&
        !$$('script:not([src])', d$1).filter(s => /this\[/.test(s.textContent)).length
      ) {
        ($$1.getSync || $$1.get)({'jsWhitelist': Conf['jsWhitelist']}, ({jsWhitelist}) => $$1.addCSP(`script-src ${jsWhitelist.replace(/^#.*$/mg, '').replace(/[\s;]+/g, ' ').trim()}`));
      }

      // Get saved values as items
      const items = dict();
      for (key in Conf) { items[key] = undefined; }
      items['previousversion'] = undefined;
      return ($$1.getSync || $$1.get)(items, function(items) {
        if (!$$1.perProtocolSettings && /\.4chan(?:nel)?\.org$/.test(location.hostname) && (items['Redirect to HTTPS'] ?? Conf['Redirect to HTTPS']) && (location.protocol !== 'https:')) {
          location.replace('https://' + location.host + location.pathname + location.search + location.hash);
          return;
        }
        return $$1.asap(docSet, function() {

          // Don't hide the local storage warning behind a settings panel.
          if ($$1.cantSet) ; else if ((items.previousversion == null)) {
            Main.isFirstRun = true;
            Main.ready(function() {
              $$1.set('previousversion', g.VERSION);
              return Settings.open();
            });

          // Migrate old settings
          } else if (items.previousversion !== g.VERSION) {
            Main.upgrade(items);
          }

          // Combine default values with saved values
          for (key in Conf) {
            var val = Conf[key];
            Conf[key] = items[key] ?? val;
          }

          return Site.init(Main.initFeatures);
        });
      });
    },

    upgrade(items) {
      const {previousversion} = items;
      const changes = Settings.upgrade(items, previousversion);
      items.previousversion = (changes.previousversion = g.VERSION);
      return $$1.set(changes, function() {
        if (items['Show Updated Notifications'] ?? true) {
          const el = $$1.el('span',
            { innerHTML: `${meta.name} has been updated to <a href="${meta.changelog}" target="_blank">version ${g.VERSION}</a>.` });
          return new Notice('info', el, 15);
        }
      });
    },

    parseURL(site=g.SITE, url=location) {
      const r = {};

      if (!site) { return r; }
      r.siteID = site.ID;

      if (site.isBoardlessPage?.(url)) { return r; }
      const pathname = url.pathname.split(/\/+/);
      r.boardID = pathname[1];

      if (site.isFileURL(url)) {
        r.VIEW = 'file';
      } else if (site.isAuxiliaryPage?.(url)) ; else if (['thread', 'res'].includes(pathname[2])) {
        r.VIEW = 'thread';
        r.threadID = (r.THREADID = +pathname[3].replace(/\.\w+$/, ''));
      } else if ((pathname[2] === 'archive') && (pathname[3] === 'res')) {
        r.VIEW = 'thread';
        r.threadID = (r.THREADID = +pathname[4].replace(/\.\w+$/, ''));
        r.threadArchived = true;
      } else if (/^(?:catalog|archive)(?:\.\w+)?$/.test(pathname[2])) {
        r.VIEW = pathname[2].replace(/\.\w+$/, '');
      } else if (/^(?:index|\d*)(?:\.\w+)?$/.test(pathname[2])) {
        r.VIEW = 'index';
      }
      return r;
    },

    initFeatures() {
      $$1.global(function() {
        document.documentElement.classList.add('js-enabled');
        return window.FCX = {};});
      Main.jsEnabled = $$1.hasClass(doc$1, 'js-enabled');

      // XXX https://bugs.chromium.org/p/chromium/issues/detail?id=920638
      $$1.ajaxPageInit?.();

      $$1.extend(g, Main.parseURL());
      if (g.boardID) { g.BOARD = new Board(g.boardID); }

      if (!g.VIEW) {
        g.SITE.initAuxiliary?.();
        return;
      }

      if (g.VIEW === 'file') {
        $$1.asap((() => d$1.readyState !== 'loading'), function() {
          let video;
          if ((g.SITE.software === 'yotsuba') && Conf['404 Redirect'] && g.SITE.is404?.()) {
            const pathname = location.pathname.split(/\/+/);
            return Redirect$1.navigate('file', {
              boardID:  g.BOARD.ID,
              filename: pathname[pathname.length - 1]
            });
          } else if (video = $$1('video')) {
            if (Conf['Volume in New Tab']) {
              Volume.setup(video);
            }
            if (Conf['Loop in New Tab']) {
              video.loop = true;
              video.controls = false;
              video.play();
              return ImageCommon.addControls(video);
            }
          }
        });
        return;
      }

      g.threads = new SimpleDict();
      g.posts   = new SimpleDict();

      // set up CSS when <head> is completely loaded
      $$1.onExists(doc$1, 'body', Main.initStyle);

      // c.time 'All initializations'
      for (var [name, feature] of Main.features) {
        if (g.SITE.disabledFeatures && g.SITE.disabledFeatures.includes(name)) { continue; }
        // c.time "#{name} initialization"
        try {
          feature.init();
        } catch (err) {
          Main.handleErrors({
            message: `\"${name}\" initialization crashed.`,
            error: err
          });
        }
      }
        // finally
        //   c.timeEnd "#{name} initialization"

      // c.timeEnd 'All initializations'

      return $$1.ready(Main.initReady);
    },

    initStyle() {
      if (!Main.isThisPageLegit()) { return; }

      // disable the mobile layout
      const mobileLink = $$1('link[href*=mobile]', d$1.head);
      if (mobileLink) mobileLink.disabled = true;
      doc$1.dataset.host = location.host;
      $$1.addClass(doc$1, `sw-${g.SITE.software}`);
      $$1.addClass(doc$1, g.VIEW === 'thread' ? 'thread-view' : g.VIEW);
      $$1.onExists(doc$1, '.ad-cnt, .adg-rects > .desktop', ad => $$1.onExists(ad, 'img, iframe', () => $$1.addClass(doc$1, 'ads-loaded')));
      if (Conf['Autohiding Scrollbar']) { $$1.addClass(doc$1, 'autohiding-scrollbar'); }
      $$1.ready(function() {
        if ((d$1.body.clientHeight > doc$1.clientHeight) && ((window.innerWidth === doc$1.clientWidth) !== Conf['Autohiding Scrollbar'])) {
          Conf['Autohiding Scrollbar'] = !Conf['Autohiding Scrollbar'];
          $$1.set('Autohiding Scrollbar', Conf['Autohiding Scrollbar']);
          return $$1.toggleClass(doc$1, 'autohiding-scrollbar');
        }
      });
      $$1.addStyle(CSS.sub(CSS.boards), 'fourchanx-css');
      Main.bgColorStyle = $$1.el('style', {id: 'fourchanx-bgcolor-css'});

      let keyboard = false;
      $$1.on(d$1, 'mousedown', () => keyboard = false);
      $$1.on(d$1, 'keydown', function(e) { if (e.keyCode === 9) { return keyboard = true; } }); // tab
      window.addEventListener('focus', (() => doc$1.classList.toggle('keyboard-focus', keyboard)), true);

      return Main.setClass();
    },

    setClass() {
      let mainStyleSheet, style, styleSheets;
      const knownStyles = ['yotsuba', 'yotsuba-b', 'futaba', 'burichan', 'photon', 'tomorrow', 'spooky'];

      if ((g.SITE.software === 'yotsuba') && (g.VIEW === 'catalog')) {
        if (mainStyleSheet = $$1.id('base-css')) {
          style = mainStyleSheet.href.match(/catalog_(\w+)/)?.[1].replace('_new', '').replace(/_+/g, '-');
          if (knownStyles.includes(style)) {
            $$1.addClass(doc$1, style);
            return;
          }
        }
      }

      style = (mainStyleSheet = (styleSheets = null));

      const setStyle = function() {
        // Use preconfigured CSS for 4chan's default themes.
        if (g.SITE.software === 'yotsuba') {
          $$1.rmClass(doc$1, style);
          style = null;
          for (var styleSheet of styleSheets) {
            if (styleSheet.href === mainStyleSheet?.href) {
              style = styleSheet.title.toLowerCase().replace('new', '').trim().replace(/\s+/g, '-');
              if (style === '_special') { style = styleSheet.href.match(/[a-z]*(?=[^/]*$)/)[0]; }
              if (!knownStyles.includes(style)) { style = null; }
              break;
            }
          }
          if (style) {
            $$1.addClass(doc$1, style);
            $$1.rm(Main.bgColorStyle);
            return;
          }
        }

        // Determine proper dialog background color for other themes.
        const div = g.SITE.bgColoredEl();
        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        $$1.add(d$1.body, div);
        let bgColor = window.getComputedStyle(div).backgroundColor;
        $$1.rm(div);
        const rgb = bgColor.match(/[\d.]+/g);
        // Use body background if reply background is transparent
        if (!/^rgb\(/.test(bgColor)) {
          const s = window.getComputedStyle(d$1.body);
          bgColor = `${s.backgroundColor} ${s.backgroundImage} ${s.backgroundRepeat} ${s.backgroundPosition}`;
        }
        let css = `\
.dialog, .suboption-list > div:last-of-type, :root.catalog-hover-expand .catalog-container:hover > .post {
  background: ${bgColor};
}
.unread-mark-read {
  background-color: rgba(${rgb.slice(0, 3).join(', ')}, ${0.5*(rgb[3] || 1)});
}\
`;
        if ($$1.luma(rgb) < 100) {
          css += `\
.watch-thread-link {
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(200,200,200)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>");
}\
`;
        }
        Main.bgColorStyle.textContent = css;
        return $$1.after($$1.id('fourchanx-css'), Main.bgColorStyle);
      };

      $$1.onExists(d$1.head, g.SITE.selectors.styleSheet, function(el) {
        mainStyleSheet = el;
        if (g.SITE.software === 'yotsuba') {
          styleSheets = $$('link[rel="alternate stylesheet"]', d$1.head);
        }
        new MutationObserver(setStyle).observe(mainStyleSheet, {
          attributes: true,
          attributeFilter: ['href']
        });
        $$1.on(mainStyleSheet, 'load', setStyle);
        return setStyle();
      });
      if (!mainStyleSheet) {
        for (var styleSheet of $$('link[rel="stylesheet"]', d$1.head)) {
          $$1.on(styleSheet, 'load', setStyle);
        }
        return setStyle();
      }
    },

    initReady() {
      if (g.SITE.is404?.()) {
        if (g.VIEW === 'thread') {
          ThreadWatcher$1.set404(g.BOARD.ID, g.THREADID, function() {
            if (Conf['404 Redirect']) {
              return Redirect$1.navigate('thread', {
                boardID:  g.BOARD.ID,
                threadID: g.THREADID,
                postID:   +location.hash.match(/\d+/)
              } // post number or 0
              , `/${g.BOARD}/`);
            }
          });
        }

        return;
      }

      if (g.SITE.isIncomplete?.()) {
        const msg = $$1.el('div',
          {innerHTML: 'The page didn&#039;t load completely.<br>Some features may not work unless you <a href="javascript:;">reload</a>.'});
        $$1.on($$1('a', msg), 'click', () => location.reload());
        new Notice('warning', msg);
      }

      // Parse HTML or skip it and start building from JSON.
      if (g.VIEW === 'catalog') {
        return Main.initCatalog();
      } else if (!Index$1.enabled) {
        if (g.SITE.awaitBoard) {
          return g.SITE.awaitBoard(Main.initThread);
        } else {
          return Main.initThread();
        }
      } else {
        Main.expectInitFinished = true;
        return $$1.event('4chanXInitFinished');
      }
    },

    initThread() {
      let board;
      const s = g.SITE.selectors;
      if (board = $$1((s.boardFor?.[g.VIEW] || s.board))) {
        const threads = [];
        const posts   = [];
        const errors  = [];

        try {
          g.SITE.preParsingFixes?.(board);
        } catch (error) {}

        Main.addThreadsObserver = new MutationObserver(Main.addThreads);
        Main.addPostsObserver   = new MutationObserver(Main.addPosts);
        Main.addThreadsObserver.observe(board, {childList: true});

        Main.parseThreads($$(s.thread, board), threads, posts, errors);
        if (errors.length) { Main.handleErrors(errors); }

        if (g.VIEW === 'thread') {
          if (g.threadArchived) {
            threads[0].isArchived = true;
            threads[0].kill();
          }
          g.SITE.parseThreadMetadata?.(threads[0]);
        }

        Main.callbackNodes('Thread', threads);
        return Main.callbackNodesDB('Post', posts, function() {
          for (var post of posts) { QuoteThreading.insert(post); }
          Main.expectInitFinished = true;
          return $$1.event('4chanXInitFinished');
        });

      } else {
        Main.expectInitFinished = true;
        return $$1.event('4chanXInitFinished');
      }
    },

    parseThreads(threadRoots, threads, posts, errors) {
      for (var threadRoot of threadRoots) {
        var boardObj = (() => {
          let boardID;
          if (boardID = threadRoot.dataset.board) {
          boardID = encodeURIComponent(boardID);
          return g.boards[boardID] || new Board(boardID);
        } else {
          return g.BOARD;
        }
        })();
        var threadID = +threadRoot.id.match(/\d*$/)[0];
        if (!threadID || boardObj.threads.get(threadID)?.nodes.root) { return; }
        var thread = new Thread(threadID, boardObj);
        thread.nodes.root = threadRoot;
        threads.push(thread);
        var postRoots = $$(g.SITE.selectors.postContainer, threadRoot);
        if (g.SITE.isOPContainerThread) { postRoots.unshift(threadRoot); }
        Main.parsePosts(postRoots, thread, posts, errors);
        Main.addPostsObserver.observe(threadRoot, {childList: true});
      }
    },

    parsePosts(postRoots, thread, posts, errors) {
      for (var postRoot of postRoots) {
        if (!(postRoot.dataset.fullID && g.posts.get(postRoot.dataset.fullID)) && $$1(g.SITE.selectors.comment, postRoot)) {
          try {
            posts.push(new Post(postRoot, thread, thread.board));
          } catch (err) {
            // Skip posts that we failed to parse.
            errors.push({
              message: `Parsing of Post No.${postRoot.id.match(/\d+/)} failed. Post will be skipped.`,
              error: err,
              html: postRoot.outerHTML
            });
          }
        }
      }
    },

    addThreads(records) {
      const threadRoots = [];
      for (var record of records) {
        for (var node of record.addedNodes) {
          if ((node.nodeType === Node.ELEMENT_NODE) && node.matches(g.SITE.selectors.thread)) {
            threadRoots.push(node);
          }
        }
      }
      if (!threadRoots.length) { return; }
      const threads = [];
      const posts   = [];
      const errors  = [];
      Main.parseThreads(threadRoots, threads, posts, errors);
      if (errors.length) { Main.handleErrors(errors); }
      Main.callbackNodes('Thread', threads);
      return Main.callbackNodesDB('Post', posts, () => $$1.event('PostsInserted', null, records[0].target));
    },

    addPosts(records) {
      let thread;
      const threads   = [];
      const threadsRM = [];
      const posts     = [];
      const errors    = [];
      for (var record of records) {
        thread = Get$1.threadFromRoot(record.target);
        var postRoots = [];
        for (var node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.matches(g.SITE.selectors.postContainer) || (node = $$1(g.SITE.selectors.postContainer, node))) {
              postRoots.push(node);
            }
          }
        }
        var n = posts.length;
        Main.parsePosts(postRoots, thread, posts, errors);
        if ((posts.length > n) && !threads.includes(thread)) {
          threads.push(thread);
        }
        var anyRemoved = false;
        for (var el of record.removedNodes) {
          if ((Get$1.postFromRoot(el)?.nodes.root === el) && !doc$1.contains(el)) {
            anyRemoved = true;
            break;
          }
        }
        if (anyRemoved && !threadsRM.includes(thread)) {
          threadsRM.push(thread);
        }
      }
      if (errors.length) { Main.handleErrors(errors); }
      return Main.callbackNodesDB('Post', posts, function() {
        for (thread of threads) {
          $$1.event('PostsInserted', null, thread.nodes.root);
        }
        for (thread of threadsRM) {
          $$1.event('PostsRemoved', null, thread.nodes.root);
        }
      });
    },

    initCatalog() {
      let board;
      const s = g.SITE.selectors.catalog;
      if (s && (board = $$1(s.board))) {
        const threads = [];
        const errors  = [];

        Main.addCatalogThreadsObserver = new MutationObserver(Main.addCatalogThreads);
        Main.addCatalogThreadsObserver.observe(board, {childList: true});

        Main.parseCatalogThreads($$(s.thread, board), threads, errors);
        if (errors.length) { Main.handleErrors(errors); }

        Main.callbackNodes('CatalogThreadNative', threads);
      }

      Main.expectInitFinished = true;
      return $$1.event('4chanXInitFinished');
    },

    parseCatalogThreads(threadRoots, threads, errors) {
      for (var threadRoot of threadRoots) {
        try {
          var thread = new CatalogThreadNative(threadRoot);
          if (thread.thread.catalogViewNative?.nodes.root !== threadRoot) {
            thread.thread.catalogViewNative = thread;
            threads.push(thread);
          }
        } catch (err) {
          // Skip threads that we failed to parse.
          errors.push({
            message: `Parsing of Catalog Thread No.${(threadRoot.dataset.id || threadRoot.id).match(/\d+/)} failed. Thread will be skipped.`,
            error: err,
            html: threadRoot.outerHTML
          });
        }
      }
    },

    addCatalogThreads(records) {
      const threadRoots = [];
      for (var record of records) {
        for (var node of record.addedNodes) {
          if ((node.nodeType === Node.ELEMENT_NODE) && node.matches(g.SITE.selectors.catalog.thread)) {
            threadRoots.push(node);
          }
        }
      }
      if (!threadRoots.length) { return; }
      const threads = [];
      const errors  = [];
      Main.parseCatalogThreads(threadRoots, threads, errors);
      if (errors.length) { Main.handleErrors(errors); }
      return Main.callbackNodes('CatalogThreadNative', threads);
    },

    callbackNodes(klass, nodes) {
      let node;
      let i = 0;
      const cb = Callbacks[klass];
      while ((node = nodes[i++])) {
        cb.execute(node);
      }
    },

    callbackNodesDB(klass, nodes, cb) {
      let i   = 0;
      const cbs = Callbacks[klass];
      const fn  = function() {
        let node;
        if (!(node = nodes[i])) { return false; }
        cbs.execute(node);
        return ++i % 250;
      };

      var softTask = function() {
        while (fn()) {
          continue;
        }
        if (!nodes[i]) {
          if (cb) { cb(); }
          return;
        }
        return setTimeout(softTask, 0);
      };

      return softTask();
    },

    handleErrors(errors) {
      // Detect conflicts with 4chan X v2
      let error;
      if (d$1.body && $$1.hasClass(d$1.body, 'fourchan_x') && !$$1.hasClass(doc$1, 'tainted')) {
        new Notice('error', 'Error: Multiple copies of 4chan X are enabled.');
        $$1.addClass(doc$1, 'tainted');
      }

      // Detect conflicts with native extension
      if (g.SITE.testNativeExtension && !$$1.hasClass(doc$1, 'tainted')) {
        const {enabled} = g.SITE.testNativeExtension();
        if (enabled) {
          $$1.addClass(doc$1, 'tainted');
          if (Conf['Disable Native Extension'] && !Main.isFirstRun) {
            const msg = $$1.el('div',
              { innerHTML: 'Failed to disable the native extension. You may need to <a href="' + E(meta.faq) + '#blocking-native-extension" target="_blank">block it</a>.' });
            new Notice('error', msg);
          }
        }
      }

      if (!(errors instanceof Array)) {
        error = errors;
      } else if (errors.length === 1) {
        error = errors[0];
      }
      if (error) {
        new Notice('error', Main.parseError(error, Main.reportLink([error])), 15);
        return;
      }

      const div = $$1.el('div', {
        innerHTML:
          `${errors.length} errors occurred.${Main.reportLink(errors).innerHTML} [<a href="javascript:;">show</a>]`
      });
      $$1.on(div.lastElementChild, 'click', function () {
        return [this.textContent, logs.hidden] = this.textContent === 'show' ? ['hide', false] : ['show', true];
      });

      var logs = $$1.el('div',
        {hidden: true});
      for (error of errors) {
        $$1.add(logs, Main.parseError(error));
      }

      return new Notice('error', [div, logs], 30);
    },

    parseError(data, reportLink) {
      c.error(data.message, data.error.stack);
      const message = $$1.el('div',
        { innerHTML: E(data.message) + ((reportLink) ? (reportLink).innerHTML : "") });
      const error = $$1.el('div',
        {textContent: `${data.error.name || 'Error'}: ${data.error.message || 'see console for details'}`});
      const lines = data.error.stack?.match(/\d+(?=:\d+\)?$)/mg)?.join().replace(/^/, ' at ') || '';
      const context = $$1.el('div',
        { textContent: `(${meta.name} ${meta.fork} v${g.VERSION} ${platform} on ${$$1.engine}${lines})` });
      return [message, error, context];
    },

    reportLink(errors) {
      let info;
      const data = errors[0];
      let title  = data.message;
      if (errors.length > 1) { title += ` (+${errors.length - 1} other errors)`; }
      let details = '';
      const addDetails = function(text) {
        if (encodeURIComponent(title + details + text + '\n').length <= meta.newIssueMaxLength - meta.newIssue.replace(/%(title|details)/, '').length) {
          return details += text + '\n';
        }
      };
      addDetails(`\
[Please describe the steps needed to reproduce this error.]

Script: ${meta.name} ${meta.fork} v${g.VERSION} ${platform}
URL: ${location.href}
User agent: ${navigator.userAgent}\
`
      );
      if ((platform === 'userscript') && (info = (() => {
        if (typeof GM !== 'undefined' && GM !== null) { return GM.info; } else { if (typeof GM_info !== 'undefined' && GM_info !== null) { return GM_info; }
    }
      })())) {
        addDetails(`Userscript manager: ${info.scriptHandler} ${info.version}`);
      }
      addDetails('\n' + data.error);
      if (data.error.stack) { addDetails(data.error.stack.replace(data.error.toString(), '').trim()); }
      if (data.html) { addDetails('\n`' + data.html + '`'); }
      details = details.replace(/file:\/{3}.+\//g, ''); // Remove local file paths
      const url = meta.newIssue.replace('%title', encodeURIComponent(title)).replace('%details', encodeURIComponent(details));
      return { innerHTML: `<span class="report-error"> [<a href="${url}" target="_blank">report</a>]</span>` };
    },

    isThisPageLegit() {
      // not 404 error page or similar.
      if (!('thisPageIsLegit' in Main)) {
        Main.thisPageIsLegit = g.SITE.isThisPageLegit ?
          g.SITE.isThisPageLegit()
        :
          !/^[45]\d\d\b/.test(document.title) && !/\.(?:json|rss)$/.test(location.pathname);
      }
      return Main.thisPageIsLegit;
    },

    ready(cb) {
      return $$1.ready(function() {
        if (Main.isThisPageLegit()) { return cb(); }
      });
    },

    mounted(cb) {
      if (Main.isMounted) {
        return cb();
      } else {
        return Main.mountedCBs.push(cb);
      }
    },

    mountedCBs: [],

    features: [
      ['Polyfill',                  Polyfill],
      ['Board Configuration',       BoardConfig],
      ['Normalize URL',             NormalizeURL],
      ['Delay Redirect on Post',    PostRedirect],
      ['Captcha Configuration',     CaptchaReplace],
      ['Image Host Rewriting',      ImageHost],
      ['Redirect',                  Redirect$1],
      ['Header',                    Header$1],
      ['Catalog Links',             CatalogLinks],
      ['Settings',                  Settings],
      ['Index Generator',           Index$1],
      ['Disable Autoplay',          AntiAutoplay],
      ['Announcement Hiding',       PSAHiding],
      ['Fourchan thingies',         Fourchan],
      ['Tinyboard Glue',            Tinyboard],
      ['Color User IDs',            IDColor],
      ['Highlight by User ID',      IDHighlight],
      ['Count Posts by ID',         IDPostCount],
      ['Custom CSS',                CustomCSS],
      ['Thread Links',              ThreadLinks],
      ['Linkify',                   Linkify],
      ['Reveal Spoilers',           RemoveSpoilers],
      ['Resurrect Quotes',          Quotify],
      ['Filter',                    Filter],
      ['Thread Hiding Buttons',     ThreadHiding],
      ['Reply Hiding Buttons',      PostHiding],
      ['Recursive',                 Recursive],
      ['Strike-through Quotes',     QuoteStrikeThrough],
      ['Quick Reply Personas',      QR.persona],
      ['Quick Reply',               QR],
      ['Cooldown',                  QR.cooldown],
      ['Post Jumper',               PostJumper],
      ['Pass Link',                 PassLink],
      ['Menu',                      Menu],
      ['Index Generator (Menu)',    Index$1.menu],
      ['Report Link',               ReportLink],
      ['Copy Text Link',            CopyTextLink],
      ['Thread Hiding (Menu)',      ThreadHiding.menu],
      ['Reply Hiding (Menu)',       PostHiding.menu],
      ['Delete Link',               DeleteLink],
      ['Filter (Menu)',             Filter.menu],
      ['Edit Link',                 QR.oekaki.menu],
      ['Download Link',             DownloadLink],
      ['Archive Link',              ArchiveLink],
      ['Quote Inlining',            QuoteInline],
      ['Quote Previewing',          QuotePreview],
      ['Quote Backlinks',           QuoteBacklink],
      ['Mark Quotes of You',        QuoteYou],
      ['Mark OP Quotes',            QuoteOP],
      ['Mark Cross-thread Quotes',  QuoteCT],
      ['Anonymize',                 Anonymize],
      ['Time Formatting',           Time],
      ['Relative Post Dates',       RelativeDates],
      ['File Info Formatting',      FileInfo],
      ['Fappe Tyme',                FappeTyme],
      ['Gallery',                   Gallery],
      ['Gallery (menu)',            Gallery.menu],
      ['Sauce',                     Sauce],
      ['Image Expansion',           ImageExpand],
      ['Image Expansion (Menu)',    ImageExpand.menu],
      ['Reveal Spoiler Thumbnails', RevealSpoilers],
      ['Image Loading',             ImageLoader],
      ['Image Hover',               ImageHover],
      ['Volume Control',            Volume],
      ['WEBM Metadata',             Metadata],
      ['Comment Expansion',         ExpandComment],
      ['Thread Expansion',          ExpandThread],
      ['Favicon',                   Favicon],
      ['Unread',                    Unread],
      ['Unread Line in Index',      UnreadIndex],
      ['Quote Threading',           QuoteThreading],
      ['Thread Stats',              ThreadStats],
      ['Thread Updater',            ThreadUpdater],
      ['Thread Watcher',            ThreadWatcher$1],
      ['Thread Watcher (Menu)',     ThreadWatcher$1.menu],
      ['Mark New IPs',              MarkNewIPs],
      ['Index Navigation',          Nav],
      ['Keybinds',                  Keybinds],
      ['Banner',                    Banner],
      ['Announcements',             PSA],
      ['Flash Features',            Flash],
      ['Reply Pruning',             ReplyPruning],
      ['Mod Contact Links',         ModContact]
    ]
  };
  var Main$1 = Main;
  $$1.ready(() => Main.init());

  // <% if (readJSON('/.tests_enabled')) { %>
  // Main.features.push(['Build Test', Test]);
  // <% } %>

  return Main$1;

})();

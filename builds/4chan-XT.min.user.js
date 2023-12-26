// ==UserScript==
// @name         4chan XT
// @version      XT 2.2.3
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
// @updateURL    https://github.com/TuxedoTako/4chan-xt/releases/latest/download/4chan-XT.min.meta.js
// @downloadURL  https://github.com/TuxedoTako/4chan-xt/releases/latest/download/4chan-XT.min.user.js
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
 * TuxedoTako
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
!(function () {
  'use strict'
  var e = {
    name: '4chan XT',
    path: '4chan-XT',
    fork: 'TuxedoTako',
    page: 'https://github.com/TuxedoTako/4chan-xt',
    downloads: 'https://github.com/TuxedoTako/4chan-xt/releases',
    oldVersions: 'https://raw.githubusercontent.com/ccd0/4chan-x/',
    faq: 'https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions',
    captchaFAQ: 'https://github.com/ccd0/4chan-x/wiki/Captcha-FAQ',
    cssGuide: 'https://github.com/ccd0/4chan-x/wiki/Styling-Guide',
    license: 'https://github.com/TuxedoTako/4chan-xt/blob/project-XT/LICENSE',
    changelog:
      'https://github.com/TuxedoTako/4chan-xt/blob/project-XT/CHANGELOG.md',
    issues: 'https://github.com/TuxedoTako/4chan-xt/issues',
    newIssue: 'https://github.com/TuxedoTako/4chan-xt/issues',
    newIssueMaxLength: 8181,
    alternatives: 'https://www.4chan-x.net/4chan_alternatives.html',
    appid: 'lacclbnghgdicfifcamcmcnilckjamag',
    appidGecko: '4chan-x@4chan-x.net',
    chromeStoreID: 'ohnjgmpcibpbafdlkimncjhflgedgpam',
    recaptchaKey: '6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc',
    distBranch: 'gh-pages',
    includes_only: [
      '*://boards.4chan.org/*',
      '*://sys.4chan.org/*',
      '*://www.4chan.org/*',
      '*://boards.4channel.org/*',
      '*://sys.4channel.org/*',
      '*://www.4channel.org/*',
      '*://i.4cdn.org/*',
      '*://is.4chan.org/*',
      '*://is2.4chan.org/*',
      '*://is.4channel.org/*',
      '*://is2.4channel.org/*',
    ],
    matches_only: [
      '*://*.4chan.org/*',
      '*://*.4channel.org/*',
      '*://*.4cdn.org/*',
    ],
    matches: [
      'https://erischan.org/*',
      'https://www.erischan.org/*',
      'https://fufufu.moe/*',
      'https://gnfos.com/*',
      'https://himasugi.blog/*',
      'https://www.himasugi.blog/*',
      'https://kakashinenpo.com/*',
      'https://www.kakashinenpo.com/*',
      'https://kissu.moe/*',
      'https://www.kissu.moe/*',
      'https://lainchan.org/*',
      'https://www.lainchan.org/*',
      'https://merorin.com/*',
      'https://ota-ch.com/*',
      'https://www.ota-ch.com/*',
      'https://ponyville.us/*',
      'https://www.ponyville.us/*',
      'https://smuglo.li/*',
      'https://notso.smuglo.li/*',
      'https://smugloli.net/*',
      'https://smug.nepu.moe/*',
      'https://sportschan.org/*',
      'https://www.sportschan.org/*',
      'https://sushigirl.us/*',
      'https://www.sushigirl.us/*',
      'https://tvch.moe/*',
    ],
    matches_extra: [],
    exclude_matches: [
      '*://www.4chan.org/advertise',
      '*://www.4chan.org/advertise?*',
      '*://www.4chan.org/donate',
      '*://www.4chan.org/donate?*',
      '*://www.4channel.org/advertise',
      '*://www.4channel.org/advertise?*',
      '*://www.4channel.org/donate',
      '*://www.4channel.org/donate?*',
    ],
    grants: [
      'GM_getValue',
      'GM_setValue',
      'GM_deleteValue',
      'GM_listValues',
      'GM_addValueChangeListener',
      'GM_openInTab',
      'GM_xmlhttpRequest',
      'GM.getValue',
      'GM.setValue',
      'GM.deleteValue',
      'GM.listValues',
      'GM.openInTab',
      'GM.xmlHttpRequest',
    ],
    min: { chrome: '80', firefox: '74', greasemonkey: '1.14' },
  }
  const t = Object.create(null),
    o = {
      VERSION: 'XT 2.2.3',
      NAMESPACE: e.name,
      sites: Object.create(null),
      boards: Object.create(null),
    },
    n = (function () {
      const e = {
          '&': '&amp;',
          "'": '&#039;',
          '"': '&quot;',
          '<': '&lt;',
          '>': '&gt;',
        },
        t = /[&"'<>]/g,
        o = function (t) {
          return e[t]
        },
        n = function (e) {
          return e.toString().replace(t, o)
        }
      return (
        (n.cat = function (e) {
          let t = ''
          for (let o = 0; o < e.length; o++) t += e[o].innerHTML
          return t
        }),
        n
      )
    })(),
    a = document,
    i = a.documentElement,
    r = console,
    s = function () {
      return i
    }
  class l {
    static initClass() {
      ;(this.Post = new l('Post')),
        (this.Thread = new l('Thread')),
        (this.CatalogThread = new l('Catalog Thread')),
        (this.CatalogThreadNative = new l('Catalog Thread'))
    }
    constructor(e) {
      ;(this.type = e), (this.keys = [])
    }
    push({ name: e, cb: t }) {
      return this[e] || this.keys.push(e), (this[e] = t)
    }
    execute(e, t = this.keys, o = !1) {
      let n
      if (!e.callbacksExecuted || o) {
        for (var a of ((e.callbacksExecuted = !0), t))
          try {
            this[a]?.call(e)
          } catch (t) {
            n || (n = []),
              n.push({
                message: [
                  '"',
                  a,
                  '" crashed on node ',
                  this.type,
                  ' No.',
                  e.ID,
                  ' (',
                  e.board,
                  ').',
                ].join(''),
                error: t,
                html: e.nodes?.root?.outerHTML,
              })
          }
        return n ? jt.handleErrors(n) : void 0
      }
    }
  }
  l.initClass()
  const c = {
    'main': {
      'Miscellaneous': {
        'Redirect to HTTPS': [!0, 'Redirect to the HTTPS version of 4chan.'],
        'JSON Index': [
          !0,
          'Replace the original board index with one supporting searching, sorting, infinite scrolling, and a catalog mode.',
        ],
        [`Use ${e.name} Catalog`]: [
          !0,
          `Link to ${e.name}'s catalog instead of the native 4chan one.`,
          1,
        ],
        'Index Refresh Notifications': [
          !1,
          'Show a notice at the top of the page when the index is refreshed.',
          1,
        ],
        'Follow Cursor': [
          !0,
          'Image Hover and Quote Preview move with the mouse cursor.',
        ],
        'Open Threads in New Tab': [
          !1,
          `Make links to threads in the index / ${e.name} catalog open in a new tab.`,
        ],
        'External Catalog': [
          !1,
          'Link to external catalog instead of the internal one.',
        ],
        'Catalog Links': [
          !1,
          "Add toggle link in header menu to turn Navigation links into links to each board's catalog.",
        ],
        'Announcement Hiding': [!0, 'Add button to hide 4chan announcements.'],
        'Desktop Notifications': [
          !0,
          `Enables desktop notifications across various ${e.name} features.`,
        ],
        '404 Redirect': [
          !0,
          'Redirect dead threads and images to the archives.',
        ],
        'Archive Report': [!0, 'Enable reporting posts to supported archives.'],
        'Exempt Archives from Encryption': [
          !1,
          'Permit loading content from, and warningless redirects to, HTTP-only archives from HTTPS pages.',
        ],
        'Keybinds': [!0, 'Bind actions to keyboard shortcuts.'],
        'Time Formatting': [!0, 'Localize and format timestamps.'],
        'Relative Post Dates': [
          !0,
          'Display dates like "3 minutes ago". Tooltip shows the timestamp.',
        ],
        'Relative Date Title': [
          !0,
          'Show Relative Post Date only when hovering over dates.',
          1,
        ],
        'Comment Expansion': [
          !0,
          'Expand comments that are too long to display on the index. Not applicable with JSON Index.',
        ],
        'File Info Formatting': [!0, 'Reformat the file information.'],
        'Thread Expansion': [!0, 'Add buttons to expand threads.'],
        'Index Navigation': [!1, 'Add buttons to navigate between threads.'],
        'Reply Navigation': [
          !1,
          'Add buttons to navigate to top / bottom of thread.',
        ],
        'Unique ID and Capcode Navigation': [
          !1,
          'Add buttons to navigate to posts having the same unique ID or capcode.',
        ],
        'Custom Board Titles': [
          !0,
          'Allow editing of the board title and subtitle by ctrl/⌘+clicking them.',
        ],
        'Persistent Custom Board Titles': [
          !1,
          'Force custom board titles to be persistent, even if the board titles are updated.',
          1,
        ],
        'Show Updated Notifications': [
          !0,
          `Show notifications when ${e.name} is successfully updated.`,
        ],
        'Color User IDs': [
          !0,
          'Assign unique colors to user IDs on boards that use them',
        ],
        'Count Posts by ID': [
          !0,
          'Display number of posts in the thread when hovering over an ID.',
        ],
        'Remove Spoilers': [!1, 'Remove all spoilers in text.'],
        'Reveal Spoilers': [
          !1,
          'Indicate spoilers if Remove Spoilers is enabled, or make the text appear hovered if Remove Spoiler is disabled.',
        ],
        'Normalize URL': [
          !0,
          'Rewrite the URL of the current page, removing slugs and excess slashes, and changing /res/ to /thread/.',
        ],
        'Work around CORB Bug': [
          !0,
          'Leave this checked until your garbage browser is fixed.',
        ],
        'Disable Autoplaying Sounds': [
          !1,
          'Prevent sounds on the page from autoplaying.',
        ],
        'Disable Native Extension': [
          !0,
          `${e.name} is NOT designed to work with the native extension.`,
        ],
        'Enable Native Flash Embedding': [
          !0,
          "Activate the native extension's Flash embedding if the native extension is disabled.",
        ],
      },
      'Linkification': {
        'Linkify': [!0, 'Convert text into links where applicable.'],
        'Link Title': [
          !0,
          'Replace the link of a supported site with its actual title.',
          1,
        ],
        'Cover Preview': [!0, 'Show preview of supported links on hover.', 1],
        'Embedding': [
          !0,
          "Embed supported services. Note: Some services don't work on HTTPS.",
          1,
        ],
        'Auto-embed': [!1, 'Auto-embed Linkify Embeds.', 2],
        'Floating Embeds': [
          !1,
          'Embed content in a frame that remains in place when the page is scrolled.',
          2,
        ],
      },
      'Filtering': {
        'Anonymize': [!1, 'Make everyone Anonymous.'],
        'Filter': [!0, 'Self-moderation placebo.'],
        'Filtered Backlinks': [
          !1,
          'When enabled, shows backlinks to filtered posts with a line-through decoration. Otherwise, hides the backlinks.',
          1,
        ],
        'Filter in Native Catalog': [
          !0,
          'Apply 4chan X filters in native catalog.',
          1,
        ],
        'MD5 Quick Filter Notifications': [
          !0,
          'Show notification when quick filtering MD5s using the button or keybind.',
          1,
        ],
        'Recursive Hiding': [!0, 'Hide replies of hidden posts, recursively.'],
        'Thread Hiding Buttons': [!0, 'Add buttons to hide entire threads.'],
        'Reply Hiding Buttons': [!0, 'Add buttons to hide single replies.'],
        'Stubs': [!0, 'Show stubs of hidden threads / replies.'],
      },
      'Images and Videos': {
        'Image Expansion': [!0, 'Expand images / videos.'],
        'Image Hover': [!0, 'Show full image / video on mouseover.'],
        'Image Hover in Catalog': [
          !0,
          `Show full image / video on mouseover in ${e.name} catalog.`,
        ],
        'Gallery': [
          !0,
          'Adds a simple and cute image gallery. Has more options in the gallery menu.',
        ],
        'Fullscreen Gallery': [!1, 'Open gallery in fullscreen mode.', 1],
        'PDF in Gallery': [!1, 'Show PDF files in gallery.', 1],
        'Sauce': [!0, 'Add sauce links to images.'],
        'WEBM Metadata': [
          !0,
          'Add link to fetch title metadata from webm videos.',
        ],
        'Reveal Spoiler Thumbnails': [
          !1,
          'Replace spoiler thumbnails with the original image.',
        ],
        'Replace GIF': [!1, 'Replace gif thumbnails with the actual image.'],
        'Replace JPG': [!1, 'Replace jpg thumbnails with the actual image.'],
        'Replace PNG': [!1, 'Replace png thumbnails with the actual image.'],
        'Replace WEBM': [
          !1,
          'Replace webm, mp4, and ogv thumbnails with the actual video. Probably will degrade browser performance ;)',
        ],
        'Image Prefetching': [
          !0,
          'Add a shortcut icon to the header to turn on image preloading.',
        ],
        'Fappe Tyme': [
          !0,
          'Hide posts without images when header menu item is checked. *hint* *hint*',
        ],
        'Werk Tyme': [
          !0,
          'Hide all post images when header menu item is checked.',
        ],
        'Autoplay': [!0, 'Videos begin playing immediately when opened.'],
        'Restart when Opened': [
          !1,
          'Restart GIFs and WebMs when you hover over or expand them.',
        ],
        'Show Controls': [!0, 'Show controls on videos expanded inline.'],
        'Click Passthrough': [
          !1,
          "Clicks on videos trigger your browser's default behavior. Videos can be contracted with button / dragging to the left.",
          1,
        ],
        'Allow Sound': [!0, 'Open videos with the sound unmuted.'],
        'Mouse Wheel Volume': [
          !0,
          'Adjust volume of videos with the mouse wheel over the thumbnail/filename/gallery.',
        ],
        'Loop in New Tab': [!0, 'Loop videos opened in their own tabs.'],
        'Volume in New Tab': [
          !0,
          `Apply ${e.name} mute and volume settings to videos opened in their own tabs.`,
        ],
        'Enable sound posts': [
          !0,
          'Enable loading audio from [sound=] file names. This audio is fetched from third parties.',
        ],
      },
      'Menu': {
        'Menu': [!0, 'Add a drop-down menu to posts.'],
        'Report Link': [!0, 'Add a report link to the menu.', 1],
        'Copy Text Link': [!0, "Add a link to copy the post's text.", 1],
        'Thread Hiding Link': [!0, 'Add a link to hide entire threads.', 1],
        'Reply Hiding Link': [!0, 'Add a link to hide single replies.', 1],
        'Delete Link': [
          !0,
          'Add post and image deletion links to the menu.',
          1,
        ],
        'Archive Link': [!0, 'Add an archive link to the menu.', 1],
        'Edit Link': [
          !0,
          "Add a link to edit the image in Tegaki, /i/'s painting program. Requires Quick Reply.",
          1,
        ],
        'Download Link': [
          !1,
          'Add a download with original filename link to the menu.',
          1,
        ],
      },
      'Monitoring': {
        'Thread Updater': [
          !0,
          'Fetch and insert new replies. Has more options in the header menu and the "Advanced" tab.',
        ],
        'Unread Count': [!0, 'Show the unread posts count in the tab title.'],
        'Quoted Title': [
          !1,
          "Change the page title to reflect you've been quoted.",
          1,
        ],
        'Hide Unread Count at (0)': [
          !1,
          'Hide the unread posts count in the tab title when it reaches 0.',
          1,
        ],
        'Unread Favicon': [
          !0,
          'Show a different favicon when there are unread posts.',
        ],
        'Unread Line': [
          !0,
          'Show a line to distinguish read posts from unread ones.',
        ],
        'Remember Last Read Post': [
          !0,
          "Remember how far you've read after you close the thread.",
        ],
        'Scroll to Last Read Post': [
          !0,
          'Scroll back to the last read post when reopening a thread.',
          1,
        ],
        'Unread Line in Index': [
          !1,
          'Show a line between read and unread posts in threads in the index.',
          1,
        ],
        'Remove Thread Excerpt': [
          !1,
          'Replace the excerpt of the thread in the tab title with the board title.',
        ],
        'Thread Stats': [!0, 'Display reply and image count.'],
        'IP Count in Stats': [
          !0,
          'Display the unique IP count in the thread stats.',
          1,
        ],
        'Page Count in Stats': [
          !0,
          'Display the page count in the thread stats.',
          1,
        ],
        'Updater and Stats in Header': [
          !0,
          'Places the thread updater and thread stats in the header instead of floating them.',
        ],
        'Thread Watcher': [
          !0,
          'Bookmark threads. Has more options in the thread watcher menu.',
        ],
        'Fixed Thread Watcher': [
          !0,
          'Makes the thread watcher scroll with the page.',
          1,
        ],
        'Persistent Thread Watcher': [
          !1,
          'The thread watcher will be visible when the page is loaded.',
          1,
        ],
        'Mark New IPs': [
          !1,
          "Label each post from a new IP with the thread's current IP count.",
        ],
        'Reply Pruning': [
          !0,
          'Add option in header menu to hide old replies in long threads. Activated by default in stickies.',
        ],
        'Prune All Threads': [
          !1,
          'Activate Reply Pruning by default in all threads.',
          1,
        ],
      },
      'Posting and Captchas': {
        'Quick Reply': [
          !0,
          'All-in-one form to reply, create threads, automate dumping and more.',
        ],
        'Persistent QR': [
          !1,
          "The Quick reply won't disappear after posting.",
          1,
        ],
        'Auto Hide QR': [
          !0,
          'Automatically hide the quick reply when posting.',
          2,
        ],
        'Open Post in New Tab': [
          !0,
          "Open new threads in a new tab, and open replies in a new tab if you're not already in the thread.",
          1,
        ],
        'Remember QR Size': [!1, 'Remember the size of the Quick reply.', 1],
        'Remember Spoiler': [
          !1,
          'Remember the spoiler state, instead of resetting after posting.',
          1,
        ],
        'Randomize Filename': [
          !1,
          'Set the filename to a random timestamp within the past year. Disabled on /f/.',
          1,
        ],
        'Show New Thread Option in Threads': [
          !0,
          'Show the option to post a new / different thread from inside a thread.',
          1,
        ],
        'Show Upload Progress': [
          !0,
          'Track progress of file uploads as percentage in submit button.',
          1,
        ],
        'Cooldown': [
          !0,
          'Indicate the remaining time before posting again.',
          1,
        ],
        'Posting Success Notifications': [
          !0,
          'Show notifications on successful post creation or file uploading.',
          1,
        ],
        'Auto-load captcha': [
          !1,
          'Automatically load the captcha in the QR even if your post is empty.',
          1,
        ],
        'Post on Captcha Completion': [
          !1,
          'Submit the post immediately when the captcha is completed.',
          1,
        ],
        'Force Noscript Captcha': [
          !1,
          'Use the non-Javascript fallback captcha even if Javascript is enabled.',
        ],
        'Pass Link': [
          !1,
          'Add a 4chan Pass login link to the bottom of the page.',
        ],
      },
      'Quote Links': {
        'Quote Backlinks': [!0, 'Add quote backlinks.'],
        'OP Backlinks': [!0, 'Add backlinks to the OP.', 1],
        'Bottom Backlinks': [!1, 'Place backlinks at the bottom of posts.', 1],
        'Quote Inlining': [!0, 'Inline quoted post on click.'],
        'Inline Cross-thread Quotes Only': [
          !1,
          "Don't inline quote links when the posts are visible in the thread.",
          1,
        ],
        'Quote Hash Navigation': [
          !1,
          'Include an extra link after quotes for autoscrolling to quoted posts.',
          1,
        ],
        'Forward Hiding': [!0, 'Hide original posts of inlined backlinks.', 1],
        'Quote Previewing': [!0, 'Show quoted post on hover.'],
        'Quote Highlighting': [!0, 'Highlight the previewed post.', 1],
        'Resurrect Quotes': [
          !0,
          'Link dead quotes to the archives, and support inlining/previewing of archive links like quote links.',
        ],
        'Remember Your Posts': [!0, 'Remember your posting history.'],
        'Mark Quotes of You': [
          !0,
          "Add '(You)' to quotes linking to your posts.",
          1,
        ],
        'Highlight Posts Quoting You': [
          !0,
          'Highlights any posts that contain a quote to your post.',
          1,
        ],
        'Highlight Own Posts': [!0, 'Highlights own posts.', 1],
        'Mark OP Quotes': [!0, "Add '(OP)' to OP quotes."],
        'Mark Cross-thread Quotes': [
          !0,
          "Add '(Cross-thread)' to cross-threads quotes.",
        ],
        'Quote Threading': [
          !0,
          'Add option in header menu to thread conversations.',
        ],
      },
    },
    'imageExpansion': {
      'Fit width': [!0, ''],
      'Fit height': [!1, ''],
      'Scroll into view': [
        !0,
        'Scroll down when expanding images to bring the full image into view.',
      ],
      'Expand spoilers': [!0, 'Expand all images along with spoilers.'],
      'Expand videos': [!0, 'Expand all images also expands videos.'],
      'Expand from here': [
        !1,
        'Expand all images only from current position to thread end.',
      ],
      'Expand thread only': [
        !1,
        'In index, expand all images only within the current thread.',
      ],
      'Advance on contract': [
        !1,
        'Advance to next post when contracting an expanded image.',
      ],
    },
    'gallery': {
      'Hide Thumbnails': [!1],
      'Fit Width': [!0],
      'Fit Height': [!0],
      'Stretch to Fit': [!1],
      'Scroll to Post': [!0],
      'Slide Delay': [6],
    },
    'Default Volume': 1,
    'threadWatcher': {
      'Current Board': [
        !1,
        'Only show watched threads from the current board.',
      ],
      'Auto Update Thread Watcher': [
        !0,
        'Periodically check status of watched threads.',
      ],
      'Auto Watch': [!0, 'Automatically watch threads you start.'],
      'Auto Watch Reply': [!0, 'Automatically watch threads you reply to.'],
      'Auto Prune': [!1, 'Automatically remove dead threads.'],
      'Show Page': [!0, 'Show what page watched threads are on.'],
      'Show Unread Count': [
        !0,
        'Show number of unread posts in watched threads.',
      ],
      'Show Site Prefix': [
        !0,
        'When multiple sites are shown in the thread watcher, add a prefix to board names to distinguish them.',
      ],
      'Require OP Quote Link': [
        !1,
        'For purposes of thread watcher highlighting, only consider posts with a quote link to the OP as replies to the OP.',
      ],
    },
    'filter': {
      general: '',
      postID:
        '# Highlight dubs on [s4s]:\n#/(\\d)\\1$/;highlight;top:no;boards:s4s',
      name: '# Filter any namefags:\n#/^(?!Anonymous$)/',
      uniqueID: '# Filter a specific ID:\n#/Txhvk1Tl/',
      tripcode: '# Filter any tripfag\n#/^!/',
      capcode:
        '# Set a custom class for mods:\n#/Mod$/;highlight:mod;op:yes\n# Set a custom class for admins:\n#/Admin$/;highlight:admin;op:yes',
      pass: '# Filter anyone using since4pass:\n#/./',
      email: '',
      subject: '# Filter Generals on /v/:\n#/general/i;boards:v;op:only',
      comment:
        "# Filter Stallman copypasta on /g/:\n#/what you're refer+ing to as linux/i;boards:g\n# Filter posts with 20 or more quote links:\n#/(?:>>\\d(?:(?!>>\\d)[^])*){20}/\n# Filter posts like T H I S / H / I / S:\n#/^>?\\s?\\w\\s?(\\w)\\s?(\\w)\\s?(\\w).*$[\\s>]+\\1[\\s>]+\\2[\\s>]+\\3/im",
      flag: '',
      filename: '',
      dimensions:
        '# Highlight potential wallpapers:\n#/1920x1080/;op:yes;highlight;top:no;boards:w,wg',
      filesize: '',
      MD5: '',
    },
    'sauces':
      '# Known filename formats:\nhttps://www.pixiv.net/member_illust.php?mode=medium&illust_id=%$1;regexp:/^(\\d+)_p\\d+/\njavascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/\nhttps://imgur.com/%$1;regexp:/^(?![a-zA-Z][a-z]{6})(?![A-Z]{7})(?!\\d{7})([\\da-zA-Z]{7})(?: \\(\\d+\\))?\\.\\w+$/\nhttps://flickr.com/photo.gne?id=%$1;regexp:/^(\\d+)_[\\da-f]{10}(?:_\\w)*\\b/\nhttps://www.facebook.com/photo.php?fbid=%$1;regexp:/^\\d+_(\\d+)_\\d+_[no]\\b/\n\n# Reverse image search:\nhttps://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%IMG&safe=off\nhttps://yandex.com/images/search?rpt=imageview&url=%IMG\n#//tineye.com/search?url=%IMG\n#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights\n#https://lens.google.com/uploadbyurl?url=%IMG;text:lens\n\n# Specialized reverse image search:\n//iqdb.org/?url=%IMG\nhttps://trace.moe/?auto&url=%IMG;text:wait\n#//3d.iqdb.org/?url=%IMG\n#//saucenao.com/search.php?url=%IMG\n\n# "View Same" in archives:\nhttp://eye.swfchan.com/search/?q=%name;types:swf\n#https://desuarchive.org/_/search/image/%sMD5/\n#https://archive.4plebs.org/_/search/image/%sMD5/\n#https://boards.fireden.net/_/search/image/%sMD5/\n#https://foolz.fireden.net/_/search/image/%sMD5/\n\n# Other tools:\n#http://exif.regex.info/exif.cgi?imgurl=%URL\n#//imgops.com/start?url=%URL;types:gif,jpg,png\n#//www.gif-explode.com/%URL;types:gif',
    'FappeT': { werk: !1 },
    'Custom CSS': !0,
    'Index': {
      'Index Mode': 'paged',
      'Previous Index Mode': 'paged',
      'Index Size': 'small',
      'Show Replies': [
        !0,
        'Show replies in the index, and also in the catalog if "Catalog hover expand" is checked.',
      ],
      'Catalog Hover Expand': [
        !1,
        'Expand the comment and show more details when you hover over a thread in the catalog.',
      ],
      'Catalog Hover Toggle': [
        !0,
        'Turn "Catalog hover expand" on and off by clicking in the catalog.',
      ],
      'Pin Watched Threads': [
        !1,
        'Move watched threads to the start of the index.',
      ],
      'Anchor Hidden Threads': [
        !0,
        'Move hidden threads to the end of the index.',
      ],
      'Refreshed Navigation': [
        !1,
        'Refresh index when navigating through pages.',
      ],
    },
    'Header': {
      'Fixed Header': !0,
      'Header auto-hide': !1,
      'Header auto-hide on scroll': !1,
      'Bottom Header': !1,
      'Centered links': !1,
      'Header catalog links': !1,
      'Bottom Board List': !0,
      'Shortcut Icons': !0,
      'Custom Board Navigation': !0,
    },
    'archives': {
      archiveLists: 'https://4chenz.github.io/archives.json/archives.json',
      lastarchivecheck: 0,
      archiveAutoUpdate: !0,
    },
    'externalCatalogURLs':
      '//catalog.neet.tv/%board/;boards:4chan.org:3,a,adv,an,asp,biz,c,cgl,ck,cm,co,diy,f,fa,fit,g,gd,his,i,int,jp,k,lgbt,lit,m,mlp,mu,n,news,o,out,p,po,pol,s4s,sci,sp,tg,toy,trv,tv,v,vg,vip,vp,vr,w,wg,wsg,wsr,x',
    'boardnav': `[ toggle-all ]\n[current-index-text:"Index"\ncurrent-catalog-text:"Catalog"\ncurrent-expired-text:"Expired"\ncurrent-archive-text:"Archive"]\n[external-text:"FAQ","${e.name}"]`,
    'QR': {
      'QR.personas': '#options:"sage";boards:jp;always',
      'sjisPreview': !1,
    },
    'jsWhitelist':
      "http://s.4cdn.org\nhttps://s.4cdn.org\nhttp://www.google.com\nhttps://www.google.com\nhttps://www.gstatic.com\nhttp://cdn.mathjax.org\nhttps://cdn.mathjax.org\nhttps://cdnjs.cloudflare.com\nhttps://hcaptcha.com\nhttps://*.hcaptcha.com\n'self'\n'unsafe-inline'\n'unsafe-eval'",
    'captchaLanguage': '',
    'time': '%m/%d/%y(%a)%H:%M:%S',
    'timeLocale': '',
    'backlink': '>>%id',
    'pastedname': 'file',
    'fileInfo': '%l %d (%p%s, %r%g)',
    'favicon': 'ferongr',
    'usercss':
      'div.boardTitle{font-weight:400 !important}:root.yotsuba div.boardTitle{font-family:sans-serif !important;text-shadow:1px 1px 1px rgba(100,0,0,0.6)}:root.yotsuba-b div.boardTitle{font-family:sans-serif !important;text-shadow:1px 1px 1px rgba(105,10,15,0.6)}:root.photon div.boardTitle{font-family:sans-serif !important;text-shadow:1px 1px 1px rgba(0,74,153,0.6)}:root.tomorrow div.boardTitle{font-family:sans-serif !important;text-shadow:1px 1px 1px rgba(167,170,168,0.6)}',
    'hotkeys': {
      'Toggle board list': ['Ctrl+b', 'Toggle the full board list.'],
      'Toggle header': [
        'Shift+h',
        'Toggle the auto-hide option of the header.',
      ],
      'Open empty QR': ['q', 'Open QR without post number inserted.'],
      'Open QR': ['Shift+q', 'Open QR with post number inserted.'],
      'Open settings': ['Alt+o', 'Open Settings.'],
      'Close': ['Esc', 'Close dialogs or notifications.'],
      'Spoiler tags': ['Ctrl+s', 'Insert spoiler tags.'],
      'Code tags': ['Alt+c', 'Insert code tags.'],
      'Eqn tags': ['Alt+e', 'Insert eqn tags.'],
      'Math tags': ['Alt+m', 'Insert math tags.'],
      'SJIS tags': ['Alt+a', 'Insert SJIS tags.'],
      'Toggle sage': ['Alt+s', 'Toggle sage in options field.'],
      'Toggle Cooldown': ['Alt+Comma', 'Toggle custom cooldown timer.'],
      'Post from URL': ['Alt+l', 'Post from URL.'],
      'Add new post': ['Alt+n', 'Add new post to the QR dump list.'],
      'Submit QR': ['Ctrl+Enter', 'Submit post.'],
      'Watch': ['w', 'Watch thread.'],
      'Update': ['r', 'Update the thread / refresh the index.'],
      'Update thread watcher': ['Shift+r', 'Manually refresh thread watcher.'],
      'Toggle thread watcher': ['t', 'Toggle visibility of thread watcher.'],
      'Toggle threading': ['Shift+t', 'Toggle threading.'],
      'Mark thread read': [
        'Ctrl+0',
        'Mark thread read from index (requires "Unread Line in Index").',
      ],
      'Expand image': ['Shift+e', 'Expand selected image.'],
      'Expand images': ['e', 'Expand all images.'],
      'Open Gallery': ['g', 'Opens the gallery.'],
      'Next Gallery Image': ['Right', 'Go to the next image in gallery mode.'],
      'Previous Gallery Image': [
        'Left',
        'Go to the previous image in gallery mode.',
      ],
      'Advance Gallery': [
        'Enter',
        'Go to next image or, if Autoplay is off, play video.',
      ],
      'Pause': ['p', 'Pause/play videos in the gallery.'],
      'Slideshow': ['Ctrl+Right', 'Toggle the gallery slideshow mode.'],
      'Rotate image clockwise': [
        'Shift+Right',
        'Rotate image clockwise in gallery.',
      ],
      'Rotate image anticlockwise': [
        'Shift+Left',
        'Rotate image anticlockwise in gallery.',
      ],
      'Download Gallery Image': [
        'Shift+j',
        'Download current image in gallery.',
      ],
      'fappeTyme': ['f', 'Toggle Fappe Tyme.'],
      'werkTyme': ['Shift+w', 'Toggle Werk Tyme.'],
      'Front page': ['1', 'Jump to front page.'],
      'Open front page': ['Shift+1', 'Open front page in a new tab.'],
      'Next page': ['Ctrl+Right', 'Jump to the next page.'],
      'Previous page': ['Ctrl+Left', 'Jump to the previous page.'],
      'Paged mode': ['Alt+1', 'Open the index in paged mode.'],
      'Infinite scrolling mode': [
        'Alt+2',
        'Open the index in infinite scrolling mode.',
      ],
      'All pages mode': ['Alt+3', 'Open the index in all threads mode.'],
      'Open catalog': ['Shift+c', 'Open the catalog of the current board.'],
      'Search form': [
        'Ctrl+Alt+s',
        'Focus the search field on the board index.',
      ],
      'Cycle sort type': ['Alt+x', 'Cycle through index sort types.'],
      'Next thread': ['Ctrl+Down', 'See next thread.'],
      'Previous thread': ['Ctrl+Up', 'See previous thread.'],
      'Expand thread': ['Ctrl+e', 'Expand thread.'],
      'Open thread': ['o', 'Open thread in current tab.'],
      'Open thread tab': ['Shift+o', 'Open thread in new tab.'],
      'Next reply': ['j', 'Select next reply.'],
      'Previous reply': ['k', 'Select previous reply.'],
      'Deselect reply': ['Shift+d', 'Deselect reply.'],
      'Hide': ['x', 'Hide thread.'],
      'Quick Filter MD5': [
        '5',
        'Add the MD5 of the selected image to the filter list.',
      ],
      'Previous Post Quoting You': [
        'Alt+Up',
        'Scroll to the previous post that quotes you.',
      ],
      'Next Post Quoting You': [
        'Alt+Down',
        'Scroll to the next post that quotes you.',
      ],
    },
    'updater': {
      checkbox: {
        'Beep': [!1, 'Beep on new post to completely read thread.'],
        'Beep Quoting You': [!1, 'Beep on new post quoting you.'],
        'Auto Scroll': [
          !1,
          'Scroll updated posts into view. Only enabled at bottom of page.',
        ],
        'Bottom Scroll': [
          !1,
          'Always scroll to the bottom, not the first new post. Useful for event threads.',
        ],
        'Scroll BG': [!1, 'Auto-scroll background tabs.'],
        'Auto Update': [!0, 'Automatically fetch new posts.'],
        'Optional Increase': [
          !1,
          'Increase the intervals between updates on threads without new posts.',
        ],
      },
      Interval: 5,
    },
    'customCooldown': 0,
    'customCooldownEnabled': !0,
    'Thread Quotes': !1,
    'Max Replies': 1e3,
    'Autohiding Scrollbar': !1,
    'position': {
      'embedding.position': 'top: 50px; right: 0px;',
      'thread-stats.position': 'bottom: 0px; right: 0px;',
      'updater.position': 'bottom: 0px; left: 0px;',
      'thread-watcher.position': 'top: 50px; left: 0px;',
      'qr.position': 'top: 50px; right: 0px;',
    },
    'fourchanImageHost': 'i.4cdn.org',
    'hiddenPSAList': [{}],
    'knownBanners': [
      '0.jpg',
      '1.jpg',
      '2.jpg',
      '4.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '16.jpg',
      '17.jpg',
      '18.jpg',
      '19.jpg',
      '20.jpg',
      '21.jpg',
      '22.jpg',
      '24.jpg',
      '25.jpg',
      '26.jpg',
      '28.jpg',
      '29.jpg',
      '33.jpg',
      '38.jpg',
      '39.jpg',
      '43.jpg',
      '44.jpg',
      '45.jpg',
      '46.jpg',
      '47.jpg',
      '52.jpg',
      '54.jpg',
      '57.jpg',
      '59.jpg',
      '60.jpg',
      '61.jpg',
      '64.jpg',
      '66.jpg',
      '67.jpg',
      '69.jpg',
      '71.jpg',
      '72.jpg',
      '76.jpg',
      '77.jpg',
      '81.jpg',
      '82.jpg',
      '83.jpg',
      '84.jpg',
      '88.jpg',
      '90.jpg',
      '91.jpg',
      '96.jpg',
      '98.jpg',
      '99.jpg',
      '100.jpg',
      '104.jpg',
      '106.jpg',
      '116.jpg',
      '119.jpg',
      '137.jpg',
      '140.jpg',
      '148.jpg',
      '149.jpg',
      '150.jpg',
      '154.jpg',
      '156.jpg',
      '157.jpg',
      '158.jpg',
      '159.jpg',
      '161.jpg',
      '162.jpg',
      '164.jpg',
      '165.jpg',
      '166.jpg',
      '167.jpg',
      '168.jpg',
      '169.jpg',
      '170.jpg',
      '171.jpg',
      '172.jpg',
      '173.jpg',
      '174.jpg',
      '175.jpg',
      '176.jpg',
      '178.jpg',
      '179.jpg',
      '180.jpg',
      '181.jpg',
      '182.jpg',
      '183.jpg',
      '186.jpg',
      '189.jpg',
      '190.jpg',
      '192.jpg',
      '193.jpg',
      '194.jpg',
      '197.jpg',
      '198.jpg',
      '200.jpg',
      '201.jpg',
      '202.jpg',
      '203.jpg',
      '205.jpg',
      '206.jpg',
      '207.jpg',
      '208.jpg',
      '210.jpg',
      '213.jpg',
      '214.jpg',
      '215.jpg',
      '216.jpg',
      '218.jpg',
      '219.jpg',
      '220.jpg',
      '221.jpg',
      '222.jpg',
      '223.jpg',
      '224.jpg',
      '227.jpg',
      '0.png',
      '1.png',
      '2.png',
      '3.png',
      '5.png',
      '6.png',
      '9.png',
      '10.png',
      '11.png',
      '12.png',
      '14.png',
      '16.png',
      '19.png',
      '20.png',
      '21.png',
      '22.png',
      '23.png',
      '24.png',
      '26.png',
      '27.png',
      '28.png',
      '29.png',
      '30.png',
      '31.png',
      '32.png',
      '33.png',
      '34.png',
      '37.png',
      '39.png',
      '40.png',
      '41.png',
      '42.png',
      '43.png',
      '44.png',
      '45.png',
      '48.png',
      '49.png',
      '50.png',
      '51.png',
      '52.png',
      '53.png',
      '57.png',
      '58.png',
      '59.png',
      '64.png',
      '66.png',
      '67.png',
      '68.png',
      '69.png',
      '70.png',
      '71.png',
      '72.png',
      '76.png',
      '78.png',
      '79.png',
      '81.png',
      '82.png',
      '85.png',
      '86.png',
      '87.png',
      '89.png',
      '95.png',
      '98.png',
      '100.png',
      '101.png',
      '102.png',
      '105.png',
      '106.png',
      '107.png',
      '109.png',
      '110.png',
      '111.png',
      '112.png',
      '113.png',
      '114.png',
      '115.png',
      '116.png',
      '118.png',
      '119.png',
      '120.png',
      '121.png',
      '122.png',
      '123.png',
      '126.png',
      '128.png',
      '130.png',
      '134.png',
      '136.png',
      '138.png',
      '139.png',
      '140.png',
      '142.png',
      '145.png',
      '146.png',
      '149.png',
      '150.png',
      '151.png',
      '152.png',
      '153.png',
      '154.png',
      '155.png',
      '156.png',
      '157.png',
      '158.png',
      '159.png',
      '160.png',
      '163.png',
      '164.png',
      '165.png',
      '166.png',
      '167.png',
      '168.png',
      '169.png',
      '170.png',
      '171.png',
      '172.png',
      '173.png',
      '174.png',
      '178.png',
      '179.png',
      '180.png',
      '181.png',
      '182.png',
      '184.png',
      '186.png',
      '188.png',
      '190.png',
      '192.png',
      '193.png',
      '194.png',
      '195.png',
      '196.png',
      '197.png',
      '198.png',
      '200.png',
      '202.png',
      '203.png',
      '205.png',
      '206.png',
      '207.png',
      '209.png',
      '212.png',
      '213.png',
      '214.png',
      '216.png',
      '217.png',
      '218.png',
      '219.png',
      '220.png',
      '221.png',
      '222.png',
      '223.png',
      '224.png',
      '225.png',
      '226.png',
      '229.png',
      '231.png',
      '232.png',
      '233.png',
      '234.png',
      '235.png',
      '237.png',
      '238.png',
      '239.png',
      '240.png',
      '241.png',
      '242.png',
      '244.png',
      '245.png',
      '246.png',
      '247.png',
      '248.png',
      '249.png',
      '250.png',
      '253.png',
      '254.png',
      '255.png',
      '256.png',
      '257.png',
      '258.png',
      '259.png',
      '260.png',
      '262.png',
      '268.png',
      '0.gif',
      '1.gif',
      '2.gif',
      '3.gif',
      '4.gif',
      '5.gif',
      '6.gif',
      '7.gif',
      '8.gif',
      '9.gif',
      '10.gif',
      '12.gif',
      '13.gif',
      '14.gif',
      '15.gif',
      '16.gif',
      '18.gif',
      '19.gif',
      '20.gif',
      '21.gif',
      '22.gif',
      '23.gif',
      '24.gif',
      '28.gif',
      '29.gif',
      '30.gif',
      '33.gif',
      '34.gif',
      '35.gif',
      '36.gif',
      '37.gif',
      '39.gif',
      '40.gif',
      '42.gif',
      '44.gif',
      '45.gif',
      '46.gif',
      '48.gif',
      '50.gif',
      '52.gif',
      '54.gif',
      '55.gif',
      '57.gif',
      '58.gif',
      '59.gif',
      '60.gif',
      '61.gif',
      '63.gif',
      '64.gif',
      '66.gif',
      '67.gif',
      '68.gif',
      '69.gif',
      '70.gif',
      '72.gif',
      '73.gif',
      '75.gif',
      '76.gif',
      '77.gif',
      '78.gif',
      '80.gif',
      '81.gif',
      '82.gif',
      '83.gif',
      '86.gif',
      '87.gif',
      '88.gif',
      '92.gif',
      '93.gif',
      '94.gif',
      '95.gif',
      '96.gif',
      '97.gif',
      '98.gif',
      '99.gif',
      '100.gif',
      '101.gif',
      '102.gif',
      '103.gif',
      '104.gif',
      '105.gif',
      '106.gif',
      '108.gif',
      '109.gif',
      '110.gif',
      '111.gif',
      '112.gif',
      '113.gif',
      '115.gif',
      '116.gif',
      '117.gif',
      '118.gif',
      '119.gif',
      '120.gif',
      '122.gif',
      '123.gif',
      '124.gif',
      '127.gif',
      '129.gif',
      '130.gif',
      '131.gif',
      '134.gif',
      '135.gif',
      '136.gif',
      '138.gif',
      '139.gif',
      '141.gif',
      '144.gif',
      '146.gif',
      '148.gif',
      '149.gif',
      '153.gif',
      '154.gif',
      '155.gif',
      '157.gif',
      '158.gif',
      '159.gif',
      '160.gif',
      '161.gif',
      '162.gif',
      '164.gif',
      '166.gif',
      '167.gif',
      '168.gif',
      '169.gif',
      '170.gif',
      '171.gif',
      '172.gif',
      '173.gif',
      '174.gif',
      '175.gif',
      '176.gif',
      '177.gif',
      '178.gif',
      '181.gif',
      '182.gif',
      '183.gif',
      '185.gif',
      '186.gif',
      '187.gif',
      '188.gif',
      '189.gif',
      '190.gif',
      '191.gif',
      '192.gif',
      '193.gif',
      '195.gif',
      '196.gif',
      '197.gif',
      '200.gif',
      '201.gif',
      '202.gif',
      '203.gif',
      '204.gif',
      '205.gif',
      '206.gif',
      '207.gif',
      '208.gif',
      '209.gif',
      '210.gif',
      '211.gif',
      '212.gif',
      '213.gif',
      '214.gif',
      '215.gif',
      '216.gif',
      '217.gif',
      '219.gif',
      '220.gif',
      '221.gif',
      '222.gif',
      '224.gif',
      '225.gif',
      '226.gif',
      '227.gif',
      '228.gif',
      '230.gif',
      '232.gif',
      '233.gif',
      '234.gif',
      '235.gif',
      '238.gif',
      '240.gif',
      '241.gif',
      '243.gif',
      '244.gif',
      '245.gif',
      '246.gif',
      '247.gif',
      '249.gif',
      '250.gif',
      '251.gif',
      '253.gif',
    ].join(','),
    'passMessageClosed': !1,
    'Prerequest Captcha': !1,
    'PSAseen': [[]],
  }
  var h = {
    init: () =>
      Qe.asap(
        () => a.head && (h.el = Qe('link[rel="shortcut icon"]', a.head)),
        h.initAsap
      ),
    set(e) {
      if (((h.status = e), h.el))
        return (h.el.href = h[e]), Qe.add(a.head, h.el)
    },
    initAsap() {
      h.el.type = 'image/x-icon'
      const { href: e } = h.el
      if (
        ((h.isSFW = /ws\.ico$/.test(e)), (h.default = e), h.switch(), h.status)
      )
        return h.set(h.status)
    },
    switch() {
      let e = {
        'ferongr': [
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///9zBQC/AADpDAP/gID/q6voCwJJTwpOAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxUlEQVR42q1TOwrCQBB9s0FRtJI0WoqFtSLYegoP4gVSeJsUHsHSI3iFeIqRXXgwrhlXwYHHhLwPTB7B36abBCV+0pA4DUBQUNZYQptGtW3jtoKyxgoe0yrBCoyZfL/5ioQ3URZOXW9I341l3oo+NXEZiW4CEuIzvPECopED4OaZ3RNmeAm4u+a8Jr5f17VyVoL8fr8qcltzwlyyj2iqcgPOQ9ExkHAITgD75bYBe0A5S4H/P9htuWMF3QXoQpwaKeT+lnsC6JE5I6aq6fEAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8AcH4AtswA2PJ55fKi6fIA1/FtpPADAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVQ4y2NgoBq4/vE/HJOsBiRQUIfA2AzBqQYqUfn00/9FLz+BaQxDCKqBmX7jExijKEDSDJPHrnnbGQhGV4RmOFwdVkNwhQMheYwQxhaIi7b9Z9A3gWAQm2BUoQOgRhgA8o7j1ozLC4LCyAZcx6kZI5qg4kLKqggDFFWxJySsUQVzlb4pwgAJaTRvokcVNgOqOv8zcHBCsL07DgNg8YsczzA5MxtUL+DMD8g0slxI/H8GQ/P/DJKyeKIRpglXZsIiBwBhP5O+VbI/JgAAAABJRU5ErkJggg==',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEX///8oeQBJ3ABV/wHM/7Lu/+ZU/gAqUP3dAAAAAXRSTlMAQObYZgAAAGJJREFUeF5Fi7ENg0AQBCfa/AFdDh2gdwPIogMK2E2+/xLslwOvdqRJhv+GQQPUCtJM7svankLrq/I+TY5e6Ueh1jyBMX7AFJi9vwfyVO4CbbO6jNYpp9GyVPbdkFhVgAQ2H0NOE5jk9DT8AAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4y2NgoBYI+cfwH4ZJVgMS0KhEYGyG4FQDkzjzf9P/d/+fgWl0QwiqgSkI/c8IxsgKkDXD5LFq9rwDweiK0A2HqcNqCK5wICSPEcLYAtH+AMN/IXMIBrEJRie6OEgjDAC5x3FqxuUFNiEUA67j1IweTTBxBQ1puAG86jgSEraogskJWSBcwCGF5k30qMJmgMFEhv/MXBAs5oLDAFj8IsczTE7UEeECbhU8+QGZRpaTi2b4L2zF8J9TGk80wjThykzY5AAW/2O1C2mIbgAAAABJRU5ErkJggg==',
        ],
        'xat-': [
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAG1BMVEX+AACLkZFub2yfaF3zZGIAAAD/AAD/iYr/zs8IPcF6AAAABXRSTlMAeprJ7xzg6IEAAABZSURBVAjXY2DABKGBSkqioQwMrGmpxsZhaQEMDGFpIa5pqSCRtPDSNJBIaGh5eShQDYOye0V7iREKAyQFYoiCFAcyILQDGcGmEEZYkGoqiMHKysAQEICwGwAAjBmBqhYlagAAAABJRU5ErkJggg==',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEUAAACEgoBva2ilamDxcG7IaWYgFBNOSEf//f0PDQwBAAA7LCwAAAD/AAD+hIX+m5z+zc5HAADPAAAGAADl032uAAAADHRSTlMAzNv0/vz+6v3+7ALrmfyXAAAAaUlEQVQY042PyxKAIAhFAc1eV7T6/3/N8VXOtAgWwBm4ANEPA8AswpySXHvvYZLlpBNrh9pDtcSqAQ1BUTVIjNUQY5icmwfglmXNgE0d6QBF9GigrU0A9LoM53U1kFzk6SBQuWfD/vHqDUCpBmVKTTM4AAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIVBMVEUAAACRjop4dXVpZ2tdcI9dfKdisfMAAAAumMN9xv+s2/+PADT2AAAAB3RSTlMAepGdv83v3HIc4QAAAFxJREFUCNdjYMAE5YXKRuLlDAzsHe2uIRUdBQwMFR1l6R3tIJGOyukdIJHy8lkry4FqGEwzV62aFozMUAFJOQEZ4iDFhQwI7UBGaTiEUVFs3g5isLMzMBQUIOwGAJRlIu9hk08QAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAACAgYVlc4ljsu4AAAAAAAAAAAAumMODyP6b1P6e1f/g8v89msgSIiwNFxwbPU3tQYj5AAAABnRSTlMAxej+9VTmD9ciAAAAZElEQVQI12NgwARpiUKKYmkMDGzlZUpK6eUJDAzp5clm5WUgkfKMtnKQSFpa54o0oBoGJYvZO88+gjJu7wMyhIBS2SCGGFDxaxADpP32NjAjSe0bSFd6epIaWISNjYEhJRVhNwAGlyJpYtcvcAAAAABJRU5ErkJggg==',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUfJSCRi5Frbm9dn19082KR/30AAABmzDOq/5vZ/9Gt/vt2AAAABnRSTlMAe5rJ7/4vxEp4AAAAWUlEQVQI12NgwARpiUpKYmkMDGzlZcbG6eUJDAzp5Slu5WUgkfLUsHKQSFpaRGsaUA2DsmvnjBAjFAZICsQQAylOZEBoBzKSzSCM9CS1MhCDjY2BISEBYTcAtgAcKSK2vuIAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAACBj39tfm1qj2RepFlu2VQAAQAAAAAAAABmyzOX/oSr/pus/pzk/98PGgtatC4CBAI1ENblAAAACHRSTlMA09/p9v77ig0SBcQAAABnSURBVBjTjY9LDsAgCEQRsR2xWu9/2hK/adJFYQG8wABEPwyAYzNnSatjjPAiviWLhPCqI1R7HBrQdCmGBrEETTmnUAq/QMm5dODHyAQOXXR1zLUGsIEI7lonMGfeHQTq9xw4P159AIxSBSC53km7AAAAAElFTkSuQmCC',
        ],
        'Mayhem': [
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR4AZ2R4WqEMBCEFy1yiJQQ14gcIhIuFBFR+qPQ93+v66QMksrlTwMfkZ2ZZbMKTgVqYIDl3YAbeCM31lJP/Zul4MAEPJjBQGNDLGsz8PQ6aqLAP5PTdd1WlmU09mSKtdTDRgrkzspJPKq6RxMahfj9yhOzQEZwZAwfzrk1ox3MXibIN8hO4MAjeV72CemJGWblnRsOYOdoGw0jebB20BPAwKzUQPlrFhrXFw1Wagu9yuzZwINzVAZCURRL+gRr7Wd8Vtqg4Th/lsUmewyk9WQ/A7NiwJz5VV/GmO+MNjMrFvh/NPDMigHTaeJN09a27ZHRJmalBg54CgfvAGYSLpoHjlmpuAwFdzDy7oGS/qIpM9UPFGg1b1kUlssAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVR4AYWSQWq0QBCFCw0SRIK0PQ4hiIhEZBhEySLyewUPEMgqR/JIXiDhzz7kKKYePIZajEzDRxfV9dWU3SO6IiVWUsVxT5R75Y4gTmwNnUh4kCulUiuV8sjChDjmKtaUcHgmHsnNrMPh0IVhiMIjKZGzNXDoyhMzF7C89z2KtFGD+FoNXEUKZdgpaPM8P++cDXTtBDca7EyQK8+bXTufYBccuvLAG26UnqN1LCgI4g/lm7zTgSux4vk0J8rnKw3+m1//pBPbBrVyGZVNmiAITviEtm3t+D+2QcJx7GUxlN4594K4ZY75Xzh0JVWqnad6TdP0H+LRNBjHcYNDV5xS32qwaC4my7Lwn6guu5QoomgbdFmWDYhnM8E8zxscuhLzPWtKA/dGqUizrityX9M0YX+DQ1ciXobnP6vgfmTOM7Znnk70B58pPaEvx+epAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4AZ3RUWqEMBSF4ftQZAhSREQJIiIXpQwi+tSldkFdWPsLhyEE0ocKH2Fyzg1mNJ4KAQ1arTUeeJMH6qwTUJmCHjMcC6KKtbSIylzdXpl18J/k4fdTpUFmPLOOa9bGe+P4+n5RYYfLXuiMsAlXofBxK2QXpvwN/jqg+AY91vR+pStk+apZe0fEhhMXDhUmWXEoO9WNmrWAzvRPq7jnB2jvUGfWTEgPcJzZFTbZk/0Tnh5QI+af6lVGvq/Do2atwVL4VJ+3QrZo1lr4Pw5wzVqDWaV7SUvHrZDNmrWAHq7g0rphkS3LXDMBVqFGhxGT1gGdDFnWaab6BRmXRvbxDmYiAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABQElEQVR4AY2SQUrEQBBFS9CMNFEkhAQdYmiCIUgcZlYGc4VsBcGVF/AuWXme4F7RtXiVWF9+Y9MYtOHRTdX/NZWaEj2RYpQTJeEdK4fKPuA7DjSGXiQkU0qlUqxySmFMEsYsNSU8zEmK4OwdEbmkKCclYoGmolfWCGyenh1O0EJE2gXNWpFC2S0IGrCQ29EbdPCPAmEHmXIxByf8hDAPD71yzAnXypatbSgoAN8Pyju5h4deMUrqJk1z+0uBN+/XX+gxfoFK2QafUJO2aRq//Q+/QIx2wr+Kwq0rusrP/QKf9MTCtbQLf9U1wNvYnz3qug45S68kSvVXgbPbx3nvYPXNOI7cRPWySukK+DcGCvA+urqZ3RmGAbmSXjFK5rpwW8nhWVJP04TYa9/3uO/goVciDiPlZhW8c8ZAHuRSeqIv32FK/GYGL8YAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR4AZ3RUWqEMBSF4ftQZAihDCKKiAQJShERQx+6o662e2p/4TCEQF468BEm95yLovFr4PBEq9PjgTd5wBcZp6559AiIWDAq6KXV3aJMUMfDOsTf7Mf/XaFBAvYiE9W16b74/vl8UeBAlKOSmWAzUiXwcavMkrrFE9QXVJ+gx5q9XvUVivmqrr1jxIYLCacCs6y6S8psGNU1hw4Bu4JHuUB3pzJBHZcviLiKV9jkyO4vxHyBx1h+qlcY5b2Wj+raE0vlU33dKrNFXWsR/7EgqmtPBIXuIw+dt8osqGsOPaIGSeeGRbZiFtVxsAYeHSbMOgd0MhSzTp3mD4RaQX4aW3NMAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4AYWS0UqFQBCGhziImNRBRImDmUgiIaF0kWSP4AMEXXXTE/QiPpL3UdR19Crb/PAvLEtyFj5mmfn/cdxd0RUokbJXEsZYCZUd4D72NBG8wkKmlEqtVMoFhTFJmKuoKelBTVIkjbNE5IainJTIeZqaXjkg8fp+Z7GCjiLQbWgOihTKsCFowUZtoNef4HgDf4JMuTbe8n/Br8NDr5zxhBul52i3FBQE+xflmzzTA69ESmpPmubunwZfztc/6IncBrXSe7/QkK5tW3f8H7dBjHH8q6Kwt033V6Hb4JeeWPgsq42rugfYZ92psWscRwMPvZIo9bEGD2+F2YUnBizLwpeoXnYpbQM34kAB9peP58aueZ4NPPRKxPusaRoYG6UizbquyH1O04T4RA+8EvAwUr6sgjFnDuReLaUn+ANygUa7+9SCWgAAAABJRU5ErkJggg==',
        ],
        '4chanJS': [
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAD/AABnZ2f///8nFk05AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAD/AABmZmYA/wBD99DBAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAAul8NnZ2f////82iC9AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAAAul8NnZ2f/AAD7B+mqAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUBAAAAAABmzDNlyjJnZ2f///+6o7dfAAAAAXRSTlMAQObYZgAAAERJREFUeF6NjkEKADEIA51o///lJZfQxUsHITogWi8AvwZJuxmYa25xDooBLEwOWFTYAsYVhdorLZt9Ng9xCUTCUCQ2H3F4ANrZ2WNiAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAAAABmzDNmZmb/AAC8/wCMAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCNdljcsRACEIQ5MOiNKAdGAJ9N/Uiu7nsMzABHgB4B8ygFoZA2hhVWavhhGeURPJU9q45+17hGbfGxa82Ndex3hEM44SJGD2/b4AzDgGlHbl388AAAAASUVORK5CYII=',
        ],
        'Original': [
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX/////AAD///8AAABBZmS3AAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR42q1RwQnAMAjMu5M4guAKXa4j5dUROo5tipSDcrFChUONd0di2m/hEGVOHDyIPufgwAFASDkpoSzmBrkJ2UMyR9LsJ3rvrqo3Rt1YMIMhhNnOxLMnoMFBxHyJAr2IOBFzA8U+6pLBdmEJTA0aMVjpDd6Loks0s5HZNwYx8tfZCZ0kll7ORffZAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///8ul8P///8AAACaqgkzAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAABBQcHFx4KISoNLToaVW4oKCgul8M4ODg7OzvBwcH///8uS/CdAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eILZO5/XI0UAgm7H9tOsu0yGWAQSOoFijHOxOANGqm/LczpOaXs4gISrPZ+gc2+hO5w2xdwgOjBFUIF+sEJrhUl9JFr+badFwR+BfqlmGUJAAAAAElFTkSuQmCC',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEX///9mzDP///8AAACT0n1lAAAAAXRSTlMAQObYZgAAAExJREFUeF4tyrENgDAMAMFXKuQswQLBG3mOlBnFS1gwDfIYLpEivvjq2MlqjmYvYg5jWEzCwtDSQlwcXKCVLrpFbvLvvSf9uZJ2HusDtJAY7Tkn1oYAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAAECAIQIAgWLAsePA8oKCg4ODg6dB07OztmzDPBwcH///+rsf3XAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2NWw6AIBAD1eIDhbn/cTVSCCTsfmw7ybbLZIBBIKkXKKU0E4M3aKT+tjCn5xiziwuIsNr7BTb7ErrDZV/AAaIHdwgV6AcnuFaU0Eeu5dt2XiUyBjCQ2bIrAAAAAElFTkSuQmCC',
        ],
        'Metro': [
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAC/AABrZQDiAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAC/AAD///8dAAApAABsAAAHAAA4AACQAAAsAABMCpCvAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAA1/GhpCidAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAAA1/H///8AISUALzQAeokACAkAQEcAorYAMTcE9WFNAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAABV/wErM5hwAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==',
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAABV/wH///8NKAASOAAwkQADCgAZTABAwQATOwC5e3VGAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=',
        ],
      }
      e = Qe.getOwn(e, t.favicon)
      const o = h
      let n = 0
      for (; e[n]; ) e[n] = 'data:image/png;base64,' + e[n++]
      return (
        ([
          o.unreadDead,
          o.unreadDeadY,
          o.unreadSFW,
          o.unreadSFWY,
          o.unreadNSFW,
          o.unreadNSFWY,
        ] = e),
        o.update()
      )
    },
    update() {
      return this.isSFW
        ? ((this.unread = this.unreadSFW), (this.unreadY = this.unreadSFWY))
        : ((this.unread = this.unreadNSFW), (this.unreadY = this.unreadNSFWY))
    },
    SFW: '//s.4cdn.org/image/favicon-ws.ico',
    NSFW: '//s.4cdn.org/image/favicon.ico',
    dead: 'data:image/gif;base64,R0lGODlhEAAQAKECAAAAAP8AAP///////yH5BAEKAAIALAAAAAAQABAAAAIvlI+pq+D9DAgUoFkPDlbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==',
    logo: 'data:image/png;base64,R0lGODlhEAAQAJEAAAAAAP///9vb2////yH5BAEAAAMALAAAAAAQABAAAAIvnI+pq+D9DBAUoFkPFnbs7lFZKIJOJJ3MyraoB14jFpOcVMpzrnF3OKlZYsMWowAAOw==',
  }
  const u = (e, t = a.body) => Array.from(t.querySelectorAll(e)),
    p = {
      init() {
        'yotsuba' !== o.SITE.software ||
          a.cookie.indexOf('pass_enabled=1') >= 0 ||
          (t['Force Noscript Captcha'] && jt.jsEnabled
            ? Qe.ready(this.noscript)
            : t.captchaLanguage.trim() &&
              (['boards.4chan.org', 'boards.4channel.org'].includes(
                location.hostname
              )
                ? Qe.onExists(i, '#captchaFormPart', e =>
                    Qe.onExists(
                      e,
                      'iframe[src^="https://www.google.com/recaptcha/"]',
                      this.iframe
                    )
                  )
                : Qe.onExists(
                    i,
                    'iframe[src^="https://www.google.com/recaptcha/"]',
                    this.iframe
                  )))
      },
      noscript() {
        let e, t, o
        if (!(t = Qe('#g-recaptcha')) || !(e = Qe('noscript', t.parentNode)))
          return
        const n = Qe.el('span', { id: 'captcha-forced-noscript' })
        Qe.replace(e, n), Qe.rm(t)
        const a = function () {
          ;(n.innerHTML = e.textContent),
            this.iframe(
              Qe('iframe[src^="https://www.google.com/recaptcha/"]', n)
            )
        }
        ;(o = Qe('#togglePostFormLink a, #form-link'))
          ? Qe.on(o, 'click', a)
          : a()
      },
      iframe(e) {
        let o
        if ((o = t.captchaLanguage.trim())) {
          const t = /[?&]hl=/.test(e.src)
            ? e.src.replace(/([?&]hl=)[^&]*/, '$1' + encodeURIComponent(o))
            : e.src + `&hl=${encodeURIComponent(o)}`
          e.src !== t && (e.src = t)
        }
      },
    },
    g = {
      init() {
        if (a.cookie.indexOf('pass_enabled=1') >= 0) return
        if (!(this.isEnabled = !!Qe('#t-root') || !Qe.id('postForm'))) return
        const e = Qe.el('div', { className: 'captcha-root' })
        return (
          (this.nodes = { root: e }),
          Qe.addClass(je.nodes.el, 'has-captcha', 'captcha-t'),
          Qe.after(je.nodes.com.parentNode, e)
        )
      },
      moreNeeded() {},
      getThread() {
        let e
        const t = o.BOARD.ID
        return (
          (e = 'new' === je.posts[0].thread ? '0' : '' + je.posts[0].thread),
          { boardID: t, threadID: e }
        )
      },
      setup(e) {
        if (this.isEnabled)
          return (
            this.nodes.container ||
              ((this.nodes.container = Qe.el('div', {
                className: 'captcha-container',
              })),
              Qe.prepend(this.nodes.root, this.nodes.container),
              (g.currentThread = g.getThread()),
              Qe.global(function () {
                const e = document.querySelector('#qr .captcha-container')
                return (
                  window.TCaptcha.init(e, this.boardID, +this.threadID),
                  window.TCaptcha.setErrorCb(e =>
                    window.dispatchEvent(
                      new CustomEvent('CreateNotification', {
                        detail: { type: 'warning', content: '' + e },
                      })
                    )
                  )
                )
              }, g.currentThread)),
            e ? Qe('#t-resp').focus() : void 0
          )
      },
      destroy() {
        if (this.isEnabled && this.nodes.container)
          return (
            Qe.global(() => window.TCaptcha.destroy()),
            Qe.rm(this.nodes.container),
            delete this.nodes.container
          )
      },
      updateThread() {
        if (!this.isEnabled) return
        const { boardID: e, threadID: t } = g.currentThread || {},
          o = g.getThread()
        return o.boardID !== e || o.threadID !== t
          ? (g.destroy(), g.setup())
          : void 0
      },
      getOne() {
        let e,
          t = {}
        if (this.nodes.container)
          for (var o of ['t-response', 't-challenge'])
            t[o] = Qe(`[name='${o}']`, this.nodes.container).value
        return (
          t['t-response'] ||
            ((e = Qe('#t-msg')) &&
              /Verification not required/i.test(e.textContent)) ||
            (t = null),
          t
        )
      },
      setUsed() {
        if (this.isEnabled)
          return this.nodes.container
            ? Qe.global(() => window.TCaptcha.clearChallenge())
            : void 0
      },
      occupied() {
        return !!this.nodes.container
      },
    },
    f = (e, t) => {
      let o = 0,
        n = null,
        a = null,
        i = null
      const r = function () {
        return (o = Date.now()), t.apply(a, i)
      }
      return function () {
        return (
          (i = arguments),
          (a = this),
          o < Date.now() - e ? r() : (clearTimeout(n), (n = setTimeout(r, e)))
        )
      }
    },
    m = () => Object.create(null)
  ;(m.clone = function (e) {
    if ('object' != typeof e || null === e) return e
    if (e instanceof Array) {
      const t = []
      for (let o = 0, n = e.length; o < n; o++) t.push(m.clone(e[o]))
      return t
    }
    {
      const n = Object.create(null)
      for (var t in e) {
        var o = e[t]
        n[t] = m.clone(o)
      }
      return n
    }
  }),
    (m.json = e => m.clone(JSON.parse(e)))
  const b = 1e3,
    A = 6e4,
    v = 36e5,
    w = 24 * v,
    x = window.GM_xmlhttpRequest ? 'userscript' : 'crx'
  class y {
    static initClass() {
      this.keys = [
        'hiddenThreads',
        'hiddenPosts',
        'lastReadPosts',
        'yourPosts',
        'watchedThreads',
        'watcherLastModified',
        'customTitles',
      ]
    }
    constructor(e, o, n) {
      if (
        ((this.changes = []),
        (this.onSync = this.onSync.bind(this)),
        (this.key = e),
        this.initData(t[this.key]),
        Qe.sync(this.key, this.onSync),
        n || this.clean(),
        o)
      ) {
        var i = () => (Qe.off(a, '4chanXInitFinished', i), (this.sync = o))
        Qe.on(a, '4chanXInitFinished', i)
      }
    }
    initData(e) {
      let t
      if (((this.data = e), this.data.boards)) {
        let e
        ;({ boards: t, lastChecked: e } = this.data),
          (this.data['4chan.org'] = { boards: t, lastChecked: e }),
          delete this.data.boards,
          delete this.data.lastChecked
      }
      return this.data[o.SITE.ID] || (this.data[o.SITE.ID] = { boards: m() })
    }
    save(e, t) {
      return (
        e(),
        this.changes.push(e),
        Qe.get(this.key, { boards: m() }, o => {
          if (!this.changes.length) return
          const n = (o[this.key].version || 0) > (this.data.version || 0)
          if (n) for (e of (this.initData(o[this.key]), this.changes)) e()
          return (
            (this.changes = []),
            (this.data.version = (this.data.version || 0) + 1),
            Qe.set(this.key, this.data, () => (n && this.sync?.(), t?.()))
          )
        })
      )
    }
    forceSync(e) {
      return Qe.get(this.key, { boards: m() }, t => {
        if ((t[this.key].version || 0) > (this.data.version || 0)) {
          for (var o of (this.initData(t[this.key]), this.changes)) o()
          this.sync?.()
        }
        return e?.()
      })
    }
    delete({ siteID: e, boardID: t, threadID: n, postID: a }, i) {
      if ((e || (e = o.SITE.ID), this.data[e]))
        return this.save(() => {
          if (a) {
            if (!this.data[e].boards[t]?.[n]) return
            return (
              delete this.data[e].boards[t][n][a],
              this.deleteIfEmpty({ siteID: e, boardID: t, threadID: n })
            )
          }
          if (n) {
            if (!this.data[e].boards[t]) return
            return (
              delete this.data[e].boards[t][n],
              this.deleteIfEmpty({ siteID: e, boardID: t })
            )
          }
          return delete this.data[e].boards[t]
        }, i)
    }
    deleteIfEmpty({ siteID: e, boardID: t, threadID: o }) {
      if (this.data[e])
        if (o) {
          if (!Object.keys(this.data[e].boards[t][o]).length)
            return (
              delete this.data[e].boards[t][o],
              this.deleteIfEmpty({ siteID: e, boardID: t })
            )
        } else if (!Object.keys(this.data[e].boards[t]).length)
          return delete this.data[e].boards[t]
    }
    set(e, t) {
      return this.save(() => this.setUnsafe(e), t)
    }
    setUnsafe({ siteID: e, boardID: t, threadID: n, postID: a, val: i }) {
      if (
        (e || (e = o.SITE.ID),
        this.data[e] || (this.data[e] = { boards: m() }),
        void 0 !== a)
      ) {
        let o
        return (((o = this.data[e].boards[t] || (this.data[e].boards[t] = m()))[
          n
        ] || (o[n] = m()))[a] = i)
      }
      return void 0 !== n
        ? ((this.data[e].boards[t] || (this.data[e].boards[t] = m()))[n] = i)
        : (this.data[e].boards[t] = i)
    }
    extend({ siteID: e, boardID: t, threadID: o, postID: n, val: a }, i) {
      return this.save(() => {
        const i = this.get({
          siteID: e,
          boardID: t,
          threadID: o,
          postID: n,
          defaultValue: m(),
        })
        for (var r in a) {
          var s = a[r]
          void 0 === s ? delete i[r] : (i[r] = s)
        }
        return this.setUnsafe({
          siteID: e,
          boardID: t,
          threadID: o,
          postID: n,
          val: i,
        })
      }, i)
    }
    setLastChecked(e = 'lastChecked') {
      return this.save(() => (this.data[e] = Date.now()))
    }
    get({ siteID: e, boardID: t, threadID: n, postID: a, defaultValue: i }) {
      let r, s
      if ((e || (e = o.SITE.ID), (r = this.data[e]?.boards[t]))) {
        let e
        if (null == n)
          if (null != a) {
            for (e = 0; e < r.length; e++)
              if ((r[e], a in e)) {
                s = e[a]
                break
              }
          } else s = r
        else (e = r[n]) && (s = null != a ? e[a] : e)
      }
      return s || i
    }
    clean() {
      let e, t
      const n = o.SITE.ID
      for (e in this.data[n].boards)
        this.data[n].boards[e], this.deleteIfEmpty({ siteID: n, boardID: e })
      const a = Date.now()
      if (a - 2 * v >= (t = this.data[n].lastChecked || 0) || t > a)
        for (e in ((this.data[n].lastChecked = a), this.data[n].boards))
          this.ajaxClean(e)
    }
    ajaxClean(e) {
      const t = this,
        n = o.SITE.ID,
        a = o.SITE.urls.threadsListJSON?.({ siteID: n, boardID: e })
      if (a)
        return Qe.cache(a, function () {
          if (200 !== this.status) return
          const a = o.SITE.urls.archiveListJSON?.({ siteID: n, boardID: e })
          if (!a) return t.ajaxCleanParse(e, this.response)
          const i = this.response
          return Qe.cache(a, function () {
            if (
              200 === this.status ||
              (!o.SITE.archivedBoardsKnown && 404 === this.status)
            )
              return t.ajaxCleanParse(e, i, this.response)
          })
        })
    }
    ajaxCleanParse(e, t, n) {
      let a, i
      const r = o.SITE.ID
      if (!(a = this.data[r].boards[e])) return
      const s = m()
      if (t)
        for (var l of t)
          for (var d of l.threads) (i = d.no), i in a && (s[i] = a[i])
      if (n) for (i of n) i in a && (s[i] = a[i])
      return (
        (this.data[r].boards[e] = s),
        this.deleteIfEmpty({ siteID: r, boardID: e }),
        Qe.set(this.key, this.data)
      )
    }
    onSync(e) {
      if (!((e.version || 0) <= (this.data.version || 0)))
        return this.initData(e), this.sync?.()
    }
  }
  y.initClass()
  class k {
    constructor() {
      this.keys = []
    }
    push(e, t) {
      return this[(e = `${e}`)] || this.keys.push(e), (this[e] = t)
    }
    rm(e) {
      let t
      if (((e = `${e}`), -1 !== (t = this.keys.indexOf(e))))
        return this.keys.splice(t, 1), delete this[e]
    }
    forEach(e) {
      for (var t of this.keys) e(this[t])
    }
    get(e) {
      return 'keys' === e ? void 0 : Qe.getOwn(this, e)
    }
  }
  class I {
    toString() {
      return this.ID
    }
    constructor(e, t) {
      ;(this.board = t),
        (this.ID = +e),
        (this.threadID = this.ID),
        (this.boardID = this.board.ID),
        (this.siteID = o.SITE.ID),
        (this.fullID = `${this.board}.${this.ID}`),
        (this.posts = new k()),
        (this.isDead = !1),
        (this.isHidden = !1),
        (this.isSticky = !1),
        (this.isClosed = !1),
        (this.isArchived = !1),
        (this.postLimit = !1),
        (this.fileLimit = !1),
        (this.lastPost = 0),
        (this.ipCount = void 0),
        (this.json = null),
        (this.OP = null),
        (this.catalogView = null),
        (this.nodes = { root: null }),
        this.board.threads.push(this.ID, this),
        o.threads.push(this.fullID, this)
    }
    setPage(e) {
      let t
      const { info: o, reply: n } = this.OP.nodes
      if (
        ((t = Qe('.page-num', o)) ||
          ((t = Qe.el('span', { className: 'page-num' })),
          Qe.replace(n.parentNode.previousSibling, [
            Qe.tn(' '),
            t,
            Qe.tn(' '),
          ])),
        (t.title = `This thread is on page ${e} in the original index.`),
        (t.textContent = `[${e}]`),
        this.catalogView)
      )
        return (this.catalogView.nodes.pageCount.textContent = e)
    }
    setCount(e, t, o) {
      if (!this.catalogView) return
      const n = this.catalogView.nodes[`${e}Count`]
      return (n.textContent = t), (o ? Qe.addClass : Qe.rmClass)(n, 'warning')
    }
    setStatus(e, t) {
      const o = `is${e}`
      if (this[o] !== t && ((this[o] = t), this.OP))
        return (
          this.setIcon('Sticky', this.isSticky),
          this.setIcon('Closed', this.isClosed && !this.isArchived),
          this.setIcon('Archived', this.isArchived)
        )
    }
    setIcon(e, t) {
      const n = e.toLowerCase()
      let a = Qe(`.${n}Icon`, this.OP.nodes.info)
      if (!!a === t) return
      if (!t)
        return (
          Qe.rm(a.previousSibling),
          Qe.rm(a),
          void (
            this.catalogView &&
            Qe.rm(Qe(`.${n}Icon`, this.catalogView.nodes.icons))
          )
        )
      ;(a = Qe.el('img', {
        src: `${o.SITE.Build.staticPath}${n}${o.SITE.Build.gifIcon}`,
        alt: e,
        title: e,
        className: `${n}Icon retina`,
      })),
        'f' === o.BOARD.ID && (a.style.cssText = 'height: 18px; width: 18px;')
      const i =
        'Sticky' !== e && this.isSticky
          ? Qe('.stickyIcon', this.OP.nodes.info)
          : Qe('.page-num', this.OP.nodes.info) || this.OP.nodes.quote
      return (
        Qe.after(i, [Qe.tn(' '), a]),
        this.catalogView
          ? ('Sticky' === e && this.isClosed ? Qe.prepend : Qe.add)(
              this.catalogView.nodes.icons,
              a.cloneNode()
            )
          : void 0
      )
    }
    kill() {
      return (this.isDead = !0)
    }
    collect() {
      let e = 0
      if (
        (this.posts.forEach(function (t) {
          return t.clones.length ? e++ : t.collect()
        }),
        !e)
      )
        return o.threads.rm(this.fullID), this.board.threads.rm(this)
    }
  }
  class C {
    toString() {
      return this.ID
    }
    constructor(e, t) {
      ;(this.thread = t),
        (this.ID = this.thread.ID),
        (this.board = this.thread.board)
      const { post: o } = this.thread.OP.nodes
      ;(this.nodes = {
        root: e,
        thumb: Qe('.catalog-thumb', o),
        icons: Qe('.catalog-icons', o),
        postCount: Qe('.post-count', o),
        fileCount: Qe('.file-count', o),
        pageCount: Qe('.page-count', o),
        replies: null,
      }),
        (this.thread.catalogView = this)
    }
  }
  var D = (function () {
      let e, t
      return (
        (D = class {
          static initClass() {
            ;(e = null), (t = null)
          }
          constructor(e) {
            ;(this.setPosition = this.setPosition.bind(this)),
              (this.close = this.close.bind(this)),
              (this.keybinds = this.keybinds.bind(this)),
              (this.onFocus = this.onFocus.bind(this)),
              (this.addEntry = this.addEntry.bind(this)),
              (this.type = e),
              Qe.on(a, 'AddMenuEntry', ({ detail: e }) => {
                if (e.type === this.type) return delete e.open, this.addEntry(e)
              }),
              (this.entries = [])
          }
          makeMenu() {
            const e = Qe.el('div', {
              className: 'dialog',
              id: 'menu',
              tabIndex: 0,
            })
            return (
              (e.dataset.type = this.type),
              Qe.on(e, 'click', e => e.stopPropagation()),
              Qe.on(e, 'keydown', this.keybinds),
              e
            )
          }
          toggle(o, n, a) {
            if ((o.preventDefault(), o.stopPropagation(), e)) {
              const o = t
              if ((e.close(), o === n)) return
            }
            if (this.entries.length) return this.open(n, a)
          }
          open(o, n) {
            let i
            const r = (this.menu = this.makeMenu())
            for (i of ((e = this),
            (t = o),
            this.entries.sort((e, t) => e.order - t.order),
            this.entries))
              this.insertEntry(i, r, n)
            return (
              Qe.addClass(t, 'active'),
              Qe.on(a, 'click CloseMenu', this.close),
              Qe.on(a, 'scroll', this.setPosition),
              Qe.on(window, 'resize', this.setPosition),
              Qe.after(o, r),
              this.setPosition(),
              (i = Qe('.entry', r)),
              this.focus(i),
              r.focus()
            )
          }
          setPosition() {
            const e = this.menu.getBoundingClientRect(),
              o = t.getBoundingClientRect()
            window.scrollY, o.top, window.scrollX, o.left
            const n = i.clientHeight,
              a = i.clientWidth,
              [r, s] =
                o.top + o.height + e.height < n
                  ? [`${o.bottom}px`, '']
                  : ['', n - o.top + 'px'],
              [l, d] =
                o.left + e.width < a
                  ? [`${o.left}px`, '']
                  : ['', a - o.right + 'px']
            return (
              Qe.extend(this.menu.style, {
                top: r,
                right: d,
                bottom: s,
                left: l,
              }),
              this.menu.classList.toggle('left', d)
            )
          }
          insertEntry(e, t, o) {
            let n
            if ('function' == typeof e.open)
              try {
                if (!e.open(o)) return
              } catch (e) {
                return void jt.handleErrors({
                  message: `Error in building the ${this.type} menu.`,
                  error: e,
                })
              }
            if ((Qe.add(t, e.el), e.subEntries)) {
              for (var a of ((n = Qe('.submenu', e.el)) && Qe.rm(n),
              (n = Qe.el('div', { className: 'dialog submenu' })),
              e.subEntries))
                this.insertEntry(a, n, o)
              Qe.add(e.el, n)
            }
          }
          close() {
            return (
              Qe.rm(this.menu),
              delete this.menu,
              Qe.rmClass(t, 'active'),
              (e = null),
              (t = null),
              Qe.off(a, 'click scroll CloseMenu', this.close),
              Qe.off(a, 'scroll', this.setPosition),
              Qe.off(window, 'resize', this.setPosition)
            )
          }
          findNextEntry(e, t) {
            const o = [...e.parentNode.children]
            return (
              o.sort((e, t) => e.style.order - t.style.order),
              o[o.indexOf(e) + t]
            )
          }
          keybinds(e) {
            let o,
              n,
              a,
              i = Qe('.focused', this.menu)
            for (; (o = Qe('.focused', i)); ) i = o
            switch (e.keyCode) {
              case 27:
                t.focus(), this.close()
                break
              case 13:
              case 32:
                i.click()
                break
              case 38:
                ;(n = this.findNextEntry(i, -1)) && this.focus(n)
                break
              case 40:
                ;(n = this.findNextEntry(i, 1)) && this.focus(n)
                break
              case 39:
                if ((a = Qe('.submenu', i)) && (n = a.firstElementChild)) {
                  let e
                  for (; (e = this.findNextEntry(n, -1)); ) n = e
                  this.focus(n)
                }
                break
              case 37:
                ;(n = Qe.x(
                  'parent::*[contains(@class,"submenu")]/parent::*',
                  i
                )) && this.focus(n)
                break
              default:
                return
            }
            return e.preventDefault(), e.stopPropagation()
          }
          onFocus(e) {
            return e.stopPropagation(), this.focus(e.target)
          }
          focus(e) {
            let t, o
            for (
              ;
              (t = Qe.x('parent::*/child::*[contains(@class,"focused")]', e));

            )
              Qe.rmClass(t, 'focused')
            for (t of u('.focused', e)) Qe.rmClass(t, 'focused')
            if ((Qe.addClass(e, 'focused'), !(o = Qe('.submenu', e)))) return
            const n = o.getBoundingClientRect(),
              a = e.getBoundingClientRect(),
              r = i.clientHeight,
              s = i.clientWidth,
              [l, d] = a.top + n.height < r ? ['0px', 'auto'] : ['auto', '0px'],
              [c, h] =
                a.right + n.width < s - 150
                  ? ['100%', 'auto']
                  : ['auto', '100%'],
              { style: p } = o
            return (p.top = l), (p.bottom = d), (p.left = c), (p.right = h)
          }
          addEntry(e) {
            return this.parseEntry(e), this.entries.push(e)
          }
          parseEntry(e) {
            const { el: t, subEntries: o } = e
            if (
              (Qe.addClass(t, 'entry'),
              Qe.on(t, 'focus mouseover', this.onFocus),
              (t.style.order = e.order || 100),
              o)
            )
              for (var n of (Qe.addClass(t, 'has-submenu'), o))
                this.parseEntry(n)
          }
        }),
        D.initClass(),
        D
      )
    })(),
    E = function (e) {
      let o
      if ('mousedown' === e.type && 0 !== e.button) return
      e.preventDefault(),
        (o = 'touchstart' === e.type) &&
          (e = e.changedTouches[e.changedTouches.length - 1])
      const n = Qe.x('ancestor::div[contains(@class,"dialog")][1]', this),
        r = n.getBoundingClientRect(),
        s = i.clientHeight,
        l = i.clientWidth,
        d = {
          id: n.id,
          style: n.style,
          dx: e.clientX - r.left,
          dy: e.clientY - r.top,
          height: s - r.height,
          width: l - r.width,
          screenHeight: s,
          screenWidth: l,
          isTouching: o,
        }
      return (
        ([d.topBorder, d.bottomBorder] =
          t['Header auto-hide'] || !t['Fixed Header']
            ? [0, 0]
            : t['Bottom Header']
              ? [0, Xe.bar.getBoundingClientRect().height]
              : [Xe.bar.getBoundingClientRect().height, 0]),
        o
          ? ((d.identifier = e.identifier),
            (d.move = S.bind(d)),
            (d.up = R.bind(d)),
            Qe.on(a, 'touchmove', d.move),
            Qe.on(a, 'touchend touchcancel', d.up))
          : ((d.move = T.bind(d)),
            (d.up = B.bind(d)),
            Qe.on(a, 'mousemove', d.move),
            Qe.on(a, 'mouseup', d.up))
      )
    },
    S = function (e) {
      for (var t of e.changedTouches)
        if (t.identifier === this.identifier) return void T.call(this, t)
    },
    T = function (e) {
      const { clientX: t, clientY: o } = e
      let n = t - this.dx
      n =
        n < 10
          ? 0
          : this.width - n < 10
            ? ''
            : (n / this.screenWidth) * 100 + '%'
      let a = o - this.dy
      a =
        a < 10 + this.topBorder
          ? this.topBorder + 'px'
          : this.height - a < 10 + this.bottomBorder
            ? ''
            : (a / this.screenHeight) * 100 + '%'
      const i = '' === n ? 0 : '',
        r = '' === a ? this.bottomBorder + 'px' : '',
        { style: s } = this
      return (s.left = n), (s.right = i), (s.top = a), (s.bottom = r)
    },
    R = function (e) {
      for (var t of e.changedTouches)
        if (t.identifier === this.identifier) return void B.call(this)
    },
    B = function () {
      return (
        this.isTouching
          ? (Qe.off(a, 'touchmove', this.move),
            Qe.off(a, 'touchend touchcancel', this.up))
          : (Qe.off(a, 'mousemove', this.move), Qe.off(a, 'mouseup', this.up)),
        Qe.set(`${this.id}.position`, this.style.cssText)
      )
    }
  const P = function ({
    root: e,
    el: t,
    latestEvent: o,
    endEvents: n,
    height: r,
    width: s,
    cb: l,
    noRemove: d,
  }) {
    const c = e.getBoundingClientRect(),
      h = {
        root: e,
        el: t,
        style: t.style,
        isImage: ['IMG', 'VIDEO'].includes(t.nodeName),
        cb: l,
        endEvents: n,
        latestEvent: o,
        clientHeight: i.clientHeight,
        clientWidth: i.clientWidth,
        height: r,
        width: s,
        noRemove: d,
        clientX: (c.left + c.right) / 2,
        clientY: (c.top + c.bottom) / 2,
      }
    return (
      (h.hover = M.bind(h)),
      (h.hoverend = N.bind(h)),
      h.hover(h.latestEvent),
      new MutationObserver(function () {
        if (t.parentNode) return h.hover(h.latestEvent)
      }).observe(t, { childList: !0 }),
      Qe.on(e, n, h.hoverend),
      Qe.x('ancestor::div[contains(@class,"inline")][1]', e) &&
        Qe.on(a, 'keydown', h.hoverend),
      Qe.on(e, 'mousemove', h.hover),
      (h.workaround = function (t) {
        if (!e.contains(t.target)) return h.hoverend(t)
      }),
      Qe.on(i, 'mousemove', h.workaround)
    )
  }
  P.padding = 25
  var M = function (e) {
      this.latestEvent = e
      const o = (this.height || this.el.offsetHeight) + P.padding,
        n = this.width || this.el.offsetWidth,
        { clientX: a, clientY: i } = t['Follow Cursor'] ? e : this,
        r = this.isImage
          ? Math.max(0, (i * (this.clientHeight - o)) / this.clientHeight)
          : Math.max(0, Math.min(this.clientHeight - o, i - 120))
      let s = this.clientWidth / 2
      this.isImage || (s = Math.max(s, this.clientWidth - 400))
      let l = (a <= s ? a : this.clientWidth - a) + 45
      this.isImage && (l = Math.min(l, this.clientWidth - n)), (l += 'px')
      const [d, c] = a <= s ? [l, ''] : ['', l],
        { style: h } = this
      return (h.top = r + 'px'), (h.left = d), (h.right = c)
    },
    N = function (e) {
      if (
        ('keydown' !== e.type || 13 === e.keyCode) &&
        'TEXTAREA' !== e.target.nodeName
      )
        return (
          this.noRemove || Qe.rm(this.el),
          Qe.off(this.root, this.endEvents, this.hoverend),
          Qe.off(a, 'keydown', this.hoverend),
          Qe.off(this.root, 'mousemove', this.hover),
          Qe.off(i, 'mousemove', this.workaround),
          this.cb ? this.cb.call(this) : void 0
        )
    }
  const L = {
    dialog: function (e, o) {
      const n = Qe.el('div', { className: 'dialog', id: e })
      Qe.extend(n, o), (n.style.cssText = t[`${e}.position`])
      const a = Qe('.move', n)
      for (var i of (Qe.on(a, 'touchstart mousedown', E), a.children))
        i.tagName && Qe.on(i, 'touchstart mousedown', e => e.stopPropagation())
      return n
    },
    Menu: D,
    hover: P,
    checkbox: function (e, o, n) {
      null == n && (n = t[e])
      const a = Qe.el('label'),
        i = Qe.el('input', { type: 'checkbox', name: e, checked: n })
      return Qe.add(a, [i, Qe.tn(` ${o}`)]), a
    },
  }
  var F = {
      init() {
        switch (o.VIEW) {
          case 'index':
            if (!t['Index Navigation']) return
            break
          case 'thread':
            if (!t['Reply Navigation']) return
            break
          default:
            return
        }
        const e = Qe.el('span', { id: 'navlinks' }),
          n = Qe.el('a', { textContent: '▲', href: 'javascript:;' }),
          i = Qe.el('a', { textContent: '▼', href: 'javascript:;' })
        Qe.on(n, 'click', this.prev),
          Qe.on(i, 'click', this.next),
          Qe.add(e, [n, Qe.tn(' '), i])
        var r = function () {
          return Qe.off(a, '4chanXInitFinished', r), Qe.add(a.body, e)
        }
        return Qe.on(a, '4chanXInitFinished', r)
      },
      prev: () => ('thread' === o.VIEW ? window.scrollTo(0, 0) : F.scroll(-1)),
      next: () =>
        'thread' === o.VIEW
          ? window.scrollTo(0, a.body.scrollHeight)
          : F.scroll(1),
      getThread() {
        if ('thread' === o.VIEW)
          return o.threads.get(`${o.BOARD}.${o.THREADID}`).nodes.root
        if (!Qe.hasClass(i, 'catalog-mode'))
          for (var e of u(o.SITE.selectors.thread)) {
            var t = We.threadFromRoot(e)
            if (
              (!t.isHidden || t.stub) &&
              Xe.getTopOf(e) >= -e.getBoundingClientRect().height
            )
              return e
          }
      },
      scroll(e) {
        let t
        a.activeElement?.blur()
        let n = F.getThread()
        if (!n) return
        const r = 1 === e ? 'following' : 'preceding'
        if (
          (t = Qe.x(`${r}-sibling::${o.SITE.xpath.thread}[not(@hidden)][1]`, n))
        ) {
          const o = Xe.getTopOf(n)
          ;((1 === e && o < 5) || (-1 === e && o > -5)) && (n = t)
        }
        const s =
          Xe.getTopOf(n) +
          i.clientHeight -
          a.body.getBoundingClientRect().bottom
        return (
          s > 0 && (a.body.style.marginBottom = `${s}px`),
          Xe.scrollTo(n),
          s > 0 && !F.haveExtra
            ? ((F.haveExtra = !0), Qe.on(a, 'scroll', F.removeExtra))
            : void 0
        )
      },
      removeExtra() {
        const e = i.clientHeight - a.body.getBoundingClientRect().bottom
        return e > 0
          ? (a.body.style.marginBottom = `${e}px`)
          : ((a.body.style.marginBottom = ''),
            delete F.haveExtra,
            Qe.off(a, 'scroll', F.removeExtra))
      },
    },
    O = {
      init() {
        if (
          (this.useFaster = /\S/.test(t.fourchanImageHost)) &&
          'yotsuba' === o.SITE.software &&
          ['index', 'thread'].includes(o.VIEW)
        )
          return l.Post.push({ name: 'Image Host Rewriting', cb: this.node })
      },
      suggestions: ['i.4cdn.org', 'is2.4chan.org'],
      host: () => t.fourchanImageHost.trim() || 'i.4cdn.org',
      flashHost: () => 'i.4cdn.org',
      thumbHost: () => 'i.4cdn.org',
      test: e => 'i.4cdn.org' === e || O.regex.test(e),
      regex: /^is\d*\.4chan(?:nel)?\.org$/,
      node() {
        if (this.isClone) return
        const e = O.host()
        return (
          this.file &&
            O.test(this.file.url.split('/')[2]) &&
            !/\.swf$/.test(this.file.url) &&
            ((this.file.link.hostname = e),
            this.file.thumbLink && (this.file.thumbLink.hostname = e),
            (this.file.url = this.file.link.href)),
          O.fixLinks(u('a', this.nodes.comment))
        )
      },
      fixLinks(e) {
        for (var t of e)
          if (O.test(t.hostname) && !/\.swf$/.test(t.pathname)) {
            var o = O.host()
            t.hostname !== o && (t.hostname = o)
          }
      },
    },
    $ = {
      init() {
        if (
          !['index', 'thread'].includes(o.VIEW) ||
          (!t['Image Expansion'] &&
            !t['Image Hover'] &&
            !t['Image Hover in Catalog'] &&
            !t.Gallery)
        )
          return
        if (
          (Qe.sync('Allow Sound', function (e) {
            ;(t['Allow Sound'] = e), $.inputs && ($.inputs.unmute.checked = e)
          }),
          Qe.sync('Default Volume', function (e) {
            ;(t['Default Volume'] = e), $.inputs && ($.inputs.volume.value = e)
          }),
          t['Mouse Wheel Volume'] &&
            l.Post.push({ name: 'Mouse Wheel Volume', cb: this.node }),
          o.SITE.noAudio?.(o.BOARD))
        )
          return
        t['Mouse Wheel Volume'] &&
          l.CatalogThread.push({
            name: 'Mouse Wheel Volume',
            cb: this.catalogNode,
          })
        const e = L.checkbox('Allow Sound', 'Allow Sound')
        e.title = c.main['Images and Videos']['Allow Sound'][1]
        const a = Qe.el('label', { title: 'Default volume for videos.' })
        return (
          Qe.extend(a, {
            innerHTML:
              '<input name="Default Volume" type="range" min="0" max="1" step="0.01" value="' +
              n(t['Default Volume']) +
              '"> Volume',
          }),
          (this.inputs = {
            unmute: e.firstElementChild,
            volume: a.firstElementChild,
          }),
          Qe.on(this.inputs.unmute, 'change', Qe.cb.checked),
          Qe.on(this.inputs.volume, 'change', Qe.cb.value),
          Xe.menu.addEntry({ el: e, order: 200 }),
          Xe.menu.addEntry({ el: a, order: 201 })
        )
      },
      setup: e => (
        (e.muted = !t['Allow Sound']),
        (e.volume = t['Default Volume']),
        Qe.on(e, 'volumechange', $.change)
      ),
      change() {
        const { muted: e, volume: o } = this,
          n = { 'Allow Sound': !e, 'Default Volume': o }
        for (var a in n) {
          var i = n[a]
          t[a] === i && delete n[a]
        }
        if ((Qe.set(n), Qe.extend(t, n), $.inputs))
          return ($.inputs.unmute.checked = !e), ($.inputs.volume.value = o)
      },
      node() {
        if (!o.SITE.noAudio?.(this.board))
          for (var e of this.files)
            e.isVideo &&
              (e.thumb && Qe.on(e.thumb, 'wheel', $.wheel.bind(Xe.hover)),
              Qe.on(
                Qe('.file-info', e.text) || e.link,
                'wheel',
                $.wheel.bind(e.thumbLink)
              ))
      },
      catalogNode() {
        const e = this.thread.OP.files[0]
        if (e?.isVideo)
          return Qe.on(this.nodes.thumb, 'wheel', $.wheel.bind(Xe.hover))
      },
      wheel(e) {
        let t
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return
        if (!(t = Qe('video:not([data-md5])', this))) return
        if (t.muted || !Qe.hasAudio(t)) return
        let o = t.volume + 0.1
        return (
          e.deltaY < 0 && (o *= 1.1),
          e.deltaY > 0 && (o /= 1.1),
          (t.volume = Qe.minmax(o - 0.1, 0, 1)),
          e.preventDefault()
        )
      },
    },
    j = {
      pause(e) {
        if ('VIDEO' === e.nodeName)
          return e.pause(), Qe.off(e, 'volumechange', $.change), (e.muted = !0)
      },
      rewind(e) {
        if ('VIDEO' === e.nodeName) {
          if (e.readyState >= e.HAVE_METADATA) return (e.currentTime = 0)
        } else if (/\.gif$/.test(e.src))
          return Qe.queueTask(() => (e.src = e.src))
      },
      pushCache: e => ((j.cache = e), Qe.on(e, 'error', j.cacheError)),
      popCache() {
        const e = j.cache
        return Qe.off(e, 'error', j.cacheError), delete j.cache, e
      },
      cacheError() {
        if (j.cache === this) return delete j.cache
      },
      decodeError(e, t) {
        let o
        return (
          e.error?.code === MediaError.MEDIA_ERR_DECODE &&
          ((o = Qe('.warning', t.thumb.parentNode)) ||
            ((o = Qe.el('div', { className: 'warning' })),
            Qe.after(t.thumb, o)),
          (o.textContent = 'Error: Corrupt or unplayable video'),
          !0)
        )
      },
      isFromArchive: e =>
        'yotsuba' === o.SITE.software && !O.test(e.src.split('/')[2]),
      error(e, n, a, i, r) {
        let s
        const l = a.url.split('/')
        let d = null
        if (
          ('yotsuba' === o.SITE.software &&
            t['404 Redirect'] &&
            (d = et.to('file', {
              boardID: n.board.ID,
              filename: l[l.length - 1],
            })),
          (d && et.securityCheck(d)) || (d = null),
          (n.isDead || a.isDead) && !j.isFromArchive(e))
        )
          return r(d)
        if (
          (null != i && (s = setTimeout(() => r(d), i)), n.isDead || a.isDead)
        )
          return
        const c = function () {
            if (!j.isFromArchive(e)) return null != i && clearTimeout(s), r(d)
          },
          h = o.SITE.urls.threadJSON?.(n)
        if (h) {
          var u = function (e) {
            let t, i
            if (404 === this.status) {
              let t
              !e && (t = o.SITE.urls.archivedThreadJSON?.(n))
                ? Qe.ajax(t, {
                    onloadend() {
                      return u.call(this, !0)
                    },
                  })
                : n.kill(!n.isClone, a.index)
            }
            if (200 !== this.status) return c()
            for (i of this.response.posts) if (i.no === n.ID) break
            return i.no !== n.ID
              ? (n.kill(), c())
              : ((t = a.docIndex),
                o.SITE.Build.parseJSON(i, n.board).filesDeleted.includes(t)
                  ? (n.kill(!0), c())
                  : (d = a.url))
          }
          return Qe.ajax(h, {
            onloadend() {
              return u.call(this)
            },
          })
        }
      },
      addControls(e) {
        var t = function () {
          Qe.off(e, 'mouseover', t)
          const o = new Date().getTime()
          return Qe.asap(
            () =>
              'gecko' !== Qe.engine ||
              (e.readyState >= 3 &&
                e.currentTime <= Math.max(0.1, e.duration - 0.5)) ||
              new Date().getTime() >= o + 1e3,
            () => (e.controls = !0)
          )
        }
        return Qe.on(e, 'mouseover', t)
      },
      onControls: e =>
        (t['Show Controls'] &&
          t['Click Passthrough'] &&
          'VIDEO' === e.target.nodeName) ||
        (e.target.controls &&
          e.target.getBoundingClientRect().bottom - e.clientY < 35),
      download(e) {
        if ('blob:' === this.protocol) return !0
        e.preventDefault()
        const { href: t, download: o } = this
        return He.file(t, function (e) {
          if (e) {
            const t = Qe.el('a', {
              href: URL.createObjectURL(e),
              download: o,
              hidden: !0,
            })
            return Qe.add(a.body, t), t.click(), Qe.rm(t)
          }
          return new _e('warning', `Could not download ${t}`, 20)
        })
      },
    }
  const q = {
    setupSync(e, t) {
      e.addEventListener('playing', () => {
        ;(t.currentTime = e.currentTime), t.play()
      }),
        e.addEventListener('pause', () => {
          t.pause()
        }),
        e.addEventListener('seeked', () => {
          t.currentTime = e.currentTime
        }),
        e.addEventListener('ratechange', () => {
          ;(t.currentTime = e.currentTime), (t.playbackRate = e.playbackRate)
        }),
        e.addEventListener('waiting', () => {
          ;(t.currentTime = e.currentTime), t.pause()
        }),
        t.addEventListener(
          'canplay',
          () => {
            t.currentTime < 0.1 && (e.currentTime = 0)
          },
          { once: !0 }
        )
    },
    setupAudioSlider(e, t) {
      const o = document.createElement('span')
      o.appendChild(document.createTextNode('🔊︎ '))
      const n = document.createElement('input')
      ;(n.type = 'range'),
        (n.max = '1'),
        (n.step = '0.01'),
        (n.valueAsNumber = t.volume),
        n.addEventListener('input', () => {
          t.volume = n.valueAsNumber
        }),
        o.appendChild(n)
      const a = document.createElement('a')
      return (
        (a.href = t.src),
        (a.download = ''),
        (a.target = '_blank'),
        (a.textContent = ' 📥︎'),
        o.appendChild(a),
        o
      )
    },
  }
  var U = {
    init() {
      if (
        (this.enabled =
          t['Image Expansion'] && ['index', 'thread'].includes(o.VIEW))
      )
        return (
          (this.EAI = Qe.el('a', {
            className: 'expand-all-shortcut',
            textContent: '➕︎',
            title: 'Expand All Images',
            href: 'javascript:;',
          })),
          Qe.on(this.EAI, 'click', this.cb.toggleAll),
          Xe.addShortcut('expand-all', this.EAI, 520),
          Qe.on(a, 'scroll visibilitychange', this.cb.playVideos),
          (this.videoControls = Qe.el('span', { className: 'video-controls' })),
          Qe.extend(this.videoControls, {
            innerHTML:
              ' <a href="javascript:;" title="You can also contract the video by dragging it to the left.">contract</a>',
          }),
          l.Post.push({ name: 'Image Expansion', cb: this.node })
        )
    },
    node() {
      if (this.file && (this.file.isImage || this.file.isVideo))
        if ((Qe.on(this.file.thumbLink, 'click', U.cb.toggle), this.isClone)) {
          if (this.file.isExpanding) return U.contract(this), U.expand(this)
          if (this.file.isExpanded && this.file.isVideo)
            return (
              $.setup(this.file.fullImage),
              U.setupVideoCB(this),
              U.setupVideo(
                this,
                !this.origin.file.fullImage?.paused ||
                  this.origin.file.wasPlaying,
                this.file.fullImage.controls
              )
            )
        } else if (
          U.on &&
          !this.isHidden &&
          !this.isFetchedQuote &&
          (t['Expand spoilers'] || !this.file.isSpoiler) &&
          (t['Expand videos'] || !this.file.isVideo)
        )
          return U.expand(this)
    },
    cb: {
      toggle(e) {
        if (Qe.modifiedClick(e)) return
        const o = We.postFromNode(this),
          { file: n } = o
        return n.isExpanded && j.onControls(e)
          ? void 0
          : (e.preventDefault(),
            !t.Autoplay && n.fullImage?.paused
              ? n.fullImage.play()
              : U.toggle(o))
      },
      toggleAll() {
        let e
        Qe.event('CloseMenu')
        const n = F.getThread(),
          a = function (a) {
            const { file: r } = a
            if (
              r &&
              (r.isImage || r.isVideo) &&
              i.contains(a.nodes.root) &&
              (!U.on ||
                !(
                  (!t['Expand spoilers'] && r.isSpoiler) ||
                  (!t['Expand videos'] && r.isVideo) ||
                  (t['Expand from here'] && Xe.getTopOf(r.thumb) < 0) ||
                  (t['Expand thread only'] &&
                    'index' === o.VIEW &&
                    !n?.contains(r.thumb))
                ))
            )
              return Qe.queueTask(e, a)
          }
        return (
          (U.on = Qe.hasClass(U.EAI, 'expand-all-shortcut'))
            ? ((U.EAI.className = 'contract-all-shortcut'),
              (U.EAI.title = 'Contract All Images'),
              (U.EAI.textContent = '➖︎'),
              (e = U.expand))
            : ((U.EAI.className = 'expand-all-shortcut'),
              (U.EAI.title = 'Expand All Images'),
              (U.EAI.textContent = '➕︎'),
              (e = U.contract)),
          o.posts.forEach(function (e) {
            for (e of [e, ...e.clones]) a(e)
          })
        )
      },
      playVideos: () =>
        o.posts.forEach(function (e) {
          for (e of [e, ...e.clones]) {
            var { file: t } = e
            if (t && t.isVideo && t.isExpanded) {
              var o = t.fullImage,
                n = (Qe.hasAudio(o) && !o.muted) || Xe.isNodeVisible(o)
              n && t.wasPlaying
                ? (delete t.wasPlaying, o.play())
                : n || o.paused || ((t.wasPlaying = !0), o.pause())
            }
          }
        }),
      setFitness() {
        return Qe[this.checked ? 'addClass' : 'rmClass'](
          i,
          this.name.toLowerCase().replace(/\s+/g, '-')
        )
      },
    },
    toggle(e) {
      if (!e.file.isExpanding && !e.file.isExpanded)
        return (e.file.scrollIntoView = t['Scroll into view']), void U.expand(e)
      if ((U.contract(e), t['Advance on contract'])) {
        let t = e.nodes.root
        for (
          ;
          (t = Qe.x(
            "following::div[contains(@class,'postContainer')][1]",
            t
          )) &&
          (Qe('.stub', t) || 0 === t.offsetHeight);

        );
        if (t) return Xe.scrollTo(t)
      }
    },
    contract(e) {
      let o, n, r, s
      const { file: l } = e
      if ((n = l.fullImage)) {
        ;(o = Xe.getTopOf(n) + n.getBoundingClientRect().height),
          (r = a.body.clientHeight),
          ({ scrollY: s } = window)
      }
      for (var d of (Qe.rmClass(e.nodes.root, 'expanded-image'),
      Qe.rmClass(l.thumb, 'expanding'),
      Qe.rm(l.videoControls),
      (l.thumbLink.href = l.url),
      (l.thumbLink.target = '_blank'),
      [
        'isExpanding',
        'isExpanded',
        'videoControls',
        'wasPlaying',
        'scrollIntoView',
      ]))
        delete l[d]
      if (n) {
        if (
          (i.contains(n) &&
            (o <= 0
              ? window.scrollBy(0, s - window.scrollY + a.body.clientHeight - r)
              : Xe.scrollToIfNeeded(e.nodes.root),
            window.scrollX > 0 && window.scrollBy(-window.scrollX, 0)),
          Qe.off(n, 'error', U.error),
          j.pushCache(n),
          l.isVideo)
        )
          for (var c in (j.pause(n), U.videoCB)) {
            var h = U.videoCB[c]
            Qe.off(n, c, h)
          }
        t['Restart when Opened'] && j.rewind(l.thumb),
          delete l.fullImage,
          Qe.queueTask(function () {
            if (
              !l.isExpanding &&
              !l.isExpanded &&
              (Qe.rmClass(n, 'full-image'), !n.id)
            )
              return Qe.rm(n)
          }),
          l.audio &&
            (l.audio.remove(),
            delete l.audio,
            l.audioSlider && (l.audioSlider.remove(), delete l.audioSlider))
      }
    },
    expand(e, o) {
      const { file: n } = e,
        { thumb: a, thumbLink: i, isVideo: r } = n
      if (e.isHidden || n.isExpanding || n.isExpanded) return
      let s
      if (
        (Qe.addClass(a, 'expanding'),
        (n.isExpanding = !0),
        n.fullImage
          ? (s = n.fullImage)
          : j.cache?.dataset.fileID === `${e.fullID}.${n.index}`
            ? ((s = n.fullImage = j.popCache()),
              Qe.on(s, 'error', U.error),
              t['Restart when Opened'] && 'ihover' !== s.id && j.rewind(s),
              s.removeAttribute('id'))
            : ((s = n.fullImage = Qe.el(r ? 'video' : 'img')),
              (s.dataset.fileID = `${e.fullID}.${n.index}`),
              Qe.on(s, 'error', U.error),
              (s.src = o || n.url)),
        (s.className = 'full-image'),
        Qe.after(a, s),
        r &&
          (n.videoControls ||
            ((n.videoControls = U.videoControls.cloneNode(!0)),
            Qe.add(n.text, n.videoControls)),
          i.removeAttribute('href'),
          i.removeAttribute('target'),
          (s.loop = !0),
          $.setup(s),
          U.setupVideoCB(e)),
        r
          ? s.readyState >= s.HAVE_METADATA
            ? U.completeExpand(e)
            : Qe.on(s, 'loadedmetadata', () => U.completeExpand(e))
          : Qe.asap(
              () => s.naturalHeight,
              () => U.completeExpand(e)
            ),
        t['Enable sound posts'] && t['Allow Sound'])
      ) {
        const e = n.name.match(/\[sound=([^\]]+)]/)
        if (e) {
          let o = decodeURIComponent(e[1])
          o.startsWith('http') || (o = `https://${o}`)
          const a = Qe.el('audio', { src: o })
          $.setup(a),
            r
              ? (q.setupSync(s, a),
                t['Show Controls'] &&
                  ((n.audioSlider = q.setupAudioSlider(s, a)),
                  Qe.after(s.parentElement, n.audioSlider)))
              : ((a.controls = t['Show Controls']), (a.autoplay = t.Autoplay)),
            Qe.after(s, a),
            (n.audio = a)
        }
      }
    },
    completeExpand(e) {
      const { file: o } = e
      if (!o.isExpanding) return
      const n = Xe.getTopOf(o.thumb) + o.thumb.getBoundingClientRect().height,
        r = a.body.clientHeight,
        { scrollY: s } = window
      if (
        (Qe.addClass(e.nodes.root, 'expanded-image'),
        Qe.rmClass(o.thumb, 'expanding'),
        (o.isExpanded = !0),
        delete o.isExpanding,
        i.contains(e.nodes.root) &&
          n <= 0 &&
          window.scrollBy(0, s - window.scrollY + a.body.clientHeight - r),
        o.scrollIntoView)
      ) {
        delete o.scrollIntoView
        const e = Math.min(
          i.clientHeight - o.fullImage.getBoundingClientRect().bottom - 25,
          Xe.getBottomOf(o.fullImage)
        )
        e < 0 && window.scrollBy(0, Math.min(-e, Xe.getTopOf(o.fullImage)))
      }
      return o.isVideo
        ? U.setupVideo(e, t.Autoplay, t['Show Controls'])
        : void 0
    },
    setupVideo(e, t, o) {
      const { fullImage: n } = e.file
      if (t)
        return (
          (n.controls = !1),
          Qe.asap(
            () => i.contains(n),
            function () {
              return !a.hidden && Xe.isNodeVisible(n)
                ? n.play()
                : (e.file.wasPlaying = !0)
            }
          ),
          o ? j.addControls(n) : void 0
        )
      n.controls = o
    },
    videoCB: (function () {
      let e = !1
      return {
        mouseover: () => (e = !1),
        mousedown(t) {
          if (0 === t.button) return (e = !0)
        },
        mouseup(t) {
          if (0 === t.button) return (e = !1)
        },
        mouseout(t) {
          if (
            (1 & t.buttons || e) &&
            t.clientX <= this.getBoundingClientRect().left
          )
            return U.toggle(We.postFromNode(this))
        },
      }
    })(),
    setupVideoCB(e) {
      for (var t in U.videoCB) {
        var o = U.videoCB[t]
        Qe.on(e.file.fullImage, t, o)
      }
      if (e.file.videoControls)
        return Qe.on(e.file.videoControls.firstElementChild, 'click', () =>
          U.toggle(e)
        )
    },
    error() {
      const e = We.postFromNode(this)
      if (
        (Qe.rm(this),
        delete e.file.fullImage,
        e.file.isExpanding || e.file.isExpanded)
      )
        return j.decodeError(this, e.file) || j.isFromArchive(this)
          ? U.contract(e)
          : j.error(this, e, e.file, 1e4, function (t) {
              if (
                (e.file.isExpanding || e.file.isExpanded) &&
                (U.contract(e), t)
              )
                return U.expand(e, t)
            })
    },
    menu: {
      init() {
        if (!U.enabled) return
        const e = Qe.el('span', {
            textContent: 'Image Expansion',
            className: 'image-expansion-link',
          }),
          { createSubEntry: t } = U.menu,
          o = []
        for (var n in c.imageExpansion) {
          var a = c.imageExpansion[n]
          o.push(t(n, a[1]))
        }
        return Xe.menu.addEntry({ el: e, order: 105, subEntries: o })
      },
      createSubEntry(e, t) {
        const o = L.checkbox(e, e)
        o.title = t
        const n = o.firstElementChild
        return (
          ['Fit width', 'Fit height'].includes(e) &&
            Qe.on(n, 'change', U.cb.setFitness),
          Qe.event('change', null, n),
          Qe.on(n, 'change', Qe.cb.checked),
          { el: o }
        )
      },
    },
  }
  class H {
    toString() {
      return this.ID
    }
    constructor(e, n, a, i = {}) {
      // @normalizedOriginal = Test.normalize root
      if (void 0 === e && void 0 === n && void 0 === a) return
      if (
        ((this.root = e),
        (this.thread = n),
        (this.board = a),
        Qe.extend(this, i),
        (this.ID = +e.id.match(/\d*$/)[0]),
        (this.postID = this.ID),
        (this.threadID = this.thread.ID),
        (this.boardID = this.board.ID),
        (this.siteID = o.SITE.ID),
        (this.fullID = `${this.board}.${this.ID}`),
        (this.context = this),
        (this.isReply = this.ID !== this.threadID),
        (e.dataset.fullID = this.fullID),
        (this.nodes = this.parseNodes(e)),
        !this.isReply)
      ) {
        for (var r of ((this.thread.OP = this),
        ['isSticky', 'isClosed', 'isArchived'])) {
          var s
          ;(s = o.SITE.selectors.icons[r]) &&
            (this.thread[r] = !!Qe(s, this.nodes.info))
        }
        this.thread.isArchived &&
          ((this.thread.isClosed = !0), this.thread.kill())
      }
      const l = this.nodes.name?.textContent,
        d = this.nodes.tripcode?.textContent
      if (
        ((this.info = {
          subject: this.nodes.subject?.textContent || void 0,
          name: l,
          email: this.nodes.email
            ? decodeURIComponent(this.nodes.email.href.replace(/^mailto:/, ''))
            : void 0,
          tripcode: d,
          uniqueID: this.nodes.uniqueID?.textContent,
          capcode: this.nodes.capcode?.textContent.replace('## ', ''),
          pass: this.nodes.pass?.title.match(/\d*$/)[0],
          flagCode: this.nodes.flag?.className
            .match(/flag-(\w+)/)?.[1]
            .toUpperCase(),
          flagCodeTroll: this.nodes.flag?.className
            .match(/bfl-(\w+)/)?.[1]
            .toUpperCase(),
          flag: this.nodes.flag?.title,
          date: this.nodes.date ? o.SITE.parseDate(this.nodes.date) : void 0,
          nameBlock: t.Anonymize ? 'Anonymous' : `${l || ''} ${d || ''}`.trim(),
        }),
        this.info.capcode &&
          (this.info.nameBlock += ` ## ${this.info.capcode}`),
        this.info.uniqueID &&
          (this.info.nameBlock += ` (ID: ${this.info.uniqueID})`),
        this.parseComment(),
        this.parseQuotes(),
        this.parseFiles(),
        (this.isDead = !1),
        (this.isHidden = !1),
        (this.clones = []),
        o.posts.get(this.fullID))
      )
        for (var c of ((this.isRebuilt = !0),
        (this.clones = o.posts.get(this.fullID).clones),
        this.clones))
          c.origin = this
      !this.isFetchedQuote &&
        this.ID > this.thread.lastPost &&
        (this.thread.lastPost = this.ID),
        this.board.posts.push(this.ID, this),
        this.thread.posts.push(this.ID, this),
        o.posts.push(this.fullID, this),
        (this.isFetchedQuote = !1),
        (this.isClone = !1)
    }
    parseNodes(e) {
      const t = o.SITE.selectors,
        n = Qe(t.post, e) || e,
        a = Qe(t.infoRoot, n),
        i = {
          root: e,
          bottom:
            this.isReply || !o.SITE.isOPContainerThread ? e : Qe(t.opBottom, e),
          post: n,
          info: a,
          comment: Qe(t.comment, n),
          quotelinks: [],
          archivelinks: [],
          embedlinks: [],
          backlinks: n.getElementsByClassName('backlink'),
          uniqueIDRoot: void 0,
          uniqueID: void 0,
        }
      for (var r in t.info) {
        var s = t.info[r]
        i[r] = Qe(s, a)
      }
      return (
        o.SITE.parseNodes?.(this, i),
        i.uniqueIDRoot || (i.uniqueIDRoot = i.uniqueID),
        i
      )
    }
    parseComment() {
      let e
      return (
        this.nodes.comment.normalize(),
        (this.nodes.commentClean = e = this.nodes.comment.cloneNode(!0)),
        o.SITE.cleanComment?.(e),
        (this.info.comment = this.nodesToText(e))
      )
    }
    commentDisplay() {
      const e = this.nodes.commentClean.cloneNode(!0)
      return (
        t['Remove Spoilers'] || t['Reveal Spoilers'] || this.cleanSpoilers(e),
        o.SITE.cleanCommentDisplay?.(e),
        this.nodesToText(e).trim().replace(/\s+$/gm, '')
      )
    }
    commentOrig() {
      const e = this.nodes.commentClean.cloneNode(!0)
      return o.SITE.insertTags?.(e), this.nodesToText(e)
    }
    nodesToText(e) {
      let t,
        o = ''
      const n = Qe.X('.//br|.//text()', e)
      let a = 0
      for (; (t = n.snapshotItem(a++)); ) o += t.data || '\n'
      return o
    }
    cleanSpoilers(e) {
      const t = u(o.SITE.selectors.spoiler, e)
      for (var n of t) Qe.replace(n, Qe.tn('[spoiler]'))
    }
    parseQuotes() {
      for (var e of ((this.quotes = []),
      u(o.SITE.selectors.quotelink, this.nodes.comment)))
        this.parseQuote(e)
    }
    parseQuote(e) {
      const t = e.href.match(o.SITE.regexp.quotelink)
      if (!(t || (this.isClone && e.dataset.postID))) return
      if ((this.nodes.quotelinks.push(e), this.isClone)) return
      const n = `${t[1]}.${t[3]}`
      this.quotes.includes(n) || this.quotes.push(n)
    }
    parseFiles() {
      let e
      this.files = []
      const t = this.fileRoots()
      let o = 0
      for (let a = 0; a < t.length; a++) {
        var n = t[a]
        ;(e = this.parseFile(n)) &&
          ((e.index = o++), (e.docIndex = a), this.files.push(e))
      }
      if (this.files.length) return (this.file = this.files[0])
    }
    fileRoots() {
      if (o.SITE.selectors.multifile) {
        const e = u(o.SITE.selectors.multifile, this.nodes.root)
        if (e.length) return e
      }
      return [this.nodes.root]
    }
    parseFile(e) {
      const t = { isDead: !1 }
      for (var n in o.SITE.selectors.file) {
        var a = o.SITE.selectors.file[n]
        t[n] = Qe(a, e)
      }
      if (((t.thumbLink = t.thumb?.parentNode), !t.text || !t.link)) return
      if (!o.SITE.parseFile(this, t)) return
      Qe.extend(t, {
        url: t.link.href,
        isImage: Qe.isImage(t.link.href),
        isVideo: Qe.isVideo(t.link.href),
      })
      let i = +t.size.match(/[\d.]+/)[0],
        r = ['B', 'KB', 'MB', 'GB'].indexOf(t.size.match(/\w+$/)[0])
      for (; r-- > 0; ) i *= 1024
      return (t.sizeInBytes = i), t
    }
    kill(e = !1, t = 0) {
      let o
      if (e) {
        if (this.isDead || this.files[t].isDead) return
        ;(this.files[t].isDead = !0),
          Qe.addClass(this.nodes.root, 'deleted-file')
      } else {
        if (this.isDead) return
        ;(this.isDead = !0),
          Qe.rmClass(this.nodes.root, 'deleted-file'),
          Qe.addClass(this.nodes.root, 'deleted-post')
      }
      if (
        ((o = Qe('strong.warning', this.nodes.info)) ||
          ((o = Qe.el('strong', { className: 'warning' })),
          Qe.after(Qe('input', this.nodes.info), o)),
        (o.textContent = e ? '[File deleted]' : '[Deleted]'),
        !this.isClone)
      ) {
        for (var n of this.clones) n.kill(e, t)
        if (!e)
          for (var a of We.allQuotelinksLinkingTo(this))
            Qe.hasClass(a, 'deadlink') ||
              (Qe.add(a, H.deadMark.cloneNode(!0)), Qe.addClass(a, 'deadlink'))
      }
    }
    resurrect() {
      ;(this.isDead = !1), Qe.rmClass(this.nodes.root, 'deleted-post')
      const e = Qe('strong.warning', this.nodes.info)
      if (
        (this.files.some(e => e.isDead)
          ? (Qe.addClass(this.nodes.root, 'deleted-file'),
            (e.textContent = '[File deleted]'))
          : Qe.rm(e),
        !this.isClone)
      ) {
        for (var t of this.clones) t.resurrect()
        for (var o of We.allQuotelinksLinkingTo(this))
          Qe.hasClass(o, 'deadlink') &&
            (Qe.rm(Qe('.qmark-dead', o)), Qe.rmClass(o, 'deadlink'))
      }
    }
    collect() {
      o.posts.rm(this.fullID),
        this.thread.posts.rm(this),
        this.board.posts.rm(this)
    }
    addClone(e, t) {
      return l.Post.execute(this), new V(this, e, t)
    }
    rmClone(e) {
      for (var t of (this.clones.splice(e, 1), this.clones.slice(e)))
        t.nodes.root.dataset.clone = e++
    }
    setCatalogOP(e) {
      this.nodes.root.classList.toggle('catalog-container', e),
        this.nodes.root.classList.toggle('opContainer', !e),
        this.nodes.post.classList.toggle('catalog-post', e),
        this.nodes.post.classList.toggle('op', !e),
        (this.nodes.post.style.left = this.nodes.post.style.right = null)
    }
  }
  H.deadMark = (() => {
    const e = document.createElement('span')
    return (e.textContent = ' (Dead)'), (e.className = 'qmark-dead'), e
  })()
  class V extends H {
    constructor(e, t, n) {
      let a, i, r
      for (r of (super(),
      (this.isClone = !0),
      (this.origin = e),
      (this.context = t),
      [
        'ID',
        'postID',
        'threadID',
        'boardID',
        'siteID',
        'fullID',
        'board',
        'thread',
        'info',
        'quotes',
        'isReply',
      ]))
        this[r] = this.origin[r]
      const { nodes: s } = this.origin,
        l = n ? this.cloneWithoutVideo(s.root) : s.root.cloneNode(!0)
      for (var d of [l, ...u('[id]', l)]) d.id += `_${V.suffix}`
      for (var c of (V.suffix++, u('.inline', l))) Qe.rm(c)
      for (var h of u('.inlined', l)) Qe.rmClass(h, 'inlined')
      for (var p of ((this.nodes = this.parseNodes(l)),
      (l.hidden = !1),
      Qe.rmClass(l, 'forwarded'),
      Qe.rmClass(this.nodes.post, 'highlight'),
      this.isReply ||
        (this.setCatalogOP(!1),
        Qe.rm(Qe('.catalog-link', this.nodes.post)),
        Qe.rm(Qe('.catalog-stats', this.nodes.post)),
        Qe.rm(Qe('.catalog-replies', this.nodes.post))),
      this.parseQuotes(),
      (this.quotes = [...this.origin.quotes]),
      (this.files = []),
      this.origin.files.length && (i = this.fileRoots()),
      this.origin.files)) {
        a = {
          ...p,
        }
        var g = i[a.docIndex]
        for (r in o.SITE.selectors.file) {
          var f = o.SITE.selectors.file[r]
          a[r] = Qe(f, g)
        }
        ;(a.thumbLink = a.thumb?.parentNode),
          a.thumbLink && (a.fullImage = Qe('.full-image', a.thumbLink)),
          (a.videoControls = Qe('.video-controls', a.text)),
          a.videoThumb && (a.thumb.muted = !0),
          this.files.push(a)
      }
      return (
        this.files.length &&
          ((this.file = this.files[0]),
          this.file.thumb && n && U.contract(this)),
        this.origin.isDead && (this.isDead = !0),
        (l.dataset.clone = this.origin.clones.push(this) - 1),
        this
      )
    }
    cloneWithoutVideo(e) {
      if ('VIDEO' !== e.tagName || e.dataset.md5) {
        if (e.nodeType === Node.ELEMENT_NODE && Qe('video', e)) {
          const o = e.cloneNode(!1)
          for (var t of e.childNodes) Qe.add(o, this.cloneWithoutVideo(t))
          return o
        }
        return e.cloneNode(!0)
      }
      return []
    }
  }
  V.suffix = 0
  var Q = {
      init() {
        if (['index', 'thread'].includes(o.VIEW) && t.Menu)
          return (
            (this.button = Qe.el('a', {
              className: 'menu-button',
              href: 'javascript:;',
            })),
            Qe.extend(this.button, { textContent: '🞃' }),
            (this.menu = new L.Menu('post')),
            l.Post.push({ name: 'Menu', cb: this.node }),
            l.CatalogThread.push({ name: 'Menu', cb: this.catalogNode })
          )
      },
      node() {
        if (this.isClone) {
          const e = Qe('.menu-button', this.nodes.info)
          return (
            Qe.rmClass(e, 'active'),
            Qe.rm(Qe('.dialog', this.nodes.info)),
            void Q.makeButton(this, e)
          )
        }
        return Qe.add(this.nodes.info, Q.makeButton(this))
      },
      catalogNode() {
        return Qe.after(this.nodes.icons, Q.makeButton(this.thread.OP))
      },
      makeButton: (e, t) => (
        t || (t = Q.button.cloneNode(!0)),
        Qe.on(t, 'click', function (t) {
          return Q.menu.toggle(t, this, e)
        }),
        t
      ),
    },
    z = {
      recursives: m(),
      init() {
        if (['index', 'thread'].includes(o.VIEW))
          return l.Post.push({ name: 'Recursive', cb: this.node })
      },
      node() {
        if (!this.isClone && !this.isFetchedQuote)
          for (var e of this.quotes) {
            var t
            if ((t = z.recursives[e]))
              for (var o = 0; o < t.recursives.length; o++) {
                ;(0, t.recursives[o])(this, ...t.args[o])
              }
          }
      },
      add(e, t, ...o) {
        const n =
          z.recursives[t.fullID] ||
          (z.recursives[t.fullID] = { recursives: [], args: [] })
        return n.recursives.push(e), n.args.push(o)
      },
      rm(e, t) {
        let o
        if ((o = z.recursives[t.fullID]))
          for (let t = 0; t < o.recursives.length; t++) {
            o.recursives[t] === e &&
              (o.recursives.splice(t, 1), o.args.splice(t, 1))
          }
      },
      apply(e, t, ...n) {
        const { fullID: a } = t
        return o.posts.forEach(function (t) {
          if (t.quotes.includes(a)) return e(t, ...n)
        })
      },
    },
    W = {
      init() {
        if (
          ['index', 'thread'].includes(o.VIEW) &&
          (t['Reply Hiding Buttons'] || (t.Menu && t['Reply Hiding Link']))
        )
          return (
            t['Reply Hiding Buttons'] && Qe.addClass(i, 'reply-hide'),
            (this.db = new y('hiddenPosts')),
            l.Post.push({ name: 'Reply Hiding', cb: this.node })
          )
      },
      isHidden: (e, t, o) =>
        !(!W.db || !W.db.get({ boardID: e, threadID: t, postID: o })),
      node() {
        let e, n
        if (!this.isReply || this.isClone || this.isFetchedQuote) return
        if (
          ((e = W.db.get({
            boardID: this.board.ID,
            threadID: this.thread.ID,
            postID: this.ID,
          })) &&
            (e.thisPost
              ? W.hide(this, e.makeStub, e.hideRecursively)
              : (z.apply(W.hide, this, e.makeStub, !0),
                z.add(W.hide, this, e.makeStub, !0))),
          !t['Reply Hiding Buttons'])
        )
          return
        const a = W.makeButton(this, 'hide')
        if ((n = o.SITE.selectors.sideArrows)) {
          const e = Qe(n, this.nodes.root)
          return (
            Qe.replace(e.firstChild, a), (e.className = 'replacedSideArrows')
          )
        }
        return Qe.prepend(this.nodes.info, a)
      },
      menu: {
        init() {
          if (
            !['index', 'thread'].includes(o.VIEW) ||
            !t.Menu ||
            !t['Reply Hiding Link']
          )
            return
          let e = Qe.el('div', {
              className: 'hide-reply-link',
              textContent: 'Hide',
            }),
            n = Qe.el('a', { textContent: 'Apply', href: 'javascript:;' })
          Qe.on(n, 'click', W.menu.hide)
          let a = L.checkbox('thisPost', 'This post', !0),
            i = L.checkbox('replies', 'Hide replies', t['Recursive Hiding'])
          const r = L.checkbox('makeStub', 'Make stub', t.Stubs)
          Q.menu.addEntry({
            el: e,
            order: 20,
            open: e =>
              !(!e.isReply || e.isClone || e.isHidden) &&
              ((W.menu.post = e), !0),
            subEntries: [{ el: n }, { el: a }, { el: i }, { el: r }],
          }),
            (e = Qe.el('div', {
              className: 'show-reply-link',
              textContent: 'Show',
            })),
            (n = Qe.el('a', { textContent: 'Apply', href: 'javascript:;' })),
            Qe.on(n, 'click', W.menu.show),
            (a = L.checkbox('thisPost', 'This post', !1)),
            (i = L.checkbox('replies', 'Show replies', !1))
          const s = Qe.el('a', {
            textContent: 'Hide stub',
            href: 'javascript:;',
          })
          return (
            Qe.on(s, 'click', W.menu.hideStub),
            Q.menu.addEntry({
              el: e,
              order: 20,
              open(e) {
                let o
                return (
                  !(!e.isReply || e.isClone || !e.isHidden) &&
                  !!(o = W.db.get({
                    boardID: e.board.ID,
                    threadID: e.thread.ID,
                    postID: e.ID,
                  })) &&
                  ((W.menu.post = e),
                  (a.firstChild.checked = e.isHidden),
                  (i.firstChild.checked =
                    null != o?.hideRecursively
                      ? o.hideRecursively
                      : t['Recursive Hiding']),
                  !0)
                )
              },
              subEntries: [{ el: n }, { el: a }, { el: i }],
            }),
            Q.menu.addEntry({
              el: s,
              order: 15,
              open: e =>
                !(!e.isReply || e.isClone || !e.isHidden) &&
                !!W.db.get({
                  boardID: e.board.ID,
                  threadID: e.thread.ID,
                  postID: e.ID,
                }) &&
                (W.menu.post = e),
            })
          )
        },
        hide() {
          const e = this.parentNode,
            t = Qe('input[name=thisPost]', e).checked,
            o = Qe('input[name=replies]', e).checked,
            n = Qe('input[name=makeStub]', e).checked,
            { post: a } = W.menu
          if (t) W.hide(a, n, o)
          else {
            if (!o) return
            z.apply(W.hide, a, n, !0), z.add(W.hide, a, n, !0)
          }
          return W.saveHiddenState(a, !0, t, n, o), Qe.event('CloseMenu')
        },
        show() {
          let e
          const t = this.parentNode,
            o = Qe('input[name=thisPost]', t).checked,
            n = Qe('input[name=replies]', t).checked,
            { post: a } = W.menu
          if (o) W.show(a, n)
          else {
            if (!n) return
            z.apply(W.show, a, !0), z.rm(W.hide, a, !0)
          }
          return (
            (e = W.db.get({
              boardID: a.board.ID,
              threadID: a.thread.ID,
              postID: a.ID,
            })) && W.saveHiddenState(a, !(o && n), !o, e.makeStub, !n),
            Qe.event('CloseMenu')
          )
        },
        hideStub() {
          let e
          const { post: t } = W.menu
          ;(e = W.db.get({
            boardID: t.board.ID,
            threadID: t.thread.ID,
            postID: t.ID,
          })) &&
            (W.show(t, e.hideRecursively),
            W.hide(t, !1, e.hideRecursively),
            W.saveHiddenState(t, !0, !0, !1, e.hideRecursively)),
            Qe.event('CloseMenu')
        },
      },
      makeButton(e, t) {
        const o = Qe.el('span', { textContent: 'hide' === t ? '➖︎' : '➕︎' }),
          n = Qe.el('a', {
            className: `${t}-reply-button`,
            href: 'javascript:;',
          })
        return Qe.add(n, o), Qe.on(n, 'click', W.toggle), n
      },
      saveHiddenState(e, t, o, n, a) {
        const i = { boardID: e.board.ID, threadID: e.thread.ID, postID: e.ID }
        return t
          ? ((i.val = { thisPost: !1 !== o, makeStub: n, hideRecursively: a }),
            W.db.set(i))
          : W.db.delete(i)
      },
      toggle() {
        const e = We.postFromNode(this)
        return (
          W[e.isHidden ? 'show' : 'hide'](e), W.saveHiddenState(e, e.isHidden)
        )
      },
      hide(e, o = t.Stubs, n = t['Recursive Hiding']) {
        if (e.isHidden) return
        for (var a of ((e.isHidden = !0),
        n && (z.apply(W.hide, e, o, !0), z.add(W.hide, e, o, !0)),
        We.allQuotelinksLinkingTo(e)))
          Qe.addClass(a, 'filtered')
        if (!o) return void (e.nodes.root.hidden = !0)
        const i = W.makeButton(e, 'show')
        return (
          Qe.add(i, Qe.tn(` ${e.info.nameBlock}`)),
          (e.nodes.stub = Qe.el('div', { className: 'stub' })),
          Qe.add(e.nodes.stub, i),
          t.Menu && Qe.add(e.nodes.stub, Q.makeButton(e)),
          Qe.prepend(e.nodes.root, e.nodes.stub)
        )
      },
      show(e, o = t['Recursive Hiding']) {
        for (var n of (e.nodes.stub
          ? (Qe.rm(e.nodes.stub), delete e.nodes.stub)
          : (e.nodes.root.hidden = !1),
        (e.isHidden = !1),
        o && (z.apply(W.show, e, !0), z.rm(W.hide, e)),
        We.allQuotelinksLinkingTo(e)))
          Qe.rmClass(n, 'filtered')
      },
    },
    G = {
      INTERVAL: 3e4,
      init() {
        if (
          (((['index', 'thread', 'archive'].includes(o.VIEW) &&
            t['Relative Post Dates'] &&
            !t['Relative Date Title']) ||
            pe.enabled) &&
            (this.flush(),
            Qe.on(a, 'visibilitychange PostsInserted', this.flush)),
          t['Relative Post Dates'])
        )
          return l.Post.push({ name: 'Relative Post Dates', cb: this.node })
      },
      node() {
        if (!this.info.date) return
        const e = this.nodes.date
        if (t['Relative Date Title']) Qe.on(e, 'mouseover', () => G.hover(this))
        else if (!this.isClone) return (e.title = e.textContent), G.update(this)
      },
      relative(e, t, o, n) {
        let a,
          i = (() => {
            if ((a = e / w) >= 1) {
              const e = t.getFullYear() - o.getFullYear()
              let n = t.getMonth() - o.getMonth()
              const i = t.getDate() - o.getDate()
              return e > 1
                ? ((a = e - (n < 0 || (0 === n && i < 0))), 'year')
                : 1 === e && (n > 0 || (0 === n && i >= 0))
                  ? ((a = e), 'year')
                  : (n += 12 * e) > 1
                    ? ((a = n - (i < 0)), 'month')
                    : 1 === n && i >= 0
                      ? ((a = n), 'month')
                      : 'day'
            }
            return (a = e / v) >= 1
              ? 'hour'
              : (a = e / A) >= 1
                ? 'minute'
                : ((a = Math.max(0, e) / b), 'second')
          })()
        const r = Math.round(a)
        return (
          n ? (i = 'month' === i ? 'mo' : i[0]) : 1 !== r && (i += 's'),
          n ? `${r}${i}` : `${r} ${i} ago`
        )
      },
      stale: [],
      flush() {
        if (a.hidden) return
        const e = new Date()
        for (var t of G.stale) G.update(t, e)
        return (
          (G.stale = []),
          clearTimeout(G.timeout),
          (G.timeout = setTimeout(G.flush, G.INTERVAL))
        )
      },
      hover(e) {
        const { date: t } = e.info,
          o = new Date(),
          n = o - t
        return (e.nodes.date.title = G.relative(n, o, t))
      },
      update(e, t) {
        let o, n
        const a = e instanceof H
        a
          ? (({ date: n } = e.info), (o = !1))
          : ((n = new Date(+e.dataset.utc)), (o = !!e.dataset.abbrev)),
          t || (t = new Date())
        const i = t - n,
          r = G.relative(i, t, n, o)
        if (a)
          for (var s of [e].concat(e.clones))
            s.nodes.date.firstChild.textContent = r
        else e.firstChild.textContent = r
        return G.setOwnTimeout(i, e)
      },
      setOwnTimeout(e, t) {
        const o =
          e < A
            ? b - ((e + 500) % b)
            : e < v
              ? A - ((e + 3e4) % A)
              : e < w
                ? v - ((e + v / 2) % v)
                : w - ((e + w / 2) % w)
        return setTimeout(G.markStale, o, t)
      },
      markStale(e) {
        if (
          !G.stale.includes(e) &&
          (!(e instanceof H) || o.posts.get(e.fullID)) &&
          (!(e instanceof Element) || i.contains(e))
        )
          return G.stale.push(e)
      },
    },
    Y = {
      cbs: [],
      init() {
        let e
        if ('yotsuba' !== o.SITE.software) return
        const n = Date.now()
        if (n - 2 * v >= (e = t.boardConfig.lastChecked || 0) || e > n)
          return Qe.ajax(`${location.protocol}//a.4cdn.org/boards.json`, {
            onloadend: this.load,
          })
        {
          const { boards: e } = t.boardConfig
          return this.set(e)
        }
      },
      load() {
        let e
        if (200 === this.status && this.response && this.response.boards) {
          for (var o of ((e = m()), this.response.boards)) e[o.board] = o
          Qe.set('boardConfig', { boards: e, lastChecked: Date.now() })
        } else {
          ;({ boards: e } = t.boardConfig)
          const o = (() => {
            switch (this.status) {
              case 0:
                return 'Connection Error'
              case 200:
                return 'Invalid Data'
              default:
                return `Error ${this.statusText} (${this.status})`
            }
          })()
          new _e('warning', `Failed to load board configuration. ${o}`, 20)
        }
        return Y.set(e)
      },
      set(e) {
        for (var t in ((this.boards = e), o.boards)) {
          o.boards[t].config = this.boards[t] || {}
        }
        for (var n of this.cbs) Qe.queueTask(n)
      },
      ready(e) {
        return this.boards ? e() : this.cbs.push(e)
      },
      sfwBoards(e) {
        return (() => {
          const o = [],
            n = this.boards || t.boardConfig.boards
          for (var a in n) {
            !!n[a].ws_board === e && o.push(a)
          }
          return o
        })()
      },
      isSFW(e) {
        return !!(this.boards || t.boardConfig.boards)[e]?.ws_board
      },
      domain: e => `boards.${Y.isSFW(e) ? '4channel' : '4chan'}.org`,
      isArchived(e) {
        const o = (this.boards || t.boardConfig.boards)[e]
        return !o || o.is_archived
      },
      noAudio(e) {
        if ('yotsuba' !== o.SITE.software) return !1
        const n = this.boards || t.boardConfig.boards
        return n && n[e] && !n[e].webm_audio
      },
      title(e) {
        return (this.boards || t.boardConfig.boards)?.[e]?.title || ''
      },
    }
  class J {
    toString() {
      return this.ID
    }
    constructor(e) {
      ;(this.ID = e),
        (this.boardID = this.ID),
        (this.siteID = o.SITE.ID),
        (this.threads = new k()),
        (this.posts = new k()),
        (this.config = Y.boards?.[this.ID] || {}),
        (o.boards[this] = this)
    }
    cooldowns() {
      const e = (this.config || {}).cooldowns || {},
        t = {
          thread: e.threads || 0,
          reply: e.replies || 0,
          image: e.images || 0,
          thread_global: 300,
        }
      if (a.cookie.indexOf('pass_enabled=1') >= 0)
        for (var o of ['reply', 'image']) t[o] = Math.ceil(t[o] / 2)
      return t
    }
  }
  const K = {
    init() {
      return Qe.on(a, 'QRPostSuccessful', e => {
        if (e.detail.redirect)
          return (
            (this.event = e),
            (this.delays = 0),
            Qe.queueTask(() => {
              if (e === this.event && 0 === this.delays)
                return (location.href = e.detail.redirect)
            })
          )
      })
    },
    delays: 0,
    delay() {
      if (!this.event) return null
      const e = this.event
      return (
        this.delays++,
        () => {
          if (e === this.event)
            return (
              this.delays--,
              0 === this.delays ? (location.href = e.detail.redirect) : void 0
            )
        }
      )
    },
  }
  var X = {
      init() {
        if ('index' === o.VIEW && t['Comment Expansion'] && !t['JSON Index'])
          return l.Post.push({ name: 'Comment Expansion', cb: this.node })
      },
      node() {
        let e
        if ((e = Qe('.abbr > a:not([onclick])', this.nodes.comment)))
          return Qe.on(e, 'click', X.cb)
      },
      callbacks: [],
      cb(e) {
        return e.preventDefault(), X.expand(We.postFromNode(this))
      },
      expand(e) {
        let t
        return e.nodes.longComment && !e.nodes.longComment.parentNode
          ? (Qe.replace(e.nodes.shortComment, e.nodes.longComment),
            void (e.nodes.comment = e.nodes.longComment))
          : (t = Qe('.abbr > a', e.nodes.comment))
            ? ((t.textContent = `Post No.${e} Loading...`),
              Qe.cache(
                o.SITE.urls.threadJSON({
                  boardID: e.boardID,
                  threadID: e.threadID,
                }),
                function () {
                  return X.parse(this, t, e)
                }
              ))
            : void 0
      },
      contract(e) {
        if (!e.nodes.shortComment) return
        return (
          (Qe('.abbr > a', e.nodes.shortComment).textContent = 'here'),
          Qe.replace(e.nodes.longComment, e.nodes.shortComment),
          (e.nodes.comment = e.nodes.shortComment)
        )
      },
      parse(e, t, n) {
        let a, i
        const { status: r } = e
        if (![200, 304].includes(r))
          return void (t.textContent = r
            ? `Error ${e.statusText} (${r})`
            : 'Connection Error')
        const { posts: s } = e.response
        for (a of ((i = s[0].custom_spoiler) &&
          (o.SITE.Build.spoilerRange[o.BOARD] = i),
        s))
          if (a.no === n.ID) break
        if (a.no !== n.ID)
          return void (t.textContent = `Post No.${n} not found.`)
        const { comment: l } = n.nodes,
          d = l.cloneNode(!1)
        for (var c of ((d.innerHTML = a.com), u('.quotelink', d))) {
          var h = c.getAttribute('href')
          '/' !== h[0] &&
            ('#' === h[0]
              ? (c.href = `${t.pathname
                  .split(/\/+/)
                  .splice(0, 4)
                  .join('/')}${h}`)
              : (c.href = `${t.pathname
                  .split(/\/+/)
                  .splice(0, 3)
                  .join('/')}/${h}`))
        }
        for (var p of ((n.nodes.shortComment = l),
        Qe.replace(l, d),
        (n.nodes.comment = n.nodes.longComment = d),
        n.parseComment(),
        n.parseQuotes(),
        X.callbacks))
          p.call(n)
      },
    },
    _ = {
      init() {
        if (
          t['Remember Your Posts'] &&
          ((this.db = new y('yourPosts')),
          Qe.sync('Remember Your Posts', e => (t['Remember Your Posts'] = e)),
          Qe.on(a, 'QRPostSuccessful', function (e) {
            const o = K.delay()
            return Qe.get(
              'Remember Your Posts',
              t['Remember Your Posts'],
              function (t) {
                if (!t['Remember Your Posts']) return
                const { boardID: n, threadID: a, postID: i } = e.detail
                return _.db.set(
                  { boardID: n, threadID: a, postID: i, val: !0 },
                  o
                )
              }
            )
          }),
          ['index', 'thread', 'archive'].includes(o.VIEW))
        )
          return (
            t['Highlight Own Posts'] && Qe.addClass(i, 'highlight-own'),
            t['Highlight Posts Quoting You'] && Qe.addClass(i, 'highlight-you'),
            t['Comment Expansion'] && X.callbacks.push(this.node),
            (this.mark = Qe.el('span', {
              textContent: ' (You)',
              className: 'qmark-you',
            })),
            l.Post.push({ name: 'Mark Quotes of You', cb: this.node }),
            _.menu.init()
          )
      },
      isYou: e =>
        !!_.db?.get({ boardID: e.boardID, threadID: e.threadID, postID: e.ID }),
      node() {
        if (
          !this.isClone &&
          (_.isYou(this) && Qe.addClass(this.nodes.root, 'yourPost'),
          this.quotes.length)
        )
          for (var e of this.nodes.quotelinks)
            _.db.get(We.postDataFromLink(e)) &&
              (t['Mark Quotes of You'] && Qe.add(e, _.mark.cloneNode(!0)),
              Qe.addClass(e, 'you'),
              Qe.addClass(this.nodes.root, 'quotesYou'))
      },
      menu: {
        init() {
          const e = Qe.el(
              'label',
              { className: 'toggle-you' },
              { innerHTML: '<input type="checkbox"> You' }
            ),
            t = Qe('input', e)
          return (
            Qe.on(t, 'change', _.menu.toggle),
            Q.menu?.addEntry({
              el: e,
              order: 80,
              open: e => (
                (_.menu.post = e.origin || e), (t.checked = _.isYou(e)), !0
              ),
            })
          )
        },
        toggle() {
          const { post: e } = _.menu,
            o = {
              boardID: e.board.ID,
              threadID: e.thread.ID,
              postID: e.ID,
              val: !0,
            }
          for (var n of (this.checked ? _.db.set(o) : _.db.delete(o),
          [e].concat(e.clones)))
            n.nodes.root.classList.toggle('yourPost', this.checked)
          for (var a of We.allQuotelinksLinkingTo(e))
            if (
              (this.checked
                ? t['Mark Quotes of You'] && Qe.add(a, _.mark.cloneNode(!0))
                : Qe.rm(Qe('.qmark-you', a)),
              a.classList.toggle('you', this.checked),
              Qe.hasClass(a, 'quotelink'))
            ) {
              var i = We.postFromNode(a).nodes.root
              i.classList.toggle('quotesYou', !!Qe('.quotelink.you', i))
            }
        },
      },
      cb: {
        seek(e) {
          let t, n, a
          const { highlight: r } = o.SITE.classes
          if (
            ((t = Qe(`.${r}`)) && Qe.rmClass(t, r),
            _.lastRead &&
              i.contains(_.lastRead) &&
              Qe.hasClass(_.lastRead, 'quotesYou'))
          )
            n = _.lastRead
          else {
            if (!(n = _.lastRead = Qe('.quotesYou')))
              return void new _e(
                'warning',
                'No posts are currently quoting you, loser.',
                20
              )
            if (_.cb.scroll(n)) return
          }
          const s = `${e}::div[contains(@class,'quotesYou')]`
          for (
            ;
            (n = (a = Qe.X(s, n)).snapshotItem(
              'preceding' === e ? a.snapshotLength - 1 : 0
            ));

          )
            if (_.cb.scroll(n)) return
          const l = u('.quotesYou')
          return _.cb.scroll(l['following' === e ? 0 : l.length - 1])
        },
        scroll(e) {
          const t = We.postFromRoot(e)
          if (t.nodes.post.getBoundingClientRect().height) {
            if (
              ((_.lastRead = e),
              (location.href = We.url('post', t)),
              Xe.scrollTo(t.nodes.post),
              t.isReply)
            ) {
              const e = `${o.SITE.selectors.postContainer}${o.SITE.selectors.highlightable.reply}`
              let n = t.nodes.root
              n.matches(e) || (n = Qe(e, n)),
                Qe.addClass(n, o.SITE.classes.highlight)
            }
            return !0
          }
          return !1
        },
      },
    }
  class Z {
    constructor(e) {
      if (((this.length = 0), e)) for (var t of e) this.push(t)
    }
    push(e) {
      let t,
        { ID: o } = e
      if ((o || (o = e.id), this[o])) return
      const { last: n } = this
      return (
        (this[o] = t = { prev: n, next: null, data: e, ID: o }),
        (t.prev = n),
        (this.last = n ? (n.next = t) : (this.first = t)),
        this.length++
      )
    }
    before(e, t) {
      if (t.next === e || t === e) return
      this.rmi(t)
      const { prev: o } = e
      return (
        (e.prev = t),
        (t.next = e),
        (t.prev = o),
        o ? (o.next = t) : (this.first = t)
      )
    }
    after(e, t) {
      if (t.prev === e || t === e) return
      this.rmi(t)
      const { next: o } = e
      return (
        (e.next = t),
        (t.prev = e),
        (t.next = o),
        o ? (o.prev = t) : (this.last = t)
      )
    }
    prepend(e) {
      const { first: t } = this
      if (e !== t && this[e.ID])
        return (
          this.rmi(e),
          (e.next = t),
          t ? (t.prev = e) : (this.last = e),
          (this.first = e),
          delete e.prev
        )
    }
    shift() {
      return this.rm(this.first.ID)
    }
    order() {
      let e
      const t = [(e = this.first)]
      for (; (e = e.next); ) t.push(e)
      return t
    }
    rm(e) {
      const t = this[e]
      if (t)
        return (
          delete this[e],
          this.length--,
          this.rmi(t),
          delete t.next,
          delete t.prev
        )
    }
    rmi(e) {
      const { prev: t, next: o } = e
      return (
        t ? (t.next = o) : (this.first = o), o ? (o.prev = t) : (this.last = t)
      )
    }
  }
  var ee = {
      init() {
        if (
          'thread' === o.VIEW &&
          (t['Unread Count'] ||
            t['Unread Favicon'] ||
            t['Unread Line'] ||
            t['Remember Last Read Post'] ||
            t['Desktop Notifications'] ||
            t['Quote Threading'])
        )
          return (
            t['Remember Last Read Post'] &&
              (Qe.sync(
                'Remember Last Read Post',
                e => (t['Remember Last Read Post'] = e)
              ),
              (this.db = new y('lastReadPosts', this.sync))),
            (this.hr = Qe.el('hr', {
              id: 'unread-line',
              className: 'unread-line',
            })),
            (this.posts = new Set()),
            (this.postsQuotingYou = new Set()),
            (this.order = new Z()),
            (this.position = null),
            l.Thread.push({ name: 'Unread', cb: this.node }),
            l.Post.push({ name: 'Unread', cb: this.addPost })
          )
      },
      node() {
        for (var e of ((ee.thread = this),
        (ee.title = a.title),
        (ee.lastReadPost =
          ee.db?.get({ boardID: this.board.ID, threadID: this.ID }) || 0),
        (ee.readCount = 0),
        this.posts.keys))
          +e <= ee.lastReadPost && ee.readCount++
        Qe.one(a, '4chanXInitFinished', ee.ready),
          Qe.on(a, 'PostsInserted', ee.onUpdate),
          Qe.on(a, 'ThreadUpdate', function (e) {
            if (e.detail[404]) return ee.update()
          })
        const t = Qe.el('a', {
          href: 'javascript:;',
          className: 'unread-reset',
          textContent: 'Mark all unread',
        })
        return (
          Qe.on(t, 'click', ee.reset), Xe.menu.addEntry({ el: t, order: 70 })
        )
      },
      ready() {
        if (
          (t['Remember Last Read Post'] &&
            t['Scroll to Last Read Post'] &&
            ee.scroll(),
          ee.setLine(!0),
          ee.read(),
          ee.update(),
          Qe.on(a, 'scroll visibilitychange', ee.read),
          t['Unread Line'])
        )
          return Qe.on(a, 'visibilitychange', ee.setLine)
      },
      positionPrev: () => (ee.position ? ee.position.prev : ee.order.last),
      scroll() {
        let e
        if ((e = location.hash.match(/\d+/)) && e[0] in ee.thread.posts) return
        let t = ee.positionPrev()
        for (; t; ) {
          var { bottom: o } = t.data.nodes
          if (o.getBoundingClientRect().height) {
            Xe.scrollToIfNeeded(o, !0)
            break
          }
          t = t.prev
        }
      },
      reset() {
        if (null != ee.lastReadPost)
          return (
            (ee.posts = new Set()),
            (ee.postsQuotingYou = new Set()),
            (ee.order = new Z()),
            (ee.position = null),
            (ee.lastReadPost = 0),
            (ee.readCount = 0),
            ee.thread.posts.forEach(e => ee.addPost.call(e)),
            Qe.forceSync('Remember Last Read Post'),
            !t['Remember Last Read Post'] ||
              (ee.thread.isDead && !ee.thread.isArchived) ||
              ee.db.set({
                boardID: ee.thread.board.ID,
                threadID: ee.thread.ID,
                val: 0,
              }),
            ee.updatePosition(),
            ee.setLine(),
            ee.update()
          )
      },
      sync() {
        if (null == ee.lastReadPost) return
        const e = ee.db.get({
          boardID: ee.thread.board.ID,
          threadID: ee.thread.ID,
          defaultValue: 0,
        })
        if (ee.lastReadPost >= e) return
        ee.lastReadPost = e
        const t = ee.thread.posts.keys
        for (let e = ee.readCount, n = t.length; e < n; e++) {
          var o = +t[e]
          if (!ee.thread.posts.get(o).isFetchedQuote) {
            if (o > ee.lastReadPost) break
            ee.posts.delete(o), ee.postsQuotingYou.delete(o)
          }
          ee.readCount++
        }
        return ee.updatePosition(), ee.setLine(), ee.update()
      },
      addPost() {
        if (
          !(
            this.isFetchedQuote ||
            this.isClone ||
            (ee.order.push(this),
            this.ID <= ee.lastReadPost || this.isHidden || _.isYou(this))
          )
        )
          return (
            ee.posts.add((ee.posts.last = this.ID)),
            ee.addPostQuotingYou(this),
            null != ee.position
              ? ee.position
              : (ee.position = ee.order[this.ID])
          )
      },
      addPostQuotingYou(e) {
        for (var t of e.nodes.quotelinks)
          if (_.db?.get(We.postDataFromLink(t)))
            return (
              ee.postsQuotingYou.add((ee.postsQuotingYou.last = e.ID)),
              void ee.openNotification(e)
            )
      },
      openNotification(e, t = ' replied to you') {
        if (!Xe.areNotificationsEnabled) return
        const o = new Notification(`${e.info.nameBlock}${t}`, {
          body: e.commentDisplay(),
          icon: h.logo,
        })
        return (
          (o.onclick = function () {
            return Xe.scrollToIfNeeded(e.nodes.bottom, !0), window.focus()
          }),
          (o.onshow = () => setTimeout(() => o.close(), 7e3))
        )
      },
      onUpdate: () =>
        Qe.queueTask(function () {
          return ee.setLine(), ee.read(), ee.update()
        }),
      readSinglePost(e) {
        const { ID: t } = e
        if (ee.posts.has(t))
          return (
            ee.posts.delete(t),
            ee.postsQuotingYou.delete(t),
            ee.updatePosition(),
            ee.saveLastReadPost(),
            ee.update()
          )
      },
      read: f(100, function (e) {
        if (
          (ee.posts.size ||
            ee.readCount === ee.thread.posts.keys.length ||
            ee.saveLastReadPost(),
          a.hidden || !ee.posts.size)
        )
          return
        let t = 0
        for (; ee.position; ) {
          var { ID: o, data: n } = ee.position,
            { bottom: i } = n.nodes
          if (i.getBoundingClientRect().height && Xe.getBottomOf(i) <= -1) break
          t++,
            ee.posts.delete(o),
            ee.postsQuotingYou.delete(o),
            (ee.position = ee.position.next)
        }
        return t
          ? (ee.updatePosition(),
            ee.saveLastReadPost(),
            e ? ee.update() : void 0)
          : void 0
      }),
      updatePosition() {
        for (; ee.position && !ee.posts.has(ee.position.ID); )
          ee.position = ee.position.next
      },
      saveLastReadPost: f(2e3, function () {
        let e
        if (
          (Qe.forceSync('Remember Last Read Post'),
          !t['Remember Last Read Post'] || !ee.db)
        )
          return
        const o = ee.thread.posts.keys
        for (let t = ee.readCount, n = o.length; t < n; t++) {
          if (((e = +o[t]), !ee.thread.posts.get(e).isFetchedQuote)) {
            if (ee.posts.has(e)) break
            ee.lastReadPost = e
          }
          ee.readCount++
        }
        return !ee.thread.isDead || ee.thread.isArchived
          ? ee.db.set({
              boardID: ee.thread.board.ID,
              threadID: ee.thread.ID,
              val: ee.lastReadPost,
            })
          : void 0
      }),
      setLine(e) {
        if (t['Unread Line']) {
          if (ee.hr.hidden || a.hidden || !0 === e) {
            const e = ee.linePosition
            if ((ee.linePosition = ee.positionPrev())) {
              if (ee.linePosition !== e) {
                let e = ee.linePosition.data.nodes.bottom
                'BR' === e.nextSibling?.tagName && (e = e.nextSibling),
                  Qe.after(e, ee.hr)
              }
            } else Qe.rm(ee.hr)
          }
          return (ee.hr.hidden = ee.linePosition === ee.order.last)
        }
      },
      update() {
        const e = ee.posts.size,
          n = ee.postsQuotingYou.size
        if (t['Unread Count']) {
          const o = t['Quoted Title'] && n ? '(!) ' : '',
            i = e || !t['Hide Unread Count at (0)'] ? `(${e}) ` : '',
            r = ee.thread.isDead
              ? ee.title.replace(
                  '-',
                  ee.thread.isArchived ? '- Archived -' : '- 404 -'
                )
              : ee.title
          a.title = `${o}${i}${r}`
        }
        if (
          (ee.saveThreadWatcherCount(),
          t['Unread Favicon'] && 'yotsuba' === o.SITE.software)
        ) {
          const { isDead: t } = ee.thread
          return h.set(
            n
              ? t
                ? 'unreadDeadY'
                : 'unreadY'
              : e
                ? t
                  ? 'unreadDead'
                  : 'unread'
                : t
                  ? 'dead'
                  : 'default'
          )
        }
      },
      saveThreadWatcherCount: f(2e3, function () {
        if (
          (Qe.forceSync('Remember Last Read Post'),
          t['Remember Last Read Post'] &&
            (!ee.thread.isDead || ee.thread.isArchived))
        ) {
          let e
          const n =
            !t['Require OP Quote Link'] && _.isYou(ee.thread.OP)
              ? ee.posts
              : ee.postsQuotingYou
          if (n.size) {
            if (!n.has(n.last)) {
              ;(n.last = 0), (e = ee.thread.posts.keys)
              for (let t = e.length - 1; t >= 0; t--)
                if (n.has(+e[t])) {
                  n.last = e[t]
                  break
                }
            }
          } else n.last = 0
          return ae.update(o.SITE.ID, ee.thread.board.ID, ee.thread.ID, {
            last: ee.thread.lastPost,
            isDead: ee.thread.isDead,
            isArchived: ee.thread.isArchived,
            unread: ee.posts.size,
            quotingYou: n.last || 0,
          })
        }
      }),
    },
    te = {
      statuses: m(),
      init() {
        if ('index' === o.VIEW && t['Thread Expansion'])
          return t['JSON Index']
            ? Qe.on(a, 'IndexRefreshInternal', this.onIndexRefresh)
            : l.Thread.push({
                name: 'Expand Thread',
                cb() {
                  return te.setButton(this)
                },
              })
      },
      setButton(e) {
        let t
        if (e.nodes.root && (t = Qe('.summary', e.nodes.root)))
          return (
            (t.textContent = o.SITE.Build.summaryText(
              '+',
              ...t.textContent.match(/\d+/g)
            )),
            (t.style.cursor = 'pointer'),
            Qe.on(t, 'click', te.cbToggle)
          )
      },
      disconnect(e) {
        if ('thread' !== o.VIEW && t['Thread Expansion']) {
          for (var n in te.statuses) {
            var i,
              r = te.statuses[n]
            ;(i = r.req) && (delete r.req, i.abort()), delete te.statuses[n]
          }
          return e
            ? void 0
            : Qe.off(a, 'IndexRefreshInternal', this.onIndexRefresh)
        }
      },
      onIndexRefresh: () => (
        te.disconnect(!0), o.BOARD.threads.forEach(e => te.setButton(e))
      ),
      cbToggle(e) {
        if (!Qe.modifiedClick(e))
          return e.preventDefault(), te.toggle(We.threadFromNode(this))
      },
      cbToggleBottom(e) {
        if (Qe.modifiedClick(e)) return
        e.preventDefault()
        const t = We.threadFromNode(this)
        Qe.rm(this)
        const { bottom: o } = t.nodes.root.getBoundingClientRect()
        return (
          te.toggle(t),
          window.scrollBy(0, t.nodes.root.getBoundingClientRect().bottom - o)
        )
      },
      toggle(e) {
        let t
        if (e.nodes.root && (t = Qe('.summary', e.nodes.root)))
          return e.ID in te.statuses
            ? te.contract(e, t, e.nodes.root)
            : te.expand(e, t)
      },
      expand(e, t) {
        let n
        return (
          (te.statuses[e] = n = {}),
          (t.textContent = o.SITE.Build.summaryText(
            '...',
            ...t.textContent.match(/\d+/g)
          )),
          (n.req = Qe.cache(
            o.SITE.urls.threadJSON({ boardID: e.board.ID, threadID: e.ID }),
            function () {
              if (this === n.req) return delete n.req, te.parse(this, e, t)
            }
          )),
          (n.numReplies = u(
            o.SITE.selectors.replyOriginal,
            e.nodes.root
          ).length)
        )
      },
      contract(e, n, a) {
        let i
        const r = te.statuses[e]
        if ((delete te.statuses[e], (i = r.req)))
          return (
            delete r.req,
            i.abort(),
            void (
              n &&
              (n.textContent = o.SITE.Build.summaryText(
                '+',
                ...n.textContent.match(/\d+/g)
              ))
            )
          )
        let s = u('.thread > .replyContainer', a)
        r.numReplies && (s = s.slice(0, -r.numReplies))
        let l = 0,
          d = 0
        for (var c of s) {
          if (t['Quote Inlining'])
            for (var h; (h = Qe('.inlined', c)); ) h.click()
          l++, 'file' in We.postFromRoot(c) && d++, Qe.rm(c)
        }
        return (
          pe.enabled && Qe.event('PostsRemoved', null, n.parentNode),
          (n.textContent = o.SITE.Build.summaryText('+', l, d)),
          Qe.rm(Qe('.summary-bottom', a))
        )
      },
      parse(e, t, n) {
        let a
        if (![200, 304].includes(e.status))
          return void (n.textContent = e.status
            ? `Error ${e.statusText} (${e.status})`
            : 'Connection Error')
        o.SITE.Build.spoilerRange[t.board] = e.response.posts[0].custom_spoiler
        const i = [],
          r = []
        let s = 0
        for (var l of e.response.posts) {
          var d
          l.no !== t.ID &&
            (!(d = t.posts.get(l.no)) || d.isFetchedQuote
              ? ((a = o.SITE.Build.postFromObject(l, t.board.ID)),
                'file' in (d = new H(a, t, t.board)) && s++,
                i.push(d),
                r.push(a))
              : ('file' in d && s++, ({ root: a } = d.nodes), r.push(a)))
        }
        jt.callbackNodes('Post', i),
          Qe.after(n, r),
          Qe.event('PostsInserted', null, n.parentNode)
        const c = r.length
        if (((n.textContent = o.SITE.Build.summaryText('-', c, s)), a)) {
          const e = n.cloneNode(!0)
          return (
            e.classList.add('summary-bottom'),
            Qe.on(e, 'click', te.cbToggleBottom),
            Qe.after(a, e)
          )
        }
      },
    },
    oe = {
      lastReadPost: m(),
      hr: m(),
      markReadLink: m(),
      init() {
        if (
          'index' === o.VIEW &&
          t['Remember Last Read Post'] &&
          t['Unread Line in Index']
        )
          return (
            (this.enabled = !0),
            (this.db = new y('lastReadPosts', this.sync)),
            l.Thread.push({ name: 'Unread Line in Index', cb: this.node }),
            Qe.on(a, 'IndexRefreshInternal', this.onIndexRefresh),
            Qe.on(a, 'PostsInserted PostsRemoved', this.onPostsInserted)
          )
      },
      node() {
        if (
          ((oe.lastReadPost[this.fullID] =
            oe.db.get({ boardID: this.board.ID, threadID: this.ID }) || 0),
          !pe.enabled)
        )
          return oe.update(this)
      },
      onIndexRefresh(e) {
        if (!e.detail.isCatalog)
          return (() => {
            const t = []
            for (var n of e.detail.threadIDs) {
              var a = o.threads.get(n)
              t.push(oe.update(a))
            }
            return t
          })()
      },
      onPostsInserted(e) {
        if (e.target === pe.root) return
        const o = We.threadFromNode(e.target)
        if (!o || o.nodes.root !== e.target) return
        const n = !!oe.hr[o.fullID]?.parentNode
        return (
          oe.update(o),
          t['Scroll to Last Read Post'] &&
          'PostsInserted' === e.type &&
          !n &&
          oe.hr[o.fullID]?.parentNode
            ? Xe.scrollToIfNeeded(oe.hr[o.fullID], !0)
            : void 0
        )
      },
      sync: () =>
        o.threads.forEach(function (e) {
          const t = oe.db.get({ boardID: e.board.ID, threadID: e.ID }) || 0
          if (
            t !== oe.lastReadPost[e.fullID] &&
            ((oe.lastReadPost[e.fullID] = t), e.nodes.root?.parentNode)
          )
            return oe.update(e)
        }),
      update(e) {
        let t
        const n = oe.lastReadPost[e.fullID]
        let a = 0,
          i = 0,
          r = null
        e.posts.forEach(function (t) {
          if (t.isReply && e.nodes.root.contains(t.nodes.root)) {
            if ((a++, t.ID <= n)) return i++
            if ((!r || t.ID < r.ID) && !t.isHidden && !_.isYou(t))
              return (r = t)
          }
        })
        let s = oe.hr[e.fullID]
        r &&
        (i ||
          (n === e.OP.ID &&
            (!Qe(o.SITE.selectors.summary, e.nodes.root) ||
              e.ID in te.statuses)))
          ? (s ||
              (s = oe.hr[e.fullID] = Qe.el('hr', { className: 'unread-line' })),
            Qe.before(r.nodes.root, s))
          : Qe.rm(s)
        const l = a ? r || !i : pe.enabled ? e.lastPost > n : e.OP.ID > n
        e.nodes.root.classList.toggle('unread-thread', l)
        let d = oe.markReadLink[e.fullID]
        return (
          d ||
            ((d = oe.markReadLink[e.fullID] =
              Qe.el('a', {
                className: 'unread-mark-read brackets-wrap',
                href: 'javascript:;',
                textContent: 'Mark Read',
              })),
            Qe.on(d, 'click', oe.markRead)),
          (t = Qe(o.SITE.selectors.threadDivider, e.nodes.root))
            ? Qe.before(t, d)
            : Qe.add(e.nodes.root, d)
        )
      },
      markRead() {
        const e = We.threadFromNode(this)
        return (
          (oe.lastReadPost[e.fullID] = e.lastPost),
          oe.db.set({ boardID: e.board.ID, threadID: e.ID, val: e.lastPost }),
          Qe.rm(oe.hr[e.fullID]),
          e.nodes.root.classList.remove('unread-thread'),
          ae.update(o.SITE.ID, e.board.ID, e.ID, {
            last: e.lastPost,
            unread: 0,
            quotingYou: 0,
          })
        )
      },
    },
    ne = {
      init() {
        let e
        if ((this.enabled = t['Thread Watcher'])) {
          switch (
            ((this.shortcut = e =
              Qe.el('a', {
                id: 'watcher-link',
                textContent: '👁︎',
                title: 'Thread Watcher',
                href: 'javascript:;',
              })),
            (this.db = new y('watchedThreads', this.refresh, !0)),
            (this.dbLM = new y('watcherLastModified', null, !0)),
            (this.dialog = L.dialog('thread-watcher', {
              innerHTML:
                '<div class="move">\n  Thread Watcher <a class="refresh" title="Check threads" href="javascript:;">🗘</a>\n  <span id="watcher-status"></span>\n  <a class="menu-button" href="javascript:;">🞃</a>\n  <a class="close" href="javascript:;">×</a>\n</div>\n<div id="watched-threads"></div>\n',
            })),
            (this.status = Qe('#watcher-status', this.dialog)),
            (this.list = this.dialog.lastElementChild),
            (this.refreshButton = Qe('.refresh', this.dialog)),
            (this.closeButton = Qe('.move > .close', this.dialog)),
            (this.unreaddb = ee.db || oe.db || new y('lastReadPosts')),
            (this.unreadEnabled = t['Remember Last Read Post']),
            Qe.on(a, 'QRPostSuccessful', this.cb.post),
            Qe.on(e, 'click', this.toggleWatcher),
            Qe.on(this.refreshButton, 'click', this.buttonFetchAll),
            Qe.on(this.closeButton, 'click', this.toggleWatcher),
            this.menu.addHeaderMenuEntry(),
            Qe.onExists(i, 'body', this.addDialog),
            o.VIEW)
          ) {
            case 'index':
              Qe.on(a, 'IndexUpdate', this.cb.onIndexUpdate)
              break
            case 'thread':
              Qe.on(a, 'ThreadUpdate', this.cb.onThreadRefresh)
          }
          if (
            (t['Fixed Thread Watcher'] && Qe.addClass(i, 'fixed-watcher'),
            t['Persistent Thread Watcher'] ||
              (Qe.addClass(ne.shortcut, 'disabled'), (this.dialog.hidden = !0)),
            Xe.addShortcut('watcher', e, 510),
            ne.initLastModified(),
            ne.fetchAuto(),
            Qe.on(window, 'visibilitychange focus', () =>
              Qe.queueTask(ne.fetchAuto)
            ),
            t.Menu &&
              pe.enabled &&
              Q.menu.addEntry({
                el: Qe.el(
                  'a',
                  { href: 'javascript:;', className: 'has-shortcut-text' },
                  {
                    innerHTML:
                      '<span></span><span class="shortcut-text">Alt+click</span>',
                  }
                ),
                order: 6,
                open({ thread: e }) {
                  return (
                    'catalog' === t['Index Mode'] &&
                    ((this.el.firstElementChild.textContent = ne.isWatched(e)
                      ? 'Unwatch'
                      : 'Watch'),
                    this.cb && Qe.off(this.el, 'click', this.cb),
                    (this.cb = function () {
                      return Qe.event('CloseMenu'), ne.toggle(e)
                    }),
                    Qe.on(this.el, 'click', this.cb),
                    !0)
                  )
                },
              }),
            ['index', 'thread'].includes(o.VIEW))
          )
            return (
              l.Post.push({ name: 'Thread Watcher', cb: this.node }),
              l.CatalogThread.push({
                name: 'Thread Watcher',
                cb: this.catalogNode,
              })
            )
        }
      },
      isWatched: e => !!ne.db?.get({ boardID: e.board.ID, threadID: e.ID }),
      isWatchedRaw: (e, t) =>
        !!ne.db?.get({
          boardID: e,
          threadID: t,
        }),
      setToggler: (e, t) => (
        e.classList.toggle('watched', t),
        (e.title = (t ? 'Unwatch' : 'Watch') + ' Thread')
      ),
      node() {
        let e
        if (this.isReply) return
        this.isClone
          ? (e = Qe('.watch-thread-link', this.nodes.info))
          : ((e = Qe.el('a', {
              href: 'javascript:;',
              className: 'watch-thread-link',
            })),
            Qe.before(Qe('input', this.nodes.info), e))
        const t = o.SITE.ID,
          n = this.board.ID,
          a = this.thread.ID,
          i = ne.db.get({ siteID: t, boardID: n, threadID: a })
        return (
          ne.setToggler(e, !!i),
          Qe.on(e, 'click', ne.cb.toggle),
          i && null == i.excerpt
            ? Qe.queueTask(() =>
                ne.update(t, n, a, { excerpt: We.threadExcerpt(this.thread) })
              )
            : void 0
        )
      },
      catalogNode() {
        return (
          ne.isWatched(this.thread) && Qe.addClass(this.nodes.root, 'watched'),
          Qe.on(this.nodes.root, 'mousedown click', e => {
            if (0 === e.button && e.altKey)
              return (
                'click' === e.type && ne.toggle(this.thread), e.preventDefault()
              )
          })
        )
      },
      addDialog() {
        if (jt.isThisPageLegit())
          return ne.build(), Qe.prepend(a.body, ne.dialog)
      },
      toggleWatcher: () => (
        Qe.toggleClass(ne.shortcut, 'disabled'),
        (ne.dialog.hidden = !ne.dialog.hidden)
      ),
      cb: {
        openAll() {
          if (!Qe.hasClass(this, 'disabled')) {
            for (var e of u('a.watcher-link', ne.list)) Qe.open(e.href)
            return Qe.event('CloseMenu')
          }
        },
        openUnread() {
          if (!Qe.hasClass(this, 'disabled')) {
            for (var e of u('.replies-unread > a.watcher-link', ne.list))
              Qe.open(e.href)
            return Qe.event('CloseMenu')
          }
        },
        openDeads() {
          if (!Qe.hasClass(this, 'disabled')) {
            for (var e of u('.dead-thread > a.watcher-link', ne.list))
              Qe.open(e.href)
            return Qe.event('CloseMenu')
          }
        },
        pruneDeads() {
          if (!Qe.hasClass(this, 'disabled')) {
            for (var {
              siteID: e,
              boardID: t,
              threadID: o,
              data: n,
            } of ne.getAll())
              n.isDead && ne.db.delete({ siteID: e, boardID: t, threadID: o })
            return ne.refresh(), Qe.event('CloseMenu')
          }
        },
        dismiss() {
          for (var {
            siteID: e,
            boardID: t,
            threadID: o,
            data: n,
          } of ne.getAll())
            n.quotingYou && ne.update(e, t, o, { dismiss: n.quotingYou || 0 })
          return Qe.event('CloseMenu')
        },
        toggle() {
          const { thread: e } = We.postFromNode(this)
          return ne.toggle(e)
        },
        rm() {
          const { siteID: e } = this.parentNode.dataset,
            [t, o] = this.parentNode.dataset.fullID.split('.')
          return ne.rm(e, t, +o)
        },
        post(e) {
          const { boardID: n, threadID: a, postID: i } = e.detail,
            r = K.delay()
          if (i === a) {
            if (t['Auto Watch']) return ne.addRaw(n, a, {}, r)
          } else if (t['Auto Watch Reply'])
            return ne.add(
              o.threads.get(n + '.' + a) || new I(a, o.boards[n] || new J(n)),
              r
            )
        },
        onIndexUpdate(e) {
          const { db: n } = ne,
            a = o.SITE.ID,
            i = o.BOARD.ID
          let r = 0
          for (var s in n.data[a].boards[i]) {
            var l = n.data[a].boards[i][s]
            if (!l?.isDead && !e.detail.threads.includes(`${i}.${s}`)) {
              if (!e.detail.threads.some(e => +e.split('.')[1] > s)) continue
              t['Auto Prune'] || !l || 'object' != typeof l
                ? (n.delete({ boardID: i, threadID: s }), r++)
                : ne.fetchStatus({
                    siteID: a,
                    boardID: i,
                    threadID: s,
                    data: l,
                  })
            }
          }
          if (r) return ne.refresh()
        },
        onThreadRefresh(e) {
          const t = o.threads.get(e.detail.threadID)
          if (e.detail[404] && ne.isWatched(t)) return ne.add(t)
        },
      },
      requests: [],
      fetched: 0,
      fetch(e, { siteID: t, force: n }, a, i) {
        0 === ne.requests.length &&
          ((ne.status.textContent = '...'),
          Qe.addClass(ne.refreshButton, 'spin'))
        const r = t === o.SITE.ID ? Qe.ajax : He.ajax
        n && delete Qe.lastModified.ThreadWatcher?.[e]
        const s = Qe.whenModified(
          e,
          'ThreadWatcher',
          function () {
            if (!this.finished)
              return (
                (this.finished = !0),
                ne.fetched++,
                ne.fetched === ne.requests.length
                  ? ne.clearRequests()
                  : (ne.status.textContent = `${Math.round(
                      (ne.fetched / ne.requests.length) * 100
                    )}%`),
                i.apply(this, a)
              )
          },
          { timeout: A, ajax: r }
        )
        return ne.requests.push(s)
      },
      clearRequests: () => (
        (ne.requests = []),
        (ne.fetched = 0),
        (ne.status.textContent = ''),
        Qe.rmClass(ne.refreshButton, 'spin')
      ),
      abort() {
        for (var e of (delete ne.syncing, ne.requests))
          e.finished || ((e.finished = !0), e.abort())
        return ne.clearRequests()
      },
      initLastModified() {
        const e =
          Qe.lastModified.ThreadWatcher || (Qe.lastModified.ThreadWatcher = m())
        for (var t in ne.dbLM.data) {
          var o = ne.dbLM.data[t]
          for (var n in o.boards) {
            var a = o.boards[n]
            if (ne.db.get({ siteID: t, boardID: n }))
              for (var i in a) {
                var r = a[i]
                e[i] = r
              }
            else ne.dbLM.delete({ siteID: t, boardID: n })
          }
        }
      },
      fetchAuto() {
        let e
        if ((clearTimeout(ne.timeout), !t['Auto Update Thread Watcher'])) return
        const { db: o } = ne,
          n =
            t['Show Page'] || (ne.unreadEnabled && t['Show Unread Count'])
              ? 3e5
              : 2 * v,
          i = Date.now()
        return (
          (i - n >= (e = o.data.lastChecked || 0) || e > i) &&
            !a.hidden &&
            a.hasFocus() &&
            ne.fetchAllStatus(n),
          (ne.timeout = setTimeout(ne.fetchAuto, n))
        )
      },
      buttonFetchAll: () =>
        ne.syncing || ne.requests.length ? ne.abort() : ne.fetchAllStatus(),
      fetchAllStatus(e = 0) {
        ;(ne.status.textContent = '...'),
          Qe.addClass(ne.refreshButton, 'spin'),
          (ne.syncing = !0)
        const t = [ne.db, ne.unreaddb, _.db].filter(e => e)
        let o = 0
        return t.map(n =>
          n.forceSync(function () {
            if (++o === t.length) {
              let t
              if (!ne.syncing) return
              if (
                (delete ne.syncing,
                0 > (t = Date.now() - (ne.db.data.lastChecked || 0)) || t >= e)
              ) {
                let e
                const { db: t } = ne,
                  o = Date.now(),
                  a = !(o - 2 * v < (e = t.data.lastChecked2 || 0) && e <= o),
                  i = ne.getAll(!0)
                for (var n of i) ne.fetchBoard(n, a)
                t.setLastChecked(), a && t.setLastChecked('lastChecked2')
              }
              if (ne.fetched === ne.requests.length) return ne.clearRequests()
            }
          })
        )
      },
      fetchBoard(e, n) {
        if (!e.some(e => !e.data.isDead)) return
        let a = !1
        for (var i of e) {
          var { data: r } = i
          r.isDead ||
            -1 === r.last ||
            (t['Show Page'] && null == r.page && (a = !0),
            null == r.modified && (a = i.force = !0))
        }
        const { siteID: s, boardID: l } = e[0],
          d = o.sites[s]
        if (!d) return
        const c =
            n && d.threadModTimeIgnoresSage ? 'catalogJSON' : 'threadsListJSON',
          h = d.urls[c]?.({ siteID: s, boardID: l })
        return h
          ? ne.fetch(h, { siteID: s, force: a }, [e, h], ne.parseBoard)
          : void 0
      },
      parseBoard(e, n) {
        let a, i
        if (200 !== this.status) return
        const { siteID: r, boardID: s } = e[0],
          l = this.getResponseHeader('Last-Modified')
        ne.dbLM.extend({ siteID: r, boardID: s, val: Qe.item(n, l) })
        const d = m()
        let c = 0,
          h = 0,
          u = null
        try {
          c = this.response[0]?.threads.length || 0
          for (let e = 0; e < this.response.length; e++)
            for (var p of ((a = this.response[e]), a.threads))
              (d[p.no] = {
                page: e + 1,
                index: h,
                modified: p.last_modified,
                replies: p.replies,
              }),
                h++,
                (null == u || p.no < u) && (u = p.no)
        } catch (t) {
          for (i of e) ne.fetchStatus(i)
        }
        for (i of e) {
          var { threadID: g, data: f } = i
          if (d[g]) {
            var b, A, v
            if (
              (({ page: a, index: b, modified: A, replies: v } = d[g]),
              t['Show Page'])
            ) {
              var w = o.sites[r].isPrunedByAge?.({ siteID: r, boardID: s })
                ? g === u
                : b >= h - c
              ne.update(r, s, g, { page: a, lastPage: w })
            }
            ne.unreadEnabled &&
              t['Show Unread Count'] &&
              (A !== f.modified || (null != v && v !== f.replies)) &&
              (((i.newData || (i.newData = {})).modified = A),
              ne.fetchStatus(i))
          } else ne.fetchStatus(i)
        }
      },
      fetchStatus(e) {
        const { siteID: t, boardID: n, threadID: a, data: i, force: r } = e,
          s = o.sites[t]?.urls.threadJSON?.({
            siteID: t,
            boardID: n,
            threadID: a,
          })
        if (s && (!i.isDead || r) && -1 !== i.last)
          return ne.fetch(s, { siteID: t, force: r }, [e], ne.parseStatus)
      },
      parseStatus(e, n) {
        let a,
          i,
          {
            siteID: r,
            boardID: s,
            threadID: l,
            data: d,
            newData: c,
            force: h,
          } = e
        const u = o.sites[r]
        if (200 === this.status && this.response) {
          let e
          i = this.response.posts[this.response.posts.length - 1].no
          const o = this.response.posts.length - 1
          if (
            ((a = e = !(!this.response.posts[0].archived && !n)),
            a && t['Auto Prune'])
          )
            return void ne.rm(r, s, l)
          if (i === d.last && a === d.isDead && e === d.isArchived) return
          const h = ne.unreaddb.get({
            siteID: r,
            boardID: s,
            threadID: l,
            defaultValue: 0,
          })
          let b = d.unread || 0,
            A = d.quotingYou || 0
          const v = !!_.db?.get({
            siteID: r,
            boardID: s,
            threadID: l,
            postID: l,
          })
          for (var p of this.response.posts)
            if (
              !(
                p.no <= (d.last || 0) ||
                p.no <= h ||
                _.db?.get({ siteID: r, boardID: s, threadID: l, postID: p.no })
              )
            ) {
              var g = !1
              if (!t['Require OP Quote Link'] && v) g = !0
              else if (_.db && p.com) {
                var f,
                  m = u.regexp.quotelinkHTML
                for (m.lastIndex = 0; (f = m.exec(p.com)); )
                  if (
                    _.db.get({
                      siteID: r,
                      boardID: f[1] ? encodeURIComponent(f[1]) : s,
                      threadID: f[2] || l,
                      postID: f[3] || f[2] || l,
                    })
                  ) {
                    g = !0
                    break
                  }
              }
              ;((!b || (!A && g)) &&
                Ge.isHidden(u.Build.parseJSON(p, { siteID: r, boardID: s }))) ||
                (b++, g && (A = p.no))
            }
          return (
            c || (c = {}),
            Qe.extend(c, {
              last: i,
              replies: o,
              isDead: a,
              isArchived: e,
              unread: b,
              quotingYou: A,
            }),
            ne.update(r, s, l, c)
          )
        }
        if (404 === this.status) {
          const t = o.sites[r]?.urls.archivedThreadJSON?.({
            siteID: r,
            boardID: s,
            threadID: l,
          })
          return !n && t
            ? ne.fetch(t, { siteID: r, force: h }, [e, !0], ne.parseStatus)
            : u.mayLackJSON && null == d.last
              ? ne.update(r, s, l, { last: -1 })
              : ne.update(r, s, l, { isDead: !0 })
        }
      },
      getAll(e) {
        const n = []
        for (var a in ne.db.data) {
          var i = ne.db.data[a]
          for (var r in i.boards) {
            var s,
              l = i.boards[r]
            if (!t['Current Board'] || (a === o.SITE.ID && r === o.BOARD.ID))
              for (var d in (e && n.push((s = [])), l)) {
                var c = l[d]
                c &&
                  'object' == typeof c &&
                  (e ? s : n).push({
                    siteID: a,
                    boardID: r,
                    threadID: d,
                    data: c,
                  })
              }
          }
        }
        return n
      },
      makeLine(e, n, a, i) {
        let r
        const s = Qe.el('a', { textContent: '✕', href: 'javascript:;' })
        Qe.on(s, 'click', ne.cb.rm)
        let { excerpt: l, isArchived: d } = i
        l || (l = `/${n}/ - No.${a}`),
          t['Show Site Prefix'] && (l = ne.prefixes[e] + l)
        const c = Qe.el('a', {
          href:
            o.sites[e]?.urls.thread(
              { siteID: e, boardID: n, threadID: a },
              d
            ) || '',
          title: l,
          className: 'watcher-link',
        })
        if (
          (t['Show Page'] &&
            null != i.page &&
            ((r = Qe.el('span', {
              textContent: `[${i.page}]`,
              className: 'watcher-page',
            })),
            Qe.add(c, r)),
          ne.unreadEnabled && t['Show Unread Count'] && null != i.unread)
        ) {
          const e = Qe.el('span', {
            textContent: `(${i.unread})`,
            className: 'watcher-unread',
          })
          Qe.add(c, e)
        }
        const h = Qe.el('span', { textContent: l, className: 'watcher-title' })
        Qe.add(c, h)
        const u = Qe.el('div'),
          p = `${n}.${a}`
        return (
          (u.dataset.fullID = p),
          (u.dataset.siteID = e),
          'thread' === o.VIEW &&
            p === `${o.BOARD}.${o.THREADID}` &&
            Qe.addClass(u, 'current'),
          i.isDead && Qe.addClass(u, 'dead-thread'),
          t['Show Page'] &&
            (i.lastPage && Qe.addClass(u, 'last-page'),
            null != i.page && (u.dataset.page = i.page)),
          ne.unreadEnabled &&
            t['Show Unread Count'] &&
            (0 === i.unread && Qe.addClass(u, 'replies-read'),
            i.unread && Qe.addClass(u, 'replies-unread'),
            (i.quotingYou || 0) > (i.dismiss || 0) &&
              Qe.addClass(u, 'replies-quoting-you')),
          Qe.add(u, [s, Qe.tn(' '), c]),
          u
        )
      },
      setPrefixes(e) {
        const t = m()
        for (var { siteID: o } of e)
          if (!(o in t)) {
            for (var n = 0, a = '', i = Object.keys(t); i.length > 0; ) {
              n++, (a = o.slice(0, n))
              var r = []
              for (var s of i)
                s.slice(0, n) === a
                  ? r.push(s)
                  : t[s].length < n && (t[s] = s.slice(0, n))
              i = r
            }
            t[o] = a
          }
        return (ne.prefixes = t)
      },
      build() {
        const e = [],
          t = ne.getAll()
        for (var {
          siteID: n,
          boardID: a,
          threadID: i,
          data: r,
        } of (ne.setPrefixes(t), t)) {
          var s
          null == r.excerpt &&
            n === o.SITE.ID &&
            (s = o.threads.get(`${a}.${i}`)) &&
            s.OP &&
            ne.db.extend({
              boardID: a,
              threadID: i,
              val: { excerpt: We.threadExcerpt(s) },
            }),
            e.push(ne.makeLine(n, a, i, r))
        }
        const { list: l } = ne
        return Qe.rmAll(l), Qe.add(l, e), ne.refreshIcon()
      },
      refresh() {
        if (
          (ne.build(),
          o.threads.forEach(function (e) {
            const t = ne.isWatched(e)
            if (e.OP)
              for (var o of [e.OP, ...e.OP.clones]) {
                var n
                ;(n = Qe('.watch-thread-link', o.nodes.info)) &&
                  ne.setToggler(n, t)
              }
            if (e.catalogView)
              return e.catalogView.nodes.root.classList.toggle('watched', t)
          }),
          t['Pin Watched Threads'])
        )
          return Qe.event('SortIndex', {
            deferred: 'catalog' !== t['Index Mode'],
          })
      },
      refreshIcon() {
        for (var e of ['replies-unread', 'replies-quoting-you'])
          ne.shortcut.classList.toggle(e, !!Qe(`.${e}`, ne.dialog))
      },
      update(e, o, n, a) {
        let i, r, s, l
        if (!(i = ne.db?.get({ siteID: e, boardID: o, threadID: n }))) return
        if (a.isDead && t['Auto Prune']) return void ne.rm(e, o, n)
        if (a.isDead || -1 === a.last)
          for (r of ['isArchived', 'page', 'lastPage', 'unread', 'quotingyou'])
            r in a || (a[r] = void 0)
        null != a.last && a.last < i.last && (a.modified = void 0)
        let d = 0
        for (r in a) (l = a[r]), i[r] !== l && d++
        if (d) {
          if (
            (ne.db.extend({ siteID: e, boardID: o, threadID: n, val: a }),
            (s = Qe(
              `#watched-threads > [data-site-i-d='${e}'][data-full-i-d='${o}.${n}']`,
              ne.dialog
            )))
          ) {
            const t = ne.makeLine(e, o, n, i)
            return Qe.replace(s, t), ne.refreshIcon()
          }
          return ne.refresh()
        }
      },
      set404(e, o, n) {
        let a
        return (a = ne.db?.get({ boardID: e, threadID: o }))
          ? t['Auto Prune']
            ? (ne.db.delete({ boardID: e, threadID: o }), n())
            : a.isDead &&
                null == a.isArchived &&
                null == a.page &&
                null == a.lastPage &&
                null == a.unread &&
                null == a.quotingYou
              ? n()
              : ne.db.extend(
                  {
                    boardID: e,
                    threadID: o,
                    val: {
                      isDead: !0,
                      isArchived: void 0,
                      page: void 0,
                      lastPage: void 0,
                      unread: void 0,
                      quotingYou: void 0,
                    },
                  },
                  n
                )
          : n()
      },
      toggle(e) {
        const t = o.SITE.ID,
          n = e.board.ID,
          a = e.ID
        return ne.db.get({ boardID: n, threadID: a })
          ? ne.rm(t, n, a)
          : ne.add(e)
      },
      add(e, n) {
        const a = {},
          i = o.SITE.ID,
          r = e.board.ID,
          s = e.ID
        if (e.isDead) {
          if (t['Auto Prune'] && ne.db.get({ boardID: r, threadID: s }))
            return void ne.rm(i, r, s, n)
          a.isDead = !0
        }
        return e.OP && (a.excerpt = We.threadExcerpt(e)), ne.addRaw(r, s, a, n)
      },
      addRaw(e, n, a, i) {
        const r = ne.db.get({ boardID: e, threadID: n, defaultValue: m() })
        delete r.last,
          delete r.modified,
          Qe.extend(r, a),
          ne.db.set({ boardID: e, threadID: n, val: r }, i),
          ne.refresh()
        const s = {
          siteID: o.SITE.ID,
          boardID: e,
          threadID: n,
          data: a,
          force: !0,
        }
        return t['Show Page'] && !a.isDead
          ? ne.fetchBoard([s])
          : ne.unreadEnabled && t['Show Unread Count']
            ? ne.fetchStatus(s)
            : void 0
      },
      rm: (e, t, o, n) => (
        ne.db.delete({ siteID: e, boardID: t, threadID: o }, n), ne.refresh()
      ),
      menu: {
        init() {
          if (!t['Thread Watcher']) return
          const e = (this.menu = new L.Menu('thread watcher'))
          return (
            Qe.on(Qe('.menu-button', ne.dialog), 'click', function (t) {
              return e.toggle(t, this, ne)
            }),
            this.addMenuEntries()
          )
        },
        addHeaderMenuEntry() {
          if ('thread' !== o.VIEW) return
          const e = Qe.el('a', { href: 'javascript:;' })
          return (
            Xe.menu.addEntry({
              el: e,
              order: 60,
              open() {
                const [t, n, a] = ne.db.get({
                  boardID: o.BOARD.ID,
                  threadID: o.THREADID,
                })
                  ? ['unwatch-thread', 'watch-thread', 'Unwatch thread']
                  : ['watch-thread', 'unwatch-thread', 'Watch thread']
                return (
                  Qe.addClass(e, t), Qe.rmClass(e, n), (e.textContent = a), !0
                )
              },
            }),
            Qe.on(e, 'click', () =>
              ne.toggle(o.threads.get(`${o.BOARD}.${o.THREADID}`))
            )
          )
        },
        addMenuEntries() {
          const e = []
          for (var { text: t, title: o, cb: n, open: a } of (e.push({
            text: 'Open all threads',
            cb: ne.cb.openAll,
            open() {
              return (
                this.el.classList.toggle(
                  'disabled',
                  !ne.list.firstElementChild
                ),
                !0
              )
            },
          }),
          e.push({
            text: 'Open unread threads',
            cb: ne.cb.openUnread,
            open() {
              return (
                this.el.classList.toggle(
                  'disabled',
                  !Qe('.replies-unread', ne.list)
                ),
                !0
              )
            },
          }),
          e.push({
            text: 'Open dead threads',
            cb: ne.cb.openDeads,
            open() {
              return (
                this.el.classList.toggle(
                  'disabled',
                  !Qe('.dead-thread', ne.list)
                ),
                !0
              )
            },
          }),
          e.push({
            text: 'Prune dead threads',
            cb: ne.cb.pruneDeads,
            open() {
              return (
                this.el.classList.toggle(
                  'disabled',
                  !Qe('.dead-thread', ne.list)
                ),
                !0
              )
            },
          }),
          e.push({
            text: 'Dismiss posts quoting you',
            title:
              'Unhighlight the thread watcher icon and threads until there are new replies quoting you.',
            cb: ne.cb.dismiss,
            open() {
              return (
                this.el.classList.toggle(
                  'disabled',
                  !Qe.hasClass(ne.shortcut, 'replies-quoting-you')
                ),
                !0
              )
            },
          }),
          e)) {
            var i = { el: Qe.el('a', { textContent: t, href: 'javascript:;' }) }
            o && (i.el.title = o),
              Qe.on(i.el, 'click', n),
              (i.open = a.bind(i)),
              this.menu.addEntry(i)
          }
          for (var r in c.threadWatcher) {
            var s = c.threadWatcher[r]
            this.addCheckbox(r, s[1])
          }
        },
        addCheckbox(e, t) {
          const o = {
            type: 'thread watcher',
            el: L.checkbox(e, e.replace(' Thread Watcher', '')),
          }
          o.el.title = t
          const n = o.el.firstElementChild
          return (
            'Show Unread Count' !== e ||
              ne.unreadEnabled ||
              ((n.disabled = !0),
              Qe.addClass(o.el, 'disabled'),
              (o.el.title += '\n[Remember Last Read Post is disabled.]')),
            Qe.on(n, 'change', Qe.cb.checked),
            [
              'Current Board',
              'Show Page',
              'Show Unread Count',
              'Show Site Prefix',
            ].includes(e) && Qe.on(n, 'change', ne.refresh),
            [
              'Show Page',
              'Show Unread Count',
              'Auto Update Thread Watcher',
            ].includes(e) && Qe.on(n, 'change', ne.fetchAuto),
            this.menu.addEntry(o)
          )
        },
      },
    },
    ae = ne
  const ie = Symbol('isEscaped'),
    re = new Set([
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'link',
      'meta',
      'source',
      'track',
      'wbr',
    ]),
    se = Symbol('hFragment')
  function le(e, t, ...o) {
    let a = e === se ? '' : `<${e}`
    if (t)
      for (const [e, o] of Object.entries(t))
        (o || 0 === o) &&
          ((a += ` ${e}`), !0 !== o && (a += `="${n(o.toString())}"`))
    e !== se && (a += '>')
    const i = e !== se && re.has(e)
    if (i) {
      if (o.length)
        throw new TypeError(
          `${e} is a void html element and can't have child elements`
        )
    } else
      for (const e of o)
        null != e &&
          '' !== e &&
          (e instanceof Object && 'innerHTML' in e && e[ie]
            ? (a += e.innerHTML)
            : (a += n(e.toString())))
    return i || e === se || (a += `</${e}>`), { innerHTML: a, [ie]: !0 }
  }
  const de = e => {
    let t = (e.comment || '').split(
      /(\n|\[\/?(?:b|spoiler|code|moot|banned|fortune(?: color="#\w+")?|i|red|green|blue)\])/
    )
    ;(t = t.map((e, t) => {
      if (t % 2 == 1) {
        var o = ce.archiveTags[e.replace(/\ .*\]/, ']')]
        return 'function' == typeof o ? o(e) : o
      }
      var a = '>' === e[0]
      return (
        (e = e
          .replace(/(\[\/?[a-z]+):lit(\])/g, '$1$2')
          .split(/(>>(?:>\/[a-z\d]+\/)?\d+)/g)
          .map((e, t) =>
            t % 2 ? `<span class="deadlink">${n(e)}</span>` : n(e)
          )
          .join('')),
        { innerHTML: a ? `<span class="quote">${e}</span>` : e }
      )
    })),
      (t = { innerHTML: n.cat(t), [ie]: !0 })
    const a = {
      ID: e.num,
      threadID: e.thread_num,
      boardID: e.board.shortname,
      isReply: e.num !== e.thread_num,
      fileDeleted: !1,
      info: {
        subject: e.title,
        email: e.email,
        name: e.name || '',
        tripcode: e.trip,
        capcode: (() => {
          switch (e.capcode) {
            case 'M':
              return 'Mod'
            case 'A':
              return 'Admin'
            case 'D':
              return 'Developer'
            case 'V':
              return 'Verified'
            case 'F':
              return 'Founder'
            case 'G':
              return 'Manager'
          }
        })(),
        uniqueID: e.poster_hash,
        flagCode: e.poster_country,
        flagCodeTroll: e.troll_country_code,
        flag: e.poster_country_name || e.troll_country_name,
        dateUTC: e.timestamp,
        dateText: e.fourchan_date,
        commentHTML: t,
      },
      file: null,
      extra: null,
    }
    if ((a.info.capcode && delete a.info.uniqueID, e.media && +e.media.banned))
      a.fileDeleted = !0
    else if (e.media?.media_filename) {
      let { thumb_link: t } = e.media
      '/' === t?.[0] && (t = url.split('/', 3).join('/') + t),
        et.securityCheck(t) || (t = '')
      let o = et.to('file', {
        boardID: a.boardID,
        filename: e.media.media_orig,
      })
      et.securityCheck(o) || (o = ''),
        (a.file = {
          name: e.media.media_filename,
          url:
            o ||
            ('f' === a.boardID
              ? `${location.protocol}//${O.flashHost()}/${
                  a.boardID
                }/${encodeURIComponent(n(e.media.media_filename))}`
              : `${location.protocol}//${O.host()}/${a.boardID}/${
                  e.media.media_orig
                }`),
          height: e.media.media_h,
          width: e.media.media_w,
          MD5: e.media.media_hash,
          size: Qe.bytesToString(e.media.media_size),
          thumbURL:
            t ||
            `${location.protocol}//${O.thumbHost()}/${a.boardID}/${
              e.media.preview_orig
            }`,
          theight: e.media.preview_h,
          twidth: e.media.preview_w,
          isSpoiler: '1' === e.media.spoiler,
        }),
        /\.pdf$/.test(a.file.url) ||
          (a.file.dimensions = `${a.file.width}x${a.file.height}`),
        'f' === a.boardID &&
          e.media.exif &&
          (a.file.tag = JSON.parse(e.media.exif).Tag)
    }
    a.extra = m()
    const i = o.boards[a.boardID] || new J(a.boardID),
      r = o.threads.get(`${a.boardID}.${a.threadID}`) || new I(a.threadID, i),
      s = new H(o.SITE.Build.post(a), r, i, { isFetchedQuote: !0 })
    return (
      s.kill(),
      s.file && (s.file.thumbURL = a.file.thumbURL),
      jt.callbackNodes('Post', [s]),
      s
    )
  }
  class ce {
    constructor(e, t, n, a, i) {
      let r, s
      if (
        ((this.boardID = e),
        (this.threadID = t),
        (this.postID = n),
        (this.root = a),
        (this.quoter = i),
        (r = o.posts.get(`${this.boardID}.${this.postID}`)))
      )
        this.insert(r)
      else {
        if (
          (r = pe.replyData?.[`${this.boardID}.${this.postID}`]) &&
          (s = o.threads.get(`${this.boardID}.${this.threadID}`))
        ) {
          const e = o.boards[this.boardID]
          return (
            (r = new H(o.SITE.Build.postFromObject(r, this.boardID), s, e, {
              isFetchedQuote: !0,
            })),
            jt.callbackNodes('Post', [r]),
            void this.insert(r)
          )
        }
        if (
          ((this.root.textContent = `Loading post No.${this.postID}...`),
          this.threadID)
        ) {
          const e = this
          Qe.cache(
            o.SITE.urls.threadJSON({
              boardID: this.boardID,
              threadID: this.threadID,
            }),
            function ({ isCached: t }) {
              return e.fetchedPost(this, t)
            }
          )
        } else this.archivedPost()
      }
    }
    insert(e) {
      if (!this.root.parentNode) return
      this.quoter || (this.quoter = e)
      const t = e.addClone(
        this.quoter.context,
        Qe.hasClass(this.root, 'dialog')
      )
      jt.callbackNodes('Post', [t])
      const { nodes: o } = t
      Qe.rmAll(o.root), Qe.add(o.root, o.post)
      const n = [...t.nodes.quotelinks, ...t.nodes.backlinks]
      for (var i of n) {
        var { boardID: r, postID: s } = We.postDataFromLink(i)
        s === this.quoter.ID &&
          r === this.quoter.board.ID &&
          Qe.addClass(i, 'forwardlink')
      }
      if (
        t.nodes.flag &&
        !ce.flagCSS &&
        !(ce.flagCSS = Qe('link[href^="//s.4cdn.org/css/flags."]'))
      ) {
        const e =
          Qe('link[href^="//s.4cdn.org/css/"]')?.href.match(
            /\d+(?=\.css$)|$/
          )[0] || Date.now()
        ;(ce.flagCSS = Qe.el('link', {
          rel: 'stylesheet',
          href: `//s.4cdn.org/css/flags.${e}.css`,
        })),
          Qe.add(a.head, ce.flagCSS)
      }
      return (
        Qe.rmAll(this.root),
        Qe.add(this.root, o.root),
        Qe.event('PostsInserted', null, this.root)
      )
    }
    fetchedPost(e, t) {
      let n
      if ((n = o.posts.get(`${this.boardID}.${this.postID}`)))
        return void this.insert(n)
      const { status: a } = e
      if (200 !== a) {
        if (a && this.archivedPost()) return
        return (
          Qe.addClass(this.root, 'warning'),
          void (this.root.textContent =
            404 === a
              ? `Thread No.${this.threadID} 404'd.`
              : a
                ? `Error ${e.statusText} (${e.status}).`
                : 'Connection Error')
        )
      }
      const { posts: i } = e.response
      for (n of ((o.SITE.Build.spoilerRange[this.boardID] =
        i[0].custom_spoiler),
      i))
        if (n.no === this.postID) break
      if (n.no !== this.postID) {
        if (t) {
          const e = o.SITE.urls.threadJSON({
            boardID: this.boardID,
            threadID: this.threadID,
          })
          Qe.cleanCache(t => t === e)
          const t = this
          return void Qe.cache(e, function () {
            return t.fetchedPost(this, !1)
          })
        }
        if (this.archivedPost()) return
        return (
          Qe.addClass(this.root, 'warning'),
          void (this.root.textContent = `Post No.${this.postID} was not found.`)
        )
      }
      const r = o.boards[this.boardID] || new J(this.boardID),
        s =
          o.threads.get(`${this.boardID}.${this.threadID}`) ||
          new I(this.threadID, r)
      return (
        (n = new H(o.SITE.Build.postFromObject(n, this.boardID), s, r, {
          isFetchedQuote: !0,
        })),
        jt.callbackNodes('Post', [n]),
        this.insert(n)
      )
    }
    archivedPost() {
      let e
      if (!t['Resurrect Quotes']) return !1
      if (!(e = et.to('post', { boardID: this.boardID, postID: this.postID })))
        return !1
      const o = et.data.post[this.boardID],
        n = /^https:\/\//.test(e) || 'http:' === location.protocol
      if (n || t['Exempt Archives from Encryption']) {
        const t = this
        return (
          He.cache(e, function () {
            if (!n && this.response?.media) {
              const { media: e } = this.response
              for (var a in e)
                /_link$/.test(a) &&
                  (Qe.getOwn(e, a)?.match(/^http:\/\//) || delete e[a])
            }
            return t.parseArchivedPost(this.response, e, o)
          }),
          !0
        )
      }
      return !1
    }
    parseArchivedPost(e, t, n) {
      let a
      if (!(a = o.posts.get(`${this.boardID}.${this.postID}`)))
        return null == e
          ? (Qe.addClass(this.root, 'warning'),
            void (this.root.textContent = `Error fetching Post No.${this.postID} from ${n.name}.`))
          : e.error
            ? (Qe.addClass(this.root, 'warning'),
              void (this.root.textContent = e.error))
            : ((this.threadID = +e.thread_num), (a = de(e)), this.insert(a))
      this.insert(a)
    }
  }
  ce.archiveTags = {
    '\n': { innerHTML: '<br>' },
    '[b]': { innerHTML: '<b>' },
    '[/b]': { innerHTML: '</b>' },
    '[spoiler]': { innerHTML: '<s>' },
    '[/spoiler]': { innerHTML: '</s>' },
    '[code]': { innerHTML: '<pre class="prettyprint">' },
    '[/code]': { innerHTML: '</pre>' },
    '[moot]': {
      innerHTML:
        '<div style="padding:5px;margin-left:.5em;border-color:#faa;border:2px dashed rgba(255,0,0,.1);border-radius:2px">',
    },
    '[/moot]': { innerHTML: '</div>' },
    '[banned]': { innerHTML: '<strong style="color: red;">' },
    '[/banned]': { innerHTML: '</strong>' },
    '[fortune]': e => ({
      innerHTML:
        '<span class="fortune" style="color:' +
        n(e.match(/#\w+|$/)[0]) +
        '"><b>',
    }),
    '[/fortune]': { innerHTML: '</b></span>' },
    '[i]': { innerHTML: '<span class="mu-i">' },
    '[/i]': { innerHTML: '</span>' },
    '[red]': { innerHTML: '<span class="mu-r">' },
    '[/red]': {
      innerHTML: '</span>',
    },
    '[green]': { innerHTML: '<span class="mu-g">' },
    '[/green]': { innerHTML: '</span>' },
    '[blue]': { innerHTML: '<span class="mu-b">' },
    '[/blue]': { innerHTML: '</span>' },
  }
  var he = {
      init() {
        if (
          t['Quote Previewing'] &&
          ('archive' === o.VIEW &&
            Qe.on(a, 'mouseover', function (e) {
              if (
                'A' === e.target.nodeName &&
                Qe.hasClass(e.target, 'quotelink')
              )
                return he.mouseover.call(e.target, e)
            }),
          ['index', 'thread'].includes(o.VIEW))
        )
          return (
            t['Comment Expansion'] && X.callbacks.push(this.node),
            l.Post.push({ name: 'Quote Previewing', cb: this.node })
          )
      },
      node() {
        for (var e of this.nodes.quotelinks.concat(
          [...this.nodes.backlinks],
          this.nodes.archivelinks
        ))
          Qe.on(e, 'mouseover', he.mouseover)
      },
      mouseover(e) {
        let n
        if (
          (Qe.hasClass(this, 'inlined') && !Qe.hasClass(i, 'catalog-mode')) ||
          !a.contains(this)
        )
          return
        const {
            boardID: r,
            threadID: s,
            postID: l,
          } = We.postDataFromLink(this),
          d = Qe.el('div', { id: 'qp', className: 'dialog' })
        if (
          (Qe.add(Xe.hover, d),
          new ce(r, s, l, d, We.postFromNode(this)),
          L.hover({
            root: this,
            el: d,
            latestEvent: e,
            endEvents: 'mouseout click',
            cb: he.mouseout,
          }),
          t['Quote Highlighting'] && (n = o.posts.get(`${r}.${l}`)))
        ) {
          const e = [n].concat(n.clones)
          for (var c of (e.pop(), e)) Qe.addClass(c.nodes.post, 'qphl')
        }
      },
      mouseout() {
        let e
        if (!(e = this.el.firstElementChild)) return
        Qe.event('PostsRemoved', null, Xe.hover)
        let o = We.postFromRoot(e).origin
        if ((o.rmClone(e.dataset.clone), t['Quote Highlighting']))
          for (o of [o].concat(o.clones)) Qe.rmClass(o.nodes.post, 'qphl')
      },
    },
    ue = {
      showHiddenThreads: !1,
      changed: {},
      enabledOn: ({ siteID: e, boardID: n }) =>
        t['JSON Index'] && 'yotsuba' === o.sites[e].software && 'f' !== n,
      init() {
        let e, n, r
        if ('index' !== o.VIEW) return
        if (
          (Qe.one(a, '4chanXInitFinished', this.cb.initFinished),
          Qe.on(a, 'PostsInserted', this.cb.postsInserted),
          !this.enabledOn(o.BOARD))
        )
          return
        ;(this.enabled = !0),
          l.Post.push({ name: 'Index Page Numbers', cb: this.node }),
          l.CatalogThread.push({
            name: 'Catalog Features',
            cb: this.catalogNode,
          }),
          (this.search = history.state?.searched || ''),
          history.state?.mode && (t['Index Mode'] = history.state?.mode),
          (this.currentSort = history.state?.sort),
          this.currentSort ||
            (this.currentSort =
              'object' == typeof t['Index Sort']
                ? t['Index Sort'][o.BOARD.ID] || 'bump'
                : t['Index Sort']),
          (this.currentPage = this.getCurrentPage()),
          this.processHash(),
          Qe.addClass(
            i,
            'index-loading',
            `${t['Index Mode'].replace(/\ /g, '-')}-mode`
          ),
          Qe.on(window, 'popstate', this.cb.popstate),
          Qe.on(a, 'scroll', this.scroll),
          Qe.on(a, 'SortIndex', this.cb.resort),
          (this.button = Qe.el('a', {
            title: 'Refresh',
            href: 'javascript:;',
            textContent: '🗘',
          })),
          Qe.on(this.button, 'click', () => ue.update()),
          Xe.addShortcut('index-refresh', this.button, 590)
        const s = []
        for (r in ((this.inputs = n = m()), c.Index)) {
          var d = c.Index[r]
          if (d instanceof Array) {
            var h = L.checkbox(r, `${r[0]}${r.slice(1).toLowerCase()}`)
            ;(h.title = d[1]),
              s.push({ el: h }),
              (e = h.firstChild),
              Qe.on(e, 'change', Qe.cb.checked),
              (n[r] = e)
          }
        }
        Qe.on(n['Show Replies'], 'change', this.cb.replies),
          Qe.on(n['Catalog Hover Expand'], 'change', this.cb.hover),
          Qe.on(n['Pin Watched Threads'], 'change', this.cb.resort),
          Qe.on(n['Anchor Hidden Threads'], 'change', this.cb.resort)
        const p = function (t) {
          if ((e = Qe.getOwn(n, t.target.name)))
            return (e.checked = t.target.checked), Qe.event('change', null, e)
        }
        Qe.on(a, 'OpenSettings', () =>
          Qe.on(Qe.id('fourchanx-settings'), 'change', p)
        )
        const g = L.checkbox(
          'Per-Board Sort Type',
          'Per-board sort type',
          'object' == typeof t['Index Sort']
        )
        for (var f of ((g.title =
          'Set the sorting order of each board independently.'),
        Qe.on(g.firstChild, 'change', this.cb.perBoardSort),
        s.splice(3, 0, { el: g }),
        Xe.menu.addEntry({
          el: Qe.el('span', { textContent: 'Index Navigation' }),
          order: 100,
          subEntries: s,
        }),
        (this.navLinks = Qe.el('div', { className: 'navLinks json-index' })),
        Qe.extend(this.navLinks, {
          innerHTML:
            '<span class="brackets-wrap indexlink"><a href="#index">Index</a></span> \n<span class="brackets-wrap cataloglink"><a href="#catalog">Catalog</a></span> \n<span class="brackets-wrap archlistlink"><a href="./archive">Archive</a></span> \n<span class="brackets-wrap bottomlink"><a href="#bottom">Bottom</a></span> \n<span class="brackets-wrap" id="index-last-refresh"><a href="javascript:;"><time title="Last index refresh">...</time></a></span> \n<input type="search" id="index-search" class="field" placeholder="Search">\n<a id="index-search-clear" href="javascript:;" title="Clear search">×</a>\n<span id="hidden-label" hidden> &mdash; <span id="hidden-count"></span> <span id="hidden-toggle">[<a href="javascript:;">Show</a>]</span></span>\n<span id="index-options">\n  <input type="checkbox" id="index-rev" name="Reverse Sort" title="Reverse sort order">\n  <span id="lastlong-options" hidden>\n    <input type="text" title="Minimum letter count (without image)">\n    <input type="text" title="Minimum letter count (with image)">\n  </span>\n  <select id="index-sort" name="Index Sort">\n    <option disabled>Index Sort</option>\n    <option value="bump">Bump order</option>\n    <option value="lastreply">Last reply</option>\n    <option value="lastlong">Last long reply</option>\n    <option value="birth">Creation date</option>\n    <option value="replycount">Reply count</option>\n    <option value="filecount">File count</option>\n    <option value="activity">Posts per minute</option>\n  </select>\n  <select id="index-size" name="Index Size">\n    <option disabled>Image Size</option>\n    <option value="small">Small</option>\n    <option value="large">Large</option>\n  </select>\n  <select id="index-mode" name="Index Mode">\n    <option disabled>Index Mode</option>\n    <option value="paged">Paged</option>\n    <option value="infinite">Infinite scrolling</option>\n    <option value="all pages">All threads</option>\n    <option value="catalog">Catalog</option>\n  </select>\n</span>\n',
        }),
        (Qe('.cataloglink a', this.navLinks).href = Je.catalog()),
        Y.isArchived(o.BOARD.ID) ||
          (Qe('.archlistlink', this.navLinks).hidden = !0),
        Qe.on(
          Qe('#index-last-refresh a', this.navLinks),
          'click',
          this.cb.refreshFront
        ),
        (this.searchInput = Qe('#index-search', this.navLinks)),
        this.setupSearch(),
        Qe.on(this.searchInput, 'input', this.onSearchInput),
        Qe.on(
          Qe('#index-search-clear', this.navLinks),
          'click',
          this.clearSearch
        ),
        (this.hideLabel = Qe('#hidden-label', this.navLinks)),
        Qe.on(
          Qe('#hidden-toggle a', this.navLinks),
          'click',
          this.cb.toggleHiddenThreads
        ),
        (this.selectRev = Qe('#index-rev', this.navLinks)),
        (this.selectMode = Qe('#index-mode', this.navLinks)),
        (this.selectSort = Qe('#index-sort', this.navLinks)),
        (this.selectSize = Qe('#index-size', this.navLinks)),
        Qe.on(this.selectRev, 'change', this.cb.sort),
        Qe.on(this.selectMode, 'change', this.cb.mode),
        Qe.on(this.selectSort, 'change', this.cb.sort),
        Qe.on(this.selectSize, 'change', Qe.cb.value),
        Qe.on(this.selectSize, 'change', this.cb.size),
        [this.selectMode, this.selectSize]))
          f.value = t[f.name]
        ;(this.selectRev.checked = /-rev$/.test(ue.currentSort)),
          (this.selectSort.value = ue.currentSort.replace(/-rev$/, '')),
          (this.lastLongOptions = Qe('#lastlong-options', this.navLinks)),
          (this.lastLongInputs = u('input', this.lastLongOptions)),
          (this.lastLongThresholds = [0, 0]),
          (this.lastLongOptions.hidden = 'lastlong' !== this.selectSort.value)
        for (let n = 0; n < this.lastLongInputs.length; n++) {
          ;(e = this.lastLongInputs[n]),
            Qe.on(e, 'change', this.cb.lastLongThresholds)
          var b = t[`Last Long Reply Thresholds ${n}`]
          e.value = this.lastLongThresholds[n] =
            'object' == typeof b ? b[o.BOARD.ID] ?? 100 : b
        }
        return (
          (this.root = Qe.el('div', { className: 'board json-index' })),
          Qe.on(this.root, 'click', this.cb.hoverToggle),
          this.cb.size(),
          this.cb.hover(),
          (this.pagelist = Qe.el('div', { className: 'pagelist json-index' })),
          Qe.extend(this.pagelist, {
            innerHTML:
              '<div class="prev">\n  <a>\n    <button disabled>Previous</button>\n  </a>\n</div>\n<div class="pages"></div>\n<div class="next">\n  <a>\n    <button disabled>Next</button>\n  </a>\n</div>\n<div class="pages cataloglink">\n  <a href="./catalog">Catalog</a>\n</div>\n',
          }),
          (Qe('.cataloglink a', this.pagelist).href = Je.catalog()),
          Qe.on(this.pagelist, 'click', this.cb.pageNav),
          this.update(!0),
          Qe.onExists(
            i,
            'title + *',
            () => (a.title = a.title.replace(/\ -\ Page\ \d+/, ''))
          ),
          Qe.onExists(
            i,
            '.board > .thread > .postContainer, .board + *',
            function () {
              let e
              ;(o.SITE.Build.hat = Qe('.board > .thread > img:first-child')),
                o.SITE.Build.hat &&
                  (o.BOARD.threads.forEach(function (e) {
                    if (e.nodes.root)
                      return Qe.prepend(
                        e.nodes.root,
                        o.SITE.Build.hat.cloneNode(!1)
                      )
                  }),
                  Qe.addClass(i, 'hats-enabled'),
                  Qe.addStyle(
                    `.catalog-thread::after {background-image: url(${o.SITE.Build.hat.src});}`
                  ))
              const t = Qe('.board')
              Qe.replace(t, ue.root),
                ue.loaded && Qe.event('PostsInserted', null, ue.root)
              try {
                a.implementation.createDocument(null, null, null).appendChild(t)
              } catch (e) {}
              for (e of u('.navLinks')) Qe.rm(e)
              Qe.rm(Qe.id('ctrl-top'))
              const n = Qe.id('delform').previousElementSibling
              Qe.before(n, Qe.el('hr')), Qe.before(n, ue.navLinks)
              const r = Qe('#index-last-refresh time', ue.navLinks)
              if (r.dataset.utc) return G.update(r)
            }
          ),
          jt.ready(function () {
            let e
            return (
              (e = Qe('.pagelist')) && Qe.replace(e, ue.pagelist),
              Qe.rmClass(i, 'index-loading')
            )
          })
        )
      },
      scroll() {
        if (
          ue.req ||
          !ue.liveThreadData ||
          'infinite' !== t['Index Mode'] ||
          window.scrollY <= i.scrollHeight - (300 + window.innerHeight)
        )
          return
        null == ue.pageNum && (ue.pageNum = ue.currentPage)
        const e = ++ue.pageNum
        if (e > ue.pagesNum) return ue.endNotice()
        const o = ue.threadsOnPage(e)
        return ue.buildStructure(o)
      },
      endNotice: (function () {
        let e = !1
        const t = () => (e = !1)
        return function () {
          if (!e)
            return (
              (e = !0),
              new _e('info', 'Last page reached.', 2),
              setTimeout(t, 3e3)
            )
        }
      })(),
      menu: {
        init() {
          if (
            'index' === o.VIEW &&
            t.Menu &&
            t['Thread Hiding Link'] &&
            ue.enabledOn(o.BOARD)
          )
            return Q.menu.addEntry({
              el: Qe.el(
                'a',
                {
                  href: 'javascript:;',
                  className: 'has-shortcut-text',
                },
                {
                  innerHTML:
                    '<span></span><span class="shortcut-text">Shift+click</span>',
                }
              ),
              order: 20,
              open({ thread: e }) {
                return (
                  'catalog' === t['Index Mode'] &&
                  ((this.el.firstElementChild.textContent = e.isHidden
                    ? 'Unhide'
                    : 'Hide'),
                  this.cb && Qe.off(this.el, 'click', this.cb),
                  (this.cb = function () {
                    return Qe.event('CloseMenu'), ue.toggleHide(e)
                  }),
                  Qe.on(this.el, 'click', this.cb),
                  !0)
                )
              },
            })
        },
      },
      node() {
        if (
          !this.isReply &&
          !this.isClone &&
          null != ue.threadPosition[this.ID]
        )
          return this.thread.setPage(
            Math.floor(ue.threadPosition[this.ID] / ue.threadsNumPerPage) + 1
          )
      },
      catalogNode() {
        return Qe.on(this.nodes.root, 'mousedown click', e => {
          if (0 === e.button && e.shiftKey)
            return (
              'click' === e.type && ue.toggleHide(this.thread),
              e.preventDefault()
            )
        })
      },
      toggleHide(e) {
        if (ue.showHiddenThreads) {
          if ((ge.show(e), !ge.db.get({ boardID: e.board.ID, threadID: e.ID })))
            return
        } else ge.hide(e)
        return ge.saveHiddenState(e)
      },
      cycleSortType() {
        let e
        const t = ue.selectSort.options.filter(e => !e.disabled)
        for (e = 0; e < t.length; e++) {
          if (t[e].selected) break
        }
        return (
          (t[(e + 1) % t.length].selected = !0),
          Qe.event('change', null, ue.selectSort)
        )
      },
      cb: {
        initFinished: () => (
          (ue.initFinishedFired = !0), Qe.queueTask(() => ue.cb.postsInserted())
        ),
        postsInserted() {
          if (!ue.initFinishedFired) return
          let e = 0
          return (
            o.posts.forEach(function (t) {
              if (
                !t.isFetchedQuote &&
                !t.indexRefreshSeen &&
                i.contains(t.nodes.root)
              )
                return (t.indexRefreshSeen = !0), e++
            }),
            e ? Qe.event('IndexRefresh') : void 0
          )
        },
        toggleHiddenThreads: () => (
          (Qe('#hidden-toggle a', ue.navLinks).textContent =
            (ue.showHiddenThreads = !ue.showHiddenThreads) ? 'Hide' : 'Show'),
          ue.sort(),
          ue.buildIndex()
        ),
        mode() {
          return ue.pushState({ mode: this.value }), ue.pageLoad(!1)
        },
        sort() {
          const e = ue.selectRev.checked
            ? ue.selectSort.value + '-rev'
            : ue.selectSort.value
          return ue.pushState({ sort: e }), ue.pageLoad(!1)
        },
        resort(e) {
          if (((ue.changed.order = !0), !e?.detail?.deferred))
            return ue.pageLoad(!1)
        },
        perBoardSort() {
          ;(t['Index Sort'] = this.checked ? m() : ''), ue.saveSort()
          for (let e = 0; e < 2; e++)
            (t[`Last Long Reply Thresholds ${e}`] = this.checked ? m() : ''),
              ue.saveLastLongThresholds(e)
        },
        lastLongThresholds() {
          const e = [...this.parentNode.children].indexOf(this),
            t = +this.value
          if (Number.isFinite(t))
            return (
              (ue.lastLongThresholds[e] = t),
              ue.saveLastLongThresholds(e),
              (ue.changed.order = !0),
              ue.pageLoad(!1)
            )
          this.value = ue.lastLongThresholds[e]
        },
        size(e) {
          if (
            ('catalog' !== t['Index Mode']
              ? (Qe.rmClass(ue.root, 'catalog-small'),
                Qe.rmClass(ue.root, 'catalog-large'))
              : 'small' === t['Index Size']
                ? (Qe.addClass(ue.root, 'catalog-small'),
                  Qe.rmClass(ue.root, 'catalog-large'))
                : (Qe.addClass(ue.root, 'catalog-large'),
                  Qe.rmClass(ue.root, 'catalog-small')),
            e)
          )
            return ue.buildIndex()
        },
        replies: () => ue.buildIndex(),
        hover: () =>
          i.classList.toggle('catalog-hover-expand', t['Catalog Hover Expand']),
        hoverToggle(e) {
          if (
            t['Catalog Hover Toggle'] &&
            Qe.hasClass(i, 'catalog-mode') &&
            !Qe.modifiedClick(e) &&
            !Qe.x('ancestor-or-self::a', e.target)
          ) {
            let t
            const o = ue.inputs['Catalog Hover Expand']
            if (
              ((o.checked = !o.checked),
              Qe.event('change', null, o),
              (t = We.threadFromNode(e.target)))
            )
              return (
                ue.cb.catalogReplies.call(t), ue.cb.hoverAdjust.call(t.OP.nodes)
              )
          }
        },
        popstate(e) {
          if (e?.state) {
            const { searched: t, mode: o, sort: n } = e.state,
              a = ue.getCurrentPage()
            return (
              ue.setState({ search: t, mode: o, sort: n, page: a }),
              ue.pageLoad(!1)
            )
          }
          {
            const e = ue.processHash()
            return t['Refreshed Navigation'] && e ? ue.update() : ue.pageLoad()
          }
        },
        pageNav(e) {
          let t
          if (!Qe.modifiedClick(e)) {
            switch (e.target.nodeName) {
              case 'BUTTON':
                e.target.blur(), (t = e.target.parentNode)
                break
              case 'A':
                t = e.target
                break
              default:
                return
            }
            if ('Catalog' !== t.textContent)
              return (
                e.preventDefault(),
                ue.userPageNav(+t.pathname.split(/\/+/)[2] || 1)
              )
          }
        },
        refreshFront: () => (ue.pushState({ page: 1 }), ue.update()),
        catalogReplies() {
          if (
            t['Show Replies'] &&
            Qe.hasClass(i, 'catalog-hover-expand') &&
            !this.catalogView.nodes.replies
          )
            return ue.buildCatalogReplies(this)
        },
        hoverAdjust() {
          let e
          if (!Qe.hasClass(i, 'catalog-hover-expand')) return
          const t = this.post.getBoundingClientRect()
          if ((e = Qe.minmax(0, -t.left, i.clientWidth - t.right))) {
            const { style: t } = this.post
            return (
              (t.left = `${e}px`),
              (t.right = -e + 'px'),
              Qe.one(this.root, 'mouseleave', () => (t.left = t.right = null))
            )
          }
        },
      },
      scrollToIndex: () =>
        Xe.scrollToIfNeeded(
          ue.navLinks.getBoundingClientRect().height ? ue.navLinks : ue.root
        ),
      getCurrentPage: () => +window.location.pathname.split(/\/+/)[2] || 1,
      userPageNav: e => (
        ue.pushState({ page: e }),
        t['Refreshed Navigation'] ? ue.update() : ue.pageLoad()
      ),
      hashCommands: {
        mode: {
          'paged': 'paged',
          'infinite-scrolling': 'infinite',
          'infinite': 'infinite',
          'all-threads': 'all pages',
          'all-pages': 'all pages',
          'catalog': 'catalog',
        },
        sort: {
          'bump-order': 'bump',
          'last-reply': 'lastreply',
          'last-long-reply': 'lastlong',
          'creation-date': 'birth',
          'reply-count': 'replycount',
          'file-count': 'filecount',
          'posts-per-minute': 'activity',
        },
      },
      processHash() {
        let e = location.href.match(/#.*/)?.[0] || ''
        const o = { replace: !0 },
          n = e.slice(1).split('/'),
          a = []
        for (var i of n) {
          var r, s
          ;(r = Qe.getOwn(ue.hashCommands.mode, i))
            ? (o.mode = r)
            : 'index' === i
              ? ((o.mode = t['Previous Index Mode']), (o.page = 1))
              : (s = Qe.getOwn(ue.hashCommands.sort, i.replace(/-rev$/, '')))
                ? ((o.sort = s), /-rev$/.test(i) && (o.sort += '-rev'))
                : /^s=/.test(i)
                  ? (o.search = decodeURIComponent(i.slice(2))
                      .replace(/\+/g, ' ')
                      .trim())
                  : a.push(i)
        }
        return (
          (e = a.join('/')),
          e && (o.hash = `#${e}`),
          ue.pushState(o),
          n.length - a.length
        )
      },
      pushState(e) {
        let { search: n, hash: a, replace: i } = e,
          r = history.state?.oldpage
        null != n &&
          n !== ue.search &&
          ((e.page = n ? 1 : r || 1),
          n ? ue.search || (r = ue.currentPage) : (r = void 0)),
          ue.setState(e)
        const s =
          1 === ue.currentPage
            ? `/${o.BOARD}/`
            : `/${o.BOARD}/${ue.currentPage}`
        return (
          a || (a = ''),
          history[i ? 'replaceState' : 'pushState'](
            {
              mode: t['Index Mode'],
              sort: ue.currentSort,
              searched: ue.search,
              oldpage: r,
            },
            '',
            `${location.protocol}//${location.host}${s}${a}`
          )
        )
      },
      setState({ search: e, mode: o, sort: n, page: a, hash: i }) {
        if (
          (null != e &&
            e !== ue.search &&
            ((ue.changed.search = !0), (ue.search = e)),
          null != o &&
            o !== t['Index Mode'] &&
            ((ue.changed.mode = !0),
            (t['Index Mode'] = o),
            Qe.set('Index Mode', o),
            'catalog' !== o &&
              t['Previous Index Mode'] !== o &&
              ((t['Previous Index Mode'] = o),
              Qe.set('Previous Index Mode', o))),
          null != n &&
            n !== ue.currentSort &&
            ((ue.changed.sort = !0), (ue.currentSort = n), ue.saveSort()),
          ['all pages', 'catalog'].includes(t['Index Mode']) && (a = 1),
          null != a &&
            a !== ue.currentPage &&
            ((ue.changed.page = !0), (ue.currentPage = a)),
          null != i)
        )
          return (ue.changed.hash = !0)
      },
      savePerBoard: (e, n) => (
        'object' == typeof t[e] ? (t[e][o.BOARD.ID] = n) : (t[e] = n),
        Qe.set(e, t[e])
      ),
      saveSort: () => ue.savePerBoard('Index Sort', ue.currentSort),
      saveLastLongThresholds: e =>
        ue.savePerBoard(
          `Last Long Reply Thresholds ${e}`,
          ue.lastLongThresholds[e]
        ),
      pageLoad(e = !0) {
        if (!ue.liveThreadData) return
        let {
          threads: t,
          order: o,
          search: n,
          mode: a,
          sort: i,
          page: r,
          hash: s,
        } = ue.changed
        return (
          t || (t = n),
          o || (o = i),
          (t || o) && ue.sort(),
          t && ue.buildPagelist(),
          n && ue.setupSearch(),
          a && ue.setupMode(),
          i && ue.setupSort(),
          (t || a || r || o) && ue.buildIndex(),
          (t || r) && ue.setPage(),
          e && !s && ue.scrollToIndex(),
          s && Xe.hashScroll(),
          (ue.changed = {})
        )
      },
      setupMode() {
        for (var e of ['paged', 'infinite', 'all pages', 'catalog'])
          Qe[e === t['Index Mode'] ? 'addClass' : 'rmClass'](
            i,
            `${e.replace(/\ /g, '-')}-mode`
          )
        return (
          (ue.selectMode.value = t['Index Mode']),
          ue.cb.size(),
          (ue.showHiddenThreads = !1),
          (Qe('#hidden-toggle a', ue.navLinks).textContent = 'Show')
        )
      },
      setupSort: () => (
        (ue.selectRev.checked = /-rev$/.test(ue.currentSort)),
        (ue.selectSort.value = ue.currentSort.replace(/-rev$/, '')),
        (ue.lastLongOptions.hidden = 'lastlong' !== ue.selectSort.value)
      ),
      getPagesNum: () =>
        ue.search
          ? Math.ceil(ue.sortedThreadIDs.length / ue.threadsNumPerPage)
          : ue.pagesNum,
      getMaxPageNum: () => Math.max(1, ue.getPagesNum()),
      buildPagelist() {
        const e = Qe('.pages', ue.pagelist),
          t = ue.getMaxPageNum()
        if (e.childElementCount !== t) {
          const n = []
          for (let e = 1, a = t; e <= a; e++) {
            var o = Qe.el('a', { textContent: e, href: 1 === e ? './' : e })
            n.push(Qe.tn('['), o, Qe.tn('] '))
          }
          return Qe.rmAll(e), Qe.add(e, n)
        }
      },
      setPage() {
        let e, t
        const o = ue.currentPage,
          n = ue.getMaxPageNum(),
          a = Qe('.pages', ue.pagelist),
          i = a.previousElementSibling.firstElementChild,
          r = a.nextElementSibling.firstElementChild
        let s = Math.max(o - 1, 1)
        if (
          ((i.href = 1 === s ? './' : s),
          (i.firstElementChild.disabled = s === o),
          (s = Math.min(o + 1, n)),
          (r.href = 1 === s ? './' : s),
          (r.firstElementChild.disabled = s === o),
          (t = Qe('strong', a)))
        ) {
          if (+t.textContent === o) return
          Qe.replace(t, t.firstChild)
        } else t = Qe.el('strong')
        if ((e = a.children[o - 1])) return Qe.before(e, t), Qe.add(t, e)
      },
      updateHideLabel() {
        if (!ue.hideLabel) return
        let e = 0
        for (var t of ue.liveThreadIDs) ue.isHidden(t) && e++
        return e
          ? ((ue.hideLabel.hidden = !1),
            (Qe('#hidden-count', ue.navLinks).textContent =
              1 === e ? '1 hidden thread' : `${e} hidden threads`))
          : ((ue.hideLabel.hidden = !0),
            void (ue.showHiddenThreads && ue.cb.toggleHiddenThreads()))
      },
      update(e) {
        let n
        if (
          ((n = ue.req) && (delete ue.req, n.abort()),
          t['Index Refresh Notifications']
            ? (ue.notice || (ue.notice = new _e('info', 'Refreshing index...')),
              ue.nTimeout ||
                (ue.nTimeout = setTimeout(() => {
                  ue.notice &&
                    (ue.notice.el.lastElementChild.textContent +=
                      ' (disable JSON Index if this takes too long)')
                }, 3e3)))
            : ue.nTimeout ||
              (ue.nTimeout = setTimeout(
                () =>
                  ue.notice ||
                  (ue.notice = new _e(
                    'info',
                    'Refreshing index... (disable JSON Index if this takes too long)'
                  )),
                3e3
              )),
          e || 'loading' === a.readyState || Qe('.board + *'))
        )
          return (
            (ue.req = Qe.whenModified(
              o.SITE.urls.catalogJSON({ boardID: o.BOARD.ID }),
              'Index',
              ue.load
            )),
            Qe.addClass(ue.button, 'spin')
          )
        location.reload()
      },
      load() {
        let e
        if (this !== ue.req) return
        Qe.rmClass(ue.button, 'spin')
        const { notice: o, nTimeout: n } = ue
        if (
          (n && clearTimeout(n),
          delete ue.nTimeout,
          delete ue.req,
          delete ue.notice,
          ![200, 304].includes(this.status))
        )
          return (
            (e =
              'Index refresh failed. ' +
              (this.status
                ? `Error ${this.statusText} (${this.status})`
                : 'Connection Error')),
            void (o
              ? (o.setType('warning'),
                (o.el.lastElementChild.textContent = e),
                setTimeout(o.close, b))
              : new _e('warning', e, 1))
          )
        try {
          200 === this.status
            ? ue.parse(this.response)
            : 304 === this.status && ue.pageLoad()
        } catch (t) {
          return (
            (e = t),
            r.error(`Index failure: ${e.message}`, e.stack),
            void (o
              ? (o.setType('error'),
                (o.el.lastElementChild.textContent = 'Index refresh failed.'),
                setTimeout(o.close, b))
              : new _e('error', 'Index refresh failed.', 1))
          )
        }
        o &&
          (t['Index Refresh Notifications']
            ? (o.setType('success'),
              (o.el.lastElementChild.textContent = 'Index refreshed!'),
              setTimeout(o.close, b))
            : o.close())
        const a = Qe('#index-last-refresh time', ue.navLinks)
        return (
          (a.dataset.utc = Date.parse(this.getResponseHeader('Last-Modified'))),
          G.update(a)
        )
      },
      parse: e => (
        Qe.cleanCache(e => /^https?:\/\/a\.4cdn\.org\//.test(e)),
        ue.parseThreadList(e),
        (ue.changed.threads = !0),
        ue.pageLoad()
      ),
      parseThreadList(e) {
        ;(ue.pagesNum = e.length),
          (ue.threadsNumPerPage = e[0]?.threads.length || 1),
          (ue.liveThreadData = e.reduce((e, t) => e.concat(t.threads), [])),
          (ue.liveThreadIDs = ue.liveThreadData.map(e => e.no)),
          (ue.liveThreadDict = m()),
          (ue.threadPosition = m()),
          (ue.parsedThreads = m()),
          (ue.replyData = m())
        for (let e = 0; e < ue.liveThreadData.length; e++) {
          var t,
            n,
            a = ue.liveThreadData[e]
          if (
            ((ue.liveThreadDict[a.no] = a),
            (ue.threadPosition[a.no] = e),
            (ue.parsedThreads[a.no] = t = o.SITE.Build.parseJSON(a, o.BOARD)),
            (t.filterResults = n = Ge.test(t)),
            (t.isOnTop = n.top),
            (t.isHidden = n.hide || ge.isHidden(t.boardID, t.threadID)),
            a.last_replies)
          )
            for (var i of a.last_replies) ue.replyData[`${o.BOARD}.${i.no}`] = i
        }
        ue.liveThreadData[0] &&
          (o.SITE.Build.spoilerRange[o.BOARD.ID] =
            ue.liveThreadData[0].custom_spoiler),
          o.BOARD.threads.forEach(function (e) {
            if (!ue.liveThreadIDs.includes(e.ID)) return e.collect()
          }),
          Qe.event('IndexUpdate', {
            threads: ue.liveThreadIDs.map(e => `${o.BOARD}.${e}`),
          })
      },
      isHidden(e) {
        let t
        return (t = o.BOARD.threads.get(e)) && t.OP && !t.OP.isFetchedQuote
          ? t.isHidden
          : ue.parsedThreads[e].isHidden
      },
      isHiddenReply: (e, t) =>
        W.isHidden(o.BOARD.ID, e, t.no) ||
        Ge.isHidden(o.SITE.Build.parseJSON(t, o.BOARD)),
      buildThreads(e, t, n) {
        let a
        const i = [],
          r = []
        let s = []
        for (var l of e) {
          var d, c
          try {
            var h,
              u = ue.liveThreadDict[l]
            if ((c = o.BOARD.threads.get(l)))
              c.json !== u &&
                JSON.stringify(c.json) !== JSON.stringify(u) &&
                (c.setCount('post', u.replies + 1, u.bumplimit),
                c.setCount('file', u.images + !!u.ext, u.imagelimit),
                c.setStatus('Sticky', !!u.sticky),
                c.setStatus('Closed', !!u.closed)),
                c.catalogView &&
                  (Qe.rm(c.catalogView.nodes.replies),
                  (c.catalogView.nodes.replies = null))
            else (c = new I(l, o.BOARD)), r.push(c)
            var p =
              u.last_replies && u.last_replies.length
                ? u.last_replies[u.last_replies.length - 1].no
                : l
            if (
              (p > c.lastPost && (c.lastPost = p),
              (c.json = u),
              i.push(c),
              (h = c.OP) && !h.isFetchedQuote)
            )
              h.setCatalogOP(t),
                c.setPage(
                  Math.floor(ue.threadPosition[l] / ue.threadsNumPerPage) + 1
                )
            else {
              var g = ue.parsedThreads[l]
              ;(d = o.SITE.Build.post(g)),
                ((h = new H(d, c, o.BOARD)).filterResults = g.filterResults),
                s.push(h)
            }
            ;(t && c.nodes.root) || o.SITE.Build.thread(c, u, n)
          } catch (e) {
            a || (a = []),
              a.push({
                message: `Parsing of Thread No.${c} failed. Thread will be skipped.`,
                error: e,
                html: d?.outerHTML,
              })
          }
        }
        return (
          a && jt.handleErrors(a),
          n && (s = s.concat(ue.buildReplies(i))),
          jt.callbackNodes('Thread', r),
          jt.callbackNodes('Post', s),
          ue.updateHideLabel(),
          Qe.event('IndexRefreshInternal', {
            threadIDs: i.map(e => e.fullID),
            isCatalog: t,
          }),
          i
        )
      },
      buildReplies(e) {
        let t
        const n = []
        for (var a of e) {
          var i
          if ((i = ue.liveThreadDict[a.ID].last_replies)) {
            var r = []
            for (var s of i) {
              var l, d
              if (!(d = a.posts.get(s.no)) || d.isFetchedQuote) {
                r.push((l = o.SITE.Build.postFromObject(s, a.board.ID)))
                try {
                  n.push(new H(l, a, a.board))
                } catch (e) {
                  t || (t = []),
                    t.push({
                      message: `Parsing of Post No.${s.no} failed. Post will be skipped.`,
                      error: e,
                      html: l?.outerHTML,
                    })
                }
              } else r.push(d.nodes.root)
            }
            Qe.add(a.nodes.root, r)
          }
        }
        return t && jt.handleErrors(t), n
      },
      buildCatalogViews(e) {
        const t = []
        for (var n of e)
          if (!n.catalogView) {
            var { ID: a } = n,
              i = Math.floor(ue.threadPosition[a] / ue.threadsNumPerPage) + 1,
              r = o.SITE.Build.catalogThread(n, ue.liveThreadDict[a], i)
            t.push(new C(r, n))
          }
        jt.callbackNodes('CatalogThread', t)
      },
      sizeCatalogViews(e) {
        const o = 'small' === t['Index Size'] ? 150 : 250
        for (var n of e) {
          var { thumb: a } = n.catalogView.nodes,
            { width: i, height: r } = a.dataset
          if (i) {
            var s = o / Math.max(i, r)
            ;(a.style.width = i * s + 'px'), (a.style.height = r * s + 'px')
          }
        }
      },
      buildCatalogReplies(e) {
        let t
        const { nodes: n } = e.catalogView
        if (!(t = ue.liveThreadDict[e.ID].last_replies)) return
        const a = []
        for (var i of t)
          if (!ue.isHiddenReply(e.ID, i)) {
            var r = o.SITE.Build.catalogReply(e, i)
            G.update(Qe('time', r)),
              Qe.on(Qe('.catalog-reply-preview', r), 'mouseover', he.mouseover),
              a.push(r)
          }
        ;(n.replies = Qe.el('div', { className: 'catalog-replies' })),
          Qe.add(n.replies, a),
          Qe.add(e.OP.nodes.post, n.replies)
      },
      sort() {
        let e
        const { liveThreadIDs: n, liveThreadData: a } = ue
        if (!a) return
        const i = new Date().getTime() / 1e3,
          r = ue.currentSort.replace(/-rev$/, '')
        return (
          (ue.sortedThreadIDs = (() => {
            switch (r) {
              case 'lastreply':
              case 'lastlong':
                var e = a.some(e => e.last_replies?.length),
                  t = function (t) {
                    if (!e) return t.last_modified
                    const n = t.last_replies || []
                    for (let e = n.length - 1; e >= 0; e--) {
                      var a = n[e]
                      if (!ue.isHiddenReply(t.no, a)) {
                        if ('lastreply' === r) return a
                        if (
                          (a.com
                            ? o.SITE.Build.parseComment(a.com).replace(
                                /[^a-z]/gi,
                                ''
                              ).length
                            : 0) >= ue.lastLongThresholds[+!!a.ext]
                        )
                          return a
                      }
                    }
                    return t.omitted_posts && t.last_replies?.length
                      ? t.last_replies[0]
                      : t
                  },
                  s = m()
                for (var l of a) s[l.no] = t(l).no
                return [...a].sort((e, t) => s[t.no] - s[e.no]).map(e => e.no)
              case 'bump':
              default:
                return n
              case 'birth':
                return [...n].sort((e, t) => t - e)
              case 'replycount':
                return [...a]
                  .sort((e, t) => t.replies - e.replies)
                  .map(e => e.no)
              case 'filecount':
                return [...a].sort((e, t) => t.images - e.images).map(e => e.no)
              case 'activity':
                return [...a]
                  .sort(
                    (e, t) =>
                      (i - e.time) / (e.replies + 1) -
                      (i - t.time) / (t.replies + 1)
                  )
                  .map(e => e.no)
            }
          })()),
          /-rev$/.test(ue.currentSort) && ue.sortedThreadIDs.reverse(),
          ue.search &&
            (e = ue.querySearch(ue.search)) &&
            (ue.sortedThreadIDs = e),
          ue.sortOnTop(e => e.isSticky),
          ue.sortOnTop(
            e =>
              e.isOnTop ||
              (t['Pin Watched Threads'] &&
                ae.isWatchedRaw(e.boardID, e.threadID))
          ),
          t['Anchor Hidden Threads']
            ? ue.sortOnTop(e => !ue.isHidden(e.threadID))
            : void 0
        )
      },
      sortOnTop(e) {
        const t = [],
          o = []
        for (var n of ue.sortedThreadIDs)
          (e(ue.parsedThreads[n]) ? t : o).push(n)
        return (ue.sortedThreadIDs = t.concat(o))
      },
      buildIndex() {
        let e
        if (ue.liveThreadData) {
          switch (t['Index Mode']) {
            case 'all pages':
              e = ue.sortedThreadIDs
              break
            case 'catalog':
              e = ue.sortedThreadIDs.filter(
                e => !ue.isHidden(e) !== ue.showHiddenThreads
              )
              break
            default:
              e = ue.threadsOnPage(ue.currentPage)
          }
          delete ue.pageNum,
            Qe.rmAll(ue.root),
            Qe.rmAll(Xe.hover),
            ue.loaded &&
              ue.root.parentNode &&
              Qe.event('PostsRemoved', null, ue.root),
            'catalog' === t['Index Mode']
              ? ue.buildCatalog(e)
              : ue.buildStructure(e)
        }
      },
      threadsOnPage(e) {
        const t = ue.threadsNumPerPage,
          o = t * (e - 1)
        return ue.sortedThreadIDs.slice(o, o + t)
      },
      buildStructure(e) {
        const o = ue.buildThreads(e, !1, t['Show Replies']),
          n = []
        for (var a of o) n.push(a.nodes.root, Qe.el('hr'))
        Qe.add(ue.root, n),
          ue.root.parentNode && Qe.event('PostsInserted', null, ue.root),
          (ue.loaded = !0)
      },
      buildCatalog(e) {
        let t = 0
        const o = e.length
        let n = null
        var a = function () {
          if (n && !n.parentNode) return
          const i = t > 0 && ue.root.parentNode ? o : t + 30
          return (
            (n = ue.buildCatalogPart(e.slice(t, i))[0]),
            (t = i),
            t < o
              ? Qe.queueTask(a)
              : (ue.root.parentNode && Qe.event('PostsInserted', null, ue.root),
                (ue.loaded = !0))
          )
        }
        a()
      },
      buildCatalogPart(e) {
        const t = ue.buildThreads(e, !0)
        ue.buildCatalogViews(t), ue.sizeCatalogViews(t)
        const o = []
        for (var n of t)
          n.OP.setCatalogOP(!0),
            Qe.add(n.catalogView.nodes.root, n.OP.nodes.root),
            o.push(n.catalogView.nodes.root),
            Qe.on(
              n.catalogView.nodes.root,
              'mouseenter',
              ue.cb.catalogReplies.bind(n)
            ),
            Qe.on(
              n.OP.nodes.root,
              'mouseenter',
              ue.cb.hoverAdjust.bind(n.OP.nodes)
            )
        return Qe.add(ue.root, o), o
      },
      clearSearch: () => (
        (ue.searchInput.value = ''), ue.onSearchInput(), ue.searchInput.focus()
      ),
      setupSearch: () => (
        (ue.searchInput.value = ue.search),
        ue.search
          ? (ue.searchInput.dataset.searching = 1)
          : ue.searchInput.removeAttribute('data-searching')
      ),
      onSearchInput() {
        const e = ue.searchInput.value.trim()
        if (e !== ue.search)
          return (
            ue.pushState({ search: e, replace: !!e == !!ue.search }),
            ue.pageLoad(!1)
          )
      },
      querySearch(e) {
        let t, o
        if ((o = e.match(/^([\w+]+):\/(.*)\/(\w*)$/))) {
          let e
          try {
            e = RegExp(o[2], o[3])
          } catch (e) {
            return []
          }
          return ue.sortedThreadIDs.filter(t =>
            e.test(Ge.values(o[1], ue.parsedThreads[t]).join('\n'))
          )
        }
        if ((t = e.toLowerCase().match(/\S+/g)))
          return ue.sortedThreadIDs.filter(e =>
            ue.searchMatch(ue.parsedThreads[e], t)
          )
      },
      searchMatch(e, t) {
        const { info: n, file: a } = e
        null == n.comment &&
          (n.comment = o.SITE.Build.parseComment(n.commentHTML.innerHTML))
        let i = []
        for (var r of ['comment', 'subject', 'name', 'tripcode'])
          r in n && i.push(n[r])
        for (var s of (a && i.push(a.name), (i = i.join(' ').toLowerCase()), t))
          if (-1 === i.indexOf(s)) return !1
        return !0
      },
    },
    pe = ue,
    ge = {
      init() {
        if (
          ['index', 'catalog'].includes(o.VIEW) &&
          (t['Thread Hiding Buttons'] ||
            (t.Menu && t['Thread Hiding Link']) ||
            t['JSON Index'])
        )
          return (
            (this.db = new y('hiddenThreads')),
            'catalog' === o.VIEW
              ? this.catalogWatch()
              : (this.catalogSet(o.BOARD),
                Qe.on(a, 'IndexRefreshInternal', this.onIndexRefresh),
                t['Thread Hiding Buttons'] && Qe.addClass(i, 'thread-hide'),
                l.Post.push({ name: 'Thread Hiding', cb: this.node }))
          )
      },
      catalogSet(e) {
        if (!Qe.hasStorage || 'yotsuba' !== o.SITE.software) return
        const t = ge.db.get({ boardID: e.ID, defaultValue: m() })
        for (var n in t) t[n] = !0
        return localStorage.setItem(`4chan-hide-t-${e}`, JSON.stringify(t))
      },
      catalogWatch() {
        if (Qe.hasStorage && 'yotsuba' === o.SITE.software)
          return (
            (this.hiddenThreads =
              JSON.parse(localStorage.getItem(`4chan-hide-t-${o.BOARD}`)) ||
              {}),
            jt.ready(() =>
              new MutationObserver(ge.catalogSave).observe(Qe.id('threads'), {
                attributes: !0,
                subtree: !0,
                attributeFilter: ['style'],
              })
            )
          )
      },
      catalogSave() {
        let e
        const n =
          JSON.parse(localStorage.getItem(`4chan-hide-t-${o.BOARD}`)) || {}
        for (e in n)
          Qe.hasOwn(ge.hiddenThreads, e) ||
            ge.db.set({
              boardID: o.BOARD.ID,
              threadID: e,
              val: { makeStub: t.Stubs },
            })
        for (e in ge.hiddenThreads)
          Qe.hasOwn(n, e) || ge.db.delete({ boardID: o.BOARD.ID, threadID: e })
        return (ge.hiddenThreads = n)
      },
      isHidden: (e, t) => !(!ge.db || !ge.db.get({ boardID: e, threadID: t })),
      node() {
        let e
        if (!(this.isReply || this.isClone || this.isFetchedQuote))
          return (
            t['Thread Hiding Buttons'] &&
              Qe.prepend(this.nodes.root, ge.makeButton(this.thread, 'hide')),
            (e = ge.db.get({ boardID: this.board.ID, threadID: this.ID }))
              ? ge.hide(this.thread, e.makeStub)
              : void 0
          )
      },
      onIndexRefresh: () =>
        o.BOARD.threads.forEach(function (e) {
          const { root: t } = e.nodes
          if (e.isHidden && e.stub && !t.contains(e.stub))
            return ge.makeStub(e, t)
        }),
      menu: {
        init() {
          if ('index' !== o.VIEW || !t.Menu || !t['Thread Hiding Link']) return
          let e = Qe.el('div', {
            className: 'hide-thread-link',
            textContent: 'Hide',
          })
          const n = Qe.el('a', { textContent: 'Apply', href: 'javascript:;' })
          Qe.on(n, 'click', ge.menu.hide)
          const a = L.checkbox('Stubs', 'Make stub')
          Q.menu.addEntry({
            el: e,
            order: 20,
            open: ({ thread: e, isReply: o }) =>
              !(
                o ||
                e.isHidden ||
                (t['JSON Index'] && 'catalog' === t['Index Mode'])
              ) && ((ge.menu.thread = e), !0),
            subEntries: [{ el: n }, { el: a }],
          }),
            (e = Qe.el('a', {
              className: 'show-thread-link',
              textContent: 'Show',
              href: 'javascript:;',
            })),
            Qe.on(e, 'click', ge.menu.show),
            Q.menu.addEntry({
              el: e,
              order: 20,
              open: ({ thread: e, isReply: o }) =>
                !(
                  o ||
                  !e.isHidden ||
                  (t['JSON Index'] && 'catalog' === t['Index Mode'])
                ) && ((ge.menu.thread = e), !0),
            })
          const i = Qe.el('a', {
            textContent: 'Hide stub',
            href: 'javascript:;',
          })
          return (
            Qe.on(i, 'click', ge.menu.hideStub),
            Q.menu.addEntry({
              el: i,
              order: 15,
              open: ({ thread: e, isReply: o }) =>
                !(
                  o ||
                  !e.isHidden ||
                  (t['JSON Index'] && 'catalog' === t['Index Mode'])
                ) && (ge.menu.thread = e),
            })
          )
        },
        hide() {
          const e = Qe('input', this.parentNode).checked,
            { thread: t } = ge.menu
          return ge.hide(t, e), ge.saveHiddenState(t, e), Qe.event('CloseMenu')
        },
        show() {
          const { thread: e } = ge.menu
          return ge.show(e), ge.saveHiddenState(e), Qe.event('CloseMenu')
        },
        hideStub() {
          const { thread: e } = ge.menu
          ge.show(e),
            ge.hide(e, !1),
            ge.saveHiddenState(e, !1),
            Qe.event('CloseMenu')
        },
      },
      makeButton(e, t) {
        const o = Qe.el('a', {
          className: `${t}-thread-button`,
          href: 'javascript:;',
        })
        return (
          Qe.extend(o, { textContent: 'hide' === t ? '➖︎' : '➕︎' }),
          (o.dataset.fullID = e.fullID),
          Qe.on(o, 'click', ge.toggle),
          o
        )
      },
      makeStub(e, n) {
        let a,
          i,
          r = u(o.SITE.selectors.replyOriginal, n).length
        ;(a = Qe(o.SITE.selectors.summary, n)) &&
          (r += +a.textContent.match(/\d+/))
        const s = ge.makeButton(e, 'show')
        if (
          (Qe.add(
            s,
            Qe.tn(
              ` ${e.OP.info.nameBlock} (${
                1 === r ? '1 reply' : `${r} replies`
              })`
            )
          ),
          (e.stub = Qe.el('div', { className: 'stub' })),
          t.Menu ? Qe.add(e.stub, [s, Q.makeButton(e.OP)]) : Qe.add(e.stub, s),
          Qe.prepend(n, e.stub),
          (i = Qe(o.SITE.selectors.threadDivider, n)))
        )
          return Qe.addClass(i, 'threadDivider')
      },
      saveHiddenState: (e, t) => (
        e.isHidden
          ? ge.db.set({
              boardID: e.board.ID,
              threadID: e.ID,
              val: { makeStub: t },
            })
          : ge.db.delete({ boardID: e.board.ID, threadID: e.ID }),
        ge.catalogSet(e.board)
      ),
      toggle(e) {
        return (
          e instanceof I || (e = o.threads.get(this.dataset.fullID)),
          e.isHidden ? ge.show(e) : ge.hide(e),
          ge.saveHiddenState(e)
        )
      },
      hide(e, o = t.Stubs) {
        if (e.isHidden) return
        const n = e.nodes.root
        return (
          (e.isHidden = !0),
          pe.updateHideLabel(),
          e.catalogView &&
            !pe.showHiddenThreads &&
            (Qe.rm(e.catalogView.nodes.root),
            Qe.event('PostsRemoved', null, pe.root)),
          o ? ge.makeStub(e, n) : (n.hidden = !0)
        )
      },
      show(e) {
        e.stub && (Qe.rm(e.stub), delete e.stub)
        if (
          ((e.nodes.root.hidden = e.isHidden = !1),
          pe.updateHideLabel(),
          e.catalogView && pe.showHiddenThreads)
        )
          return (
            Qe.rm(e.catalogView.nodes.root),
            Qe.event('PostsRemoved', null, pe.root)
          )
      },
    }
  const fe = ' | ',
    me = le(
      'div',
      { id: 'fourchanx-settings', class: 'dialog' },
      le(
        'nav',
        null,
        le('div', { class: 'sections-list' }),
        le('p', { class: 'imp-exp-result warning' }),
        le(
          'div',
          { class: 'credits' },
          le('a', { class: 'export' }, 'Export'),
          fe,
          le('a', { class: 'import' }, 'Import'),
          fe,
          le('a', { class: 'reset' }, 'Reset Settings'),
          fe,
          le('input', { type: 'file', hidden: !0 }),
          le('a', { href: e.page, target: '_blank' }, e.name),
          fe,
          le('a', { href: e.changelog, target: '_blank' }, o.VERSION),
          fe,
          le('a', { href: e.issues, target: '_blank' }, 'Issues'),
          fe,
          le('a', { href: 'javascript:;', class: 'close', title: 'Close' }, '✕')
        )
      ),
      le('div', { class: 'section-container' }, le('section', null))
    )
  const be = {
    boards:
      '.dialog{border:1px solid;display:block;background-color:inherit}.dialog:not(#qr):not(#thread-watcher):not(#header-bar){box-shadow:0 1px 2px rgba(0, 0, 0, .15)}#qr,#thread-watcher{box-shadow:-1px 2px 2px rgba(0, 0, 0, 0.25)}.captcha-img,.field{background-color:#FFF;border:1px solid #CCC;-moz-box-sizing:border-box;box-sizing:border-box;color:#333;font:13px sans-serif;outline:none;transition:color .25s, border-color .25s}.field::-moz-placeholder{color:#AAA;font-size:13px;opacity:1}.captch-img:hover,.field:hover{border-color:#999}.field:hover, .field:focus, .field.focus{color:#000}.field[disabled]{background-color:#F2F2F2;color:#888}.field::-webkit-search-decoration{display:none}.move{cursor:move;overflow:hidden}label{cursor:pointer}a[href="javascript:;"]{text-decoration:none}.warning{color:red}:root.sw-yotsuba #boardNavDesktop, :root.sw-yotsuba #boardNavMobile{display:none !important}:root.hide-bottom-board-list $site$boardListBottom{display:none}body.hasDropDownNav{margin-top:5px}:root:not(.keyboard-focus) a{outline:none}.painted{border-radius:3px;padding:0px 2px}[hidden]{display:none !important}:root.sw-yotsuba .opContainer, :root.sw-yotsuba .op{display:block;overflow:visible}:root.sw-yotsuba .reply>.file>.fileText{margin:0 20px}:root.sw-yotsuba #arc-list span.quote{color:#789922}:root.sw-yotsuba .fileText a{unicode-bidi:-moz-isolate;unicode-bidi:-webkit-isolate}:root.sw-yotsuba #g-recaptcha{min-height:78px;height:auto}:root.sw-yotsuba:not(.js-enabled) #postForm{display:table}:root.sw-yotsuba #captchaContainerAlt td:nth-child(2){display:table-cell !important}:root.sw-yotsuba canvas#tegaki-canvas{background:none}:root.sw-yotsuba>body>div:last-of-type{transition:none !important}:root.sw-yotsuba>body>div[style*=" top: -10000px;"]{visibility:hidden !important}:root.sw-yotsuba .post>.file{word-break:break-word}:root.sw-yotsuba:not(.ua-webkit):not(.ua-blink) .fileText{word-wrap:break-word;max-width:calc(100vw - 90px)}:root.sw-yotsuba>body.is_catalog .thread>a>img{display:inline-block}:root.sw-yotsuba .nwsb{display:inline}:root.sw-yotsuba .fileText{max-width:auto;white-space:normal}:root.sw-yotsuba .ad-cnt>*, :root.sw-yotsuba .adg-rects>*, :root.sw-yotsuba .bsa-cnt{height:auto !important}:root.sw-yotsuba:not(.ads-loaded) hr.abovePostForm,:root.sw-yotsuba:not(.ads-loaded) .adg-rects>hr,:root.sw-yotsuba #adg-ol+hr,:root.sw-yotsuba .danbo-slot:empty{display:none}:root.sw-yotsuba .adg-rects{margin:0;font-size:0}:root.sw-yotsuba div.center[style]{display:none !important}#menu>.hide-thread-link{width:auto;height:auto;overflow:visible;background-image:none}#menu label.entry{display:block}#fourchanx-settings label{display:inline}.intro a[href="javascript:;"],#menu a{margin:0}.gal-buttons.gal-buttons a{font-size:inherit}:root.sw-tinyboard.fixed.top-header:not(.autohide) .boardlist,:root.sw-tinyboard.fixed.top-header:not(.autohide) .bar.top{position:static}:root.sw-tinyboard.fixed.top-header:not(.autohide) div.pages.top{top:auto;bottom:0}:root.sw-tinyboard.fixed.top-header.autohide .boardlist,:root.sw-tinyboard.fixed.top-header.autohide .bar.top{z-index:3}:root[data-host="fufufu.moe"].fixed.top-header:not(.autohide) div.pages.top{top:26px;bottom:auto}:root[data-host="merorin.com"].fixed.top-header:not(.autohide) span.settings{top:26px}:root[data-host="fufufu.moe"]:not(.fixed) #header-bar{margin-top:38px}:root[data-host="lainchan.org"]:not(.fixed) #header-bar{margin-top:17px}:root[data-host="smuglo.li"]:not(.fixed) #header-bar{margin-top:8px}audio.controls-added{display:block;margin:auto;white-space:normal}:root.anti-autoplay div.embed{position:static;width:auto;height:auto;text-align:center}:root.anti-autoplay .autoplay-removed{visibility:visible !important;min-width:640px;min-height:360px}#overlay,#qp, #ihover,#navlinks, .fixed #header-bar,:root.float #updater,:root.float #thread-stats,#qr{position:fixed}#overlay{z-index:999}#qp, #ihover{z-index:60}#menu, .gal-buttons{z-index:50}#updater, #thread-stats{z-index:40}:root.fixed #header-bar, #notifications{z-index:35}#a-gallery{z-index:30}#navlinks{z-index:25}#qr{z-index:20}#embedding{z-index:11}:root.fixed-watcher #thread-watcher{z-index:10}:root.fixed:not(.gallery-open) #header-bar:not(:hover){z-index:8}#thread-watcher{z-index:5}.fixed.top-header body{padding-top:2em}.fixed.bottom-header body{padding-bottom:2em}.fixed #header-bar{right:0;left:0;padding:3px 4px 4px;font-size:12px}.fixed.top-header #header-bar{top:0}.fixed.bottom-header #header-bar{bottom:0}#header-bar{border-width:0;transition:all .1s .05s ease-in-out}:root.fixed #header-bar{box-shadow:-5px 1px 10px rgba(0, 0, 0, 0.20)}:root.centered-links #shortcuts{width:300px;text-align:right}:root.centered-links #header-bar{text-align:center}#custom-board-list{font-size:13px;vertical-align:middle}#full-board-list{vertical-align:middle}:root.centered-links #custom-board-list{position:relative;left:150px}.fixed.top-header #header-bar{border-bottom-width:1px}.fixed.bottom-header #header-bar{box-shadow:0 -1px 2px rgba(0, 0, 0, .15);border-top-width:1px}.fixed.bottom-header #header-bar .menu-button i{border-top:none;border-bottom:6px solid}.fixed #header-bar.autohide:not(:hover){box-shadow:none;transition:all .8s .6s cubic-bezier(.55, .055, .675, .19)}.fixed.top-header #header-bar.autohide:not(:hover){margin-bottom:-1em;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.fixed.bottom-header #header-bar.autohide:not(:hover){-webkit-transform:translateY(100%);transform:translateY(100%)}#scroll-marker{left:0;right:0;height:10px;position:absolute}#header-bar:not(.autohide) #scroll-marker{pointer-events:none}#header-bar #scroll-marker{display:none}.fixed #header-bar #scroll-marker{display:block}.fixed.top-header #header-bar #scroll-marker{top:100%}.fixed.bottom-header #header-bar #scroll-marker{bottom:100%}#board-list a, #shortcuts a:not(.entry){text-decoration:none;padding:1px}#shortcuts:empty{display:none}.brackets-wrap::before{content:"\\00a0["}.brackets-wrap::after{content:"]\\00a0"}.dead-thread,.disabled:not(.replies-quoting-you){opacity:.45}#shortcuts{float:right}:root.autohiding-scrollbar #shortcuts{margin-right:12px}.shortcut{margin-left:3px;vertical-align:middle}:root.shortcut-icons .native-settings{font-size:0;color:transparent;display:inline-block;vertical-align:top;height:12px;width:14px;background:url(\'//s.4cdn.org/image/favicon.ico\') 0px -1px no-repeat}#navbotright,#navtopright{display:none}#toggleMsgBtn{display:none !important}.current,:root.sw-yotsuba div#boardNavDesktopFoot a.current{font-weight:bold}@media (min-width: 1300px){:root.sw-yotsuba.fixed:not(.centered-links) #header-bar{white-space:nowrap;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}:root.sw-yotsuba.fixed:not(.centered-links) #board-list{-webkit-flex:auto;flex:auto}:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list{display:-webkit-flex;display:flex}:root.sw-yotsuba.fixed:not(.centered-links) .hide-board-list-container{-webkit-flex:none;flex:none;margin-right:5px}:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list>.boardList{-webkit-flex:auto;flex:auto;display:-webkit-flex;display:flex;width:0px; }:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list>.boardList>a,:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list>.boardList>span:not(.space):not(.spacer){-webkit-flex:none;flex:none;padding:.17em;margin:-.17em -.32em}:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list>.boardList>span{pointer-events:none}:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list>.boardList>span.space{-webkit-flex:0 .63 .63em;flex:0 .63 .63em}:root.sw-yotsuba.fixed:not(.centered-links) #full-board-list>.boardList>span.spacer{-webkit-flex:0 .38 .38em;flex:0 .38 .38em}:root.sw-yotsuba.fixed:not(.centered-links) #shortcuts{float:initial;-webkit-flex:none;flex:none;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}}.brackets-wrap::before{content:"["}.brackets-wrap::after{content:"]"}#notifications{position:fixed;top:0;height:0;text-align:center;right:0;left:0;visibility:visible}#notifications:empty{display:none}:root.fixed.top-header:not(.gallery-open) #header-bar #notifications,:root.fixed.top-header #header-bar.autohide #notifications{position:absolute;top:100%}.notification{color:#FFF;font-weight:700;text-shadow:0 1px 2px rgba(0, 0, 0, .5);box-shadow:0 1px 2px rgba(0, 0, 0, .15);border-radius:2px;margin:1px auto;width:550px;max-width:100%;position:relative;transition:all .25s ease-in-out}.notification.error{background-color:hsla(0, 100%, 38%, .9)}.notification.warning{background-color:hsla(36, 100%, 38%, .9)}.notification.info{background-color:hsla(200, 100%, 38%, .9)}.notification.success{background-color:hsla(104, 100%, 38%, .9)}.notification a{color:white}.notification>.close{padding:7px;top:0px;right:5px;position:absolute}.notification>.fa-times::before{font-size:11px !important}.message{-moz-box-sizing:border-box;box-sizing:border-box;padding:6px 20px;max-height:200px;width:100%;overflow:auto;white-space:pre-line}.message a{text-decoration:underline}:root.tainted .report-error{display:none}:root.fourchan-x body{-moz-box-sizing:border-box;box-sizing:border-box}#overlay{background-color:rgba(0, 0, 0, .5);display:-webkit-flex;display:flex;top:0;left:0;height:100%;width:100%}#fourchanx-settings{-moz-box-sizing:border-box;box-sizing:border-box;box-shadow:0 0 15px rgba(0, 0, 0, .15);height:600px;max-height:100%;width:900px;max-width:100%;margin:auto;padding:5px;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}#fourchanx-settings>nav{padding:2px 2px 8px;display:-webkit-flex;display:flex}#fourchanx-settings>nav a{text-decoration:underline}#fourchanx-settings>nav a.close{text-decoration:none;padding:0 2px;margin:0}.section-container{-webkit-flex:1;flex:1;position:relative;overflow:auto;padding-right:5px;overscroll-behavior:contain}.sections-list{-webkit-flex:1;flex:1}.export, .import, .reset{cursor:pointer;text-decoration:none !important}.tab-selected{font-weight:700}.section-sauce ul,.section-advanced ul{list-style:none;margin:0}.section-sauce ul{padding:8px}.section-advanced ul{padding:0px}.section-sauce li,.section-advanced li{padding-left:4px}.section-main ul{margin:0;padding:0 0 0 16px}.section-main li{white-space:pre-line;list-style:disc}.section-main li:not(:first-of-type){margin-top:4px}.section-main label{text-decoration:underline}div[data-checked="false"]>.suboption-list{display:none}.suboption-list{position:relative}.suboption-list::before{content:"";display:inline-block;position:absolute;left:.7em;width:0;height:100%;border-left:1px solid}.suboption-list>div{position:relative;padding-left:1.4em}.suboption-list>div::before{content:"";display:inline-block;position:absolute;left:.7em;width:.7em;height:.6em;border-left:1px solid;border-bottom:1px solid}#fourchanx-settings .section-main p{margin:.5em 0 0}.section-filter ul{padding:0}.section-filter li{margin:10px 40px;list-style:disc}.section-filter textarea{height:500px}.section-main a, .section-filter a, .section-advanced a{text-decoration:underline}#sauce-doc-expand:not(:checked)~#sauce-doc{max-height:130px;overflow:auto}#sauce-doc>label{float:right;margin:0 5px}#sauce-doc-expand+.riceCheck{display:none}.section-sauce textarea{height:430px}.section-advanced .field[name="boardnav"]{width:100%}.section-advanced textarea{height:150px}.section-advanced textarea[name="archiveLists"],.section-advanced textarea[name="externalCatalogURLs"],.section-advanced textarea[name="knownBanners"]{height:75px}.section-advanced .archive-cell{min-width:160px;text-align:center}.section-advanced #archive-board-select{position:absolute}.section-advanced .note{font-size:0.8em;font-style:italic;margin-left:10px}.section-advanced .note code{font-style:normal;font-size:11px}.favicon-preview>img{vertical-align:middle}.favicon-preview>img:nth-of-type(3n+1){margin-left:4px}.section-keybinds .field{font-family:monospace}#fourchanx-settings fieldset{border:1px solid;border-radius:3px;padding:0.35em 0.625em 0.75em;margin:0px 2px}#fourchanx-settings legend{font-weight:700;color:inherit}#fourchanx-settings textarea{font-family:monospace;width:100%;resize:vertical}#fourchanx-settings code{color:#000;background-color:#FFF;padding:0 2px}#fourchanx-settings th{text-align:center;font-weight:bold}#fourchanx-settings p{margin:1em 0px}#fourchanx-settings table{margin:auto}:root.index-loading .navLinks:not(.json-index),:root.index-loading .board:not(.json-index),:root.index-loading .pagelist:not(.json-index),:root.infinite-mode .pagelist,:root.all-pages-mode .pagelist,:root.catalog-mode .pagelist,:root:not(.catalog-mode) .indexlink,:root.catalog-mode .cataloglink,:root:not(.catalog-mode) #hidden-label,:root:not(.catalog-mode) #index-size{display:none}#index-search{padding-right:1.5em;width:100px;transition:color .25s, border-color .25s, width .25s}#index-search:focus,#index-search[data-searching]{width:200px}#index-search-clear{color:gray;display:inline-block;position:relative;left:-1em;width:0}/* ``::-webkit-*\'\' selectors break selector lists on Firefox. */#index-search::-webkit-search-cancel-button{display:none}#index-search:not([data-searching])+#index-search-clear{display:none}#index-options{float:right}#lastlong-options{display:inline-block;vertical-align:middle;height:28px;margin:-14px 0}#lastlong-options>input{padding:0;border:0 !important;text-align:center;background:transparent;display:block;font-size:12px;height:12px;width:30px;margin:1px 0}.summary{text-decoration:none}:root.catalog-mode .board{text-align:center}.catalog-thread{display:inline-block;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid transparent;word-wrap:break-word;vertical-align:top;position:relative}.catalog-thread.catalog-thread{margin:2px}.catalog-small>.catalog-thread{width:165px;height:320px}.catalog-large>.catalog-thread{width:270px;height:410px}:root.catalog-hover-expand .catalog-thread:hover{z-index:1}.catalog-container{position:absolute;top:-4px;left:0;right:0;bottom:0}.catalog-container:not(:hover),:root:not(.catalog-hover-expand) .catalog-container{overflow:hidden}.catalog-post{position:absolute;top:4px;left:0;right:0;border:1px solid transparent;padding-top:20px}:root:not(.catalog-hover-expand) .catalog-post{left:0 !important;right:0 !important}.catalog-post.catalog-post{margin:-21px -1px -1px;overflow:visible}.catalog-thread.noFile>*>.catalog-post{margin-top:-7px;padding-top:6px}:root.catalog-hover-expand .catalog-container:hover>.catalog-post{margin-left:-61px;margin-right:-61px}:root.catalog-hover-expand .catalog-container:hover>*>:not(.catalog-replies){padding-left:2px;padding-right:2px}.catalog-link{display:block;position:relative}.catalog-thumb{border-radius:2px;box-shadow:0 0 5px rgba(0, 0, 0, .25);vertical-align:top}.catalog-thumb.spoiler-file{width:100px;height:100px}.catalog-thumb.deleted-file{width:127px;height:13px;padding:20px 11px}.catalog-thumb.no-file{width:77px;height:13px;padding:20px 36px}.catalog-icons>img,.catalog-stats>.menu-button{width:1em;height:1em;margin:0;vertical-align:text-top;padding-left:2px}.catalog-stats>.menu-button{font-weight:normal}.catalog-stats>.menu-button>i::before{line-height:11px}.catalog-stats{font-size:10px;font-weight:700;padding-top:2px}.catalog-stats>[title]{cursor:help}.catalog-post>.postMessage{margin:0;padding-bottom:.3em}.catalog-container:not(:hover)>*>.file,.catalog-container:not(:hover)>*>.postInfo>:not(.subject),.catalog-container:not(:hover)>*>.catalog-replies,.catalog-container:not(:hover) .extra-linebreak,.catalog-container:not(:hover) .abbr,:root:not(.catalog-hover-expand) .catalog-container>*>.file,:root:not(.catalog-hover-expand) .catalog-container>*>.postInfo>:not(.subject),:root:not(.catalog-hover-expand) .catalog-container>*>.catalog-replies,:root:not(.catalog-hover-expand) .catalog-container .extra-linebreak,:root:not(.catalog-hover-expand) .catalog-container .abbr,.catalog-thread>.catalog-container>:not(.catalog-post),.catalog-post>.file>:not(.fileText),.catalog-post>*>.fileText>:not(:first-child),.catalog-post>.postInfo>:not(.subject):not(.nameBlock):not(.dateTime),.catalog-post>.postInfo>.nameBlock>.contact-links,.catalog-post>*>*>.posteruid,.catalog-post>*>*>.postJumper,:root.bottom-backlinks .catalog-post>.container,.post:not(.catalog-post)>.catalog-link,.post:not(.catalog-post)>.catalog-stats,.post:not(.catalog-post)>.catalog-replies{display:none}.catalog-post>.file{position:absolute;left:0;right:0;top:0;min-height:20px;background-color:inherit}.catalog-post>*>.fileText{position:relative;padding:2px;background-color:inherit}.catalog-small .catalog-post>* .fileText{font-size:10px}.catalog-post>*>.fileText:not(:hover){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.catalog-post>*>.fileText:hover{z-index:1}.catalog-post>.postInfo.postInfo{width:auto}.catalog-post>*>.subject{display:block}.catalog-post>*>.dateTime{display:inline-block;font-style:italic}:root.catalog-hover-expand .catalog-container:hover>*>*>.nameBlock,:root.catalog-hover-expand .catalog-container:hover>*>*>.dateTime,:root.catalog-hover-expand .catalog-container:hover>*>.postMessage:not(:empty){padding-top:.3em}.catalog-post .extra-linebreak{content:\'\'; display:block;margin-top:.3em}.catalog-reply{text-align:left;white-space:nowrap;border-top:1px solid transparent;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-align-items:stretch;align-items:stretch}.catalog-reply>*{padding:3px;overflow:hidden;-webkit-flex:none;flex:none}.catalog-reply>span{font-style:italic;font-weight:bold}.catalog-reply-excerpt{-webkit-flex:1 1 auto;flex:1 1 auto}.catalog-post .prettyprinted{max-width:100%;-moz-box-sizing:border-box;box-sizing:border-box}.catalog-post .MathJax_Display{text-align:center !important}.catalog-container:not(:hover) .exif,:root:not(.catalog-hover-expand) .catalog-container .exif{display:none !important}.catalog-post>*>.exif{border-collapse:collapse}:root.catalog-hover-expand .catalog-container:hover .exif[style*="display: block;"]{display:inline-block !important}.catalog-post>*>.exif,.catalog-post>*>.exif>tbody{background-color:inherit}.catalog-post>*>.exif,.catalog-post>*>.exif td{min-width:0}.catalog-post>*>.exif td{padding-top:1px}:root.hats-enabled .catalog-thread::after{content:\'\';pointer-events:none;position:absolute;background-size:contain}:root.hats-enabled .catalog-small>.catalog-thread::after{left:-8px;top:-59px;width:96px;height:96px}:root.hats-enabled:not(.werkTyme) .catalog-small>.catalog-thread:not(.noFile)::after{left:calc(67px - .3px * var(--tn-w))}:root.hats-enabled .catalog-large>.catalog-thread::after{left:-15px;top:-98px;width:160px;height:160px}:root.hats-enabled:not(.werkTyme) .catalog-large>.catalog-thread:not(.noFile)::after{left:calc(110px - .5px * var(--tn-w))}textarea.copy-text-element{height:0;width:0;position:absolute;top:-10000px}:root.hide-announcement $site$psa{display:none}.hide-announcement-button{opacity:0.4;float:left}.unread-line{margin:0;border-color:rgb(255,0,0)}.unread-line+br{display:none}.unread-mark-read{float:right;clear:both;width:100%;text-align:right}:not(.unread-thread)>.unread-mark-read{display:none}#updater{background:none;border:none;box-shadow:none}#updater>.move{position:absolute;top:-5px;bottom:-5px;left:-5px;right:-5px;z-index:-1}#updater>div:last-child{text-align:center}#updater input[type="number"]{width:4em}:root.float #updater{padding:0px 3px}:root:not(.float).shortcut-icons #updater{display:inline-block;min-width:12pt;text-align:right}.new{color:limegreen}#update-status:not(.empty)+#update-timer:not(.empty):not(.loading){margin-left:5px}#update-timer{cursor:pointer}#thread-watcher{position:absolute}#thread-watcher{padding-bottom:3px;padding-left:3px;white-space:nowrap;min-width:146px}#watched-threads{overflow-x:hidden;overflow-y:auto}#thread-watcher .refresh{padding:0px 3px}:root.fixed-watcher #thread-watcher{position:fixed}:root.fixed-watcher #watched-threads{max-height:85vh;max-height:calc(100vh - 75px)}:root:not(.fixed-watcher) #watched-threads:not(:hover){max-height:210px;overflow-y:hidden}#thread-watcher>.move{padding-top:3px}#watched-threads>div{padding-left:3px;padding-right:3px}#watched-threads .watcher-link{max-width:250px;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-direction:row;flex-direction:row}#watched-threads .watcher-page,#watched-threads .watcher-unread{-webkit-flex:0 0 auto;flex:0 0 auto;margin-right:2px}#watched-threads .watcher-title{overflow:hidden;text-overflow:ellipsis;-webkit-flex:0 1 auto;flex:0 1 auto}#watched-threads .watcher-title:not(:first-child){margin-left:2px}.replies-quoting-you>a, #watcher-link.replies-quoting-you, .last-page>a>.watcher-page{color:#F00}#thread-watcher a{text-decoration:none}#thread-watcher .move>.close{position:absolute;right:0px;top:0px;padding:0px 4px}.watch-thread-link{padding-top:18px;width:18px;height:0px;display:inline-block;background-repeat:no-repeat;opacity:0.2;position:relative;top:1px;background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(0,0,0)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}.watch-thread-link.watched{opacity:1}#thread-stats{background:none;border:none;box-shadow:none}:root.float #thread-stats>.move>:not(#page-count){pointer-events:none}:root.float #thread-stats{padding:0px 3px}#page-count{cursor:pointer}.hashlink::before{content:\' \';visibility:hidden}.inline+.hashlink{display:none !important}:root.resurrect-quotes .deadlink{text-decoration:none !important}.catalog-post .qmark-ct{display:none}.backlink.deadlink:not(.forwardlink),.quotelink.deadlink:not(.forwardlink){text-decoration:underline !important}:root:not(.catalog-mode) .inlined{opacity:.5}#qp input, .forwarded{display:none}.quotelink.forwardlink,.backlink.forwardlink{text-decoration:none;border-bottom:1px dashed}.filtered{text-decoration:underline line-through}:root.hide-backlinks .backlink.filtered,:root.hide-backlinks .backlink.filtered+.hashlink.filtered{display:none}.postNum+.container::before{content:" "}:root.bottom-backlinks .container{display:block;clear:both;margin:0 4px}:root.bottom-backlinks .backlink{font-size:90%}.inline{border:1px solid;display:table;margin:2px 0}.container~.inline{margin-left:20px}:root.catalog-mode .inline{display:none}.inline .post{border:0 !important;background-color:transparent !important;display:table !important;margin:0 !important;padding:1px 2px !important}#qp>.opContainer::after{content:\'\';clear:both;display:table}#qp .post{border:none;margin:0;padding:2px 2px 5px}#qp img{max-height:80vh;max-width:50vw}.threadContainer{margin-left:20px;border-left:1px solid rgba(128,128,128,.3)}.threadOP{clear:both}.expanded-image>.post>.file>.fileThumb{display:flex;flex-direction:column}.fileText-original,.fnswitch:hover>.fntrunc,.fnswitch:not(:hover)>.fnfull,.expanded-image>.post>.file>.fileThumb>video[data-md5],.expanded-image>.post>.file>.fileThumb>img[data-md5]{display:none}.full-image[data-file-i-d]{display:none;cursor:pointer}.expanded-image>.post>.file>.fileThumb>.full-image{display:inline}.expanded-image>.post>.file>.fileThumb>audio{height:30px;width:100%;min-width:300px}.expanded-image{clear:left}.expanding{opacity:.5}:root.fit-height .full-image{max-height:100vh}:root.fit-height.fixed .full-image{max-height:93vh;max-height:calc(100vh - 35px)}:root.fit-width .full-image{max-width:100%}:root.ua-gecko.fit-width .full-image{width:100%}.fileThumb>.warning{clear:both}#ihover{pointer-events:none;max-height:95vh;max-height:calc(100vh - 25px);max-width:100vw}.webm-title>a::before{content:"title";text-decoration:underline}.webm-title.loading>a::after{content:"..."}.webm-title.error>a:hover::before,.webm-title.error>a:focus::before{content:"error";text-decoration:none}.webm-title>span{cursor:text}.webm-title.not-found>span::before{content:"not found"}.webm-title:not(:hover):not(:focus)>span,.webm-title:hover>span+a,.webm-title:focus>span+a{display:none}input[name="Default Volume"]{width:4em;height:1ex;vertical-align:middle;margin:0px}:root.fappeTyme $site$replyOriginal.noFile,:root.fappeTyme $site$replyOriginal.noFile+br{display:none}:root.werkTyme $site$thumbLink,:root.werkTyme $site$file$thumb,:root.werkTyme .catalog-thumb:not(.deleted-file):not(.no-file),:root:not(.werkTyme) .werkTyme-filename{display:none}.werkTyme-filename{font-weight:bold;font-size:110%}:root.werkTyme .catalog-link{box-shadow:0 0 5px rgba(0, 0, 0, .25);padding:8px;text-align:center}:root.werkTyme .catalog-thumb{box-shadow:none;padding:0;vertical-align:middle}.indicator{background:rgba(255,0,0,0.8);font-weight:bold;display:inline-block;min-width:9px;padding:0px 2px;margin:0 1px;text-align:center;color:white;border-radius:2px;cursor:pointer}:root:not(.fappeTyme) #shortcut-fappe,:root:not(.werkTyme) #shortcut-werk{display:none}#navlinks{font-size:16px;top:25px;right:10px}:root.catalog-mode #navlinks{display:none}.qphl{outline:2px solid rgba(216, 94, 49, .8)}:root.highlight-you .quotesYou$site$highlightable$op,:root.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(221, 0, 0, .8)}:root.highlight-own .yourPost$site$highlightable$op,:root.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(221, 0, 0, .8)}.filter-highlight$site$highlightable$op,.filter-highlight$site$highlightable$reply{box-shadow:inset 5px 0 rgba(221, 0, 0, .5)}:root.highlight-own .yourPost>$site$sideArrows,:root.highlight-you .quotesYou>$site$sideArrows,.filter-highlight>$site$sideArrows{color:rgba(221, 0, 0, .8)}:root.highlight-own .yourPost$site$highlightable$op::after,:root.highlight-you .quotesYou$site$highlightable$op::after,.filter-highlight$site$highlightable$op::after{content:"";display:block;clear:both}:root:not(.werkTyme) .catalog-thread.filter-highlight .catalog-thumb,:root.werkTyme .catalog-thread.filter-highlight:not(:hover),:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,:root.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight>.catalog-container:hover>.catalog-post,:root.catalog $site$catalog$thread.filter-highlight$site$highlightable$catalog{box-shadow:0 0 3px 3px rgba(255, 0, 0, .5)}:root:not(.werkTyme) .catalog-thread.watched .catalog-thumb,:root:root.werkTyme .catalog-thread.watched:not(:hover),:root:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,:root.werkTyme.catalog-hover-expand .catalog-thread.watched>.catalog-container:hover>.catalog-post{border:2px solid rgba(255, 0, 0, .75)}:root.reveal-spoilers $site$spoiler,:root.reveal-spoilers $site$spoiler>a{color:white !important}:root.reveal-spoilers .removed-spoiler::before{content:"[spoiler]"}:root.reveal-spoilers .removed-spoiler::after{content:"[/spoiler]"}.hide-thread-button,.hide-reply-button{float:left;margin-right:4px;padding:2px}$site$infoRoot a.hide-reply-button{margin-right:6px;padding:0}.replacedSideArrows{float:left}.hide-thread-button:not(:hover),.hide-reply-button:not(:hover){opacity:0.4}.threadContainer .hide-reply-button{margin-left:2px !important;position:relative;left:1px}.hide-thread-button{margin-top:-1px;width:11px}.stub~:not(.threadDivider){display:none !important}.stub input{display:inline-block}$site$thread[hidden]+hr{display:none}:root.reply-hide $site$sideArrows{display:none}:root.sw-yotsuba.thread-hide .party-hat{left:19px}:root.anonymize $site$info$name,:root.sw-yotsuba.anonymize .post-author:not([class*=capcode]){font-size:0}:root.anonymize $site$info$tripcode,:root.sw-yotsuba.anonymize .n-pu{display:none}:root.anonymize $site$info$name::before,:root.sw-yotsuba.anonymize .post-author:not([class*=capcode])::before{content:"Anonymous";font-size:10pt}:root.sw-yotsuba.anonymize .flashListing .name::before,:root.sw-yotsuba.anonymize .post-last>.post-author:not([class*=capcode])::before{font-size:9pt}:root.hide-original-post-form #togglePostFormLink,#qr.autohide:not(.focus):not(:hover):not(:active)>form,:root.thread-view #qr:not(.show-new-thread-option) select[data-name="thread"],#file-n-submit:not(.has-file) #qr-filerm{display:none}:root.hide-original-post-form #postForm{display:none !important}#qr select,#qr-filename-container>a,.remove,.captcha-img{cursor:pointer}#qr{position:fixed;padding:1px;border:1px solid transparent;min-width:300px;border-radius:3px 3px 0 0}#qr>form{max-height:85vh;max-height:calc(100vh - 75px);overflow-y:auto;overflow-x:hidden}#qrtab{border-radius:3px 3px 0 0}#qrtab{margin-bottom:1px}#qr .close{float:right;padding:0 3px}.qr-link-container{text-align:center;margin:16px 0}.qr-link-container-bottom{width:200px;position:absolute;left:-100px;margin-left:50%;text-align:center}.qr-link{border-radius:3px;padding:6px 10px 5px;font-weight:bold;vertical-align:middle;border-style:solid;border-width:1px;font-size:10pt}.qr-link-container+#togglePostFormLink{font-size:10pt;font-weight:normal;margin:-8px 0 3.5px}.persona{width:100%;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}.persona .field{-webkit-flex:1;flex:1;width:0}#qr.forced-anon input[data-name="name"]:not(.force-show),#qr.forced-anon input[data-name="sub"]:not(.force-show),#qr.reply-to-thread input[data-name="sub"]:not(.force-show),body:not(.board_f) #qr select[name="filetag"],#qr.reply-to-thread select[name="filetag"],#qr:not(.has-sjis) #sjis-toggle,#qr:not(.has-math) #tex-preview-button,#qr.tex-preview .textarea>:not(#tex-preview),#qr:not(.tex-preview) #tex-preview{display:none}.persona button{-webkit-flex:0 0 23px;flex:0 0 23px;-webkit-align-self:stretch;align-self:stretch;border:1px solid #BBB;padding:0;background:linear-gradient(to bottom, #F8F8F8, #DCDCDC) no-repeat;color:#000}#qr.sjis-preview #sjis-toggle, #qr.tex-preview #tex-preview-button{background:#DCDCDC}#sjis-toggle, #qr.sjis-preview textarea.field{font-family:"IPAMonaPGothic","Mona","MS PGothic",monospace;font-size:16px;line-height:17px}#tex-preview-button{font-size:10px}#tex-preview{white-space:pre-line}#qr textarea.field{height:14.8em;min-height:9em}#qr.has-captcha textarea.field{height:9em}input.field.tripped:not(:hover):not(:focus){color:transparent !important;text-shadow:none !important}#qr textarea{min-width:300px;resize:both}.field{-moz-box-sizing:border-box;box-sizing:border-box;margin:0px;padding:2px 4px 3px}#qr label input[type="checkbox"]{position:relative;top:2px}#qr .captcha-root{position:relative}#qr .captcha-container>div{margin:auto;width:304px}:root.ua-blink #qr .captcha-container>div,:root.ua-edge #qr .captcha-container>div{overflow:hidden}:root.ua-blink #qr .captcha-container>div>div:first-of-type,:root.ua-edge #qr .captcha-container>div>div:first-of-type{overflow-y:scroll;overflow-x:hidden;padding-right:30px;height:99%;width:100%}#qr .captcha-counter{display:block;width:100%;text-align:center;pointer-events:none}#qr.captcha-open .captcha-counter{position:absolute;bottom:3px}#qr .captcha-counter>a{pointer-events:auto;display:inline-block; }#qr:not(.captcha-open) .captcha-counter>a{display:block;width:100%}#qr.captcha-v2 #qr-captcha-iframe{width:302px;height:423px;border:0;display:block;margin:auto}.goog-bubble-content{max-width:100vw;max-height:100vh;overflow:auto}.goog-bubble-content iframe{position:static !important}#file-n-submit, #qr .oekaki{display:-webkit-flex;display:flex;-webkit-align-items:stretch;align-items:stretch;height:25px;margin-top:1px}#file-n-submit>input, #qr-draw-button{background:linear-gradient(to bottom, #F8F8F8, #DCDCDC) no-repeat;border:1px solid #BBB;border-radius:2px;height:100%}#qr-file-button, #qr-draw-button{width:15%}#file-n-submit input[type="submit"]{width:25%}#qr-filename-container{-webkit-flex:1 1 auto;flex:1 1 auto;width:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;position:relative;padding:1px}input#qr-filename{border:none !important;background:none !important;outline:none}#qr-filename,.has-file #qr-no-file{display:none}#qr-no-file,.has-file #qr-filename{-webkit-flex:1 1 auto;flex:1 1 auto;width:0px; display:inline-block;padding:0;padding-left:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#qr-no-file{color:#AAA}#qr .oekaki.has-file{display:none}#qr .oekaki>label{-webkit-flex:1 1 auto;flex:1 1 auto;width:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;height:100%}#qr .oekaki>label>span{margin:0 3px}#qr .oekaki>label>input{-webkit-flex:1 1 auto;flex:1 1 auto;width:0;height:100%}#qr .oekaki-bg{position:relative;display:inline-block;height:100%;width:10%;margin-left:3px}#qr .oekaki-bg>*{position:absolute;top:0;left:0;margin:0}#qr .oekaki-bg>:not([name="oekaki-bgcolor"]){z-index:1}#qr [name="oekaki-bgcolor"]{height:100%;width:100%;border:none;padding:0}#qr [name="oekaki-bg"]:not(:checked)~[name="oekaki-bgcolor"]{visibility:hidden}#qr input[type="file"]{visibility:hidden;position:absolute}#qr-filename-container>label, #qr-filename-container>a{-webkit-flex:none;flex:none;margin:0;margin-right:3px}#qr:not(.has-spoiler) #qr-spoiler-label,#file-n-submit:not(.has-file) #qr-spoiler-label,.has-file #paste-area,.has-file #url-button,#file-n-submit:not(.custom-cooldown) #custom-cooldown-button{display:none}#qr-filename-container>label{position:relative}#qr-filename-container input[type="checkbox"]{margin:0}.checkbox-letter{font-size:13px;font-weight:bold}#qr-filename-container label:not(:hover)>input[type="checkbox"]:not(:focus):not(:checked),#qr-filename-container label:not(:hover)>input[type="checkbox"]:not(:focus):not(:checked)~:not(.checkbox-letter),#qr-filename-container label:hover>.checkbox-letter,input[type="checkbox"]:focus~.checkbox-letter,input[type="checkbox"]:checked~.checkbox-letter{position:absolute;opacity:0;pointer-events:none}.checkbox-letter, #paste-area, #url-button, #custom-cooldown-button, #dump-button{opacity:0.6}#paste-area{font-size:0}#paste-area:focus{opacity:1}#custom-cooldown-button.disabled{opacity:0.27}#qr select{background:white;border:1px solid #CCC}#qr select[data-name="thread"]{float:right}#qr>form>select{margin-top:1px}.dump #dump-list-container{display:block}#dump-list-container{display:none;position:relative;overflow-y:hidden;margin-top:1px}#dump-list{overflow-x:auto;overflow-y:auto;white-space:nowrap;width:248px;max-height:248px;min-height:90px;max-width:100%;min-width:100%;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}#dump-list:hover{overflow-x:auto}.qr-preview{-moz-box-sizing:border-box;box-sizing:border-box;counter-increment:thumbnails;cursor:move;display:inline-block;height:90px;width:90px;padding:2px;opacity:.5;overflow:hidden;position:relative;text-shadow:0 0 2px #000;-webkit-transition:opacity .25s ease-in-out, -webkit-transform .25s ease-in-out;transition:opacity .25s ease-in-out, transform .25s ease-in-out, -webkit-transform .25s ease-in-out;vertical-align:top;background-size:cover;-webkit-flex:none;flex:none}.qr-preview:hover,.qr-preview:focus{opacity:.9}.qr-preview::before{content:counter(thumbnails);color:#fff;position:absolute;top:3px;right:3px;text-shadow:0 0 3px #000, 0 0 8px #000}.qr-preview#selected{opacity:1}.qr-preview.drag{box-shadow:0 0 10px rgba(0,0,0,.5);-webkit-transform:scale(.8);transform:scale(.8)}.qr-preview.over{border-color:#fff;-webkit-transform:scale(1.1);transform:scale(1.1);opacity:0.9;z-index:10}.qr-preview>span{color:#fff}.remove{background:none;color:#e00;padding:1px}a:only-of-type>.remove{display:none}.remove:hover::after{content:" Remove"}.qr-preview:not(.has-file) label,#qr:not(.has-spoiler) .qr-preview-spoiler{display:none}.qr-preview>label{background:rgba(0,0,0,.5);color:#fff;right:0;bottom:0;left:0;position:absolute;text-align:center}.qr-preview>label>input{margin:0}#add-post{cursor:pointer;font-size:2em;position:absolute;bottom:20px;right:10px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.textarea{position:relative;display:-webkit-flex;display:flex}#char-count{color:#000;background:hsla(0, 0%, 100%, .5);font-size:8pt;position:absolute;bottom:1px;right:1px;pointer-events:none}#char-count.warning{color:red}.menu-button:not(.fa-bars){display:inline-block;position:relative;cursor:pointer}#header-bar .menu-button i{border-top:6px solid;border-right:4px solid transparent;border-left:4px solid transparent;display:inline-block;margin:2px;vertical-align:middle}.postInfo>.menu-button,#thread-watcher .menu-button{width:18px;height:15px;text-align:center}#menu{position:fixed;outline:none;font-weight:normal}#menu, .submenu{border-radius:3px;padding-top:1px;padding-bottom:3px}.entry{cursor:pointer;display:block;outline:none;padding:2px 10px;position:relative;text-decoration:none;white-space:nowrap;min-width:70px;text-align:left;text-shadow:none;font-size:10pt}.left>.entry.has-submenu{padding-right:17px !important}.entry input[type="checkbox"],.entry input[type="radio"]{margin:0px;position:relative;top:2px}.entry input[type="number"]{width:4.5em}.entry.has-shortcut-text{display:flex;justify-content:space-between;align-items:center}.entry .shortcut-text{opacity:0.5;font-size:70%;margin-left:5px}.has-submenu::after{content:"";border-left:.5em solid;border-top:.3em solid transparent;border-bottom:.3em solid transparent;display:inline-block;margin:.3em;position:absolute;right:3px}.left .has-submenu::after{border-left:0;border-right:.5em solid}.submenu{display:none;position:absolute;left:100%;top:-1px;margin-left:0px;margin-top:-2px}.focused>.submenu{display:block}.imp-exp-result{position:absolute;text-align:center;margin:auto;right:0px;left:0px;width:200px}.boardTitle, .boardSubtitle{white-space:pre-line}.boardTitle[contenteditable="true"],.boardSubtitle[contenteditable="true"]{cursor:text !important}.embedder:not(.embedded)>span{display:none}#embedding{padding:1px 4px 1px 4px;position:fixed}#embedding.empty{display:none}#embedding>div:first-child{display:-webkit-flex;display:flex}#embedding .move{-webkit-flex:1;flex:1}#embedding .jump{margin:-1px 4px;text-decoration:none}#a-gallery{position:fixed;top:0;bottom:0;left:0;right:0;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;background:rgba(0,0,0,0.7)}.gal-viewport{display:-webkit-flex;display:flex;-webkit-align-items:stretch;align-items:stretch;-webkit-flex-direction:row;flex-direction:row;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.gal-thumbnails{-webkit-flex:0 0 150px;flex:0 0 150px;overflow-y:auto;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;align-items:stretch;text-align:center;background:rgba(0,0,0,.5);border-left:1px solid #222}.gal-hide-thumbnails .gal-thumbnails{display:none}.gal-thumb img,.gal-thumb video{max-width:125px;max-height:125px;height:auto;width:auto}.gal-thumb{-webkit-flex:0 0 auto;flex:0 0 auto;padding:3px;line-height:0;transition:background .2s linear}.gal-highlight{background:rgba(0, 190, 255,.8)}.gal-prev{border-right:1px solid #222}.gal-next{border-left:1px solid #222}.gal-prev,.gal-next{-webkit-flex:0 0 20px;flex:0 0 20px;position:relative;cursor:pointer;opacity:0.7;background-color:rgba(0, 0, 0, 0.3)}.gal-prev:hover,.gal-next:hover{opacity:1}.gal-prev::after,.gal-next::after{position:absolute;top:48.6%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:inline-block;border-top:11px solid transparent;border-bottom:11px solid transparent;content:""}.gal-prev::after{border-right:12px solid #fff;right:5px}.gal-next::after{border-left:12px solid #fff;right:3px}.gal-image{-webkit-flex:1 0 auto;flex:1 0 auto;display:-webkit-flex;display:flex;-webkit-align-items:flex-start;align-items:flex-start;-webkit-justify-content:space-around;justify-content:space-around;overflow:hidden;width:1%}:root:not(.gal-fit-height):not(.gal-pdf) .gal-image{overflow-y:scroll !important}:root:not(.gal-fit-width):not(.gal-pdf) .gal-image{overflow-x:scroll !important}.gal-image a{display:-webkit-flex;display:flex;-webkit-align-items:flex-start;align-items:flex-start;margin:auto;line-height:0;max-width:100%}:root.gal-pdf .gal-image a{width:100%;height:100%}.gal-image img,.gal-image video{-webkit-flex:none;flex:none}.gal-fit-width .gal-image img,.gal-fit-width .gal-image video{max-width:100%}.gal-fit-height .gal-image img,.gal-fit-height .gal-image video{max-height:95vh;max-height:calc(100vh - 25px)}.gal-image iframe{width:100%;height:100%}.gal-buttons{font-size:2em;margin-right:3px;padding-left:7px;padding-right:7px;top:5px}:root.gal-pdf .gal-buttons{top:40px;background:rgba(0,0,0,0.6) !important;border-radius:3px}.gal-buttons a{color:#ffffff;text-shadow:0px 0px 1px #000000}.gal-buttons i{display:inline-block;margin:2px;position:relative}.gal-start i{border-left:10px solid;border-top:6px solid transparent;border-bottom:6px solid transparent;bottom:1px}.gal-stop i{border:5px solid;bottom:2px}.gal-buttons.gal-playing>.gal-start,.gal-buttons:not(.gal-playing)>.gal-stop{display:none}.gal-buttons .menu-button i{border-top:10px solid;border-right:6px solid transparent;border-left:6px solid transparent;bottom:2px;vertical-align:baseline}.gal-labels{position:fixed;bottom:6px;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;align-items:flex-end}:root:not(.show-sauce) .gal-sauce{display:none}.gal-name,.gal-count,.gal-sauce{background:rgba(0,0,0,0.6) !important;border-radius:3px;padding:1px 5px 2px 5px;margin-top:3px;color:#ffffff !important;text-decoration:none !important}.gal-sauce a{color:#ffffff !important}.gal-name:hover,.gal-buttons a:hover,.gal-sauce a:hover{color:rgb(95, 95, 101) !important}:root.gal-pdf .gal-buttons a:hover{color:rgb(204, 204, 204) !important}.gal-buttons,.gal-labels{position:fixed;right:195px}.gal-hide-thumbnails .gal-buttons,.gal-hide-thumbnails .gal-labels{right:44px}:root:not(.gal-fit-width):not(.gal-pdf) .gal-labels{bottom:23px !important}:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-buttons,:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-labels{right:178px !important}:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-buttons,:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-labels{right:28px !important}:root.gallery-open.fixed #header-bar:not(.autohide),:root.gallery-open.fixed #header-bar:not(.autohide) #shortcuts .fa::before{visibility:hidden}.contact-links{margin-left:2px}.move-note>a{text-decoration:underline}.invisible{font-size:0}.postJumper>.prev,.postJumper>.next{font-size:120%}.fcx-announcement{text-align:center}.fcx-announcement a{text-decoration:underline}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}.spin{animation:spin 2s infinite linear}:root.yotsuba .dialog{background-color:#F0E0D6;border-color:#D9BFB7}:root.yotsuba .field:focus,:root.yotsuba .field.focus{border-color:#EA8}:root.yotsuba.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(221, 0, 0, .8) !important}:root.yotsuba.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(221, 0, 0, .8) !important}:root.yotsuba #header-bar.dialog{background-color:rgba(240,224,214,0.98)}:root.yotsuba:not(.fixed) #header-bar, :root.yotsuba #notifications{font-size:9pt}:root.yotsuba #header-bar, :root.yotsuba #notifications{color:#B86}:root.yotsuba #board-list a, :root.yotsuba #shortcuts a {color:#800000}:root.yotsuba #fourchanx-settings fieldset, :root.yotsuba .section-main div::before{border-color:#D9BFB7}:root.yotsuba .suboption-list>div:last-of-type{background-color:#F0E0D6}:root.yotsuba.catalog-hover-expand .catalog-container:hover>.post{background-color:#F0E0D6}:root.yotsuba.werkTyme .catalog-thread:not(:hover),:root.yotsuba.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.yotsuba.catalog-hover-expand .catalog-container:hover>.post,:root.yotsuba.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#D9BFB7}:root.yotsuba .backlink.deadlink{color:#00E !important}:root.yotsuba .inline{border-color:#D9BFB7;background-color:rgba(255, 255, 255, .14)}:root.yotsuba .indicator{color:#F0E0D6}.yotsuba #dump-list::-webkit-scrollbar-thumb{background-color:#F0E0D6;border-color:#D9BFB7}:root.yotsuba .qr-preview{background-color:rgba(0, 0, 0, .15)}:root.yotsuba .qr-link{border-color:rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);background:linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent}:root.yotsuba .qr-link:hover{background:#F0E0D6}:root.yotsuba #menu{color:#800000}:root.yotsuba .entry{font-size:10pt}:root.yotsuba .focused.entry{background:rgba(255, 255, 255, .33)}:root.yotsuba .unread-mark-read{background-color:rgba(240,224,214,0.5)}:root.yotsuba .replies-quoting-you>a, :root.yotsuba #watcher-link.replies-quoting-you, :root.yotsuba .last-page>a>.watcher-page{color:#F00}:root.yotsuba .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(128,0,0)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}:root.yotsuba-b .dialog{background-color:#D6DAF0;border-color:#B7C5D9}:root.yotsuba-b .field:focus,:root.yotsuba-b .field.focus{border-color:#98E}:root.yotsuba-b.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(221, 0, 0, .8) !important}:root.yotsuba-b.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(221, 0, 0, .8) !important}:root.yotsuba-b #header-bar.dialog{background-color:rgba(214,218,240,0.98)}:root.yotsuba-b:not(.fixed) #header-bar, :root.yotsuba-b #notifications{font-size:9pt}:root.yotsuba-b #header-bar, :root.yotsuba-b #notifications{color:#89A}:root.yotsuba-b #board-list a, :root.yotsuba-b #shortcuts a{color:#34345C}:root.yotsuba-b #fourchanx-settings fieldset, :root.yotsuba-b .section-main div::before{border-color:#B7C5D9}:root.yotsuba-b .suboption-list>div:last-of-type{background-color:#D6DAF0}:root.yotsuba-b.catalog-hover-expand .catalog-container:hover>.post{background-color:#D6DAF0}:root.yotsuba-b.werkTyme .catalog-thread:not(:hover),:root.yotsuba-b.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.yotsuba-b.catalog-hover-expand .catalog-container:hover>.post,:root.yotsuba-b.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#B7C5D9}:root.yotsuba-b .backlink.deadlink{color:#34345C !important}:root.yotsuba-b .inline{border-color:#B7C5D9;background-color:rgba(255, 255, 255, .14)}:root.yotsuba-b .indicator{color:#D6DAF0}.yotsuba-b #dump-list::-webkit-scrollbar-thumb{background-color:#D6DAF0;border-color:#B7C5D9}:root.yotsuba-b .qr-preview{background-color:rgba(0, 0, 0, .15)}:root.yotsuba-b .qr-link{border-color:rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);background:linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent}:root.yotsuba-b .qr-link:hover{background:#D9DDF3}:root.yotsuba-b #menu{color:#000}:root.yotsuba-b .entry{font-size:10pt}:root.yotsuba-b .focused.entry{background:rgba(255, 255, 255, .33)}:root.yotsuba-b .unread-mark-read{background-color:rgba(214,218,240,0.5)}:root.yotsuba-b .replies-quoting-you>a, :root.yotsuba-b #watcher-link.replies-quoting-you{color:#F00}:root.yotsuba-b .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(0,0,0)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}:root.futaba .dialog{background-color:#F0E0D6;border-color:#D9BFB7}:root.futaba .field:focus,:root.futaba .field.focus{border-color:#EA8}:root.futaba #header-bar.dialog{background-color:rgba(240,224,214,0.98)}:root.futaba:not(.fixed) #header-bar, :root.futaba #notifications{font-size:11pt}:root.futaba #header-bar, :root.futaba #notifications{color:#B86}:root.futaba #header-bar a, :root.futaba #notifications a{color:#800000}:root.futaba #fourchanx-settings fieldset, :root.futaba .section-main div::before{border-color:#D9BFB7}:root.futaba .suboption-list>div:last-of-type{background-color:#F0E0D6}:root.futaba.catalog-hover-expand .catalog-container:hover>.post{background-color:#F0E0D6}:root.futaba.werkTyme .catalog-thread:not(:hover),:root.futaba.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.futaba.catalog-hover-expand .catalog-container:hover>.post,:root.futaba.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#D9BFB7}:root.futaba .backlink.deadlink{color:#00E !important}:root.futaba .inline{border-color:#D9BFB7;background-color:rgba(255, 255, 255, .14)}:root.futaba .indicator{color:#F0E0D6}:root.futaba.anonymize $site$info$name::before{font-size:12pt}.futaba #dump-list::-webkit-scrollbar-thumb{background-color:#F0E0D6;border-color:#D9BFB7}:root.futaba .qr-preview{background-color:rgba(0, 0, 0, .15)}:root.futaba .qr-link{border-color:rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);background:linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent}:root.futaba .qr-link:hover{background:#F0E0D6}:root.futaba #menu{color:#800000}:root.futaba .entry{font-size:12pt}:root.futaba .focused.entry{background:rgba(255, 255, 255, .33)}:root.futaba .unread-mark-read{background-color:rgba(240,224,214,0.5)}:root.futaba .replies-quoting-you>a, :root.futaba #watcher-link.replies-quoting-you, :root.futaba .last-page>a>.watcher-page{color:#F00}:root.futaba .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(128,0,0)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}:root.burichan .dialog{background-color:#D6DAF0;border-color:#B7C5D9}:root.burichan .field:focus,:root.burichan .field.focus{border-color:#98E}:root.burichan #header-bar.dialog{background-color:rgba(214,218,240,0.98)}:root.burichan:not(.fixed) #header-bar, :root.burichan #header-bar #notifications{font-size:11pt}:root.burichan #header-bar, :root.burichan #header-bar #notifications{color:#89A}:root.burichan #header-bar a, :root.burichan #header-bar #notifications a{color:#34345C}:root.burichan #fourchanx-settings fieldset, :root.burichan .section-main div::before{border-color:#B7C5D9}:root.burichan .suboption-list>div:last-of-type{background-color:#D6DAF0}:root.burichan.catalog-hover-expand .catalog-container:hover>.post{background-color:#D6DAF0}:root.burichan.werkTyme .catalog-thread:not(:hover),:root.burichan.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.burichan.catalog-hover-expand .catalog-container:hover>.post,:root.burichan.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#B7C5D9}:root.burichan .backlink.deadlink{color:#34345C !important}:root.burichan .inline{border-color:#B7C5D9;background-color:rgba(255, 255, 255, .14)}:root.burichan .indicator{color:#D6DAF0}:root.burichan.anonymize $site$info$name::before{font-size:12pt}.burichan #dump-list::-webkit-scrollbar-thumb{background-color:#D6DAF0;border-color:#B7C5D9}:root.burichan .qr-preview{background-color:rgba(0, 0, 0, .15)}:root.burichan .qr-link{border-color:rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);background:linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent}:root.burichan .qr-link:hover{background:#D9DDF3}:root.burichan #menu{color:#000000}:root.burichan .entry{font-size:12pt}:root.burichan .focused.entry{background:rgba(255, 255, 255, .33)}:root.burichan .unread-mark-read{background-color:rgba(214,218,240,0.5)}:root.burichan .replies-quoting-you>a, :root.burichan #watcher-link.replies-quoting-you, :root.burichan .last-page>a>.watcher-page{color:#F00}:root.burichan .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(0,0,0)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}:root.tomorrow .dialog{background-color:#282A2E;border-color:#111}:root.tomorrow #arc-list span.quote{color:#B5BD68}:root.tomorrow.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(145, 182, 214, .8) !important}:root.tomorrow.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(145, 182, 214, .8) !important}:root.tomorrow #header-bar.dialog{background-color:rgba(40,42,46,0.9)}:root.tomorrow:not(.fixed) #header-bar, :root.tomorrow #notifications{font-size:9pt}:root.tomorrow #header-bar, :root.tomorrow #notifications{color:#C5C8C6}:root.tomorrow #header-bar a, :root.tomorrow #notifications a{color:#81A2BE}:root.tomorrow.shortcut-icons .native-settings{background-image:url(\'//s.4cdn.org/image/favicon-ws.ico\')}:root.tomorrow #fourchanx-settings fieldset, :root.tomorrow .section-main div::before{border-color:#111}:root.tomorrow .suboption-list>div:last-of-type{background-color:#282A2E}:root.tomorrow.catalog-hover-expand .catalog-container:hover>.post{background-color:#282A2E}:root.tomorrow.werkTyme .catalog-thread:not(:hover),:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.tomorrow.catalog-hover-expand .catalog-container:hover>.post,:root.tomorrow.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#111}:root.tomorrow .backlink.deadlink{color:#81A2BE !important}:root.tomorrow .inline{border-color:#111;background-color:rgba(0, 0, 0, .14)}:root.tomorrow .indicator{color:#282A2E}:root.tomorrow .qphl{outline:2px solid rgba(145, 182, 214, .8)}:root.tomorrow.highlight-you .quotesYou$site$highlightable$op,:root.tomorrow.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(145, 182, 214, .8)}:root.tomorrow.highlight-own .yourPost$site$highlightable$op,:root.tomorrow.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(145, 182, 214, .8)}:root.tomorrow .filter-highlight$site$highlightable$op,:root.tomorrow .filter-highlight$site$highlightable$reply{box-shadow:inset 5px 0 rgba(145, 182, 214, .5)}:root.tomorrow.highlight-own .yourPost>$site$sideArrows,:root.tomorrow.highlight-you .quotesYou>$site$sideArrows,:root.tomorrow .filter-highlight>$site$sideArrows{color:rgb(155, 185, 210)}:root.tomorrow .catalog-thread.filter-highlight .catalog-thumb,:root.tomorrow.werkTyme .catalog-thread.filter-highlight:not(:hover),:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,:root.tomorrow.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight>.catalog-container:hover>.catalog-post{box-shadow:0 0 3px 3px rgba(64, 192, 255, .7)}:root.tomorrow .catalog-thread.watched .catalog-thumb,:root.tomorrow.werkTyme .catalog-thread.watched:not(:hover),:root.tomorrow.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,:root.tomorrow.werkTyme.catalog-hover-expand .catalog-thread.watched>.catalog-container:hover>.catalog-post{border:2px solid rgb(64, 192, 255)}.tomorrow #dump-list::-webkit-scrollbar-thumb{background-color:#282A2E;border-color:#111}:root.tomorrow .qr-preview{background-color:rgba(255, 255, 255, .15)}:root.tomorrow #qr .field{background-color:rgb(26, 27, 29);color:rgb(197,200,198);border-color:rgb(40, 41, 42)}:root.tomorrow #qr .field:focus,:root.tomorrow #qr .field.focus{border-color:rgb(129, 162, 190) !important;background-color:rgb(30,32,36)}:root.tomorrow .persona button{background:linear-gradient(to bottom, #2E3035, #222427) no-repeat;color:rgb(197,200,198);border-color:rgb(40, 41, 42);outline:none}:root.tomorrow .persona button::-moz-focus-inner{border:none}:root.tomorrow .persona button:focus{border-color:rgb(129, 162, 190)}:root.tomorrow #qr.sjis-preview #sjis-toggle,:root.tomorrow #qr.tex-preview #tex-preview-button{background:rgb(26, 27, 29)}:root.tomorrow #qr select,:root.tomorrow #file-n-submit>input,:root.tomorrow #qr-draw-button{border-color:rgb(40, 41, 42)}:root.tomorrow #qr-filename{color:rgb(197,200,198)}:root.tomorrow .qr-link{border-color:rgb(25, 27, 31) rgb(25, 27, 31) rgb(10, 12, 16);background:linear-gradient(#37393D, #282A2E) repeat scroll 0% 0% transparent}:root.tomorrow .qr-link:hover{background:#282A2E}:root.tomorrow #menu{color:#C5C8C6}:root.tomorrow .entry{font-size:10pt}:root.tomorrow .focused.entry{background:rgba(0, 0, 0, .33)}:root.tomorrow .unread-line{border-color:rgb(197, 200, 198)}:root.tomorrow .unread-mark-read{background-color:rgba(40,42,46,0.5)}:root.tomorrow .replies-quoting-you>a, :root.tomorrow #watcher-link.replies-quoting-you, :root.tomorrow .last-page>a>.watcher-page{color:#F00 !important}:root.tomorrow .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(197,200,198)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}:root.photon .dialog{background-color:#DDD;border-color:#CCC}:root.photon .field:focus,:root.photon .field.focus{border-color:#EA8}:root.photon #arc-list tr:nth-of-type(odd) span.quote{color:#C0E17A}:root.photon.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(221, 0, 0, .8) !important}:root.photon.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(221, 0, 0, .8) !important}:root.photon #header-bar.dialog{background-color:rgba(221,221,221,0.98)}:root.photon:not(.fixed) #header-bar, :root.photon #notifications{font-size:9pt}:root.photon #header-bar, :root.photon #notifications{color:#333}:root.photon #header-bar a, :root.photon #notifications a{color:#FF6600}:root.photon #fourchanx-settings fieldset, :root.photon .section-main div::before{border-color:#CCC}:root.photon .suboption-list>div:last-of-type{background-color:#DDD}:root.photon.catalog-hover-expand .catalog-container:hover>.post{background-color:#DDD}:root.photon.werkTyme .catalog-thread:not(:hover),:root.photon.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.photon.catalog-hover-expand .catalog-container:hover>.post,:root.photon.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#CCC}:root.photon .backlink.deadlink{color:#F60 !important}:root.photon .inline{border-color:#CCC;background-color:rgba(255, 255, 255, .14)}:root.photon .indicator{color:#DDD}.photon #dump-list::-webkit-scrollbar-thumb{background-color:#DDD;border-color:#CCC}:root.photon .qr-preview{background-color:rgba(0, 0, 0, .15)}:root.photon .qr-link{border-color:rgb(206, 206, 206) rgb(206, 206, 206) rgb(191, 191, 191);background:linear-gradient(#ECECEC, #DDD) repeat scroll 0% 0% transparent}:root.photon .qr-link:hover{background:#DDDDDD}:root.photon #menu{color:#333}:root.photon .entry{font-size:10pt}:root.photon .focused.entry{background:rgba(255, 255, 255, .33)}:root.photon .unread-mark-read{background-color:rgba(221,221,221,0.5)}:root.photon .replies-quoting-you>a, :root.photon #watcher-link.replies-quoting-you, :root.photon .last-page>a>.watcher-page{color:#00F !important}:root.photon .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(51,51,51)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}:root.spooky .dialog{background-color:#171526;border-color:#707070}:root.spooky .field:focus,:root.spooky .field.focus{border-color:#98E}:root.spooky #arc-list span.quote{color:#634C2C}:root.spooky.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(145, 182, 214, .8) !important}:root.spooky.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(145, 182, 214, .8) !important}:root.spooky #header-bar.dialog{background-color:rgba(23,21,38,0.98)}:root.spooky:not(.fixed) #header-bar, :root.spooky #notifications{font-size:9pt}:root.spooky #header-bar, :root.spooky #notifications{color:#C49756}:root.spooky #board-list a, :root.spooky #shortcuts a{color:#FE9600}:root.spooky.shortcut-icons .native-settings{background-image:url(\'//s.4cdn.org/image/favicon-ws.ico\')}:root.spooky #fourchanx-settings fieldset, :root.spooky .section-main div::before{border-color:#707070}:root.spooky .suboption-list>div:last-of-type{background-color:#171526}:root.spooky.catalog-hover-expand .catalog-container:hover>.post{background-color:#171526}:root.spooky.werkTyme .catalog-thread:not(:hover),:root.spooky.werkTyme:not(.catalog-hover-expand) .catalog-thread,:root.spooky.catalog-hover-expand .catalog-container:hover>.post,:root.spooky.catalog-hover-expand .catalog-container:hover .catalog-reply{border-color:#707070}:root.spooky .backlink.deadlink{color:#FE9600 !important}:root.spooky .inline{border-color:#707070;background-color:rgba(255, 255, 255, .14)}:root.spooky .indicator{color:#171526}:root.spooky .qphl{outline:2px solid rgba(145, 182, 214, .8)}:root.spooky.highlight-you .quotesYou$site$highlightable$op,:root.spooky.highlight-you .quotesYou$site$highlightable$reply{border-left:3px solid rgba(145, 182, 214, .8)}:root.spooky.highlight-own .yourPost$site$highlightable$op,:root.spooky.highlight-own .yourPost$site$highlightable$reply{border-left:3px dashed rgba(145, 182, 214, .8)}:root.spooky .filter-highlight$site$highlightable$op,:root.spooky .filter-highlight$site$highlightable$reply{box-shadow:inset 5px 0 rgba(145, 182, 214, .5)}:root.spooky.highlight-own .yourPost>$site$sideArrows,:root.spooky.highlight-you .quotesYou>$site$sideArrows,:root.spooky .filter-highlight>$site$sideArrows{color:rgb(155, 185, 210)}.spooky #dump-list::-webkit-scrollbar-thumb{background-color:#171526;border-color:#707070}:root.spooky .qr-preview{background-color:rgba(0, 0, 0, .15)}:root.spooky #qr .field{background-color:rgb(26, 27, 29);color:rgb(197,200,198);border-color:rgb(40, 41, 42)}:root.spooky #qr .field:focus,:root.spooky #qr .field.focus{border-color:rgb(254, 150, 0) !important;background-color:rgb(30,32,36)}:root.spooky .persona button{background:linear-gradient(to bottom, #2E3035, #222427) no-repeat;color:rgb(197,200,198);border-color:rgb(40, 41, 42);outline:none}:root.spooky .persona button::-moz-focus-inner{border:none}:root.spooky .persona button:focus{border-color:rgb(254, 150, 0)}:root.spooky #qr.sjis-preview #sjis-toggle,:root.spooky #qr.tex-preview #tex-preview-button{background:rgb(26, 27, 29)}:root.spooky #qr select,:root.spooky #file-n-submit>input,:root.spooky #qr-draw-button{border-color:rgb(40, 41, 42)}:root.spooky #qr-filename{color:rgb(197,200,198)}:root.spooky .qr-link{border-color:rgb(8, 6, 23) rgb(8, 6, 23) rgb(0, 0, 8);background:linear-gradient(#262435, #171526) repeat scroll 0% 0% transparent}:root.spooky .qr-link:hover{background:#1A1829}:root.spooky #menu{color:#FE9600}:root.spooky .entry{font-size:10pt}:root.spooky .focused.entry{background:rgba(255, 255, 255, .33)}:root.spooky .unread-line{border-color:rgb(197, 200, 198);visibility:visible;opacity:1}:root.spooky .unread-mark-read{background-color:rgba(23,21,38,0.5)}:root.spooky .replies-quoting-you>a, :root.spooky #watcher-link.replies-quoting-you, :root.spooky .last-page>a>.watcher-page{color:#F00 !important}:root.spooky .watch-thread-link{background-image:url("data:image/svg+xml,<svg viewBox=\'0 0 26 26\' preserveAspectRatio=\'true\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'rgb(254,150,0)\' d=\'M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z\'/></svg>")}' +
      ((Ae = [
        {
          name: 'Audio',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAitJREFUOE9jYCAWKJWwavr0KyXWb/FIbDtUFFyzJx6nVofE2Xo5nXsj0rqPNSR0nVkR2Hjmgmfd+U9Otdf+m5Vf/6+SfeU/R9ChVVgNYDRtlfJuuPA/rPfe/4QpD/6nznj0P27Kw/9unff/69Xf+69c/+C/SO7N/0z+OAxgMmmRCe++/r9i3ev/KWvf/vdY8PK/bt/9/wrNV3/IN5y/IVt1YqNg4pGTTP4HsbuA2bhZ2qvpyn+xjIObxAp3VwqlrgngLFyryVy5nhPmZJHANS2cwYexG8BmVC/pWn3hP4NZlzWuQDJI3dIiFnUUuwEsQAOcq87jNcC7fHeLUtJxHF4AGmBWeAavAWH1+1rUUk7giAWjOknllON4DXAs2NEiG4/DBQxAF/CFHfrPYI4jDFSLuJVjNrUJhB/B7gIGo1pJRt99GAZYJK7wLJ1z7Xzl4vu/7aqv/GRBj0bjqAX2qb0nJ7mXH17C4HcUxQA+hymWtSue/C5a9up/9Ozn/7Vr7v1nRY7GqMb91T3b3v6vWvPmf/S0p/9ZQk+DDLCBRSOz06Jqk+o7/21nvfqvsebDf7kZL/5zBaxphkezd+OFn7HzXvz3Wvjmv9a8N//5Ek//ZTBpVYUrMG2X5wjcdl68+uI/wa5Lr3hSNjczGFeywOVZ/bbcVGp//F9izfv/Ql03f3P4LC/HSEQquYwMFnUCDJ7dzBhyjGZNQpye89M5gpfnMvtNUyE2h4PUAQBovvT7lyNljwAAAABJRU5ErkJggg==',
        },
        {
          name: 'Bitchute',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAadQTFRFAAAAwzw8xDs7cY6O0iws0ysrtF9f0Sws1CwsyzU1zTIy1igoyzQ01icnY7i4t0hI0S4u0ysr1Soq1ikp1ikp1Soq0ysr0S4uu0VFzjEx1Csr1ygo2Ccn2Ccn1ygo1CoqzjExzjAw1Skp2Ccn2Ccn1ikp0TAwxzY21Soq1SoqyzQ00iws1ygo1ygo0yws1Soq1Skp1igo1igo1igo1igo1igo1igo1Coq1Soq0C0t1ygo1ygo0S4unV5e1Csr1ygo1ygo1CsruUdHxzg41Skp1ygo1CsryTU10C4u1igo1ycn1ygo0i0txjo60S0t1ikp1ygo1ikp1Cws1Coq1Coq0yws0S0tyzQ00iws1Soq0ysr0i0txDs72Ccn2CUl2CYm2CQk3EFB2S8v2zw82jY24FZW3D0931FR3EBA3UND8LS04FVV7qys4V9f4WBg+erq766u9t7e7qqq2Ckp54KC9+Pj6pSU+Ojo5XNz9NHR6YqK8bu765ub5G5u9M3N6ImJ88vL5XV165eX3UVF6pWV3UhI2Soq2jU12Coq2jQ02Cgo2Sws////FaxLuAAAAF10Uk5TAAAAAAAAAAAAAAAAAAAAASJnoLy9oWolAhBz1vr72XgTGKf8/a4cCpuiDVvz9mS6xOvy9vzg6aGsPOToRAFv9fh2Awm07XgIMd765UEDOsfemVhhY00nBommbCkEI8horgAAAL5JREFUKBUFwbFKA0EUQNF7387sMq4EmzRpLSSdIBYKFv6Af2prnSYkRT4gWFgkCBJQ0EIFdcZzBCeqqh4qdk7VW2ChPusw02sAYKU7z7wEAAA2piQKFbrWSHazc1J0XWs5pdxPDykcVX+7Y9UxUsSo+s7PibqPFBRV/C5qi4i/UkrJrc7L47Bt4ZWnUaMCAE9GSrtKBQD2fR+bnAEAeOn7dUTOwApe35bDsPz0zsniQlV98IN0tJ3f6P0XAMA/kxou7OXCdnoAAAAASUVORK5CYII=',
        },
        {
          name: 'Clyp',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAwUExURTSY22ey5E2l4KbS75rM7Y3F64C/6f///8zl9nS45r/f9PL5/UGe3bPY8Vqr4v///wNjrzUAAAABYktHRA8YugDZAAAAB3RJTUUH4AINEi85AIH95AAAAE9JREFUCNdjYMAGGBWgDGYHCM2a3hkAZmi0dzSBaKaO9o5moCqmLiCjYzNQyw4QowIodQzI6E0AKcpo72gE6+Jyb1kAMehUA9RktgdYbQYAjGIVNGGXBJkAAAAASUVORK5CYII=',
        },
        {
          name: 'Dailymotion',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQBk3ff6/trp+kKO5wZt3xx54q7P9Ozz/IS17zOG5WKh653E8sbc9/GbbcoAAABZSURBVAjXY2BAASyhDhAGc9oECMOjyAAiESEEYrBYpLWBGcwHxcvBjDDxHelghpF0yDQwY3kVgweEUeEQDWbMEepqAjO8FMsLIeYsU8o+BrbCdWboTAe4AwALXxWGjW41FwAAAABJRU5ErkJggg==',
        },
        {
          name: 'Gfycat',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAjVBMVEWn3gCo3gSr3w2t4BSu4Bav4Ri35C+45DK45DO55DXA50rA50vB50zC6E/D6FTF6VjG6VvL62vN7G/P7XbQ7XfW74vY8JDa8ZTe8qDe8qLf86Pi9Kzj9K7k9LHp9sDp98Lq98Ps+Mr0++L5/O75/fD6/fH6/fL6/fP7/fT7/fb8/ff8/vj8/vn+/v7///91X4cfAAAAcklEQVR42o3M2xKBUACF4aVQckrIuRJK6H//x2sme4/MuPDfre9i6c/Cc3U5Dj87BuAxsXvGu6JvIIXEHRWwNHCHQNrCzkAFkbSBg4EM8i+Yw7PXBa3zRfuxVyf/Bis7nKwGKAcWxgC8prI5Sc315OlnDfzpDar2S9/oAAAAAElFTkSuQmCC',
        },
        {
          name: 'Gist',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABblBMVEXc3NykpKTW1tbb29ugoKCdnZ0AAAACAgIEDRcKCgoMDAwODg4QIzYRDAoTExMUDwwVAg0WICsaEw8aGhoiCBklGxUmERwwKCQ7LSU7Ozs8LSZFLyNINi1JNyxJNy1KSklMOi5VR1FXV1daQTRkZGRseYZwU0F4eHh7dnR8bWV/YE6IdGiKcGCKkJaNgYeNjY2RdGOScWCUcWCZmZmhoaGkpKSoqKirfmaurq6xsbG1tbW6urq+vr7AbmzBb23CwsLGxsbHx8fHyMjJycnJysrMzMzOiYbPi4fQ0NDRoYbT09PU1NTW1tbY2NjZqIzZ2dnb29vd3d3f39/i4uLktZrk5OTl5eXm5ubn5+fo6Ojq6urs7OzttKLu7u7wuqbw8PDx8fHz8/P4+Pj5+fn7uZj8vpz9ya79ybD/tZf/upr/wZ//w6H/xKH/xaL/xrH/yqj/y7T/zqv/z7D/07D/17n/2Lv/2Lz/3L//38n/4Mk3Q/ZuAAAABnRSTlMSFcbGzc5MNKFvAAAA1klEQVQoz2NgYPZHAswMDEwRSclwkBTBxOARn4gE4j0YXBOiJNUDg7y8Ar1UlOITXBkcY73Z2Li42dg42dn4wmIdGeyjQ7nZoEA4PNqewSZKlw0O9KJsGKwjBdl4ZeWkJGQUhNjEIq0ZrMI5+D0ri7Jz8itCRAXCrRgsQ3mUy+xicrPSbfO0REItGSyCVaVL3ONSU9LcCtQUgy0YzIJ85M1LizMzCsv9xF2CzBhMAwN99TV1DI0MtDWcAgNNGUycA5CAswkDi5kDwrMOZiwMjKzGSICVEQDhZj0UQV7PewAAAABJRU5ErkJggg==',
        },
        {
          name: 'Image',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAs5JREFUOE+lk/tvi1EYx98/xT8gW4REIpGFMEQWl2FiM9ZMZhm2xRAyOsmujFFmdFRHu0tWm87UypxStr69zPauN5e5rHVp3IYhbOvHy+wHEQlxkm+ek+d8nm9OznkeSfrfldmgJC7QyUlTymsJTfuTZ25z4HdWYwyLreYhtpgekGPw0+kKvo1Eo+IXRSIiEhkWZuc9tqnsJD9EqTUopCxjSGTpB0iueczSo1HyW8cpsExQ1DbxI2pt45j9cXpexul4FEd79RnZphAa/SD7WvuFtO6UItbU9LC+YQxNI2w0wwYT5LRAdhOU3oBTIXC9gXP3oUSGgz2vST3gYHejR0jptT1C332f8yrUEYHrz8CgxDnpm6DKCUfc0KnmXa/AEVPPwnDcD0cvetA2uYRk67Ive/lpjO7YBO1PPuF8Df3vwf4cbNE4tqdw7YVq8HYyHx6FvhE1hkMEg8HDUqvFkjT4aIjMqkqyqkswDSrcfBfH+Q561YLAZ/B+BLda6FXlU/cPv0AoEPhuoP1h4Av7Wbh9E/Py15NWWUjeSR3nZDfeN+N0DY9hG/7K1eGP3P0S5/EYRFUF/IOTBrUXHPm9fT6mr1xEwupkZqxbzLyiDJYUZ5NSnkdqdSHpxyrYdFpPgdmAsdfJwPMI/Yr65bf7tZLGGBQ7DNdJWFtIYvoOZmbuZE7OXpIKKli86zAr9p9gTVktWTVnKTI2U95uRWe3U2IJUDbVB5p6hVm5x5m9Vc/cnedZUNzC8lILaQesZBy6hEZ3maKzgvJWFzVWD9XtXvVGQbSWASFtMATVRlJIKbOTWtlJXaeXepuPM1f6MNp9GLt8mLvvYLmp0OhQ2Fwvk6m7xaqDTvY0eYWUVtcnllXfYlGpnfklVuraHHg8HjxuN+6fktUHlWWZPaZeUo/ILK0UKttBcbNbSB9GP0yLxWJJUxoZGUn80zD9C/vXQ/4NHY10h3M1zmQAAAAASUVORK5CYII=',
        },
        {
          name: 'Installgentoo',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABcVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3dIYAAAAAAAAAAAAbGh4BBAcCBgoBBgoCBwsCCQ/QzucCCA7MyuXZ1eUBBQmTh8fo5/i9svIAAADh3vQAAAACCA0CCQ8CCQ4DDBQbGCUDChDr6vgAAAAAAAAREBIDCxK6tdfe2fTv7/cDCxIDDBQEDRUHDhgMJjXk4PZdXWdLUFoUNEYOKDgSMUMRLUBneI4eTGj08/QmW3onW3rTzvfOx/giU3IiVHMkWHdEaYJobHv3+PokWHpua6TNy9xZgZ+1quz8/foQKj0XPFInWn0nW38tZ4o6fqg8gq48grA9hrU/i7pAhrNAiLdBjLtEjr1FksNIjr5Il8pImMtKWnNqhL97odKFqti5q/q5rPq60+nCt/vLw/vPx/jV0vHY0/rc1/rg2/vh3fzn4fzu6/vx8vf19Pv19Pz49/v5+Pv8/Pv8/fr9/vv+/frziVtUAAAAT3RSTlMABQYHCAoNDhARGRobL0ZOV1xdXV5fYGBmZnB0eX2MjZSaoaGio6mqqqustLq7zubo6Ojo6evt7u/x8fLy9/f4+Pj5+vr6+vr6+/39/v7+XKgUSwAAAMhJREFUKM9jYGDg4OZmZgABKINT1dBAhBHIYFMxMBIDisjbhoZbCTExsCu5hoeY8DEwcOkEx8fY6MqpucTGB0izglVEplcU5/gmRYWBVQDNMK+s0hN3SvMyBpsBNJxXw0NfwTEjVQZqHQMHj5RfWW5mliSEC7TPzK6yJD/bXZQRzGdXcisqLy309okA2Q4Eis4peQWmstqBCdGW/CABraC45ERBBs3A6Fh/AbAKTwsHa34QZW8NVsGuLqwswQSjQICTmYMFQaEDAAF8JHLfKGswAAAAAElFTkSuQmCC',
        },
        {
          name: 'Liveleak',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAlNJREFUGBkFwU2LVmUYAODrPu8Z5x1xSpRBXQyFoLsBE+wfiO5atJOgnf9DUPwFgtGinUgEaQsRhHYuMtpEiEWuG5iNjuOcj+c8z911xXcXL/68c3Dw1fzhg0QgEQAAEYGUKXFie9vxlSs/xk/rdavjGEkmkWSih65z4osv9GfOiK6LzEyZ2uGh4dUrmzs72ddlUUhkoiMr4PT167589Mh6c1N0nSRlqrX67dat+PDyZXRT19m5edPnt28rGFHxMcJ6d9fprS1/37tneP3aemPD1uamUydPOru3p5DdGOH0tWsu3LhhxIQJM2qEpRT/Pn3q/du3AhARSmvGTH0lplKMrVkiYpVpQaJlighzhDkzhmEA0fcWoqAfyaFW4zTlgCABxlrNmY4ylUzLsiREprFWc0T2M+ZSjKWY0AEaltZUjJixZJIpuk5pTWlNP2BYFvOyKJkCAKU1tTXHrZlqVWolUxdhxsfVSj9FmJfFMM9GdICGGa01HyMstYpMIFPJVNDPmYZSTOPoOEKHzNRlKpmWWh1j6TpLa2SKTKVWU6Z+Qolwdm/P9QcPZKa2LH69e9eIMs+WCL/cv2/98CGZPrt61am+V9APq1X89eyZ/968obVYaiXT4dGREgG+vnPHeHgYMsH2+fP+efEihtVKv7SWw/6+9/v7KYLMhIywTJPamvOXLomukyRsrNf+ePzYkpl9dJ3SWgSCSCQCfz5/7pMLF2yfO6eLiAQcHRz4/cmT+HR7O+Ob3d0fNt69+7a2BiICQCJbA0EgE5lpvbXl1OXL3/8Pfax4+6SjSukAAAAASUVORK5CYII=',
        },
        {
          name: 'Pastebin',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAB1FBMVEUAAAAAAAAAAABWYWwAAABbY3BbYm5dZnFdZXJeZnMEBAQHCAhYYGpdZnFdZnBgaHIlJyomKCooKi09QkdESU5eZGtdYmhdYmleY2lrcXdqb3Rqb3Rqb3SSmJ+SlJeWmJutr7GtrrCWm6ChpKhbW1tmZmZvb290dHR3d3d4eHh5eXl6enp8fHx+gIJ/f3+CgoKDg4OEhISFhYWHh4eKioqKjI2Li4uMjIyOjo6Pj4+QkJCRkZGSkpKUlJSVl5mWlpaYmZqZm52ampqbm5ucnJydnZ2enp6fn5+hoaGioqKkpKSkpaalpaWmp6mmp6qnqauoqKioqquoqq2qqqqrrK2srKysra6srrCsrrGurq6vr6+wsLCxsbGysrKztLa0tLS1t7m2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr7AwMDAwsTBwcHExcfFxcXFxsnGxsbHx8fIyMjJycnMzMzNzc3Ozs7O0NLPz8/Q0NDR0dHR09XT09PV1dXV1dbV1tfV19rW1tbX19fX19jY2tzZ2dnZ2tva2tra3N3a3N7c3Nze3t7f39/f4OHg4ODi4uLl5+jm5ubs7Ozs7e3u7u7v7+/v8PDw8PDx8fHy8vLz8/P29vYSoLMZAAAAJHRSTlMABAUGCwsNHCAiLzMzMzZEYGJwgIuOnJycnqmqq9bc3+/w8fkZ0N/uAAAA/klEQVQoU2NgYGDl5YMDdgYGBmZZ3964CYFtIR3e9Q7K/AwMHI55KfaFmcHWMy3K3MwlGRg4wz0zdYpcorRbNbL0LaWAAp3ts2umV8wo6MupTauQBgqUG03VL7W3sfZSb1erAgm02M+yzYrVCXUy6zapAQlUx/dEdyX3J3ZHVUYVywAF8o2rDNN1Go2jzGLMokAC2QbuSc42mXmaOXop9iAtCXrJ5qXWjT59Abl2ESJAAX/tSIMMiyrrqQ3T6uS5gQK6kSqpqkUermGTexQFmYACflqR+hlWZSamzQpCLEDPsSmVVDT1TJw0JUhOAMRnYOARFRMTE5cQF+ZiBPIAII5B3EVG0b4AAAAASUVORK5CYII=',
        },
        {
          name: 'Peertube',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABIFBMVEUhHyAAAABzPBnxaA3CWBEnJSYbGRptbW16enpzc3PTayWhb04hHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyAhHyApIh+0UhMfHiBWMhvsZg7zaQ0hHyAhHyAXHCHzaQ3xaA3xaA3xaA3xaA0hHyAhHyDxaA3xaA3xaA3xaA3xaA3xaA0oJickIiMdGxwUEhPxaA3xaA3xaA1sbGxwcHB3d3eFhYXxaA3xaA3xaA1zc3Nzc3Nzc3Nzc3Nzc3PxaA3xaA3xaA1zc3Nzc3NtdHjxaA3xaA1yc3STcFnvaA/yaAxzc3N4c2/FbDFzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3MhHyDxaA1zc3MAAAAfljyVAAAAXHRSTlMAAAAAAAAAAAAAAAAZkjMBHOLXYArj8p0u2VsJ1XaGL/OhKyXc1WEN2gwk2/SjKgEYiS4B/tYFGosqAdleAxzj12ML9Z8s850rJWbYeYMs1F8Koiri1V0MGZY0AYbIBFIAAAABYktHRAH/Ai3eAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wYXFBUVX81QWQAAAKxJREFUGNNVz9UWgkAQANDBtdbu7lZsxe7ubpH//wxBPKDzNvdMAmi0Oj0QQgAYjCazBX7BStvsDqHoAzTtdLklf+Dx+vwICRAIhsKRaCyOvpAwJ6Up8pXOZHOIAFm+UCzJEQuvMhWrIFBUa/WGkodmq40Ad7q9/kDFwnA05lpYYCbT2ZykFvxQDhhmuVpvcvxaHra7vfp72KflcMSYEOB0vlyx+By+3R9PMSfe+P0enM1454kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDYtMjRUMDM6MjE6MjEtMDc6MDDse6MAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA2LTI0VDAzOjIxOjIxLTA3OjAwnSYbvAAAAABJRU5ErkJggg==',
        },
        {
          name: 'Soundcloud',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQ4y5WTy2pUQRCGv2rbzDjJeAlIBmOyipGIIJqFEBDElwh4yULGeRFXPoEIBl/AvQ/gC2RnxCAoxijiwks852S6+3dxzslcHJCpTXVX11/Xv0097gLPgVNMJxnQNfX4zsqleWbnpoMf/oa9d988MM9MC/rp+E0a+A0dsVobMNMCOO8B6McRoABJI+A6gJmN3D2A8jgEBCEkSEMBrcrsDAzDWWn3AjgKFaDMmgRqniGFgsaDp1jrLOngDf1XT1D+A1dFc4MKAkkiCVKjjVu7g9+4Rzx4i1u6hjXbuMWr0O5QPNvCu7IaCZwEKQukLGDrm5x8uI0tr6MkiGlkiv7yLfzN+6S5i6QsIMABkEfcxhbWWYMkVAOjxvYAjc3HNHrbKI9VBQBFwF25XQKSBjqIf1YBuAurEMrczgDygD6/x2LCpFLXLUyQ+PoldphhBhYfIX09XU1+Flaukz7uYqs3SHs7cG4BmTsmkBUF9mmXEwa28BNLPaQPLepuNcbGSWQquQC2/Kdcox1FUGkcB0ykck1nA2+wTzMs8stGnP4rbWGw74EuS/GFQWfK7/wF6P4F7fzIAYkdmdEAAAAASUVORK5CYII=',
        },
        {
          name: 'Streamable',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABXFBMVEUPkPoNj/qExv0PkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoNj/oPkPoNj/oNj/qExv0PkPpruvwPkPornfoVk/opnPpnufwPkPqExv0Nj/oPkPoNj/oPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoPkPoOj/opnPsVk/oMjvoOkPoTkfo6pPsblfo3ovva7v7////v9/5Sr/whmPry+f5htvze8P7W7P5itvyl1v0imPu84P3o9P50v/zN6P73+/8lmvs8pfs+pfsKjvr9/v9EqfsNj/oom/v8/v9nufxAp/tJq/sQkPrb7v6t2f0IjPoclvr6/f9luPwUkvrp9f7h8f5ruvy/4f4kmftpuvwxoPum1v32+/8jmfpMrPvu9/7z+f9UsPs7pPv8/f/4/P9oufwalfpDqPsMj/ounvtVsPsnm/qzfQQ9AAAALXRSTlMAAAAggMzw0IYkBPb4iAamsgZ+jPwogpDO1vTYlPoulL4KivyUCiqO1PL01i67tUAWAAAAAWJLR0Q4oAel1gAAAAd0SU1FB+MGFxMuDXVcMbIAAADdSURBVBjTY2AAAmYWVjY2dg5OBgZGJiCXi4VbFwx4ePlAAlz8unAgIAgUENJFAsJMDMw8unp6+gaGRsYmpoa6IqIMYrp6ZuYWllbW5hY2toZ64gwSurp29g6OTs4urm7uHrqSDGy6nhZeet5WPr5+/gGBelJAgSCLYL+Q0LBw3YjIKKAAu250TGxcvE1CYlJySqquNAOHrl9aukVGZla2RU6uoZ4MA6esrl9evnWBYWFRMdBaOQYGXmSHyQNdyieA4CsogjzHpyQL4SqrqIJ9y8Cgpq6hqaWtogPyPgDmvSxRxBWM9AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNi0yNFQwMjo0NjoxMy0wNzowMCKUvXUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDYtMjRUMDI6NDY6MTMtMDc6MDBTyQXJAAAAAElFTkSuQmCC',
        },
        {
          name: 'Twitchtv',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAYUExURf///2RBpWRBpWRBpWRBpWRBpWRBpf///+zQyUYAAAAGdFJOUwFdZX0lTzs4r5oAAAABYktHRAcWYYjrAAAAB3RJTUUH4AINEi42iSXRNAAAAD1JREFUCNdjYEiDAAZGGIMtjQEEUBlMCWoEGci6mGEMsxQgIy0BiB3AjLS0FAYQIw0kwABipoI1AhkBQBIAFCIXxiHgq80AAAAASUVORK5CYII=',
        },
        {
          name: 'Twitter',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEsUExURf///1Cf21Gg3FGi31Gh3VKj4FGh3lKj4VKk4lKl41Ol5FOn51Sp6VSo6FOn5lCf21Gg3FGh3VGi31Gi31Gh3lGg3FGg3FGg3FGg3FGh3lGg3FGi31Kk4lKj4FGh3lGi31Kk4lGh3lGg3FGh3lOm5FOm5VGi31Kj4VSo6FGi31Gh3VGg3FKj4FOn51Gi31So6FWr7VOl5FGi31On51Sq6lKk4lOo51Sp6VOm5FSq61Ws7VOn51Oo51Sq61Ol5FOm5FSq61Wr7VOo51On51Sr7FWs7VSp6lGg3FGh3VOm5FWr7VSp6lKj4VOm5FSo6FSr7FWs7VWs7VWr7VSq6lOo51Om5FOo51So6FOm5VOl5FSq61Ws7VSr7FSp6lSp6VWs7lWr7VKk4lSq6v///6E3MNsAAABVdFJOUwAAAAAAAAAAAAAAAAAAAB0Ii+3xnBVTJhfsMKb+qTEp9GwBF/7lLAbo0m4pLkUTdvk2Ev3+EZnOBo/3Z8ffCRzH/D0OqPxiLnvx3UI8m9n1++GwXQZNS29BAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+ACDRIwBwy67tEAAADKSURBVBjTY2BAB4xogIGRH8IQEBQSFhEVE2eQkJQC8ZmkQ8PCI2Rk5RjkIxUUlRgZlVWioqNjYlXVGNQ14iI1tbR14qLj4+MTdJkZ9PQNosJCE0OjgPz4KEMWBiPjhPiEmKQokIJ4E1MmBmazhHg4MGdlYmCzsLSC8ROsmRkZmFht4Eps7ViADmOzd4DyHZ2YmYACTOzOLmATXd04mIBOd/eQ9owFCXh5c7KB/MLi4+vnHxAYFBzCwcYEEmBi5uLm4eHl42RmAnsSAMZBLgZiFUQ5AAAAAElFTkSuQmCC',
        },
        {
          name: 'Video',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAxgDGAP8nNqN7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gMZBjQQLEEqGwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAA5SURBVDjLY2AYaMDIwMDwn1JD/lPCZhpwL+B1wf///ykzgBhDiAoDfIYQZQAjIyP5BuDTPJqQqAQAvW0ZAMk8+EEAAAAASUVORK5CYII=',
        },
        {
          name: 'Vidlii',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAACvlBMVEUCWv8HXf8AWv8AAAD///8AVP+bqP8AWv8AVO4AOqUAGkgAyf8APa0AL4QABAsASdEAVv8AUv8AUv8AVP8AWP8BWv8JXv8RYv8QYv8DW/8DXP8xdv9RiP9Af/8IXf8AKP8KXv8JXf8NYf8aaf8ATP0UZP0AVf8AT/8AT/8AVv8ATedvnPVAf/8AT/sYZvl0o/8PYf8udf8aa/8FXf8AVf8AOrRBe/Nvn/8AUv0aaPkXZ/8ATv8AKYQZYuwIXf8ca/wTZP8ASP8AED0HUNwZaf8xdPwDWv8AAAAAQMRcjvQAU/8AMZssb/Jmmf8AU/8AJXsRW+dSif8AUv8AAAAASdQtdP8ATv8AQ/8AQv8APbtKgfQud/8XZ/8TZP8FXP8AKIIcZO4wdP8AF08KU95tnv4gafhZi/Rnl/ZzofcocP8AAAAAQ8Q4efRwnvVmlvVcjvgrcfsAQsQAOK0APrwAQcUEStMLXPgDWv8AHE8APLEARdIAQ80ASeEAVf8AOJkAAAAAAAAAAAAABBMAJJIAY/9rmP+vxv90n/+buPv29/7C1P+zx/n///2Crv/7+fjs8f++z/f///3l6fX9/f/L2fj9/P5ilv9Nh/3h6f6vyf/D0vT///2lwP/Z5Pf3+P9OiP9klvr9/Puzyf+QsPX//fnW4v/k6vfv8/86ev94pfj///uRtf/y8vby9f9Fgv9EgPzt7/jj7f8mcf+eufj///x1pP/Z4fT///52pf9Uivv09fnV4v8ncf64yvj7+/6vxPX///yyyf9ynvr6+vvG1/8ocv3O2/fz9v53ofX8+/nb5v+YuPz//vy0yv8vdP3e5/fn7v/p7PX09//b5P7///6eu/9Df/zq7vjc5//I1vT//v3+/v////9+q/9Tivnn6fPy8/rW4fzI1/2qwv6YtPT8+fX39/jz9PqJrveTsvqfpuxrAAAAhXRSTlMAAAAAAAAAAAAAAAAAAAAABSlERA45nrSzP3TZ7e12Ao2LusMcrJYhFwaR/uhCwP/x5tZzBWHy+n3OvA8u17jmpwgPrOz5jAF2+3FA7PdYG8fuPQaX5jAGAV/39MCmdy/e/RGz/vj5/f/rAXj4//z13n52i5qmmFQ1lqOQaTgIBAYKEAYAKGjtAgAAAKNJREFUGBkFwT0uRGEYBtD3ZJ77uT8iGrXCAixCr7OCyRA2oCKqiUYkOgoJwhqUbMAKLEChVYhk4pxswvcWfFGVEbYtuJutqir9Ibc0uh0+V+mf5gY69yN2PzKJiTjCg8qa3uLRAJpKM9AMoL1VOi9zJ4CQ9z0jwHX+RAwAURUxAMSB/L7u35wCGlKaHrDkPGVmwhlc6FN6l1iHKxupn+djAPgHrEwa+qrzy0oAAAAASUVORK5CYII=',
        },
        {
          name: 'Cimeo',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAAIdZUKh6sLlLkLmr4LmsAMp88NrdYVW3MZj7Acstkrt9s1e5E7vN5EfI9JvdtKwuBijp5kpbl30eiDt8aG1uqRr7qTyNehxM+k4PCy3enB3OTg6Ovv9PXw+fz////L9U5WAAAAAXRSTlMAQObYZgAAAIFJREFUeNplz90OwiAMBWAQpAoyxclkP3je/y0H2AQXz0WT8100rRD6kNI9/cRroemQL3hXhoujZYj4OHoAmBvYGcBISwbWBvfXCrytnIDUQMkbsBpagMA7zhtQdyTFQAmIG7IkYniiZuh3XGsPqoOZkMOJOpAcLqUzNFGGu/57fwc1hgtp0mVSyQAAAABJRU5ErkJggg==',
        },
        {
          name: 'Vine',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAHCUExURQAAAAC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+jwC+j////54tRLAAAACUdFJOUwAAAEK+9/e+QQIDAwEqzskfUZmUNHz2mrT++V1w+f5tCanNFUDwfEjtjAyyvg027Hki27QMBJzaHE/1+FkNsN0iZvv6bxyAlB589lQeyud0KB8PQO+ZBUrc+eXgcRG/3CoATe316Wxw/P6BAgBt+fp4IAwh0d4zM9q7Fm76qi605EMSrvfX/PRtAivF9IAJNMLxhA2KYlJ9AAAAAWJLR0SVCGB6gwAAAAd0SU1FB+ACDRI2MOJd7FgAAADrSURBVBjTLY9VWwJgGEPfiYWBha2YYHcHditgd3d3odjdivvBfgK727nYsyPiCrw03j6+fv6AaAMCgyAI1lElJBQSFh6hBxDJqOiY2Lh4SEKiIQlITmFqWrqRJkhGJrOA7Bzm5uUXsBBSVMySUpSVs6KyqrqmFmKuY30D0NjU3NLa1t6h9jvZ1Q30WGi19fb1KzAwyKFhYGSUY+MTkwpMTXNmFpibX+Di0rICWFldW9/A5tb2zu7ePtTrg0MeHePklPYzuDRw7uDF5RWvbwC32O0d7x8en55f4DHF6xv5/vHp6f/k6/vH+evuf1LAObptvSvrAAAAAElFTkSuQmCC',
        },
        {
          name: 'Vocaroo',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAw9JREFUOE9jYMABuMwYmCyTJKUCGlSnFSy02TTzeOyCiQcDViX26qVz2TAyYtWmEMwuoZ3M7V40LcB79pHkc0svpvzY8jD//87nxf+3Pyn8v/ZO8v+VNyP/2mZJumI1QCWSI8232Hjumitlfw5+qPp/9l8TCt76JP//xkdx/wsXWCzjtWFkwTCkbWFe9plPk/+ga4Txz/xt/D/hkN//gMXif21a+NbyWjIwoRiy6GDT5rP/mlFsPfyp5n/NpOj/22+0gMUXXIz/H7hC/L/bFKFbPDZMrHAD5H35OPt2J9zacDv/f3V7xv9FhwrBGubsT/1//Pjx/1GJ/mD+/nfl/1v3Ovy3KRJNQbHdOlXCvOO03/+pm1P/v3v37n90hhtYw9HPtf8Xb2v937cmHswHeWPRxYj/LvkK3igGKARwicTO07118H3V/5kbi/4vPZMJtK3s/6YH2f+Pfq1B8VbjWrdnMu5s4nAD9CNFhKwz5DTUvLl419zKvAcLtG1P84BRl/b/5M/6/6f/NPzf/qzo84yj0Uus0xUU4Zor54bm9+4OfZG02OCuoAMTb9ZkC9ull1Nvrr2Z+XvRpaRfc65H/68F+jl9svEhzyLFWoccWVc+eyTHq/twydjlKRln7jX9bNMkMJnbhoFRL1xCqmKx6/yi2fYXa/c5/e846PV/5fW0/7OPx/yfcjzop34ulxdGGvDuU8mMXaX507lBuiN6ueadmQeT/p/93vf/1O+G//sP5fw/eL3o/5JLif8zVxs+Tlir9S26UyeFQQvJGBE7FvaFZ9LfN+1y+WjbItSb3GmXvXd15v8zroH/HxgE/D+aGPx/18vi/z07PeZNPRKxe/Kh0Ae8toxscCO4zBkYXArk9C1SxJUYjBkYPPIVtbbuTftz3cz//2O9wP/75iSAXdO72/dt2HL5F6YlfBW4MiJYXMiBiW3t7azHBx+V/t89N+H/8a+1//e9K/9attDp5LQjYX8SuvVL8RoAkmxa65299Erq1FnHo0qrl7t4BddriIs4MrM3rfWcFd+pGwVSAwBZ0bKP8yrZPAAAAABJRU5ErkJggg==',
        },
        {
          name: 'Youtube',
          data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABIklEQVQoz53LvUrDUBjG8bOoOammSf1IoBSvoCB4JeIqOHgBLt6AIMRBBQelWurQ2kERnMRBsBUcIp5FJSBI5oQsJVkkUHh8W0o5nhaFHvjBgef/Mq+Q46RJBMkI/vE+aOus956tnEswIZe1LV0QyJ5sE2GzgZfVMtRNIdiDpccEssdlB1mW4bvTwdvWJtRdErM7U+8S/FJykCRJX5qm+KpVce8UMNLRLbulz4iSjTAMh6Iowsd5BeNadp3nUF0VlxAEwZBotXC0Usa4ll3meZdA1iguwvf9vpvDA2wvmKgYGtSud8suDB4TyGr2PF49D/vra9jRZ1BVdknMzgwuCGSnZEObwu6sBnVTCHZiaC7BhFx2PKdxUidiAH/4lLo9Mv0DELVs9qsOHXwAAAAASUVORK5CYII=',
        },
      ]),
      '/* Link Title Favicons */\n' +
        Ae.map(
          ({ name: e, data: t }) =>
            `.linkify.${e}::before {\n  content: "";\n  background: transparent url('data:image/png;base64,${t}') center left no-repeat!important;\n  padding-left: 18px;\n}\n`
        ).join('') +
        '@supports (text-decoration-style: dashed) or (-moz-text-decoration-style: dashed){.quotelink.forwardlink,.backlink.forwardlink{text-decoration:underline;-moz-text-decoration-style:dashed;text-decoration-style:dashed;border-bottom:none}}'),
    report:
      '#g-recaptcha,:root:not(.js-enabled) #captchaContainerAlt{height:auto}#captchaContainerAlt td:nth-child(2){display:table-cell !important}#archive-report{padding:3px}#archive-report-enabled{vertical-align:middle}#archive-report>label{display:block}#archive-report-reason{display:block;width:98%}.archive-report-success{color:green}.archive-report-error{color:red}',
    www: '#captcha-cnt{height:auto}:root:not(.js-enabled) #form{display:block}#bd>div[style], #bd>div[style]>*{height:auto !important;margin:0 !important;font-size:0}',
    sub: function (e) {
      var t = { site: o.SITE.selectors }
      return e.replace(/\$[\w\$]+/g, function (e) {
        for (var o = e.slice(1).split('$'), n = t, a = 0; a < o.length; a++) {
          if ('object' != typeof n) return ':not(*)'
          n = Qe.getOwn(n, o[a])
        }
        return 'string' != typeof n ? ':not(*)' : n
      })
    },
  }
  var Ae
  const ve = {
      init() {
        if (t['Custom CSS']) return this.addStyle()
      },
      addStyle() {
        return (this.style = Qe.addStyle(
          be.sub(t.usercss),
          'custom-css',
          '#fourchanx-css'
        ))
      },
      rmStyle() {
        if (this.style) return Qe.rm(this.style), delete this.style
      },
      update() {
        return this.style
          ? (this.style.textContent = be.sub(t.usercss))
          : this.addStyle()
      },
    },
    we = {
      isOPContainerThread: !0,
      mayLackJSON: !0,
      threadModTimeIgnoresSage: !0,
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
        'Reply Pruning',
      ],
      detect() {
        for (var e of u('script:not([src])', a.head)) {
          var t
          if ((t = e.textContent.match(/\bvar configRoot=(".*?")/))) {
            var o = m()
            try {
              var n = JSON.parse(t[1])
              '/' === n[0]
                ? (o.root = location.origin + n)
                : /^https?:/.test(n) && (o.root = n)
            } catch (e) {}
            return o
          }
        }
        return !1
      },
      awaitBoard(e) {
        if (Qe.id('react-ui')) {
          const t = (this.selectors = Object.create(this.selectors))
          return (
            (t.boardFor = { index: '.page-container' }),
            (t.thread = 'div[id^="thread_"]'),
            jt.mounted(e)
          )
        }
        return e()
      },
      urls: {
        thread: ({ siteID: e, boardID: o, threadID: n }, a) =>
          `${t.siteProperties[e]?.root || `http://${e}/`}${o}/${
            a ? 'archive/' : ''
          }res/${n}.html`,
        post: ({ postID: e }) => `#${e}`,
        index: ({ siteID: e, boardID: o }) =>
          `${t.siteProperties[e]?.root || `http://${e}/`}${o}/`,
        catalog: ({ siteID: e, boardID: o }) =>
          `${t.siteProperties[e]?.root || `http://${e}/`}${o}/catalog.html`,
        threadJSON({ siteID: e, boardID: o, threadID: n }, a) {
          const i = t.siteProperties[e]?.root
          return i ? `${i}${o}/${a ? 'archive/' : ''}res/${n}.json` : ''
        },
        archivedThreadJSON: e => we.urls.threadJSON(e, !0),
        threadsListJSON({ siteID: e, boardID: o }) {
          const n = t.siteProperties[e]?.root
          return n ? `${n}${o}/threads.json` : ''
        },
        archiveListJSON({ siteID: e, boardID: o }) {
          const n = t.siteProperties[e]?.root
          return n ? `${n}${o}/archive/archive.json` : ''
        },
        catalogJSON({ siteID: e, boardID: o }) {
          const n = t.siteProperties[e]?.root
          return n ? `${n}${o}/catalog.json` : ''
        },
        file: ({ siteID: e, boardID: o }, n) =>
          `${t.siteProperties[e]?.root || `http://${e}/`}${o}/${n}`,
        thumb: (e, t) => we.urls.file(e, t),
      },
      selectors: {
        board: 'form[name="postcontrols"]',
        thread: 'input[name="board"] ~ div[id^="thread_"]',
        threadDivider: 'div[id^="thread_"] > hr:last-child',
        summary: '.omitted',
        postContainer: 'div[id^="reply_"]:not(.hidden)',
        opBottom: '.op',
        replyOriginal: 'div[id^="reply_"]:not(.hidden)',
        infoRoot: '.intro',
        info: {
          subject: '.subject',
          name: '.name',
          email: '.email',
          tripcode: '.trip',
          uniqueID: '.poster_id',
          capcode: '.capcode',
          flag: '.flag',
          date: 'time',
          nameBlock: 'label',
          quote: 'a[href*="#q"]',
          reply: 'a[href*="/res/"]:not([href*="#"])',
        },
        icons: { isSticky: '.fa-thumb-tack', isClosed: '.fa-lock' },
        file: {
          text: '.fileinfo',
          link: '.fileinfo > a',
          thumb: 'a > .post-image',
        },
        thumbLink: '.file > a',
        multifile: '.files > .file',
        highlightable: { op: ' > .op', reply: '.reply', catalog: ' > .thread' },
        comment: '.body',
        spoiler: '.spoiler',
        quotelink: 'a[onclick*="highlightReply("]',
        catalog: { board: '#Grid', thread: '.mix', thumb: '.thread-image' },
        boardList: '.boardlist',
        boardListBottom: '.boardlist.bottom',
        styleSheet: '#stylesheet',
        psa: '.blotter',
        nav: {
          prev: '.pages > form > [value=Previous]',
          next: '.pages > form > [value=Next]',
        },
      },
      classes: { highlight: 'highlighted' },
      xpath: {
        thread: 'div[starts-with(@id,"thread_")]',
        postContainer:
          'div[starts-with(@id,"reply_") or starts-with(@id,"thread_")]',
        replyContainer: 'div[starts-with(@id,"reply_")]',
      },
      regexp: {
        quotelink: new RegExp('/([^/]+)/res/(\\d+)(?:\\.\\w+)?#(\\d+)$'),
        quotelinkHTML:
          /<a [^>]*\bhref="[^"]*\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)"/g,
      },
      Build: {
        parseJSON(e, t) {
          const o = this.parseJSON(e, t)
          if (
            ('deleted' === e.ext &&
              (delete o.file,
              Qe.extend(o, { files: [], fileDeleted: !0, filesDeleted: [0] })),
            e.extra_files)
          ) {
            let n
            for (let a = 0; a < e.extra_files.length; a++) {
              'deleted' === e.extra_files[a].ext
                ? o.filesDeleted.push(a)
                : ((n = this.parseJSONFile(e, t)), o.files.push(n))
            }
            o.files.length && (o.file = o.files[0])
          }
          return o
        },
        parseComment: e => (
          (e = e.replace(/<br\b[^<]*>/gi, '\n').replace(/<[^>]*>/g, '')),
          Qe.unescape(e)
        ),
      },
      bgColoredEl: () => Qe.el('div', { className: 'post reply' }),
      isFileURL: e => /\/src\/[^\/]+/.test(e.pathname),
      preParsingFixes(e) {
        let t
        if ((t = Qe('a > input[name="board"]', e)))
          return Qe.before(t.parentNode, t)
      },
      parseNodes(e, t) {
        let o
        if (t.uniqueID) return
        let n = '',
          a = t.nameBlock.nextSibling
        for (; a && 3 === a.nodeType; )
          (n += a.textContent), (a = a.nextSibling)
        if ((o = n.match(/(\s*ID:\s*)(\S+)/))) {
          let e
          t.info.normalize()
          let { nextSibling: n } = t.nameBlock
          return (
            (n = n.splitText(o[1].length)),
            n.splitText(o[2].length),
            (t.uniqueID = e = Qe.el('span', { className: 'poster_id' })),
            Qe.replace(n, e),
            Qe.add(e, n)
          )
        }
      },
      parseDate(e) {
        let t = Date.parse(e.getAttribute('datetime')?.trim())
        return isNaN(t)
          ? ((t = Date.parse(e.textContent.trim() + ' UTC')),
            isNaN(t) ? void 0 : new Date(t))
          : new Date(t)
      },
      parseFile(e, t) {
        let o, n
        const { text: a, link: i, thumb: r } = t
        if (
          Qe.x(`ancestor::${this.xpath.postContainer}[1]`, a) !== e.nodes.root
        )
          return !1
        if (
          !(n = i.nextSibling?.textContent.includes('(')
            ? i.nextSibling
            : i.nextElementSibling)
        )
          return !1
        if (!(o = n.textContent.match(/\((.*,\s*)?([\d.]+ ?[KMG]?B).*\)/)))
          return !1
        const s = Qe('.postfilename', a)
        return (
          Qe.extend(t, {
            name: s ? s.title || s.textContent : i.pathname.match(/[^/]*$/)[0],
            size: o[2],
            dimensions: o[0].match(/\d+x\d+/)?.[0],
          }),
          r &&
            Qe.extend(t, {
              thumbURL:
                /\/static\//.test(r.src) && Qe.isImage(i.href) ? i.href : r.src,
              isSpoiler:
                /^Spoiler/i.test(o[1] || '') ||
                'Spoiler Image' === i.textContent,
            }),
          !0
        )
      },
      isThumbExpanded: e =>
        Qe.hasClass(e.thumb.parentNode, 'expanded') ||
        'true' === e.thumb.parentNode.dataset.expanded,
      isLinkified: e => /\bnofollow\b/.test(e.rel),
      catalogPin: e => (e.dataset.sticky = 'true'),
    },
    xe = le(
      'div',
      { class: 'box-inner' },
      le(
        'div',
        { class: 'boxbar' },
        le(
          'h2',
          null,
          'Trouble buying a 4chan Pass? (a message from 4chan X)',
          le(
            'a',
            {
              href: 'javascript:;',
              style: 'text-decoration: none; float: right; margin-right: 4px;',
              title: 'Close',
            },
            '×'
          )
        )
      ),
      le(
        'div',
        { class: 'boxcontent' },
        'Check the 4chan X wiki for ',
        le(
          'a',
          {
            href: `${e.captchaFAQ}#alternatives`,
            target: '_blank',
            rel: 'noopener',
          },
          'alternative solutions'
        ),
        '.'
      )
    ),
    ye = {
      init() {
        if (t.passMessageClosed) return
        const e = Qe.el('div', { className: 'box-outer top-box' }, xe)
        e.style.cssText = 'padding-bottom: 0;'
        const o = Qe('a', e)
        return (
          Qe.on(o, 'click', function () {
            return Qe.rm(e), Qe.set('passMessageClosed', !0)
          }),
          Qe.ready(function () {
            let t
            return (t = Qe.id('hd')) ? Qe.after(t, e) : Qe.prepend(a.body, e)
          })
        )
      },
    }
  var ke = {
    init() {
      let e
      if ((e = location.search.match(/\bno=(\d+)/)))
        return $e.replace.init(), (this.postID = +e[1]), Qe.ready(this.ready)
    },
    ready: () => (
      Qe.addStyle(be.report),
      t['Archive Report'] && ke.archive(),
      new MutationObserver(function () {
        return (
          ke.fit('iframe[src^="https://www.google.com/recaptcha/api2/frame"]'),
          ke.fit('body')
        )
      }).observe(a.body, { childList: !0, attributes: !0, subtree: !0 }),
      ke.fit('body')
    ),
    fit(e) {
      let t
      if (!(t = Qe(e, doc)) || 'hidden' === getComputedStyle(t).visibility)
        return
      const o = t.getBoundingClientRect().bottom - doc.clientHeight + 8
      return o > 0 ? window.resizeBy(0, o) : void 0
    },
    archive() {
      let e, t
      if (!(t = et.report(o.BOARD.ID)).length) return
      const n = Qe('form'),
        a = Qe.id('reportTypes'),
        i = Qe('h3'),
        r = Qe.el(
          'fieldset',
          { id: 'archive-report', hidden: !0 },
          {
            innerHTML:
              '<legend><label><input id="archive-report-enabled" type="checkbox">Report illegal content to archives</label></legend>\n<label for="archive-report-reason">Details</label>\n<textarea id="archive-report-reason" disabled>Illegal content</textarea>\n<button id="archive-report-submit" hidden>Submit</button>\n',
          }
        ),
        s = Qe('#archive-report-enabled', r),
        l = Qe('#archive-report-reason', r),
        d = Qe('#archive-report-submit', r)
      if (
        (Qe.on(s, 'change', function () {
          return (l.disabled = !this.checked)
        }),
        n && a
          ? ((r.hidden = !Qe('[value="31"]', a).checked),
            Qe.on(a, 'change', function (e) {
              return (r.hidden = '31' !== e.target.value), ke.fit('body')
            }),
            Qe.after(a, r),
            ke.fit('body'),
            Qe.one(n, 'submit', function (e) {
              if (!r.hidden && s.checked)
                return (
                  e.preventDefault(),
                  ke.archiveSubmit(
                    t,
                    l.value,
                    e => (
                      (this.action =
                        '#archiveresults=' +
                        encodeURIComponent(JSON.stringify(e))),
                      this.submit()
                    )
                  )
                )
            }))
          : i &&
            ((r.hidden = /Report submitted!/.test(i.textContent)),
            Qe.on(s, 'change', function () {
              return (d.hidden = !this.checked)
            }),
            Qe.after(i, r),
            Qe.on(d, 'click', () =>
              ke.archiveSubmit(t, l.value, ke.archiveResults)
            )),
        (e = location.hash.match(/^#archiveresults=(.*)$/)))
      )
        try {
          return ke.archiveResults(JSON.parse(decodeURIComponent(e[1])))
        } catch (e) {}
    },
    archiveSubmit(e, t, n) {
      const a = Qe.formData({ board: o.BOARD.ID, num: ke.postID, reason: t }),
        i = []
      for (var [r, s] of e)
        !(function (t, o) {
          Qe.ajax(o, {
            onloadend() {
              if (
                (i.push([t, this.response || { error: '' }]),
                i.length === e.length)
              )
                return n(i)
            },
            form: a,
          })
        })(r, s)
    },
    archiveResults(e) {
      const t = Qe.id('archive-report')
      for (var [o, n] of e) {
        var i = Qe.el('h3', { className: 'archive-report-response' })
        'success' in n
          ? (Qe.addClass(i, 'archive-report-success'),
            (i.textContent = `${o}: ${n.success}`))
          : (Qe.addClass(i, 'archive-report-error'),
            (i.textContent = `${o}: ${n.error || 'Error reporting post.'}`)),
          t ? Qe.before(t, i) : Qe.add(a.body, i)
      }
    },
  }
  const Ie = {
    init() {
      if (t['Remember Your Posts']) return Qe.ready(this.ready)
    },
    ready() {
      if ('Post successful!' !== a.title) return
      let [e, t, n] = Qe('h1').nextSibling.textContent.match(
        /thread:(\d+),no:(\d+)/
      )
      ;(n = +n), (t = +t || n)
      return new y('yourPosts').set({
        boardID: o.BOARD.ID,
        threadID: t,
        postID: n,
        val: !0,
      })
    },
  }
  const Ce = {
      isOPContainerThread: !1,
      hasIPCount: !0,
      archivedBoardsKnown: !0,
      urls: {
        thread: ({ boardID: e, threadID: t }) =>
          `${location.protocol}//${Y.domain(e)}/${e}/thread/${t}`,
        post: ({ postID: e }) => `#p${e}`,
        index: ({ boardID: e }) => `${location.protocol}//${Y.domain(e)}/${e}/`,
        catalog: ({ boardID: e }) =>
          'f' === e
            ? void 0
            : `${location.protocol}//${Y.domain(e)}/${e}/catalog`,
        archive: ({ boardID: e }) =>
          Y.isArchived(e)
            ? `${location.protocol}//${Y.domain(e)}/${e}/archive`
            : void 0,
        threadJSON: ({ boardID: e, threadID: t }) =>
          `${location.protocol}//a.4cdn.org/${e}/thread/${t}.json`,
        threadsListJSON: ({ boardID: e }) =>
          `${location.protocol}//a.4cdn.org/${e}/threads.json`,
        archiveListJSON: ({ boardID: e }) =>
          Y.isArchived(e)
            ? `${location.protocol}//a.4cdn.org/${e}/archive.json`
            : '',
        catalogJSON: ({ boardID: e }) =>
          `${location.protocol}//a.4cdn.org/${e}/catalog.json`,
        file({ boardID: e }, t) {
          const o = 'f' === e ? O.flashHost() : O.host()
          return `${location.protocol}//${o}/${e}/${t}`
        },
        thumb: ({ boardID: e }, t) =>
          `${location.protocol}//${O.thumbHost()}/${e}/${t}`,
      },
      isPrunedByAge: ({ boardID: e }) => 'f' === e,
      areMD5sDeferred: ({ boardID: e }) => 'f' === e,
      isOnePage: ({ boardID: e }) => 'f' === e,
      noAudio: ({ boardID: e }) => Y.noAudio(e),
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
          reply: '.replylink',
        },
        icons: {
          isSticky: '.stickyIcon',
          isClosed: '.closedIcon',
          isArchived: '.archivedIcon',
        },
        file: {
          text: '.file > :first-child',
          link: '.fileText > a',
          thumb: 'a.fileThumb > [data-md5]',
        },
        thumbLink: 'a.fileThumb',
        highlightable: { op: '.opContainer', reply: ' > .reply', catalog: '' },
        comment: '.postMessage',
        spoiler: 's',
        quotelink: ':not(pre) > .quotelink',
        catalog: { board: '#threads', thread: '.thread', thumb: '.thumb' },
        boardList: '#boardNavDesktop > .boardList',
        boardListBottom: '#boardNavDesktopFoot > .boardList',
        styleSheet: 'link[title=switch]',
        psa: '#globalMessage',
        psaTop: '#globalToggle',
        searchBox: '#search-box',
        nav: {
          prev: '.prev > form > [type=submit]',
          next: '.next > form > [type=submit]',
        },
      },
      classes: { highlight: 'highlight' },
      xpath: {
        thread: 'div[contains(concat(" ",@class," ")," thread ")]',
        postContainer: 'div[contains(@class,"postContainer")]',
        replyContainer: 'div[contains(@class,"replyContainer")]',
      },
      regexp: {
        quotelink: new RegExp(
          '^https?://boards\\.4chan(?:nel)?\\.org/+([^/]+)/+thread/+(\\d+)(?:[/?][^#]*)?(?:#p(\\d+))?$'
        ),
        quotelinkHTML:
          /<a [^>]*\bhref="(?:(?:\/\/boards\.4chan(?:nel)?\.org)?\/([^\/]+)\/thread\/)?(\d+)?(?:#p(\d+))?"/g,
        pass: /^https?:\/\/www\.4chan(?:nel)?\.org\/+pass(?:$|[?#])/,
        captcha: /^https?:\/\/sys\.4chan(?:nel)?\.org\/+captcha(?:$|[?#])/,
      },
      bgColoredEl: () => Qe.el('div', { className: 'reply' }),
      isThisPageLegit: () =>
        ['boards.4chan.org', 'boards.4channel.org'].includes(
          location.hostname
        ) &&
        a.doctype &&
        !Qe('link[href*="favicon-status.ico"]', a.head) &&
        ![
          '4chan - Temporarily Offline',
          '4chan - Error',
          '504 Gateway Time-out',
          'MathJax Equation Source',
        ].includes(a.title),
      is404: () =>
        ['4chan - Temporarily Offline', '4chan - 404 Not Found'].includes(
          a.title
        ) ||
        ('thread' === o.VIEW && Qe('.board') && !Qe('.opContainer')),
      isIncomplete: () =>
        ['index', 'thread'].includes(o.VIEW) && !Qe('.board + *'),
      isBoardlessPage: e =>
        ['www.4chan.org', 'www.4channel.org'].includes(e.hostname),
      isAuxiliaryPage: e =>
        !['boards.4chan.org', 'boards.4channel.org'].includes(e.hostname),
      isFileURL: e => O.test(e.hostname),
      initAuxiliary() {
        switch (location.hostname) {
          case 'www.4chan.org':
          case 'www.4channel.org':
            return void (Ce.regexp.pass.test(location.href)
              ? ye.init()
              : (Qe.onExists(i, 'body', () => Qe.addStyle(be.www)),
                $e.replace.init()))
          case 'sys.4chan.org':
          case 'sys.4channel.org':
            var e = location.pathname.split(/\/+/)
            if ('imgboard.php' === e[2]) {
              let e
              ;/\bmode=report\b/.test(location.search)
                ? ke.init()
                : (e = location.search.match(/\bres=(\d+)/)) &&
                  Qe.ready(function () {
                    if (
                      t['404 Redirect'] &&
                      'Error: Specified thread does not exist.' ===
                        Qe.id('errmsg')?.textContent
                    )
                      return et.navigate('thread', {
                        boardID: o.BOARD.ID,
                        postID: +e[1],
                      })
                  })
            } else 'post' === e[2] && Ie.init()
            return
        }
      },
      scriptData() {
        for (var e of u('script:not([src])', a.head))
          if (/\bcooldowns *=/.test(e.textContent)) return e.textContent
        return ''
      },
      parseThreadMetadata(e) {
        let t
        const n = this.scriptData()
        if (
          ((e.postLimit = /\bbumplimit *= *1\b/.test(n)),
          (e.fileLimit = /\bimagelimit *= *1\b/.test(n)),
          (e.ipCount = (t = n.match(/\bunique_ips *= *(\d+)\b/))
            ? +t[1]
            : void 0),
          'f' === o.BOARD.ID && e.OP.file)
        ) {
          const { file: t } = e.OP
          return Qe.ajax(
            this.urls.threadJSON({ boardID: 'f', threadID: e.ID }),
            {
              timeout: A,
              onloadend() {
                if (this.response)
                  return (t.text.dataset.md5 = t.MD5 =
                    this.response.posts[0].md5)
              },
            }
          )
        }
      },
      parseNodes(e, t) {
        if ('f' === e.boardID)
          return (() => {
            const e = []
            for (var o of ['Sticky', 'Closed']) {
              var n
              ;(n = Qe(`img[alt=${o}]`, t.info)) &&
                e.push(Qe.addClass(n, `${o.toLowerCase()}Icon`, 'retina'))
            }
            return e
          })()
      },
      parseDate: e => new Date(1e3 * e.dataset.utc),
      parseFile(e, t) {
        let o
        const { text: n, link: a, thumb: i } = t
        if (!(o = a.nextSibling?.textContent.match(/\(([\d.]+ [KMG]?B).*\)/)))
          return !1
        if (
          (Qe.extend(t, {
            name: n.title || a.title || a.textContent,
            size: o[1],
            dimensions: o[0].match(/\d+x\d+/)?.[0],
            tag: o[0].match(/,[^,]*, ([a-z]+)\)/i)?.[1],
            MD5: n.dataset.md5,
          }),
          i &&
            (Qe.extend(t, {
              thumbURL: i.src,
              MD5: i.dataset.md5,
              isSpoiler: Qe.hasClass(i.parentNode, 'imgspoiler'),
            }),
            t.isSpoiler))
        ) {
          let o
          t.thumbURL = (o = a.href.match(/\d+(?=\.\w+$)/))
            ? `${location.protocol}//${O.thumbHost()}/${e.board}/${o[0]}s.jpg`
            : void 0
        }
        return !0
      },
      cleanComment(e) {
        let t
        if ((t = Qe('.abbr', e))) {
          for (var o of u('.abbr + br, .exif', e)) Qe.rm(o)
          for (let e = 0; e < 2; e++) {
            var n
            ;(n = t.previousSibling) && 'BR' === n.nodeName && Qe.rm(n)
          }
          return Qe.rm(t)
        }
      },
      cleanCommentDisplay(e) {
        let t
        return (
          (t = Qe('b', e)) && /^Rolled /.test(t.textContent) && Qe.rm(t),
          Qe.rm(Qe('.fortune', e))
        )
      },
      insertTags(e) {
        let t
        for (t of u('s, .removed-spoiler', e))
          Qe.replace(t, [
            Qe.tn('[spoiler]'),
            ...t.childNodes,
            Qe.tn('[/spoiler]'),
          ])
        for (t of u('.prettyprint', e))
          Qe.replace(t, [Qe.tn('[code]'), ...t.childNodes, Qe.tn('[/code]')])
      },
      hasCORS: e =>
        e.split('/').slice(0, 3).join('/') ===
        location.protocol + '//a.4cdn.org',
      sfwBoards: e => Y.sfwBoards(e),
      uidColor(e) {
        let t = 0,
          o = 0
        for (; o < 8; ) t = (t << 5) - t + e.charCodeAt(o++)
        return (t >> 8) & 16777215
      },
      isLinkified: e => O.test(e.hostname),
      testNativeExtension: () =>
        Qe.global(function () {
          if (window.Parser?.postMenuIcon) return (this.enabled = 'true')
        }),
      transformBoardList() {
        let e
        const t = [],
          o = () => Qe.el('span', { className: 'spacer' }),
          n = Qe.X(
            './/a|.//text()[not(ancestor::a)]',
            Qe(Ce.selectors.boardList)
          )
        let a = 0
        for (; (e = n.snapshotItem(a++)); )
          switch (e.nodeName) {
            case '#text':
              for (var i of e.nodeValue) {
                var r = Qe.el('span', { textContent: i })
                ' ' === i && (r.className = 'space'),
                  ']' === i && t.push(o()),
                  t.push(r),
                  '[' === i && t.push(o())
              }
              break
            case 'A':
              var s = e.cloneNode(!0)
              t.push(s)
          }
        return t
      },
      Build: {
        staticPath: '//s.4cdn.org/image/',
        gifIcon: window.devicePixelRatio >= 2 ? '@2x.gif' : '.gif',
        spoilerRange: Object.create(null),
        shortFilename(e) {
          const t = e.match(/\.?[^\.]*$/)[0]
          return e.length - t.length > 30
            ? `${
                e.match(/(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^]){0,25}/)[0]
              }(...)${t}`
            : e
        },
        spoilerThumb(e) {
          let t
          return (t = this.spoilerRange[e])
            ? `${this.staticPath}spoiler-${e}${Math.floor(
                1 + t * Math.random()
              )}.png`
            : `${this.staticPath}spoiler.png`
        },
        sameThread: (e, t) =>
          'thread' === o.VIEW && o.BOARD.ID === e && o.THREADID === +t,
        threadURL: (e, t) =>
          e !== o.BOARD.ID
            ? `//${Y.domain(e)}/${e}/thread/${t}`
            : 'thread' !== o.VIEW || +t !== o.THREADID
              ? `/${e}/thread/${t}`
              : '',
        postURL(e, t, o) {
          return `${this.threadURL(e, t)}#p${o}`
        },
        parseJSON(e, { siteID: t, boardID: o }) {
          const n = {
            ID: e.no,
            postID: e.no,
            threadID: e.resto || e.no,
            boardID: o,
            siteID: t,
            isReply: !!e.resto,
            isSticky: !!e.sticky,
            isClosed: !!e.closed,
            isArchived: !!e.archived,
            fileDeleted: !!e.filedeleted,
            filesDeleted: e.filedeleted ? [0] : [],
          }
          for (var a in ((n.info = {
            subject: Qe.unescape(e.sub),
            email: Qe.unescape(e.email),
            name: Qe.unescape(e.name) || '',
            tripcode: e.trip,
            pass: null != e.since4pass ? `${e.since4pass}` : void 0,
            uniqueID: e.id,
            flagCode: e.country,
            flagCodeTroll: e.board_flag,
            flag: Qe.unescape(e.country_name || e.flag_name),
            dateUTC: e.time,
            dateText: e.now,
            commentHTML: { innerHTML: e.com || '', [ie]: !0 },
          }),
          e.capcode &&
            ((n.info.capcode = e.capcode
              .replace(/_highlight$/, '')
              .replace(/_/g, ' ')
              .replace(/\b\w/g, e => e.toUpperCase())),
            (n.capcodeHighlight = /_highlight$/.test(e.capcode)),
            delete n.info.uniqueID),
          (n.files = []),
          e.ext &&
            ((n.file = this.parseJSONFile(e, { siteID: t, boardID: o })),
            n.files.push(n.file)),
          (n.extra = m()),
          e))
            'x' === a[0] && (n.extra[a] = e[a])
          return n
        },
        parseJSONFile(e, { siteID: t, boardID: n }) {
          const a = o.sites[t],
            i =
              'yotsuba' === a.software && 'f' === n
                ? `${encodeURIComponent(e.filename)}${e.ext}`
                : `${e.tim}${e.ext}`,
            r = {
              name: Qe.unescape(e.filename) + e.ext,
              url: a.urls.file({ siteID: t, boardID: n }, i),
              height: e.h,
              width: e.w,
              MD5: e.md5,
              size: Qe.bytesToString(e.fsize),
              thumbURL: a.urls.thumb(
                { siteID: t, boardID: n },
                `${e.tim}s.jpg`
              ),
              theight: e.tn_h,
              twidth: e.tn_w,
              isSpoiler: !!e.spoiler,
              tag: e.tag,
              hasDownscale: !!e.m_img,
            }
          return (
            null == e.h ||
              /\.pdf$/.test(r.url) ||
              (r.dimensions = `${r.width}x${r.height}`),
            r
          )
        },
        parseComment: e => (
          (e = e
            .replace(/<br\b[^<]*>/gi, '\n')
            .replace(/\n\n<span\b[^<]* class="abbr"[^]*$/i, '')
            .replace(/<[^>]*>/g, '')),
          Qe.unescape(e)
        ),
        parseCommentDisplay(e) {
          if (!t['Remove Spoilers'] && !t['Reveal Spoilers']) {
            let t
            for (
              ;
              (t = e.replace(/<s>(?:(?!<\/?s>).)*<\/s>/g, '[spoiler]')) !== e;

            )
              e = t
          }
          return (
            (e = e
              .replace(/^<b\b[^<]*>Rolled [^<]*<\/b>/i, '')
              .replace(/<span\b[^<]* class="fortune"[^]*$/i, '')),
            this.parseComment(e).trim().replace(/\s+$/gm, '')
          )
        },
        postFromObject(e, t) {
          const n = this.parseJSON(e, { boardID: t, siteID: o.SITE.ID })
          return this.post(n)
        },
        post(e) {
          const { ID: t, threadID: n, boardID: a, file: i } = e,
            {
              subject: r,
              email: s,
              name: l,
              tripcode: d,
              capcode: c,
              pass: h,
              uniqueID: p,
              flagCode: g,
              flagCodeTroll: f,
              flag: m,
              dateUTC: b,
              dateText: A,
              commentHTML: v,
            } = e.info,
            { staticPath: w, gifIcon: x } = this
          let y, k, I
          if (c)
            if (((I = c.toLowerCase()), 'Founder' === c))
              (k = 'the Founder'), (y = "4chan's Founder")
            else if ('Verified' === c) (k = 'Verified Users'), (y = '')
            else {
              const e =
                Qe.getOwn({ Admin: 'Administrator', Mod: 'Moderator' }, c) || c
              ;(k = `${e}s`), (y = `a 4chan ${e}`)
            }
          const C = this.threadURL(a, n),
            D = (function (
              e,
              t,
              n,
              a,
              i,
              r,
              s,
              l,
              d,
              c,
              h,
              u,
              p,
              g,
              f,
              m,
              b,
              A,
              v,
              w,
              x,
              y,
              k
            ) {
              const I = [le('span', { class: 'name' + (a ? ' ' + a : '') }, r)]
              s && I.push(' ', le('span', { class: 'postertrip' }, s)),
                l &&
                  I.push(
                    ' ',
                    le('span', { title: `Pass user since ${l}`, class: 'n-pu' })
                  ),
                a &&
                  I.push(
                    ' ',
                    le(
                      'strong',
                      {
                        class: `capcode hand id_${d}`,
                        title: `Highlight posts by ${c}`,
                      },
                      '## ',
                      a
                    )
                  )
              const C = i
                ? [
                    ' ',
                    le('a', { href: `mailto:${i}`, class: 'useremail' }, ...I),
                  ]
                : I
              ;('f' === y && !t.isReply) || p || C.push(' '),
                p &&
                  (C.push(
                    le('img', {
                      src: `${h}${d}icon${u}`,
                      alt: `${a} Icon}`,
                      title: `This user is ${p}.`,
                      class: 'identityIcon retina',
                    })
                  ),
                  g &&
                    !a &&
                    C.push(
                      le(
                        'span',
                        { class: `posteruid id_${g}` },
                        '(ID: ',
                        le(
                          'span',
                          {
                            class: 'hand',
                            title: 'Highlight posts by this ID',
                          },
                          '$',
                          g
                        ),
                        ')'
                      )
                    )),
                m &&
                  C.push(
                    ' ',
                    le('span', {
                      title: f,
                      class: `flag flag-${m.toLowerCase()}`,
                    })
                  ),
                b &&
                  C.push(
                    ' ',
                    le('span', {
                      title: f,
                      class: `bfl bfl-${b.toLowerCase()}`,
                    })
                  )
              const D = [
                le('a', { href: w, title: 'Link to this post' }, 'No.'),
                le('a', { href: x, title: 'Reply to this post' }, e),
              ]
              if (t.isSticky) {
                const e = `${h}sticky${u}`
                D.push(' '),
                  'f' === y
                    ? D.push(
                        le('img', {
                          src: e,
                          alt: 'Sticky',
                          title: 'Sticky',
                          style: 'height: 18px; width: 18px;',
                        })
                      )
                    : D.push(
                        le('img', {
                          src: e,
                          alt: 'Sticky',
                          title: 'Sticky',
                          class: 'stickyIcon retina',
                        })
                      )
              }
              if (t.isClosed && !t.isArchived) {
                D.push(' ')
                const e = `${h}closed${u}`
                'f' === y
                  ? D.push(
                      le('img', {
                        src: e,
                        alt: 'Closed',
                        title: 'Closed',
                        style: 'height: 18px; width: 18px;',
                      })
                    )
                  : D.push(
                      le('img', {
                        src: e,
                        alt: 'Closed',
                        title: 'Closed',
                        class: 'closedIcon retina',
                      })
                    )
              }
              return (
                t.isArchived &&
                  D.push(
                    ' ',
                    le('img', {
                      src: `${h}archived${u}`,
                      alt: 'Archived',
                      title: 'Archived',
                      class: 'archivedIcon retina',
                    })
                  ),
                t.isReply ||
                  'index' !== o.VIEW ||
                  (D.push('   '),
                  D.push(
                    le(
                      'span',
                      null,
                      '[',
                      le(
                        'a',
                        { href: `/${y}/thread/${k}`, class: 'replylink' },
                        'Reply'
                      ),
                      ']'
                    )
                  )),
                le(
                  'div',
                  { class: 'postInfo desktop', id: `pi${e}` },
                  le('input', { type: 'checkbox', name: e, value: 'delete' }),
                  ' ',
                  ...(!t.isReply || 'f' === y || n
                    ? [le('span', { class: 'subject' }, n), ' ']
                    : []),
                  le('span', { class: `nameBlock${a || ''}` }, ...C),
                  ' ',
                  le('span', { 'class': 'dateTime', 'data-utc': A }, v),
                  ' ',
                  le(
                    'span',
                    {
                      class:
                        'postNum' + (' f' !== y || t.isReply ? ' desktop' : ''),
                    },
                    ...D
                  )
                )
              )
            })(
              t,
              e,
              r,
              c,
              s,
              l,
              d,
              h,
              I,
              k,
              w,
              x,
              y,
              p,
              m,
              g,
              f,
              b,
              A,
              `${C}#p${t}`,
              this.sameThread(a, n)
                ? `javascript:quote('${+t}');`
                : `${C}#q${t}`,
              a,
              n
            )
          let E, S, T, R
          i &&
            ((E = /^https?:(?=\/\/i\.4cdn\.org\/)/),
            (S = i.url.replace(E, '')),
            (T = this.shortFilename(i.name)),
            (R = i.isSpoiler
              ? this.spoilerThumb(a)
              : i.thumbURL.replace(E, '')))
          const B = (function (e, t, o, n, a, i, r, s, l) {
              if (e) {
                const r = []
                return (
                  'f' === o
                    ? r.push(
                        le(
                          'div',
                          { 'class': 'fileInfo', 'data-md5': e.MD5 },
                          le(
                            'span',
                            { class: 'fileText', id: `fT${t}` },
                            'File: ',
                            le(
                              'a',
                              {
                                'data-width': e.width,
                                'data-height': e.height,
                                'href': n,
                                'target': '_blank',
                              },
                              e.name
                            ),
                            '-(',
                            e.size,
                            ', ',
                            e.dimensions,
                            e.tag ? ', ' + e.tag : '',
                            ')'
                          )
                        )
                      )
                    : r.push(
                        le(
                          'div',
                          {
                            class: 'fileText',
                            id: `fT${t}`,
                            title: e.isSpoiler ? e.name : null,
                          },
                          'File: ',
                          le(
                            'a',
                            {
                              title:
                                e.name === a || e.isSpoiler ? null : e.name,
                              href: n,
                              target: '_blank',
                            },
                            e.isSpoiler ? 'Spoiler Image' : a
                          ),
                          ` (${e.size}, ${e.dimensions || 'PDF'})`
                        ),
                        le(
                          'a',
                          {
                            'class':
                              'fileThumb' + (e.isSpoiler ? ' imgspoiler' : ''),
                            'href': n,
                            'target': '_blank',
                            'data-m': e.hasDownscale ? '' : null,
                          },
                          le('img', {
                            'src': i,
                            'alt': e.size,
                            'data-md5': e.MD5,
                            'style': `height: ${
                              e.isSpoiler ? '100' : e.theight
                            }px; width: ${e.isSpoiler ? '100' : e.twidth}px;`,
                            'loading': 'lazy',
                          })
                        )
                      ),
                  le('div', { class: 'file', id: `f${t}` }, ...r)
                )
              }
              return r.fileDeleted
                ? le(
                    'div',
                    { class: 'file', id: `f${t}` },
                    le(
                      'span',
                      { class: 'fileThumb' },
                      le('img', {
                        src: `${s}filedeleted-res${l}`,
                        alt: 'File deleted.',
                        class: 'fileDeletedRes retina',
                      })
                    )
                  )
                : { innerHTML: '', [ie]: !0 }
            })(i, t, a, S, T, R, e, w, x),
            P = e.isReply ? 'reply' : 'op',
            M = le(
              se,
              null,
              e.isReply
                ? le('div', { class: 'sideArrows', id: `sa${t}` }, '>>')
                : '',
              le(
                'div',
                {
                  id: `p${t}`,
                  class: `post ${P}${
                    e.capcodeHighlight ? ' highlightPost' : ''
                  }`,
                },
                e.isReply ? le(se, null, D, B) : le(se, null, B, D),
                le('blockquote', { class: 'postMessage', id: `m${t}` }, v)
              )
            ),
            N = Qe.el('div', {
              className: `postContainer ${P}Container`,
              id: `pc${t}`,
            })
          for (var L of (Qe.extend(N, M), u('.quotelink', N))) {
            var F,
              O = L.getAttribute('href')
            if ('#' === O[0])
              this.sameThread(a, n) || (L.href = this.threadURL(a, n) + O)
            else
              (F = L.href.match(Ce.regexp.quotelink)) &&
                this.sameThread(F[1], F[2]) &&
                (L.href = O.match(/(#[^#]*)?$/)[0] || '#')
          }
          return N
        },
        summaryText(e, t, o) {
          let n = ''
          return (
            e && (n += `${e} `),
            (n += `${t} post${t > 1 ? 's' : ''}`),
            +o && (n += ` and ${o} image repl${o > 1 ? 'ies' : 'y'}`),
            n + ` ${'-' === e ? 'shown' : 'omitted'}.`
          )
        },
        summary(e, t, o, n) {
          return Qe.el('a', {
            className: 'summary',
            textContent: this.summaryText('', o, n),
            href: `/${e}/thread/${t}`,
          })
        },
        thread(e, t, o) {
          let n
          if (
            ((n = e.nodes.root)
              ? Qe.rmAll(n)
              : (e.nodes.root = n =
                  Qe.el('div', { className: 'thread', id: `t${t.no}` })),
            this.hat && Qe.add(n, this.hat.cloneNode(!1)),
            Qe.add(n, e.OP.nodes.root),
            t.omitted_posts || (!o && t.replies))
          ) {
            const [a, i] = o
                ? [
                    t.omitted_posts,
                    t.images - t.last_replies.filter(e => !!e.ext).length,
                  ]
                : [t.replies, t.images],
              r = this.summary(e.board.ID, t.no, a, i)
            Qe.add(n, r)
          }
          return n
        },
        catalogThread(e, o, n) {
          let a, i, r
          const { staticPath: s, gifIcon: l } = this,
            { tn_w: d, tn_h: c } = o
          if (o.spoiler && !t['Reveal Spoiler Thumbnails']) {
            let t
            ;(r = `${s}spoiler`),
              (t = this.spoilerRange[e.board]) &&
                (r += `-${e.board}` + Math.floor(1 + t * Math.random())),
              (r += '.png'),
              (i = 'spoiler-file'),
              (a = '--tn-w: 100; --tn-h: 100;')
          } else if (o.filedeleted)
            (r = `${s}filedeleted-res${l}`), (i = 'deleted-file')
          else if (e.OP.file) {
            r = e.OP.file.thumbURL
            const t = 250 / Math.max(d, c)
            a = `--tn-w: ${d * t}; --tn-h: ${c * t};`
          } else (r = `${s}nofile.png`), (i = 'no-file')
          const h = o.replies + 1,
            p = o.images + !!o.ext,
            g = Qe.el(
              'div',
              (function (e, t, o, n, a, i, r, s, l) {
                return le(
                  se,
                  null,
                  le(
                    'a',
                    {
                      class: 'catalog-link',
                      href: `/${e.board}/thread/${e.ID}`,
                    },
                    le(
                      'img',
                      o
                        ? { src: t, class: `catalog-thumb ${o}` }
                        : {
                            'src': t,
                            'class': 'catalog-thumb',
                            'data-width': n.tn_w,
                            'data-height': n.tn_h,
                          }
                    )
                  ),
                  le(
                    'div',
                    { class: 'catalog-stats' },
                    le(
                      'span',
                      { title: 'Posts / Files / Page' },
                      le(
                        'span',
                        {
                          class: 'post-count' + (n.bumplimit ? ' warning' : ''),
                        },
                        a
                      ),
                      ' / ',
                      le(
                        'span',
                        {
                          class:
                            'file-count' + (n.imagelimit ? ' warning' : ''),
                        },
                        i
                      ),
                      ' / ',
                      le('span', { class: 'page-count' }, r)
                    ),
                    le(
                      'span',
                      { class: 'catalog-icons' },
                      e.isSticky
                        ? le('img', {
                            src: `${s}sticky${l}`,
                            class: 'stickyIcon',
                            title: 'Sticky',
                          })
                        : '',
                      e.isClosed
                        ? le('img', {
                            src: `${s}closed${l}`,
                            class: 'closedIcon',
                            title: 'Closed',
                          })
                        : ''
                    )
                  )
                )
              })(e, r, i, o, h, p, n, s, l)
            )
          for (var f of (Qe.before(e.OP.nodes.info, [...g.childNodes]),
          u('br', e.OP.nodes.comment)))
            f.previousSibling &&
              'BR' === f.previousSibling.nodeName &&
              Qe.addClass(f, 'extra-linebreak')
          const m = Qe.el('div', {
            className: 'thread catalog-thread',
            id: `t${e}`,
          })
          return (
            e.OP.highlights && Qe.addClass(m, ...e.OP.highlights),
            e.OP.file || Qe.addClass(m, 'noFile'),
            (m.style.cssText = a || ''),
            m
          )
        },
        catalogReply(e, t) {
          let o = ''
          t.com &&
            (o = this.parseCommentDisplay(t.com)
              .replace(/>>\d+/g, '')
              .trim()
              .replace(/\n+/g, ' // ')),
            t.ext && (o || (o = `${Qe.unescape(t.filename)}${t.ext}`)),
            t.com &&
              (o || (o = Qe.unescape(t.com.replace(/<br\b[^<]*>/gi, ' // ')))),
            o || (o = ' '),
            o.length > 73 && (o = `${o.slice(0, 70)}...`)
          const n = this.postURL(e.board.ID, e.ID, t.no)
          return Qe.el(
            'div',
            { className: 'catalog-reply' },
            le(
              se,
              null,
              le(
                'span',
                null,
                le(
                  'time',
                  { 'data-utc': 1e3 * t.time, 'data-abbrev': '1' },
                  '...'
                ),
                ': '
              ),
              le('a', { class: 'catalog-reply-excerpt', href: n }, o),
              le('a', { class: 'catalog-reply-preview', href: n }, '...')
            )
          )
        },
      },
    },
    De = { tinyboard: we, yotsuba: Ce }
  var Ee = {
      init() {
        if (
          ['index', 'thread', 'archive'].includes(o.VIEW) &&
          t['File Info Formatting']
        )
          return l.Post.push({ name: 'File Info Formatting', cb: this.node })
      },
      node() {
        if (!this.file) return
        if (this.isClone) {
          let e
          for (e of u('.file-info .download-button', this.file.text))
            Qe.on(e, 'click', j.download)
          for (e of u('.file-info .quick-filter-md5', this.file.text))
            Qe.on(e, 'click', Ge.quickFilterMD5)
          return
        }
        const e = Qe.el('span', { className: 'fileText-original' })
        Qe.prepend(this.file.link.parentNode, e),
          Qe.add(e, [
            this.file.link.previousSibling,
            this.file.link,
            this.file.link.nextSibling,
          ])
        const o = Qe.el('span', { className: 'file-info' })
        return Ee.format(t.fileInfo, this, o), Qe.prepend(this.file.text, o)
      },
      format(e, t, o) {
        let a
        const i = []
        for (a of (e.replace(/%(.)|[^%]+/g, function (e, o) {
          return (
            i.push(
              Qe.hasOwn(Ee.formatters, o)
                ? Ee.formatters[o].call(t)
                : { innerHTML: n(e) }
            ),
            ''
          )
        }),
        Qe.extend(o, { innerHTML: n.cat(i) }),
        u('.download-button', o)))
          Qe.on(a, 'click', j.download)
        for (a of u('.quick-filter-md5', o))
          Qe.on(a, 'click', Ge.quickFilterMD5)
      },
      formatters: {
        't'() {
          return { innerHTML: n(this.file.url.match(/[^/]*$/)[0]), [ie]: !0 }
        },
        'T'() {
          return le(
            'a',
            { href: this.file.url, target: '_blank' },
            Ee.formatters.t.call(this)
          )
        },
        'l'() {
          return le(
            'a',
            { href: this.file.url, target: '_blank' },
            Ee.formatters.n.call(this)
          )
        },
        'L'() {
          return le(
            'a',
            { href: this.file.url, target: '_blank' },
            Ee.formatters.N.call(this)
          )
        },
        'n'() {
          const e = this.file.name,
            t = De.yotsuba.Build.shortFilename(this.file.name, this.isReply)
          return e === t
            ? { innerHTML: n(e), [ie]: !0 }
            : le(
                'span',
                { class: 'fnswitch' },
                le('span', { class: 'fntrunc' }, t),
                le('span', { class: 'fnfull' }, e)
              )
        },
        'N'() {
          return { innerHTML: n(this.file.name), [ie]: !0 }
        },
        'd'() {
          return le(
            'a',
            {
              href: this.file.url,
              download: this.file.name,
              class: 'download-button',
            },
            '📥︎'
          )
        },
        'f': () => ({
          innerHTML: '<a href="javascript:;" class="quick-filter-md5">✕</a>',
          [ie]: !0,
        }),
        'p'() {
          return { innerHTML: this.file.isSpoiler ? 'Spoiler, ' : '', [ie]: !0 }
        },
        's'() {
          return { innerHTML: n(this.file.size), [ie]: !0 }
        },
        'B'() {
          return {
            innerHTML: Math.round(this.file.sizeInBytes) + ' Bytes',
            [ie]: !0,
          }
        },
        'K'() {
          return {
            innerHTML: Math.round(this.file.sizeInBytes / 1024) + ' KB',
            [ie]: !0,
          }
        },
        'M'() {
          return {
            innerHTML:
              Math.round((this.file.sizeInBytes / 1048576) * 100) / 100 + ' MB',
            [ie]: !0,
          }
        },
        'r'() {
          return { innerHTML: n(this.file.dimensions || 'PDF'), [ie]: !0 }
        },
        'g'() {
          return {
            innerHTML: this.file.tag ? ', ' + n(this.file.tag) : '',
            [ie]: !0,
          }
        },
        '%': () => ({ innerHTML: '%', [ie]: !0 }),
      },
    },
    Se = {
      init() {
        ;['index', 'thread', 'archive'].includes(o.VIEW) &&
          t['Time Formatting'] &&
          l.Post.push({ name: 'Time Formatting', cb: this.node })
      },
      node() {
        if (!this.info.date || this.isClone) return
        const { textContent: e } = this.nodes.date
        this.nodes.date.textContent =
          e.match(/^\s*/)[0] +
          Se.format(t.time, this.info.date) +
          e.match(/\s*$/)[0]
      },
      format: (e, t) =>
        e.replace(/%(.)/g, function (e, o) {
          return Qe.hasOwn(Se.formatters, o) ? Se.formatters[o].call(t) : e
        }),
      zeroPad: e => (e < 10 ? `0${e}` : e),
      formatterCache: new Map(),
      formatters: {
        'a'() {
          let e = Se.formatterCache.get('a')
          return (
            e ||
              ((e = Intl.DateTimeFormat(t.timeLocale || void 0, {
                weekday: 'short',
              })),
              Se.formatterCache.set('a', e)),
            e.format(this)
          )
        },
        'A'() {
          let e = Se.formatterCache.get('A')
          return (
            e ||
              ((e = Intl.DateTimeFormat(t.timeLocale || void 0, {
                weekday: 'long',
              })),
              Se.formatterCache.set('A', e)),
            e.format(this)
          )
        },
        'b'() {
          let e = Se.formatterCache.get('b')
          return (
            e ||
              ((e = Intl.DateTimeFormat(t.timeLocale || void 0, {
                month: 'short',
              })),
              Se.formatterCache.set('b', e)),
            e.format(this)
          )
        },
        'B'() {
          let e = Se.formatterCache.get('B')
          return (
            e ||
              ((e = Intl.DateTimeFormat(t.timeLocale || void 0, {
                month: 'long',
              })),
              Se.formatterCache.set('B', e)),
            e.format(this)
          )
        },
        'd'() {
          return Se.zeroPad(this.getDate())
        },
        'e'() {
          return this.getDate()
        },
        'H'() {
          return Se.zeroPad(this.getHours())
        },
        'I'() {
          return Se.zeroPad(this.getHours() % 12 || 12)
        },
        'k'() {
          return this.getHours()
        },
        'l'() {
          return this.getHours() % 12 || 12
        },
        'm'() {
          return Se.zeroPad(this.getMonth() + 1)
        },
        'M'() {
          return Se.zeroPad(this.getMinutes())
        },
        'p'() {
          let e = Se.formatterCache.get('p')
          e ||
            ((e = Intl.DateTimeFormat(t.timeLocale || void 0, {
              hour: 'numeric',
              hour12: !0,
            })),
            Se.formatterCache.set('p', e))
          return e.formatToParts(this).find(e => 'dayPeriod' === e.type).value
        },
        'P'() {
          return Se.formatters.p.call(this).toLowerCase()
        },
        'S'() {
          return Se.zeroPad(this.getSeconds())
        },
        'y'() {
          return this.getFullYear().toString().slice(2)
        },
        'Y'() {
          return this.getFullYear()
        },
        '%': () => '%',
      },
    },
    Te = {
      init() {
        if ('thread' !== o.VIEW || !t['Reply Pruning']) return
        ;(this.container = Qe.frag()),
          (this.summary = Qe.el('span', { hidden: !0, className: 'summary' })),
          (this.summary.style.cursor = 'pointer'),
          Qe.on(
            this.summary,
            'click',
            () => (
              (this.inputs.enabled.checked = !this.inputs.enabled.checked),
              Qe.event('change', null, this.inputs.enabled)
            )
          )
        const e = L.checkbox(
            'Prune Replies',
            'Show Last',
            t['Prune All Threads']
          ),
          a = Qe.el(
            'span',
            { title: 'Maximum number of replies to show.' },
            {
              innerHTML:
                ' <input type="number" name="Max Replies" min="0" step="1" value="' +
                n(t['Max Replies']) +
                '" class="field">',
            }
          )
        return (
          Qe.prepend(a, e),
          (this.inputs = {
            enabled: e.firstElementChild,
            replies: a.lastElementChild,
          }),
          this.setEnabled.call(this.inputs.enabled),
          Qe.on(this.inputs.enabled, 'change', this.setEnabled),
          Qe.on(this.inputs.replies, 'change', Qe.cb.value),
          Xe.menu.addEntry({ el: a, order: 190 }),
          l.Thread.push({ name: 'Reply Pruning', cb: this.node })
        )
      },
      position: 0,
      hidden: 0,
      hiddenFiles: 0,
      total: 0,
      totalFiles: 0,
      setEnabled() {
        const e = Re.input
        return (
          this.checked &&
            e?.checked &&
            ((e.checked = !1), Qe.event('change', null, e)),
          (Te.active = this.checked)
        )
      },
      showIfHidden(e) {
        if (Te.container && Qe(`#${e}`, Te.container))
          return (
            (Te.inputs.enabled.checked = !1),
            Qe.event('change', null, Te.inputs.enabled)
          )
      },
      node() {
        let e
        return (
          (Te.thread = this),
          this.isSticky &&
            ((Te.active = Te.inputs.enabled.checked = !0),
            Re.input && (t['Thread Quotes'] = Re.input.checked = !1)),
          this.posts.forEach(function (e) {
            if (e.isReply && (Te.total++, e.file)) return Te.totalFiles++
          }),
          Te.active &&
            /^#p\d+$/.test(location.hash) &&
            1 <= (e = this.posts.keys.indexOf(location.hash.slice(2))) &&
            e < 1 + Math.max(Te.total - +t['Max Replies'], 0) &&
            (Te.active = Te.inputs.enabled.checked = !1),
          Qe.after(this.OP.nodes.root, Te.summary),
          Qe.on(Te.inputs.enabled, 'change', Te.update),
          Qe.on(Te.inputs.replies, 'change', Te.update),
          Qe.on(a, 'ThreadUpdate', Te.updateCount),
          Qe.on(a, 'ThreadUpdate', Te.update),
          Te.update()
        )
      },
      updateCount(e) {
        if (!e.detail[404])
          for (var t of e.detail.newPosts)
            Te.total++, o.posts.get(t).file && Te.totalFiles++
      },
      update() {
        let e, n, i
        const r = Te.hidden,
          s = Te.active ? Math.max(Te.total - +t['Max Replies'], 0) : 0,
          l = a.body.clientHeight - window.scrollY,
          { posts: d } = Te.thread
        if (Te.hidden < s) {
          for (; Te.hidden < s && Te.position < d.keys.length; )
            if (
              ((i = d.get(d.keys[Te.position++])),
              i.isReply && !i.isFetchedQuote)
            ) {
              for (; (n = Te.summary.nextSibling) && n !== i.nodes.root; )
                Qe.add(Te.container, n)
              Qe.add(Te.container, i.nodes.root),
                Te.hidden++,
                i.file && Te.hiddenFiles++
            }
        } else if (Te.hidden > s) {
          const e = Qe.frag()
          for (; Te.hidden > s && Te.position > 0; )
            if (
              ((i = d.get(d.keys[--Te.position])),
              i.isReply && !i.isFetchedQuote)
            ) {
              for (; (n = Te.container.lastChild) && n !== i.nodes.root; )
                Qe.prepend(e, n)
              Qe.prepend(e, i.nodes.root),
                Te.hidden--,
                i.file && Te.hiddenFiles--
            }
          Qe.after(Te.summary, e),
            Qe.event('PostsInserted', null, Te.summary.parentNode)
        }
        if (
          ((Te.summary.textContent = Te.active
            ? o.SITE.Build.summaryText('+', Te.hidden, Te.hiddenFiles)
            : o.SITE.Build.summaryText('-', Te.total, Te.totalFiles)),
          (Te.summary.hidden = Te.total <= +t['Max Replies']),
          r !== s && (e = Xe.getTopOf(Qe('.board'))) < 0)
        )
          return window.scrollBy(
            0,
            Math.max(a.body.clientHeight - l, window.scrollY + e) -
              window.scrollY
          )
      },
    },
    Re = {
      init() {
        if (t['Quote Threading'] && 'thread' === o.VIEW)
          return (
            (this.controls = Qe.el('label', {
              innerHTML:
                '<input id="threadingControl" name="Thread Quotes" type="checkbox"> Threading',
            })),
            (this.threadNewLink = Qe.el('span', {
              className: 'brackets-wrap threadnewlink',
              hidden: !0,
            })),
            Qe.extend(this.threadNewLink, {
              innerHTML: '<a href="javascript:;">Thread New Posts</a>',
            }),
            (this.input = Qe('input', this.controls)),
            (this.input.checked = t['Thread Quotes']),
            Qe.on(this.input, 'change', this.setEnabled),
            Qe.on(this.input, 'change', this.rethread),
            Qe.on(this.threadNewLink.firstElementChild, 'click', this.rethread),
            Qe.on(a, '4chanXInitFinished', () => (this.ready = !0)),
            Xe.menu.addEntry((this.entry = { el: this.controls, order: 99 })),
            l.Thread.push({ name: 'Quote Threading', cb: this.setThread }),
            l.Post.push({ name: 'Quote Threading', cb: this.node })
          )
      },
      parent: m(),
      children: m(),
      inserted: m(),
      toggleThreading() {
        return this.setThreadingState(!t['Thread Quotes'])
      },
      setThreadingState(e) {
        return (
          (this.input.checked = e),
          this.setEnabled.call(this.input),
          this.rethread.call(this.input)
        )
      },
      setEnabled() {
        if (this.checked) {
          Qe.set('Prune All Threads', !1)
          const e = Te.inputs?.enabled
          e?.checked && ((e.checked = !1), Qe.event('change', null, e))
        }
        return Qe.cb.checked.call(this)
      },
      setThread() {
        return (
          (Re.thread = this),
          Qe.asap(
            () => !t['Thread Updater'] || Qe('.navLinksBot > .updatelink'),
            function () {
              let e
              if ((e = Qe('.navLinksBot')))
                return Qe.add(e, [Qe.tn(' '), Re.threadNewLink])
            }
          )
        )
      },
      node() {
        let e
        if (this.isFetchedQuote || this.isClone || !this.isReply) return
        const t = new Set()
        let n = null
        for (var a of this.quotes)
          (e = o.posts.get(a)) &&
            !e.isFetchedQuote &&
            e.isReply &&
            e.ID < this.ID &&
            (t.add(e.ID), (!n || e.ID > n.ID) && (n = e))
        if (!n) return
        let i = n
        for (; (i = Re.parent[i.fullID]); ) t.delete(i.ID)
        return 1 === t.size ? (Re.parent[this.fullID] = n) : void 0
      },
      descendants(e) {
        let t,
          o = [e]
        if ((t = Re.children[e.fullID]))
          for (var n of t) o = o.concat(Re.descendants(n))
        return o
      },
      insert(e) {
        let o, n
        if (
          !t['Thread Quotes'] ||
          !(o = Re.parent[e.fullID]) ||
          Re.inserted[e.fullID]
        )
          return !1
        const a = Re.descendants(e)
        if (
          !ee.posts.has(o.ID) &&
          (function () {
            for (var e of a) if (ee.posts.has(e.ID)) return !0
          })()
        )
          return (Re.threadNewLink.hidden = !1), !1
        const { order: i } = ee,
          r = Re.children[o.fullID] || (Re.children[o.fullID] = []),
          s =
            o.nodes.threadContainer ||
            Qe.el('div', { className: 'threadContainer' }),
          l = [e.nodes.root]
        e.nodes.threadContainer && l.push(e.nodes.threadContainer)
        let d = r.length
        for (let t = r.length - 1; t >= 0; t--) {
          r[t].ID >= e.ID && d--
        }
        if (d !== r.length) {
          const t = r[d]
          for (n of a) i.before(i[t.ID], i[n.ID])
          r.splice(d, 0, e), Qe.before(t.nodes.root, l)
        } else {
          let t,
            d = o
          for (; (t = Re.children[d.fullID]) && t.length; ) d = t[t.length - 1]
          for (let e = a.length - 1; e >= 0; e--)
            (n = a[e]), i.after(i[d.ID], i[n.ID])
          r.push(e), Qe.add(s, l)
        }
        return (
          (Re.inserted[e.fullID] = !0),
          o.nodes.threadContainer ||
            ((o.nodes.threadContainer = s),
            Qe.addClass(o.nodes.root, 'threadOP'),
            Qe.after(o.nodes.root, s)),
          !0
        )
      },
      rethread() {
        if (!Re.ready) return
        const { thread: e } = Re,
          { posts: o } = e
        if (((Re.threadNewLink.hidden = !0), t['Thread Quotes']))
          o.forEach(Re.insert)
        else {
          const t = []
          ;(ee.order = new Z()),
            (Re.inserted = m()),
            o.forEach(function (e) {
              if (!e.isFetchedQuote)
                return (
                  ee.order.push(e),
                  e.isReply && t.push(e.nodes.root),
                  Re.children[e.fullID]
                    ? (delete Re.children[e.fullID],
                      Qe.rmClass(e.nodes.root, 'threadOP'),
                      Qe.rm(e.nodes.threadContainer),
                      delete e.nodes.threadContainer)
                    : void 0
                )
            }),
            Qe.add(e.nodes.root, t)
        }
        return (
          (ee.position = ee.order.first),
          ee.updatePosition(),
          ee.setLine(!0),
          ee.read(),
          ee.update()
        )
      },
    },
    Be = {
      init() {
        let e
        if ('thread' !== o.VIEW || !t['Thread Updater']) return
        ;(this.enabled = !0),
          (this.audio = Qe.el('audio')),
          'gecko' !== Qe.engine && (this.audio.src = this.beep),
          t['Updater and Stats in Header']
            ? ((this.dialog = e = Qe.el('span', { id: 'updater' })),
              Qe.extend(e, {
                innerHTML:
                  '<span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>',
              }),
              Xe.addShortcut('updater', e, 100))
            : ((this.dialog = e =
                L.dialog('updater', {
                  innerHTML:
                    '<div class="move"></div><span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>',
                })),
              Qe.addClass(i, 'float'),
              Qe.ready(() => Qe.add(a.body, e))),
          (this.checkPostCount = 0),
          (this.timer = Qe('#update-timer', e)),
          (this.status = Qe('#update-status', e)),
          Qe.on(this.timer, 'click', this.update),
          Qe.on(this.status, 'click', this.update)
        const n = Qe.el('span', { className: 'brackets-wrap updatelink' })
        Qe.extend(n, { innerHTML: '<a href="javascript:;">Update</a>' }),
          jt.ready(function () {
            let e
            if ((e = Qe('.navLinksBot'))) return Qe.add(e, [Qe.tn(' '), n])
          }),
          Qe.on(n.firstElementChild, 'click', this.update)
        const r = []
        for (const e in c.updater.checkbox) {
          var s = c.updater.checkbox[e]
          const t = L.checkbox(e, e)
          t.title = s[1]
          var d = t.firstElementChild
          Qe.on(d, 'change', Qe.cb.checked),
            'Scroll BG' === d.name
              ? (Qe.on(d, 'change', this.cb.scrollBG), this.cb.scrollBG())
              : 'Auto Update' === d.name &&
                Qe.on(d, 'change', this.setInterval),
            r.push({ el: t })
        }
        return (
          (this.settings = Qe.el('span', {
            innerHTML: '<a href="javascript:;">Interval</a>',
          })),
          Qe.on(this.settings, 'click', this.intervalShortcut),
          r.push({ el: this.settings }),
          Xe.menu.addEntry(
            (this.entry = {
              el: Qe.el('span', { textContent: 'Updater' }),
              order: 110,
              subEntries: r,
            })
          ),
          l.Thread.push({ name: 'Thread Updater', cb: this.node })
        )
      },
      node() {
        return (
          (Be.thread = this),
          (Be.root = this.nodes.root),
          (Be.outdateCount = 0),
          (Be.postIDs = []),
          (Be.fileIDs = []),
          this.posts.forEach(function (e) {
            if ((Be.postIDs.push(e.ID), e.file)) return Be.fileIDs.push(e.ID)
          }),
          Be.cb.interval.call(Qe.el('input', { value: t.Interval })),
          Qe.on(a, 'QRPostSuccessful', Be.cb.checkpost),
          Qe.on(a, 'visibilitychange', Be.cb.visibility),
          Be.setInterval()
        )
      },
      /*
      http://freesound.org/people/pierrecartoons1979/sounds/90112/
      cc-by-nc-3.0
      */
      beep: 'data:audio/wav;base64,UklGRjQDAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAc21wbDwAAABBAAADAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkYXRhzAIAAGMms8em0tleMV4zIpLVo8nhfSlcPR102Ki+5JspVEkdVtKzs+K1NEhUIT7DwKrcy0g6WygsrM2k1NpiLl0zIY/WpMrjgCdbPhxw2Kq+5Z4qUkkdU9K1s+K5NkVTITzBwqnczko3WikrqM+l1NxlLF0zIIvXpsnjgydZPhxs2ay95aIrUEkdUdC3suK8N0NUIjq+xKrcz002WioppdGm091pK1w0IIjYp8jkhydXPxxq2K295aUrTkoeTs65suK+OUFUIzi7xqrb0VA0WSoootKm0t5tKlo1H4TYqMfkiydWQBxm16+85actTEseS8y7seHAPD9TIza5yKra01QyWSson9On0d5wKVk2H4DYqcfkjidUQB1j1rG75KsvSkseScu8seDCPz1TJDW2yara1FYxWSwnm9Sn0N9zKVg2H33ZqsXkkihSQR1g1bK65K0wSEsfR8i+seDEQTxUJTOzy6rY1VowWC0mmNWoz993KVc3H3rYq8TklSlRQh1d1LS647AyR0wgRMbAsN/GRDpTJTKwzKrX1l4vVy4lldWpzt97KVY4IXbUr8LZljVPRCxhw7W3z6ZISkw1VK+4sMWvXEhSPk6buay9sm5JVkZNiLWqtrJ+TldNTnquqbCwilZXU1BwpKirrpNgWFhTaZmnpquZbFlbVmWOpaOonHZcXlljhaGhpZ1+YWBdYn2cn6GdhmdhYGN3lp2enIttY2Jjco+bnJuOdGZlZXCImJqakHpoZ2Zug5WYmZJ/bGlobX6RlpeSg3BqaW16jZSVkoZ0bGtteImSk5KIeG5tbnaFkJKRinxxbm91gY2QkIt/c3BwdH6Kj4+LgnZxcXR8iI2OjIR5c3J0e4WLjYuFe3VzdHmCioyLhn52dHR5gIiKioeAeHV1eH+GiYqHgXp2dnh9hIiJh4J8eHd4fIKHiIeDfXl4eHyBhoeHhH96eHmA',
      playBeep() {
        const { audio: e } = Be
        return (
          e.src || (e.src = Be.beep),
          e.paused ? e.play() : Qe.one(e, 'ended', Be.playBeep)
        )
      },
      cb: {
        checkpost(e) {
          if (e.detail.threadID === Be.thread.ID)
            return (
              (Be.postID = e.detail.postID),
              (Be.checkPostCount = 0),
              (Be.outdateCount = 0),
              Be.setInterval()
            )
        },
        visibility() {
          if (!a.hidden)
            return (
              (Be.outdateCount = 0),
              Be.seconds > Be.interval ? Be.setInterval() : void 0
            )
        },
        scrollBG: () =>
          (Be.scrollBG = t['Scroll BG'] ? () => !0 : () => !a.hidden),
        interval(e) {
          let t = parseInt(this.value, 10)
          if ((t < 1 && (t = 1), (Be.interval = this.value = t), e))
            return Qe.cb.value.call(this)
        },
        load() {
          if (this === Be.req)
            switch (this.status) {
              case 200:
                return (
                  Be.parse(this),
                  Be.thread.isArchived ? Be.kill() : Be.setInterval()
                )
              case 404:
                return Qe.ajax(
                  o.SITE.urls.catalogJSON({ boardID: Be.thread.board.ID }),
                  {
                    onloadend() {
                      let e
                      if (200 === this.status) {
                        for (var t of ((e = !0), this.response))
                          for (var o of t.threads)
                            if (o.no === Be.thread.ID) {
                              e = !1
                              break
                            }
                      } else e = !1
                      e ? Be.kill() : Be.error(this)
                    },
                  }
                )
              default:
                return Be.error(this)
            }
        },
      },
      kill: () => (
        Be.thread.kill(),
        Be.setInterval(),
        Qe.event('ThreadUpdate', {
          404: !0,
          threadID: Be.thread.fullID,
        })
      ),
      error: e => (
        304 === e.status && Be.set('status', ''),
        Be.setInterval(),
        e.status
          ? 304 !== e.status
            ? Be.set('status', `${e.statusText} (${e.status})`, 'warning')
            : void 0
          : Be.set('status', 'Connection Error', 'warning')
      ),
      setInterval() {
        if ((clearTimeout(Be.timeoutID), Be.thread.isDead))
          return (
            Be.set(
              'status',
              Be.thread.isArchived ? 'Archived' : '404',
              'warning'
            ),
            void Be.set('timer', '')
          )
        if (Be.postID && Be.checkPostCount < 5)
          return (
            Be.set('timer', '...', 'loading'),
            void (Be.timeoutID = setTimeout(Be.update, ++Be.checkPostCount * b))
          )
        if (!t['Auto Update']) return void Be.set('timer', 'Update')
        const { interval: e } = Be
        if (t['Optional Increase']) {
          const t = a.hidden ? 10 : 5,
            o = Math.min(Be.outdateCount, t),
            n = (Math.floor(0.1 * e) || 1) * o * o
          Be.seconds = Qe.minmax(n, e, 300)
        } else Be.seconds = e
        return Be.timeout()
      },
      intervalShortcut() {
        Pe.open('Advanced')
        const e = Qe.id('fourchanx-settings')
        return Qe('input[name=Interval]', e).focus()
      },
      set(e, t, o) {
        let n
        const a = Be[e]
        return (
          (n = a.firstChild) ? (n.data = t) : (a.textContent = t),
          (a.className = o ?? ('' === t ? 'empty' : ''))
        )
      },
      timeout: () => (
        Be.seconds
          ? (Be.set('timer', Be.seconds),
            (Be.timeoutID = setTimeout(Be.timeout, 1e3)))
          : (Be.outdateCount++, Be.update()),
        Be.seconds--
      ),
      update() {
        let e
        return (
          clearTimeout(Be.timeoutID),
          Be.set('timer', '...', 'loading'),
          (e = Be.req) && (delete Be.req, e.abort()),
          (Be.req = Qe.whenModified(
            o.SITE.urls.threadJSON({
              boardID: Be.thread.board.ID,
              threadID: Be.thread.ID,
            }),
            'ThreadUpdater',
            Be.cb.load,
            { timeout: A }
          ))
        )
      },
      updateThreadStatus(e, t) {
        if (Be.thread[`is${e}`] === t) return
        if ((Be.thread.setStatus(e, t), 'Closed' === e && Be.thread.isArchived))
          return
        return new _e(
          'info',
          `The thread is ${
            'Sticky' === e
              ? t
                ? 'now a sticky'
                : 'not a sticky anymore'
              : t
                ? 'now closed'
                : 'not closed anymore'
          }.`,
          30
        )
      },
      parse(e) {
        let n, r, s
        const l = e.response.posts,
          d = l[0],
          c = Be.thread,
          { board: h } = c,
          u = Be.postIDs[Be.postIDs.length - 1]
        if (
          l[l.length - 1].no < u &&
          new Date(e.getResponseHeader('Last-Modified')) -
            c.posts.get(u).info.date <
            3e4
        )
          return
        ;(o.SITE.Build.spoilerRange[h] = d.custom_spoiler),
          c.setStatus('Archived', !!d.archived),
          Be.updateThreadStatus('Sticky', !!d.sticky),
          Be.updateThreadStatus('Closed', !!d.closed),
          (c.postLimit = !!d.bumplimit),
          (c.fileLimit = !!d.imagelimit),
          null != d.unique_ips && (c.ipCount = d.unique_ips)
        const p = [],
          g = [],
          f = [],
          m = []
        for (var b of l)
          if (((n = b.no), g.push(n), b.fsize && f.push(n), !(n <= u)))
            if (!(s = c.posts.get(n)) || s.isFetchedQuote) {
              m.push(`${h}.${n}`)
              var A = o.SITE.Build.postFromObject(b, h.ID)
              p.push(new H(A, c, h)), Be.postID === n && delete Be.postID
            } else s.resurrect()
        const v = []
        for (n of Be.postIDs)
          g.includes(n) || (c.posts.get(n).kill(), v.push(`${h}.${n}`))
        Be.postIDs = g
        const w = []
        for (n of Be.fileIDs)
          f.includes(n) ||
            v.includes(`${h}.${n}`) ||
            (c.posts.get(n).kill(!0), w.push(`${h}.${n}`))
        if (((Be.fileIDs = f), p.length)) {
          Be.set('status', `+${p.length}`, 'new'), (Be.outdateCount = 0)
          const e = ee.posts?.size,
            o = ee.postsQuotingYou?.size
          jt.callbackNodes('Post', p),
            (!a.hidden && a.hasFocus()) ||
              (t['Beep Quoting You'] && ee.postsQuotingYou?.size > o
                ? (Be.playBeep(), t.Beep && Be.playBeep())
                : t.Beep && ee.posts?.size > 0 && 0 === e && Be.playBeep())
          const n =
            t['Auto Scroll'] &&
            Be.scrollBG() &&
            Be.root.getBoundingClientRect().bottom - i.clientHeight < 25
          let r = null
          for (s of p)
            Re.insert(s) ||
              (r || (r = s.nodes.root), Qe.add(Be.root, s.nodes.root))
          Qe.event('PostsInserted', null, Be.root),
            n &&
              (t['Bottom Scroll']
                ? window.scrollTo(0, a.body.clientHeight)
                : r && Xe.scrollTo(r))
        } else Be.set('status', '')
        return (
          null != d.unique_ips &&
            (r = Qe.id('unique-ips')) &&
            ((r.textContent = d.unique_ips),
            (r.previousSibling.textContent =
              r.previousSibling.textContent.replace(
                /\b(?:is|are)\b/,
                1 === d.unique_ips ? 'is' : 'are'
              )),
            (r.nextSibling.textContent = r.nextSibling.textContent.replace(
              /\bposters?\b/,
              1 === d.unique_ips ? 'poster' : 'posters'
            ))),
          Qe.event('ThreadUpdate', {
            404: !1,
            threadID: c.fullID,
            newPosts: m,
            deletedPosts: v,
            deletedFiles: w,
            postCount: d.replies + 1,
            fileCount: d.images + !!d.fsize,
            ipCount: d.unique_ips,
          })
        )
      },
    },
    Pe = {
      dialog: void 0,
      init() {
        const n = Qe.el('a', {
          className: 'settings-link',
          textContent: '🔧︎',
          title: `${e.name} Settings`,
          href: 'javascript:;',
        })
        Qe.on(n, 'click', Pe.open), Xe.addShortcut('settings', n, 820)
        const i = this.addSection
        if (
          (i('Main', this.main),
          i('Filter', this.filter),
          i('Sauce', this.sauce),
          i('Advanced', this.advanced),
          i('Keybinds', this.keybinds),
          Qe.on(a, 'AddSettingsSection', Pe.addSection),
          Qe.on(a, 'OpenSettings', e => Pe.open(e.detail)),
          'yotsuba' === o.SITE.software && t['Disable Native Extension'])
        )
          return Qe.hasStorage
            ? Qe.global(function () {
                try {
                  const e =
                    JSON.parse(localStorage.getItem('4chan-settings')) || {}
                  if (e.disableAll) return
                  return (
                    (e.disableAll = !0),
                    localStorage.setItem('4chan-settings', JSON.stringify(e))
                  )
                } catch (e) {
                  return Object.defineProperty(window, 'Config', {
                    value: { disableAll: !0 },
                  })
                }
              })
            : Qe.global(() =>
                Object.defineProperty(window, 'Config', {
                  value: { disableAll: !0 },
                })
              )
      },
      open(e) {
        let t, o
        if (Pe.dialog) return
        Qe.event('CloseMenu'),
          (Pe.dialog = t = Qe.el('div', { id: 'overlay' }, me)),
          Qe.on(Qe('.export', t), 'click', Pe.export),
          Qe.on(Qe('.import', t), 'click', Pe.import),
          Qe.on(Qe('.reset', t), 'click', Pe.reset),
          Qe.on(Qe('input', t), 'change', Pe.onImport)
        const n = []
        for (var i of Pe.sections) {
          var r = Qe.el('a', {
            className: `tab-${i.hyphenatedTitle}`,
            textContent: i.title,
            href: 'javascript:;',
          })
          Qe.on(r, 'click', Pe.openSection.bind(i)),
            n.push(r, Qe.tn(' | ')),
            i.title === e && (o = r)
        }
        return (
          n.pop(),
          Qe.add(Qe('.sections-list', t), n),
          'none' !== e && (o || n[0]).click(),
          Qe.on(Qe('.close', t), 'click', Pe.close),
          Qe.on(window, 'beforeunload', Pe.close),
          Qe.on(t, 'click', () => {
            'INPUT' !== a.activeElement?.tagName &&
              'TEXTAREA' !== a.activeElement?.tagName &&
              Pe.close()
          }),
          Qe.on(t.firstElementChild, 'click', e => e.stopPropagation()),
          Qe.add(a.body, t),
          Qe.event('OpenSettings', null, t)
        )
      },
      close() {
        if (Pe.dialog)
          return a.activeElement?.blur(), Qe.rm(Pe.dialog), delete Pe.dialog
      },
      sections: [],
      addSection(e, t) {
        'string' != typeof e && ({ title: e, open: t } = e.detail)
        const o = e.toLowerCase().replace(/\s+/g, '-')
        return Pe.sections.push({ title: e, hyphenatedTitle: o, open: t })
      },
      openSection() {
        let e
        ;(e = Qe('.tab-selected', Pe.dialog)) && Qe.rmClass(e, 'tab-selected'),
          Qe.addClass(
            Qe(`.tab-${this.hyphenatedTitle}`, Pe.dialog),
            'tab-selected'
          )
        const t = Qe('section', Pe.dialog)
        return (
          Qe.rmAll(t),
          (t.className = `section-${this.hyphenatedTitle}`),
          this.open(t, o),
          (t.scrollTop = 0),
          Qe.event('OpenSettings', null, t)
        )
      },
      warnings: {
        localStorage(t) {
          if (Qe.cantSync) {
            const o = Qe.cantSet
              ? 'save your settings'
              : 'synchronize settings between tabs'
            return t(
              Qe.el('li', {
                textContent: `${
                  e.name
                } needs local storage to ${o}.\nEnable it on boards.${
                  location.hostname.split('.')[1]
                }.org in your browser's privacy settings (may be listed as part of "local data" or "cookies").`,
              })
            )
          }
        },
        ads: e =>
          Qe.onExists(i, '.adg-rects > .desktop', t =>
            Qe.onExists(t, 'iframe', function () {
              const t = et.to('thread', { boardID: 'qa', threadID: 362590 })
              return e(
                Qe.el(
                  'li',
                  le(
                    se,
                    null,
                    'To protect yourself from ',
                    le('a', { href: t, target: '_blank' }, 'malicious ads'),
                    ', you should ',
                    le(
                      'a',
                      {
                        href: 'https://github.com/gorhill/uBlock#ublock-origin',
                        target: '_blank',
                      },
                      'block ads'
                    ),
                    ' on 4chan.'
                  )
                )
              )
            })
          ),
      },
      main(n) {
        let a
        const i = Qe.el(
            'fieldset',
            { hidden: !0 },
            { innerHTML: '<legend>Warnings</legend><ul></ul>' }
          ),
          r = function (e) {
            return Qe.add(Qe('ul', i), e), (i.hidden = !1)
          }
        for (a in Pe.warnings) {
          ;(0, Pe.warnings[a])(r)
        }
        Qe.add(n, i)
        const s = m(),
          l = m(),
          d = function (e, o) {
            const n = [e]
            return (() => {
              const e = []
              for (a in o) {
                var i = o[a]
                if (i instanceof Array) {
                  var r = i[1],
                    d = Qe.el('div', {
                      innerHTML: `<label><input type="checkbox" name="${a}">${a}</label><span class="description">: ${r}</span>`,
                    })
                  d.dataset.name = a
                  var c = Qe('input', d)
                  Qe.on(c, 'change', Qe.cb.checked),
                    Qe.on(c, 'change', function () {
                      return (this.parentNode.parentNode.dataset.checked =
                        this.checked)
                    }),
                    (s[a] = t[a]),
                    (l[a] = c)
                  var h = i[2] || 0
                  if (n.length <= h) {
                    var u = Qe.el('div', { className: 'suboption-list' })
                    Qe.add(n[n.length - 1].lastElementChild, u), (n[h] = u)
                  } else n.length > h + 1 && n.splice(h + 1, n.length - (h + 1))
                  e.push(Qe.add(n[h], d))
                }
              }
              return e
            })()
          }
        for (var h in c.main) {
          var u = c.main[h],
            p = Qe.el('fieldset', { innerHTML: `<legend>${h}</legend>` })
          d(p, u),
            'Posting and Captchas' === h &&
              Qe.add(
                p,
                Qe.el('p', {
                  innerHTML:
                    'For more info on captcha options and issues, see the <a href="' +
                    e.captchaFAQ +
                    '" target="_blank">captcha FAQ</a>.',
                })
              ),
            Qe.add(n, p)
        }
        d(Qe('div[data-name="JSON Index"] > .suboption-list', n), c.Index),
          'gecko' !== Qe.engine &&
            (Qe('div[data-name="Remember QR Size"]', n).hidden = !0),
          (Qe.perProtocolSettings || 'https:' !== location.protocol) &&
            (Qe('div[data-name="Redirect to HTTPS"]', n).hidden = !0),
          'crx' !== x &&
            (Qe('div[data-name="Work around CORB Bug"]', n).hidden = !0),
          Qe.get(s, function (e) {
            for (a in e) {
              var t = e[a]
              ;(l[a].checked = t),
                (l[a].parentNode.parentNode.dataset.checked = t)
            }
          })
        const g = Qe.el('div', {
            innerHTML:
              '<button></button><span class="description">: Clear manually-hidden threads and posts on all boards. Reload the page to apply.',
          }),
          f = Qe('button', g)
        return (
          Qe.get(
            { hiddenThreads: m(), hiddenPosts: m() },
            function ({ hiddenThreads: e, hiddenPosts: t }) {
              let o,
                n,
                a,
                i,
                r = 0
              for (n in e)
                if (((a = e[n]), 'boards' !== n))
                  for (n in a.boards)
                    (o = a.boards[n]), (r += Object.keys(o).length)
              for (n in e.boards)
                (o = e.boards[n]), (r += Object.keys(o).length)
              for (n in t)
                if (((a = t[n]), 'boards' !== n))
                  for (n in a.boards)
                    for (n in ((o = a.boards[n]), o))
                      (i = o[n]), (r += Object.keys(i).length)
              for (n in t.boards)
                for (n in ((o = t.boards[n]), o))
                  (i = o[n]), (r += Object.keys(i).length)
              return (f.textContent = `Hidden: ${r}`)
            }
          ),
          Qe.on(f, 'click', function () {
            return (
              (this.textContent = 'Hidden: 0'),
              Qe.get('hiddenThreads', m(), function ({ hiddenThreads: e }) {
                if (Qe.hasStorage && 'yotsuba' === o.SITE.software) {
                  let t
                  for (t in e['4chan.org']?.boards)
                    localStorage.removeItem(`4chan-hide-t-${t}`)
                  for (t in e.boards)
                    localStorage.removeItem(`4chan-hide-t-${t}`)
                }
                return Qe.delete(['hiddenThreads', 'hiddenPosts'])
              })
            )
          }),
          Qe.after(Qe('input[name="Stubs"]', n).parentNode.parentNode, g)
        )
      },
      export() {
        const e = m()
        return (
          Qe.extend(e, t),
          Qe.get(e, function (e) {
            return (
              delete e.boardConfig,
              Pe.downloadExport({
                version: o.VERSION,
                date: Date.now(),
                Conf: e,
              })
            )
          })
        )
      },
      downloadExport(t) {
        const n = new Blob([JSON.stringify(t, null, 2)], {
            type: 'application/json',
          }),
          a = URL.createObjectURL(n),
          i = Qe.el('a', {
            download: `${e.name} v${o.VERSION}-${t.date}.json`,
            href: a,
          }),
          r = Qe('.imp-exp-result', Pe.dialog)
        return Qe.rmAll(r), Qe.add(r, i), i.click()
      },
      import() {
        return Qe('input[type=file]', this.parentNode).click()
      },
      onImport() {
        let e
        if (!(e = this.files[0])) return
        this.value = null
        const t = Qe('.imp-exp-result')
        if (
          !confirm(
            'Your current settings will be entirely overwritten, are you sure?'
          )
        )
          return void (t.textContent = 'Import aborted.')
        const o = new FileReader()
        return (
          (o.onload = function (e) {
            try {
              return Pe.loadSettings(m.json(e.target.result), function (e) {
                return e
                  ? (t.textContent = 'Import failed due to an error.')
                  : confirm('Import successful. Reload now?')
                    ? window.location.reload()
                    : void 0
              })
            } catch (e) {
              const o = e
              return (
                (t.textContent = 'Import failed due to an error.'),
                r.error(o.stack)
              )
            }
          }),
          o.readAsText(e)
        )
      },
      convertFrom: {
        loadletter(e) {
          for (var t in ('Always CDN' in
            (e = (function (e, t) {
              for (var o in t) {
                var n = t[o]
                n && (e.Conf[n] = e.Conf[o]), delete e.Conf[o]
              }
              return e
            })(e, {
              "Disable 4chan's extension": 'Disable Native Extension',
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
              'uniqueid': 'uniqueID',
              'mod': 'capcode',
              'email': '',
              'country': 'flag',
              'md5': 'MD5',
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
              'Scrolling': 'Auto Scroll',
              'Verbose': '',
            })).Conf &&
            ((e.Conf.fourchanImageHost = e.Conf['Always CDN']
              ? 'i.4cdn.org'
              : ''),
            delete e.Conf['Always CDN']),
          (e.Conf.sauces = e.Conf.sauces.replace(/\$\d/g, function (e) {
            switch (e) {
              case '$1':
                return '%TURL'
              case '$2':
                return '%URL'
              case '$3':
                return '%MD5'
              case '$4':
                return '%board'
              default:
                return e
            }
          })),
          c.hotkeys))
            c.hotkeys[t],
              t in e.Conf &&
                (e.Conf[t] = e.Conf[t]
                  .replace(
                    /ctrl|alt|meta/g,
                    e => `${e[0].toUpperCase()}${e.slice(1)}`
                  )
                  .replace(
                    /(^|.+\+)[A-Z]$/g,
                    e => `Shift+${e.slice(0, -1)}${e.slice(-1).toLowerCase()}`
                  ))
          if (e.WatchedThreads)
            for (var o in ((e.Conf.watchedThreads = m.clone({
              '4chan.org': { boards: {} },
            })),
            e.WatchedThreads)) {
              var n = e.WatchedThreads[o]
              for (var a in n) {
                var i = n[a]
                ;(e.Conf.watchedThreads['4chan.org'].boards[o] ||
                  (e.Conf.watchedThreads['4chan.org'].boards[o] = m()))[a] = {
                  excerpt: i.textContent,
                }
              }
            }
          return e
        },
      },
      upgrade(o, n) {
        let a, i, r
        const s = m(),
          l = (e, t) => (o[e] = s[e] = t),
          d = function (e, t) {
            if (null == o[e]) return l(e, t)
          },
          h = function (e) {
            if (
              null != o.sauces &&
              (e = e.filter(
                e => o.sauces.indexOf(e.match(/[^#;\s]+|$/)[0]) < 0
              )).length
            )
              return l('sauces', o.sauces + '\n\n' + e.join('\n'))
          },
          u = function (e) {
            if (
              (null == o.usercss && l('usercss', c.usercss),
              o.usercss.indexOf(e) < 0)
            )
              return l('usercss', e + '\n\n' + o.usercss)
          }
        if ((a = '"' === n[0]))
          try {
            n = JSON.parse(n)
          } catch (e) {}
        const p = n
          .replace(/^XT /i, '')
          .replace(/\d+/g, e => e.padStart(5, '0'))
        if (p < '00001.00013.00014.00008')
          for (i in o)
            if (
              ((r = o[i]),
              'string' == typeof r &&
                'string' != typeof t[i] &&
                ![
                  'Index Sort',
                  'Last Long Reply Thresholds 0',
                  'Last Long Reply Thresholds 1',
                ].includes(i))
            ) {
              a = !0
              break
            }
        if (a)
          for (i in o)
            if (((r = o[i]), 'string' == typeof r))
              try {
                var g = JSON.parse(r)
                l(i, g)
              } catch (e) {}
        if (
          (p < '00001.00011.00008.00000' &&
            (null == o['Fixed Thread Watcher'] &&
              l('Fixed Thread Watcher', o['Toggleable Thread Watcher'] ?? !0),
            null == o['Exempt Archives from Encryption'] &&
              l(
                'Exempt Archives from Encryption',
                o['Except Archives from Encryption'] ?? !1
              )),
          p < '00001.00011.00010.00001' && null != o.selectedArchives)
        ) {
          const e = {
            'Moe': 0,
            '4plebs Archive': 3,
            'Nyafuu Archive': 4,
            'Love is Over': 5,
            'Rebecca Black Tech': 8,
            'warosu': 10,
            'fgts': 15,
            'not4plebs': 22,
            'DesuStorage': 23,
            'fireden.net': 24,
            'disabled': null,
          }
          for (var f in o.selectedArchives) {
            var b = o.selectedArchives[f]
            for (var A in b) {
              var v = b[A]
              Qe.hasOwn(e, v) && (b[A] = e[v])
            }
          }
          l('selectedArchives', o.selectedArchives)
        }
        if (p < '00001.00011.00016.00000') {
          let e
          ;(e = c.usercss.match(/\/\* Board title rice \*\/(?:\n.+)*/)[0]) &&
            null != o.usercss &&
            o.usercss.indexOf(e) < 0 &&
            l('usercss', e + '\n\n' + o.usercss)
        }
        if (p < '00001.00011.00017.00000')
          for (i of [
            'Persistent QR',
            'Color User IDs',
            'Fappe Tyme',
            'Werk Tyme',
            'Highlight Posts Quoting You',
            'Highlight Own Posts',
          ])
            null == o[i] && l(i, 'Persistent QR' === i)
        if (
          (p < '00001.00011.00017.00006' &&
            null != o.sauces &&
            l(
              'sauces',
              o.sauces.replace(
                /^(#?\s*)http:\/\/iqdb\.org\//gm,
                '$1//iqdb.org/'
              )
            ),
          p < '00001.00011.00019.00003' &&
            !Pe.dialog &&
            Qe.queueTask(() =>
              Pe.warnings.ads(e => new _e('warning', [...e.childNodes]))
            ),
          p < '00001.00011.00020.00003')
        ) {
          const e = { 'Inline Cross-thread Quotes Only': !1, 'Pass Link': !0 }
          for (i in e) {
            var w = e[i]
            null == o[i] && l(i, w)
          }
        }
        if (
          (p < '00001.00011.00021.00003' &&
            null == o['Remember Your Posts'] &&
            l('Remember Your Posts', o['Mark Quotes of You'] ?? !0),
          p < '00001.00011.00022.00000' &&
            null != o.sauces &&
            (l(
              'sauces',
              o.sauces.replace(
                /^(#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|URL))%3Fs\.jpg/gm,
                '$1'
              )
            ),
            l(
              'sauces',
              o.sauces.replace(
                /^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(?:IMG|T?URL)(?=$|;)/gm,
                '$&&safe=off'
              )
            )),
          p < '00001.00011.00022.00002' &&
            null == o['Use Recaptcha v1 in Reports'] &&
            o['Use Recaptcha v1'] &&
            !o['Use Recaptcha v2 in Reports'] &&
            l('Use Recaptcha v1 in Reports', !0),
          p < '00001.00011.00024.00000' &&
            null != o['JSON Navigation'] &&
            null == o['JSON Index'] &&
            l('JSON Index', o['JSON Navigation']),
          p < '00001.00011.00026.00000' &&
            (null != o['Oekaki Links'] &&
              null == o['Edit Link'] &&
              l('Edit Link', o['Oekaki Links']),
            null == o['Inline Cross-thread Quotes Only'] &&
              l('Inline Cross-thread Quotes Only', !0)),
          p < '00001.00011.00030.00000' &&
            o['Quote Threading'] &&
            null == o['Thread Quotes'] &&
            l('Thread Quotes', !0),
          p < '00001.00011.00032.00000' &&
            (null != o.sauces &&
              l(
                'sauces',
                o.sauces.replace(
                  /^(#?\s*)http:\/\/3d\.iqdb\.org\//gm,
                  '$1//3d.iqdb.org/'
                )
              ),
            h([
              '#https://desustorage.org/_/search/image/%sMD5/',
              '#https://boards.fireden.net/_/search/image/%sMD5/',
              '#https://foolz.fireden.net/_/search/image/%sMD5/',
              '#//www.gif-explode.com/%URL;types:gif',
            ])),
          p < '00001.00011.00035.00000' &&
            h(['https://whatanime.ga/?auto&url=%IMG;text:wait']),
          p < '00001.00012.00000.00000' &&
            (null == o['Exempt Archives from Encryption'] &&
              l('Exempt Archives from Encryption', !1),
            null == o['Show New Thread Option in Threads'] &&
              l('Show New Thread Option in Threads', !1),
            o['Show Name and Subject'] &&
              u('#qr .persona .field {display: block !important;}'),
            !1 === o['QR Shortcut'] && u('#shortcut-qr {display: none;}'),
            !1 === o['Bottom QR Link'] &&
              u('.qr-link-container-bottom {display: none;}')),
          p < '00001.00012.00000.00006' &&
            null != o.sauces &&
            l(
              'sauces',
              o.sauces.replace(
                /^(#?\s*)https:\/\/(?:desustorage|cuckchan)\.org\//gm,
                '$1https://desuarchive.org/'
              )
            ),
          p < '00001.00012.00001.00000' &&
            null == o['Persistent Thread Watcher'] &&
            null != o['Toggleable Thread Watcher'] &&
            l('Persistent Thread Watcher', !o['Toggleable Thread Watcher']),
          p < '00001.00012.00003.00000')
        )
          for (i of [
            'Image Hover in Catalog',
            'Auto Watch',
            'Auto Watch Reply',
          ])
            d(i, !1)
        if (
          (p < '00001.00013.00001.00002' &&
            h([
              '#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights',
            ]),
          p < '00001.00013.00005.00000' &&
            (null != o.sauces &&
              l(
                'sauces',
                o.sauces.replace(
                  /^(#?\s*)http:\/\/regex\.info\/exif\.cgi/gm,
                  '$1http://exif.regex.info/exif.cgi'
                )
              ),
            h(
              c.sauces
                .match(/# Known filename formats:(?:\n.+)*|$/)[0]
                .split('\n')
            )),
          p < '00001.00013.00007.00002' && d('Require OP Quote Link', !0),
          p < '00001.00013.00008.00000' && d('Download Link', !0),
          p < '00001.00013.00009.00003' && null != o.jsWhitelist)
        ) {
          const e = o.jsWhitelist.split('\n')
          !e.includes('https://cdnjs.cloudflare.com') &&
            e.includes('https://cdn.mathjax.org') &&
            l('jsWhitelist', o.jsWhitelist + '\n\nhttps://cdnjs.cloudflare.com')
        }
        if (
          (p < '00001.00014.00000.00006' &&
            null != o.siteSoftware &&
            l('siteSoftware', o.siteSoftware + '\n4cdn.org yotsuba'),
          p < '00001.00014.00003.00002' &&
            null != o.sauces &&
            l(
              'sauces',
              o.sauces.replace(
                /^(#?\s*)https:\/\/whatanime\.ga\//gm,
                '$1https://trace.moe/'
              )
            ),
          p < '00001.00014.00004.00004' &&
            (null == o.siteSoftware ||
              /^4channel\.org yotsuba$/m.test(o.siteSoftware) ||
              l('siteSoftware', o.siteSoftware + '\n4channel.org yotsuba')),
          p < '00001.00014.00005.00000')
        ) {
          for (var x of y.keys)
            if (o[x]?.boards) {
              var { boards: k, lastChecked: I } = o[x]
              ;(o[x]['4chan.org'] = { boards: k, lastChecked: I }),
                delete o[x].boards,
                delete o[x].lastChecked,
                l(x, o[x])
            }
          if (null != o.siteSoftware && null == o.siteProperties) {
            const e = m()
            for (var C of o.siteSoftware.split('\n')) {
              var [D, E] = C.split(' ')
              e[D] = { software: E }
            }
            l('siteProperties', e)
          }
        }
        return (
          p < '00001.00014.00006.00006' &&
            null != o.sauces &&
            l(
              'sauces',
              o.sauces.replace(
                /\/\/%\$1\.deviantart\.com\/gallery\/#\/d%\$2;regexp:\/\^\\w\+_by_\(\\w\+\)-d\(\[\\da-z\]\+\)\//g,
                '//www.deviantart.com/gallery/#/d%$1%$2;regexp:/^\\w+_by_\\w+[_-]d([\\da-z]{6})\\b|^d([\\da-z]{6})-[\\da-z]{8}-/'
              )
            ),
          p < '00001.00014.00008.00000' &&
            null != o.sauces &&
            l(
              'sauces',
              o.sauces.replace(
                /https:\/\/www\.yandex\.com\/images\/search/g,
                'https://yandex.com/images/search'
              )
            ),
          p < '00001.00014.00009.00000' &&
            null != o.sauces &&
            (l(
              'sauces',
              o.sauces.replace(
                /^(#?\s*)(?:http:)?\/\/(www\.pixiv\.net|www\.deviantart\.com|imgur\.com|flickr\.com)\//gm,
                '$1https://$2/'
              )
            ),
            l(
              'sauces',
              o.sauces.replace(
                /https:\/\/yandex\.com\/images\/search\?rpt=imageview&img_url=%IMG/g,
                'https://yandex.com/images/search?rpt=imageview&url=%IMG'
              )
            )),
          p < '00001.00014.00009.00001' &&
            null != o['Use Faster Image Host'] &&
            null == o.fourchanImageHost &&
            l(
              'fourchanImageHost',
              o['Use Faster Image Host'] ? 'i.4cdn.org' : ''
            ),
          p < '00001.00014.00010.00001' &&
            null == o['Filter in Native Catalog'] &&
            l('Filter in Native Catalog', !1),
          p < '00001.00014.00012.00008' &&
            null == o.boardnav &&
            l(
              'boardnav',
              `[ toggle-all ]\na-replace\nc-replace\ng-replace\nk-replace\nv-replace\nvg-replace\nvr-replace\nck-replace\nco-replace\nfit-replace\njp-replace\nmu-replace\nsp-replace\ntv-replace\nvp-replace\n[external-text:"FAQ","${e.faq}"]`
            ),
          p < '00001.00014.00016.00001' &&
            null != o.archiveLists &&
            l(
              'archiveLists',
              o.archiveLists.replace(
                'https://mayhemydg.github.io/archives.json/archives.json',
                'https://nstepien.github.io/archives.json/archives.json'
              )
            ),
          p < '00001.00014.00016.00007' &&
            null != o.sauces &&
            l(
              'sauces',
              o.sauces
                .replace(
                  /https:\/\/www\.deviantart\.com\/gallery\/#\/d%\$1%\$2;regexp:\/\^\\w\+_by_\\w\+\[_-\]d\(\[\\da-z\]\{6\}\)\\b\|\^d\(\[\\da-z\]\{6\}\)-\[\\da-z\]\{8\}-\//g,
                  'javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/'
                )
                .replace(
                  /\/\/imgops\.com\/%URL/g,
                  '//imgops.com/start?url=%URL'
                )
            ),
          p < '00001.00014.00017.00002' &&
            null != o.jsWhitelist &&
            l(
              'jsWhitelist',
              o.jsWhitelist + '\n\nhttps://hcaptcha.com\nhttps://*.hcaptcha.com'
            ),
          p < '00001.00014.00020.00004' &&
            null != o.archiveLists &&
            l(
              'archiveLists',
              o.archiveLists.replace(
                'https://nstepien.github.io/archives.json/archives.json',
                'https://4chenz.github.io/archives.json/archives.json'
              )
            ),
          p < '00001.00014.00022.00003' &&
            o.sauces &&
            (l(
              'sauces',
              o.sauces.replace(
                /^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(IMG|T?URL)&safe=off(?=$|;)/gm,
                'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'
              )
            ),
            '00001.00014.00022.00002' !== p ||
              /\bsbisrc=/.test(o.sauces) ||
              l(
                'sauces',
                o.sauces.replace(
                  /^#?\s*https:\/\/lens\.google\.com\/uploadbyurl\?url=%(IMG|T?URL)(?=$|;)/m,
                  'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'
                )
              )),
          s
        )
      },
      loadSettings: (e, t) => (
        '2' === e.version.split('.')[0]
          ? (e = Pe.convertFrom.loadletter(e))
          : e.version !== o.VERSION && Pe.upgrade(e.Conf, e.version),
        Qe.clear(function (o) {
          return o ? t(o) : Qe.set(e.Conf, t)
        })
      ),
      reset() {
        if (
          confirm('Your current settings will be entirely wiped, are you sure?')
        )
          return Qe.clear(function (e) {
            return e
              ? (Qe('.imp-exp-result').textContent =
                  'Import failed due to an error.')
              : confirm('Reset successful. Reload now?')
                ? window.location.reload()
                : void 0
          })
      },
      filter(e) {
        Qe.extend(e, {
          innerHTML:
            '<select name="filter">\n  <option value="guide">Guide</option>\n  <option value="general">General</option>\n  <option value="postID">Post number</option>\n  <option value="name">Name</option>\n  <option value="uniqueID">Unique ID</option>\n  <option value="tripcode">Tripcode</option>\n  <option value="capcode">Capcode</option>\n  <option value="pass">Pass Date</option>\n  <option value="email">Email</option>\n  <option value="subject">Subject</option>\n  <option value="comment">Comment</option>\n  <option value="flag">Flag</option>\n  <option value="filename">Filename</option>\n  <option value="dimensions">Image dimensions</option>\n  <option value="filesize">Filesize</option>\n  <option value="MD5">Image MD5</option>\n  </select>\n<div></div>\n',
        })
        const t = Qe('select', e)
        return Qe.on(t, 'change', Pe.selectFilter), Pe.selectFilter.call(t)
      },
      selectFilter() {
        let e
        const o = this.nextElementSibling
        if ('guide' !== (e = this.value)) {
          if (!Qe.hasOwn(c.filter, e)) return
          Qe.rmAll(o)
          const n = Qe.el('textarea', {
            name: e,
            className: 'field',
            spellcheck: !1,
          })
          return (
            Qe.on(n, 'change', Qe.cb.value),
            void Qe.get(e, t[e], function (t) {
              return (n.value = t[e]), Qe.add(o, n)
            })
          )
        }
        return (
          Object.keys(c.filter)
            .filter(e => 'general' !== e)
            .map((e, t) => ({ innerHTML: (t ? ',' : '') + `<wbr>${n(e)}` })),
          Qe.extend(o, {
            innerHTML:
              '<div class="warning"><code>Filter</code> is disabled.</div>\n<p>\n  Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expressions</a>, one per line.<br>\n  Lines starting with a <code>#</code> will be ignored.<br>\n  For example, <code>/weeaboo/i</code> will filter posts containing the string `<code>weeaboo</code>`, case-insensitive.<br>\n  MD5 and Unique ID filtering use exact string matching, not regular expressions.\n</p>\n<ul>You can use these settings with each regular expression, separate them with semicolons:\n  <li>\n    Per boards, separate them with commas. It is global if not specified. Use <code>sfw</code> and <code>nsfw</code> to reference all worksafe or not-worksafe boards.<br>\n    For example: <code>boards:a,jp;</code>.<br>\n    To specify boards on a particular site, put the beginning of the domain and a slash character before the list.<br>\n    Any initial <code>www.</code> should not be included, and all 4chan domains are considered <code>4chan.org</code>.<br>\n    For example: <code>boards:4:a,jp,sama:a,z;</code>.<br>\n    An asterisk can be used to specify all boards on a site.<br>\n    For example: <code>boards:4:*;</code>.<br>\n  </li>\n  <li>\n    Select boards to be excluded from the filter. The syntax is the same as for the <code>boards:</code> option above.<br>\n    For example: <code>exclude:vg,v;</code>.\n  </li>\n  <li>\n    Filter OPs only along with their threads (`only`) or replies only (`no`).<br>\n    For example: <code>op:only;</code> or <code>op:no;</code>.\n  </li>\n  <li>\n    Filter only posts with files (`only`) or only posts without files (`no`).<br>\n    For example: <code>file:only;</code> or <code>file:no;</code>.\n  </li>\n  <li>\n    Overrule the `Show Stubs` setting if specified: create a stub (`yes`) or not (`no`).<br>\n    For example: <code>stub:yes;</code> or <code>stub:no;</code>.\n  </li>\n  <li>\n    Highlight instead of hiding. You can specify a class name to use with a userstyle.<br>\n    For example: <code>highlight;</code> or <code>highlight:wallpaper;</code>.\n  </li>\n  <li>\n    Highlighted OPs will have their threads put on top of the board index by default.<br>\n    For example: <code>top:yes;</code> or <code>top:no;</code>.\n  </li>\n  <li>\n    Show a desktop notification instead of hiding.<br>\n    For example: <code>notify;</code>.\n  </li>\n  <li>\n    Filters in the "General" section apply to multiple fields, by default <code>subject,name,filename,comment</code>.<br>\n    The fields can be specified with the <code>type</code> option, separated by commas.<br>\n    For example: <code>type:@{filterTypes};</code>.<br>\n    Types can also be combined with a <code>+</code> sign; this indicates the filter applies to the given fields joined by newlines.<br>\n    For example: <code>type:filename+filesize+dimensions;</code>.<br>\n  </li>\n</ul>\n',
          }),
          (Qe('.warning', o).hidden = t.Filter)
        )
      },
      sauce(e) {
        Qe.extend(e, {
          innerHTML:
            '<div class="warning"><code>Sauce</code> is disabled.</div>\n<input id="sauce-doc-expand" type="checkbox" hidden>\n<div id="sauce-doc">\n  <label for="sauce-doc-expand">[expand]</label>\n  <div>These parameters will be replaced by their corresponding values in the URL and displayed text:</div>\n  <ul>\n    <li><code>%IMG</code>: Full image URL for GIF, JPG, and PNG; thumbnail URL for other types.</li>\n    <li><code>%URL</code>: Full image URL.</li>\n    <li><code>%TURL</code>: Thumbnail URL.</li>\n    <li><code>%name</code>: Original file name.</li>\n    <li><code>%board</code>: Current board.</li>\n    <li><code>%MD5</code>: MD5 hash in base64.</li>\n    <li><code>%sMD5</code>: MD5 hash in base64 using <code>-</code> and <code>_</code>.</li>\n    <li><code>%hMD5</code>: MD5 hash in hexadecimal.</li>\n    <li><code>%$0</code>: Matched regular expression within the filename.</li>\n    <li><code>%$1</code>, <code>%$2</code>, <code>%$3</code>, ... : Subexpressions within the matched regular expression.</li>\n    <li><code>%%</code>, <code>%semi</code>: Literal <code>%</code> and <code>;</code>.</li>\n  </ul>\n  <div>Lines starting with a <code>#</code> will be ignored.</div>\n  <div>You can specify a display text by appending <code>;text:[text]</code> to the URL.</div>\n  <div>You can specify the applicable boards/sites by appending <code>;boards:[board1],[board2]</code>. See the Filter guide for details.</div>\n  <div>You can specify the applicable file types by appending <code>;types:[extension1],[extension2]</code>.</div>\n  <div>You can specify a regular expression the filename must match by appending <code>;regexp:[regular expression]</code>.</div>\n</div>\n<textarea hidden name="sauces" class="field" spellcheck="false"></textarea>\n',
        }),
          (Qe('.warning', e).hidden = t.Sauce)
        const o = Qe('textarea', e)
        return (
          Qe.get('sauces', t.sauces, function (e) {
            return (o.value = e.sauces), (o.hidden = !1)
          }),
          Qe.on(o, 'change', Qe.cb.value)
        )
      },
      advanced(e) {
        let o, n
        for (var a of (Qe.extend(e, {
          innerHTML:
            '<fieldset>\n  <legend>Archives</legend>\n  <div class="warning" data-feature="404 Redirect"><code>404 Redirect</code> is disabled.</div>\n  <select id="archive-board-select"></select>\n  <table id="archive-table">\n    <thead>\n      <th>Thread redirection</th>\n      <th>Post fetching</th>\n      <th>File redirection</th>\n    </thead>\n    <tbody></tbody>\n  </table>\n  <br>\n  <div>\n    <b>Archive Lists</b>: Each line below should be an archive list in <a href="https://github.com/MayhemYDG/archives.json/blob/gh-pages/CONTRIBUTING.md" target="_blank">this format</a> or a URL to load an archive list from.<br>\n    Archive properties can be overriden by another item with the same <code>uid</code> (or if absent, its <code>name</code>).\n  </div>\n  <textarea hidden name="archiveLists" class="field" spellcheck="false"></textarea>\n  <button id="update-archives">Update now</button> Last updated: <time id="lastarchivecheck"></time> <label><input type="checkbox" name="archiveAutoUpdate"> Auto-update</label>\n</fieldset>\n\n<fieldset>\n  <legend>External Catalog</legend>\n  <div class="warning" data-feature="External Catalog"><code>External Catalog</code> is disabled. This will be used only as a fallback.</div>\n  <div>\n    URLs of external catalog sites, where <code>%board</code> is to be replaced by the board name.<br>\n    Each URL should be followed by <code>;boards:</code> and optionally <code>;exclude:</code> and a list of supported/excluded boards in the format explained in the Filter guide.\n  </div>\n  <textarea hidden name="externalCatalogURLs" class="field" spellcheck="false"></textarea>\n</fieldset>\n\n<fieldset>\n  <legend>Override 4chan Image Host</legend>\n  <div>Change 4chan image links to this domain. Leave blank for no change.</div>\n  <div><input name="fourchanImageHost" class="field" spellcheck="false" list="list-fourchanImageHost"></div>\n  <datalist id="list-fourchanImageHost"></datalist>\n</fieldset>\n\n<fieldset>\n  <legend>Captcha Language</legend>\n  <div>Choose from <a href="https://developers.google.com/recaptcha/docs/language" target="_blank">list of language codes</a>. Leave blank to autoselect.</div>\n  <div><input name="captchaLanguage" class="field" spellcheck="false"></div>\n</fieldset>\n\n<fieldset>\n  <legend>Custom Board Navigation</legend>\n  <div><textarea hidden name="boardnav" class="field" spellcheck="false"></textarea></div>\n  <span class="note">New lines will be converted into spaces.</span><br><br>\n  <div class="note">In the following examples for /g/, <code>g</code> can be changed to a different board ID (<code>a</code>, <code>b</code>, etc...), the current board (<code>current</code>), or the Twitter link (<code>@</code>).</div>\n  <div>Board link: <code>g</code></div>\n  <div>Archive link: <code>g-archive</code></div>\n  <div>Internal archive link: <code>g-expired</code></div>\n  <div>Title link: <code>g-title</code></div>\n  <div>Board link (Replace with title when on that board): <code>g-replace</code></div>\n  <div>Full text link: <code>g-full</code></div>\n  <div>Custom text link: <code>g-text:&quot;Install Gentoo&quot;</code></div>\n  <div>Index-only link: <code>g-index</code></div>\n  <div>Catalog-only link: <code>g-catalog</code></div>\n  <div>Index mode: <code>g-mode:&quot;infinite scrolling&quot;</code></div>\n  <div>Index sort: <code>g-sort:&quot;creation date rev&quot;</code></div>\n  <div>External link: <code>external-text:&quot;Google&quot;,&quot;http://www.google.com&quot;</code></div>\n  <div>Open in new tab: <code>g-nt</code></div>\n  <div>Combinations are possible: <code>g-index-text:&quot;Technology Index&quot;</code></div>\n  <div>Full board list toggle: <code>toggle-all</code></div>\n  <br>\n  <div class="note">\n    <code>[ toggle-all ] [current-title] [g-title / a-title / jp-title] [x / wsg / h] [t-text:&quot;Piracy&quot;]</code><br>\n    will give you<br>\n    <code>[ + ] [Technology] [Technology / Anime & Manga / Otaku Culture] [x / wsg / h] [Piracy]</code><br>\n    if you are on /g/.\n  </div>\n</fieldset>\n\n<fieldset>\n  <legend>Time Formatting <span class="warning" data-feature="Time Formatting">is disabled.</span></legend>\n  <div><input name="time" class="field" spellcheck="false">: <span class="time-preview"></span></div>\n  <div>Supported <a href="http://man7.org/linux/man-pages/man1/date.1.html" target="_blank">format specifiers</a>:</div>\n  <div>Day: <code>%a</code>, <code>%A</code>, <code>%d</code>, <code>%e</code></div>\n  <div>Month: <code>%m</code>, <code>%b</code>, <code>%B</code></div>\n  <div>Year: <code>%y</code>, <code>%Y</code></div>\n  <div>Hour: <code>%k</code>, <code>%H</code>, <code>%l</code>, <code>%I</code>, <code>%p</code>, <code>%P</code></div>\n  <div>Minute: <code>%M</code></div>\n  <div>Second: <code>%S</code></div>\n  <div>Literal <code>%</code>: <code>%%</code></div>\n  <div><a href="https://www.w3.org/International/articles/language-tags/" target="_blank">Language tag</a>: <input name="timeLocale" class="field" spellcheck="false"> (needs page reload)</div>\n</fieldset>\n\n<fieldset>\n  <legend>Quote Backlinks formatting <span class="warning" data-feature="Quote Backlinks">is disabled.</span></legend>\n  <div><input name="backlink" class="field" spellcheck="false">: <span class="backlink-preview"></span></div>\n</fieldset>\n\n<fieldset>\n  <legend>Default pasted content filename</legend>\n  <div><input name="pastedname" class="field" spellcheck="false">.png</div>\n</fieldset>\n\n<fieldset>\n  <legend>File Info Formatting <span class="warning" data-feature="File Info Formatting">is disabled.</span></legend>\n  <div><input name="fileInfo" class="field" spellcheck="false">: <span class="file-info file-info-preview"></span></div>\n  <div>Link: <code>%l</code> (truncated), <code>%L</code> (untruncated), <code>%T</code> (4chan filename)</div>\n  <div>Filename: <code>%n</code> (truncated), <code>%N</code> (untruncated), <code>%t</code> (4chan filename)</div>\n  <div>Download button: <code>%d</code></div>\n  <div>Quick filter MD5: <code>%f</code></div>\n  <div>Spoiler indicator: <code>%p</code></div>\n  <div>Size: <code>%B</code> (Bytes), <code>%K</code> (KB), <code>%M</code> (MB), <code>%s</code> (4chan default)</div>\n  <div>Resolution: <code>%r</code> (Displays &#039;PDF&#039; for PDF files)</div>\n  <div>Tag: <code>%g</code>\n  <div>Literal <code>%</code>: <code>%%</code></div>\n</fieldset>\n\n<fieldset>\n  <legend>Quick Reply Personas</legend>\n  <textarea hidden class="personafield field" name="QR.personas" spellcheck="false"></textarea>\n  <p>\n    One item per line.<br>\n    Items will be added in the relevant input&#039;s auto-completion list.<br>\n    Password items will always be used, since there is no password input.<br>\n    Lines starting with a <code>#</code> will be ignored.\n  </p>\n  <ul>You can use these settings with each item, separate them with semicolons:\n    <li>Possible items are: <code>name</code>, <code>options</code> (or equivalently <code>email</code>), <code>subject</code> and <code>password</code>.</li>\n    <li>Wrap values of items with quotes, like this: <code>options:&quot;sage&quot;</code>.</li>\n    <li>Force values as defaults with the <code>always</code> keyword, for example: <code>options:&quot;sage&quot;;always</code>.</li>\n    <li>Select specific boards for an item, separated with commas, for example: <code>options:&quot;sage&quot;;boards:jp;always</code>.</li>\n  </ul>\n</fieldset>\n\n<fieldset>\n  <legend>Unread Favicon <span class="warning" data-feature="Unread Favicon">is disabled.</span></legend>\n  <select name="favicon">\n    <option value="ferongr">ferongr</option>\n    <option value="xat-">xat-</option>\n    <option value="4chanJS">4chanJS</option>\n    <option value="Mayhem">Mayhem</option>\n    <option value="Original">Original</option>\n    <option value="Metro">Metro</option>\n  </select>\n  <span class="favicon-preview"></span>\n</fieldset>\n\n<fieldset>\n  <legend>Thread Updater <span class="warning" data-feature="Thread Updater">is disabled.</span></legend>\n  <div>\n    Interval: <input type="number" name="Interval" class="field" min="1"> seconds\n  </div>\n</fieldset>\n\n<fieldset>\n    <legend>Custom Cooldown Time</legend>\n    <div>\n        Seconds: <input type="number" name="customCooldown" class="field" min="0">\n    </div>\n</fieldset>\n\n<fieldset>\n  <legend>\n    <label><input type="checkbox" name="Custom CSS"> Custom CSS</label>\n  </legend>\n  <div>For more information about customizing 4chan X&#039;s CSS, see the <a href="https://github.com/ccd0/4chan-x/wiki/Styling-Guide" target="_blank">styling guide</a>.</div>\n  <button id="apply-css">Apply CSS</button>\n  <textarea hidden name="usercss" class="field" spellcheck="false"></textarea>\n</fieldset>\n\n<fieldset>\n  <legend>Javascript Whitelist</legend>\n  <div>\n    Sources from which Javascript is allowed to be loaded by <a href="http://content-security-policy.com/#source_list" target="_blank">Content Security Policy</a>.<br>\n    Lines starting with a <code>#</code> will be ignored.\n  </div>\n  <textarea hidden name="jsWhitelist" class="field" spellcheck="false"></textarea>\n</fieldset>\n\n<fieldset>\n  <legend>Known Banners</legend>\n  <div>List of known banners, used for click-to-change feature.</div>\n  <textarea hidden name="knownBanners" class="field" spellcheck="false"></textarea>\n</fieldset>\n',
        }),
        u('.warning', e)))
          a.hidden = t[a.dataset.feature]
        const i = m()
        for (o of u('[name]', e)) i[o.name] = o
        Qe.on(i.archiveLists, 'change', function () {
          return (
            Qe.set('lastarchivecheck', 0),
            (t.lastarchivecheck = 0),
            (Qe.id('lastarchivecheck').textContent = 'never')
          )
        })
        const r = m()
        for (n in i)
          if (((o = i[n]), !['Interval', 'Custom CSS'].includes(n))) {
            r[n] = t[n]
            var s =
              'SELECT' === o.nodeName ||
              ['checkbox', 'radio'].includes(o.type) ||
              ('TEXTAREA' === o.nodeName && !(n in Pe))
                ? 'change'
                : 'input'
            Qe.on(o, s, Qe.cb['checkbox' === o.type ? 'checked' : 'value']),
              n in Pe && Qe.on(o, s, Pe[n])
          }
        Qe.get(r, function (e) {
          for (var t in e) {
            var n = e[t]
            ;(o = i[t]),
              (o['checkbox' === o.type ? 'checked' : 'value'] = n),
              (o.hidden = !1),
              t in Pe && Pe[t].call(o)
          }
        })
        const l = Qe.id('list-fourchanImageHost')
        for (var d of O.suggestions)
          Qe.add(l, Qe.el('option', { textContent: d }))
        const c = i.Interval,
          h = i['Custom CSS'],
          p = Qe('#apply-css', e)
        ;(c.value = t.Interval),
          (h.checked = t['Custom CSS']),
          (i.usercss.disabled = !t['Custom CSS']),
          (p.disabled = !t['Custom CSS']),
          Qe.on(c, 'change', Be.cb.interval),
          Qe.on(h, 'change', Pe.togglecss),
          Qe.on(p, 'click', () => ve.update())
        const g = m()
        for (n of ['archives', 'selectedArchives', 'lastarchivecheck'])
          g[n] = t[n]
        Qe.get(g, function (o) {
          return Qe.extend(t, o), et.selectArchives(), Pe.addArchiveTable(e)
        })
        const f = Qe('#archive-board-select', e),
          b = Qe('#archive-table', e),
          A = Qe('#update-archives', e)
        return (
          Qe.on(f, 'change', function () {
            return (
              (Qe('tbody > :not([hidden])', b).hidden = !0),
              (Qe(`tbody > .${this.value}`, b).hidden = !1)
            )
          }),
          Qe.on(A, 'click', () => et.update(() => Pe.addArchiveTable(e)))
        )
      },
      addArchiveTable(e) {
        let n, a
        Qe('#lastarchivecheck', e).textContent =
          0 === t.lastarchivecheck
            ? 'never'
            : new Date(t.lastarchivecheck).toLocaleString()
        const i = Qe('#archive-board-select', e),
          r = Qe('#archive-table', e),
          s = Qe('tbody', e)
        Qe.rmAll(i), Qe.rmAll(s)
        const l = m()
        for (var {
          uid: d,
          name: c,
          boards: h,
          files: u,
          software: p,
        } of t.archives)
          if (['fuuka', 'foolfuuka'].includes(p))
            for (n of h) {
              a = l[n] || (l[n] = { thread: [], post: [], file: [] })
              var g = [d ?? c, c]
              a.thread.push(g),
                'foolfuuka' === p && a.post.push(g),
                u.includes(n) && a.file.push(g)
            }
        const f = [],
          b = []
        for (n of Object.keys(l).sort()) {
          var A = Qe.el('tr', { className: `board-${n}` })
          for (var v of ((A.hidden = n !== o.BOARD.ID),
          b.push(
            Qe.el('option', {
              textContent: `/${n}/`,
              value: `board-${n}`,
              selected: n === o.BOARD.ID,
            })
          ),
          (a = l[n]),
          ['thread', 'post', 'file']))
            Qe.add(A, Pe.addArchiveCell(n, a, v))
          f.push(A)
        }
        if (0 !== f.length)
          for (n in ((i.hidden = r.hidden = !1),
          o.BOARD.ID in l || (f[0].hidden = !1),
          Qe.add(i, b),
          Qe.add(s, f),
          t.selectedArchives)) {
            var w = t.selectedArchives[n]
            for (var x in w) {
              var y,
                k = w[x]
              ;(y = Qe(`select[data-boardid='${n}'][data-type='${x}']`, s)) &&
                ((y.value = JSON.stringify(k)),
                y.value || (y.value = y.firstChild.value))
            }
          }
        else i.hidden = r.hidden = !0
      },
      addArchiveCell(e, t, o) {
        const { length: n } = t[o],
          a = Qe.el('td', { className: 'archive-cell' })
        if (!n) return (a.textContent = '--'), a
        const i = []
        let r = 0
        for (; r < n; ) {
          var s = t[o][r++]
          i.push(
            Qe.el('option', { value: JSON.stringify(s[0]), textContent: s[1] })
          )
        }
        Qe.extend(a, { innerHTML: '<select></select>' })
        const l = a.firstElementChild
        return (
          (l.disabled = 1 === n) ||
            (l.setAttribute('data-boardid', e),
            l.setAttribute('data-type', o),
            Qe.on(l, 'change', Pe.saveSelectedArchive)),
          Qe.add(l, i),
          a
        )
      },
      saveSelectedArchive() {
        return Qe.get(
          'selectedArchives',
          t.selectedArchives,
          ({ selectedArchives: e }) => (
            ((e[this.dataset.boardid] || (e[this.dataset.boardid] = m()))[
              this.dataset.type
            ] = JSON.parse(this.value)),
            Qe.set('selectedArchives', e),
            (t.selectedArchives = e),
            et.selectArchives()
          )
        )
      },
      boardnav() {
        return Xe.generateBoardList(this.value)
      },
      time() {
        return (this.nextElementSibling.textContent = Se.format(
          this.value,
          new Date()
        ))
      },
      timeLocale: () => Pe.time.call(Qe('[name=time]', Pe.dialog)),
      backlink() {
        return (this.nextElementSibling.textContent = this.value.replace(
          /%(?:id|%)/g,
          e => ({ '%id': '123456789', '%%': '%' })[e]
        ))
      },
      fileInfo() {
        const e = {
          isReply: !0,
          file: {
            url: `//${O.host()}/g/1334437723720.jpg`,
            name: 'd9bb2efc98dd0df141a94399ff5880b7.jpg',
            size: '276 KB',
            sizeInBytes: 282624,
            dimensions: '1280x720',
            isImage: !0,
            isVideo: !1,
            isSpoiler: !0,
            tag: 'Loop',
          },
        }
        return Ee.format(this.value, e, this.nextElementSibling)
      },
      favicon() {
        h.switch(), 'thread' === o.VIEW && t['Unread Favicon'] && ee.update()
        const e = this.nextElementSibling.children,
          n = h,
          a = [
            n.SFW,
            n.unreadSFW,
            n.unreadSFWY,
            n.NSFW,
            n.unreadNSFW,
            n.unreadNSFWY,
            n.dead,
            n.unreadDead,
            n.unreadDeadY,
          ]
        for (let t = 0; t < a.length; t++) {
          var i = a[t]
          e[t] || Qe.add(this.nextElementSibling, Qe.el('img')), (e[t].src = i)
        }
      },
      togglecss() {
        return (
          (Qe(
            'textarea[name=usercss]',
            Qe.x('ancestor::fieldset[1]', this)
          ).disabled = Qe.id('apply-css').disabled =
            !this.checked)
            ? ve.rmStyle()
            : ve.addStyle(),
          Qe.cb.checked.call(this)
        )
      },
      keybinds(e) {
        let o
        Qe.extend(e, {
          innerHTML:
            '<div class="warning"><code>Keybinds</code> are disabled.</div>\n<div>Allowed keys: <kbd>a-z</kbd>, <kbd>0-9</kbd>, <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>, <kbd>Up</kbd>, <kbd>Down</kbd>, <kbd>Right</kbd>, <kbd>Left</kbd>.</div>\n<div>Press <kbd>Backspace</kbd> to disable a keybind.</div>\n<table><tbody>\n  <tr><th>Actions</th><th>Keybinds</th></tr>\n</tbody></table>\n',
        }),
          (Qe('.warning', e).hidden = t.Keybinds)
        const n = Qe('tbody', e),
          a = m(),
          i = m()
        for (o in c.hotkeys) {
          var r = c.hotkeys[o],
            s = Qe.el('tr', {
              innerHTML: `<td>${r[1]}</td><td><input class="field"></td>`,
            }),
            l = Qe('input', s)
          ;(l.name = o),
            (l.spellcheck = !1),
            (a[o] = t[o]),
            (i[o] = l),
            Qe.on(l, 'keydown', Pe.keybind),
            Qe.add(n, s)
        }
        return Qe.get(a, function (e) {
          for (o in e) {
            var t = e[o]
            i[o].value = t
          }
        })
      },
      keybind(e) {
        let t
        if (
          9 !== e.keyCode &&
          (e.preventDefault(), e.stopPropagation(), null != (t = Oe.keyCode(e)))
        )
          return (this.value = t), Qe.cb.value.call(this)
      },
    },
    Me = {
      init() {
        if (
          (t['Fappe Tyme'] || t['Werk Tyme']) &&
          ['index', 'thread', 'archive'].includes(o.VIEW)
        ) {
          for (var e of ((this.nodes = {}),
          (this.enabled = { fappe: !1, werk: t.werk }),
          ['Fappe', 'Werk']))
            if (t[`${e} Tyme`]) {
              var n = e.toLowerCase(),
                a = L.checkbox(n, `${e} Tyme`, !1)
              ;(a.title = `${e} Tyme`),
                (this.nodes[n] = a.firstElementChild),
                t[n] && this.set(n, !0),
                Qe.on(this.nodes[n], 'change', this.toggle.bind(this, n)),
                Xe.menu.addEntry({ el: a, order: 97 })
              var i = Qe.el('span', {
                className: 'indicator',
                textContent: e[0],
                title: `${e} Tyme active`,
              })
              Qe.on(i, 'click', function () {
                const e = Qe.getOwn(
                  Me.nodes,
                  this.parentNode.id.replace('shortcut-', '')
                )
                return (e.checked = !e.checked), Qe.event('change', null, e)
              }),
                Xe.addShortcut(n, i, 410)
            }
          return (
            t['Werk Tyme'] && Qe.sync('werk', this.set.bind(this, 'werk')),
            l.Post.push({ name: 'Fappe Tyme', cb: this.node }),
            l.CatalogThread.push({ name: 'Werk Tyme', cb: this.catalogNode })
          )
        }
      },
      node() {
        return this.nodes.root.classList.toggle('noFile', !this.files.length)
      },
      catalogNode() {
        const e = this.thread.OP.files[0]
        if (!e) return
        const t = Qe.el('div', {
          textContent: e.name,
          className: 'werkTyme-filename',
        })
        return Qe.add(this.nodes.thumb.parentNode, t)
      },
      set(e, t) {
        return (
          (this.enabled[e] = this.nodes[e].checked = t),
          Qe[(t ? 'add' : 'rm') + 'Class'](i, `${e}Tyme`)
        )
      },
      toggle(e) {
        if ((this.set(e, !this.enabled[e]), 'werk' === e))
          return Qe.cb.checked.call(this.nodes[e])
      },
    },
    Ne = {
      init() {
        let e
        if (!['index', 'thread'].includes(o.VIEW) || !t.Sauce) return
        Qe.addClass(i, 'show-sauce')
        const n = []
        for (e of t.sauces.split('\n')) {
          var a
          '#' !== e[0] && (a = this.parseLink(e)) && n.push(a)
        }
        return n.length
          ? ((this.links = n),
            (this.link = Qe.el('a', { target: '_blank', className: 'sauce' })),
            l.Post.push({ name: 'Sauce', cb: this.node }))
          : void 0
      },
      parseLink(e) {
        if (!(e = e.trim())) return null
        const t = m(),
          o = e.split(/;(?=(?:text|boards|types|regexp|sandbox):?)/)
        for (let e = 0; e < o.length; e++) {
          var n = o[e]
          if (0 === e) t.url = n
          else {
            var a = n.match(/^(\w*):?(.*)$/)
            t[a[1]] = a[2]
          }
        }
        if (
          (t.text || (t.text = t.url.match(/(\w+)\.\w+\//)?.[1] || '?'),
          'boards' in t && (t.boards = Ge.parseBoards(t.boards)),
          'regexp' in t)
        )
          try {
            let e
            ;(e = t.regexp.match(/^\/(.*)\/(\w*)$/))
              ? (t.regexp = RegExp(e[1], e[2]))
              : (t.regexp = RegExp(t.regexp))
          } catch (t) {
            return (
              new _e(
                'warning',
                [
                  Qe.tn('Invalid regexp for Sauce link:'),
                  Qe.el('br'),
                  Qe.tn(e),
                  Qe.el('br'),
                  Qe.tn(t.message),
                ],
                60
              ),
              null
            )
          }
        return t
      },
      createSauceLink(e, t, n) {
        let a, i, r
        const s = n.url.match(/[^.]*$/)[0],
          l = m()
        if (
          (Qe.extend(l, e),
          l.boards &&
            !l.boards[`${t.siteID}/${t.boardID}`] &&
            !l.boards[`${t.siteID}/*`])
        )
          return null
        if (l.types && ((r = s), !l.types.split(',').includes(r))) return null
        if (l.regexp && !(i = n.name.match(l.regexp))) return null
        const d = []
        for (var c of ['url', 'text'])
          l[c] = l[c].replace(
            /%(T?URL|IMG|[sh]?MD5|board|name|%|semi|\$\d+)/g,
            function (e, o) {
              let a
              if ('$' === o[0]) {
                if (!i) return e
                a = i[o.slice(1)] || ''
              } else if (((a = Ne.formatters[o](t, n, s)), null == a))
                return d.push(o), ''
              return (
                'url' !== c ||
                  ['%', 'semi'].includes(o) ||
                  (/^javascript:/i.test(l.url) && (a = JSON.stringify(a)),
                  (a = encodeURIComponent(a))),
                a
              )
            }
          )
        return o.SITE.areMD5sDeferred?.(t.board) &&
          d.length &&
          !d.filter(e => !/^.?MD5$/.test(e)).length
          ? ((a = Ne.link.cloneNode(!1)), (a.dataset.skip = '1'), a)
          : d.length
            ? null
            : ((a = Ne.link.cloneNode(!1)),
              (a.href = l.url),
              (a.textContent = l.text),
              /^javascript:/i.test(l.url) && a.removeAttribute('target'),
              a)
      },
      node() {
        if (!this.isClone) for (var e of this.files) Ne.file(this, e)
      },
      file(e, t) {
        let o, n
        const a = [],
          i = []
        for (o of Ne.links)
          (n = Ne.createSauceLink(o, e, t)) &&
            (a.push(Qe.tn(' '), n), n.dataset.skip && i.push([o, n]))
        if ((Qe.add(t.text, a), i.length)) {
          var r = new MutationObserver(function () {
            if (t.text.dataset.md5) {
              for ([o, n] of i) {
                var a
                ;(a = Ne.createSauceLink(o, e, t)) && Qe.replace(n, a)
              }
              return r.disconnect()
            }
          })
          return r.observe(t.text, { attributes: !0 })
        }
      },
      formatters: {
        'TURL': (e, t) => t.thumbURL,
        'URL': (e, t) => t.url,
        'IMG': (e, t, o) =>
          ['gif', 'jpg', 'jpeg', 'png'].includes(o) ? t.url : t.thumbURL,
        'MD5': (e, t) => t.MD5,
        'sMD5': (e, t) =>
          t.MD5?.replace(/[+/=]/g, e => ({ '+': '-', '/': '_', '=': '' })[e]),
        'hMD5'(e, t) {
          if (t.MD5)
            return atob(t.MD5)
              .map(e => `0${e.charCodeAt(0).toString(16)}`.slice(-2))
              .join('')
        },
        'board': e => e.board.ID,
        'name': (e, t) => t.name,
        '%': () => '%',
        'semi': () => ';',
      },
    },
    Le = {
      init() {
        if (!(this.enabled = t.Gallery && ['index', 'thread'].includes(o.VIEW)))
          return
        this.delay = t['Slide Delay']
        const e = Qe.el('a', {
          href: 'javascript:;',
          title: 'Gallery',
          textContent: '🖼︎',
        })
        return (
          Qe.on(e, 'click', this.cb.toggle),
          Xe.addShortcut('gallery', e, 530),
          l.Post.push({ name: 'Gallery', cb: this.node })
        )
      },
      node() {
        return (() => {
          const e = []
          for (var n of this.files)
            n.thumb &&
              (Le.nodes &&
                (Le.generateThumb(this, n),
                (Le.nodes.total.textContent = Le.images.length)),
              t['Image Expansion'] ||
              ('tinyboard' === o.SITE.software && jt.jsEnabled)
                ? e.push(void 0)
                : e.push(Qe.on(n.thumbLink, 'click', Le.cb.image)))
          return e
        })()
      },
      build(e) {
        let n, r
        const { cb: s } = Le
        t['Fullscreen Gallery'] &&
          (Qe.one(
            a,
            'fullscreenchange mozfullscreenchange webkitfullscreenchange',
            () =>
              Qe.on(
                a,
                'fullscreenchange mozfullscreenchange webkitfullscreenchange',
                s.close
              )
          ),
          i.mozRequestFullScreen?.(),
          i.webkitRequestFullScreen?.(Element.ALLOW_KEYBOARD_INPUT)),
          (Le.images = [])
        const l = (Le.nodes = {})
        ;(Le.fileIDs = m()),
          (Le.slideshow = !1),
          (l.el = n = Qe.el('div', { id: 'a-gallery' })),
          Qe.extend(n, {
            innerHTML:
              '<div class="gal-viewport">\n  <span class="gal-buttons">\n    <a href="javascript:;" class="gal-start" title="Start slideshow"><i></i></a>\n    <a href="javascript:;" class="gal-stop" title="Stop slideshow"><i></i></a>\n    <a href="javascript:;" class="menu-button"><i></i></a>\n    <a href="javascript:;" class="gal-close">×</a>\n  </span>\n  <div class="gal-labels">\n    <span class="gal-count">\n      <span class="count"></span> / <span class="total"></span>\n    </span>\n    <a class="gal-name" target="_blank"></a>\n    <span class="gal-sauce"></span>\n  </div>\n  <div class="gal-prev"></div>\n  <div class="gal-image">\n    <a href="javascript:;"><img></a>\n  </div>\n  <div class="gal-next"></div>\n</div>\n<div class="gal-thumbnails"></div>\n',
          })
        const d = {
          buttons: '.gal-buttons',
          frame: '.gal-image',
          name: '.gal-name',
          count: '.count',
          total: '.total',
          sauce: '.gal-sauce',
          thumbs: '.gal-thumbnails',
          next: '.gal-image a',
          current: '.gal-image img',
        }
        for (var c in d) {
          var h = d[c]
          l[c] = Qe(h, n)
        }
        const p = Qe('.menu-button', n)
        for (var g of ((l.menu = new L.Menu('gallery')),
        Qe.on(l.frame, 'click', s.blank),
        t['Mouse Wheel Volume'] && Qe.on(l.frame, 'wheel', $.wheel),
        Qe.on(l.next, 'click', s.click),
        Qe.on(l.name, 'click', j.download),
        Qe.on(Qe('.gal-prev', n), 'click', s.prev),
        Qe.on(Qe('.gal-next', n), 'click', s.next),
        Qe.on(Qe('.gal-start', n), 'click', s.start),
        Qe.on(Qe('.gal-stop', n), 'click', s.stop),
        Qe.on(Qe('.gal-close', n), 'click', s.close),
        Qe.on(p, 'click', function (e) {
          return l.menu.toggle(e, this, o)
        }),
        Le.menu.createSubEntries()))
          (g.order = 0), l.menu.addEntry(g)
        for (var f of (Qe.on(a, 'keydown', s.keybinds),
        t.Keybinds && Qe.off(a, 'keydown', Oe.keydown),
        Qe.on(window, 'resize', Le.cb.setHeight),
        u(o.SITE.selectors.file.thumb))) {
          var b
          if ((b = We.postFromNode(f)))
            for (var A of b.files)
              if (
                A.thumb &&
                (Le.generateThumb(b, A),
                !e && Le.fileIDs[`${b.fullID}.${A.index}`])
              ) {
                var v = A.thumbLink
                Xe.getTopOf(v) + v.getBoundingClientRect().height >= 0 &&
                  (e = v)
              }
        }
        return (
          Qe.addClass(i, 'gallery-open'),
          Qe.add(a.body, n),
          (l.thumbs.scrollTop = 0),
          (l.current.parentElement.scrollTop = 0),
          e && (r = Qe(`[href='${e.href}']`, l.thumbs)),
          r || (r = Le.images[Le.images.length - 1]),
          r && Le.open(r),
          (i.style.overflow = 'hidden'),
          (l.total.textContent = Le.images.length)
        )
      },
      generateThumb(e, o) {
        if (e.isClone || e.isHidden) return
        if (
          !o ||
          !o.thumb ||
          (!o.isImage && !o.isVideo && !t['PDF in Gallery'])
        )
          return
        if (Le.fileIDs[`${e.fullID}.${o.index}`]) return
        Le.fileIDs[`${e.fullID}.${o.index}`] = !0
        const n = Qe.el('a', {
          className: 'gal-thumb',
          href: o.url,
          target: '_blank',
          title: o.name,
        })
        ;(n.dataset.id = Le.images.length),
          (n.dataset.post = e.fullID),
          (n.dataset.file = o.index)
        const a = o.thumb.cloneNode(!1)
        return (
          (a.style.cssText = ''),
          Qe.add(n, a),
          Qe.on(n, 'click', Le.cb.open),
          Le.images.push(n),
          Qe.add(Le.nodes.thumbs, n)
        )
      },
      load(e, t) {
        const o = e.href.match(/\w*$/),
          n =
            Qe.getOwn(
              { webm: 'video', mp4: 'video', ogv: 'video', pdf: 'iframe' },
              o
            ) || 'img',
          a = Qe.el(n)
        return (
          Qe.extend(a.dataset, e.dataset),
          Qe.on(a, 'error', t),
          (a.src = e.href),
          a
        )
      },
      open(e) {
        let n, a, r
        const { nodes: s } = Le,
          l = +s.current.dataset.id,
          d = +e.dataset.id
        if (
          ((n = Le.images[l]) && Qe.rmClass(n, 'gal-highlight'),
          Qe.addClass(e, 'gal-highlight'),
          (s.thumbs.scrollTop =
            e.offsetTop + e.offsetHeight / 2 - s.thumbs.clientHeight / 2),
          Le.cache?.dataset.id === '' + d
            ? ((a = Le.cache),
              Qe.off(a, 'error', Le.cacheError),
              Qe.on(a, 'error', Le.error))
            : (a = Le.load(e, Le.error)),
          Qe.off(s.current, 'error', Le.error),
          j.pause(s.current),
          Qe.replace(s.current, a),
          (s.current = a),
          'VIDEO' === a.nodeName &&
            ((a.loop = !0),
            $.setup(a),
            t.Autoplay && a.play(),
            t['Show Controls'] && j.addControls(a)),
          i.classList.toggle('gal-pdf', 'IFRAME' === a.nodeName),
          Le.cb.setHeight(),
          (s.count.textContent = +e.dataset.id + 1),
          (s.name.download = s.name.textContent = e.title),
          (s.name.href = e.href),
          (s.frame.scrollTop = 0),
          s.next.focus(),
          Qe.rmAll(s.sauce),
          t.Sauce && Ne.links && (r = o.posts.get(a.dataset.post)))
        ) {
          const e = []
          for (var c of Ne.links) {
            var h
            ;(h = Ne.createSauceLink(c, r, r.files[+a.dataset.file])) &&
              e.push(Qe.tn(' '), h)
          }
          Qe.add(s.sauce, e)
        }
        if (
          (Le.slideshow && (d > l || (l === Le.images.length - 1 && 0 === d))
            ? Le.setupTimer()
            : Le.cb.stop(),
          t['Scroll to Post'] &&
            (r = o.posts.get(a.dataset.post)) &&
            Xe.scrollTo(r.nodes.root),
          isNaN(l) || d === (l + 1) % Le.images.length)
        )
          return (Le.cache = Le.load(
            Le.images[(d + 1) % Le.images.length],
            Le.cacheError
          ))
      },
      error() {
        if (this.error?.code === MediaError.MEDIA_ERR_DECODE)
          return new _e('error', 'Corrupt or unplayable video', 30)
        if (j.isFromArchive(this)) return
        const e = o.posts.get(this.dataset.post),
          t = e.files[+this.dataset.file]
        return j.error(this, e, t, null, e => {
          if (e)
            return (
              (Le.images[+this.dataset.id].href = e),
              Le.nodes.current === this ? (this.src = e) : void 0
            )
        })
      },
      cacheError: () => delete Le.cache,
      cleanupTimer() {
        clearTimeout(Le.timeoutID)
        const { current: e } = Le.nodes
        return (
          Qe.off(e, 'canplaythrough load', Le.startTimer),
          Qe.off(e, 'ended', Le.cb.next)
        )
      },
      startTimer: () =>
        (Le.timeoutID = setTimeout(Le.checkTimer, Le.delay * b)),
      setupTimer() {
        Le.cleanupTimer()
        const { current: e } = Le.nodes,
          t = 'VIDEO' === e.nodeName
        return (
          t && e.play(),
          (t ? e.readyState >= 4 : e.complete) || 'IFRAME' === e.nodeName
            ? Le.startTimer()
            : Qe.on(e, t ? 'canplaythrough' : 'load', Le.startTimer)
        )
      },
      checkTimer() {
        const { current: e } = Le.nodes
        return 'VIDEO' !== e.nodeName || e.paused
          ? Le.cb.next()
          : (Qe.on(e, 'ended', Le.cb.next), (e.loop = !1))
      },
      cb: {
        keybinds(e) {
          let o
          if (!(o = Oe.keyCode(e))) return
          const n = (() => {
            switch (o) {
              case t.Close:
              case t['Open Gallery']:
                return Le.cb.close
              case t['Next Gallery Image']:
                return Le.cb.next
              case t['Advance Gallery']:
                return Le.cb.advance
              case t['Previous Gallery Image']:
                return Le.cb.prev
              case t.Pause:
                return Le.cb.pause
              case t.Slideshow:
                return Le.cb.toggleSlideshow
              case t['Rotate image anticlockwise']:
                return Le.cb.rotateLeft
              case t['Rotate image clockwise']:
                return Le.cb.rotateRight
              case t['Download Gallery Image']:
                return Le.cb.download
            }
          })()
          return n ? (e.stopPropagation(), e.preventDefault(), n()) : void 0
        },
        open(e) {
          if ((e && e.preventDefault(), this)) return Le.open(this)
        },
        image(e) {
          return e.preventDefault(), e.stopPropagation(), Le.build(this)
        },
        prev: () =>
          Le.cb.open.call(
            Le.images[+Le.nodes.current.dataset.id - 1] ||
              Le.images[Le.images.length - 1]
          ),
        next: () =>
          Le.cb.open.call(
            Le.images[+Le.nodes.current.dataset.id + 1] || Le.images[0]
          ),
        click(e) {
          if (!j.onControls(e)) return e.preventDefault(), Le.cb.advance()
        },
        advance: () =>
          !t.Autoplay && Le.nodes.current.paused
            ? Le.nodes.current.play()
            : Le.cb.next(),
        toggle: () => (Le.nodes ? Le.cb.close : Le.build)(),
        blank(e) {
          if (e.target === this) return Le.cb.close()
        },
        toggleSlideshow: () => Le.cb[Le.slideshow ? 'stop' : 'start'](),
        download: () => Qe('.gal-name').click(),
        pause() {
          Le.cb.stop()
          const { current: e } = Le.nodes
          if ('VIDEO' === e.nodeName) return e[e.paused ? 'play' : 'pause']()
        },
        start: () => (
          Qe.addClass(Le.nodes.buttons, 'gal-playing'),
          (Le.slideshow = !0),
          Le.setupTimer()
        ),
        stop() {
          if (!Le.slideshow) return
          Le.cleanupTimer()
          const { current: e } = Le.nodes
          return (
            'VIDEO' === e.nodeName && (e.loop = !0),
            Qe.rmClass(Le.nodes.buttons, 'gal-playing'),
            (Le.slideshow = !1)
          )
        },
        rotateLeft: () => Le.cb.rotate(270),
        rotateRight: () => Le.cb.rotate(90),
        rotate: f(100, function (e) {
          const { current: t } = Le.nodes
          if ('IFRAME' !== t.nodeName)
            return (
              (t.dataRotate = ((t.dataRotate || 0) + e) % 360),
              (t.style.transform = `rotate(${t.dataRotate}deg)`),
              Le.cb.setHeight()
            )
        }),
        close: () => (
          Qe.off(Le.nodes.current, 'error', Le.error),
          j.pause(Le.nodes.current),
          Qe.rm(Le.nodes.el),
          Qe.rmClass(i, 'gallery-open'),
          t['Fullscreen Gallery'] &&
            (Qe.off(
              a,
              'fullscreenchange mozfullscreenchange webkitfullscreenchange',
              Le.cb.close
            ),
            a.mozCancelFullScreen?.(),
            a.webkitExitFullscreen?.()),
          delete Le.nodes,
          delete Le.fileIDs,
          (i.style.overflow = ''),
          Qe.off(a, 'keydown', Le.cb.keybinds),
          t.Keybinds && Qe.on(a, 'keydown', Oe.keydown),
          Qe.off(window, 'resize', Le.cb.setHeight),
          clearTimeout(Le.timeoutID)
        ),
        setFitness() {
          return (this.checked ? Qe.addClass : Qe.rmClass)(
            i,
            `gal-${this.name.toLowerCase().replace(/\s+/g, '-')}`
          )
        },
        setHeight: f(100, function () {
          let e, n, a
          const { current: r, frame: s } = Le.nodes,
            { style: l } = r
          if (
            t['Stretch to Fit'] &&
            (e = o.posts.get(r.dataset.post)?.files[+r.dataset.file].dimensions)
          ) {
            const [t, o] = e.split('x')
            let n = s.clientWidth,
              d = i.clientHeight - 25
            ;(r.dataRotate || 0) % 180 == 90 && ([n, d] = [d, n]),
              (a = Math.min(d, (o / t) * n)),
              (l.minHeight = a + 'px'),
              (l.minWidth = (t / o) * a + 'px')
          } else l.minHeight = l.minWidth = ''
          return (r.dataRotate || 0) % 180 == 90
            ? ((l.maxWidth = t['Fit Height']
                ? i.clientHeight - 25 + 'px'
                : 'none'),
              (l.maxHeight = t['Fit Width'] ? `${s.clientWidth}px` : 'none'),
              (n = (r.clientWidth - r.clientHeight) / 2),
              (l.margin = `${n}px ${-n}px`))
            : (l.maxWidth = l.maxHeight = l.margin = '')
        }),
        setDelay() {
          return (Le.delay = +this.value)
        },
      },
      menu: {
        init() {
          if (!Le.enabled) return
          const e = Qe.el('span', {
            textContent: 'Gallery',
            className: 'gallery-link',
          })
          return Xe.menu.addEntry({
            el: e,
            order: 105,
            subEntries: Le.menu.createSubEntries(),
          })
        },
        createSubEntry(e) {
          const t = L.checkbox(e, e),
            o = t.firstElementChild
          return (
            ['Hide Thumbnails', 'Fit Width', 'Fit Height'].includes(e) &&
              Qe.on(o, 'change', Le.cb.setFitness),
            Qe.event('change', null, o),
            Qe.on(o, 'change', Qe.cb.checked),
            [
              'Hide Thumbnails',
              'Fit Width',
              'Fit Height',
              'Stretch to Fit',
            ].includes(e) && Qe.on(o, 'change', Le.cb.setHeight),
            { el: t }
          )
        },
        createSubEntries() {
          const e = [
              'Hide Thumbnails',
              'Fit Width',
              'Fit Height',
              'Stretch to Fit',
              'Scroll to Post',
            ].map(e => Le.menu.createSubEntry(e)),
            t = Qe.el('label', {
              innerHTML:
                'Slide Delay: <input type="number" name="Slide Delay" min="0" step="any" class="field">',
            }),
            o = t.firstElementChild
          return (
            (o.value = Le.delay),
            Qe.on(o, 'change', Le.cb.setDelay),
            Qe.on(o, 'change', Qe.cb.value),
            e.push({ el: t }),
            e
          )
        },
      },
    },
    Fe = {
      init() {
        if (
          ['index', 'thread', 'archive'].includes(o.VIEW) &&
          t.Linkify &&
          (t.Embedding || t['Link Title'] || t['Cover Preview'])
        ) {
          for (var e of ((this.types = m()), this.ordered_types))
            this.types[e.key] = e
          return (
            t.Embedding &&
              'archive' !== o.VIEW &&
              ((this.dialog = L.dialog('embedding', {
                innerHTML:
                  '<div>\n  <div class="move"></div>\n  <a href="javascript:;" class="jump" title="Jump to post">→</a>\n  <a href="javascript:;" class="close" title="Close">×</a>\n</div>\n<div id="media-embed"><div></div></div>\n',
              })),
              (this.media = Qe('#media-embed', this.dialog)),
              Qe.one(a, '4chanXInitFinished', this.ready),
              Qe.on(a, 'IndexRefreshInternal', () =>
                o.posts.forEach(function (e) {
                  for (e of [e, ...e.clones])
                    for (var t of e.nodes.embedlinks)
                      Fe.cb.catalogRemove.call(t)
                })
              )),
            t['Link Title']
              ? Qe.on(a, '4chanXInitFinished PostsInserted', function () {
                  for (var e in Fe.types) {
                    var t = Fe.types[e]
                    t.title?.batchSize && Fe.flushTitles(t.title)
                  }
                })
              : void 0
          )
        }
      },
      events(e) {
        let n, a, i
        if ('archive' !== o.VIEW) {
          if (t.Embedding)
            for (
              a = 0, i = e.nodes.embedlinks = u('.embedder', e.nodes.comment);
              (n = i[a++]);

            )
              Qe.on(n, 'click', Fe.cb.click),
                Qe.hasClass(n, 'embedded') && Fe.cb.toggle.call(n)
          if (t['Cover Preview'])
            for (a = 0, i = u('.linkify', e.nodes.comment); (n = i[a++]); ) {
              var r
              ;(r = Fe.services(n)) && Fe.preview(r)
            }
          else;
        }
      },
      process(e, n) {
        let a
        if (
          (t.Embedding || t['Link Title'] || t['Cover Preview']) &&
          !Qe.x('ancestor::pre', e)
        )
          return (a = Fe.services(e)) &&
            ((a.post = n),
            t.Embedding && 'archive' !== o.VIEW && Fe.embed(a),
            t['Link Title'] && Fe.title(a),
            t['Cover Preview'] && 'archive' !== o.VIEW)
            ? Fe.preview(a)
            : void 0
      },
      services(e) {
        const { href: t } = e
        for (var o of Fe.ordered_types) {
          var n
          if ((n = o.regExp.exec(t)))
            return { key: o.key, uid: n[1], options: n[2], link: e }
        }
      },
      embed(e) {
        const { key: o, uid: n, options: a, link: r, post: s } = e,
          { href: l } = r
        Qe.addClass(r, o.toLowerCase())
        const d = Qe.el(
            'a',
            { className: 'embedder', href: 'javascript:;' },
            { innerHTML: '(<span>un</span>embed)' }
          ),
          c = { key: o, uid: n, options: a, href: l }
        for (var h in c) {
          var u = c[h]
          d.dataset[h] = u
        }
        if (
          (Qe.on(d, 'click', Fe.cb.click),
          Qe.after(r, [Qe.tn(' '), d]),
          s.nodes.embedlinks.push(d),
          t['Auto-embed'] && !t['Floating Embeds'] && !s.isFetchedQuote)
        )
          return Qe.hasClass(i, 'catalog-mode')
            ? Qe.addClass(d, 'embed-removed')
            : Fe.cb.toggle.call(d)
      },
      ready() {
        if (jt.isThisPageLegit())
          return (
            Qe.addClass(Fe.dialog, 'empty'),
            Qe.on(Qe('.close', Fe.dialog), 'click', Fe.closeFloat),
            Qe.on(Qe('.move', Fe.dialog), 'mousedown', Fe.dragEmbed),
            Qe.on(Qe('.jump', Fe.dialog), 'click', function () {
              if (i.contains(Fe.lastEmbed)) return Xe.scrollTo(Fe.lastEmbed)
            }),
            Qe.add(a.body, Fe.dialog)
          )
      },
      closeFloat: () => (
        delete Fe.lastEmbed,
        Qe.addClass(Fe.dialog, 'empty'),
        Qe.replace(Fe.media.firstChild, Qe.el('div'))
      ),
      dragEmbed() {
        const { style: e } = Fe.media
        return Fe.dragEmbed.mouseup
          ? (Qe.off(a, 'mouseup', Fe.dragEmbed),
            (Fe.dragEmbed.mouseup = !1),
            void (e.pointerEvents = ''))
          : (Qe.on(a, 'mouseup', Fe.dragEmbed),
            (Fe.dragEmbed.mouseup = !0),
            (e.pointerEvents = 'none'))
      },
      title(e) {
        let t
        const { key: o, uid: n, options: a, link: i, post: r } = e
        if ((t = Fe.types[o].title))
          return (
            Qe.addClass(i, o.toLowerCase()),
            t.batchSize
              ? ((t.queue || (t.queue = [])).push(e),
                t.queue.length >= t.batchSize ? Fe.flushTitles(t) : void 0)
              : He.cache(t.api(n), function () {
                  return Fe.cb.title(this, e)
                })
          )
      },
      flushTitles(e) {
        let t
        const { queue: o } = e
        if (!o?.length) return
        e.queue = []
        return He.cache(
          e.api(
            (() => {
              const e = []
              for (t of o) e.push(t.uid)
              return e
            })()
          ),
          function () {
            for (t of o) Fe.cb.title(this, t)
          }
        )
      },
      preview(e) {
        let t
        const { key: o, uid: n, link: a } = e
        if ((t = Fe.types[o].preview))
          return Qe.on(a, 'mouseover', function (e) {
            const o = t.url(n),
              { height: i } = t,
              r = Qe.el('img', {
                src: o,
                id: 'ihover',
              })
            return (
              Qe.add(Xe.hover, r),
              L.hover({
                root: a,
                el: r,
                latestEvent: e,
                endEvents: 'mouseout click',
                height: i,
              })
            )
          })
      },
      cb: {
        click(e) {
          if (
            (e.preventDefault(),
            Qe.hasClass(this, 'embedded') ||
              (!t['Floating Embeds'] && !Qe.hasClass(i, 'catalog-mode')))
          )
            return Fe.cb.toggle.call(this)
          {
            let e
            if (!(e = Fe.media.firstChild)) return
            return (
              Qe.replace(e, Fe.cb.embed(this)),
              (Fe.lastEmbed = We.postFromNode(this).nodes.root),
              Qe.rmClass(Fe.dialog, 'empty')
            )
          }
        },
        toggle() {
          return (
            Qe.hasClass(this, 'embedded')
              ? Qe.rm(this.nextElementSibling)
              : Qe.after(this, Fe.cb.embed(this)),
            Qe.toggleClass(this, 'embedded')
          )
        },
        embed(e) {
          let t, o
          const n = Qe.el('div', { className: 'media-embed' })
          return (
            Qe.add(n, (t = (o = Fe.types[e.dataset.key]).el(e))),
            (t.style.cssText =
              null != o.style
                ? o.style
                : 'border: none; width: 640px; height: 360px;'),
            n
          )
        },
        catalogRemove() {
          const e = Qe.hasClass(i, 'catalog-mode')
          if (
            (e && Qe.hasClass(this, 'embedded')) ||
            (!e && Qe.hasClass(this, 'embed-removed'))
          )
            return (
              Fe.cb.toggle.call(this), Qe.toggleClass(this, 'embed-removed')
            )
        },
        title(e, t) {
          let o
          const { key: n, uid: a, options: i, link: r, post: s } = t,
            l = Fe.types[n].title
          let { status: d } = e
          if (
            ([200, 304].includes(d) &&
              l.status &&
              (d = l.status(e.response)[0]),
            d)
          )
            for (var c of ((o = `[${n}] ${(() => {
              switch (d) {
                case 200:
                case 304:
                  return (
                    (o = l.text(e.response, a)),
                    'string' == typeof o ? o : (o = r.textContent)
                  )
                case 404:
                  return 'Not Found'
                case 403:
                case 401:
                  return 'Forbidden or Private'
                default:
                  return `${d}'d`
              }
            })()}`),
            (r.dataset.original = r.textContent),
            (r.textContent = o),
            s.clones))
              for (var h of u('a.linkify', c.nodes.comment))
                h.href === r.href &&
                  (null == h.dataset.original &&
                    (h.dataset.original = h.textContent),
                  (h.textContent = o))
        },
      },
      ordered_types: [
        {
          key: 'audio',
          regExp: /^[^?#]+\.(?:mp3|m4a|oga|wav|flac)(?:[?#]|$)/i,
          style: '',
          el: e =>
            Qe.el('audio', {
              controls: !0,
              preload: 'auto',
              src: e.dataset.href,
            }),
        },
        {
          key: 'image',
          regExp: /^[^?#]+\.(?:gif|png|jpg|jpeg|bmp|webp)(?::\w+)?(?:[?#]|$)/i,
          style: '',
          el(e) {
            const t = n(e.dataset.href)
            return Qe.el('div', {
              innerHTML: `<a target="_blank" href="${t}"><img src="${t}" style="max-width: 80vw; max-height: 80vh;"></a>`,
            })
          },
        },
        {
          key: 'video',
          regExp: /^[^?#]+\.(?:og[gv]|webm|mp4)(?:[?#]|$)/i,
          style: 'max-width: 80vw; max-height: 80vh;',
          el(e) {
            const t = Qe.el('video', {
              hidden: !0,
              controls: !0,
              preload: 'auto',
              src: e.dataset.href,
              loop: O.test(e.dataset.href.split('/')[2]),
            })
            return (
              Qe.on(t, 'loadedmetadata', function () {
                return 0 === t.videoHeight && t.parentNode
                  ? Qe.replace(t, Fe.types.audio.el(e))
                  : (t.hidden = !1)
              }),
              t
            )
          },
        },
        {
          key: 'PeerTube',
          regExp:
            /^(\w+:\/\/[^\/]+\/videos\/watch\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12})(.*)/,
          el(e) {
            let t
            const o = (t = e.dataset.options.match(/[?&](start=\w+)/))
                ? `?${t[1]}`
                : '',
              n = Qe.el('iframe', {
                src:
                  e.dataset.uid.replace('/videos/watch/', '/videos/embed/') + o,
              })
            return n.setAttribute('allowfullscreen', 'true'), n
          },
        },
        {
          key: 'BitChute',
          regExp: /^\w+:\/\/(?:www\.)?bitchute\.com\/video\/([\w\-]+)/,
          el(e) {
            const t = Qe.el('iframe', {
              src: `https://www.bitchute.com/embed/${e.dataset.uid}/`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
        },
        {
          key: 'Clyp',
          regExp: /^\w+:\/\/(?:www\.)?clyp\.it\/(\w{8})/,
          style: 'border: 0; width: 640px; height: 160px;',
          el: e =>
            Qe.el('iframe', { src: `https://clyp.it/${e.dataset.uid}/widget` }),
          title: {
            api: e => `https://api.clyp.it/oembed?url=https://clyp.it/${e}`,
            text: e => e.title,
          },
        },
        {
          key: 'Dailymotion',
          regExp:
            /^\w+:\/\/(?:(?:www\.)?dailymotion\.com\/(?:embed\/)?video|dai\.ly)\/([A-Za-z0-9]+)[^?]*(.*)/,
          el(e) {
            let t
            const o = (t = e.dataset.options.match(/[?&](start=\d+)/))
                ? `?${t[1]}`
                : '',
              n = Qe.el('iframe', {
                src: `//www.dailymotion.com/embed/video/${e.dataset.uid}${o}`,
              })
            return n.setAttribute('allowfullscreen', 'true'), n
          },
          title: {
            api: e => `https://api.dailymotion.com/video/${e}`,
            text: e => e.title,
          },
          preview: {
            url: e => `https://www.dailymotion.com/thumbnail/video/${e}`,
            height: 240,
          },
        },
        {
          key: 'Gfycat',
          regExp: /^\w+:\/\/(?:www\.)?gfycat\.com\/(?:iframe\/)?(\w+)/,
          el(e) {
            const t = Qe.el('iframe', {
              src: `//gfycat.com/ifr/${e.dataset.uid}`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
        },
        {
          key: 'Gist',
          regExp: /^\w+:\/\/gist\.github\.com\/[\w\-]+\/(\w+)/,
          style: '',
          el: (function () {
            let e = 0
            return function (t) {
              const o = Qe.el('pre', { hidden: !0, id: 'gist-embed-' + e++ })
              return (
                He.cache(
                  `https://api.github.com/gists/${t.dataset.uid}`,
                  function () {
                    return (
                      (o.textContent = Object.values(
                        this.response.files
                      )[0].content),
                      (o.className = 'prettyprint'),
                      Qe.global(
                        () =>
                          window.prettyPrint?.(
                            function () {},
                            document.getElementById(
                              document.currentScript.dataset.id
                            ).parentNode
                          ),
                        { id: o.id }
                      ),
                      (o.hidden = !1)
                    )
                  }
                ),
                o
              )
            }
          })(),
          title: {
            api: e => `https://api.github.com/gists/${e}`,
            text({ files: e }) {
              for (var t in e) if (e.hasOwnProperty(t)) return t
            },
          },
        },
        {
          key: 'InstallGentoo',
          regExp:
            /^\w+:\/\/paste\.installgentoo\.com\/view\/(?:raw\/|download\/|embed\/)?(\w+)/,
          el: e =>
            Qe.el('iframe', {
              src: `https://paste.installgentoo.com/view/embed/${e.dataset.uid}`,
            }),
        },
        {
          key: 'LiveLeak',
          regExp: /^\w+:\/\/(?:\w+\.)?liveleak\.com\/.*\?.*[tif]=(\w+)/,
          el(e) {
            const t = Qe.el('iframe', {
              src: `https://www.liveleak.com/e/${e.dataset.uid}`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
        },
        {
          key: 'Loopvid',
          regExp:
            /^\w+:\/\/(?:www\.)?loopvid.appspot.com\/#?((?:pf|kd|lv|gd|gh|db|dx|nn|cp|wu|ig|ky|mf|m2|pc|1c|pi|ni|wl|ko|mm|ic|gc)\/[\w\-\/]+(?:,[\w\-\/]+)*|fc\/\w+\/\d+|https?:\/\/.+)/,
          style: 'max-width: 80vw; max-height: 80vh;',
          el(e) {
            const t = Qe.el('video', {
              controls: !0,
              preload: 'auto',
              loop: !0,
            })
            if (/^http/.test(e.dataset.uid))
              return Qe.add(t, Qe.el('source', { src: e.dataset.uid })), t
            const [o, n, a] = e.dataset.uid.match(/(\w+)\/(.*)/),
              i = (() => {
                switch (n) {
                  case 'gd':
                  case 'wu':
                  case 'fc':
                    return ['']
                  case 'gc':
                    return ['giant', 'fat', 'zippy']
                  default:
                    return ['.webm', '.mp4']
                }
              })()
            for (var r of a.split(','))
              for (var s of i) {
                var l = `${r}${s}`,
                  d = (() => {
                    switch (n) {
                      case 'pf':
                        return [
                          `https://kastden.org/_loopvid_media/pf/${l}`,
                          `https://web.archive.org/web/2/http://a.pomf.se/${l}`,
                        ]
                      case 'kd':
                        return [`https://kastden.org/loopvid/${l}`]
                      case 'lv':
                        return [`https://lv.kastden.org/${l}`]
                      case 'gd':
                        return [
                          `https://docs.google.com/uc?export=download&id=${l}`,
                        ]
                      case 'gh':
                        return [`https://googledrive.com/host/${l}`]
                      case 'db':
                        return [`https://dl.dropboxusercontent.com/u/${l}`]
                      case 'dx':
                        return [`https://dl.dropboxusercontent.com/${l}`]
                      case 'nn':
                        return [`https://kastden.org/_loopvid_media/nn/${l}`]
                      case 'cp':
                        return [`https://copy.com/${l}`]
                      case 'wu':
                        return [`http://webmup.com/${l}/vid.webm`]
                      case 'ig':
                        return [`https://i.imgur.com/${l}`]
                      case 'ky':
                        return [`https://kastden.org/_loopvid_media/ky/${l}`]
                      case 'mf':
                        return [
                          `https://kastden.org/_loopvid_media/mf/${l}`,
                          `https://web.archive.org/web/2/https://d.maxfile.ro/${l}`,
                        ]
                      case 'm2':
                        return [`https://kastden.org/_loopvid_media/m2/${l}`]
                      case 'pc':
                        return [
                          `https://kastden.org/_loopvid_media/pc/${l}`,
                          `https://web.archive.org/web/2/http://a.pomf.cat/${l}`,
                        ]
                      case '1c':
                        return [`http://b.1339.cf/${l}`]
                      case 'pi':
                        return [
                          `https://kastden.org/_loopvid_media/pi/${l}`,
                          `https://web.archive.org/web/2/https://u.pomf.is/${l}`,
                        ]
                      case 'ni':
                        return [
                          `https://kastden.org/_loopvid_media/ni/${l}`,
                          `https://web.archive.org/web/2/https://u.nya.is/${l}`,
                        ]
                      case 'wl':
                        return [`http://webm.land/media/${l}`]
                      case 'ko':
                        return [`https://kordy.kastden.org/loopvid/${l}`]
                      case 'mm':
                        return [
                          `https://kastden.org/_loopvid_media/mm/${l}`,
                          `https://web.archive.org/web/2/https://my.mixtape.moe/${l}`,
                        ]
                      case 'ic':
                        return [`https://media.8ch.net/file_store/${l}`]
                      case 'fc':
                        return [`//${O.host()}/${l}.webm`]
                      case 'gc':
                        return [`https://${s}.gfycat.com/${r}.webm`]
                    }
                  })()
                for (var c of d) Qe.add(t, Qe.el('source', { src: c }))
              }
            return t
          },
        },
        {
          key: 'Openings.moe',
          regExp: /^\w+:\/\/openings.moe\/\?video=([^.&=]+)/,
          style:
            'width: 1280px; height: 720px; max-width: 80vw; max-height: 80vh;',
          el(e) {
            const t = Qe.el('iframe', {
              src: `https://openings.moe/?video=${e.dataset.uid}`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
        },
        {
          key: 'Pastebin',
          regExp:
            /^\w+:\/\/(?:\w+\.)?pastebin\.com\/(?!u\/)(?:[\w.]+(?:\/|\?i\=))?(\w+)/,
          el: e =>
            Qe.el('iframe', {
              src: `//pastebin.com/embed_iframe.php?i=${e.dataset.uid}`,
            }),
        },
        {
          key: 'SoundCloud',
          regExp:
            /^\w+:\/\/(?:www\.)?(?:soundcloud\.com\/|snd\.sc\/)([\w\-\/]+)/,
          style: 'border: 0; width: 500px; height: 400px;',
          el: e =>
            Qe.el('iframe', {
              src: `https://w.soundcloud.com/player/?visual=true&show_comments=false&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(
                e.dataset.uid
              )}`,
            }),
          title: {
            api: e =>
              `${
                location.protocol
              }//soundcloud.com/oembed?format=json&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(
                e
              )}`,
            text: e => e.title,
          },
        },
        {
          key: 'StrawPoll',
          regExp:
            /^\w+:\/\/(?:www\.)?strawpoll\.me\/(?:embed_\d+\/)?(\d+(?:\/r)?)/,
          style: 'border: 0; width: 600px; height: 406px;',
          el: e =>
            Qe.el('iframe', {
              src: `https://www.strawpoll.me/embed_1/${e.dataset.uid}`,
            }),
        },
        {
          key: 'Streamable',
          regExp: /^\w+:\/\/(?:www\.)?streamable\.com\/(\w+)/,
          el(e) {
            const t = Qe.el('iframe', {
              src: `https://streamable.com/o/${e.dataset.uid}`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
          title: {
            api: e =>
              `https://api.streamable.com/oembed?url=https://streamable.com/${e}`,
            text: e => e.title,
          },
        },
        {
          key: 'TwitchTV',
          regExp:
            /^\w+:\/\/(?:www\.|secure\.|clips\.|m\.)?twitch\.tv\/(\w[^#\&\?]*)/,
          el(e) {
            let t,
              o = e.dataset.href.match(
                /^\w+:\/\/(?:(clips\.)|\w+\.)?twitch\.tv\/(?:\w+\/)?(clip\/)?(\w[^#\&\?]*)/
              )
            if (o[1] || o[2])
              t = `//clips.twitch.tv/embed?clip=${o[3]}&parent=${location.hostname}`
            else {
              let n
              ;(o = e.dataset.uid.match(/(\w+)(?:\/(?:v\/)?(\d+))?/)),
                (t = `//player.twitch.tv/?${
                  o[2] ? `video=v${o[2]}` : `channel=${o[1]}`
                }&autoplay=false&parent=${location.hostname}`),
                (n = e.dataset.href.match(/\bt=(\w+)/)) &&
                  (t += `&time=${n[1]}`)
            }
            const n = Qe.el('iframe', { src: t })
            return n.setAttribute('allowfullscreen', 'true'), n
          },
        },
        {
          key: 'Twitter',
          regExp:
            /^\w+:\/\/(?:www\.|mobile\.)?(?:twitter|x)\.com\/(\w+\/status\/\d+)/,
          style:
            'border: none; width: 550px; height: 250px; overflow: hidden; resize: both;',
          el(e) {
            const t = Qe.el('iframe')
            Qe.on(t, 'load', function () {
              return this.contentWindow.postMessage(
                { element: 't', query: 'height' },
                'https://twitframe.com'
              )
            })
            var o = function (e) {
              if (
                e.source === t.contentWindow &&
                'https://twitframe.com' === e.origin
              )
                return (
                  Qe.off(window, 'message', o),
                  ((n || t).style.height =
                    +Qe.minmax(e.data.height, 250, 0.8 * i.clientHeight) + 'px')
                )
            }
            if (
              (Qe.on(window, 'message', o),
              (t.src = `https://twitframe.com/show?url=https://twitter.com/${e.dataset.uid}`),
              'gecko' === Qe.engine)
            ) {
              t.style.cssText = 'border: none; width: 100%; height: 100%;'
              var n = Qe.el('div')
              return Qe.add(n, t), n
            }
            return t
          },
        },
        {
          key: 'VidLii',
          regExp: /^\w+:\/\/(?:www\.)?vidlii\.com\/watch\?v=(\w{11})/,
          style: 'border: none; width: 640px; height: 392px;',
          el(e) {
            const t = Qe.el('iframe', {
              src: `https://www.vidlii.com/embed?v=${e.dataset.uid}&a=0`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
        },
        {
          key: 'Vimeo',
          regExp: /^\w+:\/\/(?:www\.)?vimeo\.com\/(\d+)/,
          el(e) {
            const t = Qe.el('iframe', {
              src: `//player.vimeo.com/video/${e.dataset.uid}?wmode=opaque`,
            })
            return t.setAttribute('allowfullscreen', 'true'), t
          },
          title: {
            api: e =>
              `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${e}`,
            text: e => e.title,
          },
        },
        {
          key: 'Vine',
          regExp: /^\w+:\/\/(?:www\.)?vine\.co\/v\/(\w+)/,
          style: 'border: none; width: 500px; height: 500px;',
          el: e =>
            Qe.el('iframe', { src: `https://vine.co/v/${e.dataset.uid}/card` }),
        },
        {
          key: 'Vocaroo',
          regExp:
            /^\w+:\/\/(?:(?:www\.|old\.)?vocaroo\.com|voca\.ro)\/((?:i\/)?\w+)/,
          style: '',
          el(e) {
            const t = Qe.el('iframe')
            return (
              (t.width = 300),
              (t.height = 60),
              t.setAttribute('frameborder', 0),
              (t.src = `https://vocaroo.com/embed/${e.dataset.uid.replace(
                /^i\//,
                ''
              )}?autoplay=0`),
              t
            )
          },
        },
        {
          key: 'YouTube',
          regExp:
            /^\w+:\/\/(?:youtu.be\/|[\w.]*youtube[\w.]*\/.*(?:v=|\bembed\/|\bv\/|live\/))([\w\-]{11})(.*)/,
          el(e) {
            let t = e.dataset.options.match(/\b(?:star)?t\=(\w+)/)
            t && (t = t[1]),
              t &&
                !/^\d+$/.test(t) &&
                ((t += ' 0h0m0s'),
                (t =
                  3600 * t.match(/(\d+)h/)[1] +
                  60 * t.match(/(\d+)m/)[1] +
                  1 * t.match(/(\d+)s/)[1]))
            const o = Qe.el('iframe', {
              src: `//www.youtube.com/embed/${
                e.dataset.uid
              }?rel=0&wmode=opaque${t ? '&start=' + t : ''}`,
            })
            return o.setAttribute('allowfullscreen', 'true'), o
          },
          title: {
            api: e =>
              `https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D${e}&format=json`,
            text: e => e.title,
            status(e) {
              if (e.error) {
                const t = e.error.match(/^(\d*)\s*(.*)/)
                return [+t[1], t[2]]
              }
              return [200, 'OK']
            },
          },
          preview: {
            url: e => `https://img.youtube.com/vi/${e}/0.jpg`,
            height: 360,
          },
        },
      ],
    },
    Oe = {
      init() {
        if (t.Keybinds) {
          for (var e in c.hotkeys) Qe.sync(e, Oe.sync)
          var o = function () {
            for (var e of (Qe.off(a, '4chanXInitFinished', o),
            Qe.on(a, 'keydown', Oe.keydown),
            u('[accesskey]')))
              e.removeAttribute('accesskey')
          }
          return Qe.on(a, '4chanXInitFinished', o)
        }
      },
      sync: (e, o) => (t[o] = e),
      keydown(e) {
        let n, a, i, r, s
        if (!(n = Oe.keyCode(e))) return
        const { target: l } = e
        if (
          !['INPUT', 'TEXTAREA'].includes(l.nodeName) ||
          (/(Esc|Alt|Ctrl|Meta|Shift\+\w{2,})/.test(n) &&
            !/^Alt\+(\d|Up|Down|Left|Right)$/.test(n))
        ) {
          switch (
            (['index', 'thread'].includes(o.VIEW) &&
              ((i = F.getThread()), (a = We.threadFromRoot(i))),
            n)
          ) {
            case t['Toggle board list']:
              if (!t['Custom Board Navigation']) return
              Xe.toggleBoardList()
              break
            case t['Toggle header']:
              Xe.toggleBarVisibility()
              break
            case t['Open empty QR']:
              if (!je.postingIsEnabled) return
              Oe.qr()
              break
            case t['Open QR']:
              if (!je.postingIsEnabled || !i) return
              Oe.qr(i)
              break
            case t['Open settings']:
              Pe.open()
              break
            case t.Close:
              if (Pe.dialog) Pe.close()
              else if ((s = u('.notification')).length)
                for (var d of s) Qe('.close', d).click()
              else if (
                je.nodes &&
                !je.nodes.el.hidden &&
                'none' !== window.getComputedStyle(je.nodes.form).display
              )
                t['Persistent QR'] ? je.hide() : je.close()
              else {
                if (!Fe.lastEmbed) return
                Fe.closeFloat()
              }
              break
            case t['Spoiler tags']:
              if ('TEXTAREA' !== l.nodeName) return
              Oe.tags('spoiler', l)
              break
            case t['Code tags']:
              if ('TEXTAREA' !== l.nodeName) return
              Oe.tags('code', l)
              break
            case t['Eqn tags']:
              if ('TEXTAREA' !== l.nodeName) return
              Oe.tags('eqn', l)
              break
            case t['Math tags']:
              if ('TEXTAREA' !== l.nodeName) return
              Oe.tags('math', l)
              break
            case t['SJIS tags']:
              if ('TEXTAREA' !== l.nodeName) return
              Oe.tags('sjis', l)
              break
            case t['Toggle sage']:
              if (!je.nodes || je.nodes.el.hidden) return
              Oe.sage()
              break
            case t['Toggle Cooldown']:
              if (
                !je.nodes ||
                je.nodes.el.hidden ||
                !Qe.hasClass(je.nodes.fileSubmit, 'custom-cooldown')
              )
                return
              je.toggleCustomCooldown()
              break
            case t['Post from URL']:
              if (!je.postingIsEnabled) return
              je.handleUrl('')
              break
            case t['Add new post']:
              if (!je.postingIsEnabled) return
              je.addPost()
              break
            case t['Submit QR']:
              if (!je.nodes || je.nodes.el.hidden) return
              je.status() || je.submit()
              break
            case t.Update:
              switch (o.VIEW) {
                case 'thread':
                  if (!Be.enabled) return
                  Be.update()
                  break
                case 'index':
                  if (!pe.enabled) return
                  pe.update()
                  break
                default:
                  return
              }
              break
            case t.Watch:
              if (!ae.enabled || !a) return
              ae.toggle(a)
              break
            case t['Update thread watcher']:
              if (!ae.enabled) return
              ae.buttonFetchAll()
              break
            case t['Toggle thread watcher']:
              if (!ae.enabled) return
              ae.toggleWatcher()
              break
            case t['Toggle threading']:
              if (!Re.ready) return
              Re.toggleThreading()
              break
            case t['Mark thread read']:
              if ('index' !== o.VIEW || !a || !oe.enabled) return
              oe.markRead.call(i)
              break
            case t['Expand image']:
              if (!U.enabled || !i) return
              var c = We.postFromNode(Oe.post(i))
              c.file && U.toggle(c)
              break
            case t['Expand images']:
              if (!U.enabled) return
              U.cb.toggleAll()
              break
            case t['Open Gallery']:
              if (!Le.enabled) return
              Le.cb.toggle()
              break
            case t.fappeTyme:
              if (!Me.nodes?.fappe) return
              Me.toggle('fappe')
              break
            case t.werkTyme:
              if (!Me.nodes?.werk) return
              Me.toggle('werk')
              break
            case t['Front page']:
              pe.enabled ? pe.userPageNav(1) : (location.href = `/${o.BOARD}/`)
              break
            case t['Open front page']:
              Qe.open(`${location.origin}/${o.BOARD}/`)
              break
            case t['Next page']:
              if ('index' !== o.VIEW || o.SITE.isOnePage?.(o.BOARD)) return
              if (pe.enabled) {
                if (!['paged', 'infinite'].includes(t['Index Mode'])) return
                Qe('.next button', pe.pagelist).click()
              } else Qe(o.SITE.selectors.nav.next)?.click()
              break
            case t['Previous page']:
              if ('index' !== o.VIEW || o.SITE.isOnePage?.(o.BOARD)) return
              if (pe.enabled) {
                if (!['paged', 'infinite'].includes(t['Index Mode'])) return
                Qe('.prev button', pe.pagelist).click()
              } else Qe(o.SITE.selectors.nav.prev)?.click()
              break
            case t['Search form']:
              if ('index' !== o.VIEW) return
              var h = pe.enabled
                ? pe.searchInput
                : o.SITE.selectors.searchBox
                  ? Qe(o.SITE.selectors.searchBox)
                  : void 0
              if (!h) return
              Xe.scrollToIfNeeded(h), h.focus()
              break
            case t['Paged mode']:
              if (!pe.enabledOn(o.BOARD)) return
              location.href =
                'index' === o.VIEW ? '#paged' : `/${o.BOARD}/#paged`
              break
            case t['Infinite scrolling mode']:
              if (!pe.enabledOn(o.BOARD)) return
              location.href =
                'index' === o.VIEW ? '#infinite' : `/${o.BOARD}/#infinite`
              break
            case t['All pages mode']:
              if (!pe.enabledOn(o.BOARD)) return
              location.href =
                'index' === o.VIEW ? '#all-pages' : `/${o.BOARD}/#all-pages`
              break
            case t['Open catalog']:
              if (!(r = Je.catalog())) return
              location.href = r
              break
            case t['Cycle sort type']:
              if (!pe.enabled) return
              pe.cycleSortType()
              break
            case t['Next thread']:
              if ('index' !== o.VIEW || !i) return
              F.scroll(1)
              break
            case t['Previous thread']:
              if ('index' !== o.VIEW || !i) return
              F.scroll(-1)
              break
            case t['Expand thread']:
              if ('index' !== o.VIEW || !i) return
              te.toggle(a), Xe.scrollTo(i)
              break
            case t['Open thread']:
              if ('index' !== o.VIEW || !i) return
              Oe.open(a)
              break
            case t['Open thread tab']:
              if ('index' !== o.VIEW || !i) return
              Oe.open(a, !0)
              break
            case t['Next reply']:
              if (!i) return
              Oe.hl(1, i)
              break
            case t['Previous reply']:
              if (!i) return
              Oe.hl(-1, i)
              break
            case t['Deselect reply']:
              if (!i) return
              Oe.hl(0, i)
              break
            case t.Hide:
              if (!a || !ge.db) return
              Xe.scrollTo(i), ge.toggle(a)
              break
            case t['Quick Filter MD5']:
              if (!i) return
              ;(c = Oe.post(i)), Oe.hl(1, i), Ge.quickFilterMD5.call(c, e)
              break
            case t['Previous Post Quoting You']:
              if (!i || !_.db) return
              _.cb.seek('preceding')
              break
            case t['Next Post Quoting You']:
              if (!i || !_.db) return
              _.cb.seek('following')
              break
            default:
              return
          }
          return e.preventDefault(), e.stopPropagation()
        }
      },
      keyCode(e) {
        let t = (() => {
          let t
          switch ((t = e.keyCode)) {
            case 8:
              return ''
            case 13:
              return 'Enter'
            case 27:
              return 'Esc'
            case 32:
              return 'Space'
            case 37:
              return 'Left'
            case 38:
              return 'Up'
            case 39:
              return 'Right'
            case 40:
              return 'Down'
            case 188:
              return 'Comma'
            case 190:
              return 'Period'
            case 191:
              return 'Slash'
            case 59:
            case 186:
              return 'Semicolon'
            default:
              return (48 <= t && t <= 57) || (65 <= t && t <= 90)
                ? String.fromCharCode(t).toLowerCase()
                : 96 <= t && t <= 105
                  ? String.fromCharCode(t - 48).toLowerCase()
                  : null
          }
        })()
        return (
          t &&
            (e.altKey && (t = 'Alt+' + t),
            e.ctrlKey && (t = 'Ctrl+' + t),
            e.metaKey && (t = 'Meta+' + t),
            e.shiftKey && (t = 'Shift+' + t)),
          t
        )
      },
      post(e) {
        const t = o.SITE.selectors
        return (
          Qe(
            `${t.postContainer}${t.highlightable.reply}.${o.SITE.classes.highlight}`,
            e
          ) ||
          Qe(
            `${o.SITE.isOPContainerThread ? t.thread : t.postContainer}${
              t.highlightable.op
            }`,
            e
          )
        )
      },
      qr: e => (
        je.open(), null != e && je.quote.call(Oe.post(e)), je.nodes.com.focus()
      ),
      tags(e, t) {
        Y.ready(function () {
          const { config: t } = o.BOARD
          if (
            !(() => {
              switch (e) {
                case 'spoiler':
                  return !!t.spoilers
                case 'code':
                  return !!t.code_tags
                case 'math':
                case 'eqn':
                  return !!t.math_tags
                case 'sjis':
                  return !!t.sjis_tags
              }
            })()
          )
            return new _e(
              'warning',
              `[${e}] tags are not supported on /${o.BOARD}/.`,
              20
            )
        })
        const { value: n } = t,
          a = t.selectionStart,
          i = t.selectionEnd
        t.value =
          n.slice(0, a) + `[${e}]` + n.slice(a, i) + `[/${e}]` + n.slice(i)
        const r = `[${e}]`.length + i
        return t.setSelectionRange(r, r), Qe.event('input', null, t)
      },
      sage() {
        const e = /sage/i.test(je.nodes.email.value)
        return (je.nodes.email.value = e ? '' : 'sage')
      },
      open(e, t) {
        if ('index' !== o.VIEW) return
        const n = We.url('thread', e)
        return t ? Qe.open(n) : (location.href = n)
      },
      hl(e, t) {
        const n = `${o.SITE.selectors.postContainer}${o.SITE.selectors.highlightable.reply}`,
          { highlight: a } = o.SITE.classes,
          i = Qe(`${n}.${a}`, t)
        if (!e) return void (i && Qe.rmClass(i, a))
        if (i) {
          const { height: t } = i.getBoundingClientRect()
          if (Xe.getTopOf(i) >= -t && Xe.getBottomOf(i) >= -t) {
            let t
            const { root: r } = We.postFromNode(i).nodes,
              s = 1 === e ? 'following' : 'preceding'
            if (
              !(t = Qe.x(
                `${s}-sibling::${o.SITE.xpath.replyContainer}[not(@hidden) and not(child::div[@class='stub'])][1]`,
                r
              ))
            )
              return
            return (
              t.matches(n) || (t = Qe(n, t)),
              Xe.scrollToIfNeeded(t, 1 === e),
              Qe.addClass(t, a),
              void Qe.rmClass(i, a)
            )
          }
          Qe.rmClass(i, a)
        }
        const r = u(n, t)
        for (var s of (-1 === e && r.reverse(), r))
          if (
            (1 === e && Xe.getTopOf(s) > 0) ||
            (-1 === e && Xe.getBottomOf(s) > 0)
          )
            return void Qe.addClass(s, a)
      },
    }
  const $e = {
    Cache: {
      init() {
        return (
          Qe.on(a, 'SaveCaptcha', e => this.saveAPI(e.detail)),
          Qe.on(a, 'NoCaptcha', e => this.noCaptcha(e.detail))
        )
      },
      captchas: [],
      getCount() {
        return this.captchas.length
      },
      neededRaw() {
        return (
          !(
            this.haveCookie() ||
            this.captchas.length ||
            je.req ||
            this.submitCB
          ) &&
          (je.posts.length > 1 ||
            t['Auto-load captcha'] ||
            !je.posts[0].isOnlyQuotes() ||
            je.posts[0].file)
        )
      },
      needed() {
        return this.neededRaw() && Qe.event('LoadCaptcha')
      },
      prerequest() {
        if (t['Prerequest Captcha'])
          return Qe.queueTask(() => {
            if (
              !this.prerequested &&
              this.neededRaw() &&
              !Qe.event('LoadCaptcha') &&
              !je.captcha.occupied() &&
              je.cooldown.seconds <= 60 &&
              je.selected === je.posts[je.posts.length - 1] &&
              !je.selected.isOnlyQuotes()
            ) {
              const e = 'new' !== je.selected.thread
              if (!Qe.event('RequestCaptcha', { isReply: e }))
                return (
                  (this.prerequested = !0),
                  (this.submitCB = e => {
                    if (e) return this.save(e)
                  }),
                  this.updateCount()
                )
            }
          })
      },
      haveCookie: () => /\b_ct=/.test(a.cookie) && 'new' !== je.posts[0].thread,
      getOne() {
        let e
        return (
          delete this.prerequested,
          this.clear(),
          (e = this.captchas.shift()) ? (this.count(), e) : null
        )
      },
      request(e) {
        if (this.submitCB || !Qe.event('RequestCaptcha', { isReply: e }))
          return e => ((this.submitCB = e), this.updateCount())
      },
      abort() {
        if (this.submitCB)
          return (
            delete this.submitCB, Qe.event('AbortCaptcha'), this.updateCount()
          )
      },
      saveAPI(e) {
        let t
        return (t = this.submitCB)
          ? (delete this.submitCB, t(e), this.updateCount())
          : this.save(e)
      },
      noCaptcha(e) {
        let t
        if ((t = this.submitCB))
          return (
            (this.haveCookie() && !e?.error) ||
              (je.error(e?.error || 'Failed to retrieve captcha.'),
              je.captcha.setup(a.activeElement === je.nodes.status)),
            delete this.submitCB,
            t(),
            this.updateCount()
          )
      },
      save(e) {
        let t
        return (t = this.submitCB)
          ? (this.abort(), void t(e))
          : (this.captchas.push(e),
            this.captchas.sort((e, t) => e.timeout - t.timeout),
            this.count())
      },
      clear() {
        if (this.captchas.length) {
          let e
          const t = Date.now()
          for (e = 0; e < this.captchas.length; e++) {
            if (this.captchas[e].timeout > t) break
          }
          if (e) return (this.captchas = this.captchas.slice(e)), this.count()
        }
      },
      count() {
        return (
          clearTimeout(this.timer),
          this.captchas.length &&
            (this.timer = setTimeout(
              this.clear.bind(this),
              this.captchas[0].timeout - Date.now()
            )),
          this.updateCount()
        )
      },
      updateCount() {
        return Qe.event('CaptchaCount', this.captchas.length)
      },
    },
    Replace: p,
    t: g,
    v2: {
      lifetime: 12e4,
      init() {
        if (a.cookie.indexOf('pass_enabled=1') >= 0) return
        if (
          !(this.isEnabled =
            !!Qe('#g-recaptcha, #captcha-forced-noscript') ||
            !Qe.id('postForm'))
        )
          return
        ;(this.noscript = t['Force Noscript Captcha'] || !jt.jsEnabled) &&
          Qe.addClass(je.nodes.el, 'noscript-captcha'),
          $e.cache.init(),
          Qe.on(a, 'CaptchaCount', this.count.bind(this))
        const e = Qe.el('div', { className: 'captcha-root' })
        Qe.extend(e, {
          innerHTML:
            '<div class="captcha-counter"><a href="javascript:;"></a></div>',
        })
        const o = Qe('.captcha-counter > a', e)
        return (
          (this.nodes = { root: e, counter: o }),
          this.count(),
          Qe.addClass(je.nodes.el, 'has-captcha', 'captcha-v2'),
          Qe.after(je.nodes.com.parentNode, e),
          Qe.on(o, 'click', this.toggle.bind(this)),
          Qe.on(o, 'keydown', e => {
            if ('Space' === Oe.keyCode(e))
              return this.toggle(), e.preventDefault(), e.stopPropagation()
          }),
          Qe.on(window, 'captcha:success', () =>
            Qe.queueTask(() => this.save(!1))
          )
        )
      },
      timeouts: {},
      prevNeeded: 0,
      noscriptURL() {
        let o,
          n = `https://www.google.com/recaptcha/api/fallback?k=${e.recaptchaKey}`
        return (
          (o = t.captchaLanguage.trim()) &&
            (n += `&hl=${encodeURIComponent(o)}`),
          n
        )
      },
      moreNeeded() {
        return Qe.queueTask(() => {
          const e = $e.cache.needed()
          return (
            e &&
              !this.prevNeeded &&
              this.setup(
                je.cooldown.auto && a.activeElement === je.nodes.status
              ),
            (this.prevNeeded = e)
          )
        })
      },
      toggle() {
        return this.nodes.container && !this.timeouts.destroy
          ? this.destroy()
          : this.setup(!0, !0)
      },
      setup(e, t) {
        if (this.isEnabled && ($e.cache.needed() || t)) {
          if (
            (e &&
              (Qe.addClass(je.nodes.el, 'focus'), this.nodes.counter.focus()),
            this.timeouts.destroy)
          )
            return (
              clearTimeout(this.timeouts.destroy),
              delete this.timeouts.destroy,
              this.reload()
            )
          if (!this.nodes.container)
            return (
              (this.nodes.container = Qe.el('div', {
                className: 'captcha-container',
              })),
              Qe.prepend(this.nodes.root, this.nodes.container),
              new MutationObserver(this.afterSetup.bind(this)).observe(
                this.nodes.container,
                { childList: !0, subtree: !0 }
              ),
              this.noscript ? this.setupNoscript() : this.setupJS()
            )
          Qe.queueTask(() => {
            let e
            if (
              this.nodes.container &&
              a.activeElement === this.nodes.counter &&
              (e = Qe(
                'iframe[src^="https://www.google.com/recaptcha/"]',
                this.nodes.container
              ))
            )
              return e.focus(), je.focus()
          })
        }
      },
      setupNoscript() {
        const e = Qe.el('iframe', {
            id: 'qr-captcha-iframe',
            scrolling: 'no',
            src: this.noscriptURL(),
          }),
          t = Qe.el('div'),
          o = Qe.el('textarea')
        return Qe.add(t, o), Qe.add(this.nodes.container, [e, t])
      },
      setupJS: () =>
        Qe.global(function () {
          const t = function () {
            const { classList: t } = document.documentElement,
              o = document.querySelector('#qr .captcha-container')
            return (o.dataset.widgetID = window.grecaptcha.render(o, {
              sitekey: e.recaptchaKey,
              theme:
                t.contains('tomorrow') ||
                t.contains('spooky') ||
                t.contains('dark-captcha')
                  ? 'dark'
                  : 'light',
              callback: e =>
                window.dispatchEvent(
                  new CustomEvent('captcha:success', { detail: e })
                ),
            }))
          }
          if (window.grecaptcha) return t()
          {
            const e = window.onRecaptchaLoaded
            if (
              ((window.onRecaptchaLoaded = function () {
                return t(), e()
              }),
              !document.head.querySelector(
                'script[src^="https://www.google.com/recaptcha/api.js"]'
              ))
            ) {
              const e = document.createElement('script')
              return (
                (e.src =
                  'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit'),
                document.head.appendChild(e)
              )
            }
          }
        }),
      afterSetup(e) {
        for (var t of e)
          for (var o of t.addedNodes) {
            var n, a
            ;(n = Qe.x(
              './descendant-or-self::iframe[starts-with(@src, "https://www.google.com/recaptcha/")]',
              o
            )) && this.setupIFrame(n),
              (a = Qe.x('./descendant-or-self::textarea', o)) &&
                this.setupTextArea(a)
          }
      },
      setupIFrame(e) {
        let t
        if (doc.contains(e))
          return (
            $e.replace.iframe(e),
            Qe.addClass(je.nodes.el, 'captcha-open'),
            this.fixQRPosition(),
            Qe.on(e, 'load', this.fixQRPosition),
            a.activeElement === this.nodes.counter && e.focus(),
            ['blink', 'edge'].includes(Qe.engine) &&
            ((t = e.parentNode),
            u('#qr .captcha-container > div > div:first-of-type').includes(t))
              ? Qe.on(e.parentNode, 'scroll', function () {
                  return (this.scrollTop = 0)
                })
              : void 0
          )
      },
      fixQRPosition() {
        if (je.nodes.el.getBoundingClientRect().bottom > doc.clientHeight)
          return (
            (je.nodes.el.style.top = ''), (je.nodes.el.style.bottom = '0px')
          )
      },
      setupTextArea(e) {
        return Qe.one(e, 'input', () => this.save(!0))
      },
      destroy() {
        if (this.isEnabled)
          return (
            delete this.timeouts.destroy,
            Qe.rmClass(je.nodes.el, 'captcha-open'),
            this.nodes.container
              ? (Qe.global(function () {
                  const e = document.querySelector('#qr .captcha-container')
                  return window.grecaptcha.reset(e.dataset.widgetID)
                }),
                Qe.rm(this.nodes.container),
                delete this.nodes.container)
              : void 0
          )
      },
      getOne: e => $e.cache.getOne(e),
      save(e, o) {
        $e.cache.save({
          response: o || Qe('textarea', this.nodes.container).value,
          timeout: Date.now() + this.lifetime,
        })
        const n =
          'IFRAME' === a.activeElement?.nodeName &&
          /https?:\/\/www\.google\.com\/recaptcha\//.test(a.activeElement.src)
        if (
          ($e.cache.needed()
            ? (n &&
                (je.cooldown.auto || t['Post on Captcha Completion']
                  ? this.nodes.counter.focus()
                  : je.nodes.status.focus()),
              this.reload())
            : (e
                ? this.destroy()
                : null == this.timeouts.destroy &&
                  (this.timeouts.destroy = setTimeout(
                    this.destroy.bind(this),
                    3e3
                  )),
              n && je.nodes.status.focus()),
          t['Post on Captcha Completion'] && !je.cooldown.auto)
        )
          return je.submit()
      },
      count() {
        const e = $e.cache.getCount(),
          t = $e.cache.submitCB ? '...' : ''
        return (
          (this.nodes.counter.textContent = `Captchas: ${e}${t}`),
          this.moreNeeded()
        )
      },
      reload() {
        return Qe(
          'iframe[src^="https://www.google.com/recaptcha/api/fallback?"]',
          this.nodes.container
        )
          ? (this.destroy(), this.setup(!1, !0))
          : Qe.global(function () {
              const e = document.querySelector('#qr .captcha-container')
              return window.grecaptcha.reset(e.dataset.widgetID)
            })
      },
      occupied() {
        return !!this.nodes.container && !this.timeouts.destroy
      },
    },
  }
  var je = {
    mimeTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'application/pdf',
      'application/vnd.adobe.flash.movie',
      'application/x-shockwave-flash',
      'video/webm',
    ],
    validExtension: /\.(jpe?g|png|gif|pdf|swf|webm)$/i,
    typeFromExtension: {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
      pdf: 'application/pdf',
      swf: 'application/vnd.adobe.flash.movie',
      webm: 'video/webm',
    },
    extensionFromType: {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'application/pdf': 'pdf',
      'application/vnd.adobe.flash.movie': 'swf',
      'application/x-shockwave-flash': 'swf',
      'video/webm': 'webm',
    },
    init() {
      let e
      if (t['Quick Reply'])
        return (
          (this.posts = []),
          Qe.on(a, '4chanXInitFinished', () => Y.ready(je.initReady)),
          l.Post.push({ name: 'Quick Reply', cb: this.node }),
          (this.shortcut = e =
            Qe.el('a', {
              className: 'disabled',
              textContent: '↩',
              title: 'Quick Reply',
              href: 'javascript:;',
            })),
          Qe.on(e, 'click', function () {
            if (je.postingIsEnabled)
              return t['Persistent QR'] || !je.nodes || je.nodes.el.hidden
                ? (je.open(), je.nodes.com.focus())
                : je.close()
          }),
          Xe.addShortcut('qr', e, 540)
        )
    },
    initReady() {
      let e
      const n = Qe('#g-recaptcha, #captcha-forced-noscript') ? 'v2' : 't'
      ;(je.captcha = $e[n]), (je.postingIsEnabled = !0)
      const { config: i } = o.BOARD,
        r = (e, t) => +(i[e] ?? t)
      if (
        ((je.min_width = r('min_image_width', 1)),
        (je.min_height = r('min_image_height', 1)),
        (je.max_width = je.max_height = 1e4),
        (je.max_size = r('max_filesize', 4194304)),
        (je.max_size_video = r('max_webm_filesize', je.max_size)),
        (je.max_comment = r('max_comment_chars', 2e3)),
        (je.max_width_video = je.max_height_video = 2048),
        (je.max_duration_video = r('max_webm_duration', 120)),
        (je.forcedAnon = !!i.forced_anon),
        (je.spoiler = !!i.spoilers),
        (e = Qe.id('togglePostFormLink')))
      ) {
        const t = Qe.el('h1', { className: 'qr-link-container' })
        Qe.extend(t, {
          innerHTML: `<a href="javascript:;" class="qr-link">${
            'thread' === o.VIEW ? 'Reply to Thread' : 'Start a Thread'
          }</a>`,
        }),
          (je.link = t.firstElementChild),
          Qe.on(t.firstChild, 'click', function () {
            return je.open(), je.nodes.com.focus()
          }),
          Qe.before(e, t),
          (e.firstElementChild.textContent = 'Original Form')
      }
      if ('thread' === o.VIEW) {
        let e
        const t = Qe.el('div', {
          className: 'brackets-wrap qr-link-container-bottom',
        })
        Qe.extend(t, {
          innerHTML:
            '<a href="javascript:;" class="qr-link-bottom">Reply to Thread</a>',
        }),
          Qe.on(t.firstElementChild, 'click', function () {
            return je.open(), je.nodes.com.focus()
          }),
          (e = Qe('.navLinksBot')) && Qe.prepend(e, t)
      }
      if (
        (Qe.on(a, 'QRGetFile', je.getFile),
        Qe.on(a, 'QRDrawFile', je.drawFile),
        Qe.on(a, 'QRSetFile', je.setFile),
        Qe.on(a, 'paste', je.paste),
        Qe.on(a, 'dragover', je.dragOver),
        Qe.on(a, 'drop', je.dropFile),
        Qe.on(a, 'dragstart dragend', je.drag),
        Qe.on(a, 'IndexRefreshInternal', je.generatePostableThreadsList),
        Qe.on(a, 'ThreadUpdate', je.statusCheck),
        t['Persistent QR'])
      )
        return je.open(), t['Auto Hide QR'] ? je.hide() : void 0
    },
    statusCheck() {
      if (!je.nodes) return
      const { thread: e } = je.posts[0]
      return 'new' !== e && o.threads.get(`${o.BOARD}.${e}`).isDead
        ? je.abort()
        : je.status()
    },
    node() {
      if ((Qe.on(this.nodes.quote, 'click', je.quote), this.isFetchedQuote))
        return je.generatePostableThreadsList()
    },
    open() {
      if (je.nodes)
        je.nodes.el.hidden && je.captcha.setup(),
          (je.nodes.el.hidden = !1),
          je.unhide()
      else
        try {
          je.dialog()
        } catch (e) {
          return (
            delete je.nodes,
            void jt.handleErrors({
              message: 'Quick Reply dialog creation crashed.',
              error: e,
            })
          )
        }
      return Qe.rmClass(je.shortcut, 'disabled')
    },
    close() {
      if (!je.req) {
        for (var e of ((je.nodes.el.hidden = !0),
        je.cleanNotifications(),
        je.blur(),
        Qe.rmClass(je.nodes.el, 'dump'),
        Qe.addClass(je.shortcut, 'disabled'),
        new je.post(!0),
        je.posts.splice(0, je.posts.length - 1)))
          e.delete()
        return (je.cooldown.auto = !1), je.status(), je.captcha.destroy()
      }
      je.abort()
    },
    focus: () =>
      Qe.queueTask(function () {
        if (!je.inBubble())
          return (
            (je.hasFocus =
              a.activeElement && je.nodes.el.contains(a.activeElement)),
            je.nodes.el.classList.toggle('focus', je.hasFocus)
          )
      }),
    inBubble() {
      const e = u('iframe[src^="https://www.google.com/recaptcha/api2/frame"]')
      return (
        e.includes(a.activeElement) ||
        e.some(
          e =>
            'hidden' !== getComputedStyle(e).visibility &&
            e.getBoundingClientRect().bottom > 0
        )
      )
    },
    hide: () => (
      je.blur(),
      Qe.addClass(je.nodes.el, 'autohide'),
      (je.nodes.autohide.checked = !0)
    ),
    unhide: () => (
      Qe.rmClass(je.nodes.el, 'autohide'), (je.nodes.autohide.checked = !1)
    ),
    toggleHide() {
      return this.checked ? je.hide() : je.unhide()
    },
    blur() {
      if (je.nodes.el.contains(a.activeElement)) return a.activeElement.blur()
    },
    toggleSJIS: e => (
      e.preventDefault(),
      (t.sjisPreview = !t.sjisPreview),
      Qe.set('sjisPreview', t.sjisPreview),
      je.nodes.el.classList.toggle('sjis-preview', t.sjisPreview)
    ),
    texPreviewShow: () =>
      Qe.hasClass(je.nodes.el, 'tex-preview')
        ? je.texPreviewHide()
        : (Qe.addClass(je.nodes.el, 'tex-preview'),
          (je.nodes.texPreview.textContent = je.nodes.com.value),
          Qe.event('mathjax', null, je.nodes.texPreview)),
    texPreviewHide: () => Qe.rmClass(je.nodes.el, 'tex-preview'),
    addPost() {
      const e = je.nodes && !je.nodes.el.hidden
      return (
        je.open(),
        e && (Qe.addClass(je.nodes.el, 'dump'), new je.post(!0)),
        je.nodes.com.focus()
      )
    },
    setCustomCooldown: e => (
      (t.customCooldownEnabled = e),
      (je.cooldown.customCooldown = e),
      je.nodes.customCooldown.classList.toggle('disabled', !e)
    ),
    toggleCustomCooldown() {
      const e = Qe.hasClass(je.nodes.customCooldown, 'disabled')
      return je.setCustomCooldown(e), Qe.set('customCooldownEnabled', e)
    },
    error(e, t) {
      let o
      je.open(),
        'string' == typeof e
          ? (o = Qe.tn(e))
          : ((o = e), o.removeAttribute('style'))
      const n = new _e('warning', o)
      if ((je.notifications.push(n), Xe.areNotificationsEnabled)) {
        if (a.hidden || (!t && !a.hasFocus())) {
          const e = new Notification(o.textContent, {
            body: o.textContent,
            icon: h.logo,
          })
          if (((e.onclick = () => window.focus()), 'gecko' !== Qe.engine))
            return (
              (e.onclose = () => n.close()),
              (e.onshow = () =>
                setTimeout(function () {
                  return (e.onclose = null), e.close()
                }, 7e3))
            )
        }
      } else if (a.hidden && !je.cooldown.auto) return alert(o.textContent)
    },
    connectionError: () =>
      Qe.el('span', {
        innerHTML:
          'Connection error while posting. [<a href="' +
          e.faq +
          '#connection-errors" target="_blank">More info</a>]',
      }),
    notifications: [],
    cleanNotifications() {
      for (var e of je.notifications) e.close()
      return (je.notifications = [])
    },
    status() {
      let e, t
      if (!je.nodes) return
      const { thread: n } = je.posts[0]
      'new' !== n &&
        o.threads.get(`${o.BOARD}.${n}`).isDead &&
        ((t = 'Dead'), (e = !0), (je.cooldown.auto = !1)),
        (t = je.req ? je.req.progress : je.cooldown.seconds || t)
      const { status: a } = je.nodes
      return (
        (a.value = t ? (je.cooldown.auto ? `Auto ${t}` : t) : 'Submit'),
        (a.disabled = e || !1)
      )
    },
    openPost() {
      if ((je.open(), je.selected.isLocked)) {
        const e = je.posts.indexOf(je.selected)
        return (
          (je.posts[e + 1] || new je.post()).select(),
          Qe.addClass(je.nodes.el, 'dump'),
          (je.cooldown.auto = !0)
        )
      }
    },
    quote(e) {
      let t
      if ((e?.preventDefault(), !je.postingIsEnabled)) return
      const n = a.getSelection(),
        i = We.postFromNode(this),
        { root: r } = i.nodes,
        s = new Range()
      s.selectNode(r)
      let l = i.board.ID === o.BOARD.ID ? `>>${i}\n` : `>>>/${i.board}/${i}\n`
      for (
        let e = 0, a = n.rangeCount, i = 0 <= a;
        i ? e < a : e > a;
        i ? e++ : e--
      )
        try {
          var d, c
          if (
            ((t = n.getRangeAt(e)),
            t.compareBoundaryPoints(Range.START_TO_START, s) < 0 &&
              t.setStartBefore(r),
            t.compareBoundaryPoints(Range.END_TO_END, s) > 0 &&
              t.setEndAfter(r),
            !t.toString().trim())
          )
            continue
          var h = t.cloneContents(),
            p = t.commonAncestorContainer
          for (c of (Qe.x(
            'ancestor-or-self::*[self::s or contains(@class,"removed-spoiler")]',
            p
          ) &&
            (Qe.prepend(h, Qe.tn('[spoiler]')), Qe.add(h, Qe.tn('[/spoiler]'))),
          (d = Qe.x(
            'ancestor-or-self::pre[contains(@class,"prettyprint")]',
            p
          )) && (Qe.prepend(h, Qe.tn('[code]')), Qe.add(h, Qe.tn('[/code]'))),
          u(d ? 'br' : '.prettyprint br', h)))
            Qe.replace(c, Qe.tn('\n'))
          for (c of u('br', h)) c !== h.lastChild && Qe.replace(c, Qe.tn('\n>'))
          for (c of (o.SITE.insertTags?.(h), u('.linkify[data-original]', h)))
            Qe.replace(c, Qe.tn(c.dataset.original))
          for (c of u('.embedder', h))
            ' ' === c.previousSibling?.nodeValue && Qe.rm(c.previousSibling),
              Qe.rm(c)
          l += `>${h.textContent.trim()}\n`
        } catch (e) {}
      je.openPost()
      const { com: g, thread: f } = je.nodes
      g.value || (f.value = We.threadFromNode(this))
      const m = je.selected.isOnlyQuotes(),
        b = g.selectionStart
      return (
        (g.value = g.value.slice(0, b) + l + g.value.slice(g.selectionEnd)),
        (t = b + l.length),
        g.setSelectionRange(t, t),
        g.focus(),
        m && (je.selected.quotedText = g.value),
        je.selected.save(g),
        je.selected.save(f)
      )
    },
    characterCount() {
      const e = je.nodes.charCount,
        t = je.nodes.com.value.replace(
          /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
          '_'
        ).length
      return (
        (e.textContent = t),
        (e.hidden = t < je.max_comment / 2),
        (t > je.max_comment ? Qe.addClass : Qe.rmClass)(e, 'warning')
      )
    },
    getFile: () => Qe.event('QRFile', je.selected?.file),
    drawFile(e) {
      const t = je.selected?.file
      if (!t || !/^(image|video)\//.test(t.type)) return
      const o = /^video\//.test(t),
        n = Qe.el(o ? 'video' : 'img')
      return (
        Qe.on(n, 'error', () => je.openError()),
        Qe.on(n, o ? 'loadeddata' : 'load', function () {
          return (
            e.target.getContext('2d').drawImage(n, 0, 0),
            URL.revokeObjectURL(n.src),
            Qe.event('QRImageDrawn', null, e.target)
          )
        }),
        (n.src = URL.createObjectURL(t))
      )
    },
    openError() {
      const t = Qe.el('div')
      return (
        Qe.extend(t, {
          innerHTML:
            'Could not open file. [<a href="' +
            n(e.faq) +
            '#error-reading-metadata" target="_blank">More info</a>]',
        }),
        je.error(t)
      )
    },
    setFile(e) {
      const { file: t, name: o, source: n } = e.detail
      return (
        null != o && (t.name = o),
        null != n && (t.source = n),
        je.open(),
        je.handleFiles([t])
      )
    },
    drag(e) {
      const t = 'dragstart' === e.type ? Qe.off : Qe.on
      return t(a, 'dragover', je.dragOver), t(a, 'drop', je.dropFile)
    },
    dragOver: e => (e.preventDefault(), (e.dataTransfer.dropEffect = 'copy')),
    dropFile(e) {
      if (e.dataTransfer.files.length)
        return (
          e.preventDefault(), je.open(), je.handleFiles(e.dataTransfer.files)
        )
    },
    paste(e) {
      if (!e.clipboardData.items) return
      let o = null,
        n = -1
      for (var a of e.clipboardData.items) {
        var i
        if ('file' === a.kind && (i = a.getAsFile())) {
          var r = 2 * (i.size <= je.max_size) + ('image/png' === i.type)
          r > n && ((o = i), (n = r))
        }
      }
      if (o) {
        const { type: e } = o,
          n = new Blob([o], { type: e })
        ;(n.name = `${t.pastedname}.${
          Qe.getOwn(je.extensionFromType, e) || 'jpg'
        }`),
          je.open(),
          je.handleFiles([n]),
          Qe.addClass(je.nodes.el, 'dump')
      }
    },
    pasteFF() {
      const { pasteArea: e } = je.nodes
      if (!e.childNodes.length) return
      const o = u('img', e)
      for (var n of (Qe.rmAll(e), o)) {
        var a,
          { src: i } = n
        if ((a = i.match(/data:(image\/(\w+));base64,(.+)/))) {
          for (
            var r = atob(a[3]),
              s = new Uint8Array(r.length),
              l = 0,
              d = r.length,
              c = 0 <= d;
            c ? l < d : l > d;
            c ? l++ : l--
          )
            s[l] = r.charCodeAt(l)
          var h = new Blob([s], { type: a[1] })
          ;(h.name = `${t.pastedname}.${a[2]}`), je.handleFiles([h])
        } else /^https?:\/\//.test(i) && je.handleUrl(i)
      }
    },
    handleUrl: e => (
      je.open(),
      je.selected.preventAutoPost(),
      He.permission(function () {
        const t = prompt('Enter a URL:', e)
        if (null !== t)
          return (
            je.nodes.fileButton.focus(),
            He.file(t, function (e) {
              return e && !/^text\//.test(e.type)
                ? je.handleFiles([e])
                : je.error("Can't load file.")
            })
          )
      })
    ),
    handleFiles(e) {
      if (
        (this !== je && ((e = [...this.files]), (this.value = null)), e.length)
      ) {
        for (var t of (je.cleanNotifications(), e)) je.handleFile(t, e.length)
        return (
          1 !== e.length && Qe.addClass(je.nodes.el, 'dump'),
          a.activeElement === je.nodes.fileButton &&
          Qe.hasClass(je.nodes.fileSubmit, 'has-file')
            ? je.nodes.filename.focus()
            : void 0
        )
      }
    },
    handleFile(e, t) {
      let o
      const n = /^text\//.test(e.type)
      return (
        1 === t
          ? (o = je.selected)
          : ((o = je.posts[je.posts.length - 1]),
            (n ? o.com || o.pasting : o.file) && (o = new je.post())),
        o[n ? 'pasteText' : 'setFile'](e)
      )
    },
    openFileInput() {
      if (!je.nodes.fileButton.disabled)
        return je.nodes.fileInput.click(), je.nodes.fileButton.focus()
    },
    generatePostableThreadsList() {
      if (!je.nodes) return
      const e = je.nodes.thread,
        t = [e.firstElementChild]
      for (var n of o.BOARD.threads.keys)
        t.push(Qe.el('option', { value: n, textContent: `Thread ${n}` }))
      const a = e.value
      return (
        Qe.rmAll(e),
        Qe.add(e, t),
        (e.value = a),
        e.value !== a
          ? ((e.value = 'thread' === o.VIEW ? o.THREADID : 'new'),
            ('thread' === o.VIEW ? Qe.addClass : Qe.rmClass)(
              je.nodes.el,
              'reply-to-thread'
            ))
          : void 0
      )
    },
    dialog() {
      let e, n, i, r
      je.nodes = i = {
        el: (e = L.dialog('qr', {
          innerHTML:
            '<div class="move">\n  <label>\n    <input type="checkbox" id="autohide" title="Auto-hide">\n    Quick Reply\n  </label>\n  <a href="javascript:;" class="close" title="Close">×</a>\n  <select data-name="thread" title="Create a new thread / Reply">\n    <option value="new">New thread</option>\n  </select>\n</div>\n<form>\n  <div class="persona">\n    <button type="button" id="sjis-toggle" title="Toggle Mona font">∀</button>\n    <button type="button" id="tex-preview-button" title="Preview TeX">T<sub>E</sub>X</button>\n    <input name="name" data-name="name" list="list-name" placeholder="Name" class="field" size="1">\n    <input name="email" data-name="email" list="list-email" placeholder="Options" class="field" size="1">\n    <input name="sub" data-name="sub" list="list-sub" placeholder="Subject" class="field" size="1">\n  </div>\n  <div class="textarea">\n    <textarea data-name="com" placeholder="Comment" class="field"></textarea>\n    <span id="char-count"></span>\n    <div id="tex-preview"></div>\n  </div>\n  <div id="dump-list-container">\n    <div id="dump-list"></div>\n    <a id="add-post" href="javascript:;" title="Add a post">+</a>\n  </div>\n  <div class="oekaki" hidden>\n    <input type="button" id="qr-draw-button" value="Draw">\n    <label><span>Width:</span><input name="oekaki-width" value="400" type="number" class="field" size="1"></label>\n    <label><span>Height:</span><input name="oekaki-height" value="400" type="number" class="field" size="1"></label>\n    <span class="oekaki-bg" title="Background Color"><input name="oekaki-bg" type="checkbox" checked><input name="oekaki-bgcolor" type="color" value="#ffffff"></span>\n  </div>\n  <div id="file-n-submit">\n    <input type="button" id="qr-file-button" value="Files">\n    <span id="qr-filename-container" class="field">\n      <span id="qr-no-file">No selected file</span>\n      <input id="qr-filename" data-name="filename" spellcheck="false">\n      <label id="qr-spoiler-label">\n        <input type="checkbox" id="qr-file-spoiler" title="Spoiler image">\n        <a class="checkbox-letter">S</a>\n      </label>\n      <a id="qr-oekaki-button" title="Edit in Tegaki">✎︎</a>\n      <a href="javascript:;" id="qr-filerm" title="Remove file">✕</a>\n      <a id="url-button" title="Post from URL">🔗︎</a>\n      <a hidden id="paste-area" title="Select to paste images" tabindex="-1" contentEditable="true">📋︎</a>\n      <a id="custom-cooldown-button" title="Toggle custom cooldown" class="disabled">🕒︎</a>\n      <a id="dump-button" title="Dump list">+</a>\n    </span>\n    <input type="submit">\n  </div>\n  <select data-default="4" name="filetag">\n    <option value="0">Hentai</option>\n    <option value="6">Porn</option>\n    <option value="1">Japanese</option>\n    <option value="2">Anime</option>\n    <option value="3">Game</option>\n    <option value="5">Loop</option>\n    <option value="4" selected>Other</option>\n  </select>\n  <input type="file" multiple>\n</form>\n<datalist id="list-name"></datalist>\n<datalist id="list-email"></datalist>\n<datalist id="list-sub"></datalist>\n',
        })),
      }
      const s = (t, o) => (i[t] = Qe(o, e))
      s('move', '.move'),
        s('autohide', '#autohide'),
        s('close', '.close'),
        s('thread', 'select'),
        s('form', 'form'),
        s('sjisToggle', '#sjis-toggle'),
        s('texButton', '#tex-preview-button'),
        s('name', '[data-name=name]'),
        s('email', '[data-name=email]'),
        s('sub', '[data-name=sub]'),
        s('com', '[data-name=com]'),
        s('charCount', '#char-count'),
        s('texPreview', '#tex-preview'),
        s('dumpList', '#dump-list'),
        s('addPost', '#add-post'),
        s('oekaki', '.oekaki'),
        s('drawButton', '#qr-draw-button'),
        s('fileSubmit', '#file-n-submit'),
        s('fileButton', '#qr-file-button'),
        s('noFile', '#qr-no-file'),
        s('filename', '#qr-filename'),
        s('spoiler', '#qr-file-spoiler'),
        s('oekakiButton', '#qr-oekaki-button'),
        s('fileRM', '#qr-filerm'),
        s('urlButton', '#url-button'),
        s('pasteArea', '#paste-area'),
        s('customCooldown', '#custom-cooldown-button'),
        s('dumpButton', '#dump-button'),
        s('status', '[type=submit]'),
        s('flashTag', '[name=filetag]'),
        s('fileInput', '[type=file]')
      const { config: l } = o.BOARD,
        { classList: d } = je.nodes.el
      d.toggle('forced-anon', je.forcedAnon),
        d.toggle('has-spoiler', je.spoiler),
        d.toggle('has-sjis', !!l.sjis_tags),
        d.toggle('has-math', !!l.math_tags),
        d.toggle('sjis-preview', !!l.sjis_tags && t.sjisPreview),
        d.toggle(
          'show-new-thread-option',
          t['Show New Thread Option in Threads']
        ),
        parseInt(t.customCooldown, 10) > 0 &&
          (Qe.addClass(je.nodes.fileSubmit, 'custom-cooldown'),
          Qe.get(
            'customCooldownEnabled',
            t.customCooldownEnabled,
            function ({ customCooldownEnabled: e }) {
              return (
                je.setCustomCooldown(e),
                Qe.sync('customCooldownEnabled', je.setCustomCooldown)
              )
            }
          )),
        je.flagsInput(),
        Qe.on(i.autohide, 'change', je.toggleHide),
        Qe.on(i.close, 'click', je.close),
        Qe.on(i.status, 'click', je.submit),
        Qe.on(i.form, 'submit', je.submit),
        Qe.on(i.sjisToggle, 'click', je.toggleSJIS),
        Qe.on(i.texButton, 'mousedown', je.texPreviewShow),
        Qe.on(i.texButton, 'mouseup', je.texPreviewHide),
        Qe.on(i.addPost, 'click', () => new je.post(!0)),
        Qe.on(i.drawButton, 'click', je.oekaki.draw),
        Qe.on(i.fileButton, 'click', je.openFileInput),
        Qe.on(i.noFile, 'click', je.openFileInput),
        Qe.on(i.filename, 'focus', function () {
          return Qe.addClass(this.parentNode, 'focus')
        }),
        Qe.on(i.filename, 'blur', function () {
          return Qe.rmClass(this.parentNode, 'focus')
        }),
        Qe.on(i.spoiler, 'change', () => je.selected.nodes.spoiler.click()),
        Qe.on(i.oekakiButton, 'click', je.oekaki.button),
        Qe.on(i.fileRM, 'click', () => je.selected.rmFile()),
        Qe.on(i.urlButton, 'click', () => je.handleUrl('')),
        Qe.on(i.customCooldown, 'click', je.toggleCustomCooldown),
        Qe.on(i.dumpButton, 'click', () => i.el.classList.toggle('dump')),
        Qe.on(i.fileInput, 'change', je.handleFiles),
        window.addEventListener('focus', je.focus, !0),
        window.addEventListener('blur', je.focus, !0),
        Qe.on(a, 'click', je.focus),
        'gecko' !== Qe.engine ||
          window.DataTransferItemList ||
          (i.pasteArea.hidden = !1),
        new MutationObserver(je.pasteFF).observe(i.pasteArea, { childList: !0 })
      const c = ['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag']
      let h = 0
      const u = function () {
        return je.selected.save(this)
      }
      for (; (r = c[h++]); ) {
        var p
        ;(p = i[r]) &&
          ((n = 'SELECT' === p.nodeName ? 'change' : 'input'),
          Qe.on(i[r], n, u))
      }
      return (
        'gecko' === Qe.engine &&
          t['Remember QR Size'] &&
          (Qe.get('QR Size', '', e => (i.com.style.cssText = e['QR Size'])),
          Qe.on(i.com, 'mouseup', function (e) {
            if (0 === e.button) return Qe.set('QR Size', this.style.cssText)
          })),
        je.generatePostableThreadsList(),
        je.persona.load(),
        new je.post(!0),
        je.status(),
        je.cooldown.setup(),
        je.captcha.init(),
        Qe.add(a.body, e),
        je.captcha.setup(),
        je.oekaki.setup(),
        Qe.event('QRDialogCreation', null, e)
      )
    },
    flags() {
      const e = Qe.el('select', { name: 'flag', className: 'flagSelector' }),
        t = (t, o) => Qe.add(e, Qe.el('option', { value: t, textContent: o }))
      for (var n in (t(
        '0',
        o.BOARD.config.country_flags ? 'Geographic Location' : 'None'
      ),
      o.BOARD.config.board_flags)) {
        t(n, o.BOARD.config.board_flags[n])
      }
      return e
    },
    flagsInput() {
      const { nodes: e } = je
      if (
        e &&
        (e.flag && (Qe.rm(e.flag), delete e.flag), o.BOARD.config.board_flags)
      ) {
        const t = je.flags()
        return (
          (t.dataset.name = 'flag'),
          (t.dataset.default = '0'),
          (e.flag = t),
          Qe.add(e.form, t)
        )
      }
    },
    submit(e) {
      let n, i, r
      e?.preventDefault()
      const s = e?.shiftKey
      if (je.req) return void je.abort()
      if ((Qe.forceSync('cooldowns'), je.cooldown.seconds)) {
        if (!s) return (je.cooldown.auto = !je.cooldown.auto), void je.status()
        je.cooldown.clear()
      }
      const l = je.posts[0]
      delete l.quotedText, l.forceSave()
      let d = l.thread
      const c = o.BOARD.threads.get(d)
      if (
        ('f' === o.BOARD.ID && 'new' === d && (r = je.nodes.flashTag.value),
        'new' === d
          ? ((d = null),
            o.BOARD.config.require_subject && !l.sub
              ? (i = 'New threads require a subject.')
              : o.BOARD.config.text_only || l.file || (i = 'No file selected.'))
          : o.BOARD.threads.get(d).isClosed
            ? (i = "You can't reply to this thread anymore.")
            : l.com || l.file
              ? l.file &&
                c.fileLimit &&
                (i = 'Max limit of image replies has been reached.')
              : (i = 'No comment or file.'),
        'r9k' !== o.BOARD.ID ||
          l.com?.match(/[a-z-]/i) ||
          i ||
          (i = 'Original comment required.'),
        !je.captcha.isEnabled ||
          (je.captcha === $e.v2 && /\b_ct=/.test(a.cookie) && d) ||
          (i && !s) ||
          ((n = je.captcha.getOne(!!d)),
          je.captcha === $e.v2 && (n || (n = $e.cache.request(!!d))),
          n ||
            ((i = 'No valid captcha.'),
            je.captcha.setup(
              !je.cooldown.auto || a.activeElement === je.nodes.status
            ))),
        je.cleanNotifications(),
        i && !s)
      )
        return (je.cooldown.auto = !1), je.status(), void je.error(i)
      ;(je.cooldown.auto = je.posts.length > 1), l.lock()
      const h = {
          MAX_FILE_SIZE: je.max_size,
          mode: 'regist',
          pwd: je.persona.getPassword(),
          resto: d,
          name: je.forcedAnon ? void 0 : l.name,
          email: l.email,
          sub: je.forcedAnon || d ? void 0 : l.sub,
          com: l.com,
          upfile: l.file,
          filetag: r,
          spoiler: l.spoiler,
          flag: l.flag,
        },
        u = {
          responseType: 'document',
          withCredentials: !0,
          onloadend: je.response,
          form: Qe.formData(h),
        }
      t['Show Upload Progress'] &&
        (u.onprogress = function (e) {
          if (this === je.req?.upload)
            return (
              e.loaded < e.total
                ? (je.req.progress = `${Math.round(
                    (e.loaded / e.total) * 100
                  )}%`)
                : ((je.req.isUploadFinished = !0), (je.req.progress = '...')),
              je.status()
            )
        })
      let p = function (e) {
        if (null != e)
          if (((je.currentCaptcha = e), je.captcha === $e.v2))
            null != e.challenge
              ? (u.form.append('recaptcha_challenge_field', e.challenge),
                u.form.append('recaptcha_response_field', e.response))
              : u.form.append('g-recaptcha-response', e.response)
          else
            for (var t in e) {
              var n = e[t]
              u.form.append(t, n)
            }
        return (
          (je.req = Qe.ajax(
            `https://sys.${location.hostname.split('.')[1]}.org/${
              o.BOARD
            }/post`,
            u
          )),
          (je.req.progress = '...')
        )
      }
      return (
        'function' == typeof n
          ? ((je.req = {
              progress: '...',
              abort: () => (
                je.captcha === $e.v2 && $e.cache.abort(), (p = null)
              ),
            }),
            n(function (e) {
              return je.captcha === $e.v2 && $e.cache.haveCookie()
                ? (p?.(), e ? $e.cache.save(e) : void 0)
                : e
                  ? p?.(e)
                  : (delete je.req,
                    l.unlock(),
                    (je.cooldown.auto = !!$e.cache.getCount()),
                    je.status())
            }))
          : p(n),
        je.status()
      )
    },
    response() {
      let e, n
      if (this !== je.req) return
      delete je.req
      const i = je.posts[0]
      if ((i.unlock(), (n = this.response?.getElementById('errmsg')))) {
        const e = Qe('a', n)
        e && (e.target = '_blank')
      } else
        (e = !this.response || 'Post successful!' !== this.response.title)
          ? ((n = je.connectionError()),
            je.captcha === $e.v2 &&
              je.currentCaptcha &&
              $e.cache.save(je.currentCaptcha))
          : 200 !== this.status &&
            (n = `Error ${this.statusText} (${this.status})`)
      if ((e || je.captcha.setUsed?.(), delete je.currentCaptcha, n)) {
        let t
        if (
          ((je.errorCount = (je.errorCount || 0) + 1),
          /captcha|verification/i.test(n.textContent) || e)
        )
          /mistyped/i.test(n.textContent)
            ? (n = 'You mistyped the CAPTCHA, or the CAPTCHA malfunctioned.')
            : /expired/i.test(n.textContent) &&
              (n = 'This CAPTCHA is no longer valid because it has expired.'),
            je.errorCount >= 5
              ? (je.cooldown.auto = !1)
              : ((je.cooldown.auto = je.captcha.isEnabled || e),
                je.cooldown.addDelay(i, 2))
        else if (
          n.textContent &&
          (t = n.textContent.match(/\d+\s+(?:minute|second)/gi)) &&
          !/duplicate|hour/i.test(n.textContent)
        ) {
          je.cooldown.auto = !/have\s+been\s+muted/i.test(n.textContent)
          let e = 0
          for (var r of t)
            e += (/minute/i.test(r) ? 60 : 1) * +r.match(/\d+/)[0]
          ;/muted/i.test(n.textContent)
            ? je.cooldown.addMute(e)
            : je.cooldown.addDelay(i, e)
        } else je.cooldown.auto = !1
        return (
          je.captcha.setup(
            je.cooldown.auto &&
              [je.nodes.status, a.body].includes(a.activeElement)
          ),
          je.status(),
          void je.error(n)
        )
      }
      delete je.errorCount
      const s = Qe('h1', this.response)
      let [l, d, c] = s.nextSibling.textContent.match(/thread:(\d+),no:(\d+)/)
      ;(c = +c), (d = +d || c)
      const h = d !== c
      Qe.event('QRPostSuccessful', {
        boardID: o.BOARD.ID,
        threadID: d,
        postID: c,
      }),
        Qe.event('QRPostSuccessful_', {
          boardID: o.BOARD.ID,
          threadID: d,
          postID: c,
        })
      const u = je.posts.length - 1
      je.cooldown.auto = u && h
      const p = !(function () {
        for (var e of je.posts.slice(1)) if (e.thread === i.thread) return !0
      })()
      u
        ? (i.rm(), je.captcha.setup(a.activeElement === je.nodes.status))
        : t['Persistent QR']
          ? (i.rm(), t['Auto Hide QR'] ? je.hide() : je.blur())
          : je.close(),
        je.cleanNotifications(),
        t['Posting Success Notifications'] &&
          je.notifications.push(new _e('success', s.textContent, 5)),
        je.cooldown.add(d, c)
      const g =
        d === c
          ? `${window.location.origin}/${o.BOARD}/thread/${d}`
          : d !== o.THREADID && p && t['Open Post in New Tab']
            ? `${window.location.origin}/${o.BOARD}/thread/${d}#p${c}`
            : void 0
      if (g) {
        const e =
          t['Open Post in New Tab'] || u
            ? () => Qe.open(g)
            : () => (location.href = g)
        d === c ? je.waitForThread(g, e) : e()
      }
      return je.status()
    },
    waitForThread(e, t) {
      let o = 0
      var n = function () {
        return Qe.ajax(e, {
          onloadend() {
            return (
              o++, o >= 6 || 200 === this.status ? t() : setTimeout(n, o * b)
            )
          },
          responseType: 'text',
          type: 'HEAD',
        })
      }
      return n()
    },
    abort() {
      let e
      return (
        (e = je.req) &&
          !je.req.isUploadFinished &&
          (delete je.req,
          e.abort(),
          je.captcha === $e.v2 &&
            je.currentCaptcha &&
            $e.cache.save(je.currentCaptcha),
          delete je.currentCaptcha,
          je.posts[0].unlock(),
          (je.cooldown.auto = !1),
          je.notifications.push(new _e('info', 'QR upload aborted.', 5))),
        je.status()
      )
    },
    cooldown: {
      seconds: 0,
      delays: { deletion: 60 },
      init() {
        if (t['Quick Reply'])
          return (
            (this.data = t.cooldowns),
            (this.changes = m()),
            Qe.sync('cooldowns', this.sync)
          )
      },
      setup() {
        for (var e in (Qe.extend(je.cooldown.delays, o.BOARD.cooldowns()),
        (je.cooldown.maxDelay = 0),
        je.cooldown.delays)) {
          var t = je.cooldown.delays[e]
          ;['thread', 'thread_global'].includes(e) ||
            (je.cooldown.maxDelay = Math.max(je.cooldown.maxDelay, t))
        }
        return (je.cooldown.isSetup = !0), je.cooldown.start()
      },
      start() {
        const { data: e } = je.cooldown
        if (
          t.Cooldown &&
          je.cooldown.isSetup &&
          !je.cooldown.isCounting &&
          !(
            Object.keys(e[o.BOARD.ID] || {}).length +
              Object.keys(e.global || {}).length <=
            0
          )
        )
          return (je.cooldown.isCounting = !0), je.cooldown.count()
      },
      sync: e => ((je.cooldown.data = e || m()), je.cooldown.start()),
      add(e, n) {
        if (!t.Cooldown) return
        const a = Date.now(),
          i = o.BOARD.ID
        return (
          je.cooldown.set(i, a, { threadID: e, postID: n }),
          e === n &&
            je.cooldown.set('global', a, {
              boardID: i,
              threadID: e,
              postID: n,
            }),
          je.cooldown.save(),
          je.cooldown.start()
        )
      },
      addDelay(e, n) {
        if (!t.Cooldown) return
        const a = je.cooldown.categorize(e)
        return (
          (a.delay = n),
          je.cooldown.set(o.BOARD.ID, Date.now(), a),
          je.cooldown.save(),
          je.cooldown.start()
        )
      },
      addMute(e) {
        if (t.Cooldown)
          return (
            je.cooldown.set(o.BOARD.ID, Date.now(), { type: 'mute', delay: e }),
            je.cooldown.save(),
            je.cooldown.start()
          )
      },
      delete(e) {
        let t
        if (!je.cooldown.data) return
        const o =
          je.cooldown.data[e.board.ID] || (je.cooldown.data[e.board.ID] = m())
        for (var n in o)
          (t = o[n]),
            null == t.delay &&
              t.threadID === e.thread.ID &&
              t.postID === e.ID &&
              je.cooldown.set(e.board.ID, n, null)
        return je.cooldown.save()
      },
      secondsDeletion(e) {
        if (!je.cooldown.data || !t.Cooldown) return 0
        const o = je.cooldown.data[e.board.ID] || m()
        for (var n in o) {
          var a = o[n]
          if (
            null == a.delay &&
            a.threadID === e.thread.ID &&
            a.postID === e.ID
          ) {
            var i =
              je.cooldown.delays.deletion - Math.floor((Date.now() - n) / b)
            return Math.max(i, 0)
          }
        }
        return 0
      },
      categorize: e =>
        'new' === e.thread
          ? { type: 'thread' }
          : { type: e.file ? 'image' : 'reply', threadID: +e.thread },
      mergeChange: (e, t, o, n) =>
        n
          ? ((e[t] || (e[t] = m()))[o] = n)
          : t in e && (delete e[t][o], 0 === Object.keys(e[t]).length)
            ? delete e[t]
            : void 0,
      set: (e, t, o) => (
        je.cooldown.mergeChange(je.cooldown.data, e, t, o),
        ((je.cooldown.changes[e] || (je.cooldown.changes[e] = m()))[t] = o)
      ),
      save() {
        const { changes: e } = je.cooldown
        if (Object.keys(e).length)
          return Qe.get('cooldowns', m(), function ({ cooldowns: e }) {
            for (var t in je.cooldown.changes) {
              for (var o in je.cooldown.changes[t]) {
                var n = je.cooldown.changes[t][o]
                je.cooldown.mergeChange(e, t, o, n)
              }
              je.cooldown.data = e
            }
            return Qe.set('cooldowns', e, () => (je.cooldown.changes = m()))
          })
      },
      clear: () => (
        (je.cooldown.data = m()),
        (je.cooldown.changes = m()),
        (je.cooldown.auto = !1),
        je.cooldown.update(),
        Qe.queueTask(Qe.delete, 'cooldowns')
      ),
      update() {
        let e
        if (!je.cooldown.isCounting) return
        let n = !1,
          a = 0
        const i = Date.now(),
          { type: r, threadID: s } = je.cooldown.categorize(je.posts[0])
        let l = 0
        if (t.Cooldown)
          for (var d of [o.BOARD.ID, 'global']) {
            var c = je.cooldown.data[d] || (je.cooldown.data[d] = m())
            for (var h in c) {
              ;(e = c[h]), (h = +h)
              var u = Math.floor((i - h) / b)
              if (u < 0) je.cooldown.set(d, h, null), (n = !0)
              else if (null == e.delay) {
                var p =
                  e.threadID !== e.postID
                    ? je.cooldown.maxDelay
                    : je.cooldown.delays[
                        'global' === d ? 'thread_global' : 'thread'
                      ]
                if (
                  (je.cooldown.customCooldown &&
                    (p = Math.max(p, parseInt(t.customCooldown, 10))),
                  p <= u)
                )
                  je.cooldown.set(d, h, null), (n = !0)
                else if (
                  ('thread' === r) == (e.threadID === e.postID) &&
                  e.boardID !== o.BOARD.ID
                ) {
                  var g = 'global' === d ? '_global' : ''
                  ;(l = Math.max(l, je.cooldown.delays[r + g] - u)),
                    je.cooldown.customCooldown &&
                      (l = Math.max(l, parseInt(t.customCooldown, 10) - u))
                }
              } else
                e.delay <= u
                  ? (je.cooldown.set(d, h, null), (n = !0))
                  : ((e.type === r && e.threadID === s) || 'mute' === e.type) &&
                    (l = Math.max(l, e.delay - u))
            }
            a += Object.keys(c).length
          }
        n && je.cooldown.save,
          a
            ? (clearTimeout(je.cooldown.timeout),
              (je.cooldown.timeout = setTimeout(je.cooldown.count, b)))
            : delete je.cooldown.isCounting
        const f = l !== je.cooldown.seconds
        return (je.cooldown.seconds = l), f ? je.status() : void 0
      },
      count() {
        if (
          (je.cooldown.update(),
          0 === je.cooldown.seconds && je.cooldown.auto && !je.req)
        )
          return je.submit()
      },
    },
    oekaki: {
      menu: {
        init() {
          if (
            !(
              ['index', 'thread'].includes(o.VIEW) &&
              t.Menu &&
              t['Edit Link'] &&
              t['Quick Reply']
            )
          )
            return
          const e = Qe.el('a', {
            className: 'edit-link',
            href: 'javascript:;',
            textContent: 'Edit image',
          })
          return (
            Qe.on(e, 'click', this.editFile),
            Q.menu.addEntry({
              el: e,
              order: 90,
              open(e) {
                je.oekaki.menu.post = e
                const { file: t } = e
                return je.postingIsEnabled && !!t && (t.isImage || t.isVideo)
              },
            })
          )
        },
        editFile() {
          const { post: e } = je.oekaki.menu
          je.quote.call(e.nodes.post)
          const { isVideo: t } = e.file,
            o = e.file.fullImage?.currentTime || 0
          return He.file(e.file.url, function (n) {
            if (n) {
              if (t) {
                const t = Qe.el('video')
                return (
                  Qe.on(t, 'loadedmetadata', function () {
                    return (
                      Qe.on(t, 'seeked', function () {
                        const o = Qe.el('canvas', {
                          width: t.videoWidth,
                          height: t.videoHeight,
                        })
                        return (
                          o.getContext('2d').drawImage(t, 0, 0),
                          o.toBlob(function (t) {
                            return (
                              (t.name =
                                e.file.name.replace(/\.\w+$/, '') + '.png'),
                              je.handleFiles([t]),
                              je.oekaki.edit()
                            )
                          })
                        )
                      }),
                      (t.currentTime = o)
                    )
                  }),
                  Qe.on(t, 'error', () => je.openError()),
                  (t.src = URL.createObjectURL(n))
                )
              }
              return (
                (n.name = e.file.name), je.handleFiles([n]), je.oekaki.edit()
              )
            }
            return je.error("Can't load file.")
          })
        },
      },
      setup: () =>
        Qe.global(function () {
          const { FCX: e } = window
          if (
            ((e.oekakiCB = () =>
              window.Tegaki.flatten().toBlob(function (t) {
                const o = `oekaki-${Date.now()}`
                return (
                  (e.oekakiLatest = o),
                  document.dispatchEvent(
                    new CustomEvent('QRSetFile', {
                      bubbles: !0,
                      detail: { file: t, name: e.oekakiName, source: o },
                    })
                  )
                )
              })),
            window.Tegaki)
          )
            return (document.querySelector('#qr .oekaki').hidden = !1)
        }),
      load(e) {
        if (Qe('script[src^="//s.4cdn.org/js/tegaki"]', a.head)) return e()
        {
          const t = Qe.el('link', {
              rel: 'stylesheet',
              href: `//s.4cdn.org/css/tegaki.${Date.now()}.css`,
            }),
            o = Qe.el('script', {
              src: `//s.4cdn.org/js/tegaki.min.${Date.now()}.js`,
            })
          let n = 0
          const i = function () {
            if (2 == ++n) return e()
          }
          return (
            Qe.on(t, 'load', i), Qe.on(o, 'load', i), Qe.add(a.head, [t, o])
          )
        }
      },
      draw: () =>
        Qe.global(function () {
          const { Tegaki: e, FCX: t } = window
          return (
            e.bg && e.destroy(),
            (t.oekakiName = 'tegaki.png'),
            e.open({
              onDone: t.oekakiCB,
              onCancel: () => (e.bgColor = '#ffffff'),
              width: +document.querySelector('#qr [name=oekaki-width]').value,
              height: +document.querySelector('#qr [name=oekaki-height]').value,
              bgColor: document.querySelector('#qr [name=oekaki-bg]').checked
                ? document.querySelector('#qr [name=oekaki-bgcolor]').value
                : 'transparent',
            })
          )
        }),
      button: () => (je.selected.file ? je.oekaki.edit() : je.oekaki.toggle()),
      edit: () =>
        je.oekaki.load(() =>
          Qe.global(function () {
            const { Tegaki: e, FCX: t } = window,
              o =
                document
                  .getElementById('qr-filename')
                  .value.replace(/\.\w+$/, '') + '.png',
              { source: n } = document.getElementById('file-n-submit').dataset,
              a = e =>
                document.dispatchEvent(
                  new CustomEvent('CreateNotification', {
                    bubbles: !0,
                    detail: { type: 'warning', content: e, lifetime: 20 },
                  })
                )
            var i = function (n) {
              n && this.removeEventListener('QRMetadata', i, !1)
              const r = document.getElementById('selected')
              if (!r?.dataset.type) return a('No file to edit.')
              if (!/^(image|video)\//.test(r.dataset.type))
                return a('Not an image.')
              if (!r.dataset.height) return a('Metadata not available.')
              if ('loading' === r.dataset.height)
                return void r.addEventListener('QRMetadata', i, !1)
              e.bg && e.destroy(),
                (t.oekakiName = o),
                e.open({
                  onDone: t.oekakiCB,
                  onCancel: () => (e.bgColor = '#ffffff'),
                  width: +r.dataset.width,
                  height: +r.dataset.height,
                  bgColor: 'transparent',
                })
              const s = document.createElement('canvas')
              return (
                (s.width = s.naturalWidth = +r.dataset.width),
                (s.height = s.naturalHeight = +r.dataset.height),
                (s.hidden = !0),
                document.body.appendChild(s),
                s.addEventListener(
                  'QRImageDrawn',
                  function () {
                    return this.remove(), e.onOpenImageLoaded.call(this)
                  },
                  !1
                ),
                s.dispatchEvent(new CustomEvent('QRDrawFile', { bubbles: !0 }))
              )
            }
            return e.bg && e.onDoneCb === t.oekakiCB && n === t.oekakiLatest
              ? ((t.oekakiName = o), e.resume())
              : i()
          })
        ),
      toggle: () =>
        je.oekaki.load(
          () => (je.nodes.oekaki.hidden = !je.nodes.oekaki.hidden)
        ),
    },
    persona: {
      always: {},
      types: { name: [], email: [], sub: [] },
      init() {
        if (t['Quick Reply'] || (t.Menu && t['Delete Link']))
          for (var e of t['QR.personas'].split('\n'))
            je.persona.parseItem(e.trim())
      },
      parseItem(e) {
        let t, n, a, i
        if ('#' === e[0]) return
        if (!(t = e.match(/(name|options|email|subject|password):"(.*)"/i)))
          return
        ;([t, a, i] = t), (e = e.replace(t, ''))
        const r = e.match(/boards:([^;]+)/i)?.[1].toLowerCase() || 'global'
        if ('global' === r || ((n = o.BOARD.ID), r.split(',').includes(n))) {
          if ('password' !== a)
            return (
              'options' === a && (a = 'email'),
              'subject' === a && (a = 'sub'),
              /always/i.test(e) && (je.persona.always[a] = i),
              je.persona.types[a].includes(i)
                ? void 0
                : je.persona.types[a].push(i)
            )
          je.persona.pwd = i
        }
      },
      load() {
        for (var e in je.persona.types) {
          var t = je.persona.types[e],
            o = Qe(`#list-${e}`, je.nodes.el)
          for (var n of t) n && Qe.add(o, Qe.el('option', { textContent: n }))
        }
      },
      getPassword() {
        let e
        return null != je.persona.pwd
          ? je.persona.pwd
          : (e = a.cookie.match(/4chan_pass=([^;]+)/))
            ? decodeURIComponent(e[1])
            : ''
      },
      get: e => Qe.get('QR.persona', {}, ({ 'QR.persona': t }) => e(t)),
      set: e =>
        Qe.get('QR.persona', {}, function ({ 'QR.persona': t }) {
          return (t = { name: e.name, flag: e.flag }), Qe.set('QR.persona', t)
        }),
    },
    post: class {
      constructor(e) {
        this.select = this.select.bind(this)
        const n = Qe.el('a', {
          className: 'qr-preview',
          draggable: !0,
          href: 'javascript:;',
        })
        for (var a of (Qe.extend(n, {
          innerHTML:
            '<a class="remove" title="Remove">✕</a><label class="qr-preview-spoiler"><input type="checkbox"> Spoiler</label><span></span>',
        }),
        (this.nodes = {
          el: n,
          rm: n.firstChild,
          spoiler: Qe('.qr-preview-spoiler input', n),
          span: n.lastChild,
        }),
        Qe.on(n, 'click', this.select),
        Qe.on(this.nodes.rm, 'click', e => (e.stopPropagation(), this.rm())),
        Qe.on(
          this.nodes.spoiler,
          'change',
          e => (
            (this.spoiler = e.target.checked),
            this === je.selected && (je.nodes.spoiler.checked = this.spoiler),
            this.preventAutoPost()
          )
        ),
        u('label', n)))
          Qe.on(a, 'click', e => e.stopPropagation())
        for (var i of (Qe.add(je.nodes.dumpList, n),
        ['dragStart', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop']))
          Qe.on(n, i.toLowerCase(), this[i])
        this.thread = 'thread' === o.VIEW ? o.THREADID : 'new'
        const r = je.posts[je.posts.length - 1]
        je.posts.push(this),
          (this.nodes.spoiler.checked = this.spoiler =
            !(!r || !t['Remember Spoiler']) && r.spoiler),
          je.persona.get(e => {
            if (
              ((this.name =
                'name' in je.persona.always
                  ? je.persona.always.name
                  : r
                    ? r.name
                    : e.name),
              (this.email =
                'email' in je.persona.always ? je.persona.always.email : ''),
              (this.sub =
                'sub' in je.persona.always ? je.persona.always.sub : ''),
              je.nodes.flag &&
                (this.flag = r
                  ? r.flag
                  : e.flag && e.flag in o.BOARD.config.board_flags
                    ? e.flag
                    : void 0),
              je.selected === this)
            )
              return this.load()
          }),
          e && this.select(),
          this.unlock(),
          je.captcha.moreNeeded()
      }
      rm() {
        this.delete()
        const e = je.posts.indexOf(this)
        return (
          1 === je.posts.length
            ? (new je.post(!0), Qe.rmClass(je.nodes.el, 'dump'))
            : this === je.selected &&
              (je.posts[e - 1] || je.posts[e + 1]).select(),
          je.posts.splice(e, 1),
          je.status(),
          je.captcha.updateThread?.()
        )
      }
      delete() {
        return (
          Qe.rm(this.nodes.el),
          URL.revokeObjectURL(this.URL),
          this.dismissErrors()
        )
      }
      lock(e = !0) {
        if (((this.isLocked = e), this === je.selected)) {
          for (var t of [
            'thread',
            'name',
            'email',
            'sub',
            'com',
            'fileButton',
            'filename',
            'spoiler',
            'flag',
          ]) {
            var o
            ;(o = je.nodes[t]) && (o.disabled = e)
          }
          return (
            (this.nodes.rm.style.visibility = e ? 'hidden' : ''),
            (this.nodes.spoiler.disabled = e),
            (this.nodes.el.draggable = !e)
          )
        }
      }
      unlock() {
        return this.lock(!1)
      }
      select() {
        je.selected &&
          (je.selected.nodes.el.removeAttribute('id'), je.selected.forceSave()),
          (je.selected = this),
          this.lock(this.isLocked),
          (this.nodes.el.id = 'selected')
        const e = this.nodes.el.getBoundingClientRect(),
          t = this.nodes.el.parentNode.getBoundingClientRect()
        return (
          (this.nodes.el.parentNode.scrollLeft +=
            e.left + e.width / 2 - t.left - t.width / 2),
          this.load()
        )
      }
      load() {
        for (var e of [
          'thread',
          'name',
          'email',
          'sub',
          'com',
          'filename',
          'flag',
        ]) {
          var t
          ;(t = je.nodes[e]) && (t.value = this[e] || t.dataset.default || '')
        }
        return (
          ('new' !== this.thread ? Qe.addClass : Qe.rmClass)(
            je.nodes.el,
            'reply-to-thread'
          ),
          this.showFileData(),
          je.characterCount()
        )
      }
      save(e, t) {
        if ('checkbox' === e.type) return void (this.spoiler = e.checked)
        const { name: o } = e.dataset
        if (
          ![
            'thread',
            'name',
            'email',
            'sub',
            'com',
            'filename',
            'flag',
          ].includes(o)
        )
          return
        const n = this[o] || e.dataset.default || null
        switch (((this[o] = e.value || e.dataset.default || null), o)) {
          case 'thread':
            ;('new' !== this.thread ? Qe.addClass : Qe.rmClass)(
              je.nodes.el,
              'reply-to-thread'
            ),
              je.status(),
              je.captcha.updateThread?.()
            break
          case 'com':
            this.updateComment()
            break
          case 'filename':
            if (!this.file) return
            this.saveFilename(), this.updateFilename()
            break
          case 'name':
          case 'flag':
            this[o] !== n && je.persona.set(this)
        }
        return t ? void 0 : this.preventAutoPost()
      }
      forceSave() {
        if (this === je.selected)
          for (var e of [
            'thread',
            'name',
            'email',
            'sub',
            'com',
            'filename',
            'spoiler',
            'flag',
          ]) {
            var t
            ;(t = je.nodes[e]) && this.save(t, !0)
          }
      }
      preventAutoPost() {
        if (
          je.cooldown.auto &&
          this === je.posts[0] &&
          (je.cooldown.update(), je.cooldown.seconds <= 5)
        )
          return (je.cooldown.auto = !1)
      }
      setComment(e) {
        return (
          (this.com = e || null),
          this === je.selected && (je.nodes.com.value = this.com),
          this.updateComment()
        )
      }
      updateComment() {
        if (
          (this === je.selected && je.characterCount(),
          (this.nodes.span.textContent = this.com),
          je.captcha.moreNeeded(),
          je.captcha === $e.v2)
        )
          return $e.cache.prerequest()
      }
      isOnlyQuotes() {
        return (this.com || '').trim() === (this.quotedText || '').trim()
      }
      static rmErrored(e) {
        e.stopPropagation()
        for (let e = je.posts.length - 1; e >= 0; e--) {
          var t,
            o = je.posts[e]
          if ((t = o.errors))
            for (var n of t)
              if (i.contains(n)) {
                o.rm()
                break
              }
        }
      }
      error(e, t, o) {
        const a = Qe.el('div', { className: e })
        Qe.extend(a, {
          innerHTML:
            t +
            (o ? ` [<a href="${n(o)}" target="_blank">More info</a>]` : '') +
            '<br>[<a href="javascript:;">delete post</a>] [<a href="javascript:;">delete all</a>]',
        }),
          (this.errors || (this.errors = [])).push(a)
        const [i, r] = u('a', a)
        return (
          Qe.on(a, 'click', () => {
            if (je.posts.includes(this)) return this.select()
          }),
          Qe.on(i, 'click', e => {
            if ((e.stopPropagation(), je.posts.includes(this))) return this.rm()
          }),
          Qe.on(r, 'click', je.post.rmErrored),
          je.error(a, !0)
        )
      }
      fileError(e, t) {
        return this.error('file-error', `${this.filename}: ${e}`, t)
      }
      dismissErrors(e = () => !0) {
        if (this.errors)
          for (var t of this.errors)
            i.contains(t) && e(t) && t.parentNode.previousElementSibling.click()
      }
      setFile(e) {
        if (((this.file = e), t['Randomize Filename'] && 'f' !== o.BOARD.ID)) {
          let e
          ;(this.filename =
            '' +
            (1e3 * Date.now() - Math.floor(365 * Math.random() * w * 1e3))),
            (e = this.file.name.match(je.validExtension)) &&
              (this.filename += e[0])
        } else this.filename = this.file.name
        return (
          (this.filesize = Qe.bytesToString(this.file.size)),
          this.checkSize(),
          Qe.addClass(this.nodes.el, 'has-file'),
          je.captcha.moreNeeded(),
          URL.revokeObjectURL(this.URL),
          this.saveFilename(),
          this === je.selected ? this.showFileData() : this.updateFilename(),
          this.rmMetadata(),
          (this.nodes.el.dataset.type = this.file.type),
          (this.nodes.el.style.backgroundImage = ''),
          je.mimeTypes.includes(this.file.type)
            ? /^(image|video)\//.test(this.file.type) && this.readFile()
            : this.fileError('Unsupported file type.'),
          this.preventAutoPost()
        )
      }
      checkSize() {
        let e = je.max_size
        if (
          (/^video\//.test(this.file.type) &&
            (e = Math.min(e, je.max_size_video)),
          this.file.size > e)
        )
          return this.fileError(
            `File too large (file: ${this.filesize}, max: ${Qe.bytesToString(
              e
            )}).`
          )
      }
      readFile() {
        const t = /^video\//.test(this.file.type),
          o = Qe.el(t ? 'video' : 'img')
        if (t && !o.canPlayType(this.file.type)) return
        const n = t ? 'loadeddata' : 'load'
        var a = () => (
            Qe.off(o, n, a),
            Qe.off(o, 'error', i),
            this.checkDimensions(o),
            this.setThumbnail(o),
            Qe.event('QRMetadata', null, this.nodes.el)
          ),
          i = () => (
            Qe.off(o, n, a),
            Qe.off(o, 'error', i),
            this.fileError(
              `Corrupt ${t ? 'video' : 'image'} or error reading metadata.`,
              e.faq + '#error-reading-metadata'
            ),
            URL.revokeObjectURL(o.src),
            this.nodes.el.removeAttribute('data-height'),
            Qe.event('QRMetadata', null, this.nodes.el)
          )
        return (
          (this.nodes.el.dataset.height = 'loading'),
          Qe.on(o, n, a),
          Qe.on(o, 'error', i),
          (o.src = URL.createObjectURL(this.file))
        )
      }
      checkDimensions(e) {
        let t, n
        if ('IMG' === e.tagName) {
          if (
            (({ height: t, width: n } = e),
            (this.nodes.el.dataset.height = t),
            (this.nodes.el.dataset.width = n),
            (t > je.max_height || n > je.max_width) &&
              this.fileError(
                `Image too large (image: ${t}x${n}px, max: ${je.max_height}x${je.max_width}px)`
              ),
            t < je.min_height || n < je.min_width)
          )
            return this.fileError(
              `Image too small (image: ${t}x${n}px, min: ${je.min_height}x${je.min_width}px)`
            )
        } else {
          const { videoHeight: t, videoWidth: n, duration: a } = e
          ;(this.nodes.el.dataset.height = t),
            (this.nodes.el.dataset.width = n),
            (this.nodes.el.dataset.duration = a)
          const i = Math.min(je.max_height, je.max_height_video),
            r = Math.min(je.max_width, je.max_width_video)
          if (
            ((t > i || n > r) &&
              this.fileError(
                `Video too large (video: ${t}x${n}px, max: ${i}x${r}px)`
              ),
            (t < je.min_height || n < je.min_width) &&
              this.fileError(
                `Video too small (video: ${t}x${n}px, min: ${je.min_height}x${je.min_width}px)`
              ),
            isFinite(a)
              ? a > je.max_duration_video &&
                this.fileError(
                  `Video too long (video: ${a}s, max: ${je.max_duration_video}s)`
                )
              : this.fileError('Video lacks duration metadata (try remuxing)'),
            Y.noAudio(o.BOARD.ID) && Qe.hasAudio(e))
          )
            return this.fileError('Audio not allowed')
        }
      }
      setThumbnail(e) {
        let t, o
        const n = 'VIDEO' === e.tagName
        let a = 180 * window.devicePixelRatio
        if (('image/gif' === this.file.type && (a *= 3), n))
          (t = e.videoHeight), (o = e.videoWidth)
        else if ((({ height: t, width: o } = e), t < a || o < a))
          return (
            (this.URL = e.src),
            void (this.nodes.el.style.backgroundImage = `url(${this.URL})`)
          )
        t <= o ? ((o *= a / t), (t = a)) : ((t *= a / o), (o = a))
        const i = Qe.el('canvas')
        return (
          (i.height = t),
          (i.width = o),
          i.getContext('2d').drawImage(e, 0, 0, o, t),
          URL.revokeObjectURL(e.src),
          i.toBlob(
            e => (
              (this.URL = URL.createObjectURL(e)),
              (this.nodes.el.style.backgroundImage = `url(${this.URL})`)
            )
          )
        )
      }
      rmFile() {
        if (!this.isLocked)
          return (
            delete this.file,
            delete this.filename,
            delete this.filesize,
            this.nodes.el.removeAttribute('title'),
            je.nodes.filename.removeAttribute('title'),
            this.rmMetadata(),
            (this.nodes.el.style.backgroundImage = ''),
            Qe.rmClass(this.nodes.el, 'has-file'),
            this.showFileData(),
            URL.revokeObjectURL(this.URL),
            this.dismissErrors(e => Qe.hasClass(e, 'file-error')),
            this.preventAutoPost()
          )
      }
      rmMetadata() {
        for (var e of ['type', 'height', 'width', 'duration'])
          this.nodes.el.removeAttribute(`data-${e}`)
      }
      saveFilename() {
        if (
          ((this.file.newName = (this.filename || '').replace(/[/\\]/g, '-')),
          !je.validExtension.test(this.filename))
        )
          return (this.file.newName += `.${
            Qe.getOwn(je.extensionFromType, this.file.type) || 'jpg'
          }`)
      }
      updateFilename() {
        const e = `${this.filename} (${this.filesize})`
        if (((this.nodes.el.title = e), this === je.selected))
          return (je.nodes.filename.title = e)
      }
      showFileData() {
        return (
          this.file
            ? (this.updateFilename(),
              (je.nodes.filename.value = this.filename),
              Qe.addClass(je.nodes.oekaki, 'has-file'),
              Qe.addClass(je.nodes.fileSubmit, 'has-file'))
            : (Qe.rmClass(je.nodes.oekaki, 'has-file'),
              Qe.rmClass(je.nodes.fileSubmit, 'has-file')),
          null != this.file?.source
            ? (je.nodes.fileSubmit.dataset.source = this.file.source)
            : je.nodes.fileSubmit.removeAttribute('data-source'),
          (je.nodes.spoiler.checked = this.spoiler)
        )
      }
      pasteText(e) {
        ;(this.pasting = !0), this.preventAutoPost()
        const t = new FileReader()
        return (
          (t.onload = e => {
            const { result: t } = e.target
            return (
              this.setComment(this.com ? `${this.com}\n${t}` : t),
              delete this.pasting
            )
          }),
          t.readAsText(e)
        )
      }
      dragStart(e) {
        const { left: t, top: o } = this.getBoundingClientRect()
        return (
          e.dataTransfer.setDragImage(this, e.clientX - t, e.clientY - o),
          Qe.addClass(this, 'drag')
        )
      }
      dragEnd() {
        return Qe.rmClass(this, 'drag')
      }
      dragEnter() {
        return Qe.addClass(this, 'over')
      }
      dragLeave() {
        return Qe.rmClass(this, 'over')
      }
      dragOver(e) {
        return e.preventDefault(), (e.dataTransfer.dropEffect = 'move')
      }
      drop() {
        if ((Qe.rmClass(this, 'over'), !this.draggable)) return
        const e = Qe('.drag', this.parentNode),
          t = e => {
            for (let t = 0; t < e.parentNode.children.length; t++)
              if (e.parentNode.children[t] === e) return t
            return -1
          },
          o = t(e),
          n = t(this)
        if (je.posts[o].isLocked || je.posts[n].isLocked) return
        ;(o < n ? Qe.after : Qe.before)(this, e)
        const a = je.posts.splice(o, 1)[0]
        return (
          je.posts.splice(n, 0, a), je.status(), je.captcha.updateThread?.()
        )
      }
    },
  }
  let qe
  'crx' === x &&
    (qe = (function () {
      const e = []
      return (
        chrome.runtime.onMessage.addListener(function (t) {
          return e[t.id](t.data), delete e[t.id]
        }),
        (t, o) => chrome.runtime.sendMessage(t, t => (e[t] = o))
      )
    })())
  var Ue = {
      binary(e, t, o = m()) {
        if (
          ((e = e.replace(
            /^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//,
            '$1//adv/'
          )),
          'crx' === x)
        )
          qe(
            { type: 'ajax', url: e, headers: o, responseType: 'arraybuffer' },
            function ({ response: e, responseHeaderString: o }) {
              return e && (e = new Uint8Array(e)), t(e, o)
            }
          )
        else {
          const n = function () {
            return Qe.ajax(e, {
              headers: o,
              responseType: 'arraybuffer',
              onloadend() {
                return this.status && this.response
                  ? t(
                      new Uint8Array(this.response),
                      this.getAllResponseHeaders()
                    )
                  : t(null)
              },
            })
          }
          if (
            void 0 === window.GM_xmlhttpRequest ||
            null === window.GM_xmlhttpRequest
          )
            return void n()
          const a = {
            method: 'GET',
            url: e,
            headers: o,
            responseType: 'arraybuffer',
            overrideMimeType: 'text/plain; charset=x-user-defined',
            onload(e) {
              let o
              if (e.response instanceof ArrayBuffer)
                o = new Uint8Array(e.response)
              else {
                const t = e.responseText
                o = new Uint8Array(t.length)
                let n = 0
                for (; n < t.length; ) (o[n] = t.charCodeAt(n)), n++
              }
              return t(o, e.responseHeaders)
            },
            onerror: () => t(null),
            onabort: () => t(null),
          }
          try {
            return (GM?.xmlHttpRequest || GM_xmlhttpRequest)(a)
          } catch (e) {
            return n()
          }
        }
      },
      file: (e, t) =>
        Ue.binary(e, function (o, n) {
          if (null == o) return t(null)
          let a = e.match(/([^\/?#]+)\/*(?:$|[?#])/)?.[1]
          const i = n.match(/Content-Type:\s*(.*)/i)?.[1],
            r = n.match(/Content-Disposition:\s*(.*)/i)?.[1]
          let s = i?.match(/[^;]*/)[0] || 'application/octet-stream'
          const l =
            r?.match(/\bfilename\s*=\s*"((\\"|[^"])+)"/i)?.[1] ||
            i?.match(/\bname\s*=\s*"((\\"|[^"])+)"/i)?.[1]
          l && (a = l.replace(/\\"/g, '"')),
            /^text\/plain;\s*charset=x-user-defined$/i.test(s) &&
              (s =
                Qe.getOwn(
                  je.typeFromExtension,
                  a.match(/[^.]*$/)[0].toLowerCase()
                ) || 'application/octet-stream')
          const d = new Blob([o], { type: s })
          return (d.name = a), t(d)
        }),
      Request: (function () {
        const e = class {
          static initClass() {
            ;(this.prototype.status = 0),
              (this.prototype.statusText = ''),
              (this.prototype.response = null),
              (this.prototype.responseHeaderString = null)
          }
          getResponseHeader(e) {
            if (
              null == this.responseHeaders &&
              null != this.responseHeaderString
            )
              for (var t of ((this.responseHeaders = m()),
              this.responseHeaderString.split('\r\n'))) {
                var o
                if ((o = t.indexOf(':')) >= 0) {
                  var n = t.slice(0, o).trim().toLowerCase(),
                    a = t.slice(o + 1).trim()
                  this.responseHeaders[n] = a
                }
              }
            return this.responseHeaders?.[e.toLowerCase()] ?? null
          }
          abort() {}
          onloadend() {}
        }
        return e.initClass(), e
      })(),
      ajax(e, t = {}) {
        let o,
          { onloadend: n, timeout: a, responseType: i, headers: r } = t
        if (
          (null == i && (i = 'json'),
          null == window.GM?.xmlHttpRequest &&
            (void 0 === window.GM_xmlhttpRequest ||
              null === window.GM_xmlhttpRequest))
        )
          return Qe.ajax(e, t)
        const s = new Ue.Request()
        if (((s.onloadend = n), 'userscript' === x)) {
          const n = {
            method: 'GET',
            url: e,
            headers: r,
            timeout: a,
            onload(e) {
              try {
                const t =
                  'json' === i
                    ? e.responseText
                      ? JSON.parse(e.responseText)
                      : null
                    : e.responseText
                Qe.extend(s, {
                  response: t,
                  status: e.status,
                  statusText: e.statusText,
                  responseHeaderString: e.responseHeaders,
                })
              } catch (e) {}
              return s.onloadend()
            },
            onerror: () => s.onloadend(),
            onabort: () => s.onloadend(),
            ontimeout: () => s.onloadend(),
          }
          try {
            o = (GM?.xmlHttpRequest || GM_xmlhttpRequest)(n)
          } catch (o) {
            return Qe.ajax(e, t)
          }
          o &&
            'function' == typeof o.abort &&
            (s.abort = function () {
              try {
                return o.abort()
              } catch (e) {}
            })
        } else
          qe(
            { type: 'ajax', url: e, responseType: i, headers: r, timeout: a },
            function (e) {
              return e.status && Qe.extend(s, e), s.onloadend()
            }
          )
        return s
      },
      cache: (e, t) => Qe.cache(e, t, { ajax: Ue.ajax }),
      permission: (e, t, o) =>
        'crx' === x
          ? qe({ type: 'permission', origins: o }, function (o) {
              return o ? e() : t()
            })
          : e(),
    },
    He = Ue
  const Ve = (e, t = document.body) => t.querySelector(e)
  ;(Ve.id = e => a.getElementById(e)),
    (Ve.ready = function (e) {
      if ('loading' === a.readyState) {
        var t = function () {
          return Ve.off(a, 'DOMContentLoaded', t), e()
        }
        return Ve.on(a, 'DOMContentLoaded', t)
      }
      Ve.queueTask(e)
    }),
    (Ve.formData = function (e) {
      if (e instanceof HTMLFormElement) return new FormData(e)
      const t = new FormData()
      for (var o in e) {
        var n = e[o]
        n &&
          ('object' == typeof n && 'newName' in n
            ? t.append(o, n, n.newName)
            : t.append(o, n))
      }
      return t
    }),
    (Ve.extend = function (e, t) {
      for (var o in t) {
        var n = t[o]
        e[o] = n
      }
    }),
    (Ve.hasOwn = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (Ve.getOwn = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
    }),
    (Ve.ajax = (function () {
      let e
      e =
        window.wrappedJSObject && !XMLHttpRequest.wrappedJSObject
          ? XPCNativeWrapper(window.wrappedJSObject.XMLHttpRequest)
          : XMLHttpRequest
      if ('userscript' === x)
        return function (n, a = {}) {
          if (
            (null == a.responseType && (a.responseType = 'json'),
            a.type || (a.type = a.form ? 'post' : 'get'),
            (n = n.replace(
              /^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4channel|4cdn)\.org)\/adv\//,
              '$1//adv/'
            )),
            'crx' === x &&
              t['Work around CORB Bug'] &&
              'yotsuba' === o.SITE.software &&
              !a.testCORB &&
              FormData.prototype.entries)
          )
            return Ve.ajaxPage(n, a)
          const {
              onloadend: i,
              timeout: s,
              responseType: l,
              withCredentials: d,
              type: c,
              onprogress: h,
              form: u,
              headers: p,
            } = a,
            g = new e()
          try {
            g.open(c, n, !0)
            const e = p || {}
            for (var f in e) {
              var m = e[f]
              g.setRequestHeader(f, m)
            }
            Ve.extend(g, {
              onloadend: i,
              timeout: s,
              responseType: l,
              withCredentials: d,
            }),
              Ve.extend(g.upload, { onprogress: h }),
              Ve.on(g, 'error', function () {
                if (!g.status) return r.warn(`4chan X failed to load: ${n}`)
              }),
              'crx' === x &&
                Ve.on(g, 'load', () => {
                  t['Work around CORB Bug'] ||
                    4 !== g.readyState ||
                    200 !== g.status ||
                    '' !== g.statusText ||
                    null !== g.response ||
                    Ve.set(
                      'Work around CORB Bug',
                      (t['Work around CORB Bug'] = Date.now())
                    )
                }),
              g.send(u)
          } catch (e) {
            if (2153644038 !== e.result) throw e
            ;(g.onloadend = i),
              Ve.queueTask(Ve.event, 'error', null, g),
              Ve.queueTask(Ve.event, 'loadend', null, g)
          }
          return g
        }
      {
        let e = 0
        const t = m()
        return (
          (Ve.ajaxPageInit = function () {
            return (
              Ve.global(function () {
                return (
                  (window.FCX.requests = Object.create(null)),
                  document.addEventListener(
                    '4chanXAjax',
                    function (e) {
                      let t, o
                      const {
                        url: n,
                        timeout: a,
                        responseType: i,
                        withCredentials: r,
                        type: s,
                        onprogress: l,
                        form: d,
                        headers: c,
                        id: h,
                      } = e.detail
                      ;(window.FCX.requests[h] = o = new XMLHttpRequest()),
                        o.open(s, n, !0)
                      const u = c || {}
                      for (var p in u) {
                        var g = u[p]
                        o.setRequestHeader(p, g)
                      }
                      if (
                        ((o.responseType = 'document' === i ? 'text' : i),
                        (o.timeout = a),
                        (o.withCredentials = r),
                        l &&
                          (o.upload.onprogress = function (e) {
                            const { loaded: t, total: o } = e,
                              n = { loaded: t, total: o, id: h }
                            return document.dispatchEvent(
                              new CustomEvent('4chanXAjaxProgress', {
                                bubbles: !0,
                                detail: n,
                              })
                            )
                          }),
                        (o.onloadend = function () {
                          delete window.FCX.requests[h]
                          const {
                              status: e,
                              statusText: t,
                              response: o,
                            } = this,
                            n = {
                              status: e,
                              statusText: t,
                              response: o,
                              responseHeaderString:
                                this.getAllResponseHeaders(),
                              id: h,
                            }
                          return document.dispatchEvent(
                            new CustomEvent('4chanXAjaxLoadend', {
                              bubbles: !0,
                              detail: n,
                            })
                          )
                        }),
                        (o.onerror = function () {
                          if (!o.status)
                            return console.warn(`4chan X failed to load: ${n}`)
                        }),
                        d)
                      )
                        for (var f of ((t = new FormData()), d))
                          t.append(f[0], f[1])
                      else t = null
                      return o.send(t)
                    },
                    !1
                  ),
                  document.addEventListener(
                    '4chanXAjaxAbort',
                    function (e) {
                      let t
                      if ((t = window.FCX.requests[e.detail.id]))
                        return t.abort()
                    },
                    !1
                  )
                )
              }),
              Ve.on(a, '4chanXAjaxProgress', function (e) {
                let o
                if ((o = t[e.detail.id]))
                  return o.upload.onprogress.call(o.upload, e.detail)
              }),
              Ve.on(a, '4chanXAjaxLoadend', function (e) {
                let o
                if ((o = t[e.detail.id])) {
                  if ((delete t[e.detail.id], e.detail.status)) {
                    for (var n of [
                      'status',
                      'statusText',
                      'response',
                      'responseHeaderString',
                    ])
                      o[n] = e.detail[n]
                    'document' === o.responseType &&
                      (o.response = new DOMParser().parseFromString(
                        e.detail.response,
                        'text/html'
                      ))
                  }
                  return o.onloadend()
                }
              })
            )
          }),
          (Ve.ajaxPage = function (o, n = {}) {
            let a,
              {
                onloadend: i,
                timeout: r,
                responseType: s,
                withCredentials: l,
                type: d,
                onprogress: c,
                form: h,
                headers: u,
              } = n
            const p = e++
            return (
              (t[p] = a = new He.Request()),
              Ve.extend(a, { responseType: s, onloadend: i }),
              (a.upload = { onprogress: c }),
              (a.abort = () => Ve.event('4chanXAjaxAbort', { id: p })),
              h && (h = Array.from(h.entries())),
              Ve.event('4chanXAjax', {
                url: o,
                timeout: r,
                responseType: s,
                withCredentials: l,
                type: d,
                onprogress: !!c,
                form: h,
                headers: u,
                id: p,
              }),
              a
            )
          })
        )
      }
    })()),
    (Ve.lastModified = m()),
    (Ve.whenModified = function (e, t, o, n = {}) {
      let a
      const { timeout: i, ajax: r } = n,
        s = []
      'blink' === Ve.engine && s.push(`s=${t}`),
        'a.4cdn.org' === e.split('/')[2] && s.push(`t=${Date.now()}`)
      const l = e
      s.length && (e += '?' + s.join('&'))
      const d = m()
      null != (a = Ve.lastModified[t]?.[l]) && (d['If-Modified-Since'] = a)
      return (r || Ve.ajax)(e, {
        onloadend() {
          return (
            ((Ve.lastModified[t] || (Ve.lastModified[t] = m()))[l] =
              this.getResponseHeader('Last-Modified')),
            o.call(this)
          )
        },
        timeout: i,
        headers: d,
      })
    }),
    (function () {
      const e = m()
      ;(Ve.cache = function (t, o, n = {}) {
        let a
        const { ajax: i } = n
        if ((a = e[t]))
          return (
            a.callbacks
              ? a.callbacks.push(o)
              : Ve.queueTask(() => o.call(a, { isCached: !0 })),
            a
          )
        return (
          (a = (i || Ve.ajax)(t, {
            onloadend: function () {
              for (o of (this.status || delete e[t], this.callbacks))
                (e => {
                  Ve.queueTask(() => e.call(this, { isCached: !1 }))
                })(o)
              return delete this.callbacks
            },
          })),
          (a.callbacks = [o]),
          (e[t] = a)
        )
      }),
        (Ve.cleanCache = function (t) {
          for (var o in e) t(o) && delete e[o]
        })
    })(),
    (Ve.cb = {
      checked() {
        if (Ve.hasOwn(t, this.name))
          return Ve.set(this.name, this.checked), (t[this.name] = this.checked)
      },
      value() {
        if (Ve.hasOwn(t, this.name))
          return (
            Ve.set(this.name, this.value.trim()), (t[this.name] = this.value)
          )
      },
    }),
    (Ve.asap = function (e, t) {
      return e() ? t() : setTimeout(Ve.asap, 25, e, t)
    }),
    (Ve.onExists = function (e, t, o) {
      let n
      if ((n = Ve(t, e))) return o(n)
      var a = new MutationObserver(function () {
        if ((n = Ve(t, e))) return a.disconnect(), o(n)
      })
      return a.observe(e, { childList: !0, subtree: !0 })
    }),
    (Ve.addStyle = function (e, t, o = 'head') {
      const n = Ve.el('style', { textContent: e })
      return (
        null != t && (n.id = t), Ve.onExists(i, o, () => Ve.add(a.head, n)), n
      )
    }),
    (Ve.addCSP = function (e) {
      const t = Ve.el('meta', {
        httpEquiv: 'Content-Security-Policy',
        content: e,
      })
      if (a.head) return Ve.add(a.head, t), Ve.rm(t)
      {
        const e = Ve.add(i || a, Ve.el('head'))
        return Ve.add(e, t), Ve.rm(e)
      }
    }),
    (Ve.x = function (e, t) {
      return t || (t = a.body), a.evaluate(e, t, null, 8, null).singleNodeValue
    }),
    (Ve.X = function (e, t) {
      return t || (t = a.body), a.evaluate(e, t, null, 7, null)
    }),
    (Ve.addClass = function (e, ...t) {
      for (var o of t) e.classList.add(o)
    }),
    (Ve.rmClass = function (e, ...t) {
      for (var o of t) e.classList.remove(o)
    }),
    (Ve.toggleClass = (e, t) => e.classList.toggle(t)),
    (Ve.hasClass = (e, t) => e.classList.contains(t)),
    (Ve.rm = e => e?.remove()),
    (Ve.rmAll = e => (e.textContent = null)),
    (Ve.tn = e => a.createTextNode(e)),
    (Ve.frag = () => a.createDocumentFragment()),
    (Ve.nodes = function (e) {
      if (!(e instanceof Array)) return e
      const t = Ve.frag()
      for (var o of e) t.appendChild(o)
      return t
    }),
    (Ve.add = (e, t) => e.appendChild(Ve.nodes(t))),
    (Ve.prepend = (e, t) => e.insertBefore(Ve.nodes(t), e.firstChild)),
    (Ve.after = (e, t) =>
      e.parentNode.insertBefore(Ve.nodes(t), e.nextSibling)),
    (Ve.before = (e, t) => e.parentNode.insertBefore(Ve.nodes(t), e)),
    (Ve.replace = (e, t) => e.parentNode.replaceChild(Ve.nodes(t), e)),
    (Ve.el = function (e, t, o) {
      const n = a.createElement(e)
      return t && Ve.extend(n, t), o && Ve.extend(n, o), n
    }),
    (Ve.on = function (e, t, o) {
      for (var n of t.split(' ')) e.addEventListener(n, o, !1)
    }),
    (Ve.off = function (e, t, o) {
      for (var n of t.split(' ')) e.removeEventListener(n, o, !1)
    }),
    (Ve.one = function (e, t, o) {
      var n = function (a) {
        return Ve.off(e, t, n), o.call(this, a)
      }
      return Ve.on(e, t, n)
    }),
    (Ve.event = function (e, t, o = a) {
      return (
        globalThis.chrome?.extension ||
          (null != t &&
            'function' == typeof cloneInto &&
            (t = cloneInto(t, a.defaultView))),
        o.dispatchEvent(
          new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t })
        )
      )
    }),
    'userscript' === x &&
      (function () {
        if (
          /PaleMoon\//.test(navigator.userAgent) &&
          !(+GM_info?.version?.split('.')[0] < 2) &&
          'undefined' == typeof cloneInto
        )
          try {
            return new CustomEvent('x', { detail: {} })
          } catch (t) {
            const o = { Object: unsafeWindow.Object, Array: unsafeWindow.Array }
            var e = function (t) {
              let n
              if (
                null != t &&
                'object' == typeof t &&
                (n = o[t.constructor.name])
              ) {
                const o = new n()
                for (var a in t) {
                  var i = t[a]
                  o[a] = e(i)
                }
                return o
              }
              return t
            }
            return (Ve.event = (t, o, n = a) =>
              n.dispatchEvent(
                new CustomEvent(t, {
                  bubbles: !0,
                  cancelable: !0,
                  detail: e(o),
                })
              ))
          }
      })(),
    (Ve.modifiedClick = e =>
      e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || 0 !== e.button),
    (Ve.open = globalThis.chrome?.extension
      ? e => window.open(e, '_blank')
      : null != GM?.openInTab
        ? GM.openInTab
        : 'undefined' != typeof GM_openInTab && null !== GM_openInTab
          ? GM_openInTab
          : e => window.open(e, '_blank')),
    (Ve.debounce = function (e, t) {
      let o = 0,
        n = null,
        a = null,
        i = null
      const r = function () {
        return (o = Date.now()), t.apply(a, i)
      }
      return function () {
        return (
          (i = arguments),
          (a = this),
          o < Date.now() - e ? r() : (clearTimeout(n), (n = setTimeout(r, e)))
        )
      }
    }),
    (Ve.queueTask = (function () {
      const e = [],
        t = function () {
          const [t, ...o] = e.shift()
          t(...o)
        }
      return function () {
        e.push(arguments), Promise.resolve().then(t)
      }
    })()),
    (Ve.global = function (e, t) {
      if (i) {
        const o = Ve.el('script', {
          textContent: `(${e}).call(document.currentScript.dataset);`,
        })
        return (
          t && Ve.extend(o.dataset, t),
          Ve.add(a.head || i, o),
          Ve.rm(o),
          o.dataset
        )
      }
      try {
        e.call(t)
      } catch (e) {}
      return t
    }),
    (Ve.bytesToString = function (e) {
      let t = 0
      for (; e >= 1024; ) (e /= 1024), t++
      return `${(e = t > 1 ? Math.round(100 * e) / 100 : Math.round(e))} ${
        ['B', 'KB', 'MB', 'GB'][t]
      }`
    }),
    (Ve.minmax = (e, t, o) => (e < t ? t : e > o ? o : e)),
    (Ve.hasAudio = e =>
      e.mozHasAudio ||
      !!e.webkitAudioDecodedByteCount ||
      'AUDIO' === e.nextElementSibling?.tagName),
    (Ve.luma = e => 0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]),
    (Ve.unescape = function (e) {
      return null == e
        ? e
        : e.replace(/<[^>]*>/g, '').replace(
            /&(amp|#039|quot|lt|gt|#44);/g,
            e =>
              ({
                '&amp;': '&',
                '&#039;': "'",
                '&quot;': '"',
                '&lt;': '<',
                '&gt;': '>',
                '&#44;': ',',
              })[e]
          )
    }),
    (Ve.isImage = e => /\.(jpe?g|jfif|png|gif|bmp|webp|avif|jxl)$/i.test(e)),
    (Ve.isVideo = e => /\.(webm|mp4|ogv)$/i.test(e)),
    (Ve.engine = /Edge\//.test(navigator.userAgent)
      ? 'edge'
      : /Chrome\//.test(navigator.userAgent)
        ? 'blink'
        : /WebKit\//.test(navigator.userAgent)
          ? 'webkit'
          : /Gecko\/|Goanna/.test(navigator.userAgent)
            ? 'gecko'
            : void 0),
    (Ve.hasStorage = (function () {
      try {
        return (
          'true' === localStorage.getItem(o.NAMESPACE + 'hasStorage') ||
          (localStorage.setItem(o.NAMESPACE + 'hasStorage', 'true'),
          'true' === localStorage.getItem(o.NAMESPACE + 'hasStorage'))
        )
      } catch (e) {
        return !1
      }
    })()),
    (Ve.item = function (e, t) {
      const o = m()
      return (o[e] = t), o
    }),
    (Ve.oneItemSugar = e =>
      function (t, o, n) {
        return 'string' == typeof t ? e(Ve.item(t, o), n) : e(t, o)
      }),
    (Ve.syncing = m()),
    (Ve.securityCheck = function (e) {
      if ('https:' !== location.protocol) return delete e['Redirect to HTTPS']
    }),
    'crx' === x
      ? ((Ve.oldValue = { local: m(), sync: m() }),
        chrome.storage.onChanged.addListener(function (e, t) {
          for (var o in e) {
            var n = Ve.oldValue.local[o] ?? Ve.oldValue.sync[o]
            Ve.oldValue[t][o] = m.clone(e[o].newValue)
            var a = Ve.oldValue.local[o] ?? Ve.oldValue.sync[o],
              i = Ve.syncing[o]
            i && JSON.stringify(a) !== JSON.stringify(n) && i(a, o)
          }
        }),
        (Ve.sync = (e, t) => (Ve.syncing[e] = t)),
        (Ve.forceSync = function () {}),
        (Ve.crxWorking = function () {
          try {
            if (chrome.runtime.getManifest()) return !0
          } catch (e) {}
          if (!Ve.crxWarningShown) {
            const e = Ve.el('div', {
              innerHTML:
                '4chan X seems to have been updated. You will need to <a href="javascript:;">reload</a> the page.',
            })
            Ve.on(Ve('a', e), 'click', () => location.reload()),
              new _e('warning', e),
              (Ve.crxWarningShown = !0)
          }
          return !1
        }),
        (Ve.get = Ve.oneItemSugar(function (e, t) {
          if (!Ve.crxWorking()) return
          const o = {},
            n = function (n) {
              let a = Object.keys(e)
              return (
                'gecko' === Ve.engine &&
                  'sync' === n &&
                  a.length > 3 &&
                  (a = null),
                chrome.storage[n].get(a, function (i) {
                  let s
                  if (
                    ((i = m.clone(i)),
                    chrome.runtime.lastError &&
                      r.error(chrome.runtime.lastError.message),
                    null === a)
                  ) {
                    const t = m()
                    for (s in i) {
                      var l = i[s]
                      Ve.hasOwn(e, s) && (t[s] = l)
                    }
                    i = t
                  }
                  for (s in e) Ve.oldValue[n][s] = i[s]
                  if (((o[n] = i), o.local && o.sync))
                    return Ve.extend(e, o.sync), Ve.extend(e, o.local), t(e)
                })
              )
            }
          return n('local'), n('sync')
        })),
        (function () {
          const e = { local: m(), sync: m() },
            t = (e, t) =>
              unescape(encodeURIComponent(JSON.stringify(e))).length +
                unescape(encodeURIComponent(JSON.stringify(t))).length >
              chrome.storage.sync.QUOTA_BYTES_PER_ITEM
          Ve.delete = function (t) {
            if (Ve.crxWorking()) {
              for (var o of ('string' == typeof t && (t = [t]), t))
                delete e.local[o], delete e.sync[o]
              return (
                chrome.storage.local.remove(t), chrome.storage.sync.remove(t)
              )
            }
          }
          const o = {}
          var n = function (i, s) {
              const l = m()
              if (
                (Ve.extend(l, e[i]),
                Object.keys(l).length && !(o[i] > Date.now()))
              )
                return chrome.storage[i].set(l, function () {
                  let d, c
                  if ((d = chrome.runtime.lastError))
                    return (
                      r.error(d.message),
                      setTimeout(n, A, i),
                      (o[i] = Date.now() + A),
                      s?.(d)
                    )
                  for (c in (delete o[i], l)) e[i][c] === l[c] && delete e[i][c]
                  if ('local' === i) {
                    for (c in l) {
                      var h = l[c]
                      t(c, h) || (e.sync[c] = h)
                    }
                    a()
                  } else
                    chrome.storage.local.remove(
                      (() => {
                        const t = []
                        for (c in l) c in e.local || t.push(c)
                        return t
                      })()
                    )
                  return s?.()
                })
            },
            a = f(b, () => n('sync'))
          ;(Ve.set = Ve.oneItemSugar(function (t, o) {
            if (Ve.crxWorking())
              return Ve.securityCheck(t), Ve.extend(e.local, t), n('local', o)
          })),
            (Ve.clear = function (t) {
              if (!Ve.crxWorking()) return
              ;(e.local = m()), (e.sync = m())
              let o = 2,
                n = null
              const a = function () {
                if (
                  (chrome.runtime.lastError &&
                    r.error(chrome.runtime.lastError.message),
                  null == n && (n = chrome.runtime.lastError),
                  !--o)
                )
                  return t?.(n)
              }
              return chrome.storage.local.clear(a), chrome.storage.sync.clear(a)
            })
        })())
      : null == GM?.deleteValue ||
          !window.BroadcastChannel ||
          ('undefined' != typeof GM_addValueChangeListener &&
            null !== GM_addValueChangeListener)
        ? (('undefined' != typeof GM_deleteValue && null !== GM_deleteValue) ||
            (Ve.perProtocolSettings = !0),
          'undefined' != typeof GM_deleteValue && null !== GM_deleteValue
            ? ((Ve.getValue = GM_getValue),
              (Ve.listValues = () => GM_listValues()))
            : Ve.hasStorage
              ? ((Ve.getValue = e => localStorage.getItem(e)),
                (Ve.listValues = () =>
                  (() => {
                    const e = []
                    for (var t in localStorage)
                      t.slice(0, o.NAMESPACE.length) === o.NAMESPACE &&
                        e.push(t)
                    return e
                  })()))
              : ((Ve.getValue = function () {}), (Ve.listValues = () => [])),
          'undefined' != typeof GM_addValueChangeListener &&
          null !== GM_addValueChangeListener
            ? ((Ve.setValue = GM_setValue), (Ve.deleteValue = GM_deleteValue))
            : 'undefined' != typeof GM_deleteValue && null !== GM_deleteValue
              ? ((Ve.oldValue = m()),
                (Ve.setValue = function (e, t) {
                  if (
                    (GM_setValue(e, t),
                    e in Ve.syncing && ((Ve.oldValue[e] = t), Ve.hasStorage))
                  )
                    return localStorage.setItem(e, t)
                }),
                (Ve.deleteValue = function (e) {
                  if (
                    (GM_deleteValue(e),
                    e in Ve.syncing && (delete Ve.oldValue[e], Ve.hasStorage))
                  )
                    return localStorage.removeItem(e)
                }),
                Ve.hasStorage || (Ve.cantSync = !0))
              : Ve.hasStorage
                ? ((Ve.oldValue = m()),
                  (Ve.setValue = function (e, t) {
                    return (
                      e in Ve.syncing && (Ve.oldValue[e] = t),
                      localStorage.setItem(e, t)
                    )
                  }),
                  (Ve.deleteValue = function (e) {
                    return (
                      e in Ve.syncing && delete Ve.oldValue[e],
                      localStorage.removeItem(e)
                    )
                  }))
                : ((Ve.setValue = function () {}),
                  (Ve.deleteValue = function () {}),
                  (Ve.cantSync = Ve.cantSet = !0)),
          'undefined' != typeof GM_addValueChangeListener &&
          null !== GM_addValueChangeListener
            ? ((Ve.sync = (e, t) =>
                (Ve.syncing[e] = GM_addValueChangeListener(
                  o.NAMESPACE + e,
                  function (o, n, a, i) {
                    if (i) return void 0 !== a && (a = m.json(a)), t(a, e)
                  }
                ))),
              (Ve.forceSync = function () {}))
            : ('undefined' != typeof GM_deleteValue &&
                  null !== GM_deleteValue) ||
                Ve.hasStorage
              ? ((Ve.sync = function (e, t) {
                  return (
                    (e = o.NAMESPACE + e),
                    (Ve.syncing[e] = t),
                    (Ve.oldValue[e] = Ve.getValue(e))
                  )
                }),
                (function () {
                  const e = function ({ key: e, newValue: t }) {
                    let n
                    if ((n = Ve.syncing[e])) {
                      if (null != t) {
                        if (t === Ve.oldValue[e]) return
                        return (
                          (Ve.oldValue[e] = t),
                          n(m.json(t), e.slice(o.NAMESPACE.length))
                        )
                      }
                      if (null != Ve.oldValue[e])
                        return (
                          delete Ve.oldValue[e],
                          n(void 0, e.slice(o.NAMESPACE.length))
                        )
                    }
                  }
                  Ve.on(window, 'storage', e),
                    (Ve.forceSync = function (t) {
                      return (
                        (t = o.NAMESPACE + t),
                        e({ key: t, newValue: Ve.getValue(t) })
                      )
                    })
                })())
              : ((Ve.sync = function () {}), (Ve.forceSync = function () {})),
          (Ve.delete = function (e) {
            for (var t of (e instanceof Array || (e = [e]), e))
              Ve.deleteValue(o.NAMESPACE + t)
          }),
          (Ve.get = Ve.oneItemSugar((e, t) => Ve.queueTask(Ve.getSync, e, t))),
          (Ve.getSync = function (e, t) {
            for (var n in e) {
              var a
              if ((a = Ve.getValue(o.NAMESPACE + n)))
                try {
                  e[n] = m.json(a)
                } catch (e) {
                  if (!/^(?:undefined)*$/.test(a)) throw e
                }
            }
            return t(e)
          }),
          (Ve.set = Ve.oneItemSugar(function (e, t) {
            return (
              Ve.securityCheck(e),
              Ve.queueTask(function () {
                for (var n in e) {
                  var a = e[n]
                  Ve.setValue(o.NAMESPACE + n, JSON.stringify(a))
                }
                return t?.()
              })
            )
          })),
          (Ve.clear = function (e) {
            Ve.delete(Object.keys(t)),
              Ve.delete(['previousversion', 'QR Size', 'QR.persona'])
            try {
              Ve.delete(Ve.listValues().map(e => e.replace(o.NAMESPACE, '')))
            } catch (e) {}
            return e?.()
          }))
        : ((Ve.syncChannel = new BroadcastChannel(o.NAMESPACE + 'sync')),
          Ve.on(Ve.syncChannel, 'message', e =>
            (() => {
              const t = []
              for (var o in e.data) {
                var n,
                  a = e.data[o]
                ;(n = Ve.syncing[o]) && t.push(n(m.json(JSON.stringify(a)), o))
              }
              return t
            })()
          ),
          (Ve.sync = (e, t) => (Ve.syncing[e] = t)),
          (Ve.forceSync = function () {}),
          (Ve.delete = function (e, t) {
            let n
            return (
              e instanceof Array || (e = [e]),
              Promise.all(
                (() => {
                  const t = []
                  for (n of e) t.push(GM.deleteValue(o.NAMESPACE + n))
                  return t
                })()
              ).then(function () {
                const o = m()
                for (n of e) o[n] = void 0
                return Ve.syncChannel.postMessage(o), t?.()
              })
            )
          }),
          (Ve.get = Ve.oneItemSugar(function (e, t) {
            const n = Object.keys(e)
            return Promise.all(n.map(e => GM.getValue(o.NAMESPACE + e))).then(
              function (o) {
                for (let t = 0; t < o.length; t++) {
                  var a = o[t]
                  a && (e[n[t]] = m.json(a))
                }
                return t(e)
              }
            )
          })),
          (Ve.set = Ve.oneItemSugar(function (e, t) {
            return (
              Ve.securityCheck(e),
              Promise.all(
                (() => {
                  const t = []
                  for (var n in e) {
                    var a = e[n]
                    t.push(GM.setValue(o.NAMESPACE + n, JSON.stringify(a)))
                  }
                  return t
                })()
              ).then(function () {
                return Ve.syncChannel.postMessage(e), t?.()
              })
            )
          })),
          (Ve.clear = e =>
            GM.listValues()
              .then(t =>
                Ve.delete(
                  t.map(e => e.replace(o.NAMESPACE, '')),
                  e
                )
              )
              .catch(() =>
                Ve.delete(
                  Object.keys(t).concat([
                    'previousversion',
                    'QR Size',
                    'QR.persona',
                  ]),
                  e
                )
              )))
  var Qe = Ve,
    ze = {
      url(e, t, ...n) {
        let a, i
        return (i = o.sites[t.siteID]) && (a = Qe.getOwn(i.urls, e))
          ? a(t, ...n)
          : void 0
      },
      threadExcerpt(e) {
        const { OP: t } = e,
          o =
            `/${decodeURIComponent(e.board.ID)}/ - ` +
            (t.info.subject?.trim() ||
              t.commentDisplay().replace(/\n+/g, ' // ') ||
              t.file?.name ||
              `No.${t}`)
        return o.length > 73 ? `${o.slice(0, 70)}...` : o
      },
      threadFromRoot(e) {
        if (null == e) return null
        const { board: t } = e.dataset
        return o.threads.get(
          `${t ? encodeURIComponent(t) : o.BOARD.ID}.${e.id.match(/\d*$/)[0]}`
        )
      },
      threadFromNode: e =>
        ze.threadFromRoot(Qe.x(`ancestor-or-self::${o.SITE.xpath.thread}`, e)),
      postFromRoot(e) {
        if (null == e) return null
        const t = o.posts.get(e.dataset.fullID),
          n = e.dataset.clone
        return n ? t.clones[+n] : t
      },
      postFromNode: e =>
        ze.postFromRoot(
          Qe.x(`ancestor-or-self::${o.SITE.xpath.postContainer}[1]`, e)
        ),
      postDataFromLink(e) {
        let t, n, a
        if (e.dataset.postID)
          ({ boardID: t, threadID: a, postID: n } = e.dataset), a || (a = 0)
        else {
          const i = e.href.match(o.SITE.regexp.quotelink)
          ;([t, a, n] = i.slice(1)), n || (n = a)
        }
        return { boardID: t, threadID: +a, postID: +n }
      },
      allQuotelinksLinkingTo(e) {
        const n = [],
          { posts: a } = o,
          { fullID: i } = e,
          r = function (e, t) {
            for (var o of (n.push(...(e.nodes[t] || [])), e.clones))
              n.push(...(o.nodes[t] || []))
          }
        if (
          (a.forEach(function (e) {
            if (e.quotes.includes(i)) return r(e, 'quotelinks')
          }),
          t['Quote Backlinks'])
        )
          for (var s of e.quotes) {
            var l
            ;(l = a.get(s)) && r(l, 'backlinks')
          }
        return n.filter(function (t) {
          const { boardID: o, postID: n } = ze.postDataFromLink(t)
          return o === e.board.ID && n === e.ID
        })
      },
    },
    We = ze,
    Ge = {
      filters: new Map(),
      init() {
        if (
          ['index', 'thread', 'catalog'].includes(o.VIEW) &&
          t.Filter &&
          ('catalog' !== o.VIEW || t['Filter in Native Catalog'])
        ) {
          for (var e in (t['Filtered Backlinks'] ||
            Qe.addClass(i, 'hide-backlinks'),
          c.filter))
            for (var n of t[e].split('\n')) {
              let o, i, l, c, m
              if ('#' === n[0]) continue
              if (!(l = n.match(/\/(.*)\/(\w*)/))) continue
              var a = n.replace(l[0], ''),
                r = this.parseBoards(a.match(/(?:^|;)\s*boards:([^;]+)/)?.[1]),
                s = this.parseBoards(a.match(/(?:^|;)\s*exclude:([^;]+)/)?.[1])
              if ((i = ['uniqueID', 'MD5'].includes(e))) l = l[1]
              else
                try {
                  l = RegExp(l[1], l[2])
                } catch (t) {
                  new _e(
                    'warning',
                    [
                      Qe.tn(`Invalid ${e} filter:`),
                      Qe.el('br'),
                      Qe.tn(n),
                      Qe.el('br'),
                      Qe.tn(t.message),
                    ],
                    60
                  )
                  continue
                }
              var d = a.match(/(?:^|;)\s*op:(no|only)/)?.[1] || '',
                h = Qe.getOwn({ no: 1, only: 2 }, d) || 0,
                u = a.match(/(?:^|;)\s*file:(no|only)/)?.[1] || ''
              h |= Qe.getOwn({ no: 4, only: 8 }, u) || 0
              var p = (() => {
                  switch (a.match(/(?:^|;)\s*stub:(yes|no)/)?.[1]) {
                    case 'yes':
                      return !0
                    case 'no':
                      return !1
                    default:
                      return t.Stubs
                  }
                })(),
                g = /(?:^|;)\s*notify/.test(a)
              ;(o = /(?:^|;)\s*highlight/.test(a)) &&
                ((o =
                  a.match(/(?:^|;)\s*highlight:([\w-]+)/)?.[1] ||
                  'filter-highlight'),
                (c = a.match(/(?:^|;)\s*top:(yes|no)/)?.[1] || 'yes'),
                (c = 'yes' === c)),
                'general' === e &&
                  (m = (m = a.match(/(?:^|;)\s*type:([^;]*)/))
                    ? m[1].split(',')
                    : ['subject', 'name', 'filename', 'comment'])
              const b = {
                isstring: i,
                regexp: l,
                boards: r,
                excludes: s,
                mask: h,
                hide: !(o || g),
                stub: p,
                hl: o,
                top: c,
                noti: g,
              }
              if ('general' === e)
                for (var f of m)
                  this.filters.get(f)?.push(b) ?? this.filters.set(f, [b])
              else this.filters.get(e)?.push(b) ?? this.filters.set(e, [b])
            }
          if (this.filters.size) {
            for (const e of ['MD5', 'uniqueID']) {
              const t = this.filters.get(e)
              if (!t) continue
              const o = new Map()
              for (const e of t)
                o.get(e.regexp)?.push(e) ?? o.set(e.regexp, [e])
              this.filters.set(e, o)
            }
            return 'catalog' === o.VIEW
              ? Ge.catalog()
              : l.Post.push({ name: 'Filter', cb: this.node })
          }
        }
      },
      parseBoards(e) {
        let t
        if (!e) return !1
        if ((t = Ge.parseBoardsMemo[e])) return t
        t = m()
        let n = ''
        for (var a of e.split(','))
          for (var i in (a.includes(':') && ([n, a] = a.split(':').slice(-2)),
          o.sites)) {
            var r = o.sites[i]
            if (i.slice(0, n.length) === n)
              if (['nsfw', 'sfw'].includes(a))
                for (var s of r.sfwBoards?.('sfw' === a) || [])
                  t[`${i}/${s}`] = !0
              else t[`${i}/${encodeURIComponent(a)}`] = !0
          }
        return (Ge.parseBoardsMemo[e] = t), t
      },
      parseBoardsMemo: m(),
      test(e, t = !0) {
        if (e.filterResults) return e.filterResults
        let o,
          n = !1,
          a = !0,
          i = !1,
          r = !1
        _.isYou(e) && (t = !1)
        let s = e.isReply ? 2 : 1
        s |= e.file ? 4 : 8
        const l = `${e.siteID}/${e.boardID}`,
          d = `${e.siteID}/*`
        for (const c of Ge.filters.keys())
          for (const h of Ge.values(c, e)) {
            const e = Ge.filters.get(c),
              u = Array.isArray(e) ? e : e.get(h)
            if (u)
              for (const e of u)
                (e.boards && !e.boards[l] && !e.boards[d]) ||
                  (e.excludes && (e.excludes[l] || e.excludes[d])) ||
                  e.mask & s ||
                  !(e.isstring ? e.regexp === h : e.regexp.test(h)) ||
                  (e.hide
                    ? t && ((n = !0), a && ({ stub: a } = e))
                    : ((o && o.includes(e.hl)) || (o || (o = [])).push(e.hl),
                      i || ({ top: i } = e),
                      e.noti && (r = !0)))
          }
        return n ? { hide: n, stub: a } : { hl: o, top: i, noti: r }
      },
      node() {
        if (this.isClone) return
        const {
          hide: e,
          stub: t,
          hl: n,
          top: a,
          noti: i,
        } = Ge.test(
          this,
          !this.isFetchedQuote && (this.isReply || 'index' === o.VIEW)
        )
        return (
          e
            ? this.isReply
              ? W.hide(this, t)
              : ge.hide(this.thread, t)
            : n && ((this.highlights = n), Qe.addClass(this.nodes.root, ...n)),
          i && ee.posts && this.ID > ee.lastReadPost && !_.isYou(this)
            ? ee.openNotification(this, ' triggered a notification filter')
            : void 0
        )
      },
      catalog() {
        let e
        if ((e = o.SITE.urls.catalogJSON?.(o.BOARD)))
          return (
            (Ge.catalogData = m()),
            Qe.ajax(e, { onloadend: Ge.catalogParse }),
            l.CatalogThreadNative.push({ name: 'Filter', cb: this.catalogNode })
          )
      },
      catalogParse() {
        if ([200, 404].includes(this.status)) {
          for (var e of this.response)
            for (var t of e.threads) Ge.catalogData[t.no] = t
          o.BOARD.threads.forEach(function (e) {
            if (e.catalogViewNative)
              return Ge.catalogNode.call(e.catalogViewNative)
          })
        } else
          new _e(
            'warning',
            'Failed to fetch catalog JSON data. ' +
              (this.status
                ? `Error ${this.statusText} (${this.status})`
                : 'Connection Error'),
            1
          )
      },
      catalogNode() {
        if (this.boardID !== o.BOARD.ID || !Ge.catalogData[this.ID]) return
        if (
          _.db?.get({
            siteID: o.SITE.ID,
            boardID: this.boardID,
            threadID: this.ID,
            postID: this.ID,
          })
        )
          return
        const {
          hide: e,
          hl: t,
          top: n,
        } = Ge.test(o.SITE.Build.parseJSON(Ge.catalogData[this.ID], this))
        return e
          ? (this.nodes.root.hidden = !0)
          : (t && ((this.highlights = t), Qe.addClass(this.nodes.root, ...t)),
            n
              ? (Qe.prepend(this.nodes.root.parentNode, this.nodes.root),
                o.SITE.catalogPin?.(this.nodes.root))
              : void 0)
      },
      isHidden: e => !!Ge.test(e).hide,
      valueF: {
        postID: e => [`${e.ID}`],
        name: e => (void 0 === e.info.name ? [] : [e.info.name]),
        uniqueID: e => [e.info.uniqueID || ''],
        tripcode: e => (void 0 === e.info.tripcode ? [] : [e.info.tripcode]),
        capcode: e => (void 0 === e.info.capcode ? [] : [e.info.capcode]),
        pass: e => [e.info.pass],
        email: e => [e.info.email],
        subject: e => [e.info.subject || (e.isReply ? void 0 : '')],
        comment: e => (
          null == e.info.comment &&
            (e.info.comment = o.sites[e.siteID]?.Build?.parseComment?.(
              e.info.commentHTML.innerHTML
            )),
          [e.info.comment]
        ),
        flag: e => (void 0 === e.info.flag ? [] : [e.info.flag]),
        filename: e => e.files.map(e => e.name),
        dimensions: e => e.files.map(e => e.dimensions),
        filesize: e => e.files.map(e => e.size),
        MD5: e => e.files.map(e => e.MD5),
      },
      values: (e, t) =>
        Qe.hasOwn(Ge.valueF, e)
          ? Ge.valueF[e](t).filter(e => null != e)
          : [
              e
                .split('+')
                .map(function (e) {
                  let o
                  return (o = Qe.getOwn(Ge.valueF, e))
                    ? o(t)
                        .map(e => e || '')
                        .join('\n')
                    : ''
                })
                .join('\n'),
            ],
      addFilter(e, o, n) {
        if (Qe.hasOwn(c.filter, e))
          return Qe.get(e, t[e], function (t) {
            let a = t[e]
            return (a = a ? `${a}\n${o}` : o), Qe.set(e, a, n)
          })
      },
      removeFilters: (e, o, n) =>
        Qe.get(e, t[e], function (t) {
          let a = t[e]
          const i = (Array.isArray(o) ? o : [...o.values()].flat())
            .map(Ge.escape)
            .join('|')
          return (
            (a = a.replace(RegExp(`(?:$\n|^)(?:${i})$`, 'mg'), '')),
            Qe.set(e, a, n)
          )
        }),
      showFilters(e) {
        Pe.open('Filter')
        const t = Qe('.section-container'),
          o = Qe('select[name=filter]', t)
        return (
          (o.value = e),
          Pe.selectFilter.call(o),
          Qe.onExists(t, 'textarea', function (e) {
            const t = e.textLength
            return e.setSelectionRange(t, t), e.focus()
          })
        )
      },
      quickFilterMD5() {
        const e = We.postFromNode(this),
          n = e.files.filter(e => e.MD5)
        if (!n.length) return
        const a = n.map(e => `/${e.MD5}/`).join('\n')
        Ge.addFilter('MD5', a)
        const i = e.origin || e
        if (
          (i.isReply ? W.hide(i) : 'index' === o.VIEW && ge.hide(i.thread),
          !t['MD5 Quick Filter Notifications'])
        )
          return void (
            e.nodes.post.getBoundingClientRect().height &&
            new _e('info', 'MD5 filtered.', 2)
          )
        let { notice: r } = Ge.quickFilterMD5
        if (r)
          return (
            r.filters.push(a),
            r.posts.push(i),
            (Qe('span', r.el).textContent =
              `${r.filters.length} MD5s filtered.`)
          )
        {
          const e = Qe.el('div', {
            innerHTML:
              '<span>MD5 filtered.</span> [<a href="javascript:;">show</a>] [<a href="javascript:;">undo</a>]',
          })
          ;(r = Ge.quickFilterMD5.notice =
            new _e('info', e, void 0, () => delete Ge.quickFilterMD5.notice)),
            (r.filters = [a]),
            (r.posts = [i])
          const t = u('a', e)
          return (
            Qe.on(t[0], 'click', Ge.quickFilterCB.show.bind(r)),
            Qe.on(t[1], 'click', Ge.quickFilterCB.undo.bind(r))
          )
        }
      },
      quickFilterCB: {
        show() {
          return Ge.showFilters('MD5'), this.close()
        },
        undo() {
          for (var e of (Ge.removeFilters('MD5', this.filters), this.posts))
            e.isReply ? W.show(e) : 'index' === o.VIEW && ge.show(e.thread)
          return this.close()
        },
      },
      escape: e =>
        e.replace(
          new RegExp(
            '/|\\\\|\\^|\\$|\\n|\\.|\\(|\\)|\\{|\\}|\\[|\\]|\\?|\\*|\\+|\\|',
            'g'
          ),
          function (e) {
            return '\n' === e ? '\\n' : '\\' === e ? '\\\\' : `\\${e}`
          }
        ),
      menu: {
        init() {
          if (!['index', 'thread'].includes(o.VIEW) || !t.Menu || !t.Filter)
            return
          const e = {
            el: Qe.el('div', { textContent: 'Filter' }),
            order: 50,
            open: e => ((Ge.menu.post = e), !0),
            subEntries: [],
          }
          for (var n of [
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
            ['Image MD5', 'MD5'],
          ])
            e.subEntries.push(Ge.menu.createSubEntry(n[0], n[1]))
          return Q.menu.addEntry(e)
        },
        createSubEntry(e, t) {
          const o = Qe.el('a', { href: 'javascript:;', textContent: e })
          return (
            (o.dataset.type = t),
            Qe.on(o, 'click', Ge.menu.makeFilter),
            { el: o, open: e => Ge.values(t, e).length }
          )
        },
        makeFilter() {
          const { type: e } = this.dataset,
            t = Ge.values(e, Ge.menu.post)
              .map(function (t) {
                const o = ['uniqueID', 'MD5'].includes(e) ? t : Ge.escape(t)
                return ['uniqueID', 'MD5'].includes(e) ? `/${o}/` : `/^${o}$/`
              })
              .join('\n')
          return Ge.addFilter(e, t, () => Ge.showFilters(e))
        },
      },
    },
    Ye = {
      defaultProperties: {
        '4chan.org': { software: 'yotsuba' },
        '4channel.org': { canonical: '4chan.org' },
        '4cdn.org': { canonical: '4chan.org' },
        'notso.smuglo.li': { canonical: 'smuglo.li' },
        'smugloli.net': { canonical: 'smuglo.li' },
        'smug.nepu.moe': { canonical: 'smuglo.li' },
      },
      init(e) {
        Qe.extend(t.siteProperties, Ye.defaultProperties)
        let n = Ye.resolve()
        return (
          n &&
            Qe.hasOwn(De, t.siteProperties[n].software) &&
            (this.set(n), e()),
          Qe.onExists(i, 'body', () => {
            for (var a in De) {
              var i
              if ((i = De[a].detect?.())) {
                ;(i.software = a), (n = location.hostname.replace(/^www\./, ''))
                var r = t.siteProperties[n] || (t.siteProperties[n] = m()),
                  s = 0
                for (var l in i) r[l] !== i[l] && ((r[l] = i[l]), s++)
                return (
                  s && Qe.set('siteProperties', t.siteProperties),
                  void (o.SITE || (this.set(n), e()))
                )
              }
            }
          })
        )
      },
      resolve(e = location) {
        let { hostname: o } = e
        for (; o && !Qe.hasOwn(t.siteProperties, o); )
          o = o.replace(/^[^.]*\.?/, '')
        if (o) {
          let e
          ;(e = t.siteProperties[o].canonical) && (o = e)
        }
        return o
      },
      parseURL(e) {
        const t = Ye.resolve(e)
        return jt.parseURL(o.sites[t], e)
      },
      set(e) {
        for (var n in t.siteProperties) {
          var a,
            i = t.siteProperties[n]
          if (!i.canonical) {
            var { software: r } = i
            r &&
              Qe.hasOwn(De, r) &&
              ((o.sites[n] = a = Object.create(De[r])),
              Qe.extend(a, { ID: n, siteID: n, properties: i, software: r }))
          }
        }
        return (o.SITE = o.sites[e])
      },
    },
    Je = {
      init() {
        if (
          'yotsuba' === o.SITE.software &&
          (t['External Catalog'] || t['JSON Index']) &&
          (!t['JSON Index'] || 'index' !== o.VIEW)
        ) {
          const n = (() => {
            switch (o.VIEW) {
              case 'thread':
              case 'archive':
                return '.navLinks.desktop > a'
              case 'catalog':
                return '.navLinks > :first-child > a'
              case 'index':
                return '#ctrl-top > a, .cataloglink > a'
            }
          })()
          Qe.ready(function () {
            for (var a of u(n)) {
              var i
              switch (a.pathname.replace(/\/+/g, '/')) {
                case `/${o.BOARD}/`:
                  t['JSON Index'] && (a.textContent = 'Index'),
                    (a.href = Je.index())
                  break
                case `/${o.BOARD}/catalog`:
                  a.href = Je.catalog()
              }
              if (
                'catalog' === o.VIEW &&
                (i = Je.catalog()) !== o.SITE.urls.catalog?.(o.BOARD)
              ) {
                var r = a.parentNode.cloneNode(!0),
                  s = r.firstElementChild
                ;(s.href = i),
                  (s.textContent =
                    s.hostname === location.hostname
                      ? `${e.name} Catalog`
                      : 'External Catalog'),
                  Qe.after(a.parentNode, [Qe.tn(' '), r])
              }
            }
          })
        }
        if (
          ('yotsuba' === o.SITE.software &&
            t['JSON Index'] &&
            t[`Use ${e.name} Catalog`] &&
            l.Post.push({ name: 'Catalog Link Rewrite', cb: this.node }),
          (this.enabled = t['Catalog Links']))
        ) {
          let e
          ;(Je.el = e = L.checkbox('Header catalog links', 'Catalog Links')),
            (e.id = 'toggleCatalog')
          const t = Qe('input', e)
          return (
            Qe.on(t, 'change', this.toggle),
            Qe.sync('Header catalog links', Je.set),
            Xe.menu.addEntry({ el: e, order: 95 })
          )
        }
      },
      node() {
        for (var e of u('a', this.nodes.comment)) {
          var t
          ;(t = e.href.match(
            /^https?:\/\/(boards\.4chan(?:nel)?\.org\/[^\/]+)\/catalog(#s=.*)?/
          )) && (e.href = `//${t[1]}/${t[2] || '#catalog'}`)
        }
      },
      toggle() {
        return (
          Qe.event('CloseMenu'),
          Qe.set('Header catalog links', this.checked),
          Je.set(this.checked)
        )
      },
      set: e => (
        (t['Header catalog links'] = e),
        Je.setLinks(Xe.boardList),
        Je.setLinks(Xe.bottomBoardList),
        (Je.el.title = `Turn catalog links ${e ? 'off' : 'on'}.`),
        (Qe('input', Je.el).checked = e)
      ),
      setLinks(e) {
        if (!(Je.enabled ?? t['Catalog Links']) || !e) return
        const o = /(?:index)?(?:\.\w+)?$/
        for (var n of u('a:not([data-only])', e)) {
          var { siteID: a, boardID: i } = n.dataset
          if (!a || !i) {
            var r
            if (
              (({ siteID: a, boardID: i, VIEW: r } = Ye.parseURL(n)),
              !a ||
                !i ||
                !['index', 'catalog'].includes(r) ||
                (!n.dataset.indexOptions &&
                  n.href.replace(o, '') !==
                    (We.url(r, { siteID: a, boardID: i }) || '').replace(
                      o,
                      ''
                    )))
            )
              continue
            Qe.extend(n.dataset, { siteID: a, boardID: i })
          }
          var s = { siteID: a, boardID: i },
            l = t['Header catalog links'] ? Je.catalog(s) : We.url('index', s)
          l &&
            ((n.href = l),
            n.dataset.indexOptions &&
              l.split('#')[0] === We.url('index', s) &&
              (n.href += (n.hash ? '/' : '#') + n.dataset.indexOptions))
        }
      },
      externalParse() {
        for (var e of ((Je.externalList = m()),
        t.externalCatalogURLs.split('\n')))
          if ('#' !== e[0]) {
            var o = e.split(';')[0],
              n = Ge.parseBoards(e.match(/;boards:([^;]+)/)?.[1] || '*'),
              a = Ge.parseBoards(e.match(/;exclude:([^;]+)/)?.[1]) || m()
            for (var i in n)
              a[i] || a[i.split('/')[0] + '/*'] || (Je.externalList[i] = o)
          }
      },
      external({ siteID: e, boardID: t }) {
        Je.externalList || Je.externalParse()
        const o = Je.externalList[`${e}/${t}`] || Je.externalList[`${e}/*`]
        return o ? o.replace(/%board/g, t) : void 0
      },
      jsonIndex: (e, t) =>
        o.SITE.ID === e.siteID && o.BOARD.ID === e.boardID && 'index' === o.VIEW
          ? t
          : We.url('index', e) + t,
      catalog(n = o.BOARD) {
        let a, i
        return t['External Catalog'] && (a = Je.external(n))
          ? a
          : pe.enabledOn(n) && t[`Use ${e.name} Catalog`]
            ? Je.jsonIndex(n, '#catalog')
            : (i = We.url('catalog', n))
              ? i
              : Je.external(n)
      },
      index: (e = o.BOARD) =>
        pe.enabledOn(e) ? Je.jsonIndex(e, '#index') : We.url('index', e),
    },
    Ke = {
      init() {
        Qe.onExists(i, 'body', () => {
          if (jt.isThisPageLegit())
            return (
              Qe.add(this.bar, [this.noticesRoot, this.toggle]),
              Qe.prepend(a.body, this.bar),
              Qe.add(a.body, Ke.hover),
              this.setBarPosition(t['Bottom Header'])
            )
        }),
          (this.menu = new L.Menu('header'))
        const e = Qe.el('span', { className: 'menu-button' })
        Qe.extend(e, { innerHTML: '<i></i>' })
        const n = L.checkbox,
          r = n('Fixed Header', 'Fixed Header'),
          s = n('Header auto-hide', 'Auto-hide header'),
          l = n('Header auto-hide on scroll', 'Auto-hide header on scroll'),
          d = n('Bottom Header', 'Bottom header'),
          c = n('Centered links', 'Centered links'),
          h = n('Custom Board Navigation', 'Custom board navigation'),
          p = n('Bottom Board List', 'Hide bottom board list'),
          g = n('Shortcut Icons', 'Shortcut Icons'),
          f = Qe.el('a', {
            textContent: 'Edit custom board navigation',
            href: 'javascript:;',
          })
        if (
          ((this.barFixedToggler = r.firstElementChild),
          (this.scrollHeaderToggler = l.firstElementChild),
          (this.barPositionToggler = d.firstElementChild),
          (this.linkJustifyToggler = c.firstElementChild),
          (this.headerToggler = s.firstElementChild),
          (this.footerToggler = p.firstElementChild),
          (this.shortcutToggler = g.firstElementChild),
          (this.customNavToggler = h.firstElementChild),
          Qe.on(e, 'click', this.menuToggle),
          Qe.on(this.headerToggler, 'change', this.toggleBarVisibility),
          Qe.on(this.barFixedToggler, 'change', this.toggleBarFixed),
          Qe.on(this.barPositionToggler, 'change', this.toggleBarPosition),
          Qe.on(this.scrollHeaderToggler, 'change', this.toggleHideBarOnScroll),
          Qe.on(this.linkJustifyToggler, 'change', this.toggleLinkJustify),
          Qe.on(this.footerToggler, 'change', this.toggleFooterVisibility),
          Qe.on(this.shortcutToggler, 'change', this.toggleShortcutIcons),
          Qe.on(this.customNavToggler, 'change', this.toggleCustomNav),
          Qe.on(f, 'click', this.editCustomNav),
          this.setBarFixed(t['Fixed Header']),
          this.setHideBarOnScroll(t['Header auto-hide on scroll']),
          this.setBarVisibility(t['Header auto-hide']),
          this.setLinkJustify(t['Centered links']),
          this.setShortcutIcons(t['Shortcut Icons']),
          this.setFooterVisibility(t['Bottom Board List']),
          Qe.sync('Fixed Header', this.setBarFixed),
          Qe.sync('Header auto-hide on scroll', this.setHideBarOnScroll),
          Qe.sync('Bottom Header', this.setBarPosition),
          Qe.sync('Shortcut Icons', this.setShortcutIcons),
          Qe.sync('Header auto-hide', this.setBarVisibility),
          Qe.sync('Centered links', this.setLinkJustify),
          Qe.sync('Bottom Board List', this.setFooterVisibility),
          this.addShortcut('menu', e, 900),
          this.menu.addEntry({
            el: Qe.el('span', { textContent: 'Header' }),
            order: 107,
            subEntries: [
              { el: r },
              { el: s },
              { el: l },
              { el: d },
              { el: c },
              { el: p },
              { el: g },
              { el: h },
              { el: f },
            ],
          }),
          Qe.on(window, 'load popstate', Ke.hashScroll),
          Qe.on(a, 'CreateNotification', this.createNotification),
          this.setBoardList(),
          Qe.onExists(
            i,
            `${o.SITE.selectors.boardList} + *`,
            Ke.generateFullBoardList
          ),
          jt.ready(function () {
            let e
            if (
              'yotsuba' === o.SITE.software &&
              !(e = Qe.id('boardNavDesktopFoot'))
            ) {
              let t
              if (!(t = Qe.id('absbot'))) return
              ;(e = Qe.id('boardNavDesktop').cloneNode(!0)),
                (e.id = 'boardNavDesktopFoot'),
                (Qe('#navtopright', e).id = 'navbotright'),
                (Qe('#settingsWindowLink', e).id = 'settingsWindowLinkBot'),
                Qe.before(t, e),
                Qe.global(() => (window.cloneTopNav = function () {}))
            }
            if ((Ke.bottomBoardList = Qe(o.SITE.selectors.boardListBottom))) {
              for (var t of u('a', Ke.bottomBoardList))
                t.hostname === location.hostname &&
                  t.pathname.split('/')[1] === o.BOARD.ID &&
                  (t.className = 'current')
              return Je.setLinks(Ke.bottomBoardList)
            }
          }),
          'yotsuba' === o.SITE.software &&
            ('catalog' === o.VIEW || !t['Disable Native Extension']))
        ) {
          const e = Qe.el('a', { href: 'javascript:;' })
          'catalog' === o.VIEW
            ? ((e.title = e.textContent = 'Catalog Settings'),
              (e.textContent = '🕮︎'))
            : ((e.title = e.textContent = '4chan Settings'),
              (e.className = 'native-settings')),
            Qe.on(e, 'click', () => Qe.id('settingsWindowLink').click()),
            this.addShortcut('native', e, 810)
        }
        return this.enableDesktopNotifications()
      },
      bar: Qe.el('div', { id: 'header-bar' }),
      noticesRoot: Qe.el('div', { id: 'notifications' }),
      shortcuts: Qe.el('span', { id: 'shortcuts' }),
      hover: Qe.el('div', { id: 'hoverUI' }),
      toggle: Qe.el('div', { id: 'scroll-marker' }),
      setBoardList() {
        let e
        ;(Ke.boardList = e = Qe.el('span', { id: 'board-list' })),
          Qe.extend(e, {
            innerHTML:
              '<span id="custom-board-list"></span><span id="full-board-list" hidden><span class="hide-board-list-container brackets-wrap"><a href="javascript:;" class="hide-board-list-button">&nbsp;-&nbsp;</a></span> <span class="boardList"></span></span>',
          })
        const o = Qe('.hide-board-list-button', e)
        return (
          Qe.on(o, 'click', Ke.toggleBoardList),
          Qe.prepend(Ke.bar, [Ke.boardList, Ke.shortcuts]),
          Ke.setCustomNav(t['Custom Board Navigation']),
          Ke.generateBoardList(t.boardnav),
          Qe.sync('Custom Board Navigation', Ke.setCustomNav),
          Qe.sync('boardnav', Ke.generateBoardList)
        )
      },
      generateFullBoardList() {
        let e
        e = o.SITE.transformBoardList
          ? o.SITE.transformBoardList()
          : [...Qe(o.SITE.selectors.boardList).cloneNode(!0).childNodes]
        const t = Qe('.boardList', Ke.boardList)
        for (var n of (Qe.add(t, e), u('a', t)))
          n.hostname === location.hostname &&
            n.pathname.split('/')[1] === o.BOARD.ID &&
            (n.className = 'current')
        return Je.setLinks(t)
      },
      generateBoardList(e) {
        const t = Qe('#custom-board-list', Ke.boardList)
        if ((Qe.rmAll(t), !e)) return
        const o = (e = e.replace(/(\r\n|\n|\r)/g, ' '))
          .match(
            /[\w@]+(-(all|title|replace|full|index|catalog|archive|expired|nt|(mode|sort|text):"[^"]+"(,"[^"]+")?))*|[^\w@]+/g
          )
          .map(e => Ke.mapCustomNavigation(e))
        return Qe.add(t, o), Je.setLinks(t)
      },
      mapCustomNavigation(e) {
        let n, a, i, r
        if (/^[^\w@]/.test(e)) return Qe.tn(e)
        let s = (r = null)
        e = e.replace(/-text:"([^"]+)"(?:,"([^"]+)")?/g, function (e, t, o) {
          return (s = t), (r = o), ''
        })
        let l = []
        if (
          ((e = e.replace(/-(?:mode|sort):"([^"]+)"/g, function (e, t) {
            return l.push(t.toLowerCase().replace(/\ /g, '-')), ''
          })),
          (l = l.join('/')),
          /^toggle-all/.test(e))
        )
          return (
            (n = Qe.el('a', {
              className: 'show-board-list-button',
              textContent: s || '+',
              href: 'javascript:;',
            })),
            Qe.on(n, 'click', Ke.toggleBoardList),
            n
          )
        if (/^external/.test(e))
          return (
            (n = Qe.el('a', {
              href: r || 'javascript:;',
              textContent: s || '+',
              className: 'external',
            })),
            /-nt/.test(e) && ((n.target = '_blank'), (n.rel = 'noopener')),
            n
          )
        let d = e.split('-')[0]
        if ('current' === d) {
          if (
            !['boards.4chan.org', 'boards.4channel.org'].includes(
              location.hostname
            )
          )
            return (
              (n = Qe.el('a', {
                href: `/${o.BOARD.ID}/`,
                textContent: s || decodeURIComponent(o.BOARD.ID),
                className: 'current',
              })),
              /-nt/.test(e) && ((n.target = '_blank'), (n.rel = 'noopener')),
              /-index/.test(e)
                ? (n.dataset.only = 'index')
                : /-catalog/.test(e)
                  ? ((n.dataset.only = 'catalog'), (n.href += 'catalog.html'))
                  : /-(archive|expired)/.test(e) && (n = n.firstChild),
              n
            )
          d = o.BOARD.ID
        }
        if (
          ((n = (function () {
            let e
            return '@' === d
              ? Qe.el('a', {
                  href: 'https://twitter.com/4chan',
                  title: '4chan Twitter',
                  textContent: '@',
                })
              : ((n = Qe.el('a', {
                  href: `//${Y.domain(d)}/${d}/`,
                  textContent: d,
                  title: Y.title(d),
                })),
                ['catalog', 'archive'].includes(o.VIEW) &&
                  (e = We.url(o.VIEW, { siteID: '4chan.org', boardID: d })) &&
                  (n.href = e),
                n.hostname === location.hostname &&
                  d === o.BOARD.ID &&
                  (n.className = 'current'),
                n)
          })()),
          (n.textContent =
            /-title/.test(e) ||
            (/-replace/.test(e) &&
              n.hostname === location.hostname &&
              d === o.BOARD.ID)
              ? n.title || n.textContent
              : /-full/.test(e)
                ? `/${d}/` + (n.title ? ` - ${n.title}` : '')
                : s || d),
          (i = e.match(/-(index|catalog)/)))
        ) {
          const e = Je[i[1]]({ siteID: '4chan.org', boardID: d })
          if (!e) return n.firstChild
          ;(n.dataset.only = i[1]),
            (n.href = e),
            'catalog' === i[1] && Qe.addClass(n, 'catalog')
        }
        if (
          (t['JSON Index'] &&
            l &&
            ((n.dataset.indexOptions = l),
            ['boards.4chan.org', 'boards.4channel.org'].includes(n.hostname) &&
              '' === n.pathname.split('/')[2] &&
              (n.href += (n.hash ? '/' : '#') + l)),
          /-archive/.test(e))
        ) {
          if (!(a = et.to('board', { boardID: d }))) return n.firstChild
          n.href = a
        }
        if (/-expired/.test(e)) {
          if (!Y.isArchived(d)) return n.firstChild
          n.href = `//${Y.domain(d)}/${d}/archive`
        }
        return (
          /-nt/.test(e) && ((n.target = '_blank'), (n.rel = 'noopener')),
          '@' === d && Qe.addClass(n, 'navSmall'),
          n
        )
      },
      toggleBoardList() {
        const { bar: e } = Ke,
          t = Qe('#custom-board-list', e),
          o = Qe('#full-board-list', e),
          n = !o.hidden
        return (t.hidden = !n), (o.hidden = n)
      },
      setLinkJustify: e => (
        (Ke.linkJustifyToggler.checked = e),
        e ? Qe.addClass(i, 'centered-links') : Qe.rmClass(i, 'centered-links')
      ),
      toggleLinkJustify() {
        Qe.event('CloseMenu')
        const e = 'INPUT' === this.nodeName ? this.checked : void 0
        return Ke.setLinkJustify(e), Qe.set('Centered links', e)
      },
      setBarFixed: e => (
        (Ke.barFixedToggler.checked = e),
        e
          ? (Qe.addClass(i, 'fixed'), Qe.addClass(Ke.bar, 'dialog'))
          : (Qe.rmClass(i, 'fixed'), Qe.rmClass(Ke.bar, 'dialog'))
      ),
      toggleBarFixed() {
        return (
          Qe.event('CloseMenu'),
          Ke.setBarFixed(this.checked),
          (t['Fixed Header'] = this.checked),
          Qe.set('Fixed Header', this.checked)
        )
      },
      setShortcutIcons: e => (
        (Ke.shortcutToggler.checked = e),
        e ? Qe.addClass(i, 'shortcut-icons') : Qe.rmClass(i, 'shortcut-icons')
      ),
      toggleShortcutIcons() {
        return (
          Qe.event('CloseMenu'),
          Ke.setShortcutIcons(this.checked),
          (t['Shortcut Icons'] = this.checked),
          Qe.set('Shortcut Icons', this.checked)
        )
      },
      setBarVisibility: e => (
        (Ke.headerToggler.checked = e),
        Qe.event('CloseMenu'),
        (e ? Qe.addClass : Qe.rmClass)(Ke.bar, 'autohide'),
        (e ? Qe.addClass : Qe.rmClass)(i, 'autohide')
      ),
      toggleBarVisibility() {
        const e =
          'INPUT' === this.nodeName
            ? this.checked
            : !Qe.hasClass(Ke.bar, 'autohide')
        ;(t['Header auto-hide'] = e),
          Qe.set('Header auto-hide', e),
          Ke.setBarVisibility(e)
        return new _e(
          'info',
          'The header bar will ' +
            (e ? 'automatically hide itself.' : 'remain visible.'),
          2
        )
      },
      setHideBarOnScroll(e) {
        if (((Ke.scrollHeaderToggler.checked = e), !e))
          return (
            Qe.off(window, 'scroll', Ke.hideBarOnScroll),
            Qe.rmClass(Ke.bar, 'scroll'),
            Ke.bar.classList.toggle('autohide', t['Header auto-hide'])
          )
        Qe.on(window, 'scroll', Ke.hideBarOnScroll)
      },
      toggleHideBarOnScroll() {
        const e = this.checked
        return Qe.cb.checked.call(this), Ke.setHideBarOnScroll(e)
      },
      hideBarOnScroll() {
        const e = window.pageYOffset
        return (
          e > (Ke.previousOffset || 0)
            ? Qe.addClass(Ke.bar, 'autohide', 'scroll')
            : Qe.rmClass(Ke.bar, 'autohide', 'scroll'),
          (Ke.previousOffset = e)
        )
      },
      setBarPosition(e) {
        Ke.barPositionToggler && (Ke.barPositionToggler.checked = e),
          Qe.event('CloseMenu')
        const t = e
          ? ['bottom-header', 'top-header', 'after']
          : ['top-header', 'bottom-header', 'add']
        return (
          Qe.addClass(i, t[0]),
          Qe.rmClass(i, t[1]),
          Qe[t[2]](Ke.bar, Ke.noticesRoot)
        )
      },
      toggleBarPosition() {
        return Qe.cb.checked.call(this), Ke.setBarPosition(this.checked)
      },
      setFooterVisibility: e => (
        (Ke.footerToggler.checked = e),
        i.classList.toggle('hide-bottom-board-list', e)
      ),
      toggleFooterVisibility() {
        Qe.event('CloseMenu')
        const e =
          'INPUT' === this.nodeName
            ? this.checked
            : Qe.hasClass(i, 'hide-bottom-board-list')
        Ke.setFooterVisibility(e), Qe.set('Bottom Board List', e)
        return new _e(
          'info',
          e
            ? 'The bottom navigation will now be hidden.'
            : 'The bottom navigation will remain visible.',
          2
        )
      },
      setCustomNav(e) {
        Ke.customNavToggler.checked = e
        const t = Qe('#custom-board-list', Ke.bar),
          o = Qe('#full-board-list', Ke.bar),
          n = Qe('.hide-board-list-container', o)
        return ([t.hidden, o.hidden, n.hidden] = e
          ? [!1, !0, !1]
          : [!0, !1, !0])
      },
      toggleCustomNav() {
        return Qe.cb.checked.call(this), Ke.setCustomNav(this.checked)
      },
      editCustomNav() {
        Pe.open('Advanced')
        const e = Qe.id('fourchanx-settings')
        return Qe('[name=boardnav]', e).focus()
      },
      hashScroll(e) {
        let t
        if (e) {
          if (e.state) return
          history.state || history.replaceState({}, '')
        }
        if ((t = location.hash.slice(1))) {
          let e
          if ((Te.showIfHidden(t), (e = Qe.id(t))))
            return Qe.queueTask(() => Ke.scrollTo(e))
        }
      },
      scrollTo(e, o, n) {
        let a, i
        if (e.offsetParent)
          if (o) {
            if (
              ((i = Ke.getBottomOf(e)),
              t['Fixed Header'] &&
                t['Header auto-hide on scroll'] &&
                t['Bottom header'] &&
                (({ height: a } = Ke.bar.getBoundingClientRect()),
                i <= 0 ? Ke.isHidden() || (i += a) : Ke.isHidden() && (i -= a)),
              !n || i < 0)
            )
              return window.scrollBy(0, -i)
          } else if (
            ((i = Ke.getTopOf(e)),
            t['Fixed Header'] &&
              t['Header auto-hide on scroll'] &&
              !t['Bottom header'] &&
              (({ height: a } = Ke.bar.getBoundingClientRect()),
              i >= 0 ? Ke.isHidden() || (i += a) : Ke.isHidden() && (i -= a)),
            !n || i < 0)
          )
            return window.scrollBy(0, i)
      },
      scrollToIfNeeded: (e, t) => Ke.scrollTo(e, t, !0),
      getTopOf(e) {
        let { top: o } = e.getBoundingClientRect()
        if (t['Fixed Header'] && !t['Bottom Header']) {
          const e = Ke.toggle.getBoundingClientRect()
          o -= e.top + e.height
        }
        return o
      },
      getBottomOf(e) {
        const { clientHeight: o } = i
        let n = o - e.getBoundingClientRect().bottom
        if (t['Fixed Header'] && t['Bottom Header']) {
          const e = Ke.toggle.getBoundingClientRect()
          n -= o - e.bottom + e.height
        }
        return n
      },
      isNodeVisible(e) {
        if (a.hidden || !i.contains(e)) return !1
        const { height: t } = e.getBoundingClientRect()
        return Ke.getTopOf(e) + t >= 0 && Ke.getBottomOf(e) + t >= 0
      },
      isHidden() {
        const { top: e } = Ke.bar.getBoundingClientRect()
        return t['Bottom header'] ? e === i.clientHeight : e < 0
      },
      addShortcut(e, t, o) {
        const n = Qe.el('span', {
          id: `shortcut-${e}`,
          className: 'shortcut brackets-wrap',
        })
        for (var a of (Qe.add(n, t),
        (n.dataset.index = o),
        u('[data-index]', Ke.shortcuts)))
          if (+a.dataset.index > +o) return void Qe.before(a, n)
        return Qe.add(Ke.shortcuts, n)
      },
      rmShortcut: e => Qe.rm(e.parentElement),
      menuToggle(e) {
        return Ke.menu.toggle(e, this, o)
      },
      createNotification(e) {
        const { type: t, content: o, lifetime: n } = e.detail
        return new _e(t, o, n)
      },
      areNotificationsEnabled: !1,
      enableDesktopNotifications() {
        let o
        if (!window.Notification || !t['Desktop Notifications']) return
        switch (Notification.permission) {
          case 'granted':
            return void (Ke.areNotificationsEnabled = !0)
          case 'denied':
            return
        }
        const n = Qe.el('span', {
            innerHTML: `${e.name} needs your permission to show desktop notifications. [<a href="${e.faq}#why-is-4chan-x-asking-for-permission-to-show-desktop-notifications" target="_blank">FAQ</a>]<br><button>Authorize</button> or <button>Disable</button>`,
          }),
          [a, i] = u('button', n)
        return (
          Qe.on(a, 'click', () =>
            Notification.requestPermission(function (e) {
              if (
                ((Ke.areNotificationsEnabled = 'granted' === e),
                'default' !== e)
              )
                return o.close()
            })
          ),
          Qe.on(i, 'click', function () {
            return Qe.set('Desktop Notifications', !1), o.close()
          }),
          (o = new _e('info', n))
        )
      },
    },
    Xe = Ke
  class _e {
    constructor(e, t, o, n) {
      ;(this.add = this.add.bind(this)),
        (this.close = this.close.bind(this)),
        (this.timeout = o),
        (this.onclose = n),
        (this.el = Qe.el('div', {
          innerHTML:
            '<a href="javascript:;" class="close" title="Close">✕</a><div class="message"></div>',
        })),
        (this.el.style.opacity = 0),
        this.setType(e),
        Qe.on(this.el.firstElementChild, 'click', this.close),
        'string' == typeof t && (t = Qe.tn(t)),
        Qe.add(this.el.lastElementChild, t),
        Qe.ready(this.add)
    }
    setType(e) {
      return (this.el.className = `notification ${e}`)
    }
    add() {
      if (!this.closed) {
        if (!a.hidden)
          return (
            Qe.off(a, 'visibilitychange', this.add),
            Qe.add(Xe.noticesRoot, this.el),
            this.el.clientHeight,
            (this.el.style.opacity = 1),
            this.timeout ? setTimeout(this.close, this.timeout * b) : void 0
          )
        Qe.on(a, 'visibilitychange', this.add)
      }
    }
    close() {
      return (
        (this.closed = !0),
        Qe.off(a, 'visibilitychange', this.add),
        Qe.rm(this.el),
        this.onclose?.()
      )
    }
  }
  var Ze = {
      archives: [
        {
          uid: 3,
          name: '4plebs',
          domain: 'archive.4plebs.org',
          http: !0,
          https: !0,
          software: 'foolfuuka',
          boards: [
            'adv',
            'f',
            'hr',
            'mlpol',
            'mo',
            'o',
            'pol',
            's4s',
            'sp',
            'tg',
            'trv',
            'tv',
            'x',
          ],
          files: [
            'adv',
            'f',
            'hr',
            'mlpol',
            'mo',
            'o',
            'pol',
            's4s',
            'sp',
            'tg',
            'trv',
            'tv',
            'x',
          ],
          reports: !0,
        },
        {
          uid: 10,
          name: 'warosu',
          domain: 'warosu.org',
          http: !1,
          https: !0,
          software: 'fuuka',
          boards: [
            '3',
            'biz',
            'cgl',
            'ck',
            'diy',
            'fa',
            'ic',
            'jp',
            'lit',
            'sci',
            'vr',
            'vt',
          ],
          files: [
            '3',
            'biz',
            'cgl',
            'ck',
            'diy',
            'fa',
            'ic',
            'jp',
            'lit',
            'sci',
            'vr',
            'vt',
          ],
          search: [
            'biz',
            'cgl',
            'ck',
            'diy',
            'fa',
            'ic',
            'jp',
            'lit',
            'sci',
            'vr',
            'vt',
          ],
        },
        {
          uid: 23,
          name: 'Desuarchive',
          domain: 'desuarchive.org',
          http: !0,
          https: !0,
          software: 'foolfuuka',
          boards: [
            'a',
            'aco',
            'an',
            'c',
            'cgl',
            'co',
            'd',
            'fit',
            'g',
            'his',
            'int',
            'k',
            'm',
            'mlp',
            'mu',
            'q',
            'qa',
            'r9k',
            'tg',
            'trash',
            'vr',
            'wsg',
          ],
          files: [
            'a',
            'aco',
            'an',
            'c',
            'cgl',
            'co',
            'd',
            'fit',
            'g',
            'his',
            'int',
            'k',
            'm',
            'mlp',
            'mu',
            'q',
            'qa',
            'r9k',
            'tg',
            'trash',
            'vr',
          ],
          reports: !0,
        },
        {
          uid: 24,
          name: 'fireden.net',
          domain: 'boards.fireden.net',
          http: !1,
          https: !0,
          software: 'foolfuuka',
          boards: ['cm', 'co', 'ic', 'sci', 'vip', 'y'],
          files: ['cm', 'co', 'ic', 'sci', 'vip', 'y'],
          search: ['cm', 'co', 'ic', 'sci', 'y'],
        },
        {
          uid: 25,
          name: 'arch.b4k.co',
          domain: 'arch.b4k.co',
          http: !0,
          https: !0,
          software: 'foolfuuka',
          boards: [
            'g',
            'mlp',
            'qb',
            'v',
            'vg',
            'vm',
            'vmg',
            'vp',
            'vrpg',
            'vst',
          ],
          files: ['qb', 'v', 'vg', 'vm', 'vmg', 'vp', 'vrpg', 'vst'],
          search: ['qb', 'v', 'vg', 'vm', 'vmg', 'vp', 'vrpg', 'vst'],
        },
        {
          uid: 29,
          name: 'Archived.Moe',
          domain: 'archived.moe',
          http: !0,
          https: !0,
          software: 'foolfuuka',
          boards: [
            '3',
            'a',
            'aco',
            'adv',
            'an',
            'asp',
            'b',
            'bant',
            'biz',
            'c',
            'can',
            'cgl',
            'ck',
            'cm',
            'co',
            'cock',
            'con',
            'd',
            'diy',
            'e',
            'f',
            'fa',
            'fap',
            'fit',
            'fitlit',
            'g',
            'gd',
            'gif',
            'h',
            'hc',
            'his',
            'hm',
            'hr',
            'i',
            'ic',
            'int',
            'jp',
            'k',
            'lgbt',
            'lit',
            'm',
            'mlp',
            'mlpol',
            'mo',
            'mtv',
            'mu',
            'n',
            'news',
            'o',
            'out',
            'outsoc',
            'p',
            'po',
            'pol',
            'pw',
            'q',
            'qa',
            'qb',
            'qst',
            'r',
            'r9k',
            's',
            's4s',
            'sci',
            'soc',
            'sp',
            'spa',
            't',
            'tg',
            'toy',
            'trash',
            'trv',
            'tv',
            'u',
            'v',
            'vg',
            'vint',
            'vip',
            'vm',
            'vmg',
            'vp',
            'vr',
            'vrpg',
            'vst',
            'vt',
            'w',
            'wg',
            'wsg',
            'wsr',
            'x',
            'xs',
            'y',
          ],
          files: [
            'can',
            'cock',
            'con',
            'fap',
            'fitlit',
            'gd',
            'mlpol',
            'mo',
            'mtv',
            'outsoc',
            'po',
            'q',
            'qb',
            'qst',
            'spa',
            'vint',
            'vip',
          ],
          search: [
            'aco',
            'adv',
            'an',
            'asp',
            'b',
            'bant',
            'biz',
            'c',
            'can',
            'cgl',
            'ck',
            'cm',
            'cock',
            'con',
            'd',
            'diy',
            'e',
            'f',
            'fap',
            'fitlit',
            'gd',
            'gif',
            'h',
            'hc',
            'his',
            'hm',
            'hr',
            'i',
            'ic',
            'lgbt',
            'lit',
            'mlpol',
            'mo',
            'mtv',
            'n',
            'news',
            'o',
            'out',
            'outsoc',
            'p',
            'po',
            'pw',
            'q',
            'qa',
            'qst',
            'r',
            's',
            'soc',
            'spa',
            'trv',
            'u',
            'vint',
            'vip',
            'vrpg',
            'w',
            'wg',
            'wsg',
            'wsr',
            'x',
            'y',
          ],
          reports: !0,
        },
        {
          uid: 30,
          name: 'TheBArchive.com',
          domain: 'thebarchive.com',
          http: !0,
          https: !0,
          software: 'foolfuuka',
          boards: ['b', 'bant'],
          files: ['b', 'bant'],
          reports: !0,
        },
        {
          uid: 31,
          name: 'Archive Of Sins',
          domain: 'archiveofsins.com',
          http: !0,
          https: !0,
          software: 'foolfuuka',
          boards: ['h', 'hc', 'hm', 'i', 'lgbt', 'r', 's', 'soc', 't', 'u'],
          files: ['h', 'hc', 'hm', 'i', 'lgbt', 'r', 's', 'soc', 't', 'u'],
          reports: !0,
        },
        {
          uid: 34,
          name: 'TokyoChronos',
          domain: 'www.tokyochronos.net',
          http: !1,
          https: !0,
          software: 'foolfuuka',
          boards: ['c', 'g', 'jp', 'mu', 'vp', 'vrpg', 'vt'],
          files: [],
          reports: !0,
        },
        {
          uid: 36,
          name: 'palanq.win',
          domain: 'archive.palanq.win',
          http: !1,
          https: !0,
          software: 'foolfuuka',
          boards: [
            'bant',
            'c',
            'con',
            'e',
            'i',
            'n',
            'news',
            'out',
            'p',
            'pw',
            'qst',
            'toy',
            'vip',
            'vp',
            'vt',
            'w',
            'wg',
            'wsr',
          ],
          files: [
            'bant',
            'c',
            'e',
            'i',
            'n',
            'news',
            'out',
            'p',
            'pw',
            'qst',
            'toy',
            'vip',
            'vp',
            'vt',
            'w',
            'wg',
            'wsr',
          ],
          reports: !0,
        },
        {
          uid: 37,
          name: 'Eientei',
          domain: 'eientei.xyz',
          http: !1,
          https: !0,
          software: 'Eientei',
          boards: ['3', 'i', 'sci', 'xs'],
          files: ['3', 'i', 'sci', 'xs'],
          reports: !0,
        },
      ],
      data: null,
      init() {
        if ((this.selectArchives(), t.archiveAutoUpdate)) {
          const e = Date.now()
          ;(e - 2 * w >= t.lastarchivecheck || t.lastarchivecheck > e) &&
            this.update()
        }
      },
      selectArchives() {
        const e = {
            thread: new Map(),
            threadJSON: new Map(),
            post: new Map(),
            file: new Map(),
          },
          o = m()
        for (const a of t.archives) {
          for (var n of ['boards', 'files'])
            a[n] instanceof Array || (a[n] = [])
          const { uid: t, name: i, boards: r, files: s, software: l } = a
          if (['fuuka', 'foolfuuka'].includes(l)) {
            o[JSON.stringify(t ?? i)] = a
            for (const t of r)
              e.thread.has(t) || e.thread.set(t, a),
                !e.file.has(t) && s.includes(t) && e.file.set(t, a),
                'foolfuuka' === l &&
                  (e.threadJSON.has(t) || e.threadJSON.set(t, a),
                  e.post.has(t) || e.post.set(t, a))
          }
        }
        for (const n in t.selectedArchives) {
          var a = t.selectedArchives[n]
          for (const [t, r] of Object.entries(a)) {
            var i
            if ((i = o[JSON.stringify(r)]) && Qe.hasOwn(e, t)) {
              ;('file' === t ? i.files : i.boards).includes(n) && e[t].set(n, i)
            }
          }
        }
        Ze.data = e
      },
      update(e) {
        let o
        const n = [],
          a = []
        let i = 0
        for (o of t.archiveLists.split('\n'))
          '#' !== o[0] && ((o = o.trim()), o && n.push(o))
        const r = (e, t, o) =>
            new _e('warning', `Error ${t} archive data from\n${e}\n${o}`, 20),
          s = t =>
            function () {
              if (200 !== this.status)
                return r(
                  n[t],
                  'fetching',
                  this.status
                    ? `Error ${this.statusText} (${this.status})`
                    : 'Connection Error'
                )
              let { response: o } = this
              return (
                o instanceof Array || (o = [o]),
                (a[t] = o),
                i++,
                i === n.length ? Ze.parse(a, e) : void 0
              )
            }
        if (n.length)
          for (let e = 0; e < n.length; e++)
            if (((o = n[e]), ['[', '{'].includes(o[0]))) {
              var l
              try {
                l = JSON.parse(o)
              } catch (e) {
                r(o, 'parsing', e.message)
                continue
              }
              s(e).call({ status: 200, response: l })
            } else He.ajax(o, { onloadend: s(e) })
        else Ze.parse([], e)
      },
      parse(e, o) {
        const n = [],
          a = m()
        for (var i of e)
          for (var r of i) {
            var s = JSON.stringify(r.uid ?? r.name)
            s in a ? Qe.extend(a[s], r) : ((a[s] = m.clone(r)), n.push(r))
          }
        const l = { archives: n, lastarchivecheck: Date.now() }
        return Qe.set(l), Qe.extend(t, l), Ze.selectArchives(), o?.()
      },
      to(e, t) {
        const o = (
          ['search', 'board'].includes(e) ? Ze.data.thread : Ze.data[e]
        ).get(t.boardID)
        return o ? Ze[e](o, t) : ''
      },
      protocol(e) {
        let { protocol: t } = location
        return (
          Qe.getOwn(e, t.slice(0, -1)) ||
            (t = 'https:' === t ? 'http:' : 'https:'),
          `${t}//`
        )
      },
      thread(e, { boardID: t, threadID: o, postID: n }) {
        let a = o ? `${t}/thread/${o}` : `${t}/post/${n}`
        return (
          'foolfuuka' === e.software && (a += '/'),
          o && n && (a += 'foolfuuka' === e.software ? `#${n}` : `#p${n}`),
          `${Ze.protocol(e)}${e.domain}/${a}`
        )
      },
      threadJSON: (e, { boardID: t, threadID: o }) =>
        `${Ze.protocol(e)}${e.domain}/_/api/chan/thread/?board=${t}&num=${o}`,
      post(e, { boardID: t, postID: o }) {
        const n = `${Ze.protocol(e)}${
          e.domain
        }/_/api/chan/post/?board=${t}&num=${o}`
        return Ze.securityCheck(n) ? n : ''
      },
      file(e, { boardID: t, filename: o }) {
        if (!o) return ''
        if ('f' === t)
          o = encodeURIComponent(Qe.unescape(decodeURIComponent(o)))
        else if (/[sm]\.jpg$/.test(o)) return ''
        return `${Ze.protocol(e)}${e.domain}/${t}/full_image/${o}`
      },
      board: (e, { boardID: t }) => `${Ze.protocol(e)}${e.domain}/${t}/`,
      search(e, { boardID: t, type: o, value: n }) {
        'capcode' ===
        (o = 'name' === o ? 'username' : 'MD5' === o ? 'image' : o)
          ? (n =
              Qe.getOwn({ Developer: 'dev', Verified: 'ver' }, n) ||
              n.toLowerCase())
          : 'image' === o &&
            (n = n.replace(
              /[+/=]/g,
              e => ({ '+': '-', '/': '_', '=': '' })[e]
            )),
          (n = encodeURIComponent(n))
        const a =
          'foolfuuka' === e.software
            ? `${t}/search/${o}/${n}/`
            : 'image' === o
              ? `${t}/image/${n}`
              : `${t}/?task=search2&search_${o}=${n}`
        return `${Ze.protocol(e)}${e.domain}/${a}`
      },
      report(e) {
        const o = []
        for (var n of t.archives) {
          var {
            software: a,
            https: i,
            reports: r,
            boards: s,
            name: l,
            domain: d,
          } = n
          'foolfuuka' === a &&
            i &&
            r &&
            s instanceof Array &&
            s.includes(e) &&
            o.push([l, `https://${d}/_/api/chan/offsite_report/`])
        }
        return o
      },
      securityCheck: e =>
        /^https:\/\//.test(e) ||
        'http:' === location.protocol ||
        t['Exempt Archives from Encryption'],
      navigate(e, t, o) {
        Ze.data || Ze.init()
        const n = Ze.to(e, t)
        return n &&
          (Ze.securityCheck(n) ||
            confirm(
              `Redirect to ${n}?\n\nYour connection will not be encrypted.`
            ))
          ? location.replace(n)
          : o
            ? location.replace(o)
            : void 0
      },
    },
    et = Ze
  class tt {
    toString() {
      return this.ID
    }
    constructor(e) {
      ;(this.nodes = { root: e, thumb: Qe(o.SITE.selectors.catalog.thumb, e) }),
        (this.siteID = o.SITE.ID),
        (this.boardID = this.nodes.thumb.parentNode.pathname.split(/\/+/)[1]),
        (this.board = o.boards[this.boardID] || new J(this.boardID)),
        (this.ID = this.threadID = +(e.dataset.id || e.id).match(/\d*$/)[0]),
        (this.thread =
          this.board.threads.get(this.ID) || new I(this.ID, this.board))
    }
  }
  const ot = {
    init() {
      if (t.Anonymize) return Qe.addClass(i, 'anonymize')
    },
  }
  var nt = {
      init() {
        if (['index', 'thread'].includes(o.VIEW))
          return (
            t['Image Hover'] &&
              l.Post.push({ name: 'Image Hover', cb: this.node }),
            t['Image Hover in Catalog']
              ? l.CatalogThread.push({
                  name: 'Image Hover',
                  cb: this.catalogNode,
                })
              : void 0
          )
      },
      node() {
        return this.files
          .filter(e => (e.isImage || e.isVideo) && e.thumb)
          .map(e => Qe.on(e.thumb, 'mouseover', nt.mouseover(this, e)))
      },
      catalogNode() {
        const e = this.thread.OP.files[0]
        if (e && (e.isImage || e.isVideo))
          return Qe.on(
            this.nodes.thumb,
            'mouseover',
            nt.mouseover(this.thread.OP, e)
          )
      },
      mouseover: (e, n) =>
        function (a) {
          let r, s, l
          if (!i.contains(this)) return
          const { isVideo: d } = n
          if (n.isExpanding || n.isExpanded || o.SITE.isThumbExpanded?.(n))
            return
          const c = nt.error(e, n)
          if (
            (j.cache?.dataset.fileID === `${e.fullID}.${n.index}`
              ? ((r = j.popCache()), Qe.on(r, 'error', c))
              : ((r = Qe.el(d ? 'video' : 'img')),
                (r.dataset.fileID = `${e.fullID}.${n.index}`),
                Qe.on(r, 'error', c),
                (r.src = n.url)),
            t['Restart when Opened'] && (j.rewind(r), j.rewind(this)),
            (r.id = 'ihover'),
            Qe.add(Xe.hover, r),
            d &&
              ((r.loop = !0),
              (r.controls = !1),
              $.setup(r),
              t.Autoplay &&
                (r.play(),
                'VIDEO' === this.nodeName &&
                  (this.currentTime = r.currentTime))),
            n.dimensions)
          ) {
            ;[l, s] = n.dimensions.split('x').map(e => +e)
            const e = i.clientWidth,
              t = i.clientHeight - L.hover.padding,
              o = Math.min(1, e / l, t / s)
            ;(l *= o),
              (s *= o),
              (r.style.maxWidth = `${l}px`),
              (r.style.maxHeight = `${s}px`)
          }
          return L.hover({
            root: this,
            el: r,
            latestEvent: a,
            endEvents: 'mouseout click',
            height: s,
            width: l,
            noRemove: !0,
            cb: () => (
              Qe.off(r, 'error', c),
              j.pushCache(r),
              j.pause(r),
              Qe.rm(r),
              r.removeAttribute('style')
            ),
          })
        },
      error: (e, t) =>
        function () {
          if (!j.decodeError(this, t))
            return j.error(this, e, t, 3e3, e =>
              e
                ? (this.src = e + (this.src === e ? '?' + Date.now() : ''))
                : Qe.rm(this)
            )
        },
    },
    at = {
      init() {
        if (!['index', 'thread', 'archive'].includes(o.VIEW)) return
        const e =
          t['Replace JPG'] ||
          t['Replace PNG'] ||
          t['Replace GIF'] ||
          t['Replace WEBM']
        if (!t['Image Prefetching'] && !e) return
        if (
          (l.Post.push({ name: 'Image Replace', cb: this.node }),
          Qe.on(a, 'PostsInserted', function () {
            if (at.prefetchEnabled || e) return o.posts.forEach(at.prefetchAll)
          }),
          t['Replace WEBM'] &&
            Qe.on(
              a,
              'scroll visibilitychange 4chanXInitFinished PostsInserted',
              this.playVideos
            ),
          !t['Image Prefetching'] || !['index', 'thread'].includes(o.VIEW))
        )
          return
        const n = Qe.el('a', {
          href: 'javascript:;',
          title: 'Prefetch Images',
          innerHTML: '🗲︎',
        })
        return (
          Qe.on(n, 'click', this.toggle), Xe.addShortcut('prefetch', n, 525)
        )
      },
      node() {
        if (!this.isClone)
          for (var e of this.files)
            t['Replace WEBM'] && e.isVideo && at.replaceVideo(this, e),
              at.prefetch(this, e)
      },
      replaceVideo(e, t) {
        const { thumb: o } = t,
          n = Qe.el('video', {
            preload: 'none',
            loop: !0,
            muted: !0,
            poster: o.src || o.dataset.src,
            textContent: o.alt,
            className: o.className,
          })
        for (var a of (n.setAttribute('muted', 'muted'),
        (n.dataset.md5 = o.dataset.md5),
        ['height', 'width', 'maxHeight', 'maxWidth']))
          n.style[a] = o.style[a]
        return (
          (n.src = t.url), Qe.replace(o, n), (t.thumb = n), (t.videoThumb = !0)
        )
      },
      prefetch(e, o) {
        let n, a
        const { isImage: r, isVideo: s, thumb: l, url: d } = o
        if (o.isPrefetched || (!r && !s) || e.isHidden || e.thread.isHidden)
          return
        s
          ? (a = 'WEBM')
          : ((a = d.match(/\.([^.]+)$/)?.[1].toUpperCase()),
            'JPEG' === a && (a = 'JPG'))
        const c = t[`Replace ${a}`] && !/spoiler/.test(l.src || l.dataset.src)
        if (!c && !at.prefetchEnabled) return
        if (Qe.hasClass(i, 'catalog-mode')) return
        if (![e, ...e.clones].some(e => i.contains(e.nodes.root))) return
        if (((o.isPrefetched = !0), o.videoThumb)) {
          for (n of e.clones) n.file.thumb.preload = 'auto'
          return (
            (l.preload = 'auto'),
            void (
              'gecko' === Qe.engine &&
              Qe.on(l, 'loadeddata', function () {
                return this.removeAttribute('poster')
              })
            )
          )
        }
        const h = Qe.el(r ? 'img' : 'video')
        return (
          s && (h.preload = 'auto'),
          c &&
            r &&
            Qe.on(h, 'load', function () {
              for (n of e.clones) n.file.thumb.src = d
              return (l.src = d)
            }),
          (h.src = d)
        )
      },
      prefetchAll(e) {
        for (var t of e.files) at.prefetch(e, t)
      },
      toggle() {
        ;(at.prefetchEnabled = !at.prefetchEnabled),
          this.classList.toggle('disabled', !at.prefetchEnabled),
          at.prefetchEnabled && o.posts.forEach(at.prefetchAll)
      },
      playVideos() {
        const e = Qe.id('qp')?.firstElementChild
        return o.posts.forEach(function (t) {
          for (t of [t, ...t.clones])
            for (var o of t.files)
              if (o.videoThumb) {
                var { thumb: n } = o
                Xe.isNodeVisible(n) || t.nodes.root === e ? n.play() : n.pause()
              }
        })
      },
    },
    it = {
      init() {
        if (t['WEBM Metadata'] && ['index', 'thread'].includes(o.VIEW))
          return l.Post.push({ name: 'WEBM Metadata', cb: this.node })
      },
      node() {
        for (let o = 0; o < this.files.length; o++) {
          var e,
            t = this.files[o]
          if (/webm$/i.test(t.url))
            this.isClone
              ? (e = Qe('.webm-title', t.text))
              : (((e = Qe.el('span', {
                  className: 'webm-title',
                })).dataset.index = o),
                Qe.extend(e, { innerHTML: '<a href="javascript:;"></a>' }),
                Qe.add(t.text, [Qe.tn(' '), e])),
              1 === e.children.length &&
                Qe.one(e.lastElementChild, 'mouseover focus', it.load)
        }
      },
      load() {
        Qe.rmClass(this.parentNode, 'error'),
          Qe.addClass(this.parentNode, 'loading')
        const { index: e } = this.parentNode.dataset
        return He.binary(
          We.postFromNode(this).files[+e].url,
          e => {
            if ((Qe.rmClass(this.parentNode, 'loading'), null != e)) {
              const t = it.parse(e),
                o = Qe.el('span', { textContent: t || '' })
              return (
                null == t && Qe.addClass(this.parentNode, 'not-found'),
                Qe.before(this, o),
                (this.parentNode.tabIndex = 0),
                a.activeElement === this && this.parentNode.focus(),
                (this.tabIndex = -1)
              )
            }
            return (
              Qe.addClass(this.parentNode, 'error'),
              Qe.one(this, 'click', it.load)
            )
          },
          { Range: 'bytes=0-9999' }
        )
      },
      parse(e) {
        const t = function () {
          let t = e[o++],
            n = 0
          for (; t < 128 >> n; ) n++
          for (t ^= 128 >> n; n-- && o < e.length; ) t = (t << 8) ^ e[o++]
          return t
        }
        for (var o = 0; o < e.length; ) {
          var n = t(),
            a = t()
          if (15273 === n) {
            for (var i = ''; a-- && o < e.length; )
              i += String.fromCharCode(e[o++])
            return decodeURIComponent(escape(i))
          }
          ;[139690087, 88713574].includes(n) || (o += a)
        }
        return null
      },
    }
  const rt = {
    init() {
      if (
        ['index', 'thread', 'archive'].includes(o.VIEW) &&
        t['Reveal Spoiler Thumbnails']
      )
        return l.Post.push({ name: 'Reveal Spoiler Thumbnails', cb: this.node })
    },
    node() {
      if (!this.isClone)
        for (var e of this.files)
          if (e.thumb && e.isSpoiler) {
            var { thumb: t } = e
            t.removeAttribute('style'),
              (t.style.maxHeight = t.style.maxWidth =
                this.isReply ? '125px' : '250px'),
              t.src ? (t.src = e.thumbURL) : (t.dataset.src = e.thumbURL)
          }
    },
  }
  var st = {
    init() {
      if (['index', 'thread', 'archive'].includes(o.VIEW) && t.Linkify)
        return (
          t['Comment Expansion'] && X.callbacks.push(this.node),
          l.Post.push({ name: 'Linkify', cb: this.node }),
          Fe.init()
        )
    },
    node() {
      let e
      if (this.isClone) return Fe.events(this)
      if (!st.regString.test(this.info.comment)) return
      for (e of u('a', this.nodes.comment))
        o.SITE.isLinkified?.(e) &&
          (Qe.addClass(e, 'linkify'),
          O.useFaster && O.fixLinks([e]),
          Fe.process(e, this))
      const t = st.process(this.nodes.comment)
      for (e of (O.useFaster && O.fixLinks(t), t)) Fe.process(e, this)
    },
    process(e) {
      let t
      const o = /[^\s"]+/g,
        n = /[\s"]/,
        a = Qe.X('.//br|.//text()', e)
      let i = 0
      const r = []
      for (; (e = a.snapshotItem(i++)); ) {
        var s,
          { data: l } = e
        if (l && 'A' !== e.parentElement.nodeName)
          for (; (s = o.exec(l)); ) {
            var d,
              { index: c } = s,
              h = e,
              u = s[0]
            if ((t = c + u.length) === l.length)
              for (o.lastIndex = 0; (d = a.snapshotItem(i++)); ) {
                var p
                if (
                  'BR' === d.nodeName ||
                  ('P' === d.parentElement.nodeName && !d.previousSibling)
                ) {
                  var g, f
                  if (
                    (g = u.match(/(https?:\/\/)?([a-z\d-]+\.)*[a-z\d-]+$/i)) &&
                    (f = a
                      .snapshotItem(i)
                      ?.data?.match(/^(\.[a-z\d-]+)*\//i)) &&
                    0 === (g[0] + f[0]).search(st.regString)
                  )
                    continue
                  break
                }
                if ('A' === d.parentElement.nodeName && !st.regString.test(u))
                  break
                if (((h = d), ({ data: l } = d), (p = n.exec(l)))) {
                  ;(u += l.slice(0, p.index)), (o.lastIndex = t = p.index), i--
                  break
                }
                ;({ length: t } = l), (u += l)
              }
            if (
              (st.regString.test(u) && r.push(st.makeRange(e, h, c, t)),
              !o.lastIndex || e !== h)
            )
              break
          }
      }
      for (i = r.length; i--; ) r[i] = st.makeLink(r[i])
      return r
    },
    regString: new RegExp(
      '((https?|mailto|git|magnet|ftp|irc):([a-z\\d%/?])|([-a-z\\d]+[.])+(aero|asia|biz|cat|com|coop|dance|info|int|jobs|mobi|moe|museum|name|net|org|post|pro|tel|travel|xxx|xyz|edu|gov|mil|[a-z]{2})([:/]|(?![^\\s"]))|[\\d]{1,3}\\.[\\d]{1,3}\\.[\\d]{1,3}\\.[\\d]{1,3}|[-\\w\\d.@]+@[a-z\\d.-]+\\.[a-z\\d])',
      'i'
    ),
    makeRange(e, t, o, n) {
      const a = document.createRange()
      return a.setStart(e, o), a.setEnd(t, n), a
    },
    makeLink(e) {
      let t,
        o,
        n = e.toString(),
        a = n.search(st.regString)
      if (a > 0) {
        for (
          n = n.slice(a);
          e.startOffset + a >= e.startContainer.data.length;

        )
          a--
        a && e.setStart(e.startContainer, e.startOffset + a)
      }
      for (
        a = 0;
        /[)\]}>.,]/.test((t = n.charAt(n.length - (1 + a)))) &&
        (/[.,]/.test(t) || n.match(/[()\[\]{}<>]/g).length % 2);

      )
        a++
      if (a) {
        for (n = n.slice(0, -a); e.endOffset - a < 0; ) a--
        a && e.setEnd(e.endContainer, e.endOffset - a)
      }
      ;/((mailto|magnet):|.+:\/\/)/.test(n) ||
        (n = (/@/.test(n) ? 'mailto:' : 'http://') + n),
        (o = n.match(/^(https?:\/\/[^/]*%[0-9a-f]{2})(.*)$/i)) &&
          (n =
            o[1].replace(/%([0-9a-f]{2})/gi, function (e, t) {
              return '25' === t ? e : String.fromCharCode(parseInt(t, 16))
            }) + o[2])
      const i = Qe.el('a', {
        className: 'linkify',
        rel: 'noreferrer noopener',
        target: '_blank',
        href: n,
      })
      return Qe.add(i, e.extractContents()), e.insertNode(i), i
    },
  }
  const lt = {
    init() {
      if (
        'yotsuba' !== o.SITE.software ||
        !['index', 'thread'].includes(o.VIEW) ||
        !t.Menu ||
        !t['Archive Link']
      )
        return
      const e = {
        el: Qe.el('div', { textContent: 'Archive' }),
        order: 60,
        open: ({ ID: e, thread: t, board: o }) =>
          !!et.to('thread', { postID: e, threadID: t.ID, boardID: o.ID }),
        subEntries: [],
      }
      for (var n of [
        ['Post', 'post'],
        ['Name', 'name'],
        ['Tripcode', 'tripcode'],
        ['Capcode', 'capcode'],
        ['Subject', 'subject'],
        ['Flag', 'country'],
        ['Filename', 'filename'],
        ['Image MD5', 'MD5'],
      ])
        e.subEntries.push(this.createSubEntry(n[0], n[1]))
      return Q.menu.addEntry(e)
    },
    createSubEntry(e, t) {
      const o = Qe.el('a', { textContent: e, target: '_blank' }),
        n =
          'post' === t
            ? function ({ ID: e, thread: t, board: n }) {
                return (
                  (o.href = et.to('thread', {
                    postID: e,
                    threadID: t.ID,
                    boardID: n.ID,
                  })),
                  !0
                )
              }
            : function (e) {
                const n =
                    'country' === t && e.info.flagCodeTroll
                      ? 'troll_country'
                      : t,
                  a =
                    'country' === t
                      ? e.info.flagCode || e.info.flagCodeTroll?.toLowerCase()
                      : Ge.values(t, e)[0]
                return (
                  !!a &&
                  ((o.href = et.to('search', {
                    boardID: e.board.ID,
                    type: n,
                    value: a,
                    isSearch: !0,
                  })),
                  !0)
                )
              }
      return { el: o, open: n }
    },
  }
  var dt = {
      init() {
        if (
          !['index', 'thread'].includes(o.VIEW) ||
          !t.Menu ||
          !t['Copy Text Link']
        )
          return
        const e = Qe.el('a', {
          className: 'copy-text-link',
          href: 'javascript:;',
          textContent: 'Copy Text',
        })
        return (
          Qe.on(e, 'click', dt.copy),
          Q.menu.addEntry({
            el: e,
            order: 12,
            open: e => ((dt.text = (e.origin || e).commentOrig()), !0),
          })
        )
      },
      copy() {
        const e = Qe.el('textarea', {
          className: 'copy-text-element',
          value: dt.text,
        })
        Qe.add(a.body, e), e.select()
        try {
          a.execCommand('copy')
        } catch (e) {}
        return Qe.rm(e)
      },
    },
    ct = {
      auto: [m(), m()],
      init() {
        if (
          !['index', 'thread'].includes(o.VIEW) ||
          !t.Menu ||
          !t['Delete Link']
        )
          return
        const e = Qe.el('div', {
            className: 'delete-link',
            textContent: 'Delete',
          }),
          n = Qe.el('a', { className: 'delete-post', href: 'javascript:;' }),
          a = Qe.el('a', { className: 'delete-file', href: 'javascript:;' })
        this.nodes = { menu: e.firstChild, links: [n, a] }
        const i = {
            el: n,
            open: () => (
              (n.textContent = ct.linkText(!1)),
              Qe.on(n, 'click', ct.toggle),
              !0
            ),
          },
          r = {
            el: a,
            open: ({ file: e }) =>
              !(!e || e.isDead) &&
              ((a.textContent = ct.linkText(!0)),
              Qe.on(a, 'click', ct.toggle),
              !0),
          }
        return Q.menu.addEntry({
          el: e,
          order: 40,
          open: e =>
            !e.isDead &&
            ((ct.post = e),
            (ct.nodes.menu.textContent = ct.menuText()),
            ct.cooldown.start(e),
            !0),
          subEntries: [i, r],
        })
      },
      menuText() {
        let e
        return (e = ct.cooldown.seconds[ct.post.fullID])
          ? `Delete (${e})`
          : 'Delete'
      },
      linkText(e) {
        let t = e ? 'File' : 'Post'
        return (
          ct.auto[+e][ct.post.fullID] && (t = `Deleting ${t.toLowerCase()}...`),
          t
        )
      },
      toggle() {
        const { post: e } = ct,
          t = Qe.hasClass(this, 'delete-file'),
          o = ct.auto[+t]
        if (
          (o[e.fullID] ? delete o[e.fullID] : (o[e.fullID] = !0),
          (this.textContent = ct.linkText(t)),
          !ct.cooldown.seconds[e.fullID])
        )
          return ct.delete(e, t)
      },
      delete(e, t) {
        const n = ct.nodes.links[+t]
        delete ct.auto[+t][e.fullID],
          e.fullID === ct.post.fullID && Qe.off(n, 'click', ct.toggle)
        const a = {
          mode: 'usrdel',
          onlyimgdel: t,
          pwd: je.persona.getPassword(),
        }
        return (
          (a[+e.ID] = 'delete'),
          Qe.ajax(
            Qe.id('delform').action.replace(`/${o.BOARD}/`, `/${e.board}/`),
            {
              responseType: 'document',
              withCredentials: !0,
              onloadend() {
                return ct.load(n, e, t, this.response)
              },
              form: Qe.formData(a),
            }
          )
        )
      },
      load(e, o, n, a) {
        let i
        if (!a)
          return (
            new _e('warning', 'Connection error, please retry.', 20),
            void (o.fullID === ct.post.fullID && Qe.on(e, 'click', ct.toggle))
          )
        if (((e.textContent = ct.linkText(n)), '4chan - Banned' === a.title)) {
          const e = Qe.el('span', {
            innerHTML:
              'You can&#039;t delete posts because you are <a href="//www.4chan.org/banned" target="_blank">banned</a>.',
          })
          return new _e('warning', e, 20)
        }
        if ((i = a.getElementById('errmsg'))) {
          if (
            (new _e('warning', i.textContent, 20),
            o.fullID === ct.post.fullID && Qe.on(e, 'click', ct.toggle),
            je.cooldown.data && t.Cooldown && /\bwait\b/i.test(i.textContent))
          )
            return (
              ct.cooldown.start(o, 5),
              (ct.auto[+n][o.fullID] = !0),
              (ct.nodes.links[+n].textContent = ct.linkText(n))
            )
        } else if (
          (n || je.cooldown.delete(o),
          'Updating index...' === a.title && (o.origin || o).kill(n),
          o.fullID === ct.post.fullID)
        )
          return (e.textContent = 'Deleted')
      },
      cooldown: {
        seconds: m(),
        start(e, t) {
          if (null == ct.cooldown.seconds[e.fullID])
            return (
              null == t && (t = je.cooldown.secondsDeletion(e)),
              t > 0
                ? ((ct.cooldown.seconds[e.fullID] = t), ct.cooldown.count(e))
                : void 0
            )
        },
        count(e) {
          if (
            (e.fullID === ct.post.fullID &&
              (ct.nodes.menu.textContent = ct.menuText()),
            ct.cooldown.seconds[e.fullID] > 0 && t.Cooldown)
          )
            ct.cooldown.seconds[e.fullID]--,
              setTimeout(ct.cooldown.count, 1e3, e)
          else
            for (var o of (delete ct.cooldown.seconds[e.fullID], [!1, !0]))
              ct.auto[+o][e.fullID] && ct.delete(e, o)
        },
      },
    }
  const ht = {
    init() {
      if (
        !['index', 'thread'].includes(o.VIEW) ||
        !t.Menu ||
        !t['Download Link']
      )
        return
      const e = Qe.el('a', {
        className: 'download-link',
        textContent: 'Download file',
      })
      return (
        Qe.on(e, 'click', j.download),
        Q.menu.addEntry({
          el: e,
          order: 100,
          open: ({ file: t }) =>
            !!t && ((e.href = t.url), (e.download = t.name), !0),
        })
      )
    },
  }
  var ut = {
      init() {
        if (
          !['index', 'thread'].includes(o.VIEW) ||
          !t.Menu ||
          !t['Report Link']
        )
          return
        const e = Qe.el('a', {
          className: 'report-link',
          href: 'javascript:;',
          textContent: 'Report',
        })
        return (
          Qe.on(e, 'click', ut.report),
          Q.menu.addEntry({
            el: e,
            order: 10,
            open: e => (
              (ut.url = `//sys.${location.hostname.split('.')[1]}.org/${
                e.board
              }/imgboard.php?mode=report&no=${e}`),
              a.cookie.indexOf('pass_enabled=1') >= 0
                ? (ut.dims = 'width=350,height=275')
                : (ut.dims = 'width=400,height=550'),
              !0
            ),
          })
        )
      },
      report() {
        const { url: e, dims: t } = ut,
          o = Date.now(),
          n = `toolbar=0,scrollbars=1,location=0,status=1,menubar=0,resizable=1,${t}`
        return window.open(e, o, n)
      },
    },
    pt = {
      init() {
        if (t['Disable Autoplaying Sounds']) {
          for (var e of (Qe.addClass(i, 'anti-autoplay'),
          u('audio[autoplay]', i)))
            this.stop(e)
          return (
            window.addEventListener('loadstart', e => this.stop(e.target), !0),
            l.Post.push({ name: 'Disable Autoplaying Sounds', cb: this.node }),
            Qe.ready(() => this.process(d.body))
          )
        }
      },
      stop(e) {
        if (e.autoplay && (e.pause(), (e.autoplay = !1), !e.controls))
          return (e.controls = !0), Qe.addClass(e, 'controls-added')
      },
      node() {
        return pt.process(this.nodes.comment)
      },
      process(e) {
        for (var t of u('iframe[src*="youtube"][src*="autoplay=1"]', e))
          pt.processVideo(t, 'src')
        for (var o of u('object[data*="youtube"][data*="autoplay=1"]', e))
          pt.processVideo(o, 'data')
      },
      processVideo: (e, t) => (
        (e[t] = e[t].replace(/\?autoplay=1&?/, '?').replace('&autoplay=1', '')),
        'none' === window.getComputedStyle(e).display &&
          (e.style.display = 'block'),
        Qe.addClass(e, 'autoplay-removed')
      ),
    },
    gt = {
      init() {
        if (
          (t['Custom Board Titles'] &&
            (this.db = new y('customTitles', null, !0)),
          Qe.asap(
            () => a.body,
            () => Qe.asap(() => Qe('hr'), gt.ready)
          ),
          'f' !== o.BOARD.ID)
        )
          return jt.ready(() => Qe.queueTask(gt.load))
      },
      ready() {
        const e = Qe('.boardBanner'),
          { children: n } = e
        if (
          ('thread' === o.VIEW &&
            t['Remove Thread Excerpt'] &&
            gt.setTitle(n[1].textContent),
          (n[0].title = 'Click to change'),
          Qe.on(n[0], 'click', gt.cb.toggle),
          t['Custom Board Titles'] && (gt.custom(n[1]), n[2]))
        )
          return gt.custom(n[2])
      },
      load() {
        const e = Qe.id('bannerCnt')
        if (!e.firstChild) {
          const t = Qe.el('img', {
            alt: '4chan',
            src: '//s.4cdn.org/image/title/' + e.dataset.src,
          })
          return Qe.add(e, t)
        }
      },
      setTitle: e =>
        null != ee.title ? ((ee.title = e), ee.update()) : (a.title = e),
      cb: {
        toggle() {
          gt.choices?.length || (gt.choices = t.knownBanners.split(',').slice())
          const e = Math.floor(gt.choices.length * Math.random()),
            o = gt.choices.splice(e, 1)
          return (Qe('img', this.parentNode).src =
            `//s.4cdn.org/image/title/${o}`)
        },
        click(e) {
          if (e.ctrlKey || e.metaKey) {
            for (var t of (null == gt.original[this.className] &&
              (gt.original[this.className] = this.cloneNode(!0)),
            (this.contentEditable = !0),
            u('br', this)))
              Qe.replace(t, Qe.tn('\n'))
            return this.focus()
          }
        },
        keydown(e) {
          if ((e.stopPropagation(), !e.shiftKey && 13 === e.keyCode))
            return this.blur()
        },
        blur() {
          for (var e of u('br', this)) Qe.replace(e, Qe.tn('\n'))
          return (this.textContent = this.textContent.replace(/\n*$/, ''))
            ? ((this.contentEditable = !1),
              gt.db.set({
                boardID: o.BOARD.ID,
                threadID: this.className,
                val: {
                  title: this.textContent,
                  orig: gt.original[this.className].textContent,
                },
              }))
            : (Qe.rmAll(this),
              Qe.add(this, [
                ...gt.original[this.className].cloneNode(!0).childNodes,
              ]),
              gt.db.delete({ boardID: o.BOARD.ID, threadID: this.className }))
        },
      },
      original: m(),
      custom(e) {
        let n
        const { className: a } = e
        for (var i of ((e.title = `Ctrl/⌘+click to edit board ${a
          .slice(5)
          .toLowerCase()}`),
        (e.spellcheck = !1),
        ['click', 'keydown', 'blur']))
          Qe.on(e, i, gt.cb[i])
        if ((n = gt.db.get({ boardID: o.BOARD.ID, threadID: a })))
          return t['Persistent Custom Board Titles'] || n.orig === e.textContent
            ? ((gt.original[a] = e.cloneNode(!0)), (e.textContent = n.title))
            : gt.db.delete({ boardID: o.BOARD.ID, threadID: a })
      },
    },
    ft = {
      init() {
        if ('f' === o.BOARD.ID && t['Enable Native Flash Embedding'])
          return Qe.ready(ft.initReady)
      },
      initReady: () =>
        Qe.hasStorage
          ? Qe.global(function () {
              if (JSON.parse(localStorage['4chan-settings'] || '{}').disableAll)
                return window.SWFEmbed.init()
            })
          : ('thread' === o.VIEW &&
              Qe.global(
                () => (window.Main.tid = location.pathname.split(/\/+/)[3])
              ),
            Qe.global(() => window.SWFEmbed.init())),
    },
    mt = {
      init() {
        if (
          'yotsuba' === o.SITE.software &&
          ['index', 'thread', 'archive'].includes(o.VIEW)
        )
          return Y.ready(this.initBoard), jt.ready(this.initReady)
      },
      initBoard() {
        if (
          (o.BOARD.config.code_tags &&
            (Qe.on(window, 'prettyprint:cb', function (e) {
              let t, n
              if (
                (t = o.posts.get(e.detail.ID)) &&
                (n = u('.prettyprint', t.nodes.comment)[+e.detail.i])
              )
                return Qe.hasClass(n, 'prettyprinted')
                  ? void 0
                  : ((n.innerHTML = e.detail.html),
                    Qe.addClass(n, 'prettyprinted'))
            }),
            Qe.global(() =>
              window.addEventListener(
                'prettyprint',
                e =>
                  window.dispatchEvent(
                    new CustomEvent('prettyprint:cb', {
                      detail: {
                        ID: e.detail.ID,
                        i: e.detail.i,
                        html: window.prettyPrintOne(e.detail.html),
                      },
                    })
                  ),
                !1
              )
            ),
            l.Post.push({ name: 'Parse [code] tags', cb: mt.code }),
            o.posts.forEach(function (e) {
              if (e.callbacksExecuted)
                return l.Post.execute(e, ['Parse [code] tags'], !0)
            }),
            X.callbacks.push(mt.code)),
          o.BOARD.config.math_tags)
        )
          return (
            Qe.global(() =>
              window.addEventListener(
                'mathjax',
                function (e) {
                  return window.MathJax
                    ? window.MathJax.Hub.Queue([
                        'Typeset',
                        window.MathJax.Hub,
                        e.target,
                      ])
                    : (document.querySelector(
                        'script[src^="//cdn.mathjax.org/"]'
                      ) ||
                        (window.loadMathJax(),
                        (window.loadMathJax = function () {})),
                      e.target.classList.contains('postMessage')
                        ? void 0
                        : document
                            .querySelector('script[src^="//cdn.mathjax.org/"]')
                            .addEventListener(
                              'load',
                              () =>
                                window.MathJax.Hub.Queue([
                                  'Typeset',
                                  window.MathJax.Hub,
                                  e.target,
                                ]),
                              !1
                            ))
                },
                !1
              )
            ),
            l.Post.push({ name: 'Parse [math] tags', cb: mt.math }),
            o.posts.forEach(function (e) {
              if (e.callbacksExecuted)
                return l.Post.execute(e, ['Parse [math] tags'], !0)
            }),
            X.callbacks.push(mt.math)
          )
      },
      initReady: () =>
        Qe.global(function () {
          for (var e of ((window.clickable_ids = !1),
          document.querySelectorAll('.posteruid, .capcode')))
            e.removeEventListener('click', window.idClick, !1)
        }),
      code() {
        if (!this.isClone)
          return Qe.ready(() => {
            const e = u('.prettyprint', this.nodes.comment)
            for (let o = 0; o < e.length; o++) {
              var t = e[o]
              Qe.hasClass(t, 'prettyprinted') ||
                Qe.event(
                  'prettyprint',
                  { ID: this.fullID, i: o, html: t.innerHTML },
                  window
                )
            }
          })
      },
      math() {
        let e
        if (/\[(math|eqn)\]/.test(this.nodes.comment.textContent)) {
          if ((e = u('wbr', this.nodes.comment)).length) {
            for (var t of e) Qe.rm(t)
            this.nodes.comment.normalize()
          }
          var o = () => {
            if (i.contains(this.nodes.comment))
              return (
                Qe.off(a, 'PostsInserted', o),
                Qe.event('mathjax', null, this.nodes.comment)
              )
          }
          return Qe.on(a, 'PostsInserted', o), o()
        }
      },
    },
    bt = {
      init() {
        if (['index', 'thread'].includes(o.VIEW) && t['Color User IDs'])
          return (
            (this.ids = m()),
            (this.ids.Heaven = [0, 0, 0, '#fff']),
            l.Post.push({ name: 'Color User IDs', cb: this.node })
          )
      },
      node() {
        let e, t
        if (
          this.isClone ||
          !(t = this.info.uniqueID) ||
          !(e = this.nodes.uniqueID)
        )
          return
        const o = bt.ids[t] || bt.compute(t),
          { style: n } = e
        return (
          (n.color = o[3]),
          (n.backgroundColor = `rgb(${o[0]},${o[1]},${o[2]})`),
          Qe.addClass(e, 'painted')
        )
      },
      compute(e) {
        const t = o.SITE.uidColor ? o.SITE.uidColor(e) : parseInt(e, 16),
          n = [(t >> 16) & 255, (t >> 8) & 255, 255 & t]
        return n.push(Qe.luma(n) > 125 ? '#000' : '#fff'), (this.ids[e] = n)
      },
    },
    At = {
      init() {
        if (['index', 'thread'].includes(o.VIEW))
          return l.Post.push({ name: 'Highlight by User ID', cb: this.node })
      },
      uniqueID: null,
      node() {
        if (
          (this.nodes.uniqueIDRoot &&
            Qe.on(this.nodes.uniqueIDRoot, 'click', At.click(this)),
          this.nodes.capcode &&
            Qe.on(this.nodes.capcode, 'click', At.click(this)),
          !this.isClone)
        )
          return At.set(this)
      },
      set(e) {
        const t = (e.info.uniqueID || e.info.capcode) === At.uniqueID
        return Qe[t ? 'addClass' : 'rmClass'](e.nodes.post, 'highlight')
      },
      click: e =>
        function () {
          const t = e.info.uniqueID || e.info.capcode
          return (
            (At.uniqueID = At.uniqueID === t ? null : t),
            o.posts.forEach(At.set)
          )
        },
    },
    vt = {
      init() {
        if ('thread' === o.VIEW && t['Count Posts by ID'])
          return (
            l.Thread.push({
              name: 'Count Posts by ID',
              cb() {
                return (vt.thread = this)
              },
            }),
            l.Post.push({ name: 'Count Posts by ID', cb: this.node })
          )
      },
      node() {
        if (this.nodes.uniqueID && this.thread === vt.thread)
          return Qe.on(this.nodes.uniqueID, 'mouseover', vt.count)
      },
      count() {
        const { uniqueID: e } = We.postFromNode(this).info
        let t = 0
        return (
          vt.thread.posts.forEach(function (o) {
            if (o.info.uniqueID === e) return t++
          }),
          (this.title = `${t} post${1 === t ? '' : 's'} by this ID`)
        )
      },
    },
    wt = {
      init() {
        if (
          'yotsuba' === o.SITE.software &&
          ['index', 'thread'].includes(o.VIEW)
        )
          return l.Post.push({ name: 'Mod Contact Links', cb: this.node })
      },
      node() {
        let e
        if (this.isClone || !Qe.hasOwn(wt.specific, this.info.capcode)) return
        const t = Qe.el('span', { className: 'contact-links brackets-wrap' })
        if (
          (Qe.extend(t, wt.template(this.info.capcode)),
          Qe.after(this.nodes.capcode, t),
          (e = this.info.comment.match(
            /This thread was moved to >>>\/(\w+)\//
          )) && Qe.hasOwn(wt.moveNote, e[1]))
        ) {
          const t = Qe.el('div', { className: 'move-note' })
          return Qe.extend(t, wt.moveNote[e[1]]), Qe.add(this.nodes.post, t)
        }
      },
      template: e => ({
        innerHTML:
          '<a href="https://www.4chan.org/feedback" target="_blank">feedback</a>' +
          wt.specific[e]().innerHTML,
      }),
      specific: {
        Mod: () => ({
          innerHTML:
            ' <a href="https://www.4chan-x.net/4chan-irc.html" target="_blank">IRC</a>',
        }),
        Manager: () => wt.specific.Mod(),
        Developer: () => ({
          innerHTML:
            ' <a href="https://github.com/4chan" target="_blank">github</a>',
        }),
        Admin: () => ({
          innerHTML:
            ' <a href="https://twitter.com/hiroyuki_ni" target="_blank">twitter</a>',
        }),
      },
      moveNote: {
        qa: {
          innerHTML:
            'Moving a thread to /qa/ does not imply mods will read it. If you wish to contact mods, use <a href="https://www.4chan.org/feedback" target="_blank">feedback</a><span class="invisible"> (https://www.4chan.org/feedback)</span> or <a href="https://www.4chan-x.net/4chan-irc.html" target="_blank">IRC</a><span class="invisible"> (https://www.4chan-x.net/4chan-irc.html)</span>.',
        },
      },
    }
  const xt = {
    init() {
      if (!t['Normalize URL']) return
      let e = location.pathname.split(/\/+/)
      if ('yotsuba' === o.SITE.software)
        switch (o.VIEW) {
          case 'thread':
            ;(e[2] = 'thread'), (e = e.slice(0, 4))
            break
          case 'index':
            e = e.slice(0, 3)
        }
      return (
        (e = e.join('/')),
        location.pathname !== e
          ? history.replaceState(
              history.state,
              '',
              `${location.protocol}//${location.host}${e}${location.hash}`
            )
          : void 0
      )
    },
  }
  var yt = {
    init() {
      if (
        t['Unique ID and Capcode Navigation'] &&
        ['index', 'thread'].includes(o.VIEW)
      )
        return (
          (this.buttons = this.makeButtons()),
          l.Post.push({ name: 'Post Jumper', cb: this.node })
        )
    },
    node() {
      if (this.isClone)
        for (var e of u('.postJumper', this.nodes.info)) yt.addListeners(e)
      else if (
        (this.nodes.uniqueIDRoot && yt.addButtons(this, 'uniqueID'),
        this.nodes.capcode)
      )
        return yt.addButtons(this, 'capcode')
    },
    addButtons(e, t) {
      const o = e.info[t],
        n = yt.buttons.cloneNode(!0)
      return (
        Qe.extend(n.dataset, { type: t, value: o }),
        Qe.after(e.nodes[t + ('capcode' === t ? '' : 'Root')], n),
        yt.addListeners(n)
      )
    },
    addListeners: e => (
      Qe.on(e.firstChild, 'click', yt.buttonClick),
      Qe.on(e.lastChild, 'click', yt.buttonClick)
    ),
    buttonClick() {
      let e
      const t = Qe.hasClass(this, 'prev') ? -1 : 1
      if ((e = yt.find(this.parentNode, t)))
        return yt.scroll(this.parentNode, e)
    },
    find(e, t) {
      const { type: o, value: n } = e.dataset,
        a = `span[contains(@class,"postJumper") and @data-value="${n}" and @data-type="${o}"]`,
        i = t < 0 ? 'preceding' : 'following'
      let r = e
      for (; (r = Qe.x(`${i}::${a}`, r)); )
        if (r.getBoundingClientRect().height) return r
      if (
        (r = Qe.x(`(//${a})[${t < 0 ? 'last()' : '1'}]`)) &&
        r.getBoundingClientRect().height
      )
        return r
      for (; (r = Qe.x(`${i}::${a}`, r)) && r !== e; )
        if (r.getBoundingClientRect().height) return r
      return null
    },
    makeButtons() {
      const e = Qe.el('span', { className: 'postJumper' })
      return (
        Qe.extend(e, {
          innerHTML:
            '<a href="javascript:;" class="' +
            n('prev') +
            '">' +
            n('⏫') +
            '</a><a href="javascript:;" class="' +
            n('next') +
            '">' +
            n('⏬') +
            '</a>',
        }),
        e
      )
    },
    scroll(e, t) {
      const o = e.getBoundingClientRect().top,
        n = t.getBoundingClientRect().top
      return window.scrollBy(0, n - o)
    },
  }
  const kt = {
    init() {
      let e
      if ('yotsuba' === o.SITE.software && 'qa' === o.BOARD.ID) {
        const t = {
          innerHTML:
            'Stay in touch with your <a href="https://www.4chan-x.net/qa_friends.html" target="_blank" rel="noopener">/qa/ friends</a>!',
        }
        ;(e = Qe.el('div', { className: 'fcx-announcement' }, t)),
          Qe.onExists(i, '.boardBanner', t => Qe.after(t, e))
      }
      if ('samachan.org' in t.siteProperties && !t.PSAseen.includes('samachan'))
        return (
          (e = Qe.el('span', {
            innerHTML:
              '<a href="https://sushigirl.us/yakuza/res/776.html" target="_blank" rel="noopener">Looking for a new home?<br>Some former Samachan users are regrouping on SushiChan.</a><br>(a message from 4chan X)',
          })),
          jt.ready(function () {
            return (
              new _e('info', e),
              t.PSAseen.push('samachan'),
              Qe.set('PSAseen', t.PSAseen)
            )
          })
        )
    },
  }
  var It = {
      init() {
        if (t['Announcement Hiding'] && o.SITE.selectors.psa)
          return (
            Qe.addClass(i, 'hide-announcement'),
            Qe.onExists(i, o.SITE.selectors.psa, this.setup),
            Qe.ready(function () {
              if (!Qe(o.SITE.selectors.psa))
                return Qe.rmClass(i, 'hide-announcement')
            })
          )
      },
      setup(e) {
        let n, a
        ;(It.psa = e),
          (It.text = e.dataset.utc ?? e.innerHTML),
          o.SITE.selectors.psaTop &&
            (a = Qe(o.SITE.selectors.psaTop)?.previousElementSibling) &&
            'HR' === a.nodeName &&
            (It.hr = a),
          (It.content = Qe.el('div'))
        const r = {
          el: Qe.el('a', {
            textContent: 'Show announcement',
            className: 'show-announcement',
            href: 'javascript:;',
          }),
          order: 50,
          open: () => e.hidden,
        }
        return (
          Xe.menu.addEntry(r),
          Qe.on(r.el, 'click', It.toggle),
          (It.btn = n =
            Qe.el('a', {
              title: 'Mark announcement as read and hide.',
              className: 'hide-announcement-button',
              href: 'javascript:;',
              textContent: '➖︎',
            })),
          Qe.on(n, 'click', It.toggle),
          'HR' === e.firstChild?.tagName
            ? Qe.after(e.firstChild, n)
            : Qe.prepend(e, n),
          It.sync(t.hiddenPSAList),
          Qe.rmClass(i, 'hide-announcement'),
          Qe.sync('hiddenPSAList', It.sync)
        )
      },
      toggle() {
        const e = Qe.hasClass(this, 'hide-announcement-button'),
          n = function (t) {
            return e ? (t[o.SITE.ID] = It.text) : delete t[o.SITE.ID]
          }
        return (
          n(t.hiddenPSAList),
          It.sync(t.hiddenPSAList),
          Qe.get(
            'hiddenPSAList',
            t.hiddenPSAList,
            function ({ hiddenPSAList: e }) {
              return n(e), Qe.set('hiddenPSAList', e)
            }
          )
        )
      },
      sync(e) {
        const { psa: t, content: n } = It
        ;(t.hidden = e[o.SITE.ID] === It.text),
          t.hidden
            ? Qe.add(n, [...t.childNodes])
            : Qe.add(t, [...n.childNodes]),
          It.hr && (It.hr.hidden = t.hidden)
      },
    },
    Ct = {
      init() {
        if (
          (t['Reveal Spoilers'] && Qe.addClass(i, 'reveal-spoilers'),
          t['Remove Spoilers'])
        )
          return (
            l.Post.push({ name: 'Reveal Spoilers', cb: this.node }),
            'archive' === o.VIEW
              ? Qe.ready(() => Ct.unspoiler(Qe.id('arc-list')))
              : void 0
          )
      },
      node() {
        return Ct.unspoiler(this.nodes.comment)
      },
      unspoiler(e) {
        const t = u(o.SITE.selectors.spoiler, e)
        for (var n of t) {
          var a = Qe.el('span', { className: 'removed-spoiler' })
          Qe.replace(n, a), Qe.add(a, [...n.childNodes])
        }
      },
    },
    Dt = {
      init() {
        if ('index' === o.VIEW && t['Open Threads in New Tab'])
          return (
            l.Post.push({ name: 'Thread Links', cb: this.node }),
            l.CatalogThread.push({ name: 'Thread Links', cb: this.catalogNode })
          )
      },
      node() {
        if (!this.isReply && !this.isClone) return Dt.process(this.nodes.reply)
      },
      catalogNode() {
        return Dt.process(this.nodes.thumb.parentNode)
      },
      process: e => (e.target = '_blank'),
    }
  const Et = {
    init() {
      if ('tinyboard' === o.SITE.software)
        return 'thread' === o.VIEW
          ? jt.ready(() =>
              Qe.global(
                function () {
                  let e,
                    { boardID: t, threadID: o } = document.currentScript.dataset
                  o = +o
                  const n = document.querySelector('form[name="post"]')
                  window.$(document).ajaxComplete(function (e, i, r) {
                    let s
                    if (r.url !== n.action) return
                    if (!(s = +i.responseJSON?.id)) return
                    const l = { boardID: t, threadID: o, postID: s }
                    try {
                      const { redirect: e, noko: t } = i.responseJSON
                      !e || null == a || a || t || (l.redirect = e)
                    } catch (e) {}
                    return (
                      (e = new CustomEvent('QRPostSuccessful', {
                        bubbles: !0,
                        detail: l,
                      })),
                      document.dispatchEvent(e)
                    )
                  })
                  var a = window.tb_settings?.ajax?.always_noko_replies
                  return ((
                    (e = window.tb_settings || (window.tb_settings = {}))
                      .ajax || (e.ajax = {})
                  ).always_noko_replies = !0)
                },
                { boardID: o.BOARD.ID, threadID: o.THREADID }
              )
            )
          : void 0
    },
  }
  var St = {
      init() {
        if (
          'yotsuba' === o.SITE.software &&
          'thread' === o.VIEW &&
          t['Mark New IPs']
        )
          return l.Thread.push({ name: 'Mark New IPs', cb: this.node })
      },
      node() {
        return (
          (St.ipCount = this.ipCount),
          (St.postCount = this.posts.keys.length),
          Qe.on(a, 'ThreadUpdate', St.onUpdate)
        )
      },
      onUpdate(e) {
        let t
        const {
          ipCount: n,
          postCount: a,
          newPosts: i,
          deletedPosts: r,
        } = e.detail
        if (null != n) {
          switch (n - St.ipCount) {
            case a - St.postCount + r.length:
              var s = St.ipCount
              for (t of i) St.markNew(o.posts.get(t), ++s)
              break
            case -r.length:
              for (t of i) St.markOld(o.posts.get(t))
          }
          return (St.ipCount = n), (St.postCount = a)
        }
      },
      markNew(e, t) {
        const o =
            Math.floor(t / 10) % 10 == 1
              ? 'th'
              : ['st', 'nd', 'rd'][(t % 10) - 1] || 'th',
          n = Qe.el('span', {
            className: 'ip-counter',
            textContent: `(${t})`,
          })
        return (
          (e.nodes.nameBlock.title = `This is the ${t}${o} IP in the thread.`),
          Qe.add(e.nodes.nameBlock, [Qe.tn(' '), n]),
          Qe.addClass(e.nodes.root, 'new-ip')
        )
      },
      markOld: e => (
        (e.nodes.nameBlock.title = 'Not the first post from this IP.'),
        Qe.addClass(e.nodes.root, 'old-ip')
      ),
    },
    Tt = {
      postCount: 0,
      fileCount: 0,
      postIndex: 0,
      init() {
        let e
        if ('thread' !== o.VIEW || !t['Thread Stats']) return
        t['Page Count in Stats'] &&
          (this[o.SITE.isPrunedByAge?.(o.BOARD) ? 'showPurgePos' : 'showPage'] =
            !0)
        const r = {
          innerHTML:
            '<span id="post-count">?</span> / <span id="file-count">?</span>' +
            (t['IP Count in Stats'] && o.SITE.hasIPCount
              ? ' / <span id="ip-count">?</span>'
              : '') +
            (t['Page Count in Stats']
              ? ' / <span id="page-count">?</span>'
              : ''),
        }
        let s = 'Posts / Files'
        return (
          t['IP Count in Stats'] && o.SITE.hasIPCount && (s += ' / IPs'),
          t['Page Count in Stats'] &&
            (s += this.showPurgePos ? ' / Purge Position' : ' / Page'),
          t['Updater and Stats in Header']
            ? ((this.dialog = e =
                Qe.el('span', { id: 'thread-stats', title: s })),
              Qe.extend(e, r),
              Xe.addShortcut('stats', e, 200))
            : ((this.dialog = e =
                L.dialog('thread-stats', {
                  innerHTML:
                    '<div class="move" title="' +
                    n(s) +
                    '">' +
                    r.innerHTML +
                    '</div>',
                })),
              Qe.addClass(i, 'float'),
              Qe.ready(() => Qe.add(a.body, e))),
          (this.postCountEl = Qe('#post-count', e)),
          (this.fileCountEl = Qe('#file-count', e)),
          (this.ipCountEl = Qe('#ip-count', e)),
          (this.pageCountEl = Qe('#page-count', e)),
          this.pageCountEl && Qe.on(this.pageCountEl, 'click', Tt.fetchPage),
          l.Thread.push({ name: 'Thread Stats', cb: this.node })
        )
      },
      node() {
        return (
          (Tt.thread = this),
          Tt.count(),
          Tt.update(),
          Tt.fetchPage(),
          Qe.on(a, 'PostsInserted', () => Qe.queueTask(Tt.onPostsInserted)),
          Qe.on(a, 'ThreadUpdate', Tt.onUpdate)
        )
      },
      count() {
        const { posts: e } = Tt.thread,
          t = e.keys.length
        for (let n = Tt.postIndex, a = t; n < a; n++) {
          var o = e.get(e.keys[n])
          o.isFetchedQuote || (Tt.postCount++, (Tt.fileCount += o.files.length))
        }
        return (Tt.postIndex = t)
      },
      onUpdate(e) {
        if (e.detail[404]) return
        const { postCount: t, fileCount: o } = e.detail
        return (
          Qe.extend(Tt, { postCount: t, fileCount: o }),
          (Tt.postIndex = Tt.thread.posts.keys.length),
          Tt.update(),
          Tt.showPage && '1' !== Tt.pageCountEl.textContent
            ? Tt.fetchPage()
            : void 0
        )
      },
      onPostsInserted() {
        if (!(Tt.thread.posts.keys.length <= Tt.postIndex))
          return (
            Tt.count(),
            Tt.update(),
            Tt.showPage && '1' !== Tt.pageCountEl.textContent
              ? Tt.fetchPage()
              : void 0
          )
      },
      update() {
        const { thread: e, postCountEl: t, fileCountEl: o, ipCountEl: n } = Tt
        return (
          (t.textContent = Tt.postCount),
          (o.textContent = Tt.fileCount),
          (n.textContent = e.ipCount ?? '?'),
          t.classList.toggle('warning', e.postLimit && !e.isSticky),
          o.classList.toggle('warning', e.fileLimit && !e.isSticky)
        )
      },
      fetchPage() {
        if (Tt.pageCountEl)
          return (
            clearTimeout(Tt.timeout),
            Tt.thread.isDead
              ? ((Tt.pageCountEl.textContent = 'Dead'),
                void Qe.addClass(Tt.pageCountEl, 'warning'))
              : ((Tt.timeout = setTimeout(Tt.fetchPage, 12e4)),
                Qe.whenModified(
                  o.SITE.urls.threadsListJSON(Tt.thread),
                  'ThreadStats',
                  Tt.onThreadsLoad
                ))
          )
      },
      onThreadsLoad() {
        if (200 === this.status) {
          let e, t
          if (Tt.showPurgePos) {
            let o = 1
            for (e of this.response)
              for (t of e.threads) t.no < Tt.thread.ID && o++
            return (
              (Tt.pageCountEl.textContent = o),
              Tt.pageCountEl.classList.toggle('warning', 1 === o)
            )
          }
          {
            let o,
              n = (o = 0)
            for (e of this.response) o += e.threads.length
            for (let a = 0; a < this.response.length; a++)
              for (t of ((e = this.response[a]), e.threads)) {
                if (t.no === Tt.thread.ID)
                  return (
                    (Tt.pageCountEl.textContent = a + 1),
                    Tt.pageCountEl.classList.toggle(
                      'warning',
                      n >= o - this.response[0].threads.length
                    ),
                    (Tt.lastPageUpdate = new Date(t.last_modified * b)),
                    void Tt.retry()
                  )
                n++
              }
          }
        } else if (304 === this.status) return Tt.retry()
      },
      retry() {
        if (
          !(
            !Tt.showPage ||
            '1' === Tt.pageCountEl.textContent ||
            o.SITE.threadModTimeIgnoresSage ||
            Tt.thread.posts.get(Tt.thread.lastPost).info.date <=
              Tt.lastPageUpdate
          )
        )
          return (
            clearTimeout(Tt.timeout),
            (Tt.timeout = setTimeout(Tt.fetchPage, 5e3))
          )
      },
    }
  const Rt = {
    init() {
      if ('yotsuba' === o.SITE.software && t['Pass Link'])
        return jt.ready(this.ready)
    },
    ready() {
      let e
      if (!(e = Qe.id('styleSelector'))) return
      const t = Qe.el('span', {
        className: 'brackets-wrap pass-link-container',
      })
      return (
        Qe.extend(t, { innerHTML: '<a href="javascript:;">4chan Pass</a>' }),
        Qe.on(t.firstElementChild, 'click', () =>
          window.open(
            `//sys.${location.hostname.split('.')[1]}.org/auth`,
            Date.now(),
            'width=500,height=280,toolbar=0'
          )
        ),
        Qe.before(e.previousSibling, [t, Qe.tn('  ')])
      )
    },
  }
  var Bt = {
      init() {
        if (['index', 'thread'].includes(o.VIEW) && t['Quote Inlining'])
          return (
            t['Comment Expansion'] && X.callbacks.push(this.node),
            l.Post.push({ name: 'Quote Inlining', cb: this.node })
          )
      },
      node() {
        const { process: e } = Bt,
          { isClone: t } = this
        for (var o of this.nodes.quotelinks.concat(
          [...this.nodes.backlinks],
          this.nodes.archivelinks
        ))
          e(o, t)
      },
      process: (e, o) => (
        t['Quote Hash Navigation'] &&
          (o || Qe.after(e, Bt.qiQuote(e, Qe.hasClass(e, 'filtered')))),
        Qe.on(e, 'click', Bt.toggle)
      ),
      qiQuote(e, t) {
        let o = 'hashlink'
        return (
          t && (o += ' filtered'),
          Qe.el('a', { className: o, textContent: '#', href: e.href })
        )
      },
      toggle(e) {
        if (Qe.modifiedClick(e)) return
        const { boardID: n, threadID: a, postID: r } = We.postDataFromLink(this)
        if (
          t['Inline Cross-thread Quotes Only'] &&
          'thread' === o.VIEW &&
          o.posts.get(`${n}.${r}`)?.nodes.root.offsetParent
        )
          return
        if (Qe.hasClass(i, 'catalog-mode')) return
        e.preventDefault()
        const s = We.postFromNode(this),
          { context: l } = s
        if (Qe.hasClass(this, 'inlined')) Bt.rm(this, n, a, r, l)
        else {
          if (Qe.x(`ancestor::div[@data-full-i-d='${n}.${r}']`, this)) return
          Bt.add(this, n, a, r, l, s)
        }
        return this.classList.toggle('inlined')
      },
      findRoot: (e, t) =>
        t
          ? Qe.x('ancestor::*[parent::*[contains(@class,"post")]][1]', e)
          : Qe.x('ancestor-or-self::*[parent::blockquote][1]', e),
      add(e, n, a, i, r, s) {
        let l
        const d = Qe.hasClass(e, 'backlink'),
          c = Qe.el('div', { className: 'inline' })
        c.dataset.fullID = `${n}.${i}`
        const h = Bt.findRoot(e, d)
        Qe.after(h, c)
        const u = Qe.x('ancestor::*[contains(@class,"postContainer")][1]', h)
        if (
          (Qe.addClass(u, 'hasInline'),
          new ce(n, a, i, c, s),
          (l = o.posts.get(`${n}.${i}`)) &&
            r.thread === l.thread &&
            (d &&
              t['Forward Hiding'] &&
              (Qe.addClass(l.nodes.root, 'forwarded'),
              l.forwarded++ || (l.forwarded = 1)),
            ee.posts))
        )
          return ee.readSinglePost(l)
      },
      rm(e, n, a, i, r) {
        let s, l
        const d = Qe.hasClass(e, 'backlink')
        let c = Bt.findRoot(e, d)
        c = Qe.x(`following-sibling::div[@data-full-i-d='${n}.${i}'][1]`, c)
        const h = Qe.x('ancestor::*[contains(@class,"postContainer")][1]', c),
          { parentNode: u } = c
        if (
          (Qe.rm(c),
          Qe.event('PostsRemoved', null, u),
          Qe('.inline', h) || Qe.rmClass(h, 'hasInline'),
          !(s = c.firstElementChild))
        )
          return
        const p = o.posts.get(`${n}.${i}`)
        for (
          p.rmClone(s.dataset.clone),
            t['Forward Hiding'] &&
              d &&
              r.thread === o.threads.get(`${n}.${a}`) &&
              !--p.forwarded &&
              (delete p.forwarded, Qe.rmClass(p.nodes.root, 'forwarded'));
          (l = Qe('.inlined', s));

        )
          ({ boardID: n, threadID: a, postID: i } = We.postDataFromLink(l)),
            Bt.rm(l, n, a, i, r),
            Qe.rmClass(l, 'inlined')
      },
    },
    Pt = {
      containers: m(),
      init() {
        if (['index', 'thread'].includes(o.VIEW) && t['Quote Backlinks'])
          return (
            (this.bottomBacklinks = t['Bottom Backlinks']) &&
              Qe.addClass(i, 'bottom-backlinks'),
            l.Post.push({
              name: 'Quote Backlinking Part 1',
              cb: this.firstNode,
            }),
            l.Post.push({
              name: 'Quote Backlinking Part 2',
              cb: this.secondNode,
            })
          )
      },
      firstNode() {
        if (this.isClone || !this.quotes.length || this.isRebuilt) return
        const e = t['Mark Quotes of You'] && _.isYou(this),
          n = Qe.el('a', {
            href: o.SITE.Build.postURL(this.board.ID, this.thread.ID, this.ID),
            className: this.isHidden ? 'filtered backlink' : 'backlink',
            textContent: t.backlink.replace(
              /%(?:id|%)/g,
              e => ({ '%id': this.ID, '%%': '%' })[e]
            ),
          })
        for (var a of (e && Qe.add(n, _.mark.cloneNode(!0)), this.quotes)) {
          var i,
            r = [Pt.getContainer(a)]
          if ((i = o.posts.get(a)) && i.nodes.backlinkContainer)
            for (var s of i.clones) r.push(s.nodes.backlinkContainer)
          for (var l of r) {
            var d = n.cloneNode(!0),
              c = l.firstChild ? [Qe.tn(' '), d] : [d]
            if (
              (t['Quote Previewing'] && Qe.on(d, 'mouseover', he.mouseover),
              t['Quote Inlining'] &&
                (Qe.on(d, 'click', Bt.toggle), t['Quote Hash Navigation']))
            ) {
              var h = Bt.qiQuote(d, Qe.hasClass(d, 'filtered'))
              c.push(h)
            }
            Qe.add(l, c)
          }
        }
      },
      secondNode() {
        if (this.isClone && (this.origin.isReply || t['OP Backlinks']))
          return void (this.nodes.backlinkContainer = Qe(
            '.container',
            this.nodes.post
          ))
        if (!this.isReply && !t['OP Backlinks']) return
        const e = Pt.getContainer(this.fullID)
        return (
          (this.nodes.backlinkContainer = e),
          Pt.bottomBacklinks
            ? Qe.add(this.nodes.post, e)
            : Qe.add(this.nodes.info, e)
        )
      },
      getContainer(e) {
        return (
          this.containers[e] ||
          (this.containers[e] = Qe.el('span', { className: 'container' }))
        )
      },
    },
    Mt = {
      init() {
        if (
          ['index', 'thread'].includes(o.VIEW) &&
          t['Mark Cross-thread Quotes']
        )
          return (
            t['Comment Expansion'] && X.callbacks.push(this.node),
            (this.mark = Qe.el('span', {
              textContent: ' (Cross-thread)',
              className: 'qmark-ct',
            })),
            l.Post.push({ name: 'Mark Cross-thread Quotes', cb: this.node })
          )
      },
      node() {
        if (this.isClone && this.thread === this.context.thread) return
        const { board: e, thread: t } = this.context
        for (var o of this.nodes.quotelinks) {
          var { boardID: n, threadID: a } = We.postDataFromLink(o)
          a &&
            (this.isClone && Qe.rm(Qe('.qmark-ct', o)),
            n === e.ID && a !== t.ID && Qe.add(o, Mt.mark.cloneNode(!0)))
        }
      },
    },
    Nt = {
      init() {
        if (['index', 'thread'].includes(o.VIEW) && t['Mark OP Quotes'])
          return (
            t['Comment Expansion'] && X.callbacks.push(this.node),
            (this.mark = Qe.el('span', {
              textContent: ' (OP)',
              className: 'qmark-op',
            })),
            l.Post.push({
              name: 'Mark OP Quotes',
              cb: this.node,
            })
          )
      },
      node() {
        let e, t, o
        if (this.isClone && this.thread === this.context.thread) return
        if (!(o = this.quotes).length) return
        const { quotelinks: n } = this.nodes
        if (this.isClone && o.includes(this.thread.fullID))
          for (e = 0; (t = n[e++]); ) Qe.rm(Qe('.qmark-op', t))
        const { fullID: a } = this.context.thread
        if (o.includes(a))
          for (e = 0; (t = n[e++]); ) {
            var { boardID: i, postID: r } = We.postDataFromLink(t)
            ;`${i}.${r}` === a && Qe.add(t, Nt.mark.cloneNode(!0))
          }
      },
    }
  var Lt = {
    init() {
      if (['index', 'thread'].includes(o.VIEW) && t['Resurrect Quotes'])
        return (
          Qe.addClass(i, 'resurrect-quotes'),
          t['Comment Expansion'] && X.callbacks.push(this.node),
          l.Post.push({ name: 'Resurrect Quotes', cb: this.node })
        )
    },
    node() {
      if (this.isClone)
        this.nodes.archivelinks = u('a.linkify.quotelink', this.nodes.comment)
      else {
        for (var e of u('a.linkify', this.nodes.comment))
          Lt.parseArchivelink.call(this, e)
        for (var t of u('.deadlink', this.nodes.comment))
          Lt.parseDeadlink.call(this, t)
      }
    },
    parseArchivelink(e) {
      let t
      if (!(t = e.pathname.match(/^\/([^/]+)\/thread\/S?(\d+)\/?$/))) return
      if (['boards.4chan.org', 'boards.4channel.org'].includes(e.hostname))
        return
      const o = t[1],
        n = t[2],
        a = e.hash.match(/^#[pq]?(\d+)$|$/)[1] || n
      return et.to('post', { boardID: o, postID: a })
        ? (Qe.addClass(e, 'quotelink'),
          Qe.extend(e.dataset, { boardID: o, threadID: n, postID: a }),
          this.nodes.archivelinks.push(e))
        : void 0
    },
    parseDeadlink(e) {
      let t, n, a, i
      if (Qe.hasClass(e.parentNode, 'prettyprint'))
        return void Lt.fixDeadlink(e)
      const r = e.textContent
      if (!(i = r.match(/\d+$/)?.[0])) return
      if ('0' === i[0]) return void Lt.fixDeadlink(e)
      const s = (n = r.match(/^>>>\/([a-z\d]+)/)) ? n[1] : this.board.ID,
        l = `${s}.${i}`
      if ((a = o.posts.get(l)))
        a.isDead
          ? ((t = Qe.el('a', {
              href: o.SITE.Build.postURL(s, a.thread.ID, i),
              className: 'quotelink deadlink',
              textContent: r,
            })),
            Qe.add(t, H.deadMark.cloneNode(!0)),
            Qe.extend(t.dataset, {
              boardID: s,
              threadID: a.thread.ID,
              postID: i,
            }))
          : (t = Qe.el('a', {
              href: o.SITE.Build.postURL(s, a.thread.ID, i),
              className: 'quotelink',
              textContent: r,
            }))
      else {
        const e = et.to('thread', {
            boardID: s,
            threadID: 0,
            postID: i,
          }),
          o = et.to('post', { boardID: s, postID: i })
        ;(e || o) &&
          ((t = Qe.el('a', {
            href: e || 'javascript:;',
            className: 'deadlink',
            textContent: r,
          })),
          Qe.add(t, H.deadMark.cloneNode(!0)),
          o &&
            (Qe.addClass(t, 'quotelink'),
            Qe.extend(t.dataset, { boardID: s, postID: i })))
      }
      if ((this.quotes.includes(l) || this.quotes.push(l), t))
        return (
          Qe.replace(e, t),
          Qe.hasClass(t, 'quotelink') ? this.nodes.quotelinks.push(t) : void 0
        )
      Qe.add(e, H.deadMark.cloneNode(!0))
    },
    fixDeadlink(e) {
      let t
      if (!(t = e.previousSibling) || 'BR' === t.nodeName) {
        const t = Qe.el('span', { className: 'quote' })
        Qe.before(e, t), Qe.add(t, e)
      }
      return Qe.replace(e, [...e.childNodes])
    },
  }
  const Ft = {
      init() {
        this.toBlob(),
          Qe.global(this.toBlob),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.mozMatchesSelector ||
              Element.prototype.webkitMatchesSelector)
      },
      toBlob: function () {
        HTMLCanvasElement.prototype.toBlob ||
          (HTMLCanvasElement.prototype.toBlob = function (e, t, o) {
            const n = this.toDataURL(t, o),
              a = atob(n.slice(n.indexOf(',') + 1)),
              i = a.length,
              r = new Uint8Array(i)
            for (let e = 0, t = i; e < t; e++) r[e] = a.charCodeAt(e)
            return e(new Blob([r], { type: t || 'image/png' }))
          })
      },
    },
    Ot = {
      restore() {
        const e = et.to('threadJSON', {
          boardID: o.boardID,
          threadID: o.threadID,
        })
        if (!e) return void new _e('warning', 'No archive found', 3)
        ;(e.startsWith('https://') || t['Exempt Archives from Encryption']) &&
          He.cache(e, function () {
            let e = 0
            const t = this.response[o.threadID.toString()].posts
            for (const [n, a] of Object.entries(t)) {
              const t = `${o.boardID}.${n}`
              if (!o.posts.keys.includes(t)) {
                const i = +n
                let r = o.posts.keys.findIndex(e => +e.split('.')[1] > i)
                ;-1 === r && (r = o.posts.keys.length)
                const s = de(a)
                s.kill(),
                  o.posts.push(t, s),
                  o.posts.keys.pop(),
                  o.posts.keys.splice(r, 0, t),
                  Re.insert(s) ||
                    o.posts
                      .get(o.posts.keys[r - 1])
                      .root.insertAdjacentElement('afterend', s.root),
                  ++e
              }
            }
            let n
            ;(n =
              0 === e
                ? 'No removed posts found'
                : 1 === e
                  ? '1 post restored'
                  : `${e} posts restored`),
              new _e('info', n, 3)
          })
      },
      init() {
        if ('thread' !== o.VIEW) return
        const e = Qe.el('a', {
          href: 'javascript:;',
          textContent: 'Restore from archive',
        })
        Qe.on(e, 'click', () => {
          Ot.restore(), Xe.menu.close()
        }),
          Xe.menu.addEntry({ el: e, order: 10 })
      },
    }
  var $t = {
      init() {
        let n
        try {
          let t = window
          if (
            ('crx' === x && (t = t.wrappedJSObject || t),
            `${e.name} antidup` in t)
          )
            return
          t[`${e.name} antidup`] = !0
        } catch (e) {}
        try {
          if (
            window.frameElement &&
            ['', 'about:blank'].includes(window.frameElement.src)
          )
            return
        } catch (e) {}
        if (i && Qe.hasClass(i, 'fourchan-x')) return
        Qe.asap(s, function () {
          if ((Qe.addClass(i, 'fourchan-x', 'seaweedchan'), Qe.engine))
            return Qe.addClass(i, `ua-${Qe.engine}`)
        }),
          Qe.on(a, '4chanXInitFinished', function () {
            return $t.expectInitFinished
              ? delete $t.expectInitFinished
              : (new _e(
                  'error',
                  'Error: Multiple copies of 4chan X are enabled.'
                ),
                Qe.addClass(i, 'tainted'))
          })
        var r = function () {
          return (
            a.removeEventListener('mounted', r, !0),
            ($t.isMounted = !0),
            $t.mountedCBs.map(e =>
              (() => {
                try {
                  return e()
                } catch (e) {}
              })()
            )
          )
        }
        a.addEventListener('mounted', r, !0)
        var l = function (e, o) {
          if (o instanceof Array) t[e] = m.clone(o[0])
          else if ('object' == typeof o)
            for (var n in o) {
              var a = o[n]
              l(n, a)
            }
          else t[e] = o
        }
        for (var d of (['boards.4chan.org', 'boards.4channel.org'].includes(
          location.hostname
        ) &&
          (Qe.global(function () {
            const e = String.fromCharCode
            return (String.fromCharCode = function () {
              if (document.body) String.fromCharCode = e
              else if (document.currentScript && !document.currentScript.src)
                throw Error()
              return e.apply(this, arguments)
            })
          }),
          Qe.asap(s, () => Qe.onExists(i, 'iframe[srcdoc]', Qe.rm))),
        l(null, c),
        y.keys))
          t[d] = m()
        ;(t.customTitles = m.clone({
          '4chan.org': {
            boards: {
              qa: {
                boardTitle: {
                  orig: '/qa/ - Question & Answer',
                  title: '/qa/ - 2D/Random',
                },
              },
            },
          },
        })),
          (t.boardConfig = { boards: m() }),
          (t.archives = et.archives),
          (t.selectedArchives = m()),
          (t.cooldowns = m()),
          (t['Index Sort'] = m())
        for (let e = 0; e < 2; e++) t[`Last Long Reply Thresholds ${e}`] = m()
        ;(t.siteProperties = m()),
          (t['Except Archives from Encryption'] = !1),
          (t['JSON Navigation'] = !0),
          (t['Oekaki Links'] = !0),
          (t['Show Name and Subject'] = !1),
          (t['QR Shortcut'] = !0),
          (t['Bottom QR Link'] = !0),
          (t['Toggleable Thread Watcher'] = !0),
          (t.siteSoftware = ''),
          (t['Use Faster Image Host'] = 'true'),
          (t['Captcha Fixes'] = !0),
          (t.captchaServiceDomain = ''),
          (t.captchaServiceKey = m()),
          !/\.4chan(?:nel)?\.org$/.test(location.hostname) ||
            De.yotsuba.regexp.pass.test(location.href) ||
            De.yotsuba.regexp.captcha.test(location.href) ||
            u('script:not([src])', a).filter(e => /this\[/.test(e.textContent))
              .length ||
            (Qe.getSync || Qe.get)(
              { jsWhitelist: t.jsWhitelist },
              ({ jsWhitelist: e }) =>
                Qe.addCSP(
                  `script-src ${e
                    .replace(/^#.*$/gm, '')
                    .replace(/[\s;]+/g, ' ')
                    .trim()}`
                )
            )
        const h = m()
        for (n in t) h[n] = void 0
        return (
          (h.previousversion = void 0),
          (Qe.getSync || Qe.get)(h, function (e) {
            if (
              Qe.perProtocolSettings ||
              !/\.4chan(?:nel)?\.org$/.test(location.hostname) ||
              !(e['Redirect to HTTPS'] ?? t['Redirect to HTTPS']) ||
              'https:' === location.protocol
            )
              return Qe.asap(s, function () {
                for (n in (Qe.cantSet ||
                  (null == e.previousversion
                    ? (($t.isFirstRun = !0),
                      $t.ready(function () {
                        return Qe.set('previousversion', o.VERSION), Pe.open()
                      }))
                    : e.previousversion !== o.VERSION && $t.upgrade(e)),
                t)) {
                  var a = t[n]
                  t[n] = e[n] ?? a
                }
                return Ye.init($t.initFeatures)
              })
            location.replace(
              'https://' +
                location.host +
                location.pathname +
                location.search +
                location.hash
            )
          })
        )
      },
      upgrade(t) {
        const { previousversion: n } = t,
          a = Pe.upgrade(t, n)
        return (
          (t.previousversion = a.previousversion = o.VERSION),
          Qe.set(a, function () {
            if (t['Show Updated Notifications'] ?? 1) {
              const t = Qe.el('span', {
                innerHTML: `${e.name} has been updated to <a href="${e.changelog}" target="_blank">version ${o.VERSION}</a>.`,
              })
              return new _e('info', t, 15)
            }
          })
        )
      },
      parseURL(e = o.SITE, t = location) {
        const n = {}
        if (!e) return n
        if (((n.siteID = e.ID), e.isBoardlessPage?.(t))) return n
        const a = t.pathname.split(/\/+/)
        return (
          (n.boardID = a[1]),
          e.isFileURL(t)
            ? (n.VIEW = 'file')
            : e.isAuxiliaryPage?.(t) ||
              (['thread', 'res'].includes(a[2])
                ? ((n.VIEW = 'thread'),
                  (n.threadID = n.THREADID = +a[3].replace(/\.\w+$/, '')))
                : 'archive' === a[2] && 'res' === a[3]
                  ? ((n.VIEW = 'thread'),
                    (n.threadID = n.THREADID = +a[4].replace(/\.\w+$/, '')),
                    (n.threadArchived = !0))
                  : /^(?:catalog|archive)(?:\.\w+)?$/.test(a[2])
                    ? (n.VIEW = a[2].replace(/\.\w+$/, ''))
                    : /^(?:index|\d*)(?:\.\w+)?$/.test(a[2]) &&
                      (n.VIEW = 'index')),
          n
        )
      },
      initFeatures() {
        if (
          (Qe.global(function () {
            return (
              document.documentElement.classList.add('js-enabled'),
              (window.FCX = {})
            )
          }),
          ($t.jsEnabled = Qe.hasClass(i, 'js-enabled')),
          Qe.ajaxPageInit?.(),
          Qe.extend(o, $t.parseURL()),
          o.boardID && (o.BOARD = new J(o.boardID)),
          o.VIEW)
        ) {
          if ('file' !== o.VIEW) {
            for (var [e, n] of ((o.threads = new k()),
            (o.posts = new k()),
            Qe.onExists(i, 'body', $t.initStyle),
            $t.features))
              if (
                !o.SITE.disabledFeatures ||
                !o.SITE.disabledFeatures.includes(e)
              )
                try {
                  n.init()
                } catch (t) {
                  $t.handleErrors({
                    message: `"${e}" initialization crashed.`,
                    error: t,
                  })
                }
            return Qe.ready($t.initReady)
          }
          Qe.asap(
            () => 'loading' !== a.readyState,
            function () {
              let e
              if (
                'yotsuba' === o.SITE.software &&
                t['404 Redirect'] &&
                o.SITE.is404?.()
              ) {
                const e = location.pathname.split(/\/+/)
                return et.navigate('file', {
                  boardID: o.BOARD.ID,
                  filename: e[e.length - 1],
                })
              }
              if (
                (e = Qe('video')) &&
                (t['Volume in New Tab'] && $.setup(e), t['Loop in New Tab'])
              )
                return (
                  (e.loop = !0), (e.controls = !1), e.play(), j.addControls(e)
                )
            }
          )
        } else o.SITE.initAuxiliary?.()
      },
      initStyle() {
        if (!$t.isThisPageLegit()) return
        const e = Qe('link[href*=mobile]', a.head)
        e && (e.disabled = !0),
          (i.dataset.host = location.host),
          Qe.addClass(i, `sw-${o.SITE.software}`),
          Qe.addClass(i, 'thread' === o.VIEW ? 'thread-view' : o.VIEW),
          Qe.onExists(i, '.ad-cnt, .adg-rects > .desktop', e =>
            Qe.onExists(e, 'img, iframe', () => Qe.addClass(i, 'ads-loaded'))
          ),
          t['Autohiding Scrollbar'] && Qe.addClass(i, 'autohiding-scrollbar'),
          Qe.ready(function () {
            if (
              a.body.clientHeight > i.clientHeight &&
              (window.innerWidth === i.clientWidth) !==
                t['Autohiding Scrollbar']
            )
              return (
                (t['Autohiding Scrollbar'] = !t['Autohiding Scrollbar']),
                Qe.set('Autohiding Scrollbar', t['Autohiding Scrollbar']),
                Qe.toggleClass(i, 'autohiding-scrollbar')
              )
          }),
          Qe.addStyle(be.sub(be.boards), 'fourchanx-css'),
          ($t.bgColorStyle = Qe.el('style', { id: 'fourchanx-bgcolor-css' }))
        let n = !1
        return (
          Qe.on(a, 'mousedown', () => (n = !1)),
          Qe.on(a, 'keydown', function (e) {
            if (9 === e.keyCode) return (n = !0)
          }),
          window.addEventListener(
            'focus',
            () => i.classList.toggle('keyboard-focus', n),
            !0
          ),
          $t.setClass()
        )
      },
      setClass() {
        let e, t, n
        const r = [
          'yotsuba',
          'yotsuba-b',
          'futaba',
          'burichan',
          'photon',
          'tomorrow',
          'spooky',
        ]
        if (
          'yotsuba' === o.SITE.software &&
          'catalog' === o.VIEW &&
          (e = Qe.id('base-css')) &&
          ((t = e.href
            .match(/catalog_(\w+)/)?.[1]
            .replace('_new', '')
            .replace(/_+/g, '-')),
          r.includes(t))
        )
          return void Qe.addClass(i, t)
        t = e = n = null
        const s = function () {
          if ('yotsuba' === o.SITE.software) {
            for (var s of (Qe.rmClass(i, t), (t = null), n))
              if (s.href === e?.href) {
                ;(t = s.title
                  .toLowerCase()
                  .replace('new', '')
                  .trim()
                  .replace(/\s+/g, '-')),
                  '_special' === t && (t = s.href.match(/[a-z]*(?=[^/]*$)/)[0]),
                  r.includes(t) || (t = null)
                break
              }
            if (t) return Qe.addClass(i, t), void Qe.rm($t.bgColorStyle)
          }
          const l = o.SITE.bgColoredEl()
          ;(l.style.position = 'absolute'),
            (l.style.visibility = 'hidden'),
            Qe.add(a.body, l)
          let d = window.getComputedStyle(l).backgroundColor
          Qe.rm(l)
          const c = d.match(/[\d.]+/g)
          if (!/^rgb\(/.test(d)) {
            const e = window.getComputedStyle(a.body)
            d = `${e.backgroundColor} ${e.backgroundImage} ${e.backgroundRepeat} ${e.backgroundPosition}`
          }
          let h = `.dialog, .suboption-list > div:last-of-type, :root.catalog-hover-expand .catalog-container:hover > .post {\n  background: ${d};\n}\n.unread-mark-read {\n  background-color: rgba(${c
            .slice(0, 3)
            .join(', ')}, ${0.5 * (c[3] || 1)});\n}`
          return (
            Qe.luma(c) < 100 &&
              (h +=
                ".watch-thread-link {\n  background-image: url(\"data:image/svg+xml,<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'><path fill='rgb(200,200,200)' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>\");\n}"),
            ($t.bgColorStyle.textContent = h),
            Qe.after(Qe.id('fourchanx-css'), $t.bgColorStyle)
          )
        }
        if (
          (Qe.onExists(a.head, o.SITE.selectors.styleSheet, function (t) {
            return (
              (e = t),
              'yotsuba' === o.SITE.software &&
                (n = u('link[rel="alternate stylesheet"]', a.head)),
              new MutationObserver(s).observe(e, {
                attributes: !0,
                attributeFilter: ['href'],
              }),
              Qe.on(e, 'load', s),
              s()
            )
          }),
          !e)
        ) {
          for (var l of u('link[rel="stylesheet"]', a.head)) Qe.on(l, 'load', s)
          return s()
        }
      },
      initReady() {
        if (!o.SITE.is404?.()) {
          if (o.SITE.isIncomplete?.()) {
            const e = Qe.el('div', {
              innerHTML:
                'The page didn&#039;t load completely.<br>Some features may not work unless you <a href="javascript:;">reload</a>.',
            })
            Qe.on(Qe('a', e), 'click', () => location.reload()),
              new _e('warning', e)
          }
          return 'catalog' === o.VIEW
            ? $t.initCatalog()
            : pe.enabled
              ? (($t.expectInitFinished = !0), Qe.event('4chanXInitFinished'))
              : o.SITE.awaitBoard
                ? o.SITE.awaitBoard($t.initThread)
                : $t.initThread()
        }
        'thread' === o.VIEW &&
          ae.set404(o.BOARD.ID, o.THREADID, function () {
            if (t['404 Redirect'])
              return et.navigate(
                'thread',
                {
                  boardID: o.BOARD.ID,
                  threadID: o.THREADID,
                  postID: +location.hash.match(/\d+/),
                },
                `/${o.BOARD}/`
              )
          })
      },
      initThread() {
        let e
        const t = o.SITE.selectors
        if ((e = Qe(t.boardFor?.[o.VIEW] || t.board))) {
          const n = [],
            a = [],
            i = []
          try {
            o.SITE.preParsingFixes?.(e)
          } catch (e) {}
          return (
            ($t.addThreadsObserver = new MutationObserver($t.addThreads)),
            ($t.addPostsObserver = new MutationObserver($t.addPosts)),
            $t.addThreadsObserver.observe(e, { childList: !0 }),
            $t.parseThreads(u(t.thread, e), n, a, i),
            i.length && $t.handleErrors(i),
            'thread' === o.VIEW &&
              (o.threadArchived && ((n[0].isArchived = !0), n[0].kill()),
              o.SITE.parseThreadMetadata?.(n[0])),
            $t.callbackNodes('Thread', n),
            $t.callbackNodesDB('Post', a, function () {
              for (var e of a) Re.insert(e)
              return (
                ($t.expectInitFinished = !0), Qe.event('4chanXInitFinished')
              )
            })
          )
        }
        return ($t.expectInitFinished = !0), Qe.event('4chanXInitFinished')
      },
      parseThreads(e, t, n, a) {
        for (var i of e) {
          var r = (() => {
              let e
              return (e = i.dataset.board)
                ? ((e = encodeURIComponent(e)), o.boards[e] || new J(e))
                : o.BOARD
            })(),
            s = +i.id.match(/\d*$/)[0]
          if (!s || r.threads.get(s)?.nodes.root) return
          var l = new I(s, r)
          ;(l.nodes.root = i), t.push(l)
          var d = u(o.SITE.selectors.postContainer, i)
          o.SITE.isOPContainerThread && d.unshift(i),
            $t.parsePosts(d, l, n, a),
            $t.addPostsObserver.observe(i, { childList: !0 })
        }
      },
      parsePosts(e, t, n, a) {
        for (var i of e)
          if (
            (!i.dataset.fullID || !o.posts.get(i.dataset.fullID)) &&
            Qe(o.SITE.selectors.comment, i)
          )
            try {
              n.push(new H(i, t, t.board))
            } catch (e) {
              a.push({
                message: `Parsing of Post No.${i.id.match(
                  /\d+/
                )} failed. Post will be skipped.`,
                error: e,
                html: i.outerHTML,
              })
            }
      },
      addThreads(e) {
        const t = []
        for (var n of e)
          for (var a of n.addedNodes)
            a.nodeType === Node.ELEMENT_NODE &&
              a.matches(o.SITE.selectors.thread) &&
              t.push(a)
        if (!t.length) return
        const i = [],
          r = [],
          s = []
        return (
          $t.parseThreads(t, i, r, s),
          s.length && $t.handleErrors(s),
          $t.callbackNodes('Thread', i),
          $t.callbackNodesDB('Post', r, () =>
            Qe.event('PostsInserted', null, e[0].target)
          )
        )
      },
      addPosts(e) {
        let t
        const n = [],
          a = [],
          r = [],
          s = []
        for (var l of e) {
          t = We.threadFromRoot(l.target)
          var d = []
          for (var c of l.addedNodes)
            c.nodeType === Node.ELEMENT_NODE &&
              (c.matches(o.SITE.selectors.postContainer) ||
                (c = Qe(o.SITE.selectors.postContainer, c))) &&
              d.push(c)
          var h = r.length
          $t.parsePosts(d, t, r, s), r.length > h && !n.includes(t) && n.push(t)
          var u = !1
          for (var p of l.removedNodes)
            if (We.postFromRoot(p)?.nodes.root === p && !i.contains(p)) {
              u = !0
              break
            }
          u && !a.includes(t) && a.push(t)
        }
        return (
          s.length && $t.handleErrors(s),
          $t.callbackNodesDB('Post', r, function () {
            for (t of n) Qe.event('PostsInserted', null, t.nodes.root)
            for (t of a) Qe.event('PostsRemoved', null, t.nodes.root)
          })
        )
      },
      initCatalog() {
        let e
        const t = o.SITE.selectors.catalog
        if (t && (e = Qe(t.board))) {
          const o = [],
            n = []
          ;($t.addCatalogThreadsObserver = new MutationObserver(
            $t.addCatalogThreads
          )),
            $t.addCatalogThreadsObserver.observe(e, { childList: !0 }),
            $t.parseCatalogThreads(u(t.thread, e), o, n),
            n.length && $t.handleErrors(n),
            $t.callbackNodes('CatalogThreadNative', o)
        }
        return ($t.expectInitFinished = !0), Qe.event('4chanXInitFinished')
      },
      parseCatalogThreads(e, t, o) {
        for (var n of e)
          try {
            var a = new tt(n)
            a.thread.catalogViewNative?.nodes.root !== n &&
              ((a.thread.catalogViewNative = a), t.push(a))
          } catch (e) {
            o.push({
              message: `Parsing of Catalog Thread No.${(
                n.dataset.id || n.id
              ).match(/\d+/)} failed. Thread will be skipped.`,
              error: e,
              html: n.outerHTML,
            })
          }
      },
      addCatalogThreads(e) {
        const t = []
        for (var n of e)
          for (var a of n.addedNodes)
            a.nodeType === Node.ELEMENT_NODE &&
              a.matches(o.SITE.selectors.catalog.thread) &&
              t.push(a)
        if (!t.length) return
        const i = [],
          r = []
        return (
          $t.parseCatalogThreads(t, i, r),
          r.length && $t.handleErrors(r),
          $t.callbackNodes('CatalogThreadNative', i)
        )
      },
      callbackNodes(e, t) {
        let o,
          n = 0
        const a = l[e]
        for (; (o = t[n++]); ) a.execute(o)
      },
      callbackNodesDB(e, t, o) {
        let n = 0
        const a = l[e],
          i = function () {
            let e
            return !!(e = t[n]) && (a.execute(e), ++n % 250)
          }
        var r = function () {
          for (; i(); );
          if (t[n]) return setTimeout(r, 0)
          o && o()
        }
        return r()
      },
      handleErrors(r) {
        let s
        if (
          (a.body &&
            Qe.hasClass(a.body, 'fourchan_x') &&
            !Qe.hasClass(i, 'tainted') &&
            (new _e('error', 'Error: Multiple copies of 4chan X are enabled.'),
            Qe.addClass(i, 'tainted')),
          o.SITE.testNativeExtension && !Qe.hasClass(i, 'tainted'))
        ) {
          const { enabled: a } = o.SITE.testNativeExtension()
          if (
            a &&
            (Qe.addClass(i, 'tainted'),
            t['Disable Native Extension'] && !$t.isFirstRun)
          ) {
            const t = Qe.el('div', {
              innerHTML:
                'Failed to disable the native extension. You may need to <a href="' +
                n(e.faq) +
                '#blocking-native-extension" target="_blank">block it</a>.',
            })
            new _e('error', t)
          }
        }
        if ((r instanceof Array ? 1 === r.length && (s = r[0]) : (s = r), s))
          return void new _e('error', $t.parseError(s, $t.reportLink([s])), 15)
        const l = Qe.el('div', {
          innerHTML: `${r.length} errors occurred.${
            $t.reportLink(r).innerHTML
          } [<a href="javascript:;">show</a>]`,
        })
        Qe.on(l.lastElementChild, 'click', function () {
          return ([this.textContent, d.hidden] =
            'show' === this.textContent ? ['hide', !1] : ['show', !0])
        })
        var d = Qe.el('div', { hidden: !0 })
        for (s of r) Qe.add(d, $t.parseError(s))
        return new _e('error', [l, d], 30)
      },
      parseError(t, a) {
        r.error(t.message, t.error.stack)
        const i = Qe.el('div', {
            innerHTML: n(t.message) + (a ? a.innerHTML : ''),
          }),
          s = Qe.el('div', {
            textContent: `${t.error.name || 'Error'}: ${
              t.error.message || 'see console for details'
            }`,
          }),
          l =
            t.error.stack
              ?.match(/\d+(?=:\d+\)?$)/gm)
              ?.join()
              .replace(/^/, ' at ') || ''
        return [
          i,
          s,
          Qe.el('div', {
            textContent: `(${e.name} ${e.fork} v${o.VERSION} ${x} on ${Qe.engine}${l})`,
          }),
        ]
      },
      reportLink(t) {
        let n
        const a = t[0]
        let i = a.message
        t.length > 1 && (i += ` (+${t.length - 1} other errors)`)
        let r = ''
        const s = function (t) {
          if (
            encodeURIComponent(i + r + t + '\n').length <=
            e.newIssueMaxLength -
              e.newIssue.replace(/%(title|details)/, '').length
          )
            return (r += t + '\n')
        }
        s(
          `[Please describe the steps needed to reproduce this error.]\n\nScript: ${e.name} ${e.fork} v${o.VERSION} ${x}\nURL: ${location.href}\nUser agent: ${navigator.userAgent}`
        ),
          'userscript' === x &&
            (n =
              'undefined' != typeof GM && null !== GM
                ? GM.info
                : 'undefined' != typeof GM_info && null !== GM_info
                  ? GM_info
                  : void 0) &&
            s(`Userscript manager: ${n.scriptHandler} ${n.version}`),
          s('\n' + a.error),
          a.error.stack &&
            s(a.error.stack.replace(a.error.toString(), '').trim()),
          a.html && s('\n`' + a.html + '`'),
          (r = r.replace(/file:\/{3}.+\//g, ''))
        return {
          innerHTML: `<span class="report-error"> [<a href="${e.newIssue
            .replace('%title', encodeURIComponent(i))
            .replace(
              '%details',
              encodeURIComponent(r)
            )}" target="_blank">report</a>]</span>`,
        }
      },
      isThisPageLegit: () => (
        'thisPageIsLegit' in $t ||
          ($t.thisPageIsLegit = o.SITE.isThisPageLegit
            ? o.SITE.isThisPageLegit()
            : !/^[45]\d\d\b/.test(document.title) &&
              !/\.(?:json|rss)$/.test(location.pathname)),
        $t.thisPageIsLegit
      ),
      ready: e =>
        Qe.ready(function () {
          if ($t.isThisPageLegit()) return e()
        }),
      mounted: e => ($t.isMounted ? e() : $t.mountedCBs.push(e)),
      mountedCBs: [],
      features: [
        ['Polyfill', Ft],
        ['Board Configuration', Y],
        ['Normalize URL', xt],
        ['Delay Redirect on Post', K],
        ['Captcha Configuration', p],
        ['Image Host Rewriting', O],
        ['Redirect', et],
        ['Header', Xe],
        ['Catalog Links', Je],
        ['Settings', Pe],
        ['Index Generator', pe],
        ['Disable Autoplay', pt],
        ['Announcement Hiding', It],
        ['Fourchan thingies', mt],
        ['Tinyboard Glue', Et],
        ['Color User IDs', bt],
        ['Highlight by User ID', At],
        ['Count Posts by ID', vt],
        ['Custom CSS', ve],
        ['Thread Links', Dt],
        ['Linkify', st],
        ['Reveal Spoilers', Ct],
        ['Resurrect Quotes', Lt],
        ['Filter', Ge],
        ['Thread Hiding Buttons', ge],
        ['Reply Hiding Buttons', W],
        ['Recursive', z],
        [
          'Strike-through Quotes',
          {
            init() {
              if (
                ['index', 'thread'].includes(o.VIEW) &&
                (t['Reply Hiding Buttons'] ||
                  (t.Menu && t['Reply Hiding Link']) ||
                  t.Filter)
              )
                return l.Post.push({
                  name: 'Strike-through Quotes',
                  cb: this.node,
                })
            },
            node() {
              if (!this.isClone)
                for (var e of this.nodes.quotelinks) {
                  var { boardID: t, postID: n } = We.postDataFromLink(e)
                  o.posts.get(`${t}.${n}`)?.isHidden &&
                    Qe.addClass(e, 'filtered')
                }
            },
          },
        ],
        ['Quick Reply Personas', je.persona],
        ['Quick Reply', je],
        ['Cooldown', je.cooldown],
        ['Post Jumper', yt],
        ['Pass Link', Rt],
        ['Menu', Q],
        ['Index Generator (Menu)', pe.menu],
        ['Report Link', ut],
        ['Copy Text Link', dt],
        ['Thread Hiding (Menu)', ge.menu],
        ['Reply Hiding (Menu)', W.menu],
        ['Delete Link', ct],
        ['Filter (Menu)', Ge.menu],
        ['Edit Link', je.oekaki.menu],
        ['Download Link', ht],
        ['Archive Link', lt],
        ['Quote Inlining', Bt],
        ['Quote Previewing', he],
        ['Quote Backlinks', Pt],
        ['Mark Quotes of You', _],
        ['Mark OP Quotes', Nt],
        ['Mark Cross-thread Quotes', Mt],
        ['Anonymize', ot],
        ['Time Formatting', Se],
        ['Relative Post Dates', G],
        ['File Info Formatting', Ee],
        ['Fappe Tyme', Me],
        ['Gallery', Le],
        ['Gallery (menu)', Le.menu],
        ['Sauce', Ne],
        ['Image Expansion', U],
        ['Image Expansion (Menu)', U.menu],
        ['Reveal Spoiler Thumbnails', rt],
        ['Image Loading', at],
        ['Image Hover', nt],
        ['Volume Control', $],
        ['WEBM Metadata', it],
        ['Comment Expansion', X],
        ['Thread Expansion', te],
        ['Favicon', h],
        ['Unread', ee],
        ['Unread Line in Index', oe],
        ['Quote Threading', Re],
        ['Thread Stats', Tt],
        ['Thread Updater', Be],
        ['Thread Watcher', ae],
        ['Thread Watcher (Menu)', ae.menu],
        ['Mark New IPs', St],
        ['Index Navigation', F],
        ['Keybinds', Oe],
        ['Banner', gt],
        ['Announcements', kt],
        ['Flash Features', ft],
        ['Reply Pruning', Te],
        ['Mod Contact Links', wt],
        ['Restore deleted posts from archive', Ot],
      ],
    },
    jt = $t
  Qe.ready(() => $t.init())
})()
//# sourceMappingURL=4chan-XT.min.user.js.map

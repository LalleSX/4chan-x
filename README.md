# 4chan XT

**This repo is work in progress!** Use the build from the [repo this is forked from](https://github.com/ccd0/4chan-x) in the meantime.

PR to upstream: https://github.com/ccd0/4chan-x/pull/3341.

The 4chan XT project is a migration of 4chan X from coffeescript to TypeScript/JavaScript. It is named XT both as a continuation of eXTended, and a T for TypeScript. The goals of this project is to first get a working bundle from js/ts files, and then gradually convert js files to ts and add types as needed.

## TODO

- find alternative for `<% if (`
  - [x] made html templates jsx/txt functions
    - this uses the typescript compiler to compile the jsx
    - render code is in [src/globals/jsx.ts](./src/globals/jsx.ts)
  - [x] binary files are included as base64 in the bundle step, they do need explicit imports
  - [ ] \<% if (readJSON('/.tests_enabled')) { %\>, are these still used?
- build script
  - [x] userscript
  - [ ] .crx extension
    - [x] crx directory that can be loaded as an unpacked extension is created
  - [x] beta
  - [x] noupdate
- [ ] run and debug
- [ ] port updates made to 4chan-X made since this was forked

## Other notes

- A lot of files have circular dependencies, but rollup can handle that
  - but for some scripts that add to the same object I had to merge them, like Posting/QR and site/SW.yotsuba.js
  - sometimes something might not be initialized before use, for example, `$.dict()` and `$.SECONDS`
    - I moved these to a new file called helpers.ts, which shouldn't have dependencies itself, so it's also available
- tsconfig.json has `"checkJs": true,`, and a lot of js files report type errors when opened because of unknown properties on objects and reassigning variables with different types. These errors don't block the bundle at this moment.
- old files in the builds directory stay as reference until the new builds are functional, new files go in the builds/test directory
- old build scripts are also kept around for reference until the new build output is fully functional
- the es 2020 target was choses for optional chaining
- @violentmonkey/types was chosen over @types/greasemonkey because @types/greasemonkey only declares the GM object, and not GM\_ functions

## commits since this was forked

<details>
<summary>Click to expand</summary>

- [x] 944b04210c119aedf8da1a8bcabaca9b80312118 Update archive list.
  - [x] 59ee8c57792d0f82491756a077e25f506fd62994 Desuarchive removes /gif/
  - [x] 402679e33a06dfbe0dc39ceba5c24fed761b6a19 desuarchive removes /wsg/ files
  - [x] 86071184aa39b3585f06c1a4e2921c411ad8cf10 archived.moe adds /pw/ search, tokyochronos has hosting issues
  - [x] 8a6392b1cf721ddfae6d8f4e3ec2566f15755370 add Eientei
  - [x] 451a06f54b878ce433b0775858affefc71927fc7 alice.al domain change
- [x] 2a8bf2adb0737ce7bb1e21f6b959e4c6e1de1bc7 Disable Javascript Whitelist on captcha iframe. #3292
- [x] e9c1529da7844a42a1b40458c2c77b77e23ca537 Make QR post more like original form post. #3330
- [x] d16062a8fac5c092c34310c7704ac3980494b6ef Merge remote-tracking branch '4chenz/master'
  - [x] 8795b1c56dbdfb52a32ddb3ea80b549f0048dc7b Add Google Lens image search url
- [x] f3f03f5e79fb5f26c0fd4406b2ab6796851ea471 Replace Google image search link with Google Lens.
  - [x] c68a8afbdf30e3cbb35f0834b364f20600151adf Switch Google image search back to old version, thanks to https://boards.4channel.org/g/thread/91737566#p91789527
- [x] aef984da1a6af4d0003b51e7f03bce252ac71dff Remove empty space from ads if they don't load. https://kissu.moe/b/res/7155#11052
- [x] 19268975ea2d49a753624315b0928f27496aac02 Update Randomize Filename to match current 4chan format. https://boards.4channel.org/g/thread/91737566#p91784238
- [x] 2a47dfd8ba724b17f5bc5f9214bea8ce8b469398 Catch errors due to "Restricted" selection. #2905
- [x] 27957c25af5d182adc38f1e67a098ab338631ccd Release 4chan X v1.14.22.2.
- [x] eb25d6e797a1673fd7cddb257fce04055383ec9b Update chrome-webstore-upload.
- [x] 14e67e9a958633e37b4e4a6293cfa3a921c1eab0 Release 4chan X v1.14.22.3.
- [x] 7295b21b73eb13ec53fdc61767ada341c2e13144 Avoid breaking sauce settings of people with links to original Google Images and Google Lens, provided they didn't already update to v1.14.22.3.
- [x] 71873cd7b22a565c2a41fa24f63f7504152683eb Recognize JPEG files with .jfif extensions as images for purposes of Image Hover etc.; also recognize .avif and .jxl files as images.
- [x] ea2462ecc47327c6f0c31348d95fd2b1b6447cb3 Release 4chan X v1.14.22.4.

</details>

---

Original readme:

![screenshot](https://ccd0.github.io/4chan-x/img/screenshot.png)
# 4chan X
4chan X is a script that adds various features to anonymous imageboards. It was originally developed for 4chan but has no affiliation with it.

It was previously developed by [aeosynth](https://github.com/aeosynth/4chan-x), [Mayhem](https://github.com/MayhemYDG/4chan-x), [ihavenoface](https://github.com/ihavenoface/4chan-x), [Zixaphir](https://github.com/zixaphir/appchan-x), [Seaweed](https://github.com/seaweedchan/4chan-x), and [Spittie](https://github.com/Spittie/4chan-x), with contributions from many others.

If you're looking for a maintained fork of OneeChan (a style script used in addition to 4chan X), try
https://github.com/KevinParnell/OneeChan.

## Please note
**Uninstalling**: 4chan X disables the native extension, so if you uninstall 4chan X, you'll need to re-enable it. To do this, click the `[Settings]` link in the top right corner, uncheck "`Disable the native extension`" in the panel that appears, and click the "`Save Settings`" button. If you don't see a "`Save Settings`" button, it may be being hidden by your ad blocker.

**Private browsing**: By default, 4chan X remembers your last read post in a thread and which posts were made by you, even if you are in private browsing / incognito mode. If you want to turn this off, uncheck the `Remember Last Read Post` and `Remember Your Posts` options in the settings panel. You can clear all 4chan browsing history saved by 4chan X by resetting your settings.

Use of the "Link Title" feature to fetch titles of Youtube links is subject to Youtube's [Terms of Service](https://www.youtube.com/t/terms) and [Privacy Policy](http://www.google.com/policies/privacy). For more details on what information is sent to Youtube and other sites, and how to turn it off if you don't want the feature, see 4chan X's [privacy documentation](https://github.com/ccd0/4chan-x/wiki/Privacy).

## Install

### Firefox
Install [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/), [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) (issues since v4: [#2526](https://github.com/greasemonkey/greasemonkey/issues/2526), [#2576](https://github.com/greasemonkey/greasemonkey/issues/2574)), then **[click here to install 4chan X](https://www.4chan-x.net/builds/4chan-X.user.js)**.

Ports of Greasemonkey are available for [SeaMonkey](https://sourceforge.net/projects/gmport/) and [Pale Moon](https://github.com/janekptacijarabaci/greasemonkey/releases/latest).

### Chromium
**Userscript**: Install [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag) or [Tampermonkey](https://tampermonkey.net/), then **[click here to install 4chan X](https://www.4chan-x.net/builds/4chan-X.user.js)**.

**Chrome extension**: 4chan X is also available as a standalone Chrome extension. The Chrome extension has the additional feature of being able to sync your settings and data with other devices via Chrome Sync. But there is an issue when the script updates: Whenever the Chrome extension is updated, until you hard refresh (F5) the tab, 4chan X is unable to save any data (such as posts marked as yours and settings changes). The userscript version above does not have this problem when 4chan X updates, only when Violentmonkey / Tampermonkey is updated. To install as a Chrome extension:

- **Chromium**, **Vivaldi**: **[Download 4chan X](https://www.4chan-x.net/builds/4chan-X.crx)**, then open `chrome://extensions` and drag the downloaded file onto the page. Alternatively, you can install 4chan X from the **[Chrome store](https://chrome.google.com/webstore/detail/ohnjgmpcibpbafdlkimncjhflgedgpam)**.
- **Opera**: **[Click to install 4chan X](https://www.4chan-x.net/builds/4chan-X.crx)**, then follow the prompts to activate it in your extension manager.
- **Chrome**: Install 4chan X from the **[Chrome store](https://chrome.google.com/webstore/detail/ohnjgmpcibpbafdlkimncjhflgedgpam)**.

Note: This version of 4chan X does not work with Opera 12. If you need Opera 12 support, try [loadletter's fork](https://github.com/loadletter/4chan-x) instead.

### Safari
Install the [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) extension. Enable it by pressing `⌘,`, navigating to the extensions pane and checking `Userscripts` checkbox. Now open the Userscripts editor by clicking on the `</>` button in the taskbar. Then click on the `+` button and select the `New Javascript` option. Replace the default text with the contents of the 4chan X **[script](https://www.4chan-x.net/builds/4chan-X.user.js)**. Finally save it by pressing `⌘s`.

### WebKitGTK+ / QtWebKit / QtWebEngine
Several minimal browsers have support for userscripts and can run 4chan X. Due to the lack of the cross-site GM_* API, and lack of support for userscripts in iframes, not all features will work. You may experience crashes when repeatedly solving the default image-based captchas. You can avoid this problem by enabling `Use Recaptcha v1` in your settings.

- **dwb**: Install the userscripts extension, then save the [script](https://www.4chan-x.net/builds/4chan-X.user.js) to the `$XDG_CONFIG_HOME/dwb/greasemonkey` or `$HOME/.config/dwb/greasemonkey` directory (creating it if necessary):

  ```
  dwbem -N -i userscripts
  wget -P ${XDG_CONFIG_HOME:-$HOME/.config}/dwb/greasemonkey https://www.4chan-x.net/builds/4chan-X.user.js
  ```

- **Midori**: Enable `User addons` in your preferences, under the Extensions tab. In the Privacy tab, check `Enable HTML5 local storage support`. Optionally, if you want 4chan X to be able to open new tabs when you start or reply to a thread, you will need to check `Allow scripts to open popups` under the Behavior tab. Then click the link to the [script](https://www.4chan-x.net/builds/4chan-X.user.js) to install it.

- **Luakit**: Navigate to the [script](https://www.4chan-x.net/builds/4chan-X.user.js), then type the command `:usi` to install it.

- **uzbl**: Install the script from https://github.com/singpolyma/singpolyma/blob/master/uzbl/data/scripts/userscript.sh, enable it in your config file, and then save [4chan X](https://www.4chan-x.net/builds/4chan-X.user.js) to `$XDG_DATA_HOME/uzbl/userscripts` (or `$HOME/.local/share/uzbl/userscripts`). The commands below assume you have run uzbl at least once to create its config file.

  ```
  wget -P "${XDG_DATA_HOME:-$HOME/.local/share}/uzbl/scripts" https://raw.githubusercontent.com/singpolyma/singpolyma/master/uzbl/data/scripts/userscript.sh
  chmod +x "${XDG_DATA_HOME:-$HOME/.local/share}/uzbl/scripts/userscript.sh"
  echo '@on_event LOAD_COMMIT spawn @scripts_dir/userscript.sh document-start' >> "${XDG_CONFIG_HOME:-$HOME/.config}/uzbl/config"
  echo '@on_event LOAD_FINISH spawn @scripts_dir/userscript.sh document-end'   >> "${XDG_CONFIG_HOME:-$HOME/.config}/uzbl/config"
  wget -P "${XDG_DATA_HOME:-$HOME/.local/share}/uzbl/userscripts" https://www.4chan-x.net/builds/4chan-X.user.js
  ```

- **qutebrowser**: Save the [script](https://www.4chan-x.net/builds/4chan-X.user.js) to the `$XDG_DATA_HOME/qutebrowser/greasemonkey` or `$HOME/.local/share/qutebrowser/greasemonkey` directory:

  ```
  wget -P ${XDG_DATA_HOME:-$HOME/.local/share}/qutebrowser/greasemonkey https://www.4chan-x.net/builds/4chan-X.user.js
  ```

### MS Edge
Install [Tampermonkey](https://www.microsoft.com/en-us/store/p/tampermonkey/9nblggh5162s), then **[click here to install 4chan X](https://www.4chan-x.net/builds/4chan-X.user.js)**.

### Other browsers
4chan X can be used in some browsers that do not support userscripts using [a local proxy](https://github.com/ccd0/4chan-x-proxy). Not all features will work.

## Beta version
New features and non-urgent bugfixes are released on the beta channel for further testing before they are moved the stable version. Please [report](https://github.com/ccd0/4chan-x/issues?q=is%3Aopen+sort%3Aupdated-desc) any issues you find, and be sure to mention which version you're using. You should back up your settings regularly to prevent them from being lost due to bugs.

To install the **beta** version and get updates whenever there's a new **beta** version:
- [Install userscript](https://www.4chan-x.net/builds/4chan-X-beta.user.js) (use with Greasemonkey / Violentmonkey / Tampermonkey / JS Blocker / etc.)
- [Download Chrome extension](https://www.4chan-x.net/builds/4chan-X-beta.crx) (download and drag to `chrome://extensions`)

To install the current **beta** version but get updates from the **stable** channel (for example, if just you want a particular recent feature):
- [Install userscript](https://github.com/ccd0/4chan-x/raw/beta/builds/4chan-X.user.js)
- [Download Chrome extension](https://github.com/ccd0/4chan-x/raw/beta/builds/4chan-X.crx)

## Troubleshooting
If you encounter a bug, try the steps [here](https://github.com/ccd0/4chan-x/blob/master/CONTRIBUTING.md#reporting-bugs), then report it to the [issue tracker](https://github.com/ccd0/4chan-x/issues?q=is%3Aopen+sort%3Aupdated-desc). If the bug seems to be caused by a script update, you can install a old version from the [changelog](https://github.com/ccd0/4chan-x/blob/master/CHANGELOG.md).

## More information
- [Changelog](https://github.com/ccd0/4chan-x/blob/master/CHANGELOG.md)
- [Frequently Asked Questions](https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions)
- [Report Bugs](https://github.com/ccd0/4chan-x/issues)
- [Contributing](https://github.com/ccd0/4chan-x/blob/master/CONTRIBUTING.md)

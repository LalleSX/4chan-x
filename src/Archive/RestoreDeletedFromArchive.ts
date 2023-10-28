import Redirect from './Redirect';
import Notice from '../classes/Notice';
import { Conf, g } from '../globals/globals';
import CrossOrigin from '../platform/CrossOrigin';
import $ from '../platform/$';
import Header from '../General/Header';
import { type RawArchivePost, parseArchivePost } from './Parse';
import QuoteThreading from '../Quotelinks/QuoteThreading';

const RestoreDeletedFromArchive = {
  restore() {
    const url = Redirect.to('threadJSON', { boardID: g.boardID, threadID: g.threadID });
    if (!url) {
      new Notice('warning', 'No archive found', 3);
      return;
    }
    const encryptionOK = url.startsWith('https://');
    if (encryptionOK || Conf['Exempt Archives from Encryption']) {
      CrossOrigin.cache(url, function (this: XMLHttpRequest) {
        let nrRestored = 0;
        const archivePosts = this.response[g.threadID.toString()].posts as Record<string, RawArchivePost>;
        for (const [postID, raw] of Object.entries(archivePosts)) {
          const key = `${g.boardID}.${postID}`
          if (!g.posts.keys.includes(key)) {
            const postIdNr = +postID;
            let indexOfNext = g.posts.keys.findIndex(key => +(key.split('.')[1]) > postIdNr);
            if (indexOfNext === -1) {
              indexOfNext = g.posts.keys.length;
            };
            const newPost = parseArchivePost(raw);
            newPost.kill()
            g.posts.push(key, newPost);
            // move key to right position
            g.posts.keys.pop();
            g.posts.keys.splice(indexOfNext, 0, key);

            if (!QuoteThreading.insert(newPost)) {
              g.posts.get(g.posts.keys[indexOfNext - 1]).root.insertAdjacentElement('afterend', newPost.root);
            }

            ++nrRestored;
          }
        }

        let msg: string;
        if (nrRestored === 0) {
          msg = 'No removed posts found';
        } else if (nrRestored === 1) {
          msg = '1 post restored';
        } else {
          msg = `${nrRestored} posts restored`;
        }

        new Notice('info', msg, 3);
      });
    }
  },

  init() {
    if (g.VIEW !== 'thread') return;

    const menuEntry = $.el('a', {
      href: 'javascript:;',
      textContent: 'Restore from archive',
    });
    $.on(menuEntry, 'click', () => {
      RestoreDeletedFromArchive.restore();
      Header.menu.close();
    });
    Header.menu.addEntry({
      el: menuEntry,
      order: 10,
    });
  },
}

export default RestoreDeletedFromArchive;
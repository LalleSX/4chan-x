import { g, Conf } from '../globals/globals.js'
import ImageCommon from '../Images/ImageCommon.js'
import $ from '../platform/$.js'
import Menu from './Menu.js'

const DownloadLink = {
  init() {
    if (
      !['index', 'thread'].includes(g.VIEW) ||
      !Conf['Menu'] ||
      !Conf['Download Link']
    ) {
      return
    }

    const a = $.el('a', {
      className: 'download-link',
      textContent: 'Download file',
    } as Partial<HTMLAnchorElement>)

    // Specifying the filename with the download attribute only works for same-origin links.
    $.on(a, 'click', ImageCommon.download)

    return Menu.menu.addEntry({
      el: a,
      order: 100,
      open({ file }) {
        if (!file) {
          return false
        }
        a.href = file.url
        a.download = file.name
        return true
      },
    })
  },
}
export default DownloadLink

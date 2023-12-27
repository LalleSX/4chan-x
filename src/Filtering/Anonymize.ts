import { Conf, doc } from '../globals/globals.js'
import $ from '../platform/$.js'

const Anonymize = {
  init() {
    if (!Conf['Anonymize']) {
      return
    }
    return $.addClass(doc, 'anonymize')
  },
}
export default Anonymize

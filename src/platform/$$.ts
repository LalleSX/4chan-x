import { d } from '../globals/globals.js'

const $$ = (selector, root = d.body) =>
  Array.from(root.querySelectorAll(selector))
export default $$

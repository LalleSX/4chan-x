import { EscapedHtml } from '../globals/jsx.js'

declare namespace JSX {
  interface IntrinsicElements extends Record<string, unknown> {}
  interface Element extends EscapedHtml {}
}

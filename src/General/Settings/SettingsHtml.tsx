import { g, meta } from '../../globals/globals.js'
import h from '../../globals/jsx.js'

// \u00A0 is non breaking space
const separator = '\u00A0|\u00A0'

const settingsHtml = (
  <div id="fourchanx-settings" class="dialog">
    <nav>
      <div class="sections-list"></div>
      <p class="imp-exp-result warning"></p>
      <div class="credits">
        <a class="export">Export</a>
        {separator}
        <a class="import">Import</a>
        {separator}
        <a class="reset">Reset Settings</a>
        {separator}
        <input type="file" hidden />
        <a href={meta.page} target="_blank">
          {meta.name}
        </a>
        {separator}
        <a href={meta.changelog} target="_blank">
          {g.VERSION}
        </a>
        {separator}
        <a href={meta.issues} target="_blank">
          Issues
        </a>
        {separator}
        <a href="javascript:;" class="close" title="Close">
          ✕
        </a>
      </div>
    </nav>
    <div class="section-container">
      <section></section>
    </div>
  </div>
)

export default settingsHtml

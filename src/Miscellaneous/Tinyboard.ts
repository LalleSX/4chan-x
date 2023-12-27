import { g } from '../globals/globals.js'
import Main from '../main/Main.js'
import $ from '../platform/$.js'

const Tinyboard = {
  init() {
    if (g.SITE.software !== 'tinyboard') {
      return
    }
    if (g.VIEW === 'thread') {
      return Main.ready(() =>
        $.global(
          function () {
            let base
            let { boardID, threadID } = document.currentScript.dataset
            threadID = +threadID
            const form = document.querySelector('form[name="post"]')
            window
              .$(document)
              .ajaxComplete(function (event, request, settings) {
                let postID
                if (settings.url !== form.action) {
                  return
                }
                if (!(postID = +request.responseJSON?.id)) {
                  return
                }
                const detail = { boardID, threadID, postID }
                try {
                  const { redirect, noko } = request.responseJSON
                  if (
                    redirect &&
                    originalNoko != null &&
                    !originalNoko &&
                    !noko
                  ) {
                    detail.redirect = redirect
                  }
                } catch (error) {}
                event = new CustomEvent('QRPostSuccessful', {
                  bubbles: true,
                  detail,
                })
                return document.dispatchEvent(event)
              })
            const originalNoko = window.tb_settings?.ajax?.always_noko_replies
            return ((
              (base = window.tb_settings || (window.tb_settings = {})).ajax ||
              (base.ajax = {})
            ).always_noko_replies = true)
          },
          { boardID: g.BOARD.ID, threadID: g.THREADID }
        )
      )
    }
  },
}
export default Tinyboard

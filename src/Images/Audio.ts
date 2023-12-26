const Audio = {
  /** Add event listeners for videos with audio from a third party */
  setupSync(video: HTMLVideoElement, audio: HTMLAudioElement) {
    video.addEventListener('playing', () => {
      audio.currentTime = video.currentTime
      audio.play()
    })

    video.addEventListener('pause', () => {
      audio.pause()
    })

    video.addEventListener('seeked', () => {
      audio.currentTime = video.currentTime
    })

    video.addEventListener('ratechange', () => {
      audio.currentTime = video.currentTime
      audio.playbackRate = video.playbackRate
    })

    video.addEventListener('waiting', () => {
      audio.currentTime = video.currentTime
      audio.pause()
    })

    audio.addEventListener(
      'canplay',
      () => {
        if (audio.currentTime < 0.1) {
          video.currentTime = 0
        }
      },
      { once: true }
    )
  },

  setupAudioSlider(
    video: HTMLVideoElement,
    audio: HTMLAudioElement
  ): HTMLSpanElement {
    const container = document.createElement('span')

    // \u00A0 is non breaking space
    container.appendChild(document.createTextNode('🔊︎\u00A0'))

    const control = document.createElement('input')
    control.type = 'range'
    control.max = '1'
    control.step = '0.01'
    control.valueAsNumber = audio.volume
    control.addEventListener('input', () => {
      audio.volume = control.valueAsNumber
    })
    container.appendChild(control)

    const downloadLink = document.createElement('a')
    downloadLink.href = audio.src
    downloadLink.download = ''
    downloadLink.target = '_blank'
    downloadLink.textContent = '\u00A0📥︎'
    container.appendChild(downloadLink)

    return container
  },
}
export default Audio

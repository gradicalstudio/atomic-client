/* eslint-disable */

const styles = [
  {
    type: 'href',
    body: 'C:\\css\\normalize.css',
  },
  {
    type: 'href',
    body: 'C:\\css\\webflow.css',
  },
  {
    type: 'href',
    body: 'C:\\css\\atomic-d10870.webflow.css',
  },
  {
    type: 'sheet',
    body: '@media (min-width:992px){.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="Div Block 46"]{display:flex;-webkit-transform:translate3d(0,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(0,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(0,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(0,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="Div Block"]{-webkit-transform:translate3d(100%,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-moz-transform:translate3d(100%,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);-ms-transform:translate3d(100%,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0);transform:translate3d(100%,0,0) scale3d(1,1,1) rotateX(0) rotateY(0) rotateZ(0) skew(0,0)}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="TextBlock 5"]{color:#0f0e0c}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id=b484cb5e-26ef-bfdc-5554-c3090bc92c25]{display:none}.af-view.w-mod-js:not(.w-mod-ix) [data-w-id="87861ede-c820-cbd2-d8d7-563042229b64"]{display:block}}',
  },
]

const loadingStyles = styles.map((style) => {
  let styleEl
  let loading

  if (style.type == 'href') {
    styleEl = document.createElement('link')

    loading = new Promise((resolve, reject) => {
      styleEl.onload = resolve
      styleEl.onerror = reject
    })

    styleEl.rel = 'stylesheet'
    styleEl.type = 'text/css'
    styleEl.href = style.body
  }
  else {
    styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    styleEl.innerHTML = style.body

    loading = Promise.resolve()
  }

  document.head.appendChild(styleEl)

  return loading
})

export default Promise.all(loadingStyles).then(() => {
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => {
    return styleSheet.href && styles.some((style) => {
      return style.type == 'href' && styleSheet.href.match(style.body)
    })
  })
  styleSheets.forEach((styleSheet) => {
    Array.from(styleSheet.rules).forEach((rule) => {
      if (rule.selectorText) {
        rule.selectorText = rule.selectorText
          .replace(/\.([\w_-]+)/g, '.af-class-$1')
          .replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g, '[class$1="$2af-class-$3$4"]')
          .replace(/([^\s][^,]*)(\s*,?)/g, '.af-view $1$2')
          .replace(/\.af-view html/g, '.af-view')
          .replace(/\.af-view body/g, '.af-view')
          .replace(/af-class-w-/g, 'w-')
          .replace(/af-class-anima-/g, 'anima-')
          .replace(/af-class-([\w_-]+)an-animation([\w_-]+)/g, '$1an-animation$2')
      }
    })
  })
})

/* eslint-enable */
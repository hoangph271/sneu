/** @jsx h */
import { h, useEffect } from '$fresh/runtime.ts'
import { setup } from 'https://esm.sh/twind@0.16.16'
import { getStyleTag, virtualSheet } from 'https://esm.sh/twind@0.16.16/sheets'

const sheet = virtualSheet()

setup({
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      serif: ['Times', 'serif'],
    },
  },
  sheet,
})

const InitStyles = () => {
  useEffect(() => {
    const divEl = document.createElement('div')
    divEl.innerHTML += `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        body {
          --main-background: #86efac;
          background-color: var(--main-background);
        }
      </style>
      ${getStyleTag(sheet)}
    `

    document.querySelector('body')!.appendChild(divEl)
    document.head.innerHTML += `<link rel="shortcut icon" href="/logo.svg" type="image/x-icon">`
    document.title = '#Snêu'
  }, [])

  return (
    <div style={{ display: 'none' }} />
  )
}

export default InitStyles

/** @jsx h */
import { h } from '$fresh/runtime.ts'
import Counter from '../islands/Counter.tsx'
import InitStyles from '../islands/InitStyles.tsx'

const Home = () => {
  return (
    <div style="display: flex; flex-direction: column; align-items: center;">
      <a href="/about">About</a>
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <InitStyles />
    </div>
  )
}

export default Home

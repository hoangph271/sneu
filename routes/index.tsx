/** @jsx h */
import { h } from '$fresh/runtime.ts'
import Counter from '../islands/Counter.tsx'
import LemonDrop from '../islands/LemonDrop.tsx'
import InitStyles from '../islands/InitStyles.tsx'

const Home = () => {
  return (
    <div style="display: flex; flex-direction: column; align-items: center;">
      <a href="/about">About</a>
      <LemonDrop />
      <Counter start={3} />
      <InitStyles />
    </div>
  )
}

export default Home

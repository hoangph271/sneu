/** @jsx h */
import { h } from '$fresh/runtime.ts'
import Clock from '../islands/Clock.tsx'
import InitStyles from '../islands/InitStyles.tsx'

const Home = () => {
  return (
    <div style="display: flex; flex-direction: column; align-items: center;">
      <Clock />
      <InitStyles />
    </div>
  )
}

export default Home

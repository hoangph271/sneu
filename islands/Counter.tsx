/** @jsx h */
import { h, IS_BROWSER, useState } from '$fresh/runtime.ts'

interface CounterProps {
  start: number
}

export default function Counter ({ start }: CounterProps) {
  const [count, setCount] = useState(start)

  return (
    <div style="display: flex; flex-direction: column; align-items: center;">
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>
          -1
        </button>
        <button onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>
          +1
        </button>
      </div>
    </div>
  )
}

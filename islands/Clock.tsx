/** @jsx h */
import { h, IS_BROWSER, useState } from '$fresh/runtime.ts'

const padTime = (time: number) => time.toString().padStart(2, '0')

export default function Counter () {
  const [now] = useState(new Date())
  // TODO: Update `now`

  return (
    <div style="display: flex; flex-direction: column; align-items: center;">
      {padTime(now.getHours())}
      -
      {padTime(now.getMinutes())}
      -
      {padTime(now.getSeconds())}
    </div>
  )
}

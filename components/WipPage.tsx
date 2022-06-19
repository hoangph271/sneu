/** @jsx h */
import { h, FunctionComponent } from '$fresh/runtime.ts'
import { tw } from "https://esm.sh/v86/twind@0.16.16/twind";
import InitStyles from "../islands/InitStyles.tsx";
import LemonDrop from '../islands/LemonDrop.tsx'

export const WipPage: FunctionComponent = ({ children }) => {
  return (
    <main
      class={tw`flex flex-column items-center justify-center`}
      style={{ minHeight: '100vh' }}
    >
      <InitStyles />
      <LemonDrop />
      {children ?? (
        <div>
          Click <a href="/">here</a> to get home...!
        </div>
      )}
    </main>
  )
}
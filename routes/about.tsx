/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from '$fresh/runtime.ts'
import { Handlers } from '$fresh/server.ts'
import InitStyles from "../islands/InitStyles.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
}

const AboutPage = () => {
  return (
    <>
      <InitStyles />
      <main>
        <h1>About</h1>
        <p>Snêu - my next personal web site...!</p>
        <p>
          {`Long live the project, hope it will NOT die within next 02 weeks...! :"}`}
        </p>
      </main>
    </>
  )
}


export default AboutPage

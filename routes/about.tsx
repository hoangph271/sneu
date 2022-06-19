/** @jsx h */
/** @jsxFrag Fragment */
import { h } from '$fresh/runtime.ts'
import { Handlers } from '$fresh/server.ts'
import { WipPage } from "../components/WipPage.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
}

const AboutPage = () => {
  return (
    <WipPage />
  )
}


export default AboutPage

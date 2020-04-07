import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Navbar from './navbar'

export default ({ children }) => {

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Navbar />
      {children}
    </div>
  )
}
import React from "react"
import { graphql } from 'gatsby'
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { VideoContainer } from './styles'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt}/>
      <h3>
        {post.frontmatter.title} {" "}
        <span css={css`
                    color: #bbb;
                    font-size: 16px;
                  `}
        >
          - {post.frontmatter.date}
        </span>
      </h3>
     
      <VideoContainer>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </VideoContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
    }
  }
`
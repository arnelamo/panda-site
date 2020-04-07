import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from '../components/seo'
import { VideoContainer } from './styles'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt}/>
      <h1>{post.frontmatter.title}</h1>
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
      }
      excerpt
    }
  }
`
import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      Dette er Sigrid og Pappas Pandaside. Vi liker Panadeer, og derfor må vi jo selvfølgelig ha en egen Pandaside.
      Alle som liker Pandaer kan komme hit. 

      Bortsett fra Lolot, fordi han synes det er skummelt å være på internett. 
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
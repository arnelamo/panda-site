import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>The 404 page</h1>
    <p>
      Ooops. Noe gikk galt. Har du tastet inn en manuell url?
      Klikk <Link to="/">her</Link> for å komme tilbake til siden igjen. 
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
import React from "react"
import { graphql } from "gatsby"

import HomePage from "./fr/index"

export const query = graphql`
  query {
    pictures: allFile(filter: { relativeDirectory: { eq: "pages/home" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ ...props }) => {
  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     window.location = "/fr/"
  //   }
  // }, [])

  return <HomePage {...props} />
}

export default IndexPage

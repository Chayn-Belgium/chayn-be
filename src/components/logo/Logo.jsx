import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { Image } from "../ui"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo-1.png" }) {
        childImageSharp {
          fixed(width: 125, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Link to="/" style={{ width: "125px", height: "60px" }}>
      <Image picture={data.logo.childImageSharp} objectFit="contain" />
    </Link>
  )
}

export default Logo

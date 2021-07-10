import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { LogoContainer, Text, ImageContainer } from "./style"
import { Image } from "../ui"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo.png" }) {
        childImageSharp {
          fixed(width: 125, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <LogoContainer as={Link} to="/fr/">
      <ImageContainer>
        <Image
          picture={data.logo.childImageSharp}
          objectFit="contain"
          alt="logo"
        />
      </ImageContainer>
      <Text>
        Chayn
        <br />
        beligum
      </Text>
    </LogoContainer>
  )
}

export default Logo

import React from "react"
import { Helmet } from "react-helmet"

import SchemaOrg from "./schema-org"

// const author = "Kevin Tassi"
const websiteName = "Chayn Belgium"
const baseUrl = "https://chayn.be"
const title = `Lutte contre les violences faites aux femmes | ${websiteName}`
const description =
  "Chayn belgium est une collective qui lutte contre les violences faites aux femmes grâce aux technologies ouvertes"
const facebookAppID = ""
const ogImage =
  "https://user-images.githubusercontent.com/39580007/106380780-c7116080-63b4-11eb-9b52-94b78b0d4ca5.png"

const Head = () => {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta
          content="width=device-width, initial-scale=1, user-scalable=yes"
          name="viewport"
        />
        <meta
          content="web, websites, sites, app, apps, HTML, CSS, JavaScript"
          name="keywords"
        />
        <meta content={description} name="description" />
        <meta name="author" content="Screen Side" />

        {/* Links */}
        <link href={baseUrl} rel="canonical" />
        <link rel="alternate" href={baseUrl} hreflang="x-default" />
        <link rel="alternate" href={baseUrl} hreflang="en" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />

        {/* OpenGraph tags */}
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="fb:app_id" content={facebookAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={websiteName} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <SchemaOrg url={baseUrl} title={title} />
    </>
  )
}

export default Head

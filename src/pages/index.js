import React, { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.location = "/fr/"
    }
  }, [])

  return null
}

export default IndexPage

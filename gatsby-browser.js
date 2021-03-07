exports.shouldUpdateScroll = ({ routerProps }) => {
  const isHash = routerProps.location.hash
  const gatsbyWrapper = document.getElementById("gatsby-focus-wrapper")
  /* Do not scroll top if the route contain a hash */
  gatsbyWrapper && !isHash && (gatsbyWrapper.scrollTop = 0)

  return isHash && isHash.replace("#", "")
}

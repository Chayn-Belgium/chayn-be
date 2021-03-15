exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/fr",
    statusCode: 301,
    redirectInBrowser: true,
  })
}

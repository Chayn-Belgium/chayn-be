export const getImage = (imageName, pictures) => {
  let picture = pictures.find(pic => {
    return pic.fluid.originalName === imageName
  })

  if (imageName?.includes(".gif")) {
    picture = imageName
  }

  return picture
}

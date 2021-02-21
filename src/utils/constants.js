export const COLOR = {
  AMARANTH: "#ee3250",
  BITTERSWEET: "#fc7373",
  BIZARRE: "#EEDAD6",
  CAPE_COD: "#3B3F40",
  SEASHELL: "#F2F1F1",
  WHITE_LINEN: "#F4E5DA",
}

export const BREAKPOINT = {
  XL: "1280px",
  L: "1024px",
  M: "768px",
  S: "498px",
}

export const MEDIA_QUERY = {
  DESKTOP: `only screen and (min-width: ${BREAKPOINT.XL})`,
  SMALL_DESKTOP_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.XL})`,
  TABLET_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.M})`,
  MOBILE_AND_DOWN: `only screen and (max-width: ${BREAKPOINT.S})`,
}

export const FONT = {
  NUNITO_SANS: "'Nunito Sans', sans-serif",
  OSWALD: "'Oswald', sans-serif",
}

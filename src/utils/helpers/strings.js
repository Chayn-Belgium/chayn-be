import slugifyFunction from "slugify"

export const capitalize = text =>
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export const slugify = string =>
  slugifyFunction(string, {
    replacement: "-",
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  })

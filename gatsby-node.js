"use strict"

const path = require("path")

const data = require("./site-data")

exports.createPages = ({ actions: { createPage } }) => {
  data.pages.forEach(page => {
    const languages = Object.keys(page.urls)

    languages.forEach(lang => {
      const pagePath = `${page.urls[lang]}`
      const pageTemplate = page.template

      createPage({
        path: pagePath,
        component: path.resolve(`./src/templates/${pageTemplate}.js`),
        context: {
          footer: data.footer[lang],
          lang,
          langs: page.langs,
          nav: data.nav[lang],
          sections: page.sections.filter(section => section.lang === lang),
        },
      })

      console.log("Page created —— ", pagePath)
    })
  })
}

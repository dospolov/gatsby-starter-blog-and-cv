const path = require('path')
const createCategoriesPages = require('./pagination/create-categories-pages.js')
const createTagsPages = require('./pagination/create-tags-pages.js')
const createPostsPages = require('./pagination/create-posts-pages.js')
const { getAllCategories } = require('./constants/categories')

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const allCategories = await getAllCategories(graphql)

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  })

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
    context: { allCategories }
  })

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js'),
    context: { allCategories }
  })

  createPage({
    path: '/cv',
    component: path.resolve('./src/templates/cv-template.js')
  })

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark

  edges.map(edge => {
    if (
      edge &&
      edge.node &&
      edge.node.frontmatter &&
      edge.node.frontmatter.template &&
      edge.node.frontmatter.template === 'page'
    ) {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: { slug: edge.node.fields.slug, allCategories }
      })
    } else if (
      edge &&
      edge.node &&
      edge.node.frontmatter &&
      edge.node.frontmatter.template &&
      edge.node.frontmatter.template === 'post'
    ) {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post-template.js'),
        context: { slug: edge.node.fields.slug, allCategories }
      })
    }
    return null
  })

  // Feeds
  await createTagsPages(graphql, actions)
  await createCategoriesPages(graphql, actions)
  await createPostsPages(graphql, actions)
}

module.exports = createPages

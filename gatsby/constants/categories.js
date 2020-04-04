const CATEGORY_COLORS = [
  'pink-600',
  'green-600',
  'indigo-600',
  'blue-600',
  'yellow-600',
  'red-600',
  'purple-600',
  'teal-600',
  'orange-600',

  'pink-300',
  'green-300',
  'indigo-300',
  'blue-300',
  'yellow-300',
  'red-300',
  'purple-300',
  'teal-300',
  'orange-300',

  'pink-900',
  'green-900',
  'indigo-900',
  'blue-900',
  'yellow-900',
  'red-900',
  'purple-900',
  'teal-900',
  'orange-900'
]
const CATEGORY_COLOR_EXTRA = 'gray-800'

module.exports = {
  CATEGORY_COLORS,
  CATEGORY_COLOR_EXTRA,
  getAllCategories: async graphql => {
    const {
      data: {
        allMarkdownRemark: { group }
      }
    } = await graphql(`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return group.map((cat, i) => ({
      ...cat,
      categoryColor: CATEGORY_COLORS[i] || CATEGORY_COLOR_EXTRA
    }))
  }
}

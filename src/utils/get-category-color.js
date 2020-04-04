const getCategoryColor = ({ allCategories, category }) =>
  allCategories.find(cat => cat.fieldValue === category).categoryColor

export default getCategoryColor

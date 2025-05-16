const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (total, element) => total + element.likes

  return blogs.length === 0
  ? 0
  : blogs.reduce(reducer,0)
}

const favoriteBlog = (blogs) => {
  const reducer = (a, b) => a.likes < b.likes ? b : a

  return blogs.length === 0
  ? 0
  : blogs.reduce(reducer)
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
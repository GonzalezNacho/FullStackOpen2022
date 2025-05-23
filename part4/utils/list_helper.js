const _ = require('lodash')

const dummy = (blogs) => 1

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

const mostBlogs = (blogs) => {
  const blogsAuthor = _.countBy(blogs, 'author')
  const author = _.maxBy(Object.keys(blogsAuthor), aut => blogsAuthor[aut])
  return blogs.length === 0
    ? 0
    : {author: author, blogs: blogsAuthor[author]}
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog, 
  mostBlogs
}

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

const mostLikes = (blogs) => {
  const blogsAuthor = _.groupBy(blogs, 'author')
  const likesByAuthor = _.mapValues(blogsAuthor, blogs => _.sumBy(blogs, 'likes'))
  const author = _.maxBy(_.keys(likesByAuthor), author => likesByAuthor[author])
  return blogs.length === 0
    ? 0
    : {author: author, likes: likesByAuthor[author]}
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog, 
  mostBlogs,
  mostLikes
}

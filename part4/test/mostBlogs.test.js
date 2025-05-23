const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('most Blog', () => {
  const listWithOneBlog = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5
    }
  ]

  const blogs = [
    {
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      likes: 0
    },
    {
      title: "React patterns",
      author: "Michael Chan",
      likes: 7
    },
    {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5
    },
    {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12
    },
    {
      title: "First class tests",
      author: "Robert C. Martin",
      likes: 10
    },
    {
      title: "Type wars",
      author: "Robert C. Martin",
      likes: 2
    }
  ]

  test('of empty list is zero', () => {
    assert.deepStrictEqual(listHelper.mostBlogs([]), 0)
  })

  test('when list has only one blog returns that blog', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      blogs: 1
    })
  })

  test('of a bigger list a calculated rigth', () => {
    const result = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(result, {
      author: "Robert C. Martin",
      blogs: 3
    })
  })
})
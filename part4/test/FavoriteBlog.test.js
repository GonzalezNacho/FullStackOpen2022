const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

describe('favorite Blog', () => {
  const listWithOneBlog = [
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5
    }
  ]

  const blogs = [
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
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      likes: 0
    },
    {
      title: "Type wars",
      author: "Robert C. Martin",
      likes: 2
    }
  ]

  test('of empty list is zero', () => {
    assert.deepStrictEqual(listHelper.favoriteBlog([]), 0)
  })

  test('when list has only one blog returns that blog', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    assert.deepStrictEqual(result, listWithOneBlog[0])
  })

  test('of a bigger list a calculated rigth', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, blogs[2])
  })
})
const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {
  let data = {
    news:[]
  }

  for(i = 0; i<5; i++) {
    data.news.push({
      id: i,
      title: Random.ctitle(5, 10),
      // content: Random.cparagraph(1, 5),
      // date: Random.date()
    })
  }
  return data
}
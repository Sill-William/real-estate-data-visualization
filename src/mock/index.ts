import Mock from 'mockjs'

export default [
  {
    url: '/report',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'data|5-20': [
          {
            'id|36': '',
            'title': '@title()',
            'date': '@date'
          }
        ]
      }
    }
  },
  {
    url: '/data-count',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'data': ['@natural(200000, 1000000)']
      }
    }
  }
]

// export default [
//   Mock.mock("/report", "get", {
//     "code": 200,
//     "msg": "ok",
//     "data": "hhh"
//   }),
// ]


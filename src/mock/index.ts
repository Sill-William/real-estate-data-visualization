import Mock from 'mockjs'

function mockLat() {
  return Mock.Random.float(39, 51, 4)
}

function mockLng() {
  return Mock.Random.float(116, 132, 4)
}


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
  },
  {
    url: '/thermalmap/housing-resource',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'data|1000-10000': [
          {
            'lat': '@float(39, 51, 4)',
            'lng': '@float(116, 132, 4)',
            'count': '@natural(1, 1000)'
          }
        ]
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


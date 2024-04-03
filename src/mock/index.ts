import Mock from 'mockjs'

export default [
  {
    url: '/report',
    method: 'get',
    response: () => {
      return {
        'code': 200,
        'data': [
          {
            'type': '出租',
            'year': {
              '2024': [
                {
                  'month': '1',
                },
                {
                  'month': '2',
                },
                {
                  'month': '3',
                }
              ],
              '2023': [
                {
                  'month': '1',
                },
                {
                  'month': '2',
                },
                {
                  'month': '3',
                },
                {
                  'month': '4',
                },
                {
                  'month': '5',
                },
                {
                  'month': '6',
                },
                {
                  'month': '7',
                },
                {
                  'month': '8',
                },
                {
                  'month': '9',
                },
                {
                  'month': '10',
                },
                {
                  'month': '11',
                },
                {
                  'month': '12',
                }
              ]
            }
          },
          {
            'type': '出售',
            'year': {
              '2024': [
                {
                  'month': '1',
                },
                {
                  'month': '2',
                },
                {
                  'month': '3',
                }
              ],
              '2023': [
                {
                  'month': '1',
                },
                {
                  'month': '2',
                },
                {
                  'month': '3',
                },
                {
                  'month': '4',
                },
                {
                  'month': '5',
                },
                {
                  'month': '6',
                },
                {
                  'month': '7',
                },
                {
                  'month': '8',
                },
                {
                  'month': '9',
                },
                {
                  'month': '10',
                },
                {
                  'month': '11',
                },
                {
                  'month': '12',
                }
              ]
            }
          },
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


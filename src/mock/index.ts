import Mock from 'mockjs'

export default [
  {
    url: '/report',
    method: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'ok',
        data: 'hhh'
      }
    }
  }
]
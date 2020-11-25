export class Http {
  static ajax (options) {
    return new Promise((resolve, reject) => {
      const newOptions = Object({
        url: '',
        method: 'get',
        dataType: 'json',
        async: true,
        data: null,
        headers: {},
        timeout: 10000
      })
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {

      })
    })
  }
}

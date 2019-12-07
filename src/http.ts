// import { Headers } from 'fetch-headers'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
import 'isomorphic-fetch'

// import { handleBlob, handleData } from './file-download'
// import 'url-search-params-polyfill'
// import 'whatwg-fetch'
// todo: explore possibility of automatic cancel on route change

const responseMap = new Map()

responseMap.set(401, { success: false })
responseMap.set(404, { success: false })
responseMap.set(500, { success: false })

export default class Http {
  private defaultOptions: object = {}
  private headers: object = {}
  private endpoint: string = ''
  private options: object = {}
  constructor(endpoint, headers, options) {
    this.endpoint = (endpoint || window.location.origin).replace(/\/$/, '')
    this.headers = new Headers({
      'Content-Type': 'application/json',
      ...headers,
    })
    this.defaultOptions = {
      headers: this.headers,
      mode: 'cors',
      cache: 'default',
      ...options,
    }
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
    this.del = this.del.bind(this)
    this.patch = this.patch.bind(this)
    this.put = this.put.bind(this)
    this.getCancelableOptions = this.getCancelableOptions.bind(this)
    // this.multipart = this.multipart.bind(this)
    // this.handleErr = this.handleErr.bind(this)
    this.composeFetch = this.composeFetch.bind(this)
  }

  // static fails
  static checkResponse(res) {
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return res
  }

  composeFetch(url, mergedOptions) {
    return async () => {
      const data = await fetch(`${this.endpoint}${url}`, mergedOptions)
      Http.checkResponse(data)
      const decodedJson = await Http.handleJson(data)
      return {
        data: decodedJson,
        raw: data,
      }
    }
  }

  composeMethod(url, mergedOptions, controller) {
    const result = this.composeFetch(url, mergedOptions)
    return {
      exec: result,
      controller,
    }
  }

  getConfiguration() {
    const { endpoint, headers, defaultOptions } = this
    return {
      endpoint, headers, defaultOptions,
    }
  }

  static handleErr(err) {
    return Promise.reject(err)
  }

  // static fails
  static async handleJson(data) {
    try {
      return data.json()
    } catch (e) {
      throw new Error('cannot decode JSON from fetch response.')
    }
  }

  getCancelableOptions(options) {
    const controller = new AbortController()
    const { signal } = controller
    const mergedOptions = this.mergeOptions(Object.assign({}, options, { signal }))
    return {
      mergedOptions,
      controller,
    }
  }

  mergeOptions(additionalObject) {
    return Object.assign({}, this.defaultOptions, additionalObject)
  }

  get(url, options) {
    const { mergedOptions, controller } = this.getCancelableOptions({ method: 'GET', ...options })
    return this.composeMethod(url, mergedOptions, controller)
  }

  post(url, body, options) {
    const { mergedOptions, controller } = this.getCancelableOptions(
      { method: 'POST', body: JSON.stringify(body), ...options },
    )
    return this.composeMethod(url, mergedOptions, controller)
  }

  patch(url, body, options) {
    const { mergedOptions, controller } = this.getCancelableOptions(
      { method: 'PATCH', body: JSON.stringify(body), ...options },
    )
    return this.composeMethod(url, mergedOptions, controller)
  }

  put(url, body, options) {
    const { mergedOptions, controller } = this.getCancelableOptions(
      { method: 'PUT', body: JSON.stringify(body), ...options },
    )
    return this.composeMethod(url, mergedOptions, controller)
  }

  del(url, options) {
    const { mergedOptions, controller } = this.getCancelableOptions({ method: 'DELETE', ...options })
    return this.composeMethod(url, mergedOptions, controller)
  }

  // multipart(url, obj, file) {
  //   const body = getMultipart(obj, file)
  //   const { mergedOptions, controller } = this.getCancelableOptions(
  //     { method: 'POST', body, ...options },
  //   )
  //   return this.composeMethod(url, mergedOptions, controller)
  // }

  // download(url, body, options) {
  //   const { mergedOptions, controller } = this.getCancelableOptions(options)
  //   const result = fetch(`${this.endpoint}url`, mergedOptions)
  //     .then(handleData)
  //     .then(handleBlob)
  //   return {
  //     exec: result.then(this.handleJson),
  //     controller,
  //   }
  // }
}

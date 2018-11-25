import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
// import { Headers } from 'fetch-headers';
import 'isomorphic-fetch';
import { handleBlob, handleData } from "./file-download";

// import 'url-search-params-polyfill';
// import 'whatwg-fetch';

export default class Http {
  constructor(endpoint, headers, options) {
    this.endpoint = endpoint || window.location.hostname;
    this.headers = new Headers(
      { 'Content-Type': 'application/json', ...headers }
    );
    this.defaultOptions = {
      headers: this.headers,
      mode: 'cors',
      cache: 'default',
      ...options
    };
    this.getCancelableOptions = this.getCancelableOptions.bind(this);
    this.handleErr = this.handleErr.bind(this);
  }

  static checkResponse(res) {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  }

  getConfiguration() {
    const { endpoint, headers, defaultOptions } = this;
    return {
      endpoint, headers, defaultOptions
    };
  }

  handleErr(err) {
    return Promise.reject();
    // handle error
  }

  getCancelableOptions(options) {
    const controller = new AbortController();
    const { signal } = controller;
    const mergedOptions = this.mergeOptions(Object.assign({}, options, { signal }));
    return {
      mergedOptions,
      controller
    };
  }

  mergeOptions(additionalObject) {
    return Object.assign({}, this.defaultOptions, additionalObject);
  }

  get(url, options) {
    const { mergedOptions, controller } = 
      this.getCancelableOptions({ method: 'GET', ...options });
    const result = fetch(`${this.endpoint}url`, mergedOptions);
    return {
      exec: result.then(response => response.json()),
      controller,
    };
  }

  post(url, body, options) {
    const { mergedOptions, controller } =
      this.getCancelableOptions(
        { method: 'POST', body: JSON.stringify(body), ...options });
    const result = fetch(`${this.endpoint}url`, mergedOptions);
    return {
      exec: result.then(response => response.json()),
      controller,
    };
  }

  patch(url, body, options) {
    const { mergedOptions, controller } =
      this.getCancelableOptions(
        { method: 'PATCH', body: JSON.stringify(body), ...options });
    const result = fetch(`${this.endpoint}url`, mergedOptions);
    return {
      exec: result.then(response => response.json()),
      controller,
    };
  }

  put(url, body, options) {
    const { mergedOptions, controller } =
      this.getCancelableOptions(
        { method: 'PUT', body: JSON.stringify(body), ...options });
    const result = fetch(`${this.endpoint}url`, mergedOptions);
    return {
      exec: result.then(response => response.json()),
      controller,
    };
  }

  del(url, options) {
    const { mergedOptions, controller } =
      this.getCancelableOptions({ method: 'DELETE', ...options });
    const result = fetch(`${this.endpoint}url`, mergedOptions);
    return {
      exec: result.then(response => response.json()),
      controller,
    };
  }

  multipart(url, obj, file) {
    const body = getMultipart(obj, file);
    const { mergedOptions, controller } = 
      this.getCancelableOptions(
        { method: 'POST', body, ...options });
    const result = fetch(`${this.endpoint}url`, mergedOptions);
    return {
      exec: result.then(response => response.json()),
      controller,
    };
  }

  download(url, body, options) {
    const { mergedOptions, controller } = 
      this.getCancelableOptions(options);
    const result =
      fetch(`${this.endpoint}url`, mergedOptions)
        .then(handleData)
        .then(handleBlob);
    return {
      exec: result.then(response => response.json()),
      controller,
    }; 
    
  }
}

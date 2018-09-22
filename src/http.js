import { AbortController } from 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import { Headers } from 'fetch-headers';
import { fetch } from 'whatwg-fetch';

export default class Http {
  constructor(endpoint) {
    this.endpoint = endpoint || window.location.hostname;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.defaultOptions = {
      headers: this.headers,
      mode: 'cors',
      cache: 'default',
    };
    this.wrapCancelable = this.wrapCancelable.bind(this);
  }

  static wrapCancelable(url, options) {
    const controller = new AbortController();
    const { signal } = controller;
    const mergedOptions = this.mergeOptions(Object.assign({}, options, { signal }));
    const result = fetch(url, mergedOptions);
    const cancel = () => controller.abort();
    return {
      result,
      cancel,
    };
  }

  mergeOptions(additionalObject) {
    return Object.assign({}, this.defaultOptions, additionalObject);
  }

  get(url, options) {
    const { result, cancel } = this.wrapCancelable(`${this.endpoint}url`, { method: 'GET', ...options });
    return {
      exec: result.then(response => response.json()),
      cancel,
    };
  }

  post(url, body, options) {
    const { result, cancel } = this.wrapCancelable(`${this.endpoint}url`, { method: 'POST', body: JSON.stringify(body), ...options });
    return {
      exec: result.then(response => response.json()),
      cancel,
    };
  }

  patch(url, body, options) {
    const { result, cancel } = this.wrapCancelable(`${this.endpoint}url`, { method: 'PATCH', body: JSON.stringify(body), ...options });
    return {
      exec: result.then(response => response.json()),
      cancel,
    };
  }

  put(url, body, options) {
    const { result, cancel } = this.wrapCancelable(`${this.endpoint}url`, { method: 'PUT', body: JSON.stringify(body), ...options });
    return {
      exec: result.then(response => response.json()),
      cancel,
    };
  }

  del(url, options) {
    const { result, cancel } = this.wrapCancelable(`${this.endpoint}url`, { method: 'DELETE', ...options });
    return {
      exec: result.then(response => response.json()),
      cancel,
    };
  }
}

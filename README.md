# simple-fetch
A lightweight wrapper for the Fetch API. Supports cancelable requests, configurable endpoints, interception, and logging.

## basic usage
```
import Http from 'simple-fetch';

const http = new Http(`https://www.foo.bar`);
http.get(`/baz?a=1`).then((data) => { console.log(data) });
http.post(`/baz`, { first: `Chris`, last: `Hill` }).then((data) => { conosle.log(data) });
```

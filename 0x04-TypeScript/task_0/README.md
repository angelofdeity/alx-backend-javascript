0x04-TypeScript
Possible error fix if u see something like this error
>   opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Replace ur build script in package.json with this
```
"scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "NODE_OPTIONS=--openssl-legacy-provider webpack",
    "test": "jest"
  }

# angular-localstorage

Provide read/write access to browsers' localStorage.

## Install

You can install this package either with `npm` or with `bower`.

### npm

```sh
$ npm install --save angular-localstorage
```

Then add `ngLocalStorage` as a dependency for your app:

```js
angular.module('myApp', [require('angular-localstorage')])
```

### bower

```sh
$ bower install --save angular-localstorage
```

Add a `<script>` to you `index.html`:

```html
<script src='/bower_components/angular-localstorage/angular-localstorage.js"></script>
```

Then add `ngLocalStorage` as a dependency for you app:

```js
angular.module('myApp', ['ngLocalStorage'])
```

## Documentation

### Services

#### $localStorage

##### Methods

###### get(key, [options])

Returns the value of given localStorage key

_Parameters_

| Param                | Type   | Details                                                                              |
|:---------------------|:-------|:-------------------------------------------------------------------------------------|
| key                  | string | Id to use for lookup.                                                                |
| options _(optional)_ | Object | Options object. See [$localStorageProvider.default](#$localStorageProvider.defaults) |

_Returns_

| Type   | Description             |
|:-------|:------------------------|
| string | Raw localStorage value. |

###### getObject(key, [options])

Returns the deserialized value of given localStorage key

_Parameters_

| Param                | Type   | Details                                                                              |
|:---------------------|:-------|:-------------------------------------------------------------------------------------|
| key                  | string | Id to use for lookup.                                                                |
| options _(optional)_ | Object | Options object. See [$localStorageProvider.default](#$localStorageProvider.defaults) |

_Returns_

| Type   | Description                      |
|:-------|:---------------------------------|
| Object | Deserialized localStorage value. |

###### getAll([options])

Returns a key value object with all localStorage entries

_Parameters_

| Param                | Type   | Details                                                                              |
|:---------------------|:-------|:-------------------------------------------------------------------------------------|
| options _(optional)_ | Object | Options object. See [$localStorageProvider.default](#$localStorageProvider.defaults) |

_Returns_

| Type   | Description               |
|:-------|:--------------------------|
| Object | All localStorage entries. |

###### put(key, value, [options])

Set a value for given localStorage key

_Parameters_

| Param                | Type   | Details                                                                               |
|:---------------------|:-------|:--------------------------------------------------------------------------------------|
| key                  | string | Id for the `value`.                                                                   |
| value                | string | Raw value to be stored.                                                               |
| options _(optional)_ | Object | Options object. See [$localStorageProvider.defaults](#$localStorageProvider.defaults) |

###### putObject(key)

Serializes and sets a value for a given localStorage key

_Parameters_

| Param                | Type   | Details                                                                              |
|:---------------------|:-------|:-------------------------------------------------------------------------------------|
| key                  | string | Id for the `value`.                                                                  |
| value                | Object | Value to be stored.                                                                  |
| options _(optional)_ | Object | Options object. See [$localStorageProvider.default](#$localStorageProvider.defaults) |

###### remove(key, [options])

Remove given localStorage entry

_Parameters_

| Param                | Type   | Details                                                                              |
|:---------------------|:-------|:-------------------------------------------------------------------------------------|
| key                  | string | Id of the key-value pair to delete.                                                  |
| options _(optional)_ | Object | Options object. See [$localStorageProvider.default](#$localStorageProvider.defaults) |

##### Example

```js
angular.module('localStorageExample', ['ngLocalStorage'])
.controller('ExampleController', ['$localStorage', function ($localStorage) {
  // Retrieve a value
  var favourite = $localStorage.get('myFavorite')
  // Setting a value
  $localStorage.put('myFavorite', 'oatmeal')
}])
```

### Provider

### $localStorageProvider

##### Properties

###### <a id="$localStorageProvider.defaults"></a>defaults

Object containing default options to pass when setting values in localStorage.

The object may have the following properties:

- **prefix** - `{string}` - This will be prepended to any key when reading 
  and writing values from the localStorage


## License

The MIT License (MIT)

Copyright (c) 2016 Jan Oetjen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

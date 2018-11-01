/**
 * @license ngLocalStorage
 * (c) 2016 Jan Oetjen <oetjenj@gmail.com>
 * License: MIT
 */
(function (window, angular, storage) {
  'use strict'

  /**
   * @ngdoc module
   * @name ngLocalStorage
   * @description
   *
   * # ngLocalStorage
   *
   * The `ngLocalStorage` module provides a convenient wrapper for reading and writing from and to the browsers'
   * localStorage.
   *
   * <div doc-module-components="ngLocalStorage"></div>
   *
   * See {@link ngLocalStorage.$localStorage `$localStorage`} for usage.
   */

  angular.module('ngLocalStorage', ['ng'])
  /**
   * @ngdoc provider
   * @name $localStorageProvider
   * @description
   * Use `$localStorageProvider` to change the default behavior of the
   * {@link ngLocalStorage.$localStorage $localStorage} service.
   */
  .provider('$localStorage', [function () {
    /**
     * @ngdoc property
     * @name $localStorageProvider#defaults
     * @description
     *
     * Object containing the default options to pass when setting values in the localStorage.
     *
     * The object may have the following properties:
     *
     * - **prefix** - `{string}` - This will be prepended to any key when reading and writing values from the
     *   localStorage
     */
    var defaults = this.defaults = {}

    /**
     * @ngdoc service
     * @name $localStorage
     *
     * @description
     * Provide read/write access to browsers' localStorage.
     *
     * @example
     * ```js
     * angular.module('localStorageExample', ['ngLocalStorage'])
     * .controller('ExampleController', ['$localStorage', function ($localStorage) {
     *   // Retrieve a value
     *   var favourite = $localStorage.get('myFavorite')
     *   // Setting a value
     *   $localStorage.put('myFavorite', 'oatmeal')
     * }])
     * ```
     */
    this.$get = [function () {
      return {
        /**
         * @ngdoc method
         * @name $localStorage#get
         *
         * @description
         * Returns the value of given localStorage key
         *
         * @param {string} key Id to use for lookup.
         * @param {Object} options Options object.
         *    See {@link ngLocalStorage.$localStorageProvider#defaults $localStorageProvider.defaults}
         *
         * @returns {string} Raw localStorage value.
         */
        get: function (key, options) {
          var opts = calcOptions(options)
          var keyName = [opts['prefix'], key].join('')

          return storage.getItem(keyName)
        },

        /**
         * @ngdoc method
         * @name $localStorage#getObject
         *
         * @description
         * Returns the deserialized value of given localStorage key
         *
         * @param {string} key Id to use for lookup.
         * @param {Object} options Options object.
         *    See {@link ngLocalStorage.$localStorageProvider#defaults $localStorageProvider.defaults}
         *
         * @returns {Object} Deserialized localStorage value.
         */
        getObject: function (key, options) {
          var keyValue = this.get(key, options)

          return keyValue ? angular.fromJson(keyValue) : keyValue
        },

        /**
         * @ngdoc method
         * @name $localStorage#getAll
         *
         * @description
         * Returns a key value object with all localStorage entries
         *
         * @param {Object} options Options object.
         *    See {@link ngLocalStorage.$localStorageProvider#defaults $localStorageProvider.defaults}
         *
         * @returns {Object} All localStorage entries.
         */
        getAll: function (options) {
          var opts = calcOptions(options)
          var prefix = new RegExp(['^', opts['prefix']].join(''))
          var all = {}
          var key

          for (var keyName in storage) {
            if (storage.hasOwnProperty(keyName) && prefix.test(keyName)) {
              key = keyName.replace(prefix, '')

              all[key] = this.getObject(key)
            }
          }

          return all
        },

        /**
         * @ngdoc method
         * @name $localStorage#put
         *
         * @description
         * Set a value for given localStorage key
         *
         * @param {string} key Id for the `value`.
         * @param {string} value Raw value to be stored.
         * @param {Object} options Options object.
         *    See {@link ngLocalStorage.$localStorageProvider#defaults $localStorageProvider.defaults}
         */
        put: function (key, value, options) {
          var opts = calcOptions(options)
          var keyName = [opts['prefix'], key].join('')

          storage.setItem(keyName, value)
        },

        /**
         * @ngdoc method
         * @name $localStorage#putObject
         *
         * @description
         * Serializes and sets a value for a given localStorage key
         *
         * @param {string} key Id for the `value`.
         * @param {Object} value Value to be stored.
         * @param {Object} options Options object.
         *    See {@link ngLocalStorage.$localStorageProvider#defaults $localStorageProvider.defaults}
         */
        putObject: function (key, value, options) {
          this.put(key, angular.toJson(value), options)
        },

        /**
         * @ngdoc method
         * @name $localStorage#remove
         *
         * @description
         * Remove given localStorage entry
         *
         * @param {string} key Id of the key-value pair to delete.
         * @param {Object} options Options object.
         *    See {@link ngLocalStorage.$localStorageProvider#defaults $localStorageProvider.defaults}
         */
        remove: function (key, options) {
          var opts = calcOptions(options)
          var keyName = [opts['prefix'], key].join('')

          storage.removeItem(keyName)
        },

        isEnabled: function () {
          return !storage.isMemoryStorage
        }
      }
    }]

    function calcOptions (options) {
      return options ? angular.extend({}, defaults, options) : defaults
    }
  }])
})(window, window.angular, (function () {
  'use strict'

  var TEST = 'SOME_TEST_KEY'
  var storage

  function MemoryStorage () {
    Object.defineProperty(this, 'length', {
      get: function () {
        return Object.keys(this).length
      }
    })
  }

  MemoryStorage.prototype = Object.create(Object.prototype)
  MemoryStorage.prototype.constructor = MemoryStorage

  MemoryStorage.prototype.getItem = function (keyName) {
    return this[keyName]
  }

  MemoryStorage.prototype.setItem = function (keyName, value) {
    this[keyName] = value
  }

  MemoryStorage.prototype.removeItem = function (keyName) {
    delete this[keyName]
  }

  MemoryStorage.prototype.isMemoryStorage = true

  try {
    storage = window.localStorage
  } catch (ex) {
    return new MemoryStorage()
  }

  if (typeof storage !== 'object') {
    return new MemoryStorage()
  }

  if (typeof storage.getItem !== 'function') {
    return new MemoryStorage()
  }

  if (typeof storage.setItem !== 'function') {
    return new MemoryStorage()
  }

  if (typeof storage.removeItem !== 'function') {
    return new MemoryStorage()
  }

  if (typeof storage.clear !== 'function') {
    return new MemoryStorage()
  }

  try {
    storage.setItem(TEST, TEST)

    if (storage.getItem(TEST) !== TEST) {
      storage.clear()
      storage.setItem(TEST, TEST)

      if (storage.getItem(TEST) !== TEST) {
        return new MemoryStorage()
      }
    }

    storage.removeItem(TEST)
  } catch (ex) {
    return new MemoryStorage()
  }

  return storage
})());

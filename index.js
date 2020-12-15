export * from './crypto/crypto'
export * from './cookie/cookie'
export * from './regular/regular'
export * from './storage/storage'

/**
 * 对象深拷贝（use JSON）
 * @param {Object | Array} obj Javascript对象
 * @returns {Object} 深拷贝后的对象引用
 */
export function deepCopyJSON (obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 对象深拷贝（递归式）
 * @param {Object | Array} obj Javascript对象
 * @returns {Object} 深拷贝后的对象引用
 */
export function deepCopy (obj) {
  const newObj = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = typeof obj[key] === 'object'
        ? deepCopy(obj[key])
        : obj[key]
    }
  }
  return newObj
}

/**
 * 获取GUID字符串
 * @returns {String} GUID字符串
 */
export function guid () {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

/**
 * 获取当前页面的根地址
 * @returns {String} 根地址字符串
 */
export function getRootPath () {
  let curPageUrl = window.document.location.href
  let temp = curPageUrl.split('//')
  let rootPath = temp[0] + '//' + temp[1].split('/')[0] + '/' + temp[1].split('/')[1]
  return rootPath
}

/**
 * 获取指定范围随机数
 * @param {Number} minValue 最小值
 * @param {Number} maxValue 最大值
 * @returns {Number} 指定范围的随机数
 */
export function randomRange (minValue, maxValue) {
  return minValue + Math.round(Math.random() * (maxValue - minValue))
}

export function getGeoLocation (options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success, error, Object.assign({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }, options))
    function success (position) {
      const { longitude, latitude } = position.coords
      resolve({
        lon: longitude,
        lat: latitude,
        detial: position
      })
    }
    function error (err) {
      reject(err)
    }
  })
}

export function watchGeoLocation (success, error, options) {
  const watchId = navigator.geolocation.watchPosition(position => {
    if (typeof success === 'function') {
      success({
        lon: position.coords.longitude,
        lat: position.coords.latitude,
        detail: position
      })
    }
  }, err => {
    if (typeof error === 'function') {
      error(err)
    }
  }, Object.assign({
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }, options))
  return {
    remove () {
      navigator.geolocation.clearWatch(watchId)
    }
  }
}

export function isFromMobileBrowser () {
  return !!navigator
    .userAgent
    .match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

export function deepExtent () {
  let options, name, src, copy, copyIsArray, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target
    target = arguments[1] || {}
    // skip the boolean and the target
    i = 2
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && typeof target !== 'function') {
    target = {}
  }

  // extend jQuery itself if only one argument is passed
  if (length === i) {
    target = this
    --i
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments[i]) !== null) {
      // Extend the base object
      for (name in options) {
        src = target[name]
        copy = options[name]
        // Prevent never-ending loop
        if (target === copy) {
          continue
        }
        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }
          // Never move original objects, clone them
          target[name] = deepExtent( deep, clone, copy )
          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  // Return the modified object
  return target

  function isPlainObject (obj) {
    let class2type = {}
    let getProto = Object.getPrototypeOf
    let toString = class2type.toString
    let hasOwn = class2type.hasOwnProperty
    let fnToString = hasOwn.toString
    let ObjectFunctionString = fnToString.call(Object)
    let proto, Ctor
    if (!obj || toString.call(obj) !== '[object Object]') {
      return false
    }
    proto = getProto(obj)
    if (!proto) {
      return true
    }
    Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
    return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
  }
}


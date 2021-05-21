(function (root) {
  var jQuery = function () {
    return new jQuery.prototype.init()
  }

  jQuery.fn = jQuery.prototype = {
    init: function () {},
    css: function () {}
  }

  jQuery.fn.extend = jQuery.extend = function () {
    var target = arguments[0] || {}
    var length = arguments.length
    var i = 1
    var deep = false
    var options = null, name, copy, src, isCopyArray, clone

    if (typeof target == 'boolean') {
      deep = target
      target = arguments[1]
      i = 2
    }

    if (typeof target !== 'object') {
      target = {}
    }

    if (length === i) {
      target = this
      i--
    }

    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          copy = options[name]
          src = target[name]
          if (deep && (jQuery.isPlainObject(copy) || (isCopyArray = jQuery.isArray(copy)))) {
            if (isCopyArray) {
              clone = src && jQuery.isArray(src) ? src : []
              isCopyArray = false
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {}
            }
            target[name] = jQuery.extend(deep, clone, copy)
          } else if (copy != undefined) {
            target[name] = copy
          }
        }
      }
    }

    return target
  }

  jQuery.fn.init.prototype = jQuery.fn
  jQuery.extend({
    isPlainObject: function (value) {
      return window.toString.call(value) === '[object Object]'
    },
    isArray: function (value) {
      return window.toString.call(value) === '[object Array]'
    }
  })

  root.$ = root.jQuery = jQuery
})(this)

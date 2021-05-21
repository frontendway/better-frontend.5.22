// once memory

(function (root) {
  var optionsCache = {}

  var _ = {
    callbacks: function (options) {
      options = typeof options === 'string' ? (optionsCache[options] || createOptions(options)) : {}
      let list = [],
        index,
        length,
        testting,
        memory,
        start,
        starts

      function fire (data) {
        memory = options.memory && data
        testting = true
        index = starts || 0
        start = 0
        length = list.length
        for (; index < length; index++) {
          if (list[index].apply(data[0], data[1]) === false && options.stopOnfalse) {
            break
          }
        }
      }

      var self = {
        add (...args) {
          start = list.length
          args.forEach(arg => {
            if (typeof arg === 'function') {
              list.push(arg)
            }
          })
          if (memory) {
            starts = start
            fire(memory)
          }
        },
        fireWith (ctx, args) {
          if (!options.once || !testting) {
            fire([ctx, args])
          }
        },
        fire () {
          self.fireWith(this, arguments)
        }
      }

      return self
    }
  }

  function createOptions (options) {
    var obj = optionsCache[options] = {}
    options.split(/\s+/).forEach(value => {
      obj[value] = true
    })

    return obj
  }

  root._ = _
})(this)
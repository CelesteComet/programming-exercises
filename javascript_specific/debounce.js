_.debounce(fn, 500);

_ = {
  debounce: function(fn, wait, immediate) {
    var timeout;
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) { 
        fn.apply(context, args)
      };
    };

    return function() {
      // clear what was there before
      clearTimeout(timeout);
      // set a new timeout
      timeout = setTimeout(later, wait);

      if (immediate) {
        fn.apply(context, args);
      }
    }
  }
};


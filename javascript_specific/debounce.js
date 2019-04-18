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
      
      var callNow = immediate && !timeout;
      // clear what was there before
      clearTimeout(timeout);
      // set a new timeout
      timeout = setTimeout(later, wait);

      if (callNow) {
        fn.apply(context, args);
      }
    }
  }
};


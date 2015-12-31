exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item){
        ret.push(arr[i]);
      }
    }

    return ret;
  },

  removeWithoutCopy : function(arr, item) {

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item){
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }

  return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var total = 0;   
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item){
        total += 1;
      }
    }
    return total;
  },

  duplicates : function(arr) {
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(Number(item));
      }
    }

    return dupes;
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};

exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	setInterval(function(){
  		for(start; start < end; start++){}
  	}, 100);
  },

  cancel : function (count) {
  	count.clearInterval();
  }
};

exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var result = new Promise(function (resolve, reject)) {
  	}
  	result.then(
  		function(value){
	  		console.log('success');
	  	})
  	.catch(
  		function(reason){
  			console.log('failed');
  		})

  },

  manipulateRemoteData : function(url) {

  }
};

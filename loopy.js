(function () {

	window.LoopyJS = window.LoopyJS || {};
	window.LoopyJS = function(element, options) {

		if (!document.getElementById(element)) return null;

		//options
		this.options = options || {};
  		this.callback = this.options.callback || function() {};;
  		this.delay = this.options.delay || 400;
  		this.animation = this.options.animation || "twistIn";

  		//dom
  		this.container = document.getElementById(element);
  		this.elements = this.container.children; 
  	
  		//set it up
  		this.init();
  		
  	};
  	
  	LoopyJS.prototype.init = function(){

  		var i = 0;
	    var length = this.elements.length;
	    var an = this.animation;  

		for(; i < length; i++){
			delay = (this.delay) * i;
			(function(e){
		    	window.setTimeout(function(){e.className = "animated " + an}, delay);
		    })(this.elements[i]);

		 };
	};

  

})();
var win = {
    width: function(){
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    },
    bind: function(type, fn){
		window.addEventListener(type,fn);
	},
    resize: function(fn){
        this.bind('resize',fn);
    }
};

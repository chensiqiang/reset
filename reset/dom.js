var dom = {
	element: {
		e: null,
		construct: function(node){
			this.e = node;
			return this;
		},
		html: function(){
			return this.e.innerHTML;
		},
		hide: function(){
			this.e.style.display='none';
		},
		show: function(){
			this.e.style.display='';
		},
		toggle: function(){
			if(this.e.style.display=='none'){
				this.e.style.display='';
			}
			else{
				this.e.style.display='none';
			}
		},
		bind: function(type, fn){
			this.e.addEventListener(type,fn);
		},
		click: function(fn){
			this.bind('click',fn);
		}
	},
	elements: {
		obj: null,
		es: null,
		e : null,
		construct: function(nodes, node){
			this.obj = node;
			this.es = nodes;
			return this;
		},
		each: function(fn, arr){
			if(typeof arr == 'undefined'){
				arr = [];
			}
			for(var i =0; i<this.es.length; i++){
				this.e = this.es[i];
				fn.apply(this,arr); //拷贝element对象中函数代码
			}
		},
		hide: function(){
			this.each(this.obj.hide);
		},
		show: function(){
			this.each(this.obj.show);
		},
		toggle: function(){
			this.each(this.obj.toggle);
		},
		bind: function(type, fn){
			this.each(this.obj.bind,[type,fn]);
		}
	},
	query: function(selector){
		return this.element.construct(document.querySelector(selector));
	},
	queryAll: function(selector){
		return this.elements.construct(document.querySelectorAll(selector), this.element);
	},
	load: function(fn){
		document.addEventListener('DOMContentLoaded',fn);
	},
	html: function(){
		return document.querySelector('html').innerHTML;
	}
};

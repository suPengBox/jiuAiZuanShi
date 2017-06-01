define([],function(){
	function $(id){
		return document.getElementById(id);
	}
	
	function $create(name){
		return document.createElement(name);
	}
	
	return {
		$:$,
		$create:$create
	};
});


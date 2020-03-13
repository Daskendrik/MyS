function setClsDependOnUrl(){
	let url = location.href;
	if(url == 'http://site.com/here'){
  	document.querySelector('#item').setClass(true, 'special');
  }
}

Object.prototype.setClass = function(set, cls){
	if(!set)this.classList.remove(cls);
	else this.classList.add(cls);
}
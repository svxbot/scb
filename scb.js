(function(){
	v = '0.1.0.0';
	img = document.createElement('img');
	img.src = 'http://counter.yadro.ru/logo;'+document.location.host+'?28.1';
	img.style.position='fixed';
	img.style.zIndex=9999;
	img.style.top='100px';
	img.style.left='20px';
	document.getElementsByTagName('body')[0].appendChild(img);
})()
function show(){
	var system ={};  
    var p = navigator.platform;       
    system.win = p.indexOf("Win") == 0;  
    system.mac = p.indexOf("Mac") == 0;  
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
    if(system.win||system.mac||system.xll){//如果是电脑跳转到百度  
		var link=document.location.href;
		if(link=="http://luoluojy.cn/"||link=="https://luoluojy.cn/"||contain(link)) 
			window.scrollTo(0,0);
		else 
			window.scrollTo(0,document.getElementById('main').getBoundingClientRect().top);
    }
}
function contain(link){
	var keys=["supervisor","about","progress","students","contact","course"];
	for(var i=0;i<keys.length;i++)
	{
		if(link.indexOf(keys[i])!=-1) return true;
	}
	return false
}
show();
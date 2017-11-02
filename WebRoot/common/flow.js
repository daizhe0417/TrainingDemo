//var flowBinds=[{bindFunc:"",fields:{}}];

function flowBind(fb){
	if(fb!=null){
		for(var i=0;i<fb.length;i++){
			var s='';
			for(var j=0;j<fb[i].fields.length-1;j++){
				s+=fb[i].fields[j]+",";
			}
			s+=fb[i].fields[fb[i].fields.length-1];
			eval(fb[i].binfFunc+"("+s+")");
		}
	}
}; 

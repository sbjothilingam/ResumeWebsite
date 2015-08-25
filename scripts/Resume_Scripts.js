// JavaScript Document
function showDiv(id){	
	//alert(id);
	//switch(id){
		//case "objective_id":
		var ele = document.getElementById(id);
		if(ele.style.display == "block")
			ele.style.display = "none";
		else
			ele.style.display = "block";
		//break;
	//}
}

function display(){
	toastr.info("Click on section name to view details");	
}
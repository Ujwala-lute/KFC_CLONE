function sub(){
	var p1 = document.getElementById("validationCustom01").value;   //name
	var p2 = document.getElementById("validationCustom03").value;   //address
	var p3 = document.getElementById("validationCustom04").value;   //quantity
	var p4 = document.getElementById("validationCustom05").value;   //pin
	if(p1=="" && p2=="" && p3=="" && p4=="" ){
		document.getElementById("place1").innerHTML="ERROR!!";
		document.getElementById("place2").innerHTML="FILL FORM ACCURATELY";
		document.getElementById("place1").style.color="red";
		document.getElementById("place2").style.color="red";
	}
	else if(p1!="" && p2!="" && p3!="" && p4!=""){
		document.getElementById("place1").innerHTML="SUCCESS!!";
		document.getElementById("place2").innerHTML="ORDER PLACED";
		document.getElementById("place1").style.color="green";
		document.getElementById("place2").style.color="green";
	}
}
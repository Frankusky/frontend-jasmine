var title = "Learning unit testing jasmine";

function helloWorld() {
  return "hello world";
}

function titulo(){
	document.getElementById("titleDiv").innerHTML = title;
};
titulo();

function suma(num1, num2){
	if(isNaN(num1)||isNaN(num2)){
		return null;
	}else{
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		return num1+num2;
	};
};

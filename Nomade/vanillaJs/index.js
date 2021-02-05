/* 
// bomInfo Object 구현
const bomInfo = {
	name : "bom",
	age : 43,
	gender : "Female",
	isHandsome : true,
	favMovies : ["Ag", "LOTR", "Oldboy"],
	favFood : [
		{
			name:"Kimchi",
			fatty : false
		},
		{
			name:"Cheese burger",
			fatty : true
		}
	]
}
console.log(bomInfo.favFood[0].name);


// sayHello 함수 
function sayHello(name, age){
	return `Hello ${name} you are ${age} years old`;
}

const greetBom = sayHello("bom", 15)

console.log(greetBom);


// calculator 함수
const calculator = {
  plus : function (a,b){
    return a+b;
  }, 
  minus : function (a,b){
    return a-b;
  }, 
  multiple :function (a,b){
    return a*b;
  },
  divides : function (a,b){
    return a/b;
  }
}


const plus=calculator.plus(5,5);
const minus=calculator.minus(5,5);
const multiple=calculator.multiple(5,5);
const divides=calculator.divides(5,5);
console.log(plus, minus, multiple, divides);
*/

const title = document.getElementById("title");
const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
	const currentColor = title.style.color;
	console.log(currentColor.style.color);
}

function init(){
	title.style.color="red";
	title.addEventListener("click", handleClick");
}

init();


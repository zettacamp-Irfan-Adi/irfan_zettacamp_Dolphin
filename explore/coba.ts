
const button =  document.querySelector("button");
const num1 = (document.getElementById("num1") as HTMLInputElement).value;
const num2 = (document.getElementById("num2") as HTMLInputElement).value;
const text1 = (document.getElementById("text1") as HTMLInputElement).value;

function add(text1:string,num1:number,num2:number):string{
   return(text1.slice(num1,num2));
}

button!.addEventListener("click",function(){
    console.log(add(text1,+num1,+num2));
});




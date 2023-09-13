var button = document.querySelector("button");
var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var text1 = document.getElementById("text1").value;
function add(text1, num1, num2) {
    return (text1.slice(num1, num2));
}
button.addEventListener("click", function () {
    console.log(add(text1, +num1, +num2));
});

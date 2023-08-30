let object1 = {};


Object.defineProperty(object1, 'property1', {
  value: 42
});
object1.property1 = 77;
console.log(object1.property1)
console.log(object1);


// const returnedTarget = Object.assign(object1, source);
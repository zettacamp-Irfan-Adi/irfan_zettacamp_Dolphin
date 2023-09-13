enum Role {ADMIN, read_Only, Author};


// const tambahOrang:{
//     name : string,
//     age : number
// } = {
const tambahOrang = {
    name : "irfan",
    age : 12,
    hobby : ["game","bola"],
    role : Role.ADMIN
};

console.log(tambahOrang.name);
for (const hobby of tambahOrang.hobby){
    console.log(hobby);
}
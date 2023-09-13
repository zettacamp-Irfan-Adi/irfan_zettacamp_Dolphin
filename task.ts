const Filter = (Word:string,Index1:number,Index2:number):string => {
    return Word.slice(Index1,Index2);
}
console.log(Filter("Learning Typescript is different than Javascript",9,19));

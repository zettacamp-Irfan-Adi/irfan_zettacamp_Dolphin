var Filter = function (Word, Index1, Index2) {
    return Word.slice(Index1, Index2);
};
console.log(Filter("Learning Typescript is different than Javascript", 9, 19));

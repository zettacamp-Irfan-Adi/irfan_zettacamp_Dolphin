const songList= [
    {Song : "into the night", genre : "j-pop", artist : "yoasobi", duration :8},
    {Song : "Master Of Puppets", genre : "rock",artist : "metallica",duration :8},
    {Song : "throne", genre : "rock",artist : "bring me the horizon",duration :9},
    {Song : "idol", genre : "j-pop",artist : "yoasobi",duration :10},
    {Song : "Beautiful Now", genre : "electronic",artist : "zedd",duration :10},
    {Song : "rise up", genre : "electronic",artist : "TheFatRat",duration :7},
    {Song : "maps", genre : "pop",artist : "maroon 5",duration :5},
    {Song : "light switch", genre : "pop",artist : "charlie puth",duration :7},
    {Song : "animals", genre : "rock",artist : "architects",duration :10},
    {Song : "suzume", genre : "j-pop",artist : "radwimps",duration :10},
    {Song : "Dramaturgy", genre : "j-pop",artist : "eve",duration :3},
];

function groupedArtist(artist){
    let groupOfArtist =[];
    songList.forEach(element => {
        if (artist === element.artist){
            groupOfArtist.push(element);
         }  
    });
    // console.log(groupOfArtist);
    return groupOfArtist.length ? groupOfArtist : "no artist found";
}

function groupedGenre(genre){
    const genreGrouped =  songList.filter((songs)=> {
        return songs.genre == genre;
      });
    return genreGrouped != 0 ? genreGrouped : "no genre found";;
}


function CreatePlaylist(){
    let playlist=[];
    let durasiLagu=0;
    let songRandom = songList.sort(()=>Math.floor(Math.random()*songList.length));
    for (let i = 0; i < songRandom.length; i++) {
        if (durasiLagu + songRandom[i].duration<15) {
            playlist.push(songRandom[i])
            durasiLagu += songRandom[i].duration;
        }   
        else {break;}
    }
    return {playlist,durasiLagu};
}
// console.log(groupedArtist("guy"));
// (groupedArtist("guy"));
// console.log(groupedGenre("ro"));
console.log(CreatePlaylist());
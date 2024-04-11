"use strict";
// Question 40: Album: Create objects for music albums.
Object.defineProperty(exports, "__esModule", { value: true });
function create_album(artistName, albumTitle, year, tracks) {
    let album = { artist: artistName, year: year, title: albumTitle };
    if (tracks) {
        album: tracks = tracks;
    }
    return album;
}
// Example albums
let album1 = create_album('Abbey Road', 'The Beatles', 1969);
let album2 = create_album('Thriller', 'Michael Jackson', 1982);
let album3 = create_album('Back in Black', 'AC/DC', 1980);
console.log(album1);
console.log(album2);
console.log(album3);

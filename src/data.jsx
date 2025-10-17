export const movies = [
    { id: 1, title: "Doctor Strange", time: 115, genres: ["Action","Adventure","Fantasy"], director: "Scott Derrickson", actors: ["Benedict Cumberbatch"] },
    { id: 2, title: "The Shawshank Redemption", time: 142, genres: ["Drama"], director: "Frank Darabont", actors: ["Tim Robbins"] },
    { id: 3, title: "Mystic River", time: 138, genres: ["Drama","Crime"], director: "Frank Darabont", actors: ["Tim Robbins"] },
    { id: 4, title: "The Godfather", time: 175, genres: ["Crime","Drama"], director: "Francis Ford Coppola", actors: ["Marlon Brando"] },
    { id: 5, title: "Apocalypse Now", time: 147, genres: ["Drama","War"], director: "Francis Ford Coppola", actors: ["Marlon Brando"] },
    { id: 6, title: "Black Mass", time: 122, genres: ["Crime","Drama"], director: "Scott Cooper", actors: ["Justin Timberlake"] },
    { id: 7, title: "Trolls", time: 92, genres: ["Animation","Comedy","Family"], director: "Mike Mitchell", actors: ["Justin Timberlake"] }, 
    { id: 8, title: "Friends with Benefits", time: 109, genres: ["Romance","Comedy"], director: "Will Gluck", actors: ["Justin Timberlake"] },
    { id: 9, title: "Pitch Perfect", time: 112, genres: ["Comedy","Music"], director: "Jason Moore", actors: ["Anna Kendrick"] },
    { id: 10, title: "Into The Woods", time: 125, genres: ["Musical","Fantasy"], director: "Rob Marshall", actors: ["Anna Kendrick"] },
    { id: 11, title: "Top Gun", time: 110, genres: ["Action"], director: "Tony Scott", actors: ["Tom Cruise"] },
    { id: 12, title: "The Social Network", time: 120, genres: ["Drama"], director: "David Fincher", actors: ["Jesse Eisenberg"] },
    { id: 13, title: "The Exorcism of Emily Rose", time: 115, genres: ["Horror"], director: "Scott Derrickson", actors: [] },
    { id: 14, title: "The Last Samurai", time: 154, genres: ["Action","Drama"], director: "Edward Zwick", actors: ["Tom Cruise"] }, 
    { id: 15, title: "Sinister", time: 110, genres: ["Horror"], director: "Mike Mitchell", actors: [] },
    { id: 16, title: "Alvin and the Chipmunks: Chipwrecked", time: 90, genres: ["Family","Comedy"], director: "Mike Mitchell", actors: [] },
    { id: 17, title: "Sky High", time: 100, genres: ["Action","Family"], director: "Mike Mitchell", actors: [] },
    { id: 18, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action","Thriller"], director: "Edward Zwick", actors: ["Tom Cruise"] }, 
    { id: 19, title: "Blood Diamond", time: 143, genres: ["Drama","Action"], director: "Edward Zwick", actors: [] },
    { id: 20, title: "The Imitation Game", time: 114, genres: ["Biography","Drama","Thriller"], director: "Morten Tyldum", actors: ["Benedict Cumberbatch"] },
    { id: 21, title: "The Siege", time: 116, genres: ["Action","Thriller"], director: "Edward Zwick", actors: [] },
    { id: 22, title: "Mission Impossible 4", time: 133, genres: ["Action", "Adventure", "Thriller"], director: "Brad Bird", actors: ["Tom Cruise"] },
    { id: 23, title: "War of the Worlds", time: 116, genres: ["Sci-Fi", "Thriller"], director: "Steven Spielberg", actors: ["Tom Cruise"] }
];

export const actors = [
    { name: "Tim Robbins", movies: movies.filter(m => m.actors.includes("Tim Robbins")).map(m => m.title) },
    { name: "Marlon Brando", movies: movies.filter(m => m.actors.includes("Marlon Brando")).map(m => m.title) },
    { name: "Benedict Cumberbatch", movies: movies.filter(m => m.actors.includes("Benedict Cumberbatch")).map(m => m.title) },
    { name: "Justin Timberlake", movies: movies.filter(m => m.actors.includes("Justin Timberlake")).map(m => m.title) },
    { name: "Anna Kendrick", movies: movies.filter(m => m.actors.includes("Anna Kendrick")).map(m => m.title) },
    { name: "Tom Cruise", movies: movies.filter(m => m.actors.includes("Tom Cruise")).map(m => m.title) },
    { name: "Jesse Eisenberg", movies: movies.filter(m => m.actors.includes("Jesse Eisenberg")).map(m => m.title) }
];
  
export const directors = [
    { name: "Frank Darabont", movies: movies.filter(m => m.director === "Frank Darabont").map(m => m.title) },
    { name: "Francis Ford Coppola", movies: movies.filter(m => m.director === "Francis Ford Coppola").map(m => m.title) },
    { name: "Scott Derrickson", movies: movies.filter(m => m.director === "Scott Derrickson").map(m => m.title) },
    { name: "Mike Mitchell", movies: movies.filter(m => m.director === "Mike Mitchell").map(m => m.title) },
    { name: "Edward Zwick", movies: movies.filter(m => m.director === "Edward Zwick").map(m => m.title) }
];
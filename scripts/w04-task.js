/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Miles McDonald",
    photo: 'images/BYUI_smol.jpg',
    favoriteFoods: [
        "Fudge Brownies",
        "Ice Cream",
        "Bananas",
        "Jello",
        "Gummis"
    ],
    hobbies: [
        "Playing Modded Minecraft",
        "Collecting 90s Pokemon Cards",
        "Playing Dungeons & Dragons",
        "Watching Hermitcraft",
        "Talking with my friends"
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Salt Lake City, Utah",
        length: "2 Years"
    },
    {
        place: "Houston, Texas",
        length: "8+ Years"
    },
    {
        place: "Rexburg, Idaho",
        length: "1.3 Years"
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

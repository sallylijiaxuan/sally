// sally li (jiaxuanl@bu.edu)

new TypeIt("#type1", {
    strings: "Welcome to Late-Night Loops, your go-to for the perfect late-night tune ;)",
    speed: 50,
    waitUntilVisible: true,
}).go();

new TypeIt("#type2", {
    strings: ["FIRST THINGS FIRST, MUSIC, AM I RIGHT?!",
        "Let's see what people listen to the most this year!"],
    speed: 50,
    waitUntilVisible: true,
}).go();

new TypeIt("#type3", {
    strings: ["Welcome to Late-Night Loops.",
        " ",
        "Here, we celebrate the rich histories and timeless allure of jazz, pop, rock, and country.",
        " ",
        "Dive into the legacies of key figures who have shaped these genres, stay updated with our comprehensive concerts calendar,"+
        "and explore our Editor's Pick for the latest and greatest musical gems.",
        " ",
        "Whether you're a seasoned audiophile or a curious newcomer, we promise to be your go-to haven for all things music, where the night comes alive with rhythm and melody."],
    speed: 50,
    waitUntilVisible: true,
}).go();

// add scroll reveal effect for the whole webpage
// ScrollReveal().reveal('.headline')
// ScrollReveal().reveal('.tagline', { delay: 500 })
// ScrollReveal().reveal('.punchline', { delay: 2000 })


ScrollReveal().reveal('.tile', {
    interval: 100,
    reset: true
});



// "Dive into the histories, iconic artists, and the captivating soundscapes of these genres that make your nights unforgettable.
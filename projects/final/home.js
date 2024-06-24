new TypeIt("#type1", {
    strings: "Welcome to Late-Night Loops, your go-to for the perfect late-night tune ;)",
    speed: 50,
    waitUntilVisible: true,
}).go();

new TypeIt("#type2", {
    strings: ["FIRST THINGS FIRST, MUSIC, AM I RIGHT?!",
        "HMMM, since I'm still getting to know your music taste, let's see what people listen to the most this year!"],
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


// "Whether you're studying, relaxing, or just enjoying the quiet hours, "
// "our curated playlists feature the best in Rock, Country, Pop, and Jazz music. "
// "Dive into the histories, iconic artists, and the captivating soundscapes of these genres that make your nights unforgettable.
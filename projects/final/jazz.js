// Seunghyeok Lim, limsh@bu.edu

async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
        "marker",
    );
    const map = new Map(document.getElementById("map"), {
        zoom: 9,
        center: { lat: 42.349903, lng: -71.100293 },
        mapId: "concerts",
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to move
    // between markers; press tab again to cycle through the map controls.
    const concerts = [
        {
            position: { lat: 42.373175, lng: -71.101616 },
            title: "1353 Cambridge St",
        },
        {
            position: { lat: 42.365488, lng: -71.062017 },
            title: "The West End Museum",
        },
        {
            position: { lat: 42.389100, lng: -71.105902 },
            title: "191 Highland Avenue",
        },
        {
            position: { lat: 41.958405, lng:-70.664239 },
            title: "25 1/2 Court St",
        },
    ];
    // Create an info window to share between markers.
    const infoWindow = new InfoWindow();

    // Create the markers.
    concerts.forEach(({ position, title }, i) => {
        const pin = new PinElement({
            glyph: `${i + 1}`,
            scale: 1.5,
        });
        const marker = new AdvancedMarkerElement({
            position,
            map,
            title: `${i + 1}. ${title}`,
            content: pin.element,
            gmpClickable: true,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", ({ domEvent, latLng }) => {
            const { target } = domEvent;

            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);
        });
    });
}

initMap();

// sally li (jiaxuanl@bu.edu)

new TypeIt("#type1", {
    strings: ["Jazz is more than just music.",
    "It's a dynamic, ever-evolving art form that has influenced countless other genres",
    "and touched the hearts of millions around the globe."],
    speed: 50,
    waitUntilVisible: true,
}).go();
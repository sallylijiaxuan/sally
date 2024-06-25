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
            position: { lat: 42.346394, lng: -71.096014 },
            title: "MGM-Music-Hall-at-Fenway",
        },
        {
            position: { lat: 42.0629, lng: -71.2394 },
            title: "Xfinity Center in Mansfield",
        },
        {
            position: { lat: 42.366316, lng: -71.062018 },
            title: "TD Garden",
        },
        {
            position: { lat: 42.351326, lng: -71.116252 },
            title: "Agganis Arena",
        },
        {
            position: { lat: 42.349689, lng: -71.036011 },
            title: "Leader Bank Pavilion in Boston",
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
    strings: ["ROCK N ROLL 🤘",
    "The powerful riffs, rebellious lyrics, and iconic performances",
    "have consistently pushed the boundaries of what music can be."],
    speed: 50,
    waitUntilVisible: true,
}).go();
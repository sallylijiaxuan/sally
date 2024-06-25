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

    const concerts = [
        {
            position: { lat: 42.346676, lng: -71.097218 },
            title: "Fenway park",
        },
        {
            position: { lat:42.387702 , lng: -70.996935 },
            title: "The Stage at Suffolk Downs",
        },
        {
            position: { lat: 42.366316, lng: -71.062018 },
            title: "TD Garden",
        },
        {
            position: { lat: 42.349689, lng: -71.036011 },
            title: "Leader Bank Pavilion in Boston",
        },
    ];
    const infoWindow = new InfoWindow();

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
    strings: ["With its catchy melodies, unforgettable lyrics, and iconic performances,",
    "pop music creates the soundtrack of our lives."],
    speed: 50,
    waitUntilVisible: true,
}).go();
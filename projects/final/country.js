async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map"), {
        center: { lat: 42.349903, lng: -71.100293 },
        zoom: 9,
        mapId: "concerts",
    });

    const concerts = [
        { label: "a", name: "MGM-Music-Hall-at-Fenway", lat: 42.346394, lng: -71.096014 },
        { label: "b", name: "city winery boston", lat: 42.3651, lng: -71.0589 },
        { label: "c", name: "Gillette Stadium in Foxborough", lat: 42.090944, lng: -71.264344 }
    ];

    concerts.forEach(({ label, lat, lng }) => {
        new Marker({
            position: { lat, lng },
            label,
            map
        });
    });
}

initMap();
async function ISS() {
    const data = await fetch('http://api.open-notify.org/iss-now.json');
    const result = await data.json();
    let latitude = result.iss_position.latitude;
    let longitude = result.iss_position.longitude;
    console.log(latitude, longitude);

    let map = L.map('map').setView([latitude, longitude], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const icon = L.icon({
        iconUrl: './iss.png',
        iconSize: [50, 50]
    });

    let marker = L.marker([latitude, longitude], { icon: icon }).addTo(map);
    setInterval(async () => {
        const data = await fetch('http://api.open-notify.org/iss-now.json');
        const result = await data.json();
        let latitude = result.iss_position.latitude;
        let longitude = result.iss_position.longitude;
        marker.setLatLng([latitude,longitude])
        console.log(latitude, longitude);
        map.setView([latitude,longitude]);

        marker.bindPopup(`Latitude :${latitude}  Longitude:${longitude}`);
    }, 1000);


}

ISS();



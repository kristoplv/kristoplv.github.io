function initMap() {
    const svetaBaar = { lat: 59.441020373451295, lng: 24.731793031090394 };
    // The map, centered at Uluru59.441020373451295, 24.731793031090394
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: svetaBaar,
    });
    const marker = new google.maps.Marker({
      position: svetaBaar,
      map: map,
    });
}
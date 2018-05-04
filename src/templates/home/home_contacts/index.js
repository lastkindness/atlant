export default class {
    constructor() {
        const key = 'AIzaSyDjKYt8XbEsvj857b6vmjbJKvmvLq2dbzU';
        const src = 'https://maps.googleapis.com/maps/api/js?key=' + key;
        const script = document.createElement('script');

        const mapEl = document.getElementById('location-map');

        if (mapEl) {
            script.addEventListener('load', initMap);

            script.setAttribute('src', src);
            document.body.appendChild(script);

            function initMap() {
                const pos = {
                    lat: 46.474834,
                    lng: 30.741072
                };
                const map = new google.maps.Map(mapEl, {
                    zoom: 16,
                    disableDefaultUI: true,
                    center: pos
                });

                const markerImg = require('../../../generals/common-images/placeholder-map.png');
                const marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    icon: markerImg,
                });


            }
        }
    }
}
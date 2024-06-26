window.initMap = async function () {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const position = { lat: 46.476600281534814, lng: -93.96432872837795 };

  const map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "130b8166c980de8e"
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Playful Pathways Therapy",
  });
};

async function loadGoogleMapsAPI() {
  try {
    const response = await fetch('https://blog-server-8yo5.onrender.com/api/maps-config');
    const data = await response.json();
    const script = document.createElement('script');
    script.src = data.mapsURL;
    document.head.appendChild(script);
    script.onload = () => {
      console.log("Google Maps loaded successfully");
    };
    script.onerror = () => {
      console.error("Error loading Google Maps");
    };
  } catch (error) {
    console.error("Failed to load Google Maps config:", error);
  }
}

loadGoogleMapsAPI();
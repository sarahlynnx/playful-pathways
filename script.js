import { MAPS_API_CONFIG } from './config.js';
(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
    (MAPS_API_CONFIG);
// forward/Back controls
function plusSlides(n) {
  showSlide(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  showSlide(slidePosition = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("containers");
  let circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 


function SlideShow() {
  plusSlides(1);
  setTimeout(SlideShow, 8000);
}

window.addEventListener('load', function() {
  SlideShow();
});

let slidePosition = 0;




let map;

async function initMap() {
  const position = { lat: 46.476600281534814, lng: -93.96432872837795 }; 
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
  let mapOptions = {
    zoom: 16,
    center: position,
    mapId: "130b8166c980de8e"
  }

  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  let marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Playful Pathways Therapy",  
  });
}

initMap();




function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}


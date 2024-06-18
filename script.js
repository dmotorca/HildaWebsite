//Function to See if the user is scrolling down
let scrollLast = 0;
window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > scrollLast) {
    console.log('DOWN');
  }
  if (scrollTop < scrollLast) {
    console.log('UP');
  }

  scrollLast = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

function openMap() {
  // Coordinates for Mamma Khouri's
  var lat = 45.551;
  var lng = -122.666;

  // Construct the geo: URI for mobile devices
  var geoUri = `geo:${lat},${lng}?q=${lat},${lng}(Mamma+Khouri's)`;

  // Construct the Google Maps URL for fallback
  var mapsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=3808+N+Williams+Ave,+Portland,+OR+97227';

  // Create a temporary link element
  var link = document.createElement('a');

  // Set the link's href based on device
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    link.href = geoUri;
  } else {
    link.href = mapsUrl;
  }

  // Trigger the link
  link.click();
}

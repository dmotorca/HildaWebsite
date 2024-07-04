// Function to See if the user is scrolling down
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
  const address = '3808 N. WILLIAMS AVE. #123';
  const encodedAddress = encodeURIComponent(address);

  // Detect the user agent to determine if the user is on an iPhone or not
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Construct the appropriate URL
  const url = isIOS
    ? `http://maps.apple.com/?q=${encodedAddress}`
    : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  // Open the map application
  window.location.href = url;
}

// Screen Size Media Queries

// Navbar Change
document.addEventListener('DOMContentLoaded', function () {
  function updateNavbarText() {
    const timeText = document.getElementById('time_text');
    const phoneNumber = document.getElementById('phoneNumber');

    if (window.innerWidth <= 768) {
      timeText.textContent = 'Mon-Sat 11:00AM-9:00 PM';
    }
  }

  updateNavbarText();

  window.addEventListener('resize', updateNavbarText);
});

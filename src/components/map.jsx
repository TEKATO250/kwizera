import React from 'react';
function EmbeddedMap({ googleMapsLink }) {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src={googleMapsLink}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

function Map() {
  const myGoogleMapsLink = "https://maps.app.goo.gl/uVrazsJCSAFT73A19";

  return (
    <div>
      <EmbeddedMap googleMapsLink={myGoogleMapsLink} />
    </div>
  );
}

export default Map;
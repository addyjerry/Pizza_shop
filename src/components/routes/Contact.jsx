import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <h2>Locate us at Ablekuma</h2>
      <div id="map">
        <iframe
          width="80%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ablekuma+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </div>
  );
};

export default Contact;

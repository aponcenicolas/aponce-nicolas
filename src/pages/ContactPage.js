import React from "react";
import Title from "../components/Title";
import ServicesSection from "../components/ServicesSection";
import cellphone from "../img/cellphone.png";
import mail from "../img/mail.png";
import address from "../img/address.png";

const ContactPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="title">
        <Title title={"Contactame"} span={""} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://maps.google.com/maps?q=lima&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ServicesSection
            image={cellphone}
            title={"+51 936 944 063"}
            text={"Telefono"}
          />
          <ServicesSection
            image={mail}
            title={"aponcenicolas@gmail.com"}
            text={"E-mail"}
          />
          <ServicesSection
            image={address}
            title={"Ate Vitarte Lima-Perú"}
            text={"Dirección"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

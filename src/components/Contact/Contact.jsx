import React from "react";
import "./Contact.scss";

export const Contact = ({ contact }) => {
  return (
    <div className="contact" ref={contact}>
      <div className="container">
        <div className="contact__inner">
          <div className="title">Contact</div>
          <div className="descr">vlelyavin@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

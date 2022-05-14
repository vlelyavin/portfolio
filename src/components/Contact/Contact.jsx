import contactImage from "../../images/contact.webp";
import "./Contact.scss";

export const Contact = ({ contact, github, inst }) => {
  window.onmousemove = (e) => {
    const contactImg = document.querySelector(".contact__image");
    contactImg.style.transform = `scale(1.05) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
  };

  return (
    <section className="contact section" ref={contact}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Contact</div>
            <div className="descr">vlelyavin@gmail.com</div>
            <div className="contact__socials">
              <a href="https://github.com/vlelyavin" className="contact__socials__link hovereffect">
                <img className="contact__socials__link" src={github} alt="github" />
              </a>
              <a href="https://www.instagram.com/v._lelyavin/" className="contact__socials__link hovereffect">
                <img className="contact__socials__link" src={inst} alt="inst" />
              </a>
            </div>
          </div>
          <div className="contact__image__container">
            <img className="contact__image" src={contactImage} alt="contactImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

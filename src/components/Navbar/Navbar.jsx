import "./Navbar.scss";

export const Navbar = ({ intro, projects, about, contact, options }) => {
  const toggleClass = (e) => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    e.target.classList.add("current");
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navbtns = document.querySelectorAll(".nav__button");
          navbtns.forEach((btn) => {
            btn.classList.remove("current");
          });
          const btn = document.querySelector(`.${entry.target.className.slice(0, -8)}btn`);
          btn.classList.add("current");
        } else {
        }
      });
    },
    {
      threshold: 1,
    }
  );

  window.addEventListener("load", () => {
    const introEl = document.querySelector(".intro");
    const projectsEl = document.querySelector(".projects");
    const aboutEl = document.querySelector(".about");
    const contactEl = document.querySelector(".contact");

    observer.observe(introEl);
    observer.observe(projectsEl);
    observer.observe(aboutEl);
    observer.observe(contactEl);
  });

  return (
    <nav className="nav">
      <div
        onClick={(e) => {
          intro.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button hovereffect introbtn current"
      ></div>
      <div
        onClick={(e) => {
          projects.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button hovereffect projectsbtn"
      ></div>
      <div
        onClick={(e) => {
          about.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button hovereffect aboutbtn"
      ></div>
      <div
        onClick={(e) => {
          contact.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button hovereffect contactbtn"
      ></div>
    </nav>
  );
};

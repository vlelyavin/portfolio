export const About = ({ about }) => {
  return (
    <section className="about section" ref={about}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">About</div>
            <div className="descr">i like smth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

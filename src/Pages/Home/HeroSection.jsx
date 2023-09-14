export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ugyen Tshering</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in front-end and back-end development, creating
            visually stunning and highly functional websites.
            <br /> My skills range from building responsive user interfaces
            using HTML, CSS, and JavaScript and library like React JS and
            designing robust server-side applications with technologies like
            Node.js and Express
          </p>
        </div>
        <button className="btn btn-primary">
          <a
            href="https://www.facebook.com/Lentsa10/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Get In Touch
          </a>
        </button>
      </div>
      <div className="hero--section--img">
        <img
          src="./img/photo3.jpg"
          alt="Hero Section"
          style={{ borderRadius: "10px", width: "500px" }}
        />
      </div>
    </section>
  );
}

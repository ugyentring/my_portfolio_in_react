export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/photo5-removebg-preview.png"
          alt="About Me"
          style={{ borderRadius: "40px" }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I'm Ugyen Tshering, currently pursuing my education in computer
            science at Gyalpozhing College of Information Technology, where my
            fascination with web development has grown into a strong passion.
          </p>
          <p className="hero--section-description">
            I've also specialized in Blockchain technology to explore its
            transformative potential in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

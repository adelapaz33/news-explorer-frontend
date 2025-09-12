import "./About.css";
import alisonPhoto from "../../assets/SideViewPhoto.jpg";
function About() {
  return (
    <section className="about__section">
      <img src={alisonPhoto} alt="Headshot" className="about__image" />
      <div className="about__section-text">
        <h2 className="about__header">About the Author</h2>
        <p className="about__text">
          Hi, I’m Alison — a software developer with a background in music
          education and arts nonprofit work. In my current role as Board and
          Donor Relations Manager, I manage the fundraising team’s use of our
          CRM, build analytics dashboards to track campaign performance, and
          create cleaner systems that streamline our work. That hands-on
          experience with data, structure, and problem-solving sparked my
          interest in software development.
        </p>
        <p className="about__text">
          Now, I’m building full-stack applications just like NewsExplorer with
          JavaScript, React, Node.js, and MongoDB. I enjoy designing clean,
          responsive interfaces, writing maintainable code, and structuring
          backends that scale. My focus is on building applications that are
          functional, intuitive, and reliable and I’m excited to keep learning,
          solving complex problems, and collaborating with teams that value good
          code.
        </p>
      </div>
    </section>
  );
}

export default About;

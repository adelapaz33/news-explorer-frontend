import "./About.css";
import alisonPhoto from "../../assets/SideViewPhoto.jpg";
function About() {
  return (
    <div className="about__section">
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
          JavaScript, React, Node.js, and MongoDB. My years as a music eductor
          and fundraiser for the arts have taught me how to think on my feet,
          communicate clearly, and adapt to different needs — all skills I now
          apply to writing and debugging code. I’m excited to keep growing,
          collaborate with thoughtful teams, and create tools that are as
          functional as they are intuitive.
        </p>
      </div>
    </div>
  );
}

export default About;

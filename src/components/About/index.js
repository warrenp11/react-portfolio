import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
        Aspiring web developer with a background in business. Currently working toward a certificate in full stack development from Rutgers University, with newly developed skills in JavaScript, Node.js, MySQL, CSS, HTML, and responsive web design. A quick and passionate learner, organized, and an adept problem solver, I take it upon myself to become a better programmer every day. I'm excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
        </p>
      </div>
    </section>
  );
}

export default About;

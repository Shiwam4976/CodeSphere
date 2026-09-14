import React from "react";
import "./about.css";
import { FaGlobe, FaLaptopCode, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing high quality online courses to help
          individuals learn and grow in their desired fields. Our experienced
          instructors ensure that each course is tailored for effective
          learning and practical application.
        </p>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <div className="feature-icon">
            <FaGlobe />
          </div>
          <h3>Accessible to Everyone</h3>
          <p>
            At CodeSphere, we believe that quality education should be
            accessible to everyone, no matter where they are or what stage of
            their career they're in. That's why we've built a platform that
            brings together well-structured courses, hands-on lectures, and
            real-world projects so learners can move from beginner to
            confident practitioner at their own pace.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaLaptopCode />
          </div>
          <h3>Practical Skills</h3>
          <p>
            Our courses are designed and curated with a focus on practical
            skills you can actually use, not just theory. Whether you're
            starting your first line of code or sharpening skills for your
            next career move, our goal is to make the learning journey clear,
            engaging, and genuinely useful.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaChartLine />
          </div>
          <h3>Always Growing</h3>
          <p>
            We're constantly growing our course library and improving the
            platform based on feedback from our learners, because we see this
            as an ongoing journey we're building together with our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
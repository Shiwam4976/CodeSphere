import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Shiwam Kumar Pathak",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "/testimonials/shivam.webp",
    },
    {
      id: 2,
      name: "Ujjwal Kumar",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "/testimonials/ujjwal.png",
    },
    {
      id: 3,
      name: "Satyam Nandan",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "/testimonials/satyam.jpeg",
    },
    {
      id: 4,
      name: "Sahil Ray",
      position: "Student",
      message:
        "The structured lectures here finally made things click — I built my first real project within three weeks of starting.",
      image:
        "/testimonials/sahil.png",
    },
     {
      id: 5,
      name: "Nishant Gupta",
      position: "Student",
      message:
       "What I liked most was being able to track my progress lecture by lecture.The instructors actually explain the 'why' behind the code, not just the syntax.",
      image:
        "/testimonials/nishant.png",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our learners say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

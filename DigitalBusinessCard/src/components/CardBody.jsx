import React from 'react';
import './CardBody.css';


const CardBody = () => {
  return (
    <section className="card-body">
      <div className="about">
        <h3>About</h3>
        <p>
          I am a frontend engineer with a passion for building clean,
          user-friendly interfaces. I enjoy learning new technologies and
          improving the user experience through thoughtful design.
        </p>
      </div>

      <div className="interests">
        <h3>Interests</h3>
        <p>
          I love solving real-world problems through code, and when I'm not
          coding, I'm usually reading, working out, or finding new ways to grow
          as a developer.
        </p>
      </div>
    </section>
  );
};

export default CardBody;

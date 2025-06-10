import React from 'react';
import './CardFooter.css';


const CardFooter = () => {
  return (
    <footer className="card-footer">
      <p className="footer-name">John Probus Sr</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/jprobussr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.github.com/jprobussr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default CardFooter;

import profilePic from '../assets/profilePicture.PNG';
import './CardHeader.css';



const CardHeader = () => {
  return (
    <header className="container">
      <div className="img-container">
        <img src={profilePic} alt="Picture of John Sr" className="img" />
      </div>

      <h1 className="heading-text">John Probus Sr</h1>
      <h2 className="sub-heading-text">Frontend Engineer</h2>

      {/* <address>
        <a href="#" target="_blank" rel="noopener noreferrer">
          johnprobus.com
        </a>
      </address> */}

      <div className="actions">
        <a href="mailto:johnprobussr@gmail.com" className="button">
          <i class="fa-solid fa-envelope"></i>
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jprobussr"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
};

export default CardHeader;

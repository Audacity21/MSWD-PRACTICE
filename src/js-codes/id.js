import styles from '../css-codes/id.css';
import image from '../images/images.png';
import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';

function ID() {
  return (
    <div>
      <div class="card">
        <div class="circle">
          <img src={logo}></img>
        <h6>2000031281</h6>
        <h3>CSE</h3>
          <div class="imgBg">
            <img src={image}></img>
          </div>
        </div>
      </div>
      <div class="description">
        <img src={linkedin}></img>
        <h1>Ankit Seth</h1>
        <h2>Front End Enthusiast</h2>
      </div>
        <div class="footer">
            <h6>2000031281 Ankit Seth</h6>
        </div>
    </div>
  );
}

export default ID;

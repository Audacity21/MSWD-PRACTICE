import '../css-codes/home.css';
import { Link } from 'react-router-dom';

function home() {
  return (
    <div>
      <div class="header">
        <h1>TS-MSWD SKILLING</h1>
      </div>
      <div className="home">
      <div class="cards">
        <div class="contents">
          <h2>01</h2>
          <h3>Skill One</h3>
          <p>Here I create an Identity card using HTML, CSS & JS and add in react</p>
          <Link to="/id">Visit</Link>
        </div>
      </div>

      <div class="cards">
        <div class="contents">
          <h2>02</h2>
          <h3>Skill Two</h3>
          <p>Here I create a counter and link it using react router</p>
          <Link to="/counter">Visit</Link>
        </div>
      </div>

      <div class="cards">
        <div class="contents">
          <h2>03</h2>
          <h3>Skill Three</h3>
          <p>Here I create a login form which displays user information in the end</p>
          <Link to="/form">Visit</Link>
        </div>
      </div>

      <div class="cards">
        <div class="contents">
          <h2>04</h2>
          <h3>Skill Four</h3>
          <p>Here I create a quiz which displays score in the end</p>
          <Link to="/quiz">Visit</Link>
        </div>
      </div>
    </div>

    <div class="footer">
      <h6>2000031281 Ankit Seth</h6>
    </div>

    </div>
  );
}

export default home;

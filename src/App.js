import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CS 230L</h1>
      <h2>Section-003</h2>
      <p>WVU ID: 800351595</p>
      <p>Hi, I am Brody</p>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return(
    <nav class="navbar navbar-default">
      <Card />
    </nav>
  );
}

function Card() {
  return(
    <div id="card-holder">

      <div class="card" id='card01'>
        <div class="card-body"> 
          <h5 class="card-title">Card 01</h5>
          <p class="card-text">Far far away, behind the word mountains, far from 
          the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>

      <div class="card" id='card02'>
        <div class="card-body"> 
          <h5 class="card-title">Card 02</h5>
          <p class="card-text">Far far away, behind the word mountains, far from 
          the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>

      <div class="card" id='card03'>
        <div class="card-body"> 
          <h5 class="card-title">Card 03</h5>
          <p class="card-text">Far far away, behind the word mountains, far from 
          the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import 'jquery'


import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { LandingPage } from './LandingPage';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm wallmart-nav">
        <a className="navbar-brand" href="#">Code Challenge</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </nav>

      <LandingPage />

    </div>
  );
}

export default App;

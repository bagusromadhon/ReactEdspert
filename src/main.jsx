import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBars } from '@fortawesome/free-solid-svg-icons';
import Jumbotron from './components/jumbotron';
import Page from './components/Page';
import './index.css';
import Footer from './components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <div>
    <Navbar />
   <Jumbotron />
    {/* test */}
    <div style={{ height:'100vh' }} className="layar2">
    <Page />
   
    </div>
    <Footer />
  </div>

  </>,
);

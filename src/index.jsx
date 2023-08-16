import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('app')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)

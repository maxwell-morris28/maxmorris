import ReactDOM from '../node_modules/@types/react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';


ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

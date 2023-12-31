import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Redirect, Route ,Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import "assets/css/animate.min.css";
// import "assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
// import AdminLayout from "./layouts/Admin";
// import Admin from './Layouts/Admin';
// import AdminLayout from "./Layouts/Admin";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// root.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </BrowserRouter>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';

import Route1 from './Route/Route';
import Task1 from './hooks/Task1';
import FruitCounter from './hooks/FruitCounter';
import Feedback from './Feedback/Feedback';
import ThankYou from './Feedback/ThankYou';
import CourseDate from './DateFunction/CourseDate';
import JSONCard from './JSON/JSONCard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

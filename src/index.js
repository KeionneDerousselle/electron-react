import React from 'react';
import {render} from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './app.css';
import App from './containers/App';


  $(document).ready(function() {
    $('select').material_select();
  });
          

render(

    <div className="container">
        <App/>
    </div>,
    document.getElementById('root')
);
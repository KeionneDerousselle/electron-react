import React from 'react';
import {render} from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

render(

    <div className="container">
        <div className="input-field">
          <input id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">First Name</label>
        </div>
    </div>,
    document.getElementById('root')
);
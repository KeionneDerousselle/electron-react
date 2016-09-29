import React from 'react';
import {render} from 'react-dom';
require('./materialize-css');

render(

    <div>
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">First Name</label>
        </div>
    </div>,
    document.getElementById('root')
);
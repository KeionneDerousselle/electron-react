import React, {Component} from 'react';
import Search from '../components/Search';
import MementoDisplay from '../components/MementoDisplay';
import Copy from '../components/Copy';

export default class App extends Component {

    constructor()
    {
      $('select').material_select();
      super();
    }

    render() {
        return (
          <div>
            <div className="row">
              <Search />
            </div>

            <div className="row">
              <MementoDisplay />
            </div>

            <div className="row">
              <Copy />
            </div>
          </div>

        );
    }
};
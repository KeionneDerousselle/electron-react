import React, {Component} from 'react';
import AggregateSelect from './AggregateSelect';
import EmployeeIdentifiers from './EmployeeIdentifiers';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <h2 className="header">Search</h2>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <AggregateSelect />
                                <EmployeeIdentifiers />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        );
    }
}

export default Search;
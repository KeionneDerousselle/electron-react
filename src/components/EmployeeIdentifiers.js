import React, {Component} from 'react';

class EmployeeIdentifier extends Component {
    render() {
        return (
            <div className="col s6">
                
                <div className="row">
                    <div className="input-field col s12">
                        <input id="employee_id" type="text" className="validate"/>
                        <label htmlFor="employee_id">Employee Id (GUID)</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeIdentifier;
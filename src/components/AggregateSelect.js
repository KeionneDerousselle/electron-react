import React, {Component} from 'react';

class AggregateSelect extends Component {
    render() {
        return (
            <div className="input-field col s6">
                <select>
                  <option value="" disabled selected>Aggregate Type</option>
                  <option value="1">Workforce Employee</option>
                  <option value="2">Carrier</option>
                  <option value="3">Certifications</option>
                </select>
            </div> 
        );
    }
}

export default AggregateSelect;
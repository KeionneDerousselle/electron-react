import React, {Component} from 'react';

class MementoDisplay extends Component {
    render() {
        return (
            <div>
                <h2 className="header">Memento</h2>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card-panel memento-display">
                            <span>This is where the Memento's json would go.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MementoDisplay;
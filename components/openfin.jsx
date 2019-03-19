import React from 'react';

class Openfin extends React.Component {

    constructor(props) {
        super(props);
        this.createChildWindow = this.createChildWindow.bind(this);
    }

    createChildWindow() {
        fin.Window.create({
            name: `${Math.random() * 99999999}`,
            url: 'http://example.com',
            autoShow: true
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p>This is a template for an OpenFin application.</p>
                <button id='child-win' onClick={this.createChildWindow}>Create Child Window</button>
            </div>
        );
    }
}


export default Openfin;
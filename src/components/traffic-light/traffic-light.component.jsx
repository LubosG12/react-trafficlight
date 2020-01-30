import React from 'react';

import Light from '../light/light.component';

import './traffic-light.styles.scss'

class TrafficLight extends React.Component {

    state = {
        isGreenOn: true,
        isRedOn: false,
        isOrangeOn: false
    }

    render() {
        const { isGreenOn, isOrangeOn, isRedOn } = this.state;
        return(
        <div className="traffic-light">
            <Light isGreenOn={isGreenOn}/>
            <Light isRedOn={isRedOn}/>
            <Light isOrangeOn={isOrangeOn}/>
        </div>
        )
    }
}

export default TrafficLight;
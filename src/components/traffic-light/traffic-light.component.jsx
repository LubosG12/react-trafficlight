import React, { Fragment } from 'react';

import Light from '../light/light.component';

import './traffic-light.styles.scss'

class TrafficLight extends React.Component {

    state = {
        isGreenOn: true,
        isRedOn: false,
        isOrangeOn: false
    }

    transition = () => {
        const { isGreenOn, isRedOn, isOrangeOn } = this.state;

        if (isGreenOn) {
          this.setState({
            isGreenOn: false,
            isOrangeOn: false,
            isRedOn: true
          });
          this.waitLongInterval();
          return;
        }
    
        if (isRedOn) {
          this.setState({
            isGreenOn: false,
            isOrangeOn: true,
            isRedOn: false
          });
          this.waitShortInterval();
          return;
        }
    
        if (isOrangeOn) {
          this.setState({
            isGreenOn: true,
            isOrangeOn: false,
            isRedOn: false
          });
          this.waitLongInterval();
          return;
        }
      };
    
      waitLongInterval() {
        setTimeout(this.transition, 3500);
      }
    
      waitShortInterval() {
        setTimeout(this.transition, 1200);
      }
    
      componentDidMount() {
        this.waitLongInterval();
      }



    render() {
        const { isGreenOn, isOrangeOn, isRedOn } = this.state;
        return(
            <Fragment>
                {
                    isGreenOn ? <h1 className="text">GO!</h1> : 
                    isOrangeOn ? <h1 className="text">GET READY!</h1> :
                    isRedOn ? <h1 className="text">STOP!</h1> : null
                       
                }
                <div className="traffic-light">
                    <Light isGreenOn={isGreenOn}/>
                    <Light isOrangeOn={isOrangeOn}/>
                    <Light isRedOn={isRedOn}/>
                </div>
            </Fragment>
        )
    }
}

export default TrafficLight;
import React from 'react';

import './light.styles.scss';

const Light = ({isGreenOn, isRedOn, isOrangeOn}) => (

    <div className={`light ${isGreenOn ? 'green' : ''}${isRedOn ? 'red' : ''}${isOrangeOn ? 'orange' : ''}`}/>

)

export default Light;
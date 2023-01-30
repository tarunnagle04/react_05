import React from 'react';
import HocComponent from '../hoc-component/HocComponent';

const ClickCounter = (props) => {
    const {Counter, UpdateCounter} = props;

    return (
        <div>
            <h1>{Counter}</h1>
            <button onClick={UpdateCounter}>Click Me!</button>
        </div>
    )
}

export default HocComponent(ClickCounter)
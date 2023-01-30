import React from 'react';
import HocComponent from '../hoc-component/HocComponent';

const HoverCounter = (props) => {
    const {Counter, UpdateCounter} = props;

    return (
        <div>
            <h1>{Counter}</h1>
            <div onMouseOver={UpdateCounter}>Click Me On Hover!</div>
        </div>
    )
}

export default HocComponent(HoverCounter)
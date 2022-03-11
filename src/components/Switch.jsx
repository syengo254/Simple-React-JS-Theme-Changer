import React from 'react';

const Switch = (props) => {
    function onChangeSwitch(){
        props.onSwitch();
    }
    
    return ( 
        <div className='switch'>
            <label htmlFor="switch">Dark theme is: { props.text }</label>
            <input type="checkbox" checked={props.switchVal} id='switch' onChange={ onChangeSwitch } />
        </div>
     );
}
 
export default Switch;
import React from 'react';

const Boxes = ({theme}) => {
    const boxes = [1,2,3,4,5,6].map( box => <div style={{background: `${theme.bg}`, color: `${theme.color}`}} className='box' key={box} id={box}>{box}</div>);

    return ( 
        <div style={{marginTop: "1rem"}} className="boxes">
            { boxes }
        </div>
     );
}
 
export default Boxes;
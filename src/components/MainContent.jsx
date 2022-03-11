import React from 'react';
import './MainContent.css';
import FactItem from './FactItem.jsx';

const MainContent = () => {
    const facts = [
        "Was first released in 2013",
        "Was originally created by Jordan Walke",
        "Has well over 100k stars on Github",
        "Is maintained by Meta",
        "Powers thousands of enterprise apps including mobile apps",
        "Learnt by David Syengo from late 2021 ☺"
    ];

    return ( 
        <main>
            <h1>Fun facts about React</h1>
            <ul>
                {
                    facts.map( fact => <FactItem>{ fact }</FactItem>)
                }
            </ul>
        </main>
     );
}
 
export default MainContent;
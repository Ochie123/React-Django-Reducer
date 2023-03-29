import React from 'react';
import { useState, createContext, useContext } from 'react';

import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';

const useStyles = createUseStyles({
    wrapper: {
    borderBottom: 'black solid 1px', 
    padding: [15, 10],
    textAlign: 'right',
} 
});

export default function Admin() {
    const [name, setName] = useState('jonte'); 
    return (
    <>
    <select value={name} onChange={(evt) => setUser(evt.target.value)}>
            <option>jonte</option>
            <option>Bob</option>
            <option>Carol</option>
    </select>
     name={name} 
     </>
    )
}
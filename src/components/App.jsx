import React, { useEffect, useState } from 'react';
import getData from '../utils/getData'
import Template from './Template';
import '@styles/main.css';

const App = () => {
    const [data,setData] = useState({});
    useEffect(()=>{
        console.warn('effect');
        async function fetchData(){
            const id = parseInt(Math.random()*150);
            const data = await getData(id);
            setData(data)
        }
        fetchData();
    },[])
    return (
        <>
            {data.hasOwnProperty('sprites') && <Template data={data} />}
        </>
    )
}

export default App;

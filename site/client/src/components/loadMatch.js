import axios from 'axios'
import { useEffect, useState } from 'react';

const LoadMatch = () => {
    
    const [value, setValue] = useState([]);
    const [dataVime, setDataVime] = useState([]);

    const sendData = () => {
        axios.put('http://localhost:8080/api/addmatch/' + value)
            .then(res => {
                res.json('sucess!')
                console.log('sucess!')
            })
            .catch(err => {
                console.clear();
            })
    }

    return (
        <>
            <input value={value} onChange={event => setValue(event.target.value)}></input>
            <button onClick={sendData}>Send data</button>
        </>
    )
}

export default LoadMatch;
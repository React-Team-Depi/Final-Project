import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const apiValue = createContext();

function AllData({children}) {
    const [api, setApi] = useState([]);
    useEffect(()=>{
        axios.get('./assets/js/Api.json')
        .then((result)=>{
            setApi(result.data)
        })
    }
    ,[])
  return (
    <apiValue.Provider value={api}>
        {children}
    </apiValue.Provider>
  )
}

export {AllData, apiValue};
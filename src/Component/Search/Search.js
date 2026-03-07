import React, { useState,useEffect } from 'react'

export default function Search({app,funStore,storeid,...props}) {

    const [line,setLine]=useState()
    const {id,name}=app
    useEffect(() =>{
    setLine(id === storeid ? 'underline decoration-2 underline-offset-4 text-blue-900' : '');
  }, [id,storeid]);

  return (
    <div>
      <li 
        className={`p-4 px-6 rounded-xl cursor-pointer transition-all duration-300 hover font-medium text-lg flex items-center gap-3 group ${line}`} 
        onClick={() => funStore(id)}
      >
        <span className="group-hover:translate-x-2 transition-transform duration-300">
          {name}
        </span></li>
    </div>
  )
}
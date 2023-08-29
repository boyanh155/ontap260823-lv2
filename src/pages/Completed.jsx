import React, { useEffect, useState } from 'react'
import List from '../components/List'

const Completed = () => {
    let list = localStorage.getItem('todolist') 
    if(list){
        list = JSON.parse(list)
    }
    console.log(list)
    const [comData,setComData] = useState([])
    useEffect(()=>{
        const data =list.filter(v=>v.state ==='Completed')
        setComData(data)
    },[])
  return (
    <List data={comData} setData={setComData}/>
  )
}

export default Completed
import React, { useEffect, useState } from 'react'

const Comp2 = () => {
    const [name,setName]=useState(()=>{
        const savedName=localStorage.getItem('name')
        return savedName? JSON.parse(savedName):"";
    })
    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name))
    },[name])
    const handleChange=(event)=>{
        setName(event.target.value)
    }
    const handleclear=()=>setName("")
  return (
    <>
    <div className='user_container'>your name:{name}
    <input type="text" value={name} onChange={handleChange} />
    <button onClick={handleclear}>clear</button>

</div>    </>
    
  )
}

export default Comp2
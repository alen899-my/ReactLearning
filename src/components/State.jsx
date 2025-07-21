import React from 'react'
import { useState } from 'react'
import "../styles/Home.css"
const State = () => {
    const [count,setCount]=useState(0)
    const [friend,setFriend]=useState(["alen","james"])
    const [movie,setmovie]=useState({
        title:"monkey pen",
        rating:7,
    })
    const [filims,setFilims]=useState([
        {id:1,title:"spiderman",rating:7},
        {id:2,title:"nfs",rating:9},
    ])
    const change=()=>setCount(count+1)
    const decrease=()=>setCount(count-1)
    const addfrind=()=>setFriend([... friend,"beena"])
    const removefrind=()=>setFriend(friend.filter(f=>f!="alen"))
    const changeRating=()=>{
      
        setmovie({...movie,rating:5})
    }
    const changeTitle=()=>{
        setFilims(filims.map(f=>f.id==1?{...f,title:"alen"}:f))
    }
  return (
    <div className='user_container'>
        <h1>{count}</h1>
        <button onClick={change}>+</button>
        <button onClick={decrease}>-</button>
    <section className='user_container'>
        <ul>
            {friend.map((f)=>(
                <li key={Math.random()}>{f}</li>
            ))}
        </ul>
        <button onClick={addfrind}> add a new item</button>
        <button onClick={removefrind}> remove item</button>
    </section>

    <section className='user_container'>
        <h1>{movie.title}</h1>
        <h2>{movie.rating}</h2>
        <button onClick={changeRating}>change rating</button>

    </section>

    <section className='user_container'>
            {filims.map((f)=>(
                <li key={f.id}>{f.title}</li>
            ))}
            <button onClick={changeTitle}>change</button>
    </section>
    </div>
  )
}

export default State
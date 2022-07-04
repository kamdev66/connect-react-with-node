import React,{useState,useEffect} from 'react'

function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{
     fetch('/api/user')
     .then((res)=>{return res.json()})
     .then((data)=>{setUser(data.employees)})
  },[])
  return (
    <div>
      {
        user.map((val,index)=>{
          return(
            <>
             <h1 key={index}>Name: {val.name} Email: {val.email}</h1>
            </>
          )
        })
      }
    </div>
  )
}

export default App
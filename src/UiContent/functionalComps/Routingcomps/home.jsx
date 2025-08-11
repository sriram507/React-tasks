import React, {useEffect} from 'react'

export default function Home() {
useEffect(()=>{
  console.log("mounted")
},[])

useEffect(()=>{
  return ()=>{
    console.log("unmounted")
  }
})

  return (
    <div>Home</div>
  )
}



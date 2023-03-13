import React,{useState} from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitleOne() {
    const [count,setcount] = useState(0)

    useDocumentTitle(count)
  return (
    <>
    <div>DocTitleOne</div>
    <button onClick={()=>setcount(count+1)}> count-{count}</button>
    </>
    
  )
}

export default DocTitleOne
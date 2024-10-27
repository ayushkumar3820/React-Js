import React from 'react'

export default function ContextMenu({ menuPosition, setMenuPosition,SetExpenses,rowId}) {
  if(!menuPosition.left) return
  return (
    <div className="context-menu" style={{...menuPosition}}>
      <div onClick={()=>{
        console.log('enditing')
        setMenuPosition({})
      }}>Edit</div>
      <div onClick={()=>{
        SetExpenses((preState)=>preState.filter((expense)=>expense.id !== rowId))
        setMenuPosition({})
      }}>Delete</div>
    </div>
  )
}
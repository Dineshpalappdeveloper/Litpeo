import React from 'react'
import "../../App.css"
const DataCard = ({size,month,bgColor}) => {
  return (
    <div className='dataParent'>
      <div className='data' style={{height:`${size}`, backgroundColor:`${bgColor}`}}>

      </div>
      <div>
        <span>{month}</span>
      </div>
    </div>
  )
}

export default DataCard
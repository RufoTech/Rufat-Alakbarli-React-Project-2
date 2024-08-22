import React from 'react'
interface buttonProps{

inTextBtn:string,
klassAdi:string
}
const Button:React.FC<buttonProps> = ({inTextBtn,klassAdi}) => {
  return (
    <div>
        <button className={klassAdi}>{inTextBtn}</button>
        
        </div>
  )
}

export default Button
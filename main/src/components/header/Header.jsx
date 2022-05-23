import React from 'react'
import "./header.scss"


export default function Header() {
  return (
    <div className='header'>
        <div className="text">
            <h1>Page.</h1>
            <h2>Layout</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quam autem fugiat 
                eveniet nihil distinctio beatae accusamus aspernatur suscipit, ipsa natus provident optio 
                deleniti ipsum fuga, iure ut voluptatibus! Voluptatum.</h3>
            
            <button className='btn'>
               <a href="https://github.com/andre-bandeli"> See more</a>
            </button>
        </div>
       
    </div>
  )
}

import React from 'react';
import pic from '../../assets/pic1.png'
import './More.css'

export default function More() {
  

  return (
    <div>
        <div className="mains">
            <div className="picture">
                <img src={pic} className='img_item'/>
                <img src="" className='img_item'/>
            </div>
             <div className="text">
                <h3>
                World Best Travel Agency <br /> Company Since 2008.
                </h3>
                
             </div>
        </div>


    </div>
  )
}

import React from 'react'
import './UserDetails.css'
function UserDetails(props) {
  const items = props.data.data
  const loading = props.loading
  console.log(loading);
  return (
    <div className='user-cnt'>
    {loading ? "": items.map((item,i)=>(
      <div className='details' key={i}>
      
          <img src={item.avatar} alt="" className="avatar" />
          
          <div className="detail">
            <p><span id='title'>Name : </span>{item.first_name} {item.last_name}</p>
            <p> <span id='title'>Email : </span>{item.email}</p>
          </div>
      </div>
      ))}
      
      </div>
    
    
  )
}

export default UserDetails
import React,{useState} from 'react'
import UserDetails from '../UserDetails/UserDetails';
import './UserCard.css'
import Loading from 'react-loading-components';
import axios from 'axios'
import logo from "./logo.png"
import profile from "./profile.png"

function UserCard() {

  const [data,setData] = useState("");
  const [loading,setLoading] = useState(false);

  const getUser = ()=>{
    axios("https://reqres.in/api/users?page=1")
    .then(response=>{
      setData(response.data);
    })
    .then(setLoading(true))
    .catch(error =>{
      console.log(error)
    }).finally(()=>{
      setLoading(false);
    })
  }
console.log(data );
  return (
    <div className='container'>
        {loading? <div className="loading">
          <Loading type='bars' width={50} height={50} fill='#395B64' />
        </div>
          :
        
      <div className="card">
      <nav className='nav-bar'>
        <img src={logo} alt="" className='logo' width={40} height={40}/>
        <button className='btn' onClick={getUser}>
          Get User
        </button>
        
        {data && !loading ?<UserDetails data={data} loading={loading}/>:""}
      </nav>
      <div className='profile'>

      <img src={profile} alt="" width={200} height={200}   />
      </div>

      </div>
      }
    </div>
  )
}

export default UserCard
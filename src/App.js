import UserCard from './Components/UserCard/UserCard'
import {useEffect,useState} from "react"
import Loading from 'react-loading-components';
import "./app.css"

function App() {
  const [mainload,setMainload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setMainload(false);
    }, 2000);
  }, []);
  return (
    <div >

      {mainload ?
      <div className='mainload'>

      <Loading type='bars' width={50} height={50} fill='#395B64' />
      </div> 
      
      :<UserCard/>}

    </div>
  );
}

export default App;

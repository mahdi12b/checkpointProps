import React from 'react'
import './components/profile/style.css';
import Profile from './components/profile/ProfileComponents'
import Pdp from './assets/pdp.jpg'


const App = () => {
  let handleAlert = (fullName) => {
    alert(`hi my name is ${fullName}`)
  }
  
  return (
    <div className="App">
      <div className='Card'>
    
      <img className='image-container' src={Pdp} width='500' alt='pdp' />
      <Profile
        fullName='Mahdi Hachem'
        bio='I like dogs'
        profession='developer'
        handleAlert={handleAlert}
      >

      </Profile>
      
      
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import './feedback.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faFaceSadTear } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ThankYou from './ThankYou'
export default function Feedback() {
  // let address = useHistory()
  // let call = ()=>{
  //   address.push('/thankYou')
  // }

  function disp(){
    let datael = document.getElementById('fd');
    let data = `<div className='fd'>
        <h1>❤️</h1>
        <h2>Thank You!</h2>
        <p>ThankYou we will use your feedback to improve our service</p>
    </div>`
    datael.innerHTML = data
    
  }

  return (
    <div className='feedbackContainer'>
        <div className='feedback' id="fd">
            <h1 style={{textAlign:"justify"}}>How satisfied are you with our service?</h1>
            <BrowserRouter>
            <div className='emoji'>
                <Button variant='secondary' onClick={disp}><h1><FontAwesomeIcon icon={faFaceSmile} shake style={{color:"#eab806"}} />Happy</h1></Button>
                <Button variant='secondary' onClick={disp}><h1><FontAwesomeIcon icon={faFaceSmile} shake style={{color: "#eab806",}} />None</h1></Button>
                <Button variant='secondary' onClick={disp}><h1><FontAwesomeIcon icon={faFaceSadTear} shake style={{color: "#eab806",}} />Sad</h1></Button>

            </div>
            <Routes>
              <Route path='/thankYou' element={<ThankYou/>}/>
            </Routes>
            </BrowserRouter>
        </div>
      
    </div>
  )
}

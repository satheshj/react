import React from 'react'

function SuperOverLeague() {
    let imgRcb = "https://assets.ccbp.in/frontend/react-js/rcb-img.png";
    let imgCsk = " https://assets.ccbp.in/frontend/react-js/csk-img.png";
  return (
    <div className='container'>
        <h1 className='title'>Super Over League</h1>
        <div>
            <img src={imgRcb} className='responsive-img'/>
            <img src={imgCsk} className="responsive-img"/>
        </div>
      
    </div>
  )
}

export default SuperOverLeague

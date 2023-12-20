import React, { useState } from 'react'
import './fruitCounter.css'
import { Button, Card } from 'react-bootstrap'

function FruitCounter() {
  let [mangoCount, setMangoCount] = useState(0)
  let [bananaCount, setBananaCount] = useState(0)

  return (
    <div className='mainContainer'>
      <div className='fruitContainer'>
        <h1>Bob ate {mangoCount} <span style={{ color: "yellow" }}>mangoes</span> and {bananaCount} <span style={{ color: "yellow" }}>bananas</span></h1>
        <div className='fruitContainerBody'>
          {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYodab6d2CQjGcb3bYjZhzgb0Pcv69Ai5Bfg&usqp=CAU' className='responsive-img' height={'200px'} width={'200px'} />
          
          <img src='https://gourmetgarden.in/cdn/shop/products/bananapachbale_5796b09b-5c41-4dc5-811d-8a664d8cf03c_grande.jpg?v=1652424878' className='responsive-img' height={'200px'} width={'200px'} /><br />
          <button onClick={() => setMangoCount(mangoCount + 1)}>Eat Mango</button> <button onClick={() => setBananaCount(bananaCount + 1)}>Eat Banana</button> */}
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYodab6d2CQjGcb3bYjZhzgb0Pcv69Ai5Bfg&usqp=CAU" className='responsive-img' height={'200px'} width={'200px'}/>
            <Card.Body>
              
              
              <Button variant="warning" onClick={() => setMangoCount(mangoCount + 1)}>Eat Mango</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://gourmetgarden.in/cdn/shop/products/bananapachbale_5796b09b-5c41-4dc5-811d-8a664d8cf03c_grande.jpg?v=1652424878" className='responsive-img'height={'200px'} width={'200px'}/>
            <Card.Body>
              
              
              <Button variant="warning" onClick={() => setBananaCount(bananaCount + 1)}>Eat Mango</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default FruitCounter

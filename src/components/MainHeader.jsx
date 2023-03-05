import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <div>
      <header className='main__header'>
        <div className='container main__header-container'>
            <div className='main__header-left'>
                <h4>#100DaysOfWorkOut</h4>
                <h1>Join The Legends Of The Fitness World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum!
                </p>
                <Link to="/plans" className="btn lg">Get Started</Link>
            </div>
            <div className='main__header-right'>
                <div className='main__header-circle'></div>
                <div className='main__header-image'>
                    <img src="https://www.transparentpng.com/thumb/fitness/eIf2Ob-fitness-free-cut-out.png" alt="fitness free cut out @transparentpng.com"></img>
                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default MainHeader

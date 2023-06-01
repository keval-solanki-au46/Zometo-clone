import React from 'react'
import './Cities.scss'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Cities = () => {
  return (
    <div className="cities">
        <h1>Popular Localitions in and around <span>Bhavnagar</span></h1>
            
           <div className="cityContainer">
            <div className="city">
                <div className="cityleft">
                    <h3>Sanskar mandal</h3>
                    <span>345 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Top-3</h3>
                    <span>300 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Ram mantra</h3>
                    <span>330 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Nilam Bag</h3>
                    <span>390 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Bor-Talav</h3>
                    <span>250 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Ghogha-Circle</h3>
                    <span>400 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Sardar Nagar</h3>
                    <span>290 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>Vaghavadi Road</h3>
                    <span>30 Places</span>
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            <div className="city">
                <div className="cityleft">
                    <h3>See More</h3>
                  
                </div>
                <div className="icons">
                    <ChevronRightIcon />
                </div>
            </div>
            
           </div>
    </div>
  )
}

export default Cities
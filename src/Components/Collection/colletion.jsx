import React from 'react'
import collection1 from '../../Assets/Image/collection1.webp'
import collection2 from '../../Assets/Image/collection2.webp'
import collection3 from '../../Assets/Image/collection3.webp'
import collection4 from '../../Assets/Image/collection4.webp'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './collection.scss'

const colletion = () => {
  return (
        <div className="collection">
            <h1>Collection</h1>
            <div className="collectiontext">
                <p> Explore curated lists of top restaurants, cafes, pubs, and bars in
          Bhavnagar, based on trends</p>
          <span>All collection in Bhavnagar <KeyboardArrowRightIcon /> </span>
            </div>

            <div className="collectionCard">
                <div className="collectionimg">
                    <img src={collection1} alt="collection1" />
                    <h3>10 Must-Visit Places for Christmas</h3>
                    <span>9 Places<KeyboardArrowRightIcon /></span>
                </div>
                <div className="collectionimg">
                    <img src={collection2} alt="collection2" />
                    <h3>7 Finest Buffet Places</h3>
                    <span>7 Places<KeyboardArrowRightIcon /></span>
                </div>
                <div className="collectionimg">
                    <img src={collection3} alt="collection3" />
                    <h3>Top 8 Picturesque Cafes</h3>
                    <span>7 Places<KeyboardArrowRightIcon /></span>
                </div>
                <div className="collectionimg">
                    <img src={collection4} alt="collection4" />
                    <h3>10 Best Luxury Dining Places</h3>
                    <span>10 Places<KeyboardArrowRightIcon /></span>
                </div>
            </div>
        </div>
  )
}

export default colletion
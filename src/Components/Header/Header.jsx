import React from 'react'
import './Header.scss'
import logo from '../../Assets/Image/Zomato-Logo.png'
const Header = () => {
  return (

    <div className="header">
            <nav>
                <span>Get the App </span>
                <div className='right'>
                    <span>Investor Relations</span>
                    <span>Add Restaurants</span>
                    <span>Log In</span>
                    <span>Sign In</span>
                </div>
            </nav>

            <div className="headercontent">
                    <img src={logo} alt="logo" />
                    <h3>Discover the best food & drinks in Bhavnagar</h3>

                    <div className="input">
                            <select>
                                    <option value="bhavnagar">Bhavnagar</option>
                                    <option value="ahemdabad">Ahemdabad</option>
                                    <option value="surat">Surat</option>
                                    <option value="amreli">Amreli</option>
                                    <option value="junagadh">Junagadh</option>
                                    <option value="rajkot">Rajkot</option>
                            </select>

                            <input type="text" placeholder='Search for restaurants' />
                    </div>
            </div>
    </div>
  )
}

export default Header
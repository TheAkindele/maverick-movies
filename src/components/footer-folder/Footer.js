import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <Link to='/' className="foot-logo">
                    maverickMOVIES
            </Link>
            </div>
            <div className="phone">
                <p>08123456789</p>
                <p>07123456789</p>
                <p>06012345678</p>
            </div>
            <div className="contact">
                <p>Our address</p>
                <p>1, Aso drive, asokoro, aso rock, Abuja</p>
            </div>
        </div>
    )
}

export default Footer

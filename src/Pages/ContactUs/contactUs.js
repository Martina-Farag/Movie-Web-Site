import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
            
      const navigate= useNavigate()

  const handleNavigation=()=>{

      navigate("/about")

  }

    return (
        <div>
            Contact Us
            <button className="btn btn-primary" onClick={()=>{handleNavigation()}}>
                Go To About Us</button>
        </div>
    );
}

export default ContactUs;

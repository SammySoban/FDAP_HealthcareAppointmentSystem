import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
    <div className='hero'>
      <div className='content'>
      <div className='textt' style={{color:'black', marginBottom:'24px'}}>HealthCare Appointment System</div>
      </div>
      <Link

              className="main-button"
              style={{
                color:'black',
                borderRadius: 20,
                width: "200px",
                height: "50px",
                justifyContent: 'center',
                alignitems: 'center'
              }}

              sx={{
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}

              to="/allEvents"
            >
              View All Appointments
            </Link>
    </div>

    <div>
    <div className='content-box1'>
    <div style={{ marginTop:'40px', marginBottom:'24px', fontWeight: 600, fontSize:'x-large'}}>Looking for Appointments</div>
    <Link

              className="second-button"
              style={{ 
                color:'white',
                borderRadius: 20,
                width: "200px",
                height: "50px",
                justifyContent: 'center',
                alignitems: 'center'
              }}

              sx={{
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}

              to="/allEvents"
            >
             All Appointments
            </Link>
    </div>
    <div className='content-box2'>
    <div style={{ marginTop:'40px', marginBottom:'24px', fontWeight: 600, fontSize:'x-large'}}>Looking for Appointments</div>
    <Link

              className="second-button"
              style={{ 
                color:'white',
                borderRadius: 20,
                width: "200px",
                height: "50px",
                justifyContent: 'center',
                alignitems: 'center'
              }}

              sx={{
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}

              to="/signup"
            >
             Sign Up Now
            </Link>
    </div>
    </div>
    </div>
  )
}

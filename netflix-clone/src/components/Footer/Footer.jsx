import React from 'react'
import "./footer.css"
import FaceBookOUtLinedIcon from '@mui/icons-material/FaceBookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div>
      <div className='footer_outer_container'>
        <div className='footer_inner_container'>
          <div className='footer_icons'>
            <FaceBookOUtLinedIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
          </div>
          <div className='footer_data'>
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='copy-right'>
              &copy; 1997-2024 Netflix, Inc. All rights reserved.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer

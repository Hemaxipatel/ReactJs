import React from 'react'
import { Container } from 'react-bootstrap'
import './FooterCom.css'
import { Facebook, Instagram, Linkedin, Rss, Twitter } from 'lucide-react'

function FooterCom() {
  return (
    <>
      <div className='footer-main'>
        <div className="footer-bg">
          <Container>
            <div className="footer-flex">
              <div className="box-1">
                <div className="title-1">
                  <h5 style={{ textTransform: 'uppercase' }}>contact info</h5>
                  <ul style={{ paddingInlineStart: '0px' }}>
                    <li>Address: 123 Main Street,Anytown,</li>
                    <li>CA 12345 - USA</li>
                    <li>Phone: (012) 800 000 789</li>
                    <li>Fax: (012) 800 888 789</li>
                    <li>Email: sales@domain.com</li>
                  </ul>
                  <div className="social-icons">
                    <div className="facebook-icon">
                      <a href=""><Facebook color="#ffffff" /></a>
                    </div>
                    <div className="twitter-icon">
                      <a href=""><Twitter color="#ffffff" /></a>
                    </div>
                    <div className="insta-icon">
                      <a href=""><Instagram color="#ffffff" /></a>
                    </div>
                    <div className="linkedin-icon">
                      <a href=""><Linkedin color="#ffffff" /></a>
                    </div>
                    <div className="connectivity-icon">
                      <a href=""><Rss color="#ffffff" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-2">
                <div className="title-2">
                  <h5 style={{ textTransform: 'uppercase' }}>information</h5>
                  <ul style={{ paddingInlineStart: '0px' }}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Quick Contact</li>
                    <li>Blog Pages</li>
                    <li>Concord History</li>
                    <li>Client Feed</li>
                  </ul>
                </div>
              </div>
              <div className="box-3">
                <div className="title-3">
                  <h5 style={{ textTransform: 'uppercase' }}>extras</h5>
                  <ul style={{ paddingInlineStart: '0px' }}>
                    <li>Concord History</li>
                    <li>Client Feed</li>
                    <li>About Us</li>
                    <li>Quick Contact</li>
                    <li>Blog Pages</li>
                  </ul>
                </div>
              </div>
              <div className="box-4">
                <div className="title-4">
                  <h5 style={{ textTransform: 'uppercase' }}>get the app</h5>
                  <p>Timemart App is now available on google play & App Store. Get it now.</p>
                </div>
              </div>
            </div>
          </Container>

          <hr style={{ height: '2px', width: '100%', backgroundColor: 'white', marginBlockEnd: 0 }} />
          <Container>
            <h6 style={{ padding: '40px 0px', color: 'white', marginBottom: 0, textAlign: 'center' }}>Copyright © Timemart 2023. All Right Reserved.</h6>
          </Container>
        </div >
      </div >
    </>
  )
}

export default FooterCom
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import im3 from './image/im3.jpg';
import pf3 from './image/pf3.jpg';
import './Css/About.css';

function About() {
  const message =
    "At the heart of our website lies a deep passion for the rich cultural heritage that defines our diverse nation. We are dedicated to preserving and celebrating the traditions, art, history, and stories that have been passed down through generations. Our mission is to bring the beauty of our culture to the forefront, offering a platform where history meets the present, and where every visitor can explore the vibrant tapestry of our heritage. Join us on this journey as we uncover the hidden gems of our cultural legacy, and share in the pride of our shared identity.";

  return (
    <section className="section-white">
      <a href="/home" className="back-to-home">Home</a> 
      
      <div className="container3">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">About Param-Sanskrit</h2>
            <p className="section-subtitle">{message}</p>
          </div>
          <h2 className="section-title">The Team Behind Param-Sanskrit</h2>

          {/* Team Member Profiles */}
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={im3} className="team-img" alt="Angshuman Kundu" />
              <h3>ANGSHUMAN KUNDU</h3>
              <div className="team-info">
                <p>MEMBER 1</p>
                <p>Techno Main Salt Lake</p>
                <p>CSE(AIML)</p>
                <ul className="team-icon">
                  <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={im3} className="team-img" alt="Bishal" />
              <h3>BISHAL</h3>
              <div className="team-info">
                <p>MEMBER 2</p>
                <p>Techno Main Salt Lake</p>
                <p>CSE(AIML)</p>
                <ul className="team-icon">
                  <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={pf3} className="team-img" alt="Ankit Chatterjee" />
              <h3>ANKIT CHATTERJEE</h3>
              <div className="team-info">
                <p>MEMBER 3</p>
                <p>Techno Main Salt Lake</p>
                <p>CSE(AIML)</p>
                <ul className="team-icon">
                  <li><a href="https://www.instagram.com/ankit_chatterjee_04?igsh=MW9leDZxb210aDIxcg==" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="https://www.linkedin.com/in/ankit-chatterjee-542b5a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="https://www.facebook.com/ankitchatterjee2004?mibextid=ZbWKwL" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={im3} className="team-img" alt="Bilash" />
              <h3>BILASH</h3>
              <div className="team-info">
                <p>MEMBER 1</p>
                <p>Techno Main Salt Lake</p>
                <p>CSE(AIML)</p>
                <ul className="team-icon">
                  <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={im3} className="team-img" alt="Aritra" />
              <h3>ARITRA</h3>
              <div className="team-info">
                <p>MEMBER 1</p>
                <p>Techno Main Salt Lake</p>
                <p>CSE(AIML)</p>
                <ul className="team-icon">
                  <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={im3} className="team-img" alt="Bilash" />
              <h3>BILASH</h3>
              <div className="team-info">
                <p>MEMBER 1</p>
                <p>Techno Main Salt Lake</p>
                <p>CSE(AIML)</p>
                <ul className="team-icon">
                  <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

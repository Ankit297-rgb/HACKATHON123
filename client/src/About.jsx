import React, { useEffect } from "react";
import Navbar from './Navbar'; // Import Navbar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Css/About.css';

// Import team member images
import pf1 from './image/pf1.jpg';
import pf2 from './image/pf2.jpg';
import pf3 from './image/pf3.jpg';
import pf4 from './image/pf4.jpg';
import pf5 from './image/pf5.jpg';
import pf6 from './image/pf6.jpg';
import pf7 from './image/grp.jpg';
import { useNavigate } from "react-router-dom";

function About({ user, onLogout }) {
  const message ="At the heart of our website lies a deep passion for the rich cultural heritage that defines our diverse nation. We are dedicated to preserving and celebrating the traditions, art, history, and stories that have been passed down through generations. Our mission is to bring the beauty of our culture to the forefront, offering a platform where history meets the present, and where every visitor can explore the vibrant tapestry of our heritage. Join us on this journey as we uncover the hidden gems of our cultural legacy, and share in the pride of our shared identity.";
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);
  
  return (
    <>
      <Navbar user={user} onLogout={onLogout} /> {/* Include Navbar */}
      <section className="section-white">
        <div className="container5">
          <div id="ab" className="row">
            <div className="col-md-6">
              <h2 className="section-title">About Param-Sanskrit</h2>
              <p className="section-subtitle">{message}</p>
            </div>

            <div className="col-md-5">
              <div className="row">
                  <img src={pf7} className="grp-img" alt="group pic" />
              </div>
            </div>
            <h2 className="section-title">The Team Behind Param-Sanskrit</h2>

            {/* Team Member Profiles */}
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={pf2} className="team-img" alt="Bishal Das" />
                <h3>BISHAL DAS</h3>
                <div className="team-info">
                  <p>Full-Stack Developer</p>
                  <p>Techno Main Salt Lake</p>
                  <p>CSE(AIML)</p>
                  <ul className="team-icon">
                    <li><a href="https://www.instagram.com/_bishal_007_" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/bishal-das-xyz007" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100028801153766&mibextid=ZbWKwL" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={pf1} className="team-img" alt="Angshuman Kundu" />
                <h3>ANGSHUMAN KUNDU</h3>
                <div className="team-info">
                  <p>Front-end Developer</p>
                  <p>Techno Main Salt Lake</p>
                  <p>CSE(AIML)</p>
                  <ul className="team-icon">
                    <li><a href="https://www.instagram.com/instra_sun?igsh=MTV0enkxN2Q0MW01OA==" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/angshuman-kundu-5b6595253" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
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
                  <p>Full-Stack Developer</p>
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
                <img src={pf4} className="team-img" alt="Bilash Mallick" />
                <h3>BILASH MALLICK</h3>
                <div className="team-info">
                  <p>Front-end Developer</p>
                  <p>Techno Main Salt Lake</p>
                  <p>CSE(AIML)</p>
                  <ul className="team-icon">
                    <li><a href="https://www.instagram.com/pikuu_artwork?utm_source=qr&igsh=b2RkM3dseHpxMG5i" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/bilash-mallick-020915270" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.facebook.com/share/eLbrkZyjq5Z1gaT5/?mibextid=qi2Omg" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={pf5} className="team-img" alt="Aritra Banarjee" />
                <h3>ARITRA BANARJEE</h3>
                <div className="team-info">
                  <p>Back-end Developer</p>
                  <p>Techno Main Salt Lake</p>
                  <p>CSE(AIML)</p>
                  <ul className="team-icon">
                    <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.linkedin.com/in/aritra-banerjee-3b1ab932a" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={pf6} className="team-img" alt="Riddhi Santra" />
                <h3>RIDDHI SANTRA</h3>
                <div className="team-info">
                  <p>Front-end Developer</p>
                  <p>Techno Main Salt Lake</p>
                  <p>CSE(AIML)</p>
                  <ul className="team-icon">
                    <li><a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://in.linkedin.com/in/riddhi-santra" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
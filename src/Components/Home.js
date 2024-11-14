import './Home.css';
import './Header';
import Header from './Header';

import { SocialIcon } from 'react-social-icons';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
  return (
    <div className='social-icons'>
      <SocialIcon url="https://www.instagram.com/enactusiitb?igshid=OGQ5ZDc2ODk2ZA==" className="social-icon" />
      <SocialIcon url="https://twitter.com/enactus" className="social-icon" />
      <SocialIcon url="https://www.youtube.com/@EnactusOrg" className="social-icon" />
      <SocialIcon url="https://www.linkedin.com/company/enactus/" className="social-icon" />
    </div>
  );
};

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Navbar */}
      <Header />
      <div className="App">
        {/* Logo */}
        <section className='Logo'>
          <div className="blank"></div>
          <div className="iitb-photo">
            <Link to="/">
              <img className="bg-img" src={require('../Images/background-image-IITB.png')} alt="IITB" />
            </Link>
            <div className="tagline">
              <p>ENSPIRE</p>
              <p>ENACTUS</p>
              <p>ENTREPRENUERSHIP</p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="about-us">
          <div className="aboutus">
            <h1 className="heading">
              About Us
            </h1>
            <div className="imgs">
              <img src={require('../Images/img1.avif')} />
              <img src={require('../Images/img2.avif')} />
              <img src={require('../Images/img3.avif')} />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam, accusamus perspiciatis sit cumque illo obcaecati ea natus odio libero quo iste ut atque reprehenderit delectus suscipit officiis dolor aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam dolorum delectus corrupti repudiandae numquam. Accusamus at inventore, perspiciatis enim cupiditate recusandae voluptates debitis nihil beatae molestias possimus consequatur nulla!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem libero inventore itaque voluptas repellat nobis sapiente vitae laboriosam, facilis voluptatem.
            </p>
          </div>
        </section>

        {/* <div className="blank"></div> */}

        {/* Contact Us */}

        <section className="contact-us">
          <div className="contactus">
            <h1 className="heading">
              Connect with Us
            </h1>
            <p>We would love to get connected!</p>
            <div class="content">
              <div className="content-left">
                <h3>Send Your Request</h3>

                <form>
                  <div className="input-row">
                    <div className="input-group">
                      <label>Name </label>
                      <input type="text" placeholder='Full Name' />
                    </div>
                    <div className="input-group">
                      <label>E-mail Id </label>
                      <input type="email" placeholder='hello123@gmail.com' />
                    </div>
                  </div>

                  <div className="input-row">
                    <div className="input-group">
                      <label>Subject </label>
                      <input type="text" placeholder='About Event' />
                    </div>
                  </div>

                  {/* <div className="input-row"> */}
                  <label>Body </label>
                  <textarea rows="5"> Type Your Message Here</textarea>
                  {/* </div> */}

                  <button type='submit'>SEND</button>
                </form>
              </div>
              <div className="content-right">
                <h3>Reach Us</h3>

                <table>
                  <tr>
                    <td>Email Id</td>
                    <td>enactus@iitb.ac.in</td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>
                    <td>+91 123456890</td>
                  </tr>
                </table>

                <div className="social-media">
                  <SocialMediaIcons />
                </div>

              </div>




            </div>

          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
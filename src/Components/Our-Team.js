import Header from './Header';
import './Our-Team.css';
import { Team_President, Team_managers } from './Team_members_details';

import { SocialIcon } from 'react-social-icons';




const Team = () => {
  return (
    <div className='Team'>
    <section className="team">
    <Header />

      <div className="team-heading">
        <h2>Our Team</h2>
      </div>

      <div className="team-members">

        <div className="presidents">

          {
            Team_President.map((x, i) => (
              <div key={i} className='box' >
                <img src={x.img} />

                <h3 className="name">
                  {x.name}
                </h3>

                <h5 className="pos">
                  {x.pos}
                </h5>
                <div className="icons">
                  <SocialIcon url={x.emailId} className="icon" />
                  <SocialIcon url={x.linkedIn} className="icon" />
                </div>

              </div>
            ))
          }
        </div>

          <hr style={{ color: 'white', backgroundColor: 'white', height: 4 }} />

        <div className="managers">

          {
            Team_managers.map((x, i) => (
              <div key={i} className='box' >
                <img src={x.img} />

                <h3 className="name">
                  {x.name}
                </h3>

                <h5 className="pos">
                  {x.pos}
                </h5>
                <div className="icons">
                  <SocialIcon url={x.emailId} className="icon" />
                  <SocialIcon url={x.linkedIn} className="icon" />
                </div>

              </div>
            ))
          }
        </div>

      </div>

    </section>
    </div>
  );
};
export default Team;
import React, { Component } from 'react';
import dumbellIcon from '../img/dumbell-icon.png';
import appleIcon from '../img/apple-icon.png';
import bottleIcon from '../img/bottle-icon.png';
import boxingGlovesIcon from '../img/boxing-gloves-icon.png';
import coffeecupIcon from '../img/coffeecup-icon.png';
import cross1Icon from '../img/cross1-icon.png';
import cross2Icon from '../img/cross2-icon.png';
import gripperIcon from '../img/gripper-icon.png';
import kettlebellIcon from '../img/kettlebell-icon.png';
import ropeIcon from '../img/rope-icon.png';
import scaleIcon from '../img/scale-icon.png';
import shoeIcon from '../img/shoe-icon.png';
import stretchArmIcon from '../img/stretch-arm-icon.png';
import whistleIcon from '../img/whistle-icon.png';
import video from '../img/video.png';
import { Accordion, Icon } from 'semantic-ui-react';

class Challenge extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    return(
      <section className="challenge" id="challenge-section">
        <div className="challenge-section-title">
          <div className="title-video">
            <img src={video} alt="girl-running-video"/>
          </div>
          <div className="title-text-content">
            <h2 style={{fontFamily: 'Ubuntu'}}>Take the RX Life Challenge</h2>
            <p>Seven Steps. Seven Weeks. Ready, Set, Go!</p>
          </div>
        </div>
        <Accordion className="accordion">
          <Accordion.Title 
            active={activeIndex === 0} 
            index={0} 
            onClick={this.handleClick}
            className="week-one-title"
            style={{height: activeIndex === 0 ? '25rem' : '12rem'}}
          >
            <div className="title-content">
              <h1>
                <Icon name='dropdown' className="title-icon"/>
                Week 1
              </h1>
              {activeIndex === 0 &&
                <div>
                  <h3>Half Way There</h3>
                  <p>Don't stop now! This week is gonna be tough. But it's nothing you can't handle. Follow these steps to keep up the pace. </p>
                </div>
              }
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <div className="challenge-content">
              <img src={dumbellIcon} alt="dumbell-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 1 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={kettlebellIcon} alt="kettlebell-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 2 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div> 
            </div>
            <div className="challenge-content">
              <img src={coffeecupIcon} alt="coffeecup-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 3 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={scaleIcon} alt="scale-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 4 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={cross1Icon} alt="cross1-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 5 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={ropeIcon} alt="rope-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 6 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={appleIcon} alt="apple-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 7 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
          </Accordion.Content>

          <Accordion.Title 
            active={activeIndex === 1} 
            index={1} 
            onClick={this.handleClick}
            className="week-two-title"
            style={{height: activeIndex === 1 ? '25rem' : '12rem'}}
          >
            <div className="title-content">
              <h1>
                <Icon name='dropdown' className="title-icon"/>
                Week 2
              </h1>
              {activeIndex === 1 &&
                <div>
                  <h3>Half Way There</h3>
                  <p>Don't stop now! This week is gonna be tough. But it's nothing you can't handle. Follow these steps to keep up the pace. </p>
                </div>
              }
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <div className="challenge-content">
              <img src={boxingGlovesIcon} alt="boxing-gloves-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 1 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={stretchArmIcon} alt="stretch-arm-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 2 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={gripperIcon} alt="gripper-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 3 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
            <img src={bottleIcon} alt="bottle-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 4 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={whistleIcon} alt="whistle-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 5 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={shoeIcon} alt="shoe-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 6 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={cross2Icon} alt="cross2-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 7 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
          </Accordion.Content>

          <Accordion.Title 
            active={activeIndex === 2} 
            index={2} 
            onClick={this.handleClick}
            className="week-three-title"
            style={{height: activeIndex === 2 ? '25rem' : '12rem'}}
          > 
            <div className="title-content">
              <h1>
                <Icon name='dropdown' className="title-icon"/>
                Week 3
              </h1>
              {activeIndex === 2 &&
                <div>
                  <h3>Half Way There</h3>
                  <p>Don't stop now! This week is gonna be tough. But it's nothing you can't handle. Follow these steps to keep up the pace. </p>
                </div>
              }
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <div className="challenge-content">
              <img src={dumbellIcon} alt="dumbell-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 1 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={kettlebellIcon} alt="kettlebell-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 2 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div> 
            </div>
            <div className="challenge-content">
              <img src={coffeecupIcon} alt="coffeecup-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 3 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={scaleIcon} alt="scale-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 4 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={cross1Icon} alt="cross1-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 5 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={ropeIcon} alt="rope-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 6 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
            <div className="challenge-content">
              <img src={appleIcon} alt="apple-icon"/>
              <div className="challenge-content-text">
                <h3>Challenge 7 <span className="challenge-points">10 pts</span></h3>
                <h5>Seven Steps. Seven Weeks. Ready, Set, Go!</h5>
                <p>End of Summer Challenge August-September. Don't wait. Sign up now. Co-Founder and General Manager Steve Pokk opens gym in Kingsborrow. Blog Update! See Colleen's latest blog on foods to avoid.</p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion>
      </section>
    )
  }
}

export default Challenge;
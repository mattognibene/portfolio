import React from 'react';
import me from './assets/me.jpg';
import arrowRight from './assets/ic_next.svg'
import './App.css';
import IAmA from './components/IAmA.js'
import Particles from 'react-particles-js';
import colors from './util/colors.js';
import SkillsIcons from './components/skills/SkillsIcons';
import SkillsPillar from './components/skills/SkillsPillar';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
import SectionHeader from './components/SectionHeader/SectionHeader';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.content = React.createRef();
    this.scrollToContent = this.scrollToContent.bind(this)
  }

  scrollToContent() {
    this.content.current.scrollIntoView({ behavior: 'smooth' });
  }

  render () {
    let androidSkills = ['Kotlin', 'Dependency Injection (Dagger2 and Koin)', 'MVI and MVVM architecture', 'RxJava2',
      'Coroutines', 'Retrofit', 'Room', 'Jetpack', 'ARCore', 'Espresso', 'CameraX']
    let backEndSkills = ['Microservices', 'Java', 'Dropwizard', 'Postgres', 'OAuth20', 'JUnit']
    let webSkills = ['HTML', 'CSS', 'JavaScript', 'React']
    let devOpsSkills = ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
    return (
      <div className="App">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </head>
        <body className="App-body">
          <div id="introContainer" class="section">
            <h1 id="introHeader">Hello! My name is <span style={{color: colors.deepBlue, fontWeight:400}}>Matt Ognibene</span></h1>
            <div id = "iAmAContainer">
              <IAmA />
            </div>
            <div id="viewMyWorkContainer">
              <div id="viewMyWork" onClick={this.scrollToContent}>
                <p>View My Work</p>
                <img id="viewMyWorkArrow" src={arrowRight}/>
              </div>
            </div>
            <Particles id="particles"
            params={{ 
              particles: { 
                number: { 
                  value: 60, 
                  density: { 
                    enable: true, 
                    value_area: 800, 
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 30,
                    size_min: 0.1,
                    sync: false
                  }
                },
                color: {
                  value: "#bb16d2"
                },
                opacity: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 300,
                  color: "#bb16d2",
                  opacity: 0.4,
                  hwidth: 2
                },
              }
            }} />
          </div>
          <div ref={this.content} id="content" class="section">
            <div class="aboutMeContainer" id="aboutMeHeader">
              <div class="sectionHeaderContainer">
                <SectionHeader title="About Me" />
              </div>
              <div class="profile-picture-container">
                <img id="profile-picture" src={me}/>
              </div>
              <div id="aboutMeTextContainer">
                <p class="sectionText" id="aboutMeText">
                  <span style={{fontWeight:700}}>Current Employment:</span> Software Development Co-Op at <a href="https://whoop.com">WHOOP Inc</a> <br/>
                  <span style={{fontWeight:700}}>Education:</span> Northeastern University current third-year <br/>
                  <span style={{fontWeight:700}}>Major:</span> Computer Science with a minor in Math <br/>
                  <span style={{fontWeight:700}}>Location:</span> Boston, MA <br/>
                  <span style={{fontWeight:700}}>NBA Comparison: </span>Allen Iverson
                </p> 
              </div>
              <div id="aboutMeBlurbContainer">
                <p id="aboutMeBlurb">
                  Hello! My name is Matt Ognibene. <br/>
                  I am a software developer living in Boston, MA (originally from Linwood, NJ). 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div id="skillsContainer">
                <SectionHeader title="Skills"/>
                <SkillsIcons />
                <div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={[
                        {
                          proficiency: 'Strong With',
                          skills: androidSkills
                        }
                      ]}
                      percentage='90%' 
                      pillar='Android'/>
                  </div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={[
                        {
                          proficiency: 'Proficient With',
                          skills: backEndSkills
                        }
                      ]}
                      percentage='60%' 
                      pillar='Backend'/>
                  </div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={[
                        {
                          proficiency: 'Proficient With',
                          skills: webSkills
                        },
                        {
                          proficiency: 'Familiar With',
                          skills: ['jQuery', 'Bootstrap']
                        }
                      ]}
                      percentage='60%' 
                      pillar='Web' />
                  </div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={[
                        {
                          proficiency: 'Familiar With',
                          skills: devOpsSkills
                        }
                      ]}
                      percentage='30%' 
                      pillar='Dev Ops'/>
                  </div>
                </div>
              </div>
              <div id="experienceContainer">
                <SectionHeader title="Experience"/>
                <ExperienceTimeline />
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;

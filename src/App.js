import React from 'react';
import me from './assets/me.jpg';
import './App.css';
import IAmA from './components/IAmA.js'
import Particles from 'react-particles-js';
import colors from './util/colors.js';
import SkillsIcons from './components/skills/SkillsIcons';
import SkillsPillar from './components/skills/SkillsPillar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translate: 36
    }
  }

  render () {
    let androidSkills = ['Kotlin', 'Dependency Injection (Dagger2 and Koin)', 'MVI and MVVM architecture', 'RxJava2',
      'Coroutines', 'Retrofit', 'Room', 'Jetpack', 'ARCore', 'Espresso', 'Camerax']
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
                  enable: true,
                  distance: 300,
                  color: "#bb16d2",
                  opacity: 0.4,
                  hwidth: 2
                },
              }
            }} />
          </div>
          <div id="content" class="section">
            <div class="aboutMeContainer" id="aboutMeHeader">
              <h1 class="sectionHeader">About Me</h1>
              <div class="profile-picture-container">
                <img id="profile-picture" src={me}/>
              </div>
              <div id="aboutMeTextContainer">
                <p class="sectionText" id="aboutMeText">
                  Current Employment: Software Development Co-Op at <a href="https://whoop.com">WHOOP Inc</a> <br/>
                  Education: Northeastern University current third-year <br/>
                  Major: Computer Science with a minor in Math <br/>
                  Location: Boston, MA <br/>
                  NBA Comparison: Allen Iverson
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
                <h1 class="sectionHeader">Skills</h1>
                <SkillsIcons />
                <div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={androidSkills} 
                      percentage='90%' 
                      pillar='Android'
                      proficiencyLevel="Strong with"/>
                  </div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={backEndSkills} 
                      percentage='60%' 
                      pillar='Backend'
                      proficiencyLevel="Proficient with"/>
                  </div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={webSkills} 
                      percentage='60%' 
                      pillar='Web'
                      proficiencyLevel="Proficient with"/>
                  </div>
                  <div class="skillsPillarContainer">
                    <SkillsPillar
                      skills={devOpsSkills} 
                      percentage='30%' 
                      pillar='Dev Ops'
                      proficiencyLevel="Familiar With"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;

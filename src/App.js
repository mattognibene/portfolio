import React from 'react';
import Particles from 'react-particles-js';

import './App.css';

import IAmA from './components/IAmA.js'
import SkillsIcons from './components/skills/SkillsIcons';
import SkillsPillar from './components/skills/SkillsPillar';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
import SectionHeader from './components/SectionHeader/SectionHeader';
import ProjectCard from './components/projects/ProjectCard'
import ContactMe from './components/contact/ContactMe'

import colors from './util/colors.js';
import me from './assets/me.jpg';
import arrowRight from './assets/ic_next.svg'
import stoke from './assets/ic_stoke.png'
import bakedUp from './assets/ic_baked_up.jpg'
import cookiecutter from './assets/ic_cookie.png'
import deltnu from './assets/ic_delt.jpg'


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
            <h1 id="introHeader">Hello! My name is <span style={{color: colors.deepBlue, fontWeight:400}}>Matt&nbsp;Ognibene</span></h1>
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
                  value: 30, 
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
                  <span style={{fontWeight:700}}>Starting January</span> Software Development Co-Op at <a href="https://www.hubspot.com/">HubSpot</a> <br/>
                  <span style={{fontWeight:700}}>Education:</span> Northeastern University fourth-year <br/>
                  <span style={{fontWeight:700}}>Major:</span> Computer Science with a minor in Math <br/>
                  <span style={{fontWeight:700}}>Location:</span> Boston, MA <br/>
                  <span style={{fontWeight:700}}>NBA Comparison: </span>Allen Iverson
                </p> 
              </div>
              <div id="aboutMeBlurbContainer">
                <p id="aboutMeBlurb">
                  Hello! My name is Matt&nbsp;Ognibene.<br/><br/>
                  Welcome to my website showcasing my career, goals, personal projects, and more!  I am a software developer and Northeastern University student currently living in Boston, MA (originally from Linwood, NJ). I am passionate about shipping product that is not only of state of the art quality, but also 
                  aligns with my passions and improves the health, wellness, and interpersonal connections of its users. <br/><br/>
                  <span class="aboutMeSubhead">Dedicated to great product. Advocate for the end-user.</span><br/><br/>
                  Within the software industry, it is my mission to work towards creating a meaningful product that leads people to healthier and more active lives, and it is a goal
                  of mine to work with passionate designers, developers, product managers, and thought leaders to achieve this mission. <br/><br/>
                  Some other goals of mine include teaching and developing newly declared computer science students, supporting local organizations such as BARCC and JDRF New England, 
                  running a marathon, and earning 1 million bells in Animal Crossings: New Horizons.
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
              <div id="projectsContainer">
                <SectionHeader title="Projects"/>
                <ProjectCard
                  icon={stoke}
                  title="Stoke for Android"
                  content="Android app that gives an aggregate beach rating based on current weather and marine data."
                  bullets={["Pulls data from the OpenWeather API and MSW API", "Designed using clean architecture and MVI implemented through Rx streams"]}/>
                <ProjectCard
                  icon={bakedUp}
                  title="Baked Up Miami"
                  content="Developed the Baked Up Miami website to create an easier user experience, improved personal branding, and analytical tools to track revenue and manage the progress of orders."
                  bullets={["Serverless architecture", " Integrated Firebase, Calendar API, and Instagram API to create organizational business tools"]}/>
                <ProjectCard
                  icon={cookiecutter}
                  title="Rightpoint Open Source Android Template"
                  content="Contributed to the Rightpoint open-source Cookiecutter template used to generate boilerplate code and provide commonly used architectural components for new Android projects."
                  bullets={["Built custom linters and added code-coverage tools"]}/>
                <ProjectCard
                  icon={deltnu}
                  title="DeltNU for Android"
                  content="Android app used fraternities for organization and communication"
                  bullets={["Take attendance using QR codes built through Firebase ML Kit and CameraX", 
                  "View and record community service hours and see where other members are volunteering their time",
                  "One-tap and real-time voting interface",
                  "Active brother and alumni directory integrated with native contacts and messaging"]}/>
              </div>
            </div>
            <div id="contactMeContainer">
                <SectionHeader title="Let's Get in Touch!"/>
                <ContactMe />
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;

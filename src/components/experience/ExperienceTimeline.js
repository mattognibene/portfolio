import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import whooplogo from '../../assets/whoop_logo.jpeg'
import rightlabs from '../../assets/right_laps.png'
import khoury from '../../assets/khoury.jpeg'
import work from '../../assets/work.png'

class ExperienceTimeline extends React.Component {
    render() {
      var contentStyle = { background: '#fff', color: '#404040', textAlign:'left', fontFamily: 'Lato' }
      return (
        <VerticalTimeline layout="1-column" id="content">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: '7px solid  #0057c2' }}
            date="January 2020 - June 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={whooplogo}/>}>
            <h3 className="vertical-timeline-element-title">Software Development Co-Op @ WHOOP</h3>
            <h4 className="vertical-timeline-element-subtitle">Unlocking Human Performance</h4>
            <p>
            During my six month co-op at WHOOP, I worked within the Community feature-team to develop and improve the social experience between WHOOP athletes. 
            The goal of our team was to create a stickier experience within the app by creating a social web between athletes, leading to greater retention of users.<br/><br/>
            • Built and maintained new Android features for the Community facet of the app.<br/>
            • Designed, developed, and deployed scalable APIs using Java microservices.<br/>
            • Developed external-facing user interfaces using React, HTML, and CSS.<br/>
            • Implemented the Android, back-end, and web components of an integration with Strava.<br/>
            • Researched and implemented prediction-correction algorithms to smooth GPS data to 99.87% accuracy, and presented them in a tech talk to the entire engineering department.<br/>
            • Wrote scripts to aggregate data collected from beta-testers.<br/>
            </p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="January 2019 - August 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={rightlabs}/>}>
            <h3 className="vertical-timeline-element-title">Android Development Co-Op @ Rightpoint</h3>
            <h4 className="vertical-timeline-element-subtitle">We Ship Apps!</h4>
            <p>
            During my eight month co-op with Rightpoint, I worked as an Android developer building a single sign-on security app for a client consisting of four major mobile carriers. I started on this project from its very conception,
             allowing me to make a large impact on its initial foundation and play a role on deciding the best way to design its architecture. <br/><br/>
              • Developed a single sign-on security app for Android working as a software engineer.<br/>
              • Collaborated closely with designers, product managers, and developers to make the best possible product decisions as a team.<br/>
              • Advised team with technical expertise through feature refinement, design reviews, code reviews, and project estimations.<br/>
              • Worked as a team member to consistently deliver sprint commitments on time, minimize tech debt, create intuitive UX, and communicate potential product risks to the client.<br/>
              • Practiced agile methodologies as a member of scrum team.<br/>
              • Spearheaded the automated testing suite by implementing UI and integration tests with Espresso and Mockito, and configuring automatic execution of tests on BrowserStack directly from the CI/CD pipeline.<br/>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="June 2018 - January 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={work}/>}>
            <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cheesesteaks by Day, Web Apps by Night</h4>
            <p>
              As a freelancer, I consulted and worked with small businesses on how to best bring their business online. 
              On my first project, I worked with a small bakery run by a Miami Culinary Institute student to create a landing page for her company, 
              an improved and automated order form, and organizational tools to help keep track of finances, orders, and delivery dates. <br/><br/>
              • Built bakedupmiami.com using Bootstrap and jQuery. <br/>
              • Maintained and supported the site over the year of its lifetime. <br/>
              • Increased sales and received 9.8K unique visitors and 200K hits over one year. <br/>
              • Did it all while managing a cheesesteak shop on the Ocean City boardwalk. <br/>
              • See more technical details below! <br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="September 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={khoury}/>}>
            <h3 className="vertical-timeline-element-title">Started Computer Science @ Northeastern University</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <p>
              Started my journey through college in the fall of 2017 as a computer science major! 
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      )
    }
}

export default ExperienceTimeline
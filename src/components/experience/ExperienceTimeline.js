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
            The goal of our team was to create a stickier experience within the app by creating a social web between athletes, leading to greater retention of users.<br/>
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
             allowing me to make a large impact on its initial foundation and play a role on deciding the best way to design its architecture. <br/>
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
              an improved and automated order form, and organizational tools to help keep track of finances, orders, and delivery dates. <br/>
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
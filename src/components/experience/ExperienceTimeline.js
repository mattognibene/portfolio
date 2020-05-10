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
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: '7px solid  #0057c2' }}
            date="January 2020 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={whooplogo}/>}>
            <h3 className="vertical-timeline-element-title">Software Development Co-Op @ WHOOP</h3>
            <h4 className="vertical-timeline-element-subtitle">Unlocking Human Performance</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="January 2019 - September 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={rightlabs}/>}>
            <h3 className="vertical-timeline-element-title">Android Development Co-Op @ Rightpoint</h3>
            <h4 className="vertical-timeline-element-subtitle">We Ship Apps!</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      )
    }
}

export default ExperienceTimeline
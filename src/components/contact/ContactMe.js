import React from 'react'

import './ContactMe.css'

import github from '../../assets/ic_github.svg'
import mail from '../../assets/ic_mail.svg'
import twitter from '../../assets/ic_twitter.svg'
import linkedin from '../../assets/ic_linkedin.svg'

class ContactMe extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <img id="mailIcon" src={mail} />
                    <a href="mailto:ognibene.m@northeastern.edu">
                     <h4 id="email">ognibene.m@northeastern.edu</h4>
                    </a>
                </div>
                <div id="linkContainer">
                    <a href="https://www.linkedin.com/in/mattognibene/"><img class="icon" src={linkedin} /></a>
                    <a href="https://github.com/mattognibene/"><img class="icon" src={github} /></a>
                    <a href="https://twitter.com/MattOgnibene/"><img class="icon" src={twitter} /></a>
                </div>
            </div>
        )
    }
}

export default ContactMe;
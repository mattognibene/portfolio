import React from 'react'
import './ProjectCard.css'

class ProjectCard extends React.Component {

    render() {
        const bullets = this.props.bullets.map((bullet) => 
            <ul id="bulletsList">
               <li class="projectText">{bullet}</li>
            </ul>
        );
        return (
            <div id="container">
                <img src={this.props.icon} id="cardIcon"/>
                <div class="card">
                    <div class="content">
                        <h4 class="projectTitle">{this.props.title}</h4> 
                        <p class="projectText" id="projectContent">{this.props.content}</p>
                        {bullets}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;
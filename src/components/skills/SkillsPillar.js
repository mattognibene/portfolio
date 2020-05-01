import React from 'react'
import SkillsBar from './SkillsBar';
import './SkillsPillar.css'

class SkillsPillar extends React.Component {
    render() {
        const skillsList = this.props.skills.map((skill) => <li>{skill}</li>);
        return (
            <div style={{marginTop: '24px'}}>
                <h2 class="skillsHeader">{this.props.pillar}</h2>
                <SkillsBar percentage={this.props.percentage}/>
                <ul class="proficiency">
                    <lh style={{fontStyle: 'italic'}}>{this.props.proficiencyLevel}</lh>
                    {skillsList}
                </ul>
            </div>
        )
    }
}
export default SkillsPillar;
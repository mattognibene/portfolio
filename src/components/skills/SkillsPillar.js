import React from 'react'
import SkillsBar from './SkillsBar';
import './SkillsPillar.css'

class SkillsPillar extends React.Component {
    render() {
        const skills = this.props.skills.map((proficiencyGroup) => 
            <ul class="proficiency">
            <lh style={{fontStyle: 'italic'}}>{proficiencyGroup.proficiency}</lh>
                {proficiencyGroup.skills.map((skill) => <li>{skill}</li>)}
            </ul>
        );
        return (
            <div style={{marginTop: '24px'}}>
                <h2 class="skillsHeader">{this.props.pillar}</h2>
                <SkillsBar percentage={this.props.percentage}/>
                {skills}
            </div>
        )
    }
}
export default SkillsPillar;
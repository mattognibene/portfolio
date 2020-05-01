import React from 'react';
import './SkillsIcons.css';
import android from '../../assets/android.svg'
import java from '../../assets/java.svg'
import kotlin from '../../assets/kotlin.svg'
import git from '../../assets/git.svg'
import css3 from '../../assets/css3.svg'
import docker from '../../assets/docker.svg'
import html5 from '../../assets/html5.svg'
import react from '../../assets/react.svg'
import python from '../../assets/python.svg'
import javascript from '../../assets/javascript.svg'
import firebase from '../../assets/firebase.svg'
import bash from '../../assets/gnubash.svg'
import postgres from '../../assets/postgresql.svg'

class SkillsIcons extends React.Component {
    render() {
        const skills = [java, android, kotlin, git, bash, html5, css3, javascript, react, python, firebase, postgres, docker];
        return skills.map((skill) =>
        <img class="skillsIcon" src={skill} />
        );  
    }
}
export default SkillsIcons;
import React from 'react';
import './IAmA.css'

class IAmA extends React.Component {

    changeIAmText() {
        alert("hello")
    }

    render() {
        return (
        <div id="iAmAContainer">
            <h1 class="iAmA">I am</h1>
            <span class = "iAmA" id="iAmA_1">a software developer.</span>
            <span class = "iAmA" id="iAmA_2">a Northeastern University fourth-year.</span>
            <span class = "iAmA" id="iAmA_3">a computer science major.</span>
            <span class = "iAmA" id="iAmA_4">looking for co-ops and internships.</span>
        </div>
        )
    }
}

export default IAmA;
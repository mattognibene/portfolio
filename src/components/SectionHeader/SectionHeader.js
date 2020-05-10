import React from 'react'
import './SectionHeader.css'

class SectionHeader extends React.Component {
    render() {
        var sectionHeaderContainerStyle = {
            display: 'block',
            marginBottom: '36px'
        }
        return (
            <div class="sectionHeaderContainer">
                <h1 class="sectionHeader">{this.props.title}</h1>
                <div class="sectionHeaderUnderline" />
            </div>
        )
    }
}
 
export default SectionHeader;
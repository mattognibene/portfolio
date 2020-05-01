import React from 'react';
import styled from 'styled-components';

class SkillsBar extends React.Component {
    render() {
        const SkillsBarContainer = styled.div`
            width: 100%;
            height: 20px;
            margin; 0 auto;
            background: #bfbfbf;
            border-radius: 5px;
            box-shadow: 0 0 inset 5px #000;
        `;
        const SkillsBarProgress = styled.div`
            width: 0%;
            height: 20px;
            background: linear-gradient(to right, #FC466B, #3F5EFB);
            border-radius: 5px;
            box-shadow: 0 0 inset 5px #000;
        `;
        
        return (
            <SkillsBarContainer>
                <SkillsBarProgress style={{width: this.props.percentage}}/>
            </SkillsBarContainer>
        )
    }
}

export default SkillsBar;
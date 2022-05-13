import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 10px;
    background-color: #444;
    height: 10px;
    width: 100%;
    flex-direction: column;
`;

const Bar = styled.div<BarProps>`
    border-radius: 10px;
    background-color: #FFF;
    height: 100%;
    width: ${({width}) => width}%;

    transition: all 0.5s linear;
`;

type BarProps = {
    width: number;
}

type ProgressBarProps = {
    value: number;
    max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({value, max}) => {
    return (
        <Container>
            <Bar width={value / max * 100} />
        </Container>
    )
};

export default ProgressBar;
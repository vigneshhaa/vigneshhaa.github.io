
import React from 'react'
import styled, { keyframes } from 'styled-components'
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(133,76,230,0.6), 0 0 20px rgba(133,76,230,0.3); }
  50% { box-shadow: 0 0 16px rgba(133,76,230,0.9), 0 0 40px rgba(133,76,230,0.5); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 700;
    margin-top: 20px;
    background: linear-gradient(135deg, ${({ theme }) => theme.text_primary}, #854CE6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 1.5px;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.7;
    letter-spacing: 0.3px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding: 0 16px;
    }
`;

const TimelineContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* The glowing vertical timeline line */
const TimelineLine = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(133, 76, 230, 0.0) 0%,
        rgba(133, 76, 230, 0.7) 10%,
        rgba(133, 76, 230, 0.5) 50%,
        rgba(90, 50, 200, 0.7) 90%,
        rgba(90, 50, 200, 0.0) 100%
    );
    border-radius: 4px;
    box-shadow: 0 0 12px rgba(133, 76, 230, 0.3), 0 0 24px rgba(133, 76, 230, 0.1);

    @media (max-width: 768px) {
        left: 24px;
        transform: none;
    }
`;

/* Each timeline row — alternates left/right */
const TimelineRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'flex-end')};
    padding: ${({ isLeft }) => (isLeft ? '0 50% 0 0' : '0 0 0 50%')};
    position: relative;
    margin-bottom: 40px;
    animation: ${fadeInUp} 0.6s ease-out both;
    animation-delay: ${({ index }) => index * 0.15}s;

    @media (max-width: 768px) {
        justify-content: flex-start;
        padding: 0 0 0 56px;
    }
`;

/* The glowing dot on the timeline */
const TimelineNode = styled.div`
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, #854CE6, #6a3abf);
    border: 3px solid #1C1C27;
    z-index: 2;
    animation: ${({ isFirst }) => (isFirst ? pulseGlow : 'none')} 2.5s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(133, 76, 230, 0.5), 0 0 20px rgba(133, 76, 230, 0.2);
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        left: 24px;
        transform: translateX(-50%);
    }
`;

/* Card alignment wrapper */
const CardWrapper = styled.div`
    width: 90%;
    padding: ${({ isLeft }) => (isLeft ? '0 32px 0 0' : '0 0 0 32px')};

    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`;

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineContainer>
                    <TimelineLine />
                    {experiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <TimelineRow key={index} isLeft={isLeft} index={index}>
                                <TimelineNode isFirst={index === 0} />
                                <CardWrapper isLeft={isLeft}>
                                    <ExperienceCard experience={experience} />
                                </CardWrapper>
                            </TimelineRow>
                        );
                    })}
                </TimelineContainer>
            </Wrapper>
        </Container>
    )
}

export default Experience
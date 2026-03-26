import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 100%;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    /* Glassmorphism */
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(133, 76, 230, 0.15);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);

    /* Subtle gradient overlay */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, 
            transparent, 
            rgba(133, 76, 230, 0.5), 
            rgba(133, 76, 230, 0.2),
            transparent
        );
    }

    &:hover {
        transform: translateY(-6px);
        border-color: rgba(133, 76, 230, 0.4);
        box-shadow: 
            0 16px 48px rgba(133, 76, 230, 0.15),
            0 8px 24px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    @media only screen and (max-width: 768px) {
        padding: 16px;
        gap: 10px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: flex-start;
`

const ImageWrapper = styled.div`
    position: relative;
    flex-shrink: 0;
    
    &::after {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border-radius: 50%;
        background: linear-gradient(135deg, #854CE6, #5a32c8, #854CE6);
        z-index: -1;
        opacity: 0.6;
    }
`

const Image = styled.img`
    height: 48px;
    width: 48px;
    object-fit: cover;
    background-color: #171721;
    border-radius: 50%;
    border: 2px solid rgba(133, 76, 230, 0.3);
    @media only screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    letter-spacing: 0.3px;
    @media only screen and (max-width: 768px) {
        font-size: 15px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #854CE6;
    letter-spacing: 0.2px;
    opacity: 0.9;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const DateChip = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    background: linear-gradient(135deg, rgba(133, 76, 230, 0.12), rgba(90, 50, 200, 0.08));
    border: 1px solid rgba(133, 76, 230, 0.15);
    border-radius: 20px;
    padding: 4px 12px;
    margin-top: 4px;
    width: fit-content;
    letter-spacing: 0.5px;
    @media only screen and (max-width: 768px) {
        font-size: 10px;
        padding: 3px 10px;
    }
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(133, 76, 230, 0.2), 
        transparent
    );
    margin: 2px 0;
`

const GradeBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary + 'dd'};
    padding: 6px 16px;
    border-radius: 20px;
    background: rgba(133, 76, 230, 0.08);
    border: 1px solid rgba(133, 76, 230, 0.2);
    width: fit-content;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(133, 76, 230, 0.15);
        border-color: rgba(133, 76, 230, 0.4);
    }

    @media only screen and (max-width: 768px) {
        font-size: 12px;
        padding: 4px 12px;
    }
`

const GradeLabel = styled.span`
    font-weight: 700;
    background: linear-gradient(135deg, #854CE6, #a87bf0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`

const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 'cc'};
    line-height: 1.7;
    letter-spacing: 0.2px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <ImageWrapper>
                    <Image src={education.img} />
                </ImageWrapper>
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <DateChip>{education.date}</DateChip>
                </Body>
            </Top>

            <Divider />

            <GradeBadge>
                <GradeLabel>Grade:</GradeLabel> {education.grade}
            </GradeBadge>

            {education?.desc && (
                <>
                    <Divider />
                    <Description>{education.desc}</Description>
                </>
            )}
        </Card>
    )
}

export default EducationCard
import React from 'react';
import styled from 'styled-components';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

/* ---------- styled‑components ---------- */

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 80px;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 80px;
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  max-width: 600px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-top: 10px;
`;

/* ------------- component --------------- */

function ExperienceSection() {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My journey as a software engineer and the projects & companies I&apos;ve worked with.
        </Desc>

        <TimelineWrapper>
          <Timeline position="alternate">
            {experiences.map((exp) => (
              <TimelineItem key={exp.id}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{ borderColor: 'primary.main' }}
                    aria-label="Experience timeline marker"
                  />
                  <TimelineConnector sx={{ background: 'primary.main' }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: 2, px: 0 }}>
                  <ExperienceCard experience={exp} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineWrapper>
      </Wrapper>
    </Container>
  );
}

export default ExperienceSection;

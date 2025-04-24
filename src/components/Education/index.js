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
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

/* ---------- styled‑components ---------- */

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 60px;

  @media (max-width: 960px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 40px;
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
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;

  @media (max-width: 660px) {
    .MuiTimeline-root {
      margin-left: 0; /* keeps items left‑aligned on small screens */
    }
  }
`;

/* ---------------- component ------------- */

const EducationSection = () => (
  <Container id="education">
    <Wrapper>
      <Title>Education</Title>
      <Desc>
        My education has been a journey of self‑discovery and growth. Here are the key milestones.
      </Desc>

      <TimelineWrapper>
        <Timeline position="alternate">
          {education.map((edu, idx) => (
            <TimelineItem key={edu.school}>
              <TimelineContent sx={{ py: 2, px: 0 }}>
                <EducationCard education={edu} />
              </TimelineContent>

              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{ borderColor: 'primary.main' }}
                  aria-label="Education timeline marker"
                />
                {idx < education.length - 1 && (
                  <TimelineConnector sx={{ background: 'primary.main' }} />
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineWrapper>
    </Wrapper>
  </Container>
);

export default EducationSection;

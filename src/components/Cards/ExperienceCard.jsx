import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* ───────────── styled‑components ───────────── */

const Card = styled.div`
  width: 650px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 0.1px solid #306ee8;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  /* reveal icon / full text on hover */
  &:hover ${'' /* Document */} {
    display: flex;
  }
  &:hover ${'' /* Span */} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  @media (max-width: 768px) {
    width: 300px;
    padding: 10px;
    gap: 8px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary}99;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary}99;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}80;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  display: -webkit-box;
  overflow: hidden;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Skills = styled.div`
  display: flex;
  gap: 12px;
  margin-top: -10px;
  flex-wrap: wrap;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background: #000;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

/* ───────────── component ───────────── */

function ExperienceCard({ experience }) {
  const { img, role, company, date, desc, skills, doc } = experience;

  return (
    <Card>
      <Top>
        <Image src={img} alt={company} />
        <Body>
          <Role>{role}</Role>
          <Company>{company}</Company>
          <Date>{date}</Date>
        </Body>
      </Top>

      <Description>
        {desc && <Span>{desc}</Span>}

        {skills?.length > 0 && (
          <>
            <br />
            <Skills>
              <strong>Skills:&nbsp;</strong>
              {skills.map((s, idx) => (
                <Skill key={idx}>•&nbsp;{s}</Skill>
              ))}
            </Skills>
          </>
        )}
      </Description>

      {doc && (
        <a href={doc} target="_blank" rel="noopener noreferrer">
          <Document src={doc} alt="Certificate / Document" />
        </a>
      )}
    </Card>
  );
}

/* ───────────── propTypes ───────────── */

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    img: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    doc: PropTypes.string,
  }).isRequired,
};

export default ExperienceCard;

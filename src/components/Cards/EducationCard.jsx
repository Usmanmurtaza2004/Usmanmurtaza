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
  border: 0.1px solid #854ce6;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  /* reveal doc icon + full description on hover */
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

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary}99;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
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

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary}99;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}99;
  margin-bottom: 10px;
  width: 100%;

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

function EducationCard({ education }) {
  return (
    <Card>
      <Top>
        <Image src={education.img} alt={education.school} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>

      <Grade>
        <b>Grade:&nbsp;</b>
        {education.grade}
      </Grade>

      <Description>
        <Span>{education.desc}</Span>
      </Description>

      {/* Optional downloadable document (uncomment if you have one)
      <Document src={education.doc} alt="Transcript / Certificate" />
      */}
    </Card>
  );
}

/* ───────────── propTypes ───────────── */

EducationCard.propTypes = {
  education: PropTypes.shape({
    img: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    grade: PropTypes.string,
    desc: PropTypes.string,
    doc: PropTypes.string,            // if you use the Document icon
  }).isRequired,
};

export default EducationCard;

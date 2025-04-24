import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* ───────────── styled‑components ───────────── */

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  transition: all 0.8s ease-in-out;
`;

const Card = styled.div`
  width: 330px;
  height: 490px;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    filter: brightness(1.1);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  }

  &:hover ${Button} {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}26; /* 15‑20% opacity */
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DateTxt = styled.div`
  margin-left: 2px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}80;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  margin-top: 8px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}99;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background: ${({ theme }) => theme.white};
  border: 3px solid ${({ theme }) => theme.card};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

/* ───────────── component ───────────── */

function ProjectCards({ project, setOpenModal }) {
  const handleClick = () =>
    setOpenModal({ state: true, project });

  return (
    <Card onClick={handleClick}>
      <Image src={project.image} alt={project.title} />

      <Tags>
        {project.tags?.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <DateTxt>{project.date}</DateTxt>
        <Description>{project.description}</Description>
      </Details>

      <Members>
        {project.member?.map((m, i) => (
          <Avatar key={i} src={m.img} alt={m.name ?? `member-${i}`} />
        ))}
      </Members>

      {/* Uncomment if you want an explicit button instead of card click */}
      {/* <Button>View Project</Button> */}
    </Card>
  );
}

/* ───────────── propTypes ───────────── */

ProjectCards.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    member: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ProjectCards;

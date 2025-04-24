import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseRounded,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import { Modal } from '@mui/material';
import styled from 'styled-components';

/* ---------- styled‑components (unchanged visual) ---------- */

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background: #000000a7;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 50px 12px;
  padding: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin: 8px 6px 0;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.p`
  font-size: 16px;
  margin: 2px 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Desc = styled.p`
  font-size: 16px;
  margin: 8px 6px;
  color: ${({ theme }) => theme.text_primary};
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 30px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

const Label = styled.h4`
  font-size: 20px;
  margin: 8px 6px;
  color: ${({ theme }) => theme.text_primary};
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;
  list-style: none;
  padding: 0;
`;

const Tag = styled.li`
  font-size: 14px;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + 20};
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 12px 6px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

const MemberName = styled.span`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin: 12px 0;
`;

const Button = styled.a`
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: ${({ dull, theme }) =>
    dull ? theme.bgLight : theme.primary};
  color: ${({ dull, theme }) =>
    dull ? theme.text_secondary : theme.text_primary};
  transition: background 0.3s;
  &:hover {
    background: ${({ theme }) => theme.primary + 99};
  }
`;

/* ---------- component ---------- */

function ProjectModal({ openModal, setOpenModal }) {
  const { project } = openModal ?? {};

  if (!project) return null;

  return (
    <Modal
      open={openModal.state}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            sx={{ position: 'absolute', top: 10, right: 20, cursor: 'pointer' }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />

          <Image src={project.image} alt={project.title} />
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>

          <Tags>
            {project.tags?.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>

          <Desc>{project.description}</Desc>

          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project.member.map(m => (
                  <Member key={m.github ?? m.name}>
                    <MemberImage src={m.img} alt={m.name} />
                    <MemberName>{m.name}</MemberName>

                    {m.github && (
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} GitHub`}
                      >
                        <GitHub />
                      </a>
                    )}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} LinkedIn`}
                      >
                        <LinkedIn />
                      </a>
                    )}
                  </Member>
                ))}
              </Members>
            </>
          )}

          <ButtonGroup>
            {project.github && (
              <Button
                dull
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View&nbsp;Code
              </Button>
            )}
            {project.webapp && (
              <Button
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live&nbsp;Demo
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
}

/* ---------- prop types ---------- */
ProjectModal.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    project: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      github: PropTypes.string,
      webapp: PropTypes.string,
      member: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          img: PropTypes.string,
          github: PropTypes.string,
          linkedin: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ProjectModal;

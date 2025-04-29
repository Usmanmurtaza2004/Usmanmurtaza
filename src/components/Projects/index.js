import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const categories = ['all', 'web app', 'android app', 'machine learning'];

function Projects({ openModal, setOpenModal }) {
  const [selected, setSelected] = useState('all');

  // Filter helper
  const visibleProjects =
    selected === 'all'
      ? projects
      : projects.filter(p => p.category === selected);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects — from web apps to Android
          applications. Here are a few highlights.
        </Desc>

        <ToggleButtonGroup>
          {categories.map(cat => (
            <React.Fragment key={cat}>
              <ToggleButton
                active={selected === cat}
                onClick={() => setSelected(cat)}
              >
                {cat.toUpperCase()}
              </ToggleButton>
              <Divider />
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {visibleProjects.map((project, idx) => (
            <div key={project.id ?? idx}>
              <ProjectCard
                project={project}
                setOpenModal={setOpenModal}
              />
              <button onClick={() => openModal(project)}>
                View Project
              </button>
            </div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

/* -------- PropTypes to silence react/prop‑types rule -------- */
Projects.propTypes = {
  openModal: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;

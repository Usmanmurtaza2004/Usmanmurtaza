import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Categories for the toggle buttons
  const categories = ['all', 'web app', 'android app', 'machine learning'];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {categories.map((category) => (
            <React.Fragment key={category}>
              <ToggleButton 
                active={toggle === category} 
                value={category} 
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase().replace(' ', "'S")}
              </ToggleButton>
              <Divider />
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {/* Display projects based on the selected category */}
          {(toggle === 'all' ? projects : projects.filter((project) => project.category === toggle))
            .map((project) => (
              <ProjectCard 
                key={project.id}  // Ensure each project has a unique 'id'
                project={project} 
                openModal={openModal} 
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

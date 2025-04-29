import React from 'react';
import Typewriter from 'typewriter-effect';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  Title,
  TextLoop,
  Span,
  SubTitle,
  Img,
  ResumeButton,
  BioText, // Importing the styled BioText component
} from './HeroStyle';

import HeroImg from '../../images/HeroImage.png';
import { Bio } from '../../data/constants'; // ← If you later want social links

function HeroSection() {
  return (
    <section id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          {/* ---------- Left Section ---------- */}
          <HeroLeftContainer>
            <Title>
              Hi,&nbsp;I&apos;m <br />
              Usman&nbsp;Murtaza
            </Title>

            <TextLoop>
              I&nbsp;am&nbsp;a&nbsp;
              <Span>
                <Typewriter
                  options={{
                    strings: [
                      'Full‑Stack Developer',
                      'Web Developer',
                      'UI/UX Designer',
                      'Graphic Designer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>
              I specialize in modern web development, UI/UX, and graphic design.
              Building interactive&nbsp;&amp; dynamic applications is my thing.
            </SubTitle>

            {/* Displaying Bio with styled component */}
            <BioText>{Bio}</BioText>

            <ResumeButton
              href="https://drive.google.com/file/d/1Pm5g6MX-UqaGQfgHyRQzWAEZzSrm6jNw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View&nbsp;Résumé
            </ResumeButton>
          </HeroLeftContainer>

          {/* ---------- Right Section ---------- */}
          <HeroRightContainer>
            <Img src={HeroImg} alt="Illustration of Usman coding" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
}

export default HeroSection;

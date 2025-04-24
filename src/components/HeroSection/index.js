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
} from './HeroStyle';

import HeroImg from '../../images/HeroImage.png';
import { Bio } from '../../data/constants'; // ← if you later want social links

function HeroSection() {
  return (
    <section id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>

        <HeroInnerContainer>
          {/* ---------- left ---------- */}
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
              I specialize in modern web development, UI/UX and graphic design.
              Building interactive&nbsp;&amp; dynamic applications is my thing.
            </SubTitle>

            {/* replace ‶/resume.pdf″ with your real file or Drive link */}
            <ResumeButton
              href="https://drive.google.com/file/d/1Pm5g6MX-UqaGQfgHyRQzWAEZzSrm6jNw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View&nbsp;Résumé
            </ResumeButton>
          </HeroLeftContainer>

          {/* ---------- right ---------- */}
          <HeroRightContainer>
            <Img src={HeroImg} alt="Illustration of Usman coding" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
}

export default HeroSection;

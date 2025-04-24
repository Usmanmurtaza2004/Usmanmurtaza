import React from 'react';
import styled from 'styled-components';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

import { Bio } from '../../data/constants';

/* ---------- styled‑components ---------- */

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  max-width: 800px;
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialRow = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  margin: 0 1rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

/* --------------- component -------------- */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Usman&nbsp;Murtaza</Logo>

        <Nav aria-label="Footer Navigation">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>

        <SocialRow>
          <SocialIcon href={Bio.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon href={Bio.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon href={Bio.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon href={Bio.insta} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </SocialIcon>
        </SocialRow>

        <Copyright>&copy; {year} Usman&nbsp;Murtaza.All&nbsp;rights&nbsp;reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;

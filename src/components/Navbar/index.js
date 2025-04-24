import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';

import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <Nav>
      <NavbarContainer>
        {/* ---------- logo ---------- */}
        <NavLogo to="/">
          <span style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
            <DiCssdeck size="3rem" />
            <Span>Usman&nbsp;Murtaza</Span>
          </span>
        </NavLogo>

        {/* ---------- mobile icon ---------- */}
        <MobileIcon aria-label="menu toggle" onClick={toggleMenu}>
          <FaBars size={24} />
        </MobileIcon>

        {/* ---------- desktop links ---------- */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        {/* ---------- desktop button ---------- */}
        <ButtonContainer>
          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub&nbsp;Profile
          </GitHubButton>
        </ButtonContainer>

        {/* ---------- mobile menu ---------- */}
        {isOpen && (
          <MobileMenu>
            {[
              { to: '#about', label: 'About' },
              { to: '#skills', label: 'Skills' },
              { to: '#experience', label: 'Experience' },
              { to: '#projects', label: 'Projects' },
              { to: '#education', label: 'Education' },
            ].map(link => (
              <MobileLink key={link.to} href={link.to} onClick={toggleMenu}>
                {link.label}
              </MobileLink>
            ))}

            <GitHubButton
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: '#fff',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&nbsp;Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;

import React from 'react';
import styled from 'styled-components';

/* ─── styled wrapper (optional) ─── */
const Wrapper = styled.section`
  padding: 60px 0;
  line-height: 1.6;

  h2 {
    margin-bottom: 20px;
    font-size: 32px;
    text-align: center;
  }

  p {
    margin-bottom: 12px;
    max-width: 800px;
  }
`;

function About() {
  return (
    <Wrapper id="about">
      <div className="container">
        <h2>About&nbsp;Me</h2>

        <p>
          Hello! I&apos;m <strong>Usman&nbsp;Murtaza</strong>, a passionate
          <strong> Full&nbsp;Stack&nbsp;Developer</strong> based in Karachi,
          Pakistan. I am currently pursuing a B.S. in Computer Science at&nbsp;
          <strong>Ilma&nbsp;University</strong> and have developed strong skills
          in&nbsp;
          <strong>
            HTML, CSS, JavaScript, React, Oracle&nbsp;and&nbsp;PostgreSQL
          </strong>
          .
        </p>

        <p>
          My journey began with a foundation in science and engineering at&nbsp;
          <strong>Army&nbsp;Public&nbsp;College</strong> and&nbsp;
          <strong>Fazaia&nbsp;College</strong>. Since then I’ve explored the
          world of programming and design, becoming proficient with&nbsp;
          <strong>Visual&nbsp;Studio&nbsp;Code</strong>, the&nbsp;
          <strong>MS&nbsp;Office</strong> suite, and graphic‑design tools.
        </p>

        <p>
          I am fluent in&nbsp;<strong>French</strong>, and I&apos;m working on
          several exciting projects, including my own leather‑brand website,&nbsp;
          <strong>Al&nbsp;Falah&nbsp;Leather</strong>, featuring modern
          e‑commerce functionality and an international appeal.
        </p>
      </div>
    </Wrapper>
  );
}

export default About;

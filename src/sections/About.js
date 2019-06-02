/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Box, Image, Flex } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const AboutContainer = styled.div`
  h3 {
    font-weight: normal;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" label="person" />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <h1>I am Idan Lottan - a web developer.</h1>
          <AboutContainer>
            <h3>
              I have been a web developer for over 3 years and in that time I
              have gained a lot of knowledge and experience with JavaScript and
              its ecosystem - things like TypeScript, React, Node and many
              more.
            </h3>
            <h3>
              Building state-of-the-art, easy to use, user-friendly websites and
              applications is truly a passion of mine.
            </h3>
            <h3>
              In addition to my knowledge, I am actively learning and expanding
              my knowledge every day and staying up to date with trends and
              current standards in the industry
            </h3>
          </AboutContainer>
        </Fade>
      </Box>

      <Box width={[1, 1, 2 / 6]} style={{ maxWidth: '300px', margin: 'auto' }}>
        <Fade right>
          <ProfilePicture
            src="https://raw.githubusercontent.com/idanlo/portfolio/master/media/IdanLo.png"
            alt="Idan Lottan"
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
          />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);

export default About;

import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const links = [
  {
    fontAwesomeIcon: 'github',
    name: 'GitHub',
    url: 'https://github.com/idanlo',
  },
];

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[5, 6, 8]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm Idan Lottan!`}
      </Heading>

      <Heading
        as="h2"
        color="primary"
        fontSize={[4, 5, 6]}
        mb={[3, 5]}
        textAlign="center"
      >
        <TextLoop>
          {['Javascript', 'Typescript', 'Nodejs', 'React'].map(text => (
            <Text width={[300, 500]} key={text}>
              {text}
            </Text>
          ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {links.map(link => (
          <Box mx={3} fontSize={[5, 6, 6]} key={link.name}>
            <SocialLink {...link} />
          </Box>
        ))}
      </Flex>
      <SectionLink section="about">
        {({ onClick }) => <MouseIcon onClick={onClick} />}
      </SectionLink>
    </Fragment>
  </Section.Container>
);

export default LandingPage;

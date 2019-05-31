import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Post = () => (
  <Card onClick={() => window.open('', '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>

      React.js
    </EllipsisHeading>
    {
      <CoverImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        height="200px"
        alt="React.js"
      />
    }
    <Text m={3}>Hello world</Text>
  </Card>
);

Post.propTypes = {
  // title: PropTypes.string.isRequired,
  // text: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // time: PropTypes.number.isRequired,
};

const Skills = () => (
  <Section.Container id="skills" Background={Background}>
    <Section.Header name="Skills" icon="✍️" label="skills" />
    {/* <CardContainer minWidth="300px">
      {Array(5)
        .fill(0)
        .map((p, i) => (
          <Fade bottom>
            <Post key={i} />
          </Fade>
        ))}
    </CardContainer> */}
  </Section.Container>
);

export default Skills;

import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      // height={['15vh', '10vh']}
      // width={['100vw', '100vw']}
      height={['100vh', '100vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
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

const Label = styled.label``;

const Skill = ({ name, image }) => (
  <Card pb={4}>
    <EllipsisHeading m={3} p={1}>
      {name}
    </EllipsisHeading>
    <CoverImage src={image} height="200px" alt={name} />
  </Card>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Skills = () => {
  return (
    <Section.Container id="skills" Background={Background}>
      <Section.Header name="Skills" label="skills" />
      <CardContainer minWidth="300px">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p>
            <Label>

              Your Name:
              <input type="text" name="name" />
            </Label>
          </p>
          <p>
            <Label>

              Your Email:
              <input type="email" name="email" />
            </Label>
          </p>
          <p>
            <Label>

              Message:
              <textarea name="message" />
            </Label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </CardContainer>
    </Section.Container>
  );
};

export default Skills;

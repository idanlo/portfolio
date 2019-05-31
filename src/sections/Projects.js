import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Flex, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  margin-top: 205px;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const Project = ({ name, github, link, tech, description }) => {
  return (
    <Card p={0}>
      <Flex style={{ height: CARD_HEIGHT }}>
        <TextContainer>
          <span>
            <Title my={2} pb={1}>
              {name}
            </Title>
          </span>
          <Text width={[1]} style={{ overflow: 'auto' }}>
            {description}
          </Text>
        </TextContainer>

        <ImageContainer>
          <ProjectTag>
            <Flex
              style={{
                float: 'right',
              }}
            >
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={github}
                />
              </Box>
              <Box mx={1} fontSize={5}>
                {link && (
                  <SocialLink
                    name="See project"
                    fontAwesomeIcon="globe"
                    url={link}
                  />
                )}
              </Box>
            </Flex>
            <ImageSubtitle
              bg="primaryLight"
              color="white"
              y="bottom"
              x="right"
              round
            >
              {tech}
            </ImageSubtitle>
            <Hide query={MEDIA_QUERY_SMALL}>
              <ImageSubtitle bg="backgroundDark">May 30th 2019</ImageSubtitle>
            </Hide>
          </ProjectTag>
        </ImageContainer>
      </Flex>
    </Card>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  link: PropTypes.string,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetAllProjects {
      allIndexJson {
        edges {
          node {
            value {
              name
              github
              link
              tech
              description
            }
          }
        }
      }
    }
  `);
  return (
    <Section.Container id="projects" Background={Background}>
      <Section.Header name="Projects" icon="💻" Box="notebook" />
      <CardContainer minWidth="350px">
        {data.allIndexJson.edges.map(({ node }, i) => (
          <Fade bottom delay={i * 200} key={node.value.name}>
            <Project {...node.value} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  );
};

export default Projects;

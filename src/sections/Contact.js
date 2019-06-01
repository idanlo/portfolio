import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { Card } from '../components/Card';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
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

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Submit = styled.button`
  background: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  width: 100%;
  color: white;
  font-family: Cabin;
  height: 50px;
  cursor: pointer;
  font-weight: bold;
  font-size: 26px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form.attrs({
  name: 'contact',
  method: 'POST',
  'data-netlify': 'true',
  'data-netlify-honeypot': 'bot-field',
})`
  margin: 0 auto;
  width: 65%;
  font-family: Cabin;

  input {
    width: 100%;
    padding: 25px;
    margin: 10px 0;
    font-family: Cabin;
  }

  textarea {
    width: 100%;
    padding: 25px;
    margin: 10px 0;
    font-family: Cabin;
    resize: none;
  }

  ${MEDIA_QUERY_SMALL} {
    width: 85%;
  }
`;

const FormItem = ({ name }) => (
  <Card pb={4}>
    <EllipsisHeading m={3} p={1}>
      {name}
    </EllipsisHeading>
    <input
      type="text"
      style={{ width: '90%', justifySelf: 'center', margin: '0 auto' }}
    />
  </Card>
);

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
};

const Contact = () => {
  return (
    <Section.Container id="contact" Background={Background}>
      <Section.Header name="Contact" label="contact" />
      <Fade>
        <Form>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea placeholder="Message" rows="5" name="message" />
          <Submit type="submit">Submit</Submit>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        </Form>
      </Fade>
    </Section.Container>
  );
};

export default Contact;

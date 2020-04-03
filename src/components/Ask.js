import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  height: calc(100vh - 37px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 7px 12px;
  border: 1px solid #d5d5d5;
  background-color: linear-gradient(#eee, #ddd);
  font: 700 13px/18px Helvetica, arial;
`;

const TextArea = styled.textarea`
  border: 0;
  border-radius: 5px;
  height: 100px;
  color: grey;
  font-size: 0.8em;
  font-family: Roboto-Italic;
`;

class Ask extends Component {
  state = { comment: '...' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // call action
    this.setState({ comment: '' });
  };

  render() {
    return (
      <Main>
        <Container>
          <h1>Hi, how do you feel ?</h1>
          <Form onSubmit={this.handleSubmit}>
            <TextArea value={this.state.comment} onChange={this.handleChange} />
            <Button>Send</Button>
          </Form>
        </Container>
      </Main>
    );
  }
}

export default Ask;

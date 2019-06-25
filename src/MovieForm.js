import React, { Component } from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class MovieForm extends Component {
  state = {
    text: '',
  }

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;

    return (
      <form data-testid="movie-form" onSubmit={ () => submitForm({ text })}>
        <label>
          Text
          <input 
            type="text" 
            id="text"
            onChange={e => this.setState({text: e.target.value })}
          />
        </label>
        <button>
          Submit
        </button>
      </form>
    );
  }
}

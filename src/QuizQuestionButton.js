import React, {Component} from 'react';

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button_text : props.button_text
    };
  }

  handleClick() {
    this.props.clickHandler(this.state.button_text);
  }

  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>{this.state.button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton;

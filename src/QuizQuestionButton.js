import React, {Component} from 'react';

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.button_text = props.button_text;
  }
  render() {
    return (
      <li>
        <button>{this.button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton;

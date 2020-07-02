import React from 'react';

class QnA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      data: [],
    }
    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState({
      opened: !this.state.opened,
    })
  }

  render() {
    if (this.state.opened === false) {
      return (
        <div onClick={() => this.expand()}>
          <span className="QnATitleMain"><p>Questions and Answers</p></span>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.expand()}>
          <span className="QnATitleMain"><p>Questions and Answers</p></span>
        </div>
      )
    }
  }
}

export default QnA;
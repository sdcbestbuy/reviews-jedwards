import React from "react";
import QnAHeader from "./QnAComponents/QnAHeader.jsx";
import QnAMain from "./QnAComponents/QnAMain.jsx";
import QnAFooter from "./QnAComponents/QnAFooter.jsx";

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      data: [],
    };
    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    if (this.state.opened === false) {
      return (
        <div onClick={() => this.expand()}>
          <span className="bILPQnATitleMain">
            <strong>Questions and Answers</strong>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span onClick={() => this.expand()} className="bILPQnATitleMain">
            <strong>Questions and Answers</strong>
          </span>
          <div className="bILPQnAHoldContainer">
            <div className="bILPQnAHeaderContainer">
              <QnAHeader />
            </div>
            <div className="bILPQnAMainMainContainer">
              <QnAMain />
            </div>
            <div className="bILPQnAFooterContainer">
              <QnAFooter />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default QnA;

import React from "react";
import QnAHeader from "./QnAComponents/QnAHeader.jsx";
import QnAMain from "./QnAComponents/QnAMain.jsx";
import QnAFooter from "./QnAComponents/QnAFooter.jsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      data: [],
    };
    this.expand = this.expand.bind(this);
  }

  //function that opens the container of QnA
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
            <span className="bILPQnATitleMainText">
              <strong>Questions and Answers</strong>
            </span>
            <span className="bILPArrowIcon">
              {<ExpandMoreIcon style={{ fontSize: "xxx-large" }} />}
            </span>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span onClick={() => this.expand()} className="bILPQnATitleMain">
            <span className="bILPQnATitleMainText">
              <strong>Questions and Answers</strong>
            </span>
            <span className="bILPArrowIcon">
              {<ExpandLessIcon style={{ fontSize: "xxx-large" }} />}
            </span>
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

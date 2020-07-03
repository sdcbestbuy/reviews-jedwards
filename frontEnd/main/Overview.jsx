import React from 'react';
import Overviewdata from '../overviewDummyData';
import Description from './OverviewComponents/Description.jsx';
import Features from './OverviewComponents/Features.jsx';
import WhatsIncluded from './OverviewComponents/WhatsIncluded.jsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      overviewData: Overviewdata
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
          <span className="bILPOverviewTitleMain"><strong>Overview</strong><span className="bILPArrowIcon">{<ExpandMoreIcon style={{fontSize:'xxx-large'}} />}</span></span>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.expand()}>
          <span className="bILPOverviewTitleMain"><strong>Overview</strong><span className="bILPArrowIcon">{<ExpandLessIcon style={{fontSize:'xxx-large'}} />}</span></span>
          <div className="bILPOverviewTitleContents">
          <div>
            <Description data={this.state.overviewData.dummydataDescription}/>
          </div>
          <div className="bILPGrayBar">
            <Features data={this.state.overviewData.dummydataFeatures}/>
          </div>
          <div className="bILPGrayBar">
            <WhatsIncluded data={this.state.overviewData.dummydataWhatsIncluded}/>
          </div>
          </div>
        </div>
      )
    }
  }
}

export default Overview;
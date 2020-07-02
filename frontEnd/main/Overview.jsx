import React from 'react';
import Overviewdata from '../overviewDummyData';
import Description from './OverviewComponents/Description.jsx'
import Features from './OverviewComponents/Features.jsx'
import WhatsIncluded from './OverviewComponents/WhatsIncluded.jsx'

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
          <span className="bILPOverviewTitleMain"><strong>Overview</strong></span>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.expand()}>
          <span className="bILPOverviewTitleMain"><strong>Overview</strong></span>
          <div className="bILPOverviewTitleContents">
          <div>
            <Description data={this.state.overviewData.dummydataDescription}/>
          </div>
          <div>
            <Features data={this.state.overviewData.dummydataFeatures}/>
          </div>
          <div>
            <WhatsIncluded data={this.state.overviewData.dummydataWhatsIncluded}/>
          </div>
          </div>
        </div>
      )
    }
  }
}

export default Overview;
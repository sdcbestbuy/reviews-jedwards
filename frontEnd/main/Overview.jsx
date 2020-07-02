import React from 'react';

class Overview extends React.Component {
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
    if (opened === false) {
      return (
        <div onClick={() => this.expand()}>
          <span className="OverviewTitleMain"><p>Overview</p></span>
        </div>
      )
    } else {
      return (
        <div onClick={() => this.expand()}>
          <span className="OverviewTitleMain"><p>Overview</p></span>
        </div>
      )
    }
  }
}

export default Overview;
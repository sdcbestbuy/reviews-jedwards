import React from 'react';
import ComponentList from './SpecsComponents/general.jsx'
import dummydata from '../Specsdummydata'

class Specs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: dummydata,
      touched: false,
    }
    this.expand = this.expand.bind(this)
  }

  expand() {
    this.setState({
      touched: !this.state.touched,
    })
  }

  render() {
    if (this.state.touched === false) {
      return (
        <div onClick={() => this.expand()}>
          <span className='bILPSpecsTitleMain'><strong>Specifications</strong></span>
        </div>
      )
    } else {
      return (
        <div className="bILPSpecsMainHeadContainer">
          <div onClick={() => this.expand()}>
            <span className='bILPSpecsTitleMain'><strong>Specifications</strong></span>
          </div>
          <div className="bILPSpecsContainer">
            <ComponentList component={this.state.data} />
          </div>
        </div>
      )
    }
  }
}

export default Specs;
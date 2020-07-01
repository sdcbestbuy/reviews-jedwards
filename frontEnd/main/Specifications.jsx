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
          <h2 className='bILPSpecsTitleMain'><strong>Specifications</strong></h2>
        </div>
      )
    } else {
      return (
        <div>
          <div onClick={() => this.expand()}>
            <h2 className='bILPSpecsTitleMain'><strong>Specifications</strong></h2>
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
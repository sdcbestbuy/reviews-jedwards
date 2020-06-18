import React from 'react';
import Axios from 'axios';
import SummaryMain from './Components/summaryMain.jsx'
import photoHeaderList from './Components/photoHeaderList.jsx'
import ReviewsList from './Components/reviewsList.jsx'
import Footer from './Components/footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <div>
          <SummaryMain />
        </div>
        <div>
          <PhotoHeader />
        </div>
        <div>
          <ReviewsList />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
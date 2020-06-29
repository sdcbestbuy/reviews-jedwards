import React from 'react';
import Axios from 'axios';
import SummaryMain from './Components/summaryMain.jsx';
import PhotoHeaderList from './Components/photoHeaderList.jsx';
import ReviewsList from './Components/reviewsList.jsx';
import Footer from './Components/footer.jsx';
// import '../dist/Styles.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsData: [],
      clicked: false
    }
    this.getCurrentProductReview = this.getCurrentProductReview.bind(this)
    this.expand = this.expand.bind(this);
  }

  componentDidMount() {
    this.getCurrentProductReview(11);
  }

  getCurrentProductReview(productID) {
    Axios.get('/api/getReviews', {
      params: { id: productID }
    })
      .then((results) => {
        this.setState({
          reviewsData: results.data
        })
      })
      .catch((error) => {
        console.log('Error with getReviews Axios Get APP.JS', error);
      })
  }

  expand() {
    this.setState({
      clicked: !this.state.clicked,
    })
  }

  render() {
    if (this.state.reviewsData.length === 0) {
      return (
        <div className="bILPStandby">
          <h1>
            Standby
        </h1>
        </div>
      )
    }
    if (this.state.clicked === false) {
      return (
        <div onClick={() => this.expand()}>
          <span id='bILPMain'><h2><strong>Reviews</strong></h2><p className='bILPStarsMain'>&#9734;&#9734;&#9734;&#9734;&#9734;</p> <p id='bILPcustomerCount'>({this.state.reviewsData[0].customerReviewCount})</p></span>
        </div>
      )
    } else {
      if (this.state.clicked === true) {
        return (
          <div>
            <div className="bILPStandby">
              <div onClick={() => this.expand()}>
                <span id='bILPMain'><h2><strong>Reviews</strong></h2></span>
              </div>
              <div id='bILPSummaryMainSection'>
                <SummaryMain thisProductsData={this.state.reviewsData} />
              </div>
              <div id='bILPPhotoSection'>
                <PhotoHeaderList thisProductsData={this.state.reviewsData} />
              </div>
              <div id='bILPMainReviewsSection'>
                <ReviewsList thisProductsData={this.state.reviewsData} />
              </div>
              <div>
                <Footer id='bILPFooterSection' />
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

export default App;
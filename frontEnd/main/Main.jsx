import React from 'react';
import Axios from 'axios';
import StarRating from './Components/SubComponents/MainStarHeader.jsx';
import SummaryMain from './Components/summaryMain.jsx';
import PhotoHeaderList from './Components/photoHeaderList.jsx';
import ReviewsList from './Components/reviewsList.jsx';
import Footer from './Components/footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewsData: [],
      clicked: false,
      currentId: 14,
    }
    this.getCurrentProductReview = this.getCurrentProductReview.bind(this)
    this.expand = this.expand.bind(this);
  }

  componentDidMount() {
    this.getCurrentProductReview(this.state.currentId);
    //
    window.addEventListener('click', (event) => {
      if (event) {
        console.log('id is ', event.view.id)
        if (event.view.id !== this.state.currentId) {
          this.setState({
            currentId: event.view.id,
            clicked: false
          })
        }
      }
      this.getCurrentProductReview(this.state.currentId);
    })
  }
  //
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
            Standby Getting Data
        </h1>
        </div>
      )
    }
    if (this.state.clicked === false) {
      return (
        <div onClick={() => this.expand()}>
          <span id='bILPMain'><h2><strong>Reviews</strong></h2><span className="mainStars"><StarRating rating={this.state.reviewsData} /></span> <p id='bILPcustomerCount'>({this.state.reviewsData[0].customerReviewCount})</p></span>
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
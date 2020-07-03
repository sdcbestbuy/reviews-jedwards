import React from 'react';
import Axios from 'axios';
import StarRating from './Components/SubComponents/MainStarHeader.jsx';
import SummaryMain from './Components/summaryMain.jsx';
import PhotoHeaderList from './Components/photoHeaderList.jsx';
import ReviewsList from './Components/reviewsList.jsx';
import Footer from './Components/footer.jsx';

// Main App where State is held
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: [],
      clicked: false,
      currentId: 14,
    }
    this.getCurrentProductReview = this.getCurrentProductReview.bind(this)
    this.expand = this.expand.bind(this);
  }
  // On load, it starts with a default product however if a window event happens that meets criteria below, it will change product id.
  componentDidMount() {
    this.getCurrentProductReview(this.state.currentId);
    
    window.addEventListener('click', (event) => {
      this.updateTheProduct('click', event.view.id)
    });
    window.addEventListener('submit', () => {
      this.updateTheProduct('submit', window.id)
    });
  }
  // Axios Get function to get certain product based on ID
  getCurrentProductReview(productID) {
    Axios.get('/api/getReviews', {params: { id: productID }})
      .then((results) => {
        this.setState({
          reviewsData: results.data
        })
      })
      .catch((error) => {
        console.log('Error with getReviews Axios Get APP.JS', error);
      })
  }

  // Function that tells Reviews component to open up or not
  expand() {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  // Function that is fired from window event listener, this changes product number
  updateTheProduct(type, id) {
    console.log('Update the product Firing')
    if (type === 'submit' || type === 'click') {
      if (id !== this.state.currentId && Number.isInteger(id)) {
        this.setState({
          currentId: id,
          clicked: false
        })
      }
    }
    this.getCurrentProductReview(this.state.currentId);
  }

  // If theres no data it will display a Standby message
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
    //If no one has clicked the reviews bar, remained closed
    if (this.state.clicked === false) {
      return (
        <div onClick={() => this.expand()}>
          <span id='bILPMain'><strong>Reviews</strong><span className="mainStars"><StarRating rating={this.state.reviewsData} /></span>
           <p id='bILPcustomerCount'>({this.state.reviewsData[0].customerReviewCount})</p></span>
        </div>
      )
    } else {
      // If someone has clicked on reviews bar
      if (this.state.clicked === true) {
        return (
          <div>
            <div>
              <div onClick={() => this.expand()}>
                <span id='bILPMain'><strong>Reviews</strong></span>
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
        );
      };
    };
  };
};

export default App;
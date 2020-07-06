import React from "react";
import Axios from "axios";
import StarRating from "./Components/SubComponents/MainStarHeader.jsx";
import SummaryMain from "./Components/summaryMain.jsx";
import PhotoHeaderList from "./Components/photoHeaderList.jsx";
import ReviewsList from "./Components/reviewsList.jsx";
import Footer from "./Components/footer.jsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

// Main App where State is held
// 4 main sub components, in order (Summary Main, Photo Header List, Reviews List, Footer)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: [],
      clicked: false,
      currentProduct: 100,
      liveProductNums: [],
      realProduct: false,
      thumbnailImagesData: [],
    };
    this.getCurrentProductReview = this.getCurrentProductReview.bind(this);
    this.expand = this.expand.bind(this);
    this.getListOfRealProducts = this.getListOfRealProducts.bind(this);
    this.getThumbnailImagesofRealProduct = this.getThumbnailImagesofRealProduct.bind(this);
  }
  // On load, it starts with a default product however if a window event happens that meets criteria below, it will change product id.
  componentDidMount() {
    this.getListOfRealProducts();

    window.addEventListener("click", (event) => {
      if (event.target.className === "itemName") {
        this.updateTheProduct("click", event.view.id);
      }
    });
    window.addEventListener("submit", () => {
      this.updateTheProduct("submit", window.id);
    });
  }


  // Axios Get function to get certain product based on ID
  getCurrentProductReview(productID) {
    for (var i = 0; i < this.state.liveProductNums.length; i++){
      if (this.state.liveProductNums[i].product_id === productID){
        this.getThumbnailImagesofRealProduct(productID)
        this.setState({
          realProduct: true
        })
      }
    }
    Axios.get("/api/getReviews", { params: { id: productID} })
      .then((results) => {
        this.setState({
          reviewsData: results.data,
        });
      })
      .catch((error) => {
        console.log("Error with getReviews Axios Get APP.JS", error);
      })
  }

  //Axios Get request that gets a list of Real products from DB
  getListOfRealProducts(){
    Axios.get("/api/getListOfRealProducts")
      .then((productResults) => {
        this.setState({
          liveProductNums: productResults.data,
        });
      })
      .catch((error) => {
        console.log("Error with getListOfRealProducts Axios Get APP.JS", error);
      })
      .then(()=>{
        this.getCurrentProductReview(this.state.currentProduct)
      })
  }

  //Axios Get request that gets all the images of a certain product
  getThumbnailImagesofRealProduct(productId){
    Axios.get("/api/getListOfRealProductsThumbnails", { params: { id: productId} })
      .then((thumbnails) => {
        const results = [];
        for (var key in thumbnails.data[0]) {
          if (!Number.isInteger(thumbnails.data[0][key])) {
            results.push(thumbnails.data[0][key]);
          }
        }
        this.setState({
          thumbnailImagesData: results,
        });
      })
      .catch((error) => {
        console.log("Error with getThumbnailImagesofRealProduct Axios Get APP.JS", error);
      })
  }

  // Function that tells Reviews component to open up or not
  expand() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  // Function that is fired from window event listener, this changes product number
  updateTheProduct(type, id) {
    if (type === "submit" || type === "click") {
      if (id !== this.state.currentProduct && Number.isInteger(id)) {
        this.setState({
          currentProduct: id,
          clicked: false,
        });
      }
    }
    this.getCurrentProductReview(this.state.currentProduct);
  }

  // If theres no data it will display a Standby message
  render() {
    if (this.state.reviewsData.length === 0) {
      return (
        <div className="bILPStandby">
          <h1>Standby Getting Data</h1>
        </div>
      );
    }
    //If no one has clicked the reviews bar, remained closed
    if (this.state.clicked === false) {
      return (
        <div onClick={() => this.expand()}>
          <span id="bILPMain">
            <strong>Reviews</strong>
            <span className="mainStars">
              <StarRating rating={this.state.reviewsData} />
            </span>
            <p id="bILPcustomerCount">
              ({this.state.reviewsData[0].customerReviewCount})
            </p>
            <span className="bILPArrowIcon">
              {<ExpandMoreIcon style={{ fontSize: "xxx-large" }} />}
            </span>
          </span>
        </div>
      );
    } else {
      // If someone has clicked on reviews bar
      if (this.state.clicked === true) {
        return (
          <div>
            <div>
              <div onClick={() => this.expand()}>
                <span id="bILPMain">
                  <strong>Reviews</strong>
                  <span className="bILPArrowIcon">
                    {<ExpandLessIcon style={{ fontSize: "xxx-large" }} />}
                  </span>
                </span>
              </div>
              <div id="bILPSummaryMainSection">
                <SummaryMain thisProductsData={this.state.reviewsData} />
              </div>
              <div id="bILPPhotoSectionContainer">
                <div id='bILPPhotoTitle'><span>Customer images</span></div>
                <div id="bILPPhotoListContainer">
                <PhotoHeaderList realProduct={this.state.realProduct} thumbnailImages={this.state.thumbnailImagesData} thisProductsData={this.state.reviewsData} />
                </div>
              </div>
              <div id="bILPMainReviewsSection">
                <ReviewsList real={this.state.realProduct} thisProductsData={this.state.reviewsData} thumbnailImages={this.state.thumbnailImagesData} />
              </div>
              <div>
                <Footer id="bILPFooterSection" />
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default App;

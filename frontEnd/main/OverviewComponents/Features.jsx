import React from "react";
import FeaturesSubCats from "./OverviewSubComponents/FeaturesSubCats.jsx";

const Features = (props) => (
  props.data.map((subCategory) => {
    return (
      <div className='bILPFeaturesSubCategories'>
        <div className='bILPFeaturesSubCategoriesTitle'>{props.data[0].categoryName}</div>
        <FeaturesSubCats subDes={subCategory} />
      </div>
    )
  })
)

export default Features;

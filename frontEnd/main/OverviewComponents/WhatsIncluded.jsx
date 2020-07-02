import React from 'react';


const WhatsIncluded = (props) =>{
  console.log(props)
  return(
    <div className="bILPWhatsIncludedMain">
      <div className="bILPWhatsIncludedMainName"><span>{props.data[0].categoryName}</span></div>
      <div className="bILPWhatsIncludedMainDescriptor"><span>{props.data[0].categoryDescriptors[0]}</span></div>
      <div className="bILPWhatsIncludedMainDescriptor"><span>{props.data[0].categoryDescriptors[1]}</span></div>
      <div className="bILPWhatsIncludedMainDescriptor"><span>{props.data[0].categoryDescriptors[2]}</span></div>
      <div className="bILPWhatsIncludedMainDescriptor"><span>{props.data[0].categoryDescriptors[3]}</span></div>
    </div>
  )
}

export default WhatsIncluded;
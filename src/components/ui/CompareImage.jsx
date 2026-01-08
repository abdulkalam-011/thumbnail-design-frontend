import React from 'react'
import ReactCompareImage from 'react-compare-image'

const CompareImage = ({leftImage,rightImage}) => {
  return (
    
    <ReactCompareImage
leftImage={leftImage}
rightImage={rightImage}
sliderLineColor="#FFD700"
handleSize={40}
hover={true}
/>
  )
}

export default CompareImage
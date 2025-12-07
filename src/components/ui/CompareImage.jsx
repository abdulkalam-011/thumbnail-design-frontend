import React from 'react'
import ReactCompareImage from 'react-compare-image'

const CompareImage = () => {
  return (
    
    <ReactCompareImage
leftImage="images/gtmsharma_raw.webp"
rightImage="images/hero.webp"
sliderLineColor="#FFD700"
handleSize={40}
hover={false}
/>
  )
}

export default CompareImage
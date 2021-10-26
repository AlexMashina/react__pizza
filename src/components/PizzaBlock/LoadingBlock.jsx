import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="134" cy="143" r="115" />
      <rect x="0" y="277" rx="" ry="" width="280" height="24" />
      <rect x="0" y="309" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="408" rx="" ry="" width="70" height="31" />
      <rect x="146" y="403" rx="20" ry="20" width="134" height="40" />
    </ContentLoader>
  )
}

export default LoadingBlock

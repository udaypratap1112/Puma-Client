import React from 'react'
import Loader from './Loader'

 const LoaderComponent = ({isLoading,children,height}) => {
    if (isLoading) {
      return <Loader height={height}/>
    }
    return children
}

export default LoaderComponent;

import './collection.css'
import Button  from '../Button/Button'
import { Link } from 'react-router-dom'
import pumaCollection from '../../assets/pumaCollections.avif'


    
 const Collections = () => {
  return (
      <div className='collections'>
          <h3 className='text-center'>RUN TOGETHER. RUN FOREVER</h3>
          <div className="coll_images d-flex  gap-4">
              <div className="left  overflow-hidden">
                  <img src={pumaCollection} alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>PUMA NITRO <sup>TM</sup> COLLECTION</h4>
                      <p>YOUR PERFECT RUNNING PARTNER </p>
                      <Link to='/search?q=nitro'><Button bg="black" color="white" width="300px">SHOP NOW</Button></Link>
                     
                    </div>
              </div>
              <div className="right overflow-hidden">
                  <img src={pumaCollection}  alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>PUMA NITRO <sup>TM</sup> COLLECTION</h4>
                      <p>YOUR PERFECT RUNNING PARTNER </p>
                      <Link to='/search?q=nitro'><Button bg="black" color="white" width="300px">SHOP NOW</Button></Link>
                     
                    </div>
              </div>
          </div>
         
    </div>
  )
}
const Collections2 = () => {
  return (
      <div className='collections'>
          {/* <h3 className='text-center'>RUN TOGETHER. RUN FOREVER</h3> */}
          <div className="coll_images d-flex  gap-4">
              <div className="left  overflow-hidden">
                  <img src={pumaCollection} alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>BLKTOP RIDER</h4>
                      <p>A CONTEMPORARY CLASSIC </p>
                      <Button bg="black" color="white" width="300px">SHOP NOW</Button>
                     
                    </div>
              </div>
              <div className="right overflow-hidden">
                  <img src="https://cdn.sanity.io/images/qa41whrn/prod/cc76d7fd7844709e9bed83e90e4ae3dfe78320b2-1300x1000.jpg?w=2160&q=80&auto=format" alt="" />
                  <div className="coll_info d-flex flex-column align-items-center">
                      <h4>TERRACE SHOES</h4>
                      <p>STRAIGHT FROM THE ARCHIVES </p>
                      <Button bg="black" color="white" width="300px">SHOP NOW</Button>
                     
                    </div>
              </div>
          </div>
         
    </div>
  )
}

export { Collections,Collections2 };
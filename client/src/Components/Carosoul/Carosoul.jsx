import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Carosoul() {
  return (
    <div>
        <Carousel>
                <div>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/Eyeshadow_Desk.jpg" />
                   
                </div>
                <div>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/SkinTop_Desk.jpg" />
                   
                </div>
                <div>
                    <img src="https://logan.nnnow.com/content/dam/nnnow-project/31-may-2022/se/LipLove_Desk.jpg" />
                    
                </div>
            </Carousel>
    </div>
  )
}

export default Carosoul

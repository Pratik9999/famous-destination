import Carousel, { consts } from 'react-elastic-carousel';

import PlacePreview from '../place-preview/place-preview.component';


import { ReactComponent as PatternIcon } from '../../images/pattern.svg';
import { ReactComponent as  LeftArrow} from '../../images/left-arrow.svg';
import { ReactComponent as  RightArrow} from '../../images/right-arrow.svg';



const PlaceCarousel = ({ places, countryName, activeIndex }) => {

   const breakPoints  =  [
      { width: 375, itemsToShow: 1.1, showArrows: false, transitionMs: 400 },
      { width: 500, itemsToShow: 1.5, showArrows: false, transitionMs: 400 },
      { width: 700, itemsToShow: 2, showArrows: true, enableSwipe: false, transitionMs: 800}, 
      { width: 980, itemsToShow: 2, showArrows: true, enableSwipe: false, transitionMs: 800},
      { width: 1000, itemsToShow: 2, showArrows: true, enableSwipe: false, itemsToScroll: 2, transitionMs: 800},
      { width: 1100, itemsToShow: 3, showArrows: true, enableSwipe: false, itemsToScroll: 2, transitionMs: 800}          
   ];

   const myArrow =({ type, onClick, isEdge }) => {
      const pointer = type === consts.PREV ? 
      <LeftArrow className="w-10 h-10 transition-all rounded-full hover:shadow-md"  /> : 
      <RightArrow className="w-10 h-10 transition-all rounded-full hover:shadow-md"  />
      return (
        <button 
         onClick={onClick} 
         disabled={isEdge} 
         className={`focus:outline-none ${isEdge ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {pointer}
        </button>
      );
   }

   const renderPlaces = places.map(place => (<PlacePreview key={place.id} {...place} />)); 
 
   return (
      <div className="mx-auto my-8 w-90 sm:container">
         <div className="flex items-center justify-center gap-3 mb-2"> 
            <PatternIcon className="w-5" />
            <p className="italic capitalize text-shadow-sm lg:text-lg">{`Best Places In ${countryName}`}</p>
            <PatternIcon className="w-5" /> 
         </div>
         <div>
            <Carousel 
               itemPadding={[10, 15]} 
               pagination={false}
               breakPoints={breakPoints}
               renderArrow={myArrow}
               initialActiveIndex={activeIndex}
            >
               {renderPlaces} 
            </Carousel>
         </div>
      </div>
   );
}

PlaceCarousel.defaultProps = {
   activeIndex: 0
}
 
export default PlaceCarousel;
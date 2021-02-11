import { Link } from 'react-router-dom';

import { ReactComponent as StarIcon } from '../../images/star.svg';

const PlacePreview = ({ placeImgUrl, placeName, placeRatings, id }) => {
   return (
      <Link to={`/place/${id}`} className="w-full h-full">
         <div className="w-full overflow-hidden text-base h-full transform duration-.3s ease-custom  rounded-lg shadow-place-preview hover:scale-95">
            <div className="relative bg-gray-50 p-75">
               <p className="absolute text-lg inset-1/3 md:inset-32 text-shadow">Loading...</p>
               <img className="absolute z-10 object-cover w-full h-full" src={`${placeImgUrl}?width=400&height=400`} alt={placeName}/>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
               <h2 className="font-semibold text-shadow-sm">{placeName}</h2>
               <div className="flex items-center gap-1 px-3 py-1 border-2 rounded-md bg-primary-light border-primary-dark">
                  <StarIcon className="w-4 h-4" />
                  <p className="font-medium text-primary-dark">{placeRatings}</p> 
               </div>
            </div>
         </div>
      </Link>
   );
}
 
export default PlacePreview;
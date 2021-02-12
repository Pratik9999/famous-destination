import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PlacePreview from '../place-preview/place-preview.component';
import Spinner from '../spinner/spinner.component';

import { fetchCountryPlace } from '../../redux/places/places.action';


const SearchResult = ({ places, fetchCountryPlace, match }) => {

   const [isLoading, setIsLoading] = useState(true);

   const { countryName } = match.params;

  

   useEffect(() => {
   
      const fetchResult = async () => {
         await fetchCountryPlace(countryName);
         setIsLoading(false)
      }

      fetchResult(); 

      return () => setIsLoading(null);

   }, [countryName, fetchCountryPlace]);

   const renderResult = () => {
      if(!isLoading) {
         return places.map(place => <PlacePreview key={place.id} {...place} />);
      } 

      return (<Spinner />);
   };


   return (
      <div className="grid gap-10 px-6 mx-auto my-16 w-90 md:grid-cols-2 lg:grid-cols-3 sm:container">
         {renderResult()}
      </div>
   );


   
}

const mapStateToProps = ({ places }, ownProps) => ({
   places : places[ownProps.match.params.countryName] 
});


 
export default connect(mapStateToProps, { fetchCountryPlace })(SearchResult);
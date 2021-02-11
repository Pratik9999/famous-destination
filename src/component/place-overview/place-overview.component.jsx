import { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner/spinner.component';

import { fetchPlace } from '../../redux/place/place.action';
import history from '../../history';

import { ReactComponent as LoacationIcon } from '../../images/location.svg';

class PlaceOverview extends Component {

   state = {
      isLoading: true
   }

   componentDidMount() {
      const getPlace = async () => {
         const id = this.props.match.params.id;
         await this.props.fetchPlace(id);
         this.setState({ isLoading: false })
      }

      getPlace()
   }

   renderPlaceOverview = () => {
      const { isLoading } = this.state;


      if(!isLoading) {
         const { placeImgUrl, placeName, placeDescription, placelocation } = this.props.place;

         const paragraph = placeDescription.split(/[\n\r]/g); 
         const  paras = paragraph.map((para, i) => {
            return <p key={i} className="mb-4 font-fira">{para} </p>; 
         }); 

         return (
            <div>
               <div>
                  <picture>
                     <source media="(max-width: 400px)" srcSet={`${placeImgUrl}?width=600&height=600`} />
                     <source media="(max-width: 999px)" srcSet={`${placeImgUrl}?width=1000&height=1000`} />
                     <source media="(min-width: 1000px)" srcSet={placeImgUrl} />
                     <img src={`${placeImgUrl}?width=600&height=600`} alt={placeName} className="w-full h-80 sm:h-96 md:h-100 xl:h-screen-80" />  
                  </picture> 
               </div>
               <div className="flex flex-col mx-auto text-sm sm:text-base w-90 md:text-lg max-w-50">
                  <h2 className="self-center mx-auto my-5 text-base italic font-medium text-shadow-sm md:text-xl">
                     {placeName}
                  </h2>
      
                  {paras}
      
                  <div className="flex items-center gap-2 p-4 my-5 border-2 rounded-md bg-primary-light border-primary-dark">
                     <div className="self-start mt-1">
                        <LoacationIcon />
                     </div>
                     <p className="text-primary-dark">{placelocation}</p>
                  </div>
      
                  <button 
                     onClick={() => history.goBack()} 
                     className="self-center my-8 text-sm underline border-none sm:text-base focus:outline-none "
                  >
                     Back
                  </button>
               </div>
            </div>
         );
      }

      return (<Spinner />);

   }

   render() {
      return (
         <>
            {this.renderPlaceOverview()}
         </>
      );
   }
}

const mapStateToProps = ({ place }) => ({
   place
});
 
export default connect(mapStateToProps, { fetchPlace })(PlaceOverview);
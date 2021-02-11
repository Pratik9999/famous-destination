import { Component } from 'react';
import { connect } from 'react-redux';

import PlacePreview from '../place-preview/place-preview.component';
import Spinner from '../spinner/spinner.component';

import { fetchCountryPlace } from '../../redux/places/places.action';


class SearchResult extends Component {

   state = {
      isLoading: true
   }

   async componentDidMount() {
      const { countryName } = this.props.match.params;
      await this.props.fetchCountryPlace(countryName);
      this.setState({ isLoading: false });
   }


   renderResult = () => {
      if(!this.state.isLoading) {
         return this.props.places.map(place => <PlacePreview key={place.id} {...place} />);
      } 

      return (<Spinner />);
   };

   render() {
      return (
         <div className="grid gap-10 px-6 mx-auto my-16 w-90 md:grid-cols-2 lg:grid-cols-3 sm:container">
            {this.renderResult()}
         </div>
      );
   }

   
}

const mapStateToProps = ({ places }, ownProps) => ({
   places : places[ownProps.match.params.countryName] 
});


 
export default connect(mapStateToProps, { fetchCountryPlace })(SearchResult);
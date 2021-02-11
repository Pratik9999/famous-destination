import { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCountryPlace } from '../../redux/places/places.action';
import { searchError } from '../../redux/error/error.action';
import history from '../../history';

import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';

class SearchBar extends Component {

   state = {
      inputValue: '' 
   }

   onFormSumbit = async (e) => {
      e.preventDefault();

      const { inputValue } = this.state;
      
      if(inputValue) {
         try {
            this.props.onLoadingChange(true);
            await this.props.fetchCountryPlace(inputValue);
            await this.props.searchError(false);
            this.props.onCountrySearch(inputValue);
            
         } catch(err) {
            await this.props.searchError(true); 
            this.props.onLoadingChange(false);
            history.push('/');
         }
      } 
   }

   render() {
      return (
         <div className="flex justify-center mx-auto w-90 md:container">
            <form onSubmit={this.onFormSumbit} className="flex items-center justify-center w-full overflow-hidden rounded-full shadow-search md:w-42">
               <input  
                  className="w-full px-6 text-sm placeholder-gray-700 border-none rounded-tl-full rounded-bl-full h-11 font-body sm:h-14 bg-primary-light focus:outline-none sm:text-base"
                  type="text"
                  placeholder="Enter country name..."
                  value={this.state.value}
                  onChange={(e) => this.setState({ inputValue: e.target.value })}
               />
               <button type="submit" className="px-4 border-none rounded-tr-full rounded-br-full  focus:outline-none h-11 sm:h-14 bg-primary-light">
                  <SearchIcon className="w-5 sm:w-7" />
               </button> 
            </form>
         </div>
      );
   }
}
 
export default connect(null, { fetchCountryPlace, searchError })(SearchBar);
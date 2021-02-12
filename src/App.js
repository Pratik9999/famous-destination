import { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import { fetchCountriesPlaces } from './redux/places/places.action';
import history from './history'

import Logo from './component/logo/logo.component';
import SearchBar from './component/search-bar/search-bar.component';
import PlaceCarousel from './component/place-carousel/place-carousel.component';
import PlaceOverview from './component/place-overview/place-overview.component';
import SearchResult from './component/search-result/search-result.component';
import SearchError from './component/search-error/search-error.component';
import Footer from './component/footer/footer.component';
import Spinner from './component/spinner/spinner.component';


class App extends Component {

  state = {
    isLoading: true,
  }

  customHistory = history;

  componentDidMount() {
    const getPlaces = async () => {
      await this.props.fetchCountriesPlaces();
      this.setState({ isLoading: false }); 
    }

    getPlaces(); 
  }

  onCountrySearch = (name) => {
    this.setState({ isLoading: false});
    this.customHistory.push(`/search/${name}`);
  }

  onLoadingChange = (value) => {
    this.setState({ isLoading: value });
  }
  
  renderApp = () => {

    const { isLoading } = this.state;

    if(!isLoading) {
      const { brazil, america, australia, vietnam } = this.props.places;

      return (
        <>
          <Router history={this.customHistory}>
            <Route exact path={['/', '/search/:countryName']}>
              <Logo />
              <SearchBar onCountrySearch={this.onCountrySearch} onLoadingChange={this.onLoadingChange} />
            </Route>
            <Route exact path="/">
              {this.props.searchError ? <SearchError /> : ''}
              <PlaceCarousel places={brazil} countryName="brazil"  />
              <PlaceCarousel places={america} countryName="america" activeIndex={4} /> 
              <PlaceCarousel places={australia} countryName="australia" activeIndex={2} /> 
              <PlaceCarousel places={vietnam} countryName="vietnam" activeIndex={3} />
            </Route>
            
            <Route exact path="/place/:id" component={PlaceOverview} />
            <Route path="/search/:countryName" component={SearchResult} /> 

            <Route exact path={['/', '/search/:countryName']}>
              <Footer />
            </Route>
          </Router>
        </>
      );
    } 

    return (<Spinner />); 

  }

  render() {
    return (
      <div className="text-secondary">  
        {this.renderApp()}
      </div>  
    );
  }

} 

const mapStateToProps = ({ places, error: { searchError } }) => ({
  places,
  searchError
});


export default connect(mapStateToProps, { fetchCountriesPlaces })(App);

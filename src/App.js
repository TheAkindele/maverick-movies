import React, { Component } from 'react';
import './App.scss';
import Home from './components/home-Folder/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/nav-Folder/NavBar';
import Footer from './components/footer-folder/Footer';
import CategoryPage from './components/category-folder/CategoryPage';
import MoviePage from './components/movie-folder/MoviePage'
import { connect } from 'react-redux';
import { getMovies } from './redux/actions/moviesAction'
import SearchResult from './components/search-folder/SearchResult'
import Loader from './components/Loader';

class App extends Component {

  componentDidMount() {
    this.props.getMovies()
    //console.log('app mounted')
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/spin' component={Loader} />
            <Route path='/search/:searchId' component={SearchResult} />
            <Route exact path='/:category' component={CategoryPage} />
            <Route path='/movie/:movieId' component={MoviePage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { getMovies })(App);


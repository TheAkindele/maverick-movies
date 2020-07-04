(this["webpackJsonpcontext-api-and-hooks"]=this["webpackJsonpcontext-api-and-hooks"]||[]).push([[0],{46:function(e,a,t){e.exports=t(92)},51:function(e,a,t){},52:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(21),l=t.n(r),o=(t(51),t(16)),s=t(17),i=t(19),m=t(18),u=(t(52),t(6)),v=t(15),d=t.n(v),p="37ad0cf97af435a0a03c6e3da5f19502",E=function(e){return function(a){d()("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(p,"&language=en-US")).then((function(e){a({type:"GET_SELECTED_MOVIE",payload:e.data})})).catch((function(e){return console.log("Error ",e)})),d()("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(p,"&language=en-US")).then((function(e){a({type:"GET_VIDEO",payload:e.data.results})})).catch((function(e){return console.log("Error encountered ",e)}))}},h=t(3),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={movieSearch:""},e.handleChange=function(a){e.setState({movieSearch:a.target.value})},e.handleSubmit=function(a){var t=e.state.movieSearch,n=e.props,c=n.history,r=n.match;a.preventDefault(),e.props.getSearchedMovie(t),c.push("".concat(r.url,"search/").concat(t))},e}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-box"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"search",name:"search",placeholder:"search for a movie or TV show",onChange:this.handleChange}),c.a.createElement("button",{className:"btn-1"},"Search")))}}]),t}(n.Component),N=Object(u.b)(null,{getSearchedMovie:function(e){return function(a){d()("https://api.themoviedb.org/3/search/movie?api_key=".concat(p,"&query=").concat(e)).then((function(e){a({type:"GET_SEARCHED_MOVIE",payload:e.data.results})})).catch((function(e){return console.log("Error in seraching ",e)}))}}})(Object(h.f)(g)),b=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"head-top"},c.a.createElement("p",{className:"welcome"},"Welcome"),c.a.createElement("p",{className:"others"},"Millions of movies, TV shows and people to discover. Explore now")),c.a.createElement("div",{className:"search-bar"},c.a.createElement(N,null)))},f=t(2),y=function(e){return Object.keys(e).map((function(a){return e[a]}))},_=function(e,a){return e?e.find((function(e){return e.routeName===a})):console.log("element is empty")},O=t(94),M=function(){return c.a.createElement("div",{className:"spinner"},c.a.createElement(O.a,{animation:"border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))},k=Object(u.b)((function(e){var a=e.allMoviesReducer;return{allMoviesArr:y(a)}}))(Object(h.f)((function(e){var a=e.allMoviesArr;return c.a.createElement("div",{className:"preview-box"},a.length>0?a.map((function(e){var a=e.ID,t=e.routeName,n=e.category,r=e.content;return c.a.createElement("div",{className:"the-previews",key:a},c.a.createElement("div",{className:"category"},c.a.createElement(f.b,{to:"/".concat(t),className:"topic"}," ",n," ")),c.a.createElement("div",{className:"previews"},r&&r.slice(0,5).map((function(e){var a=e.id,n=e.poster_path,r=e.title,l=e.release_date;return c.a.createElement(f.b,{to:"/".concat(t),className:"card",key:a},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185".concat(n),alt:"poster"})),c.a.createElement("div",{className:"card-foot"},c.a.createElement("div",{className:"title"},r),c.a.createElement("div",{className:"date"},l)))}))))})):c.a.createElement(M,null))}))),j=function(){return c.a.createElement("div",{className:"homepage"},c.a.createElement(b,null),c.a.createElement(k,null))},w=t(27),S=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={isOpen:!1},e.openMenu=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement(f.b,{to:"/",className:"logo"},"maverickMOVIES"),c.a.createElement("div",{className:"nav-menu"},c.a.createElement("div",{className:"home nav-bar"},c.a.createElement(f.b,{to:"/",className:"link"},"HOME")),c.a.createElement("div",{className:"dropdown nav-bar"},c.a.createElement("div",{className:"dropdown-btn link"},"MOVIES",c.a.createElement(w.b,null)),c.a.createElement("div",{className:"dropdown-content"},c.a.createElement(f.b,{to:"/popular_movies",className:"content"},"Popular"),c.a.createElement(f.b,{to:"/top_rated_movies",className:"content"},"Top-Rated"),c.a.createElement(f.b,{to:"/upcoming_movies",className:"content"},"Upcoming"))),c.a.createElement("div",{className:"nav-bar"},c.a.createElement(f.b,{to:"/spin",className:"link"},"SignIn"))),c.a.createElement("div",{className:"nav-icon",onClick:this.openMenu},c.a.createElement("h2",null,c.a.createElement(w.a,null))),c.a.createElement("div",{className:this.state.isOpen?"open":"closed"},c.a.createElement("h4",null,c.a.createElement(f.b,{to:"/"},"HOME")),c.a.createElement("h4",null,c.a.createElement(f.b,{to:"/popular_movies"},"Popular Movies")),c.a.createElement("h4",null,c.a.createElement(f.b,{to:"/top_rated_movies"},"Top-Rated Movies")),c.a.createElement("h4",null,c.a.createElement(f.b,{to:"/upcoming_movies"},"Upcoming Movies"))))}}]),t}(n.Component),T=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-logo"},c.a.createElement(f.b,{to:"/",className:"foot-logo"},"maverickMOVIES")),c.a.createElement("div",{className:"phone"},c.a.createElement("p",null,"08123456789"),c.a.createElement("p",null,"07123456789"),c.a.createElement("p",null,"06012345678")),c.a.createElement("div",{className:"contact"},c.a.createElement("p",null,"Our address"),c.a.createElement("p",null,"1, Aso drive, asokoro, aso rock, Abuja")))},I=Object(u.b)((function(e,a){var t=e.allMoviesReducer,n=a.match.params.category;return{categoryMovies:_(y(t),n)}}),{getSelectedMovie:E})(Object(h.f)((function(e){var a=e.categoryMovies,t=e.getSelectedMovie,n=a.category,r=a.content;return c.a.createElement("div",{className:"category-box"},c.a.createElement("div",{className:"category-name"},n),c.a.createElement("div",{className:"category-grid"},r.map((function(e){var a=e.id,n=e.poster_path,r=e.title,l=e.release_date;return c.a.createElement("div",{className:"category-card",key:a,onClick:function(){return t(a)}},c.a.createElement(f.b,{to:"/movie/".concat(a,"/").concat(r),className:"link"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342".concat(n),alt:"poster"})),c.a.createElement("div",{className:"card-footer"},c.a.createElement("div",{className:"the-title"},r),c.a.createElement("div",{className:"the-date"},l))))}))))}))),C=t(44),D=t.n(C),R=Object(u.b)((function(e){var a,t=e.getMovie;return{clickedMovies:t.movie,movieVideo:(a=t.video,a?a.find((function(e){return"Trailer"===e.type})):"No video Found")}}))((function(e){var a=e.clickedMovies,t=e.movieVideo,n=a.backdrop_path,r=a.budget,l=a.original_language,o=a.title,s=a.overview,i=a.poster_path,m=a.release_date,u=a.runtime,v=a.status,d=a.tagline,p=a.revenue,E=a.production_companies,h=a.vote_average,g="https://image.tmdb.org/t/p/w1280".concat(n);return c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"backdrop",style:{backgroundImage:"url(".concat(g,")")}},c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342".concat(i),alt:"poster",className:"poster-img"})),c.a.createElement("div",{className:"right"},c.a.createElement("div",{className:"movie-title"},o),c.a.createElement("ul",{className:"detail-list"},c.a.createElement("li",{className:"release"},"Released: ",c.a.createElement("span",null,m)),c.a.createElement("li",{className:"language"},"Language: ",c.a.createElement("span",null,l)," "),c.a.createElement("li",{className:"duration"},"Duration: ",c.a.createElement("span",null,u,"m")," "),c.a.createElement("li",{className:"status"},"status: ",c.a.createElement("span",null,v)),c.a.createElement("li",{className:"votes"},"Votes: ",c.a.createElement("span",null,h))),c.a.createElement("div",{className:"about"},c.a.createElement("div",{className:"tagline"},d),c.a.createElement("div",{className:"overview"},s))))),c.a.createElement("div",{className:"trailer-box"},c.a.createElement("p",null,"See Movie Trailer Here"),c.a.createElement("div",{className:"video"},t?c.a.createElement("div",{className:"player-wrapper"},c.a.createElement(D.a,{className:"react-player",url:"https://www.youtube.com/watch?v=".concat(t.key),width:"100%",height:"100%",controls:!0})):c.a.createElement(M,null))),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"expenses"},c.a.createElement("div",{className:"budget"},"Budget: $",r),c.a.createElement("div",{className:"revenue"},"Revenue: $",p)),c.a.createElement("div",{className:"companies"},c.a.createElement("h2",null,"produced by"),E&&E.map((function(e){var a=e.id,t=e.logo_path,n=e.name,r=e.origin_country;return c.a.createElement("div",{className:"company",key:a},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w92".concat(t),alt:"logo"})),c.a.createElement("div",{className:"company-info"},c.a.createElement("div",{className:"the-name"}," ",n),c.a.createElement("div",{className:"location"}," ",r)))})))))})),G=Object(u.b)((function(e){return{searchedMovie:e.getMovie.searchedMovie}}),{getSelectedMovie:E})((function(e){var a=e.searchedMovie,t=e.getSelectedMovie;return c.a.createElement("div",{className:"result-container"},c.a.createElement("h1",null,"Search Results"),c.a.createElement("div",{className:"result-box"},a&&a.map((function(e){var a=e.id,n=e.title,r=e.poster_path,l=e.release_date,o=e.overview;return c.a.createElement("div",{className:"result",key:a},c.a.createElement("div",{className:"search-poster",onClick:function(){return t(a)}},c.a.createElement(f.b,{to:"/movie/".concat(a,"/").concat(n),className:"link"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w92".concat(r),alt:"searched result"}))),c.a.createElement("div",{className:"search-details"},c.a.createElement("div",{className:"search-title"},c.a.createElement("div",{className:"title",onClick:function(){return t(a)}},c.a.createElement(f.b,{to:"/movie/".concat(a,"/").concat(n),className:"link"},n," ")),c.a.createElement("div",{className:"date"},l)),c.a.createElement("div",{className:"search-overview"},c.a.createElement("p",{className:"overview"},o.length>=250?o.slice(0,200)+"...":o))))}))))})),V=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getMovies()}},{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(S,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:j}),c.a.createElement(h.a,{exact:!0,path:"/spin",component:M}),c.a.createElement(h.a,{path:"/search/:searchId",component:G}),c.a.createElement(h.a,{exact:!0,path:"/:category",component:I}),c.a.createElement(h.a,{path:"/movie/:movieId",component:R})),c.a.createElement(T,null)))}}]),t}(n.Component),x=Object(u.b)(null,{getMovies:function(){return function(e){d()("https://api.themoviedb.org/3/movie/popular?api_key=".concat(p,"&language=en-US&page=1")).then((function(a){e({type:"GET_POPULAR",payload:a.data.results})})).catch((function(e){return console.log("Error encountered ",e)})),d()("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(p,"&language=en-US&page=1")).then((function(a){e({type:"GET_TOP_RATED",payload:a.data.results})})).catch((function(e){return console.log("Error encountered ",e)})),d()("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(p,"&language=en-US&page=1")).then((function(a){e({type:"GET_UPCOMING",payload:a.data.results})})).catch((function(e){return console.log("Error encountered ",e)}))}}})(V),A=t(14),U=t(45),P=t(10),L={popular_movies:{},top_rated_movies:{},upcoming_movies:{}},H={movie:[],video:[],searchedMovie:[]},B=Object(A.c)({allMoviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_POPULAR":return Object(P.a)(Object(P.a)({},e),{},{popular_movies:{ID:1,category:"Popular Movies",routeName:"popular_movies",content:a.payload}});case"GET_TOP_RATED":return Object(P.a)(Object(P.a)({},e),{},{top_rated_movies:{ID:2,category:"Top Rated Movies",routeName:"top_rated_movies",content:a.payload}});case"GET_UPCOMING":return Object(P.a)(Object(P.a)({},e),{},{upcoming_movies:{ID:3,category:"Upcoming Movies",routeName:"upcoming_movies",content:a.payload}});default:return e}},getMovie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_SELECTED_MOVIE":return Object(P.a)(Object(P.a)({},e),{},{movie:a.payload});case"GET_VIDEO":return Object(P.a)(Object(P.a)({},e),{},{video:a.payload});case"GET_SEARCHED_MOVIE":return Object(P.a)(Object(P.a)({},e),{},{searchedMovie:a.payload});default:return e}}}),J=[U.a],$=Object(A.d)(B,A.a.apply(void 0,J));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:$},c.a.createElement(x,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.7892c78a.chunk.js.map
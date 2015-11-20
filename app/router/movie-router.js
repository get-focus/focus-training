import {router as Router} from 'focus-core';
import MovieDetail from '../views/movie';
const MovieRouter = Router.extend({
    routes: {
        'movies': 'moviesSummary',
        'movies/:id': 'movieDetailHandler'
    },
    moviesSummary(){
        // TODO add the summary
    },
    movieDetailHandler(id){
        this._pageContent(MovieDetail, {props: {id}});
    }
});

new MovieRouter();

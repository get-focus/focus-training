import fetch from 'focus-core/network/fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovie(id) {
        console.log(`[MOVIE] call loadMovie(${id}) method`);
        return fetch(movieUrl.loadMovie({urlData: {id}}));
    },
    loadActors(id) {
        console.log(`[MOVIE] call loadActors(${id}) method`);
        return fetch(movieUrl.loadActors({urlData: {id}}));
    }
}

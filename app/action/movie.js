import {loadMovie, loadActors} from '../services/movie';
import actionBuilder from 'focus-core/application/action-builder';

export const actorsActions = {
    load: actionBuilder({
        node: 'actors',
        service: loadActors,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

export const movieActions = {
    load: actionBuilder({
        node: 'movie',
        service: loadMovie,
        shouldDumpStoreOnActionCall: true,
        status: 'loaded'
    })
}

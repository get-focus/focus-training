import {router as Router} from 'focus-core';
import TestView from '../views/test';
const TestRouter = Router.extend({
    routes: {
        //'test': 'testRouteHandler',
        //'test/:id': 'testDetailRouteHandler'
        'test(/:id/movies/:movId)': 'uniqueTestRouteHandler'
    },
/*    testRouteHandler(){
        console.log('YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!');
    },
    testDetailRouteHandler(id){
        console.log('Ma super route', id);
    },*/
    uniqueTestRouteHandler(id, movId){
        this._pageContent(TestView, {props: {id, movieId: movId}});
    }
});

new TestRouter();
//
//// Backbone.history.navigate('test')
/// Change l'url de l'application mais ne passe pas par le trouteur


// Backbone.history.navigate('test', true)
// // idem maais passe par le routeur

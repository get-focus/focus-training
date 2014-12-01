//Dependencies
var template = require('./templates/homeComposite');
var CompositeView = Fmk.Views.CompositeView;
module.exports = CompositeView.extend({
    template: template,
   // className: "animate bounceIn",
    initialize: function initializeGraphCompositeView(options) {
        options = options || {};
        options.modelName = this.modelName;
        // Call the parent's initialize.
        CompositeView.prototype.initialize.call(this, options);

        //Initialize all the childViews
        this.registerNumberPeopleIndcator();
        this.registerProjectIndcator();
        this.registerNews();
        this.registerArrivalContainer();
    },
    /**
     * Register the subView of number of people.
     * @return {undefined}
     */
    registerNumberPeopleIndcator: function registerNumberPeopleIndcator() {
        var NumberPeopleDetail = require('./numberPeopleDetail');
        var NumberPeopleModel = require('../../../models/accueil/home/numberPeopleModel');
        //Enregistrement dans la vue en tant que propriété.
        this.numberPeopleDetail = new NumberPeopleDetail({
            model: new NumberPeopleModel()
        });
        //Enregistremen de la vue dans le container global.
        this.registerView({
            selector: "div#numberPeopleIndcatorContainer",
            name: "numberPeopleDetail",
            type: "model",
            modelProperty: "numberPeopleIndcator"
        });
    },
    /**
     * Register the subView of number of people.
     * @return {undefined}
     */
    registerProjectIndcator: function registerProjectIndcator() {
        var NumberProjectDetail = require('./numberProjectDetail');
        var NumberProjectModel = require('../../../models/accueil/home/numberProjectModel');
        //Enregistrement dans la vue en tant que propriété.
        this.numberProjectDetail = new NumberProjectDetail({
            model: new NumberProjectModel()
        });
        //Enregistremen de la vue dans le container global.
        this.registerView({
            selector: "div#numberProjectIndcatorContainer",
            name: "numberProjectDetail",
            type: "model",
            modelProperty: "numberProject"
        });
    },
    /**
     * Register the news view.
     * @return {undefined}
     */
    registerNews: function registerNews() {},
    /**
     * Register the arrivals view.
     * @return {undefined}
     */
    registerArrivalContainer: function registerArrivalContainer() {

    }
});
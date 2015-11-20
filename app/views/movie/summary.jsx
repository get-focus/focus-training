import React, {PropTypes} from 'react';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form'
import movieStore from '../../stores/movie';
import {movieActions} from '../../action/movie';

const MovieSummary = React.createClass({
    displayName: 'MovieSummary',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],
    action: movieActions,
    propTypes: {
        id: PropTypes.number.isRequired
    },
    renderContent() {
        const {id} = this.props;
        return (
            <Panel title='Summary'>
                {this.fieldFor('title')}
                {this.fieldFor('productionYear')}
                {this.fieldFor('synopsis')}
                {this.fieldFor('userRating')}
            </Panel>
        );
    }
});

export default MovieSummary;

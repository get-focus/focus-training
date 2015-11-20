import React, {PropTypes} from 'react';
import Panel from 'focus-components/components/panel';
import {mixin as formPreset} from 'focus-components/common/form'
import movieStore from '../../stores/movie';
import {actorsActions} from '../../action/movie';

const MovieActors = React.createClass({
    displayName: 'MovieActors',
    mixins: [formPreset],
    definitionPath: 'moviePeople',
    stores: [{store: movieStore, properties: ['actors']}],
    action: actorsActions,
    propTypes: {
        id: PropTypes.number.isRequired
    },
    renderContent() {
        const {id} = this.props;
        return (
            <Panel title='Actors'>
            </Panel>
        );
    }
});

export default MovieActors;

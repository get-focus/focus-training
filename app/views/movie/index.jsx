import React, {PropTypes} from 'react';
import ScrollSpyContainer from 'focus-components/components/scrollspy-container';

import MovieSummary from './summary';
import MovieActors from './actors';

const MovieDetail = React.createClass({
    displayName: 'MovieDetail',
    propTypes: {
        id: PropTypes.number.isRequired
    },
    render() {
        const {id} = this.props;
        return (
            <ScrollSpyContainer>
                <MovieSummary id={id}/>
                <MovieActors id={id}/>
            </ScrollSpyContainer>
        );
    }
});

export default MovieDetail;

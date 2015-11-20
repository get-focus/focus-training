import React from 'react';

export default React.createClass({
    render() {
        const {id, movieId} = this.props;
        return (
            <div>
                <h1>Movie {movieId}</h1>
                <div>
                    Mon super composant avec pour id {id} !!!!
                </div>
            </div>
        );
    }
});

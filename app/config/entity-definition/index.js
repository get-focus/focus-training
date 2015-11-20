/**
* These metadatas are generated automatically.
* @type {Object}
*/
export const movie = {
    code: {
        domain: 'DO_ID',
        required: true
    },
    title: {
        domain: 'DO_LABEL_LONG',
        required: true
    },
    originalTitle: {
        domain: 'DO_LABEL_LONG',
        required: false
    },
    poster: {
        domain: 'DO_URL',
        required: false
    },
    synopsis: {
        domain: 'DO_COMMENT',
        required: true
    },
    trailerName: {
        domain: 'DO_LABEL_MEDIUM',
        required: false
    },
    trailerHRef: {
        domain: 'DO_URL',
        required: false
    },
    shortSynopsis: {
        domain: 'DO_COMMENT',
        required: true
    },
    runtime: {
        domain: 'DO_RUNTIME',
        required: true
    },
    movieType: {
        domain: 'DO_LABEL_SHORT',
        required: true
    },
    productionYear: {
        domain: 'DO_YEAR',
        required: true
    }
};

export const moviePeople = {
    code: {
        domain: 'DO_ID',
        required: true
    },
    name: {
        domain: 'DO_LAST_NAME',
        required: true
    },
    role: {
        domain: 'DO_LAST_NAME',
        required: true
    },
    photoURL: {
        domain: 'DO_URL',
        required: false
    },
    leadActor: {
        domain: 'DO_YES_NO',
        required: true
    }
}

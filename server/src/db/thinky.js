import initThinky from 'thinky';

import {db as dbConfig} from '../../config'

const thinky = initThinky(dbConfig);

const {r} = thinky;

export {thinky, r};


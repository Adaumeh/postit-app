import sequelize from 'sequellize';
import bookshelf from 'bookshelf';
import knexConfig from '../knexfile';
import  config from '.config/config.json';


export default bookshelf(sequelize(config.development));
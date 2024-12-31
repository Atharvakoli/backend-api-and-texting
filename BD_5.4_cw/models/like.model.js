let { dataTypes, sequelize } = require('../lib/index.js');
let { movieModel } = require('./movie.model.js');
let { userModel } = require('./user.model.js');

let like = sequelize.define('like', {
  userId: {
    type: dataTypes.INTEGER,
    references: {
      model: userModel,
      key: 'id',
    },
  },
  movieId: {
    type: dataTypes.INTEGER,
    references: {
      model: movieModel,
      key: 'id',
    },
  },
});

// useModel is your source model. This belongsToMany() is a method to set many to many relationship between two models, And movieModel here is the target model that user wants to have a many to many relationship with which model, through like is basically it specifies the join table to be used for many to many relationship
userModel.belongsToMany(movieModel, { through: like });
movieModel.belongsToMany(userModel, { through: like });

module.exports = { like };

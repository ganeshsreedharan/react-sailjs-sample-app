/**
 * Tweet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tweet_id: {
      type: 'string'
    },
    active: {
      type: 'boolean'
    },
    author: {
      type: 'string'
    },
    avatar: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    screen_name: {
      type: 'string'
    }
  }

};


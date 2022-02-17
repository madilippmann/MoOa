'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Followers', [
      { user_id: 11, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 19, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 13, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 13, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 13, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 19, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 19, follower_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 28, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 13, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 14, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 24, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 13, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 25, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 18, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 13, follower_id: 28, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 12, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 8, follower_id: 16, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 10, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 27, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 19, follower_id: 23, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 22, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 23, follower_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 15, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 17, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 24, follower_id: 22, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 26, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 7, follower_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 12, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 15, follower_id: 21, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 6, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 20, follower_id: 18, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 9, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 27, follower_id: 14, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, follower_id: 9, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 21, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, follower_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 17, follower_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 26, follower_id: 13, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 16, follower_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 25, follower_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 11, follower_id: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Followers', null, {});
  }
};

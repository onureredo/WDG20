import Post from './Post.js';
import User from './User.js';
import sequelize from '../db/index.js';

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
    name: 'userId',
  },
});
Post.belongsTo(User, { foreignKey: { allowNull: false, name: 'userId' }, onDelete: 'CASCADE' });

sequelize.sync();

export { Post, User };

const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

//one-to-many association  with User and Post
User.hasMany(Post, {
    foreignKey : 'user_id'
});

Post.belongsTo( User, {
    foreignKey: 'user_id'
});


//Many-to-Many association 

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote, 
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// connecting Vote directly to User an Post 

Vote.belongsTo(User,{
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreign_key: 'post_id'
})

module.exports = { User, Post, Vote};



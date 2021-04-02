const dotenv = require('dotenv').config();

//const session = require("express-session");
//const MongoStore = require("connect-mongo")(session);

const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'keystone';
const adapterConfig = { mongoUri: process.env.MONGO_URI };


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const PostSchema = require('./lists/Post')
const UserSchema = require('./lists/User')

const isAdmin = ({ authentication: { item: user } }) => {
  return !!user && !!user.isAdmin
}
const isLoggedIn = ({ authentication: { item: user } }) => {
  return !!user
}

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET
});


keystone.createList('Post', PostSchema)
keystone.createList('User', UserSchema)
/*
//Para crear un post tienes que estar logeado
keystone.createList('Post', {
  fields: PostSchema.fields,
  access: {
    read: true,
    create: isLoggedIn,
    update: isLoggedIn,
    delete: isLoggedIn,
  },
})
//Para crear un usuario tienes q tener cuenta admin
keystone.createList('User', {
  fields: UserSchema.fields,
  access: {
    read: true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
})
*/

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password',
  },
})

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ 
    name: PROJECT_NAME, 
    enableDefaultRoute: true, 
    //authStrategy,
    //isAccessAllowed: isLoggedIn //'isAdmin' Solo para que ingrese al login admin users
  })],
};

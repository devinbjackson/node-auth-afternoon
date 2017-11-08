const Auth0Strategy = require('passport-auth0');
const config = require('./config');
const { domain, clientID, clientSecret } = config;
//destructuring exports from the config file ^ to be used here vvv 

module.exports  = new Auth0Strategy({
                                                                domain,
                                                                clientID,
                                                                clientSecret,
                                                                callbackURL: '/login'
},
    function(accessToken, refreshToken, extraParams, profile, done) {
        return done(null, profile);
    }
)
import {Strategy as JwtStrategy , ExtractJwt} from 'passport-jwt';
import User from './models/User.js';
import passport from 'passport';
import "dotenv/config";

    
const secret = process.env.PRIVATE_KEY;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
};

passport.use(
  new JwtStrategy(opts, async (payload, done) =>{
    
    try{
      const user = await User.findById(payload.id)
      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      return done(null, user);
    }    
    catch(err) {
      return done(err, false);
    }
 })
);


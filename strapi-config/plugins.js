module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: env('JWT_EXPIRES_IN', '15m'),
      },
      ratelimit: {
        enabled: true,
        interval: 60000,
        max: 5,
      },
    },
  },
});

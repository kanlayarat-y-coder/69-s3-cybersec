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
  email: {
    config: {
      provider: 'sendmail',
      providerOptions: {
        devHost: 'mail',
        devPort: 1025,
        silent: true,
      },
      settings: {
        defaultFrom: 'no-reply@example.com',
        defaultReplyTo: 'no-reply@example.com',
      },
    },
  },
});

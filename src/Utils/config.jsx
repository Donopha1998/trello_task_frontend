
const config = {
    development: {
      apiUrl: 'http://localhost:4000',
    },
    production: {
      apiUrl: 'https://your-production-url.com',
    },
  };
  

  const env = process.env.NODE_ENV || 'development';
  
  export default config[env];
  
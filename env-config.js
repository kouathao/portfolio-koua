const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://koua-portfolio.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://koua-portfolio.herokuapp.com',
  'process.env.CLIENT_ID': 'SWrRctK5S9mYl0rky6rGOE2AvguIwCDG'
}

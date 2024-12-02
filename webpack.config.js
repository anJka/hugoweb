
const path = require('path');

module.exports = {
  entry: './node_modules/decap-cms-app/dist/decap-cms-app.js',
  output: {
    filename: 'decap-cms.min.js',
    path: path.resolve(__dirname, 'static/admin/dist'),
  },
  mode: 'production', // or 'development'
};
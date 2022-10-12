const fs = require('fs');
const http = require('http');

const homeUrl = '/';
const productsUrl = '/products';
const landingPageUrl = '/landing-page';

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === homeUrl) {
      console.log('home');
      const home = fs.readFileSync('./pages/Home/home.html');
      res.write(home);
    }

    if (url === productsUrl) {
      console.log('products');
      const products = fs.readFileSync('./pages/Products/products.html');
      res.write(products);
    }

    if (url === landingPageUrl) {
      const home = fs.readFileSync('./pages/LandingPage/landingPage.html');
      res.write(home);
    }

    res.end();
  })
  .listen(3000, () => {
    console.log('Lessening on port 3000: http://localhost:3000');
  });

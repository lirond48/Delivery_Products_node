const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', (req, res, next) => {
  let url = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
  axios.get(url).then(resp => {
    let myData = resp.data;
    console.log(myData);
    let filter_ar;
    filter_ar = myData.filter(item => {
      if (item.status) {
        return item.status == 1;
      }
    })
    console.log(filter_ar);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(filter_ar);
  });

  // res.render('index', { title: 'Express' });
});

module.exports = router;

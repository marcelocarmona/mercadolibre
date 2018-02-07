const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');

const API = "https://api.mercadolibre.com/";

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/**
 * Information about the searching items
 */
router.get('/items', (req, res) => {
  const query = req.query.q;
  axios.get(`${API}sites/MLA/search?q=${query}`)
    .then(itemsResponse => {
      res.status(200).json({
        items: createItems(itemsResponse),
        categories: createCategories(itemsResponse)
      })
    }).catch(error => {
      res.status(500).send(error.response)
    });
})

/**
 * Detail information of the item
 */
router.get('/items/:id', (req, res) => {
  const id = req.params.id;

  axios.all([
    axios.get(`${API}items/${id}`),
    axios.get(`${API}items/${id}/description`)
  ]).then(axios.spread(function (itemResponse, descriptionResponse) {
    // when all requests successful
    const {id, title, price, currency_id, pictures, condition, shipping, sold_quantity, description } = itemResponse.data;

    const itemDetail = {
      item: {
        id,
        title,
        price: {
          amount: price,
          currency: currency_id,
          decimals: parseInt(price % 1 * 100)
        },
        picture: pictures[0].secure_url,
        condition,
        freeShipping: shipping.free_shipping,
        soldQuantity: sold_quantity,
        description: descriptionResponse.data.plain_text
      }
    };

    res.status(200).json(itemDetail);
  })).catch(error => {
    res.status(500).send(error.response)
  });

})

/**
 * Helper for create categories
 */
function createCategories(itemsResponse) {
  return itemsResponse.data.filters.length
    ? itemsResponse.data.filters[0].values[0].path_from_root.map(path => path.name)
    : itemsResponse.data.filters
}

/**
 * Helper for create items
 */
function createItems(itemsResponse) {
  const maxItemsNumber = 4;
  return itemsResponse.data.results.slice(0, maxItemsNumber).map(item => {
    const {id, title, price, currency_id, thumbnail, condition, shipping} = item;
    return {
      id,
      title,
      price: {
        amount: price,
        currency: currency_id,
        decimals: parseInt(price % 1 * 100)
      },
      picture: thumbnail,
      condition,
      freeShipping: shipping.free_shipping
    };
  })
}

module.exports = router;

import products from './products.json';

export default {
  /**
   * Returns products from the shop and the cart in a callback
   *
   * @param {Callback} callback
   */
  getProducts(callback) {
    callback({
      shopList: products,
      cartList: []
    });
  },

  /**
   * Creates a new product by returning a complete object data with
   * an unique id and the cover (converted in dataUrl) in a callback
   *
   * @param {Object} data - {title, cover, price}
   * @param {Callback} callback
   */
  createProduct(data, callback) {
    // Fake id with the number of millisecond since midnight January 1, 1970 UTC
    let id = new Date().valueOf();

    // Converts image in dataURL
    // If no FileReader support, sets default 404.png picture.
    let cover = "/assets/images/404.png";
    if(typeof window !== "undefined" && window.FileReader) {
      let fReader = new FileReader();
      fReader.readAsDataURL(data.cover);
      fReader.onloadend = function(event){
        cover = event.target.result;
        callback(Object.assign(data, { id, cover }));
      };
    } else {
      callback(Object.assign(data, { id, cover }));
    }
  }
};
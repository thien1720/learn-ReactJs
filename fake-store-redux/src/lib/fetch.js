
export const  fetchProducts = () =>  {
  return fetch("https://fakestoreapi.com/products")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json;
    });
}

export const fetchProductDetails = (id) => {
  return fetch("https://fakestoreapi.com/products")
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json.filter(product => {
        if (product.Id === id) {
          return true;
        }
        else {
          return false;
        }
      });
    });
}

// xử lý lỗi api khi fetch không xảy ra
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
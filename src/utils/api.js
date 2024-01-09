const API_BASE_URL = '/api';

async function fetchProductsByCategory(category) {
  try {
    const response = await fetch(`/api/products/${category}`, {
      headers: {
        Accept: "application/json",
        method: "GET",
      }
    })

    if (response) {
      const data = await response.json();
      return data;
    } 
  } catch (error) {
    console.log(error)
  }
}


async function fetchProductById(id) {
  try {
    const response = await fetch(`/api/products/product/${id}`, {
      headers: {
        Accept: "application/json",
        method: "GET",
      }
    })

    if (response) {
      const data = await response.json();
      return data;
    } 
  } catch (error) {
    console.log(error)
  }
}

async function addToCart(productId, quantity) {
  try {
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw new Error('Error adding to cart');
  }
}

async function fetchCart() {
  try {
    const response = await fetch(`${API_BASE_URL}/cart/get`);
    const cart = await response.json();
    return cart;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw new Error('Error fetching cart');
  }
}

export { fetchProductsByCategory, fetchProductById, addToCart, fetchCart };
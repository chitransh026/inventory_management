const API_BASE_URL = 'http://localhost:3000';

export const api = {
  // Categories
  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return response.json();
  },

  createCategory: async (data) => {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Items
  getItems: async () => {
    const response = await fetch(`${API_BASE_URL}/items`);
    return response.json();
  },

  createItem: async (data) => {
    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // Suppliers
  getSuppliers: async () => {
    const response = await fetch(`${API_BASE_URL}/suppliers`);
    return response.json();
  },

  createSupplier: async (data) => {
    const response = await fetch(`${API_BASE_URL}/suppliers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};


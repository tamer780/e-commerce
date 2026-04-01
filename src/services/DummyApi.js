export async function fetchProductsByMultipleCategories(categoriesArray) {
  try {
    const responses = await Promise.all(
      categoriesArray.map(async (category) => {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`,
        );
        if (!res.ok) throw new Error(`Failed to fetch ${category}`);
        const data = await res.json();

        return {
          categoryName: category,
          products: data.products,
        };
      }),
    );
    return responses;
  } catch (error) {
    console.error("Fetch Categories Error:", error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch Categories Error:", error);

    throw error;
  }
}

export async function fetchProductById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) throw new Error("Product not found");

  return res.json();
}

/* login*/

export async function loginUser(credentials) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
}

//add user//

export async function registerUser(credentials) {
  // eslint-disable-next-line no-unused-vars
  const { confirmPassword, ...dataToSend } = credentials;
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToSend),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }
  return response.json();
}

//add to cart

export async function placeOrder(orderData) {
  const response = await fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      products: orderData.order.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    }),
  });

  if (!response.ok) throw new Error("Failed to place order");
  return response.json();
}

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

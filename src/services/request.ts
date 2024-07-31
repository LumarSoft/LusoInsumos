export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/${endpoint}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};

export const fetchOneRow = async (endpoint: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${endpoint}/${id}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};

export const postData = async (
  endpoint: string,
  postData: Record<string, unknown> | FormData
) => {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers:
        postData instanceof FormData
          ? {}
          : { "Content-Type": "application/json" },
      body: postData instanceof FormData ? postData : JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Error al enviar datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
};

export const updateData = async (
  endpoint: string,
  id: number,
  updateData: Record<string, unknown>
) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${endpoint}/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      }
    );
    if (!response.ok) {
      throw new Error("Error al actualizar datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al actualizar datos:", error);
  }
};

export const deleteData = async (endpoint: string, id: number) => {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/${endpoint}/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Error al eliminar datos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al eliminar datos:", error);
  }
};

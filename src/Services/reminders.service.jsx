import axios from "axios";

export async function getReminders() {
  // Una llamda de api
  // Cachar errores
  // Regresar la data que recibe de esa api
  const url = "https://jsonplaceholder.typicode.com/todos";

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error on getReminders: ", error);
    return null;
  }
}

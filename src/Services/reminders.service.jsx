import axios from "axios";
import store from "../Redux/store";
import { setReminders } from "./reminders.reducer";

export async function getReminders() {
  // Una llamda de api
  // Cachar errores
  // Regresar la data que recibe de esa api
  const url = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";

  try {
    const { data } = await axios.get(url);
    console.log(data);
    store.dispatch(setReminders(data));
    return data;
  } catch (error) {
    console.error("Error on getReminders: ", error);
    return null;
  }
}

import axios from "axios";
import { useCallback, useEffect } from "react";

export function useListarElementos(url, setDatos) {
  const ListarDatos = useCallback(async () => {
    const results = await axios.get(url);
    setDatos(results.data);
  }, [url, setDatos]);

  useEffect(() => {
    const intervalId = setInterval(ListarDatos, 500);
    ListarDatos();
    return () => {
      clearInterval(intervalId);
    };
  }, []);
}

export function agregarElemento(url, requestData) {
    axios
      .post(url, requestData)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  }
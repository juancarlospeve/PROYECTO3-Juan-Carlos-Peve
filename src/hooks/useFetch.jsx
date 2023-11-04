import { useState, useEffect } from "react";

export const statuses = {
  LOADING: "Loading...",
  OK: "OK",
  ERROR: "Error",
};

// Llama a la api para obtener datos 
export default function useFetch(URL, options) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(statuses.LOADING);

    fetch(URL, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .then(() => setStatus(statuses.OK))
      .catch((error) => setStatus(statuses.ERROR));
  }, []);

  return { data, status };
}

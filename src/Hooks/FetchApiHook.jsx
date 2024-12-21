import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); // This makes a request to the API and waits for the response.
        const result = await response.json(); // This converts the response to JSON format.
        setData(result); //This updates the products state with the fetched data.
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
};

export default useFetch;

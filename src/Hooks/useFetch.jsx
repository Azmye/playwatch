import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import ApiConfig from '../Api/ApiConfig';

const useFetch = (endpoint, paginate, query) => {
  const baseUrl = ApiConfig.tmdb_baseUrl;
  const apiKey = ApiConfig.tmdb_ApiKey;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}${endpoint}`, {
        params: {
          api_key: apiKey,
          include_adult: false,
          languange: 'en-US',
          page: paginate || 1,
          region: 'ID|US',
          query: query,
          append_to_response: 'videos',
        },
      })
      .then((response) => {
        setData(response);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, [endpoint, paginate, query]);

  return { data, isLoading, error };
};

export default useFetch;

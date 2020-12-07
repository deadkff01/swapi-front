import useFetch from 'use-http';

export function useHttpInstance(headerParams = {}) {
  // force cache to avoid requests
  const options = {
    headers: {
      cachePolicy: 'cache-first',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headerParams
    }
  };
  return useFetch(process.env.REACT_APP_ENDPOINT, options);
}

export const CUSTOM_HOOKS = {
  withHttpRequests: {
    title: "With HTTP requests",
    description:
      "By defining your own custom hooks, you can create reusable functions with reusable state management. This means you can use it in multiple components and each time it's in used, it's newly created and its states won't affect other states in other components (they are completely independent). Custom hooks must start with “use” followed by a capital letter. Here's one example of fetching data via HTTP requests. 'fetchFn' is call HTTP requests and fetch data via RESTful API and 'initialValue' is the initial value of response data.",
    code: `
====> useFetch.js <==================================================


import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    /**
     * LOAD DATA -------------------------------------------------------
     */
    useEffect(() => {
    // 1. DEFINE THE FUNCTION
    async function fetchData() {
        setIsFetching(true); // The signal of start loading

        try {
        const data = await fetchFn();
        setFetchedData(data);
        } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
        }

        setIsFetching(false); // The signal of finish loading
    }

    // 2. CALL THE FUNCTION
    fetchData();
    }, [fetchFn]);


    /**
     * EXPOSED STATES & SET STATE FUNCTIONS ----------------------------
     */
    return {
    isFetching,         // isFetching: isFetching
    fetchedData,        // fetchedData: fetchedData
    setFetchedData,     // setFetchedData: setFetchedData
    error,              // error: error
    }
}

====> App.js <=========================================================

const {
  isFetching,
  error,
  fetchedData: userPlaces,          // alias
  setFetchedData: setUserPlaces,    // alias
} = useFetch(fetchUserPlaces, []);    
  `,
  },
};

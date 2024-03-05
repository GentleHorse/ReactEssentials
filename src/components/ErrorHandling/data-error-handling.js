export const ERROR_HANDLING = {
    withHttpRequests: {
      title: "With HTTP requests",
      description:
      "Error handling is a crucial thing not only in React and here's one typical example of error handling in React applications.",
      code: `
const [isFetching, setIsFetching] = useState(false);
const [availablePlaces, setAvailablePlaces] = useState([]);
const [error, setError] = useState();

....

useEffect(() => {

    /**
     * DEFINE THE HTTP REQUEST FUNCTION WITH ERROR HANDLING
     */
    async function fetchPlaces() {
    setIsFetching(true); // Send a signal of "start fetching"

    try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        // If fail to send http request
        if (!response.ok) {
        throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);

    } catch (error) {
        setError({
        message:
            error.message || "Could not fetch places, please try again later.",
        });
    }

    setIsFetching(false); // Send a signal of "end fetching"

    }

    /**
     * CALL THE FUNCTION
     */
    fetchPlaces();

}, []);
  `,
    },
    optimisticUpdating: {
      title: "Optimistic updating",
      description:
      "Updating data with RESTful API might takes time and it's not a good user experience to always show loading state. So here's an example of updating data behind the scene with showing something on UI. ",
      code: `
// Updating user selected places error state
const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();

....

async function handleSelectPlace(selectedPlace) {

    // 1. Firstly update data on UI
    setUserPlaces((prevPickedPlaces) => { .... });

    // 2. Behind updating UI, sending PUT request via RESTful API
    try {

        // The outsourced function in http.js file
        await updateUserPlaces([selectedPlace, ...userPlaces]);

    } catch (error) {

        // If some errors occur, roll back to previous state
        // Instead of showing loading state to users
        setUserPlaces(userPlaces);

        // Set error message
        setErrorUpdatingPlaces({
            message: error.message || "Failed to update places",
        });
    }
}
  `,
    },
  };
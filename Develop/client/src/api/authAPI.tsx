import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', { // Adjust the URL based on your server setup
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify(userInfo), // Convert the userInfo object to a JSON string
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Login failed'); // Handle errors appropriately
    }

    const data = await response.json(); // Parse the JSON response
    return data; // Return the data (e.g., token, user info)
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow the error for further handling if necessary
  }
}

export { login };
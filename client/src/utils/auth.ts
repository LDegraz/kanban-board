import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken(); // Get the token
    if (token) {
      return jwtDecode<JwtPayload>(token); // Decode the token and return the payload
    }
    return null; // Return null if no token is present
  }

  loggedIn() {
    const token = this.getToken(); // Get the token
    return !!token && !this.isTokenExpired(token); // Return true if token exists and is not expired
  }
  
  isTokenExpired(token: string) {
    const decoded: JwtPayload = jwtDecode<JwtPayload>(token); // Decode the token
    const currentTime = Date.now() / 1000; // Get the current time in seconds
    return decoded.exp ? decoded.exp < currentTime : true; // Check if the token is expired
  }

  getToken(): string {
    return localStorage.getItem('id_token') || ''; // Return the token from localStorage or an empty string
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken); // Set the token to localStorage
    window.location.replace('/'); // Redirect to the home page
  }

  logout() {
    localStorage.removeItem('id_token'); // Remove the token from localStorage
    window.location.replace('/login'); // Redirect to the login page
  }
}

export default new AuthService();

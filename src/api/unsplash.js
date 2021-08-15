import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 9jFExM5FiBrcFh07osupyYHAk0Lz6taXOxljrH9AMlY"
    }
})
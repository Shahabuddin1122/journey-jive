import axios from "axios";

const fetcher = async () => {
    const response = await axios.get('http://localhost:8000/hotel/get-all-hotel');
    return response.data;
};

export default fetcher;
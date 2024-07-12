import axios from "axios";

const axiosPublic =axios.create({
    baseURL:'https://meal-buddy-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
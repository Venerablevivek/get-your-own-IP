import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

//URL TO FETCH IP Address
const url = process.env.IP_URL;

// MAKING A FUNCTION CALL TO URL
const getIP = async() =>{
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log("Error Occurred while fetching IP",error.message);
    }
}

// Getting JSON Response with IP Address from GetIP() function
const Ipdata = await getIP();
export const myIP = Ipdata.data.ip;


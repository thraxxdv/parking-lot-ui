// @flow
import axios from "axios"

export const getParkingSpaces = () : Promise<Object> => {
    return axios.get(process.env.NEXT_PUBLIC_API_URL);
}
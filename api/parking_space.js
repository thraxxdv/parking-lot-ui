// @flow
import { API_URL } from "./constants";

import axios from "axios"

export const getParkingSpaces = () : Promise<Object> => {
    return axios.get(`${API_URL}/v1/parking/spaces`, {
    });
}
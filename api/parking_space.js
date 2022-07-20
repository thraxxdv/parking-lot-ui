// @flow
import { API_URL } from "./constants";

import axios from "axios"

export const getParkingSpaces = () : Promise<Object> => {
    return axios.get(`${API_URL}/v1/parking/spaces`, {
    });
}

export const parkVehicle = (gate: number, type: number, timestamp: string, uuid: string = '') : Promise<Object> => {
    return axios.put(`${API_URL}/v1/parking/park`, {
        gate: gate,
        vehicle_type_id: type,
        timestamp: timestamp,
        uuid: uuid
    });
}
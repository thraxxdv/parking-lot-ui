// @flow
import { API_URL } from "./constants";

import axios from "axios";

export const getParkingSpaces = (): Promise<Object> => {
  return axios.get(`${API_URL}/v1/parking/spaces`);
};

export const createParkingSpace = (type: number): Promise<Object> => {
  return axios.post(`${API_URL}/v1/parking/create`, {
    vehicle_type_id: type,
  });
};

export const parkVehicle = (
  gate: number,
  type: number,
  timestamp: string,
  uuid: string = ""
): Promise<Object> => {
  return axios.put(`${API_URL}/v1/parking/park`, {
    gate: gate,
    vehicle_type_id: type,
    timestamp: timestamp,
    uuid: uuid,
  });
};

export const unparkVehicle = (
  timestamp: string,
  uuid: string
): Promise<Object> => {
  return axios.put(`${API_URL}/v1/parking/unpark`, {
    timestamp: timestamp,
    uuid: uuid,
  });
};

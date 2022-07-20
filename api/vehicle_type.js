// @flow
import { API_URL } from "./constants";

import axios from "axios";

export const getVehicleTypes = (): Promise<Object> => {
  return axios.get(`${API_URL}/v1/vehicle-type/get`);
};

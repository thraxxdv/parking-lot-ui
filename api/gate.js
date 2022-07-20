// @flow
import { API_URL } from "./constants";

import axios from "axios";

export const getGates = (): Promise<Object> => {
  return axios.get(`${API_URL}/v1/gate/get`);
};

export const createGate = (nearestSpace: number): Promise<Object> => {
  return axios.post(`${API_URL}/v1/gate/create`, {
    nearest_space: nearestSpace,
  });
};

export const deleteGate = (nearestSpace: string): Promise<Object> => {
  return axios.delete(`${API_URL}/v1/gate/delete`, {
    nearest_space: nearestSpace,
  });
};

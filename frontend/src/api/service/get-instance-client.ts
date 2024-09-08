import { AxiosInstance } from "axios";
import { getAxiosInstance } from "./config";
import { configDotenv } from "dotenv";

configDotenv({
  path: "frontend/.env",
});

function getInstance(): AxiosInstance {
  console.log(process.env.REACT_APP_DATABASE);

  if (!process.env.REACT_APP_DATABASE) {
    throw Error("REACT_APP_DATABASE should be provided!");
  }
  return getAxiosInstance(process.env.REACT_APP_DATABASE);
}

export const instanceApi = getInstance();

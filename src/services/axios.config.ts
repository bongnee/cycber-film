import axios from "axios";
import { getLocal } from "../utils/localStore";

const BASE_URL = "https://movienew.cybersoft.edu.vn";
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzgiLCJIZXRIYW5TdHJpbmciOiIxNC8wNy8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MjA5MTUyMDAwMDAiLCJuYmYiOjE3MDI0ODY4MDAsImV4cCI6MTcyMTA2MjgwMH0.cB5XSbdlq0lzL-wmbcuAyvlRLMYFWmr20ODRWN5rPZc";
const tokenAuthorization = getLocal("user");

const configHeaderAxios = (): Record<string, string> => {
  return {
    TokenCybersoft,
    Authorization: "Bearer " + tokenAuthorization?.accessToken,
  };
};

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaderAxios(),
});


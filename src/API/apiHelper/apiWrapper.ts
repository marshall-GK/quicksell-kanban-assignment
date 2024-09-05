import axios from "axios";
import apiProvider from "./apiProvider";

type GetResponseType = {
  isSuccess: boolean;
  data?: any;
  status: number;
  errorMessage?: string;
}

export const GET = async (url: string, params?: any): Promise<GetResponseType> => {
  try {
    const response = await apiProvider.get(url, { params });
    const dataToReturn = {
      isSuccess: true,
      data: response.data,
      status: response.status,
    };
    return dataToReturn;
  } catch (err: any) {
    return {
      isSuccess: false,
      status: err?.response?.status,
      errorMessage: err,
    };
  }
};

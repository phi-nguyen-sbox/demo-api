import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = "http://localhost:3000";

const accessToken = "";

interface AxiosProps extends AxiosRequestConfig {
  successMessage: string,
  errorMessage: string,
}

class Api {
  public axiosInstance: AxiosInstance
  
  constructor(baseUrl: string = baseURL, timeout = 60000) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    this.axiosInstance.interceptors.request.use()
    this.axiosInstance.interceptors.response.use()
  }

  private verifyAndRequest = async <T>(config: AxiosProps) : Promise<AxiosResponse<T>> => {
    try {
      const response = await this.axiosInstance.request(config)
      console.log(config.successMessage)
      return response
    } catch {
      console.log(config.errorMessage)
    throw config.errorMessage
    }
  }

  public get methods() {
    return {
      get: <T>(config: AxiosProps) => this.verifyAndRequest<T>(config),
      post: <T>(config: AxiosProps) => this.verifyAndRequest<T>(config),
      put: <T>(config: AxiosProps) => this.verifyAndRequest<T>(config),
      delete: <T>(config: AxiosProps) => this.verifyAndRequest<T>(config),
    }
  }
} 

const axiosInstance = new Api().methods
export default axiosInstance 


import { ISignup } from "./auth.interface";


export default interface DefaultResponse {
  success: boolean;
  message?: string;
  error?: string;
  status: number;
  data?: ISignup;
}
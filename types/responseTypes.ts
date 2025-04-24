import { UserType } from './modelTypes';

export type AxiosResponseType = {
  success?: boolean;
  message?: string;
  data?: Data;
  errors?: Errors;
};

type Errors = {
  email?: string[];
  password?: string[];
};

type Data = {
  token?: string;
  user?: UserType;
};

export type ResponseResultType = {
  old?: { email: string; password: string };
} & AxiosResponseType;

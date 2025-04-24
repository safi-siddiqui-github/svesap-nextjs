import { CategoryType, UserType } from './modelTypes';

export type AxiosResponseType = {
  success?: boolean;
  message?: string;
  data?: Data;
  errors?: Errors;
};

type Errors = {
  id?: string[];
  email?: string[];
  password?: string[];
  name?: string[];
  description?: string[];
};

type Data = {
  token?: string;
  user?: UserType;
  category?: CategoryType;
  categories?: CategoryType[];
};

export type ResponseResultType = {
  old?: Old;
} & AxiosResponseType;

type Old = {
  email?: string;
  password?: string;
  name?: string;
  description?: string;
};

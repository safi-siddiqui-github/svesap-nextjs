type Similar = {
  id?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
  modified_at?: string;
}

export type UserType = {
  email?: string;
  name?: string;
  username?: string;
} & Similar;

export type CategoryType = {
  name?: string;
  description?: string;
} & Similar;



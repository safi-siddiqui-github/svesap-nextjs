'use server';

import { pathConstants } from '@/constants/pathConstants';
import { AxiosResponseType, ResponseResultType } from '@/types/responseTypes';
import axiosUtils from '@/utils/axiosUtils';
import {
  createCategoryValidation,
  deleteCategoryValidation,
} from '@/validations/categoryValidations';

export const createCategoryAction = async (
  _: ResponseResultType,
  formData: FormData
): Promise<ResponseResultType> => {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const old: ResponseResultType['old'] = { name, description };

  const validatedFields = createCategoryValidation.safeParse({
    name,
    description,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      old,
    };
  }

  let res = await axiosUtils.post(pathConstants.api.post.categoryCreate, {
    name,
    description,
  });

  const resData: AxiosResponseType = res?.data;

  if (!resData.success) {
    return {
      success: false,
      errors: resData.errors,
      old,
    };
  }

  return {
    success: true,
    data: resData.data,
  };
};

export const allCategoriesAction = async (): Promise<ResponseResultType> => {
  let res = await axiosUtils.get(pathConstants.api.get.categoryAll);
  const resData: AxiosResponseType = res?.data;

  return {
    success: true,
    data: resData.data,
  };
};

export const trashedCategoriesAction = async (): Promise<ResponseResultType> => {
  let res = await axiosUtils.get(pathConstants.api.get.categoryTrashed);
  const resData: AxiosResponseType = res?.data;

  return {
    success: true,
    data: resData.data,
  };
};

export const deleteCategoryAction = async (
  _: ResponseResultType,
  formData: FormData
): Promise<ResponseResultType> => {
  const id = formData.get('id') as string;

  const validatedFields = deleteCategoryValidation.safeParse({
    id,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  let res = await axiosUtils.post(pathConstants.api.post.categoryDelete, {
    id,
  });

  const resData: AxiosResponseType = res?.data;

  if (!resData.success) {
    return {
      success: false,
      errors: resData.errors,
    };
  }

  return {
    success: true,
    data: resData.data,
  };
};

export const recoverCategoryAction = async (
  _: ResponseResultType,
  formData: FormData
): Promise<ResponseResultType> => {
  const id = formData.get('id') as string;

  const validatedFields = deleteCategoryValidation.safeParse({
    id,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  let res = await axiosUtils.post(pathConstants.api.post.categoryRecover, {
    id,
  });

  const resData: AxiosResponseType = res?.data;

  if (!resData.success) {
    return {
      success: false,
      errors: resData.errors,
    };
  }

  return {
    success: true,
    data: resData.data,
  };
};

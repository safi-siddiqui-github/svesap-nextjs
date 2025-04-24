import { z } from 'zod';

export const createCategoryValidation = z.object({
  name: z.string().min(3).trim(),
  description: z.string().min(3).trim(),
});

export const deleteCategoryValidation = z.object({
  id: z.string(),
});

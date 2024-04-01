import { z } from 'zod';
import { contactSchema } from './contact';

export const createClubSchema = z.object({
  name: z.string().min(3, 'Club name must be at least 3 characters long'),
  description: z.string().min(1, 'Description is required'),
  officers: z
    .object({
      id: z.string().min(1),
      name: z.string(),
      position: z.string().min(1),
      president: z.boolean(),
      locked: z.boolean(),
    })
    .array()
    .min(1),
  contacts: contactSchema.array(),
});
export const editClubContactSchema = z.object({
  contacts: contactSchema.array(),
});

export const editClubSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  description: z.string().min(1),
});
export const editOfficerSchema = z.object({
  officers: z
    .object({
      userId: z.string(),
      name: z.string(),
      locked: z.boolean(),
      title: z.string().min(1),
      position: z.enum(['President', 'Officer']),
    })
    .array(),
});

export const feedbackFormSchema = z.object({
  rating: z.number().min(1).max(10),
  likes: z.string().default(''),
  dislikes: z.string().default(''),
  features: z.string().default(''),
  submit_on: z.date().default(new Date()),
});


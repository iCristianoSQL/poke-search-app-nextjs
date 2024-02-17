import * as z from "zod";

export const schema = z.object({
  search: z.string(),
});
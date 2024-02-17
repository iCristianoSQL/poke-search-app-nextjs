import * as z from "zod";

export const pageSchema = z.object({
  aZSelect: z.enum(["1", "2"]),
  iDSelect: z.enum(["1", "2"]),
});

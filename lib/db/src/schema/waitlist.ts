import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const waitlistTable = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  note: text("note").notNull().default(""),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export type InsertWaitlist = typeof waitlistTable.$inferInsert;
export type Waitlist = typeof waitlistTable.$inferSelect;

import { pgTable, text, serial, integer, boolean, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: text("phone"),
  isAdmin: boolean("is_admin").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  firstName: true,
  lastName: true,
  phone: true,
});

// Product schema
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  isNew: boolean("is_new").default(false),
  isSale: boolean("is_sale").default(false),
});

export const insertProductSchema = createInsertSchema(products).pick({
  name: true,
  description: true,
  price: true,
  image: true,
  category: true,
  isNew: true,
  isSale: true,
});

// Gym Location schema
export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  rating: decimal("rating", { precision: 3, scale: 1 }).notNull(),
  reviewCount: integer("review_count").notNull(),
  hours: text("hours").notNull(),
  amenities: text("amenities").array().notNull(),
  lat: decimal("lat", { precision: 10, scale: 6 }).notNull(),
  lng: decimal("lng", { precision: 10, scale: 6 }).notNull(),
});

export const insertLocationSchema = createInsertSchema(locations).pick({
  name: true,
  address: true,
  rating: true,
  reviewCount: true,
  hours: true,
  amenities: true,
  lat: true,
  lng: true,
});

// Training Program schema
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

export const insertProgramSchema = createInsertSchema(programs).pick({
  title: true,
  description: true,
  image: true,
});

// Registration schema
export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  membership: text("membership").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertRegistrationSchema = createInsertSchema(registrations).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  membership: true,
  createdAt: true,
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type Location = typeof locations.$inferSelect;
export type InsertLocation = z.infer<typeof insertLocationSchema>;

export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;

export type Registration = typeof registrations.$inferSelect;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;

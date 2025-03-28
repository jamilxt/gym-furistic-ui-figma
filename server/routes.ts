import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema, insertUserSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  
  app.get("/api/products/featured", async (req, res) => {
    try {
      const products = await storage.getFeaturedProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured products" });
    }
  });
  
  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await storage.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });
  
  // Gym Locations
  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await storage.getLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch locations" });
    }
  });
  
  app.get("/api/locations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const location = await storage.getLocation(id);
      
      if (!location) {
        return res.status(404).json({ message: "Location not found" });
      }
      
      res.json(location);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch location" });
    }
  });
  
  // Training Programs
  app.get("/api/programs", async (req, res) => {
    try {
      const programs = await storage.getPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch programs" });
    }
  });
  
  app.get("/api/programs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const program = await storage.getProgram(id);
      
      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch program" });
    }
  });
  
  // User Registration
  app.post("/api/register", async (req, res) => {
    try {
      // Define the registration schema
      const registrationSchema = z.object({
        firstName: z.string().min(2, "First name is required"),
        lastName: z.string().min(2, "Last name is required"),
        email: z.string().email("Please enter a valid email address"),
        phone: z.string().min(10, "Please enter a valid phone number"),
        membership: z.string().min(1, "Please select a membership type"),
        terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
      });
      
      // Validate the request body
      const validatedData = registrationSchema.parse(req.body);
      
      // Remove terms property before storing
      const { terms, ...registrationData } = validatedData;
      
      // Create registration in storage
      const registration = await storage.createRegistration(registrationData);
      
      // Generate a username from email for user account
      const emailParts = validatedData.email.split('@');
      const randomSuffix = Math.floor(Math.random() * 1000);
      const username = `${emailParts[0]}${randomSuffix}`;
      
      // Create a user account
      const userResult = await storage.createUser({
        username,
        password: Math.random().toString(36).slice(-8), // Generate random password
        email: validatedData.email,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        phone: validatedData.phone
      });
      
      res.status(201).json({ 
        message: "Registration successful", 
        registrationId: registration.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        message: "Registration failed", 
        error: (error as Error).message 
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}

import { 
  users, type User, type InsertUser,
  products, type Product, type InsertProduct,
  locations, type Location, type InsertLocation,
  programs, type Program, type InsertProgram,
  registrations, type Registration, type InsertRegistration
} from "@shared/schema";
import { generateLocations, generateProducts, generatePrograms } from "../client/src/lib/data";

// Storage interface
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product operations
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getFeaturedProducts(): Promise<Product[]>;
  
  // Location operations
  getLocations(): Promise<Location[]>;
  getLocation(id: number): Promise<Location | undefined>;
  
  // Program operations
  getPrograms(): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  
  // Registration operations
  createRegistration(registration: Omit<InsertRegistration, "createdAt">): Promise<Registration>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private usersStore: Map<number, User>;
  private productsStore: Map<number, Product>;
  private locationsStore: Map<number, Location>;
  private programsStore: Map<number, Program>;
  private registrationsStore: Map<number, Registration>;
  
  private userCurrentId: number;
  private registrationCurrentId: number;

  constructor() {
    this.usersStore = new Map();
    this.productsStore = new Map();
    this.locationsStore = new Map();
    this.programsStore = new Map();
    this.registrationsStore = new Map();
    
    this.userCurrentId = 1;
    this.registrationCurrentId = 1;
    
    // Initialize with sample data
    this.initSampleData();
  }

  private initSampleData() {
    // Add sample products
    const productsList = generateProducts();
    productsList.forEach(product => {
      this.productsStore.set(product.id, product as Product);
    });
    
    // Add sample gym locations
    const locationsList = generateLocations();
    locationsList.forEach(location => {
      this.locationsStore.set(location.id, location as Location);
    });
    
    // Add sample training programs
    const programsList = generatePrograms();
    programsList.forEach(program => {
      this.programsStore.set(program.id, program as Program);
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.usersStore.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.usersStore.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id, isAdmin: false };
    this.usersStore.set(id, user);
    return user;
  }
  
  // Product operations
  async getProducts(): Promise<Product[]> {
    return Array.from(this.productsStore.values());
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    return this.productsStore.get(id);
  }
  
  async getFeaturedProducts(): Promise<Product[]> {
    // Get first 3 products as featured
    return Array.from(this.productsStore.values()).slice(0, 3);
  }
  
  // Location operations
  async getLocations(): Promise<Location[]> {
    return Array.from(this.locationsStore.values());
  }
  
  async getLocation(id: number): Promise<Location | undefined> {
    return this.locationsStore.get(id);
  }
  
  // Program operations
  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programsStore.values());
  }
  
  async getProgram(id: number): Promise<Program | undefined> {
    return this.programsStore.get(id);
  }
  
  // Registration operations
  async createRegistration(registrationData: Omit<InsertRegistration, "createdAt">): Promise<Registration> {
    const id = this.registrationCurrentId++;
    const createdAt = new Date().toISOString();
    const registration: Registration = { 
      ...registrationData, 
      id, 
      createdAt
    };
    this.registrationsStore.set(id, registration);
    return registration;
  }
}

// Export storage instance
export const storage = new MemStorage();

//@ts-nocheck
import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client :any;
let clientPromise :any;

if (!process.env.NEXT_PUBLIC_MONGODB_URL) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
    console.log("Connecting to MongoDB in development environment...");
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log("Connecting to MongoDB in production environment...");
}

export default clientPromise;

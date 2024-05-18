import { NextResponse } from "next/server";
import { Client, Databases, ID } from "node-appwrite";

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, phone } = reqBody;

    // Ensure environment variables are defined
    if (!process.env.APPWRITE_ENDPOINT || !process.env.PROJECT_ID || !process.env.API_KEY || !process.env.DATABASE_ID || !process.env.COLLECTION_ID) {
      throw new Error('Missing environment variables');
    }

    console.log("Received data:", { email, phone });

    // Initialize the Appwrite client
    const client = new Client();
    client
      .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your Appwrite endpoint
      .setProject(process.env.PROJECT_ID) // Your project ID
      .setKey(process.env.API_KEY); // Your API key

    const databases = new Databases(client);

    console.log(email, phone)
    const response = await databases.createDocument(
      process.env.DATABASE_ID, // Your database ID
      process.env.COLLECTION_ID, // Your collection ID
      ID.unique(), // Document ID (use 'unique()' to auto-generate an ID)
      {email, phone } // Data to be saved
    );

    console.log("Document created successfully:", response);

    return NextResponse.json({ success: true, response }, { status: 200 });
  } catch (error) {
    console.error("Error creating document:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

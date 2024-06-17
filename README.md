# Task-MedWander

## Hosting
Project has been hosted on vercel [click to visit](https://task-med-wander-9179.vercel.app/).

## Getting Started

To run locally on your machine, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/U-Shashank/Task-MedWander
   ```

2. **Navigate to Project Directory**
   ```bash
   cd Task-MedWander
   ```

3. **Install Dependencies**
   ```bash
   npm build
   ```

4. **Set Up Environment Variable**
   #### For client:
   Backend api endpoint (This will change when server is deployed)
   - VITE_HOST_URL = http://localhost:3000/api/v1
   #### For server:
   - POSTGRES_URL = YOUR_POSTGRES_URL

5. **Set Up Environment Variable**
    - Install postgres if not installed or use some other provider like vercel.
    - Use data.sql in client/db to create database and necessary tables.

6. **Run the App**
   ### In the main directory Swift-Cart:
   ```bash
   npm run dev
   ```
   Will start both server and client together using concurrently

## Features
 - Create user with simplr form.
 - See all users and download as xlsx.
 - Form validation


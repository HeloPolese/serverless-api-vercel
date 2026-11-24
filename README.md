# Serverless API with Vercel Functions

A serverless API developed using **Vercel Functions** as part of a practical assignment for the Software Architecture course at **IFES (Federal Institute of Espírito Santo)**.

The project demonstrates how to create, deploy, and test serverless functions using the Vercel platform.

## Technologies

- **JavaScript / TypeScript** – Function implementation.
- **Next.js** – Application framework.
- **Vercel Functions** – Serverless function execution and deployment.
- **Git & GitHub** – Version control and source code management.

## Project Structure

```text
serverless-api-vercel/
├── app/
│   └── api/
│       └── [function-name]/
│           └── route.ts
├── public/
├── package.json
└── README.md
```

*Note: The structure may vary depending on the implemented function and the original example project.*

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/HeloPolese/serverless-api-vercel.git
```

Navigate to the project directory:

```bash
cd serverless-api-vercel
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## API Deployment

The project is deployed on **Vercel**, which automatically builds and hosts the application.

The serverless function can be accessed through its corresponding API endpoint.

## Project Requirements

- Create a new serverless function inside `app/api`.
- Implement the function following the structure of the provided example.
- Publish the source code on GitHub.
- Deploy the project using Vercel.
- Verify that the deployed API endpoint works correctly.

## Academic Context

Developed as part of a practical assignment for the **Software Architecture** course at the Federal Institute of Espírito Santo (IFES).

**Institution:** IFES – Campus Santa Teresa  
**Course:** Internet Systems Technology

## Author

**Heloisa Polese**

- GitHub: [@HeloPolese](https://github.com/HeloPolese)

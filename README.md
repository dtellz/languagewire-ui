# LanguageWire UI

A React-based Single Page Application (SPA) designed to interact with the LanguageWire REST API, providing users with a seamless interface for translating text into supported languages. Leveraging modern web technologies, this project aims to offer an intuitive and responsive, yet simple user experience for real-time language translation, demonstrating the capabilities of connecting frontend frameworks with backend services.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Packaging and running with Docker](#packaging and running with Docker)
- [Built With](#built-with)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20.11.1 or higher)

Recommended: Use nvm to manage Node.js versions.

Run this command to setup the right Node.js version:

```bash
nvm use
```

### Installation

- Clone the repository:

```bash
git clone https://github.com/dtellz/languagewire-ui.git
```

- Install dependencies:

```bash
npm install
```

- Start the development server:

```bash
npm start
```

## Usage

The application will be running on `http://localhost:3000` by default.

## Packaging and running with Docker

- Build the Docker image:

```bash
docker build -t languagewire-ui .
```

- Run the Docker container:

```bash
docker run -p 3000:3000 languagewire-ui
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that compiles to plain JavaScript

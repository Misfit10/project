Node.js + React Full-Stack Deployment (Docker, Nginx, GitHub Actions)

This project demonstrates how to containerize a Node.js + React application, deploy it to an AWS EC2 instance with Nginx as a reverse proxy, and set up a CI/CD pipeline using GitHub Actions.

1. Project Overview

A backend built with Node.js and Express.

A frontend built with React.

Both parts are containerized using Docker.

Docker Compose orchestrates the frontend and backend containers.

Nginx acts as a reverse proxy to expose the application on port 80.

GitHub Actions provides an automated CI/CD pipeline to deploy updates to AWS EC2.

2. Project Structure

The repository contains three main areas:

backend: Node.js API server files and Dockerfile.

frontend: React client application files and Dockerfile.

.github/workflows: GitHub Actions workflow file for automated deployment.

3. Development Workflow

Build the Node.js backend and React frontend locally.

Create Docker images for both services.

Use Docker Compose to run the backend and frontend containers together.

Verify that the backend API responds correctly and the frontend renders properly.

4. Deployment on AWS EC2

Launch an Ubuntu EC2 instance and open HTTP (port 80) and SSH security group rules.

Install Docker and Docker Compose on the EC2 instance.

Clone the project repository onto the EC2 instance.

Start the containers with Docker Compose in detached mode so they run in the background.

5. Nginx Configuration

Install Nginx on the EC2 instance.

Create a server block configuration file pointing to the backend or frontend service running in Docker.

Link the configuration into the Nginx enabled sites directory.

Test the configuration and restart Nginx.

Verify that visiting the EC2 public IP shows the application instead of the default Nginx welcome page.

6. HTTPS (Optional)

You can use Certbot for a free Let’s Encrypt certificate or create a self-signed certificate for testing.

Update the Nginx configuration to listen on HTTPS and point to the certificate files.

7. CI/CD Pipeline with GitHub Actions

Place a workflow file inside .github/workflows in the repository.

Configure the workflow to trigger on pushes to the main branch.

The workflow:

Checks out the latest code.

Securely copies the files to the EC2 instance.

Connects via SSH to stop old containers, rebuild images, and restart services.

Store sensitive information like the EC2 host IP and SSH private key as GitHub Secrets.

8. Secrets Management

Use GitHub Secrets for the EC2 host and SSH key so credentials are never stored in code.

Optional: integrate Vault or AWS Secrets Manager for additional secret storage.

9. Horizontal Scaling

The application is containerized and can be scaled horizontally by running multiple container instances behind a load balancer (for example with AWS ECS, Kubernetes, or a Docker Swarm cluster).

10. Submission Guidelines

Provide a live URL of the deployed application.

Include this documentation in the repository so reviewers can follow the setup and deployment process.

Push the code to a public GitHub repository and share the link.

Summary

This setup shows a complete production-ready workflow: building a full-stack app, containerizing with Docker, deploying on AWS with Nginx, and enabling automated deployments through a GitHub Actions pipeline.

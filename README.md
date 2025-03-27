# MicroStream Hub 🏢

<div align="center">
   <img src="https://iamarijit.dev/img/projects/MicroStream-Icon.png" height="350"/>
</div>

The central hub for Microstream, a lightweight, real-time communication system for microservices. Routes messages between services, handles service discovery, and ensures seamless communication with WebSockets. Perfect for building scalable, event-driven architectures.

Author: [Arijit Banerjee](#author)  
License: [MIT](./LICENSE)

<!-- shields.io Badges -->

<!-- Websites / Links - Up / Down -->

[![GitHub Repository Link](https://img.shields.io/website?url=https%3A%2F%2Fgithub.com%2Farijitcodes%2Fmicrostream-hub&style=for-the-badge&logo=github&label=repository&labelColor=%23232323)](https://github.com/arijitcodes/microstream-hub) &nbsp;&nbsp;

<!-- GitHub Badges -->

[![GitHub License](https://img.shields.io/github/license/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/microstream-hub/blob/main/LICENSE) &nbsp;
[![GitHub language count](https://img.shields.io/github/languages/count/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=%23232323&color=%23404040)](https://github.com/arijitcodes/microstream-hub) &nbsp;
[![GitHub top language](https://img.shields.io/github/languages/top/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=%23232323)](https://github.com/arijitcodes/microstream-hub) &nbsp;
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/arijitcodes/microstream-hub/main?style=for-the-badge&logo=github&labelColor=%23232323)](https://github.com/arijitcodes/microstream-hub/commits/main) &nbsp;

[![GitHub contributors](https://img.shields.io/github/contributors/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/microstream-hub/graphs/contributors) &nbsp;
[![GitHub pull requests](https://img.shields.io/github/issues-pr/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/microstream-hub/pulls) &nbsp;
[![GitHub issues](https://img.shields.io/github/issues/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/microstream-hub/issues) &nbsp;
[![GitHub repo size](https://img.shields.io/github/repo-size/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/microstream-hub) &nbsp;
[![GitHub code size](https://img.shields.io/github/languages/code-size/arijitcodes/microstream-hub?style=for-the-badge&logo=github&labelColor=232323&color=404040)](https://github.com/arijitcodes/microstream-hub) &nbsp;

<!-- Others -->

[![Semantic-Release Badge](https://img.shields.io/badge/semantic--release-e10079?style=for-the-badge&logo=semantic-release&labelColor=%23232323)](https://github.com/semantic-release/semantic-release) &nbsp;
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen?style=for-the-badge&labelColor=%23232323&color=brightGreen)](https://commitizen.github.io/cz-cli/) &nbsp;
[![Conventional Commits Badge](https://img.shields.io/badge/conventional_commits-404040?style=for-the-badge&logo=conventionalcommits&labelColor=%23232323&color=%23404040)](https://www.conventionalcommits.org) &nbsp;

<hr>

## Table of Contents 📚

- [Features ✨](#features-)
- [How Does It Work? 🌟](#how-does-it-work-)
- [Deployment 🚀](#deployment-)
- [Client SDK 🚀](#client-sdk-)
- [Author 👨‍💻](#author-)
- [Contributing 🤝](#contributing-)
- [License 📜](#license-)

<hr>

## Features ✨

- 🏢 Central WebSocket server for real-time communication between microservices.
- 🔗 Service discovery and registration.
- 📡 Request routing and response handling.
- ❤️ Heartbeat mechanism to detect and remove inactive services.
- 📊 Configurable logging for better observability.
- 🔄 Real-time inter-service communication using WebSockets.
- ⚡ Synchronous request-response pattern without HTTP overhead.
- 🔍 Auto-discovery and connection management.

<hr>

## How Does It Work? 🌟

**MicroStream** simplifies communication between microservices using a **centralized hub-and-spoke architecture**, also known as a **star network**. In this model, the **[MicroStream Hub](https://github.com/arijitcodes/microstream-hub)** acts as the central communication point, and your microservices, equipped with the **[MicroStream Client](https://github.com/arijitcodes/microstream-client)**, connect to the Hub and communicate through it.

Here's how it works:

### 🌟 The Star Network Concept

Imagine a star:

- The **center of the star** is the **[MicroStream Hub](https://github.com/arijitcodes/microstream-hub)**.
- The **points of the star** are your **microservices** (each equipped with the **[MicroStream Client](https://github.com/arijitcodes/microstream-client)**).

![MicroStream Star Network Diagram](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBIdWJbTWljcm9TdHJlYW0gSHViXSAtLT4gU2VydmljZTFbU2VydmljZSAxXVxuICAgIEh1YiAtLT4gU2VydmljZTJbU2VydmljZSAyXVxuICAgIEh1YiAtLT4gU2VydmljZTNbU2VydmljZSAzXVxuICAgIEh1YiAtLT4gU2VydmljZTRbU2VydmljZSA0XVxuICAgIEh1YiAtLT4gU2VydmljZTVbU2VydmljZSA1XVxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJsaW5lV2lkdGgiOiIzIn19)

In this setup:

- The **Hub** acts as the central communication point.
- **Services** (nodes) connect to the Hub and communicate through it, **not directly with each other**.

### 🚀 How It Works in Practice

1. **Service Registration**:

   - Each microservice connects to the Hub using the **[MicroStream Client](https://github.com/arijitcodes/microstream-client)**.
   - The **[Hub](https://github.com/arijitcodes/microstream-hub)** automatically detects and registers the service.

2. **Request-Response Communication in Real-Time**:

   - When **Service A** needs to talk to **Service B**, it sends a request to the **[Hub](https://github.com/arijitcodes/microstream-hub)**.
   - The **[Hub](https://github.com/arijitcodes/microstream-hub)** routes the request to **Service B**.
   - **Service B** processes the request and sends a response back through the **[Hub](https://github.com/arijitcodes/microstream-hub)**.
   - All communication happens in **real-time** over WebSockets, ensuring fast and reliable data exchange.

3. **Auto-Discovery**:

   - Once connected, the **[Hub](https://github.com/arijitcodes/microstream-hub)** keeps track of all connected services, so you don’t need to manually configure connections between services. However, you still need to specify the target service and method when sending a request.

4. **Heartbeat Mechanism**:
   - Services send regular "heartbeats" to the **[Hub](https://github.com/arijitcodes/microstream-hub)** to confirm they’re active.
   - If a service stops sending heartbeats, the **[Hub](https://github.com/arijitcodes/microstream-hub)** removes it from the network.

### ✨ Why Choose MicroStream?

**MicroStream** is designed to make microservice communication **simple**, **efficient**, and **scalable**. Here’s why you’ll love it:

- **Easy Setup**: Minimal configuration required to get started.
- **Real-Time Request-Response Communication**: Built on WebSockets for instant, reliable data exchange.
- **Auto-Service-Management**: Once connected, the **[Hub](https://github.com/arijitcodes/microstream-hub)** keeps track of all services, simplifying network management.
- **Scalable**: Easily add more services without reconfiguring the network.
- **Lightweight**: Minimal overhead compared to traditional REST or gRPC.
- **Flexible**: Works seamlessly with any microservice architecture.

<hr>

## Deployment 🚀

### Running via Docker 🐳

```bash
docker compose up --build
```

To change the port in Docker Compose, you can set the `PORT` environment variable in the `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  microstream-hub:
    build: .
    ports:
      - "${PORT:-3000}:3000"
    environment:
      - PORT=3000
    restart: unless-stopped
```

### Running Locally 🏃‍♂️

#### Installation 🛠️

```bash
npm install
```

#### Running the Hub

```bash
node src/hub.js
```

#### Configuration Example

To change the port, you can set the `PORT` environment variable:

```bash
PORT=4000 node src/hub.js
```

<hr>

## Client SDK 🚀

We provide a client SDK for easy integration with the MicroStream Hub.

- [MicroStream Client SDK on npm](https://www.npmjs.com/package/microstream-client)
- [MicroStream Client SDK Repository](https://github.com/arijitcodes/microstream-client)

<hr>

## Author 👨‍💻

Author: [Arijit Banerjee](https://www.github.com/arijitcodes)

About: Full Stack Web Developer | Cyber Security Enthusiast | Actor

Social Media: &nbsp;
[![Instagram](https://i.ibb.co/4t76vTc/insta-transparent-14px.png) Instagram](https://www.instagram.com/arijit.codes)
&nbsp;
[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/arijitban)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/arijitcodes)
&nbsp;
[![Website](https://i.ibb.co/wCV57xR/Internet-1.png) Website](https://iamarijit.dev)

Email: arijit.codes@gmail.com

<hr>

## Contributing 🤝

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

<hr>

## License 📜

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

<hr>

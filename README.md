# MicroStream Hub 🏢

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

- [Features ✨](#features-✨)
- [Deployment 🚀](#deployment-🚀)
- [Client SDK 🚀](#client-sdk-🚀)
- [Author 👨‍💻](#author-👨‍💻)
- [Contributing 🤝](#contributing-🤝)
- [License 📜](#license-📜)

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
- 📊 Configurable logging for better observability.

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

We also provide a client SDK for easy integration with the MicroStream Hub.

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

# [1.1.0](https://github.com/arijitcodes/microstream-hub/compare/v1.0.6...v1.1.0) (2025-03-02)


### Features

✅ implement standardized error handling system ([ac3fb73](https://github.com/arijitcodes/microstream-hub/commit/ac3fb73b52c36c9d71f56aa1100d5487b4e8b2d8))  

- Implement structured error response format
- Add error code pattern for service registration
- Standardize error handling in socket middleware
- Add type checking for Error and CustomError instances
- Ensure consistent UNKNOWN error fallback
- Updated documentation <br/><br/>

## [1.0.6](https://github.com/arijitcodes/microstream-hub/compare/v1.0.5...v1.0.6) (2025-03-01)


### Bug Fixes

✅ **hub.js:** prevent duplicate service registration in hub ([9b3168f](https://github.com/arijitcodes/microstream-hub/commit/9b3168fa1de4f74006a0c35763f0a1205fa3bd3d)), closes [#3](https://github.com/arijitcodes/microstream-hub/issues/3)  

- Added socket.io middleware to validate service registration
- Implemented service name uniqueness check during connection
- Added standardized error response for duplicate registration attempts
- Implemented socket cleanup for rejected connections
- Added proper logging for duplicate registration attempts
- Implemented automatic rejection of duplicate socket connection requests

This prevents multiple services from registering with the same name, ensuring message routing integrity and system stability. Any duplicate connection attempts are automatically rejected at the connection level, providing enhanced security against unauthorized service impersonation. <br/><br/>

## [1.0.5](https://github.com/arijitcodes/microstream-hub/compare/v1.0.4...v1.0.5) (2025-03-01)


### Bug Fixes

✅ **hub:** fixing a bug for Issue [#2](https://github.com/arijitcodes/microstream-hub/issues/2) ([d18f58b](https://github.com/arijitcodes/microstream-hub/commit/d18f58be2a3329ef94757963ed2a5b1a78a4d658))  

There was an issue where client was having trouble to handle error for a request to an Unknwon /
Un-registered / Invalid service. There were proper detection and error - but the structure of the
returned data / error was a bit mismatched.
This should fix it. <br/><br/>

## [1.0.4](https://github.com/arijitcodes/microstream-hub/compare/v1.0.3...v1.0.4) (2025-02-28)


### Bug Fixes

✅ **version:** still trying ti fix version update issue ([c12ac23](https://github.com/arijitcodes/microstream-hub/commit/c12ac23b1cbeb522d946af496991f8067f56c1c1))

## [1.0.3](https://github.com/arijitcodes/microstream-hub/compare/v1.0.2...v1.0.3) (2025-02-28)


### Bug Fixes

✅ **package.json:** trying to fixe package.json version not being updated issue ([2a64c39](https://github.com/arijitcodes/microstream-hub/commit/2a64c3967101e8c345572e2a7acb88cef57af15e))

## [1.0.2](https://github.com/arijitcodes/microstream-hub/compare/v1.0.1...v1.0.2) (2025-02-28)


### Bug Fixes

✅ **package.json:** added Keywords ([a8a6462](https://github.com/arijitcodes/microstream-hub/commit/a8a646292bebc106cc286fe81534331f9f6e6ff4))

## [1.0.1](https://github.com/arijitcodes/microstream-hub/compare/v1.0.0...v1.0.1) (2025-02-28)


### Bug Fixes

✅ **readme:** updated Readme - to test version bump by semantic-release ([1cd8a43](https://github.com/arijitcodes/microstream-hub/commit/1cd8a43ac0a54903711a595c80937a9c93207f78))

# 1.0.0 (2025-02-28)


### Bug Fixes

✅ **docker-compose:** Update Docker Compose file and README ([0bdd831](https://github.com/arijitcodes/microstream-hub/commit/0bdd831acf519b79f3708eed754a2b19dbf68ca5))  

This commit updates the Docker Compose file and the README in the microstream-hub project.

Changes include:
- Updated Docker Compose file for better configuration and deployment.
- Updated README with new information and improved structure.

These updates ensure that developers have clear and comprehensive documentation and configuration for using and deploying the microstream-hub project. <br/><br/>
  
✅ **release.config.js:** trying a fix for Semantic-Release Config ([b97934a](https://github.com/arijitcodes/microstream-hub/commit/b97934a490279fa594da531197d356383eebb3aa)), closes [#1](https://github.com/arijitcodes/microstream-hub/issues/1)  

This might fix the issue of Semantic-Release failing to push Git Tag with GITHUB_TOKEN. We removed
the 'repositoryUrl' with value as ssh git repo link from release.config.js - as it was needed to
test locally but it is creating a problem maybe on CI/CD. Let's see if it does fix it. If it does,
then good. <br/><br/>
  


### Features

✅ **logger:** Implement configurable and colorful logging ([58d98ac](https://github.com/arijitcodes/microstream-hub/commit/58d98ac6033dc8a8fac6324c1cf3d8239ac616ce))  

This commit introduces a new logging utility to the microstream-hub project, allowing developers to control the verbosity of logs using a configurable logLevel option. The logLevel supports the following levels: "debug", "info", "warn", "error", and "silent". Additionally, logs are now color-coded based on their type for better readability.

Changes include:
- Creation of a logger.js file in src/utils/ with methods for debug, info, warn, and error, respecting the logLevel setting.
- Addition of a logLevel option to the hub configuration.
- Initialization of the logger in hub.js using the provided logLevel.
- Replacement of all console.log, console.warn, and console.error calls with the appropriate logger methods.
- Color-coding of log messages using the chalk library. <br/><br/>
  
✅ **logger:** Implement configurable logging and replace console statements in hub.js ([0860bf3](https://github.com/arijitcodes/microstream-hub/commit/0860bf33405a929da297a817fb98394a2755bf1c))  

This commit introduces a new logging utility to the microstream-hub project, allowing developers to control the verbosity of logs using a configurable logLevel option. The logLevel supports the following levels: "debug", "info", "warn", "error", and "silent".

Changes include:
- Creation of a logger.js file in src/utils/ with methods for debug, info, warn, and error, respecting the logLevel setting.
- Addition of a logLevel option to the hub configuration.
- Initialization of the logger in hub.js using the provided logLevel.
- Replacement of all console.log, console.warn, and console.error calls with the appropriate logger methods. <br/><br/>
  
✅ **microstream-hub:** The primary working setup for microstream-hub. ([68fb1dc](https://github.com/arijitcodes/microstream-hub/commit/68fb1dcda974b960fd685549a149e023659613a6))  

This is the first commit - with the primary version (v1) of a working version of microstream-hub. <br/><br/>
  
✅ **semantic-release:** set up Semantic-Release for auto Release & Update ([af97398](https://github.com/arijitcodes/microstream-hub/commit/af97398cfa5f9dcba5a95f867357e82e280a6875)), closes [#1](https://github.com/arijitcodes/microstream-hub/issues/1)  

    Setup Semantic-Release with Commitizen - along with GitHub Workflow. Now this setup will -

     - Auto Release on GitHub, NPM
     - Update Changelog automatically from Conventional Commit messages and update version in Package.json
     - Set up Commitizen for Conventiona Commit message formatting
     - Setup GitHub Workflow to automate all these tasks <br/><br/>

# 1.0.0 (2025-02-28)


### Bug Fixes

✅ **docker-compose:** Update Docker Compose file and README ([0bdd831](https://github.com/arijitcodes/microstream-hub/commit/0bdd831acf519b79f3708eed754a2b19dbf68ca5))  

This commit updates the Docker Compose file and the README in the microstream-hub project.

Changes include:
- Updated Docker Compose file for better configuration and deployment.
- Updated README with new information and improved structure.

These updates ensure that developers have clear and comprehensive documentation and configuration for using and deploying the microstream-hub project. <br/><br/>
  


### Features

✅ **logger:** Implement configurable and colorful logging ([58d98ac](https://github.com/arijitcodes/microstream-hub/commit/58d98ac6033dc8a8fac6324c1cf3d8239ac616ce))  

This commit introduces a new logging utility to the microstream-hub project, allowing developers to control the verbosity of logs using a configurable logLevel option. The logLevel supports the following levels: "debug", "info", "warn", "error", and "silent". Additionally, logs are now color-coded based on their type for better readability.

Changes include:
- Creation of a logger.js file in src/utils/ with methods for debug, info, warn, and error, respecting the logLevel setting.
- Addition of a logLevel option to the hub configuration.
- Initialization of the logger in hub.js using the provided logLevel.
- Replacement of all console.log, console.warn, and console.error calls with the appropriate logger methods.
- Color-coding of log messages using the chalk library. <br/><br/>
  
✅ **logger:** Implement configurable logging and replace console statements in hub.js ([0860bf3](https://github.com/arijitcodes/microstream-hub/commit/0860bf33405a929da297a817fb98394a2755bf1c))  

This commit introduces a new logging utility to the microstream-hub project, allowing developers to control the verbosity of logs using a configurable logLevel option. The logLevel supports the following levels: "debug", "info", "warn", "error", and "silent".

Changes include:
- Creation of a logger.js file in src/utils/ with methods for debug, info, warn, and error, respecting the logLevel setting.
- Addition of a logLevel option to the hub configuration.
- Initialization of the logger in hub.js using the provided logLevel.
- Replacement of all console.log, console.warn, and console.error calls with the appropriate logger methods. <br/><br/>
  
✅ **microstream-hub:** The primary working setup for microstream-hub. ([68fb1dc](https://github.com/arijitcodes/microstream-hub/commit/68fb1dcda974b960fd685549a149e023659613a6))  

This is the first commit - with the primary version (v1) of a working version of microstream-hub. <br/><br/>
  
✅ **semantic-release:** set up Semantic-Release for auto Release & Update ([af97398](https://github.com/arijitcodes/microstream-hub/commit/af97398cfa5f9dcba5a95f867357e82e280a6875)), closes [#1](https://github.com/arijitcodes/microstream-hub/issues/1)  

    Setup Semantic-Release with Commitizen - along with GitHub Workflow. Now this setup will -

     - Auto Release on GitHub, NPM
     - Update Changelog automatically from Conventional Commit messages and update version in Package.json
     - Set up Commitizen for Conventiona Commit message formatting
     - Setup GitHub Workflow to automate all these tasks <br/><br/>

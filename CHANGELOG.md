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

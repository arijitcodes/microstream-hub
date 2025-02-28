# Contributing to MicroStream Hub

Thank you for considering contributing to MicroStream Hub! Here are some guidelines to help you get started:

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Commit your changes with a clear and descriptive commit message by following [Conventional Commits](https://www.conventionalcommits.org).

   [Commitizen](https://commitizen.github.io/cz-cli) is set up in the repo, so you can use that for easier commit message formatting.

5. Push your changes to your fork.
6. Create a pull request to the main repository.

## Reporting Issues

If you find a bug or have a feature request, please create an issue on GitHub. Provide as much detail as possible to help us understand and address the issue.

## Code Style

Please follow the existing code style and conventions. Ensure your code is well-documented and includes comments where necessary.

## Testing

If applicable, add tests for your changes and ensure all existing tests pass.

## Automated Release Process

We use [Semantic-Release](https://semantic-release.gitbook.io/semantic-release) to automate the release process. This ensures that versioning and changelog generation are handled automatically based on commit messages.

### Steps for Automated Release

1. Ensure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org) specification. This is crucial for the automated release process to work correctly.
2. When your pull request is merged into the `main` branch, the release process will be triggered automatically.
3. The release process will:
   - Analyze commit messages to determine the next version.
   - Generate release notes.
   - Create a new release on GitHub.
   - Update the changelog.

## Additional Resources

- [Semantic Release Documentation](https://semantic-release.gitbook.io/semantic-release)
- [Commitizen Documentation](https://commitizen.github.io/cz-cli)

Thank you for your contributions!

# Steps to Create and Publish an NPM Package

## 1. Initialize a Git Repository
Run the following command to start version control for your project:
```bash
git init
```

## 2. Initialize a Node.js Project
Set up your project with a `package.json` file:
```bash
npm init
```

## 3. Test Your Package Locally
Link your package to test it before publishing:
```bash
npm link
```
In another project, link your package to use it:
```bash
npm link <package-name>
```

## Publishing Your Package:

## 4. Log In to NPM
Authenticate with your NPM account:
```bash
npm login
```

## 5. Publish Your Package
Make your package available on the NPM registry:
```bash
npm publish
```

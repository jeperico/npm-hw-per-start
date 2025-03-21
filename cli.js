#!/usr/bin/env node
import { execSync } from 'child_process';

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name');
  process.exit(1);
}

console.log(`Creating project ${projectName}...`);
execSync(`git clone https://github.com/jeperico/npm-hw-per-start ${projectName}`, { stdio: 'inherit' });
console.log('✅ Project created successfully');

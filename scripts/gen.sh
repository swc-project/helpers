#!/bin/bash
set -eu

./scripts/generator.sh > src/index.js
WEBPACK_ENV=production npx webpack
#!/bin/bash

# Script to build all npm packages within the same folder as the script.

SCRIPT_DIR="$(dirname "$(readlink -f "$0")")"

echo "Searching for npm packages in: ${SCRIPT_DIR}"

find "${SCRIPT_DIR}" -maxdepth 1 -type d -exec sh -c '
  if [ -f "$0/package.json" ]; then
    echo "----------------------------------------"
    echo "Building package in: $0"
    cd "$0" || exit 1
    npm install --silent || {
      echo "Error installing dependencies in $0. Skipping build."
      cd .. || exit 1
      return 1
    }
    npm run build || {
      echo "Error running 'build' script in $0."
      echo "Check the package.json file in $0 for the 'build' script."
      cd .. || exit 1
      return 1
    }
    cd .. || exit 1
    echo "Successfully built package in: $0"
  fi
' {} \;

echo "----------------------------------------"
echo "Finished processing packages."
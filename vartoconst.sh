#!/bin/bash

# Directory containing the TypeScript files
DIRECTORY="src"

# Find all TypeScript files in the specified directory and its subdirectories
find "$DIRECTORY" -type f -name "*.ts" | while read -r file
do
    # Use sed to replace 'var * = {' with 'const * = {'
    sed -i 's/var \(\w\+\) = {/const \1 = {/g' "$file"
done

echo "Replacement completed!"

#!/bin/bash

# Description: This script extracts the table definitions from the introspection
# output scehma file and creates a separate file for each table in the output directory.
# Debugging command: sh extract-tables.sh ../introspect-out/schema.ts ./

# Check if the input file and output directory are provided as command-line arguments
if [[ $# -ne 2 ]]; then
    echo "Usage: bash $0 <input_file> <output_directory>"
    exit 1
fi

# Extract the command-line arguments
input_file="$1"
output_directory="$2"

# Check if the input file exists
if [[ ! -f "$input_file" ]]; then
    echo "Input file '$input_file' does not exist."
    exit 1
fi

# Check if the output directory exists, create it if it doesn't
if [[ ! -d "$output_directory" ]]; then
    echo "Output directory does not exist. Creating it instead."
    mkdir -p "$output_directory"
fi

# Read the file contents into a variable
file_contents=$(cat "$input_file")
# echo "file_contents=$file_contents"

# Extract the import statements
import_statements=$(echo "$file_contents" | grep -o "import {.*} from \".*\"")
# echo "import_statements=$import_statements"

# Read the file contents and extract the constant variable names and their values
constants=$(grep -E "export const [a-zA-Z0-9_]+ =" "$input_file" | sed -E 's/export const ([a-zA-Z0-9_]+) = .*/\1/')
# echo "constants=$constants"

# Create a separate file for each constant variable and its value
while IFS= read -r constant; do

    # Extract the variable value using a semicolon as the record separator in order to get multiple lines after the variable name...
    value=$(awk "BEGIN { RS = \";\" } /export const $constant =/ { printf \"%s;\", \$0 }" "$input_file")
    # echo "value=$value"

    # If the value contains an import statement, remove it...
    if [[ $value == *import* ]]; then
        value=$(echo "$value" | sed '/^import/d')
        # echo "value=$value"
    fi

    # Create a new file in the output directory with the variable name
    output_file="$output_directory/$constant.ts"

    # Write the import statements to the output file
    echo "$import_statements" > "$output_file"
    # echo "import_statements=$import_statements"

    # Append the variable value to the output file
    echo "$value" >> "$output_file"

done <<< "$constants"

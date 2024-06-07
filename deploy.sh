#!/bin/bash

# Add all modified files to the staging area
git add .

# Prompt for a commit message
read -p "Enter a commit message: " message

# Commit with the provided message
git commit -m "$message"

# Push changes to the remote repository (replace 'origin' with your actual remote name)
git push origin master

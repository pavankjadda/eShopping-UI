#!/bin/bash

### Upgrade Angular version
CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)
echo "Current branch is $CURRENT_BRANCH"

git add .
git commit -m "Before Upgrade"
git push origin "$CURRENT_BRANCH"
ng update --all
git add .
git commit -m "After Upgrade"
git push origin "$CURRENT_BRANCH"
#npm install


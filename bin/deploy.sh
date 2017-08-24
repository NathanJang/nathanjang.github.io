CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
COMMIT_MESSAGE="Deploy gh-pages from commit $(git rev-parse HEAD)"
#git push -q origin "$CURRENT_BRANCH"
git checkout -q master
&& git rm assets/*
&& git commit -qm "TEMP: Prune compiled assets"
&& git checkout -q "$CURRENT_BRANCH"
&& ember github-pages:commit --message "TEMP: Deploy" --branch "master"
# Squash them
&& git reset -q --soft "HEAD~2"
&& git commit -q --edit -m "$COMMIT_MESSAGE"
#&& git push -q origin master
&& git checkout -q "$CURRENT_BRANCH"
&& echo "Deploy succeeded."

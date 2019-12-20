git add .
git commit -m "Before Upgrade"
git push origin "${git branch | grep \* | cut -d ' ' -f2}"
ng update --all --force
npm install  typescript@3.6.4 --save
git add .
git commit -m "After Upgrade"
git push origin "${git branch | grep \* | cut -d ' ' -f2}"
#npm install


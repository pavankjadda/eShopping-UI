git add .
git commit -m "Before Upgrade"
git push origin master
ng update --all --force
npm install zone.js@0.9.1 typescript@3.5.3 --save
npm install

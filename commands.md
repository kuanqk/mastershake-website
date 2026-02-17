cd C:\Users\abeshev_k\Documents\pyprojects\mastershake-website
git add .
git commit -m "xxxxx"
git push origin main

# if problems with key
eval $(ssh-agent -s)
ssh-add /c/Users/abeshev_k/.ssh/id_ed25519
git push origin main



cd /var/www/mastershake-website
git pull origin main
npm run build
pm2 restart mastershake
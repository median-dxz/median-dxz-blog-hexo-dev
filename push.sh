echo "input the update message"
read msg
gulp && hexo d && git add . && git commit -m "${msg}" && git push

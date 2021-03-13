var spawn = require('child_process').exec;
var path = require('path');
var fs = require('fs')
hexo.on('new', function(data){
  spawn('start  "C:\\Program Files\\Typora\\Typora.exe" ' + data.path);
  // let dir = path.dirname(data.path)
  // let name = path.basename(data.path,".md");
  // fs.rmdirSync(path.join(dir,name));
});
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "输入一言内容，换行用&#10;转义："
});

rl.prompt();
let l = 0;
let c, q;
rl.on('line', (line) => {
    l = l + 1;
    if (l == 1) {
        c = line;
        rl.setPrompt('输入引用：');
        rl.prompt();
    }
    if (l == 2) {
        q = line;
        rl.close();
    }
}).on('close', () => {
    let d = fs.readFileSync('hitokoto.json');
    d = JSON.parse(d);
    d['total'] = d['total'] + 1;
    d['hitokotos'].push({
        content: c,
        quote: q,
    });
    fs.writeFileSync('hitokoto.json', JSON.stringify(d,null,2));
});

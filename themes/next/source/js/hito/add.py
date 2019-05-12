import json
import os
import sys

path = os.path.split(sys.argv[0])[0]+'/hitokoto.json'

with open(path, 'r', encoding='utf-8') as f:
    j = json.load(f)

d = [input("content: "), input("quote: ")]

with open(path, 'w', encoding='utf-8') as f:
    j["tot"] = j["tot"] + 1
    j["hitokotos"].append(
        {
            "content": d[0],
            "quote": d[1]
        }
    )
    json.dump(j, f)
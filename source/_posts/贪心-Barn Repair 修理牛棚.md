---
title: "[贪心]Barn Repair 修理牛棚"
date: 2018-09-13 14:03:30
categories:
- OIER
tags:
- oi
- c++
- 贪心
top: 1
---
### 

#### 题面描述

大概的意思是要求：

在一个[1,n]的区间内，分布着p个散点，求使用最多m条线段覆盖住全部的散点，求最小覆盖总长。

#### 解题思路

一开始很快确定了思路，线段绝对是用的越多越好，而用m条线段意味着有**m-1**条空隙，而要使总长最短，我们只要使空隙最大，就能使总长最小。

换言之，我们求出`p-1`条空隙的长度，然后用最右边的端点减去最左边的求出总长，减去前`m-1`个空隙就是答案。

<!--more-->

#### 注意点

 >  ~~还是WA了两次，真菜~~

1. 散点输入的顺序不是有序的，但是样例是有序的，不注意就忘记排序了。
2. 求总长因为要算两端端点，所以要`+1`，同理，减去区间时因为不算两边端点所以要`-1`；
3. 如果线段数`>=`点数那么就可以跳出循环了，尤其是我把上一条-1写在循环里，导致多循环的时候顺便炸了答案（使length+1）

#### 代码

```cpp
#include <iostream>
#include <cstdlib>
#include <cstdio>
#include <algorithm>
#define N 5500
using namespace std;
struct range{
	long long d,l,r;
	bool operator <(const range &b)const{
		return d > b.d;
	}
}R[N];
inline long long maxs(long long a,long long b){
	return a>b?a:b;
}

int arr[N];

int main(){
	int wl,n,sn,l = 0;
	cin>>wl>>n>>sn;
	for(int i=1;i<=sn;i++){
		cin>>arr[i];
	}
	sort(arr+1,arr+1+sn);//2
	for(int i=2;i<=sn;i++){
		R[i-1].l = arr[i-1];
		R[i-1].r = arr[i];	
		R[i-1].d = arr[i] - arr[i-1];
	}
	sort(R+1,R+sn);
	l = arr[sn] - arr[1] + 1;//3
//	cout<<l<<endl;
	for(int i=1;i<wl && i<sn;i++){//1 
//		cout<<R[i].l<<' '<<R[i].r<<' '<<R[i].d<<endl;
		l -= R[i].d - 1;
	}
	cout<<l;
	return 0;
}
```


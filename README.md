# Node.js Websocket 
## "Check-out" server side
ここのリポジトリにpushすると、かってにherokuにdeployされる！！


## local setup
herokuを使う設定など

### cloneしたあとにheroku設定
```
heroku git:remote -a check-out  
```


### open 
https://check-out.herokuapp.comが開く
```
% heroku open
```


### heroku上のWebSocketServerのログを見る
```
% heroku logs --tail
```


### クライアントテストツールwscatの設定
#### インストール
http://tricknotes.hateblo.jp/entry/20120227/p1
```
% npm install -g ws
```


#### クライアントとして接続してみる
```
% wscat -c wss://check-out.herokuapp.com
```

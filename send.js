  var host = "wss://check-out.herokuapp.com/"
  var ws = new WebSocket(host);
	ws.onopen = function() {
		 console.log("websocket connection open")
	
  	  data = JSON.stringify({
        type: 'add',
        body: "test"
      });
      ws.send(data);
      console.log(data)
   }

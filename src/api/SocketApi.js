import socket from 'socket.io-client';
class SocketApi {
  init(token) {
    this.socket = socket('http://localhost:3000', {
      query: {
        token,
      },
    
    });
    this.socket.on('connect',()=>{
      console.log("connecreddddd");
      console.log({socket});
  
    })
  }

  handleMessages(handler) {
    this.socket.on('message', (message) => {
      handler(JSON.parse(message));
    });
  }
}

export default new SocketApi();

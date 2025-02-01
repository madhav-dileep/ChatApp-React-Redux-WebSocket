import { w3cwebsocket as W3CWebSocket } from 'websocket';

// const client = new W3CWebSocket('ws://localhost:5000');
const client = new W3CWebSocket('wss://chatapp-server-1-ngzs.onrender.com');


export const sendMessageToServer = (message) => {
  if (client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify(message));
  }
};

export const listenForMessages = (callback) => {
  client.onmessage = (message) => {
    const receivedMessage = JSON.parse(message.data);
    callback(receivedMessage);
  };
};

export const setUsernameForServerList = (username) => {
  if (client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify({ type: 'SET_USERNAME', username }));
  }
}

client.onopen = () => {
  console.log('WebSocket Client Connected');
};

client.onclose = () => {
  console.log('WebSocket Client Disconnected');
};

import React, { useEffect, useState } from 'react';

import { w3cwebsocket as W3CWebSocket } from "websocket";
import { MiniGameEvent } from './common/types';

import Messages from './Components/Messages';

const client = new W3CWebSocket('ws://localhost:9090/ws');

const App: React.FC = () => {
  const [events, setEvents] = useState<MiniGameEvent[]>([]);

  useEffect(() => {
    client.onmessage = (message) => {
      const d = JSON.parse(message.data as string) as MiniGameEvent;

      const newMessages = [...events, d];

      setEvents(newMessages);
    }
  }, [events]);

  return (
    <div className="App">
      <h2>Example App</h2>

      <hr />

      <Messages events={events} />
    </div>
  );
}

export default App;

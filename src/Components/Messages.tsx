import React from 'react';

import { nanoid } from 'nanoid'
import { MiniGameEvent, EventType, PlayerJoinedPayload, PrizeDoubledPayload, WinnerFoundPayload } from '../common/types';


interface MessagesProps {
  events: MiniGameEvent[];
}

const Messages: React.FC<MessagesProps> = ({ events }) => {
  const renderMessages = (event: MiniGameEvent) => {
    switch (event.event_type) {
      case EventType.EventPlayerJoined:
        let p1 = (event.payload as PlayerJoinedPayload);
        return <li key={nanoid()}>[You joined the game] - You claimed {p1.claimed_number} and current prize is {p1.current_prize} Turkish Liras.</li>;
      case EventType.EventPrizeDoubled:
        let p2 = (event.payload as PrizeDoubledPayload);
        return <li key={nanoid()}>[Prize Doubled] - Competition is on fire! Current prize is {p2.new_prize} Turkish Liras.</li>;
      case EventType.EventGameStopped:
        return <li key={nanoid()}>[Game Finished] - Go home.</li>;
      case EventType.EventWinnerFound:
        let p3 = (event.payload as WinnerFoundPayload);
        
        return <li key={nanoid()}>[You won] - Very nice. You will get { p3.claimed_prize } Turkish Liras soon.</li>
      default:
        break;
    }

    return <li key={nanoid()}>{event.event_type} - {event.player?.claimed_number}</li>
  }

  return (
    <ul>
      {events.map(event => renderMessages(event))}
    </ul>
  )
}

export default Messages;

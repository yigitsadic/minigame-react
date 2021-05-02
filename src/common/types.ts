
export enum EventType {
  EventPlayerJoined = 0,
  EventPrizeDoubled,
  EventWinnerFound,
  EventGameStopped
};

type Player = {
  identifier: string;
  claimed_number: number;
};

type PrizeDoubledPayload = {
  new_prize: number;
};

type PlayerJoinedPayload = {
  claimed_number: number;
  current_prize: number;
}

type WinnerFoundPayload = {
  claimed_prize: number;
}

type MiniGameEvent = {
  event_type: EventType;
  player?: Player;
  payload: PrizeDoubledPayload | PlayerJoinedPayload | WinnerFoundPayload | null;
};

export type {
  MiniGameEvent,
  PrizeDoubledPayload,
  PlayerJoinedPayload,
  WinnerFoundPayload,
}

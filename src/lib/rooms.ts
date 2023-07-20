export function createRoom(
  name: string,
  description: string,
  features: string[]
): Lib.Room {
  return {
    name,
    description,
    features,
    exits: [],
  };
}

export function createGameRooms(): {
  rooms: Lib.Room[];
  addRoom: (room: Lib.Room) => void;
  connectRooms: (room1: Lib.Room, room2: Lib.Room) => void;
} {
  return {
    rooms: [],
    addRoom(room: Lib.Room) {
      this.rooms.push(room);
    },
    connectRooms(room1: Lib.Room, room2: Lib.Room) {
      room1.exits.push(room2);
      room2.exits.push(room1);
    },
  };
}

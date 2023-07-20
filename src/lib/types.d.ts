namespace Lib {
  interface Room {
    name: string;
    description: string;
    features: string[];
    exits: Room[];
  }
}

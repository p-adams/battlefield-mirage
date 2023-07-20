import { describe, it, expect } from "vitest";
import { createRoom } from "./rooms";

describe("Room Module", () => {
  it("#createRoom creates new game room", () => {
    const outpost = createRoom(
      "Desert Outpost",
      "An isolated military outpost in the desert.",
      ["Sandbag barricades", "Watchtower", "Communication equipment"]
    );
    expect(outpost.name).toBe("Desert Outpost");
  });
});

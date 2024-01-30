import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";
import {AppDataSource} from "../data-source";
import {RoomData} from "../entity/RoomData";
import {MyRoom as customRoom} from "../entity/MyRoom";


const roomDataRepository = AppDataSource.getRepository(RoomData);
const roomRepository = AppDataSource.getRepository(customRoom);
export class MyRoom extends Room<MyRoomState> {

  maxClients = 4;

  onCreate (options: any) {
    this.setState(new MyRoomState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });
    roomRepository.save(roomRepository.create({
      name: this.roomId,
      description: this.roomName,
    }))
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    roomDataRepository.save(roomDataRepository.create({
      sessionId: client.sessionId,
      message: client.id
    }));
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}

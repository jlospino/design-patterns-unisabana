import type { IUser } from "../contracts/IUser";
import type { IChatMediator } from "../contracts/IChatMediator";

export abstract class User implements IUser {
  constructor(protected mediator: IChatMediator) {}

  sendMessage(message: string): void {
    this.mediator.sendMessage(message, this);
  }

  abstract receiveMessage(message: string): void;
}

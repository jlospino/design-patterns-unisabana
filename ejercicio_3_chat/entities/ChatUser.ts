import { User } from "../abstracts/User";
import type { IChatMediator } from "../contracts/IChatMediator";

export class ChatUser extends User {
  constructor(
    private readonly displayName: string,
    mediator: IChatMediator
  ) {
    super(mediator);
    mediator.addUser(this);
  }

  override sendMessage(message: string): void {
    console.log(`[${this.displayName}] sending message: ${message}`);
    super.sendMessage(message);
  }

  override receiveMessage(message: string): void {
    console.log(`[${this.displayName}] received message: ${message}`);
  }

  getDisplayName(): void {
    console.log(`[${this.displayName}] display name: ${this.displayName}`);
  }
}

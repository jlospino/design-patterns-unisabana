import { User } from "../abstracts/User";
import { IChatMediator } from "../contracts/IChatMediator";

export class ChatUser extends User {
  constructor(
    private readonly displayName: string,
    mediator: IChatMediator
  ) {
    super(mediator);
    mediator.addUser(this);
  }

  override receiveMessage(message: string): void {
    console.log(`${this.displayName} received message: ${message}`);
  }
}

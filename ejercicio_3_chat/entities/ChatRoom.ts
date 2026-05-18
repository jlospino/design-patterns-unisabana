import { User } from "../abstracts/User";
import { IChatMediator } from "../contracts/IChatMediator";

export class ChatRoom implements IChatMediator {
  private users: User[] = [];

  sendMessage(message: string, sender: User): void {
    this.users.forEach(user => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
import type { IUser } from "../contracts/IUser";
import type { IChatMediator } from "../contracts/IChatMediator";

export class ChatRoom implements IChatMediator {
  private users: IUser[] = [];

  sendMessage(message: string, sender: IUser): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }
}

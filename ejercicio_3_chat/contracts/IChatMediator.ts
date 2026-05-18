import { User } from "../abstracts/User";

export interface IChatMediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}
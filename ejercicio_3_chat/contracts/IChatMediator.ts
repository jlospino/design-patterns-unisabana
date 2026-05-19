import type { IUser } from "./IUser";

export interface IChatMediator {
  sendMessage(message: string, sender: IUser): void;
  addUser(user: IUser): void;
}

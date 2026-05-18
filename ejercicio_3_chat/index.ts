export interface IChatMediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}

export abstract class User {
  constructor(protected mediator: IChatMediator) {}

  abstract sendMessage(message: string): void;

  abstract receiveMessage(message: string): void;
}

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
    this.mediator.sendMessage(message, this);
  }

  override receiveMessage(message: string): void {
    console.log(`[${this.displayName}] received message: ${message}`);
  }

  getDisplayName(): void {
    console.log(`[${this.displayName}] display name: ${this.displayName}`);
  }
}

function main() {
  const chatRoom = new ChatRoom();
  const user1 = new ChatUser("User 1", chatRoom);
  const user2 = new ChatUser("User 2", chatRoom);
  const user3 = new ChatUser("User 3", chatRoom);

  user1.sendMessage('Hello, how are you?');
  user2.sendMessage('I\'m fine, thank you!');
  user3.sendMessage('Nice to meet you!');

  user2.getDisplayName();
}

main();
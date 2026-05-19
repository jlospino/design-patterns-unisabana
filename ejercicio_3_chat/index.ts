import { ChatRoom } from "./entities/ChatRoom";
import { ChatUser } from "./entities/ChatUser";

function main() {
  const chatRoom = new ChatRoom();
  const user1 = new ChatUser("User 1", chatRoom);
  const user2 = new ChatUser("User 2", chatRoom);
  const user3 = new ChatUser("User 3", chatRoom);

  user1.sendMessage("Hello, how are you?");
  user2.sendMessage("I'm fine, thank you!");
  user3.sendMessage("Nice to meet you!");

  console.log(`display name for user: ${user2.getDisplayName()}`);
}

main();

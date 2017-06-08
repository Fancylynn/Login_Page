
import chats from "./chats";
import login from "./login";

export default function*() {
  yield [
    chats(),
    login(),
  ];
}
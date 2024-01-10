import * as React from "react";
import Socket from "../../classes/Socket";

export default function App() {
  React.useEffect(() => {
    const socket = new Socket("xxx", {
      onMessage(message) {
        console.log(message);
      },
    });
    return () => {
      socket.dispose();
    };
  }, []);
  return <div>xxxx</div>;
}

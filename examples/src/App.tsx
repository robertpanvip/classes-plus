import * as React from "react";
import Socket from "../../classes/Socket";
import Timer from "../../classes/Timer";
export default function App() {
  React.useEffect(() => {
    /* const socket = new Socket("xxx", {
      onMessage(message) {
        console.log(message);
      },
    }); */
    return () => {
      //socket.dispose();
    };
  }, []);
  React.useEffect(() => {
    const init = Date.now();
    let start = Date.now();
    let start2 = Date.now();

    const timer = Timer.setInterval(() => {
      console.log("timer", Date.now() - start, Date.now() - init);
      start = Date.now();
    }, 3000);
    const timer2 = setInterval(() => {
      console.log("timer2", Date.now() - start2, Date.now() - init);
      start2 = Date.now();
    }, 3000);
    return () => {
      Timer.clearInterval(timer);
      clearInterval(timer2);
    };
  }, []);
  return <div>xxxx</div>;
}

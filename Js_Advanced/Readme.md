## Advanced concepts of javascript

1. postmessage api - https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
2. security policies - https://developer.mozilla.org/en-US/docs/Web/Security
3. cors - https://web.dev/cross-origin-resource-sharing/
4. sandboxed iframes - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe, https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/

5. data passing / structured cloning algo - https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

6. Websockets - https://www.html5rocks.com/en/tutorials/websockets/basics/
7. HTTP2 - https://medium.com/@factoryhr/http-2-the-difference-between-http-1-1-benefits-and-how-to-use-it-38094fa0e95b
8. Generators / iterators - https://medium.com/@madasamy/explanation-about-iterators-and-generators-in-javascript-es6-f7e669cbe96e
9. Async await - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await, https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb
10. Regex - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"

### Different realtime data update mechanisms

1. HTTP Pooling
2. Long Pooling
3. Forever Frame
4. SSE(Server Sent Events)
5. Web Sockets

Few articles

1. https://www.ibm.com/developerworks/web/library/wa-reverseajax1/index.html
2. https://stackoverflow.com/questions/11077857/what-are-long-polling-websockets-server-sent-events-sse-and-comet

Full Duplex

1. Both sides can send and recieve at same time. Eg Telephone, Websocket

Half Duplex

1. Both side can send and recieve but not at the same time. On side send the other recieves at one time. Eg WakiTalkie, Http Request.

Singlex

1. One side send and other revieves. Eg Television

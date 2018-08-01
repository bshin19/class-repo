# Fix port/address already in use error

If you try to start a node server locally, but the terminal throws an error saying the port is already in use,
follow these steps to terminate that process:

## Mac/Linux
---
List processes running on specific ports:
format: lsof -i :port-number
Example:
```
lsof -i :3000 
```

This should return a result like:
```
COMMAND   PID          USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    16150 christianwood   13u  IPv6 0x7cbe288dc6d3a25f      0t0  TCP *:hbci (LISTEN)
```

The number we want is the PID (process id). To kill that process, type kill followed by the process id.
For example:
```
kill 16150
```

That will terminate that process. After termination, you should be able to start your new node server on that same port.

---
## Windows:

Open up task manager (CTRL-Alt-Delete), kill the node process. Then try starting your node server again.

See this stack overflow for more windows details
https://stackoverflow.com/questions/11276249/how-to-kill-an-open-process-on-node-js#11276409

---

Worst case scenario, you can always restart your computer.
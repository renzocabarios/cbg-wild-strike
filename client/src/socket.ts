import { io } from "socket.io-client";

export const SOCKET = io("http://localhost:3001", {
    autoConnect: false, // Prevents auto connection on import
    reconnection: false, // Disables auto-reconnection
});


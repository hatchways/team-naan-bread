import { useState, useContext, createContext, FunctionComponent, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

interface ISocketContext {
  socket: Socket | undefined;
  initSocket: () => void;
  disconnectSocket: () => void;
}

export const SocketContext = createContext<ISocketContext>({
  socket: undefined,
  initSocket: () => null,
  disconnectSocket: () => null,
});

export const SocketProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  const initSocket = useCallback(() => {
    console.log('trying to connect');
    setSocket(
      io('/', {
        withCredentials: true,
      }),
    );
  }, []);
  const disconnectSocket = useCallback(() => {
    console.log('disconnecting');
    socket?.disconnect();
  }, [socket]);
  socket?.on('connect', () => {
    console.log(`connected to server`);
  });

  return <SocketContext.Provider value={{ socket, initSocket, disconnectSocket }}>{children}</SocketContext.Provider>;
};

export function useSocket(): ISocketContext {
  return useContext(SocketContext);
}

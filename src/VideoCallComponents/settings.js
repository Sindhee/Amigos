import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "b7a73b41dd2c4d5da3ef66d3a817d66b"
const token = "007eJxTYPidd/zkQ541WWd4rIwTayQUluv+LTP2OcR+s/FQ0ifu+74KDEnmiebGSSaGKSlGySYppimJxqlpZmYpxokWhuYpZmZJ184IpjUEMjKse3aRmZEBAkF8ToayZIXE3Mz0/GIGBgAxPSLG"
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "vc amigos";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "b7a73b41dd2c4d5da3ef66d3a817d66b"
const token = "007eJxTYNjEdc1JfHFAwyzpJKtVTl2bN/anHmHf5vXFcP1xtu2vf7cqMCSZJ5obJ5kYpqQYJZukmKYkGqemmZmlGCdaGJqnmJklPbjAndYQyMig99aAkZEBAkF8ToayZIXE3Mz0/GIGBgAfESIx"
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "vc amigos";
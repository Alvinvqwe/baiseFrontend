type MediaType = "video" | "audio";

export const videoSource = {
  type: "video" as MediaType,
  title: "Example Video",
  sources: [
    {
      src: "/test.mp4",
      type: "video/mp4",
      size: 1080,
    },
    {
      src: "/test.mp4",
      type: "video/mp4",
      size: 720,
    },
  ],
  poster: "test_cover.jpg",
  //   tracks: [
  //     {
  //       kind: "captions",
  //       label: "English",
  //       srclang: "en",
  //       src: "path_to_captions_file.vtt", // 字幕文件路径
  //       default: true,
  //     },
  //     {
  //       kind: "captions",
  //       label: "Spanish",
  //       srclang: "es",
  //       src: "path_to_spanish_captions_file.vtt",
  //     },
  //   ],
};

export const videoOptions = {
  controls: [
    "play-large", // 大播放按钮
    "restart", // 重播按钮
    "rewind", // 后退按钮
    "play", // 播放按钮
    "fast-forward", // 快进按钮
    "progress", // 进度条
    "current-time", // 当前时间显示
    "duration", // 视频总时长显示
    "mute", // 静音按钮
    "volume", // 音量控制
    "captions", // 字幕控制按钮
    "settings", // 设置按钮
    "pip", // 画中画按钮
    "airplay", // AirPlay 按钮
    "download", // 下载按钮，只有在使用 hls 或 html5 视频源时支持
    "fullscreen", // 全屏按钮
  ],
  settings: ["captions", "quality", "speed", "loop"],
  autoplay: true, // 自动播放
  loop: { active: true }, // 循环播放
  quality: {
    default: 720, // 默认质量
    options: [1080, 720], // 可供选择的质量选项
  },
};

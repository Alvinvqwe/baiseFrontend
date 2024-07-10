declare module "react-hover-video-player" {
  import { FC } from "react";

  interface HoverVideoPlayerProps {
    videoSrc: string;
    pausedOverlay?: React.ReactNode;
    loadingOverlay?: React.ReactNode;
    volume?: number;
    muted?: boolean;
    loop?: boolean;
    style?: React.CSSProperties;
    className?: string;
    hoverTarget?: React.RefObject<HTMLElement>;
    hoverDelayInMs?: number;
    unloadVideoOnPaused?: boolean;
    unloadVideoOnEnded?: boolean;
    restartOnPaused?: boolean;
    playBackSpeed?: number;
    preload?: "auto" | "metadata" | "none";
    sizingMode?: "container" | "video" | "overlay" | "manual";
    videoClassName?: string;
  }

  const HoverVideoPlayer: FC<HoverVideoPlayerProps>;

  export default HoverVideoPlayer;
}

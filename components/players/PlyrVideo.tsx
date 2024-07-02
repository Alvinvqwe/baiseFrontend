"use client";

import React from "react";
import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";

// 定义组件属性接口
interface PlyrVideoProps extends PlyrProps {
  // 可以添加额外的自定义属性，如 className, style 等
  className?: string;
  style?: React.CSSProperties;
}

// 定义 PlyrVideo 组件
const PlyrVideo: React.FC<PlyrVideoProps> = ({
  className,
  source,
  options,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <Plyr source={source} options={options} />
    </div>
  );
};

export default PlyrVideo;

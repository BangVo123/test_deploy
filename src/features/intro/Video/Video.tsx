'use client';

import { useRef, useState } from 'react';

import Button from '@/components/Button';
import Title from '@/components/Title';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

function VideoComponent() {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
      }
      videoRef.current.play();
      setIsPlay(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };

  const handleEnded = () => {
    if (videoRef.current && videoRef.current.ended) {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };

  return (
    <div
      className="bg-[length:100%_100%] bg-center bg-no-repeat max-lg:p-1 max-md:w-5/6 md:w-4/5 lg:p-2"
      style={{
        backgroundImage: 'url(\'/assets/images/homepage/blue_border.png\')',
      }}
    >
      <div className="relative h-full w-full bg-[#95D8E9] p-5">
        <div
          className={cn(
            'w-[116px] h-[116px] border-5 border-white rounded-full flex items-center justify-center bg-[#EC6277E5] opacity-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-40',
            isPlay && 'hidden',
          )}
          onClick={handlePlay}
        >
          <img
            src="/assets/images/homepage/triangle.png"
            alt="triangle"
            width="60px"
            height="60px"
            className="translate-x-[6px]"
          />
        </div>
        <div
          className="bg-[length:100%_100%] bg-center bg-no-repeat max-md:p-1 md:p-[6px] lg:p-2"
          style={{
            backgroundImage: 'url(\'/assets/images/homepage/yellow_border.png\')',
          }}
          onClick={handlePause}
        >
          <div className="rounded-[4px]">
            <video ref={videoRef} onEnded={handleEnded}>
              <source src="/assets/images/homepage/example_video.mp4" type="video/mp4" />
              <track kind="captions" label="English captions" srcLang="en" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Video() {
  const maxSize60 = generateResponsiveFontSizeClasses(60);
  const maxSize30 = generateResponsiveFontSizeClasses(30);
  return (
    <div className="relative mt-[100px] mb-10">
      <img
        src="/assets/images/homepage/video_decorator.png"
        alt="decorator"
        width="760px"
        height="600px"
        className="absolute left-0 z-0 max-md:w-[400px] md:w-[600px] lg:w-[760px]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Title
          mainTitle="VIDEO MINH HOẠ"
          mainTitleClassName={`text-[#955BCD] text-center mb-[40px] font-cookie ${maxSize60}`}
        />
        <VideoComponent />
        <Button className={`font-cookie mt-[40px] bg-[#EC6277] text-white max-md:h-[50px] md:h-[60px] lg:h-[70px] ${maxSize30}`}>
          Dùng thử miễn phí
        </Button>
      </div>
    </div>
  );
}

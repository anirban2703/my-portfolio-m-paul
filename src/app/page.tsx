"use client";
import Image from "next/image";
import React, { useState } from "react";
import logoImage from "@/assets/logo.png";
import brocherImage from "@/assets/brocher.png";
import businessCard from "@/assets/business-card.png";
import instaImage from "@/assets/instaimage.png";
import posterImage from "@/assets/poster.png";
import webImage from "@/assets/web.png";
import ReactPlayer from "react-player";
import LocalVideoPlayer from "@/components/videoPlayer";
// import VideoOne from "@/assets/story.mp4";

export default function Home() {
  const videoSource1 = "/motion_2.mp4";
  const videoSource2 = "/story.mp4";
  return (
    <main className="flex min-h-screen flex-col items-center p20">
      <h1 className="text-2xl font-semibold mb-8 mt-8">My Portfolio</h1>

      <Image
        className="mb-20"
        src={logoImage}
        alt="Logo"
        width={400}
        height={400}
        priority
      />
      <Image
        className="mb-20"
        src={businessCard}
        alt="business"
        width={400}
        height={400}
        priority
      />
      <Image
        className="mb-20"
        src={brocherImage}
        alt="brocher"
        width={400}
        height={400}
        priority
      />
      <Image
        className="mb-20"
        src={posterImage}
        alt="poster"
        width={400}
        height={400}
        priority
      />
      <Image
        className="mb-20"
        src={instaImage}
        alt="insta"
        width={400}
        height={400}
        priority
      />
      <Image
        className="mb-20"
        src={webImage}
        alt="web"
        width={400}
        height={400}
        priority
      />
      <LocalVideoPlayer videoSource={videoSource2} />
      <LocalVideoPlayer videoSource={videoSource1} />
    </main>
  );
}

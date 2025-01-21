import Image from "next/image";
import styles from "./page.module.css";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <>
        <h1>My Video Streaming App</h1>
      <VideoPlayer />
    </>
  );
}

"use client"; // only if you plan to add interactivity later

import Image from "next/image";
import "./HomePage.css";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <Image
        src="/logo/logo.png" // Make sure this image is in /public folder
        alt="FinAge Logo"
        width={100}
        height={100}
        className="logo"
      />
      <h1 className="title">FinAge</h1>
      <p className="subtitle">Financial planning game</p>

      <Link href="/dashboard"><button className="play-button">PLAY</button></Link>

      <select className="server-select">
        <option>Please Select Server</option>
        <option>Server 1</option>
        <option>Server 2</option>
        <option>Server 3</option>
      </select>
    </div>
  );
}

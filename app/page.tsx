import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

    <b><Link href="/about">about&nbsp; &nbsp; &nbsp; &nbsp; </Link></b>
    <b><Link href="/contact">contact&nbsp; &nbsp; &nbsp;  &nbsp; </Link></b>
    <b><Link href="/service">service&nbsp; &nbsp; &nbsp;  &nbsp; </Link></b>

    </div>
  );
}

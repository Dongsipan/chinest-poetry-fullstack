import Image from "next/image";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button color="primary">click me</Button>
    </main>
  );
}

import { router } from "next/client";

export default function Welcome() {
  return (
    <button className="button" onClick={() => router.push("/dashboard")}>
      Enter here!
    </button>
  );
}

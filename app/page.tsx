import DarkModeToggle from "./_components/DarkModeToggle";

import { dailyMetric } from "@/data/dailyMetric";
import { socialAccounts } from "@/data/socialAccount";
import totalFollowers from "./utils/totalFollowers";

export default function Home() {
  const followers = totalFollowers();

  return (
    <section className="min-h-dvh flex justify-center items-start">
      <div className="w-full max-w-4xl flex flex-col">
        {/* Top Row */}
        <div className="flex justify-between">
          {/* Left */}
          <div className="flex flex-col">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: {followers}</p>
          </div>

          {/* Right */}
          <DarkModeToggle />
        </div>

        <p>bla bla</p>
      </div>
    </section>
  );
}

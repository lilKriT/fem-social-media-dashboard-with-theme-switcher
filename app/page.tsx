import DarkModeToggle from "./_components/DarkModeToggle";

import { dailyMetric } from "@/data/dailyMetric";
import { socialAccounts } from "@/data/socialAccount";
import totalFollowers from "./utils/totalFollowers";

export default function Home() {
  const followers = totalFollowers();

  return (
    <section className="min-h-dvh">
      <div className="flex flex-col justify-start items-center">
        {/* Top Row */}
        <div>
          {/* Left */}
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers:</p>
          </div>

          {/* Right */}
          <DarkModeToggle />
        </div>
      </div>
    </section>
  );
}

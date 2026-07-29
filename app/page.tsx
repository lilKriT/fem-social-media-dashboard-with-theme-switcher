import DarkModeToggle from "./_components/DarkModeToggle";

import totalFollowers from "./utils/totalFollowers";
import SocialAccounts from "./_components/SocialAccounts";
import DailyMetrics from "./_components/DailyMetrics";

export default function Home() {
  const followers = totalFollowers();

  return (
    <section className="min-h-dvh flex justify-center items-start">
      <div className="w-full max-w-6xl flex flex-col">
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

        <SocialAccounts />

        <DailyMetrics />
      </div>
    </section>
  );
}

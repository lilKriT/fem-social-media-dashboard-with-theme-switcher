import DarkModeToggle from "./_components/DarkModeToggle";

import totalFollowers from "./utils/totalFollowers";
import SocialAccounts from "./_components/SocialAccounts";
import DailyMetrics from "./_components/DailyMetrics";

export default function Home() {
  const followers = totalFollowers();

  return (
    <section className="min-h-dvh flex justify-center items-start">
      <div className="w-full flex flex-col">
        {/* Top Row */}
        {/* Needed a bit of extra divs and css magic to make the double colored bg work */}
        <div className="bg-top-background flex justify-center py-8 pb-34 rounded-b-3xl overflow-hidden px-4">
          <div className="w-full max-w-6xl flex justify-between">
            {/* Left */}
            <div className="flex flex-col font-bold">
              <h1 className="text-[clamp(1.5rem,2vw,2.5rem)] text-text-secondary">
                Social Media Dashboard
              </h1>
              <p>Total Followers: {followers}</p>
            </div>

            {/* Right */}
            <DarkModeToggle />
          </div>
        </div>

        {/* Rest of content */}
        <div className="w-full max-w-6xl mx-auto -mt-24 px-4">
          <SocialAccounts />

          <DailyMetrics />
        </div>
      </div>
    </section>
  );
}

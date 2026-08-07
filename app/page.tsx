import DarkModeToggle from "./_components/DarkModeToggle";

import totalFollowers from "./utils/totalFollowers";
import SocialAccounts from "./_components/SocialAccounts";
import DailyMetrics from "./_components/DailyMetrics";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";

export default function Home() {
  const followers = totalFollowers();

  return (
    <section className="min-h-dvh flex justify-center items-start">
      <div className="w-full flex flex-col items-center py-12 sm:py-8">
        {/* Top Row */}
        {/* Needed a bit of extra divs and css magic to make the double colored bg work */}
        <div className="w-full bg-top-background flex justify-center pb-34 rounded-b-3xl overflow-hidden px-4">
          <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-start gap-4">
            {/* Left */}
            <div className="flex flex-col font-bold">
              <h1 className="text-[clamp(1.25rem,2vw,2.5rem)] text-text-secondary">
                Social Media Dashboard
              </h1>
              <p>Total Followers: {formatNumberWithCommas(followers)}</p>
            </div>

            {/* Right */}
            <DarkModeToggle className="w-full border-t border-text-primary pt-4" />
          </div>
        </div>

        {/* Rest of content */}
        <div className="w-full -mt-24 px-4 flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <SocialAccounts />

            <DailyMetrics />
          </div>
        </div>
      </div>
    </section>
  );
}

import DarkModeToggle from "./_components/DarkModeToggle";

export default function Home() {
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

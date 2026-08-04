import { dailyMetrics } from "@/data/dailyMetric";
import DailyMetricsCard from "./DailyMetricsCard";

const DailyMetrics = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-[clamp(1.5rem,2vw,2.5rem)] text-text-secondary font-bold">
        Social Media Dashboard
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-8">
        {dailyMetrics.map((dailyMetric, idx) => (
          <DailyMetricsCard key={idx} account={dailyMetric} />
        ))}
      </div>
    </section>
  );
};

export default DailyMetrics;

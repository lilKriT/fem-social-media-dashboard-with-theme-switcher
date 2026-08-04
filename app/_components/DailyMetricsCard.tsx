import Image from "next/image";

type DailyMetricsCardProps = DailyMetric;

const DailyMetricsCard = ({ account }: { account: DailyMetricsCardProps }) => {
  return (
    <article className="bg-card-background rounded-md font-bold p-8">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <span>{account.label}</span>
        <Image
          src={account.iconURL}
          alt="Social Media Icon"
          height={20}
          width={20}
        />
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-8">
        <span className="text-text-secondary text-[clamp(1rem,5vw,2.5rem)]">
          {account.count}
        </span>
        <span className="flex justify-center items-center gap-2">
          <Image
            src={account.changeToday >= 0 ? "/icon-up.svg" : "/icon-down.svg"}
            alt={account.changeToday >= 0 ? "Arrow up icon" : "Arrow down icon"}
            height={4}
            width={8}
          />
          <span
            className={
              account.changeToday >= 0 ? "text-green-500" : "text-red-500"
            }
          >
            {account.changeToday}%
          </span>
        </span>
      </div>
    </article>
  );
};

export default DailyMetricsCard;

import formatCompactNumbers from "@/utils/formatCompactNumber";
import Image from "next/image";

type SocialAccountCardProps = SocialAccount;

const SocialAccountCard = ({
  account,
}: {
  account: SocialAccountCardProps;
}) => {
  return (
    <article
      className={`bg-card-background relative rounded-md flex flex-col justify-center items-center gap-4 overflow-hidden py-8`}
    >
      {/* This is just the top bar */}
      <div className={`h-1 w-full absolute top-0 ${account.topBarCSS}`}></div>

      {/* Actual content starts here */}
      {/* Account name + icon */}
      <div className="flex justify-center items-center gap-2">
        <Image
          src={account.iconURL}
          alt="Social Media Icon"
          width={20}
          height={20}
        />
        <span>{account.username}</span>
      </div>

      {/* Numbers */}
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-text-secondary text-[clamp(3rem,6vw,3.5rem)] font-bold leading-none">
          {formatCompactNumbers(account.count)}
        </span>
        <span className="uppercase tracking-[.3rem] text-xs">
          {account.label}
        </span>
      </div>

      {/* Daily change */}
      <div className="flex justify-center items-center gap-2 font-bold text-sm">
        <Image
          src={account.changeToday > 0 ? "/icon-up.svg" : "/icon-down.svg"}
          alt={account.changeToday > 0 ? "Arrow up icon" : "Arrow down icon"}
          width={8}
          height={4}
        />
        <span
          className={`${account.changeToday > 0 ? "text-green-500" : "text-red-500"}`}
        >
          {Math.abs(account.changeToday)} Today
        </span>
      </div>
    </article>
  );
};

export default SocialAccountCard;

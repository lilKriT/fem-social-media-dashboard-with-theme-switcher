import Image from "next/image";

type SocialAccountCardProps = SocialAccount;

const SocialAccountCard = ({
  account,
}: {
  account: SocialAccountCardProps;
}) => {
  return (
    <article
      className={`bg-card-background rounded-md flex flex-col justify-center items-center overflow-hidden`}
    >
      {/* This is just the top bar */}
      <div className={`h-1 w-full ${account.topBarCSS}`}></div>

      {/* Actual content starts here */}
      <div className="flex justify-center items-center gap-2">
        <Image
          src={account.iconURL}
          alt="Social Media Icon"
          width={20}
          height={20}
        />
        <span>{account.username}</span>
      </div>
      <span className="text-text-secondary">{account.count}</span>
      <span>{account.label}</span>
      <div className="flex justify-center items-center gap-1">
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

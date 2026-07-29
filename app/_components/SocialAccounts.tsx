import { socialAccounts } from "@/data/socialAccount";
import SocialAccountCard from "./SocialAccountCard";

const SocialAccounts = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-8">
      {socialAccounts.map((socialAccount, idx) => (
        <SocialAccountCard key={idx} account={socialAccount} />
      ))}
    </div>
  );
};

export default SocialAccounts;

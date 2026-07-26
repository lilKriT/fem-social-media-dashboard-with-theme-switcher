import { socialAccounts } from "@/data/socialAccount";

const totalFollowers = (): number => {
  const result = socialAccounts
    .map((v) => v.count)
    .reduce((sum, val) => sum + val);

  return result;
};

export default totalFollowers;

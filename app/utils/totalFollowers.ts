import { socialAccounts } from "@/data/socialAccount";

const totalFollowers = () => {
  const result = socialAccounts
    .map((v) => v.count)
    .reduce((sum, val) => sum + val);

  console.log(result);
};

export default totalFollowers;

export type SocialAccount = {
  iconURL: string;
  username: string;
  count: number;
  label: "Followers" | "Subscribers";
  changeToday: number;
};

export type DailyMetric = {
  label: string;
  iconURL: string;
  count: number;
  changeToday: number;
};

type SocialAccount = {
  username: string;
  iconURL: string;
  topBarCSS: string;
  count: number;
  label: "Followers" | "Subscribers";
  changeToday: number;
};

type DailyMetric = {
  label: string;
  iconURL: string;
  count: number;
  changeToday: number;
};

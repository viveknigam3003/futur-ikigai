import analytics from "mixpanel-browser";

analytics.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

export default analytics;

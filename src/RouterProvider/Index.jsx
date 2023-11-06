import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../src/component/LayOut";
import BodyContent from "../component/Bodycontent/BodyContent";
import LaunchpadList from "../component/LaunchpadList/LaunchpadList";
import Blog from "../component/ViewSection/Blogs/BlogPage";
import LeaderBoard from "../component/LeaderBoard/LeaderBoard";
import MainLayoutLaunchpad from "../../src/component/LaunchpadProtocol/MainLayoutLaunchpad";
import PrivateLaunchpad from "../component/LaunchpadList/PrivateLaunchpad";
import BlockedLaunchpad from "../component/BlockedLaunched/BlockedLaunched";
import TopTrending from "../component/trending/TopTrending";
import PlatformStatistics from "../component/PlatformStatistics/PlatformStatistics";
import LogsPage from "../component/LogsPage/LogsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "",
        element: <BodyContent />,
        children: [
          {
            path: "",
            element: <MainLayoutLaunchpad />,
          },

          {
            path: "platformstatistics",
            element: <PlatformStatistics />,
          },
          {
            path: "logspage",
            element: <LogsPage />,
          },

          {
            path: "launchpadlist",
            element: <LaunchpadList />,
          },
          {
            path: "privatelaunchpad",
            element: <PrivateLaunchpad />,
          },
          {
            path: "blockedlaunchpad",
            element: <BlockedLaunchpad />,
          },

          {
            path: "toptrendingpage",
            element: <TopTrending />,
          },

          {
            path: "airdrop",
            element: <LeaderBoard />,
          },
          {
            path: "lauchpad/:address",
            element: <Blog />,
          },

          {
            path: "/Leaderboard",
            element: <LeaderBoard />,
          },
        ],
      },
    ],
  },
]);

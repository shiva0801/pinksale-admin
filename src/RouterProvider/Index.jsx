import { createBrowserRouter } from "react-router-dom";
import LayOut from "../../src/component/LayOut";
import BodyContent from "../component/Bodycontent/BodyContent";
import CreateLaunchpad from "../component/CreateLaunchpad/CreateLaunchpad";
import FairLounch from "../component/FairLounch/CreateLaunchpad";
import DutchAuction from "../component/DutchAuction/CreateLaunchpad";
import CreateSubscription from "../component/CreateSubscription/CreateLaunchpad";
import PrivateSale from "../component/PrivateSale/CreateLaunchpad";
import CreateToken from "../component/CreateToken/CreateToken";
import LaunchpadList from "../component/LaunchpadList/LaunchpadList";
import CreateLock from "../component/createLock/createLock";
import Token from "../component/Token/Token";
import Liquidity from "../component/Liquidity/Liquidity";
import CreateAirdrop from "../component/CreateAirdrop/CreateAirdrop";
import Airdrop from "../component/AirDrop/Airdrop";
import BuycryptoFiat from "../component/BuycryptoFiat/BuycryptoFiat";
import Blog from "../component/ViewSection/Blogs/BlogPage";
import CreateTokenInnerPage from "../component/CreateToken/CreateTokenInnerPage/CreateTokenInnerPage";
import LeaderBoard from "../component/LeaderBoard/LeaderBoard";
import MultiSender from "../component/MultiSender/MultiSender";
import MetamaskOnclick from "../component/MetamaskOnclick/MetamaskOnclick";
import AdvancedContribution from "../component/LaunchpadList/AdvancedContribution/AdvancedContribution";
import AdvancedMode from "../component/LaunchpadList/AdvancesMode/AdvancedMode";
import TokenView from "../../src/component/TokenView/TokenView";
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
            path: "createlaunchpad",
            element: <CreateLaunchpad />,
          },
          {
            path: "FairLounch",
            element: <FairLounch />,
          },
          {
            path: "DutchAuction",
            element: <DutchAuction />,
          },
          {
            path: 'platformstatistics',
            element: <PlatformStatistics />
          },
          {
            path: 'logspage',
            element: <LogsPage />
          },
          {
            path: "createSubscription",
            element: <CreateSubscription />,
          },
          {
            path: "PrivateSale",
            element: <PrivateSale />,
          },
          {
            path: "createtoken",
            element: <CreateToken />,
          },
          {
            path: "launchpadlist",
            element: <LaunchpadList />,
          },
          {
            path: 'privatelaunchpad',
            element: <PrivateLaunchpad />,
          },
          {
            path: 'blockedlaunchpad',
            element: <BlockedLaunchpad />
          },

          {
            path: 'toptrendingpage',
            element: <TopTrending />
          },
          {
            path: "createlock",
            element: <CreateLock />,
          },
          {
            path: "token",
            element: <Token />,
          },
          {
            path: "liquidity",
            element: <Liquidity />,
          },
          {
            path: "createairdrop",
            element: <CreateAirdrop />,
          },
          {
            path: "airdrop",
            element: <Airdrop />,
          },
          {
            path: "buycryptofiat",
            element: <BuycryptoFiat />,
          },

          {
            path: "lauchpad/:address",
            element: <Blog />,
          },
          {
            path: "/createtokeninnerpage",
            element: <CreateTokenInnerPage />,
          },
          {
            path: "/Leaderboard",
            element: <LeaderBoard />,
          },
          {
            path: "/MultiSender",
            element: <MultiSender />,
          },
          {
            path: "/me",
            element: <MetamaskOnclick />,
          },
          {
            path: "/advanced-contribution",
            element: <AdvancedContribution />,
          },
          {
            path: "/advanced-mode",
            element: <AdvancedMode />,
          },
          {
            path: "/TokenView",
            element: <TokenView />,
          },
        ],
      },
    ],
  },
]);

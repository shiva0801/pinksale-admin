import React, { useEffect, useState } from "react";
import "./Finished.css";
import { useDispatch, useSelector } from "react-redux";
import { lounchPadFormSelector } from "../../selector/selector";
import { addLounchPadData } from "../../../App/redux/features/FormStore/FormSlice";
import { approveERC20, deployICOContract, getIcoDetails, testFn } from "../../../App/redux/utils/contractUtils";
import { useEthersSigner } from "../../../App/Blockchain/Walletconnect";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Finished = () => {
  const dispatch = useDispatch();
  const lounchPadTab = useSelector(lounchPadFormSelector);
  const signer = useEthersSigner();
  const [loading, setLoading] = useState(false);

  const deployContract = async () => {
    console.log(lounchPadTab.lounchPadData);

   await deployICOContract(signer, lounchPadTab.lounchPadData);
  };

  const approveToken = async() => {
    // testFn()
  //  const data = await getIcoDetails("0x7bdbc1b5887523068c93c5d7aef438b3e50620ea");
  //  console.log(data);
  //  return
    console.log(lounchPadTab.lounchPadData.approvalToken*10**lounchPadTab.lounchPadData.decimals)
    setLoading(true);
   await approveERC20("0x468286AFa5A82faC3396446ca09e30c19a0e4c31",lounchPadTab.lounchPadData.address,(`${lounchPadTab.lounchPadData.approvalToken*10**lounchPadTab.lounchPadData.decimals}`),signer);
   setLoading(false);

  }




  return (
    <div className="finished_table_data_section">
      <table>
        <tr>
          <td>Total token</td>
          <td className="hello" style={{ color: "#FA6200" }}>
            2.988 {lounchPadTab.lounchPadData.name}
          </td>
        </tr>
        <tr>
          <td>Token name</td>
          <td className="hello">{lounchPadTab.lounchPadData.name}</td>
        </tr>
        <tr>
          <td>Token symbol</td>
          <td className="hello">{lounchPadTab.lounchPadData.symbol}</td>
        </tr>
        <tr>
          <td>Token decimals</td>
          <td className="hello">{lounchPadTab.lounchPadData.decimals}</td>
        </tr>
        <tr>
          <td>Presale rate</td>
          <td className="hello">
            {lounchPadTab.lounchPadData.presaleRate}{" "}
            {lounchPadTab.lounchPadData.name}
          </td>
        </tr>
        <tr>
          <td>Listing rate</td>
          <td className="hello">
            {lounchPadTab.lounchPadData.listingRate}{" "}
            {lounchPadTab.lounchPadData.name}
          </td>
        </tr>
        <tr>
          <td>Sale method</td>
          <td className="hello">Public</td>
        </tr>
        <tr>
          <td>Softcap</td>
          <td className="hello">{lounchPadTab.lounchPadData.softcap} BNB</td>
        </tr>
        <tr>
          <td>Hardcap</td>
          <td className="hello">{lounchPadTab.lounchPadData.hardcap} BNB</td>
        </tr>
        <tr>
          <td>Unsold tokens</td>
          <td className="hello">Burn</td>
        </tr>
        <tr>
          <td>Minimum buy</td>
          <td className="hello">{lounchPadTab.lounchPadData.minimumbuy}BNB</td>
        </tr>
        <tr>
          <td>Maximum buy</td>
          <td className="hello">{lounchPadTab.lounchPadData.maximumbuy}BNB</td>
        </tr>
        <tr>
          <td>Liquidity</td>
          <td className="hello">{lounchPadTab.lounchPadData.liquidity}%</td>
        </tr>
        <tr>
          <td>Start time</td>
          <td className="hello">{lounchPadTab.lounchPadData.startTimeStamp}</td>
        </tr>
        <tr>
          <td>End time</td>
          <td className="hello">{lounchPadTab.lounchPadData.endTimeStamp}</td>
        </tr>
        <tr>
          <td>Liquidity lockup time</td>
          <td className="hello">30 minutes</td>
        </tr>
        <tr>
          <td>website</td>
          <td className="hello">{lounchPadTab.lounchPadData.website}</td>
        </tr>

        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.twitter && (
          <tr>
            <td>Twitter</td>
            <td className="hello">{lounchPadTab.lounchPadData.twitter}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.telegram && (
          <tr>
            <td>Telegram</td>
            <td className="hello">{lounchPadTab.lounchPadData.telegram}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.Github && (
          <tr>
            <td>Github</td>
            <td className="hello">{lounchPadTab.lounchPadData.Github}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.instagram && (
          <tr>
            <td>Instagram</td>
            <td className="hello">{lounchPadTab.lounchPadData.instagram}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.discord && (
          <tr>
            <td>Discord</td>
            <td className="hello">{lounchPadTab.lounchPadData.discord}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.Reddit && (
          <tr>
            <td>Reddit</td>
            <td className="hello">{lounchPadTab.lounchPadData.Reddit}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.description && (
          <tr>
            <td>Description</td>
            <td className="hello">{lounchPadTab.lounchPadData.description}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.youtube && (
          <tr>
            <td>Youtube Video</td>
            <td className="hello">{lounchPadTab.lounchPadData.youtube}</td>
          </tr>
        )}
      </table>
      <div className="MetaSale_factory_address_main">
        <div className="MetaSale_factory_address">
          Please exclude MetaSale Factory address
          0x1ec1De50df7Eea94eC7F471a914c922167b23F5D
        </div>
        <div className="MetaSale_factory_address">
          Please exclude MetaSale Factory address
          0x1ec1De50df7Eea94eC7F471a914c922167b23F5D
        </div>
      </div>
      <form></form>
      <div className="back_and_next_button_section">
        {/* <button className="approve_btn">
          Aprrove {lounchPadTab.lounchPadData.approvalToken}{" "}
          {lounchPadTab.lounchPadData.name} Token
        </button> */}
        <button className="approve_btn" onClick={() => {
          approveToken()
        }}>
          {loading ? (
            <>
              <span>
                {" "}
                Aprrove {lounchPadTab.lounchPadData.approvalToken} {" "}
                {lounchPadTab.lounchPadData.name}{" "}Token
              </span>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 22 , color:"white" , marginLeft:"10px" }} spin />}
              />{" "}
            </>
          ) : (
            `Aprrove ${lounchPadTab.lounchPadData.approvalToken}
                        ${lounchPadTab.lounchPadData.name} Token`
          )}{" "}
        </button>
        <div className="back_and_next_button">
          <button
            className="back_button"
            onClick={() => {
              dispatch(addLounchPadData({ lounchpadForm: 2, bar: 2 }));
            }}
          >
            Back
          </button>
          <button className="next_button" onClick={() => {deployContract()}}>
            Deploy Ico
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finished;

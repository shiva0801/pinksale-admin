import React from "react";
import "./Finished.css";
import { useDispatch, useSelector } from "react-redux";
import {
  validateForm2,
  validateForm3,
} from "../../../App/redux/features/lounchPad/LounchPadSlice";
import { lounchPadFormSelector } from "../../selector/selector";
import { addLounchPadData } from "../../../App/redux/features/FormStore/FormSlice";

const Finished = () => {
  const dispatch = useDispatch();
  const lounchPadTab = useSelector(lounchPadFormSelector);
  return (
    <div className="finished_table_data_section">
      <table>
        <tr>
          <td>Total token</td>
          <td className="hello" style={{ color: "#FA6200" }}>
            2.988 MINI
          </td>
        </tr>
        <tr>
          <td>Token name</td>
          <td className="hello">CRYPTOMINI</td>
        </tr>
        <tr>
          <td>Token symbol</td>
          <td className="hello">MINI</td>
        </tr>
        <tr>
          <td>Token decimals</td>
          <td className="hello">9</td>
        </tr>
        <tr>
          <td>Presale rate</td>
          <td className="hello">1 MINI</td>
        </tr>
        <tr>
          <td>Listing rate</td>
          <td className="hello">1 MINI</td>
        </tr>
        <tr>
          <td>Sale method</td>
          <td className="hello">Public</td>
        </tr>
        <tr>
          <td>Softcap</td>
          <td className="hello">1 BNB</td>
        </tr>
        <tr>
          <td>Hardcap</td>
          <td className="hello">2 BNB</td>
        </tr>
        <tr>
          <td>Unsold tokens</td>
          <td className="hello">Burn</td>
        </tr>
        <tr>
          <td>Minimum buy</td>
          <td className="hello">0.1 BNB</td>
        </tr>
        <tr>
          <td>Maximum buy</td>
          <td className="hello">1 BNB</td>
        </tr>
        <tr>
          <td>Liquidity</td>
          <td className="hello">52%</td>
        </tr>
        <tr>
          <td>Start time</td>
          <td className="hello">2023-06-08T23:17 (UTC)</td>
        </tr>
        <tr>
          <td>End time</td>
          <td className="hello">2023-06-09T23:17 (UTC)</td>
        </tr>
        <tr>
          <td>Liquidity lockup time</td>
          <td className="hello">30 minutes</td>
        </tr>
        <tr>
          <td>Website</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>

        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Twitter</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}
        {lounchPadTab.lounchPadData.facebook && (
          <tr>
            <td>Facebook</td>
            <td className="hello">{lounchPadTab.lounchPadData.facebook}</td>
          </tr>
        )}

        <tr>
          <td>Twitter</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Telegram</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Github</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Instagram</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Discord</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Reddit</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Description</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
        <tr>
          <td>Youtube Video</td>
          <td className="hello">https://testnet.bscscan.com</td>
        </tr>
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
        <div className="back_and_next_button">
          <button
            className="back_button"
            onClick={() => {
              dispatch(addLounchPadData({lounchpadForm :2}));
            }}
          >
            Back
          </button>
          <button className="next_button" onClick={() => {}}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finished;

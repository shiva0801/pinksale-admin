import React, { useState } from "react";
import "./TokenAddress.css";
import { Checkbox, Form, Input, Modal, Radio, Space } from "antd";
import DeFiLaunchpadInfo from "../DeFiLaunchpadInfo/DeFiLaunchpadInfo";
import AddAdditionalInfo from "../AddAdditionalInfo/AddAdditionalInfo";
import Finished from "../Finished/Finished";
import { useSelector, useDispatch } from "react-redux";
import { fetchTokenDetails } from "../../../App/redux/features/createToken/createTokenSlice";
import CreateToken from "../../CreateToken/CreateToken";
import { validateForm1 ,addLounchPadData } from "../../../App/redux/features/lounchPad/LounchPadSlice";
import { lounchPadFormSelector } from "../../selector/selector";

const TokenAddress = () => {
  const [modelCreated, setModelCreated] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [value, setValue] = useState(1);
  const [form] = Form.useForm();

  const modalHandle = () => {
    setIsopen(true);
  };
  const modalHandleCancel = () => {
    setIsopen(false);
  };

  const dispatch = useDispatch();
  const tokenDetails = useSelector((state) => state.user.tokenDetails);
  const lounchPadTab = useSelector(lounchPadFormSelector);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const validate = () => {
    form.validateFields();
  };

  const handeltokenAddress = async (value) => {
    dispatch(fetchTokenDetails(value));
  };

  const handleNextBtn = () => {
    dispatch(addLounchPadData({lounchpadForm:1}))
  };

  return (
    <>
      <Modal open={isOpen} footer={null} onCancel={modalHandleCancel}>
        <CreateToken />
      </Modal>

      <div className="container">
        {lounchPadTab.lounchPadData?.lounchpadForm === 1 ? (
          <DeFiLaunchpadInfo />
        ) : lounchPadTab.lounchPadData?.lounchpadForm === 2 ? (
          <AddAdditionalInfo />
        ) : lounchPadTab.lounchPadData?.lounchpadForm === 3 ? (
          <Finished />
        ) : (
          <Form form={form} onFinish={validate}>
            <div className="sub-container">
              <p className="required">(*) is required field.</p>
              <div>
                <div className="address_token">
                  <p>
                    Token address <sup className="required">*</sup>
                  </p>
                  <div>
                    <button onClick={modalHandle}>Create Model</button>
                    {modelCreated && <p>Model created successfully!</p>}
                  </div>
                </div>
                <div></div>
              </div>
              <div className="inputBox">
                <Form.Item>
                  <Input
                    type="text"
                    onChange={(e) => {
                      handeltokenAddress(e.target.value);
                    }}
                  />
                </Form.Item>
                <p className="pool">Pool creation fee: 1 BNB</p>
              </div>
              {tokenDetails && (
                <table>
                  <tr>
                    <td>Name</td>
                    <td className="text-right">
                      <a href="/">{tokenDetails?.name}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Symbol</td>
                    <td className="text-right">{tokenDetails?.symbol}</td>
                  </tr>
                  <tr>
                    <td>Decimal</td>
                    <td className="text-right">{tokenDetails?.decimals}</td>
                  </tr>
                </table>
              )}

              <div></div>
              <div className="chechboxDiv">
                <h3 className="currency">Currency</h3>

                <Form.Item name="Currency">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio value={1}>BNB</Radio>
                      <Radio value={2}>BUSD</Radio>
                      <Radio value={3}>USDT</Radio>
                      <Radio value={4}>USDC</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <p className="pool">Users will pay with BNB for your token</p>

              <div className="chechboxDiv">
                <h3 className="currency">Fee Options</h3>
                <Form.Item name="Payment Option Selected">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio onChange={onChange}>
                        5% BNB raised only{" "}
                        <span className="pool">(Recommended)</span>
                      </Radio>
                      <Radio onChange={onChange}>Others</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="chechboxDiv">
                <h3 className="currency">Listing Options</h3>
                <Form.Item name="listingType">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio>Auto Listing</Radio>
                      <Radio>Manual listing</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="chechboxDiv">
                <h3 className="currency">Affiliate Program</h3>
                <Form.Item name="affilateStatus">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio>Disable Affilate</Radio>
                      <Radio>Enable Affilate</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="req-footer">
                <p>
                  For auto listing, after you finalize the pool your token will
                  be auto listed on DEX.
                </p>
              </div>
              <div className="nextBtn">
                <button onClick={handleNextBtn}>Next</button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  );
};

export default TokenAddress;

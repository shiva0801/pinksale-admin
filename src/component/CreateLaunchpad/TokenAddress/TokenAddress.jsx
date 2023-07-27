import React, { useState } from "react";
import "./TokenAddress.css";
import { Checkbox, Form, Input, Modal, Radio, Space } from "antd";
import DeFiLaunchpadInfo from "../DeFiLaunchpadInfo/DeFiLaunchpadInfo";
import AddAdditionalInfo from "../AddAdditionalInfo/AddAdditionalInfo";
import Finished from "../Finished/Finished";
import { useSelector, useDispatch } from "react-redux";

import CreateToken from "../../CreateToken/CreateToken";
import { addLounchPadData } from "../../../App/redux/features/FormStore/FormSlice";
import { lounchPadFormSelector } from "../../selector/selector";
import { getTokenDetails } from "../../../App/redux/utils/getTokenDetails";
import { FeeCapTooLowError } from "viem";

const TokenAddress = () => {
  const [modelCreated, setModelCreated] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [value, setValue] = useState(1);
  const [fee, setfee] = useState(1);
  const [token, settoken] = useState(null);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [form] = Form.useForm();

  const modalHandle = () => {
    setIsopen(true);
  };
  const modalHandleCancel = () => {
    setIsopen(false);
  };

  const dispatch = useDispatch();
  const lounchPadTab = useSelector(lounchPadFormSelector);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const validate = () => {
    form.validateFields();
  };

  const handeltokenAddress = async (value) => {
    const data = await getTokenDetails(value);
    if (data.success) {
      dispatch(addLounchPadData({ ...data.data }));
      form.setFields([
        {
          name: "address",
          errors: [""],
        },
      ]);
      setIsFormFilled(true);
    } else {
      form.setFields([
        {
          name: "address",
          errors: ["invalid token address"],
        },
      ]);
      dispatch(
        addLounchPadData({
          name: undefined,
          symbol: undefined,
          decimals: undefined,
          tokenAddress: undefined,
        })
      );
    }
  };

  

  const handleNextBtn = () => {
    form.validateFields().then((values) => {
      const defaultValues = {
        lounchpadForm: 1,
        bar: 1,
        Currency: 1,
        PaymentOptionSelected: 1,
        listingType: 1,
        affilateStatus: 1,
      };
      console.log(values);
      dispatch(addLounchPadData({ ...defaultValues, ...values, ...token }));
    });
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
                <Form.Item name="address">
                  <Input
                    type="text"
                    onChange={(e) => {
                      handeltokenAddress(e.target.value);
                    }}
                    defaultValue={lounchPadTab?.lounchPadData?.tokenAddress}
                  />
                </Form.Item>
                <p className="pool">Pool creation fee: 1 BNB</p>
              </div>
              {lounchPadTab?.lounchPadData?.name && (
                <table>
                  <tr>
                    <td>Name</td>
                    <td className="text-right">
                      <a href="/">{lounchPadTab?.lounchPadData?.name}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Symbol</td>
                    <td className="text-right">
                      {lounchPadTab?.lounchPadData?.symbol}
                    </td>
                  </tr>
                  <tr>
                    <td>Decimal</td>
                    <td className="text-right">
                      {lounchPadTab?.lounchPadData?.decimals}
                    </td>
                  </tr>
                </table>
              )}

              <div></div>
              <div className="chechboxDiv">
                <h3 className="currency">Currency</h3>

                <Form.Item name="Currency" initialValue={1}>
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
                <Form.Item name="PaymentOptionSelected" initialValue={1}>
                  <Radio.Group
                    onChange={onChange}
                    value={FeeCapTooLowError}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio onChange={onChange} value={1}>
                        5% BNB raised only{" "}
                        <span className="pool">(Recommended)</span>
                      </Radio>
                      <Radio onChange={onChange} value={2}>
                        Others
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="chechboxDiv">
                <h3 className="currency">Listing Options</h3>
                <Form.Item name="listingType" initialValue={1}>
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio value={1}>Auto Listing</Radio>
                      <Radio value={2}>Manual listing</Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </div>

              <div className="chechboxDiv">
                <h3 className="currency">Affiliate Program</h3>
                <Form.Item name="affilateStatus" initialValue={1}>
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    defaultValue={1}
                  >
                    <Space direction="vertical">
                      <Radio value={1}>Disable Affilate</Radio>
                      <Radio value={2}>Enable Affilate</Radio>
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
                <button
                  onClick={handleNextBtn}
                  disabled={!lounchPadTab?.lounchPadData?.name}
                  className={
                    lounchPadTab?.lounchPadData?.name
                      ? "filledBtn"
                      : "unfilledBtn"
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  );
};

export default TokenAddress;

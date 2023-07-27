import React, { useState } from "react";
import "../DeFiLaunchpadInfo/DeFiLaunchpadInfo.css";
import { Form, Input, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addLounchPadData } from "../../../App/redux/features/FormStore/FormSlice";
import { lounchPadFormSelector } from "../../selector/selector";

const DeFiLaunchpadInfo = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const dispatch = useDispatch();
  const lounchPadTab = useSelector(lounchPadFormSelector);
  const initialValues = {
    presaleRate: lounchPadTab?.lounchPadData?.presaleRate || 0,
    whitelist: lounchPadTab?.lounchPadData?.whitelist || 1,
    softcap: lounchPadTab?.lounchPadData?.softcap || 0,
    hardcap: lounchPadTab?.lounchPadData?.hardcap || 0,
    minimumbuy: lounchPadTab?.lounchPadData?.minimumbuy || 0,
    maximumbuy: lounchPadTab?.lounchPadData?.maximumbuy || 0,
    liquidity: lounchPadTab?.lounchPadData?.liquidity || 0,
    listingRate: lounchPadTab?.lounchPadData?.listingRate || 0,
    startTimeStamp: lounchPadTab?.lounchPadData?.startTimeStamp || "2023-07-20",
    endTimeStamp: lounchPadTab?.lounchPadData?.endTimeStamp || "2023-07-21",
    refundtype: lounchPadTab?.lounchPadData?.refundtype || "Refund",
    router: lounchPadTab?.lounchPadData?.router || "PancakeSwap",
  };

  const presaleValidator = (rule, value, callback) => {
    if (value <= 0) {
      callback("presale Rate must be greater than 0");
    } else {
      callback();
    }
  };

  const minBuyValidator = (rule, value, callback) => {
    if (value <= 0) {
      callback("Minimum Buy must be greater than 0");
    } else {
      callback();
    }
  };

  const softCapValidator = (rule, value, callback) => {
    if (value <= 0) {
      callback("SoftCap must be greater than 0");
    } else {
      callback();
    }
  };

  const maxBuyValidator = (rule, value, callback) => {
    const minBuy = form.getFieldValue("minimumbuy");
    if (value <= 0) {
      callback("Maximum Buy must be greater than 0");
    } else if (value < minBuy) {
      callback("Maximum Buy cannot be below the Minmum Buy");
    } else {
      callback();
    }
  };

  const liquidityValidator = (rule, value, callback) => {
    if (value < 51) {
      callback("Liquidity Percentage should be 51% to 100%");
    } else if (value > 100) {
      callback("Liquidity Should Not Exceed 100%");
    } else {
      callback();
    }
  };

  const listingRateValidator = (rule, value, callback) => {
    if (value <= 0) {
      callback("Listing Rate must be greater than 0");
    } else {
      callback();
    }
  };

  const startTimeValidator = (rule, value, callback) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
      callback("Start time must be greater than the current date and time");
    } else {
      callback();
    }
  };

  const endTimeValidator = (rule, value, callback) => {
    const selectedDate = new Date(value);
    const startDateData = form.getFieldValue("startTimeStamp");
    const startTime = new Date(startDateData);

    if (selectedDate <= startTime) {
      callback("End time must be greater  Start TimeStamp");
    } else {
      callback();
    }
  };

  const liquiditLockupValidator = (rule, value, callback) => {
    if (value <= 0) {
      callback("Liquidity Lockup Must be greater than 30 Minutes");
    } else {
      callback();
    }
  };

  const hardcapValidator = (rule, value, callback) => {
    const softcap = form.getFieldValue("softcap");
    if (value <= 0) {
      callback("Hardcap must be greater than 0");
    } else if (value < softcap) {
      callback("Hardcap cannot be below the softcap (lowcap)");
    } else {
      callback();
    }
  };

  const formValidator = (e) => {
    form.validateFields().then((values) => {
      let requiredApprovalToken =
        values?.presaleRate * values?.hardcap +
        (values?.liquidity / 100) * values?.hardcap * values?.listingRate;
      console.log("required approval token", requiredApprovalToken);
      let startTimeStamp = new Date(values.startTimeStamp);
      startTimeStamp.toISOString().slice(0, 16);
      startTimeStamp = Math.floor(startTimeStamp.getTime() / 1000);
      let endTimeStamp = new Date(values.endTimeStamp);
      endTimeStamp.toISOString().slice(0, 16);
      endTimeStamp = Math.floor(endTimeStamp.getTime() / 1000);
      dispatch(
        addLounchPadData({
          ...values,
          approvalToken: requiredApprovalToken,
          startTimeStamp: startTimeStamp,
          endTimeStamp: endTimeStamp,
        })
      );
    });
  };

  const validate = () => {
    form.validateFields().then((values) => {
      let requiredApprovalToken =
        values?.presaleRate * values?.hardcap +
        (values?.liquidity / 100) * values?.hardcap * values?.listingRate;
      console.log("required approval token", requiredApprovalToken);
      let startTimeStamp = new Date(values.startTimeStamp);
      startTimeStamp.toISOString().slice(0, 16);
      startTimeStamp = Math.floor(startTimeStamp.getTime() / 1000);
      let endTimeStamp = new Date(values.endTimeStamp);
      endTimeStamp.toISOString().slice(0, 16);
      endTimeStamp = Math.floor(endTimeStamp.getTime() / 1000);
      dispatch(
        addLounchPadData({
          lounchpadForm: 2,
          bar: 2,
          ...values,
          approvalToken: requiredApprovalToken,
          startTimeStamp: startTimeStamp,
          endTimeStamp: endTimeStamp,
        })
      );
    });
  };

  return (
    <div className="difilaunchpad_section">
      <Form
        form={form}
        onFinish={validate}
        onChange={(e) => {
          formValidator(e);
        }}
        initialValues={initialValues}
      >
        <div className="presale_rate">
          <p style={{ color: "#FA6200" }}>(*) is required field</p>
          <p>
            <strong>Presale rate</strong>
          </p>
          <Form.Item
            name="presaleRate"
            rules={[
              {
                validator: presaleValidator,
              },
            ]}
          >
            <Input type={"number"} placeholder="10000000" />
          </Form.Item>
          <p style={{ color: "#3298dc" }}>
            If I spend 1 BNB how many tokens will I receive?
          </p>
        </div>
        <div className="whitelist">
          <p>
            <strong className="header_text">Whitelist</strong>
          </p>
          <div className="disable_enable">
            <Form.Item name="whitelist" initialValue={1}>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Disabled</Radio>
                <Radio defaultChecked value={2}>
                  Enable
                </Radio>
              </Radio.Group>
            </Form.Item>
            <p style={{ color: "#3298dc" }}>
              You can enable/disable whitelist anytime.
            </p>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)*">
              Softcap (BNB)<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="softcap"
              rules={[
                {
                  validator: softCapValidator,
                },
              ]}
            >
              <Input type={"number"} placeholder="10000000" />
            </Form.Item>
            <div></div>
          </div>
          <div className="bnb_description_right_main">
            <label htmlFor="Softcap (BNB)*">
              HardCap (BNB)<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="hardcap"
              rules={[
                {
                  validator: hardcapValidator,
                },
              ]}
            >
              <Input
                type={"number"}
                placeholder="10000000"
                defaultValue={lounchPadTab?.lounchPadData?.hardcap}
              />
            </Form.Item>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)">
              Minimum buy (BNB)<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="minimumbuy"
              rules={[
                {
                  validator: minBuyValidator,
                },
              ]}
            >
              <Input type={"number"} placeholder="10000000" />
            </Form.Item>
          </div>
          <div className="bnb_description_right_main">
            <label className="softcap" htmlFor="Softcap (BNB)*">
              Maximum buy (BNB)<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="maximumbuy"
              rules={[
                {
                  validator: maxBuyValidator,
                },
              ]}
            >
              <Input type={"number"} placeholder="10000000" />
            </Form.Item>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)*">Refund type</label>
            <Form.Item name="refundtype">
              <select className="selectedBox">
                <option value="Refund">Refund</option>
                <option value="Burn">Burn</option>
              </select>
            </Form.Item>
          </div>
          <div className="bnb_description_right_main">
            <label className="softcap" htmlFor="Softcap (BNB)*">
              Router<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item name="router">
              <select className="selectedBox">
                <option value="none" disabled>
                  ---Select Router Exchange---
                </option>
                <option value="PancakeSwap">Pancake Swap</option>
                <option value="MetaSwap">MetaSwap</option>
              </select>
            </Form.Item>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)*">
              liquidity (%)<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="liquidity"
              rules={[
                {
                  validator: liquidityValidator,
                },
              ]}
            >
              <Input type={"text"} placeholder="10000000" />
            </Form.Item>
          </div>
          <div className="bnb_description_right_main">
            <label className="softcap" htmlFor="Softcap (BNB)*">
              listing rate<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="listingRate"
              rules={[
                {
                  validator: listingRateValidator,
                },
              ]}
            >
              <Input type={"number"} placeholder="10000000" />
            </Form.Item>
            <p style={{ color: "#3298dc" }}>1 BNB = 0 MINI</p>
          </div>
        </div>
        <div className="liquidity_percentage_text">
          <p>
            Enter the percentage of raised funds that should be allocated to
            Liquidity on (Min 51%, Max 100%)
          </p>
          <p>
            If I spend 1 BNB on how many tokens will I receive? Usually this
            amount is lower than presale rate to allow for a higher listing
            price on
          </p>
        </div>
        <div className="select_time_section">
          <p>Select start time & end time (UTC)</p>
          <div className="bnb_description">
            <div className="bnb_description_left_main">
              <label htmlFor="Softcap (BNB)*">
                Start time (UTC)<span style={{ color: "#FA6200" }}>*</span>
              </label>
              <Form.Item
                name="startTimeStamp"
                rules={[
                  {
                    validator: startTimeValidator,
                  },
                ]}
              >
                <Input type={"datetime-local"} />
              </Form.Item>
              <p style={{ font: "14px", fontWeight: "400", color: "#3298dc" }}>
                The duration between start time and end time must be less than
                10080 minutes
              </p>
            </div>
            <div className="bnb_description_right_main">
              <label className="softcap" htmlFor="Softcap (BNB)*">
                End time (UTC)<span style={{ color: "#FA6200" }}>*</span>
              </label>
              <Form.Item
                name="endTimeStamp"
                rules={[
                  {
                    validator: endTimeValidator,
                  },
                ]}
              >
                <Input type={"datetime-local"} />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="liquidity_lockup_section">
          <label htmlFor="Liquidity lockup ">
            Liquidity lockup (minutes)
            <span style={{ color: "#FA6200" }}>*</span>
          </label>
          <Form.Item
            name="liquiduityLockup"
            rules={[
              {
                validator: liquiditLockupValidator,
              },
            ]}
          >
            <Input type={"number"} placeholder="10000000" />
          </Form.Item>
        </div>
      </Form>
      <div className="back_and_next_button_section">
        <div className="create_launchedpad_text">
          <p>
            Need {lounchPadTab?.lounchPadData?.approvalToken} MINI to create
            launchpad.
          </p>
        </div>
        <div className="back_and_next_button">
          <button
            className="back_button"
            onClick={() => {
              dispatch(addLounchPadData({ lounchpadForm: null, bar: 0 }));
            }}
          >
            Back
          </button>
          <button
            className="next_button"
            onClick={() => {
              validate();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeFiLaunchpadInfo;

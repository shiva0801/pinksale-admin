import React, { useState } from "react";
import "./CreateToken.css";
import { Checkbox, Form, Input, Spin } from "antd";
import Footer from "../footer/Footer";
import { DeployToken } from "../../api/api";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { GetChainConfig } from "../../App/Config/Config";
import { useNetwork } from "wagmi";
import { useEthersSigner } from "../../App/Blockchain/Walletconnect";

const CreateToken = () => {
  const [form] = Form.useForm();
  const { chain } = useNetwork();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [form2, setform2] = useState(false);
  const [data, setdata] = useState(null);
  const [res, setres] = useState(null);
  const signer = useEthersSigner();

  const onFinish = async (values) => {
    const obj = {
      name: values.name,
      symbol: values.symbol,
      totalSupply: values.totalSupply,
      decimal: values.decimals,
    };
    setdata(obj);
    setLoading(!loading);
    const response = await DeployToken(obj, signer);
    setres(response);
    setform2(true);
    setLoading(false);
  };

  const viewTransaction = () => {
    const config = GetChainConfig(chain.id);
    window.open(`${config.explorer}/tx/${res?.hash}`, "_blank");
  };

  const CopyAddress = () => {
    navigator.clipboard.writeText(res?.address);
    api.info({
      message: `Address Copied`,
      description: `Address ${res?.address} is coppied SuccesFully`,
      placement: "topRight",
    });
  };

  const handleCreateToken = () => {
    form
      .validateFields()
      .then((values) => {
        setLoading(true);
        onFinish(values);
      })
      .catch((error) => {
        console.log("Form validation error:", error);
      });
  };

  const handleFormChange = () => {
    form
      .validateFields()
      .then(() => {
        setIsFormFilled(true);
      })
      .catch(() => {
        setIsFormFilled(false);
      });
  };

  return (
    <>
      {contextHolder}
      <div className="createLaunchPad">
        <div className="container">
          {form2 ? (
            <>
              <div className="container">
                <div className="create_tokan_main">
                  <div className="paragraph">
                    <p>Your tokan was created</p>
                  </div>
                  <div className="token_created_table_section">
                    <table>
                      <tr>
                        <td>Name</td>
                        <td className="td_right">{data.name}</td>
                      </tr>
                      <tr>
                        <td>Symbol</td>
                        <td className="td_right">{data.symbol}</td>
                      </tr>
                      <tr>
                        <td>Total supply</td>
                        <td className="td_right">{data.totalSupply}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td className="td_right">{res.address}</td>
                      </tr>
                    </table>
                    <div className="tokan_address">
                      {/* <div className='tokan_details'>View transaction</div>
                     <div className='tokan_details'>Copy address</div>
                     <div style={{backgroundColor:"#fa6200",border:"none"}} className='tokan_details'>Create launchpad</div>
                     <div style={{backgroundColor:"#fa6200", border:"none"}} className='tokan_details'>Create fairlaunch</div> */}
                      <button
                        onClick={() => {
                          viewTransaction();
                        }}
                      >
                        View transaction
                      </button>
                      <button
                        onClick={() => {
                          CopyAddress();
                        }}
                      >
                        Copy address
                      </button>
                      <button
                        style={{
                          backgroundColor: "#F95997",
                          border: "none",
                          color: "#ffffff",
                        }}
                      >
                        Create launchpad
                      </button>
                      <button
                        style={{
                          backgroundColor: "#F95997",
                          border: "none",
                          color: "#ffffff",
                        }}
                      >
                        Create fairlaunch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="sub-container">
                <p className="required">(*) is required field.</p>
                <div>
                  <div className="address_token">
                    <p>
                      Token address <sup className="required">*</sup>
                    </p>
                  </div>
                  <div></div>
                </div>

                <div>
                  <Form
                    layout="vertical"
                    form={form}
                    style={{
                      maxWidth: "100%",
                    }}
                    onChange={handleFormChange}
                    onFinish={onFinish} // Add onFinish prop to the Form component
                  >
                    <select className="selectedBox">
                      <option value="">Standard Token</option>
                      <option value="">Liquidity Generator Token</option>
                      <option value="">Baby Token</option>
                      <option value="">BuyBack Baby Token</option>
                    </select>

                    <p className="pool">0.2 BNB</p>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Standard Token" />
                    </Form.Item>
                    <Form.Item
                      label="Symbol"
                      name="symbol"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Standard Token" />
                    </Form.Item>
                    <Form.Item
                      label="Decimals"
                      name="decimals"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="18" min={0} type={"number"} />
                    </Form.Item>
                    <Form.Item
                      label="Total supply"
                      name="totalSupply"
                      rules={[{ required: true }]}
                    >
                      <Input type={"number"} placeholder="10000000" />
                    </Form.Item>
                    <Checkbox>Implement Pink Anti-Bot System?</Checkbox>
                  </Form>
                  <div className="nextBtn">
                    <button
                      onClick={handleCreateToken}
                      className={isFormFilled ? "filledBtn" : "unfilledBtn"}
                    >
                      {loading ? (
                        <>
                          <span>Create Token</span>{" "}
                          <Spin
                            indicator={
                              <LoadingOutlined style={{ fontSize: 18 }} spin />
                            }
                          />{" "}
                        </>
                      ) : (
                        "Create Token"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CreateToken;

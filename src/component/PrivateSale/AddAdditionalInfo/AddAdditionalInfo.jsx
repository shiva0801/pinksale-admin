import React from "react";
import "./AddAdditionalInfo.css";
import { HiPhoto } from "react-icons/hi2";
import { FiGlobe } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { RiDiscordFill } from "react-icons/ri";
import { Form, Input } from "antd";
import { AiOutlineReddit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addLounchPadData,
  validateForm1,
  validateForm3,
} from "../../../App/redux/features/lounchPad/LounchPadSlice";
import TextArea from "antd/es/input/TextArea";

const AddAdditionalInfo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const validate = () => {
    form.validateFields().then((values) => {
      dispatch(addLounchPadData({ ...values, lounchpadForm : 3}));
      dispatch(validateForm3());
    });
  };

  const initialValues = {
    logo: "",
    website: "",
    facebook: "",
    twitter: "",
    Github: "",
    telegram: "",
    instagram: "",
    discord: "",
    Reddit: "",
    Youtube: "",
    description: "",
  };

  return (
    <div className="addadditional_form_section_main">
      <Form form={form} onFinish={validate} initialValues={initialValues}>
        <div className="whitelist">
          <p style={{ color: "#FA6200" }}>(*) is required field</p>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)*">
              Logo URL<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="logo"
              rules={[{ required: true, message: "logo is required" }]}
            >
              <Input type={"text"} prefix={<HiPhoto />} />
            </Form.Item>
            <p style={{ color: "#FA6200" }}>Logo cannot be blank</p>
            <p style={{ color: "#3298dc" }}>
              URL must end with a supported image extension png, jpg, jpeg or
              gif. You can upload your image at{" "}
              <span className="MetaSale_finance_url">
                <a href="">https://upload.MetaSale.finance/</a>
              </span>{" "}
            </p>
          </div>
          <div className="bnb_description_right_main">
            <label htmlFor="Softcap (BNB)*">
              Website<span style={{ color: "#FA6200" }}>*</span>
            </label>
            <Form.Item
              name="website"
              rules={[{ required: true, message: "website is required" }]}
            >
              <Input type={"text"} />
            </Form.Item>
            <p style={{ color: "#FA6200" }}>Website cannot be blank</p>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)">Facebook</label>
            <Form.Item name="facebook">
              <Input
                type="text"
                placeholder="Ex: https://facebook.com/...
            "
                prefix={<CiFacebook />}
              />
            </Form.Item>
          </div>
          <div className="bnb_description_right_main">
            <label className="softcap" htmlFor="Softcap (BNB)*">
              Twitter
            </label>
            <Form.Item name="twitter">
              <Input
                type="text"
                placeholder="Ex: https://twitter.com/...
            "
                prefix={<TfiTwitter />}
              />
            </Form.Item>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)*">Github</label>
            <Form.Item name="Github">
            <Input
              type="text"
              placeholder="Ex: https://github.com/...
            "
              prefix={<FiGithub />}
            />
            </Form.Item>
          </div>
          <div className="bnb_description_right_main">
            <label className="softcap" htmlFor="Softcap (BNB)*">
              Telegram
            </label>
            <Form.Item name="telegram">
            <Input
              type="text"
              placeholder="Ex: https://t.me/...
           "
              prefix={<FiGlobe />}
            />
            </Form.Item>
          </div>
        </div>
        <div className="bnb_description">
          <div className="bnb_description_left_main">
            <label htmlFor="Softcap (BNB)*">Instagram</label>
            <Form.Item name="instagram">
            <Input
              type="text"
              placeholder="Ex: https://instagram.com/...
            "
              prefix={<SlSocialInstagram />}
            />
            </Form.Item>
          </div>
          <div className="bnb_description_right_main">
            <label className="softcap" htmlFor="Softcap (BNB)*">
              Discord
            </label>
            <Form.Item name="discord">
            <Input
              type="text"
              placeholder="Ex: https://t.me/...
            "
              prefix={<RiDiscordFill />}
            />
            </Form.Item>
          </div>
        </div>
        <div className="liquidity_lockup_section">
          <label htmlFor="Liquidity lockup ">Reddit</label>
          <Form.Item name="Reddit">
          <Input
            type="text"
            placeholder="Ex: https://reddit.com/...
          "
            prefix={<AiOutlineReddit />}
          />
          </Form.Item>
        </div>
        <div className="liquidity_lockup_section">
          <label htmlFor="Liquidity lockup ">Youtube Video</label>
          <Form.Item name="Youtube">
          <Input
            style={{ marginTop: "8px" }}
            type="text"
            className="ytsec"
            placeholder="Ex: https://www.youtube.com/watch?v=xxxxxxxxx
           "
          />
          </Form.Item>
          <p style={{ color: "#3298dc" }}>
            Input your youtube URL, or youtube video ID.
          </p>
        </div>
        <div className="liquidity_lockup_section">
          <label htmlFor="Liquidity lockup ">Description</label>
          <Form.Item name="description">
          <TextArea id="description_field">
            Ex: This is the best project...{" "}
          </TextArea>
          </Form.Item>
        </div>
      </Form>
      <div className="back_and_next_button_section">
        <div className="back_and_next_button">
          <button
            className="back_button"
            onClick={() => {
              dispatch(addLounchPadData({lounchpadForm : 1}));
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

export default AddAdditionalInfo;

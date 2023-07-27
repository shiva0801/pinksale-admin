import React from 'react'
import './CreateAirdrop.css'
import { Form, Input, Radio } from 'antd';
import { HiPhoto } from "react-icons/hi2";
import TextArea from "antd/es/input/TextArea";
import { CiFacebook } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { RiDiscordFill } from "react-icons/ri";
import { AiOutlineReddit } from "react-icons/ai";

const CreateAirdrop = () => {
  return (
    <div className='create_airdrop_section'>
      <div className='container'>
        <div className='create_airdrop_main'>
          <h1>Create New Airdrop</h1>
          <div className='token_address_section'>
            {/* <p>(*) is required field.</p> */}
            <form>
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
              <Input type={"text"}/>
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
              <div className='bnb_description'>
                <div className='bnb_description_left_main'>
                  <label htmlFor="Softcap (BNB)*">Fcaebook<span style={{ color: "#FA6200" }}>*</span></label>
                  <Form.Item
                    name="softcap"
                    rules={[{ required: true, message: 'Softcap cannot be blank' }]}
                  >
                    <Input type={"number"} placeholder="Ex: https://facebook.com/..."  prefix={<CiFacebook/>}/>
                  </Form.Item>
                  <div>
                  </div>
                </div>
                <div className='bnb_description_right_main'>
                  <label htmlFor="Softcap (BNB)*">Twitter<span style={{ color: "#FA6200" }}>*</span></label>
                  <Form.Item
                    name="hardcap"
                    rules={[{ required: true, message: 'Hardcap cannot be blank' }]}
                  >
                    <Input type={"number"} placeholder="Ex: https://twitter.com/..." prefix={<TfiTwitter />}/>
                  </Form.Item>
                </div>

              </div>
              <div className='bnb_description'>
                <div className='bnb_description_left_main'>
                  <label htmlFor="Softcap (BNB)*">Github<span style={{ color: "#FA6200" }}>*</span></label>
                  <Form.Item
                    name="softcap"
                    rules={[{ required: true, message: 'Softcap cannot be blank' }]}
                  >
                    <Input type={"number"} placeholder=" https://github.com/..."  prefix={<FiGithub />}/>
                  </Form.Item>
                  <div>
                  </div>
                </div>
                <div className='bnb_description_right_main'>
                  <label htmlFor="Softcap (BNB)*">Telegram<span style={{ color: "#FA6200" }}>*</span></label>
                  <Form.Item
                    name="hardcap"
                    rules={[{ required: true, message: 'Hardcap cannot be blank' }]}
                  >
                    <Input type={"number"} placeholder="Ex: https://t.me/..." prefix={<FiGlobe />}/>
                  </Form.Item>
                </div>

              </div>

              <div className='bnb_description'>
                <div className='bnb_description_left_main'>
                  <label htmlFor="Softcap (BNB)*">Instagram<span style={{ color: "#FA6200" }}>*</span></label>
                  <Form.Item
                    name="softcap"
                    rules={[{ required: true, message: 'Softcap cannot be blank' }]}
                  >
                    <Input type={"number"} placeholder="Ex: https://instagram.com/..."  prefix={<SlSocialInstagram />}/>
                  </Form.Item>
                  <div>
                  </div>
                </div>
                <div className='bnb_description_right_main'>
                  <label htmlFor="Softcap (BNB)*">Discord<span style={{ color: "#FA6200" }}>*</span></label>
                  <Form.Item
                    name="hardcap"
                    rules={[{ required: true, message: 'Hardcap cannot be blank' }]}
                  >
                    <Input type={"number"} placeholder="Ex: https://t.me/..."  prefix={<RiDiscordFill />}/>
                  </Form.Item>
                </div>
              </div>
              <div className='radddit_section'>
              <form>
              <label htmlFor="Token address">Raddit</label>
              <input type="text" placeholder='https://reddit.com/...'  prefix={<AiOutlineReddit/>}/>
              </form>
              </div>
              <div className="liquidity_lockup_section">
          <label htmlFor="Liquidity lockup ">Description</label>
          <Form.Item name="description">
          <TextArea id="description_field">
            Ex: This is the best project...{" "}
          </TextArea>
          </Form.Item>
        </div>
              <div className='create_toukan_button_section'>
                <button className='create_toukan_button'>Back</button>
                <button className='create_toukan_button'>Create New Airdrop</button>
              </div>
            </form>
          </div>
          <footer>
            <div className='footer container'>
              <p>Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via <span>Binance Academy</span></p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default CreateAirdrop
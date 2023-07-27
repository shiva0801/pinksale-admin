import React, { useState } from 'react'
import '../DeFiLaunchpadInfo/DeFiLaunchpadInfo.css'
import {  Form, Input, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { addLounchPadData, clearAllForm,  validateForm2  } from '../../../App/redux/features/lounchPad/LounchPadSlice';

const DeFiLaunchpadInfo = () => {
    const [form] = Form.useForm()
    const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

    const dispatch = useDispatch();
   
    const validate = () => {
        // form.validateFields().then(values => {
        //     dispatch(addLounchPadData(values)); 
        //     dispatch(validateForm2());
        //   });
        dispatch(addLounchPadData({lounchpadForm : 2}));
    }

   
    return (
        <div className='difilaunchpad_section'>
               <Form form={form} onFinish={validate}>
                <div className='presale_rate'>
                    <p style={{ color: "#FA6200" }}>(*) is required field</p>
                    <p><strong>Presale rate</strong></p>
                    <Form.Item
                            name="presaleRate"
                            rules={[{ required: true, message: 'presale rate cannot be blank'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                    <p style={{ color: "#3298dc" }}>If I spend 1 BNB how many tokens will I receive?</p>
                </div>
                <div className='whitelist'>
                    <p><strong className='header_text'>Whitelist</strong></p>
                    <div className='disable_enable'>
                    <Form.Item
                            name="whitelist"
                        >
                    <Radio.Group onChange={onChange} value={value} defaultValue={1}>
                        <Radio  value={1}>
                            Disabled
                        </Radio>
                        <Radio defaultChecked value={2} >
                            Enable
                        </Radio>
                        </Radio.Group>
                        </Form.Item>
                        <p style={{ color: "#3298dc" }} >You can enable/disable whitelist anytime.</p>
                    </div>
                </div>
                <div className='bnb_description'>
                    <div className='bnb_description_left_main'>
                        <label htmlFor="Softcap (BNB)*">Softcap (BNB)<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="softcap"
                            rules={[{ required: true, message: 'Softcap cannot be blank'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                        <div>

                        </div>

                    </div>
                    <div className='bnb_description_right_main'>
                        <label htmlFor="Softcap (BNB)*">HardCap (BNB)<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="hardcap"
                            rules={[{ required: true, message: 'Hardcap cannot be blank'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                    </div>
                </div>
                <div className='bnb_description'>
                    <div className='bnb_description_left_main'>
                        <label htmlFor="Softcap (BNB)">Minimum buy (BNB)<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="minimumbuy"
                            rules={[{ required: true, message: 'Minimum buy must be positive number'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                    </div>
                    <div className='bnb_description_right_main'>
                        <label className='softcap' htmlFor="Softcap (BNB)*">Maximum buy (BNB)<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="maximumbuy"
                            rules={[{ required: true, message: 'Maximum buy cannot be blank'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                    </div>
                </div>
                <div className='bnb_description'>
                    <div className='bnb_description_left_main'>
                        <label htmlFor="Softcap (BNB)*">Refund type</label>
                        <Form.Item
                            name="refundtype"
                            rules={[{ required: true, message: 'Please endgfxfxawr the presale rate'}]}
                        >
                            <Input type={"text"} placeholder="10000000" />
                        </Form.Item>
                    </div>
                    <div className='bnb_description_right_main'>
                        <label className='softcap' htmlFor="Softcap (BNB)*">Router<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="router"
                            rules={[{ required: true, message: 'Softcap cannot be blank'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                    </div>
                </div>
                <div className='bnb_description'>
                    <div className='bnb_description_left_main'>
                        <label htmlFor="Softcap (BNB)*">liquidity (%)<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="liquidity"
                            rules={[{ required: true, message: 'Liquidity cannot be blank'}]}
                        >
                            <Input type={"text"} placeholder="10000000" />
                        </Form.Item>
                    </div>
                    <div className='bnb_description_right_main'>
                        <label className='softcap' htmlFor="Softcap (BNB)*">listing rate<span style={{ color: "#FA6200" }}>*</span></label>
                        <Form.Item
                            name="listingRate"
                            rules={[{ required: true, message: 'Listing rate cannot be blank'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                        <p style={{ color: "#3298dc" }}>1 BNB = 0 MINI</p>
                    </div>
                </div>
                <div className='liquidity_percentage_text'>
                    <p>Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)</p>
                    <p>If I spend 1 BNB on how many tokens will I receive? Usually this amount is lower than presale rate to allow for a higher listing price on</p>
                </div>
                <div className='select_time_section'>
                    <p>Select start time & end time (UTC)</p>
                    <div className='bnb_description'>
                        <div className='bnb_description_left_main'>
                            <label htmlFor="Softcap (BNB)*">Start time (UTC)<span style={{ color: "#FA6200" }}>*</span></label>
                            <Form.Item
                            name="startTimeStamp"
                            rules={[{ required: true, message: 'Please select presale starting date '}]}
                        >
                            <Input type={"date"}  />
                        </Form.Item>
                            <p style={{ font: "14px", fontWeight: "400", color: "#3298dc" }}>The duration between start time and end time must be less than 10080 minutes</p>
                        </div>
                        <div className='bnb_description_right_main'>
                            <label className='softcap' htmlFor="Softcap (BNB)*">End time (UTC)<span style={{ color: "#FA6200" }}>*</span></label>
                            <Form.Item
                            name="endTimeStamp"
                            rules={[{ required: true, message: 'Please select presale end date'}]}
                        >
                            <Input type={"date"}  />
                        </Form.Item>
                        </div>
                    </div>
                </div>
                <div className='liquidity_lockup_section'>
                    <label htmlFor="Liquidity lockup ">Liquidity lockup (minutes)<span style={{ color: "#FA6200" }}>*</span></label>
                    <Form.Item
                            name="listingrate"
                            rules={[{ required: true, message: 'Lock up time must be greater than 5 minutes'}]}
                        >
                            <Input type={"number"} placeholder="10000000" />
                        </Form.Item>
                </div>
                </Form>
            <div className='back_and_next_button_section'>
                <div className='create_launchedpad_text'>
                  <p>Need 0 MINI to create launchpad.</p>
                </div>
                <div className='back_and_next_button'>
                    <button className='back_button'onClick={() => {
                       dispatch(addLounchPadData({lounchpadForm : 0}))
                    }}>Back</button>
                    <button className='next_button' onClick={() => {
                        validate()
                    }}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default DeFiLaunchpadInfo
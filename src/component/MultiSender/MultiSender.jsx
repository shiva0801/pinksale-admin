import React, { useState, useRef } from 'react';
import './MultiSender.css';
import { Space, Steps } from 'antd';
import { useSelector } from 'react-redux';
import { lounchPadFormSelector } from '../selector/selector';
import { AiOutlineCopy } from 'react-icons/ai';

const MultiSender = () => {
  const [csvFile, setCSVFile] = useState(null);
  const [csvContent, setCSVContent] = useState('');
  const fileInputRef = useRef(null);

  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    setCSVFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setCSVContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container step-container">
      <Steps
        size="large"
        current={0}
        items={[
          {
            title: 'Add Your Allocation',
            description: 'Enter the token address and verify',
          },
          {
            title: 'Confirmation',
            description: 'Let review your information',
          },
        ]}
      />
      <div className="token_address_container">
        <form>
          <label htmlFor="tokenaddress">Token address</label>
          <input type="text" placeholder="EX:" />
          <p>
            Pink Multi-sender allows you to send ERC20 token in batch by easiest way. You can enter token address to
            send specific token or leave it blank to send chain token such as BNB....
          </p>
          <div className="allocation_section">
            <label htmlFor="tokenaddress">Allocations*</label>
            <textarea
              name=""
              id="allocation"
              placeholder=" Insert Allocation: Separate with line breaks, by format address amount or address amount"
              value={csvContent}
              style={{ resize: `vertical` }}
              onChange={(e) => {
                setCSVContent(e.target.value)
              }}
            ></textarea>
            <p style={{ color: '#FA6200' }}>Recipients allocation is required</p>
            <div className="choose_file_section">
              <input type="file" onChange={handleCSVUpload} required ref={fileInputRef} style={{ display: 'none' }} />
              <button className="csv_file_button" onClick={() => fileInputRef.current.click()}>
                Or choose from CSV file
              </button>
              <button className="sample_csv_text_utton">Sample CSV file</button>
            </div>
          </div>

          <div className="alert_messege_section_bottom">
            Please exclude <strong>0x39D3653Be6F64427fa82C9B02D8669c3D4339F85</strong>{' '}
            <span className="copy_icon">
              <AiOutlineCopy />
            </span>{' '}
            from fees, rewards, max tx amount to start sending tokens
          </div>
          <div className="next_button_section">
            <button className="button_next">Next</button>
          </div>
        </form>
      </div>
      <div className="footer container">
        <p>
          Disclaimer: MetaSale will never endorse or encourage that you invest in any of the projects listed and
          therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own
          research and seek financial advice from a professional. More information about (DYOR) can be found via{' '}
          <span>Binance Academy</span>
        </p>
      </div>
    </div>
  );
};

export default MultiSender;

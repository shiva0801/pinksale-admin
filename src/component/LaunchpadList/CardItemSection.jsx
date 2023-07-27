import React, { useEffect, useState } from "react";
import Affiliate from "./Affiliate/Affiliate";
import CardItem from "./cards/CardItem";
import { Input, Select } from "antd";
import { getMultipleIco, icoArray } from "../../App/redux/utils/contractUtils";
const CardItemSection = () => {
  const { Option } = Select;
  const [active, setActive] = useState(1);
  const [icoData, seticoData] = useState(null)

  const hendleActive = (val) => {
    setActive(val);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const getData = async () => {
    const data = await getMultipleIco(icoArray);
    console.log("here is ico aaray", data)
    seticoData(data);
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  return (
    <>
      <div className="main_input_box">
        <div className="main_input_box-left-col">
          <Input placeholder="Enter token name and token symbol" />
        </div>

        <div className="fillterVal">
          <div className="subFillterVal">
            <label>Filter By</label>
            <Select defaultValue="No Filter" onChange={handleChange}>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
            </Select>
          </div>
          <div className="subFillterVal">
            <label>Pool Type</label>
            <Select defaultValue="No Filter" onChange={handleChange}>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
            </Select>
          </div>
          <div className="subFillterVal">
            <label>Sort By</label>
            <Select defaultValue="No Filter" onChange={handleChange}>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
            </Select>
          </div>
          <div className="subFillterVal">
            <label>Chain</label>
            <Select defaultValue="No Filter" onChange={handleChange}>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
              <Option value="No Filter">No Filter</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="card_Item">
        <Affiliate />{icoData ? (
  icoData.map((curElm, index) => (
    <React.Fragment key={curElm + index}>
      <CardItem data={curElm} />
    </React.Fragment>
  ))
) : (
  <></>
)}
        

        <Affiliate />
      </div>
    </>
  );
};

export default CardItemSection;

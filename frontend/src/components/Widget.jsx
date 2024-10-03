/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useGetByIdQuery, useGetCompaniesQuery } from "../redux/service/adminSlice";
import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/keyboardArrowUp";

const Widgets = ({name,count,see,icon, path}) => {
  const { isError, error, data, isLoading } = useGetCompaniesQuery();
  const navigate = useNavigate();

  const handleOnclick = (path) => {

    navigate(path)
    
  }

  if(!data) {
    return 'Loading...'
  }


  return (
    <div className="widget" onClick={() => {handleOnclick(path)}}>
      <div className="left" style={{display: "flex", justifyContent: 'center'}}>
        <span className="title">{name}</span>
        {/* <span className="counter"> {count} </span> */}
        {/* <span className="link"> {icon}</span> */}
      </div>
      <div className="right" style={{display: "flex", justifyContent: 'center'}}>
      <span className="counter"> {count} </span>
        {/* <div className="percentage"> */}
            {/* <KeyboardArrowUpIcon />
            200 % */}
        {/* </div> */}
        {/* <span className="icon" > {icon}</span> */}
      </div>
    </div>
  );
};

export default Widgets;




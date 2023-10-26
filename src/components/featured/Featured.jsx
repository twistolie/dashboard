import { CircularProgressbar } from "react-circular-progressbar";
import "./featured.scss";
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
    <div className="top">
      <h1 className="title"> Total Revenue</h1>
     <MoreVert fontSize="small"/>
    </div>
    <div className="bottom">
       <div className="featuredChart">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
       </div>
       <p className="title">Total sales made today</p>
       <p className="amount">Ksh. 16,000</p>
       <p className="desc"> 
       Previous transactions processing. Last payments may not be included.
       </p>
       <div className="summary">
         <div className="item">
          <div className="itemTitle">Target</div>
           <div className="itemResult negative">
             <KeyboardArrowDown/>
             <div className="resultAmount">50K</div>
           </div>
         </div>
         <div className="item">
          <div className="itemTitle">Last Week</div>
           <div className="itemResult positive">
             <KeyboardArrowUp/>
             <div className="resultAmount">30K</div>
           </div>
         </div>
         <div className="item">
          <div className="itemTitle">Last Month</div>
           <div className="itemResult positive">
             <KeyboardArrowUp/>
             <div className="resultAmount">40K</div>
           </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default Featured;




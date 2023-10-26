import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
             <div className="item">
                <img
                 src="https://fdn2.gsmarena.com/vv/bigpic/huawei-honor-7x.jpg"
                  alt=""
                   className="itemImg"/>
                   <div className="details">
                    <h1 className="itemTitle">Oliver Twist</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">ots@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">+254 7274 100 014</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">Mawa Court, Ngara</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">Kenya</span>
                    </div>
                   </div>
                 </div>
              </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending Last 6 Months"/>
          </div>
        </div>
        <div className="bottom">
       {/* <h1 className="title">Last Transactions</h1>*/}
          <List/>
         </div>
      </div>
    </div>
  );
};

export default Single;

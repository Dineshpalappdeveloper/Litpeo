import "./App.css"
import logo2 from "./logo2.png"
import dashboardbig from "./logos/dashboard (1).png"
import dashboardSamall from "./logos/dashboard.png"
import product from "./logos/box.png"
import Earning from "./logos/income.png"
import orders from "./logos/completed-task.png"
import user from "./logos/user.png"
import balance from './logos/balance.png'
import totalsell from "./logos/handbag.png"
import products1 from "./logos/box.png"
import income from "./logos/salary.png"
import Promote from "./logos/megaphone.png"
import help from "./logos/question.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RecordCard from "./component/generic/RecordCard";
import DataCard from "./component/generic/DataCard";
function App() {
  return (
    <>
      <div className="superParent">

        <div className="leftAside">
          <div className="mainTab">
            <img className="mainlogo" src={dashboardbig} alt="logo" />
            <span className="dashbordText"> Dashboard</span>
          </div>


          <div className="allTabs">
            <div className="subTabs">
              <div className="activeTab">
                <img src={dashboardSamall} alt="logo" className="tablogo" />
                <span>Dashboard</span>
              </div>
              <div className="unActiveTab">
                <div className="unActivecon">
                  <img src={product} alt="logo" className="tablogo" />
                  <span>Product</span>

                </div>
                <div>
                  <span>
                    {">"}

                  </span>
                </div>
              </div>
              <div className="unActiveTab">
                <div className="unActivecon">
                  <img src={user} alt="logo" className="tablogo" />
                  <span>Customber</span>

                </div>
                <div>
                  <span>
                    {">"}

                  </span>
                </div>
              </div>
              <div className="unActiveTab">
                <div className="unActivecon">
                  <img src={income} alt="logo" className="tablogo" />
                  <span>Income</span>

                </div>
                <div>
                  <span>
                    {">"}

                  </span>
                </div>
              </div>
              <div className="unActiveTab">
                <div className="unActivecon">
                  <img src={Promote} alt="logo" className="tablogo" />
                  <span>Promote</span>

                </div>
                <div>
                  <span>
                    {">"}

                  </span>
                </div>
              </div>
              <div className="unActiveTab">
                <div className="unActivecon">
                  <img src={help} alt="logo" className="tablogo" />
                  <span>Help</span>

                </div>
                <div>
                  <span>
                    {">"}

                  </span>
                </div>
              </div>

            </div>
            <div className="ActiveUser">
              <div className="userDetails">
                <div>
                  <img src={user} alt="" className="userPic" />
                </div>
                <div className="nameCon">
                  <span>Dinesh</span>
                  <span>Project Manager</span>
                </div>
              </div>
              <div>
                <span className="userMoreInfo">
                  <ArrowDropDownIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* hello bhai  */}
        <div className="rightAside">
          <header>
            <div className="welcomeUser">{
              "Hello Shahrukh👋"
            }
            </div>
            <div>
              <input placeholder="🔍 Search" className="searchInput" />
            </div>
          </header>
          <section className="records">
            <RecordCard bgcolor="rgb(201, 246, 201)" img={Earning} title="Earing" price="$198k" status="↑37.8%" statusColor="green" />
            <RecordCard bgcolor=" rgb(228, 185, 228)" img={orders} title="Orders" price="$2.4k" status="↓2%" statusColor="red" />
            <RecordCard bgcolor="rgb(203, 203, 250)" img={balance} title="Balance" price="$2.4k" status="↓2%" statusColor="red" />
            <RecordCard bgcolor="rgb(245, 181, 181)" img={totalsell} title="Total Sells" price="$89k" status="↑11%" statusColor="green" />
          </section>
          <section className="overviewparent">
            <div className="overviewMain">
              <div className="overHeader">
                <div>
                  <span className="overviewText">OverView</span>
                  <br />
                  <span className="gray">monthly Earning</span>
                </div>
                <div className="quelity">{"Qualitely "}
                  <ArrowDropDownIcon />
                </div>
              </div>
              <div className="overviewData">
                <DataCard bgColor="gray" size="100px" month="Jan" />
                <DataCard bgColor="gray" size="70px" month="Feb" />
                <DataCard bgColor="gray" size="135px" month="Mar" />
                <DataCard bgColor="gray" size="120px" month="Apr" />
                <DataCard bgColor="gray" size="130px" month="May" />
                <DataCard bgColor="gray" size="90px" month="Jun" />
                <DataCard bgColor="gray" size="120px" month="Jul" />
                <DataCard bgColor="blue" size="145px" month="Aug" />
                <DataCard bgColor="gray" size="130px" month="Sep" />
                <DataCard bgColor="gray" size="125px" month="Oct" />
                <DataCard bgColor="gray" size="110px" month="Nov" />
                <DataCard bgColor="gray" size="128px" month="Dec" />

              </div>
            </div>
            <div className="CoustombersParent">
              <span className="headinds">Custombers</span>
              <br />
              <span>Custombers that buy product</span>
              <div className="overRoll">
                <img src={logo2} alt="loading" className="overrollImage" />

              </div>
            </div>
          </section>
          <section className="productParent">
            <div className="ProductDetails">
              <span className="strong">Product Sell</span>
              <span className="gray"> Product Name </span>
              <div className="singleProduct">
                <img src={product} alt="logo" className="productlogo" />
                <div className="productBrand">
                  <span className="strong">Abstact 3D</span>
                  <br />
                  <span className="gray"> hello i am dinesh kumar </span>
                </div>
              </div>
              <div className="singleProduct">
                <img src={products1} alt="logo" className="productlogo" />
                <div className="productBrand">
                  <span className="strong">Abstact 3D</span>
                  <br />
                  <span className="gray"> hello i am dinesh kumar </span>
                </div>
              </div>
            </div>

            <div className="ProductData">
              <div className="searchParent1">
                <span className="gray">Stock</span>
                <span className="gray">Preice</span>
                <span className="gray">Total Sales</span>

              </div>
              <div className="searchParent1">
                <h4>32 in Stoce</h4>
                <h4>$45.99</h4>
                <h4>20</h4>

              </div>
              <div className="searchParent1">
                <h4>32 in Stoce</h4>
                <h4>$45.99</h4>
                <h4>20</h4>

              </div>


            </div>

          </section>
        </div>
      </div>

    </>
  );
}

export default App;

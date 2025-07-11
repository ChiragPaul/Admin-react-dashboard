import { useContext } from "react";
import "./ContentTop.css";
import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images";
import menuIcon from "../../assets/icons/Menu1.svg";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => toggleSidebar()}
        >
          <img src={menuIcon} alt=""></img>
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btn">
        <button type="button" className="search-button-content-top-btn">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} />
          <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;

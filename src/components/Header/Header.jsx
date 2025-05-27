import "./Header.css";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="search-bar">
          <Search className="search-icon" size={20} />
          <input type="text" placeholder="Search" readOnly />
          <Bell className="search-bell" size={20} />
        </div>
      </div>
      <div className="header-right-wrapper">
        <div className="header-right">
          <div className="avatar">
            <img
              src="https://em-content.zobj.net/source/icons8/373/man-curly-hair_1f468-200d-1f9b1.png"
              alt="Avatar"
              className="avatar-icon"
            />
          </div>

          <div className="add-user">
            <span className="add-icon">+</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Profile from "../../components/profile";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div></div>
        <span>Quản lý hoạt động theo khu vực</span>
      </div>
      <Profile />
    </div>
  );
};

export default Header;

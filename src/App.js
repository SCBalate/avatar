import logo from './logo.svg';
import './App.css';
import Avatar from './Component/Avatar/Avatar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {avatars} from "../src/Constants/Constant"
function App() {
  return (
    <div className="App" >
      {avatars.map((avatar, index) => (
  <Avatar
    key={index}
    size={avatar.size}
    alt={avatar.alt}
    tooltip={avatar.tooltip}
    img={avatar.img}
  />
))}


    </div>
  );
}

export default App;

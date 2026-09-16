import "./index.css";
import Todo from "./components/Todo";
import Tabs from "./components/Tabs";
import Accordian from "./components/Accordian";
import Modal from "./components/Modal";
import StarRating from "./components/StarRating";
import ProgressBar from "./components/ProgressBar";
import Toast from "./components/Toast";
import Dropdown from "./components/Dropdown";
import Autocomplete from "./components/Autocomplete";
import Pagination from "./components/Pagination";
import Carousel from "./components/Carousel";
import MultiSelect from "./components/MultiSelect";
import OTP from "./components/OTP";
import FileUpload from "./components/FileUpload";
import NestedComments from "./components/NestedComments";
// import Home from "./optimization/context/Home";
import UserProvider from "./optimization/context/UserProvider";
import MemoComponent from "./optimization/memo/MemoComponent";
import CallbackComponent from "./optimization/callback/CallbackComponent";
import ParentMemo from "./optimization/reactmemo/ParentMemo";
import RefComponent from "./optimization/useref/RefComponent";
// import Home from "./optimization/codeSplitting/Home";
import ConsumeHook from "./optimization/customhook/ConsumeHook";
import Home from "./optimization/apiresponse/Home";
import TransferList from "./components/TransferList";
import DataTable from "./components/DataTable";
import InfiniteScroll from "./components/InfiniteScroll";
import ShoppingCart from "./components/ShoppingCart";
export default function App() {
  return (
    <div>
      {/* <StarRating /> */}
      {/* <Todo /> */}
      {/* <Tabs/> */}
      {/* <Accordian /> */}
      {/* <Modal /> */}
      {/* <ProgressBar value={100}/> */}
      {/* <Toast message={"Hello React"} type={"success"} duration={5000} /> */}
      {/* <Dropdown options={["React","Next","Angular"]} /> */}
      {/* <Autocomplete options={["React", "Vue", "Angular", "Svelte", "Next.js"]}/> */}
      {/* <Pagination /> */}
      {/* <Carousel /> */}
      {/* <OTP/> */}
      {/* <MultiSelect /> */}
      {/* <FileUpload/> */}
      {/* <NestedComments /> */}
      {/* <Home /> */}
      {/* <MemoComponent/> */}
      {/* <CallbackComponent /> */}
      {/* <ParentMemo /> */}
      {/* <RefComponent /> */}
      {/* <Home /> */}
      {/* <ConsumeHook/> */}
      {/* <Home /> */}
      {/* <TransferList /> */}
      {/* <DataTable/> */}
      {/* <InfiniteScroll /> */}
      <ShoppingCart/>
    </div>
  );
}

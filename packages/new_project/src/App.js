import logo from './logo.svg';
import './App.css';
import myFirstApi from "@yogesh/my-first-api";
import reTestPackage from "@yogesh/re_test_package";

function App() {
  return (
    <>
      {
        reTestPackage(),
        myFirstApi('string', 1)
      }
    </>
  )
}

export default App;

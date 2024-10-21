import Fourthbox from "./component/Fourthbox"
import Heading from "./component/Heading"
import Middlebox from "./component/Middlebox"
import Products from "./component/Products"
import SecondReact from "./component/SecondReact"
import Thirdbox from "./component/Thirdbox"
import "./global.css"
const App = () =>{
    return(
        <div>
            <SecondReact></SecondReact>
            <Middlebox/>
            <Thirdbox/>
            <Fourthbox/>
            <Heading/>
            <Products/>
        </div>
    )
}

export default App 
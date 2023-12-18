import { RouterProvider } from "react-router-dom"
import Routers from "./Route/index"
import AnimationContextProvider from "./Context/Animation"
import { useContext } from "react"
import {LightMode} from "./Context/lightMode"


function App() {
  const { isLight} = useContext(LightMode)

  return (
      <div className={` ${isLight ? "" : "bg-PrimaryBg text-primaryTextWhite" }`}>      
        <AnimationContextProvider>
          <RouterProvider router={Routers}></RouterProvider>
        </AnimationContextProvider>
      </div>

  )
}

export default App

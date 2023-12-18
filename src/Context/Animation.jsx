import { createContext, useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const AnimationContext = createContext();

const AnimationContextProvider = ({children}) => {
    return (
      <AnimationContext.Provider value={useEffect(() => {
				AOS.init({
					once : true,
					duration: 1500,
				})
			},[])}>
        {children}
      </AnimationContext.Provider>
    )
}

export const Animation = AnimationContext;
export default AnimationContextProvider;
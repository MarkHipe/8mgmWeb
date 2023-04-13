import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavCon from "./components/NavCon";
import OurProducts from "./components/OurProducts";
import { InView } from "react-intersection-observer";
function ProductMainCon() {
  const [inview, setinview] = useState(0);
  const [active, setactive] = useState("products");

  const nav = useRef(null);

  return (
    <>
      <Con className="">
      
      <InView onChange={setinview}>
            <div ref={nav}>
              <NavCon active={setactive} currActive={active} inView={inview} />
            </div>
          </InView>
      <div className="con">
        <div className="OurProducts" >
          <OurProducts />
        </div>
      </div>
       
      </Con>
    
    </>
  );
}
const Con = styled.div`
 width: 100vw;
& .con{
    padding-top: 4rem;
}
`;

export default ProductMainCon;

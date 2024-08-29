// import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
//   AccordionItemState,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
// import "./Values.css";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import data from "../../src/utils/accordian.jsx";
// import { useState } from "react";
// import "../../src/App.css";

// function Values() {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const handleAccordionClick = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(null);
//     } else {
//       setExpandedIndex(index);
//     }
//   };
//   return (
//     <div>
//       <section className="v-wrapper">
//         <div className="paddings innerWidth flexCenter v-container">
//           {/* Left-Side  */}
//           <div className="v-left">
//             <div className="image-container">
//               <img src="./value.png" alt="" />
//             </div>
//           </div>

//           {/* Right-Side  */}
//           <div className="flexColStart v-right">
//             <span className="orangeText">Our Values</span>
//             <span className="primaryText">Value We Give to You</span>
//             <span className="secondaryText">
//               We always ready to help by providijng the best services for you.
//               <br />
//               We beleive a good blace to live can make your life better
//             </span>

//             <Accordion className="accordian" allowMultipleExpanded={false}>
//               {data.map((item, i) => {
//                 // const [className, setClassName] = useState(null);
//                 return (
//                   <AccordionItem
//                     className="accordionItem"
//                     key={i}
//                     uuid={i}
                    
//                   >
//                     <AccordionItemHeading>
//                       <AccordionItemButton
//                         className="accordionButton"
//                         onClick={() => handleAccordionClick(i)}
//                       >
//                         {/* <AccordionItemState> */}
//                         {/* {({ expanded }) => expanded ? setClassName("active") : setClassName("collapsed")} */}
//                         {/* </AccordionItemState> */}
//                         <div className="flexCenter icon">{item.icon}</div>
//                         <span className="primaryText">{item.heading}</span>
//                         <div className="flexCenter icon">
//                           <MdOutlineArrowDropDown size={20} />
//                         </div>
//                       </AccordionItemButton>
//                     </AccordionItemHeading>
//                     {expandedIndex === i ? (
//                       <AccordionItemPanel>
//                         <p className="secondryText">{item.detail}</p>
//                       </AccordionItemPanel>
//                     ) : null}
//                   </AccordionItem>
//                 );
//               })}
//             </Accordion>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Values;

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Values.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../src/utils/accordian.jsx";
import { useState } from "react";

function Values() {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* Left-Side  */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>

          {/* Right-Side  */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Values</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              <br />
              We beleive a good blace to live can make your life better
            </span>

            <Accordion className="accordian" allowMultipleExpanded={false} allowZeroExpanded>
              {data.map((item, i) => {
                return (
                  <AccordionItem className="accordionItem" uuid={i} key={item.uuid}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordionButton" >
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Values;
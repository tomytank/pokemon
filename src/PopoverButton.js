import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import weakImg from './img/weak.png';

function PopoverButton(props) {

// function PopoverButton(props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  console.log("the props.text is:",props.text );
  console.log("The props.id is ", props.id);
  // const weakImg = "./"
  // const idTarget = 
  return (
    <div>
      
      <Button id={"pokemon"+props.id} target="1" type="button">
       <img src={weakImg} style={{width: 20, height: 20}} /> {/* {props.text} */}
      </Button>
      <Popover
        placement="bottom"
        isOpen= {popoverOpen}
        // target= {props.id}
        target={"pokemon"+props.id}
        toggle= {toggle}
      >
        <PopoverHeader>{props.popoverTitle}</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </div>
  );
};
// };
export default PopoverButton;

// import React, { useState } from "react";
// import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

// const PopoverButton = props => {
//   const [popoverOpen, setPopoverOpen] = useState(false);

//   const toggle = () => setPopoverOpen(!popoverOpen);
//   console.log(props);
//   return (
//     <div>
//       <Button id="uniqueid" type="button">
//         Some text
//       </Button>
//       <Popover
//         placement="bottom"
//         isOpen={popoverOpen}
//         target="uniqueid"
//         toggle={toggle}
//       >
//         <PopoverHeader />
//       </Popover>
//     </div>
//   );
// };

// export default Popover;


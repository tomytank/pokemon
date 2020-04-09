import React, { useState } from "react";

import PropTypes from "prop-types";
//import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import PopoverButton from "./Popover";

function Pokemon(props) {
//   const Example = props => {
//     const [popoverOpen, setPopoverOpen] = useState(false);

//     const toggle = () => setPopoverOpen(!popoverOpen);

//     return (
//       <div>
//         <Button id="Popover1" type="button">
//           Launch Popover
//         </Button>
//         <Popover
//           placement="bottom" 
//           isOpen={popoverOpen}
//           target="Popover1"
//           toggle={toggle}
//         >
//           <PopoverHeader>Popover Title</PopoverHeader>
//           <PopoverBody>
//             Sed posuere consectetur est at lobortis. Aenean eu leo quam.
//             Pellentesque ornare sem lacinia quam venenatis vestibulum.
//           </PopoverBody>
//         </Popover>
//       </div>
//     );
//   };

//   console.log(props);
//   const singlePoke = props;
//   console.log(singlePoke.pokemon[1]);
  return (
    <>
      {props.pokemon.map(pokemon => (
        <div key={pokemon.id} className="pokemon">
          <img src={pokemon.img} alt={pokemon.name} />
          <div>
            {/*using 'magical' and operator*/}
            <h3>{pokemon.name}</h3>
            <p>
              <p>Pokemon Evolutions: </p>
              {pokemon.next_evolution &&
                pokemon.next_evolution.map(evo => {
                  return <p>{evo.name}</p>;
                })}
            </p>
            {/* <Button>Test</Button> */}
            <Popover  />
            <div>{/*Put Popover here*/}</div>
          </div>
          {/*<Popover text={pokemon.weakness} />
          <Popover text={pokemon.type} /> */}
        </div>
      ))}
    </>
  );
}
//Using Tenary operator for above:
/* <p>Pokemon Evolutions: </p>
{pokemon.next_evolution
  ? pokemon.next_evolution.map(evo => {
      return <p>{evo.name}</p>;
    })
  : null} */

// PropTypes to add here
Pokemon.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      num: PropTypes.string,
      type: PropTypes.arrayOf(
        PropTypes.oneOf([
          "Grass",
          "Poison",
          "Fire",
          "Flying",
          "Water",
          "Bug",
          "Normal",
          "Electric",
          "Psychic",
          "Ground",
          "Fighting",
          "Rock",
          "Ice",
          "Ghost",
          "Dragon"
        ])
      ),
      next_evolution: PropTypes.arrayOf(
        PropTypes.shape({
          num: PropTypes.string,
          name: PropTypes.string
        })
      )
    })
  )
};

Pokemon.defaultProps = {
  //Default Prop if data fields are not laoded for whatever reason
  // the following could be a blank display form or a set of dummy data
  //Default response
  pokemon: [
    {
      id: 16,
      num: "016",
      name: "Pidgey",
      img: "http://www.serebii.net/pokemongo/pokemon/016.png",
      type: ["Normal", "Flying"]
    }
  ]
};
export default Pokemon;

import React, { useState, useRef } from 'react';
import './modal.css';

export default function Modal(props) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instruction, setInstruction] = useState('');
  const dishName = useRef();
  const Ingredients = useRef();
  const Instruction = useRef();
  const len = props.dataList.length;

  const handleSubmitForm = e => {
    e.preventDefault();

    const dishName_form = dishName.current.value;
    const Ingredients_form = dishName.current.value;
    const Instruction_form = dishName.current.value;

    console.log(len + 1);
    props.addList([
      ...props.dataList,
      {
        title: dishName_form,
        id: len + 1,
        ingredients: [Ingredients_form],
        instruction: Instruction_form
      }
    ]);
    props.handleClose();
    alert('Submitted');
  };

  return (
    <div>
      <div className="modal-wrapper">
        <div className="modal-header">
          <div className="header">
            <h1>Please Add data</h1>
            <button onClick={props.handleClose} className="modal-header-close">
              X
            </button>
          </div>
          <div>
            <form className="form" onSubmit={handleSubmitForm}>
              Dish name
              <input
                type="text"
                placeholder="Enter Recipe.."
                ref={dishName}
                required="true"
              />
              Ingredients
              <input
                type="text"
                placeholder=" Ingredients.."
                ref={Ingredients}
                required="true"
              />
              Instruction
              <input
                type="text"
                placeholder="Instruction.."
                ref={Instruction}
                required="true"
              />
              <button>Submit</button>
              <button onClick={props.handleClose}>Close</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

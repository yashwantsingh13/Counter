import { useRef } from "react";
import { useDispatch } from "react-redux"

const Controls=()=>{


  const dispatch=useDispatch();
const inputElement=useRef();



  const handleIncrement=()=>{
dispatch({type:"INCREMENT"});
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT"});
  }
  const handleAdd=()=>{

    dispatch({type:"ADD",payload:{
      num:inputElement.current.value
    }});
    inputElement.current.value="";
  }
  const handleSub=()=>{

    dispatch({type:"SUBTRACT",payload:{
      num:inputElement.current.value
    }});
    inputElement.current.value="";
  }
  const handlePivacy=()=>{
    dispatch({type:"PRIVACY"});
  }
return(
  <>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>Increment</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={handleDecrement}>Decrement</button>
      </div>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="Enter Number" className="number-input" 
        ref={inputElement}
        />
        <button type="button" class="btn btn-info" onClick={handleAdd}>Add</button>
        <button type="button" class="btn btn-danger" onClick={handleSub}>Subtract</button>
        <button
          type="button"
          class="btn btn-warning"
        onClick={handlePivacy}
        >
          Privacy
        </button>
      </div>
      </>
)
}
export default Controls
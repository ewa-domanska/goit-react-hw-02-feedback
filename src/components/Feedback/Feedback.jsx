import {Section} from "../Section/Section";

export const Feedback = ({type, action}) => {
  return (
    <div>
      <button onClick={action}>{type}</button>
    </div>
  );
};

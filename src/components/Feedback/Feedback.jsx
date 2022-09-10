export const Feedback = ({type, action}) => {
  return (
    <div style={{padding: '5px'}}>
      <button onClick={action}>{type}</button>
    </div>
  );
};

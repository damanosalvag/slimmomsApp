const Calculator = () => {
  return (
    <form>
      <label>
        <span>Height - cm</span>
        <input type="text" />
      </label>
      <label>
        <span>Desired Weight - kg</span>
        <input type="text" />
      </label>
      <label>
        <span>Age</span>
        <input type="number" />
      </label>
    </form>
  );
};

export default Calculator;

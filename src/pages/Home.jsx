import Calculator from "../components/Calculator";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="body">
      <Header />
      <h1>Calculate your daily calorie intake right now</h1>
      <Calculator />
    </div>
  );
};

export default Home;

// import logo from './logo.svg';
// import './App.css';
import propTypes from "prop-types";

function Food({name, picture, rating}){
  // console.log({fav});
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt = {name}/>
    </div>
  );
}

const 내가좋아하는음식 = [
  {
    id: 1,
    name:'snack',
    image:'https://cdn.imweb.me/thumbnail/20210129/c0ef61ea015ab.jpg',
    rating: 5,
  },
  {
    id: 2,
    name:'choco',
    image:'https://cdn.shopify.com/s/files/1/0404/8764/9433/products/png_20211026_124402_0000.png?v=1635232434',
    rating: 3,
  },
  {
    id: 3,
    name:'candy',
    image:'https://blog.galvanize.com/wp-content/uploads/2020/10/Candy-Crush-copy.jpg',
    rating: 2,
  }
];


function App() {
  return (
    <div>
      {내가좋아하는음식.map(  음식 => (  
        <Food key={음식.id} name={음식.name} picture={음식.image} rating={음식.rating}/> 
        ))}
    </div>

  );
}

Food.propTypes ={
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number,
}


export default App;

import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  //console.log(props);
  return (
    <div>
    <h3>I like {name}</h3>
    <h4>{rating}/5.0</h4>
    <img src = {picture} alt={name}/>
    </div>
  );
}
const foodLike = [
  {
    id : 1,
    name : 'Kimchi',
    image : 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fitempage3.auction.co.kr%2FDetailView.aspx%3Fitemno%3DB435716808&psig=AOvVaw0jWfPOcqc2QniCJ2ntQcck&ust=1612931219102000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICA5pX72-4CFQAAAAAdAAAAABAD',
    rating : 5

},
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fnewsimg.hankookilbo.com%2Fcms%2Farticlerelease%2F2020%2F06%2F11%2F202006111362061920_7.jpg&imgrefurl=https%3A%2F%2Fwww.hankookilbo.com%2FNews%2FRead%2F202006111362061920&tbnid=qbeM4f-L1UkOlM&vet=12ahUKEwik6L6y-9vuAhWF0IsBHejjA_UQMygBegUIARD-AQ..i&docid=2PTCBHrMmnz7QM&w=602&h=400&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=2ahUKEwik6L6y-9vuAhWF0IsBHejjA_UQMygBegUIARD-AQ',
    rating : 4.9
  },
  {
    id : 3,
    name : 'Bibimbap',
    image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2017%2F04%2F13%2Fabcf293fb7d0d73d61e274127ced7b931.jpg&imgrefurl=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6868375&tbnid=TOhWujY3e0lWLM&vet=12ahUKEwj-zO3J-9vuAhVI65QKHRWwCoAQMygBegUIARDcAQ..i&docid=Nd1HOuro7Gh1ZM&w=580&h=387&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=2ahUKEwj-zO3J-9vuAhVI65QKHRWwCoAQMygBegUIARDcAQ',
    rating : 3.2
  },
  {
    id : 4,
    name : 'Doncasu',
    image : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmp-seoul-image-production-s3.mangoplate.com%2F261364%2F728744_1583729569692_105900%3Ffit%3Daround%7C738%3A738%26crop%3D738%3A738%3B*%2C*%26output-format%3Djpg%26output-quality%3D80&imgrefurl=https%3A%2F%2Fwww.mangoplate.com%2Ftop_lists%2F1947_yetnal_donkatsu&tbnid=UlG25qXd9Da0XM&vet=12ahUKEwj0objc-9vuAhURB6YKHVvWArIQMygEegUIARDrAQ..i&docid=6vO77W0WUaRsrM&w=738&h=738&q=%EB%8F%88%EA%B9%8C%EC%8A%A4&ved=2ahUKEwj0objc-9vuAhURB6YKHVvWArIQMygEegUIARDrAQ',
    rating : 3.4
  },
  {
    id : 5,
    name : 'Kimbap',
    image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhomecuisine.co.kr%2Fhc10%2F83001&psig=AOvVaw2Xo-Vf8jFFyBHbGD7nZum2&ust=1612931387069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCameX72-4CFQAAAAAdAAAAABAD',
    rating : 4.2
  }
  
];

// function renderFood(dish) {
//   return <Food name = {dish.name} picture = {dish.image}/>;
// }

function App() {

  //console.log(foodLike.map(renderFood));
  // return <div className="App"/>;
  return( 
    <div>
    {
      foodLike.map(dish => <Food key={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>)
    }
    </div>
  );

}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;

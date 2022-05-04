import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
//setup vars
const author = 'Tyrus'
const title = 'En text om vad som helst...'
const img = "https://images-na.ssl-images-amazon.com/images/I/81Ynvpqm3KS._AC_UL604_SR604,400_.jpg" 

function BookList() {
  return (
  <section className='booklist'>
    <Book job='Developer'/>
    <Book title='Random title' number={22} />
  </section>
  );
}

const Book = (props) =>{
  //console.log(props);
  return (
  <article className='book'>
  <img src= {img} height= '50%' title={author} alt=''/>
  <h1>{title}</h1>
  <h4>{author}</h4>
  <p>{props.job}</p>
  <p>{props.title}</p>
  </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
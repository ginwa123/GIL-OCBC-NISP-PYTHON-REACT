import React from "react";
import CardStyle from "./Card.module.css"

interface Props {}



export const Card = (props: Props) => {
  return <div className={CardStyle.card}>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, distinctio saepe sint ipsum, sed consequatur sapiente asperiores, commodi dolorum ducimus quidem eligendi. Cumque voluptate laudantium ratione iste delectus culpa quo?</p>
  </div>;
};

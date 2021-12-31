import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      team: [
        {
          id: 1,
          name: "Adam Mark",
          img: "images/user-01.jpg",
          position: "FontEnd Developper",
          phone: "+212690093286",
          email: "amadmark@hotmail.com",
          website: "adammark.dev",
        },
        {
          id: 2,
          name: "Anas Tony",
          img: "images/user-02.jpg",
          position: "BackEnd Developper",
          phone: "+212628345579",
          email: "anastony1@gmail.com",
          website: "anastony.dev",
        },
        {
          id: 3,
          name: "Sara Raya",
          img: "images/user-03.jpg",
          position: "Mobile Developper",
          phone: "+212695887214",
          email: "sararaya@gmail.com",
          website: "sararaya.dev",
        },
        {
          id: 4,
          name: "Stephany Imene",
          img: "images/user-04.jpg",
          position: "DevOps",
          phone: "+212614556879",
          email: "stephanyimene@gmail.com",
          website: "stephanyimene.dev",
        },
        {
          id: 5,
          name: "Jack Rishard",
          img: "images/user-05.jpg",
          position: "FullStack Developper",
          phone: "+212655689114",
          email: "jackrishard@gmail.com",
          website: "jackrishard.dev",
        },
        {
          id: 6,
          name: "Maria eva",
          img: "images/user-06.jpg",
          position: "Softwaire enginer",
          phone: "+212614457855",
          email: "mariaeva@hotmail.com",
          website: "maria-eva.com",
        },
        {
          id: 7,
          name: "Hiba lark",
          img: "images/user-07.jpg",
          position: "Designer",
          phone: "+212688546712",
          email: "hibalark@gmail.com",
          website: "hibalark.com",
        },
        {
          id: 8,
          name: "Sofia Larson",
          img: "images/user-08.jpg",
          position: "IT Manager",
          phone: "+212610702548",
          email: "sofialarson@hotmail.com",
          website: "sofialarson.fr",
        },
      ],
    };
  }
  mapping(x) {
    const dataTeam = x.map((user) => {
      return (
        <div className="col-md-6 col-lg-4">
          <Card
            key={user.id}
            name={user.name}
            img={user.img}
            position={user.position}
            phone={user.phone}
            email={user.email}
            website={user.website}
          />
        </div>
      );
    });
    return dataTeam;
  }
  render() {
    // id , name , img , position , phone , email , website

    return (
      <div className="container">
        <div className="row">{this.mapping(this.state.team)}</div>
      </div>
    );
  }
}
export default Home;

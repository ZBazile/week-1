import React from 'react'
import Card from './components/Card'
import'./App.css'
function App() {
  const data =[
    {
        heading: "Western Conf RD 1: Mavericks vs. Clippers",
        image: "Mavericks vs. Clippers.jpg",
        url: "https://www.youtube.com/watch?v=9TUPZrwBzPE"
    },
    {
        heading: "Western Conf RD 1: Timberwolves vs. Suns",
        image: "public/Timberwolves vs. Suns.jpeg",
        url: "https://www.youtube.com/watch?v=O_0lyLYpGrg"
    },
    {
        heading: "Western Conf RD 1: Nuggets vs. Lakers",
        image: "LALvDEN.jpg",
        url: "https://www.youtube.com/watch?v=W0wpJcE3BJ4"
    },
    {
        heading: "Western Conf RD 1: Thunder vs. Pelicans",
        image: "/Thunder vs. Pelicans.jpeg",
        url: "https://www.youtube.com/watch?v=6nWXC7gpE1w"
    },
    {
        heading: "Eastern Conf RD 1: Celtics vs. Heat",
        image: "/HeatvsCeltics.jpg",
        url: "https://www.youtube.com/watch?v=--2R8NlYONU"
    },
    {
        heading: "Eastern Conf RD 1: Knicks vs. 76ers",
        image: "Knicks vs. 76ers.jpeg",
        url: "https://www.youtube.com/watch?v=uSBK_nFyA6Y"
    },
    {
        heading: "Eastern Conf RD 2: Pacers vs. Knicks",
        image: "Pacers vs. Knicks.jpeg",
        url: "https://www.youtube.com/watch?v=SzX-egU1-jw&pp=0gcJCdgAo7VqN5tD"
    },
    {
        heading: "Western Conf RD 2: Timberwolves vs. Nuggets",
        image: "public/Timberwolves vs. Nuggets.jpeg",
        url: "https://www.youtube.com/watch?v=qmQybtSUcyI"
    },
    {
        heading: "NBA Finals: Celtics vs. Mavericks - Game 1",
        image: "/CeltivsvMavs-GM1.jpeg",
        url: "https://www.youtube.com/watch?v=nDl28m9NfGc"
    },
    {
        heading: "NBA Finals: Celtics vs. Mavericks - Game 5",
        image: "public/CelticsvMavs-GM5.jpeg",
        url: "https://www.youtube.com/watch?v=6kW6N2Ax9XA&pp=0gcJCdgAo7VqN5tD"
    }
]
  
  return (
<div>
   <h1  className="app-header">2024 NBA Playoff Tracker</h1>
   <div className="cards-grid">
  {data.map ((I)=> ( 
    <Card url = {I.url} image = {I.image} heading={ I.heading}>
           
    </Card>
  )


)}
</div>
</div>
  )
}

export default App

import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/listItem';

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg", 
    alt: "Imagem do jogo Minecraft"
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg", 
    alt: "Imagem do jogo TFT"
  }
]

const channelsListData = [
  { 
    url:"https://www.twitch.tv/maykbrito",
    imageUrl:"https://github.com/maykbrito.png",
    alt:"Imagem de Mayk Brito"
  },

  { 
    url:"https://www.twitch.tv/alanzoka",
    imageUrl:"https://yt3.googleusercontent.com/ytc/AIf8zZRQ7UOrTTcLDMgK8NPCfqw1KXKOoKHZz9qUhBnTuA=s900-c-k-c0x00ffffff-no-rj",
    alt:"Imagem de Alanzoka"
  },

  { 
    url:"https://www.twitch.tv/cellbit",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-300x300.png",
    alt:"Imagemd de Cellbit"
  }
]

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar"
          className="games-list"
        >
            {
              gamesListData.map(function(item){
                return (
                  <ListItem
                    url={item.url}
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                  />
                )
              })
            }
        </Section>

        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar"
          className="channel-list"
        >
            {
              channelsListData.map(function(item){
                return (
                  <ListItem
                    url={item.url}
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                  />
                )
              })
            }
        </Section>
      </main>


      {/* SECTIONS */}
    </div>
  );
}

export default App;

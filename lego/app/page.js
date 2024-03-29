
import "./page.css";
import Header from '../src/Header/Header'
import Footer from  "../src/Footer/Footer"
import Title from '../src/Title/Title'
import MainPage from '../src/MainPage/MainPage'
import CommentSection from "../src/APIsection/APIsection";

export default function Home() {
  return (
    <body>
      <div className="container">


        <Header />

        <Title />
        <div className="mainpart">
        <MainPage title={"Duke Leto Atreides & Lady Jessica Atreides"} img={"./LetoAndJessica Large.jpeg"} text1={"Duke Leto Atreides is a wise and noble ruler of House Atreides, known for his integrity and strategic prowess in navigating the treacherous politics of the desert planet Arrakis."} text2={"Lady Jessica Atreides is enowned for her strength, intelligence, and mystical abilities as a member of the Bene Gesserit sisterhood. As the mother of Paul Atreides, she plays a crucial role in shaping his destiny as the central figure in the saga's epic narrative."}/>

        <MainPage className="textMain" title={"Paul Atreides & Duncan Idaho"} img={"./PaulAndDuncan Large.jpeg"} text1={"Paul Atreides is a character of profound depth and complexity. Born into House Atreides, Paul's journey from a young noble to the prophesied messiah known as Muad'Dib is marked by intense struggles, political intrigue, and profound personal growth."} text2={"Duncan Idaho is known for his unwavering loyalty, exceptional combat skills, and multiple incarnations due to his involvement with the Bene Gesserit's genetic programs. As a trusted confidant to the Atreides family, Duncan's presence spans generations, leaving a lasting impact on the unfolding events of the Dune universe."}/>

        <MainPage className="textMain" title={"Dr. Liet-Kynes & Chani"} img={"./Dr.Liet-KynesAndChani Large.jpeg"} text1={"Dr. Liet-Kynes is the Imperial Planetologist and key advisor to House Atreides on the desert planet Arrakis. With a deep understanding of Arrakis' ecology and its native Fremen population, Liet-Kynes plays a crucial role in shaping the planet's destiny and the unfolding political landscape of the galaxy."} text2={"Chani is a fierce and resourceful Fremen warrior renowned for her bravery, loyalty, and profound connection with Paul Atreides. As Paul's beloved companion and eventual wife, Chani embodies the strength and resilience of the desert people, playing a crucial role in the fulfillment of prophecies and the destiny of Arrakis."}/>

        <MainPage className="textMain" title={"Gurney Halleck & Baron Vladimir Harkonnen"} img={"./GurneyAndBaron Large.jpeg"} text1={"Gurney Halleck is a skilled warrior and loyal mentor to Paul Atreides known for his expertise in combat and his unwavering dedication to the Atreides cause. With his sharp wit and deep loyalty, Gurney serves as both a trusted advisor and a formidable ally in the complex political landscape of the Imperium."} text2={"Baron Vladimir Harkonnen is known for his immense wealth, cunning intellect, and ruthless pursuit of power. As the head of House Harkonnen, he schemes to overthrow House Atreides and seize control of the valuable spice melange, embodying the darker side of the political intrigue that drives the narrative of the Dune universe."}/>
        </div>
        <CommentSection />

        <Footer />

      </div>
    </body>
  );
}

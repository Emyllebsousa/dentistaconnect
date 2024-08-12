import Header from "@/Header/Header";
import styles from "@/Styles/page.module.css";
import Card from "@/Componentes/Card";
import Link from "next/link";

export default function Home() {
  const cardsData = [
    {
      title: 'AGENDAMENTO',
      image: '/agendamento.png',
      link: '/agendamento',
    },
    {
      title: 'CONSULTA',
      image: '/Consultas.png',
      link: '/consulta',
    },
    {
      title: 'SOBRE',
      image: '/Sobre.png',
      link: '/sobre',
    },
  ];
  

  return (
    <>
      <Header />
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>

      <footer className={styles.footer}></footer>
    </>
  );
}

import Header from "@/Header/Header";
import styles from "@/Styles/page.module.css";
import Card from "@/Componentes/Card";

export default function Home() {
  const cardsData = [
    {
      title: 'AGENDAMENTO',
      image: '/ifpiLogo.png',
    },
    {
      title: 'CONSULTA',
      image: '/ifpiLogo.png',
    },
    {
      title: 'SOBRE',
      image: '/ifpiLogo.png',
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
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      <footer className={styles.footer}></footer>
    </>
  );
}

import banner from "../../assets/banner.jpg";
import "../../styles/About.scss";
import CollapseMenu from "../../components/CollapseMenu";

function About(props) {
  const collapsingContainers = [
    {
      title: "Fiabilté",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les information sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou perturbation du voisinage entrainera une exclusion de notre plateforme. ",
    },
    {
      title: "Service",
      description:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit  avec nos hotes ou  nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div>
      <div className="banner-container">
        <img src={banner} alt="banner picture" />
      </div>
      <section className="collapse-container">
        <ul className="accordion-list">
          {collapsingContainers.map((item, index) => (
            <li key={index}>
              <CollapseMenu
                property={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default About;

import Banner from "../../components/Banner";
import CardsAccueil from "../../components/CardsAccueil";

export default function Accueil() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
      <CardsAccueil
        iconFeature="./img/icon-chat.png"
        titleFeature="You are our #1 priority"
        descriptionFeature="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      />
      <CardsAccueil
        iconFeature="./img/icon-money.png"
        titleFeature="More savings means higher rates"
        descriptionFeature="The more you save with us, the higher your interest rate will be!"
      />
      <CardsAccueil
        iconFeature="./img/icon-security.png"
        titleFeature="Security you can trust"
        descriptionFeature=" We use top of the line encryption to make sure your data and money
            is always safe."
      />
        </section>
    </main>
  );
}

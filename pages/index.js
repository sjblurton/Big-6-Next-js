import { Card, Hero } from "../components/home";
import { Seo } from "../shared";
import { withPublic } from "../src/hooks/routes";
import { content } from "../components/home/card/content";

const Home = ({ auth }) => {
  return (
    <>
      <Seo title="Join" />
      <main>
        <Hero auth={auth} />
        {content.map((workout, i) => (
          <Card key={i} data={workout} />
        ))}
      </main>
    </>
  );
};
export default withPublic(Home);

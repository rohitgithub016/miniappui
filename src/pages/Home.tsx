import Page from "../component/Page";

const Home = () => {
  return (
    <Page>
      <div className="home-container">
        <h1>Welcome to the Home Page</h1>
        <p>
          This is the starting point of your application. Use the navigation
          above to explore more sections like About and Contact.
        </p>
      </div>
    </Page>
  );
};

export default Home;

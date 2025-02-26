const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #2c3e50;
  color: white;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 50px;
  background: url("https://source.unsplash.com/1600x900/?africa,safari") no-repeat center;
  background-size: cover;
  color: white;
`;

const Section = styled.section`
  padding: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #e67e22;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #d35400;
  }
`;

export default App;
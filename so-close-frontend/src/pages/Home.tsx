import Header from '../components/Header'
import Features from '../components/Features'
import Team from '../components/Team'
import Footer from '../components/Footer'
import { FloatingLeaves } from '../assets/floatingLeaves'

const Home = () => (
  <div className="container">
    <FloatingLeaves />
    <Header />
    <Features />
    <Team />
    <Footer />
  </div>
)

export default Home


import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer'
const Layout = ({ children }) => {
    return ( 
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
}

export default Layout;
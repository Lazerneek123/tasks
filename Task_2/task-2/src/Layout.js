import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <div class="home">

                <div class="header">

                    <div class="frame" style={{ gridColumn: 1 }}>
                        <div class="vector_rectangle" style={{ gridColumn: 1 }}></div>
                        <div class="vector_circle" style={{ gridColumn: 2 }}></div>
                        <div class="vector_circle" style={{ gridColumn: 3 }}></div>
                    </div>

                    <div style={{ gridColumn: 4 }}>
                        <menu class="menu">
                            <Link class="text" to="/">Home</Link>
                            <Link class="text" to="/aboutUs">About us</Link>
                            <Link class="text" to="/portfolio">Portfolio</Link>
                        </menu>
                    </div>


                </div>

            </div>
            <Outlet />

        </>
    )
};

export default Layout;
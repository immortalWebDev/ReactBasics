import React from "react";
import Cart from "../Cart";
import "./home.css"; // Import your CSS file

const Home = () => {
    return (
        <>
        <Cart></Cart>
        <div className="home-container">
            <section className="banner">
                <img
                    src="https://i.pinimg.com/originals/84/e6/b7/84e6b76620b389f18db65a14f8b4935b.jpg"
                    alt="Graphiti"
                />
                <h1>The Generics</h1>
                <p>Get our Latest Album</p>
            </section>
            <section className="tours">
                <h2>TOURS</h2>
                <ul>
                    <li>
                        JUL 16 is DETROIT @DTE ENERGY MUSIC THEATRE, MI{" "}
                        <a href="#">BUY TICKETS</a>
                    </li>
                    <hr />
                    <li>
                        AUG 21 is CHICAGO @UNITED CENTER, IL <a href="#">BUY TICKETS</a>
                    </li>
                    <hr />
                    <li>
                        SEP 05 is NEW YORK @MADISON SQUARE GARDEN, NY{" "}
                        <a href="#">BUY TICKETS</a>
                    </li>
                    <hr />
                    <li>
                        OCT 12 is LOS ANGELES @HOLLYWOOD BOWL, CA <a href="#">BUY TICKETS</a>
                    </li>
                    <hr />
                    <li>
                        NOV 08 is SAN FRANCISCO @ORACLE PARK, CA <a href="#">BUY TICKETS</a>
                    </li>
                    <hr />
                    <li>
                        DEC 03 is BOSTON @TD GARDEN, MI <a href="#">BUY TICKETS</a>
                    </li>
                </ul>
            </section>
        </div>
        </>
    );
};

export default Home;

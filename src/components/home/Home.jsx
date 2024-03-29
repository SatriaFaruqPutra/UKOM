import React from "react";
import './Home.css';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <span className="home__subtitle">Story Coffee</span>
                    <h1 className="home__title">Nikmatnya Bercerita Dalam Kebersamaan Dengan Hangatnya Secangkir Kopi</h1>
                    <p className="home__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate perspiciatis ducimus nisi a sed eum eius, ipsam natus quos est provident, sit molestiae inventore labore nihil assumenda omnis quisquam voluptatibus.</p>
                    <div className="home__btn">
                        <a href="#menu" className="btn">Menu</a>
                        <a href="#reservasion" className="btn home__res">Reserfasi</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
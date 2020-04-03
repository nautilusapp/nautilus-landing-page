import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
    return ( 
        <section id="features">
            <h2>features</h2>
            <figure>
                <img src="http://picsum.photos/300" alt=""/>
                <ScrollAnimation animateIn="fadeInRight">
                <figcaption>
                    Gummybears
                </figcaption>
                </ScrollAnimation>
            </figure>
            <figure>
                <ScrollAnimation animateIn="fadeInLeft">
                <figcaption>
                    Gummybears
                </figcaption>
                </ScrollAnimation>
                <img src="http://picsum.photos/300" alt=""/>
            </figure>
            <figure>
                <img src="http://picsum.photos/300" alt=""/>
                <ScrollAnimation animateIn="fadeInRight">
                <figcaption>
                    Gummybears
                </figcaption>
                </ScrollAnimation>
            </figure>
        </section>
    );
}
 
export default Features;
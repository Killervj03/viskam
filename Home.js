import React, { Component } from 'react'

import { Container, Carousel, } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>
                        <Container>

                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/VISKAM1.jpg"
                                        alt="First slide"
                                    />

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/VISKAM2.jpg "
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/VISKAM3.jpg"
                                        alt="Third slide"

                                    />

                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p>

                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                    </h1>
                </div>
                <div id="example2">
                    <marquee width="90%" direction="left" height="100px">
                        <h4> The Tirukkuṟaḷ (Tamil: திருக்குறள், lit. 'sacred verses'), or shortly the Kural (Tamil: குறள்), is a classic Tamil language text consisting of 1,330 short couplets, or kurals, of seven words each.[4] The text is divided into three books with aphoristic teachings on virtue (aram), wealth (porul) and love (inbam), respectively.[1][5][6] Considered one of the greatest works ever written on ethics and morality, it is known for its universality and secular nature.[7][8] Its authorship is traditionally attributed to Valluvar, also known in full as Thiruvalluvar. The text has been dated variously from 300 BCE to 5th century CE. The traditional accounts describe it as the last work of the third Sangam, but linguistic analysis suggests a later date of 450 to 500 CE and that it was composed after the Sangam period.[9]

                            The Kural text is among the earliest systems of Indian epistemology and metaphysics. The Kural is traditionally praised with epithets and alternative titles, including "the Tamil Veda" and "the Divine Book."[10][11] Written on the foundations of ahimsa,[12][13][14][15][16] it emphasizes non-violence and moral vegetarianism as virtues for an individual.[17][18][19][20][21][a] In addition, it highlights truthfulness, self-restraint, gratitude, hospitality, kindness, goodness of wife, duty, giving, and so forth,[22] besides covering a wide range of social and political topics such as king, ministers, taxes, justice, forts, war, greatness of army and soldier's honor, death sentence for the wicked, agriculture, education, abstinence from alcohol and intoxicants.[23][24][25] It also includes chapters on friendship, love, sexual unions, and domestic life.[22][26] The text effectively denounced previously held misbeliefs that were common during the Sangam era and permanently redefined the cultural values of the Tamil land.[27]</h4>
                    </marquee>
                </div>
            </div>
        )
    }
}
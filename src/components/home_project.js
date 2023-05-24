import React from 'react'
import Link from 'next/link'

export default function HomeProject() {
    return (
        <>
            <div className="glax_tm_section">
                <div className="glax_tm_home_project_wrapper_all">
                    <div className="container">
                        <div className="glax_tm_twice_box_wrap fn_w_sminiboxes">
                            <div className="inner_box">
                                <div className="leftbox project fn_w_sminibox">
                                    <div className="constructify_fn_sticky_section">
                                        <div className="title_holder">
                                            <h3>Our Latest Projects</h3>
                                        </div>
                                        <div className="description">
                                            <p>For over 35 years, the Glax family has been building relationships and projects that last. As a diversified construction management, design-build, and general contracting firm, Glax is recognized as one of Upstate New York &apos;s largest construction companies.</p>
                                        </div>
                                        <div className="glax_tm_button_more_wrap">
                                            <Link href="/project"><a>
                                                View All Projects
                                                <span className="arrow_wrap">
                                                    <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                    <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                </span>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightbox fn_w_sminibox">
                                    <div className="constructify_fn_sticky_section">
                                        <ul>
                                            <li>
                                                <div className="inner">
                                                    <div className="image_wrap">
                                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                                        <div className="image" style={{"backgroundImage":"url(img/portfolio/1.jpg)"}} />
                                                        <div className="overlay_color" />
                                                        <span className="plus" />
                                                        <div className="title_holder">
                                                            <h3>Matao Gas and Oil Organization</h3>
                                                            <div className="glax_tm_view_more_wrap">
                                                                <Link href="/project-single"><a>
                                                                    <span className="text">View More</span>
                                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                        <Link href="/project-single"><a className="link" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="image_wrap">
                                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                                        <div className="image" style={{"backgroundImage":"url(img/portfolio/2.jpg)"}} />
                                                        <div className="overlay_color" />
                                                        <span className="plus" />
                                                        <div className="title_holder">
                                                            <h3>Odeon Industry Machinery</h3>
                                                            <div className="glax_tm_view_more_wrap">
                                                                <Link href="#"><a>
                                                                    <span className="text">View More</span>
                                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                        <Link href="/project-single"><a className="link" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="inner">
                                                    <div className="image_wrap">
                                                        <img src="img/portfolio/750x500.jpg" alt="" />
                                                        <div className="image" style={{"backgroundImage":"url(img/portfolio/3.jpg)"}} />
                                                        <div className="overlay_color" />
                                                        <span className="plus" />
                                                        <div className="title_holder">
                                                            <h3>Chaban Car Industry</h3>
                                                            <div className="glax_tm_view_more_wrap">
                                                                <Link href="#"><a>
                                                                    <span className="text">View More</span>
                                                                    <span className="arrow"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                        <Link href="/project-single"><a className="link" /></Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

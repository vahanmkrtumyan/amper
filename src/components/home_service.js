import React from 'react'
import Link from 'next/link'

export default function HomeService() {
    return (
        <>
            <div className="glax_tm_section">
                <div className="container">
                    <div className="glax_tm_home_service_list">
                        <ul className="glax_tm_miniboxes">
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/service-flasks.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Basic &amp; Industrial Chemicals</h3>
                                    </div>
                                    <div className="description">
                                        <p>During this phase, we will work to provide a detailed analysis of the project and we will establish project expectations along...</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/service-tower.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Construction &amp; Engineering</h3>
                                    </div>
                                    <div className="description">
                                        <p>The client retains an architect or engineer to design the project and to prepare the necessary drawings and specifications for...</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/service-transformer.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>Energy and Commodities Industry</h3>
                                    </div>
                                    <div className="description">
                                        <p>Under a Construction Management contract, the client secures the services of a construction manager to work with the design...</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                            <li>
                                <div className="inner_list glax_tm_minibox">
                                    <div className="icon_wrap">
                                        <img className="svg" src="img/svg/service-oil.svg" alt="" />
                                    </div>
                                    <div className="title_holder">
                                        <h3>The Shale Oil &amp; Gas Revolution</h3>
                                    </div>
                                    <div className="description">
                                        <p>In this section, we let clients select a design-build arrangement when they want to work with one contract entity...</p>
                                    </div>
                                    <div className="glax_tm_button_more_wrap">
                                        <a href="#">
                                            More Details
                                            <span className="arrow_wrap">
                                                <span className="first"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                                <span className="second"><img className="svg" src="img/svg/arrow-right.svg" alt="" /></span>
                                            </span>
                                        </a>
                                    </div>
                                    <Link  href="/service-single"><a className="service_link" /></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

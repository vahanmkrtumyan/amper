import React from 'react'
import { Parallax } from 'react-parallax'

export default function Responsibility() {
    return (
        <>
            <div className="glax_tm_section">
                <div className="glax_tm_main_responsibility_wrap">
                    <Parallax bgImage="img/slider/8.jpg" strength={300}>
                        <div className="glax_tm_universal_parallax_wrap">
                            <div className="main_content responsibility">
                                <div className="container">
                                    <div className="content_inner_wrap">
                                        <div className="glax_tm_experience_box">
                                            <div className="top">
                                                <p>World&apos;s Leading Industry Corporation</p>
                                            </div>
                                            <div className="bottom">
                                                <div className="number">
                                                    <span>47</span>
                                                </div>
                                                <div className="definition">
                                                    <p>Years of experience</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="experience_list">
                                            <ul>
                                                <li><span>Unrivalled workmanship</span></li>
                                                <li><span>Professional and Qualified</span></li>
                                                <li><span>Competitive prices</span></li>
                                                <li><span>Performance Measures</span></li>
                                                <li><span>Environmental Sensitivity</span></li>
                                                <li><span>Core Placement</span></li>
                                                <li><span>Communication skills</span></li>
                                                <li><span>Responsive and Respectful</span></li>
                                                <li><span>Personalised solutions</span></li>
                                                <li><span>Functional Objectives</span></li>
                                                <li><span>Integrated Design</span></li>
                                                <li><span>Urban Context</span></li>
                                                <li><span>Critical thinking</span></li>
                                                <li><span>Problem solving</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </>
    )
}

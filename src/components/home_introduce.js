import React, {useState} from 'react'
import VideoPopUp from '../video-pop-up'

export default function HomeIntroduce() {
    const [isShow, setShow] = useState(false);
    
    return (
        <>
            <div className="glax_tm_section introduce">
                <div className="container">
                    <div className="qqq">
                        <div className="glax_tm_introduce_wrap">
                            <div className="inner_wrap">
                                <div className="main_info_wrap">
                                    <span className="top_title">Let me introduce</span>
                                    <h3 className="title">Our Company</h3>
                                    <p className="text">For over 47 years, the Glax family has been building relationships and projects that last. We build safe environments and eco-friendly solutions in the communities in which we work. Most importantly, we build strong relationships that allow us to build anything, anywhere. No matter the job, we go beyond building.</p>
                                </div>
                                <div className="experience_box">
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
                            </div>
                            <div className="play_video">
                                <a  style={{"cursor":"pointer"}} className="popup-youtube" onClick={setShow} />
                            </div>
                        </div>
                        <div className="shape_top">
                            <span className="first" />
                            <span className="second" />
                        </div>
                        <div className="shape_bottom">
                            <span className="first" />
                            <span className="second" />
                        </div>
                    </div>
                    {isShow &&  <VideoPopUp setShow={()=>setShow(false)} src={"//www.youtube.com/embed/G6zv3wFvpHM?autoplay=1"} />}
                </div>
            </div>
        </>
    )
}

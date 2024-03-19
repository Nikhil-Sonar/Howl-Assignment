import React, { useState } from 'react';
import './Stretegy.css'

const StretegyComp = () => {

    const [selectedVal, setSelectedVal] = useState("")

    return (
        <section className='section-3'>
            <div className='stretagy-parent'>
                    <p className='select-txt'>{selectedVal}</p>
                <div className="stretagy-parent-card">
                    <div className="stretagy-parent-card-one">
                        <div className="stretagy-part">
                            <ul>
                                <li onClick={() => setSelectedVal("STRATEGY AND CONSULTING")}>STRATEGY AND CONSULTING</li>
                                <li onClick={() => setSelectedVal("ONLINE MARKETING EXPERCIENCES")}>ONLINE MARKETING EXPERCIENCES</li>
                                <li onClick={() => setSelectedVal("COMMERCE SOLUTIONS")}>COMMERCE SOLUTIONS</li>
                                <li onClick={() => setSelectedVal("GROWTH MARKETING")}>GROWTH MARKETING</li>
                                <li onClick={() => setSelectedVal("ASSETS CREATIONS")}>ASSETS CREATIONS</li>
                            </ul>
                        </div>
                        <div className="stretagy-layer">
                            <ul>
                                <li className='layer-1'>Layer 1- Strategic Process Steps</li>
                                <li className='layer-2 mar-top'>Layer 2- Input & Intel Undertaken</li>
                                <li className='layer-3 mar-top'>Layer 3- Strategic Output</li>
                                <li className='layer-4 mar-top'>Layer 4- Branding Headers</li>
                                <li className='layer-5 mar-top'>Layer 5- Branding Output</li>
                            </ul>
                        </div>
                    </div>
                    <div className="stretagy-parent-card-two">

                        <ol className="level-3-wrapper">
                            <li>
                                <h3 className="level-3 rectangle color-blk">Manager A</h3>
                                <ol className="level-4-wrapper">
                                    <li>
                                        <h4 className="level-4 rectangle back-color-heading">Person A</h4>
                                    </li>
                                    <li>
                                        <h4 className="level-4 rectangle">
                                            <ul className='consumer-list'>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                            </ul>
                                        </h4>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h3 className="level-3 rectangle color-blk level-4m">Manager B</h3>
                                <ol className="level-4-wrapper">
                                    <li>
                                        <h4 className="level-4 rectangle back-color-heading level-4m">Person A</h4>
                                    </li>
                                    <li>
                                        <h4 className="level-4 rectangle">
                                            <ul className='consumer-list'>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                                <li>
                                                    Strategic Process
                                                </li>
                                            </ul>
                                        </h4>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h3 className="level-3 rectangle color-blk level-4m">Manager C</h3>
                                <ol className="level-4-wrapper">
                                    <li>
                                        <h4 className="level-4 rectangle back-color-heading level-4m">Person A</h4>
                                    </li>
                                    <li>
                                        <h4 className="level-4 rectangle"><ul className='consumer-list'>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                        </ul></h4>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <h3 className="level-3 rectangle color-blk level-4m level-d up-arrow">Manager D</h3>
                                <ol className="level-4-wrapper level-5-wrapper">
                                    <li>
                                        <div className='brand-cir-card'>
                                            <h4 className="level-4 rectangle back-color-heading level-4m text-one level-5m-list">Person A</h4>
                                            <h4 className="level-4 rectangle back-color-heading level-4m level-5m level-5m-list">Person A</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="level-4 rectangle level-5m-list-large"><ul className='consumer-list'>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                            <li>
                                                Strategic Process
                                            </li>
                                        </ul></h4>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="stretagy-parent-btn">
                    <button className='stretagy-button'>Dive Depper</button>
                </div>
            </div>
        </section>
    )
}

export default StretegyComp;

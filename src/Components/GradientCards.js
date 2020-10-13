import React from 'react'

function GradientCards(props){
    // <div>
    //     <p>Active : {dynamicData.data[dynamicData.data.length - 1].Active}</p>
    //     <p>Confirmed : {dynamicData.data[dynamicData.data.length - 1].Confirmed}</p>
    //     <p>Deaths : {dynamicData.data[dynamicData.data.length - 1].Deaths}</p>
    //     <p>Recovered : {dynamicData.data[dynamicData.data.length - 1].Recovered}</p>
    // </div>
    console.log(props);
    let content = null;
    if (props.data) {
        let data = props.data[props.data.length - 1];
        content =
            <div className="row m-t-25">
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c2">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="gradCard">
                                    <h2>{data.Active}</h2>
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c4">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="gradCard">
                                    <h2>{data.Confirmed}</h2>
                                    <span>Confirmed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c3">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="gradCard">
                                    <h2>{data.Deaths}</h2>
                                    <span>Deaths</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="overview-item overview-item--c2">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="gradCard">
                                    <h2>{data.Recovered}</h2>
                                    <span>Recovered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default GradientCards
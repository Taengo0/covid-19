import React from 'react'

function Cards(props){
    console.log(props.summary);
    let content = null;
    if (props.summary) {
        let data = props.summary.Countries[104];
        content =
            <div className="row m-t-25">
                <div className="col-sm-6 col-lg-4">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="text">
                                    <h2>{data.NewConfirmed}</h2>
                                    <span>New Confirmed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="text">
                                    <h2>{data.NewDeaths}</h2>
                                    <span>New Deaths</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="text">
                                    <h2>{data.NewRecovered}</h2>
                                    <span>New Recovered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="text">
                                    <h2>{data.TotalConfirmed}</h2>
                                    <span>Total Confirmed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="text">
                                    <h2>{data.TotalDeaths}</h2>
                                    <span>Total Death</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="overview-item overview-item--c1">
                        <div className="overview__inner">
                            <div className="overview-box clearfix">
                                <div className="text">
                                    <h2>{data.TotalRecovered}</h2>
                                    <span>Total Recovered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    return (
        <div className="bg-gray-100">
            {content}
        </div>
    )
}

export default Cards
import React from 'react'
import {useAxiosGet} from "../Hooks/HttpRequests";
import Loader from "../Components/Loader";
import { Line } from "react-chartjs-2";


function Overview() {
    const url = "https://api.covid19api.com/summary";
    const [chartData, setChartData] = React.useState({});

    let summary = useAxiosGet(url)
    console.log(summary)
    let content = null

    if(summary.error){
        content = <div>
                    <div className="bg-blue-300 mb-2 p-3">
                        If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
                    </div>
                    <div className="bg-red-300 p-3">
                        There was an error please refresh or try again later.
                    </div>
                </div>
    }

    if(summary.loading){
        content = <Loader></Loader>
    }

    if(summary.data){
        content =
            <div className="container mx-auto">
                <div>Global</div>
                <div>New Confirmed : {summary.data.Global.NewConfirmed}</div>
                <div>New Deaths : {summary.data.Global.NewDeaths}</div>
                <div>New Recovered : {summary.data.Global.NewRecovered}</div>
                <div>Total Confirmed : {summary.data.Global.TotalConfirmed}</div>
                <div>Total Deaths : {summary.data.Global.TotalDeaths}</div>
                <div>Total Recovered : {summary.data.Global.TotalRecovered}</div>

                <div>Malaysia</div>
                <div>New Confirmed : {summary.data.Countries[104].NewConfirmed}</div>
                <div>New Deaths : {summary.data.Countries[104].NewDeaths}</div>
                <div>New Recovered : {summary.data.Countries[104].NewRecovered}</div>
                <div>Total Confirmed : {summary.data.Countries[104].TotalConfirmed}</div>
                <div>Total Deaths : {summary.data.Countries[104].TotalDeaths}</div>
                <div>Total Recovered : {summary.data.Countries[104].TotalRecovered}</div>
            <div>
                <Line data={chartData}/>
            </div>
            </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Overview
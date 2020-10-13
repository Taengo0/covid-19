import React from 'react'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import Cards from "../Components/Cards";
import axios from "axios";
import {Line, Bar} from "react-chartjs-2";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {calculateISO} from "../Hooks/calculateISODate";
import GradientCards from "../Components/GradientCards";
import {SimplifyDate} from "../Hooks/SimplifyDate";

function Home(){
    const url = `https://api.covid19api.com/summary`;
    const [chartData, setChartData] = React.useState({});
    const [calendar, setCalendar] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    let products = useAxiosGet(url);
    const urlWIthDate = `https://api.covid19api.com/country/malaysia?from=${calculateISO(calendar[0].startDate)}&to=${calculateISO(calendar[0].endDate)}`
    let dynamicData = useAxiosGet(urlWIthDate);


    const chart = () => {
        let day = [];
        let cases = [];
        axios
            .get("https://api.covid19api.com/country/malaysia/status/confirmed?from=2020-03-25T00:00:00Z&to=2020-10-10T00:00:00Z")
            .then(res => {
                let formattedDate;
                res.data.map((item, i) => {
                    day.push(SimplifyDate(item.Date));
                    cases.push(item.Cases);
                })
            })

        setChartData({
            labels: day,
            datasets: [
                {
                    label: "Total Confirmed cases",
                    data: cases,
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                    borderWidth: 4
                }
            ]
        });
    }

    React.useEffect(() => {
        chart();
    }, []);

    let content = null

    if(products.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content =
            <>
                <div className="container pb-5">
                    <Cards summary={products.data}/>
                </div>
                <div className="border-b pb-5 border-t pt-5">
                    <Line data={chartData}/>
                </div>
                <div className="row m-t-25 pt-5">
                    <div className="col-sm-6 col-lg-4 text-center">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setCalendar([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={calendar}
                        />
                    </div>
                    <div className="col-sm-6 col-lg-8">
                        <div className="pb-2 fa-w-2">
                            Showing the result from <b>{SimplifyDate(calendar[0].startDate) + " until "+SimplifyDate(calendar[0].endDate)}</b>
                        </div>
                        {dynamicData.data ? (<GradientCards data={dynamicData.data}/>) : (<Loader></Loader>)}
                    </div>
                </div>
            </>
    }
    return (
        <div>
            { content }
        </div>
    )
}

export default Home
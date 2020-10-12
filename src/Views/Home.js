import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'
import Cards from "../Components/Cards";
import axios from "axios";
import {Line} from "react-chartjs-2";
import Moment from 'react-moment';

function Home(){
    // Create your own Mock API: https://mockapi.io/
    const url = `https://api.covid19api.com/summary`
    const [chartData, setChartData] = React.useState({});
    let products = useAxiosGet(url)
    const chart = () => {
        let day = [];
        let cases = [];
        axios
            .get("https://api.covid19api.com/country/malaysia/status/confirmed?from=2020-01-25T00:00:00Z&to=2020-10-10T00:00:00Z")
            .then(res => {
                let formattedDate;
                res.data.map((item, i) => {
                    // formattedDate = new Intl.DateTimeFormat("en-GB", {
                    //     year: "numeric",
                    //     month: "long",
                    //     day: "2-digit"
                    // }).format("2020-09-05T00:00:00Z");

                    day.push(new Date(item.Date).toUTCString());
                    // console.log(item.Date)
                    console.log(new Date(item.Date).toUTCString());
                    console.log(item.Date);
                    cases.push(item.Cases);
                })
                // for (const dataObj of res.data.data) {
                //     day.push(parseInt(dataObj.employee_salary));
                //     cases.push(parseInt(dataObj.employee_age));
                // }
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
        console.log(products.data)
        content =
            <>
                <div className="container">
                    <Cards summary={products.data}/>
                </div>
                <div>
                    <Line data={chartData}/>
                </div>
            </>
    }

    if(products.data){
        // content =
            // products.data.map((product) =>
            //     <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
            //         <ProductCard
            //             product={product}
            //         />
            //     </div>
            // )
    }

    return (
        <div>
            { content }
        </div>
    )
}

export default Home
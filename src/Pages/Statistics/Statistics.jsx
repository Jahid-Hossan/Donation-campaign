import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Cell, Label } from 'recharts';
import { getDonationData } from '../../Utilites/Utilites';

const Statistics = () => {
    const [totalDonation, setTotalDonation] = useState([]);
    const totalData = useLoaderData();

    useEffect(() => {
        const getDonatedData = getDonationData();
        setTotalDonation(getDonatedData);
    }, []);

    const donatedPercentage = totalDonation.length / totalData.length * 100;

    const data = [
        {
            name: 'Total',
            value: totalData.length - totalDonation.length,
            color: "red"
        },
        {
            name: 'Donated',
            value: totalDonation.length,
            color: "green"
        }
    ];

    const COLORS = ["#FF0000", "#008000"];

    const RADIAN = Math.PI / 180;
    console.log(RADIAN);
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent === donatedPercentage ? 0 : percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div className='container my-6 max-h-[100vh] mx-auto grid  justify-center'>
            <div className='mx-auto'>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
            <div className='md:flex gap-6 mt-5 justify-center'>
                <div className='flex items-center gap-1'>
                    <h2>Your Donation</h2>
                    <div className='rounded mt-1 w-20 h-3 bg-green-700'></div>
                </div>
                <div className='flex items-center gap-1'>
                    <h2>Total Donation</h2>
                    <div className='rounded mt-1 w-20 h-3 bg-red-600'></div>
                </div>
            </div>



        </div>
    );


};

export default Statistics;

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    let students = [
        { name: 'Assignment-1', Number: 57 },
        { name: 'Assignment-2', Number: 58 },
        { name: 'Assignment-3', Number: 58 },
        { name: 'Assignment-4', Number: 49 },
        { name: 'Assignment-5', Number: 59 },
        { name: 'Assignment-6', Number: 56 },
        { name: 'Assignment-7', Number: 60 }
    ];

    return (
        <div>
            <AreaChart
                width={1400}
                height={500}
                data={students}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Number" stroke="#8884d8" fill="#8884d8" />

            </AreaChart>
        </div>
    );
};

export default Statistics;
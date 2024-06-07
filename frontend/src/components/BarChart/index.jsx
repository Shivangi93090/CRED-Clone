import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = (props) => {
  const { labels, color, label, value } = props;
  console.log(labels);

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: value,
        backgroundColor: color.background,
        borderColor: color.border,
        borderWidth: 1,
      },
    ],
  };
  // console.log(labels);
  // console.log(color);
  console.log(label);

  return (
    <>
      {labels.length === 0 ? (
        <div className="text-center">
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              marginTop: "1.5rem",
            }}
          >
            No data available to show.
          </p>
        </div>
      ) : (
        <div>
          <Bar
            data={data}
            height={400}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "none",
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default BarChart;




// import React from 'react';
// import { ResponsiveBar } from '@nivo/bar';

// const BarChart = (props) => {
//   const { labels, color, label, value } = props;

//   // Transform data to match Nivo's expected format
//   const data = labels.map((label, index) => ({
//     label: label,
//     value: value[index],
//     color: color.background[index],
//   }));

//   return (
//     <>
//       {labels.length === 0 ? (
//         <div className="text-center">
//           <p
//             style={{
//               fontSize: '1rem',
//               fontWeight: '400',
//               marginTop: '1.5rem',
//             }}
//           >
//             No data available to show.
//           </p>
//         </div>
//       ) : (
//         <div style={{ height: 400 }}>
//           <ResponsiveBar
//             data={data}
//             keys={['value']}
//             indexBy="label"
//             margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//             padding={0.3}
//             valueScale={{ type: 'linear' }}
//             indexScale={{ type: 'band', round: true }}
//             colors={({ data }) => data.color}
//             borderColor={{
//               from: 'color',
//               modifiers: [['darker', 1.6]],
//             }}
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: label,
//               legendPosition: 'middle',
//               legendOffset: 32,
//             }}
//             axisLeft={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: 'value',
//               legendPosition: 'middle',
//               legendOffset: -40,
//             }}
//             labelSkipWidth={12}
//             labelSkipHeight={12}
//             labelTextColor={{
//               from: 'color',
//               modifiers: [['darker', 1.6]],
//             }}
//             legends={[
//               {
//                 dataFrom: 'keys',
//                 anchor: 'top',
//                 direction: 'row',
//                 justify: false,
//                 translateX: 0,
//                 translateY: -40,
//                 itemsSpacing: 2,
//                 itemWidth: 100,
//                 itemHeight: 20,
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 0.85,
//                 symbolSize: 20,
//                 effects: [
//                   {
//                     on: 'hover',
//                     style: {
//                       itemOpacity: 1,
//                     },
//                   },
//                 ],
//               },
//             ]}
//             animate={true}
//             motionStiffness={90}
//             motionDamping={15}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default BarChart;


// import React from 'react';
// import { ResponsiveBar } from '@nivo/bar';

// const BarChart = (props) => {
//   const { labels, color, label, value } = props;

//   // Transform data to match Nivo's expected format
//   const data = labels.map((label, index) => ({
//     label: label,
//     value: value[index],
//     color: color.background[index],
//   }));

//   return (
//     <>
//       {labels.length === 0 ? (
//         <div className="text-center">
//           <p
//             style={{
//               fontSize: '1rem',
//               fontWeight: '400',
//               marginTop: '1.5rem',
//             }}
//           >
//             No data available to show.
//           </p>
//         </div>
//       ) : (
//         <div style={{ height: 400 }}>
//           <ResponsiveBar
//             data={data}
//             keys={['value']}
//             indexBy="label"
//             margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//             padding={0.3}
//             valueScale={{ type: 'linear' }}
//             indexScale={{ type: 'band', round: true }}
//             colors={{ scheme: 'nivo' }}
//             defs={[
//               {
//                 id: 'dots',
//                 type: 'plain',
//                 background: 'inherit',
//                 color: '#38bcb2',
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//               },
//               {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: '#eed312',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//               },
//             ]}
//             fill={[
//               {
//                 match: {
//                   id: 'value',
//                 },
//                 id: 'dots',
//               },
//             ]}
//             borderColor={{
//               from: 'color',
//               modifiers: [['darker', 1.6]],
//             }}
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: label,
//               legendPosition: 'middle',
//               legendOffset: 32,
//               truncateTickAt: 0
//             }}
//             axisLeft={{
//               tickSize: 5,
//               tickPadding: 5,
//               tickRotation: 0,
//               legend: 'value',
//               legendPosition: 'middle',
//               legendOffset: -40,
//               truncateTickAt: 0
//             }}
//             labelSkipWidth={12}
//             labelSkipHeight={12}
//             labelTextColor={{
//               from: 'color',
//               modifiers: [['darker', 1.6]],
//             }}
//             legends={[
//               {
//                 dataFrom: 'keys',
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 120,
//                 translateY: 0,
//                 itemsSpacing: 2,
//                 itemWidth: 100,
//                 itemHeight: 20,
//                 itemDirection: 'left-to-right',
//                 itemOpacity: 0.85,
//                 symbolSize: 20,
//                 effects: [
//                   {
//                     on: 'hover',
//                     style: {
//                       itemOpacity: 1,
//                     },
//                   },
//                 ],
//               },
//             ]}
//             animate={true}
//             motionStiffness={90}
//             motionDamping={15}
//             role="application"
//             ariaLabel="Nivo bar chart demo"
//             barAriaLabel={e => `${e.id}: ${e.formattedValue} in label: ${e.indexValue}`}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default BarChart;

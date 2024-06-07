
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = (props) => {
  const { labels, color, label, value } = props;

  // Transform data to match Nivo's expected format
  const data = labels.map((label, index) => ({
    id: label,
    label: label,
    value: value[index],
    color: color.background[index],
  }));

//   const legendsPerRow = 5; // Number of legends per row
//   const containerWidth = 1000; // Width of the container

//   // Function to split legends into multiple rows
//   const createLegendConfig = (data) => {
//     const rows = Math.ceil(data.length / legendsPerRow);
//     const legends = [];
//     const legendWidth = containerWidth / legendsPerRow; // Calculate dynamic width of legend item

//     for (let i = 0; i < rows; i++) {
//       const startIndex = i * legendsPerRow;
//       const endIndex = startIndex + legendsPerRow;
//       const rowLegends = data.slice(startIndex, endIndex).map(d => ({ id: d.id, label: d.label, color: d.color }));

//       legends.push({
//         anchor: 'bottom',
//         direction: 'row',
//         justify: false,
//         translateX: 0,
//         translateY: 36 + (i * 20), // Adjust translateY to stack rows
//         itemsSpacing: 1,
//         itemWidth: legendWidth,
//         itemHeight: 20,
//         itemTextColor: '#999',
//         itemDirection: 'left-to-right',
//         itemOpacity: 0.85,
//         symbolSize: 8,
//         symbolShape: 'circle',
//         effects: [
//           {
//             on: 'hover',
//             style: {
//               itemTextColor: '#000',
//             },
//           },
//         ],
//         data: rowLegends,
//       });
//     }

//     return legends;
//   };

//   // Get dynamic legend configuration
//   const legends = createLegendConfig(data);


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
        <div style={{ height: 350}}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 100, left: 70 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={15}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [['darker', 2]],
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            // fill={[
            //   {
            //     match: {
            //       id: 'ruby',
            //     },
            //     id: 'dots',
            //   },
            //   {
            //     match: {
            //       id: 'c',
            //     },
            //     id: 'dots',
            //   },
            //   {
            //     match: {
            //       id: 'go',
            //     },
            //     id: 'dots',
            //   },
            //   {
            //     match: {
            //       id: 'python',
            //     },
            //     id: 'dots',
            //   },
            //   {
            //     match: {
            //       id: 'scala',
            //     },
            //     id: 'lines',
            //   },
            //   {
            //     match: {
            //       id: 'lisp',
            //     },
            //     id: 'lines',
            //   },
            //   {
            //     match: {
            //       id: 'elixir',
            //     },
            //     id: 'lines',
            //   },
            //   {
            //     match: {
            //       id: 'javascript',
            //     },
            //     id: 'lines',
            //   },
            // ]}
            // legends={[
            //   {
            //     anchor: 'bottom',
            //     direction: 'row',
            //     justify: false,
            //     translateX: 0,
            //     translateY: 56,
            //     itemsSpacing: 0,
            //     itemWidth: 100,
            //     itemHeight: 18,
            //     itemTextColor: '#999',
            //     itemDirection: 'top-to-bottom',
            //     itemOpacity: 1,
            //     symbolSize: 10,
            //     symbolShape: 'circle',
            //     effects: [
            //       {
            //         on: 'hover',
            //         style: {
            //           itemTextColor: '#000',
            //         },
            //       },
            //     ],
            //   },
            // ]}
            // legends={[
            //   {
            //     anchor: 'bottom',
            //     direction: 'row',
            //     justify: false,
            //     translateX: 0,
            //     translateY: 36,
            //     itemsSpacing: 0,
            //     itemWidth: 100,
            //     itemHeight: 18,
            //     itemTextColor: '#999',
            //     itemDirection: 'left-to-right',
            //     itemOpacity: 1,
            //     symbolSize: 18,
            //     symbolShape: 'circle',
            //     effects: [
            //       {
            //         on: 'hover',
            //         style: {
            //           itemTextColor: '#000',
            //         },
            //       },
            //     ],
            //   },
            //   {
            //     anchor: 'bottom',
            //     direction: 'row',
            //     justify: false,
            //     translateX: 0,
            //     translateY: 56,
            //     itemsSpacing: 0,
            //     itemWidth: 100,
            //     itemHeight: 18,
            //     itemTextColor: '#999',
            //     itemDirection: 'left-to-right',
            //     itemOpacity: 1,
            //     symbolSize: 18,
            //     symbolShape: 'circle',
            //     effects: [
            //       {
            //         on: 'hover',
            //         style: {
            //           itemTextColor: '#000',
            //         },
            //       },
            //     ],
            //   },
            // ]}

            // legends={[
            //   {
            //     dataFrom: 'keys',
            //     anchor: 'bottom',
            //     direction: 'row',
            //     justify: false,
            //     translateX: 0,
            //     translateY: 36,
            //     itemsSpacing: 2,
            //     itemWidth: 100,
            //     itemHeight: 20,
            //     itemTextColor: '#999',
            //     itemDirection: 'left-to-right',
            //     itemOpacity: 0.85,
            //     symbolSize: 20,
            //     symbolShape: 'circle',
            //     effects: [
            //       {
            //         on: 'hover',
            //         style: {
            //           itemTextColor: '#000',
            //         },
            //       },
            //     ],
            //     data: firstRow.map(d => ({ id: d.id, label: d.label, color: d.color }))
            //   },
            //   {
            //     dataFrom: 'keys',
            //     anchor: 'bottom',
            //     direction: 'row',
            //     justify: false,
            //     translateX: 0,
            //     translateY: 56,
            //     itemsSpacing: 2,
            //     itemWidth: 100,
            //     itemHeight: 20,
            //     itemTextColor: '#999',
            //     itemDirection: 'left-to-right',
            //     itemOpacity: 0.85,
            //     symbolSize: 20,
            //     symbolShape: 'circle',
            //     effects: [
            //       {
            //         on: 'hover',
            //         style: {
            //           itemTextColor: '#000',
            //         },
            //       },
            //     ],
            //     data: secondRow.map(d => ({ id: d.id, label: d.label, color: d.color }))
            //   },
            // ]}
            // legends={legends}
          />
        </div>
      )}
    </>
  );
};

export default PieChart;

// import React from 'react';
// import { ResponsivePie } from '@nivo/pie';

// const PieChart = (props) => {
//   const { data } = props;

//   return (
//     <>
//       {data.length === 0 ? (
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
//           <ResponsivePie
//             data={data}
//             margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//             innerRadius={0.5}
//             padAngle={0.7}
//             cornerRadius={3}
//             activeOuterRadiusOffset={8}
//             borderWidth={1}
//             borderColor={{
//               from: 'color',
//               modifiers: [['darker', 0.2]],
//             }}
//             arcLinkLabelsSkipAngle={10}
//             arcLinkLabelsTextColor="#333333"
//             arcLinkLabelsThickness={2}
//             arcLinkLabelsColor={{ from: 'color' }}
//             arcLabelsSkipAngle={10}
//             arcLabelsTextColor={{
//               from: 'color',
//               modifiers: [['darker', 2]],
//             }}
//             defs={[
//               {
//                 id: 'dots',
//                 type: 'patternDots',
//                 background: 'inherit',
//                 color: 'rgba(255, 255, 255, 0.3)',
//                 size: 4,
//                 padding: 1,
//                 stagger: true,
//               },
//               {
//                 id: 'lines',
//                 type: 'patternLines',
//                 background: 'inherit',
//                 color: 'rgba(255, 255, 255, 0.3)',
//                 rotation: -45,
//                 lineWidth: 6,
//                 spacing: 10,
//               },
//             ]}
//             fill={[
//               {
//                 match: {
//                   id: 'ruby',
//                 },
//                 id: 'dots',
//               },
//               {
//                 match: {
//                   id: 'c',
//                 },
//                 id: 'dots',
//               },
//               {
//                 match: {
//                   id: 'go',
//                 },
//                 id: 'dots',
//               },
//               {
//                 match: {
//                   id: 'python',
//                 },
//                 id: 'dots',
//               },
//               {
//                 match: {
//                   id: 'scala',
//                 },
//                 id: 'lines',
//               },
//               {
//                 match: {
//                   id: 'lisp',
//                 },
//                 id: 'lines',
//               },
//               {
//                 match: {
//                   id: 'elixir',
//                 },
//                 id: 'lines',
//               },
//               {
//                 match: {
//                   id: 'javascript',
//                 },
//                 id: 'lines',
//               },
//             ]}
            
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default PieChart;


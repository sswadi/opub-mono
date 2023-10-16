'use client';

import React from 'react';
import { Checkbox } from 'opub-ui';
import { ANALYTICS_INDICATORS} from '@/config/graphql/analaytics-queries';

import { cn } from '@/lib/utils';
import styles from './AnalyticsDashboard.module.scss';
import { useQuery } from '@tanstack/react-query';
import { GraphQL } from '@/lib/api';

// const indicators = [
//   {
//     label: 'Need for Preparedness',
//     value: 'need-for-preparedness',
//     nested: [
//       {
//         label: 'Hazard',
//         value: 'hazard',
//       },
//     ],
//   },
//   {
//     label: 'Exposure - Demographic',
//     value: 'exposure',
//   },
//   {
//     label: 'Vulnerability - Losses & Damages',
//     value: 'vulnerability',
//   },
//   {
//     label: 'Coping Capacity - Infrastructure',
//     value: 'infrastructure',
//   },
//   {
//     label: 'Coping Capacity - Governance',
//     value: 'governance',
//   },
// ];
// export function AnalyticsDashboardSidebar() {
  // return (
//     <aside
//       className={cn(
//         'pt-5 pr-2 overflow-hidden bg-surface',
//         'hidden z-1 shadow-inset basis-[320px] shrink-0 md:block',
//         styles.Collapse
//       )}
//     >
//       <div className="px-4 py-1">
//         {indicators.map((indicator, index) =>
//           indicator?.nested ? (
//             <React.Fragment>
//               <Checkbox
//                 key={index}
//                 value={indicator.value}
//                 name="checkbox"
//                 title="Select an indicator"
//               >
//                 {indicator.label}
//               </Checkbox>
//               {indicator?.nested.map((nestedIndicator, nestedIndex) => (
//                 <div className="px-2">
//                   <Checkbox
//                     key={nestedIndex}
//                     value={nestedIndicator.value}
//                     name="checkbox"
//                   >
//                     {nestedIndicator.label}
//                   </Checkbox>
//                 </div>
//               ))}
//             </React.Fragment>
//           ) : (
//             <Checkbox
//               key={index}
//               value={indicator.value}
//               name="checkbox"
//               title="Select an indicator"
//             >
//               {indicator.label}
//             </Checkbox>
//           )
//         )}
//       </div>
//     </aside>
//   );
// }

//-----------EDITED---------------------------------


import { INDICATORS_QUERY } from '@/config/graphql/queries';



export function AnalyticsDashboardSidebar() {

//   const { data } = useQuery([`indicators`], () =>
//   GraphQL('analytics', ANALYTICS_INDICATORS)
// );

  return (
    <div className="grid gap-4">
          
         <h1>HII</h1>
         {/* {explorerData.map((indicator, index) => (
          <li key={index}>
            <p>Name: {indicator.name}</p>
            
          </li> */}
        {/* ))} */}
        
    </div>
  );
} 


//-------------------

// export function AnalyticsDashboardSidebar() {
//   const { data } = useQuery([`indicators`], async () => {
//     const response = await GraphQL('analytics', INDICATORS_QUERY);
//     return response;
//   });

//   // const indicators = data || [];
//   // const explorerData = data?.INDICATORS_QUERY;
//   // console.log("****RESPONSE****", indicators);

//   return (
//     <div className="grid gap-4">
//       <h1>HII</h1>

//       {/* <ul>
//         {indicators.map((indicator, index) => (
//           <li key={index}>
//             <p>Name: {indicator.name}</p>
            
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }



// const Test = ({stations}) => (
//   <div>
//     {stations.map(station => (
//       <div className="station" key={station.call}>{station.call}</div>
//     ))}
//   </div>
// );

import React from 'react';

export default ({ stations }) => {
  return (
    <div>
      {stations.map(station => (
        <div className="station" key={station.id}>{station.name} {station.value}</div>
      ))}
    </div>
  );
};

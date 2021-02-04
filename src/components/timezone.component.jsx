import React from "react";

import Select from "react-select";

export const TimeZoneComponent = ({ timezone, tz, ctz, handleChange }) => {
  
  const tmp = [...tz];
  
  timezone.forEach((prop) => {
    tmp.push({ value: prop, label: prop });
  });
  
  return (
    <div className="container-lt">
      <div className="row ml-4">
        <Select className="mt-4 col-md-4 " defaultValue={ctz} />
        <Select
          className="mt-4 col-md-4 "
          placeholder="Timezone to Convert"
          options={tmp}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

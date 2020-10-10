import React, { useState, useEffect } from "react";

import Api from "../../helpers/api";

export const Details = ({
  match: {
    params: { id },
  },
}) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const res = await Api.getDetails(id).catch(console.log);
      if (res) setDetails(res);
    };

    getDetails();
  }, []);

  if (!details) {
    return <div>load</div>;
  } else {
    return <div>Movie details {id}</div>;
  }
};

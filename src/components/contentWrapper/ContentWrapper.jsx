import React from "react";

import "./style.scss";
// To center the content through out the application
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
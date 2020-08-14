import React from "react";

import { Button } from "@material-ui/core";
import "./page.css";

const Page = ({ skip, setSkip }) => {
    return (
        <div className="cntr-page">
            <Button onClick={() => setSkip(skip - 1)}>
                <h2>&#9668;</h2>
            </Button>
            <h2>{skip < 0 ? setSkip((skip = 0)) : skip}</h2>
            <Button onClick={() => setSkip(skip + 1)}>
                <h2>&#9658;</h2>
            </Button>
        </div>
    )
}

export default Page;
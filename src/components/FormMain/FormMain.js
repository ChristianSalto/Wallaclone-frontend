import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Form from "../Form";
import Input from "../Input";
import ButtonRadio from "../ButtonRadio/ButtonRadio";
import SliderInp from "../SliderInp/SliderInp";
import { Button } from "@material-ui/core";

import "./formMain.css";

const FormMain = (props) => {
    const { loadAds, skip } = props;
    const [date, setDate] = useState(false);
    const [selectedValue, setSelectedValue] = useState("default");
    const [value, setValueMin] = useState(0);
    let [tags, setTags] = useState("");
    let [price, setPrice] = useState("");
    let [name, setName] = useState("");
    let [filter, setFilter] = useState({ name, tags, price, skip });


    const handleFilter = (event) => {
        const name = event.name;
        console.log("1", name)
        setName(name);
        setFilter((filter = { name, tags, price, skip }));
        loadAds(filter, date);
    };

    const handleFilterTags = (event) => {
        const tag = event.target.value;
        setTags((tags = tag));
        setFilter((filter = { tags: tag, price: price }));
        setSelectedValue(tag);
    };

    const handleFilterPrice = (event) => {
        const prices = event.target.value;
        setPrice((price = prices));
        setFilter((filter = { tags: tags, price: prices }));
        setValueMin(price);
    };

    useEffect(() => {
        loadAds(
            { name: "", tags: "", price: "", skip },
            date
        );
    }, [loadAds, date, skip]);

    return (
        <>
            <Form onSubmit={handleFilter} initialValue={{ name }}>
                <div className="container-form">
                    <div className="cntr-btn-inp">
                        <ButtonRadio
                            handleFilterTags={handleFilterTags}
                            selectedValue={selectedValue}
                        />
                        <Button className="btn-search" type="submit">
                            search
              </Button>
                        <div>
                            <Input
                                name="name"
                                type="text"
                                className="inp-search"
                                placeholder="search..."
                            />
                        </div>
                    </div>
                    <div className="cntr-slide-btn">
                        <Button
                            className="btn-date"
                            type="button"
                            onClick={() => setDate(!date)}
                        >
                            <h4>latest announcements</h4>
                        </Button>
                        <Link to="/listuser" className="lnk-user-list">
                            <h4>USER LIST</h4>
                        </Link>
                        <SliderInp handleFilterPrice={handleFilterPrice} value={value} />
                    </div>
                </div>
            </Form>
        </>
    )
}



export default FormMain;
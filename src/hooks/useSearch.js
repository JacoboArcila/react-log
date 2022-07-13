import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`dentro ${searchInput} `)
        navigate(`/home/user/${searchInput}`);
    };
    console.log(`afuera ${searchInput} `)

    return {
        handleSubmit,
        setSearchInput
    }
};
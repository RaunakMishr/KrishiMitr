import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAllBids } from "../utils/buyerSlice";

const useAllBids = () => {

    const dispatch=useDispatch();

    const AllBids=useSelector(store=>store.buyer.allBids);

    const getAllBids= async ()=>{
        const data=await fetch(`https://backend-b9da.onrender.com/bid/allBids`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json=await data.json();

        dispatch(addAllBids(json));
    };

    useEffect(() => {
        if (!AllBids) {
            getAllBids();
        }
    }, []);
}

export default useAllBids;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from '../utils/farmerSlice';

const useFeedback = () => {
    const dispatch=useDispatch();

    const feedback=useSelector(store=>store.farmer.feedback);

    const getFeedback= async ()=>{
        const data=await fetch(`https://backend-b9da.onrender.com/post/feedback`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const json=await data.json();

        dispatch(addFeedback(json));
    };

    useEffect(() => {
        if (!feedback) {
            getFeedback();
        }
    }, []);
}

export default useFeedback;
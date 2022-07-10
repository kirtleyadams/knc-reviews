import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../../graphql/mutations/createReview';

import Nav from "../nav/Nav";
import "./review.css";

const Review = () => {
    const [formState, setFormState] = useState({
        title: '',
        plot: '',
        genre: '',
        year: '',
        poster: '',
        director: '',
        rating: '',
        review: '',
    })
    const [createReviewMutation, {_data, _loading, error}] = useMutation(CREATE_REVIEW);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            title: formState.title,
            plot: formState.plot, 
            genre: formState.genre,
            year: formState.year,
            poster: formState.posters,
            director: formState.director,
            rating: formState.rating,
            review: formState.review,
        };
        console.log(body);
        try {
            let res = await createReviewMutation({
                variables: body
            });
            navigate('/home');
            if (!error) {
                setFormState({
                    title: '',
                    plot: '',
                    genre: '',
                    year: '',
                    poster: '',
                    director: '',
                    rating: '',
                    review: '',
                })
            } else {
                console.error(error)
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Nav />
            <h1>New Review</h1>
        </>
    )
}

export default Review;
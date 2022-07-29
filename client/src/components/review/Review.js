import { useState } from 'react';
import { CREATE_REVIEW } from '../../graphql/mutations/createReview';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Nav from "../nav/Nav";
import "./review.css";

const Review = () => {
    const ratingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
            poster: formState.poster,
            director: formState.director,
            rating: formState.rating,
            review: formState.review,
        };
        console.log(body);
        try {
            console.log('working')
            let res = await createReviewMutation({
                variables: body
            });
            const token = res.data.review.token;
            localStorage.setItem('token', token);
            console.log(res);
            console.log('63 working')
            navigate('/home');
            if (!error) {
                console.log('65 working')
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
            console.log('not working')
            console.log(err);
        }
    };

    return (
        <>
            <Nav />
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                            Create a New Review
                        </Typography>
                        <form noValidate onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="title"
                                        id="title"
                                        label="Movie Title"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="plot"
                                        id="plot"
                                        label="Plot"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="genre"
                                        id="genre"
                                        label="Genre"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="year"
                                        id="year"
                                        label="Year"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="poster"
                                        id="poster"
                                        label="Poster URL"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="director"
                                        id="director"
                                        label="Director"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: 550 }}>
                                        <InputLabel id="">Rating *</InputLabel>
                                        <Select
                                            required
                                            fullWidth
                                            name="rating"
                                            labelId="rating"
                                            id=""
                                            value={formState.rating}
                                            onChange={handleChange}
                                        >
                                        {ratingList.map((rating) => (
                                            <MenuItem key={rating} value={rating}>
                                                {rating}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField onChange={handleChange}
                                        required
                                        fullWidth
                                        name="review"
                                        id="review"
                                        label="Review"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Button className="createBtn"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mb: 2 }}
                                
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Container>
        </>
    )
}

export default Review;
import { Box, Button, FormLabel, Input, TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function () {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(undefined);
    const navigate = useNavigate(); 

    useEffect(async () => {
        const movieRes = await axios.get('http://localhost:8000/api/movies/' + id);
        setName(movieRes.data.name);
        setYear(movieRes.data.year);
        setDescription(movieRes.data.description);
    }, []);

    const handleOnClick = async () => {
        let fileName = null;
        if(file) {
            const formData = new FormData();
            formData.append('image', file);
            const fileRes = await axios.post('http://localhost:8000/file', formData, {headers: {'Content-Type': 'multipart/form-data'}});
            fileName = fileRes.data['file_name'];
        }
        const res = await axios.put('http://localhost:8000/api/movies/' + id, {
            name,
            year: parseInt(year),
            description,
            file_name: fileName ?? null
        });
        navigate('/movie/' + res.data.id);
    }
    return (
        <>
            <NavBar />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Input placeholder="Name" value={name} onChange={(e) => {setName(e.target.value);}}/>
                <Input placeholder="Year" type="number" value={year} onChange={(e) => {setYear(e.target.value);}} />
                <TextField
                    placeholder="Description"
                    multiline
                    rows={2}
                    maxRows={4}
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                Banner: <Input placeholder="image" type="file" onChange={(e) => {setFile(e.target.files[0])}} />
                <Button onClick={handleOnClick}>Save</Button>
            </Box>
        </>
    );
}
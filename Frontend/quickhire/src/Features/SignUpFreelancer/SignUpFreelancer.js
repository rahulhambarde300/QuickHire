// Author: Parth Modi

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { FaTimes, FaPlus } from 'react-icons/fa';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useHistory } from 'react-router-dom';

const SignUpFreelancer = () => {
  const navigate = useHistory();
  const [skills, setSkills] = useState([]);
  const [selectedProfileFile, setSelectedProfileFile] = useState(null);
  const [selectedResumeFile, setSelectedResumeFile] = useState(null);
  const [fullNameError, setFullNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [primaryOccupationError, setPrimaryOccupationError] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [yearsOfExperienceError, setYearsOfExperienceError] = useState('');

  const handleProfileFileChange = (event) => {
    const file = event.target.files[0];
    const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];

    if (file && allowedFormats.includes(file.type)) {
      setSelectedProfileFile(file);
      document.getElementById(
        'selectedProfileFileName',
      ).innerText = `Selected Profile Picture: ${file.name}`;
    } else {
      setSelectedProfileFile(null);
      const errorText = document.getElementById('selectedProfileFileName');
      errorText.innerText =
        'Please select a valid image file (jpg, jpeg, or png).';
      errorText.style.color = 'red';
    }
  };

  const handleResumeFileChange = (event) => {
    const file = event.target.files[0];
    const allowedFormats = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (file && allowedFormats.includes(file.type)) {
      setSelectedResumeFile(file);
      document.getElementById(
        'selectedResumeFileName',
      ).innerText = `Selected Resume: ${file.name}`;
    } else {
      // Reset the selected file and display an error message
      setSelectedResumeFile(null);
      const errorText = document.getElementById('selectedResumeFileName');
      errorText.innerText = 'Please select a valid file (PDF, DOC, or DOCX).';
      errorText.style.color = 'red'; // Applying inline CSS for red color
    }
  };

  const handleAddSkill = () => {
    const newSkill = document.getElementById('skillsInput').value.trim();
    if (newSkill !== '') {
      setSkills([...skills, newSkill]);
      document.getElementById('skillsInput').value = '';
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddSkill();
    }
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!document.getElementById('fullName').value.trim()) {
      setFullNameError('Full Name is required');
      isValid = false;
    } else {
      setFullNameError('');
    }

    if (!document.getElementById('description').value.trim()) {
      setDescriptionError('Description is required');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    if (!document.getElementById('primaryOccupation').value.trim()) {
      setPrimaryOccupationError('Primary Occupation is required');
      isValid = false;
    } else {
      setPrimaryOccupationError('');
    }

    if (!yearsOfExperience) {
      setYearsOfExperienceError('Years of Experience is required');
      isValid = false;
    } else {
      setYearsOfExperienceError('');
    }

    if (isValid) {
      navigate('/success');
    }
  };

  return (
    <Container maxWidth='md' sx={{ paddingY: 4 }}>
      <div>
        <Typography
          variant='h3'
          align='center'
          gutterBottom
          style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bolder',
            color: 'black',
            letterSpacing: '1px',
            marginBottom: '20px',
          }}
        >
          Register as a Freelancer
        </Typography>

        <Typography variant='h4' gutterBottom color='primary'>
          Personal Information
        </Typography>
        <TextField
          required
          fullWidth
          label='Full Name'
          id='fullName'
          placeholder='Enter your full name'
          error={Boolean(fullNameError)}
          helperText={fullNameError}
          margin='normal'
        />
        <TextField
          id='description'
          fullWidth
          label='Description'
          multiline
          rows={4}
          placeholder='Add your description'
          required
          error={Boolean(descriptionError)}
          helperText={descriptionError}
          margin='normal'
        />

        <InputLabel
          htmlFor='profilePicture'
          sx={{ marginTop: 2, color: 'primary.main' }}
        >
          Profile Picture:
        </InputLabel>
        <Button
          component='label'
          variant='contained'
          startIcon={<CloudUploadIcon />}
          htmlFor='profilePicture'
          sx={{
            marginBottom: 2,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          Upload File
          <input
            id='profilePicture'
            type='file'
            style={{ display: 'none' }}
            onChange={handleProfileFileChange}
            accept='.jpg,.jpeg,.png'
          />
        </Button>
        <div id='selectedProfileFileName' className='selected-file'></div>

        <Typography variant='h5' gutterBottom color='primary'>
          Professional Information
        </Typography>
        <TextField
          required
          fullWidth
          label='Primary Occupation'
          id='primaryOccupation'
          error={Boolean(primaryOccupationError)}
          helperText={primaryOccupationError}
          margin='normal'
        />
        <div>
          <Typography variant='h6' gutterBottom color='primary'>
            Skills
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              required
              id='skillsInput'
              label='Type your skills and press Enter'
              onKeyPress={handleKeyPress}
              margin='normal'
            />
            <IconButton onClick={handleAddSkill}>
              <FaPlus />
            </IconButton>
          </div>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ display: 'flex', alignItems: 'center', marginTop: 1 }}
            >
              {skill}
              <IconButton onClick={() => handleRemoveSkill(index)}>
                <FaTimes style={{ cursor: 'pointer' }} />
              </IconButton>
            </div>
          ))}
        </div>
        <div>
          <InputLabel
            htmlFor='yearsOfExperience'
            sx={{ marginTop: 2, color: 'primary.main' }}
          >
            Years of Experience
          </InputLabel>
          <Select
            required
            fullWidth
            label='Years of Experience'
            id='yearsOfExperience'
            defaultValue=''
            value={yearsOfExperience}
            onChange={(event) => setYearsOfExperience(event.target.value)}
            error={Boolean(yearsOfExperienceError)}
            margin='normal'
          >
            <MenuItem value='' disabled>
              Select one
            </MenuItem>
            <MenuItem value='none'>None or less than a year</MenuItem>
            <MenuItem value='1'>1 year</MenuItem>
            <MenuItem value='2'>2 years</MenuItem>
            <MenuItem value='3'>3 years or more</MenuItem>
          </Select>
          {yearsOfExperienceError && (
            <Typography variant='caption' color='error' sx={{ marginTop: 1 }}>
              {yearsOfExperienceError}
            </Typography>
          )}
        </div>

        <InputLabel
          htmlFor='resume'
          sx={{ marginTop: 2, color: 'primary.main' }}
        >
          Resume:
        </InputLabel>
        <Button
          component='label'
          variant='contained'
          startIcon={<CloudUploadIcon />}
          htmlFor='resume'
          sx={{
            marginBottom: 2,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          Upload File
          <input
            id='resume'
            type='file'
            style={{ display: 'none' }}
            onChange={handleResumeFileChange}
            accept='.pdf,.doc,.docx'
          />
        </Button>
        <div id='selectedResumeFileName' className='selected-file'></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button onClick={handleSubmit} variant='contained' color='success'>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SignUpFreelancer;

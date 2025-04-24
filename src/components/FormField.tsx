import React, { CSSProperties } from 'react'
import { Box, TextField, Typography } from '@mui/material'

type InputType = 'text' | 'password' | 'email' | 'number' | 'url' | 'search' | 'tel';

interface FormFieldProps {
    label?: string,
    name?: string,
    type?: InputType,
    placeholder?: string,
    style?: CSSProperties,
}

const FormField = ({
    label,
    name,
    type,
    placeholder,
    style,
}: FormFieldProps) => {
  return (
    <Box display='flex' flexDirection='column' gap={1} style={style}>
        {label && <Typography variant='body1'>{label}</Typography>}
        <TextField name={name} type={type} placeholder={placeholder} />
    </Box>
  )
}

export default FormField
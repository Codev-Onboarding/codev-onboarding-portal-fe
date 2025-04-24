import FormField from '@/components/FormField'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <Box display='flex' flexDirection='column' width='55vh' justifySelf='center'>
        <Box display='flex' justifyContent='center' py={6}>
            <Image 
                src='/images/codev-logo.png' 
                alt='codev-logo'
                width={200}
                height={50} 
            />
        </Box>
        <Box display='flex' flexDirection='column' gap={2} p={4} borderRadius={4} bgcolor='#fff' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'>
            <Typography variant='h5'>Password Reset</Typography>
            <Typography variant='body2'>Enter your email and instructions will be sent to you.</Typography>
            <FormField 
                label='Email'
                name='email'
                type='email'
                placeholder='johndoe@gmail.com'
            />
            <Button variant='contained' sx={{ borderRadius: 2 }}>Reset</Button>
        </Box>
    </Box>
  )
}

export default page
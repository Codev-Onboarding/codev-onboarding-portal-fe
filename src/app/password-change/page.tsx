import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import FormField from '@/components/FormField'
import Image from 'next/image'

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
            <Typography variant='h5'>Password Change</Typography>
            <Typography variant='body2'>Enter your email and your new password <br/> and instructions will be sent to you.</Typography>
            <FormField 
                label='Email'
                name='email'
                type='email'
                placeholder='johndoe@gmail.com'
            />
            <FormField 
                label='Old password'
                name='old-password'
                type='password'
            />
            <FormField 
                label='New password'
                name='new-password'
                type='password'
            />
            <Button variant='contained' sx={{ borderRadius: 2 }}>Submit</Button>
        </Box>
    </Box>
  )
}

export default page
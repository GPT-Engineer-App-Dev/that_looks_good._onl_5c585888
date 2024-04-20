import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useToast, Heading } from '@chakra-ui/react';
import { FaPrint } from 'react-icons/fa';

const Index = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    shippingAddress: '',
    sampleMaterial: '',
    sampleSpecs: '',
    sampleSize: '',
    sampleLocation: '',
    logo: null,
  });
  const [uniqueNumber, setUniqueNumber] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      logo: e.target.files[0],
    });
  };

  const generateUniqueNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const generateTrackingNumber = () => {
    return 'CYK' + Date.now().toString().slice(-8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueNum = generateUniqueNumber();
    const trackNum = generateTrackingNumber();
    setUniqueNumber(uniqueNum);
    setTrackingNumber(trackNum);

    // TODO: Email automation to send form data, unique number, and tracking number
    toast({
      title: 'Form Submitted.',
      description: `Your unique number is ${uniqueNum} and your tracking number is ${trackNum}.`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  const printLabel = () => {
    // TODO: Implement label printing functionality
    alert(`Print Shipping Label:\nCyklop CSC Att.: SampleLab M.Slot [${uniqueNumber}] Wilhelm Röntgenstraat 10, 8013NC, Zwolle, Nederland\nTracking Number: ${trackingNumber}`);
  };

  return (
    <Box bg='#002F5D' minH='100vh' py={10}>
      <Container maxW='container.md'>
        <VStack spacing={5}>
          <Heading as='h1' size='xl' color='white'>
            Shipment Tracking and Sample Request
          </Heading>
          <FormControl id='email' isRequired>
            <FormLabel color='white'>Email Address</FormLabel>
            <Input name='email' type='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your email' color='white' />
          </FormControl>
          <FormControl id='name' isRequired>
            <FormLabel color='white'>Name</FormLabel>  
            <Input name='name' value={formData.name} onChange={handleInputChange} placeholder='Enter your name' color='white' />
          </FormControl>
          <FormControl id='company'>
            <FormLabel color='white'>Company</FormLabel>
            <Input name='company' value={formData.company} onChange={handleInputChange} placeholder='Enter your company' color='white' />
          </FormControl>
          <FormControl id='phone'>
            <FormLabel color='white'>Phone Number</FormLabel>
            <Input name='phone' value={formData.phone} onChange={handleInputChange} placeholder='Enter your phone number' color='white' />
          </FormControl>
          <FormControl id='shippingAddress' isRequired>
            <FormLabel color='white'>Shipping Address</FormLabel>
            <Input name='shippingAddress' value={formData.shippingAddress} onChange={handleInputChange} placeholder='Enter shipping address' color='white' />
          </FormControl>
          <FormControl id='sampleMaterial' isRequired>
            <FormLabel color='white'>Sample Material</FormLabel>
            <Input name='sampleMaterial' value={formData.sampleMaterial} onChange={handleInputChange} placeholder='Enter sample material' color='white' />
          </FormControl>
          <FormControl id='sampleSpecs'>
            <FormLabel color='white'>Sample Specifications</FormLabel>
            <Input name='sampleSpecs' value={formData.sampleSpecs} onChange={handleInputChange} placeholder='Enter sample specifications' color='white' />
          </FormControl>
          <FormControl id='sampleSize'>
            <FormLabel color='white'>Desired Sample Size</FormLabel>
            <Input name='sampleSize' value={formData.sampleSize} onChange={handleInputChange} placeholder='Enter desired sample size' color='white' />
          </FormControl>
          <FormControl id='sampleLocation'>
            <FormLabel color='white'>Sample Location</FormLabel>
            <Input name='sampleLocation' value={formData.sampleLocation} onChange={handleInputChange} placeholder='Enter sample location' color='white' />
          </FormControl>
          <FormControl id='logo'>
            <FormLabel color='white'>Logo/Design Upload</FormLabel>
            <Input name='logo' type='file' onChange={handleFileChange} color='white' />
          </FormControl>
          <Button colorScheme='green' bg='#6CB42C' color='white' leftIcon={<FaPrint />} onClick={handleSubmit} isDisabled={trackingNumber != null}>
            Submit Request
          </Button>
          {trackingNumber && (
            <Button colorScheme='green' bg='#6CB42C' color='white' leftIcon={<FaPrint />} onClick={printLabel}>
              Print Shipping Label
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;

import axios from 'axios';
import Router from 'next/router';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.us';
import React, { useState } from 'react';

interface ContactFormProps {
  email: string;
  password: string;
  mode: string;
  firstName: string;
  lastName: string;
  redirect: string;
}
const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [services, setServices] = useState<string[]>([]);
  const [moreInfo, setMoreInfo] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  //   const [loading, setLoading] = useState<boolean>(false);
  console.log(email, name, phoneNumber, moreInfo);
  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    // if (!loading) {
    //   setLoading(true);
    const date = new Date();
    const userSubmission = {
      email,
      name,
      phoneNumber,
      services,
      moreInfo,
      date,
    };

    event.preventDefault();
    await axios({
      method: 'post',
      url: '/api/contact',
      data: userSubmission,
    }).then(() => {
      Router.push(`/contact`);
    });
    // }
  };

  const removeService = (service: string) => {
    const newServices = services.filter((element) => {
      return service != element;
    });
    console.log(newServices);
    setServices(newServices);
    //   console.log(services)
  };
  const addService = (service: string) => {
    services.push(service);

    setServices(services);
    console.log(services);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='measure ph2  '>
          <label className='f6 b db mb2'>Name </label>
          <input
            id='name'
            required={true}
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            className='input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent hover-bg-black hover-white'
            type='text'
            aria-describedby='name-desc'
          />
        </div>
        <div className='measure ph2'>
          <label className='f6 b db mb2'>Email </label>
          <input
            id='name'
            className='input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent hover-bg-black hover-white'
            type='text'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            aria-describedby='name-desc'
          />
        </div>
        <div className='measure ph2'>
          <label className='f6 b db mb2'>Phone Number </label>
          <Cleave
            className='input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent hover-bg-black hover-white'
            value={phoneNumber}
            onChange={(event: any) => setPhoneNumber(event.currentTarget.value)}
            options={{ phone: true, phoneRegionCode: 'US' }}
          />
        </div>
        <div className='measure ph2'>
          <label className='f6 b db mb2'>
            How can Black Haze help you out?
          </label>
          <div className='flex items-center mb2'>
            <input
              className='mr2'
              type='checkbox'
              id='brandidentity'
              onChange={(event) =>
                services.includes(event.currentTarget.value)
                  ? removeService(event.currentTarget.value)
                  : addService(event.currentTarget.value)
              }
              value='brandidentity'
            />
            <label className='lh-copy'>Brand Identity</label>
          </div>
          <div className='flex items-center mb2'>
            <input
              className='mr2'
              type='checkbox'
              id='contentcreation'
              onChange={(event) =>
                services.includes(event.currentTarget.value)
                  ? removeService(event.currentTarget.value)
                  : addService(event.currentTarget.value)
              }
              value='contentcreation'
            />
            <label className='lh-copy'>Content Creation</label>
          </div>
          <div className='flex items-center mb2'>
            <input
              className='mr2'
              type='checkbox'
              id='socialmedia'
              onChange={(event) =>
                services.includes(event.currentTarget.value)
                  ? removeService(event.currentTarget.value)
                  : addService(event.currentTarget.value)
              }
              value='socialmedia'
            />
            <label className='lh-copy'>Social Media</label>
          </div>
          <div className='flex items-center mb2'>
            <input
              className='mr2'
              type='checkbox'
              id='consulting'
              onChange={(event) =>
                services.includes(event.currentTarget.value)
                  ? removeService(event.currentTarget.value)
                  : addService(event.currentTarget.value)
              }
              value='consulting'
            />
            <label className='lh-copy'>Consulting</label>
          </div>
          <div className='flex items-center mb2'>
            <input
              className='mr2'
              type='checkbox'
              id='marketing'
              onChange={(event) =>
                services.includes(event.currentTarget.value)
                  ? removeService(event.currentTarget.value)
                  : addService(event.currentTarget.value)
              }
              value='marketing'
            />
            <label className='lh-copy'>Marketing</label>
          </div>
          <div className='flex items-center mb2'>
            <input
              className='mr2 '
              type='checkbox'
              id='other'
              onChange={(event) =>
                services.includes(event.currentTarget.value)
                  ? removeService(event.currentTarget.value)
                  : addService(event.currentTarget.value)
              }
              value='other'
            />
            <label className='lh-copy'>Other</label>
          </div>
        </div>
        <div className='measure ph2'>
          <label className='f6 b db mb2 bg-transparent hover-bg-black hover-white'>
            More info
          </label>
          <textarea
            id='comment'
            name='comment'
            value={moreInfo}
            onChange={(event) => setMoreInfo(event.currentTarget.value)}
            className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2'
            aria-describedby='comment-desc'
          />
        </div>
        <div className='measure ph2 pt4'>
          <input
            className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4'
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;

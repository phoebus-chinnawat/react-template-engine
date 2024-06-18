import React, { useCallback } from 'react';
import { FC } from "react";
import { BusinessData } from './types';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@mui/material';


interface IPreviewAppProps {
  children: React.ReactNode;
  business: BusinessData,
};

interface FormData {
    shopName: string
}

export const PreviewApp: FC<IPreviewAppProps> = (props) => {
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            shopName: props.business.shopName
        }
    });

    const onSubmit = useCallback((data: FormData) => {
        console.log('data', data)
    }, []);
    return (
        <div>
            <h1 className='text-2xl'>Editor Mode</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type='text' {...register('shopName')} />
                <Button type='submit'>
                    Submit
                </Button>
            </form>
            {props.children}
        </div>
    );
}

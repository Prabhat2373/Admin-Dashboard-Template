import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { CameraIcon } from '@heroicons/react/24/outline';
import FORM from '../../components/Form';
import InputField from '../../components/Forms/InputField';

const CreateInvoice = () => {
    const [date, changeDate] = useState<any>([new Date(), new Date()])
    console.log("SELECTED", date)
    return (
        <>
            <div className='grid grid-cols-2 h-full gap-7 m-7'>
                <div className='Create bg-white h-full p-7'>
                    <h1 className='text-2xl font-bold text-text-primary'>Create Invoice</h1>
                    <div>
                        <FORM initialValues={{}} onSubmit={(data) => console.log('DATA', data)} validationSchema={{}}>
                            <div >
                                <div className='flex justify-center items-center my-6'>
                                    <label htmlFor="file_input">
                                        <input type="file" id='file_input' className='hidden' />
                                        <div className='p-12 bg-primary-bgPrimary rounded-full cursor-pointer'>
                                            <CameraIcon width={'20px'} hanging={20} />
                                        </div>
                                    </label>
                                </div>
                                <div className='grid grid-cols-2 gap-7'>
                                    <InputField label='Invoice Id' name='invoice_id' type='text' placeholder='#532f5rf' />
                                    <InputField label='Date' name='date' type='date' placeholder='#532f5rf' />
                                </div>
                                <div>
                                    <InputField name='name' label='name' type='text' placeholder='John Doe' />
                                </div>
                                <div className="grid grid-cols-2 gap-7">
                                    <InputField label='Email' name='email' type='email' placeholder='example@email.com' />
                                    <InputField label='Address' name='address' type='text' placeholder='street - 1' />
                                </div>
                            </div>
                        </FORM>
                    </div>
                </div>
                <div className="preview bg-white h-full">
                    PReview Invoice
                </div>
            </div >
        </>
    )
}

export default CreateInvoice
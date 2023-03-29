import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const CreateInvoice = () => {
    const [date, changeDate] = useState<any>([new Date(), new Date()])
    console.log("SELECTED", date)
    return (
        <>
            <div>
                <div className='Create'>
                    Create Invoice
                    <DateRangePicker value={date} onChange={changeDate} className={'bg-white'}/>
                </div>
                <div className="preview">
                    PReview Invoice
                </div>
            </div>
        </>
    )
}

export default CreateInvoice
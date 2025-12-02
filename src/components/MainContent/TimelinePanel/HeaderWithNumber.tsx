import React from 'react';

interface Props {
    title: string;
    number: number | string;
}

const HeaderWithNumber: React.FC<Props> = ({ title, number = 0 }) => {
    return (
        <div className="w-full flex  gap-3 pt-[13px] pr-[15px] ">
            

            <h2
                className="font-medium text-[16px] leading-[150%] tracking-[0%] text-[#181C34]"
                style={{  textAlign: 'right' }}
            >
                {title}
            </h2>
            <div
                className="flex justify-center items-center w-[28px] h-[28px] rounded-[8px] border border-gray-300"
                style={{ padding: '12px' }}
            >
                {number}
            </div>
        </div>
    );
};

export default HeaderWithNumber;

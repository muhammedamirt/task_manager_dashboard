import React from 'react'

const Avatars = ({ image, count }) => {
    return (
        <>
            <div className='flex items-center gap-2 mt-2'>
                <div className={`flex ${count === 2 ? "-space-x-3" : "-space-x-4"} `}>
                    {image.map((item, index) => (
                        index < count && <img key={index} src={item} className='border-2 border-white rounded-full' width="40" height='40' alt="Icon" style={{ color: "transparent" }} />
                    ))}
                    {image.length > count && <p className='flex items-center justify-center w-10 h-10 text-xs font-medium text-[#606C80] bg-[#F2F4F7] rounded-full cursor-pointer'>{`+${image.length - count}`}</p>}
                </div>
                <img src="https://dashboard-ui-x.vercel.app/images/add_button.svg" loading="lazy" width='40' height='40' className="cursor-pointer" style={{ color: "transparent" }} alt="" />
            </div>
        </>
    )
}

export default Avatars
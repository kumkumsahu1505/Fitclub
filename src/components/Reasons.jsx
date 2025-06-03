import React from 'react';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import nb from '../assets/nb.png';
import tick from '../assets/tick.png';
import ReasonPoints from './ReasonPoints';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

function Reasons() {
    return (
        <div id='why' className="flex flex-col md:flex-row items-start justify-between gap-8 px-8 mt-20">
            {/* Image section (Left Side) */}
            <div className="flex-1 grid grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px] h-full">
                <img src={image1} alt="1st image" className="object-cover w-full h-full row-span-2" />
                <img src={image2} alt="2nd image" className="object-cover w-full h-full col-span-2" />
                <img src={image3} alt="3rd image" className="object-cover w-full h-full" />
                <img src={image4} alt="4th image" className="object-cover w-full h-full" />
            </div>

            {/* Reason Section (Right Side) */}
            <div className="flex-1 flex flex-col gap-6 items-start justify-start h-full">
                <p className="text-xl text-[var(--orange)] font-bold">Some Reasons</p>
                <h1 className="text-5xl font-semibold text-white">
                    <span className="stroke-text">WHY</span> CHOOSE US?
                </h1>

                {/* Reason Points */}
                <div className="flex flex-col leading-12 font-semibold text-xl text-white">
                    <ReasonPoints image={tick} text="Over 140+ expert coaches" />
                    <ReasonPoints image={tick} text="Train smarter and faster than before" />
                    <ReasonPoints image={tick} text="1 free program for new members" />
                    <ReasonPoints image={tick} text="Reliable partners" />
                </div>

                {/* Partners Section */}
                <span className="text-neutral-500 text-xl font-medium">OUR PARTNERS</span>
                <div className="flex gap-6 items-center">
                    <img src={nb} alt="NB" className="h-8 w-auto" />
                    <img src={adidas} alt="Adidas" className="h-8 w-auto" />
                    <img src={nike} alt="Nike" className="h-8 w-auto" />
                </div>
            </div>
        </div>
    );
}

export default Reasons;

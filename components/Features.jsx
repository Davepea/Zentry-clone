"use client"
import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoTilt = ({ children, className = ''})=>{
    const [transformStyle, setTransformStyle] = useState('')
    const itemRef = useRef();

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
    
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();
    
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
    
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;
    
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
        setTransformStyle(newTransform);
    };
    const handleMouseLeave = () => {
        setTransformStyle('')
    }
    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}

        </div>
    )
}

const BentoCard = ({ src, title, description })=>{
    return (
        <div className=' relative size-full'>
            <video src={src}
            loop
            muted
            autoPlay
            className=' absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className=' relative z-10 flex size-full flex-col justify-between p-5 text-blue-100'>
                <div>
                    <h1 className=' bento-title special-font'>{title}</h1>
                    {
                        description && (
                            <p className='mt-3 max-w-64 text-xs'>{description}</p>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className=' font-circular text-lg text-blue-100'> Into the Metagame Layer</p>
           
                <p className='max-w-md font-circular text-lg text-blue-100 opacity-50'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quod est eos ratione ducimus necessitatibus labore quo reiciendis perspiciatis ad accusamus fugiat earum? Enim harum praesentium omnis dignissimos, magni laboriosam repellendus? Quod eos doloribus illo necessitatibus omnis veniam maxime dolor?
                </p>
            </div>
            <BentoTilt className=' border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard
                    src="videos/feature-1.mp4"
                    title={
                        <>radi<b>an</b>t</>
                    }
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quod est eos ratione ducimus necessitatibus labore quo reiciendis perspiciatis ad accusamus fugiat earum? Enim harum praesentium omnis dignissimos, magni laboriosam repellendus? Quod eos doloribus illo necessitatibus omnis veniam maxime dolor?"

                
                />
            </BentoTilt>
            <div className=' grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                <BentoTilt className='bento-tilt_1 row-span-1 md:!col-span-1 md:row-span-2'>
                    <BentoCard
                        title={<>Zig<b>m</b>a</>}
                        src="videos/feature-2.mp4"
                        description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                    />

                </BentoTilt>
                <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:!col-span-1 md:ms-0'>
                    <BentoCard
                    src="videos/feature-3.mp4"
                    title={<>n<b>e</b>xus</>}
                    description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                    />
                </BentoTilt>
                  <BentoTilt className='bento-tilt_1 me-14 md:!col-span-1 md:me-0'>
                <BentoCard
                    src="videos/feature-4.mp4"
                    title={<>az<b>u</b>l</>}
                    description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                />
                </BentoTilt>

              <BentoTilt className='bento-tilt_2'>
                <div className='flex size-full flex-col justify-between bg-violet-400 p-5'>
                    <h1 className='bento-title special-font max-w-64'>M<b>o</b>re co<b>m</b>ing s<b>o</b>on</h1>

                    <TiLocationArrow className='m-5 scale-[5] self-end'/>
                </div>
              </BentoTilt>
              <BentoTilt className='bento-tilt_2'>
                <video 
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className='size-full object-cover object-center'
                />
              </BentoTilt>
            </div>
        </div>
    </section>
  )
}

export default Features
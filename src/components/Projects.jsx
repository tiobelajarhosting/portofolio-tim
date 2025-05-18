import React from 'react'
import Project1 from '../../public/project/projek1.png'
import Project2 from '../../public/project/projek2.png'
import Project3 from '../../public/project/projek3.png'
import Project4 from '../../public/project/project4.jpeg'
import Project5 from '../../public/project/project5.jpeg'
import Project6 from '../../public/project/project6.jpeg'

const Projects = () => {
  return (
    <div id='Projects' className='min-h-screen w-full flex flex-col items-center justify-center gap-16 py-20 px-10 md:px-16 xl:px-32'>
        <h1 className='text-center text-5xl font-light mb-8'>Projects</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
            {/* Project Card 1 */}
            <div className="flex flex-col border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-teal-500 rounded-xl hover:bg-teal-50 bg-white shadow-md hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={Project1}
                        alt="Project 1"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <h1 className='text-2xl font-semibold text-gray-800'>Portofolio Website</h1>
                    <h3 className='text-lg text-teal-600 font-medium'>Php, Html, Css, JavaScript</h3>
                    <p className='text-gray-600'>
                        Aplikasi web modern dengan desain responsif dan fitur interaktif.
                    </p>
                </div>
            </div>

            {/* Project Card 2 */}
            <div className="flex flex-col border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-teal-500 rounded-xl hover:bg-teal-50 bg-white shadow-md hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={Project2}
                        alt="Project 2"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <h1 className='text-2xl font-semibold text-gray-800'>E-commerce Website</h1>
                    <h3 className='text-lg text-teal-600 font-medium'>React Js, php, JavaScript</h3>
                    <p className='text-gray-600'>
                        Toko daring berfitur lengkap dengan daftar produk dan pemrosesan pembayaran.
                    </p>
                </div>
            </div>

            {/* Project Card 3 */}
            <div className="flex flex-col border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-teal-500 rounded-xl hover:bg-teal-50 bg-white shadow-md hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={Project3}
                        alt="Project 3"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <h1 className='text-2xl font-semibold text-gray-800'>Booking Tiket Bus</h1>
                    <h3 className='text-lg text-teal-600 font-medium'>React Js, php, JavaScript</h3>
                    <p className='text-gray-600'>
                       Aplikasi produktivitas dengan pembaruan waktu nyata dan sinkronisasi cloud.
                    </p>
                </div>
            </div>

            {/* Project Card 4 */}
            <div className="flex flex-col border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-teal-500 rounded-xl hover:bg-teal-50 bg-white shadow-md hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={Project4}
                        alt="Project 4"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <h1 className='text-2xl font-semibold text-gray-800'>UMKM Website</h1>
                    <h3 className='text-lg text-teal-600 font-medium'>React Js, php, JavaScript</h3>
                    <p className='text-gray-600'>
                       website umkm untuk custommer agar lebih mudah dalam melakukan pemesanan dan pembelian secara online.
                    </p>
                </div>
            </div>

            {/* Project Card 5 */}
            <div className="flex flex-col border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-teal-500 rounded-xl hover:bg-teal-50 bg-white shadow-md hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={Project5}
                        alt="Project 5"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <h1 className='text-2xl font-semibold text-gray-800'>Portofolio Website</h1>
                    <h3 className='text-lg text-teal-600 font-medium'>Html, php, JavaScript</h3>
                    <p className='text-gray-600'>
                       website portofolio dari frontend dev.
                    </p>
                </div>
            </div>

            {/* Project Card 6 */}
            <div className="flex flex-col border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden border-teal-500 rounded-xl hover:bg-teal-50 bg-white shadow-md hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={Project6}
                        alt="Project 6"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-6 space-y-3">
                    <h1 className='text-2xl font-semibold text-gray-800'>UMKM Website</h1>
                    <h3 className='text-lg text-teal-600 font-medium'>React Js, php, JavaScript</h3>
                    <p className='text-gray-600'>
                        Toko daring berfitur lengkap dengan daftar produk dan pemrosesan pembayaran.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'

const Experience = () => {
  return (
    <div id='Experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36 bg-gray-50'>
        <h1 className='text-center text-5xl font-light text-gray-800'>Pengalaman</h1>

        <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10 w-full max-w-6xl'>
            {/* Raditya's Experience */}
            <div className='flex-1'>
                <div className="relative space-y-1 border-l-2 border-teal-500 p-8 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className='text-xl font-semibold md:text-2xl text-teal-600'>SMKN 1 Tengaran</h3>
                    <p className='font-light text-lg text-gray-600'>Sekolah Menengah Kejuruan</p>
                    <p className='text-sm text-gray-600'>
                        Menempuh pendidikan di jurusan Rekayasa Perangkat Lunak (RPL). 
                        Memperoleh dasar-dasar pemrograman dan pengembangan web. 
                        Aktif dalam berbagai kegiatan ekstrakurikuler terkait teknologi.
                    </p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500 border-2 border-white'></span>
                </div>

                <div className="relative space-y-1 border-l-2 border-teal-500 p-8 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mt-6">
                    <h3 className='text-xl font-semibold md:text-2xl text-teal-600'>Bootcamp Coding</h3>
                    <p className='font-light text-lg text-gray-600'>Program Intensif</p>
                    <p className='text-sm text-gray-600'>
                        Mengikuti bootcamp selama 3 bulan untuk mengasah skill front-end development. 
                        Mempelajari React.js, Tailwind CSS, dan konsep modern web development. 
                        Menyelesaikan beberapa proyek portfolio selama program.
                    </p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500 border-2 border-white'></span>
                </div>

                <div className="relative space-y-1 border-l-2 border-teal-500 p-8 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mt-6">
                    <h3 className='text-xl font-semibold md:text-2xl text-teal-600'>Universitas Negeri Semarang</h3>
                    <p className='font-light text-lg text-gray-600'>Perguruan Tinggi Negeri</p>
                    <p className='text-sm text-gray-600'>
                        Melanjutkan pendidikan di bidang Ilmu Komputer. 
                        Fokus pada pengembangan skill full-stack development dan UI/UX design. 
                        Aktif dalam penelitian dan pengembangan proyek teknologi pendidikan.
                    </p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500 border-2 border-white'></span>
                </div>
            </div>
            
            {/* Tio's Experience */}
            <div className='flex-1 mt-10 md:mt-0'>
                <div className="relative space-y-1 border-l-2 border-teal-500 p-8 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className='text-xl font-semibold md:text-2xl text-teal-600'>SMKN 1 Tengaran</h3>
                    <p className='font-light text-lg text-gray-600'>Sekolah Menengah Kejuruan</p>
                    <p className='text-sm text-gray-600'>
                        Belajar di jurusan Rekayasa Perangkat Lunak dengan fokus pada back-end development. 
                        Menguasai dasar-dasar database dan server management. 
                        Berpartisipasi dalam lomba coding tingkat sekolah.
                    </p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500 border-2 border-white'></span>
                </div>

                <div className="relative space-y-1 border-l-2 border-teal-500 p-8 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mt-6">
                    <h3 className='text-xl font-semibold md:text-2xl text-teal-600'>Bootcamp Programming</h3>
                    <p className='font-light text-lg text-gray-600'>Program Intensif</p>
                    <p className='text-sm text-gray-600'>
                        Mengikuti bootcamp khusus back-end development selama 4 bulan. 
                        Mempelajari Node.js, Express, MongoDB, dan sistem API. 
                        Membangun beberapa aplikasi berbasis server sebagai proyek akhir.
                    </p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500 border-2 border-white'></span>
                </div>

                <div className="relative space-y-1 border-l-2 border-teal-500 p-8 text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow mt-6">
                    <h3 className='text-xl font-semibold md:text-2xl text-teal-600'>Universitas Sebelas Maret</h3>
                    <p className='font-light text-lg text-gray-600'>Perguruan Tinggi Negeri</p>
                    <p className='text-sm text-gray-600'>
                        Melanjutkan studi di bidang Teknik Informatika. 
                        Berkonsentrasi pada pengembangan sistem terdistribusi dan cloud computing. 
                        Terlibat dalam penelitian sistem database performa tinggi.
                    </p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500 border-2 border-white'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
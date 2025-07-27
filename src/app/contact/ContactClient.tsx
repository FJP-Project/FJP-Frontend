'use client'

import { Clock, Headphones, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

const ContactClient: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-42 md:py-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/assets/images/contactBG.jpg')"
          }}
        />
        <div className="relative container mx-auto px-3 sm:px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6 border border-yellow-500/30">
            <Headphones className="w-4 h-4 text-yellow-400" />
            <span className="text-sm md:text-base">Hubungi Kami</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent leading-tight">
            Hubungi Tim Support Kami
          </h1>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-8">
            Dapatkan bantuan profesional dari tim support berpengalaman kami.
            Kami siap membantu Anda dengan respon cepat dan solusi terbaik untuk kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] sm:py-7 py-5 text-xs md:text-sm lg:text-lg text-black font-semibold transition-all duration-300 transform sm:hover:scale-105 cursor-pointer">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Langsung
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-400 text-xs md:text-sm lg:text-lg sm:py-7 py-5 bg-transparent hover:bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] font-semibold hover:text-black transition-all duration-300 sm:hover:scale-105 cursor-pointer">
              <Mail className="w-4 h-4 mr-2" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 relative inline-block">
            Informasi <span className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] bg-clip-text text-transparent">Kontak</span>
            <span className="block w-4/5 h-[4px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] mt-3 mx-auto rounded" />
          </h2>
            <p className="text-xs md:text-md lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Hubungi kami melalui berbagai channel komunikasi yang tersedia. Tim support kami siap membantu Anda kapan saja.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 space-y-4 md:space-y-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                    Hubungi Kami
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-md lg:text-lg">
                    Berbagai cara untuk menghubungi tim support profesional kami
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded-lg p-2 md:p-3 flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Email Support</h4>
                      <p className="font-medium text-xs md:text-sm lg:text-lg break-all">support@fjpofficial.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded-lg p-2 md:p-3 flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Telepon & WhatsApp</h4>
                      <p className="text-gray-600 text-xs md:text-sm lg:text-lg">+62 812 3456 7890 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] rounded-lg p-2 md:p-3 flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Alamat Kantor</h4>
                      <p className="text-gray-600 text-xs md:text-sm lg:text-lg mb-2">
                      Perum. Jasamarga Green Residence, Blok AB3, No. 9, Kendal Cabe, Kendalpecabean, Kec. Candi, Kabupaten Sidoarjo, Jawa Timur 61271
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm lg:text-md">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Senin-Sabtu: 08:00 - 16:00 WIB</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                    Lokasi Kami
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-md lg:text-lg">
                    Kunjungi kantor kami di lokasi strategis Jakarta Selatan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.23693185089542!2d112.74337750960034!3d-7.488324647628176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e768973db3b3%3A0xc4da53dfebea0685!2sJasa%20pasang%20ACP%2C%20Advertising%2C%20Kitchen%20Set%2C%20Videotron%20seluruh%20Indonesia%20%7C%20Fahresa%20Jaya%20Pratama!5e0!3m2!1sid!2sid!4v1752099623840!5m2!1sid!2sid" className='w-full h-full'></iframe>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-200 max-w-xs">
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactClient;

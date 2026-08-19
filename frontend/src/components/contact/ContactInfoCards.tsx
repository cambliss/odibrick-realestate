import React from 'react';

const ContactInfoCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visit Our Office Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(0, 74, 173, 0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#004AAD]">
              location_on
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#1F2937] mb-2">
              Visit Our Office
            </h3>
            <p className="font-manrope font-extralight text-sm text-[#4B5563] leading-relaxed mb-3">
              Survey No - 75/2 Balapur(V) Balapur (M),<br />
              Hyderabad, Telangana 500005
            </p>
            <a
              href="https://maps.app.goo.gl/hRBhbF1jfkYPphct8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-manrope font-medium text-sm text-[#004AAD] hover:text-[#003B8B] transition-[color]"
            >
              <span>Get Directions</span>
              <span className="material-icons text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Call or Email Us Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(0, 74, 173, 0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#004AAD]">
              phone
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#1F2937] mb-3">
              Call or Email Us
            </h3>
            <div className="space-y-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 font-manrope font-extralight text-sm text-[#4B5563] hover:text-[#004AAD] transition-[color]"
              >
                <span className="material-icons text-base">
                  call
                </span>
                <span>040 2459 5107</span>
              </a>
              <a
                href="mailto:hello@odibrick.com"
                className="flex items-center gap-2 font-manrope font-extralight text-sm text-[#4B5563] hover:text-[#004AAD] transition-[color]"
              >
                <span className="material-icons text-base">
                  email
                </span>
                <span>hello@odibrick.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[rgba(0, 74, 173, 0.1)] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="material-icons text-2xl text-[#004AAD]">
              schedule
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-syne font-bold text-lg text-[#1F2937] mb-3">
              Business Hours
            </h3>
            <div className="space-y-2 font-manrope font-extralight text-sm text-[#4B5563]">
              <div className="flex justify-between items-center">
                <span>Mon - Fri:</span>
                <span className="font-medium text-[#1F2937]">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday:</span>
                <span className="font-medium text-[#1F2937]">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday:</span>
                <span className="font-medium text-[#1F2937]">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
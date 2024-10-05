import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a  href="mailto:pbagga.kl1@gmail.com">
          <i class="ri-mail-line text-gray-400 "></i>
          </a>
          <a href="https://www.linkedin.com/in/pawan-bagga-kl1/" target="_blank">
              <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a href="https://github.com/PawanBagga27" target="_blank">
          <i class="ri-github-line text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  ); 
}

export default LeftSider; 

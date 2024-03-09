"use client";

const SideBar = () => {
  return (
    <>
      <div className="lg:hidden block">
        <div className="w-full fixed bottom-0 z-50 bg-white">
          <div className="grid grid-cols-5 w-full px-3 pt-2 pb-4 border-t">
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-[#E1E4E8] group-hover:text-[#E1E4E8]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 20.9998H7C5.93913 20.9998 4.92172 20.5784 4.17157 19.8282C3.42143 19.0781 3 18.0607 3 16.9998V10.7078C2.99999 10.02 3.17732 9.34386 3.51487 8.74461C3.85242 8.14536 4.33879 7.64326 4.927 7.28682L9.927 4.25682C10.5521 3.87801 11.2691 3.67773 12 3.67773C12.7309 3.67773 13.4479 3.87801 14.073 4.25682L19.073 7.28682C19.6611 7.64317 20.1473 8.14511 20.4849 8.74417C20.8224 9.34324 20.9998 10.0192 21 10.7068V16.9998C21 18.0607 20.5786 19.0781 19.8284 19.8282C19.0783 20.5784 18.0609 20.9998 17 20.9998H15M9 20.9998V16.9998C9 16.2042 9.31607 15.4411 9.87868 14.8785C10.4413 14.3159 11.2044 13.9998 12 13.9998V13.9998C12.7956 13.9998 13.5587 14.3159 14.1213 14.8785C14.6839 15.4411 15 16.2042 15 16.9998V20.9998M9 20.9998H15"
                    fill="currentColor"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 21V17C9 16.2044 9.31607 15.4413 9.87868 14.8787C10.4413 14.3161 11.2044 14 12 14C12.7956 14 13.5587 14.3161 14.1213 14.8787C14.6839 15.4413 15 16.2044 15 17V21M9 21H15Z"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7.76629V17.0603C21.0001 17.1674 20.9714 17.2726 20.9171 17.3649C20.8627 17.4572 20.7847 17.5333 20.691 17.5853L12.291 22.2513C12.202 22.3007 12.1018 22.3266 12 22.3266C11.8982 22.3266 11.798 22.3007 11.709 22.2513L3.309 17.5853C3.21532 17.5333 3.13725 17.4572 3.08292 17.3649C3.02858 17.2726 2.99995 17.1674 3 17.0603V7.76629C3.00013 7.65934 3.02884 7.55436 3.08317 7.46223C3.1375 7.3701 3.21547 7.29416 3.309 7.24229L11.709 2.57529C11.798 2.52591 11.8982 2.5 12 2.5C12.1018 2.5 12.202 2.52591 12.291 2.57529L20.691 7.24229C20.7845 7.29416 20.8625 7.3701 20.9168 7.46223C20.9712 7.55436 20.9999 7.65934 21 7.76629Z"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3.52832 7.70728L11.7083 12.2513C11.7975 12.3008 11.8978 12.3269 11.9998 12.3269C12.1018 12.3269 12.2022 12.3008 12.2913 12.2513L20.5003 7.69128M12.0003 21.4133V12.4133"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.691 12.2423L3.891 7.9083C3.79964 7.85763 3.69663 7.8317 3.59217 7.83306C3.48771 7.83442 3.38541 7.86304 3.29541 7.91607C3.2054 7.96911 3.1308 8.04472 3.07899 8.13544C3.02718 8.22616 2.99995 8.32883 3 8.4333V17.0603C2.99995 17.1674 3.02858 17.2726 3.08292 17.3649C3.13725 17.4573 3.21532 17.5333 3.309 17.5853L11.109 21.9183C11.2004 21.969 11.3034 21.9949 11.4078 21.9935C11.5123 21.9922 11.6146 21.9636 11.7046 21.9105C11.7946 21.8575 11.8692 21.7819 11.921 21.6912C11.9728 21.6004 12.0001 21.4978 12 21.3933V12.7663C11.9999 12.6593 11.9712 12.5544 11.9168 12.4622C11.8625 12.3701 11.7845 12.2942 11.691 12.2423Z"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.4 10.2H15.6M8.4 13.8H12M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 13.6389 3.4383 15.177 4.2042 16.5L3.45 20.55L7.5 19.7958C8.86758 20.5869 10.4201 21.0024 12 21V21Z"
                    fill="currentColor"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7.5V5.5C8 4.39543 8.89543 3.5 10 3.5H14C15.1046 3.5 16 4.39543 16 5.5V7.5"
                    fill="currentColor"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <rect
                    x="3"
                    y="7.5"
                    width="18"
                    height="13"
                    rx="2"
                    fill="currentColor"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>
                  <path
                    d="M3 13.5C8.66095 16.3526 15.339 16.3526 21 13.5"
                    stroke="#212121"
                    strokeWidth="1.5"
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 16.5L21 21M3 10.7143C3 11.7273 3.19954 12.7305 3.58721 13.6664C3.97489 14.6024 4.54312 15.4528 5.25946 16.1691C5.9758 16.8854 6.82622 17.4537 7.76216 17.8414C8.6981 18.229 9.70123 18.4286 10.7143 18.4286C11.7273 18.4286 12.7305 18.229 13.6664 17.8414C14.6024 17.4537 15.4528 16.8854 16.1691 16.1691C16.8854 15.4528 17.4537 14.6024 17.8414 13.6664C18.229 12.7305 18.4286 11.7273 18.4286 10.7143C18.4286 8.66833 17.6158 6.70617 16.1691 5.25946C14.7224 3.81275 12.7602 3 10.7143 3C8.66833 3 6.70617 3.81275 5.25946 5.25946C3.81275 6.70617 3 8.66833 3 10.7143V10.7143Z"
                    fill="currentColor"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="!w-[118px] border-r flex-col flex-shrink-0 fixed h-screen pb-2 lg:flex justify-between hidden px-8">
        <div className="relative my-3">
          <img alt="flexiple" width="55" height="55" src="/flexiple-blue.svg" />
        </div>
        <div className="flex flex-col justify-between items-start pl-4 h-full overflow-y-auto hide-scrollbar">
          <div className="mt-6">
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-[#0D0D0D] group-hover:text-[#0D0D0D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.10474 19.9639C1.44788 19.9639 0.104736 18.6208 0.104736 16.9639V9.3C0.104736 8.44954 0.465701 7.63904 1.09784 7.07012L8.09784 0.770118C9.23876 -0.256705 10.9707 -0.256707 12.1116 0.770117L19.1116 7.07012C19.7438 7.63904 20.1047 8.44954 20.1047 9.3V16.9639C20.1047 18.6208 18.7616 19.9639 17.1047 19.9639H3.10474ZM18.6047 9.3V16.9639C18.6047 17.7923 17.9332 18.4639 17.1047 18.4639H14.1047V12.9639C14.1047 11.3071 12.7616 9.96391 11.1047 9.96391H9.10474C7.44788 9.96391 6.10474 11.3071 6.10474 12.9639V18.4639H3.10474C2.27631 18.4639 1.60474 17.7923 1.60474 16.9639V9.3C1.60474 8.87477 1.78522 8.46952 2.10129 8.18506L9.10129 1.88506C9.67175 1.37165 10.5377 1.37165 11.1082 1.88506L18.1082 8.18506C18.4243 8.46952 18.6047 8.87477 18.6047 9.3ZM7.60474 18.4639V12.9639C7.60474 12.1355 8.27631 11.4639 9.10474 11.4639H11.1047C11.9332 11.4639 12.6047 12.1355 12.6047 12.9639V18.4639H7.60474Z"
                    fill="#838383"
                  />
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.6351 7.2442C14.928 6.9513 14.928 6.47643 14.6351 6.18354C14.3422 5.89064 13.8673 5.89064 13.5744 6.18354L11.4456 8.31234C11.0489 8.09039 10.5916 7.96387 10.1047 7.96387C8.58595 7.96387 7.35474 9.19508 7.35474 10.7139C7.35474 12.2326 8.58595 13.4639 10.1047 13.4639C11.6235 13.4639 12.8547 12.2326 12.8547 10.7139C12.8547 10.227 12.7282 9.76969 12.5063 9.37301L14.6351 7.2442ZM8.85474 10.7139C8.85474 10.0235 9.41438 9.46387 10.1047 9.46387C10.7951 9.46387 11.3547 10.0235 11.3547 10.7139C11.3547 11.4042 10.7951 11.9639 10.1047 11.9639C9.41438 11.9639 8.85474 11.4042 8.85474 10.7139Z"
                    fill="#838383"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1047 2.46387C5.54839 2.46387 1.85474 6.15752 1.85474 10.7139C1.85474 12.9951 2.77965 15.0589 4.27675 16.5531C4.56992 16.8457 4.57038 17.3206 4.27777 17.6138C3.98515 17.907 3.51028 17.9074 3.21711 17.6148C1.44962 15.8507 0.354736 13.4094 0.354736 10.7139C0.354736 5.32909 4.71996 0.963867 10.1047 0.963867C15.4895 0.963867 19.8547 5.32909 19.8547 10.7139C19.8547 13.406 18.7626 15.8446 16.999 17.6082C16.7061 17.9011 16.2313 17.9011 15.9384 17.6082C15.6455 17.3153 15.6455 16.8404 15.9384 16.5475C17.4321 15.0537 18.3547 12.9922 18.3547 10.7139C18.3547 6.15752 14.6611 2.46387 10.1047 2.46387Z"
                    fill="#838383"
                  />
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8592 2.2689L13.0744 1.05365C13.3673 0.760761 13.8422 0.760761 14.1351 1.05365C14.428 1.34655 14.428 1.82142 14.1351 2.11431L13.0219 3.22746C13.5428 3.87142 13.8547 4.69129 13.8547 5.58401V6.13685C14.6202 6.72422 15.2701 7.48264 15.7672 8.36088L17.0744 7.05368C17.3673 6.76079 17.8422 6.76079 18.1351 7.05368C18.428 7.34658 18.428 7.82145 18.1351 8.11435L16.6351 9.61435C16.5648 9.68457 16.4842 9.73796 16.398 9.77451C16.6181 10.425 16.7635 11.1164 16.8235 11.834H19.1047C19.5189 11.834 19.8547 12.1698 19.8547 12.584C19.8547 12.9982 19.5189 13.334 19.1047 13.334H16.8231C16.7625 14.049 16.6164 14.7404 16.3953 15.3924C16.4824 15.4289 16.5641 15.4827 16.6351 15.5537L18.1351 17.0537C18.428 17.3466 18.428 17.8215 18.1351 18.1143C17.8422 18.4072 17.3673 18.4072 17.0744 18.1143L15.7651 16.8051C14.5788 18.9063 12.524 20.334 10.1047 20.334C7.68552 20.334 5.63072 18.9063 4.44434 16.8051L3.13507 18.1143C2.84217 18.4072 2.3673 18.4072 2.07441 18.1143C1.78151 17.8215 1.78151 17.3466 2.07441 17.0537L3.57441 15.5537C3.64538 15.4827 3.72703 15.4289 3.81419 15.3924C3.59312 14.7404 3.44694 14.049 3.38639 13.334H1.10474C0.690523 13.334 0.354736 12.9982 0.354736 12.584C0.354736 12.1698 0.690523 11.834 1.10474 11.834H3.38597C3.44601 11.1164 3.5914 10.425 3.81145 9.77451C3.72532 9.73796 3.64463 9.68457 3.57441 9.61435L2.07441 8.11435C1.78151 7.82145 1.78151 7.34658 2.07441 7.05368C2.3673 6.76079 2.84217 6.76079 3.13507 7.05368L4.44226 8.36088C4.93939 7.48264 5.58929 6.72422 6.35474 6.13685V5.58401C6.35474 4.69129 6.66669 3.87142 7.18753 3.22746L6.07441 2.11435C5.78151 1.82145 5.78151 1.34658 6.07441 1.05368C6.3673 0.760792 6.84217 0.760792 7.13507 1.05368L8.35028 2.2689C8.87378 1.99127 9.47089 1.83401 10.1047 1.83401C10.7386 1.83401 11.3357 1.99127 11.8592 2.2689ZM7.85474 5.83401H12.3547V5.58401C12.3547 4.34137 11.3474 3.33401 10.1047 3.33401C8.8621 3.33401 7.85474 4.34137 7.85474 5.58401V5.83401ZM7.25865 7.33401C5.8333 8.4334 4.85474 10.3549 4.85474 12.584C4.85474 15.8254 6.88476 18.34 9.35474 18.7692V7.33401H7.25865ZM10.8547 7.33401V18.7692C13.3247 18.34 15.3547 15.8254 15.3547 12.584C15.3547 10.3549 14.3762 8.4334 12.9508 7.33401H10.8547Z"
                    fill="#838383"
                  />
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.10474 1.83398H3.10474C2.27631 1.83398 1.60474 2.50556 1.60474 3.33398V5.33398C1.60474 6.16241 2.27631 6.83398 3.10474 6.83398H5.10474C5.93316 6.83398 6.60474 6.16241 6.60474 5.33398V3.33398C6.60474 2.50556 5.93316 1.83398 5.10474 1.83398ZM3.10474 0.333984C1.44788 0.333984 0.104736 1.67713 0.104736 3.33398V5.33398C0.104736 6.99084 1.44788 8.33398 3.10474 8.33398H5.10474C6.76159 8.33398 8.10474 6.99084 8.10474 5.33398V3.33398C8.10474 1.67713 6.76159 0.333984 5.10474 0.333984H3.10474Z"
                    fill="#5B80FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.10474 11.834H3.10474C2.27631 11.834 1.60474 12.5056 1.60474 13.334V15.334C1.60474 16.1624 2.27631 16.834 3.10474 16.834H5.10474C5.93316 16.834 6.60474 16.1624 6.60474 15.334V13.334C6.60474 12.5056 5.93316 11.834 5.10474 11.834ZM3.10474 10.334C1.44788 10.334 0.104736 11.6771 0.104736 13.334V15.334C0.104736 16.9908 1.44788 18.334 3.10474 18.334H5.10474C6.76159 18.334 8.10474 16.9908 8.10474 15.334V13.334C8.10474 11.6771 6.76159 10.334 5.10474 10.334H3.10474Z"
                    fill="#5B80FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1047 1.83398H13.1047C12.2763 1.83398 11.6047 2.50556 11.6047 3.33398V5.33398C11.6047 6.16241 12.2763 6.83398 13.1047 6.83398H15.1047C15.9332 6.83398 16.6047 6.16241 16.6047 5.33398V3.33398C16.6047 2.50556 15.9332 1.83398 15.1047 1.83398ZM13.1047 0.333984C11.4479 0.333984 10.1047 1.67713 10.1047 3.33398V5.33398C10.1047 6.99084 11.4479 8.33398 13.1047 8.33398H15.1047C16.7616 8.33398 18.1047 6.99084 18.1047 5.33398V3.33398C18.1047 1.67713 16.7616 0.333984 15.1047 0.333984H13.1047Z"
                    fill="#5B80FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1047 11.834H13.1047C12.2763 11.834 11.6047 12.5056 11.6047 13.334V15.334C11.6047 16.1624 12.2763 16.834 13.1047 16.834H15.1047C15.9332 16.834 16.6047 16.1624 16.6047 15.334V13.334C16.6047 12.5056 15.9332 11.834 15.1047 11.834ZM13.1047 10.334C11.4479 10.334 10.1047 11.6771 10.1047 13.334V15.334C10.1047 16.9908 11.4479 18.334 13.1047 18.334H15.1047C16.7616 18.334 18.1047 16.9908 18.1047 15.334V13.334C18.1047 11.6771 16.7616 10.334 15.1047 10.334H13.1047Z"
                    fill="#5B80FF"
                  />
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M16.1572 12.0965C16.2428 12.2298 16.3667 12.3339 16.5095 12.4024C17.6011 12.9265 18.3547 14.0422 18.3547 15.334V17.334C18.3547 17.7482 18.6905 18.084 19.1047 18.084C19.519 18.084 19.8547 17.7482 19.8547 17.334V15.334C19.8547 12.7106 17.7281 10.584 15.1047 10.584C14.9961 10.584 14.9471 10.7242 15.0293 10.7953C15.4645 11.172 15.845 11.6103 16.1572 12.0965Z"
                    fill="#838383"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.10474 12.084C3.30981 12.084 1.85474 13.5391 1.85474 15.334V17.334C1.85474 17.7482 1.51895 18.084 1.10474 18.084C0.690523 18.084 0.354736 17.7482 0.354736 17.334V15.334C0.354736 12.7106 2.48138 10.584 5.10474 10.584H11.1047C13.7281 10.584 15.8547 12.7106 15.8547 15.334V17.334C15.8547 17.7482 15.5189 18.084 15.1047 18.084C14.6905 18.084 14.3547 17.7482 14.3547 17.334V15.334C14.3547 13.5391 12.8997 12.084 11.1047 12.084H5.10474Z"
                    fill="#838383"
                  />
                  <path
                    d="M12.9752 6.89146C13.0641 6.72238 13.2055 6.58734 13.3702 6.49049C14.1089 6.05607 14.6047 5.25293 14.6047 4.33398C14.6047 3.41504 14.1089 2.6119 13.3702 2.17748C13.2055 2.08063 13.0641 1.94559 12.9752 1.77651C12.7266 1.30409 12.4113 0.87225 12.0418 0.493522C11.9841 0.434359 12.022 0.333984 12.1047 0.333984C14.3138 0.333984 16.1047 2.12485 16.1047 4.33398C16.1047 6.54312 14.3138 8.33398 12.1047 8.33398C12.022 8.33398 11.9841 8.23361 12.0418 8.17445C12.4113 7.79572 12.7266 7.36388 12.9752 6.89146Z"
                    fill="#838383"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.10474 6.83398C9.48545 6.83398 10.6047 5.7147 10.6047 4.33398C10.6047 2.95327 9.48545 1.83398 8.10474 1.83398C6.72402 1.83398 5.60474 2.95327 5.60474 4.33398C5.60474 5.7147 6.72402 6.83398 8.10474 6.83398ZM8.10474 8.33398C10.3139 8.33398 12.1047 6.54312 12.1047 4.33398C12.1047 2.12485 10.3139 0.333984 8.10474 0.333984C5.8956 0.333984 4.10474 2.12485 4.10474 4.33398C4.10474 6.54312 5.8956 8.33398 8.10474 8.33398Z"
                    fill="#838383"
                  />
                </svg>
              </span>
            </a>
            <a
              className="flex lg:flex-row flex-col items-center group lg:py-[30px]"
              href="#"
            >
              <span className="relative text-white group-hover:text-[#E1E4E8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1047 13.584C11.4854 13.584 12.6047 12.4647 12.6047 11.084C12.6047 9.70327 11.4854 8.58398 10.1047 8.58398C8.72402 8.58398 7.60474 9.70327 7.60474 11.084C7.60474 12.4647 8.72402 13.584 10.1047 13.584ZM14.1047 11.084C14.1047 13.2931 12.3139 15.084 10.1047 15.084C7.8956 15.084 6.10474 13.2931 6.10474 11.084C6.10474 8.87485 7.8956 7.08398 10.1047 7.08398C12.3139 7.08398 14.1047 8.87485 14.1047 11.084Z"
                    fill="#838383"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.00945 1.92587L8.62189 3.08853C8.29511 4.06889 7.57802 4.76335 6.82686 5.18161C6.7628 5.21727 6.69939 5.25396 6.63662 5.29164C5.89796 5.73507 4.93664 6.00966 3.92302 5.80224L2.72125 5.55632C2.5104 5.51317 2.2956 5.60978 2.18799 5.79616L1.56701 6.87174C1.4594 7.05812 1.48313 7.29245 1.62592 7.45347L2.44095 8.37259C3.125 9.144 3.36996 10.1108 3.35631 10.9722C3.35513 11.0467 3.35513 11.1213 3.35631 11.1958C3.36995 12.0572 3.12499 13.0239 2.44095 13.7953L1.62592 14.7144C1.48313 14.8755 1.4594 15.1098 1.56701 15.2962L2.18799 16.3717C2.2956 16.5581 2.5104 16.6547 2.72125 16.6116L3.92294 16.3657C4.93657 16.1583 5.8979 16.4329 6.63657 16.8763C6.69935 16.914 6.76279 16.9507 6.82686 16.9864C7.57802 17.4046 8.29511 18.0991 8.62189 19.0794L9.00945 20.2421C9.0775 20.4463 9.26857 20.584 9.48379 20.584H10.7258C10.941 20.584 11.132 20.4463 11.2001 20.2421L11.5876 19.0794C11.9144 18.0991 12.6315 17.4046 13.3827 16.9864C13.4467 16.9507 13.5102 16.914 13.573 16.8763C14.3116 16.4329 15.273 16.1583 16.2866 16.3657L17.4882 16.6116C17.6991 16.6547 17.9139 16.5581 18.0215 16.3717L18.6425 15.2962C18.7501 15.1098 18.7264 14.8755 18.5836 14.7144L17.7686 13.7954C17.0845 13.024 16.8396 12.0572 16.8532 11.1958C16.8544 11.1213 16.8544 11.0467 16.8532 10.9721C16.8396 10.1107 17.0845 9.14395 17.7686 8.37253L18.5836 7.45347C18.7264 7.29245 18.7501 7.05812 18.6425 6.87174L18.0215 5.79617C17.9139 5.60978 17.6991 5.51317 17.4882 5.55632L16.2865 5.80223C15.2729 6.00966 14.3116 5.73506 13.5729 5.29163C13.5101 5.25395 13.4467 5.21727 13.3827 5.18161C12.6315 4.76335 11.9144 4.06889 11.5876 3.08853L11.2001 1.92587C11.132 1.7217 10.941 1.58398 10.7258 1.58398H9.48379C9.26857 1.58398 9.0775 1.7217 9.00945 1.92587ZM7.19887 2.61419C7.01662 3.16092 6.60065 3.59071 6.09714 3.87107C6.01882 3.91468 5.94129 3.95952 5.86457 4.00558C5.36987 4.30256 4.78902 4.44837 4.22374 4.33269L3.02197 4.08677C2.17858 3.91418 1.31938 4.30064 0.888954 5.04616L0.267973 6.12174C-0.162457 6.86726 -0.0675375 7.80458 0.503618 8.44868L1.31865 9.36779C1.70056 9.79848 1.86562 10.3728 1.8565 10.9484C1.85506 11.0387 1.85506 11.1292 1.85649 11.2195C1.86561 11.7951 1.70056 12.3694 1.31864 12.8001L0.503619 13.7192C-0.0675365 14.3633 -0.162457 15.3006 0.267973 16.0462L0.888954 17.1217C1.31938 17.8673 2.17858 18.2537 3.02197 18.0811L4.22366 17.8352C4.78894 17.7195 5.36981 17.8654 5.86451 18.1623C5.94125 18.2084 6.0188 18.2533 6.09714 18.2969C6.60065 18.5773 7.01662 19.007 7.19887 19.5538L7.58642 20.7164C7.85865 21.5331 8.62293 22.084 9.48379 22.084H10.7258C11.5866 22.084 12.3509 21.5331 12.6231 20.7164L13.0107 19.5538C13.1929 19.007 13.6089 18.5773 14.1124 18.2969C14.1907 18.2533 14.2683 18.2084 14.345 18.1624C14.8397 17.8654 15.4206 17.7196 15.9859 17.8352L17.1875 18.0811C18.0309 18.2537 18.8901 17.8673 19.3205 17.1217L19.9415 16.0462C20.3719 15.3006 20.277 14.3633 19.7059 13.7192L18.8909 12.8002C18.509 12.3695 18.3439 11.7951 18.353 11.2196C18.3545 11.1292 18.3545 11.0387 18.353 10.9484C18.3439 10.3728 18.509 9.79843 18.8909 9.36774L19.7059 8.44868C20.277 7.80458 20.3719 6.86727 19.9415 6.12174L19.3205 5.04617C18.8901 4.30064 18.0309 3.91419 17.1875 4.08677L15.9858 4.33269C15.4205 4.44836 14.8397 4.30255 14.345 4.00557C14.2682 3.95952 14.1907 3.91468 14.1124 3.87107C13.6089 3.59071 13.1929 3.16092 13.0107 2.61419L12.6231 1.45153C12.3509 0.634844 11.5866 0.0839844 10.7258 0.0839844H9.48379C8.62293 0.0839844 7.85865 0.634845 7.58642 1.45153L7.19887 2.61419Z"
                    fill="#838383"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;